# Quantum Algorithms rendering audit — lane 09

Reviewed **72 assigned items** and **112 receipt-listed PNG tiles**. Every tile was opened individually with `tools.view_image(detail="original")`. The frozen title and complete ItemBody in each assigned snapshot were reviewed.

## Findings

No genuine LaTeX/TikZ rendering defect, confirmed clipping, or overlap was found. All receipts report zero KaTeX errors, zero TikZ diagrams, and no diagram failures. No visual defect was inferred from source text that was not marked as math.

## Diagram review

No current TikZ diagrams are present in the assigned receipts, so there was no existing diagram math to validate. One optional source-supported diagram candidate is recorded below; it is pedagogical and not required for proof validity.

### `def-qa-30-qaoa-circuit-and-objective` — optional circuit schematic

- Source: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-30-qaoa-circuit-and-objective.md` lines 4 and 40–44 (SHA-256 `e5a7b4435a91d7770389e79a5b8f0a800f6b39d98b66eb963e40fa4607538a2d`).
- Kind: TikZ QAOA quantum-circuit schematic.
- Claim: prepare vertex qubits in `|+>`, apply alternating cost and mixer unitaries, measure in the computational basis, and score the measured cut.
- Suggested content: one wire per vertex; cost layer then mixer layer for each `j=1,...,p` in chronological order; optionally expand the cost layer into commuting edge gates `exp(-i gamma_j (I-Z_u Z_v)/2)` and the mixer into `Rx(2 beta_j)` gates; end with measurement and annotate `C_G(x)` and its expectation. Respect the stated right-to-left product convention and show that the output is a cut, without implying optimality.
- Screenshot evidence: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-30-qaoa-circuit-and-objective--01.png` (SHA-256 `07a27db5efde4db48e96e7341c9befbe8b79103930d50734227c8c84dba9ea41`); no current diagram is present.

## Complete item and tile coverage

### `alg-qa-12-unknown-amplitude-search` — Unknown-amplitude randomized search
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-12-unknown-amplitude-search.md` lines 1–50 (SHA-256 `dc768096db88590bbe9a33ee4d2cfe5be02df22bac10bc56d15d3c0266392658`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-12-unknown-amplitude-search--01.png` | `84541aec7df00c57753a53fa864e95e3b51e0b17a98e8baf5d62344abd0039d6` | Attested |

