import pathlib,json,hashlib,re,yaml
run='non-ml-math-remaining-81-2026-10-18';id='cor-q-is-meager-and-not-g-delta'
out=pathlib.Path('research/'+run+'-owner-step4-published-alerts-cor-q')
sha=lambda b:hashlib.sha256(b).hexdigest()
src=pathlib.Path('items/'+id+'.md');before=src.read_bytes();text=before.decode()
assert re.search(r'^status: published$',text,re.M)
old=r'Uncountability and being residual are independent properties: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable.'
new=r'Residuality implies uncountability for subsets of $\mathbb{R}$, but uncountability does not imply residuality: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable. Indeed, every countable subset of $\mathbb{R}$ is meager by the singleton argument in step 1.1 (with the empty set represented by an all-empty sequence). A meager set cannot also be residual: its union with its meager complement would make $\mathbb{R}$ meager, contradicting [[thm-baire-category-r]].'
assert text.count(old)==1
proposed=text.replace(old,new)
assert text.split('## Remarks')[0]==proposed.split('## Remarks')[0]
(out/'before').mkdir(exist_ok=True);(out/'proposed').mkdir(exist_ok=True)
(out/'before'/src.name).write_bytes(before);(out/'proposed'/src.name).write_text(proposed)
# Actual metadata dependency inventory (not a new audit or content validation).
graph={};fm_guard={};all_text={}
for p in pathlib.Path('items').glob('*.md'):
 t=p.read_text();all_text[p.stem]=t
 fm=t.split('---',2)[1] if t.startswith('---') else ''
 # Read only deps rather than parsing unrelated verification/frontmatter fields.
 m=re.search(r'^deps:\s*(\[[\s\S]*?\]|\n(?:[ \t]+-[^\n]*\n?)*)',fm,re.M)
 if m:
  try:graph[p.stem]=yaml.safe_load('deps: '+m.group(1))['deps'] or []
  except yaml.YAMLError:graph[p.stem]=[]
 else:graph[p.stem]=[]
direct=sorted(x for x,ds in graph.items() if id in ds)
seen={id};front=[id]
while front:
 v=front.pop()
 for x,ds in graph.items():
  if x not in seen and v in ds:seen.add(x);front.append(x)
consumer_notes={
 'cor-no-function-is-continuous-exactly-on-q':'Read complete body. L2 and Proof 3.1 use only unchanged claim 3, Q not G_delta. Its Statement contrast uses the unchanged Q/X descriptive classes; no use of the false independence remark.',
 'fs-q-is-g-delta':'Read complete body. L1 and Refutation 1.1-1.2 use unchanged claims 1-3 and the dense-open Baire argument. No premise involves residuality implying or not implying uncountability.',
 'cex-irrationals-are-not-f-sigma':'Read complete body. L1 and Counterexample 1.1-2.1 use unchanged X residual G_delta and not F_sigma. Its Remarks discuss uncountability and measure separately, without the erroneous independence assertion.',
 'ex-rationals-are-borel-but-not-g-delta':'Read complete body. L1 and Verification 1.1/2.1 use unchanged F_sigma/not-G_delta conclusions. The changed Remark is irrelevant to its Borel example.',
 'fs-the-rational-numbers-form-a-baire-space':'Read complete body. F3 quotes the unchanged Statement, and Refutation 3.1 cross-checks Q meager/not-G_delta. Its main subspace singleton proof uses its other suppliers, not the corrected Remark.',
 'fs-every-metrizable-space-is-cech-complete':'Read complete body. F4 quotes the unchanged Statement and Refutation 2.1-3.1 uses Q not Baire/not-G_delta. No use of the independence sentence.'}
assert set(direct)==set(consumer_notes)
consumers=[{'id':x,'source':'items/'+x+'.md','source_raw_sha256':sha(pathlib.Path('items/'+x+'.md').read_bytes()),'read_review':consumer_notes[x],'repair_required':False} for x in direct]
text_refs=[]
for x,t in all_text.items():
 if x!=id and id in t:
  text_refs.append({'source':'items/'+x+'.md','dependency_consumer':x in direct,'reference_lines':[i for i,line in enumerate(t.splitlines(),1) if id in line],'corrected_sentence_reused':old in t})
