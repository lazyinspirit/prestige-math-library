from pathlib import Path
import json,hashlib,re,datetime
BASE=Path(__file__).parent
RUN='frontier-44-special-representation-examples-28'
OLD='thm-constructible-six-functors-proper-base-change-and-verdier-duality'
NEW='lem-analytic-constructible-sheaves-admit-coherent-six-operations'
ORD='thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace'
IDS=['lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves','thm-proper-hypercovers-compute-constructible-derived-cohomology']
sha=lambda x:hashlib.sha256(x).hexdigest()
canon=lambda x:json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode()
def textguard(p):
 b=Path(p).read_bytes();return {'path':str(p),'observed_raw_sha256':sha(b),'bytes':len(b)}
def objects(x):
 if isinstance(x,dict):
  yield x
  for v in x.values():yield from objects(v)
 elif isinstance(x,list):
  for v in x:yield from objects(v)
def section(s,heading):
 start=s.index(heading);end=s.find('\n## ',start+len(heading));return s[start:len(s) if end<0 else end]
def bodysec(s,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n',s,re.M);end=re.search(r'^## ',s[m.end():],re.M);return s[m.end():m.end()+end.start() if end else len(s)]
carrier_paths={i:Path(f'research/{RUN}-klr-foundation-descent-drafts/items/{i}.md') for i in IDS}
carrier_edits=[];afters={}
for i,p in carrier_paths.items():
 before=p.read_text();assert before.count(OLD)==2
 after=before.replace(OLD,NEW)
 if i==IDS[0]:
  oldfact=next(line for line in after.splitlines() if line.startswith('[F1]'))
  newfact=f'[F1] [[{ORD}]] supplies the ordinary analytic proper base-change map, its naturality for all Čech faces/degeneracies, exact inverse image, and restriction of $f_p^*F$ to the geometric fiber as the constant pullback of $F_x$. [[{NEW}]] supplies restriction to bounded algebraically constructible complexes over an arbitrary field; exact pullback preserves the same cochain lower bound.'
 else:
  oldfact=next(line for line in after.splitlines() if line.startswith('[F3]'))
  newfact=f'[F3] [[{ORD}]] and [[{NEW}]] supply coherent ordinary operations and right-derived composition on bounded algebraically constructible complexes over an arbitrary field. [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] supplies the functorial simplicial-derived diagrams, strict resolutions, and their uniformly bounded-below total model; its local-section descent conclusion is not substituted for proper descent.'
 after=after.replace(oldfact,newfact)
 assert bodysec(before,'Statement')==bodysec(after,'Statement')
 assert bodysec(before,'Proof')==bodysec(after,'Proof')
 q=BASE/'proposed'/'items'/p.name;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(after);b=BASE/'before'/'items'/p.name;b.parent.mkdir(parents=True,exist_ok=True);b.write_text(before)
 afters[i]=after
 carrier_edits.append({'id':i,'target':str(p),'before_file':str(b),'before_raw_sha256':sha(before.encode()),'after_file':str(q),'after_raw_sha256':sha(after.encode()),'edits':['frontmatter deps: replace one exact OLD id with NEW id','Facts source contract: assign proper base change/coherence to ordinary theorem, arbitrary-field constructible closure to ordinary lemma, simplicial strictification/lower-bound model to existing simplicial supplier'],'statement_before_sha256':sha(bodysec(before,'Statement').encode()),'statement_after_sha256':sha(bodysec(after,'Statement').encode()),'proof_steps_before_sha256':sha(bodysec(before,'Proof').encode()),'proof_steps_after_sha256':sha(bodysec(after,'Proof').encode()),'original_statement_changed':False,'original_definition_changed':False})
designp=Path('research/plan-klr-foundation-prerequisites.md');design=designp.read_text();dsection=section(design,'## Proper Cohomological Descent And Constructible Hypercovers');assert dsection.count(OLD)==2
dafter=dsection.replace(OLD,NEW)
(BASE/'before'/'design-section.md').write_text(dsection);(BASE/'proposed'/'design-section.md').write_text(dafter)
planp=Path('research/plan-spec.json');plan=json.loads(planp.read_text());pages=[p for p in plan['pages'] if p['id']=='proper-cohomological-descent-and-constructible-hypercovers'];assert len(pages)==1;page=pages[0]
planedits=[]
for i in IDS:
 records=[x for x in page['items'] if x['id']==i];assert len(records)==1;before=records[0];assert before['deps'].count(OLD)==1 and NEW not in before['deps'];after={**before,'deps':[NEW if d==OLD else d for d in before['deps']]}
 planedits.append({'selector':{'page_id':page['id'],'item_id':i,'field':'deps'},'before_item_record':before,'before_item_record_sha256':sha(canon(before)),'before':before['deps'],'after':after['deps'],'after_item_record_sha256':sha(canon(after)),'scope':'replace only the selected item deps field; do not reserialize or overwrite unrelated plan pages'})
invp=Path(f'research/{RUN}-klr-foundation-descent-inventory-proofcontracts.json');inv=json.loads(invp.read_text());newinv=json.loads(json.dumps(inv));invfieldedits=[]
for i in IDS:
 ent=inv['item_proofcontracts'][i];assert ent['sha256']==sha(carrier_paths[i].read_bytes());assert ent['deps'].count(OLD)==1
 for field,value in [('deps',[NEW if d==OLD else d for d in ent['deps']]),('sha256',sha(afters[i].encode()))]:
  invfieldedits.append({'path':['item_proofcontracts',i,field],'before':ent[field],'after':value});newinv['item_proofcontracts'][i][field]=value
assert inv['new_upstream_inputs'].count(OLD)==1
value=[NEW if d==OLD else d for d in inv['new_upstream_inputs']];invfieldedits.append({'path':['new_upstream_inputs'],'before':inv['new_upstream_inputs'],'after':value});newinv['new_upstream_inputs']=value
(BASE/'proposed'/'descent-inventory-proofcontracts.json').write_text(json.dumps(newinv,indent=2)+'\n')
packetp=Path(f'research/{RUN}-klr-foundation-descent-proof-packet.md');packet=packetp.read_text();oldline=f'- `{OLD}`: restriction to constructible complexes; each pulled coefficient remains bounded below.';assert packet.count(oldline)==1
newline=f'- `{NEW}`: ordinary restriction to bounded algebraically constructible complexes over an arbitrary field; exact pullback preserves the coefficient cochain lower bound.'
newpacket=packet.replace(oldline,newline);(BASE/'proposed'/'descent-proof-packet.md').write_text(newpacket)
# Native inputs are observations, never targets for this proposal.
native45=json.loads(Path(f'research/{RUN}-batch-45.pages.json').read_text());native40=json.loads(Path(f'research/{RUN}-batch-40.pages.json').read_text());native41=json.loads(Path(f'research/{RUN}-batch-41.pages.json').read_text())
selected=[]
for batch,data,ids in [(40,native40,[NEW,ORD]),(41,native41,[OLD]),(45,native45,IDS)]:
 for i in ids:
  matches=[x for x in objects(data) if x.get('id')==i];assert len(matches)==1;x=matches[0];projection={k:x[k] for k in ['id','deps','statement','strategy','axiom_use'] if k in x}
  selected.append({'batch':batch,'file':f'research/{RUN}-batch-{batch}.pages.json','id':i,'observed_projection_sha256':sha(canon(projection)),'projection':projection,'mathematical_proof_acceptance':'not assessed; scaffold contract read only'})
for x in selected:
 if x['batch']==45:assert NEW in x['projection']['deps'] and OLD not in x['projection']['deps']
(BASE/'native-input-projections.json').write_text(json.dumps(selected,indent=2)+'\n')
proposal={'version':1,'run':RUN,'review_scope':'native45 ordinary-supplier defect Finding1 only','round':1,'maximum_rounds':2,'prior_round_history_preserved':True,'author':'/root/klr_six_functor_construction','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'verdict':'confirmed-dependency-contract-mismatch; exact surgical reconciliation proposed; native45 already corrected its scaffold','old_supplier':OLD,'replacement_supplier':NEW,'retained_coherence_supplier':ORD,'affected_ids':IDS,'statement_or_definition_changes':[],'carrier_edits':carrier_edits,'design_edit':{'target':str(designp),'observed_file_raw_sha256':sha(designp.read_bytes()),'guard_heading':'## Proper Cohomological Descent And Constructible Hypercovers','before_section_raw_sha256':sha(dsection.encode()),'before_file':str(BASE/'before'/'design-section.md'),'after_file':str(BASE/'proposed'/'design-section.md'),'after_section_raw_sha256':sha(dafter.encode()),'scope':'replace only the two OLD dependency names within this exact section; preserve all statements and other sections'},'plan_edits':planedits,'plan_observation':textguard(planp),'page_requires_before':page['requires'],'page_requires_after':page['requires'],'inventory_edits':{'target':str(invp),'before_raw_sha256':sha(invp.read_bytes()),'after_file':str(BASE/'proposed'/'descent-inventory-proofcontracts.json'),'after_raw_sha256':sha((BASE/'proposed'/'descent-inventory-proofcontracts.json').read_bytes()),'field_edits':invfieldedits},'proof_packet_edit':{'target':str(packetp),'before_raw_sha256':sha(packetp.read_bytes()),'after_file':str(BASE/'proposed'/'descent-proof-packet.md'),'after_raw_sha256':sha(newpacket.encode()),'before_text':oldline,'after_text':newline,'expected_occurrences':1},'native45':{'manifest_edit':'none; manifest already carries NEW and not OLD for both affected items','consumed_clauses':['ordinary analytic proper base change for each proper Čech map','coherence/naturality for simplicial deletion and repetition maps','exact inverse pullback of field sheaves and constant fibre coefficient identification','bounded algebraically constructible restriction over arbitrary k','existing simplicial strict-resolution model and uniform cochain lower bound'],'new_math_acceptance':'none; proof obligations remain with native suppliers Steps3–5'},'unchanged_inventory_ids':['lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization','ex-proper-cech-descent-does-not-require-acyclic-fibers','ex-hypercover-total-degree-uses-only-a-finite-matching-truncation'],'consumer_impact':{'changed_original_statements_or_definitions':[],'CLAUDE5_consumers_requiring_recheck_due_to_statement_change':[],'reason':'Only supplier dependency identity and fact attribution change. Both arbitrary-field descent statements and all numbered proof steps are byte-identical. No consumer theorem is narrowed; no downstream audit or reassignment is triggered.'},'integration_constraints':['Root integrates only after native45 writers drain','Never modify active native44/45 files, manifests, decisions or state through this proposal','Use item/page identity and exact selected deps/record guards for the plan; whole-file hash is observational because unrelated native work may append to it','For each standalone research carrier/packet require its exact before raw hash; a mismatch requires fresh scoped reconciliation, never force replacement','Do not refresh old source-readings, check receipts, consumer verdicts, or historical baselines as though they covered the edited after bytes','No gates/readiness/acceptance stamps are created'],'actual_input_reads':[textguard(p) for p in [Path('CLAUDE.md'),Path('README.md'),Path(f'research/{RUN}-batch-45.notes.md'),*carrier_paths.values(),designp,invp,packetp]],'scoped_checks':'pending checks on proposed copies only'}
(BASE/'proposal.json').write_text(json.dumps(proposal,indent=2)+'\n')
print('Created guarded proposal and two proposed carrier copies; no targets edited')
