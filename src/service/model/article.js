let articles = []
for(let i=0; i<10; i++){
	articles.push({
		title: 'xxxx' + i,
		link: `asdlfjlk` + i
	})
}
export const getArticle = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(articles)
		}, 3000)
	})
}