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
