const tmi = require('tmi.js');
const ccxt = require('ccxt');
const prompts = require('prompts');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'channel',
    password: 'oauth:xxxxxxxxxxxxx'
  },
  channels: ['xxxxxxxx']
});

client.connect();

client.on('connected',(address,port,channel) => {
	console.log(`Connected to address ${address} and the port: ${port}`);
    // console.log(channel,' pedproBot has connected!');
    // client.action('Pedpro','Turn on pedproBot');
});


client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  // console.log(`${tags['display-name']}: ${message}`);
  
  if(self === "myhost"){
    client.say(channel,message)
  }
  
  // if(self)return
  
  if(message === '1'){
    client.say(channel, "ว่าไง KUB KUB KUB น้องงงงงงงงงงง ");
  }

  if(message.toLowerCase() === '!hello') {
    client.say(channel, `@${tags.username}, Yo what's up`);
  }

  if(message.toLowerCase() === 'สวัสดีครับ') {
    client.say(channel, `@${tags.username}, สวัสดีครับ`);
  }

  if(message.toLowerCase() === 'สวัสดีค่า') {
    client.say(channel, `@${tags.username}, สวัสดีคครับผม`);
  }

  if(message.toLowerCase() === 'ทำอะไรครับ') {
    client.say(channel, `@${tags.username}, สร้างโปรแกรมกาก ๆ อยู่นี้ละเผื่อคนดูจะสนุก`);
  }
  
  if(message.toLowerCase() === 'พี่ทำอะไรครับ') {
    client.say(channel, `@${tags.username}, ใครพี่คุณครับ ผมอยากทำอะไรก็ทำ เรื่องของผมมมมมม`);
  }

  if(message.toLowerCase() === 'fuckyou') {
    client.say(channel, `@${tags.username}, fuck youuuu Momtherrrrrr !!!`);
  }

  if(message.toLowerCase() === 'พี่ครับทำอะไรครับ') {
    client.say(channel, `@${tags.username}, ใครพี่คุณครับ ผมอยากทำอะไรก็ทำ เรื่องของผมมมมมม`);
  }
  if(message.toLowerCase() === 'พี่ทำไรครับ') {
    client.say(channel, `@${tags.username}, อยากใส่คอนเวิดดดดดด ไปแตะะะะะะะะะะะ หน้าๆๆๆๆๆๆ มำ มำม ำ`);
  }

  if(message === 'What do you do ?') {
    client.say(channel, `@${tags.username}, ทำไไรก็เรื่องของผม อยากใส่คอนเวิดไปแตะหน้ามึงงงงงง`);
  }

  if(message.toLowerCase() === '5555') {
    client.say(channel, `@${tags.username}, หัวเราะหา พ่องงงงงงง`);
  }

  if(message.toLowerCase() === '1900') {
    client.say(channel, `@${tags.username}, เทพธิดาพยากรณ์ยินดีให้บริการค่ะ`);
  }
  
  if (message == '!time') {
    let time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
    client.say(channel, `เวลาขีวิตผม ณ ตอนนี้ ${time}`);
    return;
  }
  if (message == '!porn'){
    client.say(channel, `เจริญพร เถอะลูก ฮ่า ๆๆๆ เค้าแบนไปหมดแล้ว ต้อง มุดดินเอานะครับ`);
  }

});


(async () => {
  while(1){
      const response = await prompts({
        type: 'text',
        name: 'meaning',
        message: 'ans :'
      });
  
      client.emit("message","#pedpro",{ 'display-name' : "pedpro"},response.meaning,"myhost")
  }
  })();
