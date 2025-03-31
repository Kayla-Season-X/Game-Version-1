// Create an array of songs
// let randomSongs = "";
// let score = "";
const songs =[
    {
        name :"Song 1-",
        lyrics : "She used to meet me on the Eastside In the city where the sun don't setAnd every day you know that we ride Through the backstreets of a blue Corvette Baby, you know I just wanna leave tonight We can go anywhere we want...",
        answer : "Eastside",
        By: "Benny Blanco",
    },
    {
        name :"Song 2-",
        lyrics: "As you wind through the streets At the fabled bazaars With the cardamom-cluttered stalls You can smell every spice While you haggle the price Of the silks and the satin shawls Oh, the music that plays as you move through a maze In the haze of your pure delight You are caught in a dance You are lost in the trance Of another Arabian night",
        answer: "Arabian Nights",
        By: "Disney",
    },
    {
        name: "Song 3-",
        lyrics: "We made it very clear And they also said That we couldn't last together (last together) See it's very define You're one of a kind But you mash up my mind You haffi get declined Oh Lord My baby is driving me crazy You're way too beautiful girl That's why it'll never work",
        answer:"Beautiful Girls",
        By: "Sean Kingston",
    },
    {
        name: "Song 4-",
        lyrics: "Acting on your best behaviour Turn your back on Mother Nature Everybody wants to rule the world It's my own design It's my own remorse Help me to decide Help me make the Most of freedom and of pleasure Nothing ever lasts forever Everybody wants to rule the world",
        answer: "EveryBody Wants to Rule The World",
        By: "Tears for Fears",
    },
    {
        name: "Song 5-",
        lyrics: "When I'm walkin' with you I watch the whole room change Baby, that's what you do No, my baby, don't play (no) Blame it on my confidence Oh, blame it on your measurements Shut that shit down on sight That's right We out here drippin' in finesse It don't make no sense Out here drippin' in finesse You know it, you know it We out here drippin' in finesse It don't make no sense Out here drippin' in finesse You know it, you know it",
        answer:"Finesse",
        By: "Bruno Mars ft. Cardi B.",
    },
    {
        name: "Song 6-",
        lyrics:"What do you mean? Oh, oh When you nod your head yes, but you wanna say no What do you mean? Hey, yeah When you don't want me to move, but you tell me to go What do you mean? Oh, what do you mean? Said you're runnin' outta time, what do you mean? Oh, oh, oh, what do you mean? Better make up your mind, what do you mean?",
        answer:"What Do You Mean",
        By: "Justin Beiber",
    },
    {
        name: "Song 7-",
        lyrics:"Hey, Roman numeral seven, bae, drop it like it's hot If this world was mine, I'd take your dreams and make 'em multiply If this world was mine, I'd take your enemies in front of God Introduce 'em to that light, hit them strictly with that fire It's a vibe, do your dance, let 'em watch She a fan, he a flop, they just wanna kumbaya, nah In this world, concrete flowers grow Heartache, she only doin' what she know Weekends, get it poppin' on the low Better days comin' for sure (if this world were) If it was up to me I wouldn't give these nobodies no sympathy I'd take away the pain, I'd give you everything I just wanna see you win, wanna see (if this world were mine)",
        answer: "Luther",
        By: "Kendrick ft SZA", 
    },
    {
        name: "Song 8-",
        lyrics: " wish I found some better sounds no one's ever heard I wish I had a better voice that sang some better words I wish I found some chords in an order that is new I wish I didn't have to rhyme every time I sang I was told when I get older, all my fears would shrink But now I'm insecure, and I care what people think My name's Blurryface and I care what you think My name's Blurryface and I care what you think",
        answer: "Stressed Out",
        By: "Twenty One Pilots",
    },
    {
        name: "Song 9-",
        lyrics: "Hey! Now, nothing ever last forever, no One minute you're here and the next you're gone So I respect you, wanna take it slow I need a mental receipt to know this moment I owe Do you mind if I steal a kiss, tho? (Chop, chop) A little souvenir, can I steal it from you? To memorize the way you shock me The way you move it here (hey) Just wanna feel it from you (hey)",
        answer: "Feels",
        By: "Pharell Williams",
    },
    {
        name: "Song 10-",
        lyrics: "I don't care if it hurts, I wanna have control I want a perfect body, I want a perfect soul I want you to notice when I'm not around You're so ******' special, I wish I was special But I'm a creep, I'm a weirdo What the hell am I doin' here? I don't belong here Oh-oh, oh-oh She's runnin' out the door She's runnin' out She run, run, run, run Run",
        answer: "Creep",
        By: "Radio Head",
    },
    {
        name: "Song 11-",
        lyrics: "Found my heart and broke it here Made friends and lost them through the years And I've not seen the roaring fields in so long, I know I've grown But I can't wait to go home I'm on my way Drivin' at ninety down those country lanes Singin' to Tiny Dancer And I miss the way you make me feel and it's real We watched the sunset over the castle on the hill",
        answer:"Castle on The Hill",
        By: "Ed Sheeran",
    },
    {
        name: "Song 12-",
        lyrics: "Oh, no See you walkin' 'round like it's a funeral Not so serious, girl, why those feet cold? We just gettin' started, don't you tiptoe, tiptoe, ahWaste time with a masterpiece, don't waste time with a masterpiece (Huh) You should be rollin' with me, you should be rollin' with me (Ah-ah-ah) You're a real-life fantasy, you're a real-life fantasy (Huh) But you're movin' so carefully, let's start livin' dangerously",
        answer:"cake by the ocean",
        By:"DNCE",
    },
    {
        name: "Song 13-",
        lyrics: "Find light in the beautiful sea, I choose to be happy You and I, you and I, we're like diamonds in the sky You're a shooting star I see, a vision of ecstasy When you hold me, I'm alive, we're like diamonds in the sky I knew that we'd become one right away Oh, right away At first sight I felt the energy of sun rays I saw the life inside your eyes So shine bright, tonight, you and I",
        answer:"Diamonds",
        By: "Rihanna",
    },
    {
        name: "Song 14-",
        lyrics: "Love is a walk in the park That's how I feel at the start Pretty until it gets dark Love is a walk in the park 'Til you get bit by a dog I never knew you could bark When the seasons change You won't feel the same at all Because summer will turn into fall Then you'll leave me, you're gone You don't need me at all Like the trees in the autumn breeze It's ironic the way that you leave",
        answer: "This is what autumn feels like",
        By: "JVKE",
    },
    {
        name: "Song 15-",
        lyrics: "I wish you bluebirds in the spring To give your heart a song to sing And then a kiss, but more than this I wish you love And in July a lemonade To cool you in some leafy glade I wish you health and more than wealth I wish you love My breaking heart and I agree That you and I could never be So, with my best, my very best I set you free",
        answer: "I Wish You Love",
        By: "Laufey",
    },
    {
        name: "Song 16-",
        lyrics: "You lift my heart up When the rest of me is down ('Nother) You, you enchant me Even when you're not around ('Nother) If there are boundaries I will try to knock them down ('Nother) I'm latching on, babe Now I know what I have found ('Nother) 'Nother I feel we're close enough I wanna lock in your love I think we're close enough Could I lock in your love, baby? ",
        answer:"Latch",
        By: "Sam Smith",
    },
    {
        name: "Song 17-",
        lyrics: "You know you love me (yo), I know you care (uh-huh) Just shout whenever (yo), and I'll be there (uh-huh) You are my love (yo), you are my heart (uh-huh) And we will never, ever, ever be apart (yo, uh-huh) Are we an item? (Yo) girl, quit playin' (uh-huh) We're just friends (yo), what are you sayin'? (Uh-huh) Said, There's another (yo), and looked right in my eyes (uh-huh) My first love broke my heart for the first time, and I was like (yo, uh-huh)",
        answer:"Baby",
        By: "Justin Beiber",
    },
    {
        name: "Song 18-",
        lyrics: "Players, put yo' pinky rings up to the moonGirls, what y'all trying to do? Twenty four karat magic in the air Head to toe so player Look out, uh Pop pop, it's show time (show time)Show time (show time) Guess who's back again? Oh they don't know? (Go on tell 'em) Oh they don't know? (Go on tell 'em) I bet they know soon as we walk in (showin' up) Wearing Cuban links (ya) Designer minks (ya) Inglewood's finest shoes (whoop, whoop) Don't look too hard might hurt ya'self Known to give the color red the blues",
        answer: "24K",
        By: "Bruno Mars",
    },
    {
        name:"Song 19-",
        lyrics: " It might seem superficial Stereotypical, man You dress up just a little and I'm like, Oh, man So suddenly, I'm in love with a stranger I can't believe that she's mine Now all I see is you with fresh eyes, fresh eyes So suddenly, I'm in love with a stranger I can't believe that she's mine, yeah And now all I see is you with fresh eyes, fresh eyes",
        answer:"Fresh Eyes",
        By: "Andy Grammer",
    },
    {
        name: "Song 20-",
        lyrics:"I'm only one call away I'll be there to save the day Superman got nothing on me I'm only one call away Call me, baby, if you need a friend I just wanna give you love C'mon, c'mon, c'mon Reaching out to you, so take a chance No matter where you go You know you're not alone",
        answer:"One Call Away",
        By: "Charlie Puth",
    },
    {
        name:"Song 21-",
        lyrics:"[Intro: Tony Oller, Malcolm Kelley] Hey! Where's the drums? Woo, oh-oh-oh (Let's go!) Ooh, girl, you're shining like a 5th Avenue diamond And they don't make you like they used to, you're never going out of style Ooh, pretty baby, this world might have gone crazy The way you saved me, who could blame me when I just wanna make you smile? I wanna thrill you like Michael I wanna kiss you like Prince Let's get it on like Marvin Gaye, like Hathaway Write a song for you like this You're over my head, I'm out of my mind Thinking I was born in the wrong time One of a kind, living in a world gone plastic",
        answer:"Classic",
        By: "MKTO",
    },
    {
        name:"Song 22-",
        lyrics:"Baby are you down, down, down, down down? (Down, down) Even if the sky is falling down? (Down, down) You oughta know, tonight is the night to let it go Put on a show, I wanna see how you lose control So leave it behind 'cause we have a night to get away So come on and fly with me, as we make our great escape So baby don't worry, you are my only You won't be lonely, even if the sky is falling down You'll be my only, no need to worry Baby are you down, down, down, down, down? (Down, down) Baby are you down, down, down, down, down? (Down, down) Even if the sky is falling down?",
        answer: "Down",
        By:"Jay Sean",
    },
    {
        name:"Song 23-",
        lyrics: "It might seem crazy what I'm about to say Sunshine she's here, you can take a break I'm a hot air balloon that could go to space With the air, like I don't care baby by the way Because I'm happy Clap along if you feel like a room without a roof Because I'm happy Clap along if you feel like happiness is the truth Because I'm happy Clap along if you know what happiness is to you Because I'm happy Clap along if you feel like that's what you wanna do Here come bad news talking this and that Yeah, well, gimme all you got and don't hold back Yeah, well I should probably warn you I'll be just fine Yeah, no offense to you don't waste your time Here's why",
        answer:"Happy",
        By: "Pharell Williams",
    },
    {
        name:" Song 24-",
        lyrics : "Oh, when you walk by every night Talking sweet and looking fine I get kinda hectic inside Mmm, baby I'm so into you Darling, if you only knew All the things that flow through my mind But it's just a sweet sweet fantasy baby When I close my eyes You come and you take me It's so deep in my daydreams But it's just a sweet, sweet fantasy baby Images of rapture Creep into me slowly As you're going to my head And my heart beats faster When you take me over Time and time and time again",
        answer:"Fantasy",
        By: "Mariah Carey",
    },
    {
        name:"Song 25-",
        lyrics:"Do you ever feel like a plastic bag Drifting through the wind, wanting to start again? Do you ever feel, feel so paper thin Like a house of cards, one blow from cavin' in? Do you ever feel already buried deep? Six feet under screams, but no one seems to hear a thing Do you know that there's still a chance for you? 'Cause there's a spark in you You just gotta ignite the light And let it shine Just own the night Like the Fourth of July",
        answer:"Firework",
        By:"Kate Perry",
    },
];
// console.log(randomSong);
let artist = "";
let by = "";

