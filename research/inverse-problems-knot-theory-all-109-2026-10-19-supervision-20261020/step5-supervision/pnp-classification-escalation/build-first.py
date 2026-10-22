from pathlib import Path
import hashlib,json,subprocess,yaml,datetime
R=Path('.'); base=Path(__file__).parent
run='inverse-problems-knot-theory-all-109-2026-10-19'; old='def-ip-pnp-ista-with-denoiser'; new='alg-ip-pnp-ista-with-denoiser'
sha=lambda b:hashlib.sha256(b).hexdigest()
def save(p,b):
 p.parent.mkdir(parents=True,exist_ok=True)
 with p.open('xb') as f:f.write(b)
def meta(b):return yaml.safe_load(b.decode().split('---\n',2)[1])
def body(b):return b.split(b'---\n',2)[2]
def cmd(args):
 r=subprocess.run(args,capture_output=True,text=True)
 assert r.returncode in [0,1],(args,r.stderr)
 return {'command':args,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr}
cons=['thm-ip-exact-mmse-pnp-ista-stationarity','cex-ip-pnp-iterative-awgn-error-model','rem-ip-arbitrary-denoiser-has-no-inherited-objective','ex-ip-approximate-cnn-mmse-denoiser']
paths=['items/'+old+'.md']+['items/'+i+'.md' for i in cons]+['library/inverse-problems/plug-and-play-mmse-regularization.md']
bindings=[]; operations=[]
for name in paths:
 p=Path(name); b=p.read_bytes(); archive=base/'preimages'/p;save(archive,b)
 if old in p.stem:
  target='items/'+new+'.md'
  assert not Path(target).exists()
  candidate=b.replace(('id: '+old+'\nkind: definition\n').encode(),('id: '+new+'\nkind: algorithm\naliases: ['+old+']\n').encode(),1)
  assert body(candidate)==body(b)
  bm=meta(b);cm=meta(candidate);cm.pop('aliases');cm['id']=old;cm['kind']='definition';assert cm==bm
 else:
  target=name;candidate=b.replace(old.encode(),new.encode());assert candidate.replace(new.encode(),old.encode())==b
 cp=base/'candidate'/target;save(cp,candidate)
 bindings.append({'source':name,'raw_sha256':sha(b),'preimage':str(archive),'candidate':str(cp),'candidate_raw_sha256':sha(candidate),'body_sha256':sha(body(b)),'candidate_body_sha256':sha(body(candidate))})
 operations.append({'operation':'move-and-reclassify' if target!=name else 'replace-identity-tokens','source':name,'target':target,'required_before_raw_sha256':sha(b),'candidate':str(cp),'required_after_raw_sha256':sha(candidate)})
# Exact archives record current evidence, never overwrite native evidence.
report=Path('research')/(run+'-step5-v2/step5-v2-repeat-r1-u49.json')
read_sources=['CLAUDE.md','README.md','SCHEMA.md','tools/step5-original-slot-reclassification.md','items/def-ip-learned-reconstruction-estimator.md','items/def-euclidean-inner-product.md','items/lem-ip-tweedie-mmse-jacobian-and-prox-potential.md','library/inverse-problems/plug-and-play-mmse-regularization-examples.md',str(report)]
for name in read_sources:
 b=Path(name).read_bytes();p=base/'preimages'/name;save(p,b);bindings.append({'source':name,'raw_sha256':sha(b),'preimage':str(p)})
searches=[]
searches.append(cmd(['rg','-n','-e',old,'-e',new,'items','library','articles','tools','--glob','*.md','--glob','*.mjs','--glob','*.mts','--glob','*.json']))
searches.append(cmd(['git','grep','-n','-e',old,'-e',new,'HEAD','--','items','library','articles','tools']))
args=['rg','-n']
for i in cons:args+=['-e',i]
searches.append(cmd(args+['items','library','articles','--glob','*.md']))
args=['git','grep','-n']
for i in cons:args+=['-e',i]
searches.append(cmd(args+['HEAD','--','items','library','articles']))
save(base/'search-inventory.json',(json.dumps(searches,indent=2)+'\n').encode())
# Parse every active item frontmatter with accelerated libyaml; literal searches
# independently cover malformed unrelated carriers rather than treating skips as closure.
records={};errors=[]
for p in Path('items').glob('*.md'):
 try:
  m=yaml.load(p.read_text().split('---\n',2)[1],Loader=yaml.CSafeLoader)
  records[m['id']]={'deps':m.get('deps') or [],'aliases':m.get('aliases') or [],'justified_by':m.get('justified_by') or [],'forward_refs':m.get('forward_refs') or []}
 except Exception as e:errors.append({'path':str(p),'error':str(e),'contains_any_affected_identity':any(i in p.read_text() for i in [old,new]+cons)})
