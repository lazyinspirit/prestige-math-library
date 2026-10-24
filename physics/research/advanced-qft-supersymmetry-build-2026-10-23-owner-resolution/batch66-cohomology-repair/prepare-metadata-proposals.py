from pathlib import Path
import json,re,hashlib,yaml,subprocess
r='advanced-qft-supersymmetry-build-2026-10-23';b=Path('research/'+r+'-owner-resolution/batch66-cohomology-repair');doc=json.load(open(b/'native-terminal-and-preimages.json'));contracts_path=Path('research/'+r+'-batch-66.proof-contracts.json');contracts=json.load(open(contracts_path))['contracts'];maps=json.load(open(b/'canonical-numbering-map.json'))['maps'];rows=[];updates=[]
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
for id in doc['item_ids']:
 p=Path('items')/(id+'.md');s=p.read_text();m=yaml.safe_load(re.match(r'\A---\s*\n(.*?)\n---(?:\n|\Z)',s,re.S).group(1));pub=re.search(r'^## (Statement|Definition|Example)\n(.*?)(?=^## |\Z)',s,re.M|re.S);old=contracts[id].get('boundaries',[]);new=json.loads(json.dumps(old));mp=maps.get(id,{})
 for row in new:
  for k in ['evidence','reason']:
   if isinstance(row.get(k),str):row[k]=re.sub(r'\b\d+\.\d+\b',lambda a:mp.get(a.group(),a.group()),row[k])
 def setcase(case,text):
  a=next(a for a in new if a['case']==case);a['evidence' if 'evidence' in a else 'reason']=text
 if id=='lem-qftx-gaga-frechet-complex-compact-finiteness':setcase('endpoints','The proof covers q=0 using the actual degree -1 term; for a complex concentrated in nonnegative degrees that term is zero. Closed finite-codimensional coboundaries and the quotient argument apply in degree zero as well.')
 if id=='lem-qftx-gaga-coherent-section-topology-well-defined':setcase('nonempty-choice','Full AC supplies the successive local Oka/kernel-vanishing neighborhoods and countable overlap refinements. The inverse gluing step uses the explicit Fréchet open-mapping theorem, with all source and target spaces already proved Fréchet.')
 if id=='lem-qftx-gaga-cstar-laurent-decomposition':
  setcase('zero','For f=0 the coefficient integral in step 1.1 gives c_n=0 for every n, so both entire parts and the isolated coefficient a vanish.')
  setcase('one','For f(z)=z^{-1}, the coefficient integral in step 1.1 gives c_{-1}=1 and every other coefficient zero; thus a=1 and g=h=0. This checks the Laurent decomposition, without asserting a cohomology class in this lemma.')
  setcase('degenerate','Either entire part may vanish. The explicit input f(z)=z^{-1} has g=h=0 and a=1; neither construction divides by a part or assumes it is nonzero.')
 if id=='thm-qftx-gaga-analytic-compact-projective-coherent-finiteness':
  setcase('one','Steps 1.2, 2.1 and 3.1 construct the nested acyclic covers and section surjectivity for every 1≤r≤3, including r=1.')
  setcase('nonempty-choice','Full AC supplies the exact Oka/local-acyclicity premises and finite selections from compact covers; steps 1.2 and 4.2 retain all required relation-kernel resolution neighborhoods.')
 if id=='ex-qftx-gaga-analytic-finite-not-vanishing':setcase('one','For f(z)=z^{-1}, the Laurent coefficient a=1, so the quotient calculation in step 2.1 gives the nonzero basis class [z^{-1}e_0].')
 assert[(a['case'],a['status'])for a in old]==[(a['case'],a['status'])for a in new]
 for a,z in zip(old,new):
  if a!=z:updates.append({'id':id,'case':a['case'],'before':a,'after':z})
 row={k:m[k] for k in ['id','kind','title','domain','library','deps','dependency_roles','dependency_level','sources','provenance','proof_strategy','justified_by'] if k in m};row['statement']=pub.group(2).strip();row['reference']=str(p)+'#'+pub.group(1);rows.append({'row':row,'source':str(p),'source_raw_sha256':sha(p),'boundaries':new,'routine_steps':contracts[id].get('routine_steps',[])})
(b/'metadata-contract-update-proposal.json').write_text(json.dumps({'version':1,'apply_now':False,'run':r,'batch':66,'current_contract':str(contracts_path),'current_contract_sha256':sha(contracts_path),'row_updates':rows,'boundary_evidence_updates':updates,'case_status_rows_preserved':True,'contract_regeneration':'Use canonical facts-block.mjs factParagraphs/numberedProofSteps/sourceSectionText to regenerate citations and derivations from final sources, after canonical65 identities exist; preserve the boundary cases/statuses and routine_steps while applying these exact evidence-text updates.','canonical_plan_scope':'Expand only the actual66 A/B rows to the native14 item inventory; retain approved public main/example scopes and the current page prerequisite authority.','no_production_metadata_or_readiness_written':True},indent=2)+'\n')
# Compute prospective in-run dependency levels with the approved65 identity map.
identity={'thm-qftx-gaga-local-coherent-acyclicity':'thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity','ex-qftx-gaga-point-quotient-coherent-acyclicity':'ex-qftx-gaga-analytic-point-sheaf-acyclicity','ex-qftx-gaga-hyperplane-quotient-coherent-acyclicity':'ex-qftx-gaga-analytic-hyperplane-quotient'};nodes={};diagnostics=[];inputhashes={}
for f in Path('research').glob(r+'-batch-*.pages.json'):
 for page in json.load(open(f)):
  for a in page.get('items',[]):
   id=a if isinstance(a,str) else a['id'];p=Path('items')/(id+'.md')
   if not p.exists():diagnostics.append({'missing':str(p)});continue
   try:m=yaml.safe_load(re.match(r'\A---\s*\n(.*?)\n---(?:\n|\Z)',p.read_text(),re.S).group(1))
   except Exception as e:diagnostics.append({'path':str(p),'parse_error':str(e)});continue
   key=identity.get(id,id);nodes[key]={'deps':[identity.get(d,d) for d in m.get('deps',[])],'source':str(p),'old_level':m.get('dependency_level')};inputhashes[str(p)]=sha(p)
levels={};visiting=set()
def level(id):
 if id in levels:return levels[id]
 assert id not in visiting,'cycle '+id
 visiting.add(id);ds=[d for d in nodes[id]['deps'] if d in nodes];v=1+max(map(level,ds)) if ds else 0;visiting.remove(id);levels[id]=v;return v
for id in nodes:level(id)
changes=[{'id':id,**nodes[id],'prospective_level':levels[id]}for id in nodes if nodes[id]['old_level']!=levels[id]]
(b/'prospective-levels-after-65-id-restoration.json').write_text(json.dumps({'apply_now':False,'semantics':'Current-run active source deps only; approved65 IDs normalized prospectively; external suppliers remain context. No level or source file changed. Root must recompute against its final coordinated snapshot.','input_count':len(nodes),'input_source_sha256':inputhashes,'diagnostics':diagnostics,'all_changed_levels':changes,'batch66_levels':{id:levels[id] for id in doc['item_ids']},'run_max':max(levels.values())},indent=2)+'\n')
print('Proposed14 rows;',len(updates),'boundary evidence updates; future66 levels', {id:levels[id] for id in doc['item_ids']});print('Level diagnostics',len(diagnostics),'all changedlevels',len(changes))
