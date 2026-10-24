# Number Theory lane 07 rendering audit

Reviewed 76 assigned items and all 116 receipt-listed PNG tiles. Each tile was opened individually with `tools.view_image` at original resolution; no downscaling or collage was used. Local tile bytes matched all receipt SHA-256 values. Source titles and complete ItemBodies were reviewed against frozen local snapshots and captured HTML.

## Findings

### `cor-p-adic-simple-root-lifting` — title

- Snapshot line 4: `title: "Simple roots lift uniquely in Z_p"`
- Symptom: The title prints the p-adic field as literal ASCII `Z_p`; the screenshot shows the underscore and p on the baseline rather than a subscript.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/cor-p-adic-simple-root-lifting--01.png` — SHA-256 `88177b2f9d992b1aad1ea9d57bba161738709d13b59a51b46ab316600966b3b7`
- Suggested repair: Change the title formula to $\mathbb{Z}_p$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

### `cor-second-supplement-via-cyclotomic-frobenius` — title

- Snapshot line 4: `title: Second supplement from Frobenius on Q(zeta_8)`
- Symptom: The title prints the cyclotomic field as literal ASCII `Q(zeta_8)` rather than mathematical notation.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/cor-second-supplement-via-cyclotomic-frobenius--01.png` — SHA-256 `833e80f6374b90c8ed522946d30a00d8b5cc96879e7007e824ad92dd1904a6a2`
- Suggested repair: Change the title formula to $\mathbb{Q}(\zeta_8)$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

### `def-two-square-representation-function` — title

- Snapshot line 4: `title: "The two-square representation function r_2"`
- Symptom: The title prints the representation function as literal ASCII `r_2`; its subscript is not typeset.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/def-two-square-representation-function--01.png` — SHA-256 `637f633719488b457c28fd1900b38d63085f30e46e1d75c0533e902cc20aadac`
- Suggested repair: Change the title formula to $r_2$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

### `ex-no-square-root-of-p-in-qp` — title

- Snapshot line 4: `title: "There is no square root of p in Q_p"`
- Symptom: The title prints the p-adic field as literal ASCII `Q_p`; the underscore is visible on the baseline.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/ex-no-square-root-of-p-in-qp--01.png` — SHA-256 `23a3186ba0393aecfe16af92f94e898dbc1e9216f379c58d4b4ed8cd3fb0f23b`
- Suggested repair: Change the title formula to $\mathbb{Q}_p$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

### `thm-divisor-counting-summatory-estimate` — title

- Snapshot line 4: `title: "The summatory divisor-counting function is x log x plus (2 gamma - 1)x plus O(sqrt x)"`
- Symptom: The title exposes a formula as prose ASCII (`log`, `gamma`, `sqrt`) instead of matching the typeset statement below.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/thm-divisor-counting-summatory-estimate--01.png` — SHA-256 `ad7f31c1f0c058d7aca2c9e0e233206866b14a2befaa88f6f5bef72dfe20d29a`
- Suggested repair: Change the title formula to $x\log x +(2\gamma-1)x+O(\sqrt{x})$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

### `thm-primes-residue-class-dirichlet-density` — title

- Snapshot line 4: `title: "Primes in one reduced residue class have Dirichlet density 1 over phi(q)"`
- Symptom: The title spells out the denominator as literal ASCII `phi(q)` while the statement uses the rendered Greek totient symbol.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/thm-primes-residue-class-dirichlet-density--01.png` — SHA-256 `80824c46193e62fa91a4e1688f845cffe43eca2fb2c7768bb4d987e46febf3eb`
- Suggested repair: Change the title formula to $\varphi(q)$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

### `thm-square-criterion-in-q2` — title

- Snapshot line 4: `title: "Square criterion in Q_2"`
- Symptom: The title prints the 2-adic field as literal ASCII `Q_2`; the underscore is visible on the baseline.
- Classification: `literal-ascii-formula-markup`
- Screenshot: `screenshots/thm-square-criterion-in-q2--01.png` — SHA-256 `d35e103f85cacb8ebbedf668accaf45d8f4094d0b35e4ed531c8b4efde21761e`
- Suggested repair: Change the title formula to $\mathbb{Q}_2$ (or equivalent math-delimited notation) so the field/function/quantity is typeset consistently with the body.

## Diagram candidates

### `lem-blichfeldt-lattice-point-principle` — editorial/uncertain

Source lines: 43, 45, 61.
Optional 2D schematic of a fundamental parallelogram and its lattice translates tiling the plane, with two points of S in different tiles whose translate representatives overlap in the base tile; draw the lattice vector x-y between them. Label this as an intuition picture for the arbitrary-dimensional measurable-set argument. Check half-open boundary ownership and that the strict measure inequality is the reason overlap is forced.

### `lem-successive-minima-attainment-and-adapted-flag` — editorial/uncertain

Source lines: 46, 52, 55.
Optional 2D schematic for distinct minima: show a centrally symmetric convex body C, a lattice, the dilates lambda_1 C and lambda_2 C, a_1 in lambda_1 C and a_2 in lambda_2 C, and the nested spans. Mark that interior lattice points of lambda_i C lie in the span generated by strictly smaller minima. Check that the figure depicts only the distinct-minimum 2D case; the theorem allows repeated minima and arbitrary n.

## Existing diagram checks

No existing TikZ diagrams or receipt-reported diagram failures occurred in these 76 items (receipt totals: TikZ 0, failures 0). No clipping/overlap issue was found in the reviewed tiles.

## Complete item coverage

