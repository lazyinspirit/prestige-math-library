# Step 3a Reader Report — Batch 13

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: `reader-13`  
Batch: `13`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-px02.md`
- `library/fluid-dynamics/fd-px02-examples.md`

Assigned items, read in supplier-before-consumer order:

- `pthm-fd-px04-prediction`, `def-fd-incompressible-euler-model`, `pthm-fd-px05-prediction`, `post-fd-creeping-force-balance`, `def-fd-creeping-stokes-model`, `pthm-fd-px06-prediction`, `pthm-fd-px08-prediction`, `pthm-fd-px09-prediction`, and `pthm-fd-px13-prediction`.
- `ex-fd-x04-application`, `ex-fd-x05-application`, `ex-fd-x06-application`, `ex-fd-x08-application`, `ex-fd-x09-application`, and `ex-fd-x13-application`.

Page prerequisites opened: `fd-f02`, `fd-f03`, and `fd-x02`.

Item dependencies opened for the assigned claims included `def-fd-smooth-motion`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals`, `def-fd-quantity-and-frame-conventions`, `post-fd-continuum-balances`, `post-fd-boundary-data`, `post-fd-newtonian-fourier`, `lem-fd-isotropic-linear-classification`, `def-fd-incompressible-newtonian-model`, `def-fd-incompressible-euler-system`, `def-fd-barotropic-euler-model`, `def-fd-x00`, `thm-fd-x04`, `thm-fd-x05`, `thm-fd-x06`, `thm-fd-x08`, `thm-fd-x09`, `thm-fd-x13`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and `def-countable-choice`. I also opened the mathematical definition suppliers used by `def-fd-x00`: `def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, and `def-oriented-unit-normal-and-flux-of-a-surface-patch`, plus the surface-integration suppliers `def-surface-area-and-scalar-surface-integral-of-a-patch`, `thm-surface-area-density-is-cross-product-norm`, and `def-tangent-plane-of-a-regular-surface-patch`.

The assigned pages are frontmatter-only, with draft status, inventories, prerequisites, and `page_layout: compact-v1` intact. No summaries were present or added. The item contract and current cross-batch edge file were used as navigation evidence; their dispositions were not treated as mathematical verdicts.

## Review and repairs

The conditional flow calculations were checked directly against the stated equations and hypotheses. The plane and pipe profiles, fluxes and shear signs are consistent; the pipe uniqueness argument uses regularity on the full disk to exclude the logarithmic term. The vortex circulation and global-potential obstruction, barotropic Kelvin/Bernoulli example, exterior Stokes force orientation and decay-class uniqueness, half-space tail estimate, torus material loop, and inviscid potential-sphere resultant are also consistent with their stated model domains. The examples' numerical substitutions have the stated units and values. No empirical observations or statistical conclusions are claimed.

Four assigned item defects were repaired:

1. `ex-fd-x04-application`, `## Example` and Proof step 1.1: renamed the channel volume flux from the undefined/ambiguous `q` to the mathematical supplier's established symbol `Q_{\rm ch}`. Updated that item's contract derivation and finite-check output key. The value remains the supplied profile integral, `5 m^2 s^-1`; no model hypothesis or numerical claim changed. The current manifest scan found no `deps` or `justified_by` consumer of this B-page example.

2. `pthm-fd-px08-prediction`, Proof step 1.1: removed the unsupported evaluation `I_0=\sqrt{\pi}/2` and the undeclared `erfc` notation. The replacement proves the needed bound directly from the defined tail integral using `r=s+z` and `(s+z)^2\ge s^2+z^2`; it states why `I_0` is positive and finite. Updated the proof-contract derivation and its justification tags. Its B-page example is a proof-result consumer, but the theorem's public statement did not change. No `verification.judge` record was present on either repaired item.

