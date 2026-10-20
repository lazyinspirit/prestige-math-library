# Step 3a reader report — batch 84

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-84`)  
Review status: complete for assigned pages and items. At review start, the live run status showed Step 3a reading in progress; this review did not attempt a gate or certification.

## Opened inventory

Assigned pages:

- `library/machine-learning/policy-gradients-reinforce-and-actor-critic.md` (A)
- `library/machine-learning/policy-gradients-reinforce-and-actor-critic-examples.md` (B)

Assigned items, read in dependency order:

- A, level 1: `def-differentiable-stochastic-policy`
- A, level 3: `lem-policy-score-has-zero-conditional-mean`
- A, level 4: `thm-policy-gradient-theorem`, `alg-one-step-actor-critic`
- A, level 5: `alg-reinforce`, `lem-action-independent-baseline-does-not-bias-policy-gradient`
- A, level 6: `alg-reinforce-with-baseline`
- B, level 2: `cex-policy-gradient-without-start-time-discount`
- B, level 5: `ex-actor-critic-bootstrap-can-bias-policy-update`
- B, level 6: `ex-reinforce-one-step-bernoulli-mdp`
- B, level 7: `ex-action-independent-baseline-eliminates-variance`

Dependencies opened for the claims and arguments:

- Policy and calculus: `def-finite-markov-decision-process`, `def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`, `thm-chain-rule-for-total-derivatives`, `thm-logarithm-derivative-and-integral`, `thm-algebra-of-total-derivatives`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`.
- Trajectory laws and conditional expectations: `lem-finite-mdp-policy-action-state-reward-path-law`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `thm-finite-mdp-policy-induces-reward-state-chain`, `def-axiom-of-choice`, `def-conditional-expectation-given-a-sigma-algebra`, `def-measure-kernel-and-probability-kernel`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-time-homogeneous-markov-chain-with-transition-kernel`.
- Finite sets and sums: `def-countable`, `def-sum-over-a-finite-index-set`, `thm-subset-of-a-finite-set`, `thm-sum-rule`, `thm-product-rule`, `thm-well-ordering-principle`, `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`, `lem-finite-sum-laws`.
- Returns, expectations, and convergence: `def-discounted-return-and-value-functions`, `def-episodic-returns-td-errors-and-policy-support`, `def-natural-number-coding-of-finite-sequences`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-taking-out-what-is-known`, `thm-dominated-convergence`, `thm-geometric-series`.

## Review and edit

The assigned A page lists its seven assigned items; the B page lists its four examples. Both pages have empty Markdown bodies, preserve their inventories and draft status, and carry `page_layout: compact-v1`. Neither page has a summary to repair.

The policy-score lemma's conditional action law follows from the finite-prefix path probabilities. Its finite-support score mean vanishes by differentiating the normalized action probabilities; the terminal and null history atoms are handled in the proof. The discounted policy-gradient theorem's stated pathwise dominated-remainder and score-return integrability assumptions suffice for the trajectory-series differentiation and interchange. Its formula correctly retains the start-time factor `gamma^t`. The baseline lemma's geometric bound gives integrability of the subtracted score sum. The algorithms specify their inputs, admissibility conditions, outputs, and execution steps without making convergence claims. The four worked examples and the counterexample calculations are correct under their stated data.

The in-scope definition title overstated its contents: the definition requires a stationary differentiable policy family with fixed positive support, but contains no terminal set, episode, or termination condition. Changed the title of `def-differentiable-stochastic-policy` from “Differentiable episodic stochastic policies and score vectors” to “Differentiable stationary stochastic policies and score vectors.” This changes no definition, dependency edge, or consumer interface.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-differentiable-stochastic-policy.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-differentiable-stochastic-policy.md` — 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-differentiable-stochastic-policy.md` — 1 item, 0 steps, 0 defects.

There are no TikZ or tikzcd diagrams in the assigned items. The finite-sum and finite-product diagrams encountered in their supplier items match the associated disjoint-union and Cartesian-product statements; no diagram repair was needed.

## Source check

Read the cited Stanford-hosted second-edition draft at the exact URL used by the items (`https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf`): §13.1, printed pp. 266–267, states the differentiability condition for policy probabilities; §13.2, printed p. 269, gives the episodic policy-gradient argument; §13.3, printed pp. 270–271, gives the `gamma^t` REINFORCE estimator and episode-level pseudocode; §13.4, printed p. 272, gives the state-baseline identity and update; §13.5, printed pp. 273–274, gives one-step actor–critic; and §13.6, printed p. 275, states the separate ergodicity premise for the continuing average-reward case. The browser fetch timed out, but the exact URL downloaded successfully and these pages were read locally.

Read Williams, “Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning,” at the cited PDF URL (`https://gwern.net/doc/reinforcement-learning/model-free/1992-williams.pdf`): §2, printed pp. 230–233, covers differentiable parameterized output distributions; Appendix A.1, PDF pp. 249–250, derives normalization cancellation and the action-independent baseline term; §5 and Appendix A.2, printed pp. 235–238 and PDF pp. 252–253, cover episodic REINFORCE and time unfolding. These sources support the cited background; the batch's stronger finite-MDP claims are proved locally.

