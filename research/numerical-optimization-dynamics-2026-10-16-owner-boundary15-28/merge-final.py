from pathlib import Path
import json,re,copy,datetime,difflib,collections
R='numerical-optimization-dynamics-2026-10-16';D=Path('research')/(R+'-owner-boundary15-28');final=D/'final';final.mkdir(exist_ok=True);parts=[(D/'targeted-operations-final-minimal.json','operations'),(D/'template22-28-evidence.json','rows'),(D/'template15-21-native-anchored.json','rows')];rows=[];owners={};files={};raw={}
for b in range(15,29):
 f=f'research/{R}-batch-{b}.proof-contracts.json';raw[f]=Path(f).read_bytes();files[f]=json.loads(raw[f])
 for id in files[f]['contracts']:owners[id]=(str(b),f)
for p,key in parts:
 for row in json.loads(p.read_text())[key]:rows.append({**row,'file':row.get('file',owners[row['item']][1]),'receipt_file':str(p),'root_binding_required':True})
keys=[(x['item'],x['case']) for x in rows];assert len(keys)==len(set(keys));report=json.load(open(f'research/{R}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json'));template_keys={(r['id'],r['case']) for cl in report['templates'] for r in cl['rows'] if r['id'] in owners};contra=[]
for b in range(15,29):
 p=Path('research')/(R+'-owner-boundary-diagnostic-recovery-20261016T111149897777Z/partitions')/f'batch-{b}.json'
 if p.exists():contra+=json.loads(p.read_text())['candidates']
fd=json.load(open(f'research/{R}-owner-proof-contract-diagnostic-20261016T111251985032Z/boundary-errors-by-owning-batch.json'));anchor=[x for b in range(15,29) for x in fd['batches'].get(str(b),{}).get('records',[])];required=template_keys|{(x['item'],x['case']) for x in contra}|{(x['id'],x['message'].split()[0]) for x in anchor};assert set(keys)==required,(required-set(keys),set(keys)-required)
observations=[];changed=set()
for row in rows:
 id=row['item'];f=row['file'];c=files[f]['contracts'][id];i=next(i for i,x in enumerate(c['boundaries']) if x['case']==row['case']);assert c['boundaries'][i]==row['before'],(id,row['case'],'CURRENT boundary drift');c['boundaries'][i]=copy.deepcopy(row['after']);row['json_pointer']=f'/contracts/{id}/boundaries/{i}';changed.add(f)
 text=Path('items/'+id+'.md').read_text();labels=set(re.findall(r'^(\d+\.\d+)\s',text,re.M));ev=row['after'].get('evidence','');refs=re.findall(r'\bsteps?\s+(\d+\.\d+)\b',ev,re.I)
 for label in refs:
  if label not in labels:observations.append({'item':id,'case':row['case'],'missing_step':label})
 if row['after']['status']=='checked' and not refs and not re.search(r'statement|definition|example|counterexample',ev,re.I):observations.append({'item':id,'case':row['case'],'unanchored_checked_evidence':ev})
assert not observations,observations
patch=''
for f in sorted(changed):
 before=raw[f].decode();after=json.dumps(files[f],indent=2,ensure_ascii=False)+'\n';old=json.loads(before)
 for id,c in files[f]['contracts'].items():assert {k:v for k,v in c.items() if k!='boundaries'}=={k:v for k,v in old['contracts'][id].items() if k!='boundaries'}
 for sub,body in [('before',before),('proposed',after)]:p=final/sub/f;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(body)
 patch+=''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+f,tofile='b/'+f))
(final/'boundary-only.patch').write_text(patch);packet={'version':1,'run':R,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'FINAL boundary worksheet research-only changes ONLY actual diagnosed rows in batches15..28.','operations':rows,'item_context_receipts':[str(x[0]) for x in parts],'original_helper_context_receipt':f'research/{R}-owner-boundary15-21-template-evidence-final.json','counts':{'template_keys':len(template_keys),'contradiction_occurrences':len(contra),'anchor_errors':len(anchor),'required_unique_keys':len(required),'proposed_rows':len(rows),'items':len(set(x['item'] for x in rows)),'contract_files':len(changed),'status_counts':dict(collections.Counter(x['after']['status'] for x in rows))},'coverage_observation':{'missing_required_keys':[],'extra_unfailed_keys':[],'missing_or_unanchored_explicit_step_credits':[],'current_boundary_preimages_match':True},'preservation':'All nonboundary contract fields compared structurally unchanged, including proof paragraphs/tags, supplier quotes, classifications, finite_smoke entries and historical metadata. Row operations preserve any later independent metadata changes. Full CURRENT before/proposed carriers retained in this unique research directory.','source_phase_basis':f'research/{R}-owner-format-direct-remap-v2-20261016T111752339572Z/ROOT-application.txt','canonical_applied':False,'source_edits':False,'hashes_or_gates':False,'root_source_binding_and_adjudication_pending':True,'unresolved_mathematical_boundary_gaps':[],'helper':'Root-assigned /root/num_step2_rrqr17 completed510template rows15..21; own383template rows22..28 plus92concrete keys. No new independent whole-item mathematical approval is claimed.','native_anchor_grammar_completion':'Helper precise rationales were preserved in original packet. Integration copy adds explicit case-specific actual claim-section/proof-step cue from its recorded source_read and spaces in Proof1.2; no statuses/math changed.'};(final/'operations.json').write_text(json.dumps(packet,indent=2,ensure_ascii=False)+'\n');(final/'completion.json').write_text(json.dumps({k:v for k,v in packet.items() if k!='operations'},indent=2,ensure_ascii=False)+'\n');print(packet['counts'])
