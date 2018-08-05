const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', function() {
    console.log("Im Ready !");

    bot.user.setActivity('Nintendogs').catch(console.error)
});

//var allowedUsers = [];

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!help') {
            message.channel.send('mdr non');
        }
    }
    if(message.content[0] === PREFIX) {
        if(message.content === '!speee') {
            message.channel.send('<@!339726707709837313> ?');
        }
    }
 
        if(message.content.toLowerCase().includes("maja")) {
            message.react('🇷🇸');
    }
    if(message.content.toLowerCase().includes("iness")) {
        message.react('🇩🇿');
}
/*if(!message.content.toLowerCase().includes("iness")) {
    message.react('🐕');
}*/

if(message.content === '!salsa') {
    var member= 246050415987130368
    member.kick().then((member));
 
}

if(message.content === '!nouv') {
    for(var i = 0; i<100; i++)
    message.channel.send('je déteste les <@&407981583526658050>');
}

/*if(message.content.toLowerCase().includes("ever")){
    message.channel.send("\@everyone");
}*/

/*if(message.content.toLowerCase().includes("sex")) {
    message.channel.send('🇸🇪🇽');
}*/


if(message.content.toLowerCase().includes("cheese") && !message.content.toLowerCase().includes("cake")) {
    message.react("🇨");
    message.react("🇦");
    message.react("🇰");
    message.react("🇪");
}
if(message.content.toLowerCase().includes("skadii")) {
    message.react("🇱");
    message.react("🇵");
    message.react("🇧");
}
/*if(message.content.toLowerCase().includes("sals")) {
    message.react("🇦");
    message.react("🇧");
    message.react("🇮");
    message.react("🇱");
}*/
if(message.content === 'doc') {
    message.channel.send('https://gitlab.com/Roserub/DOCUMENTATION_ROLES_CHIBRETON/blob/master/README.md');
}

if(message.content.startsWith("dk type")){
    var str = message.content
    message.delete()
    str = str.replace('dk type ','')
    message.channel.send(str)
}

if(message.content === '!ppp') {
    message.channel.send('Bonjour et bienvenue sur Le Serveur Cozy ! \nCe serveur est fait pour tout le monde, les gamerz, les parleurz et tout\nN\'hésitez pas à choisir vos rôles et check le réglement ci dessous 😃');
}
if(message.content === '!mmm') {
    message.channel.send( 'Vous pouvez dès à présent poster votre candidature pour être animateur/membre du staff\nIMPORTANT : il y aura des concours pour gagner du premium sur lg et autres à partir de 300 membres, c\'est donc important de rendre ce serveur actif et agréable 😂👌');
}
if(message.content === '!asavoir') {
    message.channel.send( 'À SAVOIR \: Toute décision définitive est prise par le créateur\. Toutes décisions prises par les admins sont provisoires en attente de la réponse du créateur\. Le règlement n’est pas seulement applicable pour les membres mais aussi pour les admins\.');
}
if(message.content === '!fff') {
    message.channel.send( 'méttaient vos roles dans le salon choississaient vos role');
}

/*var i = 0;
if(message.content.toLowerCase().includes("\@everyone ok je suis vnr")&& i === 0) {
    message.channel.send("\@everyone ok je suis vnr");
}
if(message.content.toLowerCase().includes("calme") && i === 0) {
   
    message.reply("wouaf");
   i = 1;
}*/

/*if(message.content.toLowerCase().includes("nutella")) {
    var i = Math.floor(Math.random() *3)
    switch (i) {
     case 0:
     message.reply("ok tu veux quoi")
         break
     case 1:   
     message.reply("ne me parle pas je ss pas ton pote")
         break
     case 2:   
     message.reply("parle en face tu sais pas qui chui")
         break         
}        
}*/
/*if(message.content === 'Coco') {
    message.react('460543610065125377');
}*/
if(message.content.toLowerCase().includes("nutella") && !message.content.toLowerCase().includes("lets")) {
    if(message.content.toLowerCase().includes("aime") || message.content.toLowerCase().includes("jtm"))
    {
        message.reply('je t\'aime aussi ❤');
    }
    message.react('💖');
}


if(message.content === '!mbp') {
    message.channel.send('https://discord.gg/fcQsxHb');
}

if(message.content === '!hhh') {
    message.channel.send('oui #réglement oui');
}

if(message.content.toLowerCase().includes("\@everyone")) {
    var i = Math.floor(Math.random() *10)
    if(i > 3)
    message.reply('your mother the dog with your everyone');
}
if(message.content.toLowerCase().includes("pouah") && !message.content.toLowerCase().includes("lets")) {
    message.channel.send('lets go');
}

