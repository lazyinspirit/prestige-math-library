# Neural Networks and Learning Dynamics — lane 05 rendering review

**Result:** No confirmed rendering defects observed. Reviewed 44 assigned items and 79 local PNG tiles.

## Review scope

Read-only review of frozen source snapshots, corresponding local HTML, and assigned local PNG tiles. Every listed PNG was opened individually at original resolution. No live website, HTTP(S), external image, item/app edit, publication-status change, build, test, or gate was accessed or run.

The item source hash in the assignment matches each frozen snapshot hash; each local HTML hash matches the assignment. Capture metadata reports no KaTeX errors and no diagram failures for the assigned items. The JSON ledger records exact snapshot, HTML, and per-tile SHA256 values.

## Findings

No confirmed issues found for title/ItemBody display, literal ASCII math, TeX/KaTeX, TikZ, reference-title leakage, Scratch, or visible clipping. TeX math appeared typeset in the viewed tiles. Links appearing as block content and punctuation wraps were treated as intentional.

Two source-described diagrams were present and visually consistent with the accompanying description: the feedforward computation graph and the transformer encoder/decoder flow diagram. They belong in coverage and are not defects. No source-supported missing-diagram candidate was identified among the remaining assigned items.

No production route or live-site behavior is asserted.

## Per-item and per-tile coverage

Every tile below was viewed individually at original resolution. Hashes are SHA256.

### alg-cauchy-matvec-at-roots-of-unity — Exact Cauchy matrix-vector product on a radix-two root grid

- Frozen snapshot: `snapshots/alg-cauchy-matvec-at-roots-of-unity.md` — `a8fc14513c72a8e696d5c9e3e95e1e15df2bc05635253a75943a87b8cdefd2b1`
- Local HTML: `html/alg-cauchy-matvec-at-roots-of-unity.html` — `8206ef9ea7f7b7c3cc870a3a7ba27218dc3618a88d83b95a4fb1158186a2f09c`
- Viewed tile: `screenshots/alg-cauchy-matvec-at-roots-of-unity--01.png` — `4b669a9beaa0da5475636e05c15b261b1c93d8ae8fbfed51a6a3d2902de8a625` (original resolution)

### alg-rectifier-variance-preserving-initialization — Rectifier variance-preserving initialization

- Frozen snapshot: `snapshots/alg-rectifier-variance-preserving-initialization.md` — `c47310bfedbbd4dfecb84c9ee24404a9d132b4b778ce3d1a3a5d1e89e91a1714`
- Local HTML: `html/alg-rectifier-variance-preserving-initialization.html` — `6d78ce9c10c7a558ced72c6469138ea45d8f1b2f921846415e1040ba950747da`
- Viewed tile: `screenshots/alg-rectifier-variance-preserving-initialization--01.png` — `94646b9af2b37e78afee722b95cd6b84f264b06105521f08793612ba8e8e197d` (original resolution)

### cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain — Exterior-sphere domains need not have global C2alpha Dirichlet solutions

- Frozen snapshot: `snapshots/cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain.md` — `3448189b57da8abfac3b1aed297d7619fd6fbb8f3d07887b0f57132e5fa83917`
- Local HTML: `html/cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain.html` — `f5de817896f543e22dfa1b7084c1ecb7ad5e73d47dc2e38eb287ae0f015f2a3a`
- Viewed tile: `screenshots/cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain--01.png` — `8f3a48b025555158eaf1b27120c4b8dd4e2f7f6e1e8b2fdfac8fc95c5e1bbfa5` (original resolution)
- Viewed tile: `screenshots/cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain--02.png` — `c5e3db2381974c5fdb0a90def6d40af63c43c17527a25f802a4c559d1ad34845` (original resolution)

### def-activation-class-locally-essentially-bounded-ae-continuous — Locally essentially bounded activations with null discontinuity closure

- Frozen snapshot: `snapshots/def-activation-class-locally-essentially-bounded-ae-continuous.md` — `7f9e017dc219872023aa9c17f2a1ecb480c1aede83636a146c6cb61f00f5f62c`
- Local HTML: `html/def-activation-class-locally-essentially-bounded-ae-continuous.html` — `d2c78a7bfc0d6a5b83002a8e24a3db0d5c1029a748e8bb2ab21df1fa7da0814c`
- Viewed tile: `screenshots/def-activation-class-locally-essentially-bounded-ae-continuous--01.png` — `ee8f215821a57a2e7b611f61d9ff48ed8889d93f57d4028a374e39033099f94d` (original resolution)

### def-feedforward-neural-network — Finite feedforward computation graphs and layered MLPs

- Frozen snapshot: `snapshots/def-feedforward-neural-network.md` — `6d51b349c8c0b3312de3d4cfe825149fa1874268992ebca3b338e2171e527c73`
- Local HTML: `html/def-feedforward-neural-network.html` — `e00fffa27f4555375dfdeef42b002653d4720046f88477365776128f1a6d5bf4`
- Viewed tile: `screenshots/def-feedforward-neural-network--01.png` — `0842141dee2d0a4d0c973a37d088892a1ecc288ae0aed39dd87eac5751f795d1` (original resolution)

