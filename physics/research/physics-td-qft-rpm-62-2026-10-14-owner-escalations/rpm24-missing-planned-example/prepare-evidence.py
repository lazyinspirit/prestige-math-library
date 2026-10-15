from pathlib import Path
import json,re,hashlib,datetime
run='physics-td-qft-rpm-62-2026-10-14';p=Path('research')/(run+'-owner-escalations')/'rpm24-missing-planned-example';id='ex-rpm-pure-gauge-free-charge';s=Path('items/'+id+'.md').read_text()
proof=s.split('## Verification\n',1)[1];steps=[]
for para in proof.split('\n\n'):
 m=re.match(r'(\d+\.\d+) (.*) \[([^\]]+)\](?: ∎)?$',para,re.S)
 if m:steps.append({'id':'D'+str(len(steps)+1),'step':m.group(1),'claim':m.group(2),'inputs':[v.strip() for v in m.group(3).split(',')]})
facts=s.split('## Facts & Assumptions',1)[1].split('## Verification',1)[0];cit=[]
for para in facts.split('\n\n'):
 m=re.match(r'\[([AFL]\d+)\]',para)
 if not m:continue
 fact=m.group(1)
 for source in re.findall(r'\[\[([a-z0-9-]+)\]\]',para):
  text=Path('items/'+source+'.md').read_text()
  for heading in ['Definition','Statement','Postulate']:
   if '## '+heading+'\n' in text:break
  quote=text.split('## '+heading+'\n',1)[1].split('\n## ',1)[0].strip()
  cit.append({'fact':fact,'source':source,'source_section':heading,'quote':quote[:900],'uses':[v['step'] for v in steps if fact in v['inputs']]})
boundaries=[
 {'case':'empty','status':'checked','evidence':'Statement requires tau0<tau1 and future-timelike C2 segments; no empty segment or zero tangent is admitted.'},
 {'case':'zero','status':'checked','evidence':'Step1.1 proves F=0 for every b; step3.1 records constant canonical component when q,b or U1 is zero.'},
 {'case':'one','status':'not_applicable','reason':'No one-object cardinality or unit element boundary enters this coordinate polynomial example.'},
 {'case':'degenerate','status':'checked','evidence':'The massive model requires m,c>0 and timelike normalization; a null or zero-velocity spacetime tangent is excluded. Zero spatial U1 remains an allowed canonical-shift degeneracy.'},
 {'case':'endpoints','status':'checked','evidence':'Fixed events X0,X1 make the gauge action difference constant; step2.1 claims no solution for incompatible arbitrary endpoint/time data.'},
 {'case':'nonempty-choice','status':'checked','evidence':'Inherited AComega is stated in Example,A2 and the action-equivalence proof use. No fullAC or extra choice construction is used.'},
 {'case':'iff-forward','status':'checked','evidence':'Step2.1 uses the exact action equivalence, F=0 and constant flat metric to obtain constant U and straight motion.'},
 {'case':'iff-reverse','status':'checked','evidence':'Step2.1 states and proves the reverse implication: an admitted future-timelike proper-time straight curve has zero covariant acceleration and is stationary.'}]
c={'citations':cit,'derivations':steps,'routine_steps':[],'boundaries':boundaries,'finite_checks':[]}
(p/'scoped-proof-contracts.proposal.json').write_text(json.dumps({'version':1,'level':run,'scope':[id],'contracts':{id:c}},indent=2)+'\n')
fm=s.split('---',2)[1];deps=re.findall(r'^  - ([a-z0-9-]+)$',fm,re.M);roles=dict(re.findall(r'^  ([a-z0-9-]+): ([a-z-]+)$',fm,re.M));statement=s.split('## Example\n\n',1)[1].split('\n\n## Facts',1)[0]
item={'id':id,'kind':'example','domain':'physics','title':'Pure-gauge potential and free massive charged motion','statement':statement,'deps':deps,'dependency_roles':roles,'dependency_level':4,'provenance':{'statement':'ai-generated','proof':'ai-altered'},'generation':{'role':'example'},'strategy':'direct','physical_scope':re.search(r'^physical_scope: "(.*)"$',fm,re.M).group(1),'empirical_premises':[],'sources':{'references':[{'title':'David Tong, General Relativity, author-hosted Chapter1 excerpt','url':'https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf'},{'title':'Poisson, Pound and Vega, The Motion of Point Particles in Curved Spacetime (2011)','url':'https://arxiv.org/html/1102.0529v3'}]}}
(p/'manifest-record.proposal.json').write_text(json.dumps({'page':'rpm-external-charge-examples','canonical_inventory_slot':'items','record':item,'markdown_placement':'examples'},indent=2)+'\n')
coverage=json.loads(Path(f'research/{run}-batch-24.coverage.json').read_text());bpage=next(x for x in coverage['pages'] if x['page']=='rpm-external-charge-examples')
for source in bpage['sources']:
 for row in source['contents']:
  row['disposition']='included';row.pop('reason',None);row['items']=[id];row['support']='ReservedD7 polynomial pure-gauge specialization; exact action/gauge/equivalence supplier contracts are used conditionally with AComega, and all calculations are proved locally. No new source-reading or source-fetch stamp is asserted.'
(p/'coverage-b-page.proposal.json').write_text(json.dumps(bpage,indent=2)+'\n')
paths=['items/'+id+'.md','library/relativistic-particle-mechanics/rpm-external-charge-examples.md'];rows={}
for rel in paths:
 raw=Path(rel).read_bytes();dst=p/'after'/rel;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(raw);rows[rel]={'after_file':str(dst),'raw_sha256':hashlib.sha256(raw).hexdigest()}
# Bind the exact reserved inventory and D7 design; these contradict the empty-B author claim.
for rel in ['research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/paired-inventory.json','research/extended-frameworks-2026-10-03/relativistic-particle-mechanics/dynamics-developments.md',f'research/{run}-batch-24.notes.md',f'research/{run}-batch-24.pages.json']:
 raw=Path(rel).read_bytes();dst=p/'before'/rel;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(raw)
(p/'final-receipt.json').write_text(json.dumps({'version':1,'run':run,'escalation':'missing-reserved-example24B','cycle':1,'authorizing_owner':'/root','repair_owner':'/root/resolve_rpm28_reception','item_previously_absent':True,'source_repair_applied':True,'native_transition':False,'independent_review':False,'recertification':False,'tests_run':False,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'writer_handoff':'research/'+run+'-owner-escalations/rpm24-27-28-handoff/writer-handoff.json','sources':rows,'proof_layout':{'command':"NODE_OPTIONS='--import /tmp/prestige-physics-renderer-runtime/node_modules/tsx/dist/loader.mjs' TSX_TSCONFIG_PATH=/Users/ianx/Projects/prestige-intelligence/web/tsconfig.json node tools/physics-support/proof-layout.mjs items/ex-rpm-pure-gauge-free-charge.md",'exit_code':0,'output':'proof-layout: 1 items, 3 steps, 0 defects'},'proposals':['scoped-proof-contracts.proposal.json','manifest-record.proposal.json','coverage-b-page.proposal.json']},indent=2)+'\n')
