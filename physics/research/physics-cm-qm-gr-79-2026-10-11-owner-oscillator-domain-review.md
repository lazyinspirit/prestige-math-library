# Oscillator domain owner review — phase 1

Run: physics-cm-qm-gr-79-2026-10-11. Reviewer: /root/physics_alpha12_oscillator_owner. Recorded: 2026-10-12T15:48:12.612766+00:00.

Read-only source investigation; only this run-local note was written. No source, imported supplier, manifest, contract, ledger, decision, gate, control or commit edit.

## Confirmed defects and smallest repair

reader:12:3/refuter:12:2 and reader:12:4/refuter:12:3 identify two current public-interface omissions. The definition permits a continuous forcing on an arbitrary nondegenerate interval I and defines model solutions only for J subset I. Both classification Statements quantify over J subset R and assert x:R without selecting I. Taking I=[0,1] exposes the mismatch. No additional analytic prerequisite is missing: explicit smooth families, invertible value/derivative matrices, cylinder-local uniqueness propagated over an interval, and endpoint continuity prove the intended global autonomous equation claims.

Smallest sound repair: retain the already corrected general model Definition. In each classification Statement and Given/F1 explicitly select the homogeneous model with I=R and f identically zero. Explain that local J is the solution interval, and a solution of a restricted homogeneous model (J subset I) is the restriction of the unique global autonomous solution, not a claim that the restricted model is defined outside I. Add an explicit maximality sentence: every local solution has its unique global extension, so maximal solutions of this all-R autonomous equation are precisely those global family members. The current proofs already establish this; a short closing inference suffices. Preserve all root cases, coefficient formulas, arbitrary nondegenerate J, initial-data uniqueness, decay and growing repulsive member.

Historical false assertion that I times R2 is open is already corrected in current Definition; reader:12:2 is closed in defect-ledger.jsonl. The current source limits open-domain Picard-Lindelof to interior times and uses relative endpoint derivatives. Native batch-7 adjudication also records that repair. Do not reopen this historical defect to justify narrowing the global claims.

The rich approved manifest/contract Statements retain global solution and arbitrary-interval classification claims. Neither limiting J to a bounded interval nor removing global/maximal claims is acceptable.

## Consumer scope and focused follow-up

Map below uses current item deps together with run manifest deps (old/current union), canonical alias resolution, and current body-reference scan. The two repair roots have no aliases. A definition change is unnecessary and would enlarge the consumer cone to 53 items. The preferred two-Statement repair has 37 downstream item consumers, owned by batches 7, 12, 18, 20, 25, 30, 32. Same reviewer owns every resulting consumer disposition and necessary focused repair.

Confirmed downstream interface issue: thm-cm-forced-oscillator-sinusoidal-response likewise references the arbitrary-I model and asserts all-R particular solutions without setting I=R. Its smallest repair is to select f:R explicitly; formulas and claims remain. thm-cm-forced-oscillator-variation-of-constants uses arbitrary forced I correctly, but should expressly identify g and x_h as the associated all-R homogeneous model, with no extension of f. cor-cm-homogeneous-oscillator-decay should expressly select the all-R homogeneous model. These items are already in the preferred cone.

Confirmed local/global ambiguity in prop-cm-two-mass-spring-modes: Statement quantifies x:J but clause 4 and proof 5.1 say such a curve is unbounded on [0,infinity), even for bounded J. Preserve the growing zero mode and distinguish its global family member/maximal extension from restrictions; also make scalar equations all-R autonomous equations with solutions on J. This root change has its own direct/indirect consumers, already contained in the map.

The key batch-12 boundary-value and two-mass consumers use c=0, k>0 (or the k=0 affine family) and require exactly the preserved arbitrary-J/global classification. Boundary-value proof uses J=[0,T], relative endpoint derivatives and the global member for the IVP. Current physical harmonic/damped/free-mode consumers explicitly distinguish global maximal extension from local restrictions; their formula uses survive selecting I=R. Full consumer dispositions remain pending the authorized write/review phase; this note is not a claim that every downstream proof has been recertified.

## Actual dependency lists of the repair roots

- thm-cm-homogeneous-oscillator-solution-classification: def-cm-oscillator-model-and-phase-system, lem-cm-continuous-dependence-on-initial-data, thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, def-derivative, def-interval.
- prop-cm-oscillator-degenerate-and-repulsive-cases: def-cm-oscillator-model-and-phase-system, lem-cm-continuous-dependence-on-initial-data, thm-derivative-of-exponential, thm-algebra-of-derivatives, thm-chain-rule, cor-zero-derivative-implies-constant, cor-primitives-of-a-continuous-function, thm-exponential-is-strictly-increasing, cor-exponential-is-a-bijection-onto-positive-reals, def-derivative, def-interval.

## Direct and indirect consumer map