### def-linear-separable-margin-and-hard-margin-svm — Bias-free linear margins and the hard-margin SVM

- Frozen snapshot: `snapshots/def-linear-separable-margin-and-hard-margin-svm.md` — `d964a61cd639b1f9d1e6aca3205f1f01a42f07e478b8de00883ff1b9a36e9537`
- Local HTML: `html/def-linear-separable-margin-and-hard-margin-svm.html` — `5414bb6c5447a1e2a140dd4f66b48c6e4ced46c833caf66c6483b221fe84f420`
- Viewed tile: `screenshots/def-linear-separable-margin-and-hard-margin-svm--01.png` — `3bbc9a2b9d553f5feb77a207ce88f40194cbf3d0ce664e160176153569fd18a6` (original resolution)

### def-multihead-self-attention — Multi-head attention and self-attention

- Frozen snapshot: `snapshots/def-multihead-self-attention.md` — `90bfaa7cc8a7ecea560881729746a5526d28d70d78b3fc66ce4f845ca61a60d1`
- Local HTML: `html/def-multihead-self-attention.html` — `5c00f6b38d9b105959e3c38c8b7f0c708e21dcb61e42dddfdd340365e4141796`
- Viewed tile: `screenshots/def-multihead-self-attention--01.png` — `2e76c463251ed0fcfc073c7a27d3a69eb3822b9ad9074c7d655ef3fa4a9f4ce5` (original resolution)

### def-physics-informed-neural-network-loss — Physics-informed residual loss and Hölder regularization

- Frozen snapshot: `snapshots/def-physics-informed-neural-network-loss.md` — `91ce045e1f8d0e8e6dfec9964ccfb3a559a03a0b42186f104a46ca97e9e2d0fe`
- Local HTML: `html/def-physics-informed-neural-network-loss.html` — `cb261101864e651e350f1f1eadde6b9c8fffc0d26501cb43bbda521733b8eac0`
- Viewed tile: `screenshots/def-physics-informed-neural-network-loss--01.png` — `12587867406946fc14472feb5dd57d76a1c8dd7ce37a4699c28854a364108d3d` (original resolution)

### def-sample-covering-number — Proper Frobenius covering numbers

- Frozen snapshot: `snapshots/def-sample-covering-number.md` — `ceb35c644c51f7efed64fadcd6f2454e5b8a809747f7ec536654c353e3dfa3a6`
- Local HTML: `html/def-sample-covering-number.html` — `f844ee864d71d3aa6fd7ed4da42f776c6ddb95d223aa37df04be64d64902b6cf`
- Viewed tile: `screenshots/def-sample-covering-number--01.png` — `64e38cd0777b815eed66b0aae8fa95b6931c809de77357e4b40db39c5f83396d` (original resolution)

### def-transformer-encoder-decoder-layer — Transformer encoder, decoder, and fixed-width expressivity blocks

- Frozen snapshot: `snapshots/def-transformer-encoder-decoder-layer.md` — `ec4973497342527674042ea1c83adcffb19a238d356bc63e17adc8144b13b474`
- Local HTML: `html/def-transformer-encoder-decoder-layer.html` — `1af1c4a53f34360ea75b3622094c1b933f0fd77e415dc1b4d817c3def85ddc7e`
- Viewed tile: `screenshots/def-transformer-encoder-decoder-layer--01.png` — `869e4ce54b9e495597619a3abf980034b204f6e063a7ecfd5525bb3fd64b341b` (original resolution)
- Viewed tile: `screenshots/def-transformer-encoder-decoder-layer--02.png` — `7ea9c7c10df74781a8f4abf0ba8a388f7f4afe08f553816cd09eba050522adac` (original resolution)

### ex-checkpointed-reverse-sweep-recomputes-intermediate — Checkpointed reverse sweep recomputes an intermediate

- Frozen snapshot: `snapshots/ex-checkpointed-reverse-sweep-recomputes-intermediate.md` — `e1becd1ba09441bc0b12df8bca2473fc289948b85fdffe0103e50839018e26ba`
- Local HTML: `html/ex-checkpointed-reverse-sweep-recomputes-intermediate.html` — `249a436db3ea6ad1fdf7ade73bd7511de899400e0a7d732bfe382444c14c77bd`
- Viewed tile: `screenshots/ex-checkpointed-reverse-sweep-recomputes-intermediate--01.png` — `696dbf39350a80342eff3d7a569a71d5a5f6b3f5ab90b0b05765e7a99bf022cb` (original resolution)

### ex-du-residual-skip-at-every-layer — The analyzed residual network skips at every layer after the first

- Frozen snapshot: `snapshots/ex-du-residual-skip-at-every-layer.md` — `66b85d2636bd870cca5e98d37e8ffe4cda43315f568fbef6822ef7cc42c9ea34`
- Local HTML: `html/ex-du-residual-skip-at-every-layer.html` — `c07fe71d31f9aeceb66960b5c0d3fe86d84e5c94781a346e46d30d8a802034d5`
- Viewed tile: `screenshots/ex-du-residual-skip-at-every-layer--01.png` — `e8646fee95373d46f2c26ad6bacd8e3a5a836b63e0298ff46603f33e8a1b4ded` (original resolution)

