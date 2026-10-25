# Number Theory rendering audit — lane 02

Scope: the 76 items in `assignment-02.json`. Titles and complete ItemBodies were checked against each saved snapshot and rendered HTML. All 115 receipt-listed PNG tiles were opened individually with `tools.view_image` at original resolution; none were downscaled or combined. Assignment snapshot/source, HTML, receipt tile and PNG SHA256 values matched. No network access, production edits, tests, builds or gates were used.

Receipt totals: 0 KaTeX errors, 0 TikZ diagrams, 0 diagram failures. No raw TeX/TikZ, literal ASCII formula markup, or broken mathematical diagram was found in the assigned item renderings.

## Finding

- **cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one** — Proof/Remarks boundary, snapshot line 84. The proof ends with `∎ ## Remarks` on one source line. Since the Markdown heading marker is not at block start, the rendered tile displays literal `## Remarks` in the proof paragraph; Remarks begins in the following paragraph. Classification: formatting/render defect. Suggested repair: put `## Remarks` on its own line after a blank line following the proof paragraph. Screenshot: `screenshots/cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one--02.png` (SHA256 `a2f468783668d915f468b7eb52127fbebc6826093072b3192c6af76550250738`).

## Rejected visual observation

The initial suspicion that `def-sum-of-four-squares-representation` was clipped at the left edge is withdrawn. The coordinator rechecked the standalone tile at original resolution and confirmed the full title and opening “Let n be...” are visible from the normal x=48 margin. Tile: `screenshots/def-sum-of-four-squares-representation--01.png` (SHA256 `517af5b625afd14f4cae23b7f044e094e6c2eeb6d6a148983ab242f713f6981e`).

## Diagram review

No missing diagram candidate is warranted by the assigned source. The receipts report no existing TikZ diagrams or diagram failures. The reviewed statements and proofs use equations and prose; adding diagrams would be optional decoration rather than a rendering repair.

## Complete item and tile coverage

### `cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion`

Title: A noncoprime residue class has no Dirichlet conclusion  
Snapshot: `snapshots/cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion.md` — SHA256 `ec337333124bdfbfe7a853b701c3ae725d32e0d048887101ac4e4300ca44bdad`  
HTML: `html/cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion.html` — SHA256 `1054c6aab1d5195ae7f22f933309d6591e5c02705ad963831e78cc19608639ec`  
Receipt: `screenshots/cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion.json` — SHA256 `944cec553af2497e30cc6459e75d47015148a6dbb66c869bec6751dc0201d6ed`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion--01.png` — SHA256 `2900b334320b7887895debe6e021a71b602c3ddaa8e0ce2e9c5ac76047830b36`; individually opened at original resolution.

### `cex-dedekind-kummer-without-the-index-hypothesis`

Title: Dedekind--Kummer without the index hypothesis  
Snapshot: `snapshots/cex-dedekind-kummer-without-the-index-hypothesis.md` — SHA256 `527936145d816f3ff27a83be58e6c05e77787632a46a4fbccd0441245e365213`  
HTML: `html/cex-dedekind-kummer-without-the-index-hypothesis.html` — SHA256 `b4f2f56b79606f31fce434c52e8392178e956f2f936b682ac8605f83c1473662`  
Receipt: `screenshots/cex-dedekind-kummer-without-the-index-hypothesis.json` — SHA256 `b35910fb92895ffe48464ff9326d134a8567d560fdb66d44bfea706ccc06ebb7`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cex-dedekind-kummer-without-the-index-hypothesis--01.png` — SHA256 `5df73e2e60832ccf1451b7894e2ebe04cd6bfc52dd1ba75c5f9b9a967cb6d98d`; individually opened at original resolution.

### `cex-hilbert-monoid-factorisation-not-unique`

Title: In the multiplicative monoid $H = \{1, 4, 7, 10, \dots\}$ of positive integers one more than a multiple of $3$, the element $100$ has two genuinely different factorisations into irreducibles, $4 \cdot 25$ and $10 \cdot 10$  
Snapshot: `snapshots/cex-hilbert-monoid-factorisation-not-unique.md` — SHA256 `6b7052b525b29098ba1c170b4e0aea596dcafbed966912c797c7385ff71cfa14`  
HTML: `html/cex-hilbert-monoid-factorisation-not-unique.html` — SHA256 `8080d4e16e4813a7bb6ce3101692d72203f8a195f7a5704b4c3006ece360024f`  
Receipt: `screenshots/cex-hilbert-monoid-factorisation-not-unique.json` — SHA256 `e1a65be27217436e1b0f6f8de61fa8b5f2e1d3c6e60e99f9e104fdcad6e0f869`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cex-hilbert-monoid-factorisation-not-unique--01.png` — SHA256 `a7e3f60049854844480429ed7d7d45388cd2b11c8498fb46b1d577fedf326878`; individually opened at original resolution.
- `screenshots/cex-hilbert-monoid-factorisation-not-unique--02.png` — SHA256 `7cfeace3adddedaaa916bc403e1b4fd8cc9e0336877c80002d0850258691cb7d`; individually opened at original resolution.
- `screenshots/cex-hilbert-monoid-factorisation-not-unique--03.png` — SHA256 `6708dda1ddc429018f6e7e63f67aee5827d44b3a2402a0cc870bf827ac5288b7`; individually opened at original resolution.
- `screenshots/cex-hilbert-monoid-factorisation-not-unique--04.png` — SHA256 `64c65df485f10de0340d835a3ced53e2e86f49e612ea15d8b9877d50ca4df640`; individually opened at original resolution.

### `cex-rational-isotropy-is-not-integral-representation`

Title: Rational isotropy does not solve an integral representation problem  
Snapshot: `snapshots/cex-rational-isotropy-is-not-integral-representation.md` — SHA256 `347ae4bc8d0467337d02608f3b2d79ec5201c19399531f8ec6c9a1ee1c9e3e0c`  
HTML: `html/cex-rational-isotropy-is-not-integral-representation.html` — SHA256 `388047ec2a4dff403cf9f178033305f9c41f1496d929d71c2012111c49ad56f2`  
Receipt: `screenshots/cex-rational-isotropy-is-not-integral-representation.json` — SHA256 `ad3c297270f7b60c8f238550d03ac68e74485107ffaefb6793198db466a1b092`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cex-rational-isotropy-is-not-integral-representation--01.png` — SHA256 `eebe1f54f98b6dfdd370b2dee1a113c83992011799eddf300097bf2f38928271`; individually opened at original resolution.

### `cex-unit-group-modulo-fifteen-is-not-cyclic`

Title: $(\mathbb Z/15\mathbb Z)^\times$ has order $8$ but is not cyclic  
Snapshot: `snapshots/cex-unit-group-modulo-fifteen-is-not-cyclic.md` — SHA256 `2486df472b69a9432a6021dbef33f30a8cdd92611c877deb193bb9f95667203d`  
HTML: `html/cex-unit-group-modulo-fifteen-is-not-cyclic.html` — SHA256 `d45b0a7639de2c2cc85eb7bf461764aa126cc13e48db091605d60acf8c58a69d`  
Receipt: `screenshots/cex-unit-group-modulo-fifteen-is-not-cyclic.json` — SHA256 `9d9aa1617301a65254536634506c20f6ce42b3b35b5f9f457b6309ec49058037`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cex-unit-group-modulo-fifteen-is-not-cyclic--01.png` — SHA256 `134d9bfe323205bb3f3122c4a718b391251bd0eaaad884b719c915b01a39b82d`; individually opened at original resolution.

### `cor-average-order-of-two-square-representations`

Title: The average order of the two-square representation count is pi  
Snapshot: `snapshots/cor-average-order-of-two-square-representations.md` — SHA256 `cd1cff52a65d7b1f6a5fe1018e21eebf5cfb414dd267067ab7acfac486a1e792`  
HTML: `html/cor-average-order-of-two-square-representations.html` — SHA256 `fe0b342f135a6b785007d59be600436715764fd37996a41412b0d5341fb5deb8`  
Receipt: `screenshots/cor-average-order-of-two-square-representations.json` — SHA256 `3bea80a96f92c08bac0ef0f313ed5cdec0d968f350786f3d2dbf77498e6cb65c`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-average-order-of-two-square-representations--01.png` — SHA256 `ad78a240027eabedffa697e4a6862f899bfd59423bafadbdf2f6eaf47adca0dc`; individually opened at original resolution.

### `cor-cyclotomic-ramification-criterion`

Title: Ramification primes of a reduced cyclotomic conductor  
Snapshot: `snapshots/cor-cyclotomic-ramification-criterion.md` — SHA256 `033f3561880504baa0dcd128f726e289376cdf9ef82d367a446ae4e02ce3553b`  
HTML: `html/cor-cyclotomic-ramification-criterion.html` — SHA256 `399b7b863216ba2a0cf370c0c6dedd4433e1e9ac8d2c224dcbcfdcfb9aa849f3`  
Receipt: `screenshots/cor-cyclotomic-ramification-criterion.json` — SHA256 `a867e2d4a9a75afd5a9ea5410f9add216db1543cb2d1f2f8a585e70bf9f83ab7`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-cyclotomic-ramification-criterion--01.png` — SHA256 `77e51b50af6f67fea434c8008097be8b088482ccd240c6407a1a072b1b6d5d5c`; individually opened at original resolution.
- `screenshots/cor-cyclotomic-ramification-criterion--02.png` — SHA256 `2e0e3211c5a5fda783d5e4d8a74bb2bec75da688b2f8de7c638b1c693039aa3c`; individually opened at original resolution.

### `cor-euclids-lemma-for-finite-products`

Title: If a prime $p$ divides a finite product $\prod_{i<n} a_i$ of integers then $p \mid a_i$ for some $i < n$; at $n = 0$ the product is $1$ and the hypothesis cannot hold  
Snapshot: `snapshots/cor-euclids-lemma-for-finite-products.md` — SHA256 `d5889d570e14fcae70531873094b4c760832f3838ec560ebe16667408977574e`  
HTML: `html/cor-euclids-lemma-for-finite-products.html` — SHA256 `76f627de40f82b77e8af58e7422a3c05cd18090e1886c8f402fa67a1e777e685`  
Receipt: `screenshots/cor-euclids-lemma-for-finite-products.json` — SHA256 `c4ddbd4470b0ce321ac03af9ed197416be4772be1163a21df0aff4308aeaf3a0`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-euclids-lemma-for-finite-products--01.png` — SHA256 `ad5bc346ad6b3cb0675d12876b5fa5f3e168043e15c8fcbdf0beec3925327e45`; individually opened at original resolution.
- `screenshots/cor-euclids-lemma-for-finite-products--02.png` — SHA256 `8dcf58a45e693b56f9ca07bb1154c14bccd54d9ec9d9dc93bcef5a7f90050a83`; individually opened at original resolution.
- `screenshots/cor-euclids-lemma-for-finite-products--03.png` — SHA256 `1c6cf44d18f21685376f6aca7f5265264938ac3b354c7a878637ab3e12e442b6`; individually opened at original resolution.

