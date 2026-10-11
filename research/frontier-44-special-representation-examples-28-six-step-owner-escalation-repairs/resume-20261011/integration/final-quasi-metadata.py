import json,hashlib,yaml,re,copy
run='frontier-44-special-representation-examples-28-six-step';b='research/'+run+'-owner-escalation-repairs';out=b+'/resume-20261011/integration';q=b+'/resume-20261011/quasi-r-finalize'
def h(p):return hashlib.sha256(open(p,'rb').read()).hexdigest()
new=json.load(open(q+'/new-carrier-manifest-home.proposed.json'))['additions'];ids=[x['id'] for x in new]+['lem-quasi-r-divided-power-integrality-on-based-lattices','thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules'];mp='research/'+run+'-batch-8.pages.json';doc=json.load(open(mp));sourceguards={};added={}
for id in ids:
 p='items/'+id+'.md';text=open(p).read();sourceguards[p]=h(p);f=yaml.safe_load(text.split('---',2)[1]);st=re.search(r'\n## (?:Statement refuted|Statement|Definition)\n(.*?)(?=\n## |\Z)',text,re.S).group(1).strip();ent={k:f[k] for k in ['id','kind','title','deps','provenance','sources'] if k in f};ent.update(statement=st,strategy=f.get('proof_strategy',''),justified_by=f.get('justified_by',[]),dependency_level=f.get('dependency_level',0));pg=next((pg for pg in doc if any(x['id']==id for x in pg['items'])),None)
 if pg is None:
  pg=next(pg for pg in doc if pg['id']==next(x['page'] for x in new if x['id']==id));pg['items'].append(ent);added.setdefault(pg['id'],[]).append(id)
 else:next(x for x in pg['items'] if x['id']==id).update(ent)
packet={'run':run,'phase':'final-owner-metadata-only-proposal','native_gate_attempt':False,'page_frontier_frozen':100,'source_guards':sourceguards,'evidence_guards':{p:h(p) for p in [q+'/new-carrier-manifest-home.proposed.json',q+'/proof-contracts.proposed.json',q+'/supplier-and-direct-consumer-contracts.proposed.json',q+'/final-report.md',b+'/resume-20261011/root-application/quasi-supplier-receipt.json']},'manifest_deltas':[{'path':mp,'before_sha256':h(mp),'new_ids':[x['id'] for x in new],'synced_ids':ids,'new_file_content':json.dumps(doc,indent=2)+'\n'}],'contract_deltas':[],'page_deltas':[],'risk_resolution_recommendation':'The explicitly unrestricted branch is disproved by the new actual counterexample, and the original supplier correction preserves all sound finite/action/supported branches. Root may reconcile original risk findings as resolved with the existing independent/root validation receipts, preserving historical rounds and defects; this mechanical packet alone is not acceptance.'}
changes=json.load(open(q+'/supplier-and-direct-consumer-contracts.proposed.json'))['changes'];contracts={}
for n in [8,23]:
 p='research/'+run+'-batch-'+str(n)+'.proof-contracts.json';d=json.load(open(p));touch=[]
 if n==8:
  prop=json.load(open(q+'/proof-contracts.proposed.json'))
  for id,c in prop['contracts'].items():d['contracts'][id]=c;touch.append(id);d['scope']+=[] if id in d['scope'] else [id]
 for x in changes:
  if x['canonical_contract']==p:d['contracts'][x['id']]=x['entry'];touch.append(x['id'])
 ep=out+'/final-quasi-batch-'+str(n)+'-contracts.proposed.json';open(ep,'w').write(json.dumps(d,indent=2)+'\n');packet['contract_deltas'].append({'path':p,'before_sha256':h(p),'prepared_file':ep,'ids_regenerated':touch})
for pg in doc:
 pp='library/'+pg['category']+'/'+pg['id']+'.md';t=open(pp).read();f=yaml.safe_load(t.split('---',2)[1]);old=f.get('items') or [];allids=old+added.get(pg['id'],[]);deps={id:set(yaml.safe_load(open('items/'+id+'.md').read().split('---',2)[1]).get('deps',[]))&set(allids) for id in allids};pending=set(allids);ordered=[]
 while pending:
  ok=[id for id in allids if id in pending and not deps[id]&pending]
  if not ok:raise Exception('page cycle')
  ordered.append(ok[0]);pending.remove(ok[0])
 m=re.search(r'(?m)^items:\s*\[.*?\]',t,re.S);nt=t[:m.start()]+'items: [       '+',\n       '.join(ordered)+']'+t[m.end():];packet['page_deltas'].append({'path':pp,'before_sha256':h(pp),'added_ids':added.get(pg['id'],[]),'new_file_content':nt})
packet['post_application_required']=['Native whole-frontier901 item logical levels recomputation (temporary graph already verified acyclic max46); retain100page frontier.','Prepare current19 ownership carriers through auditor-created-items current API after actual aggregate application.','Preserve genuine original17 creation chronology and current new2 original author/finalizer contributions.'];open(out+'/final-quasi-guarded-metadata-packet.json','w').write(json.dumps(packet,indent=2)+'\n');print([(x['path'],x['ids_regenerated']) for x in packet['contract_deltas']])