page_refs=[]
for p in pathlib.Path('library').rglob('*.md'):
 t=p.read_text()
 if id in t:page_refs.append({'source':str(p),'source_raw_sha256':sha(p.read_bytes()),'reference_lines':[i for i,line in enumerate(t.splitlines(),1) if id in line],'corrected_sentence_reused':old in t})
read_ids=[id,'thm-baire-category-r','def-nowhere-dense-meager','ex-baire-reproves-r-uncountable','cor-irrationals-uncountable','thm-cantor-set-properties','lem-countable-iff-surjection-from-n','def-countable']+direct
read_notes={
 id:'Complete current Statement, Facts L1-L7, Proof 1.1-6.1 and Remarks read. 1.1 proves real singletons closed/nowhere dense; 1.2-2.1 enumerate rational singletons; 3.1 handles irrational complement. 4.1-6.1 interleave V_n/W_n using N cross N indexing and contradict Baire. Only second Remark falsely calls uncountability/residuality independent.',
 'thm-baire-category-r':'Complete current Statement/Facts/Proof 1.1-9.1 and Remarks read. Canonical rational-endpoint refinement, least-index recursion and nested intervals give dense intersection; 9.1 proves no sequence of nowhere dense sets covers R. No choice axiom is used by this real-line proof.',
 'def-nowhere-dense-meager':'Complete Definition and Remarks read. Countable means a witnessed N-sequence, empty/finite presentations are handled by padding, meager sets are downward closed, and the explicit N cross N interleaving proves union of two meager sets meager without countable choice. Residual means meager complement.',
 'ex-baire-reproves-r-uncountable':'Complete Example/Facts/Verification/Remarks read. Verification 1.1 proves singleton nowhere density, 2.1 excludes every enumerating surjection by Baire, and 3.1 translates this to uncountability. This authenticates the same countable-singleton mechanism for the corrected Remark.',
 'cor-irrationals-uncountable':'Complete current Statement/Facts/Proof/Remarks read. Proof 2.1 separates empty complement and 2.2-4.1 interleaves two supplied enumerations; 5.1 contradicts R uncountable. The original Remark remains correct about this separate cheap route.',
 'thm-cantor-set-properties':'Complete current Statement/Facts/Proof/Remarks read. Proof 2.2 proves C nowhere dense; 3.1 proves C uncountable through the nonempty perfect-set supplier. Thus C is the unchanged witness that uncountability does not imply residuality, since no meager set is residual in R.',
 'lem-countable-iff-surjection-from-n':'Complete Statement/Facts/Proof/Remarks read. Proof 1.1/2.1 supplies an enumeration for any nonempty at-most-countable set, and 2.2-4.1 reverses it using least preimages. Empty sets are explicitly separated in Remarks; no choice is needed.',
 'def-countable':'Complete Definition and Remarks read. Countable means at most countable, including finite and empty sets; uncountable means not at most countable. This validates the corrected paragraph for all countable subsets, not just countably infinite ones.'}
reads=[]
for x in dict.fromkeys(read_ids):
 p=pathlib.Path('items/'+x+'.md');raw=p.read_bytes()
 reads.append({'id':x,'source':str(p),'source_raw_sha256':sha(raw),'actual_read_review':read_notes.get(x,consumer_notes.get(x))})
# Immutable native observations: no native payload is modified.
context_path=pathlib.Path('research/'+run+'-batch-2-step5-context.json');context=json.loads(context_path.read_text())
alerts=[(i,a) for i,a in enumerate(context['alerts']) if a['item']==id];assert len(alerts)==1
result_path=pathlib.Path('research/'+run+'-dispatch/alpha-batch-read-2.attempt-1.result.json');result=json.loads(result_path.read_text())
state_path=pathlib.Path('.autopilot/'+run+'/state.json');state=json.loads(state_path.read_text());dispatch=state['dispatches']['4-judge:2']
gate_path=pathlib.Path('research/'+run+'-owner-step4-first-battery/step5-digests.native-event.json');gate=json.loads(gate_path.read_text())
native={'batch':2,'digest':{'path':str(context_path),'raw_sha256':sha(context_path.read_bytes()),'alert_json_pointer':'/alerts/'+str(alerts[0][0]),'exact_alert':alerts[0][1],'group':context['group'],'batches':context['batches']},'attempt':{'dispatch_key':'4-judge:2','observed_dispatch':dispatch,'result_path':str(result_path),'result_raw_sha256':sha(result_path.read_bytes()),'attempt':result['attempt'],'evidence_tag':result['evidence_tag'],'role':result['role'],'label':result['label'],'started_at':result['started_at'],'ended_at':result['ended_at'],'ok':result['ok'],'exit_code':result['exit_code']},'actual_digest_gate':{'path':str(gate_path),'raw_sha256':sha(gate_path.read_bytes()),'event':gate},'disposition':'Alert confirmed as a Remark defect; native severity, digest, attempt result and gate event are historical inputs and remain unchanged.'}
(out/'native-alert-references.json').write_text(json.dumps(native,ensure_ascii=False,indent=2)+'\n')
# Existing logical citation content uses the unchanged Statement, so there are no contract text operations.
bindings=[]
for cp in ['research/'+run+'-batch-2.proof-contracts.json','research/'+run+'-proof-contracts.json']:
 p=pathlib.Path(cp);j=json.loads(p.read_text())
 for consumer,c in j.get('contracts',{}).items():
  for i,cite in enumerate(c.get('citations',[])):
   if cite.get('source')==id:bindings.append({'contract_path':cp,'consumer':consumer,'citation_index':i,'exact_current_citation':cite,'disposition':'Supplier Statement and Proof unchanged; cited text/interface unchanged. Root owns hash-context recertification.'})
