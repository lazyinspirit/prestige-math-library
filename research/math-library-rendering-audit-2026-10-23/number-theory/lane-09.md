# Number Theory lane 09 rendering audit

Reviewed 76 assigned items and 106 receipt-listed tiles.

## Method and source binding

Read-only local audit. For each assignment, the current `items/` source hash matches the assignment SHA256 and the local snapshot hash; rendered local HTML and the receipt were checked. Every PNG below was opened individually with `tools.view_image(detail="original")`, without downscaling or collage. Receipt tile hashes were checked against the local files.

No tests, builds, gates, publication actions, or production edits were run.

## Findings

### `cor-average-order-of-divisor-counting-function` — title

- Source line(s): 4
- Symptom: The screenshot title renders “tau” and “log n” as plain words, although they are mathematical notation.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/cor-average-order-of-divisor-counting-function--01.png` (SHA256 `6a2417f581472e4fe12be836bce39ced426a6227e5f78d34df816e2296b98bb3`)
- Suggested repair: Mark the symbols explicitly, for example “The average order of $\tau$ is $\log n$”.

### `cor-maximal-ideal-and-residue-field-of-zp` — title

- Source line(s): 4
- Symptom: The title shows literal ASCII “Z_p” rather than a typeset p-adic ring symbol.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/cor-maximal-ideal-and-residue-field-of-zp--01.png` (SHA256 `dad8adef762702fb5d697814618df6230d4b1f7993987246164979fbbf9186eb`)
- Suggested repair: Use $\mathbb{Z}_p$ in the title.

### `cor-first-supplement-via-cyclotomic-frobenius` — title

- Source line(s): 4
- Symptom: The title shows “Q(i)” as plain ASCII instead of the number-field notation used in the body.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/cor-first-supplement-via-cyclotomic-frobenius--01.png` (SHA256 `7329a7ab833777194c4f6af78fb7ccb9904f893e7853da8b25604f7ec45066f3`)
- Suggested repair: Use $\mathbb{Q}(i)$ in the title.

### `ex-continued-fraction-of-square-root-two` — title

- Source line(s): 4
- Symptom: The title renders “[1; overline 2]” and “sqrt(2)” as literal ASCII formula text.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/ex-continued-fraction-of-square-root-two--01.png` (SHA256 `f7399e9a4eac0f30c53bea5140f0c458ecfdd86b1bc165c4e03e7e4df5db7f9b`)
- Suggested repair: Use $[1;\overline{2}]$ and $\sqrt{2}$ in the title.

### `ex-index-obstructs-naive-polynomial-factorization` — title

- Source line(s): 4
- Symptom: The title renders “Z[sqrt 5]” literally; the radical and number ring are not typeset.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/ex-index-obstructs-naive-polynomial-factorization--01.png` (SHA256 `9dc68e7150302d3323743fad23c7512328bc8936d2f015a9c69c70b919d1ab8a`)
- Suggested repair: Use $\mathbb{Z}[\sqrt{5}]$ in the title.

### `ex-nonmaximal-quadratic-order` — title

- Source line(s): 4
- Symptom: The title renders “Z[sqrt 5]” and “O_Q(sqrt 5)” as literal ASCII formula text.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/ex-nonmaximal-quadratic-order--01.png` (SHA256 `03c48c4f4742707d3c1aa5ed15a383ecf7e9ff46ae501c8e2664c7bd61d8997a`)
- Suggested repair: Use $\mathbb{Z}[\sqrt{5}]$ and $\mathcal{O}_{\mathbb{Q}(\sqrt{5})}$ in the title.

### `thm-p-adic-newton-criterion` — title

- Source line(s): 4
- Symptom: The title renders “Q_p” literally with an underscore rather than typeset p-adic field notation.
- Classification: `title-ascii-mathematical-notation`
- Screenshot: `screenshots/thm-p-adic-newton-criterion--01.png` (SHA256 `90c06a74d1227263e661b701320d363c0e5a61e218670581b618f1380cf23967`)
- Suggested repair: Use $\mathbb{Q}_p$ in the title.

### `cor-unit-ranks-by-number-field-signature` — proof technique / verification technique

- Source line(s): 79
- Symptom: The technique banner prints raw inline TeX delimiters and commands, including “$r_1+r_2-1$” and “$\mathcal O_K^\times\cong...$”, instead of rendering them.
- Classification: `raw-tex-in-nonmath-metadata`
- Screenshot: `screenshots/cor-unit-ranks-by-number-field-signature--02.png` (SHA256 `5e5e34410e172a0fb800ac87631338516fa37e618dcd393a57a72be711551775`)
- Suggested repair: Remove TeX markup from the non-math technique field or rewrite the banner in plain words (for example, “read the unit rank from Dirichlet’s unit theorem”).

### `ex-change-of-fundamental-units-preserves-regulator` — proof technique / verification technique

- Source line(s): 90
- Symptom: The verification technique banner prints the polynomial with literal dollar delimiters and TeX syntax (“$X^3-3X+1$”).
- Classification: `raw-tex-in-nonmath-metadata`
- Screenshot: `screenshots/ex-change-of-fundamental-units-preserves-regulator--02.png` (SHA256 `a7bde33c674b2135415bd986471dc5b2a403f14f9193a41c12427b9844a2ff28`)
- Suggested repair: Rewrite the non-math technique field in plain text, for example “the cubic polynomial X^3 - 3X + 1,” or move formula notation into a rendered prose field.

### `ex-units-of-q-and-imaginary-quadratic-fields` — proof technique / verification technique

- Source line(s): 85
- Symptom: The verification technique banner prints raw inline TeX for “$N(u)=\pm1$” rather than typesetting the norm equation.
- Classification: `raw-tex-in-nonmath-metadata`
- Screenshot: `screenshots/ex-units-of-q-and-imaginary-quadratic-fields--02.png` (SHA256 `183871fd18f7cedaf82358882ca48763fb7da6cb83f28ddd7a9cb25eedadc7f6`)
- Suggested repair: Rewrite this non-math technique field in plain text (“the norm equation N(u) = plus or minus 1”) or put the formula in a rendered prose field.

## Diagram review

No assigned item has an existing TikZ/rendered diagram in its receipt (`tikz_count: 0` throughout; no receipt diagram failures). These are editorial candidates only, not defects or required additions:

- `lem-gauss-lower-half-lattice-count` lines 31, 35: Plot the finite integer points with 1 <= x <= (p-1)/2 and 0 < p y < q x; show the sloping boundary py=qx and distinguish counted points. Check that open/closed boundary treatment and the strict inequality match the source set exactly.

- `lem-reciprocity-rectangle-lattice-count` lines 34, 38: Draw the open integer rectangle 1 <= x <= (p-1)/2, 1 <= y <= (q-1)/2, the diagonal py=qx, and the two disjoint point sets py<qx and qx<py with labels S_{p,q}, S_{q,p}. Check there are no diagonal lattice points because p and q are distinct primes, and that exchanging coordinates/primes swaps the regions.

## Complete item and tile coverage

Each tile row includes the receipt SHA256 and the individual original-resolution viewing attestation.

### `cex-chinese-remainder-without-coprimality`

