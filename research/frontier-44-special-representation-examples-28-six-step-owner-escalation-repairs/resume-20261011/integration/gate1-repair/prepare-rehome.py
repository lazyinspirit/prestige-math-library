import json,yaml,re,glob,hashlib,copy
run='frontier-44-special-representation-examples-28-six-step';out='research/'+run+'-owner-escalation-repairs/resume-20261011/integration/gate1-repair'
def h(p):return hashlib.sha256(open(p,'rb').read()).hexdigest()
moves={'lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions':'constructible-incidence-and-cochain-models','lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications':'constructible-incidence-and-cochain-models','lem-irreducible-complex-varieties-are-analytically-connected':'constructible-incidence-and-cochain-models','lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs':'constructible-incidence-and-cochain-models','lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations':'type-a-hecke-specht-modules-and-cellular-bases','lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage':'type-a-hecke-specht-modules-and-cellular-bases'}
mdocs={p:json.load(open(p)) for p in glob.glob('research/'+run+'-batch-*.pages.json')};before=copy.deepcopy(mdocs);pages={pg['id']:(p,pg) for p,doc in mdocs.items() for pg in doc};homes={it['id']:(p,pg,it) for p,doc in mdocs.items() for pg in doc for it in pg['items']};changes=[]
for id,dest in moves.items():
 oldp,oldpg,it=homes[id];newp,newpg=pages[dest];oldpg['items']=[x for x in oldpg['items'] if x['id']!=id];newpg['items'].append(it);changes.append({'id':id,'from_page':oldpg['id'],'to_page':dest,'from_batch':re.search(r'-batch-(\d+)\.pages',oldp)[1],'to_batch':re.search(r'-batch-(\d+)\.pages',newp)[1]})
packet={'run':run,'mathematical_claims_and_deps_unchanged':True,'frozen_frontier_pages':100,'moves':changes,'manifest_deltas':[],'page_deltas':[],'contract_transfers_for_other_contract_owner':[],'source_guards':{},'plan_delta':None,'source_metadata_deltas':[],'post_integration':['Refresh native owner-origin/carrier bookkeeping for moved helpers with preserved historical origin; root handles guarded recovery.','Regenerate/transfer existing contract entries and scope according to exact transfer records; this agent writes no live contracts.','Redistribute cross-batch review ownership again using proposed/current newhomes after applying these moves; preserve existing canonical row status and original evidence.','Full current-frontier logical levels and plan/native carrier recertification; no gate in this evidence packet.']}
for p,doc in mdocs.items():
 if doc!=before[p]:packet['manifest_deltas'].append({'path':p,'before_sha256':h(p),'new_file_content':json.dumps(doc,indent=2)+'\n'})
for x in changes:
 old='research/'+run+'-batch-'+x['from_batch']+'.proof-contracts.json';new='research/'+run+'-batch-'+x['to_batch']+'.proof-contracts.json';od=json.load(open(old));packet['contract_transfers_for_other_contract_owner'].append({'id':x['id'],'from':old,'from_guard':h(old),'to':new,'to_guard':h(new),'existing_entry':od['contracts'][x['id']],'remove_old_scope_and_contract_after_archiving':True,'add_new_scope_and_same_contract':True});packet['source_guards']['items/'+x['id']+'.md']=h('items/'+x['id']+'.md')
affected=set(x['from_page'] for x in changes)|set(moves.values());hh=['def-hh-type-a-quantum-tensor-action-for-centralizers','lem-hh-quantum-presentation-and-tensor-action-descent'];hhpage='library/hopf-hecke-algebras/hecke-symmetries-and-generic-quantum-schur-weyl-duality.md';t=open(hhpage).read();f=yaml.safe_load(t.split('---',2)[1]);nt=t
for field in ['items','examples']:
 ids=f.get(field) or [];ids=[id for id in ids if id not in hh];m=re.search(r'(?m)^'+field+r':\s*\[.*?\]',nt,re.S)
 if m:nt=nt[:m.start()]+field+': ['+', '.join(ids)+']'+nt[m.end():]