(out/'consumer-inventory.json').write_text(json.dumps({'direct_dependency_consumers':consumers,'all_transitive_dependency_consumer_ids':sorted(seen-{id}),'transitive_review_scope':'Inventory only beyond the six direct consumer full reads: no original Statement or Definition changes, so no changed-interface propagation is required. No broader audit claimed.','all_item_text_references':text_refs,'page_references':page_refs,'erroneous_sentence_reused_elsewhere_in_items_or_pages':False},ensure_ascii=False,indent=2)+'\n')
proposal={'run':run,'cycle':1,'id':id,'source':str(src),'current_status':'published','source_raw_sha256':sha(before),'before_file':str(out/'before'/src.name),'proposed_file':str(out/'proposed'/src.name),'kind':'isolated surgical published Remark correction proposal, not a receipt, claim, audit stamp or final seal','exact_source_operations':[{'op':'replace-once','section':'Remarks','remark':2,'old':old,'new':new}],'field_operations':[],'contract_operations':[],'current_contract_citation_bindings':bindings,'statement_changed':False,'definition_changed':False,'facts_changed':False,'phase_proof_changed':False,'dependency_metadata_changed':False,'mathematical_disposition':{'finding':'confirmed','defect':'False two-way independence assertion: residuality entails uncountability in R.','smallest_prerequisite':'Real singletons are nowhere dense (current proof 1.1); a nonempty countable set has a surjective N-enumeration; empty set is meager; two meager sets have a witnessed interleaved union; Baire says R is not meager. All are already local or read proved suppliers.','argument':'If S is countable, enumerate its singletons (or use the all-empty sequence), so S is meager. If S were also residual, R minus S is meager by definition; union of these two explicit meager presentations gives R meager, contradicting Baire. Thus residual S is uncountable. The Cantor set is uncountable and meager, hence not residual by the same union contradiction, so the converse fails.','scope_preserved':'Retains the original three Statement conclusions, entire phase proof and all examples in the Remark. Retains the independent elementary proof of irrational uncountability and strengthens the explanatory relation to the correct one-way implication.','proof_interface_followthrough':'No change to Facts, Statement, Definition, phase proof or dependency list is necessary; the short justification lives in the corrected Remark and uses existing local 1.1 and existing category/Baire deps.','choice':'Only one enumeration and one witnessing meager complement sequence are fixed; merging two sequences is explicit. No countably infinite family of meager witnesses is selected and no new choice hypothesis is introduced.'},'actual_current_full_read_records':reads,'native_refs':str(out/'native-alert-references.json'),'consumer_inventory':str(out/'consumer-inventory.json'),'validation':'Exact one-occurrence replacement and byte-identical prefix before Remarks checked locally. No validators/gates run; root integrates the published correction using its required ownership/receipt and recertification workflow.'}
(out/'proposal.json').write_text(json.dumps(proposal,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'packet':str(out/'proposal.json'),'full_item_reads':len(reads),'direct_consumers_read':len(direct),'transitive_consumer_inventory':len(seen)-1,'contract_citation_bindings':len(bindings),'statement_proof_unchanged':True,'source_raw_guard':sha(before)}))
