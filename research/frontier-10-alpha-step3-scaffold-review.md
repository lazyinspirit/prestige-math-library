# `frontier-10` — Alpha step-3 scaffold breadth and depth review

Alpha-frontier-10, Stage 0 (`briefs/alpha.md` §"Stage 0"; owner, 2026-08-11).
Scope: batches 1–8, twelve A/B pairs. Batch 9 was spliced at step 3 and is
excluded by the dispatch; it gets its own review when it lands.

**I authored nothing and edited no batch file, item, page or `plan-spec.json`.**
Every finding below is routed to the owning Beta through the orchestrator; I
re-check before step 4 splices.

## Verdicts

| # | pair | verdict | why |
|---:|---|---|---|
| 1 | `symmetric-groups-and-the-sign-homomorphism` | **sufficient** | — |
| 2 | `matrices-and-the-matrix-of-a-linear-map` | **insufficient** | F1 |
| 3 | `the-structure-of-finite-abelian-groups` | **insufficient** | B2 |
| 4 | `free-products-and-amalgamation` | **insufficient** | B3 |
| 5 | `polynomial-rings-and-roots` | **insufficient** | F1, B4 |
| 6 | `bounded-variation-and-riemann-stieltjes` | **sufficient** | ledger correction L1, non-blocking |
| 7 | `improper-integrals` | **sufficient** | — |
| 8 | `fubini-and-change-of-variables` | **insufficient** | B5 |
| 9 | `ramsey-theory` | **insufficient** | B6 |
| 10 | `plane-graphs-euler-and-the-five-colour-theorem` | **sufficient** | — |
| 11 | `categories-functors-and-natural-transformations` | **insufficient** | B7 — **B-page additions only; the D2 split does NOT fire** |
| 12 | `group-actions-and-cayleys-theorem` (enrichment) | **insufficient** | B8 |

Five sufficient, seven insufficient. No finding requires a split of any pair.

The overall picture is genuinely much stronger than frontier-9: 508 items across
12 A pages against frontier-9's 83 across 20, and the harvests I checked against
the actual sources were faithful, not decorative. The findings below are
specific gaps, not a verdict on the run.

---

## F1 — run-wide: seven forward references on the most elementary interface

**This is the largest finding and it is not a breadth gap; it is a dependency
defect that no Beta and no gate caught.**

`def-finite-sum-in-a-commutative-monoid` and `lem-finite-sum-reindexing-and-fubini`
live on `incidence-algebras-and-mobius-inversion`, **order 203, published**.
Three batches cite them from pages at orders 42, 52 and 78. Verified from disk
against `research/plan-spec.json` and `library/`:

| batch | page (order) | items citing forward |
|---|---|---|
| 1 | `matrices-and-the-matrix-of-a-linear-map` (78) | `def-matrix-product-and-identity-matrix`, `thm-matrix-multiplication-laws`, `def-trace-of-a-square-matrix`, `prop-trace-is-linear`, `thm-trace-of-ab-equals-trace-of-ba` |
| 3 | `polynomial-rings-and-roots` (52) | `def-polynomial-ring-over-a-commutative-ring`, `thm-polynomial-ring-is-a-commutative-ring`, `thm-universal-property-of-a-polynomial-ring`, `prop-formal-derivative-laws` |
| 8 | `group-actions-and-cayleys-theorem` (42) | `thm-cauchy-frobenius-orbit-counting` (both ids) |

Every Beta listed these two ids in its published-dependency audit without
noticing the order. Batch 3's notes §"Forward references, cross-batch
dependencies and blockers" states **"Forward references kept: none"**, which is
false against disk.

Left unfixed, the ↗ sky tier marks `thm-matrix-multiplication-laws`,
`thm-polynomial-ring-is-a-commutative-ring`, `thm-universal-property-of-a-polynomial-ring`
and `thm-cauchy-frobenius-orbit-counting` — four landmark theorems — as resting
on later material, and `unprovedDependence`/forward-closure propagates that
marker to essentially the whole of both algebra pages and to everything
downstream, including batch 9's determinant page and batch 5's change of
variables. Minimising forward references is priority (2) of the step-3 decision
rule; seven of them on finite indexed summation is the opposite.

**Batch 8's two edges are avoidable now, at no cost.** Its sum
$\sum_{g\in G}|X^g|$ is natural-number valued, and batch 8 *already* cites
`def-sum-over-a-finite-index-set` — published on
`finite-counting-and-binomial-coefficients`, **order 20**, which is real- or
natural-valued and strictly earlier. Redirect both edges there and batch 8's
forward references go to zero.

**Batches 1 and 3 genuinely need a commutative-monoid-valued sum** — matrix
multiplication over an arbitrary field and polynomial convolution over an
arbitrary commutative ring are not real-valued, and neither the order-20
`def-sum-over-a-finite-index-set` nor the order-72 `def-finite-sum` covers them
(both are real/natural valued by construction; the order-20 item's own text says
so). Batch 9's Leibniz determinant over a commutative ring will need the same
interface at order 82.

**This one is not mine to decide.** The options are:

1. Stage a published-page amendment relocating the two items to an early page —
   `rings-subrings-and-integral-domains` (order 46) is the natural home. This
   fixes batches 1, 3 and 9 at once, but moving an item between published pages
   is a reading-order change on published content and is **owner-only**.
2. Mint the interface on the earliest in-run page that needs it,
   `polynomial-rings-and-roots` (52), and cite it from 78 and 82. No owner call,
   but it creates a published/in-flight duplicate seam against the order-203
   items and puts a general definition on a polynomial page.
3. Accept seven declared forward references.

I recommend routing (1) to the owner with (2) as the fallback, and applying the
batch-8 redirect immediately regardless of which is chosen. **Recorded as a
blocker rather than a prompt**, per the no-permission-prompt rule.

---

## Per-pair findings

### 1. `symmetric-groups-and-the-sign-homomorphism` (A 13, B 7) — sufficient

Smallest A page in the run, and the orchestrator asked me to check it carries
enough for batch 9's Leibniz determinant. It does.

Against the five requested checks: parity well-definedness
(`thm-parity-of-transposition-factorisations-is-well-defined`) ✔; sign as a
homomorphism (`thm-sign-is-a-homomorphism`) ✔; transpositions generating
(`thm-transpositions-generate-the-symmetric-group`) ✔; cycle structure
(`def-permutation-support-…`, `thm-disjoint-cycle-decomposition`,
`cor-order-of-a-permutation-from-its-cycle-lengths`,
`cor-sign-from-disjoint-cycle-structure`) ✔; **conjugacy by cycle type is
absent, and its deferral is valid** — `conjugacy-and-simplicity-in-the-symmetric-groups`
exists in `plan-spec.json` at **order 64**, later in reading order, and is
literally the page for it. Batch 8 defers Judson Example 14.14 to the same page,
so the two batches are consistent.

**Harvest verified faithful against the actual sources**, not just structurally
complete:

- Judson §5.1: I checked the recorded 14 rows against the section's named
  results (Thm 5.1, Prop 5.2, Thm 5.3, Prop 5.4, Lem 5.5, Thm 5.6, Thm 5.7,
  Prop 5.8, Example 8). Complete.
- Milne, *Group Theory*, §4 pp. 64–68: I extracted the document and compared.
  The declared range (sign construction before Remark 4.25 through Prop 4.30)
  contains exactly Remark 4.24, Remark 4.25, Prop 4.26, Cor 4.27, Cor 4.28,
  Example 4.29, Prop 4.30 — all seven recorded, with the two declines being
  4.28 and 4.30, both routed to order 64.

Batch 9's determinant interface is covered: `sgn(\sigma^{-1})=sgn(\sigma)`, needed
for $\det(A^{\mathsf T})=\det(A)$, is a one-line consequence of
`thm-sign-is-a-homomorphism` into a group of exponent two — a 30-second gap, not
a missing item.

### 2. `matrices-and-the-matrix-of-a-linear-map` (A 32, B 7) — insufficient

Content is strong: matrix ring, matrix units, transpose, $\mathcal L(V,W)$,
coordinate columns, the representation isomorphism, composite = product,
$\operatorname{End}_F(V)\cong M_n(F)$, $\mathrm{GL}_n$, change of basis both
sides, similarity, trace and $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. The
Axler/MIT/Leonard harvest is dense (58 rows) and its three declines are honest —
`Proposition 30, rank = column rank` is deferred to
`gaussian-elimination-and-row-reduction` (order 80), which batch 9 is building
now, so that deferral is not a drop.

**Insufficient solely for F1**: five items carry forward references to order 203.
Nothing to add mathematically.

