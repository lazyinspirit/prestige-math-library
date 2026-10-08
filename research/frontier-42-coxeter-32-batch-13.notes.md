# Batch 13 — Finite Coxeter Diagrams and Complete Classification (run `frontier-42-coxeter-32`)

Owned pair: `finite-coxeter-diagrams-and-complete-classification` (A, order 1742) and
`finite-coxeter-diagrams-and-complete-classification-examples` (B, order 1743), category
`coxeter-groups`. Ten scaffold items (five A, five B), all recorded `ready`. This is Step-1
scaffold construction: every item is a proof contract with a statement, a proof strategy,
sources and explicit dependencies; no item body is authored here and no result is certified.

## Design conformance and plan/spec conflicts

The design section is `research/plan-coxeter-groups-track.md` CG-10 (L276). Its five named
supplier contracts are exactly the five A-page items (IDs unchanged from
`research/coxeter-scaffold/inventory.json`), its `Requires:` line is
`tits-cones-chambers-and-parabolic-stabilizers`, and its B companion asks for Gram
determinants in I2(m), H3 and H4, the Bn/Cn comparison, cycle and overlong-arm failures, A1
and products, and the low-rank coincidences. The generated companion file
`research/frontier-42-coxeter-32-batch-13.task.md` repeats that scope. `research/plan-spec.json`
pages[1741]/[1742] declare the same A/B ids, order, category, companion and `requires`
(the plan-spec item lists are empty for the whole Coxeter track, so the contracts come from
the design plus inventory). **No design-versus-spec conflict was found.** The owner authoring
direction (`research/frontier-42-coxeter-32-owner-authoring-direction.md`) was read first; it
requires the richest sound promised claims, exact finite/noncrystallographic breadth and local
proofs rather than citations, and the manifest preserves exactly that (noncrystallographic
H3, H4, arbitrary I2(m), complete diagram classification, no Dynkin-only reduction).

Two deliberate, recorded refinements of the design text:

1. **Dependency sets** (`depends_on` in the inventory is design input, not a proof fact). The
   inventory suggested `thm-cg-tits-cone-interior-and-local-finiteness` for items 1, 3, 4 and 5.
   The manifest declares only the mathematically used suppliers: the definition needs no
   Tits-cone input, the exclusions lemma needs neither the criterion nor the interior theorem
   (its hypothesis is positive definiteness of B and its witnesses are explicit), and the
   classification theorem consumes the criterion plus the exclusions. The page prerequisite
   `tits-cones-chambers-and-parabolic-stabilizers` is genuinely used: item 3 consumes
   `thm-cg-dual-chamber-intersections-and-point-stabilizers` (collision/stabilizer theorem) for
   the isolation of the identity. This deviation is recorded here and in the readiness records.
2. **Route to "positive definite implies finite"**. The design's own instruction (no unproved
   spherical developing-map theorem) is implemented as: faithful canonical representation,
   dual form `B*`, disjoint open chambers give isolation of the identity in `rho*(W)`, closure
   and boundedness of `O(B)` in `End(V) = R^(n^2)`, choice-free Heine-Borel, and a translate
   count. Davis proves the same direction through spherical simplices; the selected route is
   the one commissioned by `research/coxeter-scaffold/classical-source-report.md` and
   `geometric-source-report.md`, and it is the route of the second independent treatment
   (Jean Michel, Proposition 5.14).

## Items built, in prerequisite order

