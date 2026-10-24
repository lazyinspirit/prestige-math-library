# Information Theory rendering audit — lane 04

Reviewed 47 assigned items and all 69 listed screenshot tiles. Every tile was opened individually with `tools.view_image` at original resolution. Frozen source snapshots, current source files, local HTML, and PNG hashes match their assignment or screenshot receipts. Per-item and per-tile hashes are recorded in `lane-04.json`.

Confirmed rendering defects: 0. Editorial diagram candidates: 2.

## Optional diagram candidates

### `ex-it-binary-symmetric-slepian-wolf-region` — lines 42–44, 70

The source states the Slepian–Wolf lower-bound segment, both endpoints, the collapse at p=1/2, and a horizontal continuation. A rate-plane figure could plot R1 against R2, label the segment from (h(p), ln 2) to (ln 2, h(p)), and show the p=1/2 corner (ln 2, ln 2) with the ray R2=ln 2 for R1≥ln 2. The source already determines these relations and the feasible side; this is an editorial clarity candidate only. Line 70 confirms the segment is active until R1=ln 2 and the coordinate constraint is active after it. No diagram is present in the tile.

Screenshot: [`ex-it-binary-symmetric-slepian-wolf-region--01.png`](screenshots/ex-it-binary-symmetric-slepian-wolf-region--01.png), SHA256 `4fd4dc4873390c05f808ca7f276d5af78954e27e56034b8a5422ae31390b09ea`, 1200x1400, viewed at original resolution.

### `ex-it-gaussian-distortion-waterline` — lines 38, 44, 58, 60

A water-filling figure could show variance bars λ1=4 and λ2=1, the level θ=3/2, and allocated distortions δ1=3/2 and δ2=1. It should mark coordinate 1 as active (δ1=θ) and coordinate 2 as saturated at its full variance (δ2=λ2), with δ1+δ2=D=5/2. The positive log contribution is only from coordinate 1 and equals 1/2 log₂(8/3). These values are explicit in the source; the figure would be an editorial aid, not a repair.

Screenshot: [`ex-it-gaussian-distortion-waterline--01.png`](screenshots/ex-it-gaussian-distortion-waterline--01.png), SHA256 `4a0d11e3e48c1973f8f313abf129bfeae5ea7ae8010100bf660c91c3f72a3bb6`, 1200x1400, viewed at original resolution.

## Existing diagram check

`ex-finite-register-arithmetic-coder-block-ab` contains a rendered interval comparison. The upper interval is [1/4,5/12) and the lower dyadic cell for 0101 is [5/16,3/8); the latter lies strictly inside the former. Its axis ticks, interval endpoints, codeword label, and relative placement agree with source lines 39–53. This is correct existing diagram content, not a defect.

## Coverage IDs and source SHA256

All assigned titles and complete ItemBody sections were reviewed against their frozen snapshots and local rendered HTML. All assigned screenshot tiles were viewed individually; per-tile SHA256, receipt, dimensions, and view status are in the JSON report.