### `cor-galois-prime-decomposition-efg`

Title: Galois prime decomposition efg  
Snapshot: `snapshots/cor-galois-prime-decomposition-efg.md` — SHA256 `8bd7a008b835cab1de03993dbb5ed3f891e479574c9f1bcbd05f59f1b7ebcc74`  
HTML: `html/cor-galois-prime-decomposition-efg.html` — SHA256 `e4b2ec622cc91099491e0fd0f962d119e2a40bd72b7d73ef35fca72cc8064e51`  
Receipt: `screenshots/cor-galois-prime-decomposition-efg.json` — SHA256 `e93c62f2744eb5d63c9648dc86fd8ea2aa5e78fddd047fda2164040a26c36963`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-galois-prime-decomposition-efg--01.png` — SHA256 `508bd29c44f9812ec088f6db5465dfbdc1ad357b4fe7ff25fea2e37794006a26`; individually opened at original resolution.

### `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one`

Title: Nontrivial number fields have discriminant of absolute value greater than one  
Snapshot: `snapshots/cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one.md` — SHA256 `3e4e75fd0a9c7c88f42467c028b87bd82552615821ca0b5169ec4548891063a3`  
HTML: `html/cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one.html` — SHA256 `911c6cd2ff08ef52f46340f21fb107f13fdedcd1dfa2da255931c224cfff613c`  
Receipt: `screenshots/cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one.json` — SHA256 `e710fe0f9de6157540d2c26a0752b62fdfe89199c4a95242b3420b58d9a27386`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one--01.png` — SHA256 `bdb08e0bcca1062064ffe0b6eca7df288e5fc555054e851fc06eb7194f771b7e`; individually opened at original resolution.
- `screenshots/cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one--02.png` — SHA256 `a2f468783668d915f468b7eb52127fbebc6826093072b3192c6af76550250738`; individually opened at original resolution.

### `cor-one-generalized-pell-solution-gives-infinitely-many`

Title: One generalized Pell solution generates infinitely many more  
Snapshot: `snapshots/cor-one-generalized-pell-solution-gives-infinitely-many.md` — SHA256 `9d323a7e3c01b40a29398d9a5eb44436d8591bff1b2f0a44b30534a081886b6d`  
HTML: `html/cor-one-generalized-pell-solution-gives-infinitely-many.html` — SHA256 `6f56d3713cd688c5096cd9c1ce16aa064464a550d84cb0819f98d5d3a5445779`  
Receipt: `screenshots/cor-one-generalized-pell-solution-gives-infinitely-many.json` — SHA256 `6e4a76a2b2c75a1102d6d5dc33498dfd05a5ea11daa5eefe15715d2ebbc4e57a`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-one-generalized-pell-solution-gives-infinitely-many--01.png` — SHA256 `426e2ca44fdb77cd16e6b12dff5daa7017efb8de71ab8d0642f83e80058c2b5f`; individually opened at original resolution.

### `cor-primitive-sums-of-two-squares-closed-under-products`

Title: Primitive sums of two squares are closed under products unless both factors are even  
Snapshot: `snapshots/cor-primitive-sums-of-two-squares-closed-under-products.md` — SHA256 `e35b987f4577ea47279d7e0358c276db9e05192ecf3ca7ebd980c269a8454ea1`  
HTML: `html/cor-primitive-sums-of-two-squares-closed-under-products.html` — SHA256 `96cea1a72212e05426472fe26418ccb711004c598b669d904e832d3b2d97cf18`  
Receipt: `screenshots/cor-primitive-sums-of-two-squares-closed-under-products.json` — SHA256 `fdafea25a8ab4c60b748e12b43602f3f61e5ed149cc589938cc74f7a4ecbbc94`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-primitive-sums-of-two-squares-closed-under-products--01.png` — SHA256 `8ecb4b2013663eda0619e4559b99cfae1d6cf6d8a8f2b1846a2f61c2c2fb6548`; individually opened at original resolution.

### `cor-ternary-hilbert-one-place-principle`

Title: One local place is determined by the others for ternary forms  
Snapshot: `snapshots/cor-ternary-hilbert-one-place-principle.md` — SHA256 `12e0fc5c1ec38c5a5728b53dcec2f49bf69b829803b09b73abb245aa94e2415a`  
HTML: `html/cor-ternary-hilbert-one-place-principle.html` — SHA256 `97cfcff4d39fcb437e993d81b885905d5348efa16bb22dbe8423f7035dc7060a`  
Receipt: `screenshots/cor-ternary-hilbert-one-place-principle.json` — SHA256 `0b83bed7056036f4f23f4afd640472193850bf193e2096cf6659efda49d88b1a`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-ternary-hilbert-one-place-principle--01.png` — SHA256 `15e0ec9dfa9f1c8cd34cf286ab40b9ad98f920e030c078781570bfc7c2828af9`; individually opened at original resolution.

### `cor-zeta-zero-count-near-the-one-line`

Title: Zeta zero count near the one line  
Snapshot: `snapshots/cor-zeta-zero-count-near-the-one-line.md` — SHA256 `08bb1403c9225a8789d41eff0d572414ecaeb387f6e42434039328bef4434280`  
HTML: `html/cor-zeta-zero-count-near-the-one-line.html` — SHA256 `e530c4835d2be4b04a4117c649a36f0f581a7f1970cbd64f652c6412c57d42c2`  
Receipt: `screenshots/cor-zeta-zero-count-near-the-one-line.json` — SHA256 `e2d4ac8ab3ab85375f0b371041447145c28bf73228b97196cc20d2be86f55dcc`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/cor-zeta-zero-count-near-the-one-line--01.png` — SHA256 `4fff4dd58601394d8980c8fafacb8cb5e2ae788ad53b8c3e0459e7c3f1a2d2f9`; individually opened at original resolution.

### `def-binary-quadratic-form-class-number`

Title: The class number of primitive positive-definite binary quadratic forms of discriminant $\Delta$  
Snapshot: `snapshots/def-binary-quadratic-form-class-number.md` — SHA256 `a45bd2b860fed691668547de6d28b70d389ef6370b3a83b8918c551c8baf8e9f`  
HTML: `html/def-binary-quadratic-form-class-number.html` — SHA256 `d20d3901a1e1c007bd44b941e7684381e23f4200e5548380f0326f4874636eb1`  
Receipt: `screenshots/def-binary-quadratic-form-class-number.json` — SHA256 `ddb61234599529fb49758ebdf39062ed20f74991f4c3f8d52c278c2045ff539a`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-binary-quadratic-form-class-number--01.png` — SHA256 `550b8b90af85426f13075cffc41d2e835fc694f98de477d5b61eb03a19f9573a`; individually opened at original resolution.

### `def-congruence-modulo-an-integer`

Title: Congruence modulo an integer: $a\equiv b\pmod n$ when $n\mid(a-b)$, including the moduli $0$ and $1$  
Snapshot: `snapshots/def-congruence-modulo-an-integer.md` — SHA256 `0b1d7fd2e7273abde5f4dcc6828ef368eac01710c9f05c943e40bcc26ecc957d`  
HTML: `html/def-congruence-modulo-an-integer.html` — SHA256 `69d0dd7e68094937f2e6e300e67c0469dcf4e4e8e7f6500c9deb1d7816a77888`  
Receipt: `screenshots/def-congruence-modulo-an-integer.json` — SHA256 `bcda8a40742f42475ef940fbb92c4089d94c91f842b95f507b281c9866a54ff4`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-congruence-modulo-an-integer--01.png` — SHA256 `a1927f7a5dc3d741f48ee63524b2c3ffa1e53a627449dca9554bf215534828a2`; individually opened at original resolution.

### `def-dirichlet-series`

Title: Dirichlet series  
Snapshot: `snapshots/def-dirichlet-series.md` — SHA256 `7b172094b705265f65feb046c705f9fabfd76de1e9486e86ab773a5ddb959f11`  
HTML: `html/def-dirichlet-series.html` — SHA256 `d9f24c6c06cdef513eae41765cf2a5d3437e51b68ca72de98f9b3e0f488b66d3`  
Receipt: `screenshots/def-dirichlet-series.json` — SHA256 `5d6a81b3e9eb1ca50005a4e6878a4d5f43dd3c117e2e170200cb2c341efb57a0`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-dirichlet-series--01.png` — SHA256 `7b3b7570de29db7479a00265a993043dc7e4e952ea87136e473a8a20bd10b17b`; individually opened at original resolution.

### `def-full-euclidean-lattice-and-covolume`

Title: Full Euclidean lattice and covolume  
Snapshot: `snapshots/def-full-euclidean-lattice-and-covolume.md` — SHA256 `b78588f508827cb9ae67090baf039f7a31919d9f4a2fb2bda341c56697b830bf`  
HTML: `html/def-full-euclidean-lattice-and-covolume.html` — SHA256 `9283caf377fb80d1405f0db928611d4f123dbf4b08f80e56f759292fb38212c6`  
Receipt: `screenshots/def-full-euclidean-lattice-and-covolume.json` — SHA256 `910afc5d180a7a8de80b7c147e3b7e771924b20b13435413117ed73f54a10705`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-full-euclidean-lattice-and-covolume--01.png` — SHA256 `4f22e05f01759169c697b040b7cc03dd143873aa5bd4b702fb0757b1ba6fc7d2`; individually opened at original resolution.

### `def-int-abs`