let  nameAnswer = document.getElementById('nameAnswer');
let lyricsAnswer = document.getElementById('lyricsAnswer');

// display the questions
function startGame(){

    let randomSong= songs[Math.floor(Math.random()* songs.length)];

    console.log(songs);

    const container= document.getElementById('results');
    console.log(container)
    container.innerHTML=`
    <p>${randomSong.name}<p>
    <p>${randomSong.lyrics}</p>
    `;
    document.getElementById('results').style.overflow = "auto";
    artist = randomSong.answer.toLowerCase();
    console.log(artist);
    by = randomSong.By.toLowerCase();
    console.log(by);
}
score = 0;
tries = 0;
//get the user input
function sumbitAnswer(){

    const nameAnswer = document.getElementById('nameAnswer');
    const lyricsAnswer = document.getElementById('lyricsAnswer');
    const userAnswer = nameAnswer.value.toLowerCase();
    const userInput = lyricsAnswer.value.toLowerCase();
    console.log(userAnswer);
    console.log(userInput);
    const display= document.getElementById('inputReview');
    display.innerHTML = `
    <p></p>
    `
    if (artist === userAnswer && by === userInput){
        const container= document.getElementById('results');
        score = score + 200;
        tries = tries + 1;
        container.innerHTML = `
        <div class="userCorrect">
        <h2>Congradulations You Got The Song Right</h2>
        <button onclick="nextQuestion()">Press to go to the next question</button>
        `;

        console.log(score);
        console.log(tries);
    }
    else {
        const display= document.getElementById('inputReview');
        display.innerHTML = `
        <p>
        **INCORRECT**
        </p>
        <button onclick="giveup()">Give Up?</button>
        `;
    }
}
function giveup(){
    const display= document.getElementById('inputReview');
    display.innerHTML=
    `
    <p>${artist} , ${by}</p>
    `
}
function nextQuestion(){
    randomSong=null;
    startGame();
}


