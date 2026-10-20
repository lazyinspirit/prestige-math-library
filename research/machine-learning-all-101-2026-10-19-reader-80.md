# Step 3a reader report — batch 80

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Coverage: batch `80`

## Opened inventory

Read the assigned items in dependency order and opened both assigned pages:

- A-page `finite-mdps-and-bellman-operators`: `def-finite-markov-decision-process`; `lem-bounded-discounted-return-converges`; `lem-finite-state-sup-norm-space-is-complete`; `thm-finite-mdp-policy-induces-reward-state-chain`; `def-policy-bellman-operator`; `def-bellman-optimality-operator`; `def-discounted-return-and-value-functions`; `thm-bellman-contraction-and-unique-fixed-point`; `alg-value-iteration`; `lem-policy-value-satisfies-bellman-equation`; `thm-value-iteration-convergence-error-bound`; `alg-policy-iteration`; `thm-policy-improvement`.
- B-page `finite-mdps-and-bellman-operators-examples`: `ex-undiscounted-single-state-mdp-diverges`; `ex-finite-mdp-common-reward-shift`; `ex-value-iteration-attains-error-rate`; `ex-policy-iteration-tie-retention`.

Both pages are draft pages with `page_layout: compact-v1`, YAML frontmatter only, and empty Markdown bodies. No page prose was edited.

Opened supplier statements and the proof sections needed to check the assigned arguments, including the finite-MDP/model and probability-kernel definitions; finite-sum, product, and measure-kernel results; the induced reward-state chain and Ionescu–Tulcea construction; measurable random-variable and expectation results; dominated convergence; discounted-series bounds; metric completeness and Banach's fixed-point theorem; limit uniqueness and order preservation; and induction/power laws. The specific supplier IDs consulted include `def-measure-kernel-and-probability-kernel`, `def-countable`, `def-cartesian-product`, `def-sum-over-a-finite-index-set`, `def-max-min`, `lem-finite-set-has-max`, `lem-of-abs-value`, `lem-triangle-inequality-finite`, `lem-finite-sum-laws`, `thm-sum-rule`, `thm-the-characterising-property-of-ordered-pairs`, `def-axiom-of-choice`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`, `thm-subset-of-a-finite-set`, `thm-product-rule`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-well-ordering-principle`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-random-element-and-real-random-variable`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-dominated-convergence`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-probability-measure`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-algebra-of-limits`, `lem-limit-of-tail`, `lem-limit-unique`, `def-metric-space`, `def-cauchy-in-metric`, `def-metric-convergence`, `def-real-limit`, `def-complete-metric-space`, `lem-metrics-on-rn`, `thm-cauchy-criterion-via-lub`, `thm-banach-fixed-point`, `lem-limit-preserves-order`, `thm-induction-principle`, `def-integer-power`, `lem-power-laws`, `thm-geometric-series`, `thm-direct-comparison-test`, `def-series`, `lem-series-tail-invariance`, `lem-series-linearity`, `thm-nonnegative-series-bounded-partial-sums`, `lem-geometric-sequence-null`, `def-lipschitz-holder-contraction`, and `lem-real-line-is-a-metric-space`.

Also reviewed the downstream consumer closure needed for the changed public claims. The discounted-return lemma has 36 descendants across batches 80, 81, 84, and 90; the current batch's affected consumer contracts were refreshed. Out-of-batch items were not edited.

## Edits and evidence

- `lem-bounded-discounted-return-converges`: made the sum named (G) explicit in the statement and specified absolute convergence. The proof establishes convergence from the geometric majorant and then uses the sum notation. Refreshed its proof contract; no stale `verification.judge` record existed.
- `thm-bellman-contraction-and-unique-fixed-point`: defined the sup norm used in the statement, including the empty-state convention. Corrected the completeness fact to match its cited supplier, then established nonemptiness using the zero function before applying Banach's theorem.
- `lem-policy-value-satisfies-bellman-equation`: defined the truncated return/value for every state used in the transition sum, made finite-return integrability explicit from the uniform bound, and added `lem-limit-unique` as a prerequisite for the limit identification.
- `alg-policy-iteration`: made the deterministic policy's stationary point-mass embedding explicit before evaluating its Bellman operator. Its existing algorithm has no proof-step contract or judge record. The existing `verification.boundary` entry contains pre-edit `template_review` hashes; these were retained because this reader cannot certify that earlier review. A fresh owner boundary review is needed before that metadata can be current.
- `ex-undiscounted-single-state-mdp-diverges`: specified the usual absolute-value metric and the contraction factor range, so the non-contraction claim has a defined metric and quantifiers.
- `ex-finite-mdp-common-reward-shift`: specified deterministic policies as stationary point masses and explicitly verified that both displayed values are fixed points of the optimality operator before invoking uniqueness.
- `thm-policy-improvement`: defined the optimal value as the unique optimality-operator fixed point, made the deterministic-policy embedding explicit, proved nonemptiness of the function space, and connected metric convergence to coordinatewise convergence before using the Bellman equation. Corrected the completeness fact and attached the missing supplier references to the affected proof steps.
- Refreshed the contracts of `thm-value-iteration-convergence-error-bound`, `ex-value-iteration-attains-error-rate`, and `ex-policy-iteration-tie-retention` to bind their current supplier statements. Their item content was not changed.