| Item | Batch | Page | Direct use of repair root |
|---|---:|---|---|
| cor-cm-forced-modal-oscillator-response | 7 | cm-math-approximation | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| cor-cm-homogeneous-oscillator-decay | 7 | cm-math-approximation | thm-cm-homogeneous-oscillator-solution-classification |
| ex-cm-oscillator-cases-computed | 7 | cm-math-approximation-examples | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| ex-cm-resonant-forcing-and-amplitude-peak | 7 | cm-math-approximation-examples |  |
| ex-cm-uniform-force-and-linear-drag | 7 | cm-math-approximation-examples | prop-cm-oscillator-degenerate-and-repulsive-cases |
| prop-cm-oscillator-amplitude-maximum | 7 | cm-math-approximation |  |
| rem-cm-approximation-scope-and-limits | 7 | cm-math-approximation | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| thm-cm-forced-oscillator-sinusoidal-response | 7 | cm-math-approximation | thm-cm-homogeneous-oscillator-solution-classification |
| thm-cm-forced-oscillator-variation-of-constants | 7 | cm-math-approximation | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| ex-cm-oscillator-boundary-value-nonuniqueness-check | 12 | cm-math-verification-examples |  |
| ex-cm-two-mass-modes-numerical-check | 12 | cm-math-verification-examples | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| prop-cm-oscillator-boundary-value-nonuniqueness | 12 | cm-math-verification | thm-cm-homogeneous-oscillator-solution-classification |
| prop-cm-two-mass-spring-modes | 12 | cm-math-verification | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| rem-cm-verification-scope-and-limits | 12 | cm-math-verification |  |
| ex-cm02-drag-terminal-velocity | 18 | cm02-forces-initial-data-and-newtonian-flow-examples | prop-cm-oscillator-degenerate-and-repulsive-cases |
| cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded | 20 | cm04-one-dimensional-conservative-and-dissipative-models-examples |  |
| ex-cm04-damped-regimes-check | 20 | cm04-one-dimensional-conservative-and-dissipative-models-examples | thm-cm-homogeneous-oscillator-solution-classification |
| ex-cm04-harmonic-motion-check | 20 | cm04-one-dimensional-conservative-and-dissipative-models-examples |  |
| ex-cm04-resonance-response-check | 20 | cm04-one-dimensional-conservative-and-dissipative-models-examples |  |
| pthm-cm04-damped-decay-and-stability | 20 | cm04-one-dimensional-conservative-and-dissipative-models | thm-cm-homogeneous-oscillator-solution-classification |
| pthm-cm04-damped-motion | 20 | cm04-one-dimensional-conservative-and-dissipative-models | thm-cm-homogeneous-oscillator-solution-classification |
| pthm-cm04-harmonic-motion | 20 | cm04-one-dimensional-conservative-and-dissipative-models | thm-cm-homogeneous-oscillator-solution-classification |
| pthm-cm04-resonance-and-boundedness | 20 | cm04-one-dimensional-conservative-and-dissipative-models | thm-cm-homogeneous-oscillator-solution-classification |
| rem-cm04-linear-model-scope | 20 | cm04-one-dimensional-conservative-and-dissipative-models |  |
| ex-cm09-degenerate-oscillator-subspace | 25 | cm09-coupled-oscillations-and-approximation-examples | thm-cm-homogeneous-oscillator-solution-classification |
| ex-cm09-double-pendulum-linear-modes | 25 | cm09-coupled-oscillations-and-approximation-examples | thm-cm-homogeneous-oscillator-solution-classification |
| ex-cm09-forced-resonant-mode-check | 25 | cm09-coupled-oscillations-and-approximation-examples |  |
| ex-cm09-triatomic-translation-zero-mode | 25 | cm09-coupled-oscillations-and-approximation-examples | thm-cm-homogeneous-oscillator-solution-classification |
| ex-cm09-two-mass-spring-modes | 25 | cm09-coupled-oscillations-and-approximation-examples | thm-cm-homogeneous-oscillator-solution-classification |
| ex-cm09-unstable-quadratic-mode | 25 | cm09-coupled-oscillations-and-approximation-examples | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| pthm-cm09-forced-modal-response | 25 | cm09-coupled-oscillations-and-approximation |  |
| pthm-cm09-free-modes-and-degeneracy | 25 | cm09-coupled-oscillations-and-approximation | thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases |
| pthm-cm09-linearization-at-a-strict-minimum | 25 | cm09-coupled-oscillations-and-approximation |  |
| rem-cm09-zero-modes-degeneracy-and-scope | 25 | cm09-coupled-oscillations-and-approximation |  |
| ex-cm14-harmonic-oscillator-hamilton-jacobi-check | 30 | cm14-hamilton-jacobi-and-integrability-examples |  |
| ex-cm14-oscillator-caustic-check | 30 | cm14-hamilton-jacobi-and-integrability-examples |  |
| cex-cm16-stability-does-not-imply-attraction | 32 | cm16-stability-perturbations-and-chaos-examples |  |

## Writer conflicts and evidence

