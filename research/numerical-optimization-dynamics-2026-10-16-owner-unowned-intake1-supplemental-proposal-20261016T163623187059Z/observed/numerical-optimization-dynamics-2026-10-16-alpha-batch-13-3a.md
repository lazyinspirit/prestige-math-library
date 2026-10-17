# Batch 13 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-13`.

Review proceeds in the generated item order. Scope: seven touched carriers and three refuter findings; no reader findings or page decisions. The original scope group `v` is unchanged.

## Level 0

- `def-finite-straight-line-computational-program`: complete risk review. Reviewed the complete definition and its local C1/total derivative suppliers. Finite topological recursion, repeated/empty parents, zero dimensions, scalar output, deterministic replay and strict branches are coherent. Arbitrary primitives are permitted; differentiability must be required by derivative procedures.
- `lem-implicit-sensitivity-error-controlled-by-residual`: accepted reader repair. Read current proof and exact IFT, derivative mean-value and chain-rule suppliers. Restricting to gamma(t)=Psi(tr) on (0,1), applying the bound between epsilon and 1-epsilon, then using endpoint continuity correctly needs only the stated segment bound. Inverse perturbation identity and product estimates give the stated coefficient; r=0 is handled. No statement change by this adjudicator. Pre/post snapshots identify the reader delta; source comparisons and final checks are recorded below when complete.

Next: level 1 derivative procedures and risk reviews. No blocker at level 0.

## Level 1

- `alg-forward-mode-automatic-differentiation` (`refuter:13:1`): confirmed fatal. An ordinary primitive abs(x) on R at zero is admissible to the general graph but has no derivative. Added the explicit C1 / declared piecewise-C1 primitive input condition. The derivative evaluations are now defined on strict admissible branches; empty/repeated slots and input-coordinate outputs retain their intended meanings.
- `alg-reverse-mode-automatic-differentiation` (`refuter:13:2`): confirmed fatal for the same independent missing input condition; repaired symmetrically. Slotwise transposes and additive accumulators preserve repeated-parent contributions.
- `lem-finite-straight-line-program-defines-c1-map`: complete risk review; open preimage induction and continuous chain-rule matrix products prove the exact claim, including empty admissible sets and zero dimensions.
- `ex-branchwise-ad-at-the-absolute-value-switch`: complete risk review; linear branch derivatives and unequal one-sided quotients justify every assertion.
- Consumer inspection for the two algorithm Definition changes: local forward/reverse correctness theorems, Hessian-vector procedure, finite-iteration procedure, checkpoint procedure and work/storage theorem already require C1 or C2 primitives. Outside consumer `thm-discrete-adjoint-gradient-recursion` explicitly assumes a C1 state-step graph (F1), so no outside repair is needed. The reference search found no other consumers. Source and contract mirrors will be synchronized after all item edits.

Next: level 2 in the generated order. No level-1 blocker.

## Level 2

- `alg-checkpointed-reverse-schedules`: amended repair. Accepted the reader's explicit terminal cotangent, compatible spaces and top-level budgets. Fixed the independently confirmed refuter storage issue in its paired procedure: only the scalar final output survives the first terminal leaf; recursive calls return cotangents alone. A split saves its start, uses a live midpoint for the right child, then restores and releases the saved start before the left tail call. No frame retains a primal vector. This preserves the external terminal-value/initial-cotangent interface, step order, capacities and work bound. Its only direct item consumer is the paired level-3 theorem, amended there.
- `alg-differentiate-finite-fixed-point-iteration`: complete risk review. Coordinate/basis calls compute the finite-map Jacobian with correct K=0, m=0, p=0 cases and statuses.
- `lem-certified-linear-solve-jacobian-and-pullback-error`: reviewed no defect; reader changes are audit enrichment. The original inverse/SVD and norm steps were elementary and sound; the added explicit dependencies and derivations are correct. Independently checked K, eta_b, eta_A, n-factor sequential-dot expansion, outer-product rounding, n=1 and c=0, and the realized rank-one perturbation. All nine cited local suppliers were opened. Primal residual and inverse defect are separate certificates; reverse addition error is excluded.
- `lem-finite-straight-line-program-defines-c2-map`: complete risk review. C2 induction uses the exact cited Banach chain/product theorem; no Hessian symmetry assumption.
- `thm-forward-mode-computes-directional-derivative`: complete risk review. Induction on parent tuples establishes the directional derivatives, with repeated/empty slots and input-coordinate outputs.
- `thm-reverse-mode-computes-gradient`: complete risk review. Found and corrected a nonfatal transpose slip in step 2.1: the forward derivative, rather than its transpose, equals the sum of forward path products. The cotangent is that sum transposed and applied to 1. Statement unchanged. This risk-only discovery has no dispatched decision: it is recorded for owner routing, not given an extra invented obligation.
- `thm-reverse-mode-work-and-tape-storage-bound`: amended repair. Reader's metadata/local-tape/scratch correction is necessary for zero-dimensional nodes and valid. Added the C1 fixed-branch hypothesis to match the amended reverse procedure. Arithmetic work excludes initialization as expressly stipulated in A2; storage includes input gradient, metadata and local tapes. T=0 still has scalar input output and nonzero counted storage. A reference search found no item consumer of this theorem.