### 3. `the-structure-of-finite-abelian-groups` (A 26, B 8) — insufficient

Harvest verified: I extracted Conrad's *Decomposition of Finite Abelian Groups*
and its §§1–4 named results match the recorded 18 rows one-for-one and in order
(Thm 1.1 · Def 2.1 · Ex 2.2 · Ex 2.3 · Rem 2.4 · Thm 2.5 · Lem 3.1 · Rem 3.2 ·
Thm 3.3 · Lem 3.4 · Rem 3.5 · Thm 3.6 · Ex 3.7 · Cor 3.8 · Ex 3.9 · Thm 4.1 and
the two §4 consequences). Appendix A (Fitting) is excluded by declared locator.
Both declines are valid.

**Add one result.** The converse of Lagrange for finite abelian groups —
*if $d$ divides $|G|$ for a finite abelian $G$, then $G$ has a subgroup of order
$d$* — appears in no source's `contents` and in no item. It is the single
most-used consequence of the classification and it is cheap from what is already
scaffolded: decompose into $p$-primary components
(`thm-primary-decomposition-of-a-finite-abelian-group`), write
$d=\prod p^{a_p}$, split each $a_p$ greedily across the cyclic factors of
`thm-cyclic-decomposition-of-finite-abelian-p-groups`, and take the unique
subgroup of each required order in each cyclic factor — published on
`cyclic-groups-and-direct-products` (order 38 < 40). A page whose whole point is
the classification should not omit it.

