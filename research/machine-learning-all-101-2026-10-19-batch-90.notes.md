# Batch 90 — constrained MDPs and policy safety

Run: `machine-learning-all-101-2026-10-19`  
Pair: `constrained-mdps-and-policy-safety` / `constrained-mdps-and-policy-safety-examples`  
Owner scope: this pair and its batch evidence only.

## Controlling inputs and reconciliation

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta scaffold brief, both beta-90 tasks, the owner authoring direction, the complete ML-82 design, the current plan-spec pair, and the batch dependency-levels artifact.
- The structured `plan-spec.json` A-page `requires` list matches the assigned task: conditional distributions and regular conditional probability; conditional expectation; minimax lower bounds and information-theoretic methods; policy gradients, REINFORCE, and actor–critic. This list remains in the assigned manifest.
- The prose design's `Requires` clause instead names ML-72, ML-76, the measure-kernel definition, kernel-integration measurability, conditional expectation, and a local finite-action Pinsker/Jensen result. This differs from the structured page `requires` list. The authored item graph directly uses the finite-MDP interface from batch 80 and the differentiable-policy definition from batch 84; finite sums make the kernel-integration theorem and general conditional-expectation interface unnecessary inside these local proofs. Record this metadata mismatch for owner reconciliation; do not edit shared plans.
- **Mathematical correction required:** the design and plan-spec description define `L_{pi,f}(pi')` as only the `pi'`-expectation of `delta_f` for arbitrary `f`. Achiam's Theorem 1 uses the difference between the `pi'` and `pi` action expectations. The design expression is valid only with the additional condition `E_{a~pi}[delta_f | s]=0` (for example, `f=V^pi`). The authored lemma and theorem use the arbitrary-baseline difference form and the theorem retains arbitrary bounded `f`; the finite-action direct-sum form avoids an undefined importance ratio when `pi'` is not supported by `pi`. The item and its consumers remain owner-escalated until this plan/spec defect is reconciled.
- The task's dispatch scheduling input is `74d4573d68351da6ae4ed6705dbe9a797c784dc438dbdbbf50f6aae6c7409b8d`; the current dependency-levels artifact records `input_sha256=53bf69605352dd598c8eac43b9c78ca4ac25aedae1face6e1d00fcc4fb203bc4`. Its recorded batch 90 row is level 3 with `requires:[84]`. This hash mismatch is recorded for owner reconciliation.
- The required direct item supplier `def-finite-markov-decision-process` is in batch 80; batch 80 is an ancestor of batch 84 in the current graph. The expected direct item graph therefore includes supplier batches 80 and 84, while the dispatch row only lists 84. The batch level remains 3. The shared dependency artifact is not edited.

## Declared item inventory and levels

The manifest was populated before item carriers were written. It contains eleven A-page items and three examples. Levels are one plus the maximum level of direct in-run item suppliers, and zero when all suppliers are outside the run:

