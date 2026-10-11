import json,glob,re,hashlib,os,datetime
run='frontier-44-special-representation-examples-28-six-step';base='research/'+run+'-owner-escalation-repairs/resume-20261011/integration/gate1-repair';out=base+'/rehome-support'
def h(p):return hashlib.sha256(open(p,'rb').read()).hexdigest()
def m(p):return {'path':p,'sha256':h(p)}
old=out+'/owner-rehome-evidence.proposed.json'
if os.path.exists(old) and not os.path.exists(out+'/owner-rehome-evidence.pre-mirror-candidate.json'):open(out+'/owner-rehome-evidence.pre-mirror-candidate.json','wb').write(open(old,'rb').read())
a=out+'/archives-current';os.makedirs(a,exist_ok=True);packet=json.load(open(base+'/page-cycle-forward-rehome-packet.json'));delta={x['path']:x['new_file_content'] for x in packet['manifest_deltas']};bf=[];af=[]
for p in sorted(glob.glob('research/'+run+'-batch-*.pages.json')):
 n=re.search(r'-batch-(\d+)\.pages',p)[1];bp=a+'/before-'+os.path.basename(p);ap=a+'/after-'+os.path.basename(p);open(bp,'wb').write(open(p,'rb').read());open(ap,'w').write(delta.get(p,open(p).read()));bf.append({'batch':n,'source':m(bp)});af.append({'batch':n,'source':m(ap)})
rows=[];new=[]
for row in packet['moves']:
 id=row['id'];n=row['from_batch'];current_cp='research/'+run+'-batch-'+n+'.proof-contracts.json';current_np='research/'+run+'-batch-'+row['to_batch']+'.proof-contracts.json'
 for tr in packet['contract_transfers_for_other_contract_owner']:
  if tr['id']==id:tr.update(existing_entry=json.load(open(current_cp))['contracts'][id],from_guard=h(current_cp),to_guard=h(current_np))
 post='research/'+run+'-step3-hash-'+n+'-post.json'
 if id not in json.load(open(post))['manifest']:new.append(row);continue
 sp='items/'+id+'.md';bp=a+'/before-'+id+'.md';ap=a+'/after-'+id+'.md';open(bp,'wb').write(open(sp,'rb').read());open(ap,'wb').write(open(sp,'rb').read());cp='research/'+run+'-batch-'+n+'.proof-contracts.json';np='research/'+run+'-batch-'+row['to_batch']+'.proof-contracts.json';ct=json.load(open(cp))['contracts'][id];bc=a+'/before-'+id+'.contracts.json';ac=a+'/after-'+id+'.contracts.json';json.dump({'contracts':{id:ct}},open(bc,'w'),indent=2);json.dump({'contracts':{id:ct}},open(ac,'w'),indent=2)
 rows.append({**row,'reason':'Owner prerequisite-first representation correction retains this exact proved supplier and actual current source/statement/dependencies/contract/risk; original native obligation batch and source observations remain unchanged.','before_source':m(bp),'after_source':m(ap),'before_contract':m(bc),'after_contract':m(ac),'pre_reader':m('research/'+run+'-step3-hash-'+n+'-pre.json'),'post_reader':m(post)})
 for tr in packet['contract_transfers_for_other_contract_owner']:
  if tr['id']==id:tr.update(existing_entry=ct,from_guard=h(cp),to_guard=h(np))
families=[{'to_page':dest,'from_pages':sorted({x['from_page'] for x in rows if x['to_page']==dest}),'ids':[x['id'] for x in rows if x['to_page']==dest]} for dest in sorted({x['to_page'] for x in rows})]
doc={'version':1,'policy':'owner-step3-same-id-proved-rehome-v1','run':run,'step':3,'approved_by':'owner','owner_identity':'/root','authorized_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'reason':'Explicit owner-directed same-ID supplier-first correction within the frozen100pages resolves real Gate1 page cycles and forward-order errors while retaining all source mathematics and historical reader/refuter/Alpha routes; native later independent work remains due.','baseline':m('research/'+run+'-step3-auditor-baseline.json'),'frozen_page_count':100,'before_frontier':bf,'after_frontier':af,'families':families,'items':rows};json.dump(doc,open(old,'w'),indent=2);json.dump(packet,open(base+'/page-cycle-forward-rehome-packet.json','w'),indent=2);json.dump({'frozen_originals':rows,'new_first_current_home':new,'actual_before_captured_from_current_root':True,'after_is_guarded_proposal_until_root_applies':True,'snapshots_modified':False},open(out+'/migration-inventory.json','w'),indent=2);print('Actual current before archives50; explicit frozen originals5; new freehome1.')