packet['page_deltas'].append({'path':hhpage,'before_sha256':h(hhpage),'new_file_content':nt,'reason':'Two shared HH helpers already appear in native batch13 and actual type-A page; remove duplicate external context placement that currently wins first home. Keep all eighteen actual carriers; their canonical home changes, no deletion.'})
for pgid in affected:
 p,pg=pages[pgid];fp='library/'+pg['category']+'/'+pgid+'.md';t=open(fp).read();f=yaml.safe_load(t.split('---',2)[1]);old=f.get('items') or [];new=[id for id in old if id not in moves or moves[id]==pgid]+[id for id,dest in moves.items() if dest==pgid and id not in old];deps={id:set(yaml.safe_load(open('items/'+id+'.md').read().split('---',2)[1]).get('deps',[]))&set(new) for id in new};pending=set(new);ordered=[]
 while pending:
  ok=[id for id in new if id in pending and not deps[id]&pending]
  if not ok:raise Exception('page cycle')
  ordered.append(ok[0]);pending.remove(ok[0])
 m=re.search(r'(?m)^items:\s*\[.*?\]',t,re.S);nt=t[:m.start()]+'items: [       '+',\n       '.join(ordered)+']'+t[m.end():];packet['page_deltas'].append({'path':fp,'before_sha256':h(fp),'new_file_content':nt})
# Allowed consequence forward references preserve load-bearing dependency semantics.
id='rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges';p='items/'+id+'.md';t=open(p).read();fm=yaml.safe_load(t.split('---',2)[1]);targets=['lem-generic-cyclotomic-type-a-support-is-bounded-by-rank','lem-integer-color-degenerate-hecke-klr-local-inverse-tables','lem-generic-nondegenerate-local-inverse-tables','lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower'];deps=[x for x in fm['deps'] if x not in targets];nt=re.sub(r'(?m)^deps:\s*\[[^\]]*\]', 'deps: ['+', '.join(deps)+']',t);forward=(fm.get('forward_refs') or [])+targets
if re.search(r'(?m)^forward_refs:',nt):nt=re.sub(r'(?m)^forward_refs:\s*\[[^\]]*\]', 'forward_refs: ['+', '.join(forward)+']',nt)
else:nt=nt.replace('deps: ['+', '.join(deps)+']','deps: ['+', '.join(deps)+']\nforward_refs: ['+', '.join(forward)+']',1)
packet['source_metadata_deltas'].append({'path':p,'before_sha256':h(p),'new_file_content':nt,'reason':'A remark is an allowed consequence kind. Its four genuine later comparison suppliers become explicit load-bearing forward_refs; remove exactly those four from deps per schema, retain all arguments and effective forward+dependency graph edges.'});mp,pg,it=homes[id];it['deps']=deps;it['forward_refs']=forward
# Include source frontmatter mirror update if its manifest was not already changed.
packet['manifest_deltas']=[{'path':p,'before_sha256':h(p),'new_file_content':json.dumps(doc,indent=2)+'\n'} for p,doc in mdocs.items() if doc!=before[p]]
pp='research/plan-spec.json';plan=json.load(open(pp));lookup={pg['id']:pg for pg in plan['pages']}
for x in changes:
 oldpg=lookup[x['from_page']];newpg=lookup[x['to_page']];oldpg['items']=[it for it in oldpg.get('items',[]) if (it if isinstance(it,str) else it['id'])!=x['id']];it=homes[x['id']][2]
 if not any((v if isinstance(v,str) else v['id'])==x['id'] for v in newpg.get('items',[])):newpg.setdefault('items',[]).append(it)
packet['plan_delta']={'path':pp,'before_sha256':h(pp),'new_file_content':json.dumps(plan,indent=2)+'\n'}
json.dump(packet,open(out+'/page-cycle-forward-rehome-packet.json','w'),indent=2);print('moves',len(changes),'manifests',len(packet['manifest_deltas']),'pages',len(packet['page_deltas']),'remark forward',len(targets))
