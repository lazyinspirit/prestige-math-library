import json,yaml,re,hashlib,copy,os
run='frontier-44-special-representation-examples-28-six-step';b='research/'+run+'-owner-escalation-repairs';out=b+'/resume-20261011/integration';q=b+'/resume-20261011/qschur';k=b+'/klr_categorification'
def h(p):return hashlib.sha256(open(p,'rb').read()).hexdigest()
def entry(id):
 t=open('items/'+id+'.md').read();f=yaml.safe_load(t.split('---',2)[1]);s=re.search(r'\n## (?:Statement|Definition)\n(.*?)(?=\n## |\Z)',t,re.S).group(1).strip();x={key:f[key] for key in ['id','kind','title','deps','provenance','sources'] if key in f};x.update(statement=s,strategy=f.get('proof_strategy',''),justified_by=f.get('justified_by',[]),dependency_level=f.get('dependency_level',0));return x
bybatch={13:['lem-polynomial-quantum-highest-vectors-satisfy-all-divided-power-relations','lem-integral-quantum-highest-weight-modules-identify-with-normalized-q-schur-weyl-cells','lem-polynomial-quantum-schur-first-level-weyl-filtration-and-hecke-corner'],47:['lem-cyclotomic-klr-partial-frobenius-caps-satisfy-two-color-terminal-contractions','lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form','lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates','thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric']}
allentries={id:entry(id) for ids in bybatch.values() for id in ids};packet={'run':run,'no_mathematical_acceptance':True,'page_frontier_frozen':100,'source_guards':{'items/'+id+'.md':h('items/'+id+'.md') for id in allentries},'evidence_guards':{},'manifest_deltas':[],'contract_deltas':[],'page_deltas':[],'new_helper_registration_pending_native_claim_after_application':[]}
for n,ids in bybatch.items():
 mp='research/'+run+'-batch-'+str(n)+'.pages.json';doc=json.load(open(mp));old=copy.deepcopy(doc);pg=next(x for x in doc if x['kind']=='A');existing={x['id']:x for x in pg['items']};new=[]
 for id in ids:
  if id not in existing:new.append(id);pg['items'].append(allentries[id])
  else:
   target=next(x for x in pg['items'] if x['id']==id);target.update(allentries[id])
 packet['manifest_deltas'].append({'path':mp,'before_sha256':h(mp),'new_ids':new,'synced_ids':ids,'new_file_content':json.dumps(doc,indent=2)+'\n'})
 pp='library/special-topics-in-representation-theory/'+pg['id']+'.md';t=open(pp).read();f=yaml.safe_load(t.split('---',2)[1]);oldids=list(f['items']);allids=oldids+[id for id in new if id not in oldids];deps={id:set(yaml.safe_load(open('items/'+id+'.md').read().split('---',2)[1]).get('deps',[]))&set(allids) for id in allids};pending=set(allids);ordered=[]
 while pending:
  candidates=[id for id in allids if id in pending and not deps[id]&pending]
  if not candidates:raise Exception('page dependency cycle '+str(pending))
  id=candidates[0];ordered.append(id);pending.remove(id)
 m=re.search(r'(?m)^items:\s*\[.*?\]',t,re.S);replacement='items: [       '+',\n       '.join(ordered)+']';nt=t[:m.start()]+replacement+t[m.end():];packet['page_deltas'].append({'path':pp,'before_sha256':h(pp),'new_ids':new,'old_relative_order_preserved':[x for x in ordered if x in oldids]==oldids,'new_file_content':nt})
 cp='research/'+run+'-batch-'+str(n)+'.proof-contracts.json';contracts=json.load(open(cp));proposals=[q+'/proof-contracts.proposed.json',q+'/consumer-proof-contracts.proposed.json'] if n==13 else [k+'/renewed-two-color-caps/proof-contracts.proposed.json',k+'/renewed-authoring/word-trace-proof-contract-proposal.json']
 for p in proposals:
  prop=json.load(open(p));packet['evidence_guards'][p]=h(p)
  for id in ids:
   if id in prop['contracts']:contracts['contracts'][id]=prop['contracts'][id]
 for id in ids:
  if id not in contracts['contracts']:raise Exception('missing template '+id)
  if id not in contracts['scope']:contracts['scope'].append(id)
 ep=out+'/latest-batch-'+str(n)+'-contracts.proposed.json';open(ep,'w').write(json.dumps(contracts,indent=2)+'\n');packet['contract_deltas'].append({'path':cp,'before_sha256':h(cp),'prepared_file':ep,'ids_regenerated':ids})
 for id in new:
  packet['new_helper_registration_pending_native_claim_after_application'].append({'id':id,'source_sha256':h('items/'+id+'.md'),'batch':str(n),'page':pg['id'],'author_identity':'/root/resume_qschur' if n==13 else '/root/repair_klr_categorification','registration_policy':'Create evidence only after actual manifest integration using exported step3OwnerCreationClaim(loadStep3); preserve genuine author allocation and immutable baseline exclusion.'})
packet['post_application_required']=['Native full-frontier dependency level recomputation for all current manifest items; refresh source metadata levels and page mirrors using native mechanical tool. No pair/batch changes.','Refresh final contract citations/derivations from exact strengthened actual sources (prepared contracts already regenerated).','Genuine origin recording and current stable claims for new3 suppliers; refresh pending batch13 origin evidence to exact changed claim after integration.','No gate, native acceptance, worker coverage or historical round reset in this packet.']
for p in [q+'/integration.proposed.json',b+'/resume-20261011/klr/guarded-integration-proposals.json',b+'/resume-20261011/root-application/source-repair-receipt.json']:packet['evidence_guards'][p]=h(p)
open(out+'/latest-guarded-metadata-packet.json','w').write(json.dumps(packet,indent=2)+'\n');print('new helpers',sum(len(x['new_ids']) for x in packet['manifest_deltas']))
