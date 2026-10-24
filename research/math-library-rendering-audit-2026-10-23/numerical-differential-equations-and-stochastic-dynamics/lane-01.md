# Numerical Differential Equations and Stochastic Dynamics — lane 01

## Scope and coverage

Reviewed the complete ItemBody and title of all 67 assigned items. Opened all 97 receipt-listed PNG tiles individually with `view_image` at original resolution, including every continuation tile. The lane is local-only and read-only. Source and frozen snapshot hashes match the assignment for every item; all screenshot receipt hashes match their PNGs. Per-tile paths, hashes, dimensions, and original-resolution viewing attestations are recorded in [lane-01.json](lane-01.json). Assignment SHA256: `cb39dc6e1d39d442e5e7a573e493f3463738d28428a9d43ea57303b741c1392c`.

The visual pass checked LaTeX output, text flow, and tile boundaries/overlaps. Receipt metadata supported the visual review and did not substitute for opening each image. No LaTeX or TikZ mathematical rendering error was found. The assigned receipts report `tikz_count: 0` throughout, so there were no existing TikZ diagrams to audit for labels, maps, domains, signs, orientation, indices, or crossings.

## Rejected visual observations

Two initial title glyphs were first suspected to be clipped. The coordinator reopened each standalone tile individually at original resolution and confirmed the full initial glyph is present at x=48, so neither is a rendering defect.

### `ex-l1-and-cq-fractional-relaxation-first-step` — title, source line 4

- **Rejected observation:** The initial “F” was suspected missing.
- **Coordinator recheck:** The tile visibly reads “First steps for a scalar fractional relaxation”; the “F” is present at x=48.
- **Evidence:** [`ex-l1-and-cq-fractional-relaxation-first-step--01.png`](screenshots/ex-l1-and-cq-fractional-relaxation-first-step--01.png), SHA256 `50bcf25d048e42d8038bb3f0dc5fe83c7c6cbd715929e5da70bf2408a7fd34c2`, 1200x1400, reopened at original resolution.

### `ex-unstable-baoab-step-has-no-invariant-law` — title, source line 4

- **Rejected observation:** The initial “A” was suspected missing.
- **Coordinator recheck:** The tile visibly reads “An unstable harmonic BAOAB step has no invariant probability”; the “A” is present at x=48.
- **Evidence:** [`ex-unstable-baoab-step-has-no-invariant-law--01.png`](screenshots/ex-unstable-baoab-step-has-no-invariant-law--01.png), SHA256 `e8d607b8ee49be2ea4512467c55c627c08a33ba09aa6533e6431cd53d84234c2`, 1200x1400, reopened at original resolution.

## Editorial diagram candidates

### `alg-dyadic-brownian-bridge-increment-tree` — lines 31, 48, 51, 55

- **Kind:** dyadic-increment-split-tree (editorial candidate only).
- **Why consider it:** The definition explicitly constructs a finite rooted tree and specifies an exact parent-to-children split. A small diagram would make the geometric hierarchy and conservation relation quicker to scan; the prose is complete and the candidate is not a rendering defect.
- **Diagram content:** For a parent interval [u,u+h] carrying ΔW∈R^m, show two half intervals [u,u+h/2] and [u+h/2,u+h] carrying ΔW_L=ΔW/2+Z and ΔW_R=ΔW/2−Z, with fresh Z~N_m(0,(h/4)I_m). Label ΔW_L+ΔW_R=ΔW. At a generic node length ℓ, label conditional cross-covariance Cov(ΔW_L,ΔW_R | ΔW)=−(ℓ/4)I_m. Indicate a finite ordered request list refines only named leaves and retains parents.
- **Checks:** The child interval lengths are h/2; the maps have codomain R^m; the child sum is exactly ΔW. Conditional on a fixed parent, the shared fixed halves and opposite innovations give covariance −(h/4)I_m, so the children are conditionally dependent. Keep this distinct from the separately proved unconditional independence at fixed dyadic depth and do not imply predictability for data-dependent refinement.
- **Screenshot:** [`alg-dyadic-brownian-bridge-increment-tree--01.png`](screenshots/alg-dyadic-brownian-bridge-increment-tree--01.png), SHA256 `94f09624ced391163ee05370fe59f905f8261202126a6d4a2ac7dac51619689b`, 1200x1400, viewed individually at original resolution.

### `ex-nonnormal-transient-growth-exponential-step` — lines 46, 48, 72, 74, 76

