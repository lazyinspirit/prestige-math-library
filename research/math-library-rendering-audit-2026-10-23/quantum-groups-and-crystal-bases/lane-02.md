# Quantum Groups and Crystal Bases visual audit — lane 02

## Scope and coverage

Reviewed all 21 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 46 receipt-listed PNG tiles individually with `tools.view_image` at original resolution. Assignment, source, snapshot, HTML, and screenshot hashes match; exact per-item and per-tile hashes, dimensions, capture positions, and view attestations are in [lane-02.json](lane-02.json). Capture receipts report zero KaTeX errors, zero diagram failures, and zero rendered TikZ diagrams. No raw TeX, malformed math, or confirmed clipping was visible.

The review was local-only. No item, library, application, or publication status was changed.

## Confirmed rendering findings

None. All rendered mathematics and prose were legible in the assigned local captures. The assigned ItemBodies contain no TikZ or tikzcd source blocks.

## Optional diagram candidate

### [ex-fock-e-and-f-actions-on-shape-two-one-at-e-three, lines 43–46](../../../items/ex-fock-e-and-f-actions-on-shape-two-one-at-e-three.md:43)

A paired crystal-graph figure could compare the quantum-group crystal with the restricted symmetric model around the shape `(2,1)`. In the first panel use `(2,1)` as the center, with `f_0` to `(2,2)`, `f_1` to `(2,1,1)`, and `e_1` to `(1,1)` (equivalently an `f_1` edge from `(1,1)` to `(2,1)`); color 2 has no incident arrow at the center. In the second panel use `M_(2,1)` as center, with `f_0` to `M_(2,2)`, `f_2` to `M_(3,1)`, and `e_2` to `M_(2)` (equivalently `f_2` from `M_(2)` to `M_(2,1)`); color 1 has no incident arrow. Orient all edges in the `f_i` direction and label by `i`. These are normalized crystal arrows; do not annotate them with ordinary `q^{-1}` Chevalley coefficients. The statements and signature calculations already give the data, so this is an optional clarity aid, not a defect.

## Diagram checks

No existing TikZ/tikzcd diagrams were present in the assigned ItemBodies. The candidate arrow endpoints and zero colors match the stated crystal actions and the verification. No diagram mismatch was found.

## Item coverage IDs and source SHA256

All 21 items are published; each current source and frozen snapshot matches the assignment digest. Per-tile receipt hashes and original-resolution view attestations are in the JSON report.

| ID | Source SHA256 |
|---|---|
| `cex-bar-invariance-and-mod-q-congruence-without-balancedness` | `542ca425eaa184997842e76577acdcb8a2e17ae3b8686451aba2d71505aa7158` |
| `def-balanced-triple-and-globalization-map` | `4a3a500f8528d8b839c3347e3ee6211b1b13da9711da48c5fcc8620d073d3e44` |
| `def-full-toral-weight-root-of-unity-module-category` | `e6c6b71dd69145f12b4c3134be6b0a7383fdf4a437ad60d3c5a32beb823e1f6b` |
| `def-lower-global-basis-of-a-quantum-highest-weight-module` | `55234a015fba7e17297b96f5419e3c66a9894589fab98344fc4c458b6cb03b7c` |
| `def-root-of-unity-weyl-and-dual-weyl-module-families` | `54f38dc0ef124457b05e41a8b363b4c197922bbbb5bcef6b2d0752f264821f65` |
| `def-the-node-order-and-n-i-exponents-for-fock-space` | `fbbd4ee5862a5ab24bedbc9940648ad8afee0a4d065cafab2dadb447c214836d` |
| `ex-fock-e-and-f-actions-on-shape-two-one-at-e-three` | `f7c9035c3679f19a08c117e19a7412345a4062b618574ceaf04dbee62e4943c4` |
| `ex-quantum-verma-and-simple-modules-for-sl-two` | `a9998f98ab37dd6a3a8ede566813e33436e65bb43e47ac3fbf977ff39d099176` |
| `lem-an-antipode-is-unique` | `c557906b8e7ec0f265e277603ec365807f3f0109071625a6745d1659159acf8a` |
| `lem-finite-support-regularization-of-quantum-label-weight-modules` | `d584d23682335a3b2e8b7e739d06d6321634a027ab6b952dabd7ae6e8bbb03fb` |
| `lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis` | `50c5775e7d8d689a455e59d73ee9fc414a53f3449d7da645d1d4f9cf04f85b5f` |
| `lem-q-one-toral-specialization-identifies-the-classical-cartan-generators` | `d72c684fe672b67794bd6ea67d5c2ff0163ec7414002522ab0a899ac97be50f3` |
| `lem-root-of-unity-finite-highest-weight-truncations` | `c3c70f21c6b9dbcaecf84ac7a71d55a8ca88ae58c212657eea81a8c6305e0ec8` |
| `lem-small-root-unity-image-has-braid-stable-pbw-decompositions` | `2b343990f16a76b1726e8dfb84d2f02bdb48b1eb230ef0a892603ee9924ed091` |
| `lem-the-node-count-is-the-level-one-cartan-pairing` | `2546f9520ed68860debf1ff99daac903feb9da75a9667b1cfa91322f18d4a740` |
| `prop-dual-crystal-and-reversal-conventions` | `b5a969b4306336f4a3b210550b4986056918f4fda6f913eeffeaed66440459a5` |
| `thm-crystal-basis-of-the-negative-half` | `97761c00719947aaca813c01eac7d34adf53bd6271c485cb429623912245d8d1` |
| `thm-negligible-morphisms-form-a-tensor-ideal-on-root-of-unity-tiltings` | `dd63df212527f6c8b8928d43d6103545c87e3952a93ec825f94f17de4908facc` |
| `thm-root-of-unity-lusztig-module-category-is-braided-rigid` | `62ad19addfd9c9f72661a10bca070c13e33fcc0c64a1693cfc965fdb6045d38d` |
| `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free` | `15e48641d133b4dae02053ad6c557fe8a8c800644ccce75fa2ed672580d27bc8` |
| `thm-verlinde-tilting-quotient-in-simply-laced-large-odd-order-regime` | `c1d12f2d7d655cddd154babf53b840560d28a18dd7a8db84bfd9d85da757dfe9` |
