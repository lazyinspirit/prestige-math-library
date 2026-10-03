# Step 3a scope review — pair `frobenius-characteristic-and-the-symmetric-group-character-dictionary`

- Run: `frontier-38-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-frobenius-characteristic-and-the-symmetric-group-character-dictionary-0bdf9f81d6b8ab12`
  (the earlier identical dispatch `-9e1de04089a94ad6`, task file dated
  2026-10-03 01:09, left no report or scope receipt).
- Role: alpha (scope reviewer only — not owner, not item author).
- A page: `frobenius-characteristic-and-the-symmetric-group-character-dictionary`
  (batch 18, order 801, 12 items: 3 definitions, 4 lemmas, 2 theorems,
  1 corollary, 2 propositions; `requires` = the published pages
  `symmetric-functions-hall-inner-product-and-schur-bases`,
  `specht-modules-and-the-irreducibles-of-the-symmetric-group`,
  `characters-and-the-orthogonality-relations`,
  `the-branching-rule-and-the-young-graph`).
- B page: `frobenius-characteristic-and-the-symmetric-group-character-dictionary-examples`
  (batch 18, order 802, 4 items: 3 examples, 1 counterexample; `requires` =
  the A page only).
- Decision: **`sufficient`** — recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-38-owner-30
  --page frobenius-characteristic-and-the-symmetric-group-character-dictionary
  --decision sufficient`.
- Date: 2026-10-03. This report decides scope only. It is not an item
  approval, not a proof judgement and not an owner record. No scaffold,
  manifest, coverage, plan or library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: SYMR-2 in
`research/symmetric-group-planning/proposed-inventory.md` lines 39–65
(A table lines 43–56, B table lines 60–65); the track summary
`research/plan-symmetric-group-representations-track.md` line 33 ("isometric
character/symmetric-function dictionary"), the published-supplier paragraph
lines 90–96 (SYMR-2 imports RG-10 Young's rule and RG-9 Specht content at
item level) and the outer/internal convention at line 137; the planning main
review `research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md`
line 44 and its SYMR-2 section lines 174–186, which require (i) the
Young's-rule plus Kostka-unitriangular comparison so the Specht/Schur labels
are identified (orthonormality alone permits a permutation of labels) and
(ii) the separation of the rational class-function map from its integral
restriction; registry `research/plan-spec.json` orders 801/802 (empty item
inventories pre-splice; `requires`/companion match the manifest); run scope
`research/frontier-38-owner-30-scope-ledger.json` (pair present, batch 18);
Step-1 drift verdict for this pair: **no-drift**
(`research/frontier-38-owner-30-alpha-step1-drift.md` lines 55–58 — the only
authoring correction is the $\Lambda_{\mathbb C}$ codomain of $\operatorname{ch}$,
which the drift review determined and which is not a scope change).
Constructed scaffold: `frontier-38-owner-30-batch-18.pages.json`, coverage
`frontier-38-owner-30-batch-18.coverage.json`, notes
`frontier-38-owner-30-batch-18.notes.md`.

Intended subject: the Frobenius characteristic as the isometric graded ring
isomorphism $\operatorname{ch}:R_S\to\Lambda$ carrying outer induction to
multiplication; $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for the Specht
characters; the value dictionary $\chi^\lambda(\rho)=\langle s_\lambda,p_\rho\rangle$
(equivalently the coefficient of $p_\rho/z_\rho$); $\operatorname{ch}$ of a
Young permutation character equal to $h_\lambda$; sign twist equal to the
$\omega$ involution; the regular character equal to $p_1^{\,n}$ with its Schur
expansion; plus four finite B-page computations (the complete $S_3$ and $S_4$
convention checks, the $M^{(2,1)}$ check, and the outer-versus-Kronecker
boundary counterexample).

Role in the library (supplier). Per `plan-spec.json` the pair is required by
`outer-products-skew-specht-modules-and-littlewood-richardson` (803),
`rim-hooks-and-the-murnaghan-nakayama-rule` (804),
`kronecker-coefficients-and-internal-products` (823),
`character-polynomials-fi-modules-and-representation-stability` (825) and
`plancherel-measure-and-asymptotic-young-diagrams` (829), all in the SYMR
track; the inventory rows declare the exact imports: the outer product and
the isomorphism theorem for SYMR-3's ring/Hopf rows (lines 77–87), the Specht
dictionary and outer product for SYMR-4's determinantal-character row (line
107), `def-frobenius-characteristic-map` for the internal product (lines
388–389), `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients`
for the shifted-character observables (line 479) and
`def-outer-induction-product-for-symmetric-group-characters` for the free
FI-module (line 418). Every one of those ids is present in the scaffold. No
other batch of this run consumes any of the 16 items (mechanical scan; §4).

## 2. Design-to-manifest mapping

All 12 designed A claims and all 4 designed B claims are represented, in
design order, with the designed kinds:

| # | A item (kind) | design row | note |
|---|---|---|---|
| 1 | `def-graded-ordinary-representation-ring-of-symmetric-groups` (def) | inventory L45 | graded abelian group; multiplication deferred to the outer product |
| 2 | `def-outer-induction-product-for-symmetric-group-characters` (def) | L46 | block Young subgroup; outer/internal distinction stated |
| 3 | `def-frobenius-characteristic-map` (def) | L48 | codomain $\Lambda_{\mathbb C}$ per drift; rational case $\Lambda_{\mathbb Q}$; integrality proved, not assumed |
| 4 | `lem-complete-homogeneous-expansion-in-power-sums` (lem) | — | local prerequisite added for the route (see deviation 3) |
| 5 | `lem-frobenius-characteristic-is-an-isometry` (lem) | L49 | sesquilinear Hall form; class sizes $n!/z_\rho$; injectivity |
| 6 | `lem-characteristic-of-a-young-permutation-character-is-complete` (lem) | L50 | $\operatorname{ch}(\varphi^\lambda)=h_\lambda$ |
| 7 | `lem-frobenius-characteristic-preserves-outer-products` (lem) | L51 | $\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\operatorname{ch}(g)$ |
| 8 | `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism` (thm) | L52 | integrality via Young + Kostka, surjectivity via $h_\lambda$, isometry |
| 9 | `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions` (thm) | L53 | labelled dictionary, integral values |
| 10 | `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients` (cor) | L54 | $\chi^\lambda(\rho)=\langle s_\lambda,p_\rho\rangle$ |
| 11 | `prop-sign-twist-corresponds-to-the-omega-involution` (prop) | L55 | $\omega$-conjugation and $S^\lambda\otimes\operatorname{sgn}\cong S^{\lambda'}$ |
| 12 | `prop-regular-character-has-characteristic-p-one-to-the-n` (prop) | L56 | $p_1^{\,n}=\sum_\lambda f^\lambda s_\lambda$; RSK cross-check, not re-proved |
| B1 | `ex-frobenius-characteristic-dictionary-for-s3` | L62 | full $S_3$ table from power-sum coefficients |
| B2 | `ex-young-permutation-characteristic-for-shape-two-one` | L63 | fixed-point count and Schur expansion |
| B3 | `ex-sign-twist-conjugates-the-s31-character` | L64 | $S_4$ convention check |
| B4 | `cex-outer-induction-is-not-the-kronecker-product` | L65 | degree/product boundary |

Design conflicts recorded in the batch notes were checked against the
manifest and are scope-preserving:

1. **Codomain** — the design's unqualified $\Lambda_{\mathbb Q}$ codomain for
   arbitrary complex class functions is false; the drift review's
   $\Lambda_{\mathbb C}$ correction is load-bearing and is carried in the
   definition, with the rational case stated and the integral restriction
   proved in the theorem. No designed claim is weakened.
2. **One designed row replaced by published content** — the proposed
   `lem-centralizer-order-for-a-symmetric-group-cycle-type` (L47) was not
   scaffolded because the same claim ($|C_{S_n}(\sigma)|=\prod_k k^{c_k}c_k!$)
   is published as `thm-centralizer-cardinality-from-cycle-type` on
   `conjugacy-and-simplicity-in-the-symmetric-groups`, inside this page's
   requires closure; `def-frobenius-characteristic-map` depends on it
   directly. No claim loss, no duplicate minting.
3. **One local prerequisite added** — `lem-complete-homogeneous-expansion-in-power-sums`
   supplies $h_\lambda=\sum_\rho N(\lambda,\rho)\,p_\rho/z_\rho$
   (Macdonald (2.14′) generalised, cycle-distribution coefficients $N$), the
   expansion actually used by the Young-permutation lemma and by both B-page
   expansions; the design's alternative supplier
   `thm-cauchy-kernel-has-power-complete-and-schur-expansions` is published
   and gives only the kernel form. The addition is ordered before its
   consumers and is justified by the owner direction's local-prerequisite
   rule.
4. **Dependency retargeting to actual suppliers** — the Specht/Schur theorem
   now depends on the published `thm-youngs-rule-for-permutation-modules` and
   `lem-kostka-change-of-basis-is-dominance-unitriangular` and performs the
   labelling comparison the planning main review demands; the design's
   `def-partition-young-diagram-and-conjugate-partition` edge on the graded
   ring was dropped as unused. This is the exact closure the main review
   required, not a scope reduction.
5. **B rows extended, not weakened** — the four designed computations are
   present; the $S_3$ and $S_4$ rows additionally carry the Jacobi–Trudi,
   $\omega$ and power-sum-expansion dependencies they need to actually
   compute.

Orders, companion pointers and both `requires` lists match `plan-spec.json`
and the scope ledger; page sizes 12 and 4 are far below the 100-item ceiling.

## 3. Source coverage

`frontier-38-owner-30-batch-18.coverage.json` carries one page entry with
3 fetch-stamped sources and 28 harvested rows, all disposed: 7 `included`,
6 `inline`, 6 `already-published`, 9 `deferred`, each deferral with a
specific reason and a live destination page in `plan-spec.json`:

- Macdonald I §7 (7.1)–(7.13), Examples 1–3, printed pp. 112–117, and (2.14′)
  printed p. 25 (486-page PDF, SHA-256 prefix `64e242b84d1f3b78`): the
  primary treatment. Deferred: (7.4) determinantal characters →
  `rim-hooks-and-the-murnaghan-nakayama-rule`; (7.9) two-alphabet product and
  (7.10)–(7.13) internal product → `kronecker-coefficients-and-internal-products`;
  Example 3 skew characters →
  `outer-products-skew-specht-modules-and-littlewood-richardson`.
- G. D. James §6 printed pp. 22–26 and §16 printed pp. 60–64 (161-page
  Springer scan): independent character-theoretic check; §16 and Theorem 6.2
  deferred to the SYMR-3/SYMR-4 pages named above.
- Peter Webb §3.2 printed pp. 27–30 and §4.3 printed pp. 54–58: independent
  general finite-group treatment; all five rows `already-published` into
  `characters-and-the-orthogonality-relations` and
  `induced-representations-and-frobenius-reciprocity`.

No deferred row is needed by any designed claim of this pair (the page is the
outer-product/isometry dictionary; the internal product and skew characters
are the commissioned content of the destination pages, whose own `requires`
point back at this pair). The single advisory
`coverage-low-yield` (7/28 included) is explained by that disposition mix,
which the batch notes already justify.

Mechanical checks re-run on the delivered artifacts (observed results):

- `node tools/coverage-checklist.mjs ...batch-18.coverage.json --require-destination`
  → 1 page, 28 results, 0 errors, 1 warning (`coverage-low-yield` as above),
  exit 0.
- `node tools/source-fetch-check.mjs --coverage ...batch-18.coverage.json`
  → 3/3 fetch-verified, 3/3 resolved, exit 0.
- `node tools/manifest-deps.mjs ...batch-18.pages.json` → 16 items, 0
  missing, 0 errors.
- `node tools/content-policy.mjs --manifest-only ...batch-18.pages.json` →
  16 scoped items, 0 errors, 0 warnings.

I did not re-download or re-read the three full PDFs in this review; I
verified the fetch stamps and dispositions, read the published supplier items
at statement (and, where the route turns on them, proof) level, and checked
the manifest statements/strategies and the B-page arithmetic directly. The
scope assessment below does not rest on a fresh proof re-verification.

Minor observation (authoring detail, not a coverage omission): batch-18 item
`sources.references` carry title and URL but no `locator` field, while the
page coverage carries the exact locators above. The owner direction asks for
precise locators when items are authored; Step 3b should attach them. Several
sibling batches (6, 7, 8, 10, 16, 17, 19) share this trait, so it is a
run-wide authoring step rather than a defect of this pair's scope.

## 4. Prerequisite examination (unmet-prerequisite check)

All 48 distinct `deps` ids across the two pages resolve mechanically: 11 are
this pair's own in-run items and 37 are published item files, every one
`status: published`, none a `proved_here: false` Recorded result. The
published hosts were checked to lie inside the A page's transitive
`requires` closure computed over `research/plan-spec.json` with
`tools/plan-manifests.mjs` (192 pages); all 42 `[[...]]` targets appearing in
the 16 statements/strategies also resolve to scaffold items or
published-in-closure items. The load-bearing interfaces were opened and
checked for claim direction and conventions:

- `def-standard-inner-product-on-complex-class-functions`: $\langle\varphi,\psi\rangle=\frac1{|G|}\sum\varphi\bar\psi$,
  linear in the first argument — matches the isometry lemma's sesquilinear
  Hall extension.
- `def-hall-inner-product-on-symmetric-functions` (graded $\mathbb Z$-bilinear,
  $\langle h_\lambda,m_\mu\rangle=\delta$) and
  `cor-power-sums-are-orthogonal-for-the-hall-inner-product` (over
  $\Lambda_{\mathbb Q}$, $\langle p_\lambda,p_\mu\rangle=\delta z_\lambda$)
  — match the definition, isometry and corollary.
- `prop-power-sums-form-a-rational-not-integral-stable-basis` ($p_\lambda$ a
  $\mathbb Q$-basis only) — supports well-definedness and the rational case.
- `thm-centralizer-cardinality-from-cycle-type` ($z_\rho$ as centralizer
  order) with `thm-conjugacy-class-cardinality` and
  `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types` — supports
  class sizes $n!/z_\rho$ and the well-defined evaluation $f(\rho)$.
- `thm-youngs-rule-for-permutation-modules` together with
  `lem-kostka-change-of-basis-is-dominance-unitriangular`
  ($h_\mu=\sum_\lambda K_{\lambda\mu}s_\lambda$, lower unitriangular over
  $\mathbb Z$) — exactly the labelled-dictionary joint demanded by the main
  review; `thm-elementary-and-complete-families-freely-generate-the-stable-ring`
  (the $h_\lambda$ basis) supplies surjectivity and integrality.
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`,
  `prop-omega-conjugates-schur-functions` ($\omega(e_r)=h_r$,
  $\omega(p_r)=(-1)^{r-1}p_r$, $\omega(s_\lambda)=s_{\lambda'}$) and
  `thm-cauchy-kernel-has-power-complete-and-schur-expansions` — the
  determinantal, involution and kernel facts used by the corollary, the
  sign-twist proposition and both B-page expansions.
- `thm-frobenius-formula-for-induced-characters`,
  `lem-young-permutation-module-is-induced-from-the-trivial-character`,
  `thm-character-of-a-permutation-representation-counts-fixed-points` — the
  induction, Young-module and fixed-point suppliers of the multiplicativity
  lemma, the Young-permutation lemma and the counterexample.

Cross-pair records: `frontier-38-owner-30-batch-18.cross-batch-dependencies.json`
is `[]`; the unified `frontier-38-owner-30-cross-batch-dependencies.json`
reviews all 30 batches and its 79 edges contain none touching either page or
any of the 16 item ids; a direct scan of the other 29 batch manifests finds no
consumer of this pair's ids. No consumer pair of §1 is built yet, but each
declared import matches an item present in this scaffold.

**No unmet prerequisite was found.** Confirmed gaps: none. Residual
uncertainty carried forward (none blocking scope):

1. **Plan-reference drift in a future SYMR-4 row (confirmed, not this
   pair's defect).** `proposed-inventory.md` line 114 lists the planned
   SYMR-4 item `thm-triangular-fixed-tabloid-reconstruction-of-the-character-table`
   with dep `lem-centralizer-order-for-a-symmetric-group-cycle-type`, an id
   this pair deliberately did not mint (deviation 2 above). The required
   claim is *not* absent: it is published as
   `thm-centralizer-cardinality-from-cycle-type`. Recommendation for the
   owner/plan: when SYMR-4 is scaffolded, retarget that dep to the published
   theorem. No scaffold addition is needed on this pair.
2. **Possible undeclared edge in `prop-sign-twist-corresponds-to-the-omega-involution`
   (uncertain).** Its strategy concludes $S^\lambda\otimes\operatorname{sgn}\cong S^{\lambda'}$
   from equal characteristics via "characters determine representations";
   read literally that uses injectivity of $\operatorname{ch}$ (scaffolded in
   `lem-frobenius-characteristic-is-an-isometry` and in the isomorphism
   theorem), which is not in the proposition's `deps`. The injectivity-free
   alternative — direct value comparison
   $\chi^{\lambda'}(\rho)=(-1)^{n-\ell(\rho)}\chi^\lambda(\rho)$ through the
   scaffolded corollary — also completes the claim. Fact present either way,
   so this is not an unmet prerequisite; Step 3b should declare the edge or
   use the direct route.
3. **Item-level locators** as in §3: recommend Step 3b attach the coverage
   locators to each item's `sources.references`.

## 5. Scope decision

The planned definitions, results and examples adequately cover the intended
subject SYMR-2 orders this pair: the characteristic map with its exact
complex/rational/integral coefficient behaviour, the isometric graded ring
isomorphism, the complete-homogeneous and labelled Specht/Schur dictionary
with the Young-rule/Kostka labelling argument, the power-sum coefficient
corollary, the $\omega$/sign-twist and regular-character consequences, and
the four designed finite computations and boundary counterexample. The
deliberate exclusions (determinantal characters, skew characters, internal
product, two-alphabet product) are disposed to live planned pages with
reasons and are not needed by any designed claim here. Source coverage is
complete, fetch-verified and fully disposed; every prerequisite is published
or local to the pair, and the local prerequisite is ordered before its
consumers. Nothing designed was dropped, renamed to another claim or
weakened. Decision: **`sufficient`**. No owner action is requested; the only
carried items are the three non-blocking notes in §4.
