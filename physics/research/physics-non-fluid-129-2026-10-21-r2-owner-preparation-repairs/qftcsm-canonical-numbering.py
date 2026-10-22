from pathlib import Path
import json,re,hashlib
b=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-preparation-repairs');d=json.loads((b/'qftcsm-precheck-after-normalization.json').read_text());out=[]
for r in d['results']:
 if r['status']!='repair':continue
 p=Path(r['file']);current=p.read_text();s=(b/'qftcsm-before'/p).read_text();norm=next(x for x in json.loads((b/'qftcsm-initial-whitespace-normalization.json').read_text()) if x['id']==p.stem)
 for display in norm['display_changes']:s=s.replace(display['before'],display['after'])
 section=re.search(r'(?ms)^## (Proof|Verification)\n(.*?)(?=^## |\Z)',s);assert section,p
 proof=section[2];old=list(re.finditer(r'(?ms)^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',proof));new=list(re.finditer(r'(?ms)^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',r['proposed_proof']));assert len(old)==len(new),(p,len(old),len(new))
 allids={m[1] for m in old+new}
 pat=re.compile(r'(?<![\w.])(?:'+ '|'.join(re.escape(x) for x in sorted(allids,key=len,reverse=True))+r')(?![\w.])')
 def key(t):return re.sub(r'\s+','',pat.sub('@OWN_STEP@',t))
 oldbykey={key(m[2]):m for m in old};assert len(oldbykey)==len(old),p
 mapping={};matches=[]
 for n in new:
  k=key(n[2]);assert k in oldbykey,(p,n[1],'paragraph content mismatch')
  o=oldbykey[k];mapping[o[1]]=n[1];matches.append((o,n))
 assert len(mapping)==len(old)
 blocks=[];bindings=[]
 for o,n in matches:
  text=pat.sub(lambda m:mapping.get(m[0],m[0]),o[2]).strip()
  assert key(text)==key(n[2].strip()),(p,o[1],n[1],'nonwhitespace proof-content difference other than own-step labels')
  blocks.append(n[1]+' '+text);bindings.append({'old_step':o[1],'new_step':n[1],'argument_prefix':o[2].strip()[:220],'old_paragraph_sha256':hashlib.sha256(o[2].encode()).hexdigest(),'new_paragraph_sha256':hashlib.sha256(text.encode()).hexdigest()})
 prefix=proof[:old[0].start()];newproof=prefix+'\n\n'.join(blocks)+'\n';target=re.search(r'(?ms)^## (Proof|Verification)\n(.*?)(?=^## |\Z)',current);s=current[:target.start(2)]+newproof+current[target.end(2):];p.write_text(s)
 out.append({'id':p.stem,'map':mapping,'new_order_by_old_step':[o[1] for o,n in matches],'matching_method':'Unique complete paragraph content, modulo whitespace and own-step reference labels. Full remapped paragraph compared to normative proposal; not positional zip.','paragraph_bindings':bindings})
(b/'qftcsm-exact-step-mappings.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps([{k:r[k] for k in ['id','map','new_order_by_old_step']} for r in out],indent=2))
