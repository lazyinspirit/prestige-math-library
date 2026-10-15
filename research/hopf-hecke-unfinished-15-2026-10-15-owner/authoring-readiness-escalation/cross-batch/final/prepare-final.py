import pathlib,json,hashlib,copy,datetime,re
run='hopf-hecke-unfinished-15-2026-10-15';base=pathlib.Path(f'research/{run}-owner/authoring-readiness-escalation');old=base/'cross-batch';out=old/'final';sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();d=json.loads((out/'current-declarations.json').read_text());now=datetime.datetime.now(datetime.timezone.utc).isoformat()
(out/'before').mkdir(exist_ok=True);(out/'proposed').mkdir(exist_ok=True)
ctx=json.load(open(f'research/{run}-proof-layout-context.json'));ctxids={r['id']for r in ctx['items']};ctxguards=[]
for r in ctx['items']:
 p=pathlib.Path('items')/(r['id']+'.md');assert sha(p)==r['source_raw_sha256'];ctxguards.append(dict(path=str(p),sha256=sha(p),role='unchanged owner-declared published context, no frontier ownership or adopted execution coverage'))
evidencepaths=[base/'murphy-dominance'/f for f in ['repair-manifest.json','owner-source-integration.json']]+[base/'final-metadata/integration.json',base/'hecke11/patch-manifest.json',base/'hecke11/readiness-recommendations.json',base/'hopf-chain/recommendations.json',base/'hopf-chain/owner-proof-clarification-integration.json',base/'quasitriangular8/recommendations.json']
evidenceguards=[dict(path=str(p),sha256=sha(p))for p in evidencepaths]
# Current arrays are immutable preimages for this final proposal.
originals={}
for b in range(1,16):
 p=pathlib.Path(f'research/{run}-batch-{b}.cross-batch-dependencies.json');raw=p.read_bytes();(out/'before'/p.name).write_bytes(raw);originals[b]=json.loads(raw)
for p in [pathlib.Path(f'research/{run}-proof-layout-context.json'),pathlib.Path(f'research/{run}-rehomed.json')]: (out/'before'/p.name).write_bytes(p.read_bytes())
contextrows=json.loads((old/'published-context-only-review.json').read_text())['preserved_original_rows']
# Obtain schema/interface repairs from the sealed first-cycle proposals, not their stale source guards.
previous={}
for b in range(1,16):
 previous[b]={(r['kind'],r['consumer'],r['supplier']):r for r in json.load(open(old/'proposed'/f'{run}-batch-{b}.cross-batch-dependencies.json'))}
pagepaths={}
for b in range(1,16):
 for p in json.load(open(f'research/{run}-batch-{b}.pages.json')):pagepaths[p['id']]=f'library/{p["category"]}/{p["id"]}.md'
def carrier(kind,id):
 if kind=='item':p=pathlib.Path('items')/(id+'.md');return p if p.exists()else None
 if id in pagepaths:return pathlib.Path(pagepaths[id])
 ps=list(pathlib.Path('library').glob('*/'+id+'.md'));return ps[0]if len(ps)==1 else None
def inputs(row):
 rows=[]
 for role in ['consumer','supplier']:
  p=carrier(row['kind'],row[role]);assert p is not None,(role,row)
  rows.append(dict(role=role,path=str(p),raw_sha256=sha(p)))
  b=d['homes'].get(row['kind']+':'+row[role])
  if b:
   mp=pathlib.Path(f'research/{run}-batch-{b}.pages.json');rows.append(dict(role=role+'-manifest',path=str(mp),raw_sha256=sha(mp)))
 return rows
scope='Current authoring prerequisite-interface/schema reconciliation, with attributed native author and focused owner-review evidence; not an independent proof audit, native gate, readiness record, or publication approval.'
def clean(ev):
 ev=re.sub(r'Pending final producer(?:4|9) (?:byte )?guard\.?','Final producer completed; current input hashes bound below.',ev)
 ev=ev.replace('Pending producer4 final guard.','Final producer completed; current input hashes bound below.').replace('Producer11 still live: final byte guard and actual author handoff required.','Producer11 completed; exact final guarded owner evidence reused.').replace('Producer4 final guard required.','Final producer4 completed.').replace('Producer11 final guard required.','Final producer11 completed.').replace('Pending final producer9 guard.','Final producer9 completed.').replace('and final producer guards','and current input hashes')
 return ev
