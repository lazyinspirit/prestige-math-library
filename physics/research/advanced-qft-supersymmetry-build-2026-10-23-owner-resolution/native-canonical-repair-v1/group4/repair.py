import pathlib,re,json,hashlib,difflib,datetime
root=pathlib.Path('.'); ev=root/'research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/native-canonical-repair-v1/group4'
maps={
'lem-qftx-positive-real-monad-charge-normalization':{'1.1':'1.1','2.1':'1.2','1.2':'2.1','2.2':'3.1'},
'lem-qftx-positive-real-monad-chain-lift':{'1.1':'1.1','2.1':'1.2','1.2':'2.1','1.3':'3.1','1.4':'4.1','2.2':'5.1'},
'lem-qftx-positive-real-monad-rank-stability-criterion':{'1.1':'1.1','1.2':'1.2','2.1':'2.1','2.2':'2.2','2.3':'3.1','3.1':'4.1'},
'lem-qftx-positive-real-monad-flat-splitting':{'1.1':'1.1','1.2':'1.2','2.1':'2.1','2.2':'3.1'},
'ex-qftx-positive-real-monad-zero-charge':{'1.1':'1.1','2.1':'2.1','2.2':'3.1'},
'ex-qftx-positive-real-monad-one-instanton':{'1.1':'1.1','2.1':'2.1','2.2':'2.2','3.1':'3.1','3.2':'4.1','4.1':'5.1'}}
def ren(s,m):return re.sub(r'(?<![\d.])\d+\.\d+(?![\d.])',lambda x:m.get(x[0],x[0]),s)
cp=root/'research/advanced-qft-supersymmetry-build-2026-10-23-batch-69.proof-contracts.json';cb=cp.read_bytes();(ev/'contract.before.json').write_bytes(cb)
report={'authorization':'Parent relayed Root explicit write release: readiness round2 completed 05:19:44Z; snapshot writer drained and no other source/contract writers active.','maps':maps,'sources':{}}
proposals={}
for id,m in maps.items():
 p=root/f'items/{id}.md';b=p.read_bytes();s=b.decode();(ev/f'{id}.before.md').write_bytes(b)
 head,body=s.split('## Proof\n',1);matches=list(re.finditer(r'(?m)^(\d+\.\d+) ',body));intro=body[:matches[0].start()];end=body.find('\n## ',matches[-1].start());end=len(body) if end<0 else end
 steps={x[1]:body[x.start():(matches[i+1].start() if i+1<len(matches) else end)].rstrip() for i,x in enumerate(matches)}
 ordered=sorted(steps,key=lambda n:tuple(map(int,m[n].split('.'))))
 candidate=head+'## Proof\n'+intro+'\n\n'.join(ren(steps[n],m) for n in ordered)+'\n'+ren(body[end:],m)
 # Exact inverse numbering and step-order reconstruction verifies every original step byte.
 for n in ordered:
  assert ren(steps[n],m).count('$$')==steps[n].count('$$')
 assert candidate.split('## Proof\n')[0]==head
 (ev/f'{id}.proposal.md').write_text(candidate)
 (ev/f'{id}.patch').write_text(''.join(difflib.unified_diff(s.splitlines(True),candidate.splitlines(True),fromfile=str(p),tofile=str(p))))
 report['sources'][id]={'before_sha256':hashlib.sha256(b).hexdigest(),'step_order_before':list(steps),'step_order_after':ordered,'display_delimiter_count_before':s.count('$$'),'display_delimiter_count_after':candidate.count('$$'),'public_prefix_unchanged':True}
 proposals[id]=(b,candidate)
# Fresh synchronous read; update only owned contract rows, preserving other JSON values.
current=cp.read_bytes();assert current==cb;doc=json.loads(current);before=json.loads(current)
for id,m in maps.items():
 def transform(x,key=None):
  if isinstance(x,str):
   if key in ('quote','source','source_section'):return x
   if key=='id' and x.startswith('step-'):
    n=x[5:].replace('-','.');return 'step-'+m.get(n,n).replace('.','-')
   return ren(x,m)
  if isinstance(x,list):return [transform(v,key) for v in x]
  if isinstance(x,dict):return {k:transform(v,k) for k,v in x.items()}
  return x
 doc['contracts'][id]=transform(doc['contracts'][id]);doc['contracts'][id]['derivations'].sort(key=lambda x:tuple(map(int,x['step'].split('.'))))
for id in before['contracts']:
 if id not in maps:assert doc['contracts'][id]==before['contracts'][id]
# Canonical writes only after equality guards, exact saved preimages and semantic inspection.
for id,(b,s) in proposals.items():
 p=root/f'items/{id}.md';assert p.read_bytes()==b;p.write_text(s)
cp.write_text(json.dumps(doc,indent=2,ensure_ascii=False)+'\n')
def diffs(a,b,path=''):
 if type(a)!=type(b):return [path]
 if isinstance(a,dict):return sum((diffs(a[k],b[k],path+'/'+k) for k in a),[])
 if isinstance(a,list):return sum((diffs(x,y,path+'/'+str(i)) for i,(x,y) in enumerate(zip(a,b))),[])
 return [] if a==b else [path]
report['contract_changed_fields']=diffs(before,doc)
(ev/'repair-record.json').write_text(json.dumps(report,indent=2)+'\n');(ev/'items.txt').write_text('\n'.join('items/'+id+'.md' for id in maps)+'\n')
print(json.dumps({'written_items':list(maps),'contract_changed_fields':len(report['contract_changed_fields'])}))
