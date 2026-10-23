# Batch 19 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-19`; scope: batch 19 only.

The frozen scope routes no touched/page obligations and no reader/refuter findings. The decisions array is empty. All eleven required HIGH/CRITICAL risk reviews are complete in the owning batch contract, in the dispatched dependency order. No content repair was necessary.

## Completed risk reviews

### `lem-fd-2d-fourier-log-velocity-bound`

Reviewed Statement and steps 1.1–4.1 with def-fd-periodic-fourier-sobolev-spaces and def-countable-choice. Complex orthogonality gives |omega_hat(k)|=|k||u_hat(k)| for nonzero k; annulus counts O(j) give low-frequency sqrt(log(e+K)) and tail Y K^(2-m). K=2+(e+Y)^(1/(m-2)) controls both for every m>=4, including constant u (B=S=0) and Y=0. Normalized measure and the unconstrained mean mode are consistent. Local proof supplies the estimate; the book is contextual, not an invoked unproved premise. No defect found.

### `thm-fd-smooth-wall-energy-uniqueness`

Reviewed Statement and steps 1.1–3.1 and actual definitions of wall domains, bounded C1 domains/normals, surface integral, and divergence-theorem Statement. C2 boundary and C1 fluxes satisfy that theorem under explicit Countable Choice. Convective normal flux vanishes for both stationary no-slip and impermeable slip. Symmetric stress contraction gives 2 eta |D|^2, and common linear slip law gives -beta|w_tan|^2 for differences, including beta=0. The smooth gradient is integrable on the compact time interval, so the displayed integrating factor proves velocity uniqueness without a Korn inequality or wall existence assertion. No defect found.


### `lem-fd-2d-transport-commutator-l1-bound`

Reviewed all four steps against the Fourier-space definition, logarithmic lemma, Countable Choice, and normalized Parseval Statement. Smoothness gives absolute convergence of each weighted derivative series by repeated periodic integration by parts; the segment mean-value estimate has the correct weights. Each convolution pairs one weighted l2 sequence with the gradient l1 sequence; the l2 triangle inequality applied to translated sequences gives Young’s inequality here. Terms with v=0 or ell=0 cancel or are harmless overestimates, so nonzero mean is allowed and constant u gives zero. No defect found.

### `prop-fd-fluid-equation-scaling`

Reviewed every scaling branch and steps 1.1–3.1 against the actual Leray/pressure definition. Navier–Stokes derivative factors are lambda^3 and divergence lambda^2; time and torus period change by lambda^-2 and lambda^-1. P and tensor-pressure multipliers are degree zero, including the separately fixed zero mode. Cell-volume L2 scales by lambda^(1-d/2), not the probability-measure factor. Euler uses alpha^2 beta. SI dimensional substitution gives nu/(UL)=Re^-1 and acoustic c_*^2/U^2=Ma^-2 for positive scales and c_*^2>0; inviscid nu=0 remains allowed in the first branch only. These are conditional algebraic changes of variables, with no empirical premise or singular-limit claim. No defect found.


### `thm-fd-periodic-smooth-incompressible-energy`

Reviewed all four steps, actual local incompressible IVP proof and Poincare proof. Smooth periodic transport and pressure terms integrate to zero and diffusion is -nu||grad u||_2^2. The proof separately preserves the zero mean before invoking the unit first-frequency Poincare bound. Integrating the squared-norm inequality gives e^(-nu t) after taking square roots. nu=0 gives conservation; u_0=0 gives the zero solution; d=1 is admitted and zero-mean divergence-free data are zero. Only the supplied local lifespan is asserted. No defect found.

### `thm-fd-periodic-smooth-stability`

Reviewed all seven steps and actual local IVP proofs, symmetric-variable definition, given-solutions difference-energy proof, Fourier-space and Leray definitions. Local existence time and all-order energy bounds are independent of viscosity in the incompressible supplier. Subtraction puts nu_1 Delta w on the dissipative side and (nu_1-nu_2)Delta u^nu_2 in the residual, with the displayed exponential and absolute viscosity difference. y_epsilon regularization handles vanishing differences. Linear symmetric A_j satisfy the exact hypotheses of the symmetric difference supplier. Coefficient Holder has exponents 1/s and (s-1)/s; s>=4 avoids the zero-exponent endpoint, and M=0 is harmless. No defect found.