aliases={a:i for i,m in records.items() for a in m['aliases']};seen={old};layers=[]
while True:
 layer=sorted(i for i,m in records.items() if i not in seen and any(aliases.get(d,d) in seen for d in m['deps']))
 if not layer:break
 seen.update(layer);layers.append(layer)
assert seen==set([old]+cons),(seen,cons)
assert not any(x['contains_any_affected_identity'] for x in errors)
# All alias and supplementary link fields mentioning affected IDs are covered by
# literal scans; no unseen extra subject remains.
extra_fields=[{'id':i,'field':f,'targets':[x for x in m[f] if aliases.get(x,x) in seen]} for i,m in records.items() for f in ['aliases','justified_by','forward_refs'] if any(aliases.get(x,x) in seen for x in m[f])]
metadata=[]
for p in sorted(Path('research').glob(run+'-batch-*.json')):
 b=p.read_bytes()
 if old.encode() not in b:continue
 j=json.loads(b);hits=[]
 def visit(v,ptr):
  if isinstance(v,dict):
   for k,x in v.items():
    if old in k:hits.append({'pointer':ptr+'/'+k,'kind':'key'})
    visit(x,ptr+'/'+k)
  elif isinstance(v,list):
   for i,x in enumerate(v):visit(x,ptr+'/'+str(i))
  elif isinstance(v,str) and old in v:hits.append({'pointer':ptr,'kind':'exact' if v==old else 'embedded'})
 visit(j,'');ap=base/'preimages'/p;save(ap,b)
 metadata.append({'path':str(p),'raw_sha256':sha(b),'preimage':str(ap),'occurrences':hits,'disposition':'Preserve historical_review_records and genuine Step4 context verbatim. Root must reconcile current manifest/contract/coverage mirrors under authenticated identity/history adapter; no blanket replacement.'})
