"""Read native historical artifacts; write proposal artifacts only. No gates or live edits."""
import copy, hashlib, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = pathlib.Path(__file__).resolve().parent
RUN = 'bayesian-computational-statistics-62'
BASE = ROOT / 'research' / (RUN + '-step5-v2')
def read(p): return json.loads(p.read_text())
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def jsonl(p): return [json.loads(s) for s in p.read_text().splitlines() if s]
def dump(n,v): (OUT/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def rel(p): return str(p.relative_to(ROOT))
ledger_path=ROOT/'research/defect-ledger.jsonl'
ledger=jsonl(ledger_path)
existing_ids={x.get('defect_id') for x in ledger}
adj_path=ROOT/'research'/(RUN+'-judge-adjudications.jsonl')
adjudications=[x for x in jsonl(adj_path) if x.get('outcome')=='confirmed_fatal']
# Explicit editorial taxonomy only where the authentic worker did not supply it.
# These labels do not constitute a new mathematical decision.
overrides={
 ('initial','ex-cylinder-gaussian-process-is-not-banach-valued'):('missing-hypothesis','statement'),
 ('initial','lem-gaussian-linear-and-quadratic-statistic-tail'):('citation-inflated','facts-block'),
 ('initial','lem-independent-observation-posterior-denominator-lower-bound'):('false-or-overstrong-statement','statement'),
 ('initial','thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure'):('citation-missing','facts-block'),
 ('initial','def-euler-maruyama-step-process-and-continuous-interpolation'):('unsupported-inference','remark'),
 ('initial','def-sobolev-linear-functional-for-white-noise'):('missing-hypothesis','definition'),
 ('initial','thm-multiscale-credible-band-holder-diameter'):('missing-hypothesis','statement'),
 ('initial','cor-type-s-h-density-credible-band-calibration'):('false-or-overstrong-statement','statement'),
 ('initial','def-gaussian-sequence-hyperrectangle-class'):('ill-typed-construction','definition'),
 ('initial','def-stratified-monte-carlo-estimator'):('missing-hypothesis','definition'),
 ('initial','ex-scalar-gaussian-state-space-filter'):('citation-missing','proof-step'),
 ('initial','ex-smc-multinomial-ancestry-collapse'):('missing-hypothesis','statement'),
 ('initial','thm-smc-multinomial-fixed-horizon-clt'):('citation-truncated','facts-block'),
 ('initial','thm-smc-residual-fixed-horizon-clt-away-from-integer-weights'):('unlicensed-inference','proof-step'),
 ('initial','alg-particle-gibbs-backward-simulation'):('ill-typed-construction','definition'),
 ('initial','alg-three-dimensional-variational-assimilation'):('missing-hypothesis','definition'),
 ('initial','ex-abc-vanishing-acceptance'):('invalid-inference','proof-step'),
 ('initial','alg-moving-block-bootstrap'):('false-or-overstrong-statement','definition'),
 ('initial','lem-pooled-mixture-projection-and-variance'):('missing-hypothesis','statement'),
 ('initial','def-studentized-two-sample-u-statistic'):('false-or-overstrong-statement','remark'),
 ('initial','ex-mlmc-discontinuous-payoff-half-rate'):('missing-hypothesis','statement'),
 ('initial','def-b-adic-anova-components'):('missing-hypothesis','definition'),
 ('initial','lem-rqmc-scrambled-net-variance-identity'):('citation-truncated','facts-block'),
 ('repeat','cex-singular-interior-mode-changes-laplace-rate'):('citation-inflated','facts-block'),
}
reports=[]
for p in BASE.glob('step5-v2-*.json'):
 if '-initial-r' not in p.name and '-repeat-r' not in p.name: continue
 j=read(p)
 for i,dec in enumerate(j.get('decisions',[])):
  if dec.get('outcome')=='confirmed_fatal': reports.append((p,j,i,dec))
represented={
 ('initial','lem-aperiodic-petite-set-with-accessible-small-set-is-small'):'bcs62-step5-impact-initial-r1-u3-petite-small-prior-repair',
 ('initial','lem-geometric-drift-minorization-reduces-to-bounded-small-set'):'bcs62-step5-impact-initial-r1-u3-drift-composition-prior-repair',
 ('initial','lem-rqmc-scrambled-net-variance-identity'):'bcs62-step5-impact-initial-r1-u3-scramble-marginal-prior-repair',
 ('repeat','alg-particle-gibbs-backward-simulation'):'bcs62-step5-repeat-r1-u47-pgbs-domain',
}
rows=[];sources=[];missing_proposals=[]
for a in adjudications:
 matches=[(p,j,i,d) for p,j,i,d in reports if d['id']==a['id'] and d['model']==a['model'] and d['context_sha256']==a['context_sha256'] and j['phase']==a['step5_phase'] and j['round']==a['step5_round']]
 assert len(matches)==1,(a['id'],len(matches))
 p,j,index,dec=matches[0]
 assert all(a.get(k)==v for k,v in dec.items()),a['id']
 pack=BASE/(j['phase']+'-'+str(j['round'])+'.json')
 assert read(pack)['before'][a['id']]==a['item_sha256']
 collected=BASE/(j['phase']+'-'+str(j['round'])+'-collected.json')
 assert any(x==dec for x in read(collected)['decisions'])
 dispatch=ROOT/'research'/(RUN+'-dispatch')/('alpha-adjudicate-'+p.stem+'.result.json')
 dispatch_data=read(dispatch)
 assert dispatch_data['ok'] and not dispatch_data.get('timed_out') and dispatch_data.get('exit_code')==0
 reviews=[x for x in j['reviews'] if x['id']==a['id']]
 assert len(reviews)==1 and reviews[0]['disposition']=='repaired'
 candidates=[]
 for ui,u in enumerate(j.get('ledger_updates',[])):
  if u.get('ledger')!='research/defect-ledger.jsonl': continue
  v=u.get('row',u)
  if (v.get('subject') or v.get('id') or v.get('item'))==a['id'] and v.get('severity','fatal')=='fatal': candidates.append((ui,u,v))
 assert len(candidates)<=1,(p,a['id'])
 original=candidates[0][1] if candidates else None
 proposal=candidates[0][2] if candidates else {}
 # Preserve a worker's fully structured row, including its chosen ID, date,
 # taxonomy, repair_cost and prevention. Fill missing canonical fields only.
 prior_id=represented.get((j['phase'],a['id']))
 prior=next((x for x in ledger if x.get('defect_id')==prior_id),None) if prior_id else None
 assert not prior_id or prior is not None
 row=copy.deepcopy(prior) if prior else (copy.deepcopy(proposal) if original and 'row' in original else {})
 if prior:
  row['defect_id']=prior['defect_id']+'-exact-adjudication-registration'
  row['supersedes']=[prior['defect_id']]
  row['registration_kind']='append-only-exact-reference-registration'

 row.setdefault('defect_id','bcs62-step5-'+j['phase']+'-r'+str(j['round'])+'-u'+j['unit']+'-'+a['id'])
 row.setdefault('run',RUN);row.setdefault('at',a['at']);row.setdefault('class',proposal.get('class','accuracy'))
 fallback=overrides.get((j['phase'],a['id']))
 if 'subclass' not in row: row['subclass']=proposal.get('subclass') or fallback[0]
 if 'location' not in row:
  location=proposal.get('location',proposal.get('locus'))
  if location and location not in ['Verification step 3.1']: row['location']=location
  else: row['location']=fallback[1]
 row.setdefault('severity','fatal');row.setdefault('subject',a['id'])
 row.setdefault('caught_at_stage',proposal.get('caught_at_stage','5-adjudicate'))
 row.setdefault('caught_by_role',proposal.get('caught_by_role','final-adjudicator'))
 row.setdefault('disposition',proposal.get('disposition',proposal.get('status','fixed')))
 row.setdefault('batch',j['unit'])
 for field in ['repair_cost','prevention']:
  if field in proposal:row.setdefault(field,copy.deepcopy(proposal[field]))
 exact_ref={k:a[k] for k in ['id','model','item_sha256','context_sha256']}
 # Original incomplete references are preserved verbatim in sources.json.
 row['adjudication_ref']=[exact_ref]
 row['evidence']=row.get('evidence',[])+[{'path':rel(p),'note':'Native confirmed_fatal decision at decisions['+str(index)+']; corresponding native review records repaired. '+dec['reason']},{'path':rel(adj_path),'note':'Exact native adjudication tuple; phase '+j['phase']+', round '+str(j['round'])+'.'},{'path':rel(dispatch),'note':'Original successful native worker dispatch; no new independent review claimed.'}]
 assert row['defect_id'] not in existing_ids,row['defect_id']
 assert not any(x['defect_id']==row['defect_id'] for x in rows)
 rows.append(row)
 if not original: missing_proposals.append(a['id'])
 sources.append({'defect_id':row['defect_id'],'report':rel(p),'report_sha256':sha(p),'decision_index':index,'original_decision':dec,'original_review':reviews[0],'original_ledger_update':original,'superseded_original_row':prior,'original_ledger_update_index':candidates[0][0] if candidates else None,'normalization':'Exact native pre-edit adjudication tuple added; other missing canonical fields are bookkeeping projections of original decision/proposal. Original metadata retained here.','dispatch':rel(dispatch),'dispatch_sha256':sha(dispatch),'pack':rel(pack),'pack_sha256':sha(pack),'collected':rel(collected),'collected_sha256':sha(collected)})
assert len(rows)==54
# Mirror exact validator ownership semantics, without invoking any gate.
superseded={s for x in ledger for s in x.get('supersedes',[])}
active=[x for x in ledger if x.get('run')==RUN and x.get('defect_id') not in superseded]
def owners(a,rs):
 def same(r,ref): return ref.get('item_sha256')==a['item_sha256'] and (not ref.get('id') or ref['id']==a['id'])
 exact=[r for r in rs if any(isinstance(ref,dict) and same(r,ref) and ref.get('model')==a['model'] and ref.get('context_sha256')==a['context_sha256'] for ref in r.get('adjudication_ref',[]))]
 legacy=[r for r in rs if any(isinstance(ref,dict) and same(r,ref) and (not ref.get('model') or not ref.get('context_sha256')) for ref in r.get('adjudication_ref',[]))]
 return exact or legacy
assert all(len(owners(a,active))==0 for a in adjudications)
assert all(len(owners(a,active+rows))==1 for a in adjudications)
# Exact frozen Step-3 row projection, same JSON serialization as native tools.
frozen=sorted([x for x in ledger if x.get('run')==RUN and x.get('caught_at_stage') in ['3a-adjudicate','3b-cross'] and x.get('subject') not in ['lem-normal-density-has-total-mass-one','thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique']],key=lambda x:x['defect_id'])
frozen_hash=hashlib.sha256(json.dumps(frozen,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
assert len(frozen)==149 and frozen_hash=='b759c5d77798948457514eaa2ab473b7e984a77ba3b125fcb0c1ab558502ab36',(len(frozen),frozen_hash)
dump('rows.proposed.json',rows);dump('sources.json',sources)
gate=read(BASE/'gate-1.json')
assignments=[{'unit':unit,**{k:v for k,v in row.items() if k!='failure'}} for unit,values in gate['gateAssignments'].items() for row in values if row.get('id')=='defect-ledger']
dump('resolution.json',{'run':RUN,'status':'proposal-only','cycles':1,'fatal_decisions':54,'initial_fatals':50,'repeat_fatals':4,'proposed_rows':len(rows),'existing_exact_owners':0,'new_semantic_defect_rows':50,'existing_semantic_rows_receiving_exact_reference_corrections':4,'projected_owners_per_fatal':1,'rows_without_worker_ledger_update':missing_proposals,'native_gate_assignments':assignments,'ledger_before_sha256':sha(ledger_path),'step3_rows_count':len(frozen),'step3_rows_sha256':frozen_hash,'original_reports_modified':False,'live_files_modified':False,'gates_tests_models_run':False,'append_command':'node tools/defect-ledger.mjs append --file '+rel(OUT/'rows.proposed.json'),'note':'Root must drain native writers and recheck duplicate IDs and exact tuple ownership before append. Append renders the shared view atomically under native lock.'})
print(json.dumps({'rows':len(rows),'missing_worker_proposals':len(missing_proposals),'frozen_step3':frozen_hash,'output':rel(OUT)}))
