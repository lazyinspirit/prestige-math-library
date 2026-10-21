# Step 3a reader report — batch 10

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `10`

## Opened inventory

Assigned pages:

- `library/inverse-problems/minimax-testing-and-detection-rates.md` (`minimax-testing-and-detection-rates`, draft A page). Its frontmatter has no Markdown body, lists the ten A-page items below, and its five required pages resolve to existing library files.
- `library/inverse-problems/minimax-testing-and-detection-rates-examples.md` (`minimax-testing-and-detection-rates-examples`, draft B page). Its frontmatter has no Markdown body, requires the A page, and lists the five examples below.

Assigned items, all current draft items in this run, reviewed supplier-first:

- Initial suppliers: `lem-ip-weighted-chi-square-triangular-array-limit`, `lem-ip-sparse-gaussian-extremal-profile`, `lem-ip-finite-independent-array-fourth-moment-normal-limit`.
- Model definition and level-four suppliers: `def-ip-minimax-detection-risk-and-separation`, `lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r`, `lem-ip-q2-ellipsoid-extremal-profile-is-minimizer`, `lem-ip-gaussian-product-mixture-testing-bound`, `thm-ip-sparse-detection-regime-split`.
- Higher-level consumers: `thm-ip-ellipsoid-detection-boundary`, `cor-ip-ellipsoid-sharp-gaussian-testing-asymptotics`.
- Examples: `ex-ip-sparse-detection-lambda-zero-boundary`, `ex-ip-mildly-illposed-sobolev-detection-rate`, `ex-ip-mildly-illposed-analytic-detection-rate`, `ex-ip-severely-illposed-sobolev-detection-rate`, `ex-ip-severely-illposed-analytic-detection-rate`.

I checked the 15-entry batch proof-contract inventory against the current statements, proof-step locators, direct citations, and boundary claims. I opened the 37 nonassigned direct dependency targets used by these items: `def-axiom-of-choice`, `def-countable-choice`, `def-finite-hypothesis-testing-beta`, `def-hyperbolic-functions`, `def-ip-gaussian-sequence-inverse-model`, `def-ip-isonormal-white-noise-experiment`, `def-real-exponential-function-and-e`, `def-standard-normal-and-normal-laws`, `def-total-variation-distance-for-probability-laws`, `lem-continuous-functions-riemann-integrable`, `lem-exponential-series-has-infinite-radius`, `lem-finite-measure-uniqueness-on-a-pi-system`, `lem-normal-density-has-total-mass-one`, `lem-standard-normal-fourth-moment`, `lem-taylor-lagrange-remainder-from-mean-value`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-cauchy-schwarz-finite`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-continuity-from-above-for-measures`, `thm-continuity-from-below-for-measures`, `thm-dominated-convergence`, `thm-exponential-beats-every-polynomial`, `thm-factorization-of-expectations-for-independent-variables`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-hyperbolic-identities-and-derivatives`, `thm-independent-random-elements-have-product-joint-law`, `thm-integration-by-parts`, `thm-intermediate-value`, `thm-ip-white-noise-spectral-sequence-representation`, `thm-lindeberg-feller-central-limit-theorem-sufficiency`, `thm-monotone-convergence-for-the-integral`, `thm-portmanteau-theorem`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-slutsky-for-real-random-variables`, and `thm-termwise-differentiation-of-a-real-power-series`. The three `def-ip-*`/`thm-ip-white-noise-*` targets are draft suppliers from this same run and are outside batch 10's edit scope.

The assigned items contain no TikZ diagrams. I also checked the two TikZCD diagrams in the necessary white-noise dependency context: the coefficient-space square for the compact SVD and the finite-coordinate reconstruction square commute as described.

## Mathematical review and evidence

- The q<2 scalar profile lemma's positivity, scalar inequality, monotone inverse, endpoint asymptotics, integrability, Riemann sums, kernel lower bound, and finite-window upper construction are supported by its displayed derivations. The sparse-regime theorem uses that profile only in its stated λ>0 regime; the separate maximum-test and finite-mixture arguments cover λ≤0. The λ=0 example's rate and both risk directions are checked from its own finite-mixture and maximum-test proofs.
- The q=2 profile existence and minimization arguments preserve the two constraint directions and finite support. The Gaussian-mixture likelihood and total-variation inequalities support the q=2 lower bounds; the weighted chi-square limit and the q=2 test variance calculations support the sharp corollary under its stated Axiom of Choice and vanishing-largest-weight hypotheses.
- The four q=2 rate examples' cutoff estimates give the displayed polynomial or exponential rates with the stated α,β assumptions. I checked the power substitutions and endpoint comparisons in each example.
- Assigned Definition/Statement/Example sections are complete without hyperlinks; links and citations follow in their references sections. The pages have only YAML frontmatter and no summary prose.
- Authoritative source check: Ingster, Sapatinas and Suslina, “Minimax signal detection in ill-posed inverse problems,” §4.7, Theorem 4.7, arXiv PDF pp. 18–19 (`https://arxiv.org/pdf/1001.1853`), states the λ split, Gaussian and degenerate error forms, and the two rate normalizations. The article explicitly omits that theorem's proof and points to supplementary material. I used the source to check the formulation and constants; the assigned sparse-profile and regime items supply their own proofs. The same paper's Theorems 4.2–4.5, PDF pp. 12–14, match the four q=2 example rates. Ingster and Suslina, “Minimax nonparametric hypothesis testing for ellipsoids and Besov bodies,” §§6.2–6.5 (`https://www.numdam.org/article/PS_2000__4__53_0.pdf`), provides related profile calculations; no unread result from it is used as a proof premise.

## Edits, remaining defects, and page verdicts

- Edits: none. I found no confirmed defect requiring an in-scope repair. No item proof contracts or verification records were changed, and no item reflow, precheck, or proof-layout command was required because no item changed.
- Uneditable defects: none identified.
- A-page verdict: clean. Its inventory and required-page references resolve; frontmatter only, with no summary body.
- B-page verdict: clean. It requires the A page, lists the five examples, and has no summary body.
- Blocker: none.

## Coverage limit

I verified every assigned item and page, the direct dependency statements used in their arguments, and the relevant in-run white-noise supplier proofs. I did not independently re-audit every transitive proof behind the published analysis and measure-theory suppliers.
