# Numerical PDEs and Spatial Discretization — lane 01 visual audit

Reviewed 114 assigned items and all 169 receipt-listed PNG tiles. Each tile was opened individually through `view_image` at original resolution; PNG dimensions, per-image hashes, and receipt hashes are recorded in `lane-01.json`. Frozen source snapshots and HTML hashes match the assignment. No HTTP(S), production routes, builds, tests, or publication changes were used.

## Findings

### `thm-second-order-meshfree-convolution-bias` — un-delimited inline mathematics

- **Source/snapshot:** `items/thm-second-order-meshfree-convolution-bias.md` and `snapshots/thm-second-order-meshfree-convolution-bias.md`, SHA256 `ffceefee8c7d973b0d7703075150613ea8e60dbf9faa9aeb381f0a63cff8cb4d`; lines 34 and 40.
- **Evidence:** `screenshots/thm-second-order-meshfree-convolution-bias--01.png`, SHA256 `2bd704cc7fc656b4d4b8f718adf649d36c6d41f0e6161c19870886f47d849e19` (1200x1400; original resolution).
- **Finding:** The Statement leaves notation such as `f∈C²(R^d)`, `S_εf(x)=∫…`, and `ε>0` in plain prose. The original preview shows these expressions on the text baseline, unlike the delimited estimate at line 36. Add inline-math delimiters to the notation in lines 34 and 40. This is a formatting defect, not a mathematical correction.

### `ex-hp-reentrant-corner-h-versus-hp` — low-contrast TikZ fill

- **Source/snapshot:** `items/ex-hp-reentrant-corner-h-versus-hp.md` and `snapshots/ex-hp-reentrant-corner-h-versus-hp.md`, SHA256 `8bde950e8b1dccaa59aca06857b068772cd525bceac7221f2455d41a4aa6ce8d`; diagram caption/source lines 70, 74, 76, 78–82.
- **Evidence:** `screenshots/ex-hp-reentrant-corner-h-versus-hp--01.png`, SHA256 `bb3a9c951db524ed27819b273fc3680525a3584906ebf112119f576d36353746` (1200x1400; original resolution). The original tile and a separate local crop were inspected.
- **Finding:** The near-white L-shaped fill washes out the Γ_D and corner labels in the dark preview. The sector and boundary-edge geometry are correct, and no adjacent-text overlap was seen. Use a darker muted fill or darker labels while retaining the blue boundary distinction.

## Existing diagrams

Five other TikZ diagrams were checked against their item statements and mathematical conventions; no geometry or label defects were found. Their exact tile hashes, source maps, relations, and check notes are in `existing_diagram_checks` in the JSON.

## Optional diagram candidate

`def-na-contravariant-piola-map` lines 33, 35, 37: an affine reference-to-physical simplex schematic could connect the Piola vector map and oriented surface-vector transform, and show preservation of oriented facet flux. This is an editorial clarity candidate; no diagram is required for the definition.

## Parser status

The category-level blocker file lists 4 strict YAML frontmatter blockers. None is assigned to lane 01, so no lane item uses recovered-body-preview coverage. The blockers remain distinct from the two visual findings.

## Coverage and tile attestation