- **Kind:** phase-trajectory-plot (editorial candidate only).
- **Why consider it:** The example asks the reader to verify transient norm growth before decay and supplies a closed-form trajectory. A phase-plane curve with the norm-growth point marked would directly illustrate that claim; the algebraic proof already establishes it.
- **Diagram content:** Plot t↦y(t)=e^(−t)(2et,1)^T in R^2 for t≥0, with initial point y(0)=(0,1), the marked point y(1)=(2,e^(−1)) where ||y(1)||₂=e^(−1)√(4e²+1)>2, and the limit y(t)→(0,0). Use arrows for increasing time and show the unit circle only if it clarifies the initial norm comparison.
- **Checks:** The curve is a vector trajectory in R² with x-coordinate 2t e^(1−t) and y-coordinate e^(−t); it starts at (0,1), passes through (2,e^(−1)) at t=1, and tends to the origin. The marked norm exceeds 2, while the initial norm is 1. A drawing must not suggest the numerical step is approximate: the source says exact-action methods reproduce the same trajectory at grid points.
- **Screenshot:** [`ex-nonnormal-transient-growth-exponential-step--01.png`](screenshots/ex-nonnormal-transient-growth-exponential-step--01.png), SHA256 `00310e730eb90a70edb86648ea15de9e6b9ee10ad499bef8f542375031ce7010`, 1200x1400, viewed individually at original resolution.

## Existing diagram checks

No existing TikZ diagrams were captured in this lane. All items were visually reviewed; no diagram math mismatch was found.

## Item coverage and source SHA256

All 67 entries are published and their source and frozen snapshot digests match the assignment. Exact screenshot and receipt hashes are in `lane-01.json`.

