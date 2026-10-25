import pathlib,json,hashlib,re,copy,collections
D=pathlib.Path(__file__).parent;P=D/'proposed';B=D/'before';P.mkdir(exist_ok=True);B.mkdir(exist_ok=True);inv=json.loads((D/'inventory.json').read_text());by={r['id']:r for r in inv['rows']};sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();ops=[];rationales=[];changes={};headids=['lem-qftx-n4-adjoint-cubic-gauge-invariance','lem-qftx-n2-hypermultiplet-gauge-invariant-couplings']
def change(id,dep,new,reason):
 old=by[id]['source_roles'][dep];assert by[id]['manifest_roles'][dep]==old;changes.setdefault(id,{})[dep]=(old,new);rationales.append({'item':id,'supplier':dep,'before':old,'after':new,'scientific_rationale':reason})
for r in inv['invalid_roles']:
 if r['where']!='source':continue
 if r['role']=='inference-prerequisite':
  reason={'def-cm-confidence-set-and-coverage':'The actual experiment uses the confidence-set definition to formulate what a reported confidence label does and does not mean. This definition proves no observed exclusion, nominal coverage of this analysis, or model truth. Its Procedure/Observations/Interpretation and uncertainty conditions remain unchanged.','def-aqft-calibrated-pvalue':'The actual experiment uses the supplied null-tail definition to state the meaning and limits of a collaboration-reported compatibility/local p-value. No p-value is recomputed, no new sampling calibration is proved, and no observation is deduced from the definition.','def-aqft-cls-exclusion-ratio':'The source-defined CLs ratio formulates the reported exclusion procedure and explicitly does not supply a posterior probability or exact coverage theorem. The actual tau-search Procedure/Observations uses this terminology without deriving the measured contour.'}[r['dep']]
  change(r['id'],r['dep'],'formulation-prerequisite',reason)
 else:change(r['id'],r['dep'],'mathematical-premise','The exact supplier is a purely mathematical definition/result used in the finite stable scalar ADHM/Borel–Moore computation. The lemma proves C2 quotient, torus weights and localized mass insertion; its physical-domain example consumes that mathematical coefficient. Neither edge assumes a physical model, continuum path integral or empirical observation. Canonical mathematical-premise covers both mathematical definitions and proved results.')
# Exact nonproof physical-data uses; unchanged adopted models are formulation inputs, not deductions of postulates/outcomes.
for id,deps,reason in [
 ('post-qftx-n2-vector-hypermultiplet-model',['post-qftx-n1-gauge-matter-model','post-qftx-nonabelian-yang-mills-model'],'The postulate uses the earlier N1 matter and Yang–Mills bundle/group/connection/coupling conventions to FORMULATE the richer classical N2 action. It separately adopts eight-supercharge invariance; the supplied models do not prove that assumption or construct a quantum measure.'),
 ('post-qftx-n4-super-yang-mills-model',['post-qftx-n1-gauge-matter-model','post-qftx-n2-vector-hypermultiplet-model','post-qftx-nonabelian-yang-mills-model'],'The postulate uses earlier N1/N2/Yang–Mills formulations for field/action packaging, R=adjoint,m=0 decomposition and fixed group/coupling normalization. It separately adopts N4 invariance and on-shell closure. No earlier model is represented as proof of this adopted postulate.'),
 ('post-qftx-n2-seiberg-witten-effective-solution',['post-qftx-n2-pure-su2-ultraviolet-model'],'The independent pure-SU2 UV postulate fixes global group, no microscopic hypermultiplets, connection/scalar/coupling and prepotential conventions used to formulate the source-proposed IR data. The solution/singularity/monopole interpretation is separately adopted, not proved from a UV theory construction.'),
 ('post-qftx-rigid-supersymmetric-background',['post-qftx-n4-super-yang-mills-model'],'The curved-background postulate explicitly matches only flat-space N4 field content, SU2 global group and kappa/g normalization, then separately adopts its S4 action, spinor algebra, regulator/measure/contour. This is a formulation interface, not a deduction of the curved action or regulator from the flat model.'),
 ('exp-aqft-atlas-global-smeft-fit-2026',['post-aqft-smeft-model'],'The reported ATLAS fit uses the SMEFT field content/operator expansion to formulate its selected48-direction model and truncation. The source-reported p-value and intervals are not derived from this postulate; all calibration/systematic/truncation qualifications remain unchanged.'),
 ('exp-aqft-cms-global-smeft-fit-2026',['post-aqft-smeft-model'],'The reported CMS fit uses the adopted SMEFT formulation to identify its coefficient expansion and linear/quadratic truncation. It does not infer observed2.5%/27% compatibility or empirical model truth from that postulate; source uncertainty and coverage limitations remain unchanged.'),
 ('exp-aqft-cms-multiboson-smeft-2026',['post-aqft-smeft-model'],'The CMS preliminary multiboson report uses the SMEFT field/operator formulation to specify six bosonic directions and source-defined templates. Source-reported intervals, Wilks calibration and omitted higher-order contributions remain empirical/analysis qualifications, not conclusions proved by the model postulate.')]:
 for dep in deps:change(id,dep,'formulation-prerequisite',reason)
