# Step 3a reader report — batch 38

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch `38`

## Opened inventory

Assigned pages, opened as frontmatter-only files:

- `library/fluid-dynamics/fd-ples01.md`
- `library/fluid-dynamics/fd-ples01-examples.md`

Assigned items reviewed against the prerequisite chains listed below:

- `items/post-fd-eddy-viscosity-closure.md`
- `items/pthm-fd-eddy-closure-resolved-dissipation.md`
- `items/ex-fd-eddy-shear-production.md`

Local physics prerequisites opened:

- `items/post-fd-continuum-balances.md`
- `items/post-fd-newtonian-fourier.md`
- `items/def-fd-incompressible-newtonian-model.md`
- `items/def-fd-periodic-fourier-sobolev-spaces.md`
- `items/def-fd-positive-convolution-fluid-filter.md`
- `items/lem-fd-periodic-filter-normalization-and-commutation.md`
- `items/thm-fd-filtered-covariance-energy.md`
- `items/def-countable-choice.md` (read-only mathematical import)

Published mathematical statements used in the local filter and energy-balance proofs were opened at their cited claims: `cor-change-of-variables-for-compactly-supported-functions`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-riemann-fubini-on-product-rectangles`, `thm-multidimensional-integral-properties`, `thm-multidimensional-riemann-criterion`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `def-multidimensional-darboux-sums`, `def-multidimensional-grid-partition`, `lem-finite-sum-laws`, `cor-archimedean-reciprocal`, `prop-divergence-satisfies-the-product-rule`, `thm-integration-by-parts`, and `thm-continuous-implies-integrable`.

I also inspected the batch-38 manifest, proof-contract, cross-batch-dependency and coverage records. They were treated as context rather than review verdicts.

## Mathematical and source review

The postulate adopts a specific 3D isotropic eddy-viscosity stress form and distinguishes it from the exact filtered covariance. Its prescribed fields, domains, regularity, signs, units, model scope and lack of empirical-validation claim are explicit. The local closure equation uses the stated stress sign convention.

The physics theorem’s pointwise identity is valid: the symmetric part $D$ of $\nabla\bar u$ satisfies $D:\nabla\bar u=|D|_F^2$ because the skew part has zero Frobenius contraction, while incompressibility gives $I_3:\nabla\bar u=0$. Thus the adopted nonnegative coefficient $\nu_t$ gives $\Pi^{\rm model}=2\nu_t|D|_F^2\ge0$. Its additional resolved-energy conclusion is explicitly conditional on the smooth unforced Newtonian equation, $\nu>0$, and smooth pressure; it does not claim a sign for exact filtered transfer. The local filter lemma and exact covariance-energy theorem state the required periodicity, smoothness, commutation and stress-sign conventions.

I checked the cited fluid-dynamics passages directly:

- University of Washington ME 544, [*Large-Eddy Simulation*](https://courses.washington.edu/mengr544/handouts/hd-les.pdf), §3, printed pp. 10–12, Eqs. (16)–(24), and §4, printed pp. 13–15, especially Eq. (30). These give the residual stress and its isotropic trace part, the exact resolved-energy transfer (including possible backscatter for the exact stress), and the modeled deviatoric stress $\tau^r_{ij}=-2\nu_{sgs}\bar S_{ij}$ with nonnegative modeled transfer for the original nonnegative-viscosity model.
- Jeremy A. Gibbs, [*LES of Turbulent Flows: Lecture 12*](https://gibbs.science/teaching/les/lectures/lecture_12.pdf), printed pp. 7–8 and 17–23. The deviatoric stress form and the distinction between mean modeled forward transfer and instantaneous exact backscatter agree with the item’s qualifications.
- Glenn Flierl and Raffaele Ferrari, [MIT OCW 12.820, *Turbulence in the Ocean and Atmosphere*, Chapter 3](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf), §§3.6–3.8, printed pp. 9–11. This is a Reynolds-averaging context; it supports the distinction that closure adds modeling assumptions, not the exact LES formula.

No experiments, measured inputs, statistical conclusions or TikZ diagrams occur in the assigned items. The postulate is an adopted model assumption; the theorem and example are conditional model deductions, not empirical claims.

## Edit and validation

Repaired `ex-fd-eddy-shear-production` and its batch proof-contract. The original example cited `pthm-fd-eddy-closure-resolved-dissipation` as if its formula applied to any smooth divergence-free resolved field. The theorem’s actual Statement also assumes the underlying field satisfies the unforced incompressible Newtonian equation; its energy-balance clause additionally assumes positive kinematic viscosity and smooth pressure. Those hypotheses were absent from the example.

The example now states its filtered-field construction, model-input field domains and regularity, and the closure formula. It computes the shear transfer directly from that adopted formula, so it does not import the theorem’s PDE or positive-viscosity hypotheses. Its direct dependencies now identify the filter definition, derivative-commutation result, Countable Choice convention and closure postulate. The proof-contract citation and derivation for step 2.1 were updated to match. No `verification.judge` record existed to remove.

Validation after the final edit:

- `reflow.mts`: unchanged.
- `precheck.mts`: PASS for `items/ex-fd-eddy-shear-production.md`.
- `proof-layout.mjs`: 1 item, 2 steps, 0 defects.

## Uneditable defects, page verdicts and blockers

No uneditable defects found.

- `fd-ples01`: pass. Its item inventory and prerequisite page links match the reviewed postulate and theorem; its body is empty.
- `fd-ples01-examples`: pass. Its example inventory and parent-page prerequisite match the reviewed example; its body is empty.

No blocker.

## Coverage limitation

The assigned items, pages and the mathematical supplier statements used in their arguments were inspected. I did not independently re-audit every transitive proof history of the published mathematics library.