Title: The absolute value $|a|$ of an integer  
Snapshot: `snapshots/def-int-abs.md` — SHA256 `93a551f1bcedefb1e172395735419696eca10617cd4e308f9cfb2a0b3803fba8`  
HTML: `html/def-int-abs.html` — SHA256 `4b81af29e3a21236f208fcf85f4b5c081b86fecdebc111cff4baf811b987eaa1`  
Receipt: `screenshots/def-int-abs.json` — SHA256 `030ae62f75eda4754713b6745be01301a1c951d63a89df0fc3cc159c544bcd65`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-int-abs--01.png` — SHA256 `19e14147c222c3adf69fd0cea05f2b8b2ec5815a81679c8f45988351c2f0cc89`; individually opened at original resolution.
- `screenshots/def-int-abs--02.png` — SHA256 `075eaec3fffb87e66ebe9389acdc71b62c77a79387e674d6f34a6b09c7de597b`; individually opened at original resolution.

### `def-meissel-mertens-constant`

Title: The Meissel-Mertens constant  
Snapshot: `snapshots/def-meissel-mertens-constant.md` — SHA256 `c68429ae6affd7a2b839c649aa8ccf15d4f87627c4b7b42e2b41ff68c7493c3f`  
HTML: `html/def-meissel-mertens-constant.html` — SHA256 `e0df2f083ec0c4ea33cdaf0ff52f14a49817f3011233599e04caade0c0fa594b`  
Receipt: `screenshots/def-meissel-mertens-constant.json` — SHA256 `83633395ec3efb137129767f89b007c5ed25b4d2cd37298a9cbf4674e02f93f5`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-meissel-mertens-constant--01.png` — SHA256 `2ac6be96cdad5bfd2c9f2073d43fbc61a1ae71777423e5be03ad4ec4cd526374`; individually opened at original resolution.

### `def-order-in-a-number-field`

Title: Order in a number field  
Snapshot: `snapshots/def-order-in-a-number-field.md` — SHA256 `f1bb34e9ce7334621686bdf2f0d5e85b4aaf185e9b8892739f0c51e7dacda529`  
HTML: `html/def-order-in-a-number-field.html` — SHA256 `ca1f12018bd03c8f25da33ad7f5d28ac9b1aaccb0bd783e002d44020a19d51fb`  
Receipt: `screenshots/def-order-in-a-number-field.json` — SHA256 `502338326ff9a14cedb447c3f60b86de63739c89d1a3752e1097708cd19621ee`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-order-in-a-number-field--01.png` — SHA256 `9befe4da3377da0a7a35e57883327aab2fa3e58c8f94d7b8161fc792b9b4401d`; individually opened at original resolution.

### `def-prime-counting-function`

Title: The prime-counting function  
Snapshot: `snapshots/def-prime-counting-function.md` — SHA256 `6af864f3d29719981ec42584d3b48420bf99d81cb55119de78819a0b56fc40e5`  
HTML: `html/def-prime-counting-function.html` — SHA256 `2ae982acd6ede8c61bb555952b9fda013e55966d279e805c220a4d1b87868e96`  
Receipt: `screenshots/def-prime-counting-function.json` — SHA256 `94545925549fdae80c0eec2b5b8a4c716e0e72238d24f728283cc3679b3e47e1`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-prime-counting-function--01.png` — SHA256 `1af27c66602f90740a4c2aeec3c26b38ef0b6033c08fc96e207f9dbba6180783`; individually opened at original resolution.

### `def-ramification-index`

Title: Ramification index  
Snapshot: `snapshots/def-ramification-index.md` — SHA256 `7ed9b8725252f2f1ed794c06b8833323d4450b31637d2000441a9e666de0aeb9`  
HTML: `html/def-ramification-index.html` — SHA256 `23c7d209cd00380056a294591dc2afd43c5d867de39ad9a54f8287a2f0df34f1`  
Receipt: `screenshots/def-ramification-index.json` — SHA256 `f10f37966deb7eeada9d399cbaedbf367e38b9e01d650a1cb8f2364643c79443`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-ramification-index--01.png` — SHA256 `0407aadcd3c5b361ada56a89309d0b9f8a6e11efd46bbee80d56b4e2ddd6fc1b`; individually opened at original resolution.

### `def-sum-of-four-squares-representation`

Title: Representations as sums of four squares  
Snapshot: `snapshots/def-sum-of-four-squares-representation.md` — SHA256 `be280a544259ed7e8d38b457ab44fb17480235ef49142c18b08a1c2242091531`  
HTML: `html/def-sum-of-four-squares-representation.html` — SHA256 `474b870360af1552b3bfc4ac0c8f43cf3d78b7ac73025666e21241c5a5c68afa`  
Receipt: `screenshots/def-sum-of-four-squares-representation.json` — SHA256 `59acfd3b3aab4273631cdf33381dc818c781fbc0fc2719586ced2be36b6200da`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/def-sum-of-four-squares-representation--01.png` — SHA256 `517af5b625afd14f4cae23b7f044e094e6c2eeb6d6a148983ab242f713f6981e`; individually opened at original resolution.

### `ex-arbitrarily-long-runs-of-composites`

Title: For every $n \in \mathbb{N}$ there are $n$ consecutive composite integers: with $N := \prod_{j<n}(j+2)$, each of $N+2, \dots, N+n+1$ is composite  
Snapshot: `snapshots/ex-arbitrarily-long-runs-of-composites.md` — SHA256 `2eb34e12a64573256d536fbdaade6f1e67ac559ea7fe2efc11333ebb36a22317`  
HTML: `html/ex-arbitrarily-long-runs-of-composites.html` — SHA256 `3a874b5d29bb31d32a5e9f3d7ad2a08f847676a84ecb97eca2e235ee77fb6b78`  
Receipt: `screenshots/ex-arbitrarily-long-runs-of-composites.json` — SHA256 `6d628b788aee91b357a2e950e92d5b23caae353dc4f31e3a6bf64162b062f9fc`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-arbitrarily-long-runs-of-composites--01.png` — SHA256 `b40e3c259700070059c844c5992d0f6ae8be5b0b7101c6cc9a312893752c5751`; individually opened at original resolution.
- `screenshots/ex-arbitrarily-long-runs-of-composites--02.png` — SHA256 `5c0847a9602f1024f2ab08d5d3a250e25d6a8d85c9698be81aeaba86f192e825`; individually opened at original resolution.
- `screenshots/ex-arbitrarily-long-runs-of-composites--03.png` — SHA256 `1f0f04dd1ca99d84ac8138e46654e711d2fb3bffb4a33d99b6171a5bf76f950f`; individually opened at original resolution.

### `ex-chinese-remainder-system-worked`

Title: The system $x\equiv2\pmod3$, $x\equiv3\pmod5$, $x\equiv2\pmod7$ has the unique solution $x\equiv23\pmod{105}$  
Snapshot: `snapshots/ex-chinese-remainder-system-worked.md` — SHA256 `7b49a1e2b0a3446566c0fd13331f244a804eca29f70dd2bd9a226e110b4bc81b`  
HTML: `html/ex-chinese-remainder-system-worked.html` — SHA256 `4d73ff78352d960d1506daa11d7caac6ddbf0c185f36e206fe63f668a1f84bad`  
Receipt: `screenshots/ex-chinese-remainder-system-worked.json` — SHA256 `bf0b12b41dcd912a61cd08900e6155ef7ea591b2bc224131818aa375d89baa88`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-chinese-remainder-system-worked--01.png` — SHA256 `9d308449a36f2c2bc65436057a14f4116f3104ce1f2ca19e858a5c652fd62a10`; individually opened at original resolution.

### `ex-decomposition-inertia-in-a-quadratic-field`

Title: Decomposition inertia in a quadratic field  
Snapshot: `snapshots/ex-decomposition-inertia-in-a-quadratic-field.md` — SHA256 `582ee2d5466393dc167758b1137291ec9877350deb7b9b0143a5d14cfb86d844`  
HTML: `html/ex-decomposition-inertia-in-a-quadratic-field.html` — SHA256 `1fb95ca3a72546937a36693ea4d683c6ff7f56ca993a3a008023055a1ceadc24`  
Receipt: `screenshots/ex-decomposition-inertia-in-a-quadratic-field.json` — SHA256 `d633f67df785c22508ffe5a418b6addb088c1fbfeb7a8b24a12a4988b09af5e6`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-decomposition-inertia-in-a-quadratic-field--01.png` — SHA256 `511fa5d31f089fd2ca0eaa9f376161f073b9019c0c34f282daa94c25b6bee449`; individually opened at original resolution.

### `ex-discriminant-lower-bound`

Title: Signature constant rules out discriminant ±1  
Snapshot: `snapshots/ex-discriminant-lower-bound.md` — SHA256 `824adf72605122b3efd0763fc213dff83a517462f5f6c4ac247a7876278598c5`  
HTML: `html/ex-discriminant-lower-bound.html` — SHA256 `635cd39f6c60920d7b1398e5e7eaf1c68edabcd37839e0acb6667341e5b288fa`  
Receipt: `screenshots/ex-discriminant-lower-bound.json` — SHA256 `84123c0ea361abae9bb8e52c4e8433d559356fe177e1d90fbed7af15333c2bc7`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-discriminant-lower-bound--01.png` — SHA256 `41de5dced526d73c890410691c092360bdfeda670db28d09b259ff625bcfd0b0`; individually opened at original resolution.
- `screenshots/ex-discriminant-lower-bound--02.png` — SHA256 `df08decd145bd853256e367be1b2e2246e72622b0d319e80f93002e33d873f4c`; individually opened at original resolution.

### `ex-euler-totient-product-formula-worked`

Title: $\varphi(360)=96$ by both inclusion-exclusion and the prime-power product formula  
Snapshot: `snapshots/ex-euler-totient-product-formula-worked.md` — SHA256 `90b9f585f91733cfad7254c6746edf45bc3ed9eb73673bf80b5886f749f26d8d`  
HTML: `html/ex-euler-totient-product-formula-worked.html` — SHA256 `bfcbef30cab3a52fcd35dd079b0548ea9e068f0e9d7e8f245a6a13f7b286a772`  
Receipt: `screenshots/ex-euler-totient-product-formula-worked.json` — SHA256 `68c1d9f7935cb223b52f92420e3d9f28ecd93d039c93dad3ceb9508f169c9267`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-euler-totient-product-formula-worked--01.png` — SHA256 `a9cbb20993d8191612ff54a36a791194cce13b1c84c49f942e39af5cbfafa892`; individually opened at original resolution.

### `ex-four-square-roots-modulo-a-power-of-two`

Title: The four square roots of $9$ modulo $128$  
Snapshot: `snapshots/ex-four-square-roots-modulo-a-power-of-two.md` — SHA256 `e5312427c817a58d011c78355c6105b802246b7ba1719c3b409fa719c234dfb4`  
HTML: `html/ex-four-square-roots-modulo-a-power-of-two.html` — SHA256 `5a0972a03f139b3df39638a1fcbd8e9a9f2a549168ff3f7016cc9d26a4a34317`  
Receipt: `screenshots/ex-four-square-roots-modulo-a-power-of-two.json` — SHA256 `718e67da34182d986d10e517fbc6839eddf0dd4a17a09f82502e16c66293b4a1`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-four-square-roots-modulo-a-power-of-two--01.png` — SHA256 `8e3410038429cc3a67d3c7d15c757f274d7fbe1ce60a9ace7c0d3afe9281deec`; individually opened at original resolution.

