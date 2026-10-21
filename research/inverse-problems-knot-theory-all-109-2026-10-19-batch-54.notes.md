# Batch 54 authoring notes — Bayesian measurement design and information gain

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: beta · batch 54 · A/B pages `bayesian-inverse-experimental-design-and-information-gain` / `bayesian-inverse-experimental-design-and-information-gain-examples`

## Run and scope

The inspected native `.autopilot/<run>/status.md` snapshot placed the run in `1-scaffold`, with batch 54 in flight and the existing Step-1 owner repair/recertification blocker in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`. This work changes only batch 54's assigned draft items, A/B pages, and batch evidence. No shared plan, engine state, verdict, or published carrier is edited.

The dispatch scheduling-input digest is `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`. The dependency-level table gives batch 54 level 5 with prerequisite batches 12, 16, 18, and 23. The manifest inventory, direct dependencies, full item projections, and local item levels were populated before item carriers were authored and synchronized after the final supplier-interface changes.

## Plan comparison and design decisions

The controlling IP-54 section at `research/plan-inverse-problems-track.md` L1439–1460 specifies the five planned A items, the four B leaves, proper-prior/common-sigma-finite-dominator conventions, the extended-valued EIG objective, the joint-relative-entropy proof route with an explicit negative-part bound, and the linear-Gaussian log-determinant formula for singular state covariance. It also requires the wrong-forward-operator caveat and separates exact finite search from Monte Carlo estimation of nonlinear EIG.

The matching `research/plan-spec.json` record agrees on both page IDs, A/B kinds, category, titles, order, companion, and all seven page prerequisites. Its `items: []` fields are the pre-authoring scaffold projection, not a conflicting inventory. The plan's five A items and four B leaves control. One additional A-page theorem, `thm-ip-finite-candidate-information-design-correctness`, is required because SCHEMA.md places algorithmic correctness in a separate proved result; it proves the plan's stated exhaustive finite optimum and conditional floating-point guarantee without changing the algorithm claim.

The Gaussian theorem uses observation densities and the joint-KL result; it does not subtract possibly infinite differential entropies of a singular state law. The numerical algorithm uses a Cholesky-whitened symmetric matrix and a declared Cholesky log-determinant factorization. Its exact-real branch exhausts the finite candidate list with deterministic first-in-order ties. Its floating-point branch returns an optimality claim only when per-candidate total error intervals and a comparison tolerance are certified; otherwise it returns `numerically-unresolved`. No Monte Carlo nonlinear-EIG estimate receives the exact finite optimum guarantee.

## Prerequisite inspection

- IP-12 (`feature-inference-and-map-testing`): its current `thm-ip-isonormal-gaussian-posterior-law` source and complete proof were inspected. It assumes an injective positive trace-class covariance on a separable Hilbert space and concerns an infinite-dimensional isonormal field; it is page-level context only and is not used to justify the new finite-dimensional singular-covariance statement.
- IP-16 (`bayesian-inverse-likelihoods-and-posterior-propriety`): the current `def-ip-misfit-evidence-and-posterior-law` and `thm-ip-function-space-posterior-propriety` bodies and proofs were inspected. The explicit finite-positive-evidence convention is respected. The new indexed experiment is stated directly for proper probability priors and dominated probability kernels.
- IP-18 (`linear-gaussian-inverse-posteriors-and-tikhonov`): the current `thm-ip-finite-linear-gaussian-posterior` body and full proof were inspected. It permits singular prior and posterior covariance, requires only positive-definite observation covariance, and inverts the observed covariance only. This is the finite-Gaussian supplier used by the log-determinant theorem.
- IP-23 (`posterior-computation-error-and-diagnostics`): the current posterior-computation error-budget definition was inspected. It concerns adjacent posterior/solver/discretization/kernel/burn-in/Monte-Carlo errors for bounded functionals; it is not treated as a log-determinant or factorization error theorem.
- The published conditional-distribution page and `thm-bayes-formula-for-dominated-kernels` proof were inspected. The latter gives a choice-free dominated posterior kernel, predictive density, and null exceptional fibers.
- The published Gaussian-process page and `thm-finite-gaussian-process-posterior-and-predictive-laws` proof were inspected; it supports the conditional-Gaussian interface used by IP-18, including singular latent covariance blocks.
- The published minimax/information-theory page and the KL definition/nonnegativity theorem were inspected. The new EIG proof uses directional KL and the finite negative-part convention; it does not import a minimax lower bound.
- Numerical interfaces inspected: `lem-information-matrix-perturbation-bound` (uniform sensitivity-to-information-matrix error), `lem-logdet-information-perturbation-bound` (positive segment eigenvalue floor), `lem-rounded-triangular-substitution-componentwise-backward-error`, `thm-rounded-cholesky-componentwise-and-normwise-backward-error`, and the exact Cholesky solve theorem. Their precise hypotheses are retained in the algorithm's conditional floating-point interface. The referenced `def-nonlinear-experimental-design-and-local-identifiability` was inspected: its finite design, C1 sensitivity maps, positive-definite weights, and simplex weights admit the one-point linear-map specialization with $W=I$ and weight $1$.

## Inventory and item levels

| Item | Level | Direct in-run suppliers |
|---|---:|---|
| `def-ip-design-indexed-inverse-experiment` | 0 | none |
| `def-ip-expected-information-gain` | 1 | `def-ip-design-indexed-inverse-experiment` |
| `thm-ip-eig-is-joint-relative-entropy` | 2 | `def-ip-design-indexed-inverse-experiment`, `def-ip-expected-information-gain` |
| `thm-ip-linear-gaussian-information-gain-logdet` | 5 | `thm-ip-eig-is-joint-relative-entropy` (2), `thm-ip-finite-linear-gaussian-posterior` (4) |
| `alg-ip-finite-candidate-information-design` | 6 | `thm-ip-linear-gaussian-information-gain-logdet` (5), `def-ip-design-indexed-inverse-experiment` (0), `def-ip-expected-information-gain` (1) |
| `thm-ip-finite-candidate-information-design-correctness` | 7 | `alg-ip-finite-candidate-information-design` (6) |
| `cex-ip-eig-cannot-identify-wrong-forward-operator` | 3 | `def-ip-design-indexed-inverse-experiment` (0), `def-ip-expected-information-gain` (1), `thm-ip-eig-is-joint-relative-entropy` (2) |
| `ex-ip-eig-singular-prior-support` | 6 | `thm-ip-linear-gaussian-information-gain-logdet` (5), both IP-54 EIG definitions (0, 1) |
| `ex-ip-eig-repeated-correlated-noise` | 6 | `thm-ip-linear-gaussian-information-gain-logdet` (5) |
| `ex-ip-eig-high-prior-variance-direction` | 6 | `thm-ip-linear-gaussian-information-gain-logdet` (5) |

The final run-scoped `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` reported no batch-54 mismatch. It did report outside-scope scaffold blockers: empty inventories for both pages of `inverse-problem-benchmarking-and-shift`, `open-frontiers-in-learned-inverse-problems`, `hyperbolic-dehn-filling-and-exceptional-slopes`, `fox-milnor-factorization-and-slice-obstructions`, `casson-gordon-invariants-and-sliceness-obstructions`, `freedman-theorem-and-topological-sliceness`, `satellite-operators-and-knot-concordance-filtrations`, `colored-jones-invariant-and-volume-conjecture`, `tau-invariant-and-the-four-ball-genus`, `epsilon-and-upsilon-concordance-invariants`, `character-varieties-and-the-a-polynomial`, `open-questions-in-knot-polynomials-and-surgery`, and `zero-traces-and-conway-nonsliceness`; it also reported `cex-knot-kt-21-boundary-case` at level 15 rather than 16. These are other pairs' files and are not repaired here.

## Source retrieval and proof status

The planned Chaloner–Verdinelli PDF endpoint returned an HTML error page. A Berkeley scan was retrieved but its relevant pages had no searchable text; a complete CMU-hosted PostScript copy was then fetched and inspected. The recovery attempts, a later exact search query, full-text locators, supported items, and dispositions are retained in `batch-54.coverage.json` and `batch-54.source-evidence.json`. The complete MacKay paper and GPML book were retrieved and inspected. Four contextual sources cited by the B example or correctness item reused exact recorded full-text stamps from earlier coverage after their relevant passages were inspected. Final `source-fetch-check --stamp` verified 7/7 sources with 0 new stamps and 0 documented drops.

No mathematical supplier gap is currently unresolved. The floating-point optimum guarantee remains explicitly conditional on verified total criterion-error intervals, including solve, factorization, log-determinant evaluation, and comparison errors. The source lemmas provide matrix-perturbation and Cholesky residual components; they do not license a point estimate without a certificate.

## Final status and validation

All ten assigned items are drafted and placed across the A/B pair (A: 6 items; B: 4 items), with empty page bodies and no generated summaries. The finite-candidate algorithm now states each candidate's own singleton Gaussian experiment, so heterogeneous observation dimensions have a defined EIG. Its matrix-radius certificate specializes the cited perturbation lemma to a one-point design with $W=I$; failed rounded Cholesky does not falsely classify a positive-definite candidate as inadmissible. The correctness proof names the logarithm law used to derive the Cholesky log-determinant identity.

- `node tools/proof-layout.mjs` on the ten changed item files: 10 items, 28 numbered steps, 0 defects.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-54.proof-contracts.json --strict`: 10/10 contracts, 0 errors, 0 warnings. Every fact-linked supplier has an exact excerpt, use steps, and a declared dependency; the step-free definition/algorithm contracts also retain exact interface excerpts.
- `node tools/step1-decisions.mjs record`: all ten assigned items have hash-bound `ready` records with their examined direct dependencies and evidence. `step1Decision` rechecked all 10/10 against current item/dependency hashes. These author readiness records are not independent review or acceptance.
- Focused `node tools/depcheck.mjs --items-file /tmp/ip54-items.json`: 10 selected items and their dependency/page-cycle closure passed with 0 errors and 0 warnings.
- Statement/reference placement audit: all ten assigned items passed; complete statements contain no hyperlinks and their reference sections follow immediately.
- `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-54.coverage.json --stamp`: 7/7 sources fetch-verified, 0 newly stamped, 7/7 resolved, 0 drops.
- `node tools/proof-contract-coverage.mjs --run inverse-problems-knot-theory-all-109-2026-10-19 --contracts research/inverse-problems-knot-theory-all-109-2026-10-19-batch-54.proof-contracts.json`: blocked before batch-scoped evaluation by the pre-existing invalid/duplicate item in `inverse-problems-knot-theory-all-109-2026-10-19-batch-100.pages.json`. The batch-54 manifest and contract scopes were separately compared and contain the same ten IDs.
- The full run-scoped item dependency-level command reported no batch-54 mismatch; the outside-scope empty-page inventories and `cex-knot-kt-21-boundary-case` mismatch are listed above.