- Source: `items/cex-chinese-remainder-without-coprimality.md`; assignment/source/snapshot SHA256s agree (`3d894f70a06fcdd30154b019be6bc9f3b5440ed5f270a91fd9e2e168d3cf7c47`).
- Local HTML: `html/cex-chinese-remainder-without-coprimality.html` (assignment HTML SHA256 `cd687affeea402ac2ede35582045078afef40d91d0159b558195720dfe85272d`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cex-chinese-remainder-without-coprimality--01.png` — SHA256 `cf1d8195a34cca7658756b620f5b58c5b68ea62b71602cad3eaea14bee190eab`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cex-gauss-sum-sign-is-not-canonical-without-conventions`

- Source: `items/cex-gauss-sum-sign-is-not-canonical-without-conventions.md`; assignment/source/snapshot SHA256s agree (`f840202c65e8b6e1e4fc0c5535b6580b81b7b26471a61e921628c3b82f9e223d`).
- Local HTML: `html/cex-gauss-sum-sign-is-not-canonical-without-conventions.html` (assignment HTML SHA256 `c7fa7bd6428d52687bf133ec902f5337902a3a0b2c8132ddf2ee974a879155ef`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cex-gauss-sum-sign-is-not-canonical-without-conventions--01.png` — SHA256 `375c496f1be9f73b65714892cd8904859458b02ca1104dd05bbc7916d002a4f1`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cex-product-of-two-quadratic-nonresidues-modulo-a-composite`

- Source: `items/cex-product-of-two-quadratic-nonresidues-modulo-a-composite.md`; assignment/source/snapshot SHA256s agree (`f568ac157b10a547175dcb84a40c6e5296040a268ff5226e380fedebbedd9f5d`).
- Local HTML: `html/cex-product-of-two-quadratic-nonresidues-modulo-a-composite.html` (assignment HTML SHA256 `909a5724a2b375a17b6d73f5ed4fbcd504672ae0a7ca4182a521e97cf6b3bcff`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cex-product-of-two-quadratic-nonresidues-modulo-a-composite--01.png` — SHA256 `37325952f9d6e4d4460ed7939bf5b16a4286529272ebd5674220ee3771dc4d9c`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cex-sums-of-three-squares-are-not-closed-under-products`

- Source: `items/cex-sums-of-three-squares-are-not-closed-under-products.md`; assignment/source/snapshot SHA256s agree (`55447ab76eb643dfd8069415554956ec4dcbee213e77b5e2bbcbff63cf28ad3a`).
- Local HTML: `html/cex-sums-of-three-squares-are-not-closed-under-products.html` (assignment HTML SHA256 `74903c30ea0fd2f2ca5d3c54275e8d447180ce9982fd75017ebb90c79f688998`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cex-sums-of-three-squares-are-not-closed-under-products--01.png` — SHA256 `aa1b8e564febf7fcc4b3512f4513b3caf00dadfa23cce244ba32fe5690177d78`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-average-order-of-divisor-counting-function`

- Source: `items/cor-average-order-of-divisor-counting-function.md`; assignment/source/snapshot SHA256s agree (`9ea6df2ac301e897a2404da9da7576d03bb319e09475b1bd2625be5246df8fe3`).
- Local HTML: `html/cor-average-order-of-divisor-counting-function.html` (assignment HTML SHA256 `3a682d77038ff0c8bc354edab1d9cfbcfd9151d7fd8c629b4e1faa053ae52df4`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-average-order-of-divisor-counting-function--01.png` — SHA256 `6a2417f581472e4fe12be836bce39ced426a6227e5f78d34df816e2296b98bb3`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-complete-splitting-in-a-cyclotomic-field`

- Source: `items/cor-complete-splitting-in-a-cyclotomic-field.md`; assignment/source/snapshot SHA256s agree (`f814333c4f60b083728ca04b52ea7d952a74c47c0491abe837a5f7aeee7ed48e`).
- Local HTML: `html/cor-complete-splitting-in-a-cyclotomic-field.html` (assignment HTML SHA256 `28ee2bf9779a2b3fb8085f9b0ff02a76ea40f605b52565a24dac26f79020a5e4`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-complete-splitting-in-a-cyclotomic-field--01.png` — SHA256 `c2bae2775aeb7837d076f93789e8efdbc90ed6a02186f14f54464a9125e744a3`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/cor-complete-splitting-in-a-cyclotomic-field--02.png` — SHA256 `625754787a98c90de921427e1c78744caf5e703344bb6e9ca26a65f7d53eaafc`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-divisor-dirichlet-series-zeta-square`

- Source: `items/cor-divisor-dirichlet-series-zeta-square.md`; assignment/source/snapshot SHA256s agree (`602438754c12d8d815c778cf0942efd4cb7ed4b964d3d672fdd2f0addab75a98`).
- Local HTML: `html/cor-divisor-dirichlet-series-zeta-square.html` (assignment HTML SHA256 `465af987db9b9b82e2d2901fb4aea693c07dcdd683391f35eb48f0389ae7dd22`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-divisor-dirichlet-series-zeta-square--01.png` — SHA256 `5bb47018e835805c2abb4e2401ec04f2e60c42cd69c06e7f2b0861afb3fee51b`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-first-supplement-via-cyclotomic-frobenius`

- Source: `items/cor-first-supplement-via-cyclotomic-frobenius.md`; assignment/source/snapshot SHA256s agree (`e6907157eb445141de9f21b60411bc78f5fc8883a740c7c23703c3bdce74c0e7`).
- Local HTML: `html/cor-first-supplement-via-cyclotomic-frobenius.html` (assignment HTML SHA256 `fbce1e093d76c5b794e37ec8c3fc4bb391a81d9af65342e3bbdd2b75b913c64a`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-first-supplement-via-cyclotomic-frobenius--01.png` — SHA256 `7329a7ab833777194c4f6af78fb7ccb9904f893e7853da8b25604f7ec45066f3`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-maximal-ideal-and-residue-field-of-zp`

- Source: `items/cor-maximal-ideal-and-residue-field-of-zp.md`; assignment/source/snapshot SHA256s agree (`a4768fdcdc17dece284af24a4ee7da15752273628e6b8084d4194da1c2de9b13`).
- Local HTML: `html/cor-maximal-ideal-and-residue-field-of-zp.html` (assignment HTML SHA256 `94a95a6f63e80581059448ef55f7e8c551877caacdb138ef9d3d163cefab8174`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-maximal-ideal-and-residue-field-of-zp--01.png` — SHA256 `dad8adef762702fb5d697814618df6230d4b1f7993987246164979fbbf9186eb`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-number-of-solutions-of-a-binomial-congruence`

- Source: `items/cor-number-of-solutions-of-a-binomial-congruence.md`; assignment/source/snapshot SHA256s agree (`2c37b865513458d770da9e473075fa3909afb8d1a4fb9490f6debbe4c1e5a285`).
- Local HTML: `html/cor-number-of-solutions-of-a-binomial-congruence.html` (assignment HTML SHA256 `7a8c215ef6fef8f43c09a9525e4d687044fa746642592a18348b37754127b6a5`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-number-of-solutions-of-a-binomial-congruence--01.png` — SHA256 `65e157130ae716f1af7d79d3b05f8238a0b5d823828d79bad96e5ae808f09cee`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-prime-iff-euclid-property`

- Source: `items/cor-prime-iff-euclid-property.md`; assignment/source/snapshot SHA256s agree (`41809e68a97586209d7daddeb72b06d290a55bc5abc169073996a2e4411089e2`).
- Local HTML: `html/cor-prime-iff-euclid-property.html` (assignment HTML SHA256 `6807d73aeb3c746496ac4c185e9459a9bedbb2f523894bd2cd308fa8b5e13cc3`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-prime-iff-euclid-property--01.png` — SHA256 `1137fcabc3954f1d1dcb8a36bdd487fa011c38456320e5437cb31b8a1e9d2e8a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/cor-prime-iff-euclid-property--02.png` — SHA256 `c98e145225dd7fe1f304224c28d8f640070a6170a1577c7a94214e5ef9f4099a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/cor-prime-iff-euclid-property--03.png` — SHA256 `492ce915040b8092ea7b7e321bac37e312ebd6e431cc20696a2a87174e0e03a6`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-squarefree-sum-of-two-squares-characterisation`

- Source: `items/cor-squarefree-sum-of-two-squares-characterisation.md`; assignment/source/snapshot SHA256s agree (`76e173d8edf3898d859dc3c4ad1e0f0284029dd992672c161f632dd2ead06d63`).
- Local HTML: `html/cor-squarefree-sum-of-two-squares-characterisation.html` (assignment HTML SHA256 `8ed81c86bcce2364bc18c4a5035c917b5cf78617967e9cc4a7dc36e1d5457169`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-squarefree-sum-of-two-squares-characterisation--01.png` — SHA256 `4ab50bd033758d7118dc7debece0b4ce517249776dd7b5df76af27545ce4e02f`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/cor-squarefree-sum-of-two-squares-characterisation--02.png` — SHA256 `f0995465eb569244519243da407e0a89fb5d5ea35f7c777a53be71067d67f67e`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `cor-unit-ranks-by-number-field-signature`

- Source: `items/cor-unit-ranks-by-number-field-signature.md`; assignment/source/snapshot SHA256s agree (`c15ec2dcb237faa5dfc3eea6e0007792ef6e841eb69b327c1dd4259e6aaac753`).
- Local HTML: `html/cor-unit-ranks-by-number-field-signature.html` (assignment HTML SHA256 `3db05ab43cbbdd8084bcce194a383c2cff41f0438e5c17d8cf33cc706bb6fe01`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/cor-unit-ranks-by-number-field-signature--01.png` — SHA256 `bd7202733fab1baceb173cb921e832088d45481e667910997411a9d211f10641`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/cor-unit-ranks-by-number-field-signature--02.png` — SHA256 `5e5e34410e172a0fb800ac87631338516fa37e618dcd393a57a72be711551775`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/cor-unit-ranks-by-number-field-signature--03.png` — SHA256 `9b2f9373a2a69f3ff585415d9a981193fed2973c468195811d2a315a8b0924dc`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-arithmetic-frobenius-coset`

- Source: `items/def-arithmetic-frobenius-coset.md`; assignment/source/snapshot SHA256s agree (`a2d9176af83029c30fe0f1db543e0e7c6b92aa023ed6240fe8e53d8b8e47a589`).
- Local HTML: `html/def-arithmetic-frobenius-coset.html` (assignment HTML SHA256 `1d95d17e8074162d338e982f7f09606e9e794faca1487c1194deef235ca853ce`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-arithmetic-frobenius-coset--01.png` — SHA256 `7d7f924104a416b240c5ac094cc08e4f2fd8a17ba1a5bdd090bc2b2345135607`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-completely-multiplicative-arithmetic-function`

- Source: `items/def-completely-multiplicative-arithmetic-function.md`; assignment/source/snapshot SHA256s agree (`6dd1097604a8dc82ea53ea0bfe00d0c7635fcfc25972cc705af6ae301dde81a4`).
- Local HTML: `html/def-completely-multiplicative-arithmetic-function.html` (assignment HTML SHA256 `2b654deddaa460ae05560e717d06e4ed830545b59258fbce5790e06dc35c6c17`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-completely-multiplicative-arithmetic-function--01.png` — SHA256 `0f1da3d98eb48b496457228c5c64c8747c81c527120e9cc5cdb0802fe69bbbcf`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-dirichlet-convolution`

- Source: `items/def-dirichlet-convolution.md`; assignment/source/snapshot SHA256s agree (`20e8f213c028bece0d7956fbe52e1730f712bfeb88407ce5b75672f400cc3074`).
- Local HTML: `html/def-dirichlet-convolution.html` (assignment HTML SHA256 `dd3c68be9399d4cb04a5bae193465357deca43074f8caaf547e19785551700be`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-dirichlet-convolution--01.png` — SHA256 `dd453dbf7828f9513baf16be3dcfddf5edf6fa38d3131979be274e69dfb1ecb0`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-euler-mascheroni-constant`

- Source: `items/def-euler-mascheroni-constant.md`; assignment/source/snapshot SHA256s agree (`7a2ccf578d2c3d90ad5316868129cc8a8a6368439c2a57cba82c79f474f4b2b1`).
- Local HTML: `html/def-euler-mascheroni-constant.html` (assignment HTML SHA256 `c5994c388d2e5a9577bdf5c8d4422d4986f109c69103520a13a35d0677bb5695`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-euler-mascheroni-constant--01.png` — SHA256 `e81d83122ead824d8eb7354b63336ca397355e22846180e21821e8c7830bf724`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-index-of-a-unit-relative-to-a-primitive-root`

- Source: `items/def-index-of-a-unit-relative-to-a-primitive-root.md`; assignment/source/snapshot SHA256s agree (`ac66024fa6419b2ffe842b46cd9728008d16f010f0d5138709e14844638a6cf5`).
- Local HTML: `html/def-index-of-a-unit-relative-to-a-primitive-root.html` (assignment HTML SHA256 `96f49e3e08f27555ffb112bc58e87fa0c2494650315bff054a76f754dbcdf80e`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-index-of-a-unit-relative-to-a-primitive-root--01.png` — SHA256 `fbcfff7a871e7991d398dc0d3f4921867c79f898bd3ff95fc4ddb86879037643`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-liouville-function`

- Source: `items/def-liouville-function.md`; assignment/source/snapshot SHA256s agree (`b62309afa0d7583967b169516f1f0b9d562ee43c899ac2f7997c84a793115337`).
- Local HTML: `html/def-liouville-function.html` (assignment HTML SHA256 `8446b79835edddddaa4cea453fb6ce346a074790547f98264463daab81401681`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-liouville-function--01.png` — SHA256 `e4c2eb4b28f5b20145a60dff1f6bfa493a762958abf65e564fc3dac6e0825f45`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-normed-vector-space-over-an-absolutely-valued-field`

- Source: `items/def-normed-vector-space-over-an-absolutely-valued-field.md`; assignment/source/snapshot SHA256s agree (`5ba299289ba867a687eb729e1bbca440c5ca8f667002cbc4ec00d527c67829da`).
- Local HTML: `html/def-normed-vector-space-over-an-absolutely-valued-field.html` (assignment HTML SHA256 `d17e87713d92f868bac4094d320978dc3381b543ea472e01ba688c65c0fe41de`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-normed-vector-space-over-an-absolutely-valued-field--01.png` — SHA256 `e8706ff28018565ddfb5bebd668fb9b04fb3256d97e030a8986fb751a6200ad6`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-positive-definite-binary-quadratic-form`

- Source: `items/def-positive-definite-binary-quadratic-form.md`; assignment/source/snapshot SHA256s agree (`672b18623db8ec4f9311e403992f378582a32d0845865f506b44341d39142ac0`).
- Local HTML: `html/def-positive-definite-binary-quadratic-form.html` (assignment HTML SHA256 `d664a9ae38face16cdb0b857a61dd428b72a5c47ebc0a19f0da331906c218254`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-positive-definite-binary-quadratic-form--01.png` — SHA256 `9bc58cc1f0bafc524332c2f07cfc09b20632d8935cf7a92f7f3b2e34bb3a9ff4`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-quadratic-gauss-sum-in-a-cyclotomic-field`

- Source: `items/def-quadratic-gauss-sum-in-a-cyclotomic-field.md`; assignment/source/snapshot SHA256s agree (`4774061cf4427784f042a7f4283e42312f43528c5e87eee649cbcf92883cc95f`).
- Local HTML: `html/def-quadratic-gauss-sum-in-a-cyclotomic-field.html` (assignment HTML SHA256 `e24b9a1f71e829a9089875d230cfeb00368cef47c14476beb03254c8eeba28f5`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-quadratic-gauss-sum-in-a-cyclotomic-field--01.png` — SHA256 `6846046e1a5c23d1e75933b96f0919b7a58cea384413ac3da02313697e7329aa`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-split-inert-ramified-and-unramified-prime`

- Source: `items/def-split-inert-ramified-and-unramified-prime.md`; assignment/source/snapshot SHA256s agree (`db4e890263408978b36db62875e1434783ea8c0e97a934bd22035e690aaeb910`).
- Local HTML: `html/def-split-inert-ramified-and-unramified-prime.html` (assignment HTML SHA256 `42ff1edf1081d13fabef8ec58e4f0c5a31c4f669b4ce47ed094763366eb08818`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-split-inert-ramified-and-unramified-prime--01.png` — SHA256 `edde4b0e107a80ec73ec247ddce2ffd8d9763a45a457597c842551f605d7f917`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `def-von-mangoldt-function`

- Source: `items/def-von-mangoldt-function.md`; assignment/source/snapshot SHA256s agree (`f71e6d67eccbf38fa6d2678e537a8e9cd32b45fac4407bd6f88d06b5ac530776`).
- Local HTML: `html/def-von-mangoldt-function.html` (assignment HTML SHA256 `7ac18b7ee65612e57c402278b14655b0e32c5ce64171001387e6d542fd9bec97`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/def-von-mangoldt-function--01.png` — SHA256 `ce683fb2b4512b5cf6e5dac1e53932bfab17e471826f4c6321567bdbc28088a3`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-change-of-fundamental-units-preserves-regulator`

- Source: `items/ex-change-of-fundamental-units-preserves-regulator.md`; assignment/source/snapshot SHA256s agree (`d7bbcd986021acd40e66d11fcbf2d22c6f2075bf2c2ee89511890248ef988c4e`).
- Local HTML: `html/ex-change-of-fundamental-units-preserves-regulator.html` (assignment HTML SHA256 `e991383c7b2ecc22103dea1305533b17a5524ce67d4407e6c49237f8a05fd764`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-change-of-fundamental-units-preserves-regulator--01.png` — SHA256 `b2940521bd728ddefdb6b1ee8a653b0e869afa0e2f9430d33d18cb471c17fa2b`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/ex-change-of-fundamental-units-preserves-regulator--02.png` — SHA256 `a7bde33c674b2135415bd986471dc5b2a403f14f9193a41c12427b9844a2ff28`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/ex-change-of-fundamental-units-preserves-regulator--03.png` — SHA256 `ec773c644fad00d21e3c5bcff9706dc07a205f2cade58c4f36acb79b08e06641`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-continued-fraction-of-square-root-two`

- Source: `items/ex-continued-fraction-of-square-root-two.md`; assignment/source/snapshot SHA256s agree (`4eff42fe637e85e70537d1ab85c8deba51bdbfbd7065455594a6e48f7b76b8ee`).
- Local HTML: `html/ex-continued-fraction-of-square-root-two.html` (assignment HTML SHA256 `e4191299a72709a64f3286fa9067e0170f20d49a4db8789720ff0c02302e70c2`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-continued-fraction-of-square-root-two--01.png` — SHA256 `f7399e9a4eac0f30c53bea5140f0c458ecfdd86b1bc165c4e03e7e4df5db7f9b`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-dirichlet-hyperbola-lattice-decomposition`

- Source: `items/ex-dirichlet-hyperbola-lattice-decomposition.md`; assignment/source/snapshot SHA256s agree (`464656b0d096b3329e4b8c5f513b0a761e2cc3cf2d8732517e65c460235491c3`).
- Local HTML: `html/ex-dirichlet-hyperbola-lattice-decomposition.html` (assignment HTML SHA256 `62ea7800cb8d82b5b1d89bb32bffa23f47d999d158fb128eb498d513d59cc5ec`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-dirichlet-hyperbola-lattice-decomposition--01.png` — SHA256 `b01222e12348e683fcbaba7fd045a4df07be49c63750ec98e55aad66246d4c43`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-euler-criterion-with-a-large-prime`

- Source: `items/ex-euler-criterion-with-a-large-prime.md`; assignment/source/snapshot SHA256s agree (`fc1ed5f883bdc0ed66f95b1b783829db946d19b8373636655358833558eb31c9`).
- Local HTML: `html/ex-euler-criterion-with-a-large-prime.html` (assignment HTML SHA256 `9f018e6f1f1075e3a7e49438e44f21545aa0f8f2b033105c3fc1cff263fd3f68`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-euler-criterion-with-a-large-prime--01.png` — SHA256 `2f5c5c588d319e62150a8193589541f9bb522eb9b3ebd6825a88c2f7164bc08d`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/ex-euler-criterion-with-a-large-prime--02.png` — SHA256 `b7bd6e56c8ebe4d188e00a17a4893d76febac874228cfc7f79d9f2cea98cdf48`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-four-square-product-identity-by-expansion`

- Source: `items/ex-four-square-product-identity-by-expansion.md`; assignment/source/snapshot SHA256s agree (`2ffa6bc6525dd6e6da191739c757eebd2e6798ad88e99bf79cb762e8a82dd27a`).
- Local HTML: `html/ex-four-square-product-identity-by-expansion.html` (assignment HTML SHA256 `eecbe40618ed82cffddf2e590a426330baf2f25deaff2f5ed2e1d54f001a36dc`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-four-square-product-identity-by-expansion--01.png` — SHA256 `2614d613a4c8ac9d782a1171b65b896a9aa3c37030c1bf54d75d597715f66c2b`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-gaussian-and-eisenstein-integer-bases`

- Source: `items/ex-gaussian-and-eisenstein-integer-bases.md`; assignment/source/snapshot SHA256s agree (`f070d91e1df63cfc7a0f1eadd5d071c134b503f513a7504f2990069d00f4870c`).
- Local HTML: `html/ex-gaussian-and-eisenstein-integer-bases.html` (assignment HTML SHA256 `7bb95f53b1953591a62a9459ecffb7215dec1c6cdb21f2491d63c5f30f103f18`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-gaussian-and-eisenstein-integer-bases--01.png` — SHA256 `a6640e44681fe199f9a034cdccfe172fa4c60837d73b05ddc7e2af28219fecf7`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-index-obstructs-naive-polynomial-factorization`

- Source: `items/ex-index-obstructs-naive-polynomial-factorization.md`; assignment/source/snapshot SHA256s agree (`4f233376c16e1ec9325e6e8b94dc37212a1ae477ef80d055e450f83c66fb1463`).
- Local HTML: `html/ex-index-obstructs-naive-polynomial-factorization.html` (assignment HTML SHA256 `9ec79d492044ac3f29030c673541ea72cee77d637d976f80d3a0c945f81875c8`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-index-obstructs-naive-polynomial-factorization--01.png` — SHA256 `9dc68e7150302d3323743fad23c7512328bc8936d2f015a9c69c70b919d1ab8a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-local-obstruction-to-a-rational-conic`

- Source: `items/ex-local-obstruction-to-a-rational-conic.md`; assignment/source/snapshot SHA256s agree (`e19e2f191675f98fa5468764e333f1fe15b005321b6e24d7797a8bbd1c61d39b`).
- Local HTML: `html/ex-local-obstruction-to-a-rational-conic.html` (assignment HTML SHA256 `17b1534b29c2856f45949fcee8e36716fbc4992c7f6f912d91197fe6664d9fc1`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-local-obstruction-to-a-rational-conic--01.png` — SHA256 `ca6d1b1f526d533f8a76970a7942fcfd7a220eb7d1979621980a2ce939ed89c0`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-nonmaximal-quadratic-order`

- Source: `items/ex-nonmaximal-quadratic-order.md`; assignment/source/snapshot SHA256s agree (`5d1c6c9ebb2e83a8e699cf1e370655ecb1a6a3b54309b6415935896569ef393e`).
- Local HTML: `html/ex-nonmaximal-quadratic-order.html` (assignment HTML SHA256 `ff796f5b74206e2c1204bd0de9f8c2e2275bb75e393a24fafcc85bf6b2365046`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-nonmaximal-quadratic-order--01.png` — SHA256 `03c48c4f4742707d3c1aa5ed15a383ecf7e9ff46ae501c8e2664c7bd61d8997a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-power-residues-modulo-seventeen`

- Source: `items/ex-power-residues-modulo-seventeen.md`; assignment/source/snapshot SHA256s agree (`07b0bded7a1c3d5230606ffd4205b9643df670d3488cc51de40387413dab4cfc`).
- Local HTML: `html/ex-power-residues-modulo-seventeen.html` (assignment HTML SHA256 `3cd103a0fb25b1b10c95b79303195734f399f21b07b9f2f739485572af8fb100`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-power-residues-modulo-seventeen--01.png` — SHA256 `f3d1851e22d1dd3ec4b011304c6ae22767398305b052c2c7fc170d1593c585fc`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-primitive-root-modulo-thirteen-by-prime-divisor-tests`

- Source: `items/ex-primitive-root-modulo-thirteen-by-prime-divisor-tests.md`; assignment/source/snapshot SHA256s agree (`d136e46281c47ca1042ca2afa4f1d616c20ad653a110fa264ddd635551774491`).
- Local HTML: `html/ex-primitive-root-modulo-thirteen-by-prime-divisor-tests.html` (assignment HTML SHA256 `5f8a93e1a77b112167ef4a5c2cc278ad144f05a9f0059f93233f74408cf97482`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-primitive-root-modulo-thirteen-by-prime-divisor-tests--01.png` — SHA256 `e053776f5836fbc608e71321368d53764cbf271ef806c79e47b352be85ef9d33`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-quadratic-residues-and-nonresidues-modulo-eleven`

- Source: `items/ex-quadratic-residues-and-nonresidues-modulo-eleven.md`; assignment/source/snapshot SHA256s agree (`58616327d40abcbeaf6fce2fbed7bf6a65a9e8067c4f62c07313d34aeeb8911d`).
- Local HTML: `html/ex-quadratic-residues-and-nonresidues-modulo-eleven.html` (assignment HTML SHA256 `f33629aa13a6d5db8adbc36584313278ec4b4289f40945b3984316075fdcdb5a`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-quadratic-residues-and-nonresidues-modulo-eleven--01.png` — SHA256 `b550a666c15af5eae4b570c3c708dfc8bc18107223c07556e36f4ca1b59076d5`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-ring-of-integers-of-q`

- Source: `items/ex-ring-of-integers-of-q.md`; assignment/source/snapshot SHA256s agree (`020350de1817615e04b5f4915367e46093a53af9c210f8d8b6f1c85057287ba3`).
- Local HTML: `html/ex-ring-of-integers-of-q.html` (assignment HTML SHA256 `bd7e56ef865c93a825add4f7b46bf5a8fa1486c05edaba7c0b4d508eda9b5ae4`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-ring-of-integers-of-q--01.png` — SHA256 `a8227389fe0d654eca53f231ec7202ad140d10ae8de2d882e8f7887181084ffd`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-squarefree-sums-of-two-squares`

- Source: `items/ex-squarefree-sums-of-two-squares.md`; assignment/source/snapshot SHA256s agree (`097da1b5fe2fa1735f2ce37b2ce8fe9aee3d68a6ac875efbbb03efef2b2e9ac9`).
- Local HTML: `html/ex-squarefree-sums-of-two-squares.html` (assignment HTML SHA256 `2559d572924a173ec5378f9bbdb762c55e348d2156ce92bb28cfaba78607567a`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-squarefree-sums-of-two-squares--01.png` — SHA256 `e2e4df573471a774c10ac7ba1feab06cb76101240204c1bc6431a56f075fd8f2`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-two-essentially-different-representations-force-compositeness`

- Source: `items/ex-two-essentially-different-representations-force-compositeness.md`; assignment/source/snapshot SHA256s agree (`f5d0da2d1cd9228f2009af827492e8a88486ac72054c8b311762b9222f13ee18`).
- Local HTML: `html/ex-two-essentially-different-representations-force-compositeness.html` (assignment HTML SHA256 `4350ee96fcad52f2608be83c294a30c15ce85c782182526accdb0ebed43ccd65`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-two-essentially-different-representations-force-compositeness--01.png` — SHA256 `07ba186089a7a0285f0f46c628367baffc2aa2d15857a8b0ee524d9a5af9f458`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `ex-units-of-q-and-imaginary-quadratic-fields`

- Source: `items/ex-units-of-q-and-imaginary-quadratic-fields.md`; assignment/source/snapshot SHA256s agree (`bd032b20c1c0e6808f81aa269573af06dc1642dca35f59303f08079cd12e6d7f`).
- Local HTML: `html/ex-units-of-q-and-imaginary-quadratic-fields.html` (assignment HTML SHA256 `59618c22056ad5a482706a31cb1f50d458207f487a849ea84083d82d02f554b0`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/ex-units-of-q-and-imaginary-quadratic-fields--01.png` — SHA256 `33941a476eb3c02d17bc83dfdf5beefb9c9f2a3534d8c1706406af434c9a48c7`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/ex-units-of-q-and-imaginary-quadratic-fields--02.png` — SHA256 `183871fd18f7cedaf82358882ca48763fb7da6cb83f28ddd7a9cb25eedadc7f6`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/ex-units-of-q-and-imaginary-quadratic-fields--03.png` — SHA256 `e83f11bccdc1fc6caed12f02be2889b6ba74c344ef6371b5cb7e87694317ecb5`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `fs-n-squared-plus-n-plus-forty-one-is-always-prime`

- Source: `items/fs-n-squared-plus-n-plus-forty-one-is-always-prime.md`; assignment/source/snapshot SHA256s agree (`30d06e54fa7b0f60aaa19396e613e63ddb7fae09d66c4b55399129313a9da083`).
- Local HTML: `html/fs-n-squared-plus-n-plus-forty-one-is-always-prime.html` (assignment HTML SHA256 `7be0dffe82f3440ce2a2e52bab1864fb0c99de726fdb1ffd8844bf2c3b6bdfd3`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/fs-n-squared-plus-n-plus-forty-one-is-always-prime--01.png` — SHA256 `c238ddf2e51ee4d980be402dfa897bf1212df03ec4716ba6858ed3ef9e7fbf9c`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/fs-n-squared-plus-n-plus-forty-one-is-always-prime--02.png` — SHA256 `4a71138c354dc60f1e7c6ce4db0c182e9185f073775d14d00b9286601b02860c`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/fs-n-squared-plus-n-plus-forty-one-is-always-prime--03.png` — SHA256 `ec9d1d514a5d828637cd8dd3e0a4aac529312b8e70bbe5cd9d1c590cfacf66e4`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-brahmagupta-fibonacci-two-square-identity`

- Source: `items/lem-brahmagupta-fibonacci-two-square-identity.md`; assignment/source/snapshot SHA256s agree (`e768fa7062cf78792cbae62d9d303eee04229399ad8cbc9031cfa85d361f134d`).
- Local HTML: `html/lem-brahmagupta-fibonacci-two-square-identity.html` (assignment HTML SHA256 `0a26657d5314a344e5cc696a8bbf73484ab56bcb51496847b622933c8fbe3517`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-brahmagupta-fibonacci-two-square-identity--01.png` — SHA256 `ed2955bd446545b65b5d1bdbe943e5b9441047f3ac940bceac2d58db75192a1c`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-continued-fraction-convergent-recurrence`

- Source: `items/lem-continued-fraction-convergent-recurrence.md`; assignment/source/snapshot SHA256s agree (`e4b9a2e51f1acacb9952aff2fb65d2f63f8ffecda8bc09f50c104c60ddce274c`).
- Local HTML: `html/lem-continued-fraction-convergent-recurrence.html` (assignment HTML SHA256 `2f817d64c540a1ffe4c2660c8f433bc80d31b8347d4b235716be44064341b90d`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-continued-fraction-convergent-recurrence--01.png` — SHA256 `c7a13d1bc7cf1396aa0b4db52af515c8a7c3db453d614132ab4e7982c825dd1b`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-dirichlet-character-chebyshev-laplace-transform`

- Source: `items/lem-dirichlet-character-chebyshev-laplace-transform.md`; assignment/source/snapshot SHA256s agree (`53c58c0f63b4dedc6c3f6b23fc63393c19cb807ba034540883eabf6485fa13ec`).
- Local HTML: `html/lem-dirichlet-character-chebyshev-laplace-transform.html` (assignment HTML SHA256 `a469f61ed1f8ea86062c8187dafdc2c3990dacebcf0eee0a11e9587bfe871b9d`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-dirichlet-character-chebyshev-laplace-transform--01.png` — SHA256 `a66868425e66f9622c2d9f0784c884c22cf07a0889047168135ec7ce7a38d518`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/lem-dirichlet-character-chebyshev-laplace-transform--02.png` — SHA256 `bcdcfcfd3b4959efce5ea20541f14a25c56898ab5adbae36cbd12b45653e233a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-every-integer-above-one-has-a-prime-divisor`

- Source: `items/lem-every-integer-above-one-has-a-prime-divisor.md`; assignment/source/snapshot SHA256s agree (`90f41d640b62ea93b3220dd9e421122f23bec2b6edb5d82bf4c65303d7e024f5`).
- Local HTML: `html/lem-every-integer-above-one-has-a-prime-divisor.html` (assignment HTML SHA256 `dd53c2b2b13ca0d2582219fe1edb9de2a15380cc2c3263860ae849a735b52b24`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-every-integer-above-one-has-a-prime-divisor--01.png` — SHA256 `e65b1556103db159c52a01c4744a8ce1668210292bdeeec920dc7567d5e6e1ea`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/lem-every-integer-above-one-has-a-prime-divisor--02.png` — SHA256 `0bd768dea3ed0771b0bf5eb8e3955578afee00d329e5208399cec632492a1594`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/lem-every-integer-above-one-has-a-prime-divisor--03.png` — SHA256 `c119914a0f087e893e9d388ed0cb2f78ec17d06894bb5443ce6593854548cf84`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-gauss-lower-half-lattice-count`

- Source: `items/lem-gauss-lower-half-lattice-count.md`; assignment/source/snapshot SHA256s agree (`3c63654700bbcff87cfdaa3c1c5defb3c40739c63bfaca3f02445f037c427193`).
- Local HTML: `html/lem-gauss-lower-half-lattice-count.html` (assignment HTML SHA256 `1e4dafaab2da9d221d8431f33d10b721d72223bcb15b3f8e6047d8e75b6100c0`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-gauss-lower-half-lattice-count--01.png` — SHA256 `27daec2dd6839a6256f3b50a65cff9dc4bec3b7503c08b081109475dd8aa6356`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-hilbert-symbol-depends-only-on-square-classes`

- Source: `items/lem-hilbert-symbol-depends-only-on-square-classes.md`; assignment/source/snapshot SHA256s agree (`8e618e0c855534324d9862fcd5c99ac8901d9ced419ae1caea517934d6690484`).
- Local HTML: `html/lem-hilbert-symbol-depends-only-on-square-classes.html` (assignment HTML SHA256 `db763e71629a7c4f0738d7bb939f38fbf8d584d790d3dfe8c579138b37947f49`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-hilbert-symbol-depends-only-on-square-classes--01.png` — SHA256 `def89115c761778a9a51e382266accd181f072197c0241eaa1b4890a3191820d`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-linear-congruence-reduction-by-the-gcd`

- Source: `items/lem-linear-congruence-reduction-by-the-gcd.md`; assignment/source/snapshot SHA256s agree (`115e11adc50eeebfaf621f850e110aa0c1900254499c56867547aab8697db7b6`).
- Local HTML: `html/lem-linear-congruence-reduction-by-the-gcd.html` (assignment HTML SHA256 `aef0abfdbdd7a35919cd50072914ad7b4af1385d06007935c8d23e41936490b8`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-linear-congruence-reduction-by-the-gcd--01.png` — SHA256 `ba14b3a2283834feaca4bd70724bfaeabb86cfda13387194eac6a910377e0b49`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/lem-linear-congruence-reduction-by-the-gcd--02.png` — SHA256 `b7586c9ac751a635624dae89b937d0fbdbc64496405a8a5c9002fd95c5537a7d`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-nonarchimedean-absolute-value-criterion`

- Source: `items/lem-nonarchimedean-absolute-value-criterion.md`; assignment/source/snapshot SHA256s agree (`02b2addf69fb687e16bb7b0383b46095c5fd9166a2ef9318ea19883b24dd2bd2`).
- Local HTML: `html/lem-nonarchimedean-absolute-value-criterion.html` (assignment HTML SHA256 `fc8206fe6a2efe62fd06e43e08be0fef55962f412610b1bf3cba87645c7f7c29`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-nonarchimedean-absolute-value-criterion--01.png` — SHA256 `bc51742aac276de4433e3c67cb1b80ea2c122e8521e3697c478e5d8240c42ef8`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-order-of-one-plus-pu-modulo-prime-powers`

- Source: `items/lem-order-of-one-plus-pu-modulo-prime-powers.md`; assignment/source/snapshot SHA256s agree (`54010e3f207052b21cd404d52ca523d204b91964af8932c0515dba38e7396add`).
- Local HTML: `html/lem-order-of-one-plus-pu-modulo-prime-powers.html` (assignment HTML SHA256 `420f5e948b93774cedcc531c9d8a366123bc5d8f99f8bdd7a839f1b13c1321eb`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-order-of-one-plus-pu-modulo-prime-powers--01.png` — SHA256 `5540b77cc05638aa44b7c608505ba15f4f94d1d82e8b9553bf3f7d7d0a0b0a3c`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/lem-order-of-one-plus-pu-modulo-prime-powers--02.png` — SHA256 `d521a925586c2840838cfbb41ef01413c0597dc94b6c8bb21bce68b555f55b4f`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-prime-counting-chebyshev-partial-summation`

- Source: `items/lem-prime-counting-chebyshev-partial-summation.md`; assignment/source/snapshot SHA256s agree (`f9b0e1d7d0a59b631b076f6df4cdd778d71e6ba614dac5be2ec7c2f96758afe3`).
- Local HTML: `html/lem-prime-counting-chebyshev-partial-summation.html` (assignment HTML SHA256 `cddddaf9ed0d17fd6b89ad182231c9fc36da6b2c1d6cedc0971b31c461aed100`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-prime-counting-chebyshev-partial-summation--01.png` — SHA256 `d25fd63fda798f4c9529133fdbde7f9dd88c24990cb6488de03b54b235ff7818`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-reciprocity-rectangle-lattice-count`

- Source: `items/lem-reciprocity-rectangle-lattice-count.md`; assignment/source/snapshot SHA256s agree (`2aad750131f25a5fd6aae40de575c6c661b0fdd6ca2a46b8b89f97d4126f6880`).
- Local HTML: `html/lem-reciprocity-rectangle-lattice-count.html` (assignment HTML SHA256 `09929f2c8f0564a304cbbb9b2b27697532299563bda677a472387f47b15ee02b`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-reciprocity-rectangle-lattice-count--01.png` — SHA256 `e56b6bd948cff6550f267b223efc471022cc002446a8341f6d85996b32a71103`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-summatory-logarithm-asymptotic`

- Source: `items/lem-summatory-logarithm-asymptotic.md`; assignment/source/snapshot SHA256s agree (`d1cabc7b1d419536e7b7148f4dbbaf1cf5baa265861ec55629d81b5c597a6e05`).
- Local HTML: `html/lem-summatory-logarithm-asymptotic.html` (assignment HTML SHA256 `b76cbf3a12c32d2f91c176d406670413d53a9dcea5f31912c161426c4ba94e1f`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-summatory-logarithm-asymptotic--01.png` — SHA256 `fa114de7f714c85f5c9bd5bcf3585663f8cea58a734f7ac6fb50bc5ad245a79a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `lem-von-mangoldt-explicit-formula-residues`

- Source: `items/lem-von-mangoldt-explicit-formula-residues.md`; assignment/source/snapshot SHA256s agree (`ae4c7de741b860610b4307433ce031b94b68bb6e7cb61dfd32156fd83c6acf10`).
- Local HTML: `html/lem-von-mangoldt-explicit-formula-residues.html` (assignment HTML SHA256 `9ea21da56df5fe34f76a4ca9168016d5fb8e9d951c68b1f87ea2f57decda85b4`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/lem-von-mangoldt-explicit-formula-residues--01.png` — SHA256 `360b9f3a2cad21fd5d6c78430983dc7f17080a6594b8ed4dd3e8c9acf386f4e2`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation`

- Source: `items/prop-discriminant-square-mod-four-n-criterion-for-primitive-representation.md`; assignment/source/snapshot SHA256s agree (`6be87a9c1a37c4ef07f829b78f69cbb3142c522abc939368a7bf1d28912eebb3`).
- Local HTML: `html/prop-discriminant-square-mod-four-n-criterion-for-primitive-representation.html` (assignment HTML SHA256 `bf2695b6e45f1706bd23f5393f5b4425b2485ae90473ccd66c7264abaaa8016c`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/prop-discriminant-square-mod-four-n-criterion-for-primitive-representation--01.png` — SHA256 `5b4f518b3f886e2cd313ad66db5e8be26bc1ec46d0715add244d8a98bd4fba34`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/prop-discriminant-square-mod-four-n-criterion-for-primitive-representation--02.png` — SHA256 `84663c8f1a1ddb91a9ee6d9d0457b9494354541f56e6b01d5f363ae72293178f`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `prop-odd-two-square-representations-correspond-under-doubling`

- Source: `items/prop-odd-two-square-representations-correspond-under-doubling.md`; assignment/source/snapshot SHA256s agree (`2bfdfaab7b63cc360a3a41bd16d5abcab44c02386f82b43ea32c2fbc42efc360`).
- Local HTML: `html/prop-odd-two-square-representations-correspond-under-doubling.html` (assignment HTML SHA256 `a667422be3dd69e4c1c02614741f832aee74341f6de151c31843af9fee88864b`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/prop-odd-two-square-representations-correspond-under-doubling--01.png` — SHA256 `3482c26d007397fa283183b9adff50a3bf8167c713c6b67e7579cc3ccb0d3dc6`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/prop-odd-two-square-representations-correspond-under-doubling--02.png` — SHA256 `39d8b6323dd21643a466d56bfa5de74da3bc993b7dce77419a1ae50a8a8bda18`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-all-positive-pell-solutions-are-fundamental-powers`

- Source: `items/thm-all-positive-pell-solutions-are-fundamental-powers.md`; assignment/source/snapshot SHA256s agree (`5b20f245fbc98c1972f434b3b5be45bc4e76cbfd5dcc1c22693cc2f72c5315a3`).
- Local HTML: `html/thm-all-positive-pell-solutions-are-fundamental-powers.html` (assignment HTML SHA256 `cc2d9113532d1167f1c18d78095ef5499a0a9d3b0a12dd6356fbe87fcd1a6f14`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-all-positive-pell-solutions-are-fundamental-powers--01.png` — SHA256 `afac5f5c16b165f30d5de0ca2e9cd8b75cffb9f3c9bacbc1568a7d81a6d55c41`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-clearing-denominators-for-an-algebraic-number`

- Source: `items/thm-clearing-denominators-for-an-algebraic-number.md`; assignment/source/snapshot SHA256s agree (`536e04fe772dff2bdf1f72bdfe788272626ead7ad0dc1f476cbabf746b1034cb`).
- Local HTML: `html/thm-clearing-denominators-for-an-algebraic-number.html` (assignment HTML SHA256 `b9def30613176004740c13dc9097f2152941430d28897cff4226c219d0735e19`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-clearing-denominators-for-an-algebraic-number--01.png` — SHA256 `bec49496f8b87be0f139aaf4f07fbc225e5c9c8c30ec3aab1c394fe9993f6ff3`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-cyclotomic-ring-of-integers`

- Source: `items/thm-cyclotomic-ring-of-integers.md`; assignment/source/snapshot SHA256s agree (`99584b81ee51868ab332036fd0d0408e760bc7e6b038c11bd5c6ceb957778518`).
- Local HTML: `html/thm-cyclotomic-ring-of-integers.html` (assignment HTML SHA256 `a9d2fd688e2fd953ca77d86a0c54b7b7862ffb9dc76aba585460545802db5fab`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-cyclotomic-ring-of-integers--01.png` — SHA256 `1473bccf24b244053d1a04004b5ab990ba9e4b455e8ac87be5ebcd2be20ca663`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-cyclotomic-ring-of-integers--02.png` — SHA256 `234ddc5048f7cbe0d8080c04018486fd2e25de10e76b95bb6ae77569fce3b5bc`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-cyclotomic-ring-of-integers--03.png` — SHA256 `182cb6b551546994476eee9d1dd695b8e27fccb4c5a7686216ad3f5b4823e2c5`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-dirichlet-character-primitive-induction`

- Source: `items/thm-dirichlet-character-primitive-induction.md`; assignment/source/snapshot SHA256s agree (`6951a92f232adfc4f274d6a2fdba94bd53def8c1046e419870cd010919d09efb`).
- Local HTML: `html/thm-dirichlet-character-primitive-induction.html` (assignment HTML SHA256 `550de2f4cef718af2cb12bf8b78a8488cebc764472b408517d737dad51017174`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-dirichlet-character-primitive-induction--01.png` — SHA256 `e088a5d44de652084602604e6aad9312b67f81c940364964dd10aca4a713dc46`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-dirichlet-series-absolute-half-plane-holomorphy`

- Source: `items/thm-dirichlet-series-absolute-half-plane-holomorphy.md`; assignment/source/snapshot SHA256s agree (`a6b5930783fba4c602f4d011a6469adcbd207c3ac92368c4122563350fb6a355`).
- Local HTML: `html/thm-dirichlet-series-absolute-half-plane-holomorphy.html` (assignment HTML SHA256 `ea39e1bc119617249555885e5f708e36a9a50e5ce0caf9793324ad2b51564983`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-dirichlet-series-absolute-half-plane-holomorphy--01.png` — SHA256 `b73b1f66b6dfef7245bd9785556eb5a1a6b85e2fbe08bf50dcca72c19144d951`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-equivalent-field-absolute-values-characterisation`

- Source: `items/thm-equivalent-field-absolute-values-characterisation.md`; assignment/source/snapshot SHA256s agree (`df483526c76c47c188c7a7184f6113ed2d24635768eddb381766474bfc5f323b`).
- Local HTML: `html/thm-equivalent-field-absolute-values-characterisation.html` (assignment HTML SHA256 `181b3d244181d20c11969a0e3f2f2b5171c8854868cf3a28e952a83dcde9434c`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-equivalent-field-absolute-values-characterisation--01.png` — SHA256 `7b604a968faaa6540a29cb6803cccacb00ddb768a9b9bc251f3f1b6b89dcb974`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-fermat-two-square-theorem-for-primes`

- Source: `items/thm-fermat-two-square-theorem-for-primes.md`; assignment/source/snapshot SHA256s agree (`85692c617d61ef9c1a4138f71150f15e1ab0ed0b9464685e6c5e906cfaf817a6`).
- Local HTML: `html/thm-fermat-two-square-theorem-for-primes.html` (assignment HTML SHA256 `3346b3ef2e0a6a1473c568d3d8669697de9a10b67c5df6423697b7564a3795f1`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-fermat-two-square-theorem-for-primes--01.png` — SHA256 `77afead746765a4e02731205dcc71f79a57d9795eced657bccdc9753edd6f3c1`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-fermat-two-square-theorem-for-primes--02.png` — SHA256 `6de2a9126c8dbae08fd7fa060831be91c7201bf63ba04bb47d940fa756e473fc`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-galois-action-on-primes-above-a-prime-is-transitive`

- Source: `items/thm-galois-action-on-primes-above-a-prime-is-transitive.md`; assignment/source/snapshot SHA256s agree (`9b6e7149cfe8535b5b6b1e4f5ff459f973227050d739e5ce9b62fade88c52ec1`).
- Local HTML: `html/thm-galois-action-on-primes-above-a-prime-is-transitive.html` (assignment HTML SHA256 `0c84b08a4c5f9659c6e4ef4ec26bf9a8c7720d30383635d4833289c9f589a6aa`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-galois-action-on-primes-above-a-prime-is-transitive--01.png` — SHA256 `8a969167af8727bbf5449bde02195ecf1d8fe9fdf870543cd8b1b261f05a4946`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate`

- Source: `items/thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate.md`; assignment/source/snapshot SHA256s agree (`d5a1b2291f8fb05a33fb6417125f31f50508ff7ec67d4b9609e762daf20def75`).
- Local HTML: `html/thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate.html` (assignment HTML SHA256 `d4291e2878e32baf988c9b03167ba597530251446bfcb5a8b30afcb62cabd793`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate--01.png` — SHA256 `a546d2c6de3365dc2ad60f9000dfb5acb3b7ab25d710a82da71de7ecf05aa82d`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-lagrange-four-square-theorem`

- Source: `items/thm-lagrange-four-square-theorem.md`; assignment/source/snapshot SHA256s agree (`c03e5462b2ae7035391252bce081fbbd666a9ca9b581ff95579da55b4fbe7bff`).
- Local HTML: `html/thm-lagrange-four-square-theorem.html` (assignment HTML SHA256 `cfd1a149d5a3c83c6d3323342d9ad889e7c28903356dd699ca350b42df7085b6`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-lagrange-four-square-theorem--01.png` — SHA256 `e8e65a0a6013486f35ff7d536a1a8a7912797c4fc9cffcd6ddbb03b8a7cc4340`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-lagrange-four-square-theorem--02.png` — SHA256 `eae8cb3e50bd1633211cdf99f189f5ca3fad245f54dbb6e01b1e023254d15b36`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-minkowski-convex-body-theorem`

- Source: `items/thm-minkowski-convex-body-theorem.md`; assignment/source/snapshot SHA256s agree (`b47475343492345e0d69aa961b4a7c1d4410c5d409f713bffc34f72c79d87885`).
- Local HTML: `html/thm-minkowski-convex-body-theorem.html` (assignment HTML SHA256 `d50fc5a46ded82dfb93556c35328b3ad01a2e4abedb67bb71ab7c2da1fce0971`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-minkowski-convex-body-theorem--01.png` — SHA256 `6987508db6015c7c0b6761a5a9b1b8c5b9f08434d4996eda923220b3d3517f50`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-minkowski-convex-body-theorem--02.png` — SHA256 `dd6ee222f6a777935a7689d141425115b5d6387b91888aa30118c82293239145`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-number-field-integral-ideal-factorisation-in-zf`

- Source: `items/thm-number-field-integral-ideal-factorisation-in-zf.md`; assignment/source/snapshot SHA256s agree (`626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`).
- Local HTML: `html/thm-number-field-integral-ideal-factorisation-in-zf.html` (assignment HTML SHA256 `3c83cb6d8fafb379b861788e7ae9b2b48f35bea697b5525d68ac6327853a6ab8`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-number-field-integral-ideal-factorisation-in-zf--01.png` — SHA256 `ed49cc3d1566e4822b675f88c1825a30a2c05447b52c64e3580d4197e2934d63`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-number-field-integral-ideal-factorisation-in-zf--02.png` — SHA256 `d17fcd3f877440a238dbdeeaa8f2363734f59618253188b1bbcf637aa9a7f3a0`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-number-field-integral-ideal-factorisation-in-zf--03.png` — SHA256 `2618cdd23a81b6a4ec14186692e98c791260feac3126f57e74a207f4534dcf99`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-number-field-integral-ideal-factorisation-in-zf--04.png` — SHA256 `0a7d979b3c31c4ee7214afd15a2358a6da5b69fcdbc00c48b87d0bbc20c8c221`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-p-adic-newton-criterion`

- Source: `items/thm-p-adic-newton-criterion.md`; assignment/source/snapshot SHA256s agree (`ef68def9bf390a32e7b361dec1ef8f8166687b9a71d330b83c14846c9a619832`).
- Local HTML: `html/thm-p-adic-newton-criterion.html` (assignment HTML SHA256 `b58c7d541e013871371ec76466fdd0a5a4f5b03fab10a897788731db63faf30a`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-p-adic-newton-criterion--01.png` — SHA256 `90c06a74d1227263e661b701320d363c0e5a61e218670581b618f1380cf23967`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-primitive-dirichlet-l-functional-equation`

- Source: `items/thm-primitive-dirichlet-l-functional-equation.md`; assignment/source/snapshot SHA256s agree (`4327b535cd2ffb7b116842de5a913123a8045a935fca194c7b6737ce2b2d03f9`).
- Local HTML: `html/thm-primitive-dirichlet-l-functional-equation.html` (assignment HTML SHA256 `5469b150dec2628e048f0c9c22a34d96a680b881dcbce799bf768b68ebb00206`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-primitive-dirichlet-l-functional-equation--01.png` — SHA256 `eb4522693826eda3a9b71f2c381a159cebcfb02f3357878848972f689e3f3d23`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-quadratic-gauss-sum-square`

- Source: `items/thm-quadratic-gauss-sum-square.md`; assignment/source/snapshot SHA256s agree (`3c07abb33aa886b5f7e53a2844946b7f03b50055c1c95189b0ddfe53f3ad3e5b`).
- Local HTML: `html/thm-quadratic-gauss-sum-square.html` (assignment HTML SHA256 `ff666effd7d9fbbc7872deb34066338f7ebef3cf4a37590eab66be327ac438a6`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-quadratic-gauss-sum-square--01.png` — SHA256 `e4d0bb638df5e5ce2a2ecb593173f1b4766b4219cb32989d01f855e1def9742a`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-quadratic-gauss-sum-square--02.png` — SHA256 `a14da81c18b6065b3ea628c763760037db0f84244815088e425f1338fe1ac38c`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-riemann-zeta-classical-zero-free-region`

- Source: `items/thm-riemann-zeta-classical-zero-free-region.md`; assignment/source/snapshot SHA256s agree (`c4c21f2f03d13056170d74d8af75afcc71784bcab606657746e6d7fb73df9774`).
- Local HTML: `html/thm-riemann-zeta-classical-zero-free-region.html` (assignment HTML SHA256 `ab6a4d34284a26ccdf75b6332d67eb84a0aa4e7ed05b087e698ba92d2e2f5928`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-riemann-zeta-classical-zero-free-region--01.png` — SHA256 `d19f577eb248fba43c7f82c3f4065a92be00d6a6d04f42b674a38b8bd0add8fd`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-square-root-continued-fraction-period-structure`

- Source: `items/thm-square-root-continued-fraction-period-structure.md`; assignment/source/snapshot SHA256s agree (`e04eb1925131af87565bda312ae8dc2e4f5551ff3fc7c291e4970a10aa93ee71`).
- Local HTML: `html/thm-square-root-continued-fraction-period-structure.html` (assignment HTML SHA256 `be4d8c1c54c2ed331a2a4abc557a817bef31f72750e191acd3513eee05654152`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-square-root-continued-fraction-period-structure--01.png` — SHA256 `926cf7fe3f3c7af0004824df91b29763f7d4d7fb6aaea2d6ffc85dd12ea848d1`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
- `screenshots/thm-square-root-continued-fraction-period-structure--02.png` — SHA256 `9235e0707c4036aefc2bf75aefdcaa46244bd0be1ff915e021ec80cbe7fa6deb`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-two-square-representation-count`

- Source: `items/thm-two-square-representation-count.md`; assignment/source/snapshot SHA256s agree (`987c245ac77bcacffebbb792dfd6998bfb32f874f77cd91c1cebd5299d0c14e6`).
- Local HTML: `html/thm-two-square-representation-count.html` (assignment HTML SHA256 `2993d800f9679bc6090f423695e61eabc3e0f1e77aaa2da7f9541dddfd152ddb`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-two-square-representation-count--01.png` — SHA256 `0dac672f84e1697ee08aa1a7b2d0c61df7ae2705677cbb6b0e15126f0bc48589`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-unit-square-criterion-modulo-odd-prime-powers`

- Source: `items/thm-unit-square-criterion-modulo-odd-prime-powers.md`; assignment/source/snapshot SHA256s agree (`09a7edb212a8fb639c207e8cedabed7f14344fa8e7c07499b495dd4cd665d601`).
- Local HTML: `html/thm-unit-square-criterion-modulo-odd-prime-powers.html` (assignment HTML SHA256 `d6b47c2347642e37167aba7b41a8d64cd8071f1124222bdaf238d15847176be4`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-unit-square-criterion-modulo-odd-prime-powers--01.png` — SHA256 `dbfe4030ec4361b283754f100a0d7b2b3710e2577f086632dbc9b94ed349a494`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.

### `thm-zeta-bounds-in-classical-zero-free-region`

- Source: `items/thm-zeta-bounds-in-classical-zero-free-region.md`; assignment/source/snapshot SHA256s agree (`5b763a3fe31bd0c72600c03a3341ef895b013e14b9542cdd14effa47aa7f4dbb`).
- Local HTML: `html/thm-zeta-bounds-in-classical-zero-free-region.html` (assignment HTML SHA256 `b9e936f7c38c350d81d8aea771d2a040fd35657a266d59278448d6c498d0e010`).
- Complete ItemBody reviewed: yes; receipt KaTeX errors: 0; TikZ count: 0; diagram failures: 0.
- `screenshots/thm-zeta-bounds-in-classical-zero-free-region--01.png` — SHA256 `0893d2b92a98f1d830030a50edc3c569364ad71bee4ce55009402ba8236816d3`; individually opened with `tools.view_image(detail="original")`, at original resolution, no downscale/collage.
