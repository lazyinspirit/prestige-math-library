from pathlib import Path
import json,hashlib,datetime,shutil,re
R='physics-non-fluid-129-2026-10-21-r2';B=Path(f'research/{R}-owner-step5-initial-ledger-proposal');D=B/'published-maintenance-notes';
h=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest();guards={}
def archive(p):
 p=Path(p);t=D/'preimages'/p;t.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,t);rec={'path':str(p),'raw_sha256':h(p),'archive':str(t),'archive_raw_sha256':h(t)};guards[str(p)]=rec;return rec
items={
'17':('cor-smooth-weak-dirichlet-solutions-are-classical','elliptic-strong-form-sign','OPEN original mathematics-owner proof maintenance',
'Proof 3.1 expands the inherited negative-divergence operator with positive principal signs and omits its lower-order terms. The native reporter requests the correctly signed expression $-(D_i a^{ij})D_j u-a^{ij}D_iD_j u+b^iD_i u+cu$; no published repair was made.',
'The reporter found the stated weak-to-classical conclusion recoverable from the correctly signed equation and continuity. The exact EMG inverse use is `lem-emg-fx-dirichlet-holder-inverse` F9 and Proof 2.1; the assigned ball example uses the correctly signed higher-order regularity result directly. This is a nonfatal referral for those scoped uses, not a whole-corollary audit.'),
'20':('lem-emg-fieldstrength-positive-symmetric-reduction','stale-source-status','OPEN original owner wording maintenance',
'The Statement and [L1] still call `def-emg-electrovacuum-cauchy-system` draft, although its current frontmatter says published; its precheck remains pending. Correct only the obsolete status wording while preserving the equations and honest verification qualifications.',
'The native reporter found that the quoted source-free equations still agree with the Definition and that this wording defect does not invalidate the assigned `lem-emg-fx-linearized-hodge` calculation. Published status is not new audit evidence.'),
'34':('def-gr-spacelike-hypersurfaces-and-cauchy-sets','cauchy-horizon-direction','OPEN original mathematics-owner definition wording maintenance',
'Clause (e) gives $H^+(S)=D^+(S)\\setminus I^-(D^+(S))$ but describes points “not chronologically preceded by” a domain point. Membership in $I^-(D^+(S))$ instead means preceding some domain point. The reporter proposes “do not chronologically precede any point of $D^+(S)$,” with original-owner review of affected uses before changing this Definition.',
'The reporter’s assigned Cauchy-slice proof uses clauses (a) and (c), not the horizon clause, and remains sound for that reviewed use. This is a presentation referral; no published Definition or consumer was repaired.'),
'47':('thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate','publication-evidence','OPEN publication-owner maintenance',
'The current published theorem has no `verification.audited`, `verification.verified` or `verification.repair` field. Its owner must recover genuine publication-review evidence or perform an authorized review; this note supplies no stamp and closes no marker gap.',
'The native reporter checked interval projector regularity for `def-nrqmx-smooth-projector-bundle` and the conditional finite estimate used by `thm-nrqmx-adiabatic-geometric-phase-bound` F1. The report found those exact uses adequate and proposed publication-evidence upkeep only. Its passing focused depcheck is not publication acceptance.'),
'75':('prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb','outer-diagram-arcs','OPEN original mathematics-owner diagram maintenance',
'The native reporter identifies four outer cup/cap arcs in the Statement square-relation TikZ diagram that bulge outside the endpoint strip: controls at y=3.65 above top endpoints y=3 and y=.35 below bottom endpoints y=1. It proposes reversing only those outer bulges into the strip while retaining endpoints, the middle circle, labels and algebraic content. Any published Statement change requires original-owner consumer review.',
'The reporter found the algebraic square/adjacent/distant relations valid for its scoped `ex-qftx-vacuum-channel-exchange` use; the issue is the displayed planar geometry. The report attributes the strip convention to Chen Definition 1.0.6. This note claims no new reading of Chen, whole-supplier audit or imported-source repair.'),
'97':('lem-csm-lattice-product-and-measure-compactness','publication-evidence','OPEN publication-owner maintenance',
'The published carrier has only a judge record in `verification`, with no audited, verified or repair publication evidence. The native reporter confirms the same batch-97 digest alert; this is publication metadata upkeep, not a mathematical counterexample. Genuine publication-review evidence or authorized owner review is still required.',
'The report identifies the finite-alphabet extension use in `lem-csm-frontier-fk-free-wired-limits` F2/Proof 3.1 and its downstream crossing-amplification/critical-point use, and found no missing Countable Choice premise or defective mathematical supplier use. This note records that scoped conclusion without closing the marker gap or certifying the supplier.'),
'98':('lem-directed-dyadic-rounding-enclosure-and-error','positive-infinity-tex','OPEN original mathematics-owner presentation maintenance',
'Proof 2.1 writes `$N_{\\max}<x<+infty$` with the backslash missing from `\\infty`; the negative-overflow clause uses the intended notation. The native reporter confirms the existing batch-98 digest alert and refers the one-token correction to the mathematics owner. No imported carrier was changed.',
'The reporter found the Statement and overflow enclosure argument sound for the finite endpoint-conversion use in `alg-csm-frontier-interval-finite-partition`. This is a presentation referral, not a new frontier defect or a whole-supplier audit.')}
appendix=json.loads((B/'published-maintenance-appendix.json').read_text());ledgerp=Path('research/published-consumer-supplier-ledger.md');ledger=ledgerp.read_text();archive(ledgerp)
proposals=[];notes=[];dedup=[];errors=[]
for u,(sid,suffix,status,issue,scope) in items.items():
 referral=next(x for x in appendix if x['unit']==u);rp=Path(referral['report']);rg=archive(rp);assert rg['raw_sha256']==referral['report_sha256']
 resultp=Path(f'research/{R}-dispatch/alpha-adjudicate-step5-v2-initial-r1-u{u}.result.json');dr=json.loads(resultp.read_text());archive(resultp);assert dr['ok'] and dr['exit_code']==0
 sourcep=Path(f'items/{sid}.md');source=sourcep.read_text();sg=archive(sourcep)
 digestp=Path(f'research/{R}-batch-{u}-step5-context.json');dg=archive(digestp)
 marker=f'{R}-step5-initial-u{u}-published-{suffix}'
 lines=[(i+1,l) for i,l in enumerate(ledger.splitlines()) if sid in l]
 subject_records=[]
 for match in re.finditer(r'^#{2,3} (.+)$',ledger,re.M):
  end=ledger.find('\n## ',match.end());section=ledger[match.start():end if end>=0 else len(ledger)]
  if any(pat in section[:1500] for pat in [f'Published ID: `{sid}`',f'Published supplier: `{sid}`']):subject_records.append(match.group(1))
 # All seven are absent from the existing subject/index list; the GR id is only
 # in dependencies of records on two different suppliers.
 disposition='append-new-open-maintenance-note' if not subject_records else 'existing-record-requires-root-comparison'
 prior={'unit':u,'subject':sid,'disposition':disposition,'existing_subject_records':subject_records,'all_exact_id_hits':[{'line':i,'text':l} for i,l in lines],'same_issue_existing_note_found':False if not subject_records else None,'reason':'No note/index entry on this exact subject. GR hits, if any, are dependency lists under different published subjects. Existing related adiabatic/common-domain and TL/right-annihilation records concern different suppliers/defects; no existing OPEN note is closed.'}
 dedup.append(prior)
 note=f'## {marker}\n\nPublished supplier: `{sid}`. Run: `{R}`. Reporter: native `step5-v2-initial-r1-u{u}` (`{dr["model"]}`, high effort); exact report: `{rp}` `{referral["json_pointer"]}`. Status: **{status}**.\n\n{issue}\n\n{scope}\n\nThis records the native referral and its scoped-use conclusion only. Published/imported source remains read-only; no publication acceptance, maintenance closure or additional frontier blocker is created. Current supplier raw SHA256: `{sg["raw_sha256"]}`.\n'
 notes.append(note)
 path=D/f'u{u}-note.md';path.write_text(note)
 proposals.append({'unit':u,'subject':sid,'marker':marker,'proposed_action':disposition,'proposed_status':status,'note_path':str(path),'note_raw_sha256':h(path),'native_report':rg,'native_report_pointer':referral['json_pointer'],'actual_reporter':{'label':dr['label'],'model':dr['model'],'profile':dr['profile'],'dispatch_result':str(resultp),'dispatch_result_raw_sha256':h(resultp)},'native_proposal_verbatim':referral['native_proposal'],'current_source':sg,'batch_digest':dg,'prior_note_dedup':prior,'reading_limits':'Bookkeeping followup: read actual report/referral reasons and scoped review conclusions, exact current supplier locus/frontmatter and applicable local comparison definitions; no new full-proof audit, external source retrieval or source repair.'})
