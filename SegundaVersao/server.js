const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

server.use(express.static("public"))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function(req, res){
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/38890065?s=460&u=1c03c2ec60d6b3f50e260177acaa2bf4ef563514&v=4",
    name: "Rodrigo da Rosa",
    role: 'Trabalho na <a href="https://secullum.com.br" target="_blank">Secullum Softwares</a>',
    description: "Tentando aprender algo",
    links: [
      {name: "Github", url: "https://github.com/RodrigoRosa7", image: "assets/github.png"}
    ]
  }

  return res.render("about", {about})
})

server.get("/portfolio", function(req, res) {
  return res.render("portfolio", {items: videos})
})

server.get("/conteudos", function(req, res) {
  return res.render("conteudos")
})

server.listen(5000, function() {
  console.log("server is running")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});