import {readFileSync,writeFileSync} from 'node:fs';
import {inspectStatement} from '../../tools/statement-first.mjs';
const base=new URL('./',import.meta.url), report=JSON.parse(readFileSync(new URL('report.json',base),'utf8'));
const results=[];
for(const row of report.rows){
 const source=readFileSync(row.proposed,'utf8');
 const [,fm,body]=source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
 const kind=fm.match(/^kind:\s*(\S+)/m)[1];
 results.push({id:row.target.replace('items/','').replace('.md',''),errors:await inspectStatement(row.target,kind,body)});
}
const errors=results.flatMap(x=>x.errors);
const value={checker:'unmodified tools/statement-first.mjs inspectStatement',scope:results.length,errors,results,native_gate_credit:false};
writeFileSync(new URL('statement-parser.json',base),JSON.stringify(value,null,2)+'\n');
console.log(JSON.stringify({scope:results.length,errors}));
if(errors.length)process.exitCode=1;
