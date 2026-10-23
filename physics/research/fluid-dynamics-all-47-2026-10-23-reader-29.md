# Step 3a reader report — batch 29

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `29`

## Disposition

No source edits were made. No confirmed or suspected defect remains in the assigned items or pages. There is no blocker. Since no item was edited, the edit-triggered reflow, precheck, and proof-layout commands were not run.

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-pn01.md` (`fd-pn01`, A page)
- `library/fluid-dynamics/fd-pn01-examples.md` (`fd-pn01-examples`, B page)

Assigned items, read in prerequisite order:

- `def-fd-pn01-forced-creeping-stokes-branch`
- `def-fd-forced-incompressible-newtonian-model`
- `pthm-fd-creeping-lipschitz-pressure`
- `pthm-fd-no-slip-cfd-observations`
- `ex-fd-cfd-density-pressure-conversion`

The batch manifest, cross-batch dependency record, and proof-contract records for both theorems and the example were inspected. The actual page manifests agree with the authored item inventories. Both page bodies are empty and retain `page_layout: compact-v1`.

Current prerequisite pages inspected for the assigned page and claims:

- `library/fluid-dynamics/fd-f02.md`
- `library/fluid-dynamics/fd-f03.md`
- `library/fluid-dynamics-mathematics/fd-n01.md`
- `library/fluid-dynamics-mathematics/fd-n02.md`
- `library/fluid-dynamics/fd-px02.md`

Item suppliers inspected for the actual uses in the assigned claims:

- Mathematical conventions: `def-countable-choice`, `def-na-stokes-zero-mean-pressure-and-velocity-spaces`, `lem-na-homogeneous-dirichlet-poincare`.
- Fluid definitions and assumptions: `def-fd-smooth-motion`, `def-fd-quantity-and-frame-conventions`, `def-fd-conservative-weak-form`, `lem-fd-isotropic-linear-classification`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals`, `post-fd-newtonian-fourier`, `post-fd-boundary-data`, `post-fd-continuum-balances`, `post-fd-creeping-force-balance`, and `def-fd-incompressible-newtonian-model`.
- Continuous Stokes claim: `def-fd-bounded-stokes-observation-interface`, `thm-fd-stokes-load-observable-stability`, `thm-na-weak-stokes-solvability-lipschitz-domain`, and `thm-na-bounded-lipschitz-domain-divergence-right-inverse`.
- MINI interface and estimates: `def-fd-mini-fluid-interface`, `prop-fd-mini-observation-error`, `prop-fd-mini-accumulated-pressure-observation`, `def-na-evolutionary-skew-convective-form`, `def-na-mini-element-p1-bubble-p1-spaces`, `def-na-discrete-weak-and-exact-divergence-free-spaces`, `def-na-mini-navier-stokes-backward-euler-scheme`, `thm-na-mini-be-smooth-velocity-error`, and `thm-na-mini-be-smooth-integrated-pressure-error`.

## Review evidence and findings

- `def-fd-pn01-forced-creeping-stokes-branch` defines its dimensionless domain, reference scales, physical units, zero-mean pressure space, load functional, and weak equations. Its body-force load is continuous on the stated velocity space by the cited bounded-domain Poincare inequality. It explicitly treats the zero-inertia equation as a separate adopted branch and makes no existence, approximation-error, or empirical-validity claim.
- `def-fd-forced-incompressible-newtonian-model` adds the specified body-acceleration field to the unforced Newtonian branch while keeping the no-slip datum separate from the interior balance. Its smoothness, constant coefficients, stress convention, and SI units are explicit.
- `pthm-fd-creeping-lipschitz-pressure` applies the bounded Stokes pressure-sensor result only after proving the (L^2) body load defines an element of (V'). The mean-zero pressure gauge, Countable Choice hypothesis, finite sensor family, and Poincare constant are preserved. The factor (3C_{\mathrm{div}}C_P\rho_0U_0^2) follows from those estimates and the declared pressure scaling.
- `pthm-fd-no-slip-cfd-observations` carries the MINI supplier's shape, initialization, actual-solution, strong-solution regularity, and time-step hypotheses. It explicitly adopts a distributional weak extension at that regularity instead of claiming the Sobolev hypotheses imply the model definition's classical regularity. The weak stress scaling gives (2\nu^*\), the skew-convection identity applies to the divergence-free zero-boundary solution, and the sensor bounds match the two local propositions. Physical pressure-time-volume scaling gives (\rho_0U_0\ell_0^4\); the velocity reading scales by (U_0\). The claim distinguishes conditional predictions from empirical validation.
- `ex-fd-cfd-density-pressure-conversion` uses the time-tested pressure bound with a mean-zero unit-cube weight. Direct integration gives (\|y_1-1/2\|_{L^2((0,1)^3)}=1/\sqrt{12}\); a normalized smooth bump test exists for every (T^*>0). The physical-unit factor and stated units are correct. No measurement or simulation value is asserted.
- The theorem/example contracts' cited facts and derivation steps match the current item statements and proofs. Statements are uninterrupted by hyperlinks; their references are in the following reference sections. Proof steps have separated paragraphs and tagged endings. No TikZ/tikzcd diagrams occur in the assigned items.
- The source passages inspected support the stated context: Cambridge, *Fluid Dynamics II (D)*, ch. 4, pp. 32–33, presents the Stokes equations with prescribed boundary data; Stewart, MIT 8.09, §6.8, pp. 135–138, treats steady low-Re flow past a sphere; Tong, *Fluid Mechanics*, Part II, §§3.1.1 and 3.2.1, describes the Newtonian closure and no-slip as a separately asserted boundary condition; Washington, *An Introduction to Continuum Mechanics*, §§6.5.3 and 6.7.2, gives the isotropic viscous stress and Fourier flux forms; Guermond, MATH 661, ch. 54, Lemma 54.5, states uniform MINI stability under shape-regular affine mesh hypotheses; Boffi–Brezzi–Fortin, §8.6.1, states stability of the MINI pair. The assigned items do not attribute the time-dependent error estimates to the stationary Stokes sources; those estimates are taken from the exact mathematical suppliers and proved locally in their observation propositions.

## Page verdicts

- `fd-pn01`: **Pass.** The frontmatter-only A page preserves its current title, inventory, status, and prerequisites. Its item claims are conditional and align with the inspected suppliers; no page repair is needed.
- `fd-pn01-examples`: **Pass.** The frontmatter-only B companion page has the correct companion relation and example inventory. The example is a symbolic calculation with no invented empirical observation; no page repair is needed.

## Limitations

The combined Tong `fluids.pdf` reference exceeded the web fetch size limit; the corresponding Part II source `fluids2.pdf` was available and its cited §§3.1.1 and 3.2.1 were inspected. The Powers source PDF timed out and was not inspected. Relevant corroborating passages were inspected in the other primary sources listed above. This review checked supplier statements/proofs needed for the assigned uses, not every unrelated transitive dependency of those supplier items.
