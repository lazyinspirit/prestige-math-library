import pathlib,json,yaml,re,hashlib
R='frontier-44-special-representation-examples-28-six-step';B=pathlib.Path('research/'+R+'-owner-escalation-repairs');O=B/'integration/renewed-helper-metadata';read=lambda p:json.loads(pathlib.Path(p).read_text());sha=lambda b:hashlib.sha256(b).hexdigest()
# Refuse any shared mutation until the assigned PBW source owner hands off final contracts.
PBW=B/'klr_diagrams/renewed-pbw-cap/final-proof-contracts-proposal.json'
assert PBW.exists(),'PBW final contract packet not yet handed off'
allpaths=sorted(pathlib.Path('research').glob(R+'-batch-*.pages.json'))+sorted(pathlib.Path('research').glob(R+'-batch-*.proof-contracts.json'));original={str(p):p.read_bytes() for p in allpaths};docs={p:json.loads(b) for p,b in original.items()};homes={};pagehomes={}
for p,d in docs.items():
 if not p.endswith('.pages.json'):continue
 for page in d:
  pagehomes[page['id']]=(p,page)
  for it in page['items']:homes[it['id']]=(p,page,it)
oldids=set(homes);oldpageids=set(pagehomes)
contracts=[('quantum_schur_foundation/renewed-integral/proof-contracts.proposed.json','/root/author_quantum_schur_integral'),('quantum_schur_foundation/renewed-forms/proof-contracts.proposed.json','/root/author_quantum_schur_forms'),('modular-branching/renewed-authoring/proof-contracts.proposed.json','/root/author_modular_endpoints'),('klr_flag_model/renewed-authoring/proof-contracts.proposed.json','/root/author_klr_flag_inverse'),('klr_flag_model/renewed-authoring/model-proof-contract.proposed.json','/root/author_klr_flag_inverse'),('klr_diagrams/renewed-pbw-cap/final-proof-contracts-proposal.json','/root/author_klr_pbw_cap'),('klr_categorification/renewed-authoring/dual-bases-proof-contract-proposal.json','/root/repair_klr_categorification'),('quasi-r/renewed-authoring/chain-construction.proof-contracts.proposed.json','/root/author_quasir_finite_envelope'),('quasi-r/renewed-structural-envelope/proof-contracts.proposed.json','/root/author_based_module_envelopes')]
newhomes={'lem-integral-divided-power-tensor-action-surjects-onto-type-a-q-schur-algebra':('type-a-hecke-specht-modules-and-cellular-bases',None),'lem-integral-quantum-highest-weight-modules-identify-with-normalized-q-schur-weyl-cells':('type-a-hecke-specht-modules-and-cellular-bases',None),'lem-polynomial-quantum-schur-first-level-weyl-filtration-and-hecke-corner':('type-a-hecke-specht-modules-and-cellular-bases',None),'lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells':('modular-branching-and-the-good-node-crystal',None),'lem-general-hecke-cellular-simple-labels-match-the-basic-crystal':('level-one-fock-space-and-residue-crystals',None),'lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse':('cyclotomic-klr-algebras-and-highest-weight-categorification','lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations'),'lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection':('cyclotomic-klr-algebras-and-highest-weight-categorification','lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form'),'lem-cyclotomic-klr-induction-restriction-bimodules-have-compatible-frobenius-dual-bases':('cyclotomic-klr-algebras-and-highest-weight-categorification',None),'lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains':('balanced-triples-and-global-crystal-bases',None),'cex-finite-type-based-modules-need-not-have-finite-basis-compatible-envelopes':('balanced-triples-and-global-crystal-bases-examples',None),'def-hh-type-a-quantum-tensor-action-for-centralizers':('type-a-hecke-specht-modules-and-cellular-bases',None),'lem-hh-quantum-presentation-and-tensor-action-descent':('type-a-hecke-specht-modules-and-cellular-bases',None)}
HH=read(B/'author_generic_schur_weyl/proof-contracts.proposed.json');contractfields={};authors={};evidence={}
for rel,author in contracts:
 p=B/rel;x=read(p);evidence[str(p)]=sha(p.read_bytes())
 for ident,entry in x['contracts'].items():contractfields[ident]=entry;authors[ident]=author
for ident in ['def-hh-type-a-quantum-tensor-action-for-centralizers','lem-hh-quantum-presentation-and-tensor-action-descent']:contractfields[ident]=HH['contracts'][ident];authors[ident]='/root/author_generic_schur_weyl'
changedids=set(contractfields);changedids.update(['rem-the-crystal-identification-does-not-elementarily-identify-cellular-simple-labels','ex-normal-and-good-nodes-for-a-large-partition']);sources={};sourcefields={}
def itemsource(ident):
 p=pathlib.Path('items')/(ident+'.md');b=p.read_bytes();t=b.decode();m=re.match(r'^---\n(.*?)\n---\n?(.*)',t,re.S);f=yaml.safe_load(m[1]);sources[str(p)]=sha(b);sourcefields[ident]=(f,m[2]);return f,m[2]