At inspection state.json was stage 3a-read, paused false. It retained active native 3a-adjudicate:3a-batch-7 (started 2026-10-12T15:31:02.743Z) and 3a-adjudicate:3a-batch-30 (started 2026-10-12T15:45:14.221Z). Batch-7 report/decisions already exist and were being produced; state endedAt was still null. Root must verify actual writer drain and serialize ownership before phase 2. The map does not authorize concurrent source writes.

Evidence read: root/physics CLAUDE.md, READMEs, physics SCHEMA.md and WORKFLOW.md, PHYSICS-CONTENT-MODEL mathematical-rigor section; current three oscillator carriers; local uniqueness supplier and exact derivative/interval/first-order-system definitions; batch-7 and batch-12 notes, rich manifests/contracts at relevant statements; alpha-batch-12-3a report/decisions; native alpha-batch-7-3a report/decisions and relevant defect-ledger rows. Current git history has ae7556de5a as the pre-Step-3 checkpoint for the model/classification. Source retrieval is not claimed in this phase.

Next: root drains/adopts conflicting writers and authorizes source scope; reviewer repairs suppliers first, then all mapped consumers with explicit dispositions; root owns ledger/decision closure, metadata synchronization, rehash and recertification. Maximum two escalation review/repair cycles applies.

## Phase 2 authorized repair progress

Root authorized supplier/consumer writes after exact writer drain; native batches7/12/18/20/30/32 had ended before source edits. Ten source carriers were repaired, preserving rich global claims. The general model definition was unchanged. Before copies and changed-item list are under `research/physics-cm-qm-gr-79-2026-10-11-owner-oscillator-domain/`.

The complete old/current logical-dependency plus body-reference map has39 downstream items: the earlier37-row map omitted two nonlogical context descendants, the second-variation signs proposition and its saddle example. Both have been read and are unchanged.29 consumer dispositions are complete;10 batch25 items remain deferred while their native writer is active. These are recorded explicitly in `consumer-dispositions.json`; no final acceptance has yet been claimed.

Alpha7 branch/drift consumer hold is currently sound: drained native batch30 has explicitly repaired ambient open C2 extensions, a fixed canonical chart, branch equations and dimensions. Four direct/indirect consumers were checked in `branch-drift-closure.json`; no additional source repair was necessary. Historical Alpha7 routing remains unchanged.

Scoped proof-layout, precheck and rendercheck passed for all10 changed carriers; two were rechecked after final tiny edits. Commands/results are in `scoped-checks.json`. No gates, stamps or rehashing were performed. Prepared ledger/decision/risk updates are separate, unapplied files; root ledger write coordination remains required.

## Completed consumer closure

Root verified native25 writer drained at2026-10-12T16:50:36.593Z with successful exit. All10 deferred current consumers have now been read and checked; no further source repair was necessary. The final scope is39 downstream oscillator items plus the four branch/drift consumers (one overlap). Every item has a concrete disposition in the durable JSON files. Physical postulates4 explicitly declare time windowR; coupled quadratic definition defaults free/no-time-prescription models toR and forced modal theorem separately sets I0=R for sinusoidal global claims. These actual producer premises discharge the revised scalar supplier interface.

The source change set remains10 mathematical carriers; no physical scope, empirical qualification, imported snapshot, model definition or physical carrier was changed by this repair. Four prepared defect rows and six prepared decision patches close the two oscillator interfaces, the forced-response domain and two-mass global-growth ambiguity, plus current branch/drift consumer holds. They remain unapplied pending root ledger ownership/integration.

This is escalation review/repair cycle1; no second cycle was necessary. Root owns quoted-contract/manifest synchronization, rehash/recertification and gate control.

## Substantive metadata integration

Root authorized exact current manifest/contract/risk and six decision integration after writers drained. Fresh reads and pre-write equality guards protected shared JSON. Both changed manifests now quote all10 current Statements/Examples. Changed derivation claims and affected supplier quotations were refreshed in scoped consumer contracts; concrete current owner risk notes were appended while retaining earlier narratives. Four Alpha12 global-domain findings now record confirmed fatal repaired defects, and two Alpha7 branch/drift holds record current repaired consumer closure; immutable observations, dependency paths and split/pre-reader bindings were retained. `metadata-integration.json` records every touched file. Root still owns hashes and stamps.

Selected nonstrict contract validation passed8 source7 contracts. First validation of2 source12 contracts exposed three stale cached Definition quotations from earlier source repairs; those exact contexts were read and refreshed, and the same2 selected contracts then passed with no errors or warnings. These are scoped metadata checks, not a gate attempt.

## Durable ledger completion

Root authorized the four canonical rows to append through native helper. `defect-ledger.mjs append --file .../ledger-append-input.json` succeeded with4rows and rendered the generated view under its builtin append lock. Fresh raw source guards passed for all10 changed carriers immediately before append. Readback confirms each exact row occurs once and every preexisting ledger byte remains the current prefix; `ledger-append-result.json` records this. No manual ledger fallback, historical rewrite or gate was used. The six integrated decisions now reference durable defect/evidence records.

All assigned substantive work is complete in one repair/review cycle. Root may perform its remaining scope hash/stamp recertification and engine-owned transition work.
