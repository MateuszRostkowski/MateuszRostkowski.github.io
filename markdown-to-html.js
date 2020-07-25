const glob = require('glob-promise')
const fs = require('fs')
const path = require('path')
const marked = require('marked')

function getHtmlName(mdName) {
    const pattern = /(blog\/)([0-9]+-)(.*\.)/g
    const groups = pattern.exec(mdName)
    const fileName = groups[3].split('.').join('')
    console.log(`<a href="./${fileName}">${fileName.split("-").join(" ")}</a>`)
    const pathToCreate = groups[1] + fileName
    if(!fs.existsSync(pathToCreate)) {
        fs.mkdirSync(pathToCreate, { recursive: true })
    }
    return path.join(__dirname, `${groups[1]}${fileName}/index.html`)
}

function getHtml(pathToPost) {
    const mdContent = fs.readFileSync(path.join(__dirname, pathToPost), {
        encoding: 'utf-8',
    })
    return marked(mdContent)
}

function injectToTemplate(html) {
    const template = fs.readFileSync(path.join(__dirname, 'blog/__post_template__.template'), {
        encoding: 'utf-8',
    })
    return template.replace('@@CONTENT@@', html)
}

;(async () => {
    const posts = await glob('blog/*.md')
    posts.forEach((pathToPost) => {
        const html = getHtml(pathToPost)
        const wrappedHtml = injectToTemplate(html)
        const htmlFileName = getHtmlName(pathToPost)
        fs.writeFileSync(htmlFileName, wrappedHtml, { encoding: 'utf-8' })
    })
})()