### `thm-fd-polytropic-energy`

Reviewed steps 1.1–3.1 with the current positive-density IVP proof and symmetric-variable definition. The mass product identity gives kinetic rate -u dot grad p; U-rho U′=-p gives internal rate -p div u. Their sum is the stated flux (E+p)u and its periodic divergence integrates to zero. kappa>0, gamma>1, and strict positive density make all real powers smooth; the existence-time hypotheses and positivity qualification match the actual supplier. No vacuum, shock, empirical or global-existence extension is inferred. No defect found.

### `thm-fd-smooth-sobolev-continuation`

Reviewed every step and the actual proofs (not merely statements) of both local IVP suppliers, especially incompressible step 2.1 and polytropic steps 2.1 and 8.1. These give uniform restart times from a bounded H^s norm and, in the polytropic branch, a uniform positive r lower bound. Choosing t_0 within epsilon/2 of a finite endpoint patches a new smooth solution past that endpoint by local uniqueness, avoiding an unjustified endpoint limit. The maximal union is well-defined by uniqueness; inverse density powers stay smooth only on the preserved positive range. Fixed viscosity and zero incompressible datum cases are covered. No defect found.


### `thm-fd-global-two-dimensional-periodic-navier-stokes`

Reviewed all seven steps and every direct dependency, including the vorticity proof and the earlier completed log/commutator/continuation reviews. In 2D there is no stretching and enstrophy gives integral B^2 <= ||omega_0||_2^2(t+1/(2nu)). The commutator yields (Y^2)′/2<=C S Y^2. Regularizing Y at zero and setting Z=log(e+Y_epsilon) gives (sqrt Z)′<=C(1+B); time Cauchy–Schwarz gives exactly the stated bound. Its finite bound at any hypothetical finite endpoint controls H^4 and invokes the current restart continuation theorem. Nonzero mean velocities are allowed because neither Fourier lemma discards that mode incorrectly. t=0, constant data and zero vorticity are harmless; positive viscosity is essential to the displayed argument and 3D/inviscid global results are excluded. No defect found.

### `thm-fd-periodic-inviscid-limit`

Reviewed all three steps with the current stability proof and Fourier-space definition. Using nu_1=nu and nu_2=0 leaves residual nu Delta v and no initial error; the Euler gradients and Laplacian are bounded on the common compact smooth interval. The stability supplier and its actual IVP proof give viscosity-independent existence time and each fixed-order norm bound. Weighted Holder then gives the exponent 1/s and factor (2M_s)^((s-1)/s), uniformly in time. nu=0 gives zero error and no endpoint at a maximal lifespan or wall trace is taken. No nonlinear low-Mach or boundary-layer conclusion is inferred. No defect found.


### `rem-fd-boundary-layer-low-mach-status`

Reviewed both proof steps and the actual current inviscid-limit proof, linear-acoustics proof, and scaling proposition. The periodic inviscid theorem has no wall boundary, and its error bound is only on a common smooth interval. The acoustic theorem solves the exact linear constant-coefficient tangent system with modewise energy conservation; scaling changes variables only. Thus none of these supplies a nonlinear low-Mach or finite-amplitude remainder estimate. This is a precise limitation of the listed results, not a claim that such theorems are unknown in the literature. No empirical measurement or acceptance of a fluid model is inferred. No defect found.

## Evidence and scope

Read the generated order task, batch-19 scope, reader report and findings, refuter JSON report, pre/post snapshots, current owning proof contracts and cross-batch dependency records. `touched`, `pages_touched`, `reader_findings`, `refuter_findings` and `flagged` are empty. The pre/post item, contract and manifest fingerprint maps are identical. A fresh raw SHA-256 comparison of all 15 current batch item carriers against the post snapshot reports no mismatch. Contract hashes subsequently change solely because this dispatch adds the required risk-review records; the engine owns new decision hashes.