for ident in sorted(changedids):
 f,body=itemsource(ident)
 if ident not in homes:
  assert ident in newhomes,'unauthorized new helper '+ident
  pageid,before=newhomes[ident];p,page=pagehomes[pageid];entry={'id':ident,'kind':f['kind'],'title':f['title']};pos=next((j for j,x in enumerate(page['items']) if x['id']==before),len(page['items']));page['items'].insert(pos,entry);homes[ident]=(p,page,entry)
 p,page,it=homes[ident];sections={m.group(1):m.group(2).strip() for m in re.finditer(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)',body,re.M|re.S)}
 for h in ['Statement','Definition','Example','Statement refuted']:
  if h in sections:it['statement']=sections[h];break
 it['strategy']=next((sections[h] for h in ['Proof','Verification','Refutation','Counterexample'] if h in sections),f.get('proof_strategy',it.get('strategy','Definition as recorded in the source.')))
 for k in ['deps','provenance','sources','forward_refs','justified_by','generation']:
  if k in f:it[k]=f[k]
  elif k in ['forward_refs','justified_by','generation']:it.pop(k,None)
 cp=p.replace('.pages.json','.proof-contracts.json');doc=docs[cp]
 if ident not in doc['scope']:doc['scope'].append(ident)
 if ident in contractfields:doc['contracts'][ident]=contractfields[ident]
# Exact newHH closure: all other HH consumed dependencies already published external suppliers.
hhclosure=[]
for ident in ['def-hh-type-a-quantum-tensor-action-for-centralizers','lem-hh-quantum-presentation-and-tensor-action-descent']:
 for dep in sourcefields[ident][0]['deps']:
  if dep.startswith(('def-hh','lem-hh')) and dep not in newhomes:
   f,body=itemsource(dep);hhclosure.append({'id':dep,'status':f.get('status'),'run':f.get('pipeline_run'),'raw_sha256':sources['items/'+dep+'.md']});assert f.get('status')=='published','HH prerequisite is not available '+dep
# Dependency-only numeric maintenance; no source labels or receipts altered.
allitems={i['id']:i for p,d in docs.items() if p.endswith('.pages.json') for page in d for i in page['items']};levels={};vis=set();aliases={}
for ident in allitems:
 f=sourcefields.get(ident,(None,None))[0]
 if f is None:
  text=(pathlib.Path('items')/(ident+'.md')).read_text();m=re.match(r'^---\n(.*?)\n---',text,re.S);f=yaml.safe_load(m[1]) if m else {}
 for alias in f.get('aliases',[]) or []:aliases[alias]=ident

def level(i):
 if i in levels:return levels[i]
 assert i not in vis,'logical dependency cycle '+i
 vis.add(i);v=0
 for dep in allitems[i].get('deps',[]):
  dep=aliases.get(dep,dep)
  if dep in allitems:v=max(v,level(dep)+1)
 vis.remove(i);levels[i]=v;return v
for i,it in allitems.items():it['dependency_level']=level(i)
# Actual cross-batch logical edge graph, avoiding cycles created by proposed supplier homes.
batchof={i:str(re.search(r'-batch-(\d+)',homes[i][0])[1]) for i in homes};batchdeps={b:set() for b in batchof.values()}
for i,it in allitems.items():
 for dep in it.get('deps',[]):
  dep=aliases.get(dep,dep)
  if dep in batchof and batchof[dep]!=batchof[i]:batchdeps[batchof[i]].add(batchof[dep])
seen=set();stack=set()
def batchvisit(b):
 assert b not in stack,'cross-batch cycle '+b
 if b in seen:return
 stack.add(b)
 for d in batchdeps[b]:batchvisit(d)
 stack.remove(b);seen.add(b)
oldbatchdeps={b:set() for b in batchof.values()}
for path,data in original.items():
 if not path.endswith('.pages.json'):continue
 for page in json.loads(data):
  for item in page['items']:
   for dep in item.get('deps',[]):
    dep=aliases.get(dep,dep)
    if dep in oldids and batchof[dep]!=batchof[item['id']]:oldbatchdeps[batchof[item['id']]].add(batchof[dep])
def reaches(graph,start,target,seen=None):
 seen=set() if seen is None else seen
 if start==target:return True
 if start in seen:return False
 seen.add(start);return any(reaches(graph,d,target,seen) for d in graph[start])
newedges=[(b,d) for b,ds in batchdeps.items() for d in ds if d not in oldbatchdeps[b]]
newcycleedges=[(b,d) for b,d in newedges if reaches(batchdeps,d,b) and not (reaches(oldbatchdeps,b,d) and reaches(oldbatchdeps,d,b))]
assert not newcycleedges,'new cross-batch cycle edges '+str(newcycleedges)
preexistingcyclicbatches=sorted(b for b,ds in oldbatchdeps.items() if any(reaches(oldbatchdeps,d,b) for d in ds))
assert oldids<=set(homes) and oldpageids==set(pagehomes)
# Build origin drafts, never attest dates/acceptance or manufacture final worker coverage.
baselinepath=pathlib.Path('research/'+R+'-step3-auditor-baseline.json');baseline=read(baselinepath);templates=[];placements=[]
for ident in sorted(set(homes)-oldids):
 p,page,it=homes[ident];f,body=sourcefields[ident];sourcepath='items/'+ident+'.md';claim={k:it.get(k) for k in ['id','kind','title','statement']};claim['source_claim']=[s.strip() for s in re.split(r'^## ',(pathlib.Path(sourcepath)).read_text(),flags=re.M) if re.match(r'^(Statement|Definition)\b',s)];excluded=not any(x['id']==ident for x in baseline['items']) and ident not in baseline['existing_item_files'];assert excluded,'immutable baseline includes new ID '+ident
 templates.append({'id':ident,'author_identity':authors[ident],'owner_identity':'/root','page':page['id'],'batch':str(re.search(r'-batch-(\d+)',p)[1]),'current_claim_sha256':sha(json.dumps(claim,ensure_ascii=False,separators=(',',':')).encode()),'item_file_sha256':sources[sourcepath],'baseline_file_sha256':sha(baselinepath.read_bytes()),'baseline_sha256':sha(json.dumps(baseline,ensure_ascii=False,separators=(',',':')).encode()),'baseline_excludes_new_id':True,'timeline':{'mode':'unknown','after_baseline':True,'reason':'Actual owner-delegated new authoring after immutable baseline; precise session start/end times are unavailable and not invented.'},'attested_at':None,'status':'template-only; root must bind actual assignment/authorship/escalation evidence and record actual attestation time after page integration','scoped_final_check_evidence_required':True,'contract_proposal_source':[p for p in evidence if ident in read(p).get('scope',[])],'no_native_coverage_or_mathematical_acceptance':True})
 placements.append({'id':ident,'page':page['id'],'page_path':'library/'+page['category']+'/'+page['id']+'.md','list':'examples' if page['kind']=='B' else 'items','existing_source_page_unchanged':True,'dependency_level':it['dependency_level'],'scope':'neededHHowner-context-addition' if ident.startswith(('def-hh','lem-hh')) else 'completed-renewed-new-prerequisite'})
# Guard original bytes and exact sources; archive every actual changed aggregate before write.
changes={};pending={}
for p,d in docs.items():
 b=(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()
 if b!=original[p]:pending[p]=b
for p,h in sources.items():assert sha(pathlib.Path(p).read_bytes())==h,'source writer changed '+p
for p in pending:assert pathlib.Path(p).read_bytes()==original[p],'concurrent aggregate writer '+p
before=O/'before';before.mkdir(exist_ok=True)
for p,b in pending.items():
 a=before/pathlib.Path(p).name
 if a.exists():assert a.read_bytes()==original[p],'archive conflicts'
 else:a.write_bytes(original[p])
for p,b in pending.items():pathlib.Path(p).write_bytes(b);changes[p]={'before_sha256':sha(original[p]),'after_sha256':sha(b)}
(O/'origin-evidence-templates.json').write_text(json.dumps(templates,indent=2)+'\n');(O/'page-placement-proposals.json').write_text(json.dumps(placements,indent=2)+'\n');(O/'integration-report.json').write_text(json.dumps({'run':R,'changed_files':changes,'new_items':sorted(set(homes)-oldids),'changed_source_mirrors':sorted(changedids&oldids),'old_inventory_preserved':len(oldids),'original_page_count_preserved':len(oldpageids),'current_inventory':len(homes),'source_guards':sources,'contract_packet_guards':evidence,'necessary_HH_external_published_closure':hhclosure,'batch_logical_cycle_check':{'new_cycle_edges':newcycleedges,'new_edges':newedges,'preexisting_cyclic_batches_unchanged':preexistingcyclicbatches,'placement_reason':'integral/forms on13 avoids proposed15backedge'},'full_gates_or_validators_run':False,'reused_owner_final_checks':True,'actual_source_pages_plan_receipts_native_ledger_unchanged':True,'remaining_holds':['unrestricted quasi-R tensor globalization','full coherent two-color trace/assembly','unfinished periodic/tensor escape helper'],'origin_registration_pending_root':True},indent=2)+'\n');print(json.dumps({'changed_aggregates':len(changes),'new_items':len(set(homes)-oldids),'old_mirrors':len(changedids&oldids),'inventory_before':len(oldids),'inventory_after':len(homes),'pages':len(oldpageids)}))