### `ex-generalized-pell-bounded-representatives`

Title: Bounded representatives for $x^2 - 7y^2 = 57$  
Snapshot: `snapshots/ex-generalized-pell-bounded-representatives.md` — SHA256 `04267426525ddf0c872530eb3df736b212b47005df4ecd18893a3bc16f4d309b`  
HTML: `html/ex-generalized-pell-bounded-representatives.html` — SHA256 `8287570687ac62b5e98d1120c59233f96fb66b410bfafd4bdd2a9ca9a0ad37c4`  
Receipt: `screenshots/ex-generalized-pell-bounded-representatives.json` — SHA256 `7ab51be737828d7b4ace2471370809f3930267f1d0a01a8f47128b8ffdd83d55`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-generalized-pell-bounded-representatives--01.png` — SHA256 `2c3dd0f48d298b6b01ee6b59d1db4c2cf785df9bb958465656f2d29574e1740c`; individually opened at original resolution.

### `ex-large-fundamental-pell-solution-for-sixty-one`

Title: The large fundamental solution for $D=61$  
Snapshot: `snapshots/ex-large-fundamental-pell-solution-for-sixty-one.md` — SHA256 `1db6768c5a1da0b79d315dda5d415f0b8a8c5469d762362381ad711d98bf63a8`  
HTML: `html/ex-large-fundamental-pell-solution-for-sixty-one.html` — SHA256 `8e520a24a80e0db760c6daa5ec02b613289d5cd0f05e33fef734b766481dccbe`  
Receipt: `screenshots/ex-large-fundamental-pell-solution-for-sixty-one.json` — SHA256 `4bb71e7e9adf8db0aa1e6f6d8541e5f3ae24fd44265e2993bfe7bf56dcc24a1b`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-large-fundamental-pell-solution-for-sixty-one--01.png` — SHA256 `5ce2cc8a7b179c1ae949efdac523ec3ccbfd9caf4ca96b9b9dc391056fca9c8e`; individually opened at original resolution.

### `ex-moduli-below-twenty-with-primitive-roots`

Title: The positive moduli below $20$ admitting primitive roots are $1,2,3,4,5,6,7,9,10,11,13,14,17,18,19$  
Snapshot: `snapshots/ex-moduli-below-twenty-with-primitive-roots.md` — SHA256 `670dc727885d9bff037c52b022fb7093bd2faf1647d67f8047358bf5fa3fc586`  
HTML: `html/ex-moduli-below-twenty-with-primitive-roots.html` — SHA256 `c167eaa3929007103516abe83fab8748a9d4aa7dc49ef5815687385ff2fad416`  
Receipt: `screenshots/ex-moduli-below-twenty-with-primitive-roots.json` — SHA256 `8fcc754a3534c209174897255b2eed84dd53b16a281347e29b017febc0ee686e`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-moduli-below-twenty-with-primitive-roots--01.png` — SHA256 `09e5ed378bd8888d629ac013b513f73637af2009e7e347904ea80e87531c3ec1`; individually opened at original resolution.

### `ex-p-adic-geometric-series`

Title: A geometric series that is p-adically convergent and really divergent  
Snapshot: `snapshots/ex-p-adic-geometric-series.md` — SHA256 `68dd6340056527882ce6ccf996e2f7ecdbbd2ed3cfa31ddf500d6dde7a2daa2a`  
HTML: `html/ex-p-adic-geometric-series.html` — SHA256 `616c2b80ad6118ab32966c99dc92e46e552907af06a81f82539f4483d5d6d609`  
Receipt: `screenshots/ex-p-adic-geometric-series.json` — SHA256 `0797b18971583bbfb085fecf5f99fe9bdda50ca635bc1765ba13b1a062f26a92`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-p-adic-geometric-series--01.png` — SHA256 `ee517871cfc94b8d9206783e39067aaa899e74b70afe6e28efce49a44912c5a9`; individually opened at original resolution.

### `ex-prime-decomposition-in-q-zeta-twelve`

Title: Prime decomposition in Q(zeta_12)  
Snapshot: `snapshots/ex-prime-decomposition-in-q-zeta-twelve.md` — SHA256 `1feae3953165ac2dcfe0bda5173c631ff0d2ca3afbdb17d3dc6e7f611c337c13`  
HTML: `html/ex-prime-decomposition-in-q-zeta-twelve.html` — SHA256 `a5613bf5f7fa5d5a991bbb6e7d0f030efe0a0f5fb60ca124487650b10018fbc6`  
Receipt: `screenshots/ex-prime-decomposition-in-q-zeta-twelve.json` — SHA256 `90250426f62c472a2c72ea36cfde3f0dad4b7f5903ababb674d9fc52eeaf44b1`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-prime-decomposition-in-q-zeta-twelve--01.png` — SHA256 `2e7a64f76eb6a679f73a1d78c6b926b7bcf32d006d26f39bf0903a06054a2b37`; individually opened at original resolution.
- `screenshots/ex-prime-decomposition-in-q-zeta-twelve--02.png` — SHA256 `7bdd28efc448799525a79e7ed9c985cb3b425a43ade48ef7f5ac15ddadb72196`; individually opened at original resolution.

### `ex-principal-dirichlet-l-missing-euler-factors`

Title: Missing Euler factors for a principal Dirichlet L-function  
Snapshot: `snapshots/ex-principal-dirichlet-l-missing-euler-factors.md` — SHA256 `7b7827bd32c09818fefabb15f9b46da483ac624e53f776ab1d19fc726d6303d5`  
HTML: `html/ex-principal-dirichlet-l-missing-euler-factors.html` — SHA256 `d34cc926f2d81343a5e288a2ee993606a3d6bf56fc76adb0673f17a3daf09a92`  
Receipt: `screenshots/ex-principal-dirichlet-l-missing-euler-factors.json` — SHA256 `8ba3530b6a82f154dc06e0f1a27f1575af082b7aa2da56afc454886c4cfd401d`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-principal-dirichlet-l-missing-euler-factors--01.png` — SHA256 `1c1ad7a786684fd07f9fa8fe47af9ec0cbe1b407fedae2a221967dd20381eede`; individually opened at original resolution.

### `ex-reduced-conductor-of-q-zeta-six`

Title: The reduced conductor of Q(zeta_6)  
Snapshot: `snapshots/ex-reduced-conductor-of-q-zeta-six.md` — SHA256 `f45cb667fe95add0393e7be18d0b58814167f3ad498c553b340babe74c0e09c8`  
HTML: `html/ex-reduced-conductor-of-q-zeta-six.html` — SHA256 `de1e196d2f7f219ec2fffd08a03cffb84d957fe70e606214f362692ba7a8221b`  
Receipt: `screenshots/ex-reduced-conductor-of-q-zeta-six.json` — SHA256 `cd837f7d61baf78c672ed236e4088f058e27bfdd12cbc52370c49c4aa9ef601d`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-reduced-conductor-of-q-zeta-six--01.png` — SHA256 `f25dcb17a953a2166b25a5e6f843dd0ba6c7c2afcc4c4ef1b939efbb235823ed`; individually opened at original resolution.

### `ex-second-supplement-from-q-zeta-eight`

Title: Second supplement in four residue classes modulo eight  
Snapshot: `snapshots/ex-second-supplement-from-q-zeta-eight.md` — SHA256 `40a89a3b0f48c2d7332a75bf8d6bb2db0bb0fed862f5821de233fc7ea3e9c925`  
HTML: `html/ex-second-supplement-from-q-zeta-eight.html` — SHA256 `357b485e076078e7e69340cd23319c9f108cf51d907f10eccd079239e38cf9fb`  
Receipt: `screenshots/ex-second-supplement-from-q-zeta-eight.json` — SHA256 `71d44414409653900ae8fbfaefdf221e68fc41634502c69e83b9069c050bb52c`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-second-supplement-from-q-zeta-eight--01.png` — SHA256 `4ae02abb5b342a84fd94a3a1d3fcee787c070e86b0111eeed8012b48aded85b8`; individually opened at original resolution.

### `ex-the-same-sequence-in-real-and-p-adic-metrics`

Title: The same sequence behaves oppositely in the real and p-adic metrics  
Snapshot: `snapshots/ex-the-same-sequence-in-real-and-p-adic-metrics.md` — SHA256 `6e451a190d40af55691a4811c9f0038d804d24eb3c4bf72084335b14b38a9cea`  
HTML: `html/ex-the-same-sequence-in-real-and-p-adic-metrics.html` — SHA256 `b1ca08b71c11e1b7c2df835a5f462015847b3a9edde24bd0e8247c97309d8da0`  
Receipt: `screenshots/ex-the-same-sequence-in-real-and-p-adic-metrics.json` — SHA256 `c9350862827b38dbce137eedb2744bd38288018db19b6868e2ad7ff2ed96d4ca`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-the-same-sequence-in-real-and-p-adic-metrics--01.png` — SHA256 `d66cb2bae0473b6bd62733afe2b088dece82f0858c7e08f1bf160a50b10b8dc3`; individually opened at original resolution.

### `ex-two-square-representation-of-seventy-three-by-extended-euclid`

Title: Extended Euclid gives $73=3^2+8^2$ from the root $27$ of $-1$  
Snapshot: `snapshots/ex-two-square-representation-of-seventy-three-by-extended-euclid.md` — SHA256 `83a3c15c4cdc80e61615e514949450ece096c5d92ab4bdab3e9848dd50518f58`  
HTML: `html/ex-two-square-representation-of-seventy-three-by-extended-euclid.html` — SHA256 `357d1c59dc96e6bbf0e3236979400a1cc020f4ea47d53b4ddc78594122afc2a4`  
Receipt: `screenshots/ex-two-square-representation-of-seventy-three-by-extended-euclid.json` — SHA256 `e31def22993d61fa5b0c2c5e843ecea8adee9a6fd008295910cbaa44e55fd17d`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-two-square-representation-of-seventy-three-by-extended-euclid--01.png` — SHA256 `b8f3ec366780d5257ed9cd38f8e53f307303ea691b8d55c4ae0fd646a0a3c9b3`; individually opened at original resolution.

