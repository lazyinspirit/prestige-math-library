"""Guarded root adoption of released scientific-interface mirror proposals."""
import pathlib,json,hashlib,datetime
r='physics-non-fluid-129-2026-10-21-r2';base=pathlib.Path('research/'+r+'-owner-first-native-battery-findings');out=base/'scientific-mirror-application'
sha=lambda b:hashlib.sha256(b).hexdigest()
read=lambda p:json.loads(pathlib.Path(p).read_text())
assert not pathlib.Path('.physics-autopilot/'+r+'/controller.lock').exists()
assert not out.exists()
original={};docs={};changes=[]
def load(p):
 if p not in docs:original[p]=pathlib.Path(p).read_bytes();docs[p]=json.loads(original[p])
 return docs[p]
def pointer(d,p):
 parts=p.strip('/').split('/')
 for k in parts[:-1]:d=d[int(k)] if isinstance(d,list) else d[k]
 return d,parts[-1]
rootchanges={e['path']:e for e in read(base/'page-prerequisite-application/receipt.json')['changes']}
def rawguard(p,h):
 actual=sha(original.get(p,pathlib.Path(p).read_bytes()))
 if actual==h:return
 chain=rootchanges.get(p);assert chain and chain['before_sha256']==h and chain['after_sha256']==actual,('unexplained manifest change',p,h,actual)
def setfield(p,ptr,before,after,reason):
 d=load(p);parent,key=pointer(d,ptr);key=int(key) if isinstance(parent,list) else key
 assert parent[key]==before,(p,ptr);parent[key]=after;changes.append({'path':p,'pointer':ptr,'reason':reason,'before_value_sha256':sha(str(before).encode()),'after_value_sha256':sha(str(after).encode())})
em=read('research/'+r+'-owner-em-nrqm-boundary/em-applied.json')
for s in em['applied']:
 if s['path'].startswith('items/'):assert sha(pathlib.Path(s['path']).read_bytes())==s['after_raw_sha256']
for m in em['mirror_proposals']:
 d=load(m['path']);found=[(pi,ii,i) for pi,p in enumerate(d) for ii,i in enumerate(p['items']) if i['id']==m['id']];assert len(found)==1
 pi,ii,item=found[0];before=item[m['field']];assert before.count(m['find'])==1
 setfield(m['path'],f'/{pi}/items/{ii}/{m["field"]}',before,before.replace(m['find'],m['replace']),'Correct Drude loss units; formula unchanged, same owner consumers checked')
res=read('research/'+r+'-owner-em-nrqm-boundary/resonance-definition-repair.json');assert sha(pathlib.Path(res['source']).read_bytes())==res['after_sha256']
for m in res['page_mirror_proposals']:setfield(m['path'],m['pointer'],m['old'],m['new'],'Distinguish regular and meromorphic continuation; retain pole scope')
for m in read('research/'+r+'-owner-qft-tgr-boundaries/root-held-manifest-patches.json'):
 p=m['manifest'];load(p);rawguard(p,m['manifestBeforeSha256']);assert sha(pathlib.Path('items/'+m['item']+'.md').read_bytes())==m['sourceSha256']
 found=[(pi,ii) for pi,page in enumerate(docs[p]) for ii,item in enumerate(page['items']) if item['id']==m['item']];assert len(found)==1
 pi,ii=found[0];setfield(p,f'/{pi}/items/{ii}/{m["field"]}',m['beforeValue'],m['afterValue'],'First variation integrates compactly supported pointwise density derivative; full allowed families retained')
for m in read('research/'+r+'-owner-first-native-battery-findings/qsm-owner-review/manifest-mirror-proposal.json')['rows']:
 load(m['path']);rawguard(m['path'],m['raw_sha256']);setfield(m['path'],m['json_pointer'],m['expected'],m['replacement'],'Actual zero-vector or zero-Hilbert normalization qualification; all consumers checked')
# Actual finite model family for an asserted algebraic derivative subclaim.
p='research/'+r+'-batch-46.proof-contracts.json';d=load(p);id='lem-nrqmx-bounded-symbol-estimate';entry=d['contracts'][id]
assert not entry.get('finite_smoke')
excerpt='each derivative is a finite sum of derivatives of $u$, Gaussian factors, and polynomials in $x-q$'
assert excerpt in pathlib.Path('items/'+id+'.md').read_text()
entry['finite_smoke']=[{'check':'polynomial-gaussian-derivatives','asserts':excerpt,'scope_limit':'Exact finite Taylor jets for admissible one-coordinate q=0 Schwartz Gaussian-polynomial witnesses: u=P exp(-a x^2/2), epsilon=1/a, a=1,2,3; orders0–6. This checks derivative algebra only, not decay, the Schwartz theorem, norm estimates, or a general proof.'}]
changes.append({'path':p,'item':id,'field':'finite_smoke','reason':'Native gate-liveness previously found zero finite checks; this registry check tests actual asserted Gaussian derivative algebra with independent exact finite jets.'})
out.mkdir();files=[]
for p,d in docs.items():
 before=original[p];assert pathlib.Path(p).read_bytes()==before,p;after=(json.dumps(d,indent=2,ensure_ascii=False)+'\n').encode();archive=out/'before'/p;archive.parent.mkdir(parents=True,exist_ok=True);archive.write_bytes(before);files.append({'path':p,'before_sha256':sha(before),'after_sha256':sha(after)});pathlib.Path(p).write_bytes(after)
(out/'receipt.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'changes':changes,'files':files,'source_body_edits':False,'native_gate':False},indent=2)+'\n')
print(json.dumps({'files':len(files),'public_mirror_fields':len(changes)-1,'actual_finite_smoke_checks':1}))