### ex-heavy-ball-optimized-quadratic-spectrum — The spectrum 1, 4, 9 gives tuned root factor one half

- Frozen snapshot: `snapshots/ex-heavy-ball-optimized-quadratic-spectrum.md` — `181a161eb4cdd0689953a367c229f07b46ff4410b95b6a3b4965a797823c1cd9`
- Local HTML: `html/ex-heavy-ball-optimized-quadratic-spectrum.html` — `c2c57d7d62b1f37d85133bdef645317218da258a6796845a7449d467494a1707`
- Viewed tile: `screenshots/ex-heavy-ball-optimized-quadratic-spectrum--01.png` — `1c78758aa21887c1d1d619e1ea92a2efb07b92dd35ac3b4ca1fa4fc5d590ff94` (original resolution)

### ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter — Marchenko–Pastur law and edges below aspect one

- Frozen snapshot: `snapshots/ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter.md` — `020cc6a7bfeda7151d6d0a05663b95e7637d372c3ec009971056ddced4f293a6`
- Local HTML: `html/ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter.html` — `3c40072f6c39ee6d567db6015994ada09428ff0a1f5b99ff02028674cbb8a8f7`
- Viewed tile: `screenshots/ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter--01.png` — `662c7a2bfc9c15210569f00ab97db0113f34c10e1eb515ff1dd6362cd7cc11e9` (original resolution)
- Viewed tile: `screenshots/ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter--02.png` — `54279371491d01115f53047f3a118120584de3cbbb8f12ed17b4474872cc03d9` (original resolution)

### ex-nonstrided-subgroup-and-coset-pooling — Non-strided, subgroup, and coset pooling on p4 features

- Frozen snapshot: `snapshots/ex-nonstrided-subgroup-and-coset-pooling.md` — `89a4141472877dfc7fde1aa564e5b9e36a6a98556c496a97304887e3f30aca30`
- Local HTML: `html/ex-nonstrided-subgroup-and-coset-pooling.html` — `057f6cac8e484d2f179c14fe06e476d387dabddaa4aaf161ef2074cd9474d59b`
- Viewed tile: `screenshots/ex-nonstrided-subgroup-and-coset-pooling--01.png` — `0d7520296cc47bf676b0390cdae6934ac8c4bb2686b2b96655d376ce5698d37a` (original resolution)
- Viewed tile: `screenshots/ex-nonstrided-subgroup-and-coset-pooling--02.png` — `8d07bb90c3650cb5565ac6a17acfca70d21e146372696f940d9dc63fce49ea7d` (original resolution)

### ex-reference-network-changes-complexity-not-predictions — Changing the reference matrix changes complexity, not the network

- Frozen snapshot: `snapshots/ex-reference-network-changes-complexity-not-predictions.md` — `f511ee0fde313a1b3586e137a34f83dec497e8ad75a2b82e5bcd26475cac2b1f`
- Local HTML: `html/ex-reference-network-changes-complexity-not-predictions.html` — `0424b3177d0c020cfec9539b1cb92d4953773b1caeb5769de96a1ee9995a7614`
- Viewed tile: `screenshots/ex-reference-network-changes-complexity-not-predictions--01.png` — `e12a3df26b3afb4b759945d8ced7bcb272fc34a1c1c88661f2fa695191cc40c3` (original resolution)

### ex-sgd-nonlipschitz-loss-no-uniform-stability — A smooth quadratic loss without global Lipschitzness has unbounded stability

- Frozen snapshot: `snapshots/ex-sgd-nonlipschitz-loss-no-uniform-stability.md` — `e19ea755cc91b5788b0755148401466cf0bd40a18bc35193d0247f096e9c0357`
- Local HTML: `html/ex-sgd-nonlipschitz-loss-no-uniform-stability.html` — `1fd081d243f6185a16c1cfb02989e053ac53c7d7e146c877f3d2e2634b6db1be`
- Viewed tile: `screenshots/ex-sgd-nonlipschitz-loss-no-uniform-stability--01.png` — `a7030ea87da8620905997cf637d5a4cc783075e7213a4ac419890171e2da2bff` (original resolution)

### ex-tiled-attention-one-key — One-key tiled attention

- Frozen snapshot: `snapshots/ex-tiled-attention-one-key.md` — `d5250f4e2f160bcf4b9f6ecb81bd01210de558a77995a752e3535af8972eefcc`
- Local HTML: `html/ex-tiled-attention-one-key.html` — `e29d989ca963e7629ea88f68845f088dc29e389a884f7b9cfead4083e0631040`
- Viewed tile: `screenshots/ex-tiled-attention-one-key--01.png` — `08f7bd47cf9058fa902782bf70a9d80fc755a1ccd0f57762e3bb6ea3499d2ed6` (original resolution)

### ex-zero-zero-initialization-stalls-adaptation — Zero-zero initialization stalls one step, while nonzero A can move

- Frozen snapshot: `snapshots/ex-zero-zero-initialization-stalls-adaptation.md` — `35468565aa853b562727d0d8dbe885df4dc0a882c45710a2a51bda224b15518e`
- Local HTML: `html/ex-zero-zero-initialization-stalls-adaptation.html` — `cbb09bf2d3a2ac5903f123741b6c3eb37703cad0f0cd15dd2b13f2b8f3b82dee`
- Viewed tile: `screenshots/ex-zero-zero-initialization-stalls-adaptation--01.png` — `69988db3e800b763767d11867385bc18556c23f2dd431f757670910667448455` (original resolution)

