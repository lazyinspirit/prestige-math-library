const {createRequire}=require('node:module');
const fs=require('node:fs');
const req=createRequire('/home/lazyinspirit/Projects/prestige-intelligence/web/package.json');
const tex2svg=req('node-tikzjax').default;
const raw=fs.readFileSync('items/thm-internal-external-semidirect-product-equivalence.md','utf8');
const source=raw.split('```tikzcd\n')[1].split('```')[0];
tex2svg('\\usepackage{amsfonts}\n\\usepackage{tikz-cd}\n\\begin{document}\n'+source+'\n\\end{document}',{showConsole:true}).then(x=>fs.writeFileSync(__dirname+'/compiled.svg',x)).catch(e=>{console.error(e);process.exitCode=1});