# The complete source section is the strict quote target; preserve old contract
# quotations in archived metadata and report precisely the observed mismatches.
j=json.loads((Path('research')/(run+'-batch-49.proof-contracts.json')).read_text());definition=body(Path('items/'+old+'.md').read_bytes()).decode().split('## Definition\n',1)[1].split('\n## Definition references',1)[0].strip()
quote_rows=[]
for i,c in j['contracts'].items():
 for n,x in enumerate(c.get('citations',[])):
  if x.get('source')==old:quote_rows.append({'consumer':i,'citation_index':n,'fact':x['fact'],'uses':x['uses'],'current_exact_quote':x['quote'] in definition,'required_action':'Retarget source to '+new+'; refresh exact quote from unchanged complete Definition if stale; preserve original contract archive.'})
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
report_json={
 'version':1,'kind':'focused-owner-escalation-first-review-and-unapplied-candidate','run':run,'reviewer':'/root/pnp_classification_scope','recorded_at':now,'cycle':1,'maximum_cycles':2,
 'scope':'Research-only FIRST mathematical/schema review and guarded source candidate. Root owns source application, identity/provenance adapter, manifest maintenance and recertification.',
 'native_credit_claimed':False,'canonical_sources_edited':False,'native_artifacts_rewritten':False,'runtime_edited':False,'new_prerequisites':[],
 'head':subprocess.check_output(['git','rev-parse','HEAD'],text=True).strip(),
 'native49_binding':{'file':str(report),'raw_sha256':sha(report.read_bytes()),'input_sha256':'2977e83be17ed702b0dea9a73b8fc44b265bd72b9fdf4934a89063f5b6e65967','decision_pointer':'/decisions/0','outcome':'confirmed_nonfatal','report_before_and_current_guard_sha256':'2f653b1d8ee7d93a22b71783140f3b68ca112a789836d1ea88f564ac4adc2ec5','guard_checked_with':'node import tools/item-hash.mjs itemHashGuard on full current source; equals original review post guard','current_review_granted':False},
 'classification':{'decision':'Confirmed: algorithm classification is required.','reason':'The full existing Definition specifies admissible inputs (n, sigma, gamma, global C1 g, a supplied total deterministic map, x0), an exact repeated gradient/map update, and the sequence output. SCHEMA Algorithms calls a procedure an algorithm and requires kind algorithm plus alg- ID. A procedure may run indefinitely and need not claim computability/termination/convergence. The current infinite sequence output does not defeat classification. Leaving kind definition, retaining a def- prefix with algorithm kind, or rephrasing away output/instructions to evade the schema is not a sound repair.','minimal_migration':{'old_id':old,'new_id':new,'kind':'algorithm','alias':old,'cardinality':'one original slot maps to one current slot; no added helper or prerequisite','body':'Entire original UTF-8 body, Definition, caveats, TikZ, references retained byte-for-byte. Only id/kind plus one navigation alias change.','other_metadata':'Unchanged dependencies, level 4, draft status, run, provenance, sources, choice-use and verification.'},'well_definedness':'Starting from supplied x0, global C1 makes each gradient a unique finite vector; gamma times that vector and subtraction stay in R^n; totality of the supplied deterministic map gives the unique next vector. Induction/unique recursion gives all finite iterates and the sequence without any choice principle. No random map, measurable estimator, fitted/trained map, proximal selection, MMSE identity, finite termination or convergence is inferred.','supplier_context':'Read full learned-estimator interface and Euclidean inner-product carrier. Learned-estimator Borel/training requirements are explicitly distinguished by the preserved role-only caveat. No new mathematical premise is introduced.'},
 'consumer_inventory':{'current_direct':cons,'current_transitive_layers':layers,'additional_indirect_only':[],'overlapping_indirect_paths':[[old,cons[0],cons[2]],[old,cons[0],cons[3]],[old,cons[2],cons[3]]],'head_inventory':'Complete HEAD literal searches for original/new identity and every direct-consumer identity find the same four consumers and no further item consumer. Relevant HEAD frontmatter and uses agree with current identity structure; no full-corpus HEAD proof review claimed.','aliases_to_original':[],'supplementary_fields':extra_fields,'nonlogical':'A-page placement is replaced with alg identity. B-page places AWGN and CNN consumers and requires A-page, but contains no original ID and needs no source edit. No items/library/articles/tools nonlogical occurrence of old or candidate identity beyond the recorded five item carriers and A-page. Candidate-ID collision absent before candidate creation.','parse_limits':{'current_frontmatter_items':len(records),'unrelated_parse_errors':errors,'fallback':'All errors are outside affected identities; complete literal current and HEAD searches independently cover affected IDs. This is a closure scan, not a whole-corpus validator pass.'}},
 'consumer_dispositions':[
 {'id':cons[0],'order':1,'logical_uses':'F2, proof 2.1 specializes the supplied map to analytic D_sigma.','review':'Read complete Statement/Facts/Proof. Analytic supplier was also read completely. Positive sigma and step plus global C1 g satisfy procedure input conditions. Unique global proximal minimization gives the quadratic-model minimizer, including the possible +infinity value at x0; from t>=1 values are finite. Descent majorization, nonnegative residual summation and smooth residual gradient estimate give vanishing gradient on the open image. The classification supplies only recurrence and no minimization/convergence assertion.','disposition':'Identity/link rewrite only; preserve complete theorem and choice-free local proof.'},
 {'id':cons[1],'order':1,'logical_uses':'F3, step 1.1 computes both updates.','review':'Read complete Statement/Facts/Counterexample. With gamma=1/2, sigma=1, x0=theta=0, g=(x-epsilon)^2/2 and total map z->z^2, x1=epsilon^2/4 and z2=(epsilon+2)^2/8-1/2. It is bounded below and nonconstant: the two positive-probability epsilon intervals yield disjoint output intervals (-7/32,9/32) and [-1/2,-15/32). Nondegenerate Gaussian laws put mass below -1/2; degenerate ones are point masses. Thus the preserved local support argument disproves the universal iterative-AWGN claim. AC remains expressly assumed for probability suppliers, with no extra choice used by recursion.','disposition':'Identity/link rewrite only; preserve false claim, witness, probability premises and every proof step.'},
 {'id':cons[2],'order':2,'logical_uses':'F2, verification 2.1 allows arbitrary deterministic map; indirect exact-MMSE theorem comparison.','review':'Read complete Remark/Facts/Verification after procedure/theorem. P(z)=-z is an allowed total deterministic map. Assuming a global proximal selection with a finite competitor makes both selected objective values finite. The two crossed minimizer comparisons imply (P(s)-P(t))(s-t)>=0, contradicted by distinct s,t for P=-identity. This does not disprove every possible objective for another denoiser. Procedure classification cannot add a proximal premise; exact-MMSE comparison retains the local analytic supplier and choice-free proof.','disposition':'Identity/link rewrite only; preserve whole remark and verification.'},
 {'id':cons[3],'order':3,'logical_uses':'Direct deps and Example reference to procedure are contextual; no procedure Fact in numbered verification. Indirect F5 uses theorem exact-map hypothesis; remark is contextual too.','review':'Read complete Example/Facts/Verification and architecture diagram after theorem/remark. Distinct atoms with a>0 give non-hyperplane prior; factoring Gaussian weights gives a*tanh(az/sigma^2). The nonzero bias changes the exact map at 0 and has uniform error |b|<eta at every input. Explicit b=eta/2 is available without choice. F5 prevents claiming the exact-denoiser theorem for this prior, and no absence of another objective is claimed. Classification changes none of these premises or computations.','disposition':'Identity/link rewrite only; preserve full example, local verification, diagram and choice-free premises.'}
 ],
 'metadata_inventory':metadata,'contract_quote_findings':quote_rows,
 'reading_limits':{'full_files':paths+read_sources,'metadata':'Full JSON parsed for the listed batch metadata inventories; focused algorithm contract and all citations to old procedure inspected. Other contracts, source papers and unrelated proof chains not reviewed.','sources':'No external texts opened, source imports or claims of reading cited papers. Classification and elementary substitution/identity checks need none. Existing citations retained.','workflow':'Relevant workflow algorithm, supplier/consumer, frozen-slot and Step5 passages consulted; combined broad WORKFLOW reads were clipped, so no claim of a full WORKFLOW read. Existing original-slot reclassification document read fully and is exact OP-to-EX only.','review_type':'Focused current-source and affected-use review for identity-only classification, not an independent full audit of every transitive analytic/probability supplier. Native report contexts are bound as historical fields, not recomputed or adopted as current credit.'},
 'bindings':bindings,'candidate_operations':operations,
 'guarded_candidate_checks':{'source_body_preserved_exactly':True,'all_other_supplier_frontmatter_preserved':True,'consumer_and_page_edits_invert_to_original_by_new_to_old_identity_substitution':True,'candidate_frontmatter_parsed':True,'canonical_application_performed':False,'native_gates_attempted':False,'remaining':'Root must wait for genuine paused/drained hold, install exact identity adapter without rewriting frozen history; apply only after comparing all before raw guards; refresh current metadata/citation mirrors using archived originals; obtain genuinely fresh native current algorithm/consumer review, certification and Sol judgment as applicable, then ordinary gates. Alias alone gives no frozen coverage. No fresh native credit or repaired ledger closure is asserted.'}}
for p in (base/'candidate').rglob('*.md'):meta(p.read_bytes())
save(base/'FIRST-report.json',(json.dumps(report_json,indent=2,ensure_ascii=False)+'\n').encode())
save(base/'guarded-candidate.json',(json.dumps({'version':1,'unapplied':True,'run':run,'operations':operations,'strict_guards':'Root compares live before bytes; do not apply if any mismatch. This file grants no frozen identity coverage or gate authority.'},indent=2)+'\n').encode())
print(json.dumps({'report':str(base/'FIRST-report.json'),'candidate_operations':len(operations),'closure_layers':layers,'frontmatter_records':len(records),'unrelated_frontmatter_errors':len(errors),'stale_contract_quotes':[x['consumer'] for x in quote_rows if not x['current_exact_quote']]},indent=2))