3. `pthm-fd-px06-prediction`, Proof step 1.1: completed the force calculation locally instead of relying on the mathematical supplier's unevaluated sphere area. The proof derives the boundary stress vector, evaluates the sphere area from an explicit spherical parameterization, and uses its area-preserving antipodal parameter change. Updated the proof-contract derivation.

4. `pthm-fd-px13-prediction`, Proof step 2.1: made the pressure-resultant cancellation explicit in spherical coordinates. The parameterization has area element $a^2\sin\theta\,d\theta\,d\varphi$; the antipodal parameter change has absolute Jacobian one and preserves that density. Updated the proof-contract derivation.

The source checks support, but do not replace, the local arguments. Fitzpatrick's parallel-plate and pipe sections give the profiles, fluxes, and their one-dimensional equations ([parallel plates](https://farside.ph.utexas.edu/teaching/336L/Fluid/node134.html), [Poiseuille flow](https://farside.ph.utexas.edu/teaching/336L/Fluid/node136.html)). Fitzpatrick's sphere calculation states the force on a moving sphere with the opposite relative-velocity convention; translating to the item's far-field velocity gives the stated sign ([Stokes flow around a sphere](https://farside.ph.utexas.edu/teaching/336L/Fluid/node142.html)). Mandre's Stokes-first-problem section gives the complementary-error-function profile; the assigned proof's tail estimate is derived locally ([Chapter 3, §3.3.1](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch3.html)). The cited continuum and constitutive sources support the adopted-assumption framing and the tensor Fourier law ([Sonin, §§1.1–1.3](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf), [University of Washington, §§6.5.3 and 6.7.2](https://courses.washington.edu/mengr503/Chapter_6.pdf)); Tong's boundary-condition discussion distinguishes impermeability from tangential no-slip ([Fluid Mechanics, Part I](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)). The MIT Stokes-first-problem solution supports the similarity scale, not the exact complementary-error-function estimate ([MIT 2.25 solution](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/6c64b72340cd5b5da9a0d59516b63aec_MIT2_25F13_SolutionStokes1.pdf)). The cited Powers PDF did not fetch in this session; the boundary-data formulation was checked against Tong and the assigned local hypotheses.

Diagram review covered the four TikZ diagrams in the opened mathematical suppliers: the channel/pipe coordinate schematic, the punctured-axis vortex orientation, the initial torus loop, and the sphere normal/tangent directions. Labels, axes, orientation, and text conventions agree; proofs do not rely on them. No additional diagram is needed for the assigned items.

## Uneditable findings

The findings JSON records two page-title/content mismatches, eight read-only published mathematical dependencies, and two nonfatal proof omissions in batch-6 mathematical suppliers. The page titles name only plane/pipe Couette–Poiseuille work, while the assigned inventories also include vortex topology, Stokes flow around a sphere, viscous diffusion and circulation, barotropic rotation, and potential flow around a sphere. The published dependencies contain malformed definition prose or hyperlinks inside complete Definition/Remarks sections contrary to the uninterrupted-statement rule. The batch-6 suppliers use the sphere area formula and antipodal surface-area invariance without a local calculation or exact supplier; the assigned physics consumers now include those calculations, while the original mathematical carriers remain outside this reader's write scope. Exact locations and assigned consumers are in the JSON file.

## Page verdicts

- `fd-px02`: inventory, status, requirements, and compact layout are coherent. The page title is too narrow for its set of model definitions and predictions; reported as a nonfatal page finding.
- `fd-px02-examples`: inventory, companion relation, status, requirements, and compact layout are coherent. Its title is too narrow for the six distinct worked examples; reported as a nonfatal page finding.

## Checks and blocker

After the final item edits, reflow and precheck passed for all four changed items. The required final proof-layout run over those paths reported `4 items, 11 steps, 0 defects`.

No fatal assigned in-flight mathematical or physical blocker remains after these repairs. The nonfatal read-only current-run, published-content, and page-title findings remain for owner disposition; no publication, judgment, or self-certification is asserted.
