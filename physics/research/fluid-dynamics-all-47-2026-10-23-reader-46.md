# Step 3a reader report — batch 46

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Scope: batch 46 only

## Opened inventory

- Assigned pages: `fd-bl01` and `fd-bl01-examples` in `library/fluid-dynamics-mathematics/`. Both current page carriers have frontmatter only, `page_layout: compact-v1`, and no Markdown summaries.
- Assigned items: `def-fd-wall-defect-capillary-models`, `thm-fd-common-wall-residual-error`, `thm-fd-capillary-gravity-dispersion-energy`, and `ex-fd-capillary-zero-tension-limit`.
- Current proof contracts: the four batch-46 contract records in `research/fluid-dynamics-all-47-2026-10-23-batch-46.proof-contracts.json`. The relevant page and item rows in `research/fluid-dynamics-all-47-2026-10-23-batch-46.cross-batch-dependencies.json` were checked against the current carriers; those records were treated as evidence, not verdicts.
- Current-run batch-5 suppliers opened before checking their consumers: `def-fd-x00`, `def-fd-real-trigonometric-functions`, `lem-fd-real-trigonometric-derivatives`, `thm-fd-x03`, and `lem-fd-x03-tanh-error-bounds`. Also opened `def-hyperbolic-functions` and the real/complex trigonometric and derivative suppliers used by those claims.
- Other direct mathematical suppliers opened for the assigned proofs: `def-countable-choice`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `cor-cauchy-schwarz-inequality-for-l-two`, `cor-triangle-inequality-for-inner-product-norm`, `thm-newton-leibniz-with-interior-derivative`, `thm-derivative-of-exponential`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-of-square-roots`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-reals-cauchy-complete`, `cor-greens-first-identity-for-glued-elementary-solid-regions`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-hyperbolic-identities-and-derivatives`, `cor-differentiable-implies-continuous`, `cor-zero-derivative-implies-constant`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`, and `thm-complex-trigonometric-hyperbolic-dictionary`.
- Context pages opened: `fd-l01`, `fd-x01`, and the seven mathematical prerequisite pages listed by the A-page manifest: `euclidean-surface-measure-divergence-and-green-identities`, `foundations-of-the-real-numbers`, `inner-product-spaces-and-orthogonality`, `the-derivative-and-mean-value-theorems`, `the-exponential-function`, `the-fundamental-theorems-of-calculus`, and `sine-cosine-and-the-definition-of-pi`. The proof checks below use the exact item statements and arguments, rather than relying on page summaries.

## Review and repair

The bounded-domain estimate follows from the stated residual convention, common trace, divergence-free fields, and smooth bounded-domain regularity. The transport, pressure, and diffusion boundary terms vanish under the common zero trace of `e = v - u`; the gradient bound uses the stated row-component Jacobian norm; and regularization by `sqrt(Y + delta^2)` handles zero error without division by its norm. On the periodic channel, paired periodic faces cancel, the explicit lift is divergence-free and has the stated wall values, and the residual expansion has the displayed signs. The Countable Choice assumption is explicit and is used through the cited divergence theorem.

The capillary-gravity mode has the stated positive dispersion frequency. Rescaling the finite-depth gravity mode by `c_sigma` gives the kinematic and dynamic conditions and the coefficient written in the Statement. Differentiation of the kinetic and surface energies, Green's identity on one periodic cell, and the two linear boundary conditions give `E'(t) = 0`; the stated regularity justifies differentiation under the compact-cell integrals and continuity at the time endpoints. The zero-tension example's specialization and one-sided limit follow by positivity and rationalization. No physical observation or empirical inference is claimed.

One confirmed proof-notation defect was repaired in `thm-fd-common-wall-residual-error`: the proof used `||nabla e||_2` for a matrix-valued Jacobian, while the Statement defined the `L^2` norm only for vector fields. The proof introduction now defines the row-component Jacobian and its componentwise `L^2` norm explicitly. No public Statement or Definition changed, so no consumer interface review was triggered. The item had no `verification.judge` record to remove. Its affected contract derivation for step 2.1 now records the same componentwise convention.

Validation after the repair:

- `reflow.mts items/thm-fd-common-wall-residual-error.md`: unchanged.
- `precheck.mts items/thm-fd-common-wall-residual-error.md`: pass, 1 checked, 0 failing.
- `proof-layout.mjs items/thm-fd-common-wall-residual-error.md`: 1 item, 6 steps, 0 defects.

## Uneditable finding

`def-fd-x00` is an in-flight supplier in batch 5 and outside this reader's write scope. In its Definition at line 61, it calls `x:J -> Omega` a `C^1` streamline and uses `x'(s)`, but it does not declare the domain `J` or its interval/endpoint convention before using the derivative. A later `J subseteq I` is introduced for a different object, the closed material loop, and does not specify the streamline parameter domain. The missing domain should be stated explicitly. This ancillary definition is not used by the batch-46 residual or wave arguments; the assigned consumer `def-fd-wall-defect-capillary-models` uses its Cartesian operators and formal system definitions.

## Page verdicts

- `fd-bl01`: page metadata and empty body are correct. Its three assigned items were reviewed; the bounded-domain theorem's proof-notation gap was repaired. The in-run `def-fd-x00` finding concerns only its separate streamline subdefinition and does not affect this page's current item uses.
- `fd-bl01-examples`: page metadata and empty body are correct. Its example's parameter specialization, amplitude-zero case, and one-sided limit proof are valid under the two cited theorem statements. No item or page defect remains in this page's scope.

No TikZ or `tikzcd` diagrams occur in the assigned pages or items, and their arguments do not require a diagram. No page prose was edited.

## Source checks and limitations

- MIT OCW, *18.357 Interfacial Phenomena*, Chapter 19, printed pp. 78–79 (PDF pp. 78–79), gives the linearized capillary-gravity boundary problem and equation (19.4), `omega^2 = (g k + sigma k^3/rho) tanh(k h)`: [lecture notes PDF](https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/04759cfc15c79928ca9f72a18b3864dd_MIT18_357F10_lec_all.pdf).
- Feddersen, *Linear Surface Gravity Waves 1*, §§2.1–2.4, especially equation (2.18) and formulas (2.19), supports the finite-depth gravity-wave mode and `omega^2 = g k tanh(k h)`: [lecture notes PDF](https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf).
- Firing, OCN 620, §19.4, gives the finite-depth gravity dispersion relation and the stated limiting regimes: [course notes](https://uhslc.soest.hawaii.edu/ocn620/notes/surface-waves-1.html).
- Wiedemann, §§5.1–5.2, contains a related periodic relative-energy computation and the bounded-domain boundary-layer discussion. Its comparison is an Euler/vanishing-viscosity context, not the exact same-viscosity residual theorem; the assigned theorem's argument was verified locally: [lecture notes PDF](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf).
- The cited Temam PDF timed out on retrieval, and the ETH capillary-wave PDF returned no extractable text. Neither was used to close a proof gap; the relevant model equations and deductions were checked from the local proofs and the readable MIT, Feddersen, Firing, and Wiedemann sources.

No blocker remains. This review checked the assigned claims and the direct mathematical suppliers needed for their uses; it is not a re-audit of every transitive proof dependency inside the published mathematical library.