### lem-approximate-margin-kkt-limit-under-mfcq — Limits of approximate margin-KKT points under MFCQ

- Frozen snapshot: `snapshots/lem-approximate-margin-kkt-limit-under-mfcq.md` — `9662f1dc96f53ba379585e545ed8ec1f07a7227ed081e70bec40124dc497dc50`
- Local HTML: `html/lem-approximate-margin-kkt-limit-under-mfcq.html` — `4d0c1048ed43a5d0389b1d057333ed3ef75f15490511f79c3d8ca57b980fa3bd`
- Viewed tile: `screenshots/lem-approximate-margin-kkt-limit-under-mfcq--01.png` — `cfff79ea6056dea1414730fbe0136b0fc1d57b80ce41e4f99c30a9fd319b470c` (original resolution)
- Viewed tile: `screenshots/lem-approximate-margin-kkt-limit-under-mfcq--02.png` — `ca84907a0dbc543775d6d415f6c72252a60dfdef139ce003c4c610819533f2f7` (original resolution)

### lem-carath-ode-flow-with-integrable-local-bounds — Local flows for time-measurable fields with integrable local bounds

- Frozen snapshot: `snapshots/lem-carath-ode-flow-with-integrable-local-bounds.md` — `ee255dbb833ab8affd565f1c12ac5b63c0cd6c80253cc915fe6a7afc5c675ba7`
- Local HTML: `html/lem-carath-ode-flow-with-integrable-local-bounds.html` — `f402874aae2c5a09085069f3b94d3dfd37ca5dd791e8a49a09b878fdf6ee1c86`
- Viewed tile: `screenshots/lem-carath-ode-flow-with-integrable-local-bounds--01.png` — `d42dcb169c42d7b03ffea4c0dee87ff1d1315d4c3662d5c01b7cb509ca36ec15` (original resolution)
- Viewed tile: `screenshots/lem-carath-ode-flow-with-integrable-local-bounds--02.png` — `580b3392dd1e0c731d010ee7a74d475142d38c600e7fb5307f21f79fd704b75d` (original resolution)
- Viewed tile: `screenshots/lem-carath-ode-flow-with-integrable-local-bounds--03.png` — `ddd440cde88b6a5455b7644d41fa092f5dd3b2b8034ff5766e45a2d8ffd00d6d` (original resolution)
- Viewed tile: `screenshots/lem-carath-ode-flow-with-integrable-local-bounds--04.png` — `5784da02e48b1ec856a601521a686230c38911c9162f2eb5cf82d13e92fbc57e` (original resolution)

### lem-deformed-mp-fixed-point-solution-is-unique — Uniqueness of the deformed Marchenko–Pastur fixed point

- Frozen snapshot: `snapshots/lem-deformed-mp-fixed-point-solution-is-unique.md` — `693752f721cb9d65b7bb91ec02b9fce28b53ee49ef81e4d9ea0f261211e45912`
- Local HTML: `html/lem-deformed-mp-fixed-point-solution-is-unique.html` — `4ba0b564afa530606f4aa3f2d654c14f9054460ccbf3a92809060b3a8318a2b8`
- Viewed tile: `screenshots/lem-deformed-mp-fixed-point-solution-is-unique--01.png` — `332f98862c04006d7b35205387e83a441e203b5e202c912261274d0df3cf4fc7` (original resolution)

### lem-du-population-gram-kernels-are-finite-symmetric-psd — The recursively defined population Gram matrices are finite, symmetric, and positive semidefinite

- Frozen snapshot: `snapshots/lem-du-population-gram-kernels-are-finite-symmetric-psd.md` — `5c92b3cb8899c831ecf5dab711cb441a7cfac95bd1e92f3fbb4cf671b5e82edf`
- Local HTML: `html/lem-du-population-gram-kernels-are-finite-symmetric-psd.html` — `914b8ee603fa44955c1c83e455586da4e7555387f7e9e89482c43fd2951decf6`
- Viewed tile: `screenshots/lem-du-population-gram-kernels-are-finite-symmetric-psd--01.png` — `a0f03301915d6e79b095bcb0d28217cceba7f886a00357baf87e4f9c3c4abb44` (original resolution)
- Viewed tile: `screenshots/lem-du-population-gram-kernels-are-finite-symmetric-psd--02.png` — `db69a3c8519888cd7f2a90c43847c618613da6845869e9666ef1c6b57b3abb38` (original resolution)

### lem-fixed-time-lazy-training-stability — Finite-data fixed-time NTK stability under integrably bounded training directions

