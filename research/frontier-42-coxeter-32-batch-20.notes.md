# Batch 20 Step 1 scaffold — Finite Coxeter Invariants and Coinvariant Gradings

Run: `frontier-42-coxeter-32` · pair `finite-coxeter-invariants-and-coinvariant-gradings`
(A order 1756, B order 1757, `coxeter-groups`, design label CG-15). Outputs:
`research/frontier-42-coxeter-32-batch-20.pages.json` (8 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-20.coverage.json` (4 sources, 27 harvested rows),
`research/frontier-42-coxeter-32-batch-20.cross-batch-dependencies.json` (77 reviewed
consumer edges: 75 item + 2 page) and eleven item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding). It requires keeping the richest sound promised claims,
  including the complete invariant-degree/Poincaré route, respecting the AC
  hypotheses of the published invariant-theory suppliers, and not replacing local
  proofs with citations or undocumented computation. It also names the exact
  certificate evidence as usable only within its recorded scope; that scope is
  respected below. No direction clause conflicts with this batch's design.
- **Design.** `research/plan-coxeter-groups-track.md` §CG-15 (L387ff) fixes the pair's
  `requires`, six local supplier contracts, the AC-carrying route through the
  published general complex-reflection theorem, and the B companion tasks. All six
  contracts are present with their exact ids and kinds, in the design's relative
  order:
  `lem-cg-complexification-satisfies-reflection-invariant-hypotheses`,
  `def-cg-coxeter-basic-degrees-and-graded-coinvariants`,
  `lem-cg-basic-degrees-independent-and-coinvariant-series`,
  `lem-cg-formal-rational-differentials-and-invariant-jacobian`,
  `thm-cg-coinvariant-top-degree-and-discriminant`,
  `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`.
- **Machine bindings.** `research/coxeter-scaffold/inventory.json` (CG-15) and
  `research/coxeter-scaffold/definition-justifications.json`: the pair's one definition
  `def-cg-coxeter-basic-degrees-and-graded-coinvariants` carries the recorded justifier
  `lem-cg-basic-degrees-independent-and-coinvariant-series`, and the definition
  abstains from degree-multiset independence, from the Hilbert series and the degree
  product, and from any relation between the degrees and the reflection geometry; all
  of that is proved by that justifier (and, for the spectral relation, the
  regular-eigenvector theorem).
- **Independent audit.** `research/coxeter-scaffold/independent-audit.md` records the
  repaired CG-15 route: characteristic-zero rational differentiation, Molien pole
  comparison, nonzero `J=cΔ`, regular Coxeter eigenvector covariance and residue-sum
  identification, with the top `Δ` class surviving by a coefficient-factorial
  Hermitian pairing in real orthonormal coordinates, and six exact exceptional
  certificates in place of unchecked tables. Those are exactly the routes implemented
  in the manifest below.
- **Local additions (mathematically necessary, same page).** Two lemmas host the
  design's spectral inputs as local proofs instead of external tables:
  `lem-cg-classical-coxeter-spectra-from-reflection-models` (A_n, B_n, D_n, I_2(m)
  from their reflection models) and
  `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` (the six exceptional
  types). The design's certificate
  `research/coxeter-scaffold/math-checks/finite-degree-poincare-certificates.json`
  (generator `finite-degree-poincare.py`) exists and is cited there with its exact
  path and its dual-action matrix convention.

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` lists both pages with orders 1756/1757, category
`coxeter-groups`, the companion ids, the A page's four `requires` and empty item arrays
— the expected pre-splice state of every new page of this run (177 run pages still
carry no item list). No item-level plan text exists to conflict with; the design's
local supplier contracts are the item-level authority. **No design-versus-plan
conflict exists and no plan text was edited.**

The run-scoped plan validation passes (exit 0) with advisory `[redundant-prereq]` notes
only. Four bear on this A page:

- `finite-coxeter-invariants-and-coinvariant-gradings` requires
  `finite-coxeter-diagrams-and-complete-classification` directly, but also reaches it
  through `bipartite-coxeter-elements-and-ordered-root-complexes`;
- `… requires relations-functions-and-quotients directly`, reached through each of
  `finite-coxeter-diagrams-and-complete-classification`,
  `finite-weyl-invariants-bruhat-and-kostant-harmonics` and
  `bipartite-coxeter-elements-and-ordered-root-complexes`.

The direct edges are the declared reading order in the task and the design; they are
retained (advisory only). One further note records that the later page
`coxeter-descents-poincare-polynomials-and-growth` reaches
`finite-reflection-arrangements-and-spherical-coxeter-complexes` through this A page;
that is a statement about the downstream page's own `requires`, not an edit request.
No plan text was edited.

## Construction summary and corrections

The 11 items implement the design's CG-15 route end to end:

1. `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` complexifies
   the faithful real reflection geometry (faithfulness of `ρ_C`, complex reflections
   with hyperplane fixed spaces, positive definiteness, unit root norms) and verifies
   the hypotheses of the published AC-scoped
   `thm-chevalley-shephard-todd-for-finite-weyl-groups`, whose statement covers every
   finite group generated by complex reflections (its title does not restrict the
   statement). AC is declared and its exact use stated.
2. `def-cg-coxeter-basic-degrees-and-graded-coinvariants` defines degrees, exponents
   and the graded coinvariant algebra with explicit abstentions; well-definedness of
   the degree multiset is deferred to its justifier.
3. `lem-cg-basic-degrees-independent-and-coinvariant-series` proves multiset
   independence by successively recovering least degrees, the invariant and
   coinvariant Hilbert series, `prod d_i = |W|`, and the Molien identity.
4. `lem-cg-formal-rational-differentials-and-invariant-jacobian` proves the
   characteristic-zero rational differential bridge and `J ≠ 0`.
5. `thm-cg-coinvariant-top-degree-and-discriminant` proves
   `sum(d_i-1) = |Φ_+|` by Molien pole comparison (identity term `δ^-n`, each
   reflection `½δ^-(n-1)`, all other orthogonal elements at most `δ^-(n-2)`, with
   codimension-one fixed spaces identified with reflections via the chamber
   stabiliser theorem), `J = cΔ ≠ 0` by anti-invariance and divisibility,
   `S^det = Δ·S^W`, and nonvanishing of the top `Δ` class by the coefficient-factorial
   Hermitian pairing; no regular-representation, harmonic or cohomological statement
   is imported.
6. `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` proves the
   covariance `dp_i(x)∘c = ζ_h^{e_i} dp_i(x)` at a regular eigenvector on the Coxeter
   plane, absence of eigenvalue 1, conjugate pairing and `sum r_i = nh/2`, hence
   `e_i = r_i`, and gives the complete degree tables for all finite types (including
   the reducible tensor decomposition).
7. The two local additions record the classical spectra from explicit reflection
   models and the six exceptional spectra from displayed exact matrices with
   cyclotomic factorisations; both are choice-free finite computations.
8. The B companion implements the design's I_2(m) task
   (`ex-cg-i2m-invariants-and-coinvariant-hilbert-series`), an A_2 discriminant /
   Jacobian / top-class computation
   (`ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class`) and exact E_6/H_3
   worked spectra (`ex-cg-e6-and-h3-spectra-from-exact-matrices`).

Corrections applied during construction (each re-derived, never inherited unverified):

- `lem-cg-classical-coxeter-spectra-from-reflection-models`: the A_n cycle
  description was rewritten as the explicit increasing-even/decreasing-odd
  `(n+1)`-cycle (verified for `n = 2,3,4,5`); the D_n star colouring and all
  signed-permutation cycle computations were re-derived from the recorded
  conventions.
- `thm-cg-coinvariant-top-degree-and-discriminant`: the strategy now states the
  chain-rule operator identity `p(∂_x)(q∘M) = (p(M∂)q)∘M` used for anti-invariance of
  `p(∂)Δ`, instead of leaving the multivariable computation implicit.
- The B example `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` proves the
  noncrystallographic contrast locally from the published rank-two root-system
  classification and `4cos²(π/m) ∈ {0,1,2,3}` for crystallographic pairs; an earlier
  `forward_refs` attempt would have made the B page forward-depend on a later page and
  was replaced by this local proof (removing the batch-forward-dependency finding it
  had produced; no `forward_refs` remain in the manifest).
- The six exceptional matrices in
  `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` are the
  simple-root-basis matrices of `ρ(c)` (the certificate records the transpose
  dual-action matrices; characteristic polynomials agree). All six characteristic
  polynomials and orders `h = 12, 18, 30, 12, 10, 30` for E_6, E_7, E_8, F_4, H_3, H_4
  were recomputed independently in exact arithmetic over `Q`, `Q(√2)` and
  `Z[φ]/(φ²-φ-1)` and matched the certificate coefficientwise; the H_3 row matches
  Casselman's icosahedron example.
- Typographical/URL repairs inherited from the draft text: a stray `coexeter`
  spelling was corrected to `coxeter` (0 occurrences remain in the manifest,
  coverage and plan texts), and the Casselman source URL was corrected to the
  author-hosted
  `https://www.math.ubc.ca/~cass/research/pdf/Element.pdf` (fetch-verified below).
- The four items whose transitive inputs changed after the last strategy edits
  (`thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, `ex-cg-i2m-…`,
  `ex-cg-a2-…`, `ex-cg-e6-and-h3-…`) were re-recorded after the edits; every
  readiness record is current for the on-disk manifest.

No contracted claim was dropped or weakened; the corrections replace loose
paraphrases by the exact verified statements.

## Dependency levels (in-run only)

Recomputed with the exported `dependencyLevels` routine and matched against the stored
labels (`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports no error naming a batch-20 item):

| level | items |
|---|---|
| 15 | `lem-cg-complexification-satisfies-reflection-invariant-hypotheses` |
| 16 | `def-cg-coxeter-basic-degrees-and-graded-coinvariants`, `lem-cg-classical-coxeter-spectra-from-reflection-models` |
| 17 | `lem-cg-basic-degrees-independent-and-coinvariant-series`, `lem-cg-formal-rational-differentials-and-invariant-jacobian`, `ex-cg-i2m-invariants-and-coinvariant-hilbert-series` |
| 18 | `thm-cg-coinvariant-top-degree-and-discriminant`, `lem-cg-exceptional-coxeter-spectra-from-exact-certificates` |
| 19 | `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class` |
| 20 | `ex-cg-e6-and-h3-spectra-from-exact-matrices` |

Published and other-run suppliers (batch 2/4/7/13/17/19 items and the published
invariant-theory items) do not raise these levels; in-run suppliers are exactly the
items of this page plus batch 2/4/7/13/17/19 items, all earlier and stable. No item of
this pair depends on a later item of this page or of another page; the definition's
`justified_by` target is its own consumer by design. The only errors the run-wide check
prints are `empty scaffold inventory` for the two batch-25 pages, outside this batch's
scope (sibling workers were completing other batches concurrently).

## Dependency verification (examined, not assumed)

- All declared supplier ids resolve: published items on disk, or in-run items of
  batches 2, 4, 7, 13, 17 and 19 (complete and stable at verification time). The full
  transitive closure from the 11 items' `deps` was materialised from the run manifests
  and the published item frontmatter: **1369 items, 0 unresolved ids**, no path to
  `deferred-set-theory-beyond-choice`.
- The critical interfaces were read in the supplier manifests before the strategies
  were accepted: batch-19 `def-cg-bipartite-coxeter-element-and-root-recursion`
  (bipartition by distance, `c = ab`, conditional `μ`, reducible conventions),
  batch-19 `lem-cg-steinberg-bipartite-root-enumeration` (`|Φ_+| = nh/2`, invertibility
  of `c-id` on irreducible finite type, cyclic root recursion), batch-4
  `lem-cg-reflection-form-invariance-and-rank-two-orders` (reflection formula,
  rank-two trace `2cos(2π/m)` and exact order `m`), batch-7
  `thm-cg-root-length-criterion-and-faithfulness` (unit root norms, faithfulness),
  batch-13 `thm-cg-finite-coxeter-classification-including-h-and-dihedral` (complete
  diagram list, standard numbering) and
  `thm-cg-finite-type-positive-definite-criterion`, batch-17
  `thm-cg-finite-chamber-tiling-and-coset-face-identification` (codimension-one
  fixed-space classification), batch-2
  `def-hh-coxeter-matrix-word-group-and-length`, and the published
  `thm-chevalley-shephard-todd-for-finite-weyl-groups`,
  `lem-reflection-basic-invariants-form-a-regular-sequence`,
  `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension`,
  `lem-finite-reflection-invariant-generators-are-algebraically-independent`, whose
  statements were read in full. Hypotheses, directions, conventions and choice
  strength agree with the batch-20 uses; no missing, circular, forward or inadequate
  dependency was found. The published CST statement was re-read to confirm that its
  general complex-reflection clause (not only the Weyl case) is the one consumed.
- Every wikilink appearing in a batch-20 statement or strategy is declared in that
  item's `deps` or `justified_by` (mechanical check over the manifest: 0 undeclared
  links, 0 unresolved deps). The only non-computational prose reference, the local
  certificate JSON, is a file path, not an item link, and is inside the recorded
  scope of the audit.
