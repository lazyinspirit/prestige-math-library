from pathlib import Path
import hashlib,json,re,yaml,collections,datetime
run='non-ml-math-remaining-81-2026-10-18';b=Path('research/'+run+'-owner-linfinity-deformation-completion')
def h(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
before=sum([json.load(open(b/f'before-{n}.json')) for n in [43,44]],[]);beforeBy={x['path']:x for x in before};new=set(json.load(open(b/'new-item-ids.json')));pages=[];items=[];roots=[]
for n in [43,44]:
 manifest=json.load(open(f'research/{run}-batch-{n}.pages.json'))
 for p in manifest:
  pp='library/'+p['category']+'/'+p['id']+'.md';pages.append(pp)
  for i in p['items']:items.append((n,i['id']))
 roots += [f'research/{run}-batch-{n}.'+s for s in ['pages.json','item-scope.json','page-scope.json','proof-contracts.json','cross-batch-dependencies.json'] if Path(f'research/{run}-batch-{n}.'+s).exists()]
files=[]
for p in ['items/'+i+'.md' for _,i in items]+pages+roots:
 old=beforeBy.get(p);cur=h(p);files.append({'path':p,'before_sha256':old['sha256'] if old else None,'before_path':old['before_path'] if old else None,'current_sha256':cur,'changed':old is None or old['sha256']!=cur})
oldmeta={}
for n in [43,44]:
 for p in json.load(open(b/f'archive-{n}/research/{run}-batch-{n}.pages.json')):
  for i in p['items']:oldmeta[i['id']]=i
consumers=[]
for n,i in items:
 p='items/'+i+'.md';r=next(x for x in files if x['path']==p);fm=yaml.safe_load(Path(p).read_text().split('---',2)[1]);proof=bool(re.search(r'^## (Proof|Verification|Counterexample|Refutation)\s*$',Path(p).read_text(),re.M))
 if n==44:disp='checked-unaffected-scientific-item';why='Read complete current claim/proof and checked its actual local BV or CE suppliers. No logical PA-12 item premise is claimed. Scientific bytes unchanged; retained page reading route reconciled.'
 elif i in new:disp='new-proof-supplier' if proof else 'new-definition-supplier';why='Full specified local proof/definition authored and read, preserving complete filtered and full allowed-equivalence scope.'
 elif i.startswith('rem-general-maurer'):disp='scientific-repair';why='Missing-proof warning replaced by precise fulfilled specified-deformation correspondence and remaining general boundary; all proof suppliers are explicit.'
 elif i.startswith('cex-maurer-cartan'):disp='scientific-clarification-and-mechanical-format';why='Original counterexample and every expression retained. Clarifies that its indiscrete relation is not the canonical path gauge relation; new abelian comparison gives the canonical distinction.'
 elif r['changed']:disp='mechanical-proof-format';why='One paragraph per complete step, original clauses/expressions retained, normative phases and internal references adopted. Finite minimal-model conclusion dependencies now explicitly retain all arity and morphism checks.'
 else:disp='checked-unaffected';why='Original current mathematical interface retained byte-for-byte and checked against its current consumers.'
 consumers.append({'batch':n,'id':i,'disposition':disp,'reason':why,'path':p,'before_sha256':r['before_sha256'],'current_sha256':r['current_sha256'],'deps':fm.get('deps',[]),'original_dependency_level':oldmeta.get(i,{}).get('dependency_level'),'current_dependency_level':fm.get('dependency_level'),'proof_bearing':proof})
# Actual current direct/indirect page reading consumers and item consumers from every 81-run batch manifest.
allpages={};allitems={}
for mf in sorted(Path('research').glob(run+'-batch-*.pages.json')):
 try:
  for p in json.load(open(mf)):
   allpages[p['id']]=p
   for it in p.get('items',[]):allitems[it['id']]={'page':p['id'],'deps':it.get('deps',[])}
 except (ValueError,TypeError):continue
scoped={i for n,i in items if n==43};affected=set(scoped)
while True:
 add={i for i,v in allitems.items() if set(v['deps'])&affected}-affected
 if not add:break
 affected|=add
pageaffected={'a-infinity-l-infinity-and-deformation-complexes','a-infinity-l-infinity-and-deformation-complexes-examples'}
while True:
 add={i for i,p in allpages.items() if set(p.get('requires',[]))&pageaffected or p.get('companion') in pageaffected}-pageaffected
 if not add:break
 pageaffected|=add
external=sorted(affected-scoped)
checks={}
for k in ['precheck','render','layout','contracts43','contracts44']:
 p=b/'checks'/f'{k}.json';rec=json.load(open(p));rec['record_sha256']=h(p);rec['stdout_sha256']=h(rec['stdout_path']);rec['stderr_sha256']=h(rec['stderr_path']);checks[k]=rec
sources=[]
for p in [b/'sources/dolgushev-rogers.pdf',b/'sources/manetti.pdf',b/'sources/getzler.pdf',b/'exp-log/loday-vallette.pdf',b/'taylor/sources/keller-9910179v2.pdf']:
 sources.append({'path':str(p),'sha256':h(p),'bytes':p.stat().st_size})
unchangedhistory=[]
for x in before:
 if any(t in x['path'] for t in ['-step1-','.attempt-1.prompt.md','.attempt-1.result.json','.source-coverage.json','.notes.md']):
  unchangedhistory.append({'path':x['path'],'before_sha256':x['sha256'],'current_sha256':h(x['path']),'unchanged':h(x['path'])==x['sha256']})
receipt={'version':1,'run':run,'owner':'/root/math81_frobenius','status':'proof-completion-ready-for-root-review-and-metadata-recertification','accepted':False,'native_status':{'43':{'state_endedAt':'2026-10-17T16:56:38.427Z','result_ended_at':'2026-10-17T16:56:38.288Z','success':True,'aborted':False,'native_items':24,'native_escalations':1},'44':{'state_endedAt':'2026-10-17T16:50:09.151Z','result_ended_at':'2026-10-17T16:50:09.123Z','success':True,'aborted':False,'native_items':9,'native_escalations':9}},'guard':'No canonical native output edited until each genuine writer drained and final actual input bytes were archived.','before_inventories':[{'path':str(b/f'before-{n}.json'),'sha256':h(b/f'before-{n}.json'),'files':len(json.load(open(b/f'before-{n}.json')))} for n in [43,44]],'new_items':sorted(new),'inventory':{'43_A':33,'43_B':6,'43_total':39,'44_A':6,'44_B':3,'44_total':9},'current_inputs':files,'consumer_dispositions':consumers,'page_dispositions':[{'path':p,'disposition':'scientific-summary-and-inventory-updated' if 'a-infinity' in p else ('retained-reading-interface-reconciled' if not p.endswith('-examples.md') else 'checked-unchanged')} for p in pages],'consumer_closure':{'method':'Read every actual current run batch pages manifest; take transitive item deps from all 39 suppliers and transitive page requires/companion edges. Read all 48 scoped item bodies.','external_item_consumers':external,'affected_pages':sorted(pageaffected),'all_external_item_consumers_owned':not external,'qme_boundary':'Nonzero S_0 need not be positive hbar order. Laurent normalization is not a pronilpotent gauge classification. A classical base can leave curvature -i hbar Delta S_0; no current PA-13 theorem asserts its unproved uncurved classification.','new_external_supplier_interface':'Batch42 def-formal-associative-deformation-of-a-commutative-algebra read in full; fixed real coefficients/unit match normalized specialization.'},'sources':sources,'source_reading':{'owner':'Dolgushev–Rogers full relevant section 2 pp5–8 and Appendix A pp27–29; Manetti complete section5 pp18–21.','delegated_taylor':'Dolgushev–Rogers pp1–9; Getzler pp13–18 including full relevant proofs and scalar extension; Keller complete relevant pp5–6, pp8–9 and pp11–12 for sign/suspension. Exact records in taylor/source-evidence.md.','delegated_coderivation':'Manetti relevant section1 and section2 passages; Loday–Vallette complete relevant cofree/coderivation/bar/operadic-codifferential passages listed in exp-log/source-review.md.','honesty':'Complete authoritative texts retrieved; no cover-to-cover reading claimed. Source statements with omitted proofs/exercises are replaced by actual local proofs.','records':[{'path':str(b/p),'sha256':h(b/p)} for p in ['taylor/source-evidence.md','exp-log/source-review.md']]},'native_history_bindings':unchangedhistory,'native_history_all_unchanged':all(x['unchanged'] for x in unchangedhistory),'original_math_expression_audit':{'path':str(b/'native-mechanical-math-audit.json'),'sha256':h(b/'native-mechanical-math-audit.json'),'all_retained':all(x['all_original_math_expressions_retained'] for x in json.load(open(b/'native-mechanical-math-audit.json')))},'checks':checks,'all_final_checks_pass':all(x['exit_code']==0 for x in checks.values()),'root_owned_remaining':['new/existing dependency levels and batch levels','shared ledger and metadata hash refresh','owner scientific review/acceptance and native Step1 recertification','runtime transitions, stamps, gates and commits'],'prohibitions_preserved':['no published edits','no native prompt/result/Step1/source-coverage/notes rewrite','no accepted Frobenius repair edits','no shared plan/ledger/runtime/readiness/stamp/level/gate/commit writes'],'construction':{'path':str(b/'construction.md'),'sha256':h(b/'construction.md')}}
(b/'repair.json').write_text(json.dumps(receipt,indent=2,ensure_ascii=False)+'\n');print('external item consumers',external);print('affected pages',sorted(pageaffected));print('48 item dispositions;',len(files),'current bindings; native history unchanged',receipt['native_history_all_unchanged']);print('receipt',h(b/'repair.json'))