| ID | Source SHA256 | Screenshot tiles |
|---|---|---:|
| `alg-it-exhaustive-global-empirical-quantizer` | `ef33c453baf4c6bdc948b3c9eeaa02aa0ecfc6d0540b54e4cc9be0acbc5452b4` | 1 |
| `cex-it-expected-random-code-error-does-not-give-maximal-error` | `e749859383a43b8ed616b8ae62bfc0633cdcab1b5a0d3fe1b18dd646dd16d497` | 1 |
| `cor-finite-relay-compress-forward-noisy-network-coding-bound` | `6d71741fd7f9410975016bfb2497803ef11f1340017f121b11391b293f264bc7` | 1 |
| `def-base-two-entropy-of-a-finite-source` | `eb49577e7147f945d5f4f79f9171cc8e426cde6b6fd73e10ce54186f67b035a7` | 1 |
| `def-discrete-memoryless-channel-operational-capacity` | `c0d1cdf5b05802ad2148128be369629b97c17afa98f48d688dcc8b46242b51dc` | 1 |
| `def-finite-dmc-cost-model` | `6d0cb1090165238d9259ff0c6b5b8fe7d0502a825f235ed587ef8e69282bf69d` | 1 |
| `def-finite-source-information-density-and-typical-set` | `0de2347db21e4e53a668ab15a38d4d63cdb828c5fce3127ab4ed8291b4d698e3` | 1 |
| `def-ideal-real-arithmetic-interval-code` | `6adc00e27e8b5351ccb932189519a7f2c145332fbb8c380d90d5d62caf6d5e05` | 1 |
| `def-it-finite-conditional-entropy` | `111624b33894fff8518b80d74e706c1672cded401fd698d8da00491ab94b551b` | 1 |
| `def-it-finite-strongly-typical-set` | `1cb5dfdb0328d4b52b48687fe929050ccafb3d5dec51dd696a0a0c8037cea969` | 1 |
| `def-it-multiterminal-lossless-code` | `ce2a4ee7f601a983ceed12de06ea296c7f2d5e2e905831e17919baf8a934e221` | 1 |
| `def-it-quantum-source-and-compression-code` | `b9b4ce9d12d51c5880738bef3f8af77bc99c15fac9175c5cb45ec491f5fcbdeb` | 1 |
| `def-it-two-user-real-awgn-mac-code` | `5f06bcfbd87a1f5d714bd845d150e7f2943d2c90bc506d7f24a570b298bb1ad6` | 1 |
| `def-parallel-gaussian-channel-with-power-constraint` | `82bcd55cc0eca41a100fc07955e1455a6e89a101869ac9cc96afb54993e2a89a` | 1 |
| `ex-binary-f-and-renyi-divergences` | `1661063119851db1abbd69847e3a0faa40739410a23151e01006236bdbfc2386` | 1 |
| `ex-finite-register-arithmetic-coder-block-ab` | `93e4b10c60c12908802b074703485d2714c8856567d83937f9b5f7905b50f452` | 1 |
| `ex-it-binary-symmetric-slepian-wolf-region` | `22c17e80c849405092a593c68939521a6d2f91e49b919d23364da289c6d297c3` | 2 |
| `ex-it-gaussian-distortion-waterline` | `4f25a5bbd06c20002b23ed7cc3521b44b82865f1084aa55700dffc179811ed37` | 2 |
| `ex-it-shared-random-binning-collision-probability` | `af1025ff2fd4616c3766e9ebd2459c9f093412865fb95b95221cce5d8e782deb` | 1 |
| `ex-qkd-secrecy-and-correctness-are-independent` | `a6380e0e598f5048d72712823bafe6e00c2f8c373ae7851c38f1067dcdc2d46c` | 1 |
| `lem-complex-scalar-gaussian-maximum-differential-entropy` | `7117a7057d68fb7586d2a30f6d8da25698fe9e3e4f83189dc544c8438a6ad960` | 1 |
| `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound` | `45dcaff76ec4776a2647794b1a0f44ceee8ad457828fad6c626c89f98d16b54a` | 2 |
| `lem-finite-conditional-typicality-packing` | `fe72d4b38c7a610d641a6f826056d1f35573e93ed83c45d823816341fb498b0f` | 1 |
| `lem-finite-renyi-generators-are-convex` | `af162e1af2f85b4950d3cf1c60e468c88b4c11690439eefcbad0664fb156cbb6` | 2 |
| `lem-it-channel-resolvability-soft-covering` | `7b0cb84b0690015c0fec60d97dc2a15c5e7a82cc7ed20b166e4ec6b1e3e7eb1c` | 2 |
| `lem-it-dmc-capacity-output-law-is-unique` | `4b83fb639bccaf75574489b5418ea68d06eb795f486959eed8b26eef7fc914ef` | 1 |
| `lem-it-finite-cq-block-sum-is-a-state` | `0c178ea9a9bc34b40841945d0018f6a432345dafb6a23587b79e1bfb83e083d3` | 1 |
| `lem-it-finite-marginals-and-conditionals-are-pmfs` | `ad021f700f648016bbac8061a6239edd8bb7f01a9202f334f2c3135a40c5110b` | 1 |
| `lem-it-finite-selected-codeword-markov-typicality` | `085151c8d854c70ce713ba0c0be74d17d6f29d1d32a38950e5d3a7caab73f62a` | 1 |
| `lem-it-flat-input-entanglement-assisted-achievability` | `3d1cafadcae88607f6df48f16d00e03ca08b5c54bfabf88e83113ad5df4b1d5c` | 2 |
| `lem-it-nearest-center-quantizer-is-borel-and-finite-distortion` | `ab57103af2febb19309a40518df2846df5568b3a5827602b1a35316120d3e1c4` | 1 |
| `lem-it-quantum-entropy-maximized-at-maximally-mixed-state` | `e3d22b31152e36c5fe090c51fa99078f6bfbb89097abd36d90ed25748c27cd0d` | 1 |
| `lem-it-square-root-cq-packing-bound` | `d84d649923dfee19abe6353a7526673000e13b85254722970d001987203f3ed2` | 2 |
| `lem-parallel-awgn-cost-constrained-achievability` | `f78bf384fa325fdaa266ad105bd5a104f20e8c3a2c75113a25cb3b2971170cb0` | 2 |
| `lem-real-gaussian-han-kobayashi-inner-region` | `ce3699c8b8fb8b4be02fac3c2123c14ff98ff23883935598b28aa5905c21639f` | 2 |
| `lem-water-filling-optimal-allocation` | `f07fb699a541b712e471aafb1263967998f83ee5885956ef8861d5045c117f9c` | 2 |
| `thm-discrete-memoryless-channel-capacity-formula` | `5dd547e7ae3861acb5d81fd86e595bbd2532aec8c77911a0c141f60f3dacb0c4` | 2 |
| `thm-finite-relay-decode-forward-inner-bound` | `8fa66678c8ba3916d00a36ee53de007bd3693ccbcb78dfd2b037ad039c68a502` | 2 |
| `thm-it-berger-tung-finite-multiterminal-inner-bound` | `e80d6de5f8d7d9066c9800f2c917fddfc063b63a2d874efeb45587cf538360f6` | 3 |
| `thm-it-entanglement-assisted-classical-capacity-additive-formula` | `e912967f11e553c4eaf26357cd77184621a3fdb107abceea4487b994fa9aba27` | 3 |
| `thm-it-finite-data-lloyd-termination-and-fixed-point` | `cc3eb13142d1a616b33147b456c06948e080afc7e483240f6259d98fb7421b05` | 2 |
| `thm-it-gaussian-vector-squared-error-rate-distortion` | `93aed638ef6763717e4628eb2810fdbf234b94dd9e99ee0d10918e2588be2256` | 3 |
| `thm-it-physically-degraded-dm-broadcast-capacity-region` | `7216263c4f5bd476fd9dfc53ac8bcf1b6de95c60e2e3caf741683024346e6774` | 2 |
| `thm-it-qudit-erasure-channel-exact-capacities` | `6ef4951df91c3207fc2ac9ae4926c4687891a9c23dbebca515e104aae744cd03` | 2 |
| `thm-it-universal-hashing-leftover-bound` | `fd6e9f2297064f98a525d81dfb642d2904d0200ccaeb17e5bfcb4db49782068d` | 1 |
| `thm-mutual-information-chain-rule` | `83245ce62a0fbee236d253a588bb1fa4dd966637146c1f949ecb52bb098a49f9` | 2 |
| `thm-viterbi-finite-trellis-is-optimal` | `a49d67610ce04d9043e49ac9dd57a67b16b96d3de477156accc297927e9ed3e1` | 1 |