| Item ID | Source SHA256 | Tiles viewed at original resolution | Coverage |
|---|---|---:|---|
| `alg-ale-robin-robin-partitioned-iteration` | `3d63e1bd4fff5c613d5eb8ca04dbab110244b96de45b45170cd9f6e86bc9830e` | 1 | frozen-snapshot-body-preview |
| `alg-exact-lie-reaction-diffusion-step` | `c4c757f96c2462b170bac82f3e3325c9cb65a7d41c839620fc479ca0ab929432` | 1 | frozen-snapshot-body-preview |
| `alg-na-periodic-incremental-pressure-correction` | `9ae8e860b41110020cd6005ee354b473d9b156456daa56f93929e40b82c7092e` | 1 | frozen-snapshot-body-preview |
| `alg-periodic-pic-classical-rk4-step` | `1ab829276543f496a0e286377ecf891debf64b1ed4e3d6bf0558378adef3574f` | 1 | frozen-snapshot-body-preview |
| `cex-consistent-mass-p1-fem-diffusion-fails-positivity` | `5c10b85c117cb9fd90c91acc0713454551004e5fe5e8e11632ab4147ba1175f8` | 1 | frozen-snapshot-body-preview |
| `cex-na-centered-hjb-update-is-not-monotone` | `a4baeb80c339b43ba6a2fdf23674598e0c3a1635afe00bb2441501619e2890b4` | 1 | frozen-snapshot-body-preview |
| `cex-nonorthogonal-two-point-flux-inconsistent` | `3d927befd0978a666d2de6917a6aecc73c476b76ad63f310279fdab0bf2287e2` | 1 | frozen-snapshot-body-preview |
| `cex-signorini-nodal-contact-feasibility-needs-convex-obstacle` | `b5e910798a781a7cdafed8bf13d07fcd4b0fedfa235d60af6aaaae4f7cf91207` | 1 | frozen-snapshot-body-preview |
| `cor-na-mini-element-pressure-mass-block-spectrum` | `0fa26f6908ca1b46b52e806eebcf5804c195c3da649f14908f0976453e5b2083` | 1 | frozen-snapshot-body-preview |
| `cor-weighted-network-gauged-cg-applicability` | `971660b5d847797d5a5e4c451b72c9ef757c7b06712f8f267ad82f17067e508b` | 2 | frozen-snapshot-body-preview |
| `def-bem-calderon-boundary-operators` | `cd069072d3562ec21a94821aae520c945fbffe6858056e39563d69b861f295b7` | 1 | frozen-snapshot-body-preview |
| `def-broken-and-conforming-polynomial-spaces` | `c3ddcdbae9bc798f40152dea8bc8f6d1404ee06a11c8b6ceba7bed3f95dce745` | 1 | frozen-snapshot-body-preview |
| `def-conservative-finite-volume-scheme` | `bf761fb0ecda06aae51ed4935c2c7fab8b9e276163069eb98a895723d1accc83` | 1 | frozen-snapshot-body-preview |
| `def-eigenspace-best-approximation-gap` | `bf50092165bc408ab35c96d911c2c748a2523bc86320fd5657f5e331ade55aa6` | 1 | frozen-snapshot-body-preview |
| `def-godunov-flux-for-burgers` | `c8ae90e6baf21beec47188ebe6fdf269deea5fe48d55bc63bff33a5991eedd01` | 1 | frozen-snapshot-body-preview |
| `def-intersection-volume-conservative-remapping` | `dc8edffd81b57b3ade45d932a207d300b00c70aa044286fe6975410850bac8ff` | 1 | frozen-snapshot-body-preview |
| `def-matching-affine-simplicial-meshes` | `d83247c59068ebcb447ae9384bcc4605e36032b575f8934dc124e0c95daab629` | 1 | frozen-snapshot-body-preview |
| `def-na-contravariant-piola-map` | `7c51014c1cc0b9d6adac000b65a3dd0376f8b92bc618f043e5357f97fb7122e2` | 1 | frozen-snapshot-body-preview |
| `def-na-hdiv-space` | `702918d90bf9b3813877d8df806b6130ff87c8c9f35274ccf6faf1c86e4ef49f` | 1 | frozen-snapshot-body-preview |
| `def-na-periodic-grid-and-tensor-multilinear-interpolation` | `04a838bca4c24bc9c000f2955a17e600ea33e6174bd5fb947e4d1d88ba5f709d` | 1 | frozen-snapshot-body-preview |
| `def-na-ultraweak-poisson-dpg-formulation` | `fd2408e48b850bb73603f91b1758ea0a30244431e1226f47ab29d471483c7072` | 1 | frozen-snapshot-body-preview |
| `def-parabolic-evolution-triple-and-energy-space` | `05bb67bd7e79468b7790645a6ec59b0934b471966a366d38dc8c9f8f4df80d54` | 1 | frozen-snapshot-body-preview |
| `def-pe04-diagonal-norm-sbp-element-data` | `7c00f4aab71a471eb18613ac28e7f03ae39c39c30324c52e730c15a6e05719c7` | 1 | frozen-snapshot-body-preview |
| `def-pe18-cartesian-complex-stretch-pml` | `ac80b131444ca30841699b6eb935a8f9710468d1a783adf875b794d2625c0d3d` | 1 | frozen-snapshot-body-preview |
| `def-periodic-cell-correctors-and-effective-tensor` | `774577eb96a2f8fed0c7a3847331c7e3dc42db24c5dc2ce8a67d640363f34fd3` | 1 | frozen-snapshot-body-preview |
| `def-periodic-scalar-diffusion-data` | `003c9014b3fd8dc4297932a6548522122e13cffe1369633a75a9e07de54a0d1c` | 1 | frozen-snapshot-body-preview |
| `def-rectangular-grid-and-dirichlet-flux-stencil` | `c50f6eee5527171255e8ec1868f7ccbbd18e7e9b43f86fe249463a2fb701b687` | 1 | frozen-snapshot-body-preview |
| `def-signed-vorticity-characteristic-solution` | `67630101b656cd5ded6927cb699dc9af2cde50af9f9675b1e04b4a3fed6ea224` | 1 | frozen-snapshot-body-preview |
| `def-supg-general-convection-diffusion-reaction-model` | `63b00722f93a9344ffc8ce935d68a6e328e80e5bab19fdb55d0709967f37a105` | 1 | frozen-snapshot-body-preview |
| `def-volume-integral-scattering-model` | `0faaf8ae846f7edac218eaaa82454c2eb0fee9869bb13815a64e1c8bd1e751ed` | 1 | frozen-snapshot-body-preview |
| `ex-ale-expanding-mesh-free-stream` | `a890bdf3398851a3ee5a329d8602e2b1f6debaf1af49d6c6fcd09e95f32b9b11` | 1 | frozen-snapshot-body-preview |
| `ex-bounded-fv-reconstructions-need-not-be-strongly-compact` | `9aa69f4ee02a49d345537dafeee82ec12361d419d71a4a19fd3a320bcd7663b4` | 1 | frozen-snapshot-body-preview |
| `ex-continuous-and-discrete-heat-maximum-principles` | `03aa566375e777455c67ed80f1651a511154c1e12c1e2061c3164c47ee736fe0` | 1 | frozen-snapshot-body-preview |
| `ex-fas-linear-cycle-equivalence` | `457d4b013f4b70ae72b855e460c3a81d58023ddb23d1cfe0a9023800d13b91c5` | 1 | frozen-snapshot-body-preview |
| `ex-gaussian-two-node-nystrom-exact-separable-equation` | `6af61aa5cf78f2bae348ee1105ca3691208f4ad8a0015b7deccb90f167b27518` | 2 | frozen-snapshot-body-preview |
| `ex-hp-reentrant-corner-h-versus-hp` | `8bde950e8b1dccaa59aca06857b068772cd525bceac7221f2455d41a4aa6ce8d` | 2 | frozen-snapshot-body-preview |
| `ex-linear-elasticity-p1-volumetric-locking-fixed-mesh` | `9505d5ac19239a2e46cd3868afb344bda18501d96c4f4d854fc9f873e87abab2` | 2 | frozen-snapshot-body-preview |
| `ex-na-checkerboard-permeability-contrast` | `6e5097ac8f9991b2b37c690fa02e1a3a2d2430b0cff910f84b3916ed31b83136` | 1 | frozen-snapshot-body-preview |
| `ex-na-mini-backward-euler-energy-budget` | `5c5128ca60befcb8485475778fafae250bcdeb47a41f1112fc4d868d03a8841b` | 1 | frozen-snapshot-body-preview |
| `ex-na-taylor-hood-pressure-mode` | `b2e3928c47cd6882de081f3581a565919821a63699b0414e779665a80690e9eb` | 1 | frozen-snapshot-body-preview |
| `ex-nitsche-exact-affine-data-weak-imposition` | `6af795b4aa2ad31f3fc2569c888e04f6cfd3d4cf8ab362ea741435d15508d12d` | 2 | frozen-snapshot-body-preview |
| `ex-parabolic-crank-nicolson-time-regularity-order-loss` | `cee32e050a9908ad26c4f3a304d6ef71cb67b2d06819d96645194fc6c6d8b2dd` | 1 | frozen-snapshot-body-preview |
| `ex-pe04-upwind-transport-with-inflow` | `2beaeb6999d9da266b4cb2d69919f260a42cf8c36555ca890fae7848ad8ab6dd` | 1 | frozen-snapshot-body-preview |
| `ex-pe18-insufficient-damping-near-resonant-cavity` | `11dc70d22fd36b5b28e286bf0cccc8df3065ab2661fc9bb773c0ce7f12664460` | 1 | frozen-snapshot-body-preview |
| `ex-periodic-fourier-collocation-exactness-and-nyquist-mode` | `4760b991ce955fc24fe51bac4b27d88af7ed51e392d413721c313252a36314ed` | 1 | frozen-snapshot-body-preview |
| `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable` | `feaaaf452a232cea620477916aa5e57b74f94afed770ace6a72e53095723eeb3` | 3 | frozen-snapshot-body-preview |
| `ex-signorini-contact-patch-test` | `6b233265d323687f83708d86cc74b56a07eba31e7bcf27f532527270016e0277` | 2 | frozen-snapshot-body-preview |
| `ex-supg-convection-boundary-layer-coarse-mesh` | `b579ad6718922fed2568892486876da22f6f6bf08cbec4e1b8b7bc2f6bf5f8da` | 1 | frozen-snapshot-body-preview |
| `ex-upwind-versus-downwind-advection` | `da59749b0cc4b846adcb655ca15a743bf5e825ae648f61fdc28d13b9b18f8a89` | 1 | frozen-snapshot-body-preview |
| `lem-afem-nvb-shape-regularity-and-three-generation-properties` | `4f19473b09aef41c29a281b7fa1e50dc4ba5dca0cc24fbb121eeb49aab2a448b` | 2 | frozen-snapshot-body-preview |
| `lem-ale-schur-residual-controls-interface-energy-error` | `36fbf8669cbc4e8d051860006832d9b287208d3a11522f670599283ee74fbfef` | 1 | frozen-snapshot-body-preview |
| `lem-bem-newtonian-kernel-is-fundamental-solution` | `e460d08ff9bfe52ba3ad7aaada478c03d211d4adce5d51d1824ca8aa8cf351bf` | 1 | frozen-snapshot-body-preview |
| `lem-chebyshev-polynomials-orthogonal-in-arcsine-weight` | `1de6f9aeafd3036ddca3bdc6ddc78d6d4c0662e6a5a4d590ec7e85c9f001d76f` | 3 | frozen-snapshot-body-preview |
| `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap` | `0ca5016c50a4381f5aa82dc1168c1ea80367b62f8eaa58d12874f93776cc15c4` | 2 | frozen-snapshot-body-preview |
| `lem-crouzeix-raviart-local-face-unisolvence` | `56b7792eccaa62824bd0067322cc76df3490e1616124fd7491f74cb947999178` | 1 | frozen-snapshot-body-preview |
| `lem-dyadic-cell-average-projections-converge-in-l2` | `4852b9d570058d61d439041285db2677feedaedc012c04447ca9c51f09a983e7` | 2 | frozen-snapshot-body-preview |
| `lem-fehmm-micro-cell-solves-wellposedness` | `42d565d68d202768db82a7e3e5515a5caf15a3361226e43690d2ceacc61e2999` | 2 | frozen-snapshot-body-preview |
| `lem-galerkin-orthogonality-for-conforming-galerkin-approximations` | `02602e8e7586c9313d03c95883cb7aef24e37bfa816587d76cd9ca1df6706dbc` | 1 | frozen-snapshot-body-preview |
| `lem-hp-corner-uniform-degree-dof-count` | `224bd51b957d79f89cf2784d8f7681f4f19aeb69e91975a7f2b55d8b881bcd0d` | 1 | frozen-snapshot-body-preview |
| `lem-isoparametric-pullback-and-surface-metric` | `86b11f59cfcaa6b55c57ed154f20ba3d7416d6028c1db9ef1d9bfb8613ddc1b3` | 1 | frozen-snapshot-body-preview |
| `lem-maxwell-edge-ritz-projection-well-defined` | `b6c9779e3079a2247531a397b40f1da79741e8d5b2eb72e0d052187d8f3272e9` | 1 | frozen-snapshot-body-preview |
| `lem-midpoint-quadrature-defect-for-p1-stiffness` | `b72ce50d75c74a2a3effeb98eb2f4c333ca17fce111736baed665511b5b8a48b` | 2 | frozen-snapshot-body-preview |
| `lem-na-cell-average-l2-projection` | `3eca611dfd19447bb4cf0f7ee9988772770cc96a4f7d4e0e2352ee72cf41d3ca` | 1 | frozen-snapshot-body-preview |
| `lem-na-eno2-reconstruction-third-order` | `b8ed16e5479b3d4c98ed2835691fc103e387ed41b846d875e7ff3aa0ff7d2d3f` | 1 | frozen-snapshot-body-preview |
| `lem-na-h1-interior-facet-traces-agree` | `c6c8b5fbd734e31368380b44b542e6ba58351dc7fa2d92374745da23ec7bcd7f` | 2 | frozen-snapshot-body-preview |
| `lem-na-l2-zero-mean-hilbert` | `3b4806e58c4fc838e9a49d7210d29669f44291042d26bdf35e02bcd5cf757642` | 1 | frozen-snapshot-body-preview |
| `lem-na-mini-fortin-l2-approximation` | `a74aa6ed44cd4a823f93fad5676f1f9740f8e83c9931d824164ca9c4911ce1a1` | 2 | frozen-snapshot-body-preview |
| `lem-na-rt0-h1-interpolation-bounded-and-commuting` | `6aedfd952f363611cd6823b08b3678c772cddbcb5c040e51d6dedfc9d9e744db` | 2 | frozen-snapshot-body-preview |
| `lem-na-sup-convolution-semiconvexity-and-jet-transfer` | `3876e77c211b50b6bbb0ff35c894710456fe1952f8bcac2eaeaaa65ee53a4e64` | 1 | frozen-snapshot-body-preview |
| `lem-na-whitney-averaged-pullback-moment-bounds` | `7f48d4bd70d0573e4f393e9d61e50e7eaee06226d9356994099c9842138d5da0` | 4 | frozen-snapshot-body-preview |
| `lem-nitsche-penalty-coercivity` | `ee73053927ec3cb5ac0d2c435c80eb90d3eb5eb3155c5d73b9a22dc9e10634f3` | 1 | frozen-snapshot-body-preview |
| `lem-parabolic-bochner-l2-approximate-identity` | `f5d9e7429cb6177ccbb99756f84bdb16e51938ee22c216e872b44c9377c38710` | 2 | frozen-snapshot-body-preview |
| `lem-parabolic-theta-step-exists-uniquely` | `14fc3f103ed43ed619d45766104dc15712b02673eb5b99b8afc8d117af5ae332` | 1 | frozen-snapshot-body-preview |
| `lem-pe05-source-quadrature-consistency` | `d52340ea0f1fb0b45a11ab75ef77aed0345f4e2b5facca94162ac0ae0414b0f8` | 1 | frozen-snapshot-body-preview |
| `lem-pe12-boundary-preserving-quasi-interpolation` | `d61edb639df8784341f854a42193586e2aec28e2ab74bd526ef89bf9d0c3b9bb` | 4 | frozen-snapshot-body-preview |
| `lem-pe18-spherical-hankel-modulus-and-radiation-bounds` | `8a3c9c346933023a8a202446a7ff79c3f06a49c3e34b05c0dbeefab3114476be` | 1 | frozen-snapshot-body-preview |
| `lem-periodic-cell-corrector-wellposedness` | `127d3125a7a0392502333ffde944b7b31f528c6c12142ab825dbc0b3a1ab5ae7` | 1 | frozen-snapshot-body-preview |
| `lem-periodic-pic-shape-partition-and-quadrature-bound` | `b9be34eaed87f4ac59ae960c64f5589d0c4401bd4f221447b890ccee587cfe1c` | 2 | frozen-snapshot-body-preview |
| `lem-reference-polynomial-norm-equivalence` | `48537c74fccd308e6a1e21bc5adf3cd264506205bd6bf35a150baae28c73440b` | 2 | frozen-snapshot-body-preview |
| `lem-signorini-contact-nodal-test-functions-surjective` | `2a677fc3a33690dd7e253c8470068ba06bba1222f34f245198589483339766c7` | 2 | frozen-snapshot-body-preview |
| `lem-sipdg-boundedness-augmented-norm` | `6ed8177be822608ad8237ec7e461ce8b1b0772cc390e189f3663d09bb078040c` | 1 | frozen-snapshot-body-preview |
| `lem-supg-one-dimensional-optimal-parameter` | `d8fdcf86f0cfe506ace6b14005d5a170a2439cd0db62c33a3948a78ec4dc3931` | 1 | frozen-snapshot-body-preview |
| `lem-volume-far-field-map-is-bounded` | `cee8c50a5c43c3f4d8c7c09518c777903bee943f17f61f43db72c0475d3c76c2` | 2 | frozen-snapshot-body-preview |
| `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil` | `c1533a8f3e15005cf4a61ee9708c45040a0ce81d2892589f2845ae9ae04cc8e3` | 2 | frozen-snapshot-body-preview |
| `thm-afem-error-and-oscillation-contraction` | `11f9e775f523834c71161a3aa3ecda450b6dadbd0b940fa762efcaf73d3402d2` | 2 | frozen-snapshot-body-preview |
| `thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl` | `c6e40dd42c3207719e0ebccb94e17851f4c1f7efbaef9306efdccbe5364cf9d9` | 1 | frozen-snapshot-body-preview |
| `thm-bem-single-layer-galerkin-wellposed-and-quasioptimal` | `1e66ab1751529b5128b5c675cc43ba1df97fcbd77a318b17f5da20412696f1ee` | 2 | frozen-snapshot-body-preview |
| `thm-chebyshev-gauss-lobatto-differentiation-is-exact` | `b6ce0cddbef7778b7d33074f5d8a8c23274abd7548a208e36b9d6496405b96d6` | 1 | frozen-snapshot-body-preview |
| `thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error` | `0e2204ffcf5ab10f66f167a69e049e466d9a54ed188f37344bc487cb56f147c1` | 2 | frozen-snapshot-body-preview |
| `thm-dirichlet-leapfrog-discrete-energy` | `fdbc9e0f146d35d816b8564a83b7e155234d67da40958ae53a0873132957878b` | 1 | frozen-snapshot-body-preview |
| `thm-fehmm-macro-micro-resonance-error-decomposition` | `b997f7a3f31494d2cc3219a53f0e56532d2fa33f5d8e5d836658544941cbe7ea` | 2 | frozen-snapshot-body-preview |
| `thm-half-order-product-integration-fredholm-error` | `9a80ace1b07a700619298987b6994583791ff1d187a080c0a5c8687d71cca87f` | 2 | frozen-snapshot-body-preview |
| `thm-hp-simplex-p-dependent-face-trace-inverse` | `d9d9d572545e186c2d487467acb34b2d24bca2dafc8112cf1804b93c77914040` | 2 | frozen-snapshot-body-preview |
| `thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound` | `5d0510de6314ff158d7a686b1a5241451062f2e5291a98f15abc0b0233067dd9` | 2 | frozen-snapshot-body-preview |
| `thm-maxwell-yee-strict-cfl-modified-energy` | `cc5317e923a6e0b2f5efaf76f16898b476a35072d2dc5e8ebf12f8e1c2725e74` | 2 | frozen-snapshot-body-preview |
| `thm-monotone-finite-volume-entropy-convergence` | `db1effdd097902226f0669e03f4660092cd7fbc8c6c1bd3a7c51d5b95d13b9c5` | 3 | frozen-snapshot-body-preview |
| `thm-na-discrete-helmholtz-projection-and-pressure-schur` | `b3fb006da9f499dd866641aae8ac1065fcfd4c4866a79695c5a82c7056520676` | 2 | frozen-snapshot-body-preview |
| `thm-na-mini-be-smooth-velocity-error` | `b14db5ba6652b72d542091dd98fb1639655460d03816c96288c136c62442a2b0` | 3 | frozen-snapshot-body-preview |
| `thm-na-periodic-diagonal-hjb-second-order-comparison` | `defb8583580272e3e8e1a944fe0766a70f7295487041b7b073fe0e15bb625987` | 3 | frozen-snapshot-body-preview |
| `thm-na-regular-decomposition-zero-tangential-hcurl` | `0f5628b00b9c70ec1782ec0ddf92a4a6925bded243c776b0b9b9680805ddc837` | 1 | frozen-snapshot-body-preview |
| `thm-na-symmetrically-preconditioned-saddle-point-spectrum` | `6083c45a62597210751b50f5f508bf18cdd3ece15e7997fddc4df5fe5f3f6318` | 2 | frozen-snapshot-body-preview |
| `thm-nonsymmetric-nitsche-l2-error-with-boundary-defect` | `6248287c1d43fa67e86f3a3a8063f43f84ab184c673a365f06095305a6ba74d6` | 3 | frozen-snapshot-body-preview |
| `thm-parabolic-crank-nicolson-second-order` | `7c57ac126487d425b69d1e57b1e519ce23024226a66b88fb47109f880e412b3d` | 2 | frozen-snapshot-body-preview |
| `thm-pe03-hll-update-preserves-convex-invariant-domain` | `d5c7cf57ddd61d48d6b09c0a973a5592d43e338dd3eb12245b6bd3c6f04e2c07` | 1 | frozen-snapshot-body-preview |
| `thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility` | `512f118513204e7dedb997db7d4ccc20ff476b513660a1e87bf4753cb4f1cb9a` | 2 | frozen-snapshot-body-preview |
| `thm-pe18-exact-spherical-dtn-map-on-smooth-data` | `fc29fea3dd800fd96c542dd870610367a75822f3de4d7ba72e4609b5100328a7` | 2 | frozen-snapshot-body-preview |
| `thm-pe26-nontrivial-spectrum-bddc-feti-dp` | `1622ccb5b3919efb9d58f4ac39f849fec14aae891e5e4556f381ba4c06233dfb` | 1 | frozen-snapshot-body-preview |
| `thm-periodic-fourier-collocation-differentiation-is-exact` | `83c3201c047bc3f40b4ea7827410f47039a3a07ab9439d4ecc97e3c99335e6de` | 2 | frozen-snapshot-body-preview |
| `thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube` | `776d97910ef39d62fb232a179fa3ec1a678fedbb1d0a861e8de0ed15bb51e810` | 2 | frozen-snapshot-body-preview |
| `thm-phase-field-sav-modified-energy-law` | `5413a0e13ddad3c4fe000e1c6eb150906818114677ba9a81745df71219f20f75` | 1 | frozen-snapshot-body-preview |
| `thm-second-order-meshfree-convolution-bias` | `ffceefee8c7d973b0d7703075150613ea8e60dbf9faa9aeb381f0a63cff8cb4d` | 1 | frozen-snapshot-body-preview |
| `thm-sipdg-exact-consistency` | `ab02aadd92da622c9ebd4ba9cd1df1653c52e1b17f46dc3192c977571c9e566a` | 1 | frozen-snapshot-body-preview |
| `thm-theta-scheme-discrete-maximum-principle` | `eca76a20e4145f1840f61847c8f7443dd5fd41ce5ad80b4d3ff8a8cce448485b` | 2 | frozen-snapshot-body-preview |
| `thm-volume-product-integration-solution-and-far-field-error` | `f62f852c31151bd257e182ac232d9df1fd886d3c9107d5f9c7523008b2403dd8` | 2 | frozen-snapshot-body-preview |
