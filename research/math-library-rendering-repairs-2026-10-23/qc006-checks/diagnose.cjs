const fs=require('fs');
const {createRequire}=require('module');
const req=createRequire('/home/lazyinspirit/Projects/prestige-intelligence/web/package.json');
const mod=req('node-tikzjax');
const tex2svg=typeof mod==='function'?mod:mod.default;
const raw=fs.readFileSync('items/thm-qc-tqc-pentagon-coordinates.md','utf8');
const source=raw.match(/```tikzcd\n([\s\S]*?)```/)[1];
(async()=>{for(const [name,s] of [['original',source],['mathrm',source.replaceAll('\\operatorname{id}','\\mathrm{id}')]]){console.log('CASE '+name);try{const svg=await tex2svg('\\usepackage{amsfonts}\n\\usepackage{tikz-cd}\n\\begin{document}\n\\begin{tikzcd}\n'+s+'\\end{tikzcd}\n\\end{document}',{showConsole:true});fs.writeFileSync('research/math-library-rendering-repairs-2026-10-23/qc006-checks/'+name+'.svg',svg);console.log('SUCCESS')}catch(e){console.log('FAIL '+e.message)}}})();