All level-2 risk reviews are complete. Next: level-3 paired checkpoint proof, iteration comparison, Hessian-vector and graph perturbation proofs.

## Level 3

- `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds` (`touched` and `refuter:13:3`): amended repair and confirmed fatal, respectively. Original d=1, t=T-1 left descents retained intermediate right terminal vectors while later left calls ran; for E_j=R^n this requires order T*n storage. The corrected procedure returns only cotangents recursively. Induction on N proves both cotangent correctness and unique capture of the exact scalar terminal output; induction on resource budgets bounds saved starts by d, with one live state and no vector-valued frame records. One recorded forward/reverse per step and at most t replays remain valid. Added the scalar output register to G. Separately qualified the uniform count: its initial forward pass uses T unrecorded evaluations; the triangular block count concerns additional replays after that pass. Checked empty sequence, capacity-one leaves, zero budgets, m>T and partial final blocks.
- `thm-finite-iteration-sensitivity-bound-and-residual-limitation`: accepted repair, with complete risk review. Exact open/convex and differentiability hypotheses support contraction and finite-map differentiation. Reader handles positive-dimensional IFT and zero-dimensional cases separately. The scalar residual-zero counterexample, convolution factor K*q^(K-1), q=0 and K=1 cases check directly. No new source edit.
- `thm-forward-over-reverse-computes-hessian-vector-product`: complete risk review. Differentiating the reverse recurrence with the bounded-bilinear product rule gives exactly the authored Hessian-vector algorithm, including input-coordinate outputs and zero directions; symmetry is unnecessary.
- `thm-graph-gradient-error-from-local-jacobian-perturbations`: reviewed no defect, change kind audit enrichment, with complete risk review. The noncommuting telescope and induced-norm estimate are sound; the added norm/transpose explanation makes elementary steps explicit. Empty paths/disconnected nodes and zero factors are covered without division. The local remark consumer uses exactly the unchanged exact-accumulation interface.

All thirteen HIGH/CRITICAL reviews are complete. No substantial missing prerequisite, outside consumer needing repair, defective published item, or proposed withdrawal was found. Published carriers were read-only.

## Source checks and exact historical evidence