- **Choice audit.** AC is consumed exactly where the invariant-theory suppliers need
  it: six items declare `def-axiom-of-choice` (the five items of the polynomiality
  route plus `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, which
  consumes their Molien/Hilbert suppliers), and each `axiom_use` field names the exact
  supplier and use (existence of the `n`-element basic family, its regularity and the
  freeness/Molien suppliers). The two spectral lemmas and all three B examples are
  choice-free and state `No Choice is used`; their computations are finite and
  explicit.

## Sources and coverage

Four sources were fetched in full and stamped by `tools/source-fetch-check.mjs --stamp`
(4/4 fetch-verified, 0 drops; re-checked without `--stamp`: 4/4 verified, 4/4 resolved):

| source | kind | stamp |
|---|---|---|
| Etingof, Representations of Lie Groups, MIT 18.757 complete course notes (§§10.6, 12.1–12.2, 13 read) | course-notes | pdf, 162 pages, 3494075 bytes |
| Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (§§1–4 and the p. 11 table; the two topics the essay says it does not treat are recorded out-of-scope) | lecture-notes | pdf, 12 pages, 184077 bytes |
| Swanson, On eigenvalues of representations of reflection groups and wreath products, UW CAT seminar notes (Lecture 1, pp. 1–4 read) | lecture-notes | pdf, 7 pages, 247063 bytes |
| Ripoll (Strobl seminar notes, joint work with Reiner and Stump), Coxeter elements in well-generated reflection groups (slides 1–4 and 25 read) | lecture-notes | pdf, 57 pages, 562570 bytes |

The harvest lists 27 named results with dispositions: **11 `included`** (supporting
the six A items named in the construction summary — the pair's definition takes its
evidence through its recorded justifier, and the three B examples are internal
derivations from A-page and published items), **6 `inline`** (three for the
complexification hypotheses, one for the classical spectra, two for the
regular-eigenvector theorem), **9 `out-of-scope`** with individual reasons (regular-representation
strengthening, Lie-theoretic Kostant home, Cartan-matrix spectral comparison,
Petrie/associahedron packaging, sections outside the pair's scope), and **1 `deferred`**
(the W-Catalan count `Cat(W) = prod (d_i+h)/d_i`, destination
`noncrossing-partition-lattices-and-kreweras-complements`, which is later in this run
and consumes the degrees proved here). Etingof is the primary treatment of the
invariant-theory route and the CST theorem; Casselman, Swanson and Ripoll are
independent treatments of the Coxeter-plane, spectral and eigenvalue themes,
satisfying the two-independent-treatments expectation for this A page (one complete
course-notes set plus three author-hosted lecture-note/slide sets). Recovery attempts:
each source records exactly one successful fetch (no failed retries were needed in
this batch).

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-20.cross-batch-dependencies.json` reviews all 77
of the batch's cross-batch edges (75 item + 2 page). Suppliers: batch 2 (3 edges),
batch 4 (32), batch 7 (11), batch 13 (22 item + 1 page), batch 17 (1), batch 19
(6 item + 1 page). All 77 are `open` (Step-3 proof work in the supplier batches); no
`removed` or `verified` edge was claimed, since no supplier interface changed and no
consumer use was withdrawn. The page-level rows record the A page's declared
`requires` on batches 13 and 19 as ambient framework with the item-level edges carrying
the actual uses.

`frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` accepts the input:
the run ledger contains all 77 batch-20 rows each with exactly one review, batch 20 is
in `reviewed_batches`, and 0 reviews are orphaned. The `--require-reviewed` variant
still reports `Cross-batch review incomplete` because batch 25 has not supplied its
cross-batch input yet and one batch-13 consumer edge awaits its review (as of the final
read: 31/32 inputs present, 4 edges elsewhere without reviews) — both outside this
dispatch's scope. The batch-20 input is maintained under
`briefs/tasks/frontier-dependency-ledger.md`, which reserves its prose sections for
later Step-5a reviews, not this dispatch.

## Published defects

No published defect was identified in the course of this batch. The published
suppliers used here
(`thm-chevalley-shephard-todd-for-finite-weyl-groups`,
`lem-finite-reflection-invariant-generators-are-algebraically-independent`,
`lem-reflection-basic-invariants-form-a-regular-sequence`,
`lem-weyl-coinvariant-hilbert-series-has-order-w-dimension`,
`def-finite-linear-invariant-and-coinvariant-polynomial-algebras`,
`def-hilbert-function-and-hilbert-series`, `def-axiom-of-choice`,
`def-complexification-of-a-real-vector-space`,
`def-complexification-of-a-real-linear-map`,
`def-characteristic-polynomial-of-a-matrix`,
`lem-derivative-of-det-i-minus-xa`, `prop-formal-derivative-laws`,
`def-cyclotomic-polynomial`, `thm-complex-nth-roots-and-roots-of-unity`,
`ex-classical-root-systems-in-euclidean-coordinates`,
`thm-rank-two-root-system-classification`,
`prop-distinct-simple-roots-have-nonpositive-inner-product`,
`def-cartan-matrix-of-a-based-root-system`,
`thm-transpositions-generate-the-symmetric-group` and the inner-product,
conjugation, minimal-polynomial and diagonalisability items) were used through their
declared interfaces only; no consumer debt or unsound use was found. No entry for the
canonical ledger (`research/published-consumer-supplier-ledger.md`) is required from
this batch.

## Checks run (actual results)

| check | command | result |
|---|---|---|
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error naming a batch-20 item; all 11 labels matched the computed in-run levels; remaining `ERROR dependency-level` lines are batch-25's two empty pages |
| manifest dependencies | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 293 items, 0 normalized, 0 errors |
| scaffold policy | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 293 scoped items, 0 errors, 0 warnings |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests, no scope drift |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; advisory `[redundant-prereq]` notes only (four naming this A page), no blocked edges, no item-level cycles/forward refs/unresolved ids in the spliced scope |
| drift review | `node tools/drift-review-check.mjs --run frontier-42-coxeter-32` | 32 pages reviewed, 0 spec edits applied, no blocked edges; all owed pages above 95 % published-or-earlier-in-run |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-20.coverage.json --require-destination` | 1 page, 27 harvested results, 0 errors, 0 warnings |
| fetch stamps | `node tools/source-fetch-check.mjs --coverage …batch-20.coverage.json` | 4/4 sources fetch-verified, 4/4 resolved, 0 drops |
| citation liveness (scoped) | `node tools/url-sweep.mjs --coverage …batch-20.coverage.json --out /tmp/b20/url-liveness.json` | 4/4 live, 0 failed, 0 suspect |
| source backing (scoped) | `node tools/source-backing.mjs --coverage …batch-20.coverage.json --liveness … --require-verified` | 6 authored results, every one still backed by an openable source or documented alternative argument |
| external references | `node tools/extcheck.mjs` (whole corpus; the 11 scaffold items are not yet item files, so a scoped run cannot name them pre-authoring) | 25966 items, 0 recorded-not-proved, 0 resting on them; OK |
| cross-batch ledger input | `frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; all 77 batch-20 rows accepted with one review each, 0 orphaned; run remains open on batch 25's input and one batch-13 edge |
| readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 293 items, 279 ready at the batch-20 check (284 at the final re-read while sibling dispatches kept closing their own items); the remaining open work names only batch-25's two empty pages and batch-31's noncrossing items; **no batch-20 item is open at either read** |
| dependency sources (run-scoped) | `node tools/depsource.mjs --run frontier-42-coxeter-32 --items-file /tmp/b20/items.json` | global failure: `Error: Invalid or empty current page in frontier-42-coxeter-32-batch-25.pages.json` — batch 25's manifest carries two page shells with empty item arrays; outside this batch's write scope. The tool's corpus-level default run (plan-spec scope) reports 145601 resolved dependencies, 0 unresolved/homeless/planned-later; it excludes this batch's items because the plan-spec item arrays are spliced only at Step 4 |

## Outcome

All eleven items are recorded `ready`: each has a complete, source-checked proof
strategy, its prerequisites are scaffolded and their interfaces verified, and the
corrections above were applied before the records were written. No escalation is open
from this batch; no cross-batch change, new prerequisite pair or page split was
required (the A page carries 8 of its 100-item cap, the B page 3). Owner/operator
reconciliation and the full engine gate follow construction; neither a worker exit nor
a readiness record is independent mathematical approval, and Step 3 provides that
review.