| # | Item ID | Frozen snapshot SHA-256 | Tiles |
|---:|---|---|---:|
| 1 | `cex-calling-one-prime-destroys-uniqueness` | `f694e228f9ce4347151d4b8bb2273f53c9b4b90986c6ecf7ac71f8698949547c` | 3 |
| 2 | `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` | `7c8586dadea7cae23ac809735e29f667350b1e13d2a8686fabbda6d8f8e796f5` | 1 |
| 3 | `cex-multiplicative-does-not-mean-completely-multiplicative` | `e9b484a67026be9676630851638fe3e39ff50c31e431f8cbbbd7fbe38bb362ec` | 1 |
| 4 | `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | `4400a6421d54dabb0cffddc98bc81155f98f8c1671d651ecaa0eaaeb334335b4` | 1 |
| 5 | `cor-all-integral-pell-solutions` | `5fa8c5ea29b13a70c04c5c810d79f3635141b9d0a985cd0de3cecac1a3ca638a` | 1 |
| 6 | `cor-common-divisor-divides-gcd` | `e8ebfd7dc5831af0c3dad5081709c484b881cd839d76bfdb5eabf302e8ba8acf` | 2 |
| 7 | `cor-discriminant-valuation-from-different-exponents` | `4306adeabce8311df9100b9432768acc25fc85c84382465ededb62e1b5fac62a` | 1 |
| 8 | `cor-factorisation-of-a-nonzero-integer` | `257729d911033b5db7012ecfa7bc54d36c43f9f36302f5b69dd748e3e5df84ea` | 3 |
| 9 | `cor-integers-requiring-four-squares` | `72698341492d7fa62a6ae61d6f48d206a0a1bf10832a117f3d318836a83933f6` | 3 |
| 10 | `cor-number-of-primitive-roots-modulo-n` | `7b82449e9548367d2dd80eb79014c0b012548f823c280235d311b48288624bc8` | 1 |
| 11 | `cor-p-adic-simple-root-lifting` | `abbc265950fbce23c90b2b8bf7d08edceb750e48f33a4e2b7e7577118d4cf32c` | 1 |
| 12 | `cor-second-supplement-via-cyclotomic-frobenius` | `ad8d06a9e95a7b1e2f1d955a16c62ef1ec040d9f37ba4cdcba20bb5ad9c265b3` | 2 |
| 13 | `cor-unique-kth-root-modulo-prime-for-coprime-exponent` | `45ec92132e23af5dda48e1187603d8b4a38e5fc61765910995eeda5be7828cb0` | 2 |
| 14 | `def-addition-and-multiplication-modulo-n` | `8a47a83130ca65203c308871ff7e189223c3f3db2f7c22227b1e7165ffca4540` | 1 |
| 15 | `def-common-divisor-and-gcd` | `d3ab744550c511841fe7e31ca64ed005c1d46313e0df6b67c8380c1a4fd15397` | 2 |
| 16 | `def-different-of-a-number-field` | `a8a9db474e458b75bc69fb465c7bff0035c0bab7cbb4ea198f5818ad5fe7197b` | 1 |
| 17 | `def-divisor-power-sum-functions` | `80ab51854b9390dba88279866b2bfa9a54a4fdcc84ce9e0005f5c955b8916153` | 1 |
| 18 | `def-half-weighted-chebyshev-psi` | `2665e48a3da3e50cc89b3ac0d89ff81ede90e428b9d145653849fdcc8a5db341` | 1 |
| 19 | `def-lcm` | `6156d2898cee46ef284b4097167c985b069c746f0bffdb2dbcc6a27259cacb8b` | 2 |
| 20 | `def-natural-and-dirichlet-density` | `4f4714372b80370ae08d0515742f5d0b6897e4f6af608e3cacbb6fb7aee7496c` | 1 |
| 21 | `def-pell-equivalence-of-generalized-solutions` | `c2093d7bb4d3200566a5635b160977c2fb54159bdce4d7620a1d096d47de4602` | 1 |
| 22 | `def-principal-dirichlet-character` | `e3863a15ff2e0d6d90cebd624acff5b1c39910caaab45e32b94e266dd017efa1` | 1 |
| 23 | `def-ring-of-integers-of-a-number-field` | `0634733259827630538ab5b9ee7c32c7275ebbc0131bc61d4bbf9c4f79dc2d77` | 1 |
| 24 | `def-two-square-representation-function` | `a01d8b8d5e55896b9f81cbc40f205cd0a6fd24e9a62e8e5e4efe8ac58b60d47e` | 1 |
| 25 | `ex-carmichael-function-of-five-hundred-sixty-one` | `3f81110bb7abf43d73045db7f8a1d700bfd55adde0ce713cd609b3c0111d058a` | 1 |
| 26 | `ex-continued-fraction-and-extended-euclid` | `54652cafabe2f199629087d18c23056a90784d1cef8592185c0379b073d013dd` | 1 |
| 27 | `ex-dirichlet-convolution-table-through-twelve` | `848afe0aec04abd7a51dc593cafb0d1065827bb535a401226f7592d3053f6945` | 1 |
| 28 | `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | `e5c963fbb0ab4cc2fad99316d5411f2e759be41fc9cef85e0df4aff36ab15ed3` | 4 |
| 29 | `ex-four-square-congruence-for-an-odd-prime` | `e96a699b7c5fcc227b70713d2942329091f2137ee1d962309909b94323e48b50` | 2 |
| 30 | `ex-gauss-sum-for-chi-four` | `0813222d357193e6de0967b56ffb2b914f34ffe88e36cb005d38d0a91f07b260` | 1 |
| 31 | `ex-hilbert-symbol-at-an-odd-prime` | `8f10442d249043d5e92d3c9aeff5f379b08554a090a140bc0345c77df49fbbcd` | 1 |
| 32 | `ex-liouville-dirichlet-series` | `190defe7a978078db2bab10a1bdc3835e005f664acb2e741dcc960e3f2d521b2` | 1 |
| 33 | `ex-no-square-root-of-p-in-qp` | `816e9c214087b41d433f2e0ca8e0a351d122b762db2b1e8d13adb62ceae8ad8a` | 1 |
| 34 | `ex-perron-formula-for-a-finite-dirichlet-polynomial` | `091abfdd3d32b9736202435c88d0b6a2d9a2b2e4da7d5ca534920fc875c80ef2` | 1 |
| 35 | `ex-primes-represented-by-x-squared-plus-two-y-squared` | `382b4bc3eedad4439a90cd6561156743b55b1934d2802eaad3ecdb5151cfc86f` | 2 |
| 36 | `ex-quadratic-gauss-sum-for-five` | `8c2e432446cdc7dd2c284470055010accfc5ee80e4878638f2c4b374bd7c1817` | 2 |
| 37 | `ex-reducing-a-large-binary-quadratic-form` | `1c6eb7fbac2eb972203c4baa53f94e2206b181bd7ffc99a07a31987c50c9c52a` | 1 |
| 38 | `ex-square-roots-modulo-an-odd-prime-power` | `ae5bd285896ff8a9ad4f0e8c5d5dfccf54b6547bbc5e589d932cfd233c7f9b82` | 1 |
| 39 | `ex-two-adic-hilbert-symbol` | `90321fcf0e457cc070a2ab820359b19b28cecb6f18bbe2d1b98932369e8fbb4a` | 1 |
| 40 | `ex-units-in-a-real-cubic-field` | `f9273b0e4cefbc24c86d49cb265c178701a0ed020df3c67321d787b91d2a2754` | 5 |
| 41 | `fs-four-square-representations-of-a-prime-are-essentially-unique` | `c6aeb1e1942de747f2b072b3874d53bd1c82a7c767cf5c4ff5dbd9fdbf4fad6e` | 1 |
| 42 | `lem-blichfeldt-lattice-point-principle` | `1916b668ee426c311dd0471c97bb14184f1e0cbabb4c5f53a68d2e453c48a33e` | 2 |
| 43 | `lem-congruence-respects-integer-arithmetic` | `4653ee806a72db449526492f88fc4dc835dda268deec573fab825581df5f6e26` | 2 |
| 44 | `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` | `6ba3e03cf917f44eb071b642ce466ac79745003eef1495b2ead112e08dd3eb6d` | 1 |
| 45 | `lem-equivalent-definitions-of-the-hilbert-symbol` | `dd0b9c085a821f7955ac9c46276ddd189b3e27891796295f8ecfaf05ca938e92` | 1 |
| 46 | `lem-galois-action-on-the-quadratic-gauss-sum` | `574c7a1df7077ac00767ae81b980878c8e347df81ca7cef22cad7265deefddcc` | 1 |
| 47 | `lem-hensel-factor-lifting-over-a-complete-valued-field` | `e0905b20b7fab9fb33406420a0d86db23d358642d3f508cb0a8c4bdea6870687` | 1 |
| 48 | `lem-least-absolute-residue-quadruple-of-a-multiple` | `91958e13f344cc01a68f47c589ccf9fe7b19d0924fe6d2792169218082bc3578` | 3 |
| 49 | `lem-multiples-below-a-prime-power` | `b37224b4d05c342b59238c58e3ac1ef32849302ac9fa0c028a7e21c6792758d5` | 2 |
| 50 | `lem-order-of-a-power-in-a-finite-cyclic-group` | `d332aae8adad1a65a9ba2edc5a68048fac1cd69aea4e1a20e2c41628a85025b0` | 1 |
| 51 | `lem-perron-kernel` | `dd909b33885ee86ceb8686976bc34f00256afff7086444b70c946166efb09e11` | 1 |
| 52 | `lem-quadratic-irrational-complete-quotients-are-finite-state` | `3f73841ebd16013fe2eb21d83a50c67bc7cbc100bcb1cdea6671b481d79db849` | 2 |
| 53 | `lem-successive-minima-attainment-and-adapted-flag` | `6ce65a3df41a9c566398cd189767e24dd34a5deef962cf8f87ffa11cd2424665` | 3 |
| 54 | `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | `8ef75a6d4c8a853de0dd7e87bfbb7f4682feef4805d626b7a02e4759ba24f1de` | 2 |
| 55 | `prop-binary-quadratic-form-discriminants-modulo-four` | `438a200b9c0d6adb0f98a1d06e4ce52021aa57539b57c7bd93887151eea7c338` | 1 |
| 56 | `prop-legendre-symbol-well-defined` | `7d718b2f1b97371fcd83c6fc905d6be4166b1d16ebca27b914e8565c82174636` | 1 |
| 57 | `rem-sign-patterns-in-the-four-square-identity` | `7b4946ca823787efbd4a37987f74655debfbba5bfaf00b134d6ec44cfd8ea6e9` | 1 |
| 58 | `thm-chinese-remainder-theorem` | `cfb7a8cb476eefac763963968f597ced28e52c89a1ff60a47f5fc66c08268361` | 2 |
| 59 | `thm-count-of-quadratic-residues-modulo-prime` | `3e8be9361b89054a13b98a34d9eb54103040d6611d3d909ffe389e071f72f8d4` | 2 |
| 60 | `thm-dirac-comb-is-fourier-invariant` | `2c236699fc44cbd3d926448722e1e0361e20419ca95b8fe6062b36fbb44285d2` | 1 |
| 61 | `thm-dirichlet-primes-arithmetic-progressions` | `3728992f8ce686418e147f78b41892055223887ec457008a8743df9a0a598098` | 1 |
| 62 | `thm-divisor-counting-summatory-estimate` | `d195387b3d6a054ca06fb28826b7ee8f4f08998e200622d2e6484e10bcaf14c7` | 1 |
| 63 | `thm-eulers-criterion-for-legendre-symbol` | `5aecc85585191ed02cbd3d4532c3695c3454ed32bc3cbf8b4323fd6eb58205dd` | 2 |
| 64 | `thm-fundamental-identity-for-primes-in-number-fields` | `bcf384beef77acb8a5b1d34b2bc6289929a1fd957bc229fafa7ef00bc47ded60` | 1 |
| 65 | `thm-hermite-minkowski-finiteness` | `b5d6f808ced19e7993d517c1050ef48c2fd34dd6956d4c26a3800584277c7fdd` | 2 |
| 66 | `thm-kronecker-root-of-unity-criterion` | `003fbe865420166a8a3d5aadbd830ffd9c68d07b0cee4f8a16463cfd203531d3` | 3 |
| 67 | `thm-mertens-primes-arithmetic-progressions` | `11a7d827725c546a8b2e3557db219580a4ad5874479275c291a1caf8ec4f3595` | 2 |
| 68 | `thm-normalized-finite-continued-fraction-uniqueness` | `4fae5d83c172c5356db010ee437fd3b4e5f611eb19bb5884786218505ff4acaf` | 1 |
| 69 | `thm-p-adic-completion-is-a-field` | `fdfbdb524a91ee171644ee5c81dc1a07b7232f89c6fe6225d038fb64c07f3502` | 2 |
| 70 | `thm-primes-residue-class-dirichlet-density` | `3e47abd0a19b92ec409c731cb3ad51c99cbda666ed1572d03054fab08cdfa11c` | 1 |
| 71 | `thm-proper-equivalence-preserves-representations` | `b5dda00c6a479cd59880e412f5b6d3f20fa1aa1c27c7777523d881889934a157` | 1 |
| 72 | `thm-reduction-of-positive-definite-binary-quadratic-forms` | `2f9fa9d6a7895b4d51f399f46798bdc7a0f6fb09ff9b4f2215b347b017627113` | 1 |
| 73 | `thm-square-criterion-in-q2` | `0ca7817b1cebd4c50e1362c77155e84b715a6ffad116b4e2f442b89edb50a5db` | 1 |
| 74 | `thm-twisted-poisson-summation` | `8c086fb45cb7f1015357b6e85c61668cf518974ef1f09419fbfcafff99fe9369` | 1 |
| 75 | `thm-unit-group-modulo-two-power-structure` | `79b47c785afe572bea4ad9a7a68dbe11c4a5a9f9753866b721bd00b71e241ffb` | 2 |
| 76 | `thm-wilsons-theorem` | `c8824cd930d8cbd1ea7bb8877d68b19a76b43275474828ddb5e3fc8ac79a82ea` | 2 |

## Individual tile coverage and hashes

| Item ID | Screenshot tile | Receipt SHA-256 | Viewed individually at original resolution |
|---|---|---|---|
| `cex-calling-one-prime-destroys-uniqueness` | `screenshots/cex-calling-one-prime-destroys-uniqueness--01.png` | `094ee137ed0f2c11e4ab42ac82ed9da40d109421b40de73d11b8ec20148f2134` | yes |
| `cex-calling-one-prime-destroys-uniqueness` | `screenshots/cex-calling-one-prime-destroys-uniqueness--02.png` | `975226b8916aec9795dbe6a1c9515e5d5bb3c11d2d8596608006119e855c150b` | yes |
| `cex-calling-one-prime-destroys-uniqueness` | `screenshots/cex-calling-one-prime-destroys-uniqueness--03.png` | `a26179c3c04e5d81096c95f434bc4da18b1b871a9795b4fb461f2677fa970b41` | yes |
| `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` | `screenshots/cex-four-dividing-n-forces-a-nonprimitive-two-square-representation--01.png` | `f0ae39c8ede04ee6411901c6e77659020afe2cb7a012337f7f4f75120773b915` | yes |
| `cex-multiplicative-does-not-mean-completely-multiplicative` | `screenshots/cex-multiplicative-does-not-mean-completely-multiplicative--01.png` | `7fc3737fd009bbada91267348146e77b2fde55d99eca82b525f8ebc00e9252ff` | yes |
| `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | `screenshots/cex-square-modulo-each-prime-does-not-ignore-the-two-part--01.png` | `ed6f52177dd5f6f7cbd49aeeac63652ae74d1a59e6a78975f66768eab81ecebe` | yes |
| `cor-all-integral-pell-solutions` | `screenshots/cor-all-integral-pell-solutions--01.png` | `10a44024424d6bd93f889e4b4ff8035d6e097fa7522c838dc0c8625755d8f6f0` | yes |
| `cor-common-divisor-divides-gcd` | `screenshots/cor-common-divisor-divides-gcd--01.png` | `c99265ae0d16234aae7d7abdbc467e284e34a1f2e762ec1198d1a2a510d7b398` | yes |
| `cor-common-divisor-divides-gcd` | `screenshots/cor-common-divisor-divides-gcd--02.png` | `a70e742330751fe677277844ba741bde829acbd7562fcb157018fa1d0fd0830f` | yes |
| `cor-discriminant-valuation-from-different-exponents` | `screenshots/cor-discriminant-valuation-from-different-exponents--01.png` | `205c4a888d79b5c2a27e00bb2d55793e314bdae89390b25dd94eadd525027a1e` | yes |
| `cor-factorisation-of-a-nonzero-integer` | `screenshots/cor-factorisation-of-a-nonzero-integer--01.png` | `29360ea988c604264d13467daf0b69e073f9f259d1109fc76a0d612b21808883` | yes |
| `cor-factorisation-of-a-nonzero-integer` | `screenshots/cor-factorisation-of-a-nonzero-integer--02.png` | `d67f16ed58e403a9e75fef8c4a5bebf0532c266ca1a2681f95d272fbab9c64d8` | yes |
| `cor-factorisation-of-a-nonzero-integer` | `screenshots/cor-factorisation-of-a-nonzero-integer--03.png` | `256c6a2b8411fd6f8dc7393ccd3e1a3cf10faa947a7e786d162fe88950ddbf18` | yes |
| `cor-integers-requiring-four-squares` | `screenshots/cor-integers-requiring-four-squares--01.png` | `2f4ae9942240dd785ebc8b43af84b54691eede150433d3b7f370abe4147380b0` | yes |
| `cor-integers-requiring-four-squares` | `screenshots/cor-integers-requiring-four-squares--02.png` | `988290270f092e560e66ecd53f95bc08b73e9508a2a3e1164f3bc8d02aed6fb4` | yes |
| `cor-integers-requiring-four-squares` | `screenshots/cor-integers-requiring-four-squares--03.png` | `86e12df77d04939e276035bf68cc143055ce78eba389ac94c34ee5f5f0056820` | yes |
| `cor-number-of-primitive-roots-modulo-n` | `screenshots/cor-number-of-primitive-roots-modulo-n--01.png` | `9994fce85dd7ed1e0dbcad7867181057bd20dbf13576c1816684bd7c6b14658d` | yes |
| `cor-p-adic-simple-root-lifting` | `screenshots/cor-p-adic-simple-root-lifting--01.png` | `88177b2f9d992b1aad1ea9d57bba161738709d13b59a51b46ab316600966b3b7` | yes |
| `cor-second-supplement-via-cyclotomic-frobenius` | `screenshots/cor-second-supplement-via-cyclotomic-frobenius--01.png` | `833e80f6374b90c8ed522946d30a00d8b5cc96879e7007e824ad92dd1904a6a2` | yes |
| `cor-second-supplement-via-cyclotomic-frobenius` | `screenshots/cor-second-supplement-via-cyclotomic-frobenius--02.png` | `cc7eb4239f562ba2fecee43e1bd975d6277d9637e7111887d5a835098f754dbb` | yes |
| `cor-unique-kth-root-modulo-prime-for-coprime-exponent` | `screenshots/cor-unique-kth-root-modulo-prime-for-coprime-exponent--01.png` | `419c869e3b4c666f15a7962d0b9bcb800178b22c97c306a6c6c9d75617ba43a1` | yes |
| `cor-unique-kth-root-modulo-prime-for-coprime-exponent` | `screenshots/cor-unique-kth-root-modulo-prime-for-coprime-exponent--02.png` | `f50e84d903df0d4e8392d92e7199a6c6cc63a3c717d3151697d476a0106d315f` | yes |
| `def-addition-and-multiplication-modulo-n` | `screenshots/def-addition-and-multiplication-modulo-n--01.png` | `26c178e9dae97532b5a7587bca516dc1fe23de39e6f49e746a17ef8e9343d0d0` | yes |
| `def-common-divisor-and-gcd` | `screenshots/def-common-divisor-and-gcd--01.png` | `a9d894e261234688b10c91a0a052c4a9b14b5205b443bf5f61403a8598f9a2e2` | yes |
| `def-common-divisor-and-gcd` | `screenshots/def-common-divisor-and-gcd--02.png` | `3e05a136764e79a44b221052eab8437cee237bab615f9c5a6def7f4c72f351c0` | yes |
| `def-different-of-a-number-field` | `screenshots/def-different-of-a-number-field--01.png` | `7154fa61d07f72a16bcd0d0d8c2d155ae740ad3c26244090552a4ecb06fc3645` | yes |
| `def-divisor-power-sum-functions` | `screenshots/def-divisor-power-sum-functions--01.png` | `bc7b6c79f97898b079b234f3fb60e05ca24cc60048b28df187661b2d0a63165f` | yes |
| `def-half-weighted-chebyshev-psi` | `screenshots/def-half-weighted-chebyshev-psi--01.png` | `ea2c516ae9cfdf5dafe94e0ff373b43fb97bab471e3146fa891c7576c3036327` | yes |
| `def-lcm` | `screenshots/def-lcm--01.png` | `7af96b7c3c826e6b3890802345cee2d51ea435940948376e871b514c5049206c` | yes |
| `def-lcm` | `screenshots/def-lcm--02.png` | `ebd93935480aaf49ab26d030785e7ac0f21deb676093647718595d95adb63307` | yes |
| `def-natural-and-dirichlet-density` | `screenshots/def-natural-and-dirichlet-density--01.png` | `07e1dc90b962aafee70d5b6400f3663b86ee959d6ee35634bf7ee24c1a333493` | yes |
| `def-pell-equivalence-of-generalized-solutions` | `screenshots/def-pell-equivalence-of-generalized-solutions--01.png` | `9443661e4c174faf232948ebfb0367e74e6b38b13f67fff5f944f503819c7cee` | yes |
| `def-principal-dirichlet-character` | `screenshots/def-principal-dirichlet-character--01.png` | `622d23bccbd619270e917b9346a8cb38c4f5ae744578a1d95162876b54bc86b3` | yes |
| `def-ring-of-integers-of-a-number-field` | `screenshots/def-ring-of-integers-of-a-number-field--01.png` | `d26160a19881d1553b6640500591b71d290aefde4e4d6b782e389357b57c5735` | yes |
| `def-two-square-representation-function` | `screenshots/def-two-square-representation-function--01.png` | `637f633719488b457c28fd1900b38d63085f30e46e1d75c0533e902cc20aadac` | yes |
| `ex-carmichael-function-of-five-hundred-sixty-one` | `screenshots/ex-carmichael-function-of-five-hundred-sixty-one--01.png` | `19f264609ea8e00f727b9d596e05125acbea72467749e155509a5589209cd37f` | yes |
| `ex-continued-fraction-and-extended-euclid` | `screenshots/ex-continued-fraction-and-extended-euclid--01.png` | `c86918726252b488f09a4fbd30118ba26fc63fd9e6a15b92f620d43ccb8705b2` | yes |
| `ex-dirichlet-convolution-table-through-twelve` | `screenshots/ex-dirichlet-convolution-table-through-twelve--01.png` | `5f9c66381aeda1575e415ef45a51032a2eee42d8a4bd3ccd74bb8d3d726caf85` | yes |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | `screenshots/ex-euclidean-algorithm-on-consecutive-fibonacci-numbers--01.png` | `ea7d13c8d785c578e8fe77020313b5dd0d17848c3c0a31086432a33648dc76f4` | yes |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | `screenshots/ex-euclidean-algorithm-on-consecutive-fibonacci-numbers--02.png` | `f5bea02e18c80f41627a3bd6e50790dbdaec3035ac14255957c25454b559e0eb` | yes |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | `screenshots/ex-euclidean-algorithm-on-consecutive-fibonacci-numbers--03.png` | `494514c84b240ad315d1aa3431f3bb900463d57ff26bb48f45aeb9182f17bc7e` | yes |
| `ex-euclidean-algorithm-on-consecutive-fibonacci-numbers` | `screenshots/ex-euclidean-algorithm-on-consecutive-fibonacci-numbers--04.png` | `87fdfd59dcbc3b8ebf88976d6a6ecc95c5c0a522e482c64ef1522e89a4eb2eed` | yes |
| `ex-four-square-congruence-for-an-odd-prime` | `screenshots/ex-four-square-congruence-for-an-odd-prime--01.png` | `6f41c1221d72768308d5ce029385527c16d2a152c4e96d61dbad1889e8291c1f` | yes |
| `ex-four-square-congruence-for-an-odd-prime` | `screenshots/ex-four-square-congruence-for-an-odd-prime--02.png` | `ebdffb5a32a34a52ce79ed895f677b06e057e0b813a2ec291a14abfc9e06dd55` | yes |
| `ex-gauss-sum-for-chi-four` | `screenshots/ex-gauss-sum-for-chi-four--01.png` | `ae34a3af88c1a75ae2415c248b007ddca284f46255b5c67294a7456c3bc1fa91` | yes |
| `ex-hilbert-symbol-at-an-odd-prime` | `screenshots/ex-hilbert-symbol-at-an-odd-prime--01.png` | `197f22404d15dd60f19518c8435709573dd8bcdb9311abe129db047f18a873b5` | yes |
| `ex-liouville-dirichlet-series` | `screenshots/ex-liouville-dirichlet-series--01.png` | `5f2313cfce3e3beaf51ab920c826c9dc6a983ad87815c9f5de035051d69fabb7` | yes |
| `ex-no-square-root-of-p-in-qp` | `screenshots/ex-no-square-root-of-p-in-qp--01.png` | `23a3186ba0393aecfe16af92f94e898dbc1e9216f379c58d4b4ed8cd3fb0f23b` | yes |
| `ex-perron-formula-for-a-finite-dirichlet-polynomial` | `screenshots/ex-perron-formula-for-a-finite-dirichlet-polynomial--01.png` | `e34e175d1d91baae4aebb31f081feb8df840a3ea6d94c430b13c5f961dffe613` | yes |
| `ex-primes-represented-by-x-squared-plus-two-y-squared` | `screenshots/ex-primes-represented-by-x-squared-plus-two-y-squared--01.png` | `5b30f15ad91f0011100ab30e97e9c8752792e5f3b9885c27cb44dfca6dc24c51` | yes |
| `ex-primes-represented-by-x-squared-plus-two-y-squared` | `screenshots/ex-primes-represented-by-x-squared-plus-two-y-squared--02.png` | `8db8b792db6fcc948a906b37a89efd3df2279ad4cf53f71520ace26479bc8275` | yes |
| `ex-quadratic-gauss-sum-for-five` | `screenshots/ex-quadratic-gauss-sum-for-five--01.png` | `4bfc208e7c8a9e3e49338d09be7fa146642314a8c3779e510c2745ebb69bf683` | yes |
| `ex-quadratic-gauss-sum-for-five` | `screenshots/ex-quadratic-gauss-sum-for-five--02.png` | `762a57ca9c46e1851b17d8a4f94e9b7337c3bbed6eb057668f1ff95f854b2769` | yes |
| `ex-reducing-a-large-binary-quadratic-form` | `screenshots/ex-reducing-a-large-binary-quadratic-form--01.png` | `78468875b1273d63f59852025a9830d1bc0c869226544f9b6db0c71956e02dea` | yes |
| `ex-square-roots-modulo-an-odd-prime-power` | `screenshots/ex-square-roots-modulo-an-odd-prime-power--01.png` | `ba4a35be735610d8a8b7fd4d60dcf8743c9f0116f58e159ad12c0bb1a07d46b3` | yes |
| `ex-two-adic-hilbert-symbol` | `screenshots/ex-two-adic-hilbert-symbol--01.png` | `c80ce88bd2124642bc64024ca73b1c228c9a57f28da1099938db82df97e90879` | yes |
| `ex-units-in-a-real-cubic-field` | `screenshots/ex-units-in-a-real-cubic-field--01.png` | `f6d3e5650364e4ace9016ad4a2a54b1f6143ee695e5dd107aa7dded33fc02d31` | yes |
| `ex-units-in-a-real-cubic-field` | `screenshots/ex-units-in-a-real-cubic-field--02.png` | `896abc77e7690be92b2d2c6c32830a7c7df8ead7364517f3163c6bd1dc676da7` | yes |
| `ex-units-in-a-real-cubic-field` | `screenshots/ex-units-in-a-real-cubic-field--03.png` | `fb6a9ee201995fe2545afd2f20fade8f3369a279764777c22a0a47f8dc2315db` | yes |
| `ex-units-in-a-real-cubic-field` | `screenshots/ex-units-in-a-real-cubic-field--04.png` | `4cd23e470c79a5f84576a1c47c25cf3e24013c2465aafb39fe4fb6001586829c` | yes |
| `ex-units-in-a-real-cubic-field` | `screenshots/ex-units-in-a-real-cubic-field--05.png` | `565a2631614f675dd3c72d136b6ce2752bb5160034fb0658759745d9c9445b82` | yes |
| `fs-four-square-representations-of-a-prime-are-essentially-unique` | `screenshots/fs-four-square-representations-of-a-prime-are-essentially-unique--01.png` | `4c17994c545f5ff59bfe830f2bbe20e3e5789c3dfd18293de50b2da696bea1d3` | yes |
| `lem-blichfeldt-lattice-point-principle` | `screenshots/lem-blichfeldt-lattice-point-principle--01.png` | `b2fc980ccd6cceb439affb8942e7b7db8bbc8ab95d3a03bd89d3d51fb4b892fd` | yes |
| `lem-blichfeldt-lattice-point-principle` | `screenshots/lem-blichfeldt-lattice-point-principle--02.png` | `7183d9f873d804fc791843bcf1f07497a8ea759c34a34bb2aa30c42fb75c731e` | yes |
| `lem-congruence-respects-integer-arithmetic` | `screenshots/lem-congruence-respects-integer-arithmetic--01.png` | `4e26c90acf4b5f65f94d8fea7340d50c1ea085e8c03fc7afc08b88bf542312d4` | yes |
| `lem-congruence-respects-integer-arithmetic` | `screenshots/lem-congruence-respects-integer-arithmetic--02.png` | `bb0792027b6189c7138eeb6375efa75dfa6c831435ebfddac5ba0ebb256b0c56` | yes |
| `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` | `screenshots/lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime--01.png` | `bd91108f95b07a68189c5d675db4101935929485706a06cc676fabc1ef37d3ff` | yes |
| `lem-equivalent-definitions-of-the-hilbert-symbol` | `screenshots/lem-equivalent-definitions-of-the-hilbert-symbol--01.png` | `4263de31ed047037410864791824b078bdcbeabfdbf68c8b9b2a8e56372ac8ab` | yes |
| `lem-galois-action-on-the-quadratic-gauss-sum` | `screenshots/lem-galois-action-on-the-quadratic-gauss-sum--01.png` | `07eab77b099a33a48f6783aa0e4bc60b8f335e17ebcb2c26ba8bcb49d22e8b48` | yes |
| `lem-hensel-factor-lifting-over-a-complete-valued-field` | `screenshots/lem-hensel-factor-lifting-over-a-complete-valued-field--01.png` | `8ae57b57be7b8c148d37dab32dec74994c46a39411cc3afe62b893b61a286d8d` | yes |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | `screenshots/lem-least-absolute-residue-quadruple-of-a-multiple--01.png` | `28d49be6c10f6e469994dc970f8ba532981a43ce559c8af405bb6e1764f4836f` | yes |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | `screenshots/lem-least-absolute-residue-quadruple-of-a-multiple--02.png` | `e18d5ab30a4dd778d64e78ef9e683466a380bc0b0f90fc41830f96c045a79e93` | yes |
| `lem-least-absolute-residue-quadruple-of-a-multiple` | `screenshots/lem-least-absolute-residue-quadruple-of-a-multiple--03.png` | `9ec52f4845cb25cbe67557d6a18b0cddf85fc42d2a0d15d97b48bf1d9d66d3bd` | yes |
| `lem-multiples-below-a-prime-power` | `screenshots/lem-multiples-below-a-prime-power--01.png` | `c2cebe863d52ef5a8fe07152442e4c4fb00f740049fb2810c56d03d1d19c4384` | yes |
| `lem-multiples-below-a-prime-power` | `screenshots/lem-multiples-below-a-prime-power--02.png` | `fa0b58ba20fe269b316a7deeaac500047ffc7650346c9aef73daa68ece85f68d` | yes |
| `lem-order-of-a-power-in-a-finite-cyclic-group` | `screenshots/lem-order-of-a-power-in-a-finite-cyclic-group--01.png` | `7b45a6f45ad696b8ba03633688dd94f39ee2a8792642ee2241ce7d1347787c2f` | yes |
| `lem-perron-kernel` | `screenshots/lem-perron-kernel--01.png` | `3fea83d4e5432da4e8d5aad8a6735016b18aa51c12abf8127533151a8964b9bc` | yes |
| `lem-quadratic-irrational-complete-quotients-are-finite-state` | `screenshots/lem-quadratic-irrational-complete-quotients-are-finite-state--01.png` | `51240cac38b2678fc440d26169175c1c033f89a11fa4519449fa8d713e32576b` | yes |
| `lem-quadratic-irrational-complete-quotients-are-finite-state` | `screenshots/lem-quadratic-irrational-complete-quotients-are-finite-state--02.png` | `f5f7f681d09b62f7aee11910279e590d4270bfc47ee84eb2edb6f42da87b06ab` | yes |
| `lem-successive-minima-attainment-and-adapted-flag` | `screenshots/lem-successive-minima-attainment-and-adapted-flag--01.png` | `94337e5e77ac7a258efab606e90db24ee4edb277146ce8e3b2bc3008d7911830` | yes |
| `lem-successive-minima-attainment-and-adapted-flag` | `screenshots/lem-successive-minima-attainment-and-adapted-flag--02.png` | `faa698de0ff7adfcbf1368b2dfd7864d3772355657d4200c8a964df6ea563f27` | yes |
| `lem-successive-minima-attainment-and-adapted-flag` | `screenshots/lem-successive-minima-attainment-and-adapted-flag--03.png` | `14520d56af2ed368b4058f5d2287739cbca7f656870cb5eedd5f7695005f71dc` | yes |
| `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | `screenshots/lem-unit-logarithms-lie-in-the-product-formula-hyperplane--01.png` | `c9b49fa4308badeda468f320b4134493d3a285037f2131a0a9083bd733acb4a7` | yes |
| `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | `screenshots/lem-unit-logarithms-lie-in-the-product-formula-hyperplane--02.png` | `b2373461fd13ed75e08ddf2bb5c52094726dbb5e8e2b42b56942e33c59254ec0` | yes |
| `prop-binary-quadratic-form-discriminants-modulo-four` | `screenshots/prop-binary-quadratic-form-discriminants-modulo-four--01.png` | `922aaa9cd073e66701e9f2fb2585adb874da98bb27b66be17159f3736018793b` | yes |
| `prop-legendre-symbol-well-defined` | `screenshots/prop-legendre-symbol-well-defined--01.png` | `eebcfbf042bdee9fd3ff31a4675b698dd3f416baf31ea13e254d90b543fc90d2` | yes |
| `rem-sign-patterns-in-the-four-square-identity` | `screenshots/rem-sign-patterns-in-the-four-square-identity--01.png` | `e089b15d62e6f440984229b44e05860ae621f420566ec5381fe9ad24700102d7` | yes |
| `thm-chinese-remainder-theorem` | `screenshots/thm-chinese-remainder-theorem--01.png` | `3b894d121493a32e612872fa08822852ab8b689b06227962ac2518c46a8bec48` | yes |
| `thm-chinese-remainder-theorem` | `screenshots/thm-chinese-remainder-theorem--02.png` | `d0e200bf5236cc5a5f1f7b923fc2ab15cc1213b4c0791433d488d70446965515` | yes |
| `thm-count-of-quadratic-residues-modulo-prime` | `screenshots/thm-count-of-quadratic-residues-modulo-prime--01.png` | `8e24619705a3f2e79738ec66066ab26859f3c16b89e5e962b452262699be6060` | yes |
| `thm-count-of-quadratic-residues-modulo-prime` | `screenshots/thm-count-of-quadratic-residues-modulo-prime--02.png` | `674bfe315f23150704143a5c8dbdabbcfbc4e41e239ec36208fdf6dabebbf5ab` | yes |
| `thm-dirac-comb-is-fourier-invariant` | `screenshots/thm-dirac-comb-is-fourier-invariant--01.png` | `3966771562216c2fd19619996c9d4c5d9bb8c582e0f16a8ef5b76187cdeb5e3c` | yes |
| `thm-dirichlet-primes-arithmetic-progressions` | `screenshots/thm-dirichlet-primes-arithmetic-progressions--01.png` | `2e93c9ffb20a66a6e5d7166f14d117382419a5683e9910bfccb2402e005b157b` | yes |
| `thm-divisor-counting-summatory-estimate` | `screenshots/thm-divisor-counting-summatory-estimate--01.png` | `ad7f31c1f0c058d7aca2c9e0e233206866b14a2befaa88f6f5bef72dfe20d29a` | yes |
| `thm-eulers-criterion-for-legendre-symbol` | `screenshots/thm-eulers-criterion-for-legendre-symbol--01.png` | `dea5c9f9508452f054617c0ec9490e0cc435fa56c4130fc5828092d5dcc36698` | yes |
| `thm-eulers-criterion-for-legendre-symbol` | `screenshots/thm-eulers-criterion-for-legendre-symbol--02.png` | `fb0cc7279c12465bd8d2b43ff9103d8738ab3ea620026db2e37568bb12ce4f35` | yes |
| `thm-fundamental-identity-for-primes-in-number-fields` | `screenshots/thm-fundamental-identity-for-primes-in-number-fields--01.png` | `48aa87027ce6e707d6dcc33546e1ea216abe2868aeb4b7123a5c70f4382fc07b` | yes |
| `thm-hermite-minkowski-finiteness` | `screenshots/thm-hermite-minkowski-finiteness--01.png` | `3eaba8a2d25c9ed20b7b56ec53d7116299827816962dca93221cccc4ffa8bafa` | yes |
| `thm-hermite-minkowski-finiteness` | `screenshots/thm-hermite-minkowski-finiteness--02.png` | `e11ed31fa557f757c52082e54cec30af6c48bbc149dfb9345ec441711780b62d` | yes |
| `thm-kronecker-root-of-unity-criterion` | `screenshots/thm-kronecker-root-of-unity-criterion--01.png` | `bd99dafda934f90ef29fe06d0ef778537faf3191241bc3eb5b11b29353fa8e75` | yes |
| `thm-kronecker-root-of-unity-criterion` | `screenshots/thm-kronecker-root-of-unity-criterion--02.png` | `44211ed4d86ac7499e838022523b4fa10ef0ec8485c86df4b6e0324f62753ad5` | yes |
| `thm-kronecker-root-of-unity-criterion` | `screenshots/thm-kronecker-root-of-unity-criterion--03.png` | `a7a9ead295d201d77baa3c55740190de5c42436598c2073a7e00420579d5d5e3` | yes |
| `thm-mertens-primes-arithmetic-progressions` | `screenshots/thm-mertens-primes-arithmetic-progressions--01.png` | `b25f17de3465e02d928c7499366974e9b02ba76c84ab7ec790365e35bfcdaa40` | yes |
| `thm-mertens-primes-arithmetic-progressions` | `screenshots/thm-mertens-primes-arithmetic-progressions--02.png` | `75125b718d91c25f79ad4e8f40b8aaf4fabb947aab3b812938e9b8eb800228cd` | yes |
| `thm-normalized-finite-continued-fraction-uniqueness` | `screenshots/thm-normalized-finite-continued-fraction-uniqueness--01.png` | `305f9f045cad8055ca8d2a53bee11cbdbc36d77df88b085db87c28cc2ebe3fcc` | yes |
| `thm-p-adic-completion-is-a-field` | `screenshots/thm-p-adic-completion-is-a-field--01.png` | `15795cb9242a9cd4bab403418f3afc73b5ce071d7fda0c2088228d5108b1d1f9` | yes |
| `thm-p-adic-completion-is-a-field` | `screenshots/thm-p-adic-completion-is-a-field--02.png` | `34411a61b5b14c54c1a05d344d0bf9592a45aa4b98f628d400e0e763beef6c6d` | yes |
| `thm-primes-residue-class-dirichlet-density` | `screenshots/thm-primes-residue-class-dirichlet-density--01.png` | `80824c46193e62fa91a4e1688f845cffe43eca2fb2c7768bb4d987e46febf3eb` | yes |
| `thm-proper-equivalence-preserves-representations` | `screenshots/thm-proper-equivalence-preserves-representations--01.png` | `db4019c6e7cb5b908193495b136208cf3b952b5e02986a21cffafa7a6c698821` | yes |
| `thm-reduction-of-positive-definite-binary-quadratic-forms` | `screenshots/thm-reduction-of-positive-definite-binary-quadratic-forms--01.png` | `63e5c1356afacdbedf9b89050767d144993459c50a78dadd1f97517c06bbc9f3` | yes |
| `thm-square-criterion-in-q2` | `screenshots/thm-square-criterion-in-q2--01.png` | `d35e103f85cacb8ebbedf668accaf45d8f4094d0b35e4ed531c8b4efde21761e` | yes |
| `thm-twisted-poisson-summation` | `screenshots/thm-twisted-poisson-summation--01.png` | `bd237ee1c89e82a6e216109654c790959a8972cee285dbcc1588eb03ed5ef257` | yes |
| `thm-unit-group-modulo-two-power-structure` | `screenshots/thm-unit-group-modulo-two-power-structure--01.png` | `612758dcfe18d2db2fa340d820c4b790fdfae7a4ebf750b9e61d1698a207ff0f` | yes |
| `thm-unit-group-modulo-two-power-structure` | `screenshots/thm-unit-group-modulo-two-power-structure--02.png` | `a913792830122f3fb376624b64cb6ba43a0c6cba669304347d2256c053b35de6` | yes |
| `thm-wilsons-theorem` | `screenshots/thm-wilsons-theorem--01.png` | `4a5be8f7318c9e23c633ef32ee820acc358ebde292bca8b20768187599b06d76` | yes |
| `thm-wilsons-theorem` | `screenshots/thm-wilsons-theorem--02.png` | `5e5f466c79b94b2faf3b815b47c5ab1668facf72c17fc5b1f532f3a291b3ff4d` | yes |
