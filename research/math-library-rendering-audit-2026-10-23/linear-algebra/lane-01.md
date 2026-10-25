# Linear Algebra visual audit — lane 01

## Scope and coverage

Reviewed all 75 assigned frozen ItemBodies (titles and full bodies), the matching local HTML, and opened all 93 assigned PNG tiles individually at original resolution. Assignment SHA256: `8534095b4bb3a24e60672943eb268872bd744990bbf7a02749dc9dbc243637f6`. Source, frozen snapshot, HTML and screenshot hashes match their assignment/receipt evidence for every item. No Scratch sections occurred; capture receipts report zero KaTeX errors, zero TikZ diagrams and zero diagram failures across the lane. Exact per-item hashes and per-tile paths, hashes, dimensions and view declarations are in [lane-01.json](lane-01.json).

## Confirmed findings

### `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` — local-preview-left-edge-clipping

- **Source/snapshot:** `items/thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss.md` and `snapshots/thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss.md`, SHA256 `0335cd80a042153c689a42a80ade9075c02b8e38565c10c5a3a858ddc85614be`. Lines 4.
- **Evidence:** [thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss--01.png](screenshots/thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss--01.png), SHA256 `47da11904478562abea6a589bf6e3125562ac3274090abf4fb1577cbf5e32a13` (1200x1400).
- **Finding:** The standalone local preview is cropped on the left: its item slug/title begin midword (the title renders as “he Moore--Penrose…”), and the first visible content starts at the image edge. The complete title is present in the frozen source and local HTML; this is a preview clipping finding, not a source-text defect.

### `fs-jordan-canonical-form-is-a-unique-matrix` — local-preview-left-edge-clipping

- **Source/snapshot:** `items/fs-jordan-canonical-form-is-a-unique-matrix.md` and `snapshots/fs-jordan-canonical-form-is-a-unique-matrix.md`, SHA256 `e38f6b6c484793dfa282f4e20284607bdc9789bac5e7134dbbeaf78d3a407023`. Lines 4.
- **Evidence:** [fs-jordan-canonical-form-is-a-unique-matrix--01.png](screenshots/fs-jordan-canonical-form-is-a-unique-matrix--01.png), SHA256 `827e2315b973e82b41dcfc3441a871adb5d8379a8173dc7601f7e44245e61538` (1200x1400).
- **Finding:** The standalone local preview clips the left edge of the title: the source title begins “FALSE:” while the tile shows “AL:”. The full title exists in the frozen source and local HTML; this is a preview clipping finding, not a source-text defect.

### `def-cholesky-factorisation-with-positive-diagonal` — missing-whitespace-after-display-math

- **Source/snapshot:** `items/def-cholesky-factorisation-with-positive-diagonal.md` and `snapshots/def-cholesky-factorisation-with-positive-diagonal.md`, SHA256 `23728d4aae880e62851759eb49743827a519d9688edb0d0eb7a2fbfcd20246f4`. Lines 36.
- **Evidence:** [def-cholesky-factorisation-with-positive-diagonal--01.png](screenshots/def-cholesky-factorisation-with-positive-diagonal--01.png), SHA256 `957e398807c0b159e6ce446800dd99827c57414905551b0340c3c23ffedec358` (1200x1400).
- **Finding:** The definition body joins the display-math closing delimiter directly to “for”: `$$x^*Ax>0$$for every nonzero vector...`. The preview consequently renders “0for” with no word break. Insert a space or start a new sentence/paragraph after the display equation.

## Optional diagram candidate

### `ex-sum-and-intersection-in-f-three` — lines 40, 45, 47–51

- **Kind:** optional coordinate subspace-intersection schematic.
- **Rationale and drawing brief:** An optional schematic could show the coordinate planes U={x:x_2=0} and W={x:x_0=0} in F^3, their shared x_1-axis span{e_1}, and the decomposition of a generic x=(x_0,x_1,x_2) as (x_0,x_1,0)+(0,0,x_2), making U+W=F^3 but U∩W≠{0} visible. Label the planes U and W, the common line span{e_1}, and e_0,e_1,e_2 axes. Because the source is over an arbitrary field and calls these planes/line informal analogies, mark the drawing as a coordinate schematic rather than a geometric proof. Editorial clarity candidate; no confirmed mathematical error.
- **Evidence:** [ex-sum-and-intersection-in-f-three--01.png](screenshots/ex-sum-and-intersection-in-f-three--01.png), SHA256 `b3d0fbd9de758e24927d5456a38dc26ac366e83999a8d62ddaed9fd094406028` (1200x1400).

## Existing diagrams

