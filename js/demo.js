let str = `
{% card 永劫无间,https://www.yjwujian.cn/,https://img2.doubanio.com/lpic/s34259482.jpg,4,游戏是个好游戏，运营团队就另说了。,fa-solid fa-gamepad,端游 %}
{% card 暖雪手游,https://game.bilibili.com/warmsnowapp/,https://gimg0.baidu.com/gimg/src=https%3A%2F%2Fgameplus-platform.cdn.bcebos.com%2Fgameplus-platform%2Fupload%2Ffile%2Fsource%2F39e6c800f1004662d0580f4101044505.jpeg&app=2000&size=f260,5,挺好玩的单机手游，前两章免费后面收费。不建议买，目前东西比较少不划算。,fa-solid fa-gamepad,手游 %}
`

let ls = str.match(/{%.*%}/g).map(i => i.replace(/{%\s*card(.*)\s*%}/g, '$1')),
    text = ''
ls.forEach(i => {
    let tmp = i.split(',')
    text += `
    - name: ${tmp[0].trim()}
      img: ${tmp[2].trim()}
      score: ${tmp[3].trim()}
      icon: ${tmp[5].trim()}
      tip: ${tmp[6].trim()}
    `
})
console.log(text);