- Frozen snapshot: `snapshots/lem-fixed-time-lazy-training-stability.md` — `fbc7155b96d3df367ce7c87d4bd61d1051f073d9ac5a9bfe7e3b58bffa54a92e`
- Local HTML: `html/lem-fixed-time-lazy-training-stability.html` — `124ece75b3c46d39734df8729239e99006d52802e82c7006f85eb1e51845e71e`
- Viewed tile: `screenshots/lem-fixed-time-lazy-training-stability--01.png` — `f92f0e09e677f028ce5aa6fce3d7462e18fe7fe236932ffce19259207091c58c` (original resolution)
- Viewed tile: `screenshots/lem-fixed-time-lazy-training-stability--02.png` — `72c780026d3d720091e8e599665f41157390a2fa8c3f8c6682aceba352135e57` (original resolution)
- Viewed tile: `screenshots/lem-fixed-time-lazy-training-stability--03.png` — `a3cfd60c20ccd9f4b1a6c4c860b5308604277b99c9a8acd76276df0a7000f747` (original resolution)

### lem-hard-attention-depth-reduction — Hard-attention depth reduction under input restrictions

- Frozen snapshot: `snapshots/lem-hard-attention-depth-reduction.md` — `17b7aa56a3ea56025a9ea8ff013079f1728d01ee76138f9319b0ae64b8c7d471`
- Local HTML: `html/lem-hard-attention-depth-reduction.html` — `54e18ad0b57850c0ebc19b18174b38d328c689dc6cad18c475e81a552dcb86ba`
- Viewed tile: `screenshots/lem-hard-attention-depth-reduction--01.png` — `443a83820c64d36cba9571174cee6a3e6ff2d96c2cb5a6d9e5fb8bdc641dbe3f` (original resolution)
- Viewed tile: `screenshots/lem-hard-attention-depth-reduction--02.png` — `0edae4895a06cd31aec6b92f63cb040c4cd9f31abe86e2f642743449b1f6ce94` (original resolution)
- Viewed tile: `screenshots/lem-hard-attention-depth-reduction--03.png` — `70792109816efdf16a87994da330f47f01b6cd96015d8160b11daa2b7d596932` (original resolution)

### lem-iid-relu-layer-forces-zero-atom-next — An IID ReLU layer forces a zero atom in the next preactivation

- Frozen snapshot: `snapshots/lem-iid-relu-layer-forces-zero-atom-next.md` — `210cc057a61c84041a0ca2b24b9639426a4e8d82bf90494df48b52568d41d714`
- Local HTML: `html/lem-iid-relu-layer-forces-zero-atom-next.html` — `f2d8f75d9679ed6eb9140aaf0662a62bf6b40c22d2f3f4943f2b65893f1a404b`
- Viewed tile: `screenshots/lem-iid-relu-layer-forces-zero-atom-next--01.png` — `4514773a001bcd445540b742f54ff6c0d1f8aaae95d37354458a4e0a092cfd7b` (original resolution)

### lem-linear-ridge-pullback-of-null-sets-is-null — Nonconstant affine ridge pullbacks preserve Lebesgue nullity

- Frozen snapshot: `snapshots/lem-linear-ridge-pullback-of-null-sets-is-null.md` — `04b8f2e2441ec5caf7e07dccaec526164c007c8c4215850c058379f9f706acb7`
- Local HTML: `html/lem-linear-ridge-pullback-of-null-sets-is-null.html` — `8f5e702a694413a78c94e7ad4e6697ff92a374c39018ec37677854d15d202e2e`
- Viewed tile: `screenshots/lem-linear-ridge-pullback-of-null-sets-is-null--01.png` — `7abcc1f67d88f973df2801ec10ca8f55bbc80c0f20f6f16f7fa658c1c71895a7` (original resolution)
- Viewed tile: `screenshots/lem-linear-ridge-pullback-of-null-sets-is-null--02.png` — `f2bd92a53de4b4173921e4b027fb94abfddcecefc29089e90e04050a6a6b99e5` (original resolution)

### lem-nested-iid-fourth-moment-truncation-and-diagonal-control — Nested iid fourth-moment truncation and uniform diagonal control

- Frozen snapshot: `snapshots/lem-nested-iid-fourth-moment-truncation-and-diagonal-control.md` — `4ad7bd124564ac669c2413dd7f8f6a8d30c9c103fd9dc7c4eb2e47bec948a714`
- Local HTML: `html/lem-nested-iid-fourth-moment-truncation-and-diagonal-control.html` — `712ab973600565db600cd29248a8f937b7cae349965c0d80cd0c52a7358f7540`
- Viewed tile: `screenshots/lem-nested-iid-fourth-moment-truncation-and-diagonal-control--01.png` — `16216b020d73279eaf7e936ec6c68840df44cb4e4b0577461b3964a94aeec169` (original resolution)
- Viewed tile: `screenshots/lem-nested-iid-fourth-moment-truncation-and-diagonal-control--02.png` — `1645e0d8eba54a6522d1a7060a6e9753a19388f144d186f57012bc3f290bb805` (original resolution)

### lem-partial-feature-flow-moment-and-energy-identities — Partial feature flows have exact energy and weight-moment identities

- Frozen snapshot: `snapshots/lem-partial-feature-flow-moment-and-energy-identities.md` — `987874bc8654a214eb20566a39295236fc9653f2f17fff0097e661345d4da517`
- Local HTML: `html/lem-partial-feature-flow-moment-and-energy-identities.html` — `b46fc73cf3df06648eafb4b8656aa6df7062b58f26832024bec824614f725902`
- Viewed tile: `screenshots/lem-partial-feature-flow-moment-and-energy-identities--01.png` — `1f71d2c10f50e8570447e87ab91f9f26d60ca01d98bb091823528f625d378b52` (original resolution)
- Viewed tile: `screenshots/lem-partial-feature-flow-moment-and-energy-identities--02.png` — `b8e1692ac914683fcebb4791a09dffb634d03029eddba82eedb633806092fd8a` (original resolution)