hh11=json.load(open(json.load(open(base/'hecke11/patch-manifest.json'))['cross_batch_patch']['proposal']))[0]
dual='Current finite-dimensional dual-Hopf Statement/Facts F1–F5 and proof1.1–5.1 were rechecked: H* has convolution multiplication, coproduct dual to multiplication, counit evaluation at1, and antipode phi composed with S. Both contractions are transposed directly; compositional S-bijectivity is not required. The former unavailable-body wording has been removed; actual Hopf and finite-duality suppliers are present. The native author original interface review remains preserved in the before-array, and this update is focused current-source reconciliation, not independent approval.'
patch=[];changes=[];pubrows=[]
for b in range(1,16):
 rows=[];seen=set();before=pathlib.Path(f'research/{run}-batch-{b}.cross-batch-dependencies.json')
 for j,orig in enumerate(originals[b]):
  key=(orig['kind'],orig['consumer'],orig['supplier'])
  if d['homes'].get(orig['kind']+':'+orig['consumer'])!=b:
   assert orig['consumer']in ctxids
   prev=next(x for x in contextrows if x['original']['consumer']==orig['consumer']and x['original']['supplier']==orig['supplier'])
   r=copy.deepcopy(prev);r.update(original_index=j,original=orig,current_input_hashes=inputs(orig),review_scope='Unclaimed published-context interface comparison only; no owned frontier subject or native execution coverage.');pubrows.append(r);changes.append(dict(batch=b,index=j,action='preserve-outside-owned-published-context-separately',key=key));continue
  r=copy.deepcopy(orig)
  if orig['status']not in ['verified','removed']:
   p=previous[b].get(key);assert p and p['status']=='verified',(b,key,p)
   r.update(status='verified',evidence=clean(p['evidence']));changes.append(dict(batch=b,index=j,action='resolve-stale-interface-hold-from-actual-current-source-and-attributed-evidence',key=key))
  if b==11:r.update(status=hh11['status'],evidence=hh11['evidence']);changes.append(dict(batch=b,index=j,action='reuse-exact-guarded-hecke11-cross-row',key=key))
  if orig['supplier']=='thm-hh-finite-dimensional-dual-hopf-algebra'and any(x in orig['evidence']for x in ['stale','unavailability','unavailable']):r['evidence']=dual;changes.append(dict(batch=b,index=j,action='replace-obsolete-unavailability-description-after-reading-final-dual-Hopf-source',key=key))
  if b==9 and orig['kind']=='page'and orig['supplier']=='hopf-ideals-finite-duals-and-basic-constructions':r['evidence']='Current page prerequisite is supplied by actual completed batch4 bodies. '+dual;changes.append(dict(batch=b,index=j,action='replace-obsolete-page-unavailability-description',key=key))
  r.update(review_scope=scope,current_input_hashes=inputs(r),original_review=dict(path=str(out/'before'/before.name),index=j,status=orig['status'],evidence_unchanged=r['evidence']==orig['evidence']))
  rows.append(r);seen.add(key)
 for e in d['edges']:
  key=(e['kind'],e['consumer'],e['supplier'])
  if e['consumer_batch']!=b or key in seen:continue
  p=previous[b].get(key);assert p and p['status']=='verified',(b,key)
  r=copy.deepcopy(p);r['evidence']=clean(r['evidence']);r.update(review_scope=scope,current_input_hashes=inputs(r),review_origin='Focused first-cycle actual interface reading retained; final source/manifest guards rechecked in this final cycle. Not an inferred native review.');rows.append(r);seen.add(key);changes.append(dict(batch=b,action='supply-current-declared-edge-review',key=key))
 p=out/'proposed'/before.name;p.write_text(json.dumps(rows,indent=2,ensure_ascii=False)+'\n');patch.append(dict(target=str(before),before_file=str(out/'before'/before.name),before_sha256=sha(before),proposed_file=str(p),proposed_sha256=sha(p),rows=len(rows),pending_producer_guards=[],integration='Compare all current input hashes, whole frontier manifest/source guards, evidence guards, and exact before-array hash; then copy proposed bytes. No source or native mutation authorized by this proposal.'))