- [Lebl, §8.3, Theorem 8.3.7](https://www.jirka.org/ra/html/sec_svtheder.html), statement and complete proof: open domains, differentiability at the two corresponding points, chain-rule derivative order and the zero intermediate increment case. [§8.4, Lemma 8.4.1 and Proposition 8.4.2](https://www.jirka.org/ra/html/sec_svthedercont.html): endpoint continuity and the convex-open uniform derivative bound. [§8.5.1, Theorem 8.5.6](https://www.jirka.org/ra/html/sec_svinvfuncthm.html), statement and complete proof: nonsingular state block, local C1 branch and differentiated zero identity. Applied only under matching hypotheses; zero-dimensional iteration cases are proved locally.
- [MIT 18.S096 complete notes](https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf), Chapter 8 §§8.3.1–8.4.1, printed pp. 60–63: reverse graph accumulation, path products and forward-over-reverse interpretation. Local proofs establish the exact stated finite graph/strict-branch claims and resource bounds.
- [Griewank, P228](https://ftp.mcs.anl.gov/pub/tech_reports/reports/P228.pdf), §6, printed p. 15, Theorem 6.1 and its preceding split-capacity argument: binomial capacity and recorded/adjoint/replay resource conventions. The local proof establishes the actual amended split procedure; no optimality claim is imported.
- [Baydin–Pearlmutter](https://arxiv.org/pdf/1404.7456), §§3.1–3.2, printed pp. 3–4: finite elementary-operation traces, known primitive derivatives, seeded forward/reverse accumulation and storage distinction.
- [Stuart–Voss](https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf), §3.1, printed pp. 34–35, Lemma 3.4 and complete proof: a strict induced-norm inverse defect implies invertibility and inverse-norm control. The solve lemma proves its particular Jacobian and rounded pullback estimates locally from the nine exact local suppliers, rather than importing an unstated derivative-error certificate.

All seven touched item sources initially matched their immutable reader-post raw SHA256 exactly. Exact pre-reader source archives were recovered and checked against each pre snapshot raw SHA256; no missing-preimage or unbound historical disposition is claimed:

- `lem-implicit-sensitivity-error-controlled-by-residual`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/lem-implicit-sensitivity-error-controlled-by-residual.md`; SHA256 `2095dc6c624e22868631c1db8878322fa082096237f7fc8f2fb153aa60a58d47`.
- `thm-finite-iteration-sensitivity-bound-and-residual-limitation`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-finite-iteration-sensitivity-bound-and-residual-limitation.md`; SHA256 `4231930829efb65d74908040e993cf0322799ff556a1553175b2aa8e69d112c4`.
- `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds`: `research/numerical-optimization-dynamics-2026-10-16-root-step2-current-page-requires-proposal-data/inputs/00277-thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds.md`; SHA256 `85cda992e05251f330adcd341e4b9eaf2532a027f182c7cb599dca8e36e4818d`.
- `alg-checkpointed-reverse-schedules`: `research/numerical-optimization-dynamics-2026-10-16-root-step2-current-page-requires-proposal-data/inputs/00271-alg-checkpointed-reverse-schedules.md`; SHA256 `ee8b1cc7ae5bdaf49e1f7920539ebfe50feeb40a35bc35fec07922fbfe031a34`.
- `thm-reverse-mode-work-and-tape-storage-bound`: `research/numerical-optimization-dynamics-2026-10-16-root-step2-current-page-requires-proposal-data/inputs/00276-thm-reverse-mode-work-and-tape-storage-bound.md`; SHA256 `3b92508b379b98fa86e92db1e408af4f7b3ca199837bf39c5ccc44201276c675`.
- `thm-graph-gradient-error-from-local-jacobian-perturbations`: `research/numerical-optimization-dynamics-2026-10-16-root-step2-current-page-requires-proposal-data/inputs/00280-thm-graph-gradient-error-from-local-jacobian-perturbations.md`; SHA256 `8bf4a67cc13158f4a01c2b203f68e0992aed2e1625a82b73d2313d940e3c1ea0`.
- `lem-certified-linear-solve-jacobian-and-pullback-error`: `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/integration-current-sources/lem-certified-linear-solve-jacobian-and-pullback-error.md`; SHA256 `f150b851ea474ddca1b7b6867a4ed63ae2934e0d32b91de8541410831d77d31f`.

## Consumer and metadata dispositions

The batch-13 manifest now mirrors current definitions/statements, actual dependencies and affected proof/fact strategies; local citation quotes and changed derivation mirrors are synchronized. Existing provenance remains accurate (altered sourced statements and authored proofs); no judge stamp was present on the edited items. No judge, stamp, dispatch, native gate battery or stage transition was performed.

Reference searches across items and library found only the paired theorem as an item consumer of the checkpoint procedure and no item consumer of its theorem or the cost theorem. The existing A-page summary remains accurate. The finite-iteration theorem has no direct item consumer; the graph-error theorem's direct remark uses its unchanged exact-accumulation restriction. The outside `thm-discrete-adjoint-gradient-recursion` and its `def-parameterized-finite-state-step-objective` supplier explicitly require C1 maps, so the AD input repair requires no mathematical consumer edit.

Owner follow-up: batch 96's proof-contract citation F2 in `thm-discrete-adjoint-gradient-recursion` quotes the old reverse procedure Definition. Refresh that quote against the current C1-qualified Definition in its owning batch. This is metadata maintenance; the theorem's actual use is sound. Its quote of the reverse correctness Statement remains unchanged. No outside file was edited.

Owner follow-up: the risk-only transpose correction in `thm-reverse-mode-computes-gradient` is closed row `nod-b13-3a-reverse-path-transpose`, but the immutable dispatch owes no decision for that item. The decisions file contains exactly its ten owed obligations. Route the additional source repair through the engine/owner mechanism before mechanical closure; no extra decision or coverage is fabricated. The other eight closed rows are referenced by the dispatched decisions, including the explicitly shared checkpoint storage row.

`briefs/tasks/frontier-dependency-ledger.md` retains all existing stable IDs/withdrawals and adds this batch's consumer-review evidence. The current batch cross-dependency records remain applicable, including batch-1 residual certification and the required published calculus interfaces. No defective published supplier was established, so the published ledger was not modified.

## Local validation and remaining work

- Initial risk report: 23 items routed, thirteen HIGH/CRITICAL. Final `--require-reviewed`: 0 errors; every required review is specific and complete.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-13.proof-contracts.json --strict`: 23/23 checked, 0 errors, 0 warnings. The first attempt exposed mechanical boundary-anchor and invalid plural Remarks-locator metadata; these were corrected without defect-ledger rows, then the check passed.
- Reflow on all six source-edited items: all unchanged. Focused precheck on those six and the four other proof-bearing routed touched carriers: 7 proofs checked, 0 failing; three algorithms have no proof phase.
- Rendercheck on all six source-edited items: pass, including YAML and actual KaTeX parsing.
- Inline deterministic Python recursion model: 641 capacity-admissible cases with d,t in 0..5 and T up to 64; checked reverse leaf order, exactly one terminal capture, per-step replay budgets and snapshot slots. This is bounded evidence; the authored induction proves the general result.
- Final required batched `node tools/proof-layout.mjs` on all six source-edited item paths: 6 items, 11 steps, 0 defects. No item source changed afterward.
- Ten decisions written; all three refuter findings confirmed fatal and completely repaired, each with exactly one closed defect row and repair_confidence 1. Touched verdicts: two accepted repairs, three amended repairs, two audit-enrichment reviews with empty defect_ids.
- No substantial mathematical escalation or unresolved local proof defect. The two explicit owner follow-ups above remain for routing and outside contract maintenance. The engine owns hash stamping and the gate battery; no gate success or run completion is claimed.