No TikZ/MathMarkdown diagrams were present in the assigned items, and no existing diagrams required mathematical checking.

## Other visual checks

Rendered math is legible in the reviewed previews apart from the confirmed Cholesky spacing defect above. No literal ASCII caret/underscore formulas, raw TeX leakage, unexpected reference-title leaks, or other clipped content were confirmed. Block-line wikilinks and uppercase technique banners render as intended. The previews are local artifacts only; this review makes no production-route or publication-status claims.

## Item coverage and source SHA256

| Item ID | Source SHA256 | Tiles viewed |
|---|---|---:|
| `cex-a-bivector-in-r-four-need-not-be-decomposable` | `7342b9f5ed545f07e7986f41d0166cc10d310797dd577db5b50267d3ddf9ff29` | 1 |
| `cex-antisymmetric-need-not-be-alternating-in-characteristic-two` | `3c953f4baad271c682566645c0fa531ec1e27d24cd77f13e53d100b229ae05ca` | 1 |
| `cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning` | `277cdd614f8c2d8f8d3faddae2fb14a328b609bd207cc4e7d2e94ab3556c9aed` | 1 |
| `cex-row-equivalent-matrices-can-have-different-column-spaces` | `1ab1419bb4cef911fde01caf28455a4aceb8acbe51a6bed2315efb9743fccacd` | 1 |
| `cor-a-row-reduction-is-a-product-of-elementary-matrices` | `8478c410ca2ae8a358524105d9d51dda32ab7282a8243455ddea669407985482` | 1 |
| `cor-determinant-multiplicativity-from-the-top-exterior-power` | `55ffe0ffd7a9b07877dc08cfb849c5fc0d62265b729213a473a40b1843a0a0bb` | 1 |
| `cor-endomorphism-ring-is-a-matrix-ring` | `2021fa2a341981f4bc57caf902f824bb8f4d3484d19db3a9246b3a4578931e5d` | 1 |
| `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space` | `5d757d1d20faed0c8d20926c635b0b1651cc7707ff4dc9a47b061a876f155caa` | 1 |
| `cor-matrix-rank-equals-the-rank-of-its-linear-map` | `c5bdbe1a3064e5d538149d11ebf87582e24add3ba287287bbcc5efa350f15e1d` | 1 |
| `cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable` | `f7783f8a3948789b87c6e3a827b264c812d9febb56a51c0a872406f1d425bc05` | 1 |
| `cor-real-symmetric-bilinear-forms-are-classified-by-inertia` | `ee59d9fb01c3fad43f9c6991e6cad380564707638bfaf5d36ad4f3b3f793adb7` | 1 |
| `cor-triangle-inequality-for-inner-product-norm` | `90af85c717ad193110e94bf2d3565228f5728c46d1d6c50be0ac74c2294cd542` | 1 |
| `def-alternating-k-linear-map` | `6b881d2bb3c8fca6c1af5d1b4a348100cb32dfefc31fe27fb95e3958fb66f4d8` | 1 |
| `def-cholesky-factorisation-with-positive-diagonal` | `23728d4aae880e62851759eb49743827a519d9688edb0d0eb7a2fbfcd20246f4` | 1 |
| `def-cyclic-subspace-vector-and-vector-annihilator` | `c47ebe58e4fc8c49d78940455ed5238495b65e838736872e7f0a580990c36d8d` | 1 |
| `def-eigenvalue-eigenvector-eigenspace-and-spectrum` | `d847e0dcf03e2c8784831b7112ff39e8981ab15023f3e0e95f16afde7bba30b4` | 1 |
| `def-function-space` | `4ae857923c32136fc7dc3f9e5d150692482c56e1969a68983568084640f5eec4` | 2 |
| `def-inner-product-norm` | `91e1bc4a33fef094f90ee8bfa9d8c26a9ec9e43611bacc547e11a5ce3a9e1e2e` | 1 |
| `def-kernel-and-image-of-a-linear-map` | `664a5b94d94b10c53e2c1ec18680734728b93d3922ecfc5d6020e8ab23a11a9a` | 1 |
| `def-linear-independence` | `74acd9f1ff48a5821f38b34167d736a074170ab74d0fb7d815e56dd64dd24547` | 2 |
| `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` | `be8b7c749e5b95df2f60c5e8879fcedc6158ce89f095794694953af7d71ba48a` | 1 |
| `def-numerical-rank-relative-to-a-norm-scale-and-tolerance` | `6d70f9ae425ee423bf50595f5dae3e5819dac7651f4c1e3bb198b896e05dfd3b` | 1 |
| `def-primary-component-and-generalised-eigenspace` | `8c504a27b588d9b3f5d80f2adbc64158e6bb7dc1bcf8a61aa5b58c89bd820346` | 1 |
| `def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue` | `d2087f48ffba9aeb8542d2a36796d8f518780cfd17dce2bff5e71b8a031fed24` | 1 |
| `def-similar-matrices` | `2a46654a94762f1ad5b9d28e2e0ad2978bb0263dfd6156001c1280a148b6e658` | 1 |
| `def-trace-of-an-endomorphism` | `6fdc4d27f9d1ce001742796b3664603acf8985c60df8928226278ea0fd19cf67` | 1 |
| `ex-a-backward-stable-solution-of-an-ill-conditioned-system` | `59b98047ae7133799cfd3d156928582a829be97da0870eefa90269efbfe2a98c` | 1 |
| `ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers` | `438959ff727b525acdb7c7c6c8c63da310c9a03f2b35d117b40186a1ce1e6960` | 1 |
| `ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four` | `f10a8f21a82a62cee19bf31e478647ab329fa3c34327b20be25833a42342da0a` | 1 |
| `ex-cholesky-factorisation-and-solve` | `a28a005edb3b717dcfd6c8bc35ec95b0b93fac7326964c5a3324e3ea73842821` | 1 |
| `ex-courant-fischer-on-a-three-by-three-symmetric-matrix` | `fa0401cc706f2656bccb19762223a5a19b00721b98dfe88451173b6beb13da5f` | 1 |
| `ex-exterior-powers-of-a-diagonal-operator` | `7a7b97fa5607142c010a71d73aac183bd85b28745b53b888fe5dd8ebb1675b7a` | 1 |
| `ex-gram-schmidt-in-c-two` | `bc7f1ca16ca4b97483c8a290ce9cf5d9c54ec6d92084ebbbbc32815218101731` | 1 |
| `ex-inverse-by-augmented-row-reduction` | `d1d1a189712fe2b82ce899466ea0cf6e25300ce37c4715cdc0410378cba25895` | 1 |
| `ex-minres-on-a-symmetric-indefinite-system` | `1c8199f9fa0ba468a67fdbfd509803f3789b7fa756ed55c6b717339172bdcd15` | 1 |
| `ex-plu-factorisation-by-hand` | `d4106cd2784651796914aff4d68a672d5d3cba0c2792843fd5a507f4546dfb06` | 1 |
| `ex-quarter-turn-matrix-on-the-real-plane` | `2183adffa1150f06fab12e09937943f7ac75fe101966c3016df150eb8ef77ea5` | 1 |
| `ex-recovering-nilpotent-blocks-from-ranks-of-powers` | `22e08e532a4f32164a47c80cdd8b0f4fafb6aaa78ff63a041d4343db48231745` | 1 |
| `ex-row-reduction-with-a-unique-solution` | `9eea8b9bef69bf32588b7bddf5738b2666c33a7ffa384e91eb865dfab171493a` | 1 |
| `ex-sum-and-intersection-in-f-three` | `a56528a225efd555db59dcb3b67c2fc2cf939cf59aa6621c3d70b128af7df87f` | 3 |
| `ex-truncated-svd-denoising-on-a-diagonal-problem` | `42bbb73e66f97b5af823da71d5bde9a04b8e5ec56536eaa253f7ba720e955fcb` | 1 |
| `fs-a-complex-inner-product-is-symmetric` | `39d881fa6cd78c333c4f77b3e83e86cb89676085f9c05ab0106b4501282f423f` | 1 |
| `fs-equal-characteristic-and-minimal-polynomials-imply-similarity` | `d4750f12fda2dc353e0be2824818bd461034173f46956e25e7599716f07511be` | 1 |
| `fs-jordan-canonical-form-is-a-unique-matrix` | `e38f6b6c484793dfa282f4e20284607bdc9789bac5e7134dbbeaf78d3a407023` | 1 |
| `fs-the-characteristic-polynomial-determines-diagonalisability` | `9454f994220a67fa138954772f04600de40e4c4c5b7800bd8da3240ec0b10454` | 1 |
| `lem-characteristic-polynomial-of-block-triangular-matrix` | `32250a4503b0e0d60aa484c0549a5a605e55963f1cabeb224aa1784c1faff97c` | 1 |
| `lem-independent-list-is-injective` | `eb5e8fa15ffcb2859b0064cbb2833f2f5894937c3699953e17e348f90b8010a5` | 5 |
| `lem-matrix-unit-multiplication` | `1fe9f7594e214712a3928fbc272253618d7dde3e131f0e0e4c06683be7c892e4` | 1 |
| `lem-row-operations-preserve-row-space` | `e395c5ef2843266cedc429afa461858c9b43f762a8f3f26da8b7252b3310a6ce` | 1 |
| `prop-characteristic-polynomial-factors-over-an-invariant-subspace` | `437a89eda24d0df11870c8fd618dda9c16c1e57d8f95d5539e245fd38d7761d6` | 1 |
| `prop-field-and-ring-matrix-interfaces-agree` | `f8373e9f44eb03f25e3ca10921e35a49507fbb746532a647f40e481a55fd19fa` | 2 |
| `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` | `9ecf1d5c204a231e819863cf7cbc82d9c1e0988732557eaf2bcca867334f8c07` | 1 |
| `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant` | `1998137e64e10f5f020ee40c82e0b0b50a79f0e06034dc8654e2590681405560` | 1 |
| `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x` | `aca4abec78bda596b0a3c7a65074eb7daaa674fb9585e73d9de7733f64114b52` | 1 |
| `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` | `ab0b43f5712b90244dd50bbf951a286ce21c435f4b4af9ad2307e5e013d4e3b8` | 1 |
| `thm-additive-jordan-chevalley-decomposition` | `040a50531bdfdae10fbb89c2042b3dd437932e43521a1b18fc580e5266fada90` | 2 |
| `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual` | `132323142dddf5661c36bc7ec3aed0e9dd327c2bf91a9d7451779297efa7613d` | 1 |
| `thm-characteristic-and-minimal-polynomials-survive-complexification` | `b01f42e906a570be769b9d2fe274879f1e69da31095e1b3b8f0d3b5cbe7280d0` | 2 |
| `thm-coordinate-action-of-a-linear-map` | `88bf4944018950c322c2fb1d5f93c8c7a9cd59870388c4c640c1820cdc273ca7` | 1 |
| `thm-determinant-is-the-unique-normalized-alternating-multilinear-function` | `a5af657a7e9125fb16f9b46767c4af5ed72c62d502ff456df0c342281efe4b20` | 1 |
| `thm-dimension-of-a-linear-subspace` | `d5ff4962370e511294239a4bfddf632b4020769ec6f480ab49fc7029793695e3` | 4 |
| `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block` | `1d224e69412cff5139245fdd112c0be8b72a2fda6bbc10a2079778da6903014c` | 2 |
| `thm-gauge-fixed-simple-eigenvector-derivative-formula` | `357bc75cedc6f6e1bd14e99a07daf6e2286b3b5fc1f66a786c4362fe5ec58d31` | 1 |
| `thm-gram-schmidt-orthonormalisation` | `e3de3ccd08890d77df74dcb57766cac134bb0c230c2a1fbfa938be2ed3cac56c` | 2 |
| `thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums` | `ad184e9e034dc2f7ab7a2c4f62af13eb59cc194cc1fd9ec09de19f2e8b5803c3` | 2 |
| `thm-least-squares-solutions-and-normal-equation` | `2eedfd278a8ff6cc12754e0fb533985853dae1544e38a2f9aebc90f1b6109620` | 1 |
| `thm-matrix-representation-is-a-vector-space-isomorphism` | `61f65855cd927d2f5822130cf4600438e31afa8517456a7f482af837f18006f5` | 1 |
| `thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs` | `8ec0876f0d8c7887153d59e5db7332acbf13d92533e7898ca1ba8a99f0dfbe9e` | 1 |
| `thm-orthogonal-projection-is-the-unique-nearest-point` | `8e630245b7ca393fa3630c4de2a1b267f327d35afeab148d18dc168692a291a5` | 1 |
| `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` | `0335cd80a042153c689a42a80ade9075c02b8e38565c10c5a3a858ddc85614be` | 2 |
| `thm-riesz-representation-in-finite-dimensions` | `98ceeea0dd6364df22d0a87f85ff9b7972885cbf58db2652e207e12f6c837fbe` | 1 |
| `thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift` | `fec3199a9f5843fca029f7f6413fbb3ade4b60b981f875f4c2f1fb9b6366e694` | 1 |
| `thm-spectral-resolution-and-polynomial-spectral-projections` | `067231680fbc47d9e962f96feecd2e6348d89c933567135b9de437da16d63b5f` | 1 |
| `thm-symmetric-bilinear-forms-have-an-orthogonal-basis` | `659454a54a982e3d8f1910b20178a9b5209d3db6df98065ea6913241d4bf33ef` | 1 |
| `thm-two-sided-change-of-basis-formula` | `485476592e76f4a409e173c500a9833c4c5428d8c4c87aa114d9a2b435d9f120` | 1 |

All 75 items and 93 tiles in this lane are covered; every tile is listed in the JSON evidence.
