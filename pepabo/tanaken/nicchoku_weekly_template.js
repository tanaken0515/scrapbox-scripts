(function() {
  const thisMonday = moment().day(1)
  const thisFriday = moment().day(5)
  
  const thisMondayString = moment(thisMonday).format("YYYY/MM/DD")
  const thisFridayString = moment(thisFriday).format("YYYY/MM/DD")
  const thisWeekTitle = `今週のSUZURI日直さん ${thisMondayString}~${thisFridayString}`
  
  const lastMondayString = moment(thisMonday).add(-7,"d").format("YYYY/MM/DD")
  const lastFridayString = moment(thisFriday).add(-7,"d").format("YYYY/MM/DD")
  const lastWeekTitle = `今週のSUZURI日直さん ${lastMondayString}~${lastFridayString}`
     
  const nextMondayString = moment(thisMonday).add(7,"d").format("YYYY/MM/DD")
  const nextFridayString = moment(thisFriday).add(7,"d").format("YYYY/MM/DD")
  const nextWeekTitle = `今週のSUZURI日直さん ${nextMondayString}~${nextFridayString}`
  
  // ここで返してるものがページのタイトルと本文になる
  return `
${thisWeekTitle}
#今週のSUZURI日直さん
SUZURIエンジニア日直へ依頼が来ている案件をリストアップしたページです
[todo.icon] = 対応予定, [spinner.icon] = 対応中, [done.icon] = 完了

[left arrow.icon] [${lastWeekTitle}][blank.icon*8][${nextWeekTitle}] [right arrow.icon]

[hr.icon]
[** ${moment().day(5).format("MM/DD(ddd)")}]

[hr.icon]
[** ${moment().day(4).format("MM/DD(ddd)")}]

[hr.icon]
[** ${moment().day(3).format("MM/DD(ddd)")}]

[hr.icon]
[** ${moment().day(2).format("MM/DD(ddd)")}]

[hr.icon]
[** ${moment().day(1).format("MM/DD(ddd)")}]

[hr.icon]
[** 先週からのバトン]

`
})()
