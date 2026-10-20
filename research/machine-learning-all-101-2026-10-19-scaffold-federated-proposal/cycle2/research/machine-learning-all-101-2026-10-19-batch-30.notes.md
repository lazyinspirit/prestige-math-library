# Batch 30 authoring notes — machine-learning-all-101-2026-10-19

## Scope and current planning inputs

- Owned pair: `ml02-federated-optimization` / `ml02-federated-optimization-examples` only.
- Scheduling input: `4652875380fb83fe2b469069a490dc8aeba66b4b740ea67dbde87608a9c8b602`. The run dependency artifact places batch 30 at level 1 with prerequisite batches 13 and 28; this pair remains dependency ordered below both.
- Read `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md`; its compact page-frontmatter and uninterrupted-statement requirements supersede stale task/design directions. The current prose design at the ML-29 section of `research/plan-machine-learning-track.md` and the matching `plan-spec.json` entry agree on page IDs, title, category, `requires`, the seven proposed core item IDs, source routes, algorithm conventions, and theorem outputs. The structured scaffold had an empty item inventory before authoring; this batch manifest now records the complete inventory and computed item levels.
- The seven proposed core items are retained. Additional A-page items are proof prerequisites: finite-sum/recursion facts, the local-SGD drift and variance lemmas, FedAvg progress/drift lemmas, and convex/nonconvex SCAFFOLD trajectory/error and one-round lemmas. A local gradient-step nonexpansiveness lemma and a finite martingale-difference variance lemma were added where the proofs required them. The current A inventory has 30 items; the four B examples remain separate.
- Page-level suppliers: `ml02-linear-sparse-models` (batch 13), `ml02-differential-privacy` (batch 28), and published `probability-spaces-random-variables-and-expectation`.

## Supplier inspection and operational state

- `def-linear-regression-objectives` (batch 13, draft, item level 0): current Definition inspected in full. Its fixed-design loss is `||y-Xβ||²/(2n)` and it explicitly gives the one-observation unit-design specialization used by the two-client example. Its direct supplier `def-lasso-estimator` was also inspected; it uses the same least-squares/penalty normalization. No claim about the unresolved sparse-recovery theorem on batch 13 is used.
- `def-differential-privacy-and-adjacency` (batch 28, draft, item level 0): current Definition inspected in full. It uses ordered add/remove adjacency and requires the kernel inequality for every measurable output event. Its three direct measure/kernel definitions were inspected. The one-client count counterexample is proved directly from this interface.
- Published `def-expectation-of-a-nonnegative-or-integrable-random-variable`: current Definition and its direct random-variable/integral definitions inspected. It defines expectation as an extended integral for nonnegative variables and as a finite integral for integrable variables. The required page contains a statement-first inline link in this published Definition; report this to the owner for an authorized repair, and do not edit it here.
- Live native status was recomputed from `.autopilot/machine-learning-all-101-2026-10-19`: Step 1 scaffold is active, nothing is currently in flight, and the run reports a missing artifact for batch 28 plus an owner hold on another batch. The actual batch-28 supplier source exists and was inspected; its artifact marker is not approval. No readiness or owner acceptance is inferred.

## Mathematical conventions carried into the draft

- Keep weighted deployment `f_wt=Σ_i(n_i/n)F_i` separate from equal-client `f=N^-1Σ_i f_i`. The FedAvg/SCAFFOLD convergence statements use the equal-client objective. The count-weighted FedAvg procedure is described as a separate aggregation mode; no equal-client rate is transferred to it.
- FedAvg’s proof uses uniform fixed-size sampling without replacement. The local sample-mean lemma uses the exact SRSWOR finite-population factor, including `N/(N−1)`; for `N=1` the sample variance is zero. Any weaker constant used later is derived from this exact identity.
- Stich’s local-SGD result is for its specified quadratic-weighted average of worker iterates. The draft defines the initial shared state as a synchronization at time zero and defines `H` to include the first and final gaps. It makes no last-iterate or final-model-only convergence claim. Mini-batch variance reduction is proved from independent within-worker samples.
- SCAFFOLD Theorem III is split by regime and preserves its local-step bounds, output convention, within-client noise assumption, and lack of a gradient-dissimilarity condition. The local statement makes the required control initialization explicit. The paper’s general procedure permits zero controls, but its rate proof tracks initial control lag; the reported rate branch is stated with gradient-consistent initialization and the zero-initialization caveat is retained in Remarks.
- The quadratic-only Theorem IV improvement is recorded as a scope warning only; no arbitrary-smooth-loss conclusion is included.
- Client data remaining local is not treated as a DP result. The B-page deterministic count mechanism gives a concrete add/remove counterexample.