| # | item | kind | level |
|---|---|---|---|
| A1 | `def-cg-coxeter-diagram-components-and-finite-type` | definition | 1 |
| A2 | `lem-cg-diagram-products-and-invariant-form-comparison` | lemma | 6 |
| A3 | `thm-cg-finite-type-positive-definite-criterion` | theorem | 13 |
| A4 | `lem-cg-positive-definite-diagram-exclusions` | lemma | 2 |
| A5 | `thm-cg-finite-coxeter-classification-including-h-and-dihedral` | theorem | 14 |
| B1 | `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences` | example | 15 |
| B2 | `ex-cg-h3-and-h4-gram-determinants-and-principal-minors` | example | 15 |
| B3 | `ex-cg-bn-and-cn-are-the-same-coxeter-diagram` | example | 15 |
| B5 | `ex-cg-cycle-and-overlong-arm-nonpositive-witnesses` | example | 3 |
| B4 | `ex-cg-path-determinant-recursion-and-arm-inequality` | example | 15 |

(B5 precedes B4 because B4 cites B5; both are on the B page.)

Every item carries `dependency_level`; the labels are `1 + max(level of in-run deps)` with
level 0 for in-run deps at level 0, and published and other out-of-run suppliers do not raise a
level. `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports no
label, dependency or cycle error for any batch-13 item (the only lines naming batch 13 are
none; the reported errors are other batches' empty scaffolds and batch-15 label mismatches).

## Dependency verification (examined, not assumed)

Declared `deps` were checked to resolve (`node tools/manifest-deps.mjs`, 10 items, 0 errors)
and their statements/strategies were read for adequacy. In-run suppliers read in the current
manifests:

- batch 2: `def-hh-coxeter-matrix-word-group-and-length` (presentation, universal property,
  `m(s,t) = ord(st)`); `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  (support invariance, intrinsic parabolic presentation, restricted length).
- batch 4: `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`,
  `lem-cg-reflection-representation-descends-and-root-norms`,
  `def-cg-dual-chambers-and-reflection-hyperplanes`,
  `lem-cg-dual-action-and-chamber-faces-exist`.
- batch 7: `thm-cg-root-length-criterion-and-faithfulness` (disjointness of open chambers and
  faithfulness, used for the isolation and for `|W| = |rho*(W)|`).
- batch 9: `thm-cg-dual-chamber-intersections-and-point-stabilizers` (collision theorem
  `w.f = g` with `f,g` in the chamber and `w` in the stabilizer, used in the isolation step and
  in the `2r`-element computation of B1).

Checks actually made on conventions and directions: the label convention (label 3 omitted,
`m = 2` draws no edge, `m = infinity` allowed and later excluded by the neighbour inequality);
the sign/entry convention `B(e_s,e_t) = -cos(pi/m)`, hence `c(s,t) = cos(pi/m) >= 1/2` for
`m >= 3` and `c = 1` for `m = infinity`; the direction of the fixed-hyperplane argument
(`beta(e_s,.) = lambda_s B(e_s,.)` with the *fixed* hyperplane `ker B(-,e_s)` of `r_{e_s}`,
never the `-1` eigenspace); the propagation of `lambda` along edges only (labels 2 give
`B(e_s,e_t) = 0`); the direction of the cycle witness (`B(u,u) = r - 2 r (1/2) = 0` for the
all-3 cycle) and of the star/arm witnesses; the path recurrence
`d_k = d_{k-1} - cos^2(pi/m_{k-1}) d_{k-2}` with `d_1 = 1` (cosine matrix, not `2C`); the
strict Cauchy-Schwarz step `(i+1)(j+1) > 4ij cos^2(pi/m)` (strictness from linear
independence of the two weighted chain vectors, since they are supported on disjoint vertex
sets); the source table values `det(2C)` for A_n (n+1), B_n (2), D_n (4), E_6/E_7/E_8 (3/2/1),
F_4 (1), H_3 (3-sqrt5), H_4 ((7-3sqrt5)/2), I_2(m) (4 sin^2(pi/m)); the sign of `3-sqrt5 > 0`
and `(7-3sqrt5)/2 > 0` (from `sqrt5 < 3` and `3 sqrt5 < 7`); and the three-arm inequality
`1/(p+1)+1/(q+1)+1/(r+1) > 1` with exactly the boundary triples (1,2,5), (2,2,2), (1,3,3).
No missing, circular, forward or inadequate dependency was found; no B-page item depends on a
later page; no item depends on a later same-page item.

