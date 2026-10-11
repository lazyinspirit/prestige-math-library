# Batch 31 scaffold — Compact Laplace Type Operators And Hodge Representatives

Run `frontier-44-special-representation-examples-28`; pair
`compact-laplace-type-operators-and-hodge-representatives` /
`compact-laplace-type-operators-and-hodge-representatives-examples`; orders
1797 / 1803; category `differential-geometry`. This batch owns only this pair.
Outputs: `research/frontier-44-special-representation-examples-28-batch-31.pages.json`,
`...-batch-31.coverage.json`, `...-batch-31.cross-batch-dependencies.json`, the eight
`...-step1-<id>.json` readiness records, and this note.

## Inventory and dependency levels

A page, 7 subjects (dependency levels recomputed after the final edit):
0 `def-second-order-laplace-type-operators-on-vector-bundles` (new local prerequisite),
1 `lem-formal-adjoints-of-differential-operators-exist-and-are-unique` (new),
0 `def-complex-manifolds-and-holomorphic-vector-bundles` (new),
2 `def-e-valued-dolbeault-operators-and-ltwo-structure` (new),
8 `thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity`,
9 `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`,
10 `thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology`.

B page, 1 subject: level 11
`ex-compact-flat-torus-hodge-kernel-from-energy-and-coordinates`.

The four designed items are the design/plan inventory under their planned IDs,
kinds and titles; their statement content is preserved as designed, with wikilinks
added to the new local prerequisite items (no claim was weakened or added). Levels 8-11 are mechanical: they inherit the level-7
published item `thm-choice-implies-dependent-implies-countable-choice` carried in
this run by the preserved batch-2 page `countability-and-uncountability`; they do
not indicate a chain of unauthored suppliers.

## Why four local prerequisites were added (mathematical closure)

The design's three theorems declare only published analysis/algebra inputs, but two
of the three statements are not well-defined against the current corpus without
local definitions:

- `thm-elliptic-...` quantifies over "Laplace-type second-order operators on a
  metric vector bundle" (formal symmetry, scalar positive-definite principal
  symbol). The library has only scalar-PDE principal-symbol notions, so
  `def-second-order-laplace-type-operators-on-vector-bundles` fixes the class and
  proves chart/frame independence of the leading scalar coefficient, the principal
  symbol and formal symmetry.
- item 1 and item 3 both need the formal adjoint of a smooth differential operator
  (`d*`, `bar partial_E*`). `lem-formal-adjoints-of-differential-operators-exist-and-are-unique`
  supplies existence, uniqueness, the local formula `P* v = sum (-1)^|alpha| gamma^-1
  D^alpha(gamma a_alpha* v)`, the symbol identity and involutivity, choice-free and
  without a global pseudodifferential calculus.
- item 3's second half is stated for a compact complex manifold with a Hermitian
  metric and a holomorphic bundle. The library defines only Riemann surfaces (m=1);
  there is no general complex-manifold, holomorphic-bundle or E-valued Dolbeault
  item. `def-complex-manifolds-and-holomorphic-vector-bundles` and
  `def-e-valued-dolbeault-operators-and-ltwo-structure` generalise the published
  dimension-1 definitions, prove the induced smooth structure, the complex
  structure J, holomorphic transition matrices, the gluing of `bar partial_E`
  (holomorphic frame changes have `bar partial g = 0`), `bar partial_E^2 = 0`, the
  formal adjoint, the L2 completion and the scalar symbol `|xi^{0,1}|^2` of the
  Dolbeault Laplacian. This is the smallest local closure that keeps the design's
  general-m claim; the alternative (restricting to m=1) would narrow a stated claim
  and was not taken.

The page's hard 100-item cap is not approached (7 + 1 subjects).

## Design/plan conflict: the declared `requires` were incomplete

`validate-plan --run` (via `tools/frontier-item-gate.mjs`) initially failed with
four `undeclared-prereq` errors on these two pages, because item dependencies
reached pages absent from the declared closure:

- `chern-weil-theory-and-characteristic-forms` (order 1248, published): home of
  `def-complex-linear-and-compatible-bundle-connections`, used to make "smooth
  complex structure on a bundle" precise in the new definitions;
- `riemannian-metrics-length-distance-and-volume` (order 1100, published): home of
  `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`
  and `prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles`,
  all consumed by item 3's Riemannian statement and the new definitions;
- `riemann-surfaces-branched-maps-and-differentials` (order 1602, published): home
  of `def-riemann-surface-and-holomorphic-atlas`, the m=1 precedent the
  complex-manifold definition generalises and cites;
- `riemannian-comparison-theorems` (order 1110, published): home of
  `prop-flat-torus-model-geometry`, which supplies the flat metric and global
  coframe used by the companion example.