### `ex-wild-different-exponent`

Title: A wild different exponent  
Snapshot: `snapshots/ex-wild-different-exponent.md` — SHA256 `499965904881c9ed5ab7f1cab6a023df62b37b4fcccdac9dbc7c242304597fc6`  
HTML: `html/ex-wild-different-exponent.html` — SHA256 `7a0d06b003b93c0b8cf18a4bf036fc4bff5b2d7d0b27a7fab6ca9203f22dbcfe`  
Receipt: `screenshots/ex-wild-different-exponent.json` — SHA256 `10bb04e698d854156d7af6e2c6eefa2c6e55493c809af187363b386816aae863`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/ex-wild-different-exponent--01.png` — SHA256 `68b6da91e7a63782b0019247fcca4cdb6815487363499cbd88da1d6897b82306`; individually opened at original resolution.

### `lem-archimedean-norm-bound`

Title: Archimedean product region, volume and norm bound  
Snapshot: `snapshots/lem-archimedean-norm-bound.md` — SHA256 `bf82afc4f00a6f7ab95b53ccbe2d162d0c8d61021477bc52c34c9e5c175590af`  
HTML: `html/lem-archimedean-norm-bound.html` — SHA256 `92299e3a6e556b9ce9933196f718d806c0d7fd56c2e40b57f27ce2d119b0fdd8`  
Receipt: `screenshots/lem-archimedean-norm-bound.json` — SHA256 `4c79e5cf3c81649a8fd682263d461e4b7fb21e48377b79e12ed16ac2ee9cd8df`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-archimedean-norm-bound--01.png` — SHA256 `acd35f983aa90d5ae69b5be7f839c527a01cdcaa041f9ea8c313a2d8e1a3f0b1`; individually opened at original resolution.
- `screenshots/lem-archimedean-norm-bound--02.png` — SHA256 `077c4b217f0d54da518787494096859c5dea74aee2c264b0bfe8ede3623d839e`; individually opened at original resolution.
- `screenshots/lem-archimedean-norm-bound--03.png` — SHA256 `55a597c5b74111144d02891382589ab5b81896411198b7cdf86db2a136b7e8cd`; individually opened at original resolution.

### `lem-chebyshev-functions-prime-power-comparison`

Title: Psi and theta differ by at most a square-root term  
Snapshot: `snapshots/lem-chebyshev-functions-prime-power-comparison.md` — SHA256 `92953975ae1bc16f8e070b8e15e162d7a5d0894e7a0ffb0a895c98f1e357abd0`  
HTML: `html/lem-chebyshev-functions-prime-power-comparison.html` — SHA256 `fd7e57c8c3de3e2d52b9c420382ac733a71d3285e7f3527604a346ff2407e667`  
Receipt: `screenshots/lem-chebyshev-functions-prime-power-comparison.json` — SHA256 `918cf98f4e5275c26ede1b2e578f6781609867f9b3d4bcc74e225742928ac04f`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-chebyshev-functions-prime-power-comparison--01.png` — SHA256 `992636161116a57465889006365855edbec4cefe9c5a91f22befb0b764cc3a29`; individually opened at original resolution.

### `lem-coprime-criterion`

Title: $a$ and $b$ are coprime if and only if $ax + by = 1$ for some integers $x, y$; and in that case the only common divisors of $a$ and $b$ are $1$ and $-1$  
Snapshot: `snapshots/lem-coprime-criterion.md` — SHA256 `2764159745beaaf9cdbf4e7969b39d2d42432c55424219f85bcd3444ed2a57ac`  
HTML: `html/lem-coprime-criterion.html` — SHA256 `4537ecd912d2beae46fa6f6858a310f4528daeff6e80c847669ca885f98dd979`  
Receipt: `screenshots/lem-coprime-criterion.json` — SHA256 `24cb698f0f04781cfc72d2e6478084fc7cade73698e3a59dad55d2205004421e`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-coprime-criterion--01.png` — SHA256 `51f0f9c548a1b3ae692586a1ab2bf40b7bc2ebe09c4f17f1e4bb8674142e417a`; individually opened at original resolution.
- `screenshots/lem-coprime-criterion--02.png` — SHA256 `f6490496c59c71a1c9c7fed1fbf385b3936895e23a08b4aed7b34c1458359df0`; individually opened at original resolution.

### `lem-discrete-subgroups-of-real-vector-spaces-are-lattices`

Title: Discrete subgroups of a real vector space are lattices  
Snapshot: `snapshots/lem-discrete-subgroups-of-real-vector-spaces-are-lattices.md` — SHA256 `374c3594382bb6549640fc9f97c369fdc02a056478312766472f9b38d6d2fc4f`  
HTML: `html/lem-discrete-subgroups-of-real-vector-spaces-are-lattices.html` — SHA256 `998b23159353b21dd7796a70ec360cec8efd37ee1325940c5e98a0cd62aba22f`  
Receipt: `screenshots/lem-discrete-subgroups-of-real-vector-spaces-are-lattices.json` — SHA256 `715daf2c4e15aaa7afed5aad9695fdc5912c2cf03c23527beb8afd3cc53e161f`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-discrete-subgroups-of-real-vector-spaces-are-lattices--01.png` — SHA256 `a2108ce18037b015d6aadd5f6b78c729612bb02d2148336f2022898f599817d7`; individually opened at original resolution.
- `screenshots/lem-discrete-subgroups-of-real-vector-spaces-are-lattices--02.png` — SHA256 `f041862907db50b697d7558bbb35f0d3e6dd52f0bf7df1d412b9a634e9968e4f`; individually opened at original resolution.
- `screenshots/lem-discrete-subgroups-of-real-vector-spaces-are-lattices--03.png` — SHA256 `7ecacfd93d6f2934b272349ee414fb99c1470cea7c754a135f6c8ebcc174e782`; individually opened at original resolution.

### `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates`

Title: If $4$ divides $x^2+y^2+z^2$ then $x$, $y$ and $z$ are all even  
Snapshot: `snapshots/lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates.md` — SHA256 `905750f26b98b71eb7f4d01ab9bd53f3e108c951c8ad3d43a81f9ff249422329`  
HTML: `html/lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates.html` — SHA256 `ed0244cef8ac6f3523a48dce6559d9f151d5f1ba0c883179eea1aadf3fe01231`  
Receipt: `screenshots/lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates.json` — SHA256 `ef963737a4110523bca8df20aba9dc7ddad207eb53114d23b56e69f3941913d3`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates--01.png` — SHA256 `1c7e8a99cdba9a2eb01d08caf9794690b544a10f9c8ca20f27bcacdb8a1e0d87`; individually opened at original resolution.
- `screenshots/lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates--02.png` — SHA256 `9c0d9f72daabaaff055405d776b9b74cde3487e6cb17be3336eab242afb3012a`; individually opened at original resolution.

### `lem-gcd-euclidean-step`

Title: If $a = qb + r$ then $a, b$ and $b, r$ have exactly the same common divisors, so $\gcd(a,b) = \gcd(b,r)$  
Snapshot: `snapshots/lem-gcd-euclidean-step.md` — SHA256 `13402173921a0e2f99c66b234d9e038d829dac938f6dd9f2536499db39f2cd91`  
HTML: `html/lem-gcd-euclidean-step.html` — SHA256 `28e902a7472d57f3354cc2ea05004c4113018a9359829b7741f22e7573f0d90c`  
Receipt: `screenshots/lem-gcd-euclidean-step.json` — SHA256 `8f33d99981dd982c4a035cd4c21a04b5e1c1ec9fdb81d295e7dd3593754b6877`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-gcd-euclidean-step--01.png` — SHA256 `e9c0a5455e4f192f52ccf8d06ae33b6eb3ae474cab2f0cd7a731e64027c14b5a`; individually opened at original resolution.
- `screenshots/lem-gcd-euclidean-step--02.png` — SHA256 `1fd1b7f5110b97785e2439a33366d2410dec7d5c0afe6124657aa8f86fba37b4`; individually opened at original resolution.

### `lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring`

Title: Irreducible polynomial coefficients in a complete valuation ring  
Snapshot: `snapshots/lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring.md` — SHA256 `0e471e8878f7961108f2f8ddcabc50a3efaf555474389a5ca2fc1bb5e0dd9398`  
HTML: `html/lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring.html` — SHA256 `45a0f8f7b1349c472220c40527f1e62e00b6028075489611b0d288cc64ceb76c`  
Receipt: `screenshots/lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring.json` — SHA256 `7ef2f0d2044bedd4d3da69c66981a3033440f9d4ad433f6bfdcf9d41a5205662`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring--01.png` — SHA256 `492236e40059c72f4069f4c3206bffebeadbb14a08843dd357e61336228d7f32`; individually opened at original resolution.

### `lem-logarithmic-integral-asymptotic-expansion`

Title: Logarithmic integral asymptotic expansion  
Snapshot: `snapshots/lem-logarithmic-integral-asymptotic-expansion.md` — SHA256 `1d22420dfbf5604fea6b265967ff5df6096c4773acf55deaec43546e51893600`  
HTML: `html/lem-logarithmic-integral-asymptotic-expansion.html` — SHA256 `c61a7a859d6bda352973f5e9e666fbf5e6ff3883eda59dbcb03fadb2971dcf8a`  
Receipt: `screenshots/lem-logarithmic-integral-asymptotic-expansion.json` — SHA256 `0b85de3f5a144c92cde5b1f01e4618a4ac8cbcbb91b2d493fbc818c194b437f6`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-logarithmic-integral-asymptotic-expansion--01.png` — SHA256 `5c2955b9e9b6fe4f0d7f0e0d1dd200143e88114b39cbe82a7c98e8adb3e20e56`; individually opened at original resolution.

### `lem-nonreal-dirichlet-l-nonzero-at-one`

Title: A nonreal Dirichlet L-function is nonzero at one  
Snapshot: `snapshots/lem-nonreal-dirichlet-l-nonzero-at-one.md` — SHA256 `465d1620d3511ad4d0893f0b0f6ccacdaf4abaf6f1f99494aefd1a3756aeacc8`  
HTML: `html/lem-nonreal-dirichlet-l-nonzero-at-one.html` — SHA256 `d1a9f395df7724f5dbeaf501961167b356ca96e5a711d0fc183c51f8080ece79`  
Receipt: `screenshots/lem-nonreal-dirichlet-l-nonzero-at-one.json` — SHA256 `448123dcc842287d97eff95381766079a865695ff10cc93af26a616a8882bddb`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-nonreal-dirichlet-l-nonzero-at-one--01.png` — SHA256 `12943150e79156c2d905b3aa3feb9f961486f7313159b30804955f064fed8f60`; individually opened at original resolution.

