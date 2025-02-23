

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://nakhunux:mongodb@cluster0.ydey4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Public Lavalink v4 NonSSL",
      password: "enteryourcustompass",
      host: "lava-ve.ajieblogs.eu.org",
      port:  80,
      secure: false
    }
  ]
}
