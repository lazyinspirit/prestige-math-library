// Read-only compatibility for the original V2 producer, which omitted the
// legacy fatal category. Never infer a mathematical category from prose.
import {readFileSync} from 'node:fs';
import {join, resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';
import {MODELS} from './models.mjs';

export const FATAL_TYPES = ['logic', 'dependency_citation', 'other'];
const hash = text => createHash('sha256').update(text).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const tuple = row => `${row.id}\0${row.model}\0${row.context_sha256}`;

export function adjudicationTypeResolver(root) {
  root=resolve(root);
  const cache=new Map();
  return record => {
    if(FATAL_TYPES.includes(record.defect_type))return record.defect_type;
    if(Object.hasOwn(record,'defect_type') || record.outcome!=='confirmed_fatal'
      || !/^[A-Za-z0-9._-]+$/.test(record.run??'')
      || !['initial','repeat'].includes(record.step5_phase)
      || !Number.isSafeInteger(record.step5_round) || record.step5_round<1)return null;
    const {run,step5_phase:phase,step5_round:round}=record;
    const key=`${run}/${phase}/${round}`;
    if(!cache.has(key)) {
      const authentic=[];
      try {
        const dir=join(root,'research',`${run}-step5-v2`);
        const receipt=read(join(dir,`${phase}-${round}-collected.json`));
        if(receipt.version!==2||receipt.run!==run||receipt.phase!==phase||receipt.round!==round
          || !Array.isArray(receipt.errors)||receipt.errors.length)throw Error('invalid collection');
        const bound=path=>{
          const bytes=readFileSync(path,'utf8');
          if(receipt.evidence?.[path]!==hash(bytes))throw Error('unbound evidence');
          return JSON.parse(bytes);
        };
        for(const [path,digest] of Object.entries(receipt.evidence??{}))
          if(hash(readFileSync(path,'utf8'))!==digest)throw Error('changed evidence');
        const pack=bound(join(dir,`${phase}-${round}.json`));
        if(pack.version!==2||pack.run!==run||pack.phase!==phase||pack.round!==round
          ||pack.adjudicationSchemaVersion!==undefined)throw Error('not historical V2');
        for(const unit of pack.units){
          const label=`step5-v2-${phase}-r${round}-u${unit}`;
          const report=bound(join(dir,`${label}.json`));
          const dispatch=bound(join(root,'research',`${run}-dispatch`,`alpha-adjudicate-${label}.result.json`));
          if(report.run!==run||report.phase!==phase||report.round!==round||String(report.unit)!==String(unit)
            ||report.input_sha256!==hash(JSON.stringify(pack))||dispatch.ok!==true||dispatch.run!==run
            ||dispatch.role!=='alpha-adjudicate'||dispatch.label!==label
            ||dispatch.model!==MODELS.sol.id||dispatch.provider_effort!=='xhigh')throw Error('invalid author');
          for(const decision of report.decisions??[]){
            if(decision.outcome!=='confirmed_fatal'||Object.hasOwn(decision,'defect_type'))continue;
            if(!pack.assignments[unit].some(row=>tuple(row)===tuple(decision))
              ||!receipt.decisions.some(row=>isDeepStrictEqual(row,decision)))throw Error('decision mismatch');
            authentic.push({...decision,run,step5_round:round,step5_phase:phase,item_sha256:pack.before[decision.id]});
          }
        }
        cache.set(key,authentic);
      }catch{cache.set(key,[]);}
    }
    const {at,...decision}=record;
    return cache.get(key).some(row=>isDeepStrictEqual(row,decision))?'unclassified':null;
  };
}
