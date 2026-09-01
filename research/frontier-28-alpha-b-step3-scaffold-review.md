# frontier-28 · Alpha group `b` · Step 3 scaffold review

Group `b` owns batches `1`, `7`, and `10` in
`research/frontier-28-alpha-groups.json`:

- GT-8 `small-cancellation-and-dehn-algorithms`
- GT-16 `inverse-systems-profinite-groups-and-completion`
- MA-15 `braided-and-symmetric-monoidal-categories`
- DG-7 `whitney-embedding-tubular-neighbourhoods-and-approximation`

For each owned pair I read the current:

- `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `CLAUDE.md`
- `research/frontier-28-batch-1.pages.json`,
  `research/frontier-28-batch-1.coverage.json`,
  `research/frontier-28-batch-1.notes.md`
- `research/frontier-28-batch-7.pages.json`,
  `research/frontier-28-batch-7.coverage.json`,
  `research/frontier-28-batch-7.notes.md`
- `research/frontier-28-batch-10.pages.json`,
  `research/frontier-28-batch-10.coverage.json`,
  `research/frontier-28-batch-10.notes.md`
- the live `research/plan-spec.json`
- governing design sections in `research/plan-group-theory-track.md`
  (`GT-8` at lines `1226-1319`, `GT-16` at lines `2083-2198`),
  `research/plan-category-theory-track.md` (`MA-15` at lines `2642-2753`),
  and `research/plan-differential-geometry-track.md` (`DG-7` at lines
  `1846-2062`)

Checks run on Tuesday, September 1, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group b`
  - result before resolution: `scope-decisions: b: 13 decline(s), 13 pending`
