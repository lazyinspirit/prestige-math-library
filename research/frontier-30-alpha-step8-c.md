# Frontier-30 Step-8 adjudication — group c

Adjudicated all 27 exact rejections for batches 3, 5, and 6: 14
`confirmed_fatal`, 13 `confirmed_nonfatal`, and 0 `false_positive`. Only the 14
fatal items were edited. Each fatal has one matching
`frontier-30-A8-c-*` defect-ledger row and is a targeted rejudge item.

## Sources consulted

- [F. Riesz, *Sur l'existence de la dérivée des fonctions monotones et sur
  quelques problèmes qui s'y rattachent*](https://real.mtak.hu/214055/1/math_005_208-221.pdf),
  Section 2: the shadow set is open, each component satisfies the rising-sun
  endpoint inequality, and the proof needs a genuine last/maximal-point
  argument. This supports the adjudication and repaired proof of
  `thm-riesz-rising-sun-lemma`.
- [T. Tao, *An Introduction to Measure Theory*](https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf),
  Lemma 1.6.17 and its proof: the component endpoints lie outside the shadow
  set and satisfy equality except possibly at the initial endpoint. This is an
  independent authoritative check of the same repaired rising-sun claim.
- [D. Potts, G. Steidl, and M. Tasche, *Numerical Fourier Analysis*](https://users.math.msu.edu/users/iwenmark/Teaching/MTH994/Numerical-Fourier-Analysis-Birkhauser-2018.pdf),
  Theorem 1.42: for a general piecewise continuously differentiable periodic
  function, the partial sums at distance $2\pi/(2N+1)$ to the right of a jump
  converge to the right limit plus
  $(\operatorname{Si}(\pi)/\pi-1/2)$ times the jump. This supplies the exact
  general claim and normalization used in the Gibbs repair.
- [B. S. Thomson, *Vitali Coverings and Lebesgue's Differentiation
  Theorem*](https://classicalrealanalysis.info/documents/Thomson-RAE2003-euclid.rae.1149698567.pdf),
  Sections 2 and 4: fine covers use finite closed intervals $[x,y]$ with
  $x<y$, and the Vitali argument restricts them to an open finite-measure
  envelope. This supports the bounded-interval correction and confirms the
  local outer-regularity bridge in the nonfatal Vitali-theorem rejection.
- On disk, all six owned pages, all 77 owned items, and every dependency touched
  by a rejection were opened. In particular, the published derivative,
  one-sided-limit, monotonicity, choice, Cantor-function, Stieltjes-measure,
  product-measure, expectation, and Fourier interfaces were checked directly.

## Exact adjudications

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | basis / repair |
|---|---|---|---|---|
| `cor-second-borel-cantelli-lemma-under-pairwise-independence` | `050c78df129c84dc31e83f73b77d460b99d032011dc2dc52794990d0c24d51f6` | `f8666e23343d05f5bc1d57deedb093d06d69bb58be27055676708e14658e7529` | `confirmed_nonfatal` | Removing or reindexing the single event $A_0$ transfers the stated $n\ge1$ frequency law immediately; the corollary and unbounded-count argument are correct. |
| `def-four-dini-derivatives-at-a-point` | `7f48dedfc544a333f98468334f26f3fabb06b29b847bc1a04fc20ba31b6fbcf4` | `d5849d9d41415fb024301a0bfe1492eb975a6110e0e3581bee2a6e83f453082a` | `confirmed_fatal` | Repaired: the derivative-to-four-Dini-values sentence now requires an interior point. Defect `frontier-30-A8-c-001`; rejudge target. |
| `def-jump-function-of-an-increasing-function` | `107b5f5fb99a4842851e734299470b117bbba4cd7ce410580986c425bc498d81` | `1127f4da780b416f7fe11858cee69bf084b22b4f9cce3614d7e612833b2074f8` | `confirmed_fatal` | Repaired: the definition assumes $a\le b$ and sets $\beta_a=0$ on the singleton interval. Defect `frontier-30-A8-c-002`; rejudge target. |
| `def-vitali-cover-and-fine-cover-on-the-line` | `a3199e4706cdfb7dcbc8feebe45ef9a5ce6f2dfbb2a54036a9abc37cd2106e79` | `c603b0ff1056074ddd067f287fe1c5ed452906adbc5df85930bb934d725ef88e` | `confirmed_fatal` | Repaired: members are now bounded closed nondegenerate intervals, so every displayed length is defined. Defect `frontier-30-A8-c-003`; rejudge target. |
| `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series` | `cba0f10c6fe1c64532c3558559c3be9be22b42b2c43fbadcdf044021250e001d` | `063cbd57fc20c38eebc4402e9c77924e61485a82e386a9142433ef59bab8f919` | `confirmed_fatal` | Repaired: the Example and Given data assume Countable Choice, and the proof now cites the published Cantor continuity and nullity interfaces. Defect `frontier-30-A8-c-004`; rejudge target. |
| `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one` | `277137afec9a09f5e19438358c5a9bc55987459c7bde79f1e64dae04119b6ee2` | `998d1468b90c899405497ff2ec16a0d6a96aa78c532668d303c65584fde6fc91` | `confirmed_fatal` | Repaired: the Cantor function is called nondecreasing, not strictly increasing. Defect `frontier-30-A8-c-005`; rejudge target. |
| `ex-jump-and-continuous-parts-of-x-plus-rational-jumps` | `2e26d3587da140bd8841eb8065f666c99a5668c70950dc5e82faddd3534c88d6` | `6bfd50301b37ecb0c913da81af088207a433969c378ec469ea13b674b2b18726` | `confirmed_fatal` | Repaired: the rational enumeration is required to have no repetitions, making each jump weight exact. Defect `frontier-30-A8-c-006`; rejudge target. |
| `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere` | `71f50ff4969212a1d423a4bd27a7459162dd220abb434310644973bcf0c867f9` | `127d3a6816c5427f72084bc3dd58db1d641f43f79bf4fbe23bafa25605470160` | `confirmed_fatal` | Repaired: Countable Choice is assumed before the derivative-zero theorem is invoked; the enumeration is also made repetition-free. Defect `frontier-30-A8-c-007`; rejudge target. |
| `ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values` | `04cf4c96ec685b56e285f417844d06c02a19e427a523ff7a370b69e86538b8ae` | `25b11ff6d30c3039fd9704a339308ef8754d4cd4d7c2df624801b901dd1edcea` | `confirmed_fatal` | Repaired: the title now says the four quantities take two distinct values. Defect `frontier-30-A8-c-008`; rejudge target. |
| `ex-zero-one-law-for-convergence-of-a-random-series` | `f8f24706675cb6566841e6ade5e3c10474c3ea5423ef3a0dbf1b0bdf6528ab01` | `a47dba6581d814d5cadcd46b8a639f3d563612c0c3a536c42f8c6f76d41fe38f` | `confirmed_nonfatal` | The dependency's statement is exactly the displayed zero-one conclusion and its proof establishes tail membership; the Example only overcompresses this into L1. |
| `fs-bounded-variation-implies-absolute-continuity` | `65402c057f13c3e64c4c0acb0d2baa64fc988cca6d6bb7ffb0eca421ae4219bb` | `ad2e8e6dd4f46ad2bed06ea64bb7383f38071725a5f88102364ab4cd266863e0` | `confirmed_fatal` | Repaired: step 1.1 uses the cited nondecreasing property, which is exactly what telescopes the variation sum. Defect `frontier-30-A8-c-009`; rejudge target. |
| `fs-every-increasing-function-satisfies-newton-leibniz` | `b3e83d360705870c60ead8ba4764c510ab12f2c90dcea667b8cb15789f02a212` | `cf5f978df62d3a5b14014b7923fb882f535c5c4f6739aeca543d179acf9ebc0d` | `confirmed_nonfatal` | The published Cantor-continuity corollary supplies the omitted one-line dependency bridge; the constructed witness and refutation are otherwise correct. |
| `rem-dini-derivatives-specialise-the-published-derivative` | `ad5bdffe94a5a683b12ac89d369176c6bd0f356680b83e69fbbf199eeebb3717` | `f6b59b5c1ec82fe86073848cb8140536e0b6133553a1e95c9f08b01db603c964` | `confirmed_fatal` | Repaired: four-way agreement is restricted to interior points, with the relative-domain endpoint convention stated separately. Defect `frontier-30-A8-c-010`; rejudge target. |
| `rem-gibbs-phenomenon` | `5a8686d366c1acad615fadbfd0775837e0e62f2f077420a5b35f17917e713d96` | `b61e2a6e4a81f8cf0feea6d07266a98aea4cc226327ccef36e1f45148de1dcb6` | `confirmed_nonfatal` | The Poisson midpoint conclusion follows immediately from the preceding Fejer midpoint theorem and Cesaro-implies-Abel theorem; the remark omits those direct links but its comparison is true. |
| `thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun` | `3d74584071da9c6dbe81ff98cbbeeaa00524b6da3be86c930c6518fe8b7dca74` | `8d80d455cdd6dbc10ece0d7395537c3e6c83d5f36e8e0f76d8d6bac6d3266afb` | `confirmed_nonfatal` | Negating the reflected function makes it nondecreasing and interchanges the relevant left/right Dini quantities. This is an immediate sign correction. |
| `thm-factorization-of-expectations-for-independent-variables` | `4477170e8c61b7364f9687f624341ab8f07d4679a4f5a01d77dc4e86afb69b66` | `b74fcfda1d43c6c30831db5803f2823670b86ae185aa07ae86b102e8261881a9` | `confirmed_nonfatal` | Replacing the product map by $\prod_i\max(y_i,0)$ gives a globally nonnegative measurable map equal on the joint law's support, so Tonelli applies immediately. |
| `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` | `ae288b53cf7309883127311d47d6491cba0fb832265fe0a01118db0e766630e5` | `9427547c0cc79e41693a8baefae7a38f2b31a9094c072f71806df486977c95cf` | `confirmed_fatal` | Repaired: the false periodic half-step identity and invalid continuous-remainder claim are replaced by the exact general piecewise-$C^1$ Gibbs theorem, with point-value and period normalization checked. Defect `frontier-30-A8-c-011`; rejudge target. |
| `thm-increasing-functions-split-uniquely-as-jump-plus-continuous` | `293b52245b02c36fc03aa2a78357c639d15799ec3b3c364885508786c085f27a` | `850bed3ad27396c98e44b478e4b7c61ca72f3824d1ea223f275997c1101f1290` | `confirmed_fatal` | Repaired: the series, determining data, and endpoint proof include the left jump at $b$; the singleton interval is handled separately. Defect `frontier-30-A8-c-012`; rejudge target. |
| `thm-independent-random-elements-have-product-joint-law` | `67a3b86f9ab19d75274da9aa443c11ef400aac40971875a03db99493a2ce96d0` | `3214d6eff43280eb0bc6ed6fed19035a59757b4771a8414a44fc5db942a10262` | `confirmed_nonfatal` | A one-line induction on the recursive finite-product definition shows that full $n$-fold rectangles generate it; the product-law proof is correct. |
| `thm-jump-functions-have-derivative-zero-almost-everywhere` | `109bafde17711c9749b5b10724c5784ca3be1d411ac593fbac13aab2241d9a06` | `835f881b92b30394658561a25ad208830f4991463d054d52f80224a47e065888` | `confirmed_nonfatal` | Indexing the at-most-countable set by a subset of $\mathbb N$, as the preceding theorem does, removes repetitions and makes the discrete measure finite. This is an immediate local correction. |
| `thm-mini-vitali-fine-cover-characterisation-of-null-sets` | `24948a4fc64df075c4e400cc5ac980dd260ca82dad57c0c1199c00255a2aca2c` | `9c927958a718ba37f61e04f7df0be97e166e34cc6d300fff64c1747053c905af` | `confirmed_fatal` | Repaired: the Statement and Given data assume Dependent Choice, which supplies the full Vitali theorem used in step 1.1. Defect `frontier-30-A8-c-013`; rejudge target. |
| `thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures` | `72cb22c3fe77ebb990aa757af8012ae27f647a3a14eeb142c281873c7a87a17a` | `78374a048ecc73e3e89af4c20cfbb2cd1f97605b35a8b21ec96696d745ef3f93` | `confirmed_nonfatal` | The constant extension of $C_F$ outside $[a,b]$ is nondecreasing, continuous, and has a finite Stieltjes measure; this one-sentence bridge makes the real-line interfaces apply. |
| `thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions` | `41d3628a967594ecaa804462498436e980f5ec14fc0a49154068b5c5f520e1c4` | `da332f1a1346735bb63a1c1721efd0896a7efa132158b6fa630574e1cb04a6d9` | `confirmed_nonfatal` | Rising sun applied to the negative of the reflected $H$ gives the displayed bound. The omitted minus sign is an immediately closable proof step. |
| `thm-riesz-rising-sun-lemma` | `a636776a3715a9535a3d79b60e7522941aa3927338393c24ca2b7f2d432e0612` | `79875e4a747120c4d60fe85f27b32b9259e55231932794a337acb3048fd7685f` | `confirmed_fatal` | Repaired: the invalid continuity inference is replaced by an extreme-value argument locating a maximizing point outside the shadow component. Defect `frontier-30-A8-c-014`; rejudge target. |
| `thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous` | `59996addf81baa3ecca2fd5247a3004e8bf05ccd1050a6883553d0ea7d1da64b` | `d4fe1c50ad776f3b0dfd29fd1498b4261ae10be23f5a1fcd83b550cbbb137f9a` | `confirmed_nonfatal` | Extending $F$ constantly outside $[a,b]$ gives a nondecreasing right-continuous real-line function with a finite Stieltjes measure. This is an immediate domain bridge. |
| `thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase` | `72abaa7d088875f7fcb060b6a08c4ac2a22f622bbd2b45445071aba5b3d0ae8d` | `a66895b22efdc0dbf2b5a513d62d10c57d5c3fed4f8772f965026efbd5251d9b` | `confirmed_nonfatal` | Defining $g=\liminf h_n$ first gives a total nonnegative measurable representative equal to $F'$ wherever the derivative exists; Fatou then applies directly. |
| `thm-vitali-covering-theorem-for-fine-covers-on-the-line` | `ea44d5af24a6c83073d7cbb997d2194e05797989c59a6377fe6cecc712a6a4a2` | `159207473a34fe0a3ecfb474e54d5e50fba7d739c7c03c24efc2357559a8d3ed` | `confirmed_nonfatal` | The published outer-regularity theorem supplies the finite-measure open envelope and the published Lebesgue-measure interface supplies $\lambda$; adding those direct dependencies closes step 1.1 immediately. |

## Repairs and rejudge targets

The engine should rejudge exactly these 14 changed items:

- `def-four-dini-derivatives-at-a-point`
- `def-jump-function-of-an-increasing-function`
- `def-vitali-cover-and-fine-cover-on-the-line`
- `ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series`
- `ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one`
- `ex-jump-and-continuous-parts-of-x-plus-rational-jumps`
- `ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere`
- `ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values`
- `fs-bounded-variation-implies-absolute-continuity`
- `rem-dini-derivatives-specialise-the-published-derivative`
- `thm-gibbs-overshoot-at-a-piecewise-c-one-jump`
- `thm-increasing-functions-split-uniquely-as-jump-plus-continuous`
- `thm-mini-vitali-fine-cover-characterisation-of-null-sets`
- `thm-riesz-rising-sun-lemma`

No published item was repaired. No incoming alert existed, and this
adjudication produced no cross-group alert.

## Checks and blockers

- Focused precheck: all 10 repaired proof-bearing items passed.
- Focused rendercheck: all 14 repaired items passed YAML, wikilink/math,
  delimiter, and KaTeX checks.
- Group-c content policy: all 77 scoped items passed with 0 errors and 0
  warnings.
- Group-local fatal-only audit against the `pre-step8` snapshot: exactly the 14
  group-c fatal items changed; every pre-edit guard hash matches its fatal
  adjudication; no group-c nonfatal item changed.
- `node tools/step8-scope.mjs check --run frontier-30`: passed, with 7 groups,
  694 items, 106 then-open routed rejections, and 0 cross-group alerts on the
  final check.
- `node tools/defect-ledger.mjs validate --run frontier-30`: passed for 318 rows
  with 0 errors at check time. The subsequent whole-run defect/adjudication
  join was not yet green because other concurrent groups had not appended 40
  matching fatal defect rows; none belonged to group c.
- The required whole-run Step-8 guard was run. At that in-flight point it found
  158 changed items, of which 36 were licensed, and failed on 122 edits outside
  group c. The group-local audit above proves all 14 group-c changes are
  licensed; this dispatch did not alter or adjudicate the other groups' files.
- Repo-wide depcheck was also run and failed on one outside-group existing
  `b-leaf-content` edge from
  `ex-irrational-linear-foliation-of-the-two-torus` to
  `ex-the-torus-as-a-product-smooth-manifold`. It is outside batches 3, 5, and
  6 and was not changed here.
