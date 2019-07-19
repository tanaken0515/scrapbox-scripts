addTemplateItemsToPageMenu()

function addTemplateItemsToPageMenu() {

  // テンプレートメニューの定義ここから ---------- 
  const __templates = [
    { title: '📄 週報テンプレート', template: '/api/code/pepabo/tanaken/weekly_template.js' }
  ]
  // テンプレートメニューの定義ここまで ----------
  
  const __templMenuTitle = 'Templates'
  scrapbox.PageMenu.addMenu({ title: __templMenuTitle, image: '/assets/img/logo.png', onClick: () => { } })
  __templates.forEach((i) => {
      scrapbox.PageMenu(__templMenuTitle).addItem({ 
          title: i.title,
          onClick: () => { __loadTemplate(i.template) }})
  })
  var __loadTemplate = function (templateUrl) {
    if (scrapbox.Page.lines && scrapbox.Page.lines.length == 1) {
      
      // タイトル行をクリックしたことにする
      const line = document.getElementById('L' + scrapbox.Page.lines[0].id)
      const lastChar = $(line).find('span[class^="c-"]').last().get(0)
      __mimicClick(line.id, line.offsetWidth, lastChar.offsetTop + 10)
      
      // テンプレートを読み込む
      $('#text-input').load(templateUrl, function (response, status, xhr) {
        if (status == "success") {
          try {
            // 読み込んだテンプレートをテキストエリアにセットしまして
            const textarea = document.getElementById('text-input')
            textarea.value = /\.js$/.test(templateUrl) ? eval(response) : response
            
            // テキストエリアのinputイベントを出しまして
            const event = document.createEvent('Event')
            event.initEvent('input', true, true)
            textarea.dispatchEvent(event)
            
            // 選択状態を解除したいのでもう1回クリックしとく
            __mimicClick(line.id, line.offsetWidth, lastChar.offsetTop + 10)
          } catch (ex) {
            console.log("だめでした>< \n" + ex)
          }
        } else {
          console.log("だめでした>< \n" + status)
        }
      })
    }
  }
  
  const __mimicClick = (targetId, left, top) => {
    const genEvent = type => { 
      const event = document.createEvent("MouseEvents")
      event.initMouseEvent(type, true, true, window, 1, 0, 0, 
          left, top, false, false, false, false, 0, null)
      return event
    }
    
    const elm = document.getElementById(targetId)
    elm.dispatchEvent(genEvent("mousedown"))
    elm.dispatchEvent(genEvent("mouseup"))
    elm.dispatchEvent(genEvent("click"))
  }
}