## Initial item inventory and dependency levels

The initial scaffold inventory had 28 A-page items and four B-page examples. It now has 30 A items after adding `lem-convex-gradient-step-nonexpansive` and `lem-finite-martingale-difference-sum-variance`, with actual carrier dependencies and recomputed levels. Levels are computed from in-run logical suppliers only (batch-13 and batch-28 direct item suppliers have level 0); published suppliers do not raise an item level. The full machine-readable dependency context is in `research/machine-learning-all-101-2026-10-19-batch-30.dependency-inputs.json` and `research/machine-learning-all-101-2026-10-19-batch-30.cross-batch-dependencies.json`.

## Source reading and next action

- Full relevant texts inspected: McMahan et al. §§1–4/Algorithm 1; Stich §§2–3, Theorem 2.2 and complete Appendix A; Karimireddy et al. algorithm and Theorems I/III plus Appendix B assumptions, D.2, E.1 and E.2; Gorbunov et al. finite-sum model, local method (4), general theorem and SCAFFOLD special-case discussion; Chi–Li tutorial slides 29–35. The first three are the primary theorem sources; the latter two are independent cross-checks, not substituted for their exact hypotheses or complete local proofs.
- Additional independent full-course treatment: Kun Yuan, *Optimization for Deep Learning*, Lecture 14, complete 30-slide PDF. Slides 7–16 and 24–30 were inspected for the objective, local updates, FedAvg, SCAFFOLD and client sampling. The browser PDF open returned a cache miss; direct retrieval of the same full PDF succeeded. Its shortened theorem formulas are not used as proofs or outputs. Its SCAFFOLD algorithm slide shows full participation; no partial-participation SCAFFOLD claim is derived from it.
- URLs and item-by-item dispositions are recorded in the batch coverage/source-evidence artifacts after their final authored claims are fixed. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-30.source-coverage.json --stamp` completed: 8/8 source entries stamped, with 0 documented drops. Duplicate source entries represent separate page scopes.
- Final proof-contract, scoped layout, rendering, content-policy and ordinary readiness-recorder checks are recorded in the final checkpoint. The only item-level precheck hold is the deliberately escalated nonconvex round-progress proof, which has no QED.

## Level 0 authored checkpoints

- def-federated-objective-and-client-sampling: defined the count-weighted deployment objective separately from the equal-client objective and fixed uniform sampling without replacement. Dependencies: none in-run. Sources: McMahan et al., §§1–4; Karimireddy et al., §§2–3; Yuan Lecture 14 slides 7–8. Final proof-layout and strict contract check: pass.
- alg-local-sgd: defined finite-sum worker updates and synchronization schedule, counting the common initialization at time zero in the maximum gap. Dependency: published `def-independent-random-elements`; no in-run supplier. Sources: Stich Algorithm 1/Definition 2.1; Gorbunov et al. equation (4). Final proof-layout and strict contract check: pass.
- lem-relaxed-euclidean-squared-norm: proved the two-vector Young bounds and finite vector-sum bound by square expansions. Dependencies: none. Source: SCAFFOLD Appendix B, Lemma 3. Final proof-layout and strict contract check: pass.
- lem-local-sgd-weighted-recursion: proved the quadratic-weighted recurrence telescope used for the exact local-SGD constants. Dependencies: none. Source: Stich Lemma 3.4 and Appendix A, PDF pp. 6 and 16. Final proof-layout and strict contract check: pass.
- lem-federated-recursion-averaging: proved the uniform and geometric weighted recursion telescopes used by the FedAvg/SCAFFOLD output conventions. Dependencies: none. Source: SCAFFOLD Appendix B, Lemmas 1–2. Final proof-layout and strict contract check: pass.
- lem-smooth-convex-gradient-difference: proved the client-gradient difference bound by descent on each centered convex function and averaging. Dependencies: published smooth descent, finite-sum gradient averaging, Euclidean inner product, and convexity definition. Source: SCAFFOLD Appendix B, inequality (9). Final proof-layout and strict contract check: pass.

Each checkpoint is a draft carrier only. The current ordinary Step-1 records are ready for 32 carriers and escalated for the two proof-obligation items listed at handoff; none constitutes acceptance or independent approval.

## Completed level 1 and local-SGD theorem checkpoint

- `lem-local-sgd-virtual-progress` was expanded to show the exact aggregation of its function-gap coefficient, then the Jensen steps that give the theorem's gap and distance terms. Conventions remain the virtual arithmetic mean and the finite product law. Dependencies: algorithm, relaxed norm bound, smooth descent, Jensen, finite-sum gradient averaging, inner product, expectation. Source: Stich, Theorem 2.2 proof outline, Lemma 3.1, PDF pp. 5–6 / arXiv v3. Final scoped layout, render and precheck pass.
- `lem-local-sgd-sampling-variance` proves the `sigma^2/(bK)` bound from independent centered component draws, with all batch draws included. `lem-local-sgd-client-drift` proves the factor `4 eta_t^2 G^2 H^2` and includes time-zero synchronization in the gap. Dependencies and exact claims are in their item frontmatter. Source: Stich, Lemmas 3.2–3.3 and Appendix A, PDF pp. 6–8 and proof appendix.
- `thm-local-sgd-convex-round-complexity` retains Stich's quadratic-weighted worker average and exact `a,H` restrictions. The recurrence constants are `A=1/2`, `B=sigma^2/(bK)`, and `C=8LG^2H^2`; the returned objective error has the exact `256 T G^2 H^2 L/(mu^2 S_T)` term. Source: Stich, Theorem 2.2 and Appendix A, PDF pp. 5–8 and complete proof appendix. No last-iterate or one-shot claim is made.

## Completed FedAvg checkpoint

- `lem-fedavg-local-drift` now defines drift at query points `y_{i,k-1}` and proves it using the local convex-gradient nonexpansive map; the previous recurrence had an unjustified negative coefficient. `lem-fedavg-one-round-progress` uses the same query-point drift and a finite martingale-difference supplier. Source: Karimireddy et al., SCAFFOLD, Appendix D.3, Lemmas 7–8, PDF pp. 20–22.
- `thm-fedavg-under-gradient-dissimilarity` gives an explicit geometric-average bound with corrected constants `11/2` for the within-client variance and `8` for sampling heterogeneity. Its stepsize is `1/[32(B^2+1) beta]`, which is the bound used by the local progress proof. The strongly convex equal-client rate is unchanged in order; no rate is transferred to the record-count-weighted objective.

## SCAFFOLD proof reconciliation and holds

- `def-scaffold-analysis-trajectory-and-errors` defines `E_r` at the query points `y_{i,k-1}`. The PDF's Eq. (23) prints endpoint points `y_{i,k}`, while Lemmas 10, 12 and 14–16 use gradient-query points. These are not interchangeable without a separate inequality. The local query-point definition is used throughout the authored proofs; the source indexing mismatch is recorded for owner reconciliation.
- The convex `C_r` is locally defined as the average expected squared error of the mean full gradient at each client's stored anchors. The source Eq. (24) instead prints the squared norm of the expected control. The local definition retains anchor randomness and lets the server-moment proof use the actual control residual. It is a deliberate, documented local interface change.
- `lem-scaffold-control-tracking-identity` is proved by Option II telescoping and a chronological martingale-difference argument. It proves the realized control is the mean of stored stochastic gradients, the residual from the full gradients at stored anchors has second moment at most `sigma^2/K`, and the server-control average invariant.
- The convex supplier chain is now locally proved with conservative constants: `lem-scaffold-convex-server-variance` gives coefficients `(6,12,6,18)` for query drift, anchor lag, objective gap and noise; `lem-scaffold-convex-control-lag` uses the query-point definition; `lem-scaffold-convex-client-drift` derives the `18/21` drift recursion from the residual controls and a nonexpansive gradient step. `lem-scaffold-convex-round-progress` uses potential coefficient `14N eta_tilde^2/S` and preserves the source stepsize limits. The strong-convex rate is proved; the general-convex potential inequality is proved, but its planned `NF/S` round term is not established by that inequality.
- `lem-scaffold-nonconvex-server-variance`, `lem-scaffold-nonconvex-control-lag`, and `lem-scaffold-nonconvex-client-drift` now have conservative local proofs with explicit constants. The client-drift item is a weaker query-point estimate than the source's sharper Lemma 16; it does not by itself reproduce the source coefficient needed by Lemma 17.
- **Owner escalation:** `lem-scaffold-nonconvex-round-progress` and the nonconvex branch of `thm-scaffold-convex-and-nonconvex-rates` remain unresolved. The revised conservative Lemmas 14–16 change the `E_r`, `Xi_r`, gradient and noise coefficients; the complete potential absorption under the source step limit is not established. Required supplier: either a full local proof of the sharper Lemma 16 under adaptive query points and within-client variance assumptions, or an alternate potential/stepsize derivation that retains the planned communication rate. The combined theorem is escalated until that proof and an independent nonconvex output summation are complete.

## Completed B-page example checkpoint

- `ex-local-versus-periodic-synchronization` gives a positive-probability finite local-SGD path with different final means under gap two and gap one; dependencies: `alg-local-sgd`. Source convention: Stich Definition 2.1.
- `ex-client-data-locality-does-not-imply-dp` checks the exact count kernel against the ordered add/remove event inequality for every finite epsilon and delta below one. Dependencies: batch-28 DP definition and measurable-kernel interfaces.
- `ex-two-client-shifted-optima` uses the exact one-row least-squares normalization from batch 13; its full-participation two-step FedAvg output `-9/32` differs from the equal-client minimizer `-3/5`.
- `ex-scaffold-control-correction` verifies that gradient-consistent controls cancel the two shifted local gradients at the server model. Source: SCAFFOLD §4 and Algorithm 1.

## Controlling-plan mathematical discrepancy for owner

- `research/plan-machine-learning-track.md` (refreshed ML-29, complete pair section) and the matching `plan-spec.json` contract state the SCAFFOLD general-convex round term as `NF/S` for expected error at most epsilon. The SCAFFOLD paper, Theorem III, PDF p. 5, prints the same term.
- However, the complete local potential argument in `lem-scaffold-convex-round-progress` gives
  `average_gap <= (D^2 + 28 beta N eta_tilde^2 F/S)/(eta_tilde R) + 19 eta_tilde sigma^2/(KS)`.
  Under the theorem's admissible `eta_tilde <= 1/(81 beta)`, the control-initialization term gives sufficient `R` proportional to `NF/(S epsilon)` to ensure error at most epsilon. It does not establish the plan/source term `NF/S` for arbitrary epsilon and objective scaling. The authored Statement retains `NF/S` without weakening the claim; its proof records this exact gap, and the item remains escalated.
- Proposed owner resolution: supply an additional argument establishing `NF/S` under the stated hypotheses, or reconcile the plan/structured contract and source headline. Until then, the general-convex round-complexity claim is not eligible for `ready`.

## Handoff actions

- Cross-batch inputs and contracts were regenerated from the final item dependencies. The ledger now has 4 page edges and 157 exact external-item edges, including the eight published suppliers of the new finite martingale-difference lemma. That helper is in the A-page manifest at level zero.
- Both page carriers are YAML-frontmatter-only with empty bodies. Coverage, proof-contract, source-coverage, source-evidence and cross-batch dependency artifacts match the current carriers; source retrieval is stamped for all eight page-scoped entries.
- The final batch-scoped validations and two owner escalations are listed in the final checkpoint below. The run-wide item-level and proof-contract-coverage gates remain open due unrelated empty manifests; no shared manifest or engine state was edited.


## Final batch-30 authoring checkpoint and item decisions

The table records all 34 assigned draft carriers. The exact uninterrupted statement/definition, mathematical conventions, proof or verification, and item-level source citations are in the linked carrier; exact source locators and harvested-result dispositions are mapped by item in `research/machine-learning-all-101-2026-10-19-batch-30.source-evidence.json` and the companion source-coverage file. Direct dependency IDs and recomputed item levels are in the batch pages manifest and dependency-inputs artifact. Step-1 records are hash-bound sidecars, all ordinary non-owner records.

| Item | Carrier title (exact current title) | Level | Step 1 |
|---|---|---:|---|
| `def-federated-objective-and-client-sampling` | Federated objectives and client sampling | 0 | ready |
| `alg-local-sgd` | Local SGD with periodic synchronization | 0 | ready |
| `lem-relaxed-euclidean-squared-norm` | Relaxed inequalities for squared Euclidean norms | 0 | ready |
| `lem-finite-martingale-difference-sum-variance` | Second moment bound for a finite martingale-difference sum | 0 | ready |
| `lem-local-sgd-weighted-recursion` | Quadratic-weighted telescope for a strongly convex recursion | 0 | ready |
| `lem-federated-recursion-averaging` | Geometric and sublinear averaging for descent recursions | 0 | ready |
| `lem-smooth-convex-gradient-difference` | Smooth convex gradient differences around a minimizer | 0 | ready |
| `lem-convex-gradient-step-nonexpansive` | Gradient steps of smooth convex functions are nonexpansive | 0 | ready |
| `alg-fedavg` | Federated averaging (FedAvg) | 1 | ready |
| `alg-scaffold` | SCAFFOLD with client and server control variates | 1 | ready |
| `lem-uniform-client-sampling-moments` | Moments of a uniformly sampled fixed-size client set | 1 | ready |
| `lem-local-sgd-virtual-progress` | One-step progress of the virtual local-SGD iterate | 1 | ready |
| `lem-local-sgd-sampling-variance` | Variance reduction across independent local-SGD workers | 1 | ready |
| `lem-local-sgd-client-drift` | Deviation of local-SGD workers from their virtual mean | 1 | ready |
| `lem-perturbed-strong-convexity` | Strong-convexity inequality for a perturbed gradient point | 1 | ready |
| `thm-local-sgd-convex-round-complexity` | Strongly convex local-SGD round complexity | 2 | ready |
| `lem-fedavg-one-round-progress` | One-round progress of strongly convex FedAvg | 2 | ready |
| `lem-fedavg-local-drift` | Client drift under FedAvg gradient dissimilarity | 2 | ready |
| `def-scaffold-analysis-trajectory-and-errors` | SCAFFOLD trajectories, client drift, control lag and tracking error | 2 | ready |
| `thm-fedavg-under-gradient-dissimilarity` | Strongly convex FedAvg under bounded gradient dissimilarity | 3 | ready |
| `lem-scaffold-control-tracking-identity` | Option II controls track gradients at stored client anchors | 3 | ready |
| `lem-scaffold-convex-server-variance` | Convex SCAFFOLD server-update second moment | 4 | ready |
| `lem-scaffold-convex-control-lag` | Convex SCAFFOLD control-lag recursion | 3 | ready |
| `lem-scaffold-convex-client-drift` | Convex SCAFFOLD client-drift bound | 4 | ready |
| `lem-scaffold-convex-round-progress` | Strongly convex SCAFFOLD progress in one communication round | 5 | ready |
| `lem-scaffold-nonconvex-server-variance` | Nonconvex SCAFFOLD server-update moments | 4 | ready |
| `lem-scaffold-nonconvex-client-drift` | Nonconvex SCAFFOLD query-point drift bound | 4 | ready |
| `lem-scaffold-nonconvex-control-lag` | Nonconvex SCAFFOLD control-anchor tracking recursion | 5 | ready |
| `lem-scaffold-nonconvex-round-progress` | Nonconvex SCAFFOLD progress in one communication round | 6 | escalated |
| `thm-scaffold-convex-and-nonconvex-rates` | SCAFFOLD rates for strongly convex, convex and nonconvex objectives | 7 | escalated |
| `ex-local-versus-periodic-synchronization` | Local updates and periodic synchronization give different averages | 1 | ready |
| `ex-client-data-locality-does-not-imply-dp` | Keeping records on clients does not imply differential privacy | 1 | ready |
| `ex-two-client-shifted-optima` | Two clients with shifted least-squares optima | 2 | ready |
| `ex-scaffold-control-correction` | SCAFFOLD controls cancel shifted local gradients at the server model | 2 | ready |

### Final validation results

- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-30.proof-contracts.json --strict`: 0 errors, 0 warnings; 34/34 items checked.
- `node tools/proof-layout.mjs` on all 34 A/B item carriers: 34 items, 79 steps, 0 defects.
- Batch author-check: rendering passed (36 files, no multiline displays, unbalanced math or YAML errors); content-policy passed (34 scoped items); strict proof-contract passed. Its precheck remains nonzero only for `lem-scaffold-nonconvex-round-progress` because that proof is escalated and has no QED.
- `source-fetch-check --stamp`: 8/8 page-scoped source entries verified; 0 source drops.
- Scoped dependency recomputation over batches 13, 28 and 30: 34 batch-30 items, 0 level/dependency mismatches, maximum item level 7. The run-wide item-level checker still reports 79 empty scaffold inventories in other live batches; none is batch 30.
- The refreshed cross-batch ledger has 4 required-page edges and 157 exact external-item edges; all 157 item excerpts were checked as literal substrings of the inspected current supplier carriers.
- Run-wide proof-contract-coverage reports an empty inventory in `distribution-shift-and-domain-adaptation`; the batch-30 strict contract check above passes.
- The live run-wide Step-1 check remains open because of unrelated items/manifests. Batch 30 has 32 ready and 2 escalated hash-bound records; this does not certify the run or confer acceptance.

