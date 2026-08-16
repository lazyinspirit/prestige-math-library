# Step-0 prerequisite-drift review — run `frontier-15`

Alpha, 2026-08-16. Eight A pages, one per scope-ledger row. For each I read the
track design's own section for that page — located by its **label** (GA-1, MOD-4,
CA-4, MA-3, NT-3, MT-1, AG-4, HT-4) as well as by page id, because two of the
designs never write the page id inside the section that states its prerequisites
— and compared what the design says the page consumes against the transitive
closure of `research/plan-spec.json`'s declared `requires`.

**Method, and why the evidence file was not sufficient on its own.** For each
page I (a) read the design section in full, (b) extracted every published item id
the design names in it, (c) resolved each id to its owning page from the `items:`
and `examples:` lists in `library/*/*.md` — not from the design's claim about
where it lives — and (d) checked that owner against the closure. Two of the three
findings below are invisible to that mechanical pass: they are prose that names a
notion, not an id. The evidence file's `mentionedNearby` lists were read as a
reading list only; every entry that mattered is dispositioned in the section that
owns it.

Three spec edits applied, all backward, all recorded below. `validate-plan.mjs`
passes (exit 0, no errors). The edits introduce exactly one new
`redundant-prereq` WARN, on `the-group-algebra-and-representations`, which now
reaches `matrices-and-the-matrix-of-a-linear-map` transitively through
`the-fundamental-theorem-of-algebra`; that page is outside this run's scope and I
did not touch it.

---

### algebraic-closure-embeddings-and-separability

**Read:** `research/plan-algebra-track.md` §II.2 — §II.2.0 (block placement),
§II.2.1 "What the block stands on, verified item by item" (lines 2446–2518), and
the GA-1 section itself (lines 2520–2685). Also §II.1.b findings 7, 8 and 13, and
§II.13 (the outbound amendment ledger).

The design's stated `requires` line (line 2525) is
`algebraic-extensions-degree-and-finite-fields`, `order-zorn-and-the-axiom-of-choice`.
Both are already inside the closure — the first directly under the declared
`algebraic-extensions-degree-and-finite-fields-examples`, the second transitively.
So does the rest of §II.2.1's inventory: `polynomial-rings-and-roots`,
`field-extensions-and-the-complex-numbers`, `splitting-fields` (which the design
leans on hardest — normality is already published there), and the group-side
pages. The solvability and $S_n$ material §II.2.1 lists is GA-4's, not GA-1's;
nothing in GA-1's own item list touches it, so I added no edge for it.

**Two things GA-1 consumes are outside the closure.**