The local review used the actual current item files named in the eleven entries above, plus `lem-fd-torus-mean-zero-poincare`, `thm-fd-smooth-vorticity-identities`, the complete incompressible and polytropic IVP proofs, the given-solutions difference-energy proof, the complete linear-acoustics proof, and the definitions of Fourier Sobolev spaces, Leray/pressure maps, polytropic variables, wall/exterior domains and Countable Choice. The published C1-domain and surface-integral definitions and divergence-theorem Statement were checked for the wall argument. Parseval's exact published Statement was checked with the unit-to-2pi torus normalization. This was a review of the assigned deductions and their actual supplier uses, not an audit of the transitive published mathematics library. Current cross-batch readiness prose was treated as historical authoring context, never as proof acceptance.

Both `fd-s03` and `fd-s03-examples` remain draft, frontmatter-only carriers with `page_layout: compact-v1` and their existing inventories. No assigned risk carrier contains TikZ/tikzcd, and these estimates require no diagram. Statements/Remark formulations inspected here are uninterrupted by hyperlinks; their references follow in separate sections. No item, page, statement, physical scope, import, published supplier or dependency edge changed. No affected-consumer propagation, proposed withdrawal or published-defect record is required.

## Sources and reading limits

The conditional local arguments, rather than a cited textbook theorem with different hypotheses, establish the reviewed claims. The following primary texts were retrieved and relevant excerpts read during this dispatch:

- [Kuksin and Shirikyan, *Mathematics of Two-Dimensional Turbulence*](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf), Chapter 2: Exercise 2.1.14, equation (2.39), and mean preservation (printed pp. 45–46; PDF pages 57–58 counting from one), and the opening of §2.1.6/Lemma 2.1.16 (printed p. 47; PDF page 59). These provide contextual energy/vorticity material. The local logarithmic estimate and commutator are separate proved lattice arguments, not quoted conclusions of Theorem 2.1.18. Section locators control where older metadata's PDF/printed pagination differs.
- [Tong, Navier–Stokes chapter](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf), §3.1.2 heading and §3.5 introduction through equation (3.35), printed pp. 94–96 (PDF pages 40–42), on the special role of walls at small viscosity. Only the introductory boundary discussion was needed; the later boundary-layer calculations were not reconstructed or adopted as local theorems.
- [Tong, Waves chapter](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf), §4.4.4, equations (4.67)–(4.75), printed pp. 150–153 (PDF pages 40–43): linearization about a constant stationary state, sound speed, dispersion and longitudinal modes. The local theorem expressly solves only the exact tangent system.
- [Hou lecture collection](https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf), “Dynamic stability of 3D Navier–Stokes equations,” equations (3.1)–(3.2), PDF page 100: strong-solution energy and vorticity identities. Its stretching term belongs to the 3D context; the local global theorem uses the separately derived two-dimensional cancellation.
- [Golse, *The Boltzmann Equation and Its Hydrodynamic Limits*](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf), §7.4, equation (7.2) and Theorems 7.8–7.9, printed/PDF pp. 85–86. This is compressible-Euler context with its own full-gas/whole-space hypotheses; it is not substituted for the local periodic positive-density polytropic Galerkin proof.

No claim is made to have read these books in full, reconstructed their full proofs, or newly checked the unrelated CMI status remark. No measured input, observed dataset or statistical inference is used in these mathematical results.

## Local checks and disposition

- Initial required risk command: `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-19.proof-contracts.json` — exit 0; 15 routed items, eleven HIGH/CRITICAL records requiring review.
- Final required command with `--require-reviewed` — exit 0; `risk-report: 0 error(s), 15 item(s) routed`; all eleven records have complete, item-specific notes.
- Pre/post fingerprint-map comparison: equal; current raw item comparison: 15 checked, zero mismatches.
- Decisions JSON uses version 1, run `fluid-dynamics-all-47-2026-10-23`, group `batch-19`, and exactly zero decisions, matching the zero owed obligations.

Only risk-review metadata and the task-authorized report/decisions/dependency-ledger note were written. No item was edited, so no item reflow, precheck or post-edit proof-layout command was needed. No judge, stamping, certification, gate battery or stage transition was initiated. No confirmed defect or unresolved prerequisite was found in this assigned review; no defect-ledger row was created. The engine retains its ordinary gates and acceptance duties.