### Owner escalations and next action

- `lem-scaffold-nonconvex-round-progress`: the conservative server-moment, control-lag and query-point drift estimates do not yet establish the planned potential absorption. The next proof must either supply the sharper Lemma 16 estimate under the adaptive query/noise hypotheses or derive a new potential and constants that retain the planned communication rate.
- `thm-scaffold-convex-and-nonconvex-rates`: its nonconvex branch depends on the escalated round-progress result. Separately, the authored Statement retains the plan/source `NF/S` general-convex target term, while the explicit potential bound only proves a sufficient `NF/(S epsilon)` term. The additional proof or owner reconciliation remains unresolved, so the item is escalated.
- The local trajectory definition intentionally measures `E_r` at query points `y_{i,k-1}` because all local recurrences use these points; the cited paper's Eq. (23) prints endpoint points `y_{i,k}`. The local convex lag `C_r` also records the expected squared error of random anchor-gradient means, which differs from the paper's displayed squared expected control. Both interface changes and their mathematical reasons are recorded above and in the item/source evidence for owner reconciliation.

No unresolved source retrieval failure remains. The Yuan Lecture 14 cache miss was recovered by a complete PDF retrieval; no drop or unsupported source claim is recorded.


## Delegated scaffold/federated final repair addendum — cycle 2