1. `def-algebraically-closed-field`. §II.2.1 lists it under "From linear algebra,
   all strictly below" and §II.1.b finding 8 confirms it is published on
   **`eigenvalues-eigenvectors-and-the-characteristic-polynomial`** (order 86) —
   verified against that page's `items:` list, not inferred. GA-1 defines the
   algebraic closure, and its two landmark theorems ("the one-step theorem — …
   then $L$ is algebraically closed"; "algebraic closures exist") conclude in
   that notion. The design's own D6 dictionary discipline, stated twice inside
   the GA-1 section, forbids re-minting it. The spec closure stopped at
   `linear-independence-bases-and-dimension` (74) and never reached 86.

2. The rational function field. GA-1's B page carries
   $\mathbb{F}_p(t)$ and $\mathbb{F}_p(s,t)$ — trap (iii) names $\mathbb{F}_p(t)$
   as *the* witness that Frobenius is not surjective, and the
   $\mathbb{F}_p(s,t)$ counterexample is what the design says gives the Steinitz
   biconditional "its force". The library homes $F(t)$ on exactly one item,
   `cor-rational-function-field-as-a-fraction-field`, on
   **`the-field-of-fractions-and-localisation`** (order 53.2); no page inside the
   closure supplies a fraction field. §II.1.b finding 7 records that page as
   published and available precisely so new work need not route around it, but
   the spec never declared the edge. Without it the pair's central
   counterexamples cannot be cited and the only alternative is re-minting
   $\operatorname{Frac}$ — the two-notions defect.

Edits applied to `research/plan-spec.json`: `requires` becomes
`["algebraic-extensions-degree-and-finite-fields-examples",
"eigenvalues-eigenvectors-and-the-characteristic-polynomial",
"the-field-of-fractions-and-localisation"]`. Closure grows 32 → 41. Neither new
edge is implied by an existing one, so no `redundant-prereq` WARN on this page.

VERDICT: drift-applied — added eigenvalues-eigenvectors-and-the-characteristic-polynomial (order 86), the-field-of-fractions-and-localisation (order 53.2)

---

### chain-conditions-and-semisimple-modules

**Read:** `research/plan-algebra-track-expansion.md` MOD-4 (lines 1248–1310) and
§II.5 in full (lines 2448–2592), plus §II.1.c items 3, 4 and 8 and §II.1.d, which
is where the enrichment moves the integrality block onto this page.

The design's stated `requires` (line 1253) is `tensor-products-of-modules`,
`composition-series-and-solvable-groups`; both are declared directly in the spec.
Every published item §II.5 names resolves inside the closure:
`thm-adjugate-identity-over-a-commutative-ring` on
`determinants-of-matrices-over-a-commutative-ring` (the determinant trick, which
is what the moved integrality block runs on), the rational-root corollary on
`primes-and-the-fundamental-theorem-of-arithmetic`,
`thm-first-isomorphism-theorem-modules` on `modules-and-module-homomorphisms`,
MOD-2's divisible-module items on `free-modules-and-exact-sequences` (which is
what makes the Prüfer group in scope), Zorn on
`order-zorn-and-the-axiom-of-choice`, and the dependent-choice ledger on
`deferred-set-theory-beyond-choice`. Matrix rings for Wedderburn–Artin reach
`matrices-and-the-matrix-of-a-linear-map` inside the closure.

**One `fs-` witness in §II.5 is not supported by any closure, and I did not
patch it.** "A Noetherian ring has Noetherian subrings — false, and the honest
witness is a polynomial ring in infinitely many variables inside its fraction
field, which is in scope." Two pieces of that witness are missing, not one: the
fraction field (`the-field-of-fractions-and-localisation`, 53.2, outside the
closure) *and* a polynomial ring on an infinite family of indeterminates, which
**no published item carries** — I grepped `items/` for it and the published
`def-multivariate-polynomial-ring-by-iteration` is finitely many indeterminates
by construction. The only source of the infinite version is
`def-polynomial-ring-on-a-family-of-indeterminates`, minted by GA-1 at order 98
in *this run*, batch 3, while MOD-4 is batch 2. Declaring that edge would invent
a cross-batch design decision the expansion file never states, and adding the
fraction field alone would not make the witness constructible. This is a scaffold
scope question for step 3 — the Beta either finds an in-closure witness for that
`fs-`, or drops it and records the drop — not a missing declared prerequisite.
Recorded here so it is not discovered during authoring.

VERDICT: no-drift

---

### goursat-and-cauchys-theorem-in-a-convex-domain

**Read:** `research/plan-complex-analysis-track.md` CA-4 (lines 1020–1104) in
full, plus the label table at line 4287 that binds CA-2/CA-3 to page ids. The
evidence file's `designLocations` for this page pointed only at the summary table
at 4295 and three functional-analysis mentions — the section that states CA-4's
prerequisites uses the label "CA-4" and never the page id, so it appears in no
mechanical location list.

The design's `requires` (line 1022) is CA-3, CA-2, `rn-as-a-normed-space` =
`contour-integration`, `complex-power-series-and-analytic-functions`,
`rn-as-a-normed-space`. All three are declared directly. The other pages the
section names are inside the closure: `equivalent-forms-of-completeness` for the
nested-set principle (named twice, in the Goursat sketch and again in trap (iv)),
`the-complex-exponential-and-eulers-formula` for completeness of $\mathbb{C}$,
and CA-3's additivity and reversal items on `contour-integration`.