### lem-pinn-residual-loss-from-fill-distance — Fill-distance control of the population PINN loss

- Frozen snapshot: `snapshots/lem-pinn-residual-loss-from-fill-distance.md` — `e35b3ef96613c3568c0e432a4649ab8b6fc865dee6ba886f3ea358ebebf6be04`
- Local HTML: `html/lem-pinn-residual-loss-from-fill-distance.html` — `856d1ee943eecc6379771d5495f468acc54c522da642b5835c1ccc6c5247e039`
- Viewed tile: `screenshots/lem-pinn-residual-loss-from-fill-distance--01.png` — `e802a60bb90df8ed5dcedf6ba35620b8b0250618bf3a60d86f88de92864aa920` (original resolution)
- Viewed tile: `screenshots/lem-pinn-residual-loss-from-fill-distance--02.png` — `646120bf251ad1bac909e345cd41f933a50fbe3352cf6912b484b3f6419508a9` (original resolution)

### lem-relu-network-vc-dimension-bound — VC bounds for a fixed ReLU architecture

- Frozen snapshot: `snapshots/lem-relu-network-vc-dimension-bound.md` — `b2c4892f0de370f06300d97706668e87307eca38151d07843167eb78d93c7b11`
- Local HTML: `html/lem-relu-network-vc-dimension-bound.html` — `5240cfdabd91c29b0930e09e94482bb9f78e706b6b3042d08961481d5cff0ea1`
- Viewed tile: `screenshots/lem-relu-network-vc-dimension-bound--01.png` — `5fcc577f2f2098f13050d4b2c93090ec25a895ae4cbcf17e986c4c56a8a4593e` (original resolution)
- Viewed tile: `screenshots/lem-relu-network-vc-dimension-bound--02.png` — `6e09003e24839a9acc3a291ca1c068da6de0650d81c1d359c70f2885e8c42913` (original resolution)

### lem-sgd-trajectory-integrability — Finite-horizon SGD trajectories have integrable objectives

- Frozen snapshot: `snapshots/lem-sgd-trajectory-integrability.md` — `b6fcd1f7907ee1797606b4c5f7682118d41fadf0fc974a160b1d9cf1c1d1558f`
- Local HTML: `html/lem-sgd-trajectory-integrability.html` — `771aee49411a7b9c9aef1d0977d43612feddd277adb319a735216b85fb2e1bf3`
- Viewed tile: `screenshots/lem-sgd-trajectory-integrability--01.png` — `059830da1f528dddafb2ece3666f4024082409b21b5430b5b11cfb5e906f53fe` (original resolution)

### lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap — Smooth elliptic Dirichlet solvability from a boundary Sobolev bootstrap

- Frozen snapshot: `snapshots/lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap.md` — `2b2f343f95b0ffc44f5614e26a2c480ca3ddc265ad41cb353f244f66820bcce4`
- Local HTML: `html/lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap.html` — `40a0e1ce57c29422a5df28d241290e8357bd13970004a10e604155d3e9318694`
- Viewed tile: `screenshots/lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap--01.png` — `685d55d1651be48cb514f1ac48821b4a69bcbc479229d2725247240bf95be441` (original resolution)
- Viewed tile: `screenshots/lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap--02.png` — `af52ab5da5d9a7b23ba72c95228e098fc5b5e2437166eed5ae620606757e0c93` (original resolution)
- Viewed tile: `screenshots/lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap--03.png` — `c470f6b9d403cde378dab814d55e17bb3fa69becd33a7aa2e5322aee4e985f7b` (original resolution)

### lem-soft-attention-one-symbol-influence — A nonfinal token has inverse-length influence under bounded soft attention

- Frozen snapshot: `snapshots/lem-soft-attention-one-symbol-influence.md` — `dd3117d21a95e646d77f755085ecede2616a6f61054d61a1a77ffac533a9109a`
- Local HTML: `html/lem-soft-attention-one-symbol-influence.html` — `9b102ae82b0fa0b452badcd37f72b615e43b2e1b3bdb13f0867a3dccb5394949`
- Viewed tile: `screenshots/lem-soft-attention-one-symbol-influence--01.png` — `2f4ab873ff67a82adfff49d993127873ccc4fb0500c74d26edad7c74bd013fe2` (original resolution)
- Viewed tile: `screenshots/lem-soft-attention-one-symbol-influence--02.png` — `3beb822934c092294afa5cfd8b57d15350842bfbdd7b7dc09ed2dfd96a594497` (original resolution)

### lem-w2-convergence-implies-homogeneous-projection-convergence — W2 convergence implies weak convergence of homogeneous projections