Fix applied, as the validator's own message prescribes ("either add it or drop the
dependency"): the four published page IDs were appended to the two `requires`
arrays in this manifest only. Validate-plan then reported **no error on these two
pages** (only the pre-existing inherited `redundant-prereq` advisories around
`countability-and-uncountability`, which every page in this run inherits through the
preserved real-analysis prerequisites). The plan-spec was **not** edited (shared
plan is out of scope), so at Step 4 `splice-plan --verify` will report a
manifest-vs-plan `requires` disagreement for these two pages. That is the licensed
in-flight change decision (`splice-plan --update --accept-requires` after
adjudication), not a mechanical fix; the exact additions and evidence are recorded
here for the owner/operator reconciliation.

All other plan conflicts: the task's design pointer "L158" is stale — the current
design section begins at line 257 of `research/plan-klr-foundation-prerequisites.md`
(section title `## Compact Laplace Type Operators And Hodge Representatives`). The
four designed items' IDs, kinds, titles and dep arrays match the plan-spec exactly;
the four new items are manifest-only additions, which `validate-plan --run` allows
when canonical ownership does not conflict.

## Sources and harvest

Coverage file `...-batch-31.coverage.json`, two page entries, 24 harvested source
headings, 0 errors, 1 advisory (`coverage-low-yield`: 6/21 headings scaffolded on
the A page). The advisory is acknowledged: the declined headings are the blow-up,
analytic-set, geometric-space, metric-example, Fredholm-alternative and
spectral-theory results that this pair genuinely does not consume, while the
remaining results are disposed `already-published` or `inline` into the items that
absorb them. Each decline carries an item-specific reason (no boilerplate).

Read and stamped sources (full-text stamps written by
`source-fetch-check --coverage ... --stamp`, all 8 rows verified):

