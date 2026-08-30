# Frontier 25 — Step 8 group a adjudication

## Scope

- Group: `a`
- Batches: `1`, `4`, `5`
- Owned pages: 6
- Owned items: 82
- Exact rejections adjudicated: 41
- Incoming alerts: none
- Cross-group findings: none

## Outcomes

| Item | Context SHA-256 | Outcome | Exact basis and disposition |
|---|---|---|---|
| `cex-a-round-annulus-is-connected-but-not-simply-connected` | `95104e9bbe621a7df4583a10613746a8fba235a8e1e7b0923e0f6959f4186426` | `confirmed_nonfatal` | The local restatement omits the grand theorem's Choice hypothesis, but the counterexample and winding-number witness are true; this is citation/proof polish and licenses no edit. |
| `cex-the-punctured-disc-is-connected-but-not-simply-connected` | `2cbd3b29c76580527a947eeb538f7d0ba713eba52dafe7a8384ea9dda0ace69e` | `confirmed_nonfatal` | The same Choice qualification is omitted, while the punctured-disc witness is correct; no edit licensed. |
| `cex-the-punctured-plane-separates-c-complement-from-spherical-complement` | `449b1dd1f0264e37cf2803fefe434b2c04ca73a91fb7d13766f2eb35ba315cf5` | `confirmed_nonfatal` | Openness and connectedness of `C^times` are left elementary rather than written out. The witness is valid; no edit licensed. |
| `cor-prime-ideals-and-dimension-of-a-dvr` | `b323bcc7f3a7b1a8ca7d39621da2cb5ba2c13ad7eebebbdfcf4669f76ad298f2` | `confirmed_nonfatal` | The omitted sentence “a maximal ideal in a commutative ring is prime” is an immediate elementary derivation. The corollary is correct; no edit licensed. |
| `cor-von-mangoldt-mobius-inversion-formula` | `2da5f2322bc915ec0958c69177fb38a0baa4bd6eeaef9f1c12b2f6c0975f33d7` | `confirmed_nonfatal` | The final convolution identification lacks a local citation to its definition, but the displayed formula is exactly that definition; no edit licensed. |
| `cor-winding-number-classifies-loops-in-the-punctured-plane` | `9aa96371787a13f0202b0cba802e05f085fc5cc5239a3fe74419553c8167c8df` | `confirmed_fatal` | The statement applied analytic winding number, defined only for rectifiable contours, to every continuous fundamental-group loop. Repaired by defining the total class map through degree after radial normalization and asserting equality with analytic winding number only for rectifiable representatives. |
| `def-dirichlet-convolution-identity` | `4242f2efd9ce2e4def3bfaeaaf04741ff99fb2231a82460ade061ebf9b45562b` | `false_positive` | The remark gives a true example of an identity using both symbols and does not assert that a later sibling on this page proves it. |
| `def-divisor-counting-function` | `a5ab47c8307fe40c35c4b33df9e03eaa688211505ccc3fc6db38c5af5fee09be` | `confirmed_nonfatal` | Finiteness of the positive-divisor set is elementary but not cited locally. The definition is well formed; no edit licensed. |
| `def-divisor-power-sum-functions` | `9b04b72231fc64eb915e9f2dd2f2c2817062da0197a9cd1a46199bcaa6f88cb9` | `confirmed_nonfatal` | The same finite-divisor justification is omitted. The definition is correct; no edit licensed. |
| `def-liouville-function` | `09fce30d1466a9c04e6ec9e10f3dd1a5dbb22d53b39b31dfdcc5bf0ea5441866` | `confirmed_fatal` | The remark falsely claimed uniqueness of the exponent multiset although the cited theorem permits zero-exponent padding. Repaired by listing exactly the distinct prime divisors with positive valuation and stating the corresponding uniqueness. |
| `def-mertens-function` | `bddbe71f7a7487679258b7f39192ca375c1fc10333b4098082001b4b27bad7c6` | `confirmed_fatal` | The remark falsely claimed constancy on `[m,m+1)` for unrestricted `m`. Repaired by requiring integer `m >= 1`. |
| `def-valuation-on-a-field` | `c0d0779040a77b6a7638ca1b4ec0be5dfd5cfde76702d3285880ebac90f23396` | `confirmed_fatal` | `infinity+infinity` was undefined although multiplicativity includes `x=y=0`. Repaired by defining `infinity+infinity=infinity`. |
| `ex-dirichlet-inverse-recursion` | `80d1fde91818f5a76467928d5ab22e227dba9d15bc97eaf08f5af0face66e369` | `confirmed_nonfatal` | The finite commutativity observation lacks its direct citation, but the displayed computations are correct; no edit licensed. |
| `ex-euler-totient-as-a-mobius-convolution` | `66801b0fbc74a02daa84037b7cfc4bd182bdebf44061e3f757fd3fa4761b232b` | `confirmed_nonfatal` | The final convolution identification omits the definition citation; the formula itself is correct. |
| `ex-every-convex-plane-domain-is-simply-connected` | `3cdd2bc17fe3b5e1a663b70e15bcae78c782c5135509bec7364363650b800df6` | `confirmed_nonfatal` | The grand-theorem restatement omits Choice, but the cited convex-space theorem already proves simple connectivity directly and choice-free. |
| `ex-every-star-shaped-plane-domain-is-simply-connected` | `9d468adac7028b2721b4240e24868aa0ec7e8e2823c2718cf21f2c290001f307` | `confirmed_nonfatal` | The chosen bridge omits Choice, while the statement is true via the elementary straight-line contraction; no edit licensed. |
| `ex-liouville-square-indicator` | `66cd8d389606462e74d05995c3e82fd31650e8e91c92ef826471cf409b6a440a` | `confirmed_nonfatal` | The convolution expansion lacks its direct definition citation; the computation is correct. |
| `ex-localisation-of-a-pid-at-a-prime` | `7084696a56cf0ee722eb83c2b0a931c3e1de16fca7163ae50f4c74ddc50c31cc` | `confirmed_nonfatal` | The final uniformiser label omits the definition citation after proving the maximal ideal is generated by the value-one element. This is immediate polish. |
| `ex-nondiscrete-ordered-subgroup-valuation` | `29cb193ee8edd62cefb3fe52d685e63c8d10f576ca87032552f9580bba5a12b3` | `confirmed_nonfatal` | The nonnegative-locus claim is stronger than the cited definition but follows immediately from the valuation axioms. |
| `ex-p-adic-dvr` | `348daacdbc56e3ad3c90be08d7f7fdfab4f2c3130129b77c3bf9ac5d49dc7632` | `confirmed_nonfatal` | The proof establishes `v(p)=1` but omits the uniformiser-definition citation; no mathematical defect. |
| `ex-rank-two-valuation-ring-not-dvr` | `41c99656cbc24f2eb192c698df17cb24b3ebf8de5cf99e709167b9deac611c02` | `confirmed_nonfatal` | The intrinsic-value-group identification is omitted. It follows by factoring the surjective valuation through `K^times/V^times` with kernel `V^times`; the example is correct. |
| `ex-the-complex-plane-satisfies-all-grand-equivalence-clauses` | `0f1752c7b4406558422372abd603e69d13be0fb8bb5455838d0551c47c79c6da` | `confirmed_nonfatal` | The grand-theorem restatement omits Choice, but every asserted clause for `C` is directly true; no edit licensed. |
| `ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm` | `f00c80ac90e637bc9d086d44be32f166b0dac16f3a10f442b0b65267fe5057ad` | `confirmed_nonfatal` | The proof leaves openness and connectedness of the slit plane elementary rather than explicit. |
| `ex-the-unit-disc-satisfies-all-grand-equivalence-clauses` | `96f7c1e824cc88772e639f0054f19649619a3705464fdb0e3c6164168303b175` | `confirmed_nonfatal` | The grand-theorem restatement omits Choice, but every clause for the disc is directly true; no edit licensed. |
| `ex-valuation-ring-ideals-linearly-ordered` | `49b3fd685eaa17ed27dbe76d9c1cee9a2f70317d650c253e1d36296e8518a00c` | `confirmed_nonfatal` | The cited source body's construction supplies the value group and proves it has no least positive element; the local fact summary is compressed but correct. |
| `ex-von-mangoldt-divisor-sum` | `f0f7c272837f5bc977c74d4bc481c084994f4a178d051cc2c9961b74bea9046c` | `confirmed_nonfatal` | The logarithm product law is used without a direct citation, but both numerical identities are correct. |
| `fs-connected-complement-in-c-implies-simple-connectivity` | `fe5e6f7ec84967a85a06ef04520f46d1f3e02492cff16e5460171333f3657bcd` | `confirmed_nonfatal` | The fact that `C^times` is a connected complex domain is left elementary. The counterexample is valid. |
| `fs-simply-connected-plane-domains-are-convex` | `b4dfc8f49ac2ff7d95fc4fe700121c0d6f303457ab0fb33c7bcf5ed76824a386` | `confirmed_nonfatal` | The cited witness carries a Choice hypothesis that is not repeated, but the slit plane is directly contractible/simply connected and remains a valid witness. |
| `fs-simply-connected-plane-domains-are-star-shaped` | `08adc7a63ba4a77dd5638dfebef2b3dcf68b24652f79b1066c6030e201deb42b` | `confirmed_nonfatal` | The cited witness's Choice hypothesis is not repeated, while the geometric counterexample is correct; no edit licensed. |
| `lem-connected-spherical-complement-implies-null-homology` | `cf741a47be2c75e6f63cf7c1221509783012366eb279b1deaed2f5244eced57a` | `confirmed_nonfatal` | Step 1.1 needs “relative neighbourhood in the spherical complement.” That immediate qualification is exactly what step 2.1 uses, so the theorem and proof mechanism remain correct. |
| `lem-contractibility-implies-trivial-fundamental-group` | `2773e79b98bc1eebb8cedc7ab343ce817009a7d830f24837afefb6b3580f1367` | `confirmed_nonfatal` | The displayed three-piece loops are endpoint-fixed reparametrisations of the named binary concatenations. The omitted reparametrisation bridge is immediate. |
| `lem-null-homology-implies-connected-spherical-complement` | `631ae1df2a9c07235105ce3ecfeb0ef899a902484fc86a8fe6bb254c40b341c8` | `confirmed_nonfatal` | The argument omits a citation supplying continuous arguments along rectangle boundaries; the published contour-logarithm theorem supplies them directly. |
| `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains` | `9e6aad602dc12eef0c0ef47fc8390a158e3aa4a6877496a1c8a2472bf3cfb455` | `confirmed_nonfatal` | The identity-class fact needs the adjacent fundamental-group-laws result rather than only the definition. The proof is otherwise correct. |
| `prop-divisor-functions-under-dirichlet-convolution` | `2ec65b9f7573f944d69568c1efeae667f741a5589b68abe9ea3dfe1155a26334` | `confirmed_nonfatal` | Step 1.1 omits the elementary divisor involution `d -> n/d`. The identities are correct. |
| `rem-analytic-equivalences-from-global-cauchy-theory` | `de8295f9407507127fee6814af110e3557e693663bbe61eafe7fcacb7ee85853` | `confirmed_fatal` | The title falsely said the earlier page equated homological simple connectivity with the root property although the cited root result was one-way. Repaired title and prose preserve the directions exactly. |
| `thm-dvr-ideal-and-module-length` | `390b7101e1a39a98f79e2b27a6c3276ee21ae5b32d7c9df9ab18b730785751d3` | `false_positive` | The cited definition explicitly states that the zero module has the empty composition series and length zero; step 1.1 is licensed. |
| `thm-grand-equivalence-for-simply-connected-plane-domains` | `cb1dc4f55c41373852408ca295d0f157b58547dd97986a898750dabe1403f66d` | `false_positive` | The cited normalized-argument corollary explicitly states that the argument increment is an integer multiple of `2pi`; the divisibility inference is licensed. |
| `thm-homotopy-invariance-of-holomorphic-line-integrals` | `ebfe76369e4d900effea032a60ecba777049a9217bf322abc6b64549c0bc6671` | `confirmed_fatal` | The proof's definition of the top path made the boundary equation and comparison with `gamma_1` have incompatible orientations. Repaired by defining `P_1` forward and reversing it only as part of the outer boundary. |
| `thm-noetherian-valuation-ring-characterisation` | `181e8421e0e8f8897a949bb67bf43c9aabed7ba64597aef11a406bd11d9462b9` | `false_positive` | `[F1]` is a tautological pointer to the exact published definition; `[L2]` supplies the only substantive equivalence used. No mathematical claim is misstated. |
| `thm-null-homology-is-equivalent-to-global-harmonic-conjugates` | `033715dd0a87eaaef19e21785e9a1bc7f99cb9a79e09e57d69c606608e297a40` | `confirmed_nonfatal` | The exponential-modulus identity used in step 2.1 is true but not among the locally summarized citations. This is missing citation support, not a false theorem. |
| `thm-von-mangoldt-divisor-sum-identity` | `efad55af030a6c265b5b9af50fc86c916dd10974d41074c467fe6ac8f7d85eec` | `confirmed_nonfatal` | The convolution form needs the elementary divisor involution `d -> n/d`; the identity is correct. |