- Frozen snapshot: `snapshots/lem-w2-convergence-implies-homogeneous-projection-convergence.md` — `d1a3ae8261a51a40c4d111fbd70e4f3f99df2889195d7e5fc6a8df3f5df2107f`
- Local HTML: `html/lem-w2-convergence-implies-homogeneous-projection-convergence.html` — `9179080e64183a28a8f1bc50509f62e84bca4752e0b9570d768377deb8a83c41`
- Viewed tile: `screenshots/lem-w2-convergence-implies-homogeneous-projection-convergence--01.png` — `701b40176c823d5711ac9b8fbb080b137f52968dc66da114f4c57baf69c0006b` (original resolution)
- Viewed tile: `screenshots/lem-w2-convergence-implies-homogeneous-projection-convergence--02.png` — `329b2cf428f957b355de0ac4e2f52124c61eaad5cf950947f5c4e2a45fba5656` (original resolution)

### rem-truncated-training-and-exact-hypergradients — Exact stationary sensitivities and finite training derivatives are different

- Frozen snapshot: `snapshots/rem-truncated-training-and-exact-hypergradients.md` — `e6c4794ab95e4e8ff1ee123323fbe8cb1a7026143ef7a4d6beb185ff5f9d3bb3`
- Local HTML: `html/rem-truncated-training-and-exact-hypergradients.html` — `4b3417e690e0dc8088310a1389972c770b89a9016a0fa1ac3a314f8f98d43e98`
- Viewed tile: `screenshots/rem-truncated-training-and-exact-hypergradients--01.png` — `4599ad8d0e77520afb558526aa292f241f41450454ea57ce7e258b3d7c4e79bd` (original resolution)

### thm-directional-sample-covariance-resolvent-limit — Sample-covariance resolvent deterministic equivalents

- Frozen snapshot: `snapshots/thm-directional-sample-covariance-resolvent-limit.md` — `dbdeed967b469e120afaada93f40477a13b6be28905e3f885fbb8029e09218ec`
- Local HTML: `html/thm-directional-sample-covariance-resolvent-limit.html` — `fb94757859308863db83b5b1819d054f8218f64f13112737d4c7885e7f957b28`
- Viewed tile: `screenshots/thm-directional-sample-covariance-resolvent-limit--01.png` — `7895609ee682c7631076559e78d2b90a8fe52c92881c00c2b7efe88aaa8777d7` (original resolution)
- Viewed tile: `screenshots/thm-directional-sample-covariance-resolvent-limit--02.png` — `a8f3dcfbd31410e3e25e2e21875052658346de1cfa1f00b76395b28ec78a6c94` (original resolution)
- Viewed tile: `screenshots/thm-directional-sample-covariance-resolvent-limit--03.png` — `fb4fcbf699a033c50d94b346805f4a219f60b595944a34d9a3a6223525ee317e` (original resolution)

### thm-heavy-ball-rate-on-strongly-convex-quadratics — Tuned heavy-ball has the minimax root factor on positive-definite quadratics

- Frozen snapshot: `snapshots/thm-heavy-ball-rate-on-strongly-convex-quadratics.md` — `ce901a18d4a691fcb35f60b940447672ee84de34d498002eb26d7eda7515412c`
- Local HTML: `html/thm-heavy-ball-rate-on-strongly-convex-quadratics.html` — `8ab16df746fe0803ea37b619f27506c4feb756239a507a6fcc83ff5098127178`
- Viewed tile: `screenshots/thm-heavy-ball-rate-on-strongly-convex-quadratics--01.png` — `2268e75b788deffb2cabb67a6f1618b03c451d7be377e0c3b8d6dc375814e5fb` (original resolution)
- Viewed tile: `screenshots/thm-heavy-ball-rate-on-strongly-convex-quadratics--02.png` — `4b7e518b8162228a576cac54f85d88de27aa7b70d5c0de8fae09d700f1ea8ba6` (original resolution)
- Viewed tile: `screenshots/thm-heavy-ball-rate-on-strongly-convex-quadratics--03.png` — `de267ee558422b03f4480b64aed7923d7d88513f9c7806cb0448ec763cbdcb33` (original resolution)
- Viewed tile: `screenshots/thm-heavy-ball-rate-on-strongly-convex-quadratics--04.png` — `db737f8e398eda80c0170abb0f305b42010c721983938cbd24f7c1044329aff4` (original resolution)

### thm-marchenko-pastur-law-for-sample-covariance — Almost-sure Marchenko–Pastur law for finite-fourth-moment sample covariance matrices

- Frozen snapshot: `snapshots/thm-marchenko-pastur-law-for-sample-covariance.md` — `1f5aa46b7ee31c38498fa3ea345de0eb9077dcb1f4100cd2423ea83b522cb502`
- Local HTML: `html/thm-marchenko-pastur-law-for-sample-covariance.html` — `e0b4fa73261c12337fea9bcef5acf0eae8fafa077a49d423c8f0d8e8a9c4ee80`
- Viewed tile: `screenshots/thm-marchenko-pastur-law-for-sample-covariance--01.png` — `4c5d444a5c0740300621c56e7df9abfe959b3f38b98389d65317634ad6938b6d` (original resolution)
- Viewed tile: `screenshots/thm-marchenko-pastur-law-for-sample-covariance--02.png` — `aa86f4ca8e0432ca87d9920d869491854a82b67082d68779cb99539f22e9f449` (original resolution)
- Viewed tile: `screenshots/thm-marchenko-pastur-law-for-sample-covariance--03.png` — `402e00d33095389b33743715704e441757db6d75247089148520986dd3f59b53` (original resolution)