## Uneditable dependency findings

The following published dependencies have hyperlinks inside a `Definition` or `Statement` section. The complete formulation must be uninterrupted, with each link moved to the immediately following `Definition references` or `Statement references` section. These are formatting defects; their mathematical interfaces were sufficient for the assigned arguments. Exact findings are also in `research/machine-learning-all-101-2026-10-19-reader-findings-84.json`.

| Published dependency | Assigned consumer | Exact location and evidence |
|---|---|---|
| `def-total-derivative-in-euclidean-space` | `def-differentiable-stochastic-policy` | `Definition`, opening paragraph: inline `[[def-euclidean-linear-map]]` link after “linear map”. |
| `def-jacobian-matrix-and-gradient` | `def-differentiable-stochastic-policy` | `Definition`, first paragraph: inline `[[lem-standard-basis-of-f-n]]` and `[[def-directional-and-partial-derivatives]]` links. |
| `def-axiom-of-choice` | `lem-policy-score-has-zero-conditional-mean` | `Definition`, opening formulation: inline `[[def-choice-function]]` link. |
| `def-conditional-expectation-given-a-sigma-algebra` | `lem-policy-score-has-zero-conditional-mean` | `Definition`, explanatory paragraph following the complete definition: inline links to expectation and `L^1` representatives remain in the same section. |
| `def-sum-over-a-finite-index-set` | `lem-policy-score-has-zero-conditional-mean` | `Definition`, opening and subsequent enumeration/reindexing clauses: inline links to cardinality, equinumerosity, finite sums, permutation invariance, and natural finite-sum laws; no following `Definition references` section is present. |
| `def-countable` | `thm-policy-gradient-theorem` | `Definition`, opening paragraphs: inline links to natural numbers, natural order, order-membership, and equinumerosity. |
| `def-natural-number-coding-of-finite-sequences` | `thm-policy-gradient-theorem` | `Definition`, closing paragraph: inline `[[lem-finite-tuples-admit-effective-prefix-free-encodings]]` link. |
| `def-expectation-of-a-nonnegative-or-integrable-random-variable` | `thm-policy-gradient-theorem` | `Definition`, second bullet: inline `[[def-integrable-real-and-complex-functions-and-their-integrals]]` link. |
| `def-measure-kernel-and-probability-kernel` | `alg-one-step-actor-critic` | `Definition`, opening paragraph: inline links to `def-measure` and `def-measurable-function-between-measurable-spaces`. |
| `def-product-sigma-algebra-and-finite-product-sigma-algebras` | `lem-policy-score-has-zero-conditional-mean` | `Definition`, opening paragraph: inline `[[def-measurable-rectangle]]` link. |
| `thm-subset-of-a-finite-set` | `lem-policy-score-has-zero-conditional-mean` | `Statement`, opening paragraph and clauses 1–2: inline links to `def-countable` and `def-finite-cardinality`. |
| `thm-sum-rule` | `lem-policy-score-has-zero-conditional-mean` | `Statement`, clauses 1–3: inline links to `def-finite-cardinality` and `def-sum-over-a-finite-index-set`. |
| `thm-product-rule` | `lem-policy-score-has-zero-conditional-mean` | `Statement`, clauses 1–2: inline links to `def-finite-cardinality` and `def-nat-finite-sum-and-product`. |
| `lem-a-double-sum-over-finite-index-sets-may-be-interchanged` | `lem-policy-score-has-zero-conditional-mean` | `Statement`, paragraph after the displayed identity: inline links to the finite-index-set sum and finite-sum definitions. |
| `lem-finite-sum-laws` | `lem-policy-score-has-zero-conditional-mean` | `Statement`, opening paragraph: inline `[[def-finite-sum]]` link. |

## Page verdicts and blockers

- A page `policy-gradients-reinforce-and-actor-critic`: page shell and item inventory are correct; its seven assigned items have been reviewed. One title was repaired. The published dependency-formatting findings above remain outside this batch's write scope.
- B page `policy-gradients-reinforce-and-actor-critic-examples`: page shell and example inventory are correct; all four assigned examples/counterexample have been reviewed and their calculations are sound. Its linked published dependencies include the findings above.
- Blocker for batch 84: none. The live run status still reports the existing unrelated `3a-collect` blocker `collect-57 failed 3x` for batch 57; it is outside this assignment. No item was withdrawn, no page prose was added, and no judge or acceptance stamp was written.

## Coverage note

All assigned pages and all eleven assigned items were opened and reviewed, along with the direct suppliers and exact dependency interfaces listed above. I did not independently re-prove every unrelated transitive theorem in the published measure/probability supplier closure. The local dependency applications and the assigned arguments were checked. The exact policy-gradient sources were read at the locators recorded above; no unresolved mathematical uncertainty remains for batch 84.
