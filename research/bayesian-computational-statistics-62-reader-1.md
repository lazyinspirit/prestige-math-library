# Step 3a reader report — batch 1

Run: bayesian-computational-statistics-62  
Role: reader-1  
Coverage: batch 1

## Opened inventory

The assigned pages are:

- A page forward-ito-sde-well-posedness at library/probability/forward-ito-sde-well-posedness.md.
- B examples page forward-ito-sde-well-posedness-examples at library/probability/forward-ito-sde-well-posedness-examples.md.

The seven assigned draft items reviewed were def-ito-sde-and-strong-solution, lem-lipschitz-sde-map-is-well-defined, lem-lipschitz-sde-local-solution-has-finite-path-moment, thm-global-strong-well-posedness-for-lipschitz-ito-sdes, thm-finite-horizon-moments-for-lipschitz-ito-sdes, ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness, and ex-singular-initial-law-at-sde-endpoint.

I opened all 29 unique published suppliers listed directly in the batch items:

- SDE and stochastic-integral interfaces: def-continuous-brownian-ito-process, def-d-dimensional-brownian-motion, def-ito-integral-for-square-integrable-predictable-processes, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-adapted-continuous-processes-are-progressively-measurable, def-progressively-measurable-and-predictable-process, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-maximal-bound-for-the-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-multidimensional-ito-formula-for-brownian-driven-processes, thm-stopping-an-ito-integral, and def-continuous-time-stopping-time.
- Integration, moment, and real-analysis results: lem-rat-embeds-dense, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fatou-lemma, cor-cauchy-schwarz-for-random-variables, thm-monotone-convergence-for-the-integral, and thm-reals-cauchy-complete.
- Law and Lebesgue-measure interfaces: def-law-or-distribution-of-a-random-element, def-lebesgue-outer-measure, def-half-open-box, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, def-nonnegative-lebesgue-integral, def-integral-over-a-measurable-set, def-integral-of-a-nonnegative-simple-function, def-countable-choice, and lem-ac-supplies-sequential-choices-for-probability-constructions.

For the singular-law covering argument I also opened def-elementary-set-in-rn, thm-elementary-volume-is-well-defined, thm-of-archimedean, def-borel-sigma-algebra, def-open-and-closed-in-r, def-neighbourhood-r, lem-of-abs-value, and lem-of-triangle-inequality.

I read CLAUDE.md, README.md, briefs/reader.md, the assigned batch manifest, the relevant item/page sections of SCHEMA.md, and the current batch proof-contract file. No rendered batch-1 evidence bundle appeared in the searched run/research inventory, so I reviewed the current carriers directly.

The external SDE citations were opened and checked:

- Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control, §5.1, Theorems 5.1.3 and 5.1.5, printed pp. 119–121. Theorem 5.1.3 treats a finite horizon, a given filtration with an adapted multidimensional Brownian motion, an L² initial value, uniformly Lipschitz coefficients, and bounded b(t,0) and σ(t,0); the local linear-growth bound implies those last bounds. Theorem 5.1.5 supplies uniqueness. [Source PDF](https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf)
- A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics, §7.1, Theorem 7.8, printed pp. 141–143. It states continuous adapted existence and uniqueness up to indistinguishability in its scalar setting. The assigned vector estimates and the all-real-p moment bound are proved locally, not attributed to this theorem. [Source PDF](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf)

## Repairs and evidence

1. In items/def-ito-sde-and-strong-solution.md frontmatter (deps, line 13; the equation convention is introduced in the Definition at line 65), I added lem-adapted-continuous-processes-are-progressively-measurable. The equation integrates b(s,X_s) and σ(s,X_s), so their process measurability is required. The published lemma states that adapted continuous processes are both progressive and predictable; applied coordinatewise to the finite-dimensional candidate, extending it constantly past T, it supplies this prerequisite for the jointly Borel coefficient compositions. The mathematical Definition text was unchanged. This Definition has no proof phase, and no stale verification.judge record was present.