### `lem-p-adic-valuation-basic`

Title: For a prime $p$ and a nonzero integer $a$: $p^{v_p(a)} \mid a$ and $p^{v_p(a)+1} \nmid a$; $p^{k} \mid a$ holds exactly for $k \le v_p(a)$; $v_p(a) \ge 1$ exactly when $p \mid a$; $v_p(1) = v_p(-1) = 0$; and $v_p(p) = 1$  
Snapshot: `snapshots/lem-p-adic-valuation-basic.md` — SHA256 `9cccaccea42ffae890774225c6900787b342ed96594c7a69187180f579ad7d68`  
HTML: `html/lem-p-adic-valuation-basic.html` — SHA256 `c8aa8d2ffbda88326df467f06111f2f29193dcfcf370decb21bc87cc2a1f0733`  
Receipt: `screenshots/lem-p-adic-valuation-basic.json` — SHA256 `2ae9941cd86b5811ff63d2461d0a29582b34e7e59f93b1bf6715ba74d0a226e4`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-p-adic-valuation-basic--01.png` — SHA256 `170db065e4e25b5cfac07c998a090c8462011a6d8e6bd745297d0de6edfac47a`; individually opened at original resolution.
- `screenshots/lem-p-adic-valuation-basic--02.png` — SHA256 `e0bdbd5c7ecbf03df87e5b394c706167bfdaf0624b6b8f648c5985ce79e27769`; individually opened at original resolution.
- `screenshots/lem-p-adic-valuation-basic--03.png` — SHA256 `4cb1f4bde263d49f30b4688cb05ab6f3bd46e3e83f17369b51e11c2af107dd06`; individually opened at original resolution.
- `screenshots/lem-p-adic-valuation-basic--04.png` — SHA256 `5eb7b8d7b2ddd137d54b8b861f3d66bf00d7776699f2a6407d756db58b7837b8`; individually opened at original resolution.

### `lem-prime-power-binomial-congruence`

Title: For odd prime $p$ and $s\ge1$, $(1+p^su)^p\equiv1+p^{s+1}u\pmod {p^{s+2}}$  
Snapshot: `snapshots/lem-prime-power-binomial-congruence.md` — SHA256 `c11a190573072dc8f9bd36278ab0db8f9cacdb40ee959df65cad60a527358b56`  
HTML: `html/lem-prime-power-binomial-congruence.html` — SHA256 `44ec20df66118895ba2bad9eb3b924ac374d4ef1b1dee75f5292eb3b9c60407d`  
Receipt: `screenshots/lem-prime-power-binomial-congruence.json` — SHA256 `9297f042a8b6f8b8327e71658ee930faca4d5069506187efee0b79c5eb44098e`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-prime-power-binomial-congruence--01.png` — SHA256 `e0177a4b69b053b77f1f6a9f0c9d2794420af16548ac68b3a2ce7aaafa124044`; individually opened at original resolution.
- `screenshots/lem-prime-power-binomial-congruence--02.png` — SHA256 `90f166e09805cba858e839670be5b5726f829e657ec8d0c5eaf731a7d423a12f`; individually opened at original resolution.

### `lem-small-four-square-multiple-of-a-prime`

Title: Some multiple $pm$ with $1\le m<p$ is a sum of four squares  
Snapshot: `snapshots/lem-small-four-square-multiple-of-a-prime.md` — SHA256 `ca184a1b814b8f9735e20d8f9780989f41249c5d23f45f940babae72b798fb71`  
HTML: `html/lem-small-four-square-multiple-of-a-prime.html` — SHA256 `44d7d84bbb8920a94e7c482b818f111a1b63809881108468f4f6a4bcdaa49ba3`  
Receipt: `screenshots/lem-small-four-square-multiple-of-a-prime.json` — SHA256 `9c4b3459f8fd881a0520f71ce3737665eb21e5111b8ee69a4c6a98d07a884b8b`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-small-four-square-multiple-of-a-prime--01.png` — SHA256 `56940e7389e65dd3e73a568f65536d2b09f1c78d039dbe9928c7cca892b46ec2`; individually opened at original resolution.
- `screenshots/lem-small-four-square-multiple-of-a-prime--02.png` — SHA256 `ca5afa617bd4f98df676b71a95c9b3c4473fce6497a932457e2e36faf3f6c037`; individually opened at original resolution.

### `lem-triangular-borel-maps-scale-euclidean-volume`

Title: Triangular Borel maps scale Euclidean volume  
Snapshot: `snapshots/lem-triangular-borel-maps-scale-euclidean-volume.md` — SHA256 `3ebf13ced13d1e62e77320815014065114c8c9f51daea156775628bc6aafef4f`  
HTML: `html/lem-triangular-borel-maps-scale-euclidean-volume.html` — SHA256 `3aa6cd3f77ee7b95fd26a3f2805b98bb2cfbec9e4c390a3ed1eccb748949d761`  
Receipt: `screenshots/lem-triangular-borel-maps-scale-euclidean-volume.json` — SHA256 `a927d18aa36b7b82f36b394ea6b46fe3a079c27b96e36d278de507e5dc613be8`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-triangular-borel-maps-scale-euclidean-volume--01.png` — SHA256 `b0781dfe7adacc3d08f2f0a2c3a3e2c2c2effbeffce32304b6672d05851ca251`; individually opened at original resolution.
- `screenshots/lem-triangular-borel-maps-scale-euclidean-volume--02.png` — SHA256 `98fb06e0b7d263effe2f88b930bf4f9dff5497dc4b5375fe635c40f1c090e2d3`; individually opened at original resolution.

### `lem-zeta-explicit-formula-zero-free-error-balance`

Title: Zeta explicit formula zero free error balance  
Snapshot: `snapshots/lem-zeta-explicit-formula-zero-free-error-balance.md` — SHA256 `12d9e50b1d479e7abc958ffdf3a5f22d8c85139162464c9be0787b51c41fdaef`  
HTML: `html/lem-zeta-explicit-formula-zero-free-error-balance.html` — SHA256 `01d066ce966f0dc15b340f2e54e5bb273c54d4c45fcade574403647daf038525`  
Receipt: `screenshots/lem-zeta-explicit-formula-zero-free-error-balance.json` — SHA256 `dc9e588d54d874700c53d830e4dcbeda07591fdc180dc8ec3a066512c4483962`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/lem-zeta-explicit-formula-zero-free-error-balance--01.png` — SHA256 `b6e542fa30caf83810867ea674558bfb2b24d23ea8c5cb59ddef28bac7bffb66`; individually opened at original resolution.

### `prop-index-calculus-modulo-n`

Title: Index calculus: products become sums and powers become scalar multiples modulo $\varphi(n)$  
Snapshot: `snapshots/prop-index-calculus-modulo-n.md` — SHA256 `a258f1d6858693a2d41f2b07644313027acd7dc3aa4b0b3b8afee5b2fef1ddee`  
HTML: `html/prop-index-calculus-modulo-n.html` — SHA256 `3111a4dd418bf06e1c88d875e7253247ee2f1ab35c617c6a14b8121d125463ba`  
Receipt: `screenshots/prop-index-calculus-modulo-n.json` — SHA256 `45ad2705b0ebef70d0ae6921a1ee4c9fe8f58af8560981761d7be6dfd0617507`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/prop-index-calculus-modulo-n--01.png` — SHA256 `3044e12d7b78fa54dd39d541fa452dd3c5ccca471d5f643ca17acc88c7915881`; individually opened at original resolution.

### `prop-proper-equivalence-preserves-discriminant-and-primitivity`

Title: Proper equivalence preserves discriminant and primitivity of the form  
Snapshot: `snapshots/prop-proper-equivalence-preserves-discriminant-and-primitivity.md` — SHA256 `882de8dde56ce83609e55b0a2529c1af08df12437c0c0d16bb617489ee3abe05`  
HTML: `html/prop-proper-equivalence-preserves-discriminant-and-primitivity.html` — SHA256 `4c2a3a7dc42644f8dc42d883b976b57e982c96bb0e5afb208fc97e4a3a979f4b`  
Receipt: `screenshots/prop-proper-equivalence-preserves-discriminant-and-primitivity.json` — SHA256 `7c36b9678bdbdfb10404bc44ffe5724817cf00e0b5c43a738de1054d2f003282`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/prop-proper-equivalence-preserves-discriminant-and-primitivity--01.png` — SHA256 `21b3694ebf9083f2f315111ffc19664f1d460091a5a823a30c95ac91ea0ba2a3`; individually opened at original resolution.

### `thm-canonical-prime-factorisation`

Title: For $n \ge 1$ and any injective list $p : r \to \mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \prod_{i<r} p_i^{\,v_{p_i}(n)}$; the exponents are determined by $n$, and $v_q(n) = 0$ for every prime $q$ outside the list  
Snapshot: `snapshots/thm-canonical-prime-factorisation.md` — SHA256 `1f7c8307511232ffd2435bed9fba5a641ebfc9949af85d6de4233460b7df9ce1`  
HTML: `html/thm-canonical-prime-factorisation.html` — SHA256 `6e0302580e3dc8bfaecb7f67ba436b593909c644343d0c3936748ae8dcca5758`  
Receipt: `screenshots/thm-canonical-prime-factorisation.json` — SHA256 `4601983b3cb70a8177a8170dd773de0ac5eef114c3dd105c14cb277c3031649f`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-canonical-prime-factorisation--01.png` — SHA256 `0ea01ad811a33260187a5985076c08cc29ee9c734ac9c5f263ffccc10ded33e4`; individually opened at original resolution.
- `screenshots/thm-canonical-prime-factorisation--02.png` — SHA256 `8cdf09a40889cbc17749d62fb7feaf0275934c55a892f4fe35d34cd2744f405c`; individually opened at original resolution.
- `screenshots/thm-canonical-prime-factorisation--03.png` — SHA256 `3299c4e78c48f47e0d28903fa2e52a2c92c040acb0b73d5eccaadf8c9ab43935`; individually opened at original resolution.
- `screenshots/thm-canonical-prime-factorisation--04.png` — SHA256 `45e6ad5f5910ecfe7f38e37fe1d1fa40cbf797993bb13b1e3615c046d379af63`; individually opened at original resolution.