- Demailly, *Complex Analytic and Differential Geometry* (monograph, 455 pp.,
  sha256 d7c7654a7417e832...): Ch. I §3.C pp. 23–25 (bidegree, d = d' + d''),
  §10–§11 pp. 266–268 (holomorphic bundles, canonical d''-connection, Dolbeault
  complex), Ch. VI §1 pp. 287–289 (differential operators, symbol, formal adjoint,
  ellipticity), Ch. VI §2 pp. 289–290 (Sobolev/Rellich/Garding, Corollary 2.4),
  Ch. VI §3.3 pp. 294–295 and §7.1 pp. 309–310 (de Rham and Dolbeault harmonic
  decompositions).
- Hunter, *Notes on Partial Differential Equations* (lecture notes, 242 pp.,
  sha256 0dbade1806f7a1ea...): §§4.7–4.11, printed pp. 103–114, including the
  complete difference-quotient proof of Theorem 4.27 and the interior-regularity
  argument of §4.11.
- Schnell, *Complex Manifolds* MAT 545 (course notes, classes 4, 5, 7, 9):
  Definitions 4.5/4.6, 5.4/5.6, 7.9 and 9.4 with the surrounding local formulas.
- Datar, *Lectures on Riemannian Geometry* (lecture notes, 290 pp.,
  sha256 fab4114ca5142b8e...): §9.2 pp. 55–56 and Example 11.1.5 p. 72, for the
  flat-torus model used by the companion example.

`url-sweep` on this coverage: 7/7 live, 0 failed, 0 archive recoveries,
7 citation decisions. `source-fetch-check` check mode: 8/8 resolved.

## Published-item defect recorded for the canonical ledger

`prop-flat-torus-model-geometry` (published, page `riemannian-comparison-theorems`,
run `frontier-37-owner-30` batch 13, `verification.repair` receipt
`frontier-38-owner-30-published-format-prop-flat-torus-model-geometry-receipt.json`)
cites in its `sources.references` the Datar PDF with locator "§§20.1 and 24.3,
pp.147–149 and 178–179: the flat torus as the complete non-simply-connected flat
model". Evidence: the stamped 290-page PDF (sha256 fab4114ca5142b8ee1b7eca52daa5594...)
has §20.1 = Ambrose's theorem (pp. 147–149) and §24.3 = the proof of
Cartan–Hadamard (p. 178 ff), neither mentioning the flat torus; the flat torus model
is §9.2 pp. 55–56 and its vanishing curvature is Example 11.1.5 p. 72. Publication
state: the item is published with a format repair receipt. Mathematical impact: none
identified — the same item also cites Eschenburg §5 (completeness and the exponential
map of a flat quotient) and Lee (quotient manifolds, Example 21.14 the torus), and the
flat-torus facts are standard; the defect is a source-locator mismatch, not a false
claim. Repair strategy: correct the Datar locator to "§9.2, pp. 55–56; Example 11.1.5,
p. 72" under the published-local-repair policy, or drop the redundant source row and
re-harvest §9.2/§11.1 if the corrected row is preferred. This batch's example
continues to consume the published item (its mathematics is unaffected); the
consumer check is the published item's own owner's responsibility.

## Cross-batch dependencies

`...-batch-31.cross-batch-dependencies.json` records the two edges this batch owns,
both to the preserved published batch-2 page `countability-and-uncountability`:

- page `compact-laplace-type-operators-and-hodge-representatives` requires
  `countability-and-uncountability` — status `verified` (published page; only the
  single item below is actually consumed);
- item `thm-elliptic-...` → `thm-choice-implies-dependent-implies-countable-choice`
  — status `verified`: the consumer assumes full AC and uses the published chain
  `AC => DC => AC_omega` for the countable-choice assumptions of the declared
  partition, Rellich, Sobolev-embedding and Lax-Milgram interfaces; the supplier's
  current statement and published status were read in
  `items/thm-choice-implies-dependent-implies-countable-choice.md` and its audited
  published file drives the declared AC use.

No orphaned review rows. Batch 35 `compact-kahler-hodge-foundations` declares this
A page as a `requires` prerequisite (consumer-owned edge; its own reviewer owns the
interface check). The derived run ledger
`research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`
was refreshed with the provided tool (idempotent derived artifact; the engine gate
re-refreshes it).

## Checks run (actual results)

- `node tools/manifest-deps.mjs <all batch manifests>` — 629 item(s), 0 errors.
- `node tools/content-policy.mjs --manifest-only <all batch manifests>` — 629 scoped
  item(s), 0 errors, 0 warnings.
- `node tools/frontier-item-gate.mjs --run ... --tool validate-plan` — passes for
  these two pages; at the time of writing the only remaining whole-run
  `undeclared-prereq` errors are in another, concurrently scaffolded batch
  (`compact-support-sheaf-calculus`: two undeclared prerequisites on
  simplicial-homology pages), which is not part of this batch.
- `node tools/item-dependency-levels.mjs check --run ...` — the only remaining
  whole-run errors are `empty scaffold inventory` for the not-yet-scaffolded appended
  pages; **no error names any batch-31 page or item**, and the eight labels above are
  exactly the computed values.
- `node tools/step1-decisions.mjs check --run ...` — the eight batch-31 records are
  current and closed; the run as a whole is open because other batches have not
  recorded readiness yet.
- `node tools/coverage-checklist.mjs <coverage> --require-destination` — 2 pages,
  24 harvested results, 0 errors, 1 advisory (low-yield, justified above).
- `node tools/source-fetch-check.mjs --coverage <coverage>` — 8/8 source rows
  fetch-verified (stamped) and 8/8 resolved.
- `node tools/url-sweep.mjs --coverage <coverage> --out /tmp/... --recover
  --fail-on-dead` — 7/7 live, 0 failed.
- `node tools/drift-review-check.mjs --run ...` — 49 pages reviewed, no blocked
  edges, every owed page above the 95% threshold.
- `node tools/manifest-integrity.mjs --run ...` — 98/98 pages present, no scope
  drift.

Item-phase validators (`precheck`, `depcheck`, `fwdcheck`, `rendercheck`,
`prosecheck`, `depsource`, `pathcheck`, `extcheck`) are deliberately not run against
authored carriers at this boundary: the scaffold stage runs only the manifest-scoped
policy passes, and a scoped attempt now fails with `focus-item-unknown` on an
unrelated unauthored item — the documented Step-1 boundary, not a batch-31 defect.
They run after Step 4 authoring.

## Readiness and uncertainty

All eight subjects are recorded `ready` with their examined dependency IDs and
evidence in the `step1-<id>.json` records. `ready` here means: the manifest contract
has a complete proof strategy, every declared prerequisite exists as published
content or as an in-run scaffolded item, hypotheses/direction/conventions/axiom
strength were checked against the actual supplier statements, and no circular,
forward or inadequate dependency remains. It is **not** authored-proof acceptance,
independent audit or a gate result; Step 3 provides the review.

Unresolved findings for the owner: (1) the manifest-only `requires` extension above
needs the adjudicated splice decision; (2) the four new prerequisite items extend the
pair beyond the design inventory and should be reconciled into the canonical plan at
splice time; (3) the published Datar locator defect above; (4) the low-yield advisory
on the coverage harvest. No fabricated source reading, confidence or check result is
claimed anywhere in this batch.

## Owner integration update — 2026-10-09T11:09:10.052355+00:00

Owner reconciled the actual3A+1B published requires additions into canonical plan; shared sync preserves inventory. Published Datar locator corrected by normal unique ownership claim and recorded local repair; Statement/Proof/deps unchanged. Genuine beforepublishedcarrier authenticated at commit d90f262083596856de7e175ef02e43d537cf07b8. Current successful local checks/ledger/receipt frontier-44-special-representation-examples-28-klr-foundation-elliptic-native31-locator/integration-receipt.json. Old reported locator defect is resolved; native item hashes refreshed metadata-only. This records scaffold repair/currency; no authored-proof independent audit, gate pass or original global-basis readiness is asserted. Historical dispatch/source reading evidence above is retained.
