from pathlib import Path
import hashlib,json,re,datetime
D=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-step3-qft58-global-calculus')
h=lambda x:hashlib.sha256(x if isinstance(x,bytes) else x.encode()).hexdigest()
def save(n,x): (D/n).write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
def parts(t):
 m=re.match(r'\A---\n[\s\S]*?\n---\n',t); return (t[:m.end()],t[m.end():]) if m else ('',t)
def public(t):return re.search(r'(?m)^## (Statement|Definition|Example|Counterexample)\n[\s\S]*?(?=^## |\Z)',t).group(0)
oldids=['thm-qftx-wavefront-product','lem-qftx-microcausal-star-product','prop-qftx-hadamard-wick-change']
newids=['lem-qftx-global-microlocal-pullback','lem-qftx-microcausal-contraction-compatibility']
records=[]
for id in newids+oldids:
 p=Path('items')/(id+'.md');t=p.read_text();fm,b=parts(t);r={'id':id,'path':str(p),'rawSha256':h(t),'bodySha256':h(b),'publicSectionSha256':h(public(t)),'stepCount':len(re.findall(r'^\d+\.\d+ ',b,re.M))}
 if id in oldids:
  pre=(D/'preimages'/(id+'.md')).read_text();f0,b0=parts(pre);r.update(beforeRawSha256=h(pre),beforeBodySha256=h(b0),beforePublicSectionSha256=h(public(pre)),frontmatterUnchanged=f0==fm,publicSectionUnchanged=public(pre)==public(t)); assert f0==fm and public(pre)==public(t)
 records.append(r)
save('final-source-bindings.json',records)
notes={
'cex-qftx-exact-differentiated-scaling-degree':'Exact tangent Hadamard relation and smooth localization/difference-map pullbacks retain their stated admissibility; differentiated contact term and scaling-degree distinction unchanged.',
'cex-qftx-square-delta':'Product criterion still excludes opposite delta covectors; the unrenormalized mollified-square divergence does not acquire a canonical product.',
'def-qftx-chiral-anomaly-interface':'Only conditional scalar EG/BRST background is inherited. Representation traces, no-half anticommutator and explicit absence of a physical anomaly theorem remain exact.',
'def-qftx-local-time-ordered-system':'Conditional free-data/time-ordering contract uses canonical binary products and compact pushforwards. No forbidden diagonal Feynman product or singular self-contraction is introduced.',
'def-qftx-scaling-cocycle':'Mass-indexed scale-admissibility and renormalization maps remain conditional supplied-system interfaces; no existence assumption is added by the repaired calculus.',
'ex-qftx-truncation-landau-pole':'Uses only the prescribed truncated ODE; absence of UV nonexistence inference preserved. Distant scale context is nonlogical.',
'ex-qftx-two-vertex-log':'Punctured Euclidean C0 squared and its scaling extension remain distinct from Lorentzian Feynman kernels; no new product premise.',
'ex-qftx-vectorlike-charge-cancellation':'Finite trace/arithmetic cancellation only; conditional ancestry does not create a field-model or global-anomaly conclusion.',
'lem-qftx-finite-graph-scaling-degree':'Full-center block momentum cancellation uses pointed future cones; angular partitions/refined causal split products use canonical local products and their common regularization limits.',
'lem-qftx-microcausal-contraction-compatibility':'New fully authored helper; full proof and actual two-block matching admissibility checked, including empty cones/scalars and original-slot-preserving regularization.',
'lem-qftx-microcausal-star-product':'Owned proof integration identifies actual homogeneous coefficient matching and external-slot finite Leibniz rule. Public microcausal closure and smooth Gamma_K scope unchanged.',
'lem-qftx-transverse-center-scaling-bound':'Joint center-transversality and common multifrequency majorants remain valid; independent AC-based uniform dilation estimates are not silently replaced by a CC theorem.',
'prop-qftx-anomaly-obstruction':'Conditional scalar system plus independently assumed Ward nilpotence/locality/admissible counterterms retained; proof is formal coefficient/relative quotient algebra.',
'prop-qftx-finite-renormalization-composition':'Conditional triangular recursion, causal split support, local jet ambiguity and formal composition use unchanged time-ordering contract.',
'prop-qftx-hadamard-wick-change':'Owned proof integration uses only cross D_W and smooth Gamma_(Wprime-W), with exact factor hbar/2 and matching identity; no singular self-Gamma_W.',
'prop-qftx-scale-cocycle-law':'Conditional uniqueness and twisted mass-dependent formal composition are unaffected.',
'thm-qftx-scalar-eg-induction':'Causal split products and overlap star associativity compatible; explicit acyclic-matching verification recorded in consumer-compatibility.md. Existing AC/CC, scaling, extension and formal unitarity qualifications retained.',
 'thm-qftx-truncated-rg-ode':'Pure scalar local-Lipschitz ODE and coefficientwise formal reparametrization; scaling-cocycle mention is motivational only.'}