| ID | Source SHA256 |
|---|---|
| `alg-adams-pece-one-correction` | `5ab5ee42539821d66266226cfdbed146742e2b9f95f5f10cce945ce46eac3835` |
| `alg-certified-bracketed-cdf-inversion` | `fab3ed323bb32445c0534df88158f8d3bc008904e86f3eb661c331e0ebc46ef2` |
| `alg-dyadic-brownian-bridge-increment-tree` | `41a92edd58af178fcd98f085e5544f323fcfa97c7c7235a05e6b3ab22490708e` |
| `alg-finite-sectional-forward-euler-positivity-cfl` | `ab555e9980859d0b89082cf9aaf67e2f388760dd55a61e683814399d6e1f3cb0` |
| `alg-linear-congruential-generator-mod-power-of-two` | `be636215e9fcdec0330d702427e8b5618fbbeef615946f3b62384629b4afd5c4` |
| `alg-newton-chord-implicit-residual-with-factorization-reuse` | `103a4b75d18ea2f48ca0247387c6844749db714093755d3b2696047927f1b9fd` |
| `alg-rkc2-nonlinear` | `1eb8ea7dc46da949aacb327eccb2e95103e542514ff2d8a720b189acff6ad15c` |
| `alg-uniform-and-graded-grid-l1` | `aa6ea3458632839596e05ba5eba58f8da6e5d84865e8366b85a61c48ed96339b` |
| `cex-backward-euler-scalar-stability-not-matrix-contractivity` | `b779ce53a5a691085cb701cca44164d38227cd1c684ca6455aaef73aa1de8e28` |
| `cex-small-residual-does-not-certify-positivity` | `f95e4816b4736e92906016654a7903a01688917e0e029db213942256be179500` |
| `cor-parareal-continuous-target-error-decomposition` | `000e9ebdaacf3e73e8fe3d346fca5202a72e3a6fd12692fd47921e0ed0f3d881` |
| `def-caputo-derivative-and-fractional-integral` | `9d2460dbfa7323ea38ee2be4f6d8c26c8d5725cafb95ba9c3e9f250f72ea319e` |
| `def-euler-maruyama-step-process-and-continuous-interpolation` | `5cca688d755d2f5ab9cd2b218100f3ece2487f91c16a69320a1b2d3d7e9a9a32` |
| `def-hopf-normal-form-data` | `e4dfc3a50b9201b1c3d15f7e328a22938e6a77032c7dded2298de3dace5981e4` |
| `def-local-periodic-orbit-poincare-and-floquet-data` | `85b59ecd2021f5103c1af07cd9e0e9f0a77d26a6f998ff59d487d90c378e4a67` |
| `def-predictable-stopping-time-grid` | `6b436bbb565e5a7280af6a408dad94073db964765158f98176d07e76915a3e95` |
| `def-scalar-rk-a-and-l-stability` | `8546e2ad3adb4df3f74c2cd0ba929319390f51a4b74b8ba8d286d7e4d3b261f9` |
| `def-verified-flow-variational-range-oracle` | `4fffa5132e99b0bb5620225e6aad0fc623490346b085dc1edc813baee9772a34` |
| `ex-binomial-guard-prevents-invalid-counts-but-changes-noise` | `ad4f6a92bc3d8eb7247f5bb3d7905505a82a7d71c225cc24171cf418c695560e` |
| `ex-coarse-fine-em-bridge-coupling` | `d56f3307a8bc4b29d70248c9b922a673a38f4b64688f4ebf3a7538004639e416` |
| `ex-dirichlet-boundary-forcing-strang-order-reduction` | `b70cda1d9c0bc57da03b656f67208c8087668ea20892c51265c682ed91004350` |
| `ex-exact-state-with-inexact-log-density-quadrature` | `cfa681652476f1dd1fbf368d787f1333451afe1495d0caaf35474065f7d34051` |
| `ex-frozen-slow-interpolation-limits-order` | `9a9160104b02fc56cfe9b0cdcf3c19758d02a1c64e27e1cef68ab59712be1bc3` |
| `ex-l1-and-cq-fractional-relaxation-first-step` | `bcb943095279050dfff549e84b04e8aba8c6f0411478eed4b3bf2d9ad093c393` |
| `ex-narrow-maturation-kernel-delay-approximation` | `6279f67afa61552f46b6d5c7c22e25136279f02864aa5eccc6c94c75d4352dff` |
| `ex-nonnormal-transient-growth-exponential-step` | `71982f9e224cda5ff18168e896763f42880588efdb38980aedd689fcb5375a96` |
| `ex-poisson-tau-leap-negative-population-pure-death` | `ae6104f3244ce4eeacf033262638ed73dd369678c67d97fe824e23e15653987c` |
| `ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth` | `cfbb149e56c5d6df30c074cb115ebb23b109fbd901d2563f3b57560f37d20dba` |
| `ex-sdc-two-node-gauss-nonstiff-cubic-ivp` | `6a2a0935f8e3299a5545b5506f7d97a6418d20ffea04a22b51a6c602be7ff5a3` |
| `ex-subcritical-hopf-cubic-normal-form` | `dd700764406846b7c372de6287588c34383afec0aca6142d6d71bd528c750379` |
| `ex-unstable-baoab-step-has-no-invariant-law` | `66b43b09cb299d0573282c77726aacb4558ceac21109fffe2c37bf09ba24234d` |
| `ex-xd-reducible-absorbing-class-weights` | `f11db178011558057a85c0379c5a0e0b5c8e789be6ed57000f3f960a155a2e58` |
| `lem-backward-euler-cq-principal-branch-generating-function` | `be52186d0ee2eef318d481f8ca548a218e768d8be70dc0ef17c053c2f0c76507` |
| `lem-brownian-ito-integral-l1-maximal-bound` | `16d39036ac33a6781bba626a89c3a08b03e341216b66c08ed16af31067e42999` |
| `lem-collocation-polynomial-scaled-derivatives` | `e9cf90c22bb18fc4ef10fc1ccb7b7b7e1c3884656ea0a82e24521eee013e4bdf` |
| `lem-continuous-fragmentation-operator-weighted-total-variation-bound` | `d9d744610a94c47c1ebcd748703c58f3ea4eb678c77208d1c22278aab3f7440d` |
| `lem-distributed-delay-midpoint-error-split` | `c47c41a3396b7fcc8987186c009653df0a4975c088222b731de3f7b42585a697` |
| `lem-exponential-phi-integral-representations` | `b511f61220b9262ee75436d5668d66478e936d47f4857f84cc471a9d1ab8e22a` |
| `lem-fractional-integral-kernel-power-integral` | `1d8796d254102dfcdb37153b20fcf8d04fdaf15b4d35b2eaf2aee7b08d7f52a6` |
| `lem-hybrid-guard-derivative-along-mode` | `e1a70eb4cb4a2baf2350ef37ef94071bda3bdaf057344c49a97feebc6e6be570` |
| `lem-local-hamiltonian-flow-preserves-symplectic-matrix` | `0ffc8852ee4a60ca65f8271e5e09ecdc0e0568a4fe91267894bd5af92b56ad31` |
| `lem-neutral-delay-euler-finite-execution-and-storage-counts` | `f77a21e7a4c77cd042b44517fcf3efdbcd47fb2aee60398c3212601860eff19c` |
| `lem-phase-bordered-shooting-jacobian-invertibility` | `80466e9935510000eb62044dd47a90183726f98bcab060a81baf07e10978940e` |
| `lem-rational-expression-derivative-recursion-correct` | `2f989c93992e91c5ddcd307f49e8d14f795e49114221d9b61af9f630e1b8eab0` |
| `lem-rosenbrock-euler-jacobian-approximation-defect` | `eeee0ad2f65a1cc1e03285ddaabd18c3be35935ee36b2c64b3ce2e55750bf51d` |
| `lem-separated-simple-floquet-multiplier-perturbation-bound` | `fa834622056a2d2d10e1b3fc839f1ec8d331be54093106351bb50a0b181b7bb9` |
| `lem-stopping-time-ito-step-interval-sum` | `195fc478e69854e947e7eeadc3def703034621765028273edb71f611bfa99aa8` |
| `lem-variable-step-adams-lagrange-weights` | `968f1170c207af724130b338cfe5f2e73e3acc633ae88f92fbb8d8f7fd91dcaa` |
| `prop-embedded-pair-estimator-asymptotics` | `e1b3befc20f7d4d6815cce9af96799679599c40a0649d1b4160d862bde9c41b3` |
| `prop-rosenbrock-euler-is-one-newton-correction-of-backward-euler` | `b4047edd1f06e90333b5949910c10ee2c63b799646a67364f4074abaef01fd5d` |
| `thm-age-cohort-quadrature-weak-consistency` | `df078e0906ca3ee9461224d6cbeccce8c3555c710045e476ad21ce689d973a45` |
| `thm-backward-euler-a-and-l-stability` | `f8fb08f4b87c4b76e4ddeaab64abe9a298f9726a7172d1c80c28d5028858f15c` |
| `thm-box-muller-finite-bit-coupling-error` | `9d225ce75852f1401d3adb591aebf0cbfdab2cfd44243663728d6935f1782708` |
| `thm-continuous-coagulation-fragmentation-bounded-lipschitz-stability` | `d9d73ef4df7420c4c94886083a229e3f3ee279b1333a3354338d1f5c904d9ee8` |
| `thm-dyadic-brownian-bridge-tree-increment-laws` | `7b351cbf2bc74d561f32c2a7474285a3b3ca08b5978e6edacc46d185987ccb44` |
| `thm-finite-chain-closed-class-cesaro-weight-decomposition` | `90af5b79bfb25d0034daf56073d68cc8fbc32e89d4d9e5aeb9eb08ebf5fbe72b` |
| `thm-finite-transient-hitting-and-mean-exit-residual-bound` | `fea77bb61da7d57e3b15861e74bc29666538627402cee3dcd520f021c1b94c6a` |
| `thm-heun-dense-output-local-order-two` | `0aac8c60fba9fef4a680b2df82cfbc6abfd0eb1e91dc1038cd9db0e76eb453af` |
| `thm-index-one-dae-backward-euler-first-order-with-residuals` | `567a8553dd35b447ee83f9d6fe721629d278df1b41293fb81801fa01d1940fb7` |
| `thm-lipschitz-local-existence-for-caputo-volterra-equation` | `250138d7d60c83189a1904e57468009674de1427eb67edcd28158c9143916138` |
| `thm-minimum-intensity-coupling-preserves-exact-marginals` | `5c1cebc5bcae35c3b63168016c95b23798e20ce109738959c17ecba61b2a363d` |
| `thm-one-closed-class-augmented-stationary-system-is-nonsingular` | `5f6e5101126b8c9290f1a3abe9332aeeb85183c0e5e31791f7d30a1eedd25717` |
| `thm-product-kernel-pre-gelation-second-moment-blowup` | `7935aece3d8a19c98ffa3005c0408f06e0386b65963458fb045d393d348971bd` |
| `thm-reaction-counts-have-compensators-brackets-and-isometry` | `e5c34698904055fad5aaf5d6112229db4a97abb9bc280173880cb2e9f10c359a` |
| `thm-sdc-finite-sweeps-raise-order` | `324ec2f5a424db27aaff3d73294134485c9704927a978695e0c5a9483608ccbd` |
| `thm-superlinear-sde-global-existence-and-moments` | `b8f90ec6a0d5e12d73152834e9c5e782b98551fadb8112da1cdd27e840ef8475` |
| `thm-variable-step-bdf2-order-two-under-ratio-bound` | `c71afe0b6a66245532e3522d5da86b7747ce23e64871b58d7716c97a5d025108` |