Sources carrying it: Judson, *Abstract Algebra*, Chapter 13 (the finite abelian
structure chapter, already the batch's textbook family); Elman, *Lectures on
Abstract Algebra*, Chapter 14 exercises beyond the declared 14.27(2)–(6) range.

### 4. `free-products-and-amalgamation` (A 25, B 8) — insufficient

The spine is right: universal property, reduced syllable words, normal form,
factor embeddings, presentations, pushouts, amalgamation, its normal form,
factor embedding and intersection. The Torres and Neumann harvests are faithful
to their declared ranges and the single decline (torus-knot classification) is
correct.

**The corollary pass is missing.** The page proves the normal form theorem
(`thm-normal-form-for-free-products`) and then does not draw the two corollaries
every treatment draws from it, both one paragraph:

- **Every element of finite order in a free product is conjugate into a factor.**
  A cyclically reduced word of syllable length $\ge 2$ has infinite order, direct
  from the normal form. Sources: Serre, *Trees*, §I.1.3; Lyndon–Schupp,
  *Combinatorial Group Theory*, IV.1.6; Magnus–Karrass–Solitar, Cor. 4.1.4. The
  B page's `ex-two-involutions-generate-the-infinite-dihedral-group` already
  observes the special case for $C_2 * C_2$ without the general statement.
- **The centre of a free product of at least two nontrivial groups is trivial.**
  Same one-paragraph normal-form argument; same sources.

This is depth loss of exactly the kind the scaffold-richness rule names: the
machinery is built and the cheap consequences are left on the floor.

### 5. `polynomial-rings-and-roots` (A 43, B 14) — insufficient

The densest harvest in the run (112 rows across five sources, 84 `included`) and
mathematically the most complete page: construction, degree laws, universal
property, both division theorems, Euclidean/PID/UFD, root bound, formal
derivative and separability, Gauss's lemma, rational root, reduction mod $p$,
Eisenstein. Seven of the nine declines are correct and route to
`field-extensions-and-the-complex-numbers` (order 54 > 52) or to genuine Galois
machinery.

**Two declines are invalidated by this run's own scope:**

- *"Heading: Finite Subgroups of Units"* (out-of-scope) and
- *"Corollary 23.15: every finite subgroup of the unit group of a domain is
  cyclic"* (out-of-scope),

both declined because the proof "needs the fundamental theorem of finite abelian
groups" whose home is "the group-structure track". **Batch 2 of this run builds
`the-structure-of-finite-abelian-groups` at order 40**, strictly earlier than
this page at order 52. The result is then two lines: for a finite subgroup $G$
of $D^\times$, `cor-order-and-exponent-from-invariant-factors` gives the exponent
$e$; every element satisfies $x^e-1=0$; `thm-root-bound-for-polynomials-over-a-domain`
(already item 25 here) bounds the roots by $e$; so $|G|\le e$ and $G$ is cyclic.

Add it, citing Donaldson, *Math 120B Notes* §23, Corollary 23.15 — already the
batch's own source. Note this creates the run's first cross-batch dependency
edge (batch 3 → batch 2, order 52 → 40, backward-pointing and legal).

Also **insufficient for F1**: four items carry forward references to order 203.

### 6. `bounded-variation-and-riemann-stieltjes` (A 32, B 12) — sufficient

Complete against the standard chapter: BV and total variation, additivity,
Jordan decomposition, countable first-kind discontinuities, the BV algebra, the
$C^1$/Lipschitz/AC/BV hierarchy, the Riemann–Stieltjes integral with the Darboux
criterion, all four existence theorems, integration by parts, the $C^1$
integrator reduction, change of variable, and Young's theorem as the reach
beyond BV. The B page's 12 items include the Cantor function twice, in both
roles, which is the right choice.

Rectifiable curves and arc length, the other classical payoff of BV, belong to
`arc-length-and-rectifiable-curves` (order 181 > 163) — correctly not here.

**L1, ledger correction, non-blocking.** One of the four sources is the MIT
18.100B *lecture outline* (`math.mit.edu/~rbm/18.100-S04/node2.html`), and its
14 recorded rows are lecture topic lines ("Lecture 16: refinement"), not a
source's named results. A syllabus is not a treatment, and harvesting a
syllabus's topic list is structurally indistinguishable from the thin harvest
this artifact exists to prevent. The outline names its own real source exactly:
Rudin, *Principles of Mathematical Analysis*, Ch. 6, pp. 120–136. Replace the
row with Rudin cited directly and enumerate 6.1–6.22. Rule (a) is satisfied
either way (Trench is a textbook, Heil an independent survey), and I expect the
substitution to change no item — which is why this does not block.

### 7. `improper-integrals` (A 25, B 12) — sufficient

Full standard development: the three definitions, tail invariance, linearity,
Cauchy criterion, absolute/conditional convergence, the bounded-truncation
criterion, comparison and limit comparison, the integral test, the $p$-test,
principal values, Dirichlet, Abel, the divergence transfer, substitution and
Frullani.

**Its 12 declines — 10 of the run's 40 deferrals — are structurally forced, and
I verified the orders.** The page sits at order 165;
`the-exponential-function` is 175, `the-logarithm-and-general-powers` is 177,
`fundamental-trigonometric-identities` is 185. Every deferred example
(Trench 3.4.4/3.4.5/3.4.6/3.4.13/3.4.14/3.4.15, Hunter 1.76/1.77/1.78/1.83) is
deferred because its integrand needs $\log$, $\exp$ or $\sin$, none of which
this page may cite. The two canonical deferrals (the full real-exponent
$p$-test, Frullani's value $\log(b/a)$) are the same constraint. The Beta
supplied checkable alternating-step witnesses for conditional convergence
instead of dropping the phenomenon, which is the right call.

For the owner's awareness only: the alternative is to move `improper-integrals`
after the logarithm page, which is a reading-order change and not mine.

### 8. `fubini-and-change-of-variables` (A 25, B 13) — insufficient

The dispatch said batch 5 "authored no scaffold for its change-of-variables
material". **That is not what is on disk.** Beta-5 scaffolded the whole
development — items 10–25 are the Jacobian determinant, linear content scaling,
the near-identity cube sandwich, local volume distortion, Jordan images,
change of variables for compact Jordan sets, compactly supported integrands and
bounded open Jordan sets — and declared the four batch-9 interfaces it needs. It
also pre-emptively lists `gaussian-elimination-and-row-reduction` and
`determinants-of-matrices-over-a-commutative-ring` in its `requires`. The pair
declines nothing at all except one improper-integral exercise. The correct
reading is that batch 5 is complete and *gated* on batch 9, not thin.

**The declared interface contract is incomplete, and this is the finding.**
Beta-5's notes name four interfaces: `def-determinant-of-a-square-matrix`,
`thm-determinant-under-elementary-row-operations`, `thm-determinant-multiplicative`,
and `thm-invertible-matrices-factor-into-elementary-matrices`. Two more are
needed and are not on the list:

- **The determinant vanishes exactly on singular matrices** (equivalently
  $\det A\neq0 \iff A\in\mathrm{GL}_n$). `thm-linear-images-scale-jordan-content-by-absolute-determinant`
  states its strategy as *"Treat singular matrices by row reduction and a thin-slab
  cover of a proper coordinate subspace"* — that branch produces content zero on
  the image side and needs $\det A=0$ on the other side of the equation. Neither
  elementary-row-operation behaviour nor multiplicativity gives it without the
  zero-row fact.
- **The determinant is a polynomial in the matrix entries, hence continuous.**
  `thm-change-of-variables-for-compact-jordan-sets` and
  `cor-jordan-content-under-a-c-one-diffeomorphism` integrate
  $x\mapsto|\det J_g(x)|$ over a compact Jordan set; that integrand must be
  Riemann integrable, which follows from continuity of $\det$ composed with the
  continuous $x\mapsto J_g(x)$. This is the Leibniz formula — which is exactly
  why batch 9 requires `symmetric-groups-and-the-sign-homomorphism` — but it is
  not currently a declared interface, so nothing obliges batch 9 to expose it.

Route both to Beta-9 as required interfaces and to Beta-5 as contract additions.

### 9. `ramsey-theory` (A 21, B 6) — insufficient

The A-page spine is good: arrow notation, the two-colour recursion, the
binomial bound, $R(3,3)=6$, the Erdős counting lower bound, uniform finite
Ramsey, a ZF ordered-tree König lemma, infinite Ramsey, the compactness
re-proof, canonical Ramsey, van der Waerden with monochromatic difference, and
Schur. The choice discipline (ZF over $\mathbb N$, transfer along a supplied
injection) is careful and correct.

**Two silent stops must become recorded dispositions.** The Leader locator reads
"Chapter 1, sections 1.1-1.2, pages 1-7, **stopping before section 1.3
Hales-Jewett**". Hales–Jewett is the standard generalisation of van der Waerden,
which this page proves, and **it has no disposition row anywhere** — neither in
Leader's `contents` nor in the page's `canonical` list. The same is true of
Rado's theorem, the standard generalisation of Schur, which this page also
proves. A silent locator stop is precisely the mechanism that lost the
orbit–stabiliser theorem on frontier-9. Deferring both is very likely
defensible; declining them without a written reason is not.

**The B page is thin at 6 items for a 21-item A page**, and two of the six are
the same kind of exact-value computation. Two boundary items are missing and
both are cheap:

- **Finitely many colours is essential in infinite Ramsey.** Colour
  $\{i,j\}\in[\mathbb N]^2$ by $\min(i,j)$: this uses infinitely many colours and
  no infinite set is monochromatic, since a monochromatic set of size $\ge 3$
  would force two distinct minima. Marks the hypothesis of
  `thm-infinite-ramsey-on-the-naturals`.
- **All four canonical types occur**, one witness each (constant, injective,
  left-dependent, right-dependent). Without them
  `thm-canonical-ramsey-theorem-for-pairs` reads as though its case list could be
  shortened. Leader §1.2 supplies them.

### 10. `plane-graphs-euler-and-the-five-colour-theorem` (A 40, B 7) — sufficient

Verified against Diestel Ch. 4, which I extracted. The declared locator is
"§4.1 through Lemma 4.1.3; §4.2 through Corollary 4.2.11; §4.4 through Theorem
4.4.6; §4.6 opening through the paragraph before Proposition 4.6.1", and every
named result in those ranges is scaffolded: 4.1.1, 4.1.2, 4.1.3, 4.2.1–4.2.11
(faces, bridges, forests, 2- and 3-connected face boundaries, maximal plane
graphs, Euler, the edge bound, the $K_5$/$K_{3,3}$ corollary), 4.4.1–4.4.6
(minors versus subdivisions, the contractible-edge lemma, both edge-maximality
lemmas, Kuratowski–Wagner), plus duality, the six-colour induction, Kempe chains
and the five-colour theorem. Nothing standard in the ranges was skipped.

The four-colour theorem is declined twice with the correct reason and is neither
cited nor labelled false. §4.3 (Whitney's unique-embedding theorem) and §4.5
(MacLane, Kelmans, Schnyder) sit outside the declared ranges, and the page's
`canonical` list carries an explicit `deferred` row for Whitney with a real
reason — which is exactly the discipline the Ramsey page is missing.

### 11. `categories-functors-and-natural-transformations` (A 60, B 23) — insufficient

**D2 first, since the orchestrator routed it to me: Beta-7's claim survives
scrutiny.** I extracted Riehl's Chapter 1 and compared every numbered item
against the 91 recorded rows. §1.1 (13 items), §1.2, §1.3 (all six sub-items of
Example 1.3.7 separately disposed), §1.4 (all seven sub-items of Example 1.4.4),
§1.5 and §1.7 are complete. The one numbered item with no ledger row is
**Definition 1.4.3, natural isomorphism — and it is scaffolded anyway**, as A
item 43 `def-natural-isomorphism`. Nothing was trimmed to reach 60; the number
is where an honest harvest of Riehl Ch. 1 minus the Yoneda block lands.

**Both of my additions are B-page items. The A page stays at 60 and the D2
contingency split does not fire.** I am stating that explicitly because D2 arms
the split on any A-item addition.

**Two declines are invalidated by this run's own scope:**

- **Riehl Example 1.5.12**, "an equivalence between abstract and concrete linear
  algebra" ($\mathbf{Mat}_F \simeq \mathbf{Vect}_F^{\mathrm{fd}}$), declined
  because "the needed matrix-category and determinant/coordinate infrastructure
  is planned but has no published items at this point in the reading order."
  Batch 1 builds `matrices-and-the-matrix-of-a-linear-map` at **order 78**, far
  below 359, and supplies exactly what the example needs —
  `def-matrix-product-and-identity-matrix`, `thm-matrix-of-a-composite-is-the-product`,
  `def-coordinate-column-and-matrix-of-a-linear-map`,
  `thm-matrix-representation-is-a-vector-space-isomorphism` and
  `cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension`. No
  determinant is required. Add it as a B item; it adds
  `matrices-and-the-matrix-of-a-linear-map` to the pair's `requires` and creates
  a batch-7 → batch-1 edge (359 → 78, backward-pointing and legal).
- **The `canonical` decline "the determinant maps define a natural
  transformation from $\mathrm{GL}_n$ to the unit-group functor"**, declined
  because "the prerequisite page `the-determinant-of-a-linear-operator` is
  present only as an empty plan page". That page (order 84) is indeed empty, but
  batch 9 builds `determinants-of-matrices-over-a-commutative-ring` at **order
  82** in this run. Add it as a B item **conditional on batch 9 exposing
  $\mathrm{GL}_n(R)$ and $\det$ over a commutative ring** — batch 1's
  `def-invertible-matrix-and-general-linear-group` is over a field only, and
  $\det\colon \mathrm{GL}_n\Rightarrow(-)^\times$ as a natural transformation of
  functors $\mathbf{CRing}\to\mathbf{Grp}$ needs the ring-level version. If
  batch 9 does not supply it, keep the decline but rewrite the reason to the
  true one.

**Two ledger corrections.** Eight decline reasons name a page
`universal-properties-representables-and-yoneda` that **does not exist**; the
real page is `universal-properties-and-the-yoneda-lemma`, order 361, immediately
after this pair. The deferrals themselves are correct — representables, the hom
bifunctor, the Yoneda lemma and its corollaries genuinely belong there — but a
decline whose stated home is a nonexistent id cannot be checked. And Riehl
Definition 1.4.3 needs its ledger row.

**One observation I am recording rather than requiring.** Riehl Lemma 1.6.16
(initial and terminal objects are unique up to unique isomorphism) is deferred to
order 361 while `def-initial-terminal-and-zero-object` and
`prop-zero-object-induces-zero-morphisms` are included here, so the definition
ships with no governing proposition. The deferral is defensible — it is the
archetypal universal-property statement and 361 is the universal-properties page
— and adding it would fire the split, so I am not requiring it. Route it to
page 361's future Beta as an obligation instead.

### 12. `group-actions-and-cayleys-theorem` (A 27 new + 6 published, B 12) — insufficient

This is the page the owner flagged, and the enrichment is a real one. The
orbit–stabiliser theorem is present as a bijection $G/G_x\to G\cdot x$ with the
cardinality corollary; so are conjugate stabilisers, the core, the coset action
and its kernel, the classification of transitive $G$-sets, conjugacy classes,
centralizers, normalizers, the class equation, the $p$-group fixed-point
congruence, nontrivial centre, order $p^2$, Cauchy and Cauchy–Frobenius.

**The harvest is faithful — I checked the source that failed last time.**
Brosnan §3.14 records 17 headings; I fetched the page and it contains exactly
17 numbered items, Definition 3.95 through Example 3.111, matching the ledger
one-for-one and in order. Judson Chapter 14's mathematical sections are 14.1,
14.2 and 14.3, and all three are harvested. Conrad's §§3 (declared slice), 4 and
5 are complete against the document I extracted.

**But the same failure shape recurs one section further on.** Conrad's *Group
Actions* §6, "More Applications of Group Actions to Group Theory", is in the
batch's own source ledger and was not read. It contains four results that follow
from precisely the machinery this page builds:

- **Theorem 6.8** — if $[G:H]$ is finite then $G$ has a normal subgroup of
  finite index contained in $H$, because $G\to\operatorname{Sym}(G/H)$ has kernel
  contained in $H$ and $G/N$ embeds in $\operatorname{Sym}(G/H)$. This is the
  numerical completion of `thm-left-coset-action-and-its-kernel`, which already
  proves the kernel is $\operatorname{Core}_G(H)$; with the published first
  isomorphism theorem it gives $[G:\operatorname{Core}_G(H)]\mid [G:H]!$. Conrad
  notes it is attributed to Poincaré.
- **Corollary 6.4** — in a finite $p$-group every subgroup of index $p$ is
  normal. Conrad's second proof is exactly the coset action, its kernel, and
  $[G:K]\mid p!$, so it uses nothing this page does not have.
- **Theorem 6.2** — for a $p$-subgroup $H$ with $p\mid[G:H]$, $p\mid[N(H):H]$,
  so $N(H)\neq H$. Proved by applying the fixed-point congruence — already item
  20 here — to $H$ acting on $G/H$.
- **Corollary 6.5** — if $p^n\mid|G|$ there is a chain of subgroups of orders
  $p^0,\dots,p^n$.

**Add 6.8 and 6.4 to the A page** (2 items: A goes 27 → 29, total 33 → 35, no
split). They are pure group-action results and this is their home. **Record
explicit dispositions for 6.2, 6.5, 6.6, 6.9 and 6.10** — deferring 6.2 and 6.5
to `sylow-theorems-and-nilpotent-groups` (order 70) is defensible, but it has to
be written down rather than left off the end of a locator.

**The B page's 12 items do not mark the theorems' boundaries.** The owner asked
for the orbit–stabiliser theorem "and its important consequences **and
examples**". Only 3 of the 12 are counterexamples, and all three sit on the
free/faithful/transitive trio at the very top. Items 17–26 — the class equation,
the $p$-group congruence, nontrivial centre, order $p^2$, Cauchy — get worked
examples but no witness that any hypothesis is needed. Four cheap additions,
three of which reuse groups the page already computes with:

- $S_3$ has trivial centre — the $p$-group hypothesis is needed in
  `thm-nontrivial-center-of-a-finite-p-group`.
- $S_3$ acting on three points has $|X|=3$, $|X^G|=0$ — the $p$-group hypothesis
  is needed in `thm-p-group-fixed-point-congruence`.
- The square-symmetry group of order $8=2^3$ is nonabelian — $p^2$ cannot be
  weakened to $p^3$ in `cor-groups-of-order-p-squared-are-abelian`. The B page
  already computes its class equation in item 7.
- $A_4$ has order 12 but no subgroup of order 6 — Cauchy's theorem does not
  extend from primes to arbitrary divisors. Batch 1's B page already proves this
  as `ex-a-four-has-no-subgroup-of-order-six`; cite it rather than duplicate it.

**Also**: redirect the two forward-referencing summation edges per F1.

---

## What I checked, and how

Sources opened at their stated locators and compared row-by-row against
`coverage.json`: Brosnan §3.14 (fetched), Judson Ch. 14 section structure
(fetched), Conrad *Group Actions* (extracted, all six sections), Conrad
*Decomposition of Finite Abelian Groups* (extracted, §§1–4 + Appendix A), Milne
*Group Theory* Ch. 4 (extracted), Riehl *Category Theory in Context* Ch. 1
(extracted, all numbered items), Diestel *Graph Theory* Ch. 4 (extracted,
§§4.1–4.6). Judson §5.1, Trench, Hunter, Lebl, Leibman, Donaldson, Torres and
Neumann were checked against their recorded rows and against my own knowledge of
the subject rather than by extraction.

Structural checks run from disk: every scaffolded dependency edge resolved
against `research/plan-spec.json` and the published `library/` pages, and
compared for reading order — that is how F1 surfaced. `coverage-checklist.mjs`
re-run over all twelve ledgers: 720 harvested results, 0 errors, 0 warnings,
confirming the gate is green and that everything above is invisible to it, which
is the point of this stage.

## Blockers

1. **F1's remedy is an owner decision** where it touches published content
   (relocating `def-finite-sum-in-a-commutative-monoid` and
   `lem-finite-sum-reindexing-and-fubini` off order 203). Recorded here rather
   than prompted, per the no-permission-prompt rule.
2. `research/frontier-10-published-amendments.md` does not exist yet. Batch 8's
   notes §2 correctly say it is staged at the publishing commit, so this is not
   a step-3 defect — noted so it is not lost.

## Next

Route findings to Beta-1, -2, -3, -5, -6, -7 and -8; batch 4 gets L1 as a
non-blocking ledger correction; batch 9 gets the two additional determinant
interfaces from B5. I re-check every `insufficient` pair before step 4 splices,
and review batch 9 when it lands.

---

# Re-check (post-repair)

Alpha-frontier-10, Stage 0 second pass, before step 4 splices. The verdicts above
are the record of what was found and are not rewritten.

**I authored nothing and edited no batch file, item, page or `plan-spec.json` in
this pass either.**

## Count correction to my own summary line

The summary above reads "Five sufficient, seven insufficient". **The table says
four and eight**, and the table is right: `sufficient` are pairs 1, 6, 7, 10;
`insufficient` are pairs 2, 3, 4, 5, 8, 9, 11, 12. The dispatch's "seven" is the
number of pairs needing a *Beta repair* — pair 2 was `insufficient` for F1 alone
and F1 was resolved by the owner's re-home, so no Beta edit was owed on it.
Eight pairs are re-checked below; nothing was lost, but the count should not be
quoted as five/seven.

## Verdicts

| # | pair | verdict |
|---:|---|---|
| 2 | `matrices-and-the-matrix-of-a-linear-map` | **resolved** |
| 3 | `the-structure-of-finite-abelian-groups` | **resolved** |
| 4 | `free-products-and-amalgamation` | **resolved** |
| 5 | `polynomial-rings-and-roots` | **resolved** |
| 8 | `fubini-and-change-of-variables` | **resolved** |
| 9 | `ramsey-theory` | **resolved** |
| 11 | `categories-functors-and-natural-transformations` | **resolved** |
| 12 | `group-actions-and-cayleys-theorem` | **still insufficient** — R2 |
| 13 | `gaussian-elimination-and-row-reduction` (batch 9, new) | **insufficient** — R3 |
| 14 | `determinants-of-matrices-over-a-commutative-ring` (batch 9, new) | **insufficient** — R4 |

Seven of the eight repairs landed. Three pairs are short, each by a small,
named amount. **R1 below is a separate defect in the re-home that belongs to the
step-4 splice, not to any Beta.**

---

## F1 is fully closed, and I verified it the way it was found

I re-ran the dependency-resolution check that surfaced F1: every `deps` entry of
every item in all nine batches, resolved against the published `library/` page
files and the in-run batch manifests, with the re-home applied from
`research/frontier-10-rehomed.json`, then compared for reading order.

**579 in-run items, 2,895 published items mapped: 0 unresolved dependencies and
0 forward references, in every batch.** Batch 8's two edges now point at the
order-20 `def-sum-over-a-finite-index-set` (with `thm-double-counting` supplying
the exchange), and batches 1, 3, 7 and 9 cite the two re-homed items backward
from orders 78, 52, 359 and 82 against their new home at 46.

`coverage-checklist.mjs` over all nine ledgers: **14 pages, 875 harvested
results, 0 errors, 0 warnings** (was 720 over 12).

### R1 — the re-home breaks the DESTINATION page's `requires` closure

**This is a step-4 blocker and nobody owns it yet.** The receipt verified that
the two moved items' own dependencies all sit at orders 5.3–24, strictly below
the destination's 46. That is the `prereq-order` check. It is not the check that
fires.

`validate-plan.mjs` also enforces `undeclared-prereq`: every item dependency must
lie in the **transitive closure of the page's declared `requires`**.
`rings-subrings-and-integral-domains` declares exactly one prerequisite,
`divisibility-gcd-and-bezout`, whose closure is 12 pages and **does not contain
`finite-counting-and-binomial-coefficients` (order 20)**. Four of the moved
items' dependencies live there:

| id | home | order |
|---|---|---|
| `def-finite-cardinality` | `finite-counting-and-binomial-coefficients` | 20 |
| `def-sum-over-a-finite-index-set` | same | 20 |
| `thm-product-rule` | same | 20 |
| `thm-sum-rule` | same | 20 |

So the moment the re-home is applied, `rings-subrings-and-integral-domains`
raises `undeclared-prereq` four times.

**Remedy, one line:** add `finite-counting-and-binomial-coefficients` to that
page's `requires`. Order 20 < 46, so no `prereq-order` error; it is not currently
reachable, so no `redundant-prereq` warning. `research/frontier-10-splice.mjs`
unions `requires` for in-run batch pages only, and the destination is a published
page in no batch manifest, so **the splice will not do this on its own** — it
needs the entry in `EXTRA_REQUIRES` or an explicit case. Like the rest of the
re-home's page-list edits, the change itself is staged for the publishing commit.

### The two re-home follow-ups the receipt left open — both clear

- **Forward wikilinks in the moved items: none.** Both files' body links are all
  `deps` targets, and all of those resolve at orders 5.3–24, or (for the lemma)
  to the definition that moves with it and lands earlier on the same page.
- **Positional prose claims: none falsified.** The definition's Remarks call the
  order-20 `def-sum-over-a-finite-index-set` "the published real- and
  natural-valued definition", which is still earlier and still true, and say the
  monoid form "is the form needed for sums in a commutative ring" — a sentence
  the move makes *more* apt, since order 46 is the rings page.
- **The source page's summary survives the move.** Paragraph 1 of
  `incidence-algebras-and-mobius-inversion` says its ingredients "support finite
  sums in arbitrary commutative monoids rather than only in $\mathbb R$ or
  $\mathbb N$". Under the page-summary contract paragraph 1 is background drawn
  from declared dependencies, and after the move that is exactly what this is;
  paragraph 2, which names what the page develops, never mentions the sums.
  No edit needed. Flagging for step 6 only so the reading is on the record.
- **No published consumer loses its closure.** The two items are consumed off-page
  only by `matchings-covers-menger-and-network-flows` (213), which reaches order
  46 transitively through `incidence-algebras-and-mobius-inversion` (203). No
  `requires` edit there, and adding one would raise `redundant-prereq`.

---

## Per-pair re-check

### 2. `matrices-and-the-matrix-of-a-linear-map` — **resolved**

`insufficient` for F1 only, and F1 was resolved by re-home rather than by a Beta
edit. Confirmed from disk: the five items still cite
`def-finite-sum-in-a-commutative-monoid` and `lem-finite-sum-reindexing-and-fubini`,
which is correct — with the destination at order 46 those are now backward edges
from 78. The page carries no forward reference of any kind. Nothing mathematical
was owed and nothing was changed. Closed.

### 3. `the-structure-of-finite-abelian-groups` — **resolved**

`cor-converse-of-lagrange-for-finite-abelian-groups` is A item 16, between the
invariant-factor theorem and the exponent definition — the right place. It
carries a real disposition in **both** required artifacts: a source row against
Judson Chapter 13's exercises ("if $n$ divides the order $m$ of a finite abelian
group $G$, then $G$ has a subgroup of order $n$") and a `canonical` row, both
`included` and both naming the item.

The strategy is the honest proof and not a sketch: strong induction on $|G|$,
$d=1$ trivial, a prime $p \mid d$, abelian Cauchy for a subgroup of order $p$,
induction in $G/H$ on $d/p$, then the full preimage under the quotient map, with
the trivial and $d=|G|$ boundaries named. Its nine `deps` all exist and all point
backward.

A page whose subject is the classification now proves its most-used consequence.

### 4. `free-products-and-amalgamation` — **resolved**

Both corollaries landed as A items 6 and 7, immediately after
`thm-normal-form-for-free-products`, which is where they belong:

- `cor-torsion-in-a-free-product-is-conjugate-into-a-factor`
- `cor-center-of-a-free-product-is-trivial`

Both carry a source row and a `canonical` row. The Beta harvested them from
Hatcher, *Algebraic Topology*, Chapter 1 §1.2 Exercise 1 — which is genuinely
where both clauses sit, and is a better citation than the three I offered — then
recorded the adaptation from Hatcher's two factors to the page's existing
arbitrary-family construction.

I checked both proof strategies rather than only their presence. The torsion
argument cyclically reduces and then reads infinite order off the normal form.
The centre argument is correct including its edge cases: for $z=x_1\cdots x_n$
central, a nonidentity $g$ from a factor other than $x_1$'s exists because at
least two factors are nontrivial; $gz$ is reduced of length $n+1$; $zg$ either
reduces to length $\le n$ or is reduced of length $n+1$ with a different first
syllable; normal-form uniqueness closes it in both branches, and $n=1$ is covered.

### 5. `polynomial-rings-and-roots` — **resolved**

`cor-finite-subgroups-of-units-in-a-domain-are-cyclic` is A item 26, directly
after `thm-root-bound-for-polynomials-over-a-domain` — the theorem it consumes.
Both Donaldson rows flipped from `out-of-scope` to `included` naming it, so the
invalidated decline is gone rather than merely contradicted.

The page's `requires` now lists `the-structure-of-finite-abelian-groups`,
creating the run's first cross-batch page edge, 52 → 40, backward and legal.

The strategy is the two-line argument I named, with the boundary handled: $G$
finite abelian, trivial case separate; $e=\exp(G)=n_r$; every $g\in G$ is a root
of $T^e-1$; the root bound gives $|G|\le e$; and $e=n_r\le n_1\cdots n_r=|G|$
forces $r=1$ because each $n_i>1$. It cites
`cor-order-and-exponent-from-invariant-factors` and
`cor-finite-abelian-group-cyclic-iff-one-invariant-factor` from batch 2, both of
which exist as A items 18 and 19.

One nit for step 6, not blocking: the item speaks of "its invariant factors" but
does not cite `def-invariant-factor-data-for-a-finite-abelian-group` directly,
resting instead on the two corollaries that mention them.

F1's ledger defect is also fixed: the notes no longer claim "Forward references
kept: none" and now record the original edges and the owner-approved re-home.

### 8. `fubini-and-change-of-variables` — **resolved**

Both missing interfaces are declared **and consumed by exactly the two items
that needed them**, which is the part a presence check alone would miss:

- `thm-linear-images-scale-jordan-content-by-absolute-determinant` now cites
  `thm-real-square-matrix-invertible-iff-determinant-nonzero` — the singular
  branch of its own stated strategy.
- `thm-change-of-variables-for-compact-jordan-sets` now cites
  `cor-determinant-is-a-polynomial-in-the-matrix-entries` — the integrability of
  $x\mapsto|\det J_g(x)|$.

`requires` lists both batch-9 pages, and all six determinant interfaces resolve
against batch 9's manifest with the exact ids named. Beta-5 correctly declined to
mint either item itself and handed both to batch 9, which built them.

Beta-5 also recorded, unprompted, that over a general commutative ring
invertibility corresponds to the determinant being a **unit** rather than
nonzero, and that the criterion it needs is therefore the real specialisation.
That is the right reading and it matches what batch 9 built.

### 9. `ramsey-theory` — **resolved**

Both B items landed, taking the B page from 6 to 8:

- `cex-infinite-ramsey-fails-with-infinitely-many-colours` (the $\min$ colouring)
- `ex-all-four-canonical-pair-colouring-types`

Both carry Leader rows — Theorem 4 case (iii) and the remark after Theorem 4 —
so they are harvested rather than invented.

The two silent locator stops are now five explicit `deferred` rows: Leader §1.3
as a section, the combinatorial-line definition, Theorem 9 itself, the remarks
after it, and Rado's theorem. I accept all five. Both name a genuinely separate
development — Hales–Jewett's word-cube machinery and Rado's partition-regular
matrix theory — which is the permitted `deferred` ground, and neither is a
prerequisite of anything the page proves; van der Waerden is proved locally by
colour focussing rather than imported from Hales–Jewett.

### 11. `categories-functors-and-natural-transformations` — **resolved**

Both additions are B items, as I required, and the A page is **still exactly 60**:
the D2 contingency split stays unarmed.

- `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` (Riehl
  §1.5), citing the five batch-1 ids I named.
- `ex-determinant-is-a-natural-transformation` (Mac Lane I.4), citing batch 9's
  ring-level `def-matrices-over-a-commutative-ring`,
  `def-invertible-matrix-and-similarity-over-a-commutative-ring`,
  `def-determinant-of-a-square-matrix`, `thm-determinant-multiplicative` and
  `cor-invertible-matrix-has-unit-determinant`.

**My conditional on the second one is discharged.** I made it contingent on batch
9 exposing $\mathrm{GL}_n$ and $\det$ over a commutative ring rather than over a
field; batch 9 does, and the example needs only the ⟹ half
(`cor-invertible-matrix-has-unit-determinant`) for $\det$ to land in $R^\times$,
which is on the page. The $n\ge1$ restriction matches batch 9's determinant
definition, which is also stated for $n\ge1$.

Both ledger corrections landed. Riehl Definition 1.4.3 now has its row, and the
nonexistent `universal-properties-representables-and-yoneda` is gone —
**0 occurrences** on disk, against 10 for the real `universal-properties-and-the-yoneda-lemma`.
`requires` gained `matrices-and-the-matrix-of-a-linear-map` and
`determinants-of-matrices-over-a-commutative-ring`.

### 12. `group-actions-and-cayleys-theorem` — **STILL INSUFFICIENT** (R2)

Most of the repair is right, and I want that on the record before the finding.

- **F1: fixed.** `thm-cauchy-frobenius-orbit-counting` now cites the order-20
  `def-sum-over-a-finite-index-set` and `thm-double-counting`. Zero forward
  references on the pair.
- **Conrad 6.8 and 6.4: added**, as A items 10 and 21.
  `thm-finite-index-core-bound-and-finite-overgroups` states all three clauses —
  normality of the core, $[G:\operatorname{Core}_G(H)] \mid n!$, and finiteness
  of the set of overgroups — and cites the right route for each, including
  `cor-cardinality-of-the-power-set` and `thm-subset-of-a-finite-set` for the
  third. `cor-index-p-subgroups-of-finite-p-groups-are-normal` is proved through
  the factorial core bound rather than through the deferred Theorem 6.2, which is
  the correct choice given that 6.2 is deferred.
- **All four boundary witnesses: added**, taking the B page from 12 to 16 and
  the counterexample count from 3 to 6, now spread across the class equation,
  the fixed-point congruence, the order-$p^2$ theorem and Cauchy rather than
  bunched on the free/faithful/transitive trio.
- **Conrad §6 is now completely disposed**, 6.2 through 6.10.

**Beta-8's one disagreement is upheld.** I asked it to cite batch 1's
`ex-a-four-has-no-subgroup-of-order-six` rather than duplicate it. Beta-8
declined with evidence: that item is on `symmetric-groups-and-the-sign-homomorphism-examples`
at **order 45**, and the citing page is order **43**. I checked, and it is right
twice over — the edge would be a forward reference *and* a citation into a B-page
leaf. My original suggestion was wrong on the orders. Its replacement,
`cex-cauchys-theorem-does-not-extend-to-composite-divisors`, is self-contained on
$\langle(1\,2\,3),(1\,2)(3\,4)\rangle \le S_4$ with Conrad's own $A_4$ note as
source, and its cited route (index two forces normality, then every 3-cycle
$g=(g^2)^2$ lies in $H$, giving $|H|\ge9$) is valid. Step 6 should confirm the
item actually establishes that the generated subgroup has order 12, since
`def-alternating-group` is also at order 44 and unavailable to it.

**R2 — two of the fifteen declines name a home that does not exist, and both are
three-line corollaries of theorems on this page.**

I applied one test to all fifteen: does the stated home name a real page in
`plan-spec.json`, or a real subject area the library has not reached? Twelve
pass cleanly — 6.2, 6.3 and 6.5 to `sylow-theorems-and-nilpotent-groups` (order
70, a real page); 6.7 to the classification of finite simple groups, which is a
model decline reason; Example 14.14 to `conjugacy-and-simplicity-in-the-symmetric-groups`
(order 64); Example 4.3 to the representation track. Three fail:

- **Theorem 6.6, Jordan's derangement theorem** — *every nontrivial transitive
  action of a finite group has a fixed-point-free element*. Declined to "the
  later permutation-group development". **There is no such page**; the nearest,
  `conjugacy-and-simplicity-in-the-symmetric-groups` (64), is about $S_n$
  specifically, and this is a statement about an abstract finite group acting
  transitively. It is three lines from **item 29 on this very page**: transitivity
  makes $\sum_{g\in G}|X^g| = |G|$, the identity alone contributes $|X|\ge2$, so
  the $|G|-1$ non-identity elements contribute at most $|G|-2$ between them and
  one of them contributes nothing. It is also squarely inside the owner's request
  for the orbit–stabiliser theorem "and its consequences".
- **Theorem 6.10** — *the conjugates of a proper subgroup do not cover a finite
  group*. Declined to "the later structural study of subgroup coverings", which
  is not a page and not a subject area. It is four lines from **item 17 on this
  page**, `thm-conjugate-subgroups-are-counted-by-the-normalizer`, which supplies
  exactly the count $[G:N_G(H)]$: with $n=[G:H]\ge2$, the union has at most
  $[G:N_G(H)](|H|-1)+1 \le n|H|-n+1 = |G|-n+1 < |G|$ elements.
- **Theorem 6.9** — *a finite intersection of finite-index subgroups has finite
  index*. Its reason is "not consumed by ... this pair", which is not one of the
  two permitted grounds; residual finiteness is where the result is *used*, not
  where it belongs.

**Required:** add 6.6 and 6.10 as A items (29 → 31, pair total 35 → 37, far
below 60, no split), each citing the on-page theorem named above. For 6.9,
either include it — $g(H\cap K) \mapsto (gH, gK)$ is injective, so
$[G:H\cap K] \le [G:H][G:K]$, and it needs nothing from this page — or rewrite
the reason to a true one. I do not require the item; I require the reason to be
checkable.

I am not reopening anything else on this pair.

---

## Batch 9 — Stage 0 review (new)

Two pairs, 67 items. Reviewed against the same six questions. Batch 9's own
repair round is verified as part of this.

### The two interfaces batch 5 needed — built, and built correctly

`thm-real-square-matrix-invertible-iff-determinant-nonzero` (A item 22) and
`cor-determinant-is-a-polynomial-in-the-matrix-entries` (A item 10) exist under
the exact ids batch 5 declared, and both dispositions flipped in `coverage.json`
from `out-of-scope` to `included`.

**The ring-versus-field boundary is right, and Beta-9 identified it unprompted.**
It declined to state invertibility as "determinant nonzero" over a ring, because
over a commutative ring the correct condition is that the determinant is a
**unit**, and it split the statement accordingly:

- `cor-invertible-matrix-has-unit-determinant` (item 21) — the ring-level ⟹
  direction, from multiplicativity and `lem-ring-units-form-a-group`.
- `thm-real-square-matrix-invertible-iff-determinant-nonzero` (item 22) — the
  real specialisation batch 5 actually needs, with the ⟸ direction by row
  reduction to a triangular RREF with a zero row, tracking the determinant
  through reversible row operations.

The ⟸ direction over a general ring needs the adjugate identity, and that is
deferred (see below), so item 21 is the correct ring-level half to ship here.
No in-run consumer needs the ring-level converse: batch 5 needs the real case,
and batch 7's naturality example needs only $\det$ landing in $R^\times$.

`cor-determinant-is-a-polynomial-in-the-matrix-entries` unfolds the finite
Leibniz sum into `def-multivariate-polynomial-ring-by-iteration` from batch 3
(order 52 < 82), which is the honest route.

### `symmetric-groups-and-the-sign-homomorphism` carries what the Leibniz route needs

`def-determinant-of-a-square-matrix` cites `def-inversions-inversion-number-and-sign`
(batch 1 A item 6) for $\operatorname{sgn}$, and `thm-determinant-of-transpose`
cites `thm-sign-is-a-homomorphism` (A item 9) for
$\operatorname{sgn}(\sigma^{-1})=\operatorname{sgn}(\sigma)$ — the one fact I
flagged in the first review as a 30-second consequence, now cited at exactly the
place that consumes it. `thm-number-of-bijections-of-a-finite-set` supplies
$|S_n|=n!$ for the finite sum. The order-44 page is below the order-82
determinant page. **No gap.**

### 13. `gaussian-elimination-and-row-reduction` (A 29, B 8) — **insufficient** (R3)

The A page is a complete standard chapter and I have no addition to ask for.
Elementary operations and their reversibility, elementary matrices and left
multiplication, systems and augmented matrices, REF and RREF with existence for
both, **uniqueness of the RREF** (often skipped, present here as item 12), the
four subspaces and their ranks, row rank = column rank via two independent basis
lemmas, matrix rank–nullity, affine solution sets, free-variable parametrisation,
the rank consistency criterion, the invertible matrix theorem, factorisation into
elementary matrices, and inversion by augmented row reduction. Two independent
textbooks back it — Margalit–Rabinoff (44 rows) and Hefferon (26) — and the
proof decomposition is honest: items 14, 15, 17 and 18 are four separate lemmas
where a thinner page would have asserted rank equality once.

**R3, B page.** Eight items for a 29-item A page, and two of them are real
boundary markers — RREF unique but REF not (item 5), and row-equivalent matrices
with different column spaces (item 8), which is the sharp one. But the page's
single explicitly hypothesised theorem has no witness:

- **`cor-solution-count-trichotomy-over-an-infinite-field` names "over an
  infinite field" in its own title, and nothing marks that hypothesis.** Over
  $\mathbb F_2$, $x+y=0$ has exactly two solutions, so "no solution, exactly one,
  or infinitely many" fails outright. One counterexample item; the deps are all
  already on the page.

**Also, two silent absences.** Neither **LU factorisation** nor the **rank normal
form** $PAQ=\begin{psmallmatrix}I_r&0\\0&0\end{psmallmatrix}$ appears in any
source's `contents` or in any `canonical` row. I am **not** requiring either
item: LU is a numerical topic outside both declared locators, and the rank normal
form needs column operations this page does not develop. I am requiring a
`canonical` disposition row for each, on the same principle that produced the
Hales–Jewett and Rado rows — a result absent from both the scaffold and the
ledger is invisible, and that invisibility is the exact mechanism that lost the
orbit–stabiliser theorem.

### 14. `determinants-of-matrices-over-a-commutative-ring` (A 24, B 6) — **insufficient** (R4)

The A page is well built and its central deferral is legitimate, which I want to
state plainly because my first instinct was the opposite.

The development is the full ring-level construction: matrices over a commutative
ring and the proof that the interface specialises to the published field one
(item 5), multilinear/alternating/normalized/antisymmetric functions, alternating
⟹ antisymmetric, the rigidity lemma $L(A)=L(I)\det(A)$, the Leibniz determinant,
existence, **uniqueness**, vanishing on a repeated column, $\det(A^{\mathsf T})=\det(A)$,
row operations, triangular matrices, multiplicativity, unit determinant, the real
criterion, $\det(A^{-1})$, and similarity invariance.

**The cofactor/adjugate/Cramer deferral is licensed by the plan, not invented.**
Massot's Definition 6.4.1 (cofactor matrix) and Lemma 6.4.2 (the adjugate
identity $M\operatorname{adj}(M)=\det(M)I$) are deferred to
`the-determinant-of-a-linear-operator`, order 84 — whose title in
`plan-spec.json` is literally *"The Determinant of a Linear Operator, Cofactors
and Cramer's Rule"*. That is a real page, one order later, whose declared topic
is exactly this material. Deferral to another page's topic is the permitted
disposition, and nothing is dropped.

**Source backing is genuine at the ring level**, which was my other worry.
Stephen New's MATH 146 notes work over a commutative ring explicitly (Notation
4.16 "matrices as tuples of columns over a commutative ring", Definition 4.21
"determinant over a commutative ring") and supply 16 rows across the whole
construction; Massot supplies a second ring-level treatment; Margalit–Rabinoff
supplies the real-level invertibility criterion. Two independent treatments, one
a textbook and one a full course-note set. Rule (a) is satisfied, and every one
of the 24 items maps to a harvested row.

**R4, two items, neither of them a split risk.**

1. **The B page has six items for a 24-item A page and no witness for
   multilinearity's boundary.** Four of the six are genuinely well-aimed —
   antisymmetric ≠ alternating in characteristic two, the naive quaternion
   $ad-bc$ failing alternation (marking commutativity), determinant $2$
   invertible over $\mathbb Q$ but not $\mathbb Z$ (marking exactly the unit
   condition), and row operations on a singular matrix over $\mathbb Z/6$. But
   `cor-determinant-is-alternating-multilinear-in-the-rows` and
   `thm-leibniz-determinant-is-alternating-multilinear-and-normalized` invite one
   specific false inference — that $\det$ is additive in the matrix — and nothing
   on the page marks it. $\det(I_2+I_2)=4\neq 2=\det I_2+\det I_2$. Add it; it is
   the only kind of item this B page lacks, and it is the only B page in the run
   with no `false-statement` entry.
2. **Ledger correction.** The decline for "linearly dependent rows or columns
   force zero determinant over the real field" reserves it for a page called
   **`invertibility-and-adjugate`**, which does not exist anywhere in
   `plan-spec.json` or `library/`. The material does belong at order 84; the
   reason simply needs the real id. This is the same defect class as batch 7's
   nonexistent Yoneda page, and a decline whose stated home does not exist cannot
   be checked.

I record but do not require one further decline: "a finite product of real square
matrices is invertible exactly when every factor is invertible" is two lines from
items 20 and 22. Its stated home (order 84, where the determinant homomorphism on
$\mathrm{GL}_n$ is developed) is real, so the decline passes the test.

**No split.** 29+8 and 24+6; both A pages are far below 60.

---

## What I checked, and how

Everything below was run or read from disk in this pass, not carried from the
first review.

- **Full dependency resolution and reading-order comparison**, all 9 batches:
  every `deps` entry of all 579 in-run items resolved against 2,895 published
  items mapped to their page files, plus the in-run manifests, with the re-home
  applied. 0 unresolved, 0 forward references, 0 same-page-later edges.
- **`requires` closure of the re-home destination**, computed transitively the
  way `validate-plan.mjs` computes it. This is what produced R1.
- **`coverage-checklist.mjs`** over all nine ledgers: 14 pages, 875 results, 0
  errors, 0 warnings.
- **Every decline reason in all nine ledgers** matched against the page ids in
  `plan-spec.json` and the in-run manifests. Three nonexistent homes found:
  batch 8's "later permutation-group development" and "structural study of
  subgroup coverings" (R2), batch 9's `invertibility-and-adjugate` (R4). Batch
  7's previously-nonexistent Yoneda id is confirmed gone.
- **Every added item's scaffold entry read in full** — strategy and deps, not
  just presence — for all thirteen additions across batches 2, 6, 7, 8 and 9,
  plus batch 5's two re-pointed dependency edges.
- **Both re-homed item files read in full** for forward wikilinks and positional
  prose, and every published consumer of them located and its page closure
  checked.
- `research/frontier-10-splice.mjs` read, to establish that it unions `requires`
  for in-run pages only and therefore will not fix R1 by itself.

## Blockers

1. **R1 — the re-home needs one `requires` edit that nothing currently owns.**
   Add `finite-counting-and-binomial-coefficients` to
   `rings-subrings-and-integral-domains`, staged with the rest of the re-home's
   page-list edits for the publishing commit, and taught to the step-4 splice so
   `validate-plan.mjs` stays green once the re-home is applied. Recorded here
   rather than prompted, and outside my Stage-0 write boundary in any case.
2. `research/frontier-10-published-amendments.md` still does not exist. Batch 8's
   notes correctly stage it at the publishing commit, so this remains not a
   step-3 defect — repeated so it is not lost.

## Next

Three pairs go back: batch 8 for R2 (two A items, one reason rewrite), and
batch 9 for R3 and R4 (two B items, three ledger rows). R1 goes to the
orchestrator. **Step 4 splices nothing until those three pairs come back clean;**
the other seven are `resolved` and need no further scaffold work from me. I
re-check the three, then move to Stage 1.

---

# Final re-check

Alpha-frontier-10, Stage 0 third pass. Scope is the three pairs the dispatch
names. The other eleven are settled and I reopened nothing on them.

**I authored nothing and edited no batch file, item, page or `plan-spec.json` in
this pass either.**

## Verdicts

| # | pair | verdict |
|---:|---|---|
| 12 | `group-actions-and-cayleys-theorem` (batch 8, R2) | **resolved** — one non-blocking ledger correction, L2 |
| 13 | `gaussian-elimination-and-row-reduction` (batch 9, R3) | **resolved** |
| 14 | `determinants-of-matrices-over-a-commutative-ring` (batch 9, R4) | **resolved** |

**All three read `resolved`, and step 4 may splice.**

---

### 12. `group-actions-and-cayleys-theorem` — **resolved**

Both declines that named a nonexistent home are built, and at the two positions
I named rather than appended:

- `thm-conjugates-of-proper-subgroup-do-not-cover-finite-group` is A item 18,
  directly after `thm-conjugate-subgroups-are-counted-by-the-normalizer` (item
  17), the theorem that supplies its count.
- `thm-jordans-derangement-theorem` is A item 31, directly after
  `thm-cauchy-frobenius-orbit-counting` (item 30).

A page 29 → 31, so 37 with the six published items and 53 across the pair. Far
below 60; no split.

**Both carry real harvest rows against the source, not invented ones.** Conrad's
locator now reads "§6, pp. 23–25, Theorem 6.2 through Theorem 6.10", and 6.6 →
Jordan and 6.10 → the covering theorem are both `included` naming the exact item
ids. All nine §6 headings, 6.2 through 6.10, now carry a disposition; nothing is
left off the end of a locator, which was the original defect. Provenance is
`literature-derived` statement with `ai-altered` proof for both — correct, since
Conrad states both and both proofs are rewritten onto this page's machinery.

I read the proof contracts, not just the presence of the items.

- Jordan's specialises the integral Cauchy–Frobenius identity: transitivity makes
  $X/G$ a singleton, so $\sum_{g}|X^g|=|G|$; the identity contributes $|X|\ge2$;
  if each of the remaining $|G|-1$ elements fixed a point the sum would be at
  least $|G|+1$. Rewriting it without division was the right call — no averaging
  step then needs licensing. The `one` boundary discharges $|X|>1$ explicitly,
  and the transitivity clause is cited from the published `def-group-action`,
  which is where the library defines it.
- The covering theorem's is the route I named: $m=[G:N_G(H)]$ conjugates, each of
  cardinality $|H|$ and each containing $e$, so the union has at most
  $1+m(|H|-1)$ elements; $H\le N_G(H)$ with Lagrange gives $m\le n=[G:H]$, and
  $n\ge2$ gives $1+n(|H|-1)=|G|-n+1<|G|$. The one-conjugate (normal $H$) and
  trivial-subgroup boundaries are both dispositioned — that is where this
  argument is usually left open.

**L2 — ledger correction, non-blocking, the same class as L1.** Theorem 6.9's
reason was rewritten and is now checkable, which is exactly what I required and
all I required. Checking it: the named home `monoids-groups-and-subgroups` is a
real page, but at order 24 it carries `lem-intersection-of-subgroups` and no
index material whatever — `def-index` and `thm-lagrange` live on
`cosets-and-lagranges-theorem`, order 32, titled *Cosets, Index and Lagrange's
Theorem*, which already carries `cor-index-tower-finite`, the index
multiplicativity that 6.9 generalises. The substance of the reason is right —
$[G:H\cap K]\le[G:H][G:K]$ and its coset-pair proof are index calculus, not
action theory — and only the page id is wrong. Both candidate homes are
published and earlier than 42, so the disposition routes 6.9 to a future
enrichment of that page rather than to a later build; batch 8 *is* such an
enrichment and batch 7 defers to earlier published pages the same way, so this
is a real routing and not a disguised drop. Correct the id before the step-6
harvest-faithfulness check. It changes no item, which is why it does not block.

### 13. `gaussian-elimination-and-row-reduction` — **resolved**

`cex-solution-count-trichotomy-fails-over-a-finite-field` is B item 9 (8 → 9)
and is the item I named. Over $\mathbb F_2$, $x+y=0$ has exactly $(0,0)$ and
$(1,1)$, so a two-element solution set is neither a singleton nor infinite and
`cor-solution-count-trichotomy-over-an-infinite-field` loses its conclusion the
moment the field is finite. It cites the corollary it bounds and
`thm-z-mod-p-is-a-field`, and its contract exhausts $\mathbb F_2^2$ explicitly
rather than asserting the count. **It marks a hypothesis rather than restating
the A page:** the A page never touches a finite scalar field, and this is the
page's one explicitly hypothesised theorem.

Both required `canonical` rows exist and are in the `canonical` list, so no
source's `contents` was inflated with a heading it does not have. LU
factorisation is `out-of-scope` on triangular factorisation with pivot and
leading-minor hypotheses; the rank normal form is `out-of-scope` because it
classifies under two-sided equivalence and needs column operations this page
does not develop. Both are result-specific and both match what I said when I
declined to require the items themselves. Neither result is now invisible, which
was the whole point.

### 14. `determinants-of-matrices-over-a-commutative-ring` — **resolved**

`fs-determinant-is-additive-on-matrices` is B item 7 (6 → 7) and is the item I
named, as a `false-statement` — the tier this B page previously lacked entirely.
$A=B=I_2$ over $\mathbb R$ gives $\det(A+B)=\det(2I_2)=4\neq2$. **It marks the
boundary of items 11 and 15 rather than restating them:** multilinearity is
linearity in one row or column with all others held fixed, and the item states
that restriction as the reason the false inference fails, instead of repeating
the theorem. Its statement is `literature-derived` — a source states the false
claim exactly — with an `ai-altered` proof.

The third ledger row is corrected. `invertibility-and-adjugate` has **0
occurrences** anywhere on disk; the decline for real linear dependence forcing a
zero determinant now names `the-determinant-of-a-linear-operator`, order 84 —
real, one order after this page, and titled *The Determinant of a Linear
Operator, Cofactors and Cramer's Rule*, which is the declared home of the
adjugate material this criterion needs.

### One observation across both batch-9 additions — recorded, not required

Each new item took over a harvest row that previously pointed at the positive
A-page result: Hefferon's solution-size paragraph moved from
`cor-solution-count-trichotomy-over-an-infinite-field` to the counterexample, and
Margalit–Rabinoff's Multilinearity Property moved from
`thm-leibniz-determinant-is-alternating-multilinear-and-normalized` to the false
statement. Beta-9 recorded the choice and its reason, and kept independent
backing for both A items — Margalit–Rabinoff §1.3.2 for the corollary, New's
notes and the existence theorem for the alternating-multilinear theorem — so
nothing is orphaned and no heading is undisposed. I would have put the positive
heading on the positive item and carried each boundary item on a `canonical`
row, which is how batches 6 and 8 handled the same situation. It changes no
item; noting it so the reading is on the record at step 6.

## What I checked, and how

Everything below was run or read from disk in this pass.

- **Full dependency resolution and reading-order comparison, all nine batches**,
  with the re-home applied: **583 in-run items against 2,895 published items
  mapped, 0 unresolved and 0 forward references.** The four new items add no
  edge that points forward or sideways: batch 8's two resolve within their own
  page and to orders 20 and 32, batch 9's two to their own A pages and to
  published field/ring items.
- **`coverage-checklist.mjs` over all nine ledgers**: 14 pages, **877** harvested
  results, 0 errors, 0 warnings (was 875 before the four additions).
- **`node tools/gates.mjs --step 0 --run frontier-10`: STEP 0 CLEAR**, 583 scoped
  items, 0 errors, 0 warnings.
- **Every decline reason in all nine ledgers re-scanned for page-id claims.** All
  three nonexistent homes I found last pass are gone; no new one appeared. The
  surviving page targets all resolve in `plan-spec.json`, and I checked each
  one's order against its citing page.
- **All four new items read in full** — deps, contract derivations, step input
  maps, boundary dispositions, provenance rows and harvest rows — plus the
  on-page theorems each was required to consume.
- `research/frontier-10-splice.mjs` re-read: R1 is taught, including the branch
  for an `EXTRA_REQUIRES` page that no batch manifest contains, which is exactly
  what the re-home destination is.

## Blockers

1. **R1 is closed as a step-4 blocker.** `EXTRA_REQUIRES` in
   `research/frontier-10-splice.mjs` adds `finite-counting-and-binomial-coefficients`
   to `rings-subrings-and-integral-domains`, and the script errors rather than
   silently skipping if that page is absent. Verified from disk, not taken from
   the dispatch.
2. `research/frontier-10-published-amendments.md` still does not exist. Batch 8's
   notes stage it at the publishing commit, so this remains not a step-3 defect —
   repeated once more so it is not lost.

## Next

Stage 0 is complete. All fourteen pairs are `resolved` or `sufficient`, and
**step 4 may splice.** Two ledger corrections ride along and block nothing: L1
(batch 4's MIT syllabus row → Rudin Ch. 6 directly) and L2 (batch 8's Theorem 6.9
home → `cosets-and-lagranges-theorem`). I verify both at step 6 with the rest of
the harvest-faithfulness check. I move to Stage 1.