For each of the seven text-repaired assigned items, `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` completed without changing proof layout, and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` passed. The final batched layout check included all seven text-repaired items and the three items whose contracts were refreshed: `node tools/proof-layout.mjs items/lem-bounded-discounted-return-converges.md items/thm-bellman-contraction-and-unique-fixed-point.md items/lem-policy-value-satisfies-bellman-equation.md items/alg-policy-iteration.md items/ex-undiscounted-single-state-mdp-diverges.md items/ex-finite-mdp-common-reward-shift.md items/thm-policy-improvement.md items/thm-value-iteration-convergence-error-bound.md items/ex-value-iteration-attains-error-rate.md items/ex-policy-iteration-tie-retention.md` reported `10 items, 41 steps, 0 defects`.

No `verification.judge` record was present on the seven text-repaired items. The algorithm boundary-review metadata noted above is the only outstanding review-metadata limitation.

## Diagram review

Checked all four assigned TikZ diagrams. The single-state diagram's choice and deterministic transition agree with its model; the common-reward-shift diagram's action arrows and reward-transition labels agree with the original model; the value-iteration diagram correctly shows the sole action and reward-one self-loop; and the tie-retention diagram correctly shows two reward-zero self-loops. No diagram was missing for the claims reviewed. The finite-splice diagram in `thm-sum-rule` and grid diagram in `thm-product-rule` were also checked where those suppliers were used; both are consistent with their statements.

## Uneditable findings

1. `lem-optimal-action-value-is-attained-by-greedy-policy` (draft, batch 81), Statement and Proof steps 2.2 and 5.1: the item defines π* as a deterministic function but applies `T^{π*}` and `V^{π*}`, while the assigned Bellman-operator and value-function definitions accept stationary probability-family policies. The item does not define the point-mass embedding or a justified extension, so these expressions are ill-formed under its declared prerequisites. Define π̂*(a|s)=1 when a=π*(s) and 0 otherwise, and use that stationary policy consistently (or supply and justify an extension). The assigned consumer `thm-tabular-q-learning-convergence-under-robbins-monro-conditions` in batch 81 directly depends on this lemma. Its current bytes at split have SHA-256 `8c9c18625fb75c8861dbcd2d49cc2cbc79c9622181e3530a9c91194f1aa80eba`.
2. `lem-normalized-discounted-state-occupancy-is-probability` (draft, batch 90), Statement clause bounding (J_g^\pi(\mu)): (B) is free and unquantified although the claim asserts ( |J_g^\pi(\mu)|\le B/(1-\gamma)); the proof's Step 3.1 uses (B) as a finite uniform bound. Quantify (B\ge0) and require ( |g(s,a,\rho,s')|\le B) for every transition, or state the selected finite bound. The assigned consumer `def-constrained-markov-decision-process` in batch 90 directly depends on this lemma. Its current bytes at split have SHA-256 `ca15a33b8d1ff3c1fed6620e7ef46f461aadd719a5998e68a88ac0a5b9db5e7a`.

The two source hashes were rechecked immediately before writing this report and findings file and still match the bytes reviewed. Neither finding is in batch 80, so neither was edited.

## Page verdicts and blockers

- `finite-mdps-and-bellman-operators` (A-page): no page defect found. Frontmatter and inventory are consistent; body correctly remains empty.
- `finite-mdps-and-bellman-operators-examples` (B-page): no page defect found. Frontmatter and inventory are consistent; body correctly remains empty.
- Reader review is complete. The two in-run dependency defects above require their assigned owners. The stale pre-edit `template_review` hashes on `alg-policy-iteration` require a fresh owner boundary review before that review metadata can be treated as current. At the final autopilot status check, the run was still `running`; `3a-collect` had separate three-failure blockers for `collect-57` and `collect-91`, outside batch 80. The `3a-read` stage still listed batch 80 as missing pending its split.

## External sources consulted

- Sutton and Barto, *Reinforcement Learning: An Introduction*, §§3.6–3.8 and 4.2–4.4: [PDF](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).
- Brown CS-96-08, §§2.1–2.3, PDF pp. 3–7: [report](https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf).
- Mozgovoy, Example 1.65 p. 12 and Theorem 3.19 pp. 33–35: [notes](https://www.maths.tcd.ie/~mozgovoy/data/notes_MS_2014.pdf).
- Altman, constrained MDP source: [PDF](https://www-sop.inria.fr/members/Eitan.Altman/TEMP/h.pdf).
- Achiam et al., CPO: [paper](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).
- Tsitsiklis, Q-learning convergence paper: [PDF](https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf).
- Yang, reinforcement-learning value chapter: [chapter](https://hankyang.seas.harvard.edu/OptimalControlReinforcementLearning/value-rl.html).