cone=json.loads((D/'consumer-cones-final.json').read_text())
cons=[]
for r in cone['unionBindings']:
 t=Path(r['path']).read_text();r.update(bodySha256=h(parts(t)[1]),publicSectionSha256=h(public(t)),reading='Complete current item and entire argument read by this source owner; reviewed for actual use compatibility with final repaired interfaces.',disposition=notes[r['id']],sourceRepairRequired=False);cons.append(r)
save('final-consumer-dispositions.json',cons)
proposal=json.loads((D/'proposal.json').read_text());pins={x['path']:x['sha256'] for x in json.loads(Path('research/math-imports.json').read_text())['files']}
sup=[]
ids=[x['id'] for x in proposal['supplierReadingBindings']]+['thm-dominated-convergence','cor-c-one-change-of-variables-for-l-one-functions','thm-lebesgue-measure-of-a-box-of-every-kind']
for id in dict.fromkeys(ids):
 p=Path('items')/(id+'.md');r={'id':id,'path':str(p),'rawSha256':h(p.read_bytes()),'reading':'Complete local current source, including entire proof where present; regular Wick/normal-order suppliers read for smooth-class limitation only.'}
 if str(p) in pins:r.update(existingPin=pins[str(p)],pinMatches=pins[str(p)]==r['rawSha256']); assert r['pinMatches']
 sup.append(r)
save('final-supplier-reading-bindings.json',sup)
spec=json.loads((D/'new-source-authoring-spec.json').read_text())
adopt={'productionMetadataUnedited':True,'newItems':[dict(x,page='qftx-microlocal-products',placement=proposal['newItems'][i]['placement'],dependencyRoles={dep:'mathematical-premise' for dep in x['deps']},publicSection=public(Path('items',x['id']+'.md').read_text())) for i,x in enumerate(spec)],'existingAdditionalDirectDependencies':{'thm-qftx-wavefront-product':['lem-qftx-global-microlocal-pullback'],'lem-qftx-microcausal-star-product':['lem-qftx-microcausal-contraction-compatibility'],'prop-qftx-hadamard-wick-change':['lem-qftx-microcausal-contraction-compatibility']},'additionalDependencyRoles':'mathematical-premise','rootOwned':'Inventory/page placement/dependency roles and levels/contracts/coverage/ledger/readiness/native recertification. Existing FM preserved; new helper dependency_level0 and verification pending are provisional authoring metadata.'}
save('root-adoption-proposal.json',adopt)
external=[]
for name in ['fredenhagen-rejzner-1208.1428.pdf','fredenhagen-rejzner-1208.1428.txt']:
 p=D/name;external.append({'path':str(p),'sha256':h(p.read_bytes()),'bytes':p.stat().st_size})
save('reading-limits.json',{'externalFiles':external,'retrieval':'Complete actual 42-page FR arXiv1208.1428 PDF downloaded by curl; extracted by fitz because pdftotext unavailable.','actualReading':'Complete Section5 context PDF pp21–23 equations52–65, complete AppendixA PDF pp35–38 including TheoremA7 and diagonal criterion. Not all42 pages read.','proofBoundary':'A7 provides proof idea and cites external estimates. All required estimates, regularization, localization, covariance, gluing and finite contraction compatibility proved locally; no external proof waiver. No BF retrieval or new fulltext reading claimed.','additionalPremises':'Complete exact pinned DCT, C1 L1 change of variables and box-measure sources read; bindings in final-supplier-reading-bindings.json.','axioms':'CC only; no AC/DC or uniform-boundedness theorem introduced by helpers.'})
save('report.json',{'run':'physics-non-fluid-129-2026-10-21-r2','owner':'/root/qft_green_maps','recordedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'stage':'First construction cycle source release; no independent or native acceptance assertion','defects':['reader:58:8 and refuter:58:8 global arbitrary-map pullback local-to-global construction','touched:58:prop-qftx-hadamard-wick-change singular cross/smooth self contraction compatibility'],'sourceBindings':'final-source-bindings.json','consumerBindings':'final-consumer-dispositions.json','oldConsumerCount':17,'currentConsumerCount':18,'currentAdditionalConsumer':'New owned contraction helper','consumerEditsOutside58':False,'publicStatementsAndExistingFrontmatterUnchanged':True,'checks':{'precheck':'precheck-final.json: checked5 failed0','proofLayout':'layout-final.txt:5items32steps0defects','render':'render-final.json:checked5 errors[] warnings[]'},'rootDraftReviewSuccessors':'Requested empty-permitted-tuples and original-slot regularization repairs only; diff root-reviewed-draft-successor.diff. Canonical numbering mappings in numbering-content-maps.json.','rootAdoption':'root-adoption-proposal.json','unresolvedScientificGapIdentified':False,'remainingRootWork':'Adopt metadata and exact source bindings, run actual native proof review/recertification. Focused source checks are not full gates or acceptance.','sourceWriterReleased':True,'productionWritesFinished':True,'forbiddenWrites':'No manifests/pages/contracts/coverage/ledger/readiness/native verdict/import/original math writes.'})
print(json.dumps({'sources':records,'consumers':len(cons)},indent=2))