(out/'published-context-only-review.json').write_text(json.dumps(dict(version=1,run=run,kind='unclaimed-owner-published-context-only-review',native_execution_coverage_adopted=False,context_guards=ctxguards,preserved_original_rows=pubrows),indent=2,ensure_ascii=False)+'\n')
(out/'patch-manifest.json').write_text(json.dumps(dict(version=1,run=run,kind='final-cycle-guarded-cross-batch-array-proposal',cycle=2,max_cycles=2,frontier_items=139,declared_cross_batch_edges=len(d['edges']),created_at=now,files=patch,frontier_source_manifest_guards=d['carriers'],published_context_guards=ctxguards,attributed_evidence_guards=evidenceguards,pending_producers=[],native_checks_or_state_writes=False),indent=2)+'\n')
# Verify actual completed native author results without reading/copying their logs.
authors=[]
for b in range(1,16):
 ps=list(pathlib.Path('research/'+run+'-dispatch').glob(f'beta-batch-{b}.attempt-*.result.json'));ps.sort(key=lambda p:int(re.search(r'attempt-(\d+)',p.name).group(1)));p=ps[-1];r=json.load(open(p));assert r.get('ok')and r.get('terminal_summary',{}).get('task_completed'),(b,p);authors.append(dict(batch=b,result=str(p),result_sha256=sha(p),actual_completed=True,model=r.get('model'),ended_at=r.get('ended_at')))
resolved14=dict(status='focused-repair-integrated-and-current-use-reconciled',owner_evidence=str(base/'murphy-dominance/owner-source-integration.json'),new_supplier='lem-hh-type-a-murphy-strong-tableau-straightening',source_use='Read actual ordinary lemma8.2–10.1: integral trace/sign double-coset annihilation, invertible diagonal shape blocks and induction eliminate non-dominating shape coordinates; basis-span intersection upgrades the cell law. Read actual strong-prefix Statement/Facts/proof1.1–7.1: separated Q(Q) seminormal realization, vertical-pair zero propagation across standard swaps, linear-extension connectivity, prefix propagation, finite incidence inverse, and integral-coordinate descent. Componentwise F3/2.1 consumes exactly the stronger two-tableau, cross-shape prefix result;3.1 relabels via order-preserving component cosets;4.1 proves finite ideals before5.1 uses maximal row-filled first index. Shift F6/1.1–2.1 uses actual affine recursion/distant commutations and corrected C,D inverse order;4.1–6.1 uses established componentwise law. Cellularity1.1–4.1 combines these ideals, coefficient existence, minimal-shape spanning, unchanged published PBW rank and colored count, then integral base change. The earlier same-row dominance/coefficient-elimination hold has an actual replacement proof and separately supplied strong-prefix lemma; it is not dismissed as bookkeeping. Full claims, unit-Q convention, arbitrary commutative specialization and absence of semisimplicity assumptions after specialization are retained.',limits='Focused exact supplier/consumer-use reconciliation with attributed owner repair evidence; no new independent whole-item audit or native acceptance claim.')
rec=dict(version=1,run=run,kind='final-current-cross-batch-schema-and-interface-evidence',cycle=2,scope=scope,current_manifests_read=15,current_items=139,current_declared_edges=len(d['edges']),source_semantics=dict(deps='Logical premises retained exactly from actual sources/manifests.',justified_by='Well-definedness/existence discharges retained as such; reverse logical input not invented.',forward_refs='Later nonlogical context retained as such; not scheduling deps.',review_only='Existing non-declaration author reviewer observations preserved as context with empty declarations; no source dependency is added.'),changes=changes,published_context='Exactly six published-context consumer rows are preserved separately; all16 owner-declared published raw hashes remain identical. No source, published metadata, plan, ownership, or native receipt changed.',native_authors=authors,hh14=resolved14,hh11='Exact guarded HH11 cross-row evidence reused. Actual current regular-trace proof2.1 says contains J and decreases dimension from K_i; no strict-containment-of-J assertion. Characteristic-zero generic semisimplicity remains nonsplit, and formal label theorem retains split reduction over k[[h]]. The canonical coefficient trace remains distinct from regular trace.',attribution='hopf-chain/quasitriangular8/hecke11 and Murphy owner-repair evidence are reused under exact hashes; this ledger delegate does not claim personal independent reauditing of every proof. All current carrier interfaces bound to hashes. Native9/14 readiness refresh remains root-owned, not asserted by this proposal.',unresolved_interface_findings=[],proposed_only=True)
(out/'reconciliation-evidence.json').write_text(json.dumps(rec,indent=2,ensure_ascii=False)+'\n');print(json.dumps(dict(files=len(patch),rows=sum(x['rows']for x in patch),pubrows=len(pubrows),authors_completed=len(authors)),indent=2))