`batch-54.cross-batch-dependencies.json` records the seven page prerequisites and every direct external item edge (65 edges), with current supplier excerpts, consumer uses, and hash guards. No supplier body, proof, placement, or source gap remains unresolved within this pair. The global owner repair/recertification blocker and the batch-100 manifest blocker remain outside this dispatch's write scope.

## Item checkpoints

### `def-ip-design-indexed-inverse-experiment`

- Claim and conventions: finite design index set, common parameter/data measurable spaces, proper prior probability, common sigma-finite observation measure, jointly measurable dominated probability-kernel densities, predictive density, and posterior only on `0 < p_d(y) < ∞` fibers. The definition preserves the plan's zero/infinite-evidence exclusion and does not assign a posterior formula there.
- Direct suppliers: `def-measurable-space`, `def-finite-cardinality`, `def-probability-measure`, `def-measure-kernel-and-probability-kernel`, `def-finite-sigma-finite-and-semifinite-measures`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-measurable-function-between-measurable-spaces`, `thm-bayes-formula-for-dominated-kernels`, and `def-bayesian-posterior-as-regular-conditional-law`; all are outside this run. Item dependency level 0.
- Sources: Chaloner–Verdinelli, §1.2 equations (1)–(2), expected utility before data; MacKay, §2, expected information under the prior-predictive model. The full-text retrieval evidence and stamps are in `batch-54.coverage.json` and `batch-54.source-evidence.json`.
- Decision: complete local definition; no axiom or source gap. The posterior formula is supported by the current published dominated-kernel Bayes theorem, whose statement and proof were inspected.
- Validation: source/contract excerpts recorded; strict contracts and the final ten-item proof-layout check passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `def-ip-expected-information-gain`

- Claim and conventions: define `EIG(d)` as the extended nonnegative integral of `D(μ_d^y || μ₀)` against the prior-predictive density, restricted to positive finite evidence fibers; the integrand is set to zero outside that set. The statement explicitly permits `+∞` and does not define EIG by subtracting entropies.
- Direct suppliers: `def-ip-design-indexed-inverse-experiment` (in-run level 0), `def-kullback-leibler-divergence`, `def-axiom-of-choice`, and `thm-kullback-leibler-is-nonnegative` (the latter three are published/outside this run). Item dependency level 1.
- Sources: Chaloner–Verdinelli, §2.2 equation (3); MacKay, §2 and its full expected-information argument. Both support the criterion; local proof obligations remain with the joint-KL theorem.
- Decision: complete local definition. AC is stated only because the referenced library KL convention requires its Radon–Nikodym representative; the density construction itself adds no stronger choice assumption.
- Validation: source/contract excerpts recorded; strict contracts and the final ten-item proof-layout check passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `thm-ip-eig-is-joint-relative-entropy`

- Claim and conventions: under AC for the library KL/RN definition, `EIG(d)=D(P_{θ,Y|d} || μ₀⊗P_{Y|d})` as an extended value. The proof identifies the density ratio on positive finite evidence fibers, excludes zero/infinite evidence fibers by the dominated Bayes formula, and proves the expected fiberwise negative part is at most `1/e` before exchanging integrals. Positive part may be infinite; no entropy subtraction occurs.
- Direct suppliers: the two IP-54 definitions (levels 0 and 1), `thm-bayes-formula-for-dominated-kernels`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`, `def-kullback-leibler-divergence`, `thm-kullback-leibler-is-nonnegative`, and `def-axiom-of-choice`. Item dependency level 2.
- Sources: Chaloner–Verdinelli §2.2 equation (3) and MacKay §2. MacKay's full expected-information derivation supports the criterion; the local proof supplies the measurable-density identity and negative-part/Tonelli justification.
- Decision: complete proof. The KL convention is directional and AC remains explicit. Zero evidence contributes no joint mass; infinite-predictive-density fibers are null because the predictive density integrates to one.
- Validation: exact fact citations and steps recorded; strict contracts and the final ten-item proof-layout check passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `thm-ip-linear-gaussian-information-gain-logdet`

- Claim and conventions: for `θ ~ N(m₀,C)`, `C ⪰ 0`, and independent `η ~ N(0,Γ)`, `Γ ≻ 0`, the EIG equals `½ log det(I + Γ^{-1/2} A C Aᵀ Γ^{-1/2})`. The proof uses only the full-rank conditional/predictive observation densities; it does not use differential entropy of `θ`, and never inverts `C`.
- Direct suppliers: `thm-ip-eig-is-joint-relative-entropy` (in-run level 2), `thm-ip-finite-linear-gaussian-posterior` (IP-18, level 4), and the published finite Gaussian law, density, square-root, and determinant interfaces. Item dependency level 5.
- Sources: Chaloner–Verdinelli §2.2; MacKay §3.1 equations (3.4)–(3.6); Rasmussen–Williams, Chapter 2 §§2.1–2.2. The independent texts supply Gaussian design/conditioning context; the local proof covers general covariance `Γ`, singular `C`, and exact logarithmic density cancellation.
- Decision: complete local proof. The IP-18 supplier states positive-definite observation covariance and explicitly permits singular prior covariance. The more restrictive IP-12 trace-class theorem is not used.
- Validation: exact fact citations and steps recorded; strict contracts and the final ten-item proof-layout check passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `alg-ip-finite-candidate-information-design`

- Claim and conventions: each admissible candidate is a singleton Gaussian experiment on its own $\mathbb R^{m_d}$ observation space; raw matrix dimensions, covariance symmetry/positivity, and finite cost are explicit. The exact branch whitens with Cholesky, scans candidates by strict improvements to preserve the first tie, and returns documented empty-feasible statuses. Exact mode uses exact-real arithmetic and makes no bit-complexity claim.
- Floating-point interface: admissibility must be certified; a failed rounded factorization alone does not prove non-positive-definiteness. Each feasible score needs matrix, factorization, log/sum/cost, and comparison error certificates. The information-matrix lemma is instantiated by one linear sensitivity map with $W=I$ and design weight 1; solve backward error requires conditioning to produce a forward error. Missing or failed certificates return `numerically-unresolved`.
- Direct in-run suppliers: `def-ip-design-indexed-inverse-experiment` (level 0), `def-ip-expected-information-gain` (level 1), and `thm-ip-linear-gaussian-information-gain-logdet` (level 5). External numerical suppliers include `def-nonlinear-experimental-design-and-local-identifiability`, the PSD square-root theorem, Cholesky and triangular-solve interfaces, the information/logdet perturbation lemmas, and the rounded-Cholesky/error results. Item dependency level 6.
- Sources: Rasmussen–Williams, Chapter 2 Algorithm 2.1 and equation (2.30), Cholesky solves/logdet; Chaloner–Verdinelli §2.2, expected information objective; MacKay §6.1, wrong-model warning.
- Decision: complete algorithm definition. The nonlinear Monte Carlo caveat remains separate from the exact linear-Gaussian finite search.
- Validation: exact supplier interfaces recorded in the contract; strict contracts, focused dependency checks, and proof-layout passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `ex-ip-eig-high-prior-variance-direction`

