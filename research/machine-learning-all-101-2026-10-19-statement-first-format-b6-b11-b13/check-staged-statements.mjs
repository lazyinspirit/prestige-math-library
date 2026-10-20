import {readFileSync} from 'node:fs';
import {inspectStatement,statementRuntime} from '../../tools/statement-first.mjs';
const files=process.argv.slice(2);if(!files.length)throw Error('Explicit nonempty file scope required');
const {yaml}=await statementRuntime();const results=[];
for(const file of files){const raw=readFileSync(file,'utf8');const match=raw.match(/^---\n([\s\S]*?)\n---\n/);if(!match)throw Error('Missing frontmatter: '+file);const fm=yaml.parse(match[1]);results.push({file,id:fm.id,kind:fm.kind,errors:await inspectStatement(fm.id,fm.kind,raw.slice(match[0].length))});}
const errors=results.reduce((n,x)=>n+x.errors.length,0);console.log(JSON.stringify({basis:'Explicit native parser preparation only; no workflow gate or approval credit',files:files.length,errors,results},null,2));process.exit(errors?1:0);