// add a timer to the display
setInterval(timeStamp, 1000);
setTimeout(endofGame, 900000);
function endofGame(){
    if(score >= 7000){
        const container= document.getElementById('results');
        container.innerHTML = `
        <div class = "endofGame">
        <h2>The Game Is Complete<h2>
        <h2>You Won</h2>
        <p> Your score is: ${score}</p>
        <p> And completed this many songs: ${tries}</p>
        <button onclick = "storyLine()">You have unlocked the rest of the story!</button>
        <button onclick = "clearDisplay()">Play Again<button>
        </div>
        `;
    }
    else{
        const container= document.getElementById('results');
        container.innerHTML = `
        <div class = "endofGame2">
        <h2>The Game Is Complete<h2>
        <h2>Sadly you didn't meet the requirments to win</h2>
        <p> Your score is: ${score}</p>
        <p> And completed this many songs: ${tries}</p>
        <button onclick = "clearDisplay()">Play Again<button>
        </div>
        `;
    }

}
function storyLine(){
    const container= document.getElementById('results');
        container.innerHTML = `
        <div class = "storyline">
        <p>🎉🎊You have saved the bear. All the hunters were slain in combat due to your incredible song guessing. The bear was able to go back to his family. His family thanks you for your bravery and wishes you well. Good job!! 😃🎉🎊</p>
        <button onclick = "clearDisplay()">Play Again<button>
        <img class="bear" src = "bear.png">
        </div>
        `;
}
function timeStamp(){
    const date = new Date();
    document.getElementById('timer').innerHTML = date.toLocaleTimeString();

}
function clearDisplay(){
    window.location.reload();
}
// randomize the questions 