- Claim and conventions: with prior covariance `diag(9,1)`, two zero-cost one-coordinate sensors, and unit Gaussian noise, the first and second EIG values are `½ log 10` and `½ log 2`; the first sensor is the unique maximizer.
- Direct suppliers: `thm-ip-linear-gaussian-information-gain-logdet` (A-page level 5), both IP-54 definitions, AC, and the published strict-log monotonicity result. Item dependency level 6.
- Sources: Chaloner–Verdinelli §2.2 and MacKay §3.1 support the information design and high-variance motivation; all finite matrix calculations are recomputed in the local verification.
- Decision: complete example and exact verification; no unproved entropy or asymptotic claim.
- Validation: exact finite calculation recorded; strict contracts and proof-layout passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `ex-ip-eig-repeated-correlated-noise`

- Claim and conventions: for two repeated unit-sensitivity measurements of a scalar unit-variance Gaussian parameter with covariance `Γρ=[[1,ρ],[ρ,1]]`, `−1<ρ<1`, EIG is `½ log(1+2/(1+ρ))`; at `ρ=1/2` it is strictly below the independent-noise value `½ log 3`.
- Direct suppliers: `thm-ip-linear-gaussian-information-gain-logdet` (A-page level 5), the IP-54 experiment/EIG definitions, AC, and the published strict-log monotonicity result. Item dependency level 6.
- Sources: Chaloner–Verdinelli §2.2 and MacKay §3.1, including the correlated-noise design context; all determinants and comparisons are recalculated exactly here.
- Decision: complete finite example; the endpoints `ρ=±1` are excluded because `Γρ` is then singular and outside the theorem's noise hypothesis.
- Validation: exact determinant calculations and strict endpoint exclusion recorded; strict contracts and proof-layout passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `ex-ip-eig-singular-prior-support`