### `thm-conjugacy-of-decomposition-and-inertia-groups`

Title: Conjugacy of decomposition and inertia groups  
Snapshot: `snapshots/thm-conjugacy-of-decomposition-and-inertia-groups.md` — SHA256 `5d3c5cbe37fb70d4d976ca49225c7e6bbab8f99d6747e74ed4042f1b717e343b`  
HTML: `html/thm-conjugacy-of-decomposition-and-inertia-groups.html` — SHA256 `2e7932db278f33aea52c955fc794b84c0ad980288c65f9d7775339c8bafa4693`  
Receipt: `screenshots/thm-conjugacy-of-decomposition-and-inertia-groups.json` — SHA256 `641a1d35839a39b45e24ec48d1f24055a6eabbcb47aa258f538b4805a940c919`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-conjugacy-of-decomposition-and-inertia-groups--01.png` — SHA256 `6113364d9e7374d9dfc50b93ffdb349ef994cbf90db6bb2b3128d61b7e90df8c`; individually opened at original resolution.

### `thm-decomposition-group-and-completion`

Title: Decomposition group and completion  
Snapshot: `snapshots/thm-decomposition-group-and-completion.md` — SHA256 `6bfd3152753afe392622837469f2b6eb3747356f0f9f33cd30f6269410a9bdcb`  
HTML: `html/thm-decomposition-group-and-completion.html` — SHA256 `11c326054069c7d34007c00c60929fc09e674b9e3c3ed86eb7eecb1a627b3960`  
Receipt: `screenshots/thm-decomposition-group-and-completion.json` — SHA256 `f8aae044885b5af991e9961bf305ef333bbacfd012afd6a213d75d0c42beb029`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-decomposition-group-and-completion--01.png` — SHA256 `5e3e4e3cd832ac093e68ccc66a2431b08ad4b42e749c97e8d94c64addf3c64bd`; individually opened at original resolution.
- `screenshots/thm-decomposition-group-and-completion--02.png` — SHA256 `a101a6917133059f271fc7a31101d1fc1189d908c04ddd2a87fe6df7ff4d1f16`; individually opened at original resolution.

### `thm-dirichlet-convolution-preserves-multiplicativity`

Title: Dirichlet convolution preserves multiplicativity, and multiplicative inverses stay multiplicative  
Snapshot: `snapshots/thm-dirichlet-convolution-preserves-multiplicativity.md` — SHA256 `17fcc2af461a104b674368189bcf31f8179137578fd5825e236313efc0bd1ea9`  
HTML: `html/thm-dirichlet-convolution-preserves-multiplicativity.html` — SHA256 `2ca3e513788493eb935d72f86c4b09522e6e54233a0c1df6573e56eee236cdf5`  
Receipt: `screenshots/thm-dirichlet-convolution-preserves-multiplicativity.json` — SHA256 `b106547d173ed64ef91fa49d20f18469d05ebd4deaf1f42556860b806152822d`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-dirichlet-convolution-preserves-multiplicativity--01.png` — SHA256 `d0fa4f4f7aa4819b6fbef6e4edc7fe88ff5894aa7670de374946472652f049c9`; individually opened at original resolution.

### `thm-dirichlet-series-summatory-integral`

Title: Dirichlet series from arithmetic functions admit the Abel-summation integral formula  
Snapshot: `snapshots/thm-dirichlet-series-summatory-integral.md` — SHA256 `9d264bded94286bd1545cc416514de02eeb13ac6ebaeedd49c75a3271abdc4b9`  
HTML: `html/thm-dirichlet-series-summatory-integral.html` — SHA256 `9f855f651c952fb4f452a37f7604c33359676af1ad236e3d4de68412e4d5ec63`  
Receipt: `screenshots/thm-dirichlet-series-summatory-integral.json` — SHA256 `263b35598908d89c420e352b2adba18c839ecb520140068aabe810f591603b97`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-dirichlet-series-summatory-integral--01.png` — SHA256 `021a49152d8dd972ea9f0fd01e946613040ec761bad4271a25d0b59317634ac6`; individually opened at original resolution.

### `thm-euclidean-algorithm-for-jacobi-symbol`

Title: The Euclidean algorithm computes the Jacobi symbol without factoring the denominator  
Snapshot: `snapshots/thm-euclidean-algorithm-for-jacobi-symbol.md` — SHA256 `d34bdf3cd7a8ea1689a27f866511ed1f3b9c584615b65b1e967184a7f6517518`  
HTML: `html/thm-euclidean-algorithm-for-jacobi-symbol.html` — SHA256 `a926183f014ec7fffcaeb2635280aa8ff34079bd607e13477e12e9a6406a9eec`  
Receipt: `screenshots/thm-euclidean-algorithm-for-jacobi-symbol.json` — SHA256 `41add6d5dea0178cee220dd1e43f13a9a3ce10f6e6d3ab3c24ed67f8cf844c5c`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-euclidean-algorithm-for-jacobi-symbol--01.png` — SHA256 `ef75ee3a66dd761b79340f45d55b3bbd47b9a1304f90d3e14baac7a590b13b23`; individually opened at original resolution.
- `screenshots/thm-euclidean-algorithm-for-jacobi-symbol--02.png` — SHA256 `86272e88dba0441167d1d82230ccedcd69edf5c2772911a44f5be824c0d6da84`; individually opened at original resolution.

### `thm-first-mertens-theorem-for-primes`

Title: Mertens' first theorem for primes  
Snapshot: `snapshots/thm-first-mertens-theorem-for-primes.md` — SHA256 `3716f1ded16053fa071193ff5e9ec94feb1450f220aace7e8e22c08c30adfe40`  
HTML: `html/thm-first-mertens-theorem-for-primes.html` — SHA256 `675bc8baacece87f3a3d54d514ac5178cf977521063b14ae01c9ab484928bfe0`  
Receipt: `screenshots/thm-first-mertens-theorem-for-primes.json` — SHA256 `72e97b259513496532a47cfc4c32e7868436a8537f17ea229237446eef3068a6`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-first-mertens-theorem-for-primes--01.png` — SHA256 `4de9a6f282b11e0996a112698145c4326ca2cba15811d53fd1cf11118842da01`; individually opened at original resolution.

### `thm-gcd-generates-the-subgroup`

Title: $a\mathbb{Z} + b\mathbb{Z} = \gcd(a,b)\,\mathbb{Z}$ and $a\mathbb{Z} \cap b\mathbb{Z} = \operatorname{lcm}(a,b)\,\mathbb{Z}$; equivalently, in $(\mathbb{Z},+)$ the subgroup generated by $\{a,b\}$ is $\langle \gcd(a,b) \rangle$ and $\langle a \rangle \cap \langle b \rangle = \langle \operatorname{lcm}(a,b) \rangle$  
Snapshot: `snapshots/thm-gcd-generates-the-subgroup.md` — SHA256 `844c0a1288b97a694cbdf5bcad3d120fd93bc18bcb3cd22d13624c1640d358a0`  
HTML: `html/thm-gcd-generates-the-subgroup.html` — SHA256 `9b8c6ab9cf765c02096899046ca2d78e62e11a4a302811d699ae3f3ee6f2d115`  
Receipt: `screenshots/thm-gcd-generates-the-subgroup.json` — SHA256 `5c8284c0395b017d76d2065915eebd5618ab156d5c37fea29eb84e3b666231d6`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-gcd-generates-the-subgroup--01.png` — SHA256 `117f56937a9a4ceff4641139efc507f7cee8e28148c99c8854649d7f13e34476`; individually opened at original resolution.
- `screenshots/thm-gcd-generates-the-subgroup--02.png` — SHA256 `b926de3628039acb354ea314bcd7905b146afd6cb483cfdd477d8ae6a5367f3f`; individually opened at original resolution.
- `screenshots/thm-gcd-generates-the-subgroup--03.png` — SHA256 `a31d19c537ec61f13e25bb4401fa8e84a5d3e63ea53ef3d970b792bb7955ce42`; individually opened at original resolution.

### `thm-integers-modulo-n-basic-algebra`

Title: For every natural $n$, $(\mathbb{Z}/n,+)$ is an abelian group, multiplication is a commutative monoid operation, and both distributive laws hold  
Snapshot: `snapshots/thm-integers-modulo-n-basic-algebra.md` — SHA256 `3fc8fb69d846a92ce1ce60cb4ac7a5ce1f9a4081caaabb49743222270ff924b3`  
HTML: `html/thm-integers-modulo-n-basic-algebra.html` — SHA256 `a5481361143e83eda22fa7df4c3c2ab270b2ffaf78a430d0243282b102bf1ca7`  
Receipt: `screenshots/thm-integers-modulo-n-basic-algebra.json` — SHA256 `92fad2abd2709058fab766f48b1103b967bb93a60c5311fc41b05dd950a033e0`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-integers-modulo-n-basic-algebra--01.png` — SHA256 `a14de97ff59a7d7e61245364c924e35339a5ef3399c6b3efb1fafb1292d5fc87`; individually opened at original resolution.
- `screenshots/thm-integers-modulo-n-basic-algebra--02.png` — SHA256 `870cd7f6ad15b805fea9b946efbef7ae4dc1fcf9d241fbd21d434a71802ed605`; individually opened at original resolution.

### `thm-legendre-continued-fraction-criterion`