2. In items/ex-singular-initial-law-at-sde-endpoint.md, I made the density definition explicitly require a Lebesgue-measurable g (line 55). Fact F4 (line 70) now cites def-elementary-set-in-rn for admissibility of a half-open box as an elementary cover and thm-elementary-volume-is-well-defined for μ₀(B)=vol(B); these establish the cover cost used in Verification 1.2 (line 84). Facts F7 and F8 (lines 76 and 78) establish that {0} is Borel and that the inequalities λ*({0})≤2/n imply zero, respectively. Verification 1.2 now cites these facts, and the null-set contradiction in Verification 2.1 (line 86) cites the Borel fact. I added the corresponding item dependencies and updated research/bayesian-computational-statistics-62-batch-1.proof-contracts.json with the F4, F7, and F8 source bindings and step inputs. No stale verification.judge record was present.

No other confirmed defect remained in the assigned items or page prose. I made no edits to either page, any published item, another batch, or the planning specification.

## Mathematical review and page verdicts

- **A page forward-ito-sde-well-posedness: sound after the dependency repair.** The SDE hypotheses preserve the finite horizon, dimensions, coefficient domains, global Lipschitz and growth bounds, initial-value assumptions, and usual-filtration conditions. The Picard-map constants follow from the stated Frobenius norm and finite-coordinate Itô maximal bounds. The stopped quadratic Lyapunov argument gives the local-solution path-sup second moment, and the factorial Picard bounds, Gronwall estimates, and indistinguishability argument establish global strong well-posedness. The p-moment theorem correctly states sup_t E|X_t|^p, not E sup_t|X_t|^p, and its caveat is retained. The page summary matches these claims and does not assert density regularity or time reversal.
- **B page forward-ito-sde-well-posedness-examples: sound after the proof clarification.** The OU example verifies the scalar coefficient bounds and the nonzero constant diffusion variance. The deterministic-initial-law example proves the singleton is Borel and Lebesgue-null, verifies the cover cost, and then rules out a Lebesgue density at t=0. It explicitly makes no assertion about positive-time densities. The page summary matches both examples.

## Validation and blocker

- node tools/tsx-run.mjs tools/reflow.mts items/def-ito-sde-and-strong-solution.md: unchanged, exit 0.
- node tools/tsx-run.mjs tools/precheck.mts items/def-ito-sde-and-strong-solution.md: 0 checked, 0 failing.
- node tools/tsx-run.mjs tools/reflow.mts items/ex-singular-initial-law-at-sde-endpoint.md: unchanged after the final edit, exit 0.
- node tools/tsx-run.mjs tools/precheck.mts items/ex-singular-initial-law-at-sde-endpoint.md: 1 checked, 0 failing.
- Final combined node tools/proof-layout.mjs items/def-ito-sde-and-strong-solution.md items/ex-singular-initial-law-at-sde-endpoint.md: 2 items, 3 steps, 0 defects.

There is no mathematical blocker to the reader review. The current batch manifest was not edited under this role's carrier-only repair scope and still has the pre-review dependency lists; the run owner/engine must reconcile it with the two updated item deps fields before later contract/gate processing.

At the final status recomputation (2026-10-15 11:44 UTC), the run remained active in 3a-read with nothing in flight; other batches still have outstanding reader work.

## Coverage limitation

The seven assigned items, both assigned pages, and all 29 direct published suppliers were opened. The recursively declared published dependency closure contains 1,666 item IDs; I did not independently re-audit that entire closure. I checked the exact direct supplier statements and arguments used here and opened eight additional measure/Borel/real-analysis suppliers when the example's cover step needed them. Those additional cover suppliers were opened after the initial read of that example, so strict supplier-before-consumer reading order was not maintained for that newly investigated subclaim; the repair now cites those suppliers explicitly.
