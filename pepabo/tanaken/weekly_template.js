(function() {
  const thisWeekStartDay = moment().day(0).format("YYYY/MM/DD")
  const lastWeekStartDay = moment().day(0).add(-7, "d").format("YYYY/MM/DD")
  const nextWeekStartDay = moment().day(0).add(7, "d").format("YYYY/MM/DD")
  const d = moment().day(0).add(7, "d")
  
  // ここで返してるものがページのタイトルと本文になる
  return `
weekly tanaken ${thisWeekStartDay}~
[left arrow.icon] [weekly tanaken ${lastWeekStartDay}~][blank.icon*21][weekly tanaken ${nextWeekStartDay}~] [right arrow.icon]
#weekly_report #weekly_tanaken

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** ${d.add(-1, "d").format("MM/DD(ddd)")}]
[* 天気] そと= カラダ= こころ=
[* やること]

[* ログ]

[hr.icon]
[** 先週の宿題]

`
})()
