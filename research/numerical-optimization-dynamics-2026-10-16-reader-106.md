# Step 3a reader report — batch 106

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Output findings: `research/numerical-optimization-dynamics-2026-10-16-reader-findings-106.json`

## Opened inventory

Assigned pages:

- `library/numerical-differential-equations-and-stochastic-dynamics/langevin-splittings-and-invariant-measure-error.md` (A page)
- `library/numerical-differential-equations-and-stochastic-dynamics/langevin-splittings-and-invariant-measure-error-examples.md` (B page)

The A page's declared required pages were opened: `langevin-monte-carlo-mala-and-ula`, `milstein-stochastic-taylor-and-iterated-integrals`, `imex-and-operator-splitting-methods`, and `laplace-approximation-and-marginal-integration`. The relevant published ULA theorem and its update definition were inspected. The other required pages supply no theorem used by the authored batch-106 proofs; I checked their page summaries and treated them as topic context.

All 14 assigned items were opened and reviewed in dependency order:

- A-page items: `def-underdamped-langevin-equation-and-canonical-gibbs-density`; `lem-stable-gaussian-autoregression-invariant-law`; `alg-baoab-underdamped-langevin-splitting`; `lem-exact-ornstein-uhlenbeck-momentum-substep`; `thm-underdamped-langevin-canonical-measure-is-stationary`; `ex-constant-potential-has-no-canonical-gibbs-probability`; `thm-harmonic-baoab-invariant-law-and-stability-limit`; `lem-baoab-one-step-error-moment-bounds`; `lem-baoab-one-step-weak-expansion`; `thm-baoab-finite-time-strong-order-one`; `thm-baoab-finite-time-weak-order-two`.
- B-page items: `ex-harmonic-baoab-thermostat-covariance`; `ex-unstable-baoab-step-has-no-invariant-law`; `ex-ula-and-baoab-have-distinct-harmonic-variance-bias`.

I opened the batch manifest, reader brief, repository entry instructions, batch authoring notes, dependency-input and cross-batch records, and the batch proof-contract file. Contracts and author notes were treated as evidence only. I independently checked the current item statements and proofs. The relevant direct item suppliers were opened: the Brownian/SDE and normal-law definitions; the probability and Lebesgue definitions and integral-measure theorem; the multivariate-normal and stable-Gaussian characteristic-function results; the product-measure and Tonelli theorems; the positive-definite Gaussian integral; integration by parts; global SDE well-posedness; multidimensional Itô; deterministic Itô integrals; Cramér–Wold; dominated convergence; Fatou; and the published ULA variance theorem. I also opened the ULA algorithm, scalar Brownian definition, and scalar normal characteristic-function lemma to check the relevant supplier interfaces.

## Review evidence

- The model definition fixes the scalar-friction convention and correctly conditions the canonical Gibbs probability on a finite, positive normalizer. The O-substep's integrating-factor calculation gives mean factor `e^{-γh}` and covariance `β^{-1}(1-e^{-2γh})M`; this matches the algorithm's noise coefficient.
- The scalar harmonic calculation derives the canonical Gaussian variances, the BAOAB transition matrix, its stability threshold, and the discrete Lyapunov covariance. The covariance identities and the unstable-mode characteristic-function contradiction support the stated strict stable and unstable ranges. No invariant-law claim is made at the threshold.
- The local strong-defect bounds use the same Brownian increment, distinguish conditional mean from second-moment estimates, and provide the same-noise Lipschitz residual needed by the finite-horizon recurrence. The recurrence yields mean-square grid error `O(h^2)`, hence RMS error `O(h)`.
- The weak expansion differentiates the actual five-factor BAOAB product through order three, uses the palindrome to match the first two generator coefficients, and controls the exact-semigroup remainder with the stated derivative and moment assumptions. The finite-grid telescoping proof uses the bounded-test branch and the propagated third moment; it does not infer invariant bias.
- The stationarity proof's global Lipschitz/linear-growth, Gibbs integrability, and finite-second-moment assumptions supply the strong solution and integrable cutoff terms. The adjoint cancellation is correct for the displayed mass/friction convention. The theorem does not claim ergodicity or invariant-law uniqueness.
- The four examples' parameter substitutions and lower bounds are correct. The ULA variance is used only for the overdamped chain; the BAOAB position and momentum formulas refer to the distinct underdamped transition.

