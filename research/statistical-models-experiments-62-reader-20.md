# Step 3a reader report — batch 20

Run: `statistical-models-experiments-62`  
Role: reader  
Assigned pages: `structural-causal-models-dags-and-adjustment` and `structural-causal-models-dags-and-adjustment-examples`

## Opened inventory

Opened both assigned page bodies:

- `library/statistical-models-and-experiments/structural-causal-models-dags-and-adjustment.md`
- `library/statistical-models-and-experiments/structural-causal-models-dags-and-adjustment-examples.md`

Opened all 17 assigned items. The graph and probability suppliers were checked before their consumers:

- Level 0: `def-d-separation-in-a-dag`, `lem-finite-products-of-probability-kernels`, `lem-conditional-independence-under-kernel-extension-and-conditioning`.
- Level 1: `def-recursive-structural-causal-model-and-dag`, `def-ancestral-moral-graph-of-a-dag`, `def-faithfulness-of-a-dag-model`, `lem-active-routes-in-a-finite-dag-have-active-paths`.
- Level 2: `lem-recursive-scm-topological-kernel-factorization`, `lem-d-separation-ancestral-moral-separation`, `ex-confounding-and-collider-conditioning`, `ex-same-observed-law-different-intervention-law`.
- Level 3: `thm-dag-factorization-implies-d-separation-conditional-independence`.
- Level 4: `lem-backdoor-criterion-implies-counterfactual-exchangeability`, `lem-frontdoor-interventional-identities`.
- Level 5: `thm-backdoor-adjustment-sufficiency`, `thm-frontdoor-adjustment-sufficiency`.
- Level 6: `ex-frontdoor-adjustment-binary-model`.

Also opened the in-run batch-19 supplier `items/def-potential-outcomes-and-consistency.md` (SHA-256 `5c0a8fd2b574a347e2b387e33f3287a12cb5e5559099372dd0b947c8b3ed77a5`). Its countable-version definition and consistency clause support the adjustment consumers; I found no defect in that source.

Opened the current declared published dependencies used by the assigned claims: `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable`; `def-axiom-of-choice`, `def-composition-of-probability-kernels`, `def-conditional-expectation-given-a-sigma-algebra`, `def-conditional-independence-given-a-sigma-algebra`, `def-estimand-on-a-statistical-model`, `def-identifiability-of-an-estimand`, `def-independent-random-elements`, `def-measurable-function-between-measurable-spaces`, `def-measurable-space`, `def-measure-kernel-and-probability-kernel`, `def-observational-equivalence`, `def-parametric-statistical-model`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, and `def-regular-conditional-distribution`; `lem-kernel-composition-is-well-defined-and-associative`; `thm-disintegration-of-a-joint-law-on-standard-borel-spaces`, `thm-dynkin-pi-lambda`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-identifiability-iff-constant-on-equivalence-classes`, `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`, `thm-independent-random-elements-have-product-joint-law`, `thm-measurability-of-integration-against-a-kernel`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-monotone-convergence-for-the-integral`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, and `thm-tower-property-of-conditional-expectation`. I also opened `thm-conditional-integration-through-a-regular-conditional-law` to check the cited conditional-expectation corollary.

## Review and edits

The current definitions of paths and d-separation require the endpoint and conditioning sets to be pairwise disjoint. The backdoor exchangeability lemma only required `T` and `W` to be disjoint, so its `C` could overlap either endpoint set. The backdoor adjustment theorem likewise allowed its adjustment vector to contain `Y` when `Y` was a nondescendant. I repaired these hypotheses:

- In `items/lem-backdoor-criterion-implies-counterfactual-exchangeability.md`, `## Statement` now requires `T`, `W`, and `C` to be pairwise disjoint.
- In `items/thm-backdoor-adjustment-sufficiency.md`, `## Statement` now requires distinct vertices `A` and `Y`, and requires the vertex set of `L` to be disjoint from `{A,Y}`.

The front-door graph conditions use d-separation too. Both the helper and theorem had named `A`, `M`, and `Y` without requiring distinct vertices, so I added pairwise distinctness:

- In `items/lem-frontdoor-interventional-identities.md`, `## Statement` now requires pairwise distinct observed vertices `A`, `M`, and `Y`.
- In `items/thm-frontdoor-adjustment-sufficiency.md`, `## Statement` now requires the same pairwise distinctness.

The current front-door theorem already uses `G_{\underline M}`, consistent with the helper and the binary example. I found no graph-operation defect there. The supplied nested-support condition, atom restriction, integrability hypothesis, and observed-law argument in the adjustment consumers were checked and retained.

The current route-shortening proof handles the newly formed collider case; the ancestral-moral equivalence uses that lemma to complete its reverse implication. The global-Markov theorem's sink induction retains conditioned-sink kernels through the supplied kernel-extension lemma. The current backdoor response-copy proof checks moral families and shared exogenous roots, and the front-door proof checks the exogenous-coordinate separations and response composition. I found no remaining proof gap in these current arguments. The finite examples' probabilities and conditional means agree with their specified SCMs and claimed functionals.

The proof contracts were regenerated for the four edited items and the affected front-door example consumer; their endpoint boundary evidence was updated for the repaired hypotheses. No stale `verification.judge` record was present on the four edited draft items.

## Defects not editable

None found. In particular, I found no defect in the batch-19 in-run dependency and no confirmed defect in a published dependency used by the assigned consumers.

## Page verdicts

- `structural-causal-models-dags-and-adjustment`: the page summary accurately limits factorization and adjustment claims, distinguishes faithfulness from the global Markov implication, and records the atom and almost-everywhere qualifications. The two backdoor item hypotheses were repaired as described above.
- `structural-causal-models-dags-and-adjustment-examples`: the page summary matches the three finite examples, and its stated observational-versus-interventional caveat is accurate. The example computations and front-door support checks are sound under the corrected theorem hypotheses.

## Checks and blocker

For each of the four edited items, `reflow` completed and `precheck` passed. Strict proof-contract validation passed for the four edited items and the affected front-door example consumer: 5/5 items, zero errors or warnings. The required final batch command, `node tools/proof-layout.mjs` on all four changed item paths, reported 4 items, 20 steps, 0 defects. No blocker remains within this batch.

Coverage limitation: I reviewed the declared direct dependency items needed for the assigned claims, including their relevant statements and proof arguments, but did not re-audit the entire transitive proof closure of every published foundation item.
