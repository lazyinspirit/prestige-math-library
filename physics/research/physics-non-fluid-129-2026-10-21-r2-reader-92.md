# Step 3a reader report — batch 92

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-92`)

## Opened inventory

Assigned pages:

- `library/classical-statistical-mechanics/csm-frontier-macroscopic-fluctuations.md` (A)
- `library/classical-statistical-mechanics/csm-frontier-macroscopic-fluctuations-examples.md` (B)

Assigned items, reviewed in dependency order:

- `items/def-csm-frontier-ssep-current-action.md`
- `items/def-csm-frontier-bernoulli-relative-free-energy.md`
- `items/def-csm-frontier-ssep-quasipotential.md`
- `items/thm-csm-frontier-mft-reversal-identity.md`
- `items/lem-csm-frontier-mft-small-action-bridge.md`
- `items/thm-csm-frontier-equilibrium-quasipotential.md`
- `items/ex-csm-frontier-mft-nonlocal-warning.md`

Page prerequisites opened:

- `library/classical-statistical-mechanics/csm-frontier-hydrodynamic-ssep.md`
- `library/classical-statistical-mechanics/csm-frontier-large-deviation-ensembles.md`
- From the hydrodynamic SSEP page, `items/def-csm-frontier-ssep-diffusive-model.md`, `items/def-csm-frontier-ssep-weak-heat-solution.md`, and `items/lem-csm-frontier-ssep-heat-flow.md` were opened where relevant to the SSEP convention and Fourier construction.

Additional mathematical suppliers opened for the assigned claims:

- `items/def-natural-logarithm.md` and `items/cor-exponential-is-a-bijection-onto-positive-reals.md`
- `items/thm-exponential-is-strictly-increasing.md`, `items/thm-exponential-limits-and-range.md`, `items/thm-intermediate-value.md`, and `items/cor-power-series-sums-are-continuous.md`
- `items/def-countable-choice.md`, `items/thm-chain-rule.md`, `items/thm-logarithm-derivative-and-integral.md`, and `items/thm-natural-logarithm-laws.md`
- `items/def-fourier-coefficients-and-trigonometric-polynomials.md` and `items/thm-fourier-basis-and-parseval-on-the-n-torus.md`

The two assigned pages and the two page prerequisites have frontmatter-only bodies. No page-summary prose was present to assess. I did not inspect every unrelated item placed on the large-deviation-ensembles prerequisite page.

## Mathematical and source review

- The normalized action is a well-defined finite integral for the stated smooth periodic paths: the density stays in `[epsilon,1-epsilon]`, so the mobility denominator is bounded away from zero. The definition explicitly disclaims a microscopic path-space LDP or probability estimate.
- The action convention matches Bertini et al., *Macroscopic fluctuation theory*, arXiv:1404.6466, §II, eq. (2.8), with zero external field and hydrodynamic current `J=-grad rho`; §V.D gives `D=1` and `chi(rho)=rho(1-rho)` for SSEP. Derrida, *Lecture notes on large deviations in non-equilibrium diffusive systems*, arXiv:2505.15618, §8.1, eq. (97), gives `D=1`, `sigma(rho)=2rho(1-rho)`; its current action in eq. (167) uses denominator `2 sigma`, agreeing with the stated `4 rho(1-rho)` denominator. These sources support the coefficient convention; the local definition does not claim those sources prove a microscopic LDP on this torus.
- The action time-reversal proof checks out: expansion gives the integrand difference `j dot grad rho / chi(rho)`; the Bernoulli free-energy curvature is `1/chi`; periodic integration by parts and the continuity equation give the time derivative of the free-energy integral. Bertini et al., §II.C, eqs. (2.12)–(2.16), treat path reversal and the action relation. The equilibrium free-energy formula appears in §V.A, eq. (5.1); the exact local identity is proved in the assigned item.
- The heat-flow proof's smoothing, range preservation, mass conservation, and uniqueness arguments are valid under its stated Fourier and weak-solution conventions, subject to the published Fourier proof-step issue recorded below. The small-action bridge's cutoff, mean-zero inverse-Laplacian current, endpoint jet matching, and decay estimate yield the stated vanishing action. Derrida, §14.1, eqs. (158)–(160), supports the reverse-relaxation path used in the variational construction.
- The quasi-potential proof gives the lower bound by action reversal and the upper bound by concatenating the small-action bridge with the reversed heat segment. Its horizons tend to infinity; it does not assert a finite-time minimizer. The entropy display is now explicitly linked to the published natural-logarithm quotient law in the proof and contract.
- The two-site example's four-state generator, moment equations, covariance calculation, positivity of the constructed atom probabilities, uniqueness, and equal-reservoir product case check out. Its TikZ transition graph has the correct two reservoir flips at each site and the bidirectional rate-one exchange of `10` and `01`. The local finite-state calculation is not presented as a continuum quasi-potential or an empirical observation.
- No assigned item reports experimental data or makes a statistical inference. No empirical precision or certainty is claimed.

Source locations additionally checked in Derrida's notes include §13.1, eq. (148), for the equilibrium free-energy density functional; §10.2, eq. (99), for SSEP nonlocal correlations; and §14.1 for time-reversed diffusive relaxation. The two-site covariance itself is established by the assigned finite-state calculation, not attributed to those continuum formulas.

## Edit and validation

- In `items/ex-csm-frontier-mft-nonlocal-warning.md`, changed the title to “Two-site boundary-driven SSEP has a nonproduct stationary law for unequal reservoir rates.” The original title omitted the necessary condition `alpha != beta`; step 4.1 explicitly gives a product Bernoulli law when the rates are equal. The proof contract did not change because the proof and its derivations did not change, and the item had no `verification.judge` record.
- In `items/thm-csm-frontier-equilibrium-quasipotential.md`, added the published supplier `thm-natural-logarithm-laws` with role `mathematical-premise`, added Fact F7, and used its quotient identity in step 4.1 to derive the displayed relative-entropy formula from the fixed-mean functional. Updated the assigned batch proof contract's F7 citation, step-4.1 derivation, and supplier excerpt. The item had no `verification.judge` record.
- Reflow reported both changed items unchanged. Precheck passed for both items. The final proof-layout command checked both changed item paths: 2 items, 11 steps, 0 defects.

The batch manifest was retained as the dispatch inventory; this report records the reader's exact source edits and the updated proof contract. No published content, B-page prose, or plan specification was changed.

## Uneditable finding

- Published dependency `thm-fourier-basis-and-parseval-on-the-n-torus`, Proof 1.1, writes the orthogonality integral as a product over `j<n`. With the usual coordinates `j=1,...,n`, this omits the nth coordinate; for `n=1` it gives an empty product even when the two frequencies differ. It therefore does not establish orthogonality as written. Replacing the index range with `j=1,...,n` closes the step immediately. This published supplier is read-only; the assigned consumer `thm-csm-frontier-equilibrium-quasipotential` reaches it through the heat-flow lemma and the small-action bridge. This is nonfatal because the correction is a one-index range repair and the theorem's stated Fourier-basis conclusion is the standard product-character result.

## Page verdicts and blocker

- **A page `csm-frontier-macroscopic-fluctuations`: pass.** Its inventory and prerequisites match the assigned formal action, fixed-mean variational definitions, equilibrium reversal identity, bridge, and conditional equilibrium quasi-potential theorem. The proof does not overstate the continuum result as a nonequilibrium local formula.
- **B page `csm-frontier-macroscopic-fluctuations-examples`: pass.** Its assigned example is a finite two-site boundary-driven chain and explicitly says it is not a derivation of the continuum quasi-potential. The diagram matches the generator.
- **Blocker:** none. Coverage limitation: I inspected the exact supplier items needed for the assigned arguments, but did not re-audit the entire transitive dependency closure of the published calculus, measure-theory, and Fourier foundations, nor unrelated items on the large-deviation-ensembles prerequisite page. The report does not claim that broader audit.