**The DEFS line names a page outside the closure, and it is a wrong pointer
rather than a missing prerequisite.** Line 1049: "**star-shaped** and **convex**
open subsets of $\mathbb{C}$ (cite `convexity` and `rn-as-a-normed-space`; do not
re-mint)". I opened both named pages. `convexity` (order 157) is convex
*functions* — three-slope, supporting lines, Jensen, inflection points — and
carries no convex *set*; `rn-as-a-normed-space` carries no convex, segment or
star-shaped item at all. The notions the design forbids re-minting are published
as `def-convex-subset-of-euclidean-space` on **`the-total-derivative`** and
`def-star-shaped-open-subset-of-rn` on
**`line-integrals-and-the-gradient-theorem`**, and both of those pages are
already inside CA-4's closure, reached through `contour-integration`. So the
design's instruction is satisfiable as written; only its parenthetical about
where the items live is wrong. Adding `convexity` would encode a dependency on
convex functions that Goursat and Cauchy do not have, against the
transitive-reduction discipline, so I applied nothing. The Beta authoring CA-4
should cite the two items named above; recorded here for the step-3 scaffold
review.

VERDICT: no-drift

---

### monads-comonads-and-their-algebras

**Read:** `research/plan-category-theory-track.md` MA-3 (lines 1293–1360) in full
— the 34-item A list, the `fs-` block, the B page and the traps — plus the MA
label table at line 39 and MA-4's `requires` at line 1367.

The design's `requires` (line 1296) is `adjunctions-units-and-counits`,
`limits-and-colimits`; both are inside the closure under the declared
`reflective-subcategories-and-the-adjoint-functor-theorems-examples`. I resolved
every published item the section names and each one's owner is in the closure:
`prop-size-of-functor-categories` on
`categories-functors-and-natural-transformations` (item 2's size caveat),
`prop-completeness-and-cocompleteness-in-poset-categories` and
`def-preservation-reflection-creation-continuity-and-cocontinuity` on
`limits-and-colimits` (item 31 and trap 2), and `lem-ultrafilter-prime` with the
rest of the ultrafilter apparatus on `filters-and-ultrafilters` (items 32–33).
The free-monoid, free-group and free-module monads of items 28–30 reach
`monoids-groups-and-subgroups`, `free-groups-and-presentations`,
`modules-and-module-homomorphisms` and `free-modules-and-exact-sequences`, all
inside the closure; the $\mathbf{Top}\to\mathbf{Set}$ witness in the second `fs-`
cites MA-1 = `adjunctions-units-and-counits`, also inside it. The compact-Hausdorff
pages (`nets-and-filters`, `separation-axioms`, `compactness-in-metric-spaces`)
that the neighbouring evidence list surfaces belong to **MA-4**'s `requires` for
Manes' theorem, and MA-3's trap 3 explicitly keeps the ultrafilter monad here
unconditional and the compactness half there. The design records
"Forward references: NONE" and nothing in the section contradicts it.

VERDICT: no-drift

---

### quadratic-reciprocity-and-the-jacobi-symbol

**Read:** `research/plan-number-theory-track.md` NT-3 (lines 424–501) — the
14-item A list with its per-item locators, the "Complete reciprocity proof and
other obligations" prose, and the B page — plus the NT-1 and NT-2 headers at
lines 188 and 351 that fix the label map.

The design's Requires line (line 428) is "NT-1–NT-2 and the three published
elementary number-theory pages". NT-1 = `primitive-roots-and-unit-groups-modulo-n`
and NT-2 = `quadratic-residues-and-the-legendre-symbol`, both inside the closure
under the declared `quadratic-residues-and-the-legendre-symbol-examples`; the
three elementary pages are `divisibility-gcd-and-bezout`,
`primes-and-the-fundamental-theorem-of-arithmetic` and
`congruences-and-the-chinese-remainder-theorem`, all inside it. Every other id
named — `thm-unit-group-crt-decomposition` on NT-1, the cyclic unit-group and
finite-abelian-group facts behind the $C_2\times C_{2^{k-2}}$ structure used in
`thm-unit-square-criterion-modulo-two-powers` — resolves inside the closure too.

The one prerequisite question the design raises, it answers in the negative and
twice: "Rational inequalities and finite lattice-point sets are used in the
reciprocity proof; the later real-analysis floor-function item is **not** a
dependency" (line 429), and again at line 470, "neither floor notation nor a
later real-analysis result is concealed in the proof". `lem-gauss-lower-half-lattice-count`
is stated as a finite set for exactly that reason. That is a design decision to
*avoid* a forward page, not drift. The only id in this page's neighbourhood is
its own B companion.

VERDICT: no-drift

---

### sigma-algebras-and-borel-sets

**Read:** `research/plan-measure-theory-track.md` MT-1 (lines 1626–1748) in full,
plus §1.1 (the elementary measure-zero vocabulary this page must cite and not
re-mint), the choice-strength rows for MT-1 at lines 492–494, and the
well-definedness rows at 553–554.

The design's `requires` (lines 1628–1631) names seven pages:
`relations-functions-and-quotients`, `countability-and-uncountability`,
`topological-spaces-and-continuity`, `ordinals-and-transfinite-recursion`,
`cardinal-arithmetic-and-cofinality`, `cantor-set-baire-and-measure-zero` (for
`def-f-sigma-g-delta`) and `the-topology-of-euclidean-space`. **All seven are in
the closure** — three declared directly (`cardinal-arithmetic-and-cofinality`,
`the-topology-of-euclidean-space`, and the anchor
`stone-weierstrass-general-examples`), the rest transitively. Every named item
resolves to a page inside it, checked against the owning `items:` lists:
`thm-transfinite-recursion` on `ordinals-and-transfinite-recursion`,
`thm-regularity-of-the-alephs` on `cardinal-arithmetic-and-cofinality` (the
AC$_\omega$ cost the Statement must carry), and `def-f-sigma-g-delta`,
`cor-q-is-meager-and-not-g-delta` and `def-cantor-set` all on
`cantor-set-baire-and-measure-zero`. The design records "Forward references:
none", and the page is pure set algebra with no measure, so nothing reaches
upward into MT-2 or later.

VERDICT: no-drift

---

### sylow-theorems-and-nilpotent-groups

**Read:** `research/plan-algebra-track-expansion.md` AG-4 (lines 961–1027) and
§II.3 in full (lines 2101–2274), including §II.3.a's item-by-item inventory of
what is published below and therefore cited rather than re-minted.

The design's `requires` (line 966) is `semidirect-products-and-automorphism-groups`,
`group-actions-and-cayleys-theorem`, `primes-and-the-fundamental-theorem-of-arithmetic`
— all three declared directly in the spec. §II.3.a's whole inventory lands inside
the closure: the seventeen $p$-group and action items on
`group-actions-and-cayleys-theorem`, the nine nilpotency items on
`composition-series-and-solvable-groups` (reached transitively),
`def-p-adic-valuation` and `lem-p-adic-valuation-additive` on
`primes-and-the-fundamental-theorem-of-arithmetic` — which is what Wielandt's
counting proof of Sylow I runs on, and trap (v) — and
`thm-internal-direct-product-recognition` with
`cor-converse-of-lagrange-for-finite-abelian-groups` on
`the-structure-of-finite-abelian-groups`.

Two backward pages the evidence surfaces are **deliberately not cited**, and the
design says so item by item: `ex-a-four-has-no-subgroup-of-order-six` on
`symmetric-groups-and-the-sign-homomorphism-examples` and
`ex-composition-and-derived-series-of-s-three` /
`ex-heisenberg-group-is-nilpotent-of-class-two` on
`composition-series-and-solvable-groups-examples` are B-page leaves, so the
design has AG-4 restate them natively with an agreement Remark and **no `deps`
entry** ("restated natively, not cited"; "so this item constructs it natively").
That is the b-leaf rule working as intended, not a missing prerequisite.

One thing recorded for step 3 rather than declared: the B-page example "the
Heisenberg group over $\mathbb{F}_p$ as the unique $p$-Sylow of
$GL_3(\mathbb{F}_p)$" (line 2246) touches a group the library homes at
`def-invertible-matrix-and-general-linear-group` on
`matrices-and-the-matrix-of-a-linear-map`, order **78 — forward** of this page at
70. It is a single B-page worked example, the design declares "Forward
references: NONE load-bearing", and the published integral Heisenberg group is
built from `def-group` alone with no matrix machinery, so a native construction
is available. I did not treat one discretionary B example with a native route as
a reading-order change; the Beta constructs it natively or drops it.

VERDICT: no-drift

---

### the-fundamental-group-of-the-circle

**Read:** `research/plan-topology-set-theory-track.md` HT-4 (lines 931–980) in
full, plus HT-3 at 875 and the renumber row at line 68.

The design's `requires` (line 933) is `covering-spaces-and-lifting` (declared)
and `sine-cosine-and-the-definition-of-pi`, the latter annotated "[dictionary
item only — see traps for the exact trig page, which Beta pins at step 1]". The
rest of the section resolves inside the closure: `def-quotient-topology` and
`def-hausdorff-space` are both on `subspaces-products-and-quotients` (order 251
— I checked the owning `items:` list rather than a grep, because
`hausdorff-via-the-diagonal` merely mentions the id), the compact-to-Hausdorff
theorem is on `compactness`, and `thm-int-comm-ring` — trap (ii)'s legal source
for "$(\mathbb{Z},+)$ is a group", chosen because the AA-1 B items are
leaf-locked — is on `construction-of-r-via-dedekind-cuts`.