(D/'notes-to-append.md').write_text('\n'.join(notes))
(D/'prior-note-dedup.json').write_text(json.dumps(dedup,indent=2,ensure_ascii=False)+'\n')
for p in ['items/def-uniformly-elliptic-divergence-form-operator.md','items/def-emg-electrovacuum-cauchy-system.md','items/lem-emg-fx-dirichlet-holder-inverse.md']:
 archive(p)
# Read-only import map guard preserves the distinction between native published
# physics mathematics and imported mathematical snapshots.
archive('research/math-imports.json')
(D/'report.json').write_text(json.dumps({'version':1,'run':R,'preparer':'/root/step5_noether_referral','task_type':'research-only-bookkeeping-followup','new_science_or_repair_cycle':False,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'proposed_notes':proposals,'counts':{'native_referrals':7,'proposed_new_notes':sum(x['proposed_action']=='append-new-open-maintenance-note' for x in proposals),'duplicate_notes_to_append':0},'reading_limits':'Exact referral objects and native scoped review reasons read; current seven carrier frontmatter/loci and elliptic operator/status comparison source read. Existing published ledger searched by exact IDs and relevant related headings/issue text. No fresh external PDF retrieval, diagram rendering, complete supplier audit or consumer-closure audit. Sound-use statements are explicitly attributed to authentic native reporters. No imported/original content changed.','root_action':'Review the seven exact note texts and current raw guards, then append only if still absent; retain all existing open maintenance and publication-marker deficiencies.','production_edits':False,'canonical_ledger_edits':False,'native_acceptance':False,'errors':errors},indent=2,ensure_ascii=False)+'\n')
(D/'evidence-guards.json').write_text(json.dumps(guards,indent=2)+'\n')
print('Prepared',len(proposals),'notes; existing exact subject notes:',sum(bool(x['existing_subject_records']) for x in dedup))