/*if(message.content.toLowerCase().includes("permis")) {
    message.reply('Pk tu mens tas juste le permis pieton');
}*/
    if(message.content === '\@Nutella#2001') {
    message.reply('Dont @ me you stupid idiot');
    }
    if(message.content[0] === PREFIX) {
        if(message.content === '!Sombre') {
            message.channel.send(' BAISE TA MERE SOMBRE CHOCOLAT');
        }
    }
    if(message.content[0] === PREFIX) {
        if(message.content === '!serbie') {
            message.channel.send(':flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: :flag_rs: ');
        }
    }
    
    if(message.content === '!n') {
        message.delete()
        message.channel.send('qui est Nutelladdict ici ?');
    }
    


if(message.content.toLowerCase().includes("!pashou")) {
    message.channel.send("un jour on m a demandé la raison de mon sourire, j ai répondu que c était toi ,lucas, je sais que pour toi je ne suis qu une simple fan parmis tant d autre , mais, est ce que les autres fan t aiment autant que moi  impossible, tu es comme une partie de moi, cette amour me détruit et me rends heureuse en même temps étrange non et pourtant ,tu auras beau avoir un corps de lâche 0pourcent de virilité une coiffure toujours râte tu seras toujours parfait à mes yeux celui qui me fais vivre celui qui a redonner un sens au mot aimer tu ne veras sans doute jamais ce texte mais je taime, je t aime d un amour indescriptible ,gravé à jamais SQUEEZIE, by Pashou ");
}

    if(message.content.toLowerCase().includes("maroc")) {
            message.channel.send('D\'après une étude : 212>213');
        }
    
    if(message.content[0] === PREFIX) {
        if(message.content === '!gwada') {
            message.channel.send(':eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant: :eggplant:');
        }
    }
    
    if(message.content[0] === PREFIX) {
        if(message.content === '!issa') {
            message.channel.send('https://lehollandaisvolant.net/img/6c/black-hole.png');
        }
    }


    if(message.content.toLowerCase().includes("!clip")) {
        var i = Math.floor(Math.random() *10)
        switch (i) {
         case 0:
             message.channel.send("https://clips.twitch.tv/GrotesqueCrackyPlumagePoooound")
             break
        case 1:
             message.channel.send("https://clips.twitch.tv/DeadShortLorisHotPokket")
             break
        case 2:
             message.channel.send("https://clips.twitch.tv/DignifiedCloudyPrariedogPunchTrees")
             break  
        case 3:
             message.channel.send("https://clips.twitch.tv/ModernFilthyApeKappaRoss")
             break
        case 4:
             message.channel.send("https://clips.twitch.tv/MildBusySpaghettiBabyRage")
             break  
        case 5:
             message.channel.send("https://clips.twitch.tv/ZanyTransparentMoonJebaited")
             break  
        case 6:
             message.channel.send("https://clips.twitch.tv/FunnySavageCrowDatSheffy")
             break  
        case 7:
             message.channel.send("https://clips.twitch.tv/SucculentTacitWaspOSsloth")
             break   
        case 8:
             message.channel.send("https://clips.twitch.tv/TriangularPiliableHornetBatChest")
             break   
        case 9:
             message.channel.send("https://clips.twitch.tv/TsundereCovertPidgeonKAPOW")
             break   
        
    
        }
        }

      /*  if(message.content.toLowerCase().includes("shekeel")){
            
          //  var shekels = Math.floor(Math.random()*99 +1 )
            message.channel.send(`You rolled  shekels !`)
         
                allowedUsers.push(message.author.id);
          
        }*/
        
     /*   if(message.content.toLowerCase().includes("buy")){
            if(!allowedUsers.includes(message.author.id)){

                return message.channel.send("You did not roll 49 or above so you cannot use this command.");
            }
            else{
                message.channel.send("here ");
            }
        }*/

    if(message.content.toLowerCase().includes("phrase") || message.content.toLowerCase().includes("coucou")|| message.content.toLowerCase().includes("salut")|| message.content.toLowerCase().includes("bonjour") || message.content.toLowerCase().includes("salam")) {
       var i = Math.floor(Math.random() *42)
       switch (i) {
        case 0:
            message.channel.send("aujourd'hui ses mon anniversaire le gars")
            break
        case 1:   
            message.channel.send("je reviens xaxaxaxaxaxaxaxa")
            break
        case 2:   
            message.channel.send("xaxaxaxa jpp chérie")
            break         
        case 3:   
            message.channel.send("Geo est ma confidente")
            break     
        case 4:   
            message.channel.send("CAR JE NE FAIS PAS DANS L'HOMOSEXUELLERIE DSL")
            break   
        case 5:   
            message.channel.send("Excusez moi j'ai une question")
            break 
        case 6:   
            message.channel.send("URG URG")
            break 
        case 7:   
            message.channel.send("ah mai vous etes arabe STYLE")
            break 
        case 8:   
            message.channel.send("attendez je pisse du sang la")
            break  
        case 9:   
            message.channel.send("j'étais en soirée a dam et un ami bourré est tombé dans le canal avec son vélo après la boite on a du le repecher avec plein de gens et les flics sont venus 😔 ")
            break    
        case 10:   
            message.channel.send("Si j'vais à Quimper y'aura une grosse chienne qui voudra m'exploser, une grosse grosse moche qui veut me dépuceler, jte jure")
            break  
        case 11:   
            message.channel.send("Moi j'suis technique avec ma langue, pas avec les lettres")
            break   
        case 12:   
            message.channel.send("attendez je pisse du sang la")
            break   
        case 13:   
            message.channel.send("je pense que")
            break   
        case 14:   
            message.channel.send("BAISE TA MERE SOMBRE CHOCOLAT")
            break   
        case 15:   
            message.channel.send("D\'après une étude : 212>213")
            break   
        case 16:   
            message.channel.send("oui j’aime le sexe et les bites des enfants d’Afrique")
            break   
        case 17:   
            message.channel.send("Jss terroriste c ta mère que j'explose")
            break  
        case 18:   
            message.channel.send("TU EXAGERES ET JE VAIS TE DIRE POURQUOI")
            break  
        case 19:   
            message.channel.send("ptn ieremias j'ai baisé avec mon plan cul dans les toilettes de la soirée et un homme qui avait envie de faire la grosse commission n'a pas pu la faire car on a fermé a clé et il s'est fait caca dessus xaxaxaxaxaxaxaxa")
            break  
        case 20:   
            message.channel.send("le pire c'est les pet quand ta envie de chier psk ta l'impression que c'est le  cri de ton caca enfermer")
            break  
        case 21:   
            message.channel.send("Si l'on me proposait entre l'argent et le sexe je choisirai la richesse car la monnaie est le plus beau des vagins")
            break  
        case 22:   
            message.channel.send("Tout tchatcheur sachant tchatcher sait tchatcher sans s'attacher")
            break  
        case 23:   
            message.channel.send("Chie dur, chie mou, mais chie dans le trou")
            break  
        case 24:   
            message.channel.send("Ok les amis")
            break  
        case 25:   
            message.channel.send("elle est où channara")
            break  
        case 26:   
            message.channel.send("<@!405471894951952414> ?")
            break  
        case 27:   
            message.channel.send("Eske tu fais du taekendo Simohammed")
            break  
        case 28:   
            message.channel.send("\@everyone qui veut un serv urg")
            break   
        case 29:   
            message.channel.send("El lanque d’eune femme et l’queue d’un quien, cha berloque toudis")
            break      
        case 30:   
            message.channel.send("être radin est un pire défaut")
            break  
        case 31:   
            message.channel.send("vous dites ?")
            break  
        case 32:   
            message.channel.send("Alors déjà c'est pas du chinois c'est du kendji ")
            break    
        case 33:   
            message.channel.send(" Je suis membre fondateur d'une association on a organisé une soirée")
            break 
        case 34:   
            message.channel.send("Slt c'est Lizarazu eske je peux manger avc vous")
            break 
        case 35:   
            message.channel.send("moi en grece je volais les gomme de ma maitresse parce qu'elle étaient blanches et quand je rentrais chez moi je pleurais car je regrettais")
            break 
        case 36:   
            message.channel.send("J'étais dans une piscine mais y'avait pas d'eau, mais j'ai quand même nagé.")
            break   
        case 37:   
            message.channel.send("confondre identité de genre et expression de genre")
            break  
        case 38:   
            message.channel.send("KYLIAN MBAPPPPPPPPÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ")
            break  
        case 39:   
            message.channel.send("Jai fait une crise de panique car je pense quils arrivent pour foutre la merde...")
            break   
        case 40:   
            message.channel.send("J\’ai trois sexes on m’appelle Triobite")
            break  
        case 41:   
            message.channel.send("C’est comme si j’avais pas mes règles quand je fais du skate avec un tampax")
            break  

  }        
    }
});

bot.login(process.env.nutellaaaaa) //token