| Item | Level | In-run suppliers |
|---|---:|---|
| `lem-finite-action-average-tv-controlled-by-kl` | 0 | — |
| `def-constrained-markov-decision-process` | 1 | `def-finite-markov-decision-process` (batch 80) |
| `def-normalized-discounted-state-occupancy` | 2 | `def-constrained-markov-decision-process` |
| `def-discounted-cost-constraint` | 2 | `def-constrained-markov-decision-process`, `lem-bounded-discounted-return-converges` (batch 80) |
| `lem-normalized-discounted-state-occupancy-is-probability` | 3 | `def-constrained-markov-decision-process`, `def-discounted-cost-constraint`, `def-normalized-discounted-state-occupancy`; `def-finite-markov-decision-process` and `lem-bounded-discounted-return-converges` (batch 80) |
| `def-discounted-value-and-advantage-functions` | 4 | CMDP and cost definitions; occupancy well-definedness lemma |
| `lem-discounted-occupancy-change-bounded-by-average-tv` | 4 | `def-constrained-markov-decision-process`, `def-normalized-discounted-state-occupancy`, `lem-normalized-discounted-state-occupancy-is-probability` |
| `lem-mdp-performance-difference-identity-with-arbitrary-baseline` | 4 | `def-constrained-markov-decision-process`, `def-discounted-cost-constraint`, `def-normalized-discounted-state-occupancy`, `lem-normalized-discounted-state-occupancy-is-probability` |
| `thm-policy-performance-bound-by-average-divergence` | 5 | the two level-4 lemmas, occupancy definition/probability lemma, CMDP and cost-constraint definitions |
| `alg-constrained-policy-optimization` | 6 | `thm-policy-performance-bound-by-average-divergence`, `def-differentiable-stochastic-policy` (batch 84), local CMDP/constraint/occupancy definitions |
| `rem-cpo-implementation-is-approximate` | 7 | `alg-constrained-policy-optimization`, `thm-policy-performance-bound-by-average-divergence` |
| `ex-expected-discounted-cost-does-not-imply-pathwise-safety` | 3 | local CMDP and cost-constraint definitions |
| `ex-exact-trust-region-and-sampled-line-search-disagree` | 7 | local algorithm, theorem, CMDP and cost-constraint definitions |
| `ex-empirical-cost-satisfaction-can-miss-population-violation` | 3 | CMDP and cost-constraint definitions |

## Supplier inspection

- `items/def-finite-markov-decision-process.md`: inspected the full definition and verification. Used interface: finite nonempty state/action sets, fixed normalized joint next-state/reward masses, derived transition probabilities, and stationary action distributions. Its Step-1 record exists as `ready` (owner reconciliation, dated 2026-10-18); this authoring note does not grant new approval.
- `items/lem-bounded-discounted-return-converges.md`: inspected the full statement/proof. Its geometric majorant proves absolute convergence and the `M/(1-gamma)` bound for every bounded real signal. Its Step-1 record exists as `ready` (owner reconciliation, dated 2026-10-18).
- `items/def-differentiable-stochastic-policy.md`: inspected its full definition. It supplies a totally differentiable stationary policy family with fixed common support and score vectors. Its Step-1 record exists as `ready` (dated 2026-10-18). The episodic `thm-policy-gradient-theorem` was read but is not used for an infinite-horizon gradient claim; the algorithm treats its empirical advantage/gradient estimates as input and asserts no unbiasedness or consistency.
- `items/thm-pinsker.md`, `items/def-kullback-leibler-divergence.md`, and `items/def-total-variation-distance-for-probability-laws.md`: inspected. Pinsker assumes AC, uses natural logarithms, and uses event-supremum TV without a factor `1/2`; the finite-action lemma explicitly proves equality with half the finite `l1` sum and carries AC only into its KL branch.
- `items/def-measure-kernel-and-probability-kernel.md` and `items/thm-measurability-of-integration-against-a-kernel.md`: inspected. The finite local arguments use only finite sums; no general kernel-integration or conditional-expectation theorem is invoked as a proof premise.
- The assigned prerequisite page files were read. The policy-gradient page is draft; the item-level policy parameterization used here has a current ready record. The full-run scaffold is still incomplete (72/101 at the last recomputed status), so no batch-90 readiness or full-frontier acceptance is inferred.

## Source reading