### `alg-qa-16-dual-adversary-reflection-evaluator` — Bounded-error evaluation from a dual adversary certificate
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-16-dual-adversary-reflection-evaluator.md` lines 1–56 (SHA-256 `2ba5bdea4ed75746d4b04186e60634b7652f994606c5b33ce2388007d80f69a9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-16-dual-adversary-reflection-evaluator--01.png` | `09f78aa6db8e38679a15e7b1772f568574e255cff526f43c484eea24e3c864d6` | Attested |

### `alg-qa-22-lcu-block-encoding` — LCU block-encoding construction
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-22-lcu-block-encoding.md` lines 1–53 (SHA-256 `798a17e08dbe00f99109b2364ddcf6d0de9c81a762c7662bf3f708047c4dd6c9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-22-lcu-block-encoding--01.png` | `02a8aa0b0c71049a95218fdd220ea8cacd09ff859b3c36cff086f2f8643b59b9` | Attested |

### `alg-qa-26-hhl-phase-estimation` — HHL finite sine-window phase-estimation algorithm
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-26-hhl-phase-estimation.md` lines 1–61 (SHA-256 `5adec834c072eaa830c46697bbb4b14f30b26e62242ad18d3a8dcf606aca061f`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-26-hhl-phase-estimation--01.png` | `1f72081dde2c4b74f0044500781689b489a58661ba4e17ff81074d183a1befa7` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-26-hhl-phase-estimation--02.png` | `0f47543f16cc742f35b684f42331ddd525587fa8123424c5c298bad2c6bb18dd` | Attested |

### `alg-qa-29-variance-aware-monte-carlo` — Variance-aware quantum Monte Carlo
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-29-variance-aware-monte-carlo.md` lines 1–54 (SHA-256 `030f52732e04040584962956a04ecbaf1a4aa2011953353c2328fb5344948a34`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-29-variance-aware-monte-carlo--01.png` | `b701ac928cdb0cb2e29615119a952aea81e93d4cedb1d7c2ac0e722697c712db` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-29-variance-aware-monte-carlo--02.png` | `3b3fc68eaefe2d0721f6fd603e84e67f6f81124ca13d4914bdfa8eb789233f06` | Attested |

### `alg-qa-34-rejection-sampler-linear-combination` — Finite rejection sampler for a linear combination
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-34-rejection-sampler-linear-combination.md` lines 1–39 (SHA-256 `022e85fe7339db64024a57f48ba9010a111f178e4eb4a0d57e5c0cfcbd12e9bf`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-34-rejection-sampler-linear-combination--01.png` | `2e4bb7bf726d1ec2fbafd46eea929b12068a2c2acce3dd5d1c42069f2ad44db4` | Attested |

### `alg-qa-dihedral-hidden-subgroup-sieve` — Power-of-two dihedral hidden-subgroup sieve
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-dihedral-hidden-subgroup-sieve.md` lines 1–70 (SHA-256 `0611d95dcb75ba1c69911724a2c80762b77f5a508c2cba7e9a3e3715a5ca3d52`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-dihedral-hidden-subgroup-sieve--01.png` | `f499dfea9549e3ad34462215f3beaad4a8ee62dcf84b2c67f77b4b08eaebbc01` | Attested |

### `alg-qa-rational-reconstruction-from-phase-sample` — Rational reconstruction from a phase sample
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/alg-qa-rational-reconstruction-from-phase-sample.md` lines 1–37 (SHA-256 `799f2622e3b45b33233c2e29c0225af312ebe192cd07943f107a1f15fa18cf26`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/alg-qa-rational-reconstruction-from-phase-sample--01.png` | `605acf488bfe8039a14cacff0394fb4573eb9c7f405c29057b935ea89402f867` | Attested |

### `cex-qa-13-controlled-powers-are-not-free` — A bare unitary oracle does not supply controlled powers for free
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/cex-qa-13-controlled-powers-are-not-free.md` lines 1–49 (SHA-256 `22c207231c6fc50dde633411b20f2b59e070e974a6be1f7f53a9877f0a6c31bb`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/cex-qa-13-controlled-powers-are-not-free--01.png` | `588b8e762df484da3515454b4551093e09745e687f969c693dd83281db7122d7` | Attested |

### `cex-qa-24-parity-violation` — Parity violation makes singular-value action basis dependent
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/cex-qa-24-parity-violation.md` lines 1–49 (SHA-256 `3b80907fc6fd727aa117385b3cf22318a036b57fc9b9bf5af1712210b6b8eaae`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/cex-qa-24-parity-violation--01.png` | `ada2898ca896f5a032e899f8fbd9169495aff165b394579c92d53a64250d6c3a` | Attested |

### `def-qa-11-marked-search-problem` — Finite marked-item search and its bit oracle
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-11-marked-search-problem.md` lines 1–43 (SHA-256 `c564dc76e8f36cbca4f0285e7d4d0948dcd01c02a643f7e4d08e93aa872fb05e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-11-marked-search-problem--01.png` | `c24dc1ae8ecaaff719309a679f5a085a882191a100e32fa9a67314018476d231` | Attested |

### `def-qa-16-filtered-gamma2` — Filtered γ₂ factorization norm for query mismatch masks
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-16-filtered-gamma2.md` lines 1–56 (SHA-256 `382e24ac33475afaead20a967538112e20a903d6ca29e706e09c23fadc8e142e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-16-filtered-gamma2--01.png` | `bb0cec4332f07e72627e859a20046d8149947e1c1318f9de1a94de18ddef398f` | Attested |

### `def-qa-17-walk-access-model` — Finite row-preparation access model for a Szegedy walk
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-17-walk-access-model.md` lines 1–49 (SHA-256 `ade152c4b689a03612e040b654a37547d43f12f323cc220d338948f8f10a6ac8`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-17-walk-access-model--01.png` | `2fe87d51aec9adcfa9bc809d54002c9b0e09563307b409d9613ff5227456c0ce` | Attested |

### `def-qa-20-first-order-product-formula` — First-order Lie product formula
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-20-first-order-product-formula.md` lines 1–36 (SHA-256 `0a474f176a0bce65140acea90056ce65c6377fc54ee4055f3be801af3ddb8368`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-20-first-order-product-formula--01.png` | `ed885b7ad056ea62753202fc94042501323af68afeb3a2ae407c750b431c7fdc` | Attested |

### `def-qa-22-block-encoding-access-model` — Block-encoding oracle and implementation cost model
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-22-block-encoding-access-model.md` lines 1–38 (SHA-256 `ff83f16373a11868b0cfbf807b8242037e551a69b3227f7f28be9f985dc54b7e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-22-block-encoding-access-model--01.png` | `2f8c6bcd21baae48da3ed9acb9ab2735cae6e7ad82f7eb96d0d33ad10d4be5b1` | Attested |

### `def-qa-26-qlsp-task` — Quantum linear-systems state-output task
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-26-qlsp-task.md` lines 1–43 (SHA-256 `68bd099ae5778def35079a77df157f29b236c38ac20572bb2dc02a113b030e69`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-26-qlsp-task--01.png` | `b794669a4c866f2c325839bc0f282fe9055618e230568210c455538e82cf44f4` | Attested |

### `def-qa-30-qaoa-circuit-and-objective` — QAOA circuit and expected combinatorial objective
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-30-qaoa-circuit-and-objective.md` lines 1–60 (SHA-256 `e5a7b4435a91d7770389e79a5b8f0a800f6b39d98b66eb963e40fa4607538a2d`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-30-qaoa-circuit-and-objective--01.png` | `07a27db5efde4db48e96e7341c9befbe8b79103930d50734227c8c84dba9ea41` | Attested |

### `def-qa-32-zqp-promise-class` — ZQP on promise problems with bounded failure
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-32-zqp-promise-class.md` lines 1–36 (SHA-256 `bedec8cf3df81f29f7a9f61429d2e7c4f4ad6b092c2933c921c0f7f062ed65ae`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-32-zqp-promise-class--01.png` | `18262e3b13100a50a9524d47e0dd5e79ac80a9fb7b412daeda39547cf71397a7` | Attested |

### `def-qa-34-output-and-cost-types` — Classical output, quantum-state output, and access costs
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-34-output-and-cost-types.md` lines 1–41 (SHA-256 `68f431e726aa89d9ed50830c78b97a240aaf39a7537af89262fc0dfc4e2caa55`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-34-output-and-cost-types--01.png` | `099e3d51405b03dbd60717f02d008c864df4675638ea7e85251b5e59ac1c0917` | Attested |

### `def-qa-37-certified-matrix-input` — Certified fixed-dimensional special-unitary input
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-37-certified-matrix-input.md` lines 1–44 (SHA-256 `d0e1e4dac3f7eb41374a8ba9fbaeb99f6bbe9e89293ff256c7cc6548dd0c9928`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-37-certified-matrix-input--01.png` | `23fe394be3262aba3ac9a5f215441a3b4928f3b76586f62b41136dd0a969c4e9` | Attested |

### `def-qa-binary-dot-product` — Binary dot product as parity
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-binary-dot-product.md` lines 1–59 (SHA-256 `6c243d94861a319740859ccfcf9f857b904fc721c26e8a3780538ca8bd2a4074`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-binary-dot-product--01.png` | `e964ca3d4dd9438084d4dc1094a0f42e36876a211a4092777d5618c99f40c6c9` | Attested |

### `def-qa-deutsch-promise` — Deutsch constant-versus-balanced promise
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-deutsch-promise.md` lines 1–46 (SHA-256 `52273ed82adb591e329954a2ddbe5d8a6429ee9627284ff9f6ae07dc8a765680`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-deutsch-promise--01.png` | `3285f601183feb1941623e48641af3f480748e08ce48b96e8f8daf76355cfb97` | Attested |

### `def-qa-finite-cyclic-discrete-logarithm-problem` — Finite cyclic discrete-logarithm problem and costed encoding
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-finite-cyclic-discrete-logarithm-problem.md` lines 1–48 (SHA-256 `c5d34cb5a9e919be01cd949ef803b52f7906c1a9da1d485028f13fee5cf45f2d`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-finite-cyclic-discrete-logarithm-problem--01.png` | `a2eb8e01116c479c6f01aa79549bd7183a006908d7639079d448eb8171253b08` | Attested |

### `def-qa-shor-cost-accounting` — Shor factoring cost-accounting branches
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/def-qa-shor-cost-accounting.md` lines 1–39 (SHA-256 `4cc2059b5b8c12acace7647c64ef0dd9fb5f591fed40f0919736930a1b9e2201`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/def-qa-shor-cost-accounting--01.png` | `0521a6ca22c534c826c12fd83e6ca1ca3c498ae72f3c35d73fc2f31113df9d95` | Attested |

### `ex-qa-15-or-polynomial-small-n` — A one-query exact algorithm on a two-point OR promise
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-15-or-polynomial-small-n.md` lines 1–71 (SHA-256 `472a9b60bc50a3a41a5f54ffb5c19ccefe4a7c95856af172896f7481cf245886`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-15-or-polynomial-small-n--01.png` | `90f7b9283678e1afb39e24ea8903800e0ff888272baa92987342cf666937fad7` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-15-or-polynomial-small-n--02.png` | `e24ee3d02b07b8a93a47f3719ca31cda7a22b0da4f20fb04822950cc8db2dc73` | Attested |

### `ex-qa-21-cancelling-normalization-padding` — Cancelling identity padding fixes the LCU scale
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-21-cancelling-normalization-padding.md` lines 1–65 (SHA-256 `ba3893c4d4d29bfccb5c4eb30b6a8900f4cd759fc7c1c06e4855b0619a00ac13`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-21-cancelling-normalization-padding--01.png` | `76536e87f9442acf8e3fd4f2df196f9dfe973d790a2fd9ab775f3e38072fb742` | Attested |

### `ex-qa-27-fixed-vs-variable-time-cost` — Fixed-time and variable-time solver cost comparison
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-27-fixed-vs-variable-time-cost.md` lines 1–53 (SHA-256 `1f28132f9c756a69a70576296e5839b5e72f15eb7f475d6bfd21be0d17577077`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-27-fixed-vs-variable-time-cost--01.png` | `869b37690be0697b37ce35ebd61e75d4608f81eac1033477296eaea95f8134ec` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-27-fixed-vs-variable-time-cost--02.png` | `b33e9e9ef80248a69cf92660702f6a1d0c7a9d131607daaa9cc56018e5846f07` | Attested |

### `ex-qa-34-three-stage-budget` — A three-stage precision budget
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-34-three-stage-budget.md` lines 1–64 (SHA-256 `80271479de9aaaf08a9620b3ac2429a528f23c0cb63ec99fbae95319d4cc33b8`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-34-three-stage-budget--01.png` | `7f1e166f242078e9b5a065504afd7153abd77df7fff150f5f163ac504deb34ac` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-34-three-stage-budget--02.png` | `6c3d426d644e7ceae95b233ae1740f4d7ad6234fc81b2391b94199564fa4150a` | Attested |

### `ex-qa-finite-abelian-fourier-tables-and-convolution` — Finite abelian Fourier and convolution examples
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-finite-abelian-fourier-tables-and-convolution.md` lines 1–99 (SHA-256 `120a7b32c1bb32f11505a49cd3225f50f822731d019c4f554e0c2e57e3fbcc53`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-finite-abelian-fourier-tables-and-convolution--01.png` | `08ecc0f665ba9c4490981460b91b6a22ee67ce2f2fc41f5ac6308ecf913e97e0` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-finite-abelian-fourier-tables-and-convolution--02.png` | `dd329334b13945a1a9f22352a84ce110e8215e293f6aee40c79b4a102d946070` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-finite-abelian-fourier-tables-and-convolution--03.png` | `bae4d7650c2c9b737c17afe919a410e58397299a7dd20b3d946847d0f4931528` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-finite-abelian-fourier-tables-and-convolution--04.png` | `92690249ed5a96670c49ba7728edc262348677250bc0b97765dc2a4f2bd5e0b0` | Attested |

### `ex-qa-shor-factorization-of-fifteen` — A Shor order sample for factoring fifteen
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/ex-qa-shor-factorization-of-fifteen.md` lines 1–59 (SHA-256 `e4877d35be7764afe5df2b678dd4437aa237b5d7e43d92ccd8ec330635d36b94`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/ex-qa-shor-factorization-of-fifteen--01.png` | `7c29bc1cf428e8af988271f24f92b3452ef9e0d2e3a7309c5f5c18ff0be7eefd` | Attested |

### `lem-qa-13-grover-eigenphase-relation` — Grover eigenphases encode the good probability
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-13-grover-eigenphase-relation.md` lines 1–48 (SHA-256 `4884bd2951fe9bc6be4a35230a5fec2df4e9dd083395cc1a914125aa9d58f77d`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-13-grover-eigenphase-relation--01.png` | `fbbc9beee68352f70a56ef28d75ea305ab3ccec915d69ad03c0e4b5786eb82ec` | Attested |

### `lem-qa-15-branch-density-degree` — Unnormalized branch density entries have degree at most twice the query count
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-15-branch-density-degree.md` lines 1–67 (SHA-256 `1bbcefb39367d6d640446c9c47a1269c31fca05b4f436af9d2d485d1c0fbe5a0`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-15-branch-density-degree--01.png` | `7910e4cd9fbdcaaa93aef1c232386d2a74c1347fdbedcd9f4102f8d6b3b8306d` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-15-branch-density-degree--02.png` | `8b0c082ea940c2b43cefe3cde09d7b60e4bd5ac88c4169d6b2906d861743ce3d` | Attested |

### `lem-qa-16-general-adversary-finite-and-attained` — Finite, attained general adversary value for nonconstant Boolean functions
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-16-general-adversary-finite-and-attained.md` lines 1–57 (SHA-256 `11c06ee1e333e1075b65005195c52e2a8425adbc4ab7d704def3e1bd4b2167fc`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-16-general-adversary-finite-and-attained--01.png` | `3aa7ef6f7e5bcdac7e42aacb7e76f2f5829923115d17e9fc4167f97e6eb7ca4a` | Attested |

### `lem-qa-18-absorbing-walk-discriminant-decomposition` — Discriminant of the marked-state absorbing walk
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-18-absorbing-walk-discriminant-decomposition.md` lines 1–61 (SHA-256 `eed8b613286c6417b3699f68757f06e67ea6e0daa99c9658103245df78c42805`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-18-absorbing-walk-discriminant-decomposition--01.png` | `8b5cb249f9bed65e3f0cc8eb9e386e4eaed38847a87ecaedeb70b5e2d2d368e5` | Attested |

### `lem-qa-22-block-compression-contraction` — A projected unitary block is a contraction
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-22-block-compression-contraction.md` lines 1–45 (SHA-256 `ebed77f4dd8a28d9399aa825222cf93f1e1161c1e414e985273b54df4755785a`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-22-block-compression-contraction--01.png` | `635f6464caaff1b68e106f6de70b63ce9d767c578447873211e0f9789b04a3ce` | Attested |

### `lem-qa-24-singular-transform-basis-independence` — Singular-value transform is independent of SVD choices
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-24-singular-transform-basis-independence.md` lines 1–63 (SHA-256 `7b4783ea3fe7a2497b31cfa679249b0c4e7edc2d430e02b40c753ee48d69069e`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-24-singular-transform-basis-independence--01.png` | `8b62b176c0a3c5d410f598b5a84e6f801ccd63ca28b1c6d024315497905b5426` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-24-singular-transform-basis-independence--02.png` | `679142e17708ac1fc497f8fd0497af5487d90890760ff0d0db719cc03bdb57ff` | Attested |

### `lem-qa-26-hhl-filter-perturbation` — Relative stability of the HHL filter on supported eigenvalues
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-26-hhl-filter-perturbation.md` lines 1–67 (SHA-256 `5466816b6c146f9e8fc0fc9520cb74987a26ca4e9b5e692c87137eed3d409159`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-26-hhl-filter-perturbation--01.png` | `ac07772adab6abde7125142319465202d86a874a7f749886e994db2ea12c6c55` | Attested |

### `lem-qa-27-even-sign-window` — A bounded even window from an odd sign approximant
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-27-even-sign-window.md` lines 1–57 (SHA-256 `69a3634bf4ee62d57e599c965fa00075d4fdf8a6254dc2368a95eb9cf3f3bd96`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-27-even-sign-window--01.png` | `828643897c56b218d9bca0f8abb8aad55feb933d55369ab9e6bc5ddbfc1978a3` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-27-even-sign-window--02.png` | `4224e5ad49a498817203d8c12469b6efd2662bc4b283fd3b0d729b9bcc58a2a8` | Attested |

### `lem-qa-30-capamplify-state-output-bound` — Capped randomized amplitude amplification preserves a flagged output
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-30-capamplify-state-output-bound.md` lines 1–72 (SHA-256 `98ed923267b6a3b01dbe554e41d1530c270ad8a624c33cbf1bdb5d606f4a2018`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-30-capamplify-state-output-bound--01.png` | `d73b222f0055ccff6711e0a1445c1ad67e375489041ac43c4700304997f71ef8` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-30-capamplify-state-output-bound--02.png` | `5a5b4e4d5697f613d1607a88677adabe95b1d474fb8e489a265cf0b1474f90af` | Attested |

### `lem-qa-30-normalized-sdp-strong-duality` — Normalized Hermitian inequality SDPs have equal primal and dual values
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-30-normalized-sdp-strong-duality.md` lines 1–89 (SHA-256 `ef4ce652502b0719744316e82b236e30ec7ed79bbe575f9917ef2e6403556db8`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-30-normalized-sdp-strong-duality--01.png` | `e81fae6c2344de33ce16a3212f1cb4754cbdc9cce523a67b8aee85bfd4b4394e` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-30-normalized-sdp-strong-duality--02.png` | `3a56c0848c2b9700eb0692a98ff65051c1897f126e863b47afe7ce9d4e6711c9` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-30-normalized-sdp-strong-duality--03.png` | `b6368d771e63c2fa9d2bdac42e453b37871f89a702c4938d2e6b4396c6f13ed2` | Attested |

### `lem-qa-33-feynman-input-output-penalties` — Input and output penalties on history states
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-33-feynman-input-output-penalties.md` lines 1–46 (SHA-256 `b0e19792b677ae1a5ec600a4214eba265751a530206187f43e6c2aed25386336`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-33-feynman-input-output-penalties--01.png` | `a9ce72698772c6957861306ad1d3ee0a7c3330d38f37d97cd82809139aacbe0b` | Attested |

### `lem-qa-33-normalized-clifford-t-su2-package-dense` — Dense normalized one-qubit Clifford–T package
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-33-normalized-clifford-t-su2-package-dense.md` lines 1–49 (SHA-256 `fc917ebd8b7ffd0bb44e055331b6f15358e95959eb620c3e2f8ffd21879f04a8`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-33-normalized-clifford-t-su2-package-dense--01.png` | `967b2617288ee072d292f3ab955c0bc57786298c3bfc95cb0b0cfa28638177fa` | Attested |

### `lem-qa-35-kl-event-separation` — A separating event forces relative entropy
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-35-kl-event-separation.md` lines 1–45 (SHA-256 `b8c4cbc421bc6b47c0456e6d85925812c83736e46901a9be1d813c986388b8e2`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-35-kl-event-separation--01.png` | `0abe96126ae4a49b96a774637f4c215fc41fbaf73a1d019106078cf9f7902b0a` | Attested |

### `lem-qa-36-history-path-ground-vector-monotonicity` — Nonnegative monotone ground vector of the history path
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-36-history-path-ground-vector-monotonicity.md` lines 1–58 (SHA-256 `fbde22cad020b2c08a1ab07d0cb6166f7956bc9bc063ae188067138f61a12204`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-36-history-path-ground-vector-monotonicity--01.png` | `403a5f8edeefcb1814d7c89a5285070b306ea22f10c98c22aa91472e33043677` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-36-history-path-ground-vector-monotonicity--02.png` | `707cd8846e4c1085077527705b7888cdd45738da406f28dee9c5f9d85f0e42f5` | Attested |

### `lem-qa-annihilator-restriction-cut` — A Fourier sample cuts a larger common kernel
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-annihilator-restriction-cut.md` lines 1–68 (SHA-256 `4f6dbeffe28f1b99d06b84069e5d2c2a6e4e8a81adb2136ce683fd202e78c5bf`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-annihilator-restriction-cut--01.png` | `52bfa6465875f21114faa84ec43fa73ac6ee3168bc5e7bdfd3e3fe3bfa501f50` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-annihilator-restriction-cut--02.png` | `459f9edba5f76747008c883c57925a2ef617d6af8e412ae9f8b2f918a9794f98` | Attested |

### `lem-qa-cyclic-group-has-n-characters` — A cyclic group of order n has exactly n additive characters
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-cyclic-group-has-n-characters.md` lines 1–50 (SHA-256 `144e8f4e4eec34d3049cbabe0b7fa69f1c4cf823089b537e950eb8a85f6279e9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-cyclic-group-has-n-characters--01.png` | `7f6c3b57e6c9379eea676e18d0145eb12b0cfad4911da7cc91d2de9ef0c574be` | Attested |

### `lem-qa-phase-estimation-nearest-grid-bound` — Nearest-grid probability in phase estimation
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-phase-estimation-nearest-grid-bound.md` lines 1–79 (SHA-256 `4ee8c54efd901a184d570f17a8a537bafd1cacd8515e65c85987d1b2164d0582`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-phase-estimation-nearest-grid-bound--01.png` | `3e287b6273adb1499152cbdf043626be9cb2d31431fda71cfeb95b890b1dca08` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-phase-estimation-nearest-grid-bound--02.png` | `c39f2e87aa94a0b05fa06bd2a8889f53e2f775282d8ac2b309d4c95041bb6702` | Attested |

### `lem-qa-swap-is-three-cnot-circuit` — A SWAP Is Three CNOTs
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/lem-qa-swap-is-three-cnot-circuit.md` lines 1–53 (SHA-256 `07fa51b69bc0de4bc7c39259ccb3477fb6d383acd9f492b0f02c78be6366ad02`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/lem-qa-swap-is-three-cnot-circuit--01.png` | `3270eea53bcb9bbb81ee5a23539070686f535bb10d21d54765376ad32e313970` | Attested |

### `prop-qa-34-sample-inner-product-estimator` — Estimate an inner product from ℓ2-sampling access
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/prop-qa-34-sample-inner-product-estimator.md` lines 1–59 (SHA-256 `95b0fc10f18be8172c2eac06ca429f2988427014bf4e5fec570c114369f7f764`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/prop-qa-34-sample-inner-product-estimator--01.png` | `0265b5aab7fdb7531758107a13f70e54238fb365f274dc982075a603f35decae` | Attested |

### `thm-qa-11-grover-iterate-query-cost` — One Grover iterate uses one standard bit query
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-11-grover-iterate-query-cost.md` lines 1–49 (SHA-256 `7afad14adb26a009627efa8da91b214bfbacfb0fe4513cbcf9f187937a26b076`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-11-grover-iterate-query-cost--01.png` | `aa2a738c71732de3c148dad5973f0c3bd0237b35d48f77a77e6ea5f0a24bdee2` | Attested |

### `thm-qa-12-exact-success-query-cost` — Exact-success amplitude amplification query cost
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-12-exact-success-query-cost.md` lines 1–71 (SHA-256 `97d0fc846909924df7526064d00ecd8746722e7dd39ab6c19c5a5d4dc9524c72`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-12-exact-success-query-cost--01.png` | `756602afb12c951105828268e04be53711a27915c99451deba3565157ec8e9ca` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-12-exact-success-query-cost--02.png` | `d980516828a8d3d6d5feb057ae94bf3358b6c5521092ac7e131d5ad84a7cf879` | Attested |

### `thm-qa-13-counting-query-complexity` — Quantum counting query complexity
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-13-counting-query-complexity.md` lines 1–54 (SHA-256 `f0e93839fc5acf009f6453958015f2f9df93961fc9893298cb72b983dd2b4f7d`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-13-counting-query-complexity--01.png` | `98a3f3b81f2363f1d39ee20a1d0ebad9ffa7a6a01076859bfc514070cb6e05f8` | Attested |

### `thm-qa-14-zero-completion-query-simulation-correct` — Zero-completed query simulation is exact and uses one raw query
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-14-zero-completion-query-simulation-correct.md` lines 1–62 (SHA-256 `c46a691779c1bf5a71bf4e9f5300c472c5a7f6270684ed2a503eb06230eec5c0`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-14-zero-completion-query-simulation-correct--01.png` | `9a258b0dd84c4f6ee638ac21b5524abae5c2115119a62b683b11bfe3db34da36` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-14-zero-completion-query-simulation-correct--02.png` | `28c912cba2ca6ecb51b981c9ca6954875285c708d3f6d982f6dc6b1c87d02bfd` | Attested |

### `thm-qa-16-dual-vector-characterization` — Dual vector formulation of the general adversary bound
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-16-dual-vector-characterization.md` lines 1–90 (SHA-256 `ab318af8b8ff0745ca1b65073f5ddcff9afce190cf7fa7e613a9c3e2f07d3631`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-dual-vector-characterization--01.png` | `66e4aea3f15d45324a463446520a2d1af8073371632bf4e1010cbf0a25800d9c` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-dual-vector-characterization--02.png` | `d4ed4765c2befefd499776499bff8682523f0b1e27c6546072c1dcb162d2259e` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-16-dual-vector-characterization--03.png` | `a9a190cb30d84ac74068b6097eed55f125a98f669601d59aa46f55cb5a9273f7` | Attested |

### `thm-qa-18-element-distinctness-qr-access-gate-cost` — Element-distinctness gate cost in the QRAM model
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-18-element-distinctness-qr-access-gate-cost.md` lines 1–133 (SHA-256 `9d2133de853a7f3ebcf7e2af42e21ce8c864f6d2bbf88f04aa9c9323f325cb6b`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-18-element-distinctness-qr-access-gate-cost--01.png` | `9477e2d2d23cf5d212184fdcae67ccf03dcfca442a7fa2165c30f7589faafa4a` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-18-element-distinctness-qr-access-gate-cost--02.png` | `970c916b36500db897c42cc727d4b72bcecc271c1f7b9e8d4eafbc9084ae85f1` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-18-element-distinctness-qr-access-gate-cost--03.png` | `e4eb9ae6b283aa8f526ebacab255fda7645cbddd15dddbaa6110c86893e6c45a` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-18-element-distinctness-qr-access-gate-cost--04.png` | `4807138569ab17574731cabd4553142de6f503b49c289c4dcf25f87a7c31e7b4` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-18-element-distinctness-qr-access-gate-cost--05.png` | `3e5b04e8d77e72579af901cece252e696d34e2cfed1a77aadff0639b07a0dc25` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-18-element-distinctness-qr-access-gate-cost--06.png` | `4f08d2d8f843889f4fc8865174e2dd45c7155269ca3622c7e271f68d51fd4d0a` | Attested |

### `thm-qa-20-second-order-conservative-error` — Conservative second-order error
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-20-second-order-conservative-error.md` lines 1–64 (SHA-256 `859845e9cb9d84c3d8aaf24d8321060174bcc007b98d97650e2a966fef463733`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-20-second-order-conservative-error--01.png` | `da4e7fb3061aa0aecadb5b62bf171cd743390e3eb52793d3168d633d7c325e5d` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-20-second-order-conservative-error--02.png` | `42f1399df0440d103efc5a805d847c1a080693f3e003abec9585f0589e2dadd3` | Attested |

### `thm-qa-22-long-product-error-recurrence` — Error recurrence for a chain of block-encoded products
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-22-long-product-error-recurrence.md` lines 1–53 (SHA-256 `b9b50c7d78099e4c8838ac06aa3f4803b19e733b435c75e05a1798dc4a6f1726`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-22-long-product-error-recurrence--01.png` | `17863e94130809188fa8583d9e6c730197d10843b1cd88ce5ea364a8bb7d80c8` | Attested |

### `thm-qa-24-projector-phase-implementation` — Projector phase operations from controlled reflections
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-24-projector-phase-implementation.md` lines 1–63 (SHA-256 `6e24b474869f843abe76c4560d3ca19015f75fe1ed50014948a0c340bb7c1bdf`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-24-projector-phase-implementation--01.png` | `5f43a209f2bd47590bd78f70b792f1750bb24d9093fedaf71d8772ff7f0cfc41` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-24-projector-phase-implementation--02.png` | `4a70c756cbd07e53f7be7eed03b36ee0153e637e3f7d3dfa0874a89ade584d04` | Attested |

### `thm-qa-25-sparse-hamiltonian-block-encoding-correctness` — Correctness and access cost of sparse block encoding
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-25-sparse-hamiltonian-block-encoding-correctness.md` lines 1–64 (SHA-256 `2bf5858e57096fa28f03ee065d3187aa9899f1271c5ce4691dbec5750a63b74c`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-25-sparse-hamiltonian-block-encoding-correctness--01.png` | `9d999b7af3bfa79f0591680d0dc6fda0748a031857b73ea31f1bee8877c462d6` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-25-sparse-hamiltonian-block-encoding-correctness--02.png` | `f85b089c88a5c5b36045de97d9ddaeba7e0c31a204c64f89b4aa5a51deda3d03` | Attested |

### `thm-qa-28-matrix-function-error-cost` — Matrix-function transformation error and resource bound
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-28-matrix-function-error-cost.md` lines 1–78 (SHA-256 `78bd78360cea81e24134348acc423dd706bc5696dd62bc3b1d85b08bd981f756`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-28-matrix-function-error-cost--01.png` | `2cd0f966469c531696d1d05d50eb3193dd00d7a1228c1aa6783883852cb828da` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-28-matrix-function-error-cost--02.png` | `e721496d8a4ec071190acab22dd1a995f867c06cd46a52b165088275464f0865` | Attested |

### `thm-qa-30-generalized-minimum-guarantee` — Quantile minimum and coherent-score nondomination guarantee
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-30-generalized-minimum-guarantee.md` lines 1–69 (SHA-256 `c2e14a9f0d435df3814bba3648bd7c62d11f5c6b099359335d29868b7f4163e7`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-30-generalized-minimum-guarantee--01.png` | `3778e8b32892ea0f49dd520d662a29c34088aebeb8a3ba59faaccbfaa3893d84` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-30-generalized-minimum-guarantee--02.png` | `7707d7cc3c4095af19a2240b566728a6672a9e60d4c7f0724404e1be1354a74b` | Attested |

### `thm-qa-30-sdp-weak-duality` — Weak duality for the finite SDP pair
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-30-sdp-weak-duality.md` lines 1–56 (SHA-256 `30a85f9ba1ed1b5805760ce40a5993ba265272637fd34f5d692c2d4d34d7572b`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-30-sdp-weak-duality--01.png` | `52682e4b6c5c4a18f1259d4ab11c70c3ba31046409eb2f4c67bebe7e43b16748` | Attested |

### `thm-qa-33-local-hamiltonian-in-qma` — The encoded Local Hamiltonian problem belongs to QMA
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-33-local-hamiltonian-in-qma.md` lines 1–72 (SHA-256 `f7663f0a5552345c0b1fd169c6026b0cd633bc457a81348e8ac7014823bac2b1`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-33-local-hamiltonian-in-qma--01.png` | `4b1aa2304958c1f4471f710eaeca361813d604233b865a445fa172280b1eee1c` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-33-local-hamiltonian-in-qma--02.png` | `70663aff31e4e0ac79491cc63da9d8c39c9d74de4ad261fc23346c198525cdc9` | Attested |

### `thm-qa-34-product-state-error-bound` — Tensor-product state errors add under trace distance
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-34-product-state-error-bound.md` lines 1–74 (SHA-256 `d079638a8225a99960fc7db9ece281b1549bfc7b8215ddece6efee717d6a1c50`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-34-product-state-error-bound--01.png` | `e025ec63f8e3fd154cf70501bc9c4b0231c0118d7c5aa95b0629f881aad60c68` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-34-product-state-error-bound--02.png` | `b335987f8b19da4b9e1ede0e24144a60368770035d573165787e24a4c6680c65` | Attested |

### `thm-qa-36-circuit-to-adiabatic-simulation` — Circuit-to-adiabatic simulation
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-36-circuit-to-adiabatic-simulation.md` lines 1–84 (SHA-256 `da13f49f852dda9d3ab57f2279ac14ca067c1e1574e8240db1f39cea5fb2176f`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-36-circuit-to-adiabatic-simulation--01.png` | `0382f4ca262003218d2ae3d914befd68475e22eed10384fb46acdc7d965b72ed` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-36-circuit-to-adiabatic-simulation--02.png` | `37d22f6e3a338861c785902d93f19580f1171bcf224fba9bcba92257587caa63` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-36-circuit-to-adiabatic-simulation--03.png` | `696695a6722451015ba3a27748ab1271cc454f29a80439892ac40d90affda361` | Attested |

### `thm-qa-bernstein-vazirani-classical-query-lower-bound` — Classical Bernstein–Vazirani needs n queries for bounded error
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-bernstein-vazirani-classical-query-lower-bound.md` lines 1–59 (SHA-256 `d86aa1d1b0c8c7e478a33ca28d5f6067d0e11f61c706cc4867b9bf148e84e7b0`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-bernstein-vazirani-classical-query-lower-bound--01.png` | `fa6b0206260368025f103552e35f683730b04520242f24a0dfb0578be5f90d36` | Attested |

### `thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound` — Three classical samples solve Deutsch–Jozsa with bounded error
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound.md` lines 1–52 (SHA-256 `a340e6c20554c4e765d0464bc2991768f02e99a9a88840cf09d0431bce431e62`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-deutsch-jozsa-randomized-constant-query-upper-bound--01.png` | `13fd18d083180012ac2419522873334dd0105c748594c94aa8a39088d7937323` | Attested |

### `thm-qa-finite-abelian-dual-character-orthogonality` — Dual-index character orthogonality
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-finite-abelian-dual-character-orthogonality.md` lines 1–65 (SHA-256 `cbc809573fc3a35b4f65129be65759f7000211282354b7ad2538b215e9a28cb9`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-finite-abelian-dual-character-orthogonality--01.png` | `9d300ffea16cecad26b464a10c73befde1beaac7c09addcb8734ba3aea2e60e0` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-finite-abelian-dual-character-orthogonality--02.png` | `63f6e07042af6c2f3e6aa7c34078b12bd0340fe06c2acff5e6cab205a681f077` | Attested |

### `thm-qa-finite-abelian-subgroup-annihilator-cardinality` — Subgroup-annihilator cardinality
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-finite-abelian-subgroup-annihilator-cardinality.md` lines 1–67 (SHA-256 `66bb3f49e045a856b3965105efca6986e301cb89699899afbacef1132eb055a8`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-finite-abelian-subgroup-annihilator-cardinality--01.png` | `222a40d917be5f70eb15f6f635a6fed1b10711aecc51d9b75dde36217e1a3a6b` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-finite-abelian-subgroup-annihilator-cardinality--02.png` | `f85f8091bdf69780093e3dc41d2d52a0ba01d9f97e74590a489bc87607f4881b` | Attested |

### `thm-qa-phase-estimation-access-cost` — Phase-estimation query and gate costs
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-phase-estimation-access-cost.md` lines 1–71 (SHA-256 `4500cdf0cc21d379dd4268b28f22aaccb3b98aa104724326bf457c320cf8e183`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-phase-estimation-access-cost--01.png` | `c80901226e87c57b06e5c899aafd33109ebe0bbf543eb699c67ad608f47a3600` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-phase-estimation-access-cost--02.png` | `834770200cc361aa0096253c480076dcfbe7a329f947343c52a9840a8deaa5da` | Attested |

### `thm-qa-relative-probability-guarantee` — Relative probability estimation with a charged finite cap
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-relative-probability-guarantee.md` lines 1–87 (SHA-256 `a83cf25cf4f2170ccc8b9c7147c6c9f1af984f2f527e286df128c6b07a364aa4`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-relative-probability-guarantee--01.png` | `651bbb7d1cc526744033c387772f517a1c4439cc73e0814ef30fca661c7eb339` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-relative-probability-guarantee--02.png` | `2459cf17002223b0ab8ed2f873edcc9e163b0cf8257a4eccd7e8055a1d453257` | Attested |
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-relative-probability-guarantee--03.png` | `5e1bd1938e2af51b95b4d582b548df2fd6a527115bf6b2b44a12070e4e6f4162` | Attested |

### `thm-qa-truncated-qft-gate-count` — Truncated QFT ideal gate count
Snapshot: `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/snapshots/thm-qa-truncated-qft-gate-count.md` lines 1–59 (SHA-256 `549bb3453a0c8259fc6ded124e7084c0728cce7ad4155dd05a564f567431c278`).

| Receipt-listed PNG tile | SHA-256 | Individual original-resolution viewing |
|---|---|---|
| `research/math-library-rendering-audit-2026-10-23/quantum-algorithms/screenshots/thm-qa-truncated-qft-gate-count--01.png` | `7c242431fae98683447fca3212f30cc4549bd2229c130bd5df73bc8b6c2c765b` | Attested |