### thm-pinn-linear-elliptic-consistency — Elliptic PINN minimizers converge to the Dirichlet solution

- Frozen snapshot: `snapshots/thm-pinn-linear-elliptic-consistency.md` — `0600b520ac2eaa5f29c0ef5e75611c8d011d4f8689e37c6fb23fa2f93fe4f1a1`
- Local HTML: `html/thm-pinn-linear-elliptic-consistency.html` — `59e3d065b4d8e9d94fca806461fa258db4b76fa7898b3140b32e8fb30ffb80b6`
- Viewed tile: `screenshots/thm-pinn-linear-elliptic-consistency--01.png` — `e59f877c2e4358f48cb0ff44173af735a66ff9b90f4f0306c9cb28a2df3e4d77` (original resolution)
- Viewed tile: `screenshots/thm-pinn-linear-elliptic-consistency--02.png` — `34f0db802cedc7bccaa96e9827aaea26a5469dc87781524fcf70579df774bd80` (original resolution)

### thm-semiconvex-hilbert-gradient-flow — A lower-bounded semiconvex Hilbert energy generates a unique gradient flow

- Frozen snapshot: `snapshots/thm-semiconvex-hilbert-gradient-flow.md` — `b5078216d3c8e6a50e3bdd296b7d37783f8791a8e243dbfa136b36b4551f2ef6`
- Local HTML: `html/thm-semiconvex-hilbert-gradient-flow.html` — `18e8f15a392138686e6a897fea731f4d234505b4e612c2140684a9fa9ac453e8`
- Viewed tile: `screenshots/thm-semiconvex-hilbert-gradient-flow--01.png` — `13d0b21e39fa9f7a7d56537a7baf933425a60810696ed6fec187426a9e368a7a` (original resolution)
- Viewed tile: `screenshots/thm-semiconvex-hilbert-gradient-flow--02.png` — `37ef9d21a304300387fe635be871f7b8857f3afa4a2b062e2c2f72dd039a28cf` (original resolution)
- Viewed tile: `screenshots/thm-semiconvex-hilbert-gradient-flow--03.png` — `384783cd9f574ce3fb97571d329e58875450892f5155adf0f7a9cf3346a80ae9` (original resolution)

### thm-smooth-bilevel-hypergradient-formula — Hypergradient of a smooth local stationary branch

- Frozen snapshot: `snapshots/thm-smooth-bilevel-hypergradient-formula.md` — `45597bfca08b9128a921cba0aafc005e3f37978a2eb28dacb1bc5c30e9a211ad`
- Local HTML: `html/thm-smooth-bilevel-hypergradient-formula.html` — `ea949be0c2d647daf615bf80a143048c38e535be349732c7aa1a2ea7502629ce`
- Viewed tile: `screenshots/thm-smooth-bilevel-hypergradient-formula--01.png` — `00a3d56b0270f0bbfed1067b954a1a992e4549c1a7dc902b538df7751de314fc` (original resolution)
- Viewed tile: `screenshots/thm-smooth-bilevel-hypergradient-formula--02.png` — `d4d7492b096d348ce0ad46cfe2fe7b71bb786cebd2e42db30c34919b4fc65dee` (original resolution)

### thm-transformer-formal-language-limits — Hard and soft attention limits for formal-language prediction

- Frozen snapshot: `snapshots/thm-transformer-formal-language-limits.md` — `03525de78b442d2a5a0b449c98f9aa076bfdebbdbed58fac5b856c035e3dc570`
- Local HTML: `html/thm-transformer-formal-language-limits.html` — `62f4a1839f0cd7e01f79aa9a7a46bc9194fe206df5beb4389ed2c8fbf6338c3c`
- Viewed tile: `screenshots/thm-transformer-formal-language-limits--01.png` — `87eea2df65ed1bcdbb47677f46a7c336371eee7c09c0f92d2969611c8e4d9492` (original resolution)
- Viewed tile: `screenshots/thm-transformer-formal-language-limits--02.png` — `5f5025788523146703f161115e5be1f3d01e87d6d7d002f20a97f0667f1ba029` (original resolution)

### thm-yarotsky-approximation-lower-bounds — Approximation lower bounds under distinct selection assumptions

- Frozen snapshot: `snapshots/thm-yarotsky-approximation-lower-bounds.md` — `d096485b5b10c833bd859025eb187a57b9f9f22bf4cab4b49e04142f6ed9401d`
- Local HTML: `html/thm-yarotsky-approximation-lower-bounds.html` — `3780d4469e8043d67724dd585c31e991f6abdddc20891d3d7b5d5ed0a979d879`
- Viewed tile: `screenshots/thm-yarotsky-approximation-lower-bounds--01.png` — `0627103240a13a972eb4859272359c350aae99c57bd5f7db3c9a679b51085a5a` (original resolution)
- Viewed tile: `screenshots/thm-yarotsky-approximation-lower-bounds--02.png` — `8dfb6bde2434fe032435305492cc8ae59222863557ac317d9d28d6e538b54335` (original resolution)
