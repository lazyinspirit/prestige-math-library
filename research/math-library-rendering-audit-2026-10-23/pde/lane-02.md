# PDE visual audit — lane 02

## Scope and coverage

Audited all 95 assigned items from their frozen title and complete ItemBody snapshots. Individually opened all 181 receipt-listed revision-2 screenshot tiles using `tools.view_image(detail="original")`. The JSON ledger records each checked section, frozen snapshot and hash, and each tile’s receipt hash, PNG dimensions and original-resolution attestation.

Coverage is 94 clean items and 1 item with a confirmed finding. Receipt review found no KaTeX errors, TikZ captures, or diagram failures. No apparent clipping or horizontal overflow required a separate DOM/pixel diagnostic.

## Confirmed finding

- **Unformatted Sobolev notation in the title:** `lem-zero-extension-from-w-one-p-zero`, frozen snapshot line 4. The title renders `W_0^{1,p}` literally, including its underscores, braces and caret. Suggested repair: `$W_0^{1,p}$`. Tile evidence: `screenshots/lem-zero-extension-from-w-one-p-zero--01.png` (SHA-256 `60f983bab9d315c095b10228c547e3163fc240a174bef4f4ee50765bca244533`).

## Editorial diagram proposals

These are uncertain, source-supported proposals rather than rendering defects. The complete claim and concrete maps/relations are recorded in `lane-02.json`.

- `def-linear-transport-equation-and-its-characteristic-flow`, lines 38–49: show characteristic space-time curves and the fixed-time flow map.
- `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms`, lines 28–32: show the graph domain, half-box, shear map, region correspondence, and transformed principal matrix.
- `ex-two-dimensional-pulse-has-a-tail-inside-the-cone`, lines 31–42: show the support ball inside the expanding disk/cone and the positive centre value after the front has passed.
- `thm-riemann-solver-for-strictly-convex-scalar-flux`, lines 43–51: compare the shock ray with the rarefaction wedge and label their speeds/states.

No other high-likelihood missing diagram was identified after reviewing each source and screenshot.

## Item and tile ledger

Each tile was viewed individually at original resolution. Tile dimensions below are the stored PNG dimensions; the hash is checked against its screenshot receipt.

| Item | Review status | Frozen title | Tile count |
|---|---|---|---:|
| `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity` | clean | A coercive functional need not attain without weak lower semicontinuity | 2 |
| `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero` | clean | An analytic semigroup need not be norm continuous at zero | 2 |
| `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates` | clean | Bounded measurable coefficients do not give Schauder estimates | 2 |
| `cex-critical-trace-compactness-fails-by-tangential-dilation` | clean | Critical traces fail compactness under boundary dilation | 2 |
| `cex-final-time-face-is-not-part-of-the-parabolic-boundary` | clean | The final-time face is not part of the parabolic boundary | 2 |
| `cex-harnack-requires-nonnegativity` | clean | The Harnack inequality requires nonnegativity | 2 |
| `cex-liouville-needs-one-sided-boundedness` | clean | Liouville needs one sided boundedness | 1 |
| `cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity` | clean | A nonconvex gradient energy can lose weak lower semicontinuity | 2 |
| `cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump` | clean | The disc Poisson integral can miss the assigned value at a jump | 1 |
| `cex-sector-angle-changes-under-the-sign-convention` | clean | The sector changes under the sign convention | 2 |
| `cex-threefold-classification-is-not-global` | clean | The elliptic-parabolic-hyperbolic trichotomy is not a global taxonomy | 1 |
| `cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity` | clean | Weak maximum principle needs boundedness or control at infinity | 1 |
| `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo` | clean | A bounded map into $H^1_0$ yields a compact $L^2$ operator | 1 |
| `cor-contraction-hille-yosida-theorem` | clean | Contraction Hille-Yosida theorem | 2 |
| `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal` | clean | Spatial smoothing of forcing separated from the observation time | 2 |
| `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` | clean | Inhomogeneous Dirichlet data reduce to zero trace | 2 |
| `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` | clean | Sobolev maxima and minima form a lattice | 4 |
| `cor-poincare-wirtinger-on-convex-domains` | clean | Poincare-Wirtinger on bounded convex domains by the direct pairwise argument | 3 |
| `cor-smooth-data-give-smooth-interior-solutions` | clean | Smooth data give smooth interior solutions | 2 |
| `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` | clean | Subcritical compactness for $W^{1,p}_0$ on arbitrary bounded open sets | 2 |
| `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions` | clean | Uniqueness and sup-norm contraction for the Cauchy problem | 2 |
| `def-bessel-potential-pre-hilbert-norm-on-schwartz-space` | clean | Weighted Fourier candidate norm on Schwartz space | 1 |
| `def-closed-sectorial-form-and-its-associated-operator` | clean | Closed sectorial form and its associated operator | 2 |
| `def-distributional-harmonicity-and-poisson-equation-in-rn` | clean | Distributional harmonicity and Poisson's equation on an open subset of Rn | 1 |
| `def-fundamental-solution-of-a-constant-coefficient-operator` | clean | Fundamental solution of a constant-coefficient operator | 2 |
| `def-holder-spaces-c-k-alpha-and-their-scaled-norms` | clean | Hölder spaces $C^{k,\alpha}$, closure and interior scaled norms, and $C^{k,\alpha}$ domains | 2 |
| `def-linear-transport-equation-and-its-characteristic-flow` | clean | Linear transport equations and their characteristic flow | 1 |
| `def-poisson-kernel-from-a-green-function` | clean | Poisson kernel from a Dirichlet Green function | 3 |
| `def-semilinear-and-quasilinear-first-order-cauchy-problems` | clean | Semilinear and quasilinear first-order Cauchy problems on a parametrised hypersurface | 1 |
| `def-surface-integral-on-a-compact-c-one-hypersurface` | clean | Surface integration on compact C1 hypersurfaces | 1 |
| `def-weak-dirichlet-solution-for-a-divergence-form-operator` | clean | Weak Dirichlet solutions for a divergence-form operator | 1 |
| `ex-affine-flux-reduces-the-entropy-semigroup-to-translation` | clean | Affine flux reduces the entropy semigroup to translation | 2 |
| `ex-cauchy-kovalevskaya-for-an-analytic-transport-equation` | clean | Analytic transport data | 1 |
| `ex-dirichlet-heat-semigroup-from-the-laplacian` | clean | The Dirichlet Laplacian generates the heat semigroup | 4 |
| `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory` | clean | The essential supremum precedes the Holder representative in De Giorgi theory | 2 |
| `ex-harnack-constant-from-the-poisson-kernel-ratio` | clean | Harnack constant from the Poisson kernel ratio under Countable Choice | 1 |
| `ex-isoperimetric-integral-constraint-and-its-multiplier` | clean | An integral constraint and its constant multiplier | 3 |
| `ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense` | clean | The negative absolute value solves the eikonal equation in the viscosity sense | 2 |
| `ex-one-dimensional-green-function-on-an-interval` | clean | One-dimensional Dirichlet Green kernel on an interval | 3 |
| `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` | clean | Poisson's equation with $L^2$ data gains two interior derivatives | 2 |
| `ex-rayleigh-quotient-on-an-interval` | clean | The Rayleigh quotient on an interval | 2 |
| `ex-schauder-scaling-on-a-quadratic-poisson-solution` | clean | The Schauder estimate on a quadratic Poisson solution: radius powers balance | 2 |
| `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint` | clean | Strong $L^2$ convergence preserves an $L^2$-normalisation constraint | 1 |
| `ex-two-dimensional-pulse-has-a-tail-inside-the-cone` | clean | A two-dimensional pulse has a tail inside the cone | 2 |
| `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval` | clean | A semigroup with continuity at zero is uniformly bounded on every compact time interval | 2 |
| `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form` | clean | Subtracting analytic Cauchy jets | 1 |
| `lem-banach-valued-cauchy-theorem-on-star-shaped-domains` | clean | Primitive and Cauchy theorem for Banach-valued holomorphic maps on star-shaped domains | 2 |
| `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms` | clean | $C^{2,\alpha}$ boundary flattening preserves the nondivergence structure, ellipticity and Hölder norms | 3 |
| `lem-charpit-contact-compatibility-is-preserved` | clean | Charpit contact compatibility is preserved | 1 |
| `lem-coercivity-makes-a-small-form-step-a-contraction` | clean | Coercivity makes a small form step a strict contraction | 2 |
| `lem-cutoff-commutator-for-local-w-two-p-estimates` | clean | The cutoff commutator in the local $W^{2,p}$ estimates | 2 |
| `lem-distributional-derivatives-commute-with-convolution-against-test-functions` | clean | Distributional derivatives commute with test-function convolution | 1 |
| `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` | clean | A nondegenerate stationary envelope solves the Hamilton–Jacobi equation | 1 |
| `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` | clean | A finite-valued convex Hamiltonian equals its biconjugate | 3 |
| `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` | clean | Fundamental theorem of calculus for Banach-valued continuous curves | 2 |
| `lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data` | clean | Heat generator at zero on compactly supported smooth data | 2 |
| `lem-interior-w-two-p-regularity-for-the-laplacian` | clean | Local $W^{2,p}$ regularity of weak solutions of the Poisson equation | 3 |
| `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups` | clean | Laplace uniqueness identifies two exponentially bounded semigroups | 2 |
| `lem-ltwo-normalisation-of-sine-modes-on-the-interval` | clean | L2 normalisation of the sine modes on an interval | 2 |
| `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` | clean | Bounded compact data give an everywhere finite Newtonian potential | 4 |
| `lem-one-dimensional-wave-operator-factorisation` | clean | Factorisation of the one-dimensional wave operator | 1 |
| `lem-radial-derivative-expansion-of-the-epd-transform` | clean | Radial-derivative expansion of the Euler–Poisson–Darboux transform and its zero-radius limit | 2 |
| `lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity` | clean | Resolvent identity for closed operators | 1 |
| `lem-sobolev-level-set-iteration-step` | clean | Sobolev level-set step: energy decay with explicit level gap and radius loss | 2 |
| `lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation` | clean | Strictification of a viscosity test function by a quartic perturbation | 2 |
| `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` | clean | Tangential $H^2$ estimate near a flat Dirichlet boundary | 2 |
| `lem-transport-equation-along-a-characteristic` | clean | A transport equation restricts to a linear ODE along each characteristic | 1 |
| `lem-viscous-scalar-laws-contract-spatial-translates-in-lone` | clean | Viscous solutions contract spatial translates in L-one | 2 |
| `lem-weak-leibniz-rule-with-a-smooth-factor` | clean | Weak Leibniz rule with a smooth factor | 2 |
| `lem-zero-extension-from-w-one-p-zero` | findings | Zero extension of W_0^{1,p} has no boundary derivative | 2 |
| `rem-backward-ill-posed-does-not-mean-universal-nonexistence` | clean | Backward ill-posedness does not mean universal nonexistence | 1 |
| `rem-finite-propagation-is-not-huygens-principle` | clean | Finite propagation is not the Huygens principle | 1 |
| `rem-pointwise-and-integral-constraints-have-different-regularity-tests` | clean | Pointwise and integral constraints have different regularity tests | 1 |
| `rem-value-functions-and-hamilton-jacobi-bellman-equations` | clean | Value functions and the Hamilton--Jacobi--Bellman equation: orientation only | 1 |
| `thm-boundary-schauder-estimate-for-the-dirichlet-problem` | clean | Boundary Schauder estimate for the Dirichlet problem | 3 |
| `thm-comparison-principle-for-classical-subharmonic-functions` | clean | Comparison principle for classical subharmonic functions | 1 |
| `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` | clean | Far-field asymptotics of compact-source Newtonian potentials | 3 |
| `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` | clean | Divergence for finite piecewise C1 presentations | 2 |
| `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` | clean | Every $H^{-1}$ functional is an $L^2$ function plus a divergence | 2 |
| `thm-first-variation-vanishes-at-an-interior-minimiser` | clean | The first variation vanishes at an interior minimiser | 1 |
| `thm-generators-are-closed-and-densely-defined` | clean | The generator is closed and densely defined | 2 |
| `thm-half-space-lift-by-normal-mollification` | clean | A bounded right inverse of the half-space trace by normal mollification | 2 |
| `thm-higher-order-boundary-regularity-for-dirichlet-problems` | clean | Higher-order boundary regularity for Dirichlet problems | 3 |
| `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` | clean | The Hopf--Lax formula solves the Hamilton--Jacobi Cauchy problem | 2 |
| `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` | clean | Interior $W^{2,p}$ estimate for uniformly elliptic equations with continuous coefficients | 2 |
| `thm-liouville-theorem-for-bounded-harmonic-functions` | clean | Liouville theorem for bounded harmonic functions | 1 |
| `thm-lumer-phillips-generation-theorem` | clean | Lumer-Phillips generation theorem | 2 |
| `thm-odd-dimensional-wave-formula-by-spherical-means` | clean | The odd-dimensional wave formula by iterated spherical means | 2 |
| `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` | clean | Poisson kernel and bounded Dirichlet problem on a half-space | 4 |
| `thm-riemann-solver-for-strictly-convex-scalar-flux` | clean | The Riemann solver for a strictly convex flux | 3 |
| `thm-sobolev-poincare-on-bounded-connected-extension-domains` | clean | Sobolev-Poincare on bounded connected extension domains | 2 |
| `thm-strong-maximum-principle-for-harmonic-functions` | clean | Strong maximum principle for harmonic functions | 2 |
| `thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing` | clean | Uniqueness of a classical quasilinear solution before characteristic crossing | 1 |
| `thm-weak-euler-lagrange-equation-for-integral-functionals` | clean | The weak Euler-Lagrange equation for integral functionals with fixed trace | 2 |
| `thm-wkp-extension-from-a-half-space` | clean | Integer-order Sobolev extension from a half-space | 3 |

