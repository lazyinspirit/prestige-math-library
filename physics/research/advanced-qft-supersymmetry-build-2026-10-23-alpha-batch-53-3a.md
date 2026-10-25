# Batch 53 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`; group: `batch-53`.

Review proceeds in the dispatched dependency order. Current starting bytes match all six post-reader item hashes. Exact pre-reader item bytes are available from Git HEAD and match every pre-reader raw SHA256; the unified deltas were inspected. No historical source reconstruction is claimed.

## Completed item: def-qftx-superconformal-index (level 3)

Verdict: accepted_repair; repair confidence 1. The reader explicitly defines Hilbert completeness, adjoints and composition domains, grading/oddness, the separately supplied real supercharge domain and joint orthogonal projections. These are coherent explicit versions of the prior operator hypotheses. Trace-class positivity forces finite joint blocks; total energy multiplicities may remain infinite. No continuum model is inferred. Checked empty protected sector, infinitely many weighted zero states, positive beta and excluded fugacity endpoints. Direct consumer uses are the conditional cancellation theorem and protected Fock example; both require precisely these data. No outside direct item consumer was found by current item reference search.

Sources: [Rastelli–Razamat](https://arxiv.org/pdf/1608.02965), §2.1, (2.1)–(2.5), especially right-handed (2.5); [Kinney et al.](https://arxiv.org/pdf/hep-th/0510251), §3.3, (3.10)–(3.12), with differing R normalization. Mathematical suppliers: def-countable-choice, def-trace-class-operator, def-trace-of-a-trace-class-operator; physical formulation context: def-qftx-susy-background-data. These were read at their actual current status. Risk review is complete in the owning contract. No diagram is needed for this diagonal operator construction.

The following sections record completion of the higher-level obligations and final local checks.

## Completed item: pthm-qftx-superconformal-index-beta-independence (level 4)

Verdict: accepted_repair; repair confidence 1. Exact pre/post delta changes only the Kinney source locator and convention qualification. Section 3.3 is the right-handed construction, whereas the earlier cited (3.1)–(3.4) is the left-handed trace. Independently reviewed all four proof steps and the full lem-qftx-supercharge-positive-energy-pairing argument. Restriction to a finite reducing joint block is legitimate because each eigenvector is in D(Delta)=D(mathsf Q squared). Its paired parity dimensions cancel the scalar weight. Completing the finitely many blocks meeting an approximating finite basis set cannot enlarge the omitted absolute tail; this proves regrouping. The zero-sector diagonal is an absolutely summable subfamily and is beta independent even for infinite kernel. The source correction is nonfatal to the valid local proof and will receive its closed citation-defect ledger row. The free-chiral consumer uses exactly this conditional conclusion; its use is reviewed at level 5. Risk review complete.

## Completed item: def-qftx-physical-bps-index (level 5)

Verdict: reviewed_no_defect; change_kind: audit_enrichment; defect_ids: []. The pre/post delta adds standard definitions and completeness already carried by the named Hilbert/operator and graded-trace-class suppliers; it does not repair a false conclusion or change the admitted operator class. Closed/self-adjoint operators, composition domains, finite zero and positive parity eigenspaces, supplied bases and trace-class heat sums are coherent. The BPS definition requires a nonzero massive rest-fiber domain vector with mass equal to the central-charge operator norm; this index definition correctly requires a separate physical kernel identification and claims no universal BPS count. Direct consumers were opened: the physical beta-independence theorem matches the exact operator hypotheses; the finite matrix example needs the separate refuter-routed model-record completion below. No other direct item reference consumer was found. Supplier status remains draft for the current mathematical graded datum and physical BPS/background definitions; their formulations, not publication acceptance, are used. Risk review complete.

## Completed item: ex-qftx-superconformal-index-free-chiral (level 5)

Verdict: accepted_repair; repair confidence 1. The reader supplies explicit orthonormal mode labels, linear shift maps, full charge eigenvalues, finite-support bosonic/fermionic occupation basis, maximal diagonal charge domains and protected-sector completeness. These make the intended model explicit without changing the product. Recomputed Delta=0 and weights a p^m q^n, b p^m q^n with a=(pq)^(1/3), b=(pq)^(2/3). A finite mode set contributes product (1-y)/(1-x); its absolute occupation sum is product (1+y)/(1-x). The displayed logarithmic bounds give a finite uniform bound because both mode-weight series converge. Increasing rectangles exhaust finite-support states and justify the signed trace/product limit. The vacuum contributes 1. All fugacities strictly inside (0,1) are covered; endpoints are excluded. The separate positive-gap complement is still conditional on full trace-class/reducing-domain data. No continuum field-operator realization is asserted.

The former names for the mode maps and occupation construction were insufficiently explicit under the mandatory definition rule (nonfatal missing-map exposition defect); the separate wrong-handed Kinney locator was also corrected. Both will receive closed ledger rows. [Rastelli–Razamat](https://arxiv.org/pdf/1608.02965), §2.3, Table 1 and (2.9)–(2.14), supports the charge/descendant/symmetrization construction; source formula (2.14) agrees with the resulting product. The local absolute-convergence proof is independently checked, not attributed to a source theorem. No direct item consumer of this example was found. Risk review complete.

## Completed item: ex-qftx-witten-index-finite-superpartner-pair (level 6)

Verdict on refuter:53:1: confirmed_fatal; repair confidence 1. The pre/post example bytes were identical (raw SHA256 d55a0a7dc4edbb5a85a46d84c1d09a9f3a63956335f1eec1444a6a3036c7384b), and the model record was incomplete under its actual dependency. This is a missing hypothesis for presenting an instance of the physical datum, although the finite matrix arithmetic was correct. Completed the Example with time R and its time coordinate, positively oriented one-point spatial domain with unique zero-dimensional metric, flat product spacetime dt² and orientation dt, trivial state bundle/group action, no spatial matter fields, C1 state histories and an adopted Schrodinger equation. Operators remain directly supplied; there is no measure, regulator, boundary or continuum assertion. This is specified model input, never an observation. The original matrix, energy E_*>0, full domains and conclusion W=1 are preserved.

Verified all three steps: Q is Hermitian and odd, Q²=diag(0,E_*,E_*), heat is finite rank, and its graded diagonal is exactly 1. Units of Q, K, beta and time evolution agree in hbar=c=1. [Tong](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf), §1.2.2, printed pp. 14–15, supports the trace/cancellation convention and beta=0 caution; the explicit finite model is local. A current items reference search finds no consumer of this example, so its Example-interface completion needs no outside repair. Contract boundary evidence, risk review and manifest statement mirror updated. The original refuter report and observed fingerprint are preserved.

## Completed item: pthm-qftx-physical-index-beta-independence (level 6)

Untouched/unflagged: risk review only, no decision owed. Independently read its full two-step proof and the complete mathematical thm-qftx-witten-index-beta-independence proof. Exact finite-multiplicity pure-point, supplied-basis and heat trace-class hypotheses match. The supplier proves positive-block pairing and absolute regrouping; the physical theorem applies it with no extra continuum, empirical or BPS-state-count assertion. Empty kernel, single signed zero mode and beta>0 restrictions checked. Risk review complete.

## Metadata maintenance

Updated the batch manifest statement/source mirrors for the four reader-changed items and the repaired finite example. Refreshed four stale exact supplier quotations in owning proof contracts to the reviewed current definitions; these are metadata maintenance, not extra mathematical defect findings. All six HIGH/CRITICAL risk reviews are now specific and complete. The pages remain unchanged, frontmatter-only and compact-v1, with correct inventories. No TikZ/tikzcd diagrams occur in these six items or either page; their arguments require none. No published supplier defect or outside consumer repair has been identified.

Focused strict-contract check initially failed (21 diagnostics): the reader added three external-source A2 entries to an item-ID-only citation table, with duplicate/mismatched uses, and one boundary note lacked its section anchor. Preserved those source passages in source_evidence, retained A2 as the explicit adopted model premise, and corrected the boundary anchor. No mathematical argument changed and no mechanical-failure defect row was created. Reflow was unchanged; the scoped precheck passed 4 proof carriers with 0 failures, and rendercheck passed all 6 items and 2 pages. The final strict-contract rerun passed as recorded below.

## Decisions and defect ownership

Exactly five decisions are written in `research/advanced-qft-supersymmetry-build-2026-10-23-alpha-batch-53-3a-decisions.json`; group is `batch-53`. The original scope assignment group `l` is unchanged.

| Obligation | Verdict | Closed ledger suffix |
| --- | --- | --- |
| touched:53:def-qftx-superconformal-index | accepted_repair | right-handed-locator-definition |
| touched:53:pthm-qftx-superconformal-index-beta-independence | accepted_repair | right-handed-locator-theorem |
| touched:53:def-qftx-physical-bps-index | reviewed_no_defect, audit_enrichment | none |
| touched:53:ex-qftx-superconformal-index-free-chiral | accepted_repair | explicit-occupation-model; right-handed-locator-example |
| refuter:53:1 | confirmed_fatal, repaired | finite-model-record |

Each ledger ID has prefix `advanced-qft-supersymmetry-build-2026-10-23-batch-53-3a-`. All five rows are closed with disposition `fixed`, caught_at_stage `3a-adjudicate`, and repair_confidence 1; they reference their exact decisions. The refuter decision references exactly one row. Source reports, scope, pre/post snapshots and published/imported items were not edited. No owner resolution, historical-unknown claim, escalation clearing, judge record or acceptance stamp was fabricated. No previous judge stamp was present to invalidate.

## Final local checks and source limits

- Initial risk report and final `node tools/physics-support/risk-report.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-53.proof-contracts.json --require-reviewed`: exit 0, six HIGH/CRITICAL items reviewed, zero errors.
- Reflow on the repaired finite example: exit 0, unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the six explicit batch item paths: exit 0; four proof carriers checked, zero failing (definitions have no proof body).
- `node tools/physics-support/rendercheck.mjs` with the six explicit item paths and two explicit page paths: exit 0; eight files parse with valid YAML and KaTeX.
- Final `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-53.proof-contracts.json --strict`: exit 0; 6/6 items checked, zero errors and warnings, after the documented metadata repair.
- Final, single post-edit `node tools/physics-support/proof-layout.mjs items/def-qftx-superconformal-index.md items/pthm-qftx-superconformal-index-beta-independence.md items/def-qftx-physical-bps-index.md items/ex-qftx-superconformal-index-free-chiral.md items/ex-qftx-witten-index-finite-superpartner-pair.md`: exit 0; five items, twelve steps, zero defects. No item edits followed it.
- Exact scope/decision coverage comparison: 5/5, no missing or extra decisions.
- Five newly appended defect rows independently validated using a temporary selected ledger: exit 0, five rows, zero errors. Canonical append also validated all five before writing and rendered the ledger.
- Refreshed the six current owned-consumer item-edge reviews in the batch cross-batch input, preserving existing page rows; `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run advanced-qft-supersymmetry-build-2026-10-23`: exit 0, refreshed and deduplicated. No dependency edge changed.

Source review was limited to the exact relevant passages named above, retrieved through web PDF text: Tong §§1.2.1–1.2.2 (especially printed pp. 14–15), Rastelli–Razamat §§2.1 and 2.3 through (2.14), and Kinney §3 introductory (3.1)–(3.3), §3.1 (3.4) and §3.3 (3.10)–(3.12). These sources support conventions and context; the local conditional operator and convergence proofs were checked independently. A local PDF text-extraction attempt was unavailable because pdftotext is not installed; no local extraction success is claimed. Unrelated transitive imported proofs, arbitrary curved-background existence, continuum quantization and empirical realization were not audited. No measured input or statistical inference is used by these items. The A/B pages remain frontmatter-only.

## Outside diagnostic for owner; handoff

The optional run-wide command `node tools/physics-support/defect-ledger.mjs validate --run advanced-qft-supersymmetry-build-2026-10-23` exited 1 with four outside taxonomy diagnostics: batch-12-alleged-dictionary-cycle uses location `proof`; 3a-batch-34-atlas-gaussian-statistics uses `uncertainty`; 3a-batch-34-vacuum-definition-locator and 3a-batch-34-vacuum-energy-locator use `sources`. All four names have the run prefix. They are outside batch 53 and were not changed. The owner must route their taxonomy normalization before the run-wide ledger check can pass. These mechanical errors do not create new scientific defect rows.

No local mathematical prerequisite blocker, affected outside consumer, proposed withdrawal or defective published supplier was found. Batch-local work is complete; the engine retains decision stamping, full gate battery and all stage transitions. This report is local adjudication evidence, not publication or self-certification.