## Sources: full texts fetched, stamped and inspected

1. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (first-edition author
   manuscript, `https://people.math.osu.edu/davis.12/davisbook.pdf`, `sha256_16
   ccefbb950fdcfce9`, 600 PDF pages, identical to the copy read by the sibling batches).
   Read for this pair: Section 6.9 (Theorem 6.9.1 and Table 6.1, printed pp. 103-104);
   Section 6.12 (canonical representation, Lemma 6.12.2 on proportional invariant forms,
   Proposition 6.12.7, Corollary 6.12.8, Theorem 6.12.9 with proof, printed pp. 115-120);
   Appendix C in full (Theorems C.1.2-C.1.4, Lemma C.2.1, Lemma C.2.2, Lemma C.2.3, Table C.1,
   Lemma C.3.1 and the proofs of C.1.2-C.1.3, printed pp. 433-438); Theorem D.1.1 and
   Corollary D.1.3 (printed p. 440).
2. **J. Michel, _Lectures on Coxeter groups_** (Beijing lecture notes, April-May 2014,
   `https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf`, `sha256_16 94731c97ae760919`,
   15 PDF pages) — a second, independent treatment newly harvested for this batch. Read:
   Section 5 "Classification of finite Coxeter groups", the preliminary list and table of
   cosines (printed pp. 12-13), Proposition 5.14 with its proof, Theorem 5.15 with the full
   two-part proof including properties (i)-(vii) of a connected spherical graph (printed
   pp. 13-15), and Exercise 5.16 only as the recorded out-of-scope integrality remark.

Harvest dispositions (24 rows across the two sources, all naming this pair's items or a
destination): 12 `included` (Davis Theorems C.1.2/Table 6.1 left column, D.1.1 with
Corollary D.1.3, Table C.1 rows for H_3/H_4 and B_n, formulas (C.1)-(C.2), the C.3 exclusion
chain; Michel's preliminary list, Proposition 5.14(ii), Theorem 5.15 first part and the
property list), 6 `inline` (Davis Theorem 6.12.9 (iii)=>(ii), Lemma C.2.2, Lemma C.2.3,
Lemma C.3.1; Michel Proposition 5.14(i), Lemma 5.7), 1 `deferred` (Davis Theorem C.1.3 and the
Euclidean column of Table 6.1 -> `affine-coxeter-diagrams-and-semidefinite-classification`,
the run's later affine classification page), and 5 `out-of-scope` (the spherical-simplex
equivalence (i) of Theorem 6.12.9, the hyperbolic classification C.1.4/Table 6.2, the Lannér
trichotomy, Corollaries 6.12.11-6.12.12, and Michel Exercise 5.16), each with its specific
reason in the coverage file. No source was dropped and no `source_resolution` was needed.

Source caveat: Davis states that his Appendix C proof "is essentially the one given by
Humphreys [163]" and that it "gives no hint as to how one might discover the list". The two
treatments read here (Davis and Michel) are independent in method — domination via affine
subdiagrams with determinant computations versus the neighbour inequality, folding and the
chain/arm inequalities — so the A page is backed by two genuinely independent treatments, one
a monograph and one a full lecture-note set. Humphreys' book was located (a scanned copy
without a text layer) and is **not** claimed as read.

## Checks run (actual results)

