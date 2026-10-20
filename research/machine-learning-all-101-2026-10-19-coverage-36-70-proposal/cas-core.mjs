// Pure field-CAS preparation; no filesystem access and no mutation of its inputs.
const protectedNames = new Set(['fetch_verified','recovery_attempts']);
const equal = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const own = (x,key) => Object.prototype.hasOwnProperty.call(x,key);
function forbidden(value) {
  if (!value || typeof value!=='object') return false;
  if (Array.isArray(value)) return value.some(forbidden);
  return Object.entries(value).some(([key,v]) => protectedNames.has(key)||forbidden(v));
}
function protectedProjection(value) {
  if (!value || typeof value!=='object') return null;
  if (Array.isArray(value)) return value.map(protectedProjection);
  const result={};
  for(const[key,v]of Object.entries(value)) if(protectedNames.has(key))result[key]=v;else if(v&&typeof v==='object')result[key]=protectedProjection(v);
  return result;
}
export function prepareCoverageCAS(current, operations) {
  const output=structuredClone(current);
  const retained = [];
  for(const page of current.pages??[])for(const source of page.sources??[])retained.push({page:page.page,url:source.url,protected:protectedProjection(source)});
  for(const op of operations){
    const pages=(output.pages??[]).filter(p=>p.page===op.page);
    if(pages.length!==1)throw Error('Page key guard: '+op.page);
    const page=pages[0],matches=(page.sources??[]).filter(s=>s.url===op.url);
    if(op.op==='add-source'){
      if(matches.length || op.before.exists!==false || op.after.url!==op.url || forbidden(op.after))throw Error('New-source absence/protected-field guard: '+op.url);
      page.sources??=[];page.sources.push(structuredClone(op.after));
    }else if(op.op==='source-field'){
      if(matches.length!==1 || protectedNames.has(op.field) || forbidden(op.after.value))throw Error('Source/field ownership guard: '+op.url+':'+op.field);
      const source=matches[0];
      if(own(source,op.field)!==op.before.exists || (op.before.exists&&!equal(source[op.field],op.before.value)))throw Error('Owned field preimage guard: '+op.url+':'+op.field);
      if(op.after.exists)source[op.field]=structuredClone(op.after.value);else delete source[op.field];
    }else throw Error('Unknown CAS operation');
  }
  // Every existing protected field survives, including protected nested histories.
  // Other fields are preserved by cloning current then touching only the explicitly owned leaves.
  for(const old of retained){const source=output.pages.find(p=>p.page===old.page).sources.find(s=>s.url===old.url);const actual=protectedProjection(source);
    // Projection may gain new empty metadata containers; compare each old protected path individually.
    function check(before,after,path=[]){if(!before||typeof before!=='object')return;for(const[k,v]of Object.entries(before)){if(protectedNames.has(k)){if(!equal(v,after?.[k]))throw Error('Protected history mutated: '+old.url+':'+[...path,k].join('.'));}else if(v&&typeof v==='object')check(v,after?.[k],[...path,k]);}}
    check(old.protected,actual);
  }
  return output;
}