**Trap (i) asks for exactly one thing to be verified on disk, and on disk it
fails.** "If the analysis track's surjectivity/periodicity facts for
$(\cos,\sin)$ live on a different page than 157 (161/163 candidates), Beta pins
the `requires` to the page that actually carries them — verify on disk, not from
this file." The dictionary item is "$t \mapsto (\cos 2\pi t, \sin 2\pi t)$
induces a homeomorphism from $\mathbb{R}/\mathbb{Z}$ onto the unit circle of
$\mathbb{R}^2$". `sine-cosine-and-the-definition-of-pi` (order 179) carries the
periodicity and Pythagorean halves — `thm-sine-cosine-zero-sets-and-fundamental-period`,
`cor-trigonometric-parity-and-pythagorean-identity`,
`thm-sine-cosine-signs-monotonicity-and-ranges` — but **not** the surjectivity.
The published item that states it, verbatim "$t\mapsto(\cos t,\sin t)$ is a
bijection from $[0,2\pi)$ onto the real unit circle", is
`thm-sine-and-cosine-parametrize-the-unit-circle`, and it is on
**`fundamental-trigonometric-identities`** (order 185), which the closure did not
reach. Without it the dictionary item has no source for the "onto" half and the
homeomorphism claim cannot be closed.

Edit applied to `research/plan-spec.json`: `requires` becomes
`["covering-spaces-and-lifting","fundamental-trigonometric-identities"]`. This is
the pin trap (i) asks for, so it **replaces** the direct
`sine-cosine-and-the-definition-of-pi` edge rather than sitting beside it —
`fundamental-trigonometric-identities` requires that page directly, so nothing is
lost (closure 58 → 59, gaining only `fundamental-trigonometric-identities`) and
`requires` stays a transitive reduction with no new WARN.

VERDICT: drift-applied — added fundamental-trigonometric-identities (order 185)

---

## Gate state

`node tools/validate-plan.mjs research/plan-spec.json` → exit 0, no errors;
redundant-prereq WARNs 311 → 312, the one addition named at the top of this
report and outside run scope. No blocked edges: every edge applied is backward,
and nothing in the eight designs names a prerequisite at a higher order that the
page's mathematics actually needs.