- Claim and conventions: with `C=diag(1,0)`, the prior is supported on the first coordinate axis. A unit-noise observation of the second coordinate has EIG zero; observation of the first has EIG `½ log 2`. The state covariance is never inverted.
- Direct in-run suppliers: both IP-54 EIG definitions (levels 0 and 1) and `thm-ip-linear-gaussian-information-gain-logdet` (level 5). External supplier: `lem-ip-singular-gaussian-support-and-pseudoinverse` (IP-18), plus AC and natural-log laws. Item dependency level 6.
- Sources: Clason, Chapter 13, and Dashti–Stuart §3.1 provide Gaussian inverse-problem context; the rank-one support and both finite scores are calculated locally.
- Decision: complete example; singular covariance is an included boundary case of the Gaussian theorem, not an exceptional or improper prior.
- Validation: exact rank-one support calculation recorded; strict contracts and proof-layout passed.
- Next: no further batch-54 authoring; owner reconciliation and independent review remain outside this completion record.

### `cex-ip-eig-cannot-identify-wrong-forward-operator`

- Refuted claim: positive EIG for a parameter under a fixed nominal forward operator guarantees identifiability of an unknown truth/operator pair.
- Counterexample: for actual pairs `(θ,a)=(1,1)` and `(2,1/2)` with independent uniform noise on `{0,1}`, both observation laws are uniform on `{1,2}`, so the actual pair EIG is zero. Under the nominal fixed operator `a=1` with `θ` uniform on `{1,2}`, the predictive probabilities are `(1/4,1/2,1/4)` on `{1,2,3}` and the posterior KL values are `(log 2,0,log 2)`, giving EIG `½ log 2>0`.
- Direct suppliers: the indexed experiment/EIG definitions and joint-KL theorem (in-run levels 0–2), published KL definition/nonnegativity, AC, and natural-log laws. Item dependency level 3.
- Sources: MacKay §6.1 and Conclusion, wrong-model warning; Chaloner–Verdinelli §§1.2 and 2.2, design utility under the specified prior-predictive model. All finite probabilities and KL values are recomputed locally.
- Decision: complete counterexample. It distinguishes information about a parameter conditional on a fixed nominal operator from identifiability of the unknown operator-parameter pair.
- Validation: finite actual/nominal laws, posterior KL values, and supplier excerpts recorded; strict contracts and proof-layout passed.

### `thm-ip-finite-candidate-information-design-correctness`

- Claim and conventions: the exact-real scan returns the first maximum among dimension-valid, positive-definite-noise candidates meeting the cost budget. In floating mode, a total certified score radius `ε_d = m_d/2 (δ_d + ρ_d/(1−ρ_d)) + λ_d` gives a true utility gap at most `τ+ε_{d*}+ε_{hat d}`; separated score intervals certify the first exact maximizer. The proof keeps matrix perturbation, Cholesky residual, and rounded log/cost errors distinct.
- Direct suppliers: `alg-ip-finite-candidate-information-design` (in-run level 6), `thm-ip-linear-gaussian-information-gain-logdet` through the algorithm, and published information-matrix, logdet, rounded-Cholesky, triangular-solve, determinant, square-root, natural-log, and one-point design interfaces. Item dependency level 7.
- Sources: Boyd–Vandenberghe §3.1.5 supports logdet perturbation context; Driscoll–Braun §§2.8–2.9 supports Cholesky computation. The actual perturbation bounds are quoted from and proved by the local published library suppliers.
- Decision: complete proof of the exact finite optimum and conditional approximate-optimum guarantee. No numerical certificate is inferred from a floating-point point estimate; missing certificates return unresolved.
- Validation: exact scan/tie proof and conditional interval error bound recorded; strict contracts and proof-layout passed.
