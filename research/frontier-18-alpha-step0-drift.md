# frontier-18 — step-0 prerequisite-drift review

Alpha, drift-review dispatch, 2026-08-24. One question per A page in scope: does
a track design require a prerequisite that `research/plan-spec.json`'s declared
`requires` closure lacks? Evidence read:
`research/frontier-18-drift-evidence.json`, then every candidate checked against
the design section the evidence points into — the per-pair `requires` line and
the surrounding prose — never against the `mentionedNearby` reading list, which
is noise by construction and behaved that way here.

**Dispositions: 10 no-drift, 4 drift-applied, 13 backward edges added.** No
minting, no reordering, no rescoping, nothing blocked. `plan-spec.json` was the
only file edited and only its `requires` arrays; no `order` value changed, no
page was added, and no item file, library page, manifest or ledger was touched.
`node tools/validate-plan.mjs research/plan-spec.json` exits 0 after every edit,
with `redundant-prereq` advisories only. No permission was requested at any point.

## Read this first: this node ran after the Betas, not before

The stage's premise is that it runs ahead of any Beta, so that drift costs one
spec line instead of a rewrite. **That did not hold on this run.** The task files
were written at 03:06 and this review was dispatched at 13:11; all ten batch
manifests were scaffolded in between (batch 5's notes were last written at 06:21).
Every one of the fourteen pairs is fully scaffolded — items, coverage, notes and
proof contracts.

Two consequences, both material:

1. **Minting and rescoping were not available.** `tools/drift-apply.mjs`, which
   materialises those two verdicts, refuses a run whose manifests already carry
   authored items — `drift-apply-scaffolded`, verified here with `--dry-run`,
   which wrote nothing. That guard is right: regenerating the scope ledger over
   ten scaffolded batches would destroy authored work and then confirm the loss.
   So a `drift-minted` or `drift-rescoped` verdict on this run would have been
   unmaterialisable, and — because a minted page absent from the scope ledger
   reads as an unbuildable edge — would have taken its citing page and everything
   downstream of it out of the build. The run survived this only because every
   live finding turned out to be a backward edge onto a published page.
2. **The scaffolds are better evidence than the designs, and I used them.** With
   the item lists on disk I could ask the question the designs only approximate:
   which dependencies do the authored scaffolds actually cite, and which of those
   fall outside the declared closure? That is precisely what step 4 fails on with
   `undeclared-prereq`. Resolving each design finding against the scaffold moved
   four verdicts, in both directions — two design-stated prerequisites turned out
   not to be taken, and three pages turned out to cite pages no design named.
   Every section below records both readings.

**For the owner:** the `1-drift` stage ran out of order on this run. Nothing here
is lost, but the guarantee the stage exists to provide was not in force, and the
next run should not rely on a late drift node being harmless.

## Two findings that are not mine to fix

- **`the-divergence-theorem-and-classical-stokes`** and
  **`extraspecial-p-groups-and-central-products`** are scaffolded well past their
  designs' inventories (44 and 46 A items against 24 designed for GT-2), and
  `lattice-paths-and-catalan-numbers` is scaffolded *narrower* than its operative
  design in one specific way recorded in its section below. Scaffold breadth and
  depth is the **step-3 Alpha's** call, not a step-0 spec edit.
- **`holomorphic-functions-of-several-variables-examples` cites a B item.** Its
  `fs-separately-real-analytic-functions-are-jointly-continuous` and
  `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`
  both depend on `cex-partial-derivatives-without-continuity`, which lives on
  `the-total-derivative-examples` — a B page, and therefore a leaf. This cannot be
  repaired with a `requires` edge: `validate-plan` rejects a B-page dependency
  outright, so declaring it would trade one failure for another. The scaffold must
  cite the A-page result or carry its own counterexample. Routed to step 3 and the
  owning Beta; it is the one dependency in the whole scoped set still outside its
  declared closure after these edits.

---

### lagrange-four-square-theorem

Read `research/plan-number-theory-track.md` §NT-5 (lines 578-655): its prose
`Requires:` line — "NT-2 and the published prime-factorisation, congruence, and
finite-counting pages" — the A-page item table, the descent argument and the B
page. NT-2 is `quadratic-residues-and-the-legendre-symbol` (57.003), which the
closure carries, as it carries `primes-and-the-fundamental-theorem-of-arithmetic`
(28), `congruences-and-the-chinese-remainder-theorem` (30) and
`finite-counting-and-binomial-coefficients` (20), all four through the declared
`sums-of-two-squares-examples`. The section's scope sentence rules out the only
prerequisites that would have fallen outside it: no quaternions, no lattices, no
Minkowski, neither higher number-theory block. Checked against the scaffold: the
authored pair cites nothing outside its declared closure.

VERDICT: no-drift

### extraspecial-p-groups-and-central-products

Read `research/plan-group-theory-track.md` §GT-2 (lines 571-680) with its
`**requires**` line at 574-575, §1's "Seams consumed" list at 112-114 and §3's
dependency table at 289. The design states a second prerequisite three times and
identically: GT-2 requires `frattini-subgroups-and-the-burnside-basis-theorem`
**and** `dual-spaces-bilinear-forms-and-inertia`, the latter supplying
"alternating/quadratic forms, radicals, and
`thm-alternating-forms-have-a-symplectic-normal-form` for `GT-2`", against a
designed inventory whose items 8-16 and 20 rest on it.
`dual-spaces-bilinear-forms-and-inertia` is published at order 92 and is not in
the 40-page closure, and at the pair's 71.003 the edge points forward.

**The scaffold does not take it.** Of 46 authored A items, exactly zero cite any
item of `dual-spaces-bilinear-forms-and-inertia`; the ten published items it does
cite all come from `frattini-subgroups-and-the-burnside-basis-theorem`, already
declared. The Beta built the linear algebra self-contained and by a different
route: `def-commutator-pairing-of-an-extraspecial-p-group`,
`lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating`,
`lem-the-commutator-pairing-is-nondegenerate`,
`lem-orthogonal-complement-counting-for-the-commutator-pairing` and
`cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank`,
reaching
`thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed`
through `lem-two-noncommuting-elements-...-generate-a-subgroup-of-order-p-cubed`
rather than through a symplectic normal form. The 2-group classification goes by
counting elements of order dividing two, not by a quadratic form and an Arf
invariant. That is the owner's self-contained-scope rule working as intended, and
it is a genuinely different argument, not a restatement of the published theorem.

So the closure lacks nothing the page uses. I declined to add the edge: it would
be an unused dependency, which the citation-fidelity rule forbids, and it would
have forced a 22-slot reading-order move of an already-scaffolded pair to buy
nothing. That the scaffold diverges from its design here — dropping the Arf
invariant and the published symplectic route — is a **step-3 breadth question**,
recorded for that Alpha, not a step-0 drift edit.

VERDICT: no-drift

### finite-fields-and-cyclotomic-extensions

Read `research/plan-algebra-track.md` §GA-3 (lines 2789-2900), its `**requires**`
line at 2793-2795, the placement table at 2426 and the well-definedness ledger at
4432. The design names three prerequisites and flags the third itself: "The third
`requires` is load-bearing and is the one that would be missed" —
`triangularisation-and-jordan-canonical-form`. `the-galois-correspondence` (100)
and `congruences-and-the-chinese-remainder-theorem` (30) were already in the
closure through the declared `the-galois-correspondence-examples`; the third was
not.

The edge is applied and **confirmed live against the scaffold**: the authored page
cites three of its items —
`thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials`,
`def-cyclic-subspace-vector-and-vector-annihilator` and
`thm-cyclic-subspace-power-basis-and-companion-matrix` — so without this edge step
4 would have failed on it. Order 90 against the page's 101.2, so it points
backward. Obligation #G2 is discharged by the published
`thm-monic-polynomial-division`, already in closure.

VERDICT: drift-applied — added `triangularisation-and-jordan-canonical-form` (order 90)

### noetherian-rings-and-hilbert-basis

Read `research/plan-commutative-algebra-track.md` §CA-1 (lines 205-235) and the
added-decomposition rows at §10.4 (3086ff). The design's prose `Requires:` names
`chain-conditions-and-semisimple-modules`, `ideals-and-quotient-rings`,
`polynomial-rings-and-roots` and `the-field-of-fractions-and-localisation`; all
four are in the closure through the declared
`modules-over-a-pid-and-canonical-forms-examples` (108, 48, 52, 53.2), and on the
design reading alone this page is clean.

The scaffold says otherwise on one point. Its
`def-invariant-subring-of-a-group-of-ring-automorphisms` — the Artin-Tate /
invariant-ring material the design takes from Altman-Kleiman (16.21) — cites
`def-symmetric-polynomial`, which lives on the published `symmetric-polynomials`
(58). That page was in no design `requires` line and in no closure, and it is
exactly the undeclared prerequisite step 4 would have rejected. Order 58 against
111.001, backward; applied.

VERDICT: drift-applied — added `symmetric-polynomials` (order 58)

### lattice-paths-and-catalan-numbers

Read `research/plan-combinatorics-and-categories.md` §22 CB-6 (ENRICHED) at lines
4668-4712, having first confirmed §22 is the operative design: the file's READ
FIRST header records the 2026-08-13 enrichment and states that §§1-16 "are stale
in their CB/GT parts", so the §11 CB-6 text at 1598 is superseded. The operative
`requires` line names five prerequisites: CB-5, `formal-power-series`, **CB-15**,
`symmetric-groups-and-the-sign-homomorphism` and
`determinants-of-matrices-over-a-commutative-ring`. Four are in the closure (195,
193, 44, 82). **CB-15 has no entry in `plan-spec.json` at all** — no page id, no
order — and §22 CB-15 (4519ff) is a substantial design: combinatorial classes,
SEQ/MSET/PSET/CYC, recursive specifications and the $x$-adic fixed-point theorem.

**The scaffold does not take it.** All 51 authored A items build the Catalan
material by the routes §11 already carried and CB-6 keeps: reflection, the cycle
lemma, the first-return decomposition, and the generating function through the
published `cor-unique-formal-root-with-constant-one` on `formal-power-series`,
plus the bijections and Lindström-Gessel-Viennot. There is no combinatorial class,
no SEQ or MSET or CYC, no specification and no fixed-point theorem anywhere in the
page, and the two additions that would have needed them — Motzkin and Schröder
numbers "via CB-15 specifications" — were not scaffolded. Every dependency the
page does cite is inside its declared closure.

I did not mint. Minting is the disposition the brief prescribes for a
not-in-spec prerequisite, and had this node run at its proper place I would have
taken it. Here it would have been actively destructive: `drift-apply` cannot
materialise a mint on a scaffolded run, so the minted page would never reach the
scope ledger, and a `requires` edge onto a page that is neither published nor
built by the run makes `lattice-paths-and-catalan-numbers` unbuildable and with it
everything downstream — the exact `frontier-16` failure the drift gate was written
to catch. Trading a page the scaffold does not need for a page the run cannot
build is not a repair.

The unbuilt CB-15 and the dropped Motzkin/Schröder additions are recorded here for
the **step-3 Alpha** as a breadth finding, and CB-15 remains genuinely missing from
the plan for a future run to mint at its stated anchor, immediately after
`formal-power-series-examples` (194).

VERDICT: no-drift

### linear-algebra-methods-in-combinatorics

Read `research/plan-combinatorics-and-categories.md` §23 CB-13 (ENRICHED) at
5323-5360. Its `requires` line names `inner-product-spaces-and-orthogonality`,
`gaussian-elimination-and-row-reduction`,
`finite-counting-and-binomial-coefficients`,
`inclusion-exclusion-and-the-pigeonhole-principle`, `polynomial-rings-and-roots`,
and `the-field-of-fractions-and-localisation` carrying the design's own refusal,
"(no — see traps)", so that one is not a prerequisite. All five real ones are in
the closure (94, 80, 20, 22, 52). The section's remark that
`inner-product-spaces-and-orthogonality` "carries 0 items" is a publication-state
note about an already-declared edge, and the design works around it deliberately,
introducing the standard form "explicitly as a bilinear form and not as an inner
product". Checked against the scaffold: nothing cited falls outside the closure.

VERDICT: no-drift

### the-divergence-theorem-and-classical-stokes

Read `research/plan-realanalysis-completion-track.md` §RC-9 (487-524) and the
2026-08-19 seam amendment in `research/plan-differential-geometry-track.md`
(3492ff). RC-9's `requires` line is exactly "RC-8,
`fubini-and-change-of-variables`": RC-8 is the declared
`regular-surfaces-and-surface-integrals` (288.00015) and
`fubini-and-change-of-variables` (237) is in its closure. Its other named inputs
are published items already inside that closure —
`thm-greens-theorem-for-finite-unions-of-elementary-regions`,
`lem-green-boundary-cancellation-under-finite-gluing`, the Poincaré lemma,
`cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`. The seam
amendment runs the other way: DG-14 must cite RC-8/RC-9, and both are "forbidden
to" mint a form, a manifold or an exterior derivative, so no differential-geometry
page becomes a prerequisite here. Checked against the scaffold, A page and B page
both: nothing cited falls outside the closure.

VERDICT: no-drift

### lebesgue-measure-on-euclidean-space

Read `research/plan-measure-theory-track.md` §MT-4 (1928-1990), its `requires`
line at 1930-1933, the choice ledger at 499-501, the well-definedness rows 7-10 at
559-562 and the harvest dispositions at 883 and 1064-1065. The design names seven
prerequisites: MT-3, `the-topology-of-euclidean-space`,
`compactness-in-metric-spaces` (Heine-Borel), `cantor-set-baire-and-measure-zero`,
`the-riemann-integral-in-rn-and-jordan-content`,
`determinants-of-matrices-over-a-commutative-ring` and
`gaussian-elimination-and-row-reduction`. The first four were reached
transitively; the Jordan-content page (harvest row 1065, "`already-published` —
`def-jordan-inner-and-outer-content` and the order-235 page") and the determinant
page (line 883, the linear change of variables
$\lambda_n(T(E))=\lvert\det T\rvert\lambda_n(E)$) were not, and both edges are
applied. Both are **confirmed live**: the scaffold cites six items of the first,
including `thm-lebesgue-criterion-in-rn` and
`thm-lipschitz-images-of-null-sets-in-rn-are-null`, and four of the second.

The scaffold then names three more pages no design line reaches, all published and
all cited by items the design itself calls for. `the-total-derivative` (229) via
`lem-euclidean-linear-maps-have-matrices-and-are-bounded`, under
`thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant`;
`inner-product-spaces-and-orthogonality` (94) via
`def-linear-isometry-and-orthogonal-or-unitary-operator` and
`cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`,
under `cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps` — the
orthogonal-invariance corollary of the same change-of-variables theorem;
`fubini-and-change-of-variables` (237) via
`thm-linear-images-scale-jordan-content-by-absolute-determinant`, under the
Jordan-content dictionary row the design owes; `separation-axioms` (261) via
`def-g-delta-and-f-sigma-in-a-topological-space`, under the Littlewood
characterisations and the regularity theorem the design names at row 500; and
`areas-of-elementary-plane-figures` (288.00007) via
`def-translation-of-a-set-in-rn`, under the translation-invariance theorem at row
501. Every one is backward against 288.007 and published. Seven edges in total on
this page, all applied.

VERDICT: drift-applied — added `the-riemann-integral-in-rn-and-jordan-content` (order 235), `determinants-of-matrices-over-a-commutative-ring` (order 82), `inner-product-spaces-and-orthogonality` (order 94), `the-total-derivative` (order 229), `fubini-and-change-of-variables` (order 237), `separation-axioms` (order 261), `areas-of-elementary-plane-figures` (order 288.00007)

### cayley-graphs-word-metrics-and-quasi-isometry

Read `research/plan-group-theory-track.md` §GT-10 (1449-1552), its `**requires**`
line at 1451-1452, §1's "Seams consumed" list (94-118) and §3's placement
paragraph and dependency table (275-301). The per-pair `requires` line names only
`free-groups-and-presentations` (60) and `metric-spaces` (116), both in the
closure, and on that line alone the page reads clean. **§1 is where the drift is,
and it is prose that never writes a `requires` line**: "Published combinatorics
supplies finite simple graphs and finite trees", and, of the planned
abstract-algebra pages, "this track cites rather than re-mints semidirect
products". Neither `graphs-walks-and-connectivity` (207) nor
`trees-forests-and-spanning-trees` (209) nor
`semidirect-products-and-automorphism-groups` (68) was in the 82-page closure.

The scaffold settles it: **twelve** dependencies of the A page fall outside the
declared closure, and they are exactly that seam. Nine items of
`graphs-walks-and-connectivity` — `def-finite-simple-graph`,
`rem-finite-simple-graph-convention`, `def-graph-walk-trail-path-and-cycle`,
`def-connected-graph-and-connected-component`, `def-graph-isomorphism-and-complement`,
`def-graph-distance-and-girth`, `lem-graph-distance-is-a-metric-on-each-component`,
`lem-every-graph-walk-contains-a-path-between-its-endpoints`,
`def-graph-adjacency-incidence-neighbourhood-and-degree` and
`def-multigraph-loop-and-digraph` — and two of `trees-forests-and-spanning-trees`,
`def-tree-forest-and-leaf` and `thm-tree-characterisations`. The Beta wrote the
agreement item the seam calls for,
`lem-the-graph-notions-agree-with-the-published-finite-graph-theory`, and it is
the single heaviest consumer. The B page adds two items of
`semidirect-products-and-automorphism-groups`,
`cor-dihedral-groups-as-semidirect-products` and
`def-generalized-dihedral-group`, under `ex-two-generating-sets-of-a-dihedral-group`
and `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers`; a B page
is a leaf and declares no prerequisites of its own, so that edge belongs on the A
page, which owns the pair's closure.

All three targets are published and all three point backward against 302.001. This
is the largest live finding on the run: without these edges step 4 would have
rejected this page on twelve citations, after they were written.

VERDICT: drift-applied — added `graphs-walks-and-connectivity` (order 207), `trees-forests-and-spanning-trees` (order 209), `semidirect-products-and-automorphism-groups` (order 68)

### the-winding-number-and-the-global-cauchy-theorem

Read `research/plan-complex-analysis-track.md` §CA-7 (1304-1360), its `requires`
line at 1306, well-definedness rows 8-9 (453-454), the choice ledger at 415 and
seam item 6 at 620-625. The design requires CA-6
(`the-identity-theorem-and-the-open-mapping-theorem`, 313) and
`the-topology-of-euclidean-space` (257) — exactly what is declared — and the route
is Dixon's homology proof throughout: chains, cycles, null-homology, the
entire-gluing lemma, the global formula. `homotopy-and-homotopy-equivalence` (289)
is outside the closure by design: seam item 6 states that HT-7's winding-number
dictionary "must remain **Remarks-only orientation with no dependency**, or become
a declared `forward_refs` to CA-7. It cannot be load-bearing. Symmetrically, CA-7
carries the backward citation and the agreement remark." A remark is not an edge,
and the chain places the homotopy tie-in at CA-17. Checked against the scaffold:
nothing cited falls outside the closure.

VERDICT: no-drift

### holomorphic-functions-of-several-variables

Read `research/plan-complex-analysis-track.md` §SC-1 (3115-3175), its `requires`
line at 3117-3119 and well-definedness rows 31-32 (476-477). The design names
**seven** prerequisites where the spec declares five: CA-6, CA-4,
`the-total-derivative`, `fubini-and-change-of-variables`, `rn-as-a-normed-space`,
plus `mixed-partials-taylor-and-extrema` and `absolute-convergence-and-rearrangement`.
The last two are load-bearing — row 32 requires the multivariable power series to
be well defined as an unordered absolutely summable family and says "cite the
unordered-summation material on `absolute-convergence-and-rearrangement`, do not
re-mint" — but both are already **in the transitive closure**, at 231 and 129,
reached through the five declared edges. The closure is what the drift question
asks about and it lacks nothing; adding either directly would only produce a
`redundant-prereq` advisory. Confirmed against the scaffold: the A page cites
nothing outside its closure.

The B page does, and it cannot be fixed here: see "Two findings that are not mine
to fix" above. `cex-partial-derivatives-without-continuity` lives on
`the-total-derivative-examples`, a B page and therefore a leaf, so the repair is a
scaffold edit for step 3, not a `requires` edge — `validate-plan` rejects a B-page
dependency outright.

VERDICT: no-drift

### ends-coends-and-weighted-limits

Read `research/plan-category-theory-track.md` §MA-5 (1440-1560): the
`**requires**` line at 1442-1443, all 24 A-page items, the explicit **Ordering
decision** paragraph and the traps. The design requires `limits-and-colimits`
(363) and `universal-properties-and-the-yoneda-lemma` (361), both in the closure
through the declared `monadicity-and-becks-theorem-examples`. The evidence's
reading list named four higher-order category pages —
`kan-extensions-density-and-the-free-cocompletion` (365.011),
`monoidal-categories-and-monoidal-functors` (365.023),
`closed-monoidal-categories-and-the-internal-hom` (365.027) and
`enriched-categories` (365.033) — and the Ordering decision exists to refuse them:
"Items 15-21 are strictly $\mathbf{Set}$-weighted and use only the published
ordinary functor-category and limit language. `MA-17` later supplies enriched
weights, tensors, cotensors... Thus neither page points forward and no definition
is used before it is minted." Item 20 is a remark that "only announces the later
issue"; the dependency runs the other way, MA-6 declaring this page. Checked
against the scaffold: all 49 A items and the B page cite inside the closure.

VERDICT: no-drift

### modules-substitution-and-prime-graphs

Read `research/plan-combinatorics-and-categories.md` §16 in the parts governing
this page: the §16.2 table row at 3898, §16.1's amendments to pre-existing
scaffolds, §16.3's item-level requirements and §16.4's coverage map, which assigns
Theorem 1.4, Alon-Pach-Solymosi, here. The declared
`erdos-hajnal-property-and-homogeneous-sets` (395) is the right and sufficient
edge — substitution preserves the EH property, so the page needs exactly the EH
vocabulary that page owns — and it reaches
`induced-subgraphs-and-hereditary-graph-classes` (393) and
`graphs-walks-and-connectivity` (207) through it. The four published pages §16.1
amends are all in the closure as well: `graph-colouring`, `ramsey-theory`,
`finite-probability-and-the-probabilistic-method` and
`the-logarithm-and-general-powers`, so the amendment debt creates no undeclared
edge. §16 opens by recording that every use of the regularity lemma "cites GT-19's
landmark item"; this page has none, and the regularity page is correctly absent.
Confirmed against the scaffold: nothing cited falls outside the closure.

VERDICT: no-drift

### sparse-restricted-subgraphs-and-rodl-nikiforov

Read the same §16 material for this page: the §16.2 row at 3900, §16.3 —
"Rödl/Nikiforov gets reduced-graph selection, induced-count bookkeeping and
parameter-transfer lemmas" — and §16.4, which maps Theorems 1.1-1.2 here. The
declared `regular-pairs-and-induced-counting` (399) is exactly the page carrying
regularity, slicing, induced counting and removal, which is what those lemmas are
built from, and it reaches `induced-subgraphs-and-hereditary-graph-classes` (393)
and `graphs-walks-and-connectivity` (207).
`erdos-hajnal-property-and-homogeneous-sets` (395) is outside the closure and the
design does not put it inside: Rödl and Nikiforov are density statements about
c-sparse and c-restricted sets, both defined on this page, and §16.4 routes the EH
property itself to 393-396 and the general bounds to 403. Confirmed against the
scaffold: all 26 A items and the B page cite inside the closure, 395 included in
neither.

VERDICT: no-drift