## Repairs and rejudge targets

The following six owned items changed under exact pre-edit guard hashes and require targeted rejudgment:

1. `cor-winding-number-classifies-loops-in-the-punctured-plane`
2. `def-liouville-function`
3. `def-mertens-function`
4. `def-valuation-on-a-field`
5. `rem-analytic-equivalences-from-global-cauchy-theory`
6. `thm-homotopy-invariance-of-holomorphic-line-integrals`

Each has one matching `confirmed_fatal` adjudication and one matching defect-ledger row. No nonfatal or false-positive item was edited.

## Sources consulted

No web lookup was needed because the mathematical points were resolved by exact published dependencies already on disk:

- `def-based-loops-and-fundamental-group`: fundamental-group loops are arbitrary continuous loops.
- `def-winding-number-closed-complex-contour`: analytic winding number is defined for closed rectifiable contours.
- `thm-winding-number-equals-circle-degree`: for a rectifiable loop, analytic winding number equals normalized-loop degree.
- `cor-geometric-unit-circle-has-fundamental-group-z`, `thm-punctured-rn-deformation-retracts-onto-the-sphere`, and `prop-retracts-inject-fundamental-groups`: radial normalization followed by degree gives the total isomorphism on all loop classes.
- `thm-canonical-prime-factorisation`: a covering injective prime list may include primes with exponent zero, while the valuation attached to each named prime is unique.
- `thm-homological-simple-connectivity-equivalences`: the equivalence list contains primitives, periods, and holomorphic logarithms, but no root clause.
- `cor-holomorphic-roots-homologically-simply-connected-domains`: homological simple connectivity implies roots of every positive order; it does not state the converse.
- `def-simply-connected` and `thm-convex-subsets-have-trivial-fundamental-group`: simple connectivity has a choice-free topological definition and convex subsets satisfy it directly.
- `cor-winding-number-is-the-normalized-argument-increment`: the argument increment is explicitly an integer multiple of `2pi`.
- `def-composition-series-and-length-of-a-module`: the zero module explicitly has the empty composition series and length zero.
- `def-dirichlet-convolution`: convolution uses `g(n/d)`, with the divisor involution reconciling the two standard divisor-sum forms.

## Alerts

No incoming alert required disposition, and no defect was found in another group's item.

## Checks

- Focused precheck on the six repaired items: 2 proof-bearing items checked, 0 failures; the four definition/remark items correctly required no proof precheck.
- `node tools/depcheck.mjs --quiet`: passed with repository-wide warnings only.
- `node tools/step8-scope.mjs check --run frontier-25`: passed; 4 groups, 381 items, 0 open rejections, 0 cross-group alerts.
- `node tools/defect-ledger.mjs validate --run frontier-25`: passed; 129 rows, 0 errors.
- Step-8 guard: passed after the other groups completed their append-only adjudications; all 63 whole-level Step-8 changes were licensed by exact confirmed-fatal rows or terminal resolutions.

## Blockers

None.