Source passages checked against the locally proved claims:

- Leimkuhler–Matthews, “Rational Construction of Stochastic Numerical Methods for Molecular Sampling,” [arXiv:1203.5428](https://arxiv.org/pdf/1203.5428), §2 (PDF lines 233–317) and Appendix “Langevin Dynamics Integrators” (PDF lines 1297–1317). The appendix gives the BAOAB B/A/O/A/B update and `c1=e^{-γδt}`, `c3=√(kBT(1-c1²))`. This supports the splitting definition and OU coefficient; the finite-time error and harmonic covariance proofs are local to batch 106.
- Roux–Rodts–Stoltz, “Introduction à la physique statistique et à la physique quantique,” [course text](https://cermics.enpc.fr/~stoltz/poly_phys_stat_quantique.pdf), §§5.2.1–5.2.2, printed pp. 82–87, especially equations (5.13)–(5.15). It gives the Langevin model, the fluctuation-dissipation relation and a Verlet-like split. Its friction is mass-scaled (`-ξ M^{-1}p`), unlike batch 106's scalar friction on `p`; the local proofs use the batch's explicit convention rather than importing formulas from that source.
- Telatovich–Li, “Strong Convergence Analysis for Numerical Methods for the Langevin Dynamics Model and Higher-order Operator-splitting Schemes,” [arXiv:1706.04237v2](https://arxiv.org/pdf/1706.04237v2), §3.2, Theorem 3.2, with proof indicated in §5.2. The theorem concerns a related two-part splitting, not the exact BAOAB composition. I treated it as context only; batch 106 proves its BAOAB residual and recurrence directly.
- Durmus–Moulines, “Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm,” [arXiv:1507.05021v3](https://arxiv.org/pdf/1507.05021v3), §3.3, Gaussian-target passage (PDF p. 16, lines 1427–1436). It gives the finite-step Gaussian ULA law and covariance; the batch-106 comparison uses the separately proved stationary limit `2/(2-η)`.
- Abdulle–Vilmart–Zygalakis, “Long time accuracy of Lie-Trotter splitting methods for Langevin dynamics,” [paper](https://www.unige.ch/~vilmart/paper_langevin_splitting.pdf), §§2.2–3.1. Its order conditions concern Lie–Trotter invariant-measure accuracy, not BAOAB's five-factor local weak expansion; no such result is imported by batch 106.

## Edit

Changed the title of `thm-harmonic-baoab-invariant-law-and-stability-limit` to “Exact invariant covariance and stability threshold for scalar harmonic BAOAB.” The statement fixes `d=1`, `M=m`, and `V(q)=kq^2/2`; the former unqualified title could suggest a multidimensional harmonic result. The item proof and its scope are unchanged. Its existing proof contract already describes the scalar harmonic case, so it was not affected; the item had no `verification.judge` record to remove.

Validation after the edit:

- Reflow: unchanged.
- Precheck: passed, 1 checked, 0 failing.
- Proof layout: 1 item, 5 steps, 0 defects.

## Page verdicts and unresolved defects

- A page `langevin-splittings-and-invariant-measure-error`: no remaining defect found. Its summary matches the stated model, local finite-time orders, continuous stationarity hypotheses, and scalar harmonic scope; it explicitly withholds a general nonlinear invariant-bias claim.
- B page `langevin-splittings-and-invariant-measure-error-examples`: no defect found. Its summary matches the four examples and keeps ULA and BAOAB state spaces and transition maps separate.
- No confirmed defect remains unedited. The findings JSON is empty.

## Blocker

There is no batch-106 blocker. The recomputed live-run status reports an out-of-scope `3a-collect` blocker: `collect-83` failed three times for batch 83. I did not intervene in that batch.

## Coverage limitation

I reviewed the assigned proofs and the relevant statements/proofs of the declared suppliers, but did not independently re-audit every transitive published dependency beneath those suppliers. The T04/T13 required pages were inspected for page-level context; no item-level theorem from either page is used by the batch-106 proofs.