Title: Legendre's criterion for convergents  
Snapshot: `snapshots/thm-legendre-continued-fraction-criterion.md` — SHA256 `3e1aae267f89545f04ba76bfb71eeb123bb1987a91e267c44f3103e6a4b2aa6e`  
HTML: `html/thm-legendre-continued-fraction-criterion.html` — SHA256 `0305d811221b953a836e39a4f0e983df71b20556d329f33ad2f19702cd06cd1e`  
Receipt: `screenshots/thm-legendre-continued-fraction-criterion.json` — SHA256 `3940e7de6ca2df111d0b1c22ca7b38a581e62b246713b7e740431e1a1ded4860`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-legendre-continued-fraction-criterion--01.png` — SHA256 `d679f9df681a2d5ba3c3ec52ee8132232c397e6eceb3ebc082d744b76a82109f`; individually opened at original resolution.

### `thm-multiplicative-functions-determined-by-prime-powers`

Title: Multiplicative functions are determined by their prime-power values  
Snapshot: `snapshots/thm-multiplicative-functions-determined-by-prime-powers.md` — SHA256 `e89300a0bede3f350e3d413357b82d541e58a09d29c7f3e2a592ee514617ef8c`  
HTML: `html/thm-multiplicative-functions-determined-by-prime-powers.html` — SHA256 `7e45f4c1c8cc9bf8bcf54087149d1ee229d87a1d4cbf8b2c4b577a4c0bd14475`  
Receipt: `screenshots/thm-multiplicative-functions-determined-by-prime-powers.json` — SHA256 `433509917dda525a47a61a95921365aa838e9ae366b87bec8d427afc5f5507e0`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-multiplicative-functions-determined-by-prime-powers--01.png` — SHA256 `be1a83fd213bb733b0a9d1b7c71bfe7d6a34494266b77a7cc812c0ecdfbb469a`; individually opened at original resolution.

### `thm-odd-p-hilbert-symbol-formula`

Title: The odd-prime Hilbert symbol formula  
Snapshot: `snapshots/thm-odd-p-hilbert-symbol-formula.md` — SHA256 `38da03ecc8fcb11319d91277fe489b55450927372b0a56c5014a02c5e5ee5046`  
HTML: `html/thm-odd-p-hilbert-symbol-formula.html` — SHA256 `4ceaf704df878a2af2404c3ffb98fb4db86e23d26fb48f2a5f112628b70283e3`  
Receipt: `screenshots/thm-odd-p-hilbert-symbol-formula.json` — SHA256 `f9e311349cce6fb1b752399df478bd1e555d767ad569616ded6d95cf3a70fe7e`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-odd-p-hilbert-symbol-formula--01.png` — SHA256 `cae5039c133719a7688754fceb10eac45088cf65d8f8463dbeec0a7e40a1ded0`; individually opened at original resolution.
- `screenshots/thm-odd-p-hilbert-symbol-formula--02.png` — SHA256 `34ceb64ffb6acdbce7b1f951cf1f2a296a950b0fba0014d2f42bf469e29a3400`; individually opened at original resolution.

### `thm-prime-factorisation-exists`

Title: Every integer $n \ge 1$ is a finite product of primes: there are $r \in \mathbb{N}$ and a list $p : r \to \mathbb{Z}$ of primes with $n = \prod_{i<r} p_i$, the case $n = 1$ being the empty product  
Snapshot: `snapshots/thm-prime-factorisation-exists.md` — SHA256 `124547d70b82e6a3d90a9a0ffa40c3c4fb8bf79add1b338991096d2aa8165a56`  
HTML: `html/thm-prime-factorisation-exists.html` — SHA256 `1464c179d02a3610bb340dae9c057217d8940be01115e0038062eaa23cdeefeb`  
Receipt: `screenshots/thm-prime-factorisation-exists.json` — SHA256 `b2c1fb3adde45ca2e1c31625252ad2fb86f1eb24875cbdfe17e3746704cb6a30`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-prime-factorisation-exists--01.png` — SHA256 `a797972bebd0cbe4db184b4aa9909d04b6b6ee1eae92d1f864baa253f1a7d7bd`; individually opened at original resolution.
- `screenshots/thm-prime-factorisation-exists--02.png` — SHA256 `707a16a35efc6476433e11402591c57acd869f1b3576eb2fd5e25b1b82e30a1b`; individually opened at original resolution.
- `screenshots/thm-prime-factorisation-exists--03.png` — SHA256 `5f63ca74049b892be639aac2c41d6bd5090ccf04db28f228bf6594fb8729eacd`; individually opened at original resolution.
- `screenshots/thm-prime-factorisation-exists--04.png` — SHA256 `9c5afd154b248953c0d37f3034491266fd9ebb67b2ea40bd554b991fa6c4c77a`; individually opened at original resolution.

### `thm-principal-dirichlet-l-factorization`

Title: The principal Dirichlet L-function factors through zeta  
Snapshot: `snapshots/thm-principal-dirichlet-l-factorization.md` — SHA256 `fef83847fa0448a47e354ea96c6b3f90690c16b03728bf99347f206ea9483981`  
HTML: `html/thm-principal-dirichlet-l-factorization.html` — SHA256 `f5f0843300ac83b351cfb3cd6f48c6ec4efc424102e3388f92c4ff8addaa9a30`  
Receipt: `screenshots/thm-principal-dirichlet-l-factorization.json` — SHA256 `74a2dbd78fb62e8b0ddb56e966ffdaebdbcbbccf6944749245db78f2b115e1ea`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-principal-dirichlet-l-factorization--01.png` — SHA256 `84fbc3ef81e8e19ab68de80b7de21ca0eec220ab4b292b9810df3c074e75e61c`; individually opened at original resolution.

### `thm-quadratic-subfield-of-a-prime-cyclotomic-field`

Title: Quadratic subfield generated by the Gauss sum  
Snapshot: `snapshots/thm-quadratic-subfield-of-a-prime-cyclotomic-field.md` — SHA256 `4879611b35bc9b01b254a18807299b162fdb94859772265a420d54d19593b39a`  
HTML: `html/thm-quadratic-subfield-of-a-prime-cyclotomic-field.html` — SHA256 `f7e855116f5070b3d2e6f949f240855dd0ca05d603e45a439b4dfecf4bdb225d`  
Receipt: `screenshots/thm-quadratic-subfield-of-a-prime-cyclotomic-field.json` — SHA256 `d4b874e429159ec7d501700d6d76a8ac1025b2f0a356d04f480de022c369ca08`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-quadratic-subfield-of-a-prime-cyclotomic-field--01.png` — SHA256 `93e1fb988d33bc85b74e23e5e55aca84fb3c814cb3ba05263decc9aa047155f5`; individually opened at original resolution.
- `screenshots/thm-quadratic-subfield-of-a-prime-cyclotomic-field--02.png` — SHA256 `0ebce2ba1587294b86a4e736a13e19e0016ed307d412dd1aede2e7f43dd29bc1`; individually opened at original resolution.

### `thm-ring-of-integers-of-a-quadratic-field`

Title: Integers in a quadratic field  
Snapshot: `snapshots/thm-ring-of-integers-of-a-quadratic-field.md` — SHA256 `5257697fb334772314329e12071422ce8f8f78ed45d468242ff6c9d6b74287f2`  
HTML: `html/thm-ring-of-integers-of-a-quadratic-field.html` — SHA256 `b7dbff9fc8822eeb5810f47c7373a591e875c52dca72be12b5ebbe953bff8f4c`  
Receipt: `screenshots/thm-ring-of-integers-of-a-quadratic-field.json` — SHA256 `97acf3205f4ed61fe11a1f7f6a1278bb9191d65aaf219852b91542850b85cf3f`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-ring-of-integers-of-a-quadratic-field--01.png` — SHA256 `08ac2c4e9557db68ada6f2bdadd0383db63407c0ed004d75b3189bfbca15ea37`; individually opened at original resolution.

### `thm-sum-of-totients-over-divisors`

Title: For every positive integer $n$, $\sum_{d\mid n,\ d>0}\varphi(d)=n$  
Snapshot: `snapshots/thm-sum-of-totients-over-divisors.md` — SHA256 `8c10a12f843c2aff815014013c84c32d7566f715cc08d4931180d6cf76fb1bb3`  
HTML: `html/thm-sum-of-totients-over-divisors.html` — SHA256 `01da88785bb4951de4e2577ff00ad966e3ec6659de3335277682d89bbbc48219`  
Receipt: `screenshots/thm-sum-of-totients-over-divisors.json` — SHA256 `d56f7384d60b0831d0d20e542c8e384b97f97ed05852349f6c0e557e50b82fa3`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-sum-of-totients-over-divisors--01.png` — SHA256 `619e0cd7e4a72041c5445ba57f53774e9e768377f2705c5aa3b7b2ded2bc7292`; individually opened at original resolution.
- `screenshots/thm-sum-of-totients-over-divisors--02.png` — SHA256 `cacd10155b05abef6fbceaab7a3eb5994cac0cf7d55dfa2b99f536d6c17f61bb`; individually opened at original resolution.

### `thm-uniqueness-of-dirichlet-series-coefficients`

Title: A Dirichlet series with absolute convergence on a right half-plane is determined there by its coefficients  
Snapshot: `snapshots/thm-uniqueness-of-dirichlet-series-coefficients.md` — SHA256 `89b0795b05a85ab4f6d094bfdcecb4174c61820eb0be69f5932fd6c64395f26d`  
HTML: `html/thm-uniqueness-of-dirichlet-series-coefficients.html` — SHA256 `64eca3f4ef721f82ef006a323a24b4f8af3c95a19441e3ce7c41ae8c9357ba6b`  
Receipt: `screenshots/thm-uniqueness-of-dirichlet-series-coefficients.json` — SHA256 `4ff29deab53a15dbf7af29ac757740d1aa2187d1eaccc18e084f64ecc85e93b8`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-uniqueness-of-dirichlet-series-coefficients--01.png` — SHA256 `c3521aefa23d29c509287cdd10d78b6d5cc0d956e9593c62319de264b973c67d`; individually opened at original resolution.

### `thm-von-mangoldt-divisor-sum-identity`

Title: The divisor sum of von Mangoldt is the arithmetic-function logarithm  
Snapshot: `snapshots/thm-von-mangoldt-divisor-sum-identity.md` — SHA256 `65f65e9816b92ff3e5c3d824da7c18d6912b3de90cb9f65e4fa3770d481245af`  
HTML: `html/thm-von-mangoldt-divisor-sum-identity.html` — SHA256 `148116e64c8f788614e0be4309e259bb5975612520c36bb752d6e1b6522714c0`  
Receipt: `screenshots/thm-von-mangoldt-divisor-sum-identity.json` — SHA256 `e18c059b7dc1a25895f5a6089a6730ccce77692c32c232e0cb4255aa1180c936`  
Rendered receipt checks: KaTeX errors 0; TikZ 0; diagram failures 0.

- `screenshots/thm-von-mangoldt-divisor-sum-identity--01.png` — SHA256 `925afd435a056dafff19f32f18c85531a1582bddea1f8061c3839b4cd65e206f`; individually opened at original resolution.