- `node tools/scope-decisions.mjs check --run frontier-28 --group b`
  - result after resolution: `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-28-batch-1.coverage.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-10.coverage.json --require-destination`
  - result: `coverage-checklist: 4 page(s), 145 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-1.pages.json research/frontier-28-batch-7.pages.json research/frontier-28-batch-10.pages.json`
  - result: `content-policy: 163 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; only the standing repository-wide `redundant-prereq`
    advisories remain, ending in the standard `OK` line

## Scope receipt

`research/frontier-28-alpha-b-scope-decisions.json` is current.

The current 13 decline rows resolve as:

- `11` rows: `stands`
- `2` rows: `owner-decision`

The two current `owner-decision` rows are the only ones that still lack an
exact committed later home on current disk:

- GT-16's stronger Ribes-Zalesskii subgroup-product-closure theorem
- DG-7's Gualtieri `Corollary 3.30` cobordism consequence

Every other decline row is now an honest boundary or later-page deferment on
the current bytes.

## Local repair

One owned scaffold claim needed a batch-local correction in
`research/frontier-28-batch-1.coverage.json` and
`research/frontier-28-batch-1.notes.md`.

The GT-8 row for Löh's local-geodesic continuation had been deferred to
`geometric-actions-svarc-milnor-and-growth`, but the live group-theory plan now
homes the small-cancellation-to-hyperbolicity bridge on
`hyperbolic-spaces-and-hyperbolic-groups`. I repaired that destination, reran
the batch-1 coverage check, then refreshed and resolved the group-b
scope-decision file against the corrected bytes.

This was a small in-scope scaffold-routing repair, not a new page, forward
edge, or reading-order change.

## Pair verdicts

### `small-cancellation-and-dehn-algorithms` — `sufficient`

This pair is breadth-sound on current bytes: `26` A-page items and `7` B-page
items, so no split is owed.

The design/spec prerequisite mismatch is nonfatal on the live route. Although
the GT-8 design names `decision-problems-for-finitely-presented-groups` and
`hnn-extensions-and-brittons-lemma`, the current transitive closure from
`decision-problems-for-finitely-presented-groups-examples` already reaches
those pages together with `free-groups-and-presentations`, where the published
`def-cyclically-reduced-word`, `prop-normal-closure-is-products-of-conjugates`,
and `thm-free-groups-are-torsion-free` live.

The page boundary is also honest after the routing repair:

- Touikan's weaker infinitude consequence is not needed by any retained item
- the Löh local-geodesic continuation now points to the exact later
  hyperbolicity page
- the hyperbolicity agreement itself remains later on GT-12, not a hidden
  forward dependency

The declared route, dependencies, sources, and scope dispositions are therefore
sufficient for authoring.

### `inverse-systems-profinite-groups-and-completion` — `sufficient`

This pair is also breadth-sound on current bytes: `33` A-page items and `7`
B-page items.

The GT-16 design/spec prerequisite mismatch is likewise nonfatal. The live
transitive closure from `graphs-of-groups-and-bass-serre-theory-examples`
already reaches `uniform-spaces`, `normal-subgroups-and-quotient-groups`, and
the published free-group material used by the residual-finiteness and Hall/LERF
endpoint.

The omitted rows are scoped honestly:

- Lenstra's complements / Schur-Zassenhaus / Frattini section is outside the
  current inverse-limit and completion route
- Stover's lattice-level residual-finiteness theorem is only an adjacent
  application beyond the retained non-load-bearing Malcev remark
- the stronger Ribes-Zalesskii subgroup-product theorem is real and source-backed,
  but still has no exact committed later page or item on current disk, so it is
  correctly recorded as `owner-decision`

Nothing in the retained A/B route is under-specified for Step 5 authoring.

### `braided-and-symmetric-monoidal-categories` — `sufficient`

This pair stays below the split ceiling at `29` A-page items and `7` B-page
items.

The MA-15 design/spec prerequisite mismatch does not block authoring. The live
closure from `closed-monoidal-categories-and-the-internal-hom-examples`
already reaches `monoidal-categories-and-monoidal-functors`,
`strictification-and-mac-lanes-coherence-theorem`,
`free-groups-and-presentations`,
`symmetric-groups-and-the-sign-homomorphism`, and
`conjugacy-and-simplicity-in-the-symmetric-groups`, which is the exact upstream
material the scaffold cites.

The omitted source rows are sufficient as written:

- Mac Lane `Theorem 5.1` is the older axiom-package repackaging, while the live
  route derives unit compatibility from the braiding
- EGNO `Exercise 8.8.2(v)` and `(vi)` open a later pathology / supervector
  specialization branch that no retained item needs
- Muger's later discussion of twists and ribbon structure now has an exact
  later home on `duality-and-rigidity-in-monoidal-categories`

The pair's route, dependencies, and scope dispositions are sufficient for
authoring.

### `whitney-embedding-tubular-neighbourhoods-and-approximation` — `sufficient`

This pair is breadth-sound on current bytes: `44` A-page items and `10` B-page
items.

The DG-7 design still names direct `compactness`, but the live closure from
`smooth-partitions-of-unity-and-exhaustions`,
`smooth-vector-bundles-and-sections`,
`sard-theorem-and-transversality`, and
`homotopy-and-homotopy-equivalence` already reaches `compactness` and the
needed Euclidean / manifold prerequisites transitively. My closure audit found
no missing backward prerequisite on the current batch-10 manifest.

The page-boundary choices are also sufficient:

- Lee `Corollary 6.17` is a compact-only leaf consequence outside the retained
  general weak-embedding / approximation spine
- Whitney `Theorem II` and `Theorem V` belong to the analytic approximation
  program, not to this smooth tubular-neighborhood route
- Gualtieri `Corollary 3.30` remains correctly flagged as `owner-decision`
  because several later cobordism/intersection pages now exist, but no exact
  committed page or item on current disk owns that corollary verbatim

The retained scaffold is therefore sufficient for Step 5 authoring.

## Outcome

All four owned A pages are sufficient for authoring on the current bytes:

- `small-cancellation-and-dehn-algorithms`
- `inverse-systems-profinite-groups-and-completion`
- `braided-and-symmetric-monoidal-categories`
- `whitney-embedding-tubular-neighbourhoods-and-approximation`

`research/frontier-28-alpha-b-step3-verdicts.json` records all four pages as
`sufficient`.