- Achiam et al., *Constrained Policy Optimization*, official PMLR main paper, full PDF: `https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf`. Read §§3, 5.1, 5.3, and 6.1–6.3 (PDF pp. 1–6), including Theorem 1, the trust-region update, sample linearization, conjugate-gradient approximation, line search, cost shaping, and stated approximation limits.
- Achiam et al., official PMLR supplementary PDF: `https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf`. Read Appendix 10.1.1–10.1.2 (PDF pp. 1–4), including the bounded-baseline return identity, the complete Lemma 2/Lemma 3 arguments, and the full Theorem 1 proof. This resolves the design's historical note that the supplement had not been inspected.
- Altman, *Constrained Markov Decision Processes*, complete author-hosted book PDF: `https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf`. Read Chapter 2 §2.2 (printed pp. 23–24; PDF pp. 30–31) and Chapter 3 §3.1 (printed pp. 27–29; PDF pp. 34–36). Altman normalizes discounted cost by `1-gamma`; the local interface follows the unnormalized convention in Achiam and states that choice explicitly.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-90.coverage.json --stamp --timeout-sec 120` succeeded on the three original PDF sources with no retries or drops. After the sources were scoped to the examples page, the final check passed 5/5 coverage entries; these reuse the three inspected PDF URLs and their stamps. Exact timestamps, byte counts, PDF page counts, and hashes are in the coverage/evidence files. No retrieval failure occurred.

## Final checks and handoff

- Completed all 14 assigned carriers, both A/B frontmatter-only pages, the manifest, proof contracts, source coverage/evidence, cross-batch sidecar, dependency-input record, and 14 Step-1 decisions. The A page carries all four structured-plan prerequisites; the B page lists its examples under the examples field and requires the A page. Both page bodies are empty.
- node tools/manifest-deps.mjs on batch 90: 14 items, 0 missing, 0 errors. Carrier dependencies and levels match the manifest. node tools/item-dependency-levels.mjs check for the run: 1,247 items across 202 pages, maximum level 15, pass.
- Scoped checks pass: precheck (14 files, 8 proofs checked, 0 failures); proof-layout (14 items, 25 steps, 0 defects); rendercheck (16 item/page files, 0 errors/warnings); content-policy (14 items, 0 errors/warnings); depcheck (652 dependency-closure items, 0 errors/warnings); fwdcheck (0 open/closed forward references, 0 errors/warnings); extcheck (14 items, 0 unproved/open problems/errors); strict proof-contract (14/14, 0 errors/warnings); coverage-checklist (2 pages, 13 harvested results, 0 errors/warnings); final source-fetch-check --stamp (5/5 fetch-verified and resolved, 0 newly stamped). Exact finite example arithmetic is recorded in the three finite-smoke contract entries.
- Statement audit: 14 complete statements/definitions/examples/remarks contain no hyperlinks; all have an immediate references section. Both page bodies are empty.
- Step-1 decisions: 9 ready and 5 escalated. Escalated items are the arbitrary-baseline identity, its performance theorem, CPO algorithm, approximation remark, and exact-versus-sampled example. The mathematical change and evidence are given above and in their readiness records. No owner flag was used, and no existing record was overwritten.
- The final run-wide proof-contract-coverage check is blocked by a different frontier item, ex-multilabel-false-negative-risk-control, missing from its active manifest scope. It is outside batch 90. The run-wide Step-1 check remains open; batch 90 contributes nine ready items and five escalations, while other run items remain unfinished. No page blockers were reported by the post-record check.
- Recomputed autopilot status at 2026-10-19T00:11:16Z: stage 1 scaffold is 89/101, held for owner repair/recertification, with nothing in flight. Batch 90 was covered. The dispatch scheduling hash still differs from the current dependency-level artifact hash, and the policy-gradients prerequisite page is draft even though its direct differentiable-policy item has a ready record. These remain owner/run-level reconciliation items; no engine state or shared plan was edited.
- Readiness records document authoring completion only; they do not constitute independent review, acceptance, or publication.

## Item checkpoints

### `lem-finite-action-average-tv-controlled-by-kl`

- **Claim/convention:** For finite state/action distributions, event-supremum TV equals half the finite `l1` distance; under AC, average TV under state weights `d` is at most the square root of half the average directional KL. Natural logarithms; infinite average KL makes the bound vacuous. The finite weighted square-root/Jensen step is proved locally and choice-free.
- **Dependencies:** `def-axiom-of-choice`, `def-kullback-leibler-divergence`, `def-total-variation-distance-for-probability-laws`, `thm-pinsker`; no in-run suppliers, so manifest level 0.
- **Evidence:** Full published supplier bodies inspected. CPO source: [official PMLR paper](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf), §5.1, equation (7), PDF p. 3. Stamped coverage/source record: `research/machine-learning-all-101-2026-10-19-batch-90.coverage.json` and `.source-evidence.json`.
- **Decision/checks:** Step-1 record is ready. AC is used only to apply Pinsker; the finite half-l1 and weighted-square-root arguments are choice-free. Strict proof-contract, scoped checks, and final layout pass. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `def-constrained-markov-decision-process`

- **Claim/convention:** Finite nonempty state/action sets, normalized joint next-state/reward masses, initial distribution, `gamma in [0,1)`, a finite family of bounded transition-cost signals and thresholds, and the recursively defined finite-time state masses. Costs may depend on the reward outcome, preserving dependence in the joint transition/reward law.
- **Dependencies:** `def-finite-markov-decision-process` (batch 80); level 1. Well-definedness of the finite-time state masses is discharged by the local occupancy/mass lemma.
- **Sources:** Altman, *Constrained Markov Decision Processes*, Ch. 2 §§2.1–2.2, printed pp. 21–24; Achiam et al., *Constrained Policy Optimization*, §3, PDF pp. 2–3. The tuple definition is local and does not assert an optimization result.
- **Decision/checks:** Step-1 record is ready. The finite joint transition interface, bounded cost signals, and state-mass recurrence are complete; the batch-80 MDP supplier and its ready record were inspected. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `def-normalized-discounted-state-occupancy`

- **Claim/convention:** Column-stochastic transition-matrix convention `K_pi(s',s)`; define `d^pi=(1-gamma) sum gamma^t mu_t^pi`. The normalization is explicit and its probability property is proved by the level-3 local lemma.
- **Dependencies:** `def-constrained-markov-decision-process`, `thm-geometric-series`; level 2; `justified_by` the local probability/well-definedness lemma.
- **Sources:** Achiam et al., supplement, Appendix 10.1.1, equations (17)–(18), PDF p. 1; Altman, Ch. 3 §3.1, printed pp. 27–29. Altman's cost normalization differs; the local `d^pi` is normalized while `J_g` remains unnormalized.
- **Decision/checks:** Step-1 record is ready. Normalization is explicit and the probability claim is discharged by the complete local mass lemma. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `def-discounted-cost-constraint`

- **Claim/convention:** For each bounded transition signal, define the unnormalized expected discounted sum by finite-time transition masses; feasibility is componentwise `J_{c_i}^pi(mu)<=b_i`. It makes no pathwise-safety assertion.
- **Dependencies:** `def-constrained-markov-decision-process`, `lem-bounded-discounted-return-converges` (batch 80); level 2; well-definedness is justified by the local mass/occupancy lemma.
- **Sources:** Altman, Ch. 2 §2.2, printed pp. 23–24 (normalized-cost convention explicitly distinguished); Achiam et al., §3, PDF pp. 2–3 (unnormalized return/cost convention).
- **Decision/checks:** Step-1 record is ready. The unnormalized expected discounted signal and componentwise expected-cost feasibility convention are complete; convergence and finite-mass suppliers were inspected. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `lem-normalized-discounted-state-occupancy-is-probability`

- **Claim/convention:** Proves by induction that each finite-time state mass is a probability, then proves `d^pi` has total mass one and every bounded transition-signal discounted series converges absolutely with bound `B/(1-gamma)`. The proof is finite-sum and choice-free.
- **Dependencies:** CMDP, discounted-cost and occupancy definitions; `def-finite-markov-decision-process`, `lem-bounded-discounted-return-converges` (batch 80), `thm-induction-principle`, and `thm-geometric-series`; level 3.
- **Sources:** Achiam supplement, Appendix 10.1.1, PDF p. 1; Altman, Ch. 3 §3.1, printed pp. 27–29. The complete bounded-series reasoning is local and cites the inspected batch-80 convergence lemma.
- **Decision/checks:** Step-1 record is ready. Induction, mass-one occupancy, and absolute convergence for bounded signals are proved locally and choice-free. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `lem-discounted-occupancy-change-bounded-by-average-tv`

- **Claim/convention:** `||d^{pi'}-d^pi||_1 <= 2 gamma/(1-gamma) E_{d^pi}[TV(pi',pi)]`, with TV defined as half the finite action `l1` distance. Uses a column-stochastic kernel matrix so the induced matrix 1-norm is one.
- **Dependencies:** CMDP, normalized occupancy, and its probability/well-definedness lemma; geometric series and null geometric sequence; level 4.
- **Sources:** Achiam supplement, Appendix 10.1, equation (21), Lemma 3 and its full proof, PDF pp. 1–4; Altman, Ch. 3 §3.1, printed pp. 27–29.
- **Decision/checks:** Step-1 record is ready. The column-stochastic resolvent proof gives the stated constant; all direct suppliers and the final proof layout were checked. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `lem-mdp-performance-difference-identity-with-arbitrary-baseline`

- **Claim/convention:** For every bounded transition signal `g` and bounded `f`, the exact identity uses `L=E_{d^pi}[bar-delta^{pi'}_f-bar-delta^pi_f]`. It does not replace this difference by the `pi'` term alone. The proof is a finite-sum telescoping argument and is choice-free.
- **Dependencies:** CMDP, discounted objective, normalized occupancy, and the local occupancy/well-definedness lemma; `lem-geometric-sequence-null`; level 4.
- **Sources:** Achiam et al., supplement, equation (20), Appendix 10.1.1 and Lemma 2, PDF pp. 1–2. The complete local telescoping and subtraction argument is written explicitly.
- **Decision/checks:** Step-1 record is escalated. The exact identity is complete, but it corrects the plan/spec arbitrary-baseline formula by subtracting the old-policy residual; owner reconciliation is required. Scoped results are listed in the handoff summary.
- **Next:** Owner reconciles the arbitrary-baseline plan/spec statement before this item can be reconsidered for readiness.

### `def-discounted-value-and-advantage-functions`

- **Claim/convention:** For every bounded transition signal, `V_g^pi(s)=J_g^pi(delta_s)`, `Q_g^pi(s,a)=E[g+gamma V_g^pi(S')]`, and `A_g^pi=Q_g^pi-V_g^pi`. Boundedness and the local well-definedness lemma make each quantity finite.
- **Dependencies:** CMDP, discounted-sum, and occupancy/well-definedness interfaces; level 4.
- **Sources:** Achiam et al., main paper §3 and §5.3, PDF pp. 2–4, for reward/cost value and advantage notation.
- **Decision/checks:** Step-1 record is ready. Bounded values, action values, and advantages are defined with finiteness justified by the local mass/convergence lemma. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `thm-policy-performance-bound-by-average-divergence`

- **Claim/convention:** For any bounded signal `g` and bounded baseline `f`, use the corrected surrogate `L=E_{d^pi}[bar-delta_f^{pi'}-bar-delta_f^pi]`. The TV bound is choice-free. The KL substitution is a separate AC branch and uses natural logarithms, event-supremum TV, and finite-action half-`l1` TV.
- **Dependencies:** Local performance-difference identity, occupancy-shift estimate, finite-action Pinsker/Jensen lemma, CMDP/cost/occupancy definitions, and `def-axiom-of-choice`; level 5.
- **Sources:** Achiam et al., main paper §5.1 (PDF pp. 2–3) and complete supplement Appendix 10.1.2 (PDF pp. 2–4). The supplement's exact source formula confirms the missing old-policy term recorded above.
- **Decision/checks:** Step-1 record is escalated. The TV/KL theorem is complete with separate choice-free and AC branches, but it uses the corrected identity and therefore changes the planned arbitrary-baseline interface. Scoped results are listed in the handoff summary.
- **Next:** Owner reconciles the arbitrary-baseline plan/spec statement before this item can be reconsidered for readiness.

### `alg-constrained-policy-optimization`

- **Claim/convention:** The exact finite-data update specifies common-support differentiable policies, supplied advantage/baseline estimates, empirical KL, an exact local quadratic program, one-cost recovery branch, multi-cost no-step branch, sample-estimate line search, and optional bounded nonnegative cost shaping. Practical conjugate-gradient and truncated solves are described only as implementation approximations in the remark. AC is declared for the theoretical KL interpretation. No estimator-accuracy or true-cost guarantee is part of the procedure.
- **Dependencies:** CMDP/cost/value/occupancy definitions, differentiable policy and Hessian definitions, KL, AC, and the exact performance theorem; level 6.
- **Sources:** Achiam et al., §5.3 and §§6.1–6.3, PDF pp. 4–6. The algorithm's directional KL is candidate-policy versus current-policy, matching the theorem and the paper's trust-region expression. The episodic policy-gradient theorem from batch 84 is not used as an infinite-horizon estimator guarantee.
- **Decision/checks:** Step-1 record is escalated. The exact finite-data QP and line search are specified, but the algorithm consumes the corrected theorem while the plan/spec conflict remains unresolved. The policy-gradient page is draft; its direct differentiable-policy item is ready. Scoped results are listed in the handoff summary.
- **Next:** Owner reconciles the arbitrary-baseline plan/spec statement before this item can be reconsidered for readiness.

### `rem-cpo-implementation-is-approximate`

- **Claim/convention:** Expected discounted-cost control is not pathwise safety or safe exploration. The exact theorem and sample CPO procedure are distinguished; no automatic true-cost or convergence guarantee is asserted for approximate samples/solves.
- **Dependencies:** Algorithm and performance theorem; AC retained for the KL branch; level 7.
- **Sources:** Achiam et al., §§6.1–6.3 and §9, PDF pp. 4–7.
- **Decision/checks:** Step-1 record is escalated. The remark is complete but depends on the theorem and algorithm whose owner reconciliation is still open. Scoped results are listed in the handoff summary.
- **Next:** Owner reconciles the arbitrary-baseline plan/spec statement before this item can be reconsidered for readiness.

### `ex-expected-discounted-cost-does-not-imply-pathwise-safety`

- **Claim/convention:** With one state, 10% per-step risky action, `gamma=0.1`, and cost limit `1/8`, the population discounted cost is `1/9`; the chance of any violation in the first seven independent decisions is `5,217,031/10,000,000`.
- **Dependencies:** CMDP/cost definitions and geometric series; level 3.
- **Evidence:** Exact finite probabilities and geometric sum in the local verification. No external source is used as proof.
- **Decision/checks:** Step-1 record is ready. Exact geometric expectation and seven-step violation probability are verified; the rational arithmetic is included in the finite-smoke contract. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

### `ex-exact-trust-region-and-sampled-line-search-disagree`

- **Claim/convention:** In a one-state `gamma=0` model, a candidate has true cost `1/5` above limit `1/20`, yet its exact average KL is below radius 4; the exact ideal surrogate rejects it, while one safe old-policy sample can pass the empirical line-search cost check.
- **Dependencies:** CPO algorithm, CMDP/cost/value definitions, KL/logarithm, theorem, and AC; level 7.
- **Evidence:** Exact finite probabilities, values, advantages, and KL expression; CPO source locators are in the stamped coverage/evidence.
- **Decision/checks:** Step-1 record is escalated. Exact costs, directional KL, and the safe-sample event are verified, but the example depends on the corrected theorem and algorithm pending owner reconciliation. Scoped results are listed in the handoff summary.
- **Next:** Owner reconciles the arbitrary-baseline plan/spec statement before this item can be reconsidered for readiness.

### `ex-empirical-cost-satisfaction-can-miss-population-violation`

- **Claim/convention:** A one-step policy with true cost `1/10` violates a `1/20` limit, but ten independent rollouts all show zero cost with probability `3,486,784,401/10,000,000,000`.
- **Dependencies:** CMDP and cost definitions; level 3. This finite statistical witness does not depend on AC or an estimator guarantee.
- **Evidence:** Exact binomial calculation in the local verification; no source is used as proof.
- **Decision/checks:** Step-1 record is ready. The one-step population violation and exact ten-rollout safe-event probability are verified and recorded as a finite-smoke check. Scoped results are listed in the handoff summary.
- **Next:** No additional batch-90 authoring remains for this item; its ready record is not independent review or acceptance.

