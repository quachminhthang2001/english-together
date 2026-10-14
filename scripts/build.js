const fs = require('fs');
const path = require('path');
const sections = [
  {id:'pronunciation-and-intonation', name:'Pronunciation and Intonation'},
  {id:'common-words', name:'Common Words'}
];
const output = sections.map(section => {
  const days = [];
  const base = path.join(process.cwd(),section.id);
  if(fs.existsSync(base)) {
    for(const folder of fs.readdirSync(base).filter(n=>/^day-\d+$/.test(n)).sort((a,b)=>Number(a.slice(4))-Number(b.slice(4)))) {
      const files = fs.readdirSync(path.join(base,folder)).filter(n=>/\.(mp3|m4a|wav|ogg)$/i.test(n)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
      if(files.length) days.push({number:Number(folder.slice(4)),files:files.map(name=>({name,src:[section.id,folder,name].map(encodeURIComponent).join('/')}))});
    }
  }
  return {...section,days};
});
fs.writeFileSync('manifest.json',JSON.stringify(output,null,2));
console.log('Generated manifest.json');