| check | command (prefix `node tools/`) | result |
|---|---|---|
| manifest dependency fields (batch) | `manifest-deps.mjs research/frontier-42-coxeter-32-batch-13.pages.json` | `10 item(s), 0 normalized, 0 error(s)` |
| manifest dependency fields (whole run) | `manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `124 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (batch with suppliers 2, 4, 7, 9) | `content-policy.mjs --manifest-only ...batch-{2,4,7,9,13}.pages.json` | `45 scoped item(s), 0 error(s), 0 warning(s)` |
| scaffold policy (whole run) | `content-policy.mjs --manifest-only ...batch-*.pages.json` | `124 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `coverage-checklist.mjs ...batch-13.coverage.json --require-destination` | `1 page(s), 24 harvested result(s), 0 error(s), 0 warning(s)` |
| full-text fetch | `source-fetch-check.mjs --coverage ...batch-13.coverage.json --stamp` then check mode | `2/2 source(s) fetch-verified (2 newly stamped)`; check mode `2/2 resolved`, exit 0 |
| URL liveness | `url-sweep.mjs --coverage ...batch-13.coverage.json --out /tmp/b13/url-liveness.json --recover --fail-on-dead` | `2/2 live; 0 failed`; output written to `/tmp` to avoid touching the run's shared artifact |
| source backing | `source-backing.mjs --coverage ...batch-13.coverage.json --liveness /tmp/b13/url-liveness.json --reharvest-plan /tmp/b13/reharvest.json --require-verified` | `7 authored result(s) across 1 file(s), every one still backed`; empty work list |
| manifest integrity | `manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| drift review | `drift-review-check.mjs --run frontier-42-coxeter-32` | `32 page(s) reviewed, 0 spec edit(s) applied, no blocked edges` |
| plan | `frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0 (page level; item lists are validated per batch by the manifest checks) |
| dependency levels (whole run) | `item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with `empty scaffold inventory` lines for the not-yet-scaffolded sibling pages and three batch-15 label mismatches; **no line names a batch-13 item**, so every batch-13 label equals the computed value |
| readiness (whole run) | `step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 124`; no work entry names a batch-13 item: all ten records are current |
| dependency ledger | `frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0 (refreshed and deduplicated) |
| wikilink/deps consistency | local extraction of every `[[...]]` in the manifest statements and strategies | 0 unresolved links, 0 links outside `deps`/`justified_by`/same-page ids, 0 forward same-page dependencies |

## Self-review corrections before hand-off

Two full re-reads of the ten statements and strategies against the sources found and corrected
these defects, after which all ten readiness records were re-recorded:

1. `thm-cg-finite-type-positive-definite-criterion` (3): the transport of discreteness from
   `rho*(W)` to `rho(W)` was implicit; the strategy now names the transpose-inverse
   homeomorphism `g -> (g^{-1})^T` carrying `O(B)` onto `O(B*)` and `rho(W)` onto `rho*(W)`.
2. `lem-cg-positive-definite-diagram-exclusions` (1) had cited Sylvester's criterion for the
   witness principle; the principle is immediate from the definition of positive definiteness
   (a nonzero vector with `B(u,u) <= 0`), so the citation was removed and the unused
   transpose dependency dropped. Clause (3) now lists "no label is infinity" explicitly, which
   the neighbour inequality gives.
3. `ex-cg-h3-and-h4-gram-determinants-and-principal-minors`: the strategy's displayed
   computation of `det(2C)(H_3)` was numerically wrong; corrected to
   `2*3 - 4 cos^2(pi/5)*2 = 6 - 8 cos^2(pi/5) = 3 - sqrt5`, and the statement now records the
   second `2x2` principal minor `(5-sqrt5)/2` as well.
4. `ex-cg-dihedral-gram-determinants-and-low-rank-coincidences`: the claim `|W| = 2r` needs
   faithfulness; `thm-cg-root-length-criterion-and-faithfulness` was added to `deps` and the
   strategy now gives the distinctness argument for the `2r` maps
   (`rho(s)rho(t)` of exact order `r`, and `det rho(s) = -1`).
5. `ex-cg-bn-and-cn-are-the-same-coxeter-diagram`: the strategy's phrase about the final label-4
   edge was garbled; it now displays `det(2C)(B_n) = 2 d_{n-1} - 4 cos^2(pi/4) d_{n-2} =
   2 d_{n-1} - 2 d_{n-2}`.
6. `ex-cg-cycle-and-overlong-arm-nonpositive-witnesses`: the statement had claimed positive
   definiteness of `E_8` and `D_{r+3}` through the exclusion lemma (6), which only states the
   necessary inequality; reworded to avoid that claim, and the `1/60` residual for arms
   (1,2,4) appears in the strategy as a check of the inequality, not as a proof of positivity.
7. Three dependency-consistency fixes: `thm-cg-finite-coxeter-classification-including-h-and-dihedral`
   gained `def-hh-coxeter-matrix-word-group-and-length` and
   `thm-sine-cosine-signs-monotonicity-and-ranges`; the H3/H4 example gained
   `lem-cg-positive-definite-diagram-exclusions`; and a duplicated dependency in the criterion
   was removed. All affected records were re-recorded.

## Recorded clarifications and residual uncertainty

1. **No Choice is used anywhere in this pair.** All sums are finite (averaging over the finite
   group), the compactness step uses `thm-heine-borel-rn`, whose published statement records
   that its bisection proof uses no choice principle, and the finiteness argument consumes only
   an open cover's finite subcover. No path in the declared dependency closure reaches
   `deferred-set-theory-beyond-choice`. (Some cited definitions, e.g. `def-metric-continuity`,
   carry choice-scope remarks for statements *not* used here; the local arguments never use
   countable choice, sequential compactness or Zorn.)
2. **The exclusions lemma is stated as a list of necessary conditions** for a connected positive
   definite diagram, not as a full classification; the converse (each surviving diagram is
   positive definite) is the verification clause of the classification theorem, where the
   principal-minor induction is spelled out with Davis Table C.1 and the recurrences. This
   split is deliberate and matches the two inventory contracts.
3. **Naming of `E_9`.** The star with arms (1,2,5) is called the elliptic extension of `E_8` in
   the example; the run's affine page (`affine-coxeter-diagrams-and-semidefinite-classification`)
   owns the Euclidean/affine diagrams, to which the `E_9` row of Table 6.1 is deferred.
4. **No published defect was found** in the items consumed by this pair; the three published
   graph/topology vocabulary items used are used only for their definitions, and no published
   statement is replaced or re-proved here.
5. This batch is mathematically scaffolded but not proved: the ten items are proof contracts
   for Step-3 authoring. Step 3 review, not these readiness records, provides mathematical
   acceptance. No published content, shared plan, engine state or verdict was edited; no
   selected pair was changed.

## Completion

All ten items were recorded `ready` with their examined direct dependency ids; the records are
`research/frontier-42-coxeter-32-step1-<id>.json` and are current for the manifest bytes on
disk. No item was escalated. Cross-batch dependencies are in
`research/frontier-42-coxeter-32-batch-13.cross-batch-dependencies.json` (one page row plus 27
item rows for the batch-2/4/7/9 suppliers), refreshed into the run ledger. The remaining
whole-run failures (empty scaffolds in sibling batches, the batch-15 label mismatches) are not
batch-13 defects and resolve when those batches land.

## Exploratory item-validator probes (not stage-1 gates)

The stage-1 battery does not include item-scoped `extcheck`/`fwdcheck` (their selector is
derived from the live manifests while the item carriers do not exist until `3b-author`). The
probes were nevertheless run and are recorded honestly:

- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet`
  -> `FAIL` with `[focus-item-unknown]` for the scaffolded-but-unwritten ids (including the
  batch-2/7/9 supplier ids). Expected pre-author state, identical to the observation recorded
  by the sibling batches.
- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet`
  -> the same `focus-item-unknown` failure, same cause.

At hand-off the autopilot status recomputed from disk lists batch 13 among the batches with
their stage-1 artifacts present (the `artifact missing` list no longer contains 13, and no
`research/frontier-42-coxeter-32-batch-13.scaffold-incomplete` sentinel exists). Unit receipt
stamping and the transition to `2-assign` remain engine-owned.