change('pthm-qftx-global-susy-vacuum-energy','def-qftx-global-susy-vacuum-state','formulation-prerequisite','This physical-domain definition supplies terminology and explicit normalized rest-frame ground-state/invariance predicates for an already GIVEN representation/vector. The proof obtains the norm identity from the mathematical algebra/adjoint-domain suppliers and applies those predicates; the definition asserts no vacuum/QFT existence and is not a mathematical-domain supplier. Formulation-prerequisite preserves that precise use without inventing a physical postulate or established physical-result premise.')
assert sum(map(len,changes.values()))==20
allids=set(changes)|set(headids);targets={}
for id in sorted(allids):
 r=by[id];path=pathlib.Path(r['path']);raw=path.read_text();new=raw
 for dep,(old,val) in changes.get(id,{}).items():
  pattern=re.compile(r'^(  '+re.escape(dep)+r': )'+re.escape(old)+r'$',re.M);new,n=pattern.subn(lambda m:m[1]+val,new);assert n==1,(id,dep,n)
 if id in headids:
  assert new.count('## Lemma\n')==1 and new.count('## Lemma references\n')==1
  new=new.replace('## Lemma\n','## Statement\n').replace('## Lemma references\n','## Statement references\n')
 (B/path.name).write_bytes(path.read_bytes());out=P/path.name;out.write_text(new);targets[str(path)]=(str(out),sha(path),sha(out));
 beforebody=raw.split('---',2)[2];afterbody=new.split('---',2)[2];assert beforebody.replace('## Lemma\n','## Statement\n').replace('## Lemma references\n','## Statement references\n')==afterbody
 # Raw inverse proves changes are exactly the selected role values and headings.
 reverse=new.replace('## Statement\n','## Lemma\n',1).replace('## Statement references\n','## Lemma references\n',1) if id in headids else new
 for dep,(old,val) in changes.get(id,{}).items():reverse=re.sub(r'^(  '+re.escape(dep)+r': )'+re.escape(val)+r'$',lambda m:m[1]+old,reverse,flags=re.M)
 assert reverse==raw,id
for batch in sorted(set(by[id]['batch'] for id in changes)):
 ids=[id for id in changes if by[id]['batch']==batch];path=pathlib.Path(by[ids[0]]['manifest_path']);raw=path.read_text();new=raw;before=json.loads(raw);expected=copy.deepcopy(before)
 for id in ids:
  start=new.index('"id": "'+id+'"');rm=re.search(r'"dependency_roles"\s*:\s*\{([^}]+)\}',new[start:]);assert rm;lo=start+rm.start(1);hi=start+rm.end(1);block=new[lo:hi]
  for dep,(old,val) in changes[id].items():
   pat=re.compile(r'("'+re.escape(dep)+r'"\s*:\s*")'+re.escape(old)+r'(")');block,n=pat.subn(lambda m:m[1]+val+m[2],block);assert n==1,(id,dep,n)
  new=new[:lo]+block+new[hi:]
  for page in expected:
   for item in page['items']:
    if item['id']==id:
     for dep,(old,val) in changes[id].items():item['dependency_roles'][dep]=val
 assert json.loads(new)==expected
 (B/path.name).write_bytes(path.read_bytes());out=P/path.name;out.write_text(new);targets[str(path)]=(str(out),sha(path),sha(out))
# Current source-only declared closure; every edge stays identical, so the same claim/proof content is consumed.
reverse=collections.defaultdict(set)
for r in inv['rows']:
 for dep in r['source_deps']:reverse[dep].add(r['id'])
cons=[]
for id in sorted(allids):
 paths={};q=collections.deque([(id,[id])]);seen={id}
 while q:
  n,w=q.popleft()
  for child in sorted(reverse[n]):
   if child in seen:continue
   seen.add(child);paths[child]=w+[child];q.append((child,w+[child]))
 consumers=[]
 for consumer,witness in sorted(paths.items()):
  r=by[consumer];text=pathlib.Path(r['path']).read_text();matches=[{'line':i,'text':line} for i,line in enumerate(text.splitlines(),1) if any('[['+supplier in line for supplier in witness[:-1])]
  consumers.append({'consumer':consumer,'source_path':r['path'],'source_sha256':r['source_sha256'],'direct':len(witness)==2,'witness_path':witness,'actual_wikilink_reference_lines':matches,'disposition':'compatible: same dependency IDs/edges, public mathematical/physical content and proof/empirical qualifications; only role annotation or canonical heading token changes. No new consumer deduction or source edit is required.'})
 cons.append({'supplier':id,'direct_consumers':sorted(reverse[id]),'transitive_owned_consumers':consumers,'interface_delta':'none in mathematical/physical content; section-heading normalization only' if id in headids else 'dependency-role annotation only; complete source body unchanged'})
(D/'scientific-role-rationales.json').write_text(json.dumps(rationales,indent=2)+'\n');(D/'consumer-review.json').write_text(json.dumps(cons,indent=2)+'\n');(D/'application-proposal.json').write_text(json.dumps({'root_application_only':True,'source_items':len(allids),'role_edges':20,'heading_items':headids,'records':[{'target_path':p,'before_sha256':b,'proposed_path':a,'proposed_sha256':c} for p,(a,b,c) in sorted(targets.items())],'body_and_public_claim_preservation':'Exact reverse reconstruction passed every source; every source body unchanged except two canonical heading tokens per lemma. Parsed manifests differ only selected role values.','source_hash_boundary':'Root must rebind affected readiness/composite hashes and exact original-successor authority consumer hashes after any application. This proposal creates no readiness/source/authority acceptance.'},indent=2)+'\n')
print('prepared',len(allids),'item sources;',len(targets)-len(allids),'manifests;',len(rationales),'role edges;2heading-only repairs')