### Per-tile attestations

| Item | Tile path | SHA-256 | Dimensions | Individual original-resolution view |
|---|---|---|---:|---|
| `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity` | `screenshots/cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity--01.png` | `efeabeefab92c801c98d4933b1a597bdf5c261457b34db04a7449741a4b4e358` | 1200×1400 | yes (`detail=original`) |
| `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity` | `screenshots/cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity--02.png` | `e78ea70252e5eaf14ad8163b9fd27e21ebb213a9d7495108e6dc67c19b61e5b2` | 1200×699 | yes (`detail=original`) |
| `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero` | `screenshots/cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero--01.png` | `2adb7061acdcc0a9c88a8d54f54a55eb8bc508ac576044d345f0d5ac105e2176` | 1200×1400 | yes (`detail=original`) |
| `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero` | `screenshots/cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero--02.png` | `e8c378c28f174de5b74eaa45663835974084dbcdceed2de1bac376b5838a54ed` | 1200×917 | yes (`detail=original`) |
| `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates` | `screenshots/cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates--01.png` | `6807164b8f3fbbf55468e429472d589e649e7d8c69e87d492179a2d475a7c94a` | 1200×1400 | yes (`detail=original`) |
| `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates` | `screenshots/cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates--02.png` | `f5802ddba58b4fe9cda70bcf70bb1b17d9d4cba7983d36dcc0011f57eed8b1dc` | 1200×279 | yes (`detail=original`) |
| `cex-critical-trace-compactness-fails-by-tangential-dilation` | `screenshots/cex-critical-trace-compactness-fails-by-tangential-dilation--01.png` | `4a1404335d790146623de26533a84a675fe713eca1964f29b8dc216d7e65bea9` | 1200×1400 | yes (`detail=original`) |
| `cex-critical-trace-compactness-fails-by-tangential-dilation` | `screenshots/cex-critical-trace-compactness-fails-by-tangential-dilation--02.png` | `41cad4bb4008c92140f1d8cb79b02f1c44e1a3fe8f1be5c2598f019a00da5267` | 1200×676 | yes (`detail=original`) |
| `cex-final-time-face-is-not-part-of-the-parabolic-boundary` | `screenshots/cex-final-time-face-is-not-part-of-the-parabolic-boundary--01.png` | `30a67420717745f0f6c40ba3a9d2dd4f161c5ad3c61b261042a27b6939d6e6e0` | 1200×1400 | yes (`detail=original`) |
| `cex-final-time-face-is-not-part-of-the-parabolic-boundary` | `screenshots/cex-final-time-face-is-not-part-of-the-parabolic-boundary--02.png` | `b801e8ceed95f2c189aed4b1d45c0b1e154369fa02b7dc2c5e7064d21c33e179` | 1200×821 | yes (`detail=original`) |
| `cex-harnack-requires-nonnegativity` | `screenshots/cex-harnack-requires-nonnegativity--01.png` | `b95f8da4cb18f863f21173d6ff5f6b8c62ee14b552486f1219709707a93053bb` | 1200×1400 | yes (`detail=original`) |
| `cex-harnack-requires-nonnegativity` | `screenshots/cex-harnack-requires-nonnegativity--02.png` | `840d96432b3987dbe6b660dfa394dcc583c7f9b87a51053d3fcdcf93322ba43b` | 1200×186 | yes (`detail=original`) |
| `cex-liouville-needs-one-sided-boundedness` | `screenshots/cex-liouville-needs-one-sided-boundedness--01.png` | `07f0571362f587c1c88e5bb57d15ac853792c8a4a652eaa2d1ec12ee1366db2d` | 1200×1400 | yes (`detail=original`) |
| `cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity` | `screenshots/cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity--01.png` | `c4fbabdc0ab58495ae825a71041bc111fb7ae3b37fcf7fbd17c8020f73f132f7` | 1200×1400 | yes (`detail=original`) |
| `cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity` | `screenshots/cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity--02.png` | `6a1375cbee4f309e0234c09862e3f1af22feaf78c51192f2cb29eaa09338def3` | 1200×1186 | yes (`detail=original`) |
| `cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump` | `screenshots/cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump--01.png` | `b7602813745b1c83ccd40756989c2dcea2eb6fb2ae49d77d8209e4a69d100adb` | 1200×1400 | yes (`detail=original`) |
| `cex-sector-angle-changes-under-the-sign-convention` | `screenshots/cex-sector-angle-changes-under-the-sign-convention--01.png` | `c86c09a9774106e1eaacb81daaaaaf56fb793e12ad94388ded8222851cefc6ff` | 1200×1400 | yes (`detail=original`) |
| `cex-sector-angle-changes-under-the-sign-convention` | `screenshots/cex-sector-angle-changes-under-the-sign-convention--02.png` | `e22a010c5fde506908a08399d588eed165445fea0f27abb05bb4f0cdc164618c` | 1200×759 | yes (`detail=original`) |
| `cex-threefold-classification-is-not-global` | `screenshots/cex-threefold-classification-is-not-global--01.png` | `5f984e01675edb01107d828c26164cfea8746a9bc1a689cdeb9db2e74757ef53` | 1200×1400 | yes (`detail=original`) |
| `cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity` | `screenshots/cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity--01.png` | `59b8daddf234a4b9a54cdfe02130d72ccff2bd72c8e515f59ac70e5d27f67d41` | 1200×1400 | yes (`detail=original`) |
| `cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo` | `screenshots/cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo--01.png` | `41e1b93695c12cd5c715e20d1a08c42948c9caf031832da06eca2946b8ec0b1a` | 1200×1400 | yes (`detail=original`) |
| `cor-contraction-hille-yosida-theorem` | `screenshots/cor-contraction-hille-yosida-theorem--01.png` | `8ac307a569adafe29e6e367148a6ef89209af7f8fd7f82210f9c96e90d5af446` | 1200×1400 | yes (`detail=original`) |
| `cor-contraction-hille-yosida-theorem` | `screenshots/cor-contraction-hille-yosida-theorem--02.png` | `e08b8e66cae8abb2d73bf8b1f85bef2a9625988fddd25f05cc407dfc67dd8899` | 1200×448 | yes (`detail=original`) |
| `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal` | `screenshots/cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal--01.png` | `d77f2f716423bbb06f967e6184c7b32688ad7b02484b7c233cf5b9e963e097b3` | 1200×1400 | yes (`detail=original`) |
| `cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal` | `screenshots/cor-forced-heat-solutions-are-smooth-away-from-the-source-time-diagonal--02.png` | `6d6a7b43a77d031e78ccb3420799974a2ed1be1bcf9399f3d88b16b20a4ebf23` | 1200×454 | yes (`detail=original`) |
| `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` | `screenshots/cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace--01.png` | `bead0acf7fb28edc9c87f009d7810d1db0dafb8cacf5fe6b9cecbce6fb3335dd` | 1200×1400 | yes (`detail=original`) |
| `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` | `screenshots/cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace--02.png` | `766ae7a58a437ce17b07f7316a652ac9d7eebab9285b592fba24cb592f4b81ea` | 1200×106 | yes (`detail=original`) |
| `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` | `screenshots/cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p--01.png` | `a9be94ff96ee395646d5776290d0e0f6a1b803a0f5f6277207d4407108ae3f29` | 1200×1400 | yes (`detail=original`) |
| `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` | `screenshots/cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p--02.png` | `2bf3ef9ce02a71a7e8d8061e33811442bc7a34d5cc979a3d62af54f527325124` | 1200×1400 | yes (`detail=original`) |
| `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` | `screenshots/cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p--03.png` | `9d9eac0b6ceb8102b68105aaaef9fc84106c3a6761bb4d511d1933df473d6752` | 1200×1400 | yes (`detail=original`) |
| `cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p` | `screenshots/cor-maxima-and-minima-of-two-w-one-p-functions-are-w-one-p--04.png` | `9851540ade11ff4d72443e8ea5cb5571a504389cbba1ab01c3f658ff4e1f9522` | 1200×454 | yes (`detail=original`) |
| `cor-poincare-wirtinger-on-convex-domains` | `screenshots/cor-poincare-wirtinger-on-convex-domains--01.png` | `5a6cb9a9294341eb25a1fb13012f90055c2dc5f13dda7509105478f31a6d680d` | 1200×1400 | yes (`detail=original`) |
| `cor-poincare-wirtinger-on-convex-domains` | `screenshots/cor-poincare-wirtinger-on-convex-domains--02.png` | `a98be6017d1f09bcf8bb6925cbce19711b42879177e5e86f34a8934b989e9629` | 1200×1400 | yes (`detail=original`) |
| `cor-poincare-wirtinger-on-convex-domains` | `screenshots/cor-poincare-wirtinger-on-convex-domains--03.png` | `b82a7df883abe0621ad318f417e7baf9bc5c34c5250ee88a099849012fbb510b` | 1200×750 | yes (`detail=original`) |
| `cor-smooth-data-give-smooth-interior-solutions` | `screenshots/cor-smooth-data-give-smooth-interior-solutions--01.png` | `3463ddff41e3c23d7ef5b3f769298de75182461f585511f5d60322b1bdcc7d43` | 1200×1400 | yes (`detail=original`) |
| `cor-smooth-data-give-smooth-interior-solutions` | `screenshots/cor-smooth-data-give-smooth-interior-solutions--02.png` | `dafe33e40e97b6f30fcbc27c283dbfd9997d0430bdcd31feaa08ae56adc15fec` | 1200×850 | yes (`detail=original`) |
| `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` | `screenshots/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets--01.png` | `fc192712f0c44aee9372ece43ef8b5186143a647a5fc429a976ed354067f4b45` | 1200×1400 | yes (`detail=original`) |
| `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets` | `screenshots/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets--02.png` | `6d7ef6a0a4a322b0eb08f429a3e442fafbeb7ea15325b76e088fdd86326d5a24` | 1200×812 | yes (`detail=original`) |
| `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions` | `screenshots/cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions--01.png` | `2392e098e39bc3267743b3ee174104c5f6d71df86c7486162a24c154dfdfe86b` | 1200×1400 | yes (`detail=original`) |
| `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions` | `screenshots/cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions--02.png` | `caec3b5111b1d272b46dc14606863d4fdd3b8498facb66d5ca1167a575dbfaca` | 1200×496 | yes (`detail=original`) |
| `def-bessel-potential-pre-hilbert-norm-on-schwartz-space` | `screenshots/def-bessel-potential-pre-hilbert-norm-on-schwartz-space--01.png` | `9ab1e97268d4b3f5287a28d189601e9ce09d20d0028f5ba2b22f9cd567a1a36a` | 1200×1400 | yes (`detail=original`) |
| `def-closed-sectorial-form-and-its-associated-operator` | `screenshots/def-closed-sectorial-form-and-its-associated-operator--01.png` | `bb1f3c73293993dbe31cf8d287a2ff456196501e97e1546fc11992c92492f30b` | 1200×1400 | yes (`detail=original`) |
| `def-closed-sectorial-form-and-its-associated-operator` | `screenshots/def-closed-sectorial-form-and-its-associated-operator--02.png` | `4e9ba512674ed04139c91f77c333727f376efd497ea486ac97d9831e68cef076` | 1200×405 | yes (`detail=original`) |
| `def-distributional-harmonicity-and-poisson-equation-in-rn` | `screenshots/def-distributional-harmonicity-and-poisson-equation-in-rn--01.png` | `e91e9ff4d50eb92548eba99a2d769a02e2dee1f94434965c343e0624c9645fd7` | 1200×1400 | yes (`detail=original`) |
| `def-fundamental-solution-of-a-constant-coefficient-operator` | `screenshots/def-fundamental-solution-of-a-constant-coefficient-operator--01.png` | `297212867c260de612088d329c2eae0e9d01c4a959c1341bf209cf84776a2a0d` | 1200×1400 | yes (`detail=original`) |
| `def-fundamental-solution-of-a-constant-coefficient-operator` | `screenshots/def-fundamental-solution-of-a-constant-coefficient-operator--02.png` | `a3c3e300023846d4ab87e72cd829a36ef7003f0c78e7126599d969e177dff54b` | 1200×354 | yes (`detail=original`) |
| `def-holder-spaces-c-k-alpha-and-their-scaled-norms` | `screenshots/def-holder-spaces-c-k-alpha-and-their-scaled-norms--01.png` | `ea7ef07d2d0b6d9de972993ad33ec0e47c098b0fc64690889a32230af10d7208` | 1200×1400 | yes (`detail=original`) |
| `def-holder-spaces-c-k-alpha-and-their-scaled-norms` | `screenshots/def-holder-spaces-c-k-alpha-and-their-scaled-norms--02.png` | `00b236512e6ab0bf3c55393d6599303fd59cba506b28e9400f3620cec0cf7ee4` | 1200×377 | yes (`detail=original`) |
| `def-linear-transport-equation-and-its-characteristic-flow` | `screenshots/def-linear-transport-equation-and-its-characteristic-flow--01.png` | `f23d515bef3a861a54376dfb8a378909244ebb44fe73ad1dc98b03adddf5a5ad` | 1200×1400 | yes (`detail=original`) |
| `def-poisson-kernel-from-a-green-function` | `screenshots/def-poisson-kernel-from-a-green-function--01.png` | `2e543e41d1d6005d45c2fb6aeee7c5e69faa27a893f67da7daf7822f5871bf01` | 1200×1400 | yes (`detail=original`) |
| `def-poisson-kernel-from-a-green-function` | `screenshots/def-poisson-kernel-from-a-green-function--02.png` | `0670aab0e58d5090c0b29ee8793577b1b8dffaf7e22fdd9098b595ae58454785` | 1200×1400 | yes (`detail=original`) |
| `def-poisson-kernel-from-a-green-function` | `screenshots/def-poisson-kernel-from-a-green-function--03.png` | `1d1a16f2980daf5f5871454529f22d094748f9ef681b7561f28b7a5c61811cec` | 1200×534 | yes (`detail=original`) |
| `def-semilinear-and-quasilinear-first-order-cauchy-problems` | `screenshots/def-semilinear-and-quasilinear-first-order-cauchy-problems--01.png` | `ccbb6bf2a0ef7aa8fb9a3b1601dd0a928c3597f23584f184785d94184f9444e8` | 1200×1400 | yes (`detail=original`) |
| `def-surface-integral-on-a-compact-c-one-hypersurface` | `screenshots/def-surface-integral-on-a-compact-c-one-hypersurface--01.png` | `16f1e08cb534ad1ad021a6a1287440f629369f8a30ede83198e5402dc6a60da3` | 1200×1400 | yes (`detail=original`) |
| `def-weak-dirichlet-solution-for-a-divergence-form-operator` | `screenshots/def-weak-dirichlet-solution-for-a-divergence-form-operator--01.png` | `4d267e92009e1483417727244ad15aa316fec93fcbbec7354cf32ef607dce665` | 1200×1400 | yes (`detail=original`) |
| `ex-affine-flux-reduces-the-entropy-semigroup-to-translation` | `screenshots/ex-affine-flux-reduces-the-entropy-semigroup-to-translation--01.png` | `e6de0795ce9b0e740635e2dc1b021388250c4d390d44c69dc5509c68e5842526` | 1200×1400 | yes (`detail=original`) |
| `ex-affine-flux-reduces-the-entropy-semigroup-to-translation` | `screenshots/ex-affine-flux-reduces-the-entropy-semigroup-to-translation--02.png` | `1baa6b1c7275608b476722ebc1dcbe43bb3045900d16017ad536d559fc6d679c` | 1200×1223 | yes (`detail=original`) |
| `ex-cauchy-kovalevskaya-for-an-analytic-transport-equation` | `screenshots/ex-cauchy-kovalevskaya-for-an-analytic-transport-equation--01.png` | `36d096dae1abf02b50c601a9e5b0202611a77b69cd120bf957c28e80aaa826b6` | 1200×1400 | yes (`detail=original`) |
| `ex-dirichlet-heat-semigroup-from-the-laplacian` | `screenshots/ex-dirichlet-heat-semigroup-from-the-laplacian--01.png` | `e5a5bb86fb1a0b725a3efc676a736431a6424bd42afe5606c1ed574291617f32` | 1200×1400 | yes (`detail=original`) |
| `ex-dirichlet-heat-semigroup-from-the-laplacian` | `screenshots/ex-dirichlet-heat-semigroup-from-the-laplacian--02.png` | `e233d095953d41acb28e67d2897ea8a9df371b39e411ee7cf08a734a1c86f2f5` | 1200×1400 | yes (`detail=original`) |
| `ex-dirichlet-heat-semigroup-from-the-laplacian` | `screenshots/ex-dirichlet-heat-semigroup-from-the-laplacian--03.png` | `079e1756579a6199fa843a940ba14f8df5cf129291f9db6af920c9a120368507` | 1200×1400 | yes (`detail=original`) |
| `ex-dirichlet-heat-semigroup-from-the-laplacian` | `screenshots/ex-dirichlet-heat-semigroup-from-the-laplacian--04.png` | `1b1c453fc0cfec5b3d1755b9d0c63a918103473a72b523281c4952ab84a22f98` | 1200×602 | yes (`detail=original`) |
| `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory` | `screenshots/ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory--01.png` | `0e723552ab6be6d5e963f41e5b223a528e80d841cc1d221fac218a5a7e1a19aa` | 1200×1400 | yes (`detail=original`) |
| `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory` | `screenshots/ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory--02.png` | `f8edf95509b2b7bf07abd0e9a833ec04a756ae48422caf28be8a06ea5ec52010` | 1200×757 | yes (`detail=original`) |
| `ex-harnack-constant-from-the-poisson-kernel-ratio` | `screenshots/ex-harnack-constant-from-the-poisson-kernel-ratio--01.png` | `0cf12f3a7f1fefb0c70d62451c86844538a835ee71f0c8b2fbb40ef43a603c49` | 1200×1400 | yes (`detail=original`) |
| `ex-isoperimetric-integral-constraint-and-its-multiplier` | `screenshots/ex-isoperimetric-integral-constraint-and-its-multiplier--01.png` | `39924efaee0ec21fac88088abf7dff267a7102b983a6f46a4159b8f6767406ca` | 1200×1400 | yes (`detail=original`) |
| `ex-isoperimetric-integral-constraint-and-its-multiplier` | `screenshots/ex-isoperimetric-integral-constraint-and-its-multiplier--02.png` | `8fea1b3762489e106acdccbc3edd26f840fd9a2d86fb6723a3f3286306f96090` | 1200×1400 | yes (`detail=original`) |
| `ex-isoperimetric-integral-constraint-and-its-multiplier` | `screenshots/ex-isoperimetric-integral-constraint-and-its-multiplier--03.png` | `3cdf689214999075d428d28a4501233e3b1c3fbf7b725b2b8624912f43685c54` | 1200×242 | yes (`detail=original`) |
| `ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense` | `screenshots/ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense--01.png` | `f0ac34861be96468e706ba8ee2787b7f3be31c57a4942056ad0b7b0c4daad7ba` | 1200×1400 | yes (`detail=original`) |
| `ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense` | `screenshots/ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense--02.png` | `65f3d772c90ce1350c12fbb9a53eeab88e38c4fa8360a126174d537688e6cfd1` | 1200×107 | yes (`detail=original`) |
| `ex-one-dimensional-green-function-on-an-interval` | `screenshots/ex-one-dimensional-green-function-on-an-interval--01.png` | `76c6bf28db4f6dc1a1087cc00f0a8dfaf36aae9023fc4cfd80fcdf566dc384d6` | 1200×1400 | yes (`detail=original`) |
| `ex-one-dimensional-green-function-on-an-interval` | `screenshots/ex-one-dimensional-green-function-on-an-interval--02.png` | `db25b79f7ab964570782dcc1f32843ae9107ca18b8f0afd8e70445daed9aca9d` | 1200×1400 | yes (`detail=original`) |
| `ex-one-dimensional-green-function-on-an-interval` | `screenshots/ex-one-dimensional-green-function-on-an-interval--03.png` | `a1a9f7e853441c58bfbf91da2ec0700b7c6036f86655d191157ba409b28f73c6` | 1200×1047 | yes (`detail=original`) |
| `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` | `screenshots/ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives--01.png` | `9011a446405ff2444e4af8b6ef21a7323f172cb14c3191a847760341f4661440` | 1200×1400 | yes (`detail=original`) |
| `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` | `screenshots/ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives--02.png` | `e570acb3f5b0dc4ade5c02c1c1c82a4b9e577d4249e83212ed59506a6e199429` | 1200×615 | yes (`detail=original`) |
| `ex-rayleigh-quotient-on-an-interval` | `screenshots/ex-rayleigh-quotient-on-an-interval--01.png` | `3c9863ceffac2b9bfbfc867ca74e6dc06f863d5f2a7f09104f190c7337296eef` | 1200×1400 | yes (`detail=original`) |
| `ex-rayleigh-quotient-on-an-interval` | `screenshots/ex-rayleigh-quotient-on-an-interval--02.png` | `ca5744aa24a415c1ffe4b4f5c901720d60f753f26bc572904497c22101cce21e` | 1200×1363 | yes (`detail=original`) |
| `ex-schauder-scaling-on-a-quadratic-poisson-solution` | `screenshots/ex-schauder-scaling-on-a-quadratic-poisson-solution--01.png` | `c7dfaa7cce58e4744d48c7a0997c69957068430dc6b2294b75c83c512904248a` | 1200×1400 | yes (`detail=original`) |
| `ex-schauder-scaling-on-a-quadratic-poisson-solution` | `screenshots/ex-schauder-scaling-on-a-quadratic-poisson-solution--02.png` | `a3c6862c9476b95f08f4a7a7faa0c16fb4a4c2af2cca592f13e2a6a6c84f3631` | 1200×722 | yes (`detail=original`) |
| `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint` | `screenshots/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint--01.png` | `47fcf00bc81657b227c52b79445871ed5f0e82e3f242013b0e3d2aaa4517edae` | 1200×1400 | yes (`detail=original`) |
| `ex-two-dimensional-pulse-has-a-tail-inside-the-cone` | `screenshots/ex-two-dimensional-pulse-has-a-tail-inside-the-cone--01.png` | `a978ac731d92c9b3f6b88763c4f3ef27819fe0dff183ac99ba970810aefb3743` | 1200×1400 | yes (`detail=original`) |
| `ex-two-dimensional-pulse-has-a-tail-inside-the-cone` | `screenshots/ex-two-dimensional-pulse-has-a-tail-inside-the-cone--02.png` | `7fe690c78662cf636223ea7403bd7fd9af5faaef60439a2120e01a3ae71c8d60` | 1200×211 | yes (`detail=original`) |
| `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval` | `screenshots/lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval--01.png` | `e05e5cc38b76c34ba398cb151e9ce2cde5c8fd7260ffdcc0514372038681096e` | 1200×1400 | yes (`detail=original`) |
| `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval` | `screenshots/lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval--02.png` | `361ee9f21c0e8b1937fd43f2d13b5be12d59a470a6c292c3402ff27195ef27f6` | 1200×409 | yes (`detail=original`) |
| `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form` | `screenshots/lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form--01.png` | `ba355099ed5a3344c059e84ef90dbb0d7e63a2f810a67cc2e110715113005dbc` | 1200×1400 | yes (`detail=original`) |
| `lem-banach-valued-cauchy-theorem-on-star-shaped-domains` | `screenshots/lem-banach-valued-cauchy-theorem-on-star-shaped-domains--01.png` | `5a39fda4b3012342b7c22ef23e70b769213a6f5cda218a42f50d37baec56498a` | 1200×1400 | yes (`detail=original`) |
| `lem-banach-valued-cauchy-theorem-on-star-shaped-domains` | `screenshots/lem-banach-valued-cauchy-theorem-on-star-shaped-domains--02.png` | `33caf67f11cb2f4698a90cfe9c61a82e0a02fe26741456f56ff9a5cd3be0b412` | 1200×921 | yes (`detail=original`) |
| `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms` | `screenshots/lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms--01.png` | `e1f150c1a7e54dcf538a302b233d1b9b22ba2bf770b9d953ec771a42efb5daa9` | 1200×1400 | yes (`detail=original`) |
| `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms` | `screenshots/lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms--02.png` | `94d0636c543560184ad7ba600f48f767e7551076658111b54389ad433917a2ca` | 1200×1400 | yes (`detail=original`) |
| `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms` | `screenshots/lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms--03.png` | `98e208756cca76cc520a215b83f98febb169d8e023770d9d617577e467ce851c` | 1200×107 | yes (`detail=original`) |
| `lem-charpit-contact-compatibility-is-preserved` | `screenshots/lem-charpit-contact-compatibility-is-preserved--01.png` | `1bfd5ea6e6e1482bb07b71d5a22f71b3345d8db5a3661678ce03de87427f8aad` | 1200×1400 | yes (`detail=original`) |
| `lem-coercivity-makes-a-small-form-step-a-contraction` | `screenshots/lem-coercivity-makes-a-small-form-step-a-contraction--01.png` | `1f16b22c5b138f423fccded3940fa1b494afc114bfa5db160e1f3caf6572433d` | 1200×1400 | yes (`detail=original`) |
| `lem-coercivity-makes-a-small-form-step-a-contraction` | `screenshots/lem-coercivity-makes-a-small-form-step-a-contraction--02.png` | `8784528d9cf7da7fbfecf9a0fa04d96f03536c80421a0579539fa4c1d02a8e3a` | 1200×371 | yes (`detail=original`) |
| `lem-cutoff-commutator-for-local-w-two-p-estimates` | `screenshots/lem-cutoff-commutator-for-local-w-two-p-estimates--01.png` | `e9e2458a65922284d2e5ed4b0ed763a625aa7ecce3bd369ac656bc94376073e0` | 1200×1400 | yes (`detail=original`) |
| `lem-cutoff-commutator-for-local-w-two-p-estimates` | `screenshots/lem-cutoff-commutator-for-local-w-two-p-estimates--02.png` | `fa1b318deb2ffb15c9c0078123af5c62a95ea58757cccbcffb3fb5848d19881d` | 1200×437 | yes (`detail=original`) |
| `lem-distributional-derivatives-commute-with-convolution-against-test-functions` | `screenshots/lem-distributional-derivatives-commute-with-convolution-against-test-functions--01.png` | `ac887ed612e1a70205ac160f5e594e805f6127ce6dfba7b4a4375b327ed9ed0e` | 1200×1400 | yes (`detail=original`) |
| `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` | `screenshots/lem-envelope-stationarity-implies-the-hamilton-jacobi-equation--01.png` | `ff5e5f55f4285b318cd0f84e1c99c038234b87c7312d32c5af30c0ff026edebb` | 1200×1400 | yes (`detail=original`) |
| `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` | `screenshots/lem-finite-valued-convex-hamiltonian-equals-its-biconjugate--01.png` | `b46604039525e7bead2f758d07a9ab50743de4bb9bff6dd8ceeb65c2f93ae3e3` | 1200×1400 | yes (`detail=original`) |
| `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` | `screenshots/lem-finite-valued-convex-hamiltonian-equals-its-biconjugate--02.png` | `27530dcce04c29fa2fd1dd1fab32500e3dd6bea48c4b13d65c63a9e8f4849937` | 1200×1400 | yes (`detail=original`) |
| `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` | `screenshots/lem-finite-valued-convex-hamiltonian-equals-its-biconjugate--03.png` | `85f78d4b62cff7a063be4a6a4d27e0b836e29ef42bd9a2a3331b95831f9b4b25` | 1200×160 | yes (`detail=original`) |
| `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` | `screenshots/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves--01.png` | `0f9fa340e1e565df660527e1d539717441c5c0aba52e2df3cbe085e7daa8c1d3` | 1200×1400 | yes (`detail=original`) |
| `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` | `screenshots/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves--02.png` | `0f5ac75252e0bec2d1d8ed51cbbea91eae1ae56223762d7aac9209bf65568f21` | 1200×558 | yes (`detail=original`) |
| `lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data` | `screenshots/lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data--01.png` | `b41ee38f814d606935a488de0def29cbf565485334504b21f338c12fc667164e` | 1200×1400 | yes (`detail=original`) |
| `lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data` | `screenshots/lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data--02.png` | `c683a31e397ae75ee1f38e5d1f248a942010e75d370182fea9bf1a2d3168fb37` | 1200×793 | yes (`detail=original`) |
| `lem-interior-w-two-p-regularity-for-the-laplacian` | `screenshots/lem-interior-w-two-p-regularity-for-the-laplacian--01.png` | `1443ac21ddb5649aea9f70c35e04c0c2bcdcb349fe0622015892865ddce1dfd3` | 1200×1400 | yes (`detail=original`) |
| `lem-interior-w-two-p-regularity-for-the-laplacian` | `screenshots/lem-interior-w-two-p-regularity-for-the-laplacian--02.png` | `f2f6b861358f09b229de4c7b8968e21408f67e7cfe5d44b70a78fea25862aab8` | 1200×1400 | yes (`detail=original`) |
| `lem-interior-w-two-p-regularity-for-the-laplacian` | `screenshots/lem-interior-w-two-p-regularity-for-the-laplacian--03.png` | `4d32169ad9ec3d0c6cf7397e99a02c405bc2a17464cf973addafdd9db0bfe5b5` | 1200×583 | yes (`detail=original`) |
| `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups` | `screenshots/lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups--01.png` | `0429024b9f64f06ee46daf95e77026b07418bdba46ee2e12fdec369de8f7823b` | 1200×1400 | yes (`detail=original`) |
| `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups` | `screenshots/lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups--02.png` | `89a8ee0f0b105662ea71dd666ddecee3e7680eb1ad5613941fedf8548d2d1da9` | 1200×604 | yes (`detail=original`) |
| `lem-ltwo-normalisation-of-sine-modes-on-the-interval` | `screenshots/lem-ltwo-normalisation-of-sine-modes-on-the-interval--01.png` | `2d9d521d29553697adbfcd19beeedac3522f546ae1ba700e2797e8a964b0c62c` | 1200×1400 | yes (`detail=original`) |
| `lem-ltwo-normalisation-of-sine-modes-on-the-interval` | `screenshots/lem-ltwo-normalisation-of-sine-modes-on-the-interval--02.png` | `42c50b67ddb770fe7bec68b9ec839d071c74b040173be81a48ab5c7ebb4b3c60` | 1200×481 | yes (`detail=original`) |
| `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` | `screenshots/lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data--01.png` | `849e4d5d881b4c3b1e1e25d63288764f37792efbd48cae2eae949ca8ffffa11d` | 1200×1400 | yes (`detail=original`) |
| `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` | `screenshots/lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data--02.png` | `ecda06946b271fd2821797eb8d2ba8db2b13eebe9b96a47ba41daf7e87eed9b6` | 1200×1400 | yes (`detail=original`) |
| `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` | `screenshots/lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data--03.png` | `8c009c40755f50dc3a8d2c9d8b2151cb46fbfe4a376fab10b83dc384ae62a6b8` | 1200×1400 | yes (`detail=original`) |
| `lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data` | `screenshots/lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data--04.png` | `878816425b91ffacef3636eb213f1e4c3f36cec0da831975609752fe6017b9a3` | 1200×445 | yes (`detail=original`) |
| `lem-one-dimensional-wave-operator-factorisation` | `screenshots/lem-one-dimensional-wave-operator-factorisation--01.png` | `4b13fac26e2fe63b21330d5b01fbf57448ae5c380186ad2e63ce4f904dfecb9b` | 1200×1400 | yes (`detail=original`) |
| `lem-radial-derivative-expansion-of-the-epd-transform` | `screenshots/lem-radial-derivative-expansion-of-the-epd-transform--01.png` | `590666e6ab03fa78f5bc7888295e9875301dca0b674894da9e3537b6cb8fc7bf` | 1200×1400 | yes (`detail=original`) |
| `lem-radial-derivative-expansion-of-the-epd-transform` | `screenshots/lem-radial-derivative-expansion-of-the-epd-transform--02.png` | `2b4ab4f37498330161f0bdcd6f1ccc6f1eaae89cfa16dfbd37ecd900352ad6e6` | 1200×247 | yes (`detail=original`) |
| `lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity` | `screenshots/lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity--01.png` | `ff5bc4fc68da2c42926a003d957985ba1aad1473c06fce943d89ed948843f915` | 1200×1400 | yes (`detail=original`) |
| `lem-sobolev-level-set-iteration-step` | `screenshots/lem-sobolev-level-set-iteration-step--01.png` | `629bd879e3c714a308e4cff1d62fa3565ed83249119aa3556cba41c62740e8ba` | 1200×1400 | yes (`detail=original`) |
| `lem-sobolev-level-set-iteration-step` | `screenshots/lem-sobolev-level-set-iteration-step--02.png` | `a084f9d88bdefde88f19393658e9bbe49812eef6fca2cd1fdc61590b8f974d41` | 1200×1390 | yes (`detail=original`) |
| `lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation` | `screenshots/lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation--01.png` | `323d70d6e89ff953988cc2d8677125f9de6d57a5637cc44cccc3876ab2ce3288` | 1200×1400 | yes (`detail=original`) |
| `lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation` | `screenshots/lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation--02.png` | `c8c851e4ec72081dfc60d0d8d41d3c212f86a17bb04e88e86a656635a4bd7f76` | 1200×289 | yes (`detail=original`) |
| `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` | `screenshots/lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary--01.png` | `6efb5502683ed7454818be1ae5e11b3f985b01b9067ff7c42da3fec2873ab93a` | 1200×1400 | yes (`detail=original`) |
| `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` | `screenshots/lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary--02.png` | `39e003b68d4a6f86fbd5706ec4ff4e411248c008df993bb52e4ec9c65fb5959f` | 1200×1345 | yes (`detail=original`) |
| `lem-transport-equation-along-a-characteristic` | `screenshots/lem-transport-equation-along-a-characteristic--01.png` | `13c09eb6bb27687e0f67eea0db855ad82c906c82b64e8c56e1a61fc498dea771` | 1200×1400 | yes (`detail=original`) |
| `lem-viscous-scalar-laws-contract-spatial-translates-in-lone` | `screenshots/lem-viscous-scalar-laws-contract-spatial-translates-in-lone--01.png` | `55c806ca4487c936a254388ae967b8b9501b6bb16d10b4dc7e4b5dcd77431f70` | 1200×1400 | yes (`detail=original`) |
| `lem-viscous-scalar-laws-contract-spatial-translates-in-lone` | `screenshots/lem-viscous-scalar-laws-contract-spatial-translates-in-lone--02.png` | `ad938f28c96aa9f280aa021f9babc99bd104df928c5697c2a460a45c567f0ee9` | 1200×976 | yes (`detail=original`) |
| `lem-weak-leibniz-rule-with-a-smooth-factor` | `screenshots/lem-weak-leibniz-rule-with-a-smooth-factor--01.png` | `dc1048bf868a678f459adab5057ae2a75465e1efc47cd89d912722fad7503285` | 1200×1400 | yes (`detail=original`) |
| `lem-weak-leibniz-rule-with-a-smooth-factor` | `screenshots/lem-weak-leibniz-rule-with-a-smooth-factor--02.png` | `047335220f3f42f9c6d0b5dd4dfa8ca063cd3ee5e2bc50d8648b1e20fb61783f` | 1200×1208 | yes (`detail=original`) |
| `lem-zero-extension-from-w-one-p-zero` | `screenshots/lem-zero-extension-from-w-one-p-zero--01.png` | `60f983bab9d315c095b10228c547e3163fc240a174bef4f4ee50765bca244533` | 1200×1400 | yes (`detail=original`) |
| `lem-zero-extension-from-w-one-p-zero` | `screenshots/lem-zero-extension-from-w-one-p-zero--02.png` | `b1fe0e93908460b313a9669bc5506098d0825fc59230fbc69d4b533499845609` | 1200×885 | yes (`detail=original`) |
| `rem-backward-ill-posed-does-not-mean-universal-nonexistence` | `screenshots/rem-backward-ill-posed-does-not-mean-universal-nonexistence--01.png` | `7c75583f1db7849b3c2981f04ce85bfb074081a3d59415ecfa94c839d85d8304` | 1200×1400 | yes (`detail=original`) |
| `rem-finite-propagation-is-not-huygens-principle` | `screenshots/rem-finite-propagation-is-not-huygens-principle--01.png` | `f620a0929bb34d722066bcc3550fb28139dd05447be4f84e279008ae93c3955f` | 1200×1400 | yes (`detail=original`) |
| `rem-pointwise-and-integral-constraints-have-different-regularity-tests` | `screenshots/rem-pointwise-and-integral-constraints-have-different-regularity-tests--01.png` | `06a3eb11d7996aa341639a3171296bc2b45cfa65c0c6d800ff7002f37bd6b1ed` | 1200×1400 | yes (`detail=original`) |
| `rem-value-functions-and-hamilton-jacobi-bellman-equations` | `screenshots/rem-value-functions-and-hamilton-jacobi-bellman-equations--01.png` | `6b7ee34930095c13a50adc57ae6f33f6fc869717cd1713a1c54f3b9dc6d98426` | 1200×1400 | yes (`detail=original`) |
| `thm-boundary-schauder-estimate-for-the-dirichlet-problem` | `screenshots/thm-boundary-schauder-estimate-for-the-dirichlet-problem--01.png` | `d91b9e59da719b561d839cd4cbef87394cb816c21529f59ba60689b28f7a8232` | 1200×1400 | yes (`detail=original`) |
| `thm-boundary-schauder-estimate-for-the-dirichlet-problem` | `screenshots/thm-boundary-schauder-estimate-for-the-dirichlet-problem--02.png` | `c3fb068f915bd871a6630388d728cd9bf61de24e3d7b991832f93b3a9e487c65` | 1200×1400 | yes (`detail=original`) |
| `thm-boundary-schauder-estimate-for-the-dirichlet-problem` | `screenshots/thm-boundary-schauder-estimate-for-the-dirichlet-problem--03.png` | `ecff305df6cf0bc6edd7aa8ed6547b5228a1f0b6a7613b5ddd10018811a170b8` | 1200×788 | yes (`detail=original`) |
| `thm-comparison-principle-for-classical-subharmonic-functions` | `screenshots/thm-comparison-principle-for-classical-subharmonic-functions--01.png` | `0a163266f924b895da93e28b6199a123d6cfd5046951721dc8e02a6850290098` | 1200×1400 | yes (`detail=original`) |
| `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` | `screenshots/thm-decay-of-the-newtonian-potential-of-compactly-supported-data--01.png` | `8f91502d02ecad2f80a9e17f27e0a9a8df372ab331b1f86a85d30aa46c465e45` | 1200×1400 | yes (`detail=original`) |
| `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` | `screenshots/thm-decay-of-the-newtonian-potential-of-compactly-supported-data--02.png` | `31d35f6d167bc0c783da3630f8e0622f31acae8b4d643576c87cfa6eeea20fbb` | 1200×1400 | yes (`detail=original`) |
| `thm-decay-of-the-newtonian-potential-of-compactly-supported-data` | `screenshots/thm-decay-of-the-newtonian-potential-of-compactly-supported-data--03.png` | `2d48a42206f14dc7a92c775fd273078d657fdd9c3e687ac31982f4398bbc89db` | 1200×1282 | yes (`detail=original`) |
| `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` | `screenshots/thm-divergence-theorem-for-bounded-piecewise-c-one-domains--01.png` | `e0ea77c23788bcd902e27e7e14cea72cd5e063da661252eb4ea59044973e2093` | 1200×1400 | yes (`detail=original`) |
| `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` | `screenshots/thm-divergence-theorem-for-bounded-piecewise-c-one-domains--02.png` | `58fd3a06a668c85905325fd43de044cb9a7f56976e8251e6a5d504a7eebf5088` | 1200×588 | yes (`detail=original`) |
| `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` | `screenshots/thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form--01.png` | `35752865b1f0e05a058e2468fef520970958f0f8d982bd20da15f5440c7c8205` | 1200×1400 | yes (`detail=original`) |
| `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` | `screenshots/thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form--02.png` | `353df6ea19afdb8e0abb86b483ba4fa6303e194faa270c4b93c918782252c915` | 1200×1038 | yes (`detail=original`) |
| `thm-first-variation-vanishes-at-an-interior-minimiser` | `screenshots/thm-first-variation-vanishes-at-an-interior-minimiser--01.png` | `4c8fcb75b540ad977711d40344ca22c2dfbcb742c3cfc0e6e319d5efcc6544cc` | 1200×1400 | yes (`detail=original`) |
| `thm-generators-are-closed-and-densely-defined` | `screenshots/thm-generators-are-closed-and-densely-defined--01.png` | `069432eca85ca9e20b4a803cc0f2334454de5f1ecacff03af9f26234315e7a4a` | 1200×1400 | yes (`detail=original`) |
| `thm-generators-are-closed-and-densely-defined` | `screenshots/thm-generators-are-closed-and-densely-defined--02.png` | `0e27acf7c5576db365a412763532fb27ad3c110efe3ad26c7c9d9ab3803eeb9c` | 1200×812 | yes (`detail=original`) |
| `thm-half-space-lift-by-normal-mollification` | `screenshots/thm-half-space-lift-by-normal-mollification--01.png` | `1e384eb42a0d12d86d4f7f1e6da3d3edfd743ef3552f15aa0388711d712ddc5f` | 1200×1400 | yes (`detail=original`) |
| `thm-half-space-lift-by-normal-mollification` | `screenshots/thm-half-space-lift-by-normal-mollification--02.png` | `588b43b6815333c9c1c6f5f390502faeecf39c1f2b0c22525c3ced692ac5bb36` | 1200×837 | yes (`detail=original`) |
| `thm-higher-order-boundary-regularity-for-dirichlet-problems` | `screenshots/thm-higher-order-boundary-regularity-for-dirichlet-problems--01.png` | `68f0941350b9121fcb54e3315d04eac7655e164ff68c7ea16eaf8c2ccc3d4da4` | 1200×1400 | yes (`detail=original`) |
| `thm-higher-order-boundary-regularity-for-dirichlet-problems` | `screenshots/thm-higher-order-boundary-regularity-for-dirichlet-problems--02.png` | `1279e1a110129a1cc80705820d2d6fec93bb21ed78558f4e2c11e6d78ff6f0f9` | 1200×1400 | yes (`detail=original`) |
| `thm-higher-order-boundary-regularity-for-dirichlet-problems` | `screenshots/thm-higher-order-boundary-regularity-for-dirichlet-problems--03.png` | `01fb4fbf36030ebb88c10328b4c543949f08703cab669b71ff2e8a79a040c8f8` | 1200×522 | yes (`detail=original`) |
| `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` | `screenshots/thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation--01.png` | `58c4059fca759f0f2d626907c4f6e366ef9fea8248b082a4497be20186bd98af` | 1200×1400 | yes (`detail=original`) |
| `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` | `screenshots/thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation--02.png` | `d68366a68abdcf638460c956bea87af57552aa7e549bb4e7c0374355069cef3a` | 1200×973 | yes (`detail=original`) |
| `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` | `screenshots/thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations--01.png` | `3389d56a7f6acdea42ad2654ffeb3a70d9d2b2b0cb19239686fd8a59e9d9614c` | 1200×1400 | yes (`detail=original`) |
| `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` | `screenshots/thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations--02.png` | `71800b34d216f43792d9a8ce06165e8d2e40dd32454f186bc790a20c54645957` | 1200×1257 | yes (`detail=original`) |
| `thm-liouville-theorem-for-bounded-harmonic-functions` | `screenshots/thm-liouville-theorem-for-bounded-harmonic-functions--01.png` | `a2701674c76185753f4ef5015b3032f5b4e967f981378a53559c80cb83b36e6d` | 1200×1400 | yes (`detail=original`) |
| `thm-lumer-phillips-generation-theorem` | `screenshots/thm-lumer-phillips-generation-theorem--01.png` | `be9aebbb441e6facd710b16325c7e51f4a5d2da589bc81f2f77cea259f21f5a3` | 1200×1400 | yes (`detail=original`) |
| `thm-lumer-phillips-generation-theorem` | `screenshots/thm-lumer-phillips-generation-theorem--02.png` | `c3df2d2e002be8bb5a395df00732c85da0c43b3756631cf6fcfc2fb49db7c218` | 1200×1234 | yes (`detail=original`) |
| `thm-odd-dimensional-wave-formula-by-spherical-means` | `screenshots/thm-odd-dimensional-wave-formula-by-spherical-means--01.png` | `2f144fa7fa56182d71e311da07e440600f49d95180843597291c5aa6c98eb35e` | 1200×1400 | yes (`detail=original`) |
| `thm-odd-dimensional-wave-formula-by-spherical-means` | `screenshots/thm-odd-dimensional-wave-formula-by-spherical-means--02.png` | `fae720152c51a9017e0ea5f2d11fc99b3c3e3124f1ed25f0eea0861d5cb3e4ed` | 1200×773 | yes (`detail=original`) |
| `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` | `screenshots/thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space--01.png` | `06e839f87abe3985c002b5a2551291117a7511c5e3644791db9b119e3376044f` | 1200×1400 | yes (`detail=original`) |
| `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` | `screenshots/thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space--02.png` | `fe7af6bdd8eaac942278147bcef678a3aa83ac2489bf05511abca9b6cc30bc25` | 1200×1400 | yes (`detail=original`) |
| `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` | `screenshots/thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space--03.png` | `4bb470d2c128367acaa20d58fbfb1ea8a94526a1ed87619f548cc3ac7b0c0892` | 1200×1400 | yes (`detail=original`) |
| `thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space` | `screenshots/thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space--04.png` | `5001dfe98eea6e9a52b55835e4b6ea986f8e33876fe69f22780bca6c20f9b715` | 1200×489 | yes (`detail=original`) |
| `thm-riemann-solver-for-strictly-convex-scalar-flux` | `screenshots/thm-riemann-solver-for-strictly-convex-scalar-flux--01.png` | `53ef3530bef2894d6ac9d20a28e5bbe9c9702b7aa5ffc636bf17677f540ead15` | 1200×1400 | yes (`detail=original`) |
| `thm-riemann-solver-for-strictly-convex-scalar-flux` | `screenshots/thm-riemann-solver-for-strictly-convex-scalar-flux--02.png` | `92ce722a5bee4f6fba1a88b1e7911c4e5d3ea1125091ae198d6feecd7091a9e5` | 1200×1400 | yes (`detail=original`) |
| `thm-riemann-solver-for-strictly-convex-scalar-flux` | `screenshots/thm-riemann-solver-for-strictly-convex-scalar-flux--03.png` | `3eb076cf025c66f3ae4e00b368bac7cc5c5956153fd27e7fd1fc0af4790e443b` | 1200×1139 | yes (`detail=original`) |
| `thm-sobolev-poincare-on-bounded-connected-extension-domains` | `screenshots/thm-sobolev-poincare-on-bounded-connected-extension-domains--01.png` | `97f1c46296d21ec41e122996e3383202d5631f8fe43975426da175b0da6ee701` | 1200×1400 | yes (`detail=original`) |
| `thm-sobolev-poincare-on-bounded-connected-extension-domains` | `screenshots/thm-sobolev-poincare-on-bounded-connected-extension-domains--02.png` | `1e7c41001e038e8373c0eb6242f0be8f5ea448373ed2e8b946cb6551f290b151` | 1200×317 | yes (`detail=original`) |
| `thm-strong-maximum-principle-for-harmonic-functions` | `screenshots/thm-strong-maximum-principle-for-harmonic-functions--01.png` | `58fb80cf0415d16e0029761ad0206c52a07387cd578c7376e8abb11a9f8016c7` | 1200×1400 | yes (`detail=original`) |
| `thm-strong-maximum-principle-for-harmonic-functions` | `screenshots/thm-strong-maximum-principle-for-harmonic-functions--02.png` | `df38e63f1a5f92e3b7521e6b90d5be796aeb48b92a8b18d1c4451c6d6c3bdc37` | 1200×257 | yes (`detail=original`) |
| `thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing` | `screenshots/thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing--01.png` | `592a56f23ef81e68d0c4821ba5d377a322b31d6d7a8226610b8a6e7908baaa1a` | 1200×1400 | yes (`detail=original`) |
| `thm-weak-euler-lagrange-equation-for-integral-functionals` | `screenshots/thm-weak-euler-lagrange-equation-for-integral-functionals--01.png` | `1b1a94c5065243fda33a6f44fb863838b628a86c793309292ee481909e34b047` | 1200×1400 | yes (`detail=original`) |
| `thm-weak-euler-lagrange-equation-for-integral-functionals` | `screenshots/thm-weak-euler-lagrange-equation-for-integral-functionals--02.png` | `8bda148b77df742b78495fcab6304b8f43bebb897b233b91200fe3f08f8bbd93` | 1200×949 | yes (`detail=original`) |
| `thm-wkp-extension-from-a-half-space` | `screenshots/thm-wkp-extension-from-a-half-space--01.png` | `c791bdaa875f6a4253658db305dfb49616120ba6558c1778852f9e82cf423475` | 1200×1400 | yes (`detail=original`) |
| `thm-wkp-extension-from-a-half-space` | `screenshots/thm-wkp-extension-from-a-half-space--02.png` | `be0edb03764116fab488a249302bf2e32e3552c54f37fc7af4bf379ff448ea69` | 1200×1400 | yes (`detail=original`) |
| `thm-wkp-extension-from-a-half-space` | `screenshots/thm-wkp-extension-from-a-half-space--03.png` | `21809ff967f26dbb806a744acc52f5b9ad2bd639d5ef65e019426ad3b9e7e1f3` | 1200×493 | yes (`detail=original`) |

The full ledger, section coverage, source and snapshot hashes, receipt metadata, findings, and diagram checks are in [lane-02.json](lane-02.json). No production, application, library, or item source files were changed.