This dated addendum is a later proposal by /root/scaffold_federated_repair, not native authoring, independent native review, readiness or gate credit. The complete original notes and all source-reading/fetch artifacts are archived byte-for-byte under research/machine-learning-all-101-2026-10-19-scaffold-federated-proposal/cycle2/before/. All eight original source fetch stamps and original reading attribution remain unchanged.

The proposed inventory is 35 items: the original 34 plus fs-scaffold-general-convex-uniform-output-round-headline. The original general-convex clause is preserved verbatim in research/machine-learning-all-101-2026-10-19-scaffold-federated-proposal/cycle2/original-general-convex-clause.md and bound to its native preimage. The new false statement gives its precise universal-constant, fixed-step, uniform-server-output interpretation and the complete quadratic refutation; it makes no claim about every alternative weighted source output. The corrected theorem retains the exact convex finite-round potential and optimizes its initialization term. The nonconvex proof now handles the correlation of client participation with the new server point explicitly and fully absorbs all adaptive-query noise terms, with sufficient step constant100 and the full planned communication order. Strong-convex and exact local-SGD source rates are retained.

The final requested normalization correction in lem-local-sgd-weighted-recursion divides the weighted inequality by S_T to obtain A/S_T times the weighted sum; its Statement is unchanged and its local-SGD theorem consumer remains valid. All 35 source interfaces, exact native-schema proof contracts, manifests and complete consumer dispositions are provided in this proposal. Actual-source root integration, ordinary readiness reconciliation, recertification and native stage gates remain owed. No actual source, manifest, evidence history, readiness marker or engine transition was modified by this repair task.
