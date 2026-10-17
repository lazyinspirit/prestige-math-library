// Reproduction recipe only; existing preview is never overwritten.
import fs from 'node:fs';
import {sourceSectionText,splitFrontmatter} from '../tools/facts-block.mjs';
const R='numerical-optimization-dynamics-2026-10-16',dir=`research/${R}-rootonly-metadata-77-data`,file=`${R}-batch-77.proof-contracts.json`;
if(fs.existsSync(dir))throw Error('Preview exists; refusing overwrite');
for(const d of ['before','proposed','sources'])fs.mkdirSync(`${dir}/${d}`,{recursive:true});
const raw=fs.readFileSync(`research/${file}`),doc=JSON.parse(raw),source=fs.readFileSync('items/alg-mgrit-two-level-cycle.md'),quote=sourceSectionText(splitFrontmatter(source.toString()).body,'Definition').trim(),changes=[];
for(const id of ['thm-mgrit-contraction-implies-residual-and-error-decay','ex-mgrit-scalar-diffusion-two-grid-contraction'])for(const[i,c]of doc.contracts[id].citations.entries())if(c.source==='alg-mgrit-two-level-cycle'&&c.quote!==quote){changes.push({locus:`research/${file}#/contracts/${id}/citations/${i}/quote`,before:c.quote,after:quote});c.quote=quote;}
if(changes.length!==2)throw Error('Unexpected quote inventory');
fs.writeFileSync(`${dir}/before/${file}`,raw);fs.writeFileSync(`${dir}/proposed/${file}`,JSON.stringify(doc,null,2)+'\n');
const guards=['items/alg-mgrit-two-level-cycle.md','items/alg-mgrit-multilevel-recursive-cycle.md'];for(const p of guards)fs.writeFileSync(`${dir}/sources/${p.slice(6)}`,fs.readFileSync(p));
fs.writeFileSync(`${dir}/preview.json`,JSON.stringify({run:R,purpose:'ROOTONLY minimal source-quote mirrors; no mathematical acceptance',files:[`research/${file}`],changes,source_guards:guards,note:'Current two-level Definition/work-model quotes only; recursive algorithm has no metadata quote consumer. No derivation, input or manifest change required.'},null,2)+'\n');
console.log('Prepared exactly two current Definition quotes; create changes.diff and inspect before root-only application.');
