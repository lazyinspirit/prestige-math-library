# Batch 6 Step 1 scaffold — Coxeter Polyhedral Gluings and Intrinsic Metrics

Run: `frontier-42-coxeter-32` · pair `coxeter-polyhedral-gluings-and-intrinsic-metrics`
(A order 1728, B order 1729, `coxeter-groups`, label CG-03). Outputs:
`research/frontier-42-coxeter-32-batch-6.pages.json` (5 A + 3 B items),
this note, `research/frontier-42-coxeter-32-batch-6.coverage.json`,
`research/frontier-42-coxeter-32-batch-6.cross-batch-dependencies.json` (`[]`), and
8 item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope and design reconciliation

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (binding) plus the design `research/plan-coxeter-groups-track.md` §CG-03 (lines 165–200)
  and the binding proof-design inputs `research/coxeter-scaffold/inventory.json`
  (CG-03), `definition-justifications.json`, the native A/B page prose
  (`library/coxeter-groups/...`) and `research/coxeter-scaffold/independent-audit.md`.
- **Preserved.** The five planned local supplier contracts keep their exact ids and kinds:
  `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`,
  `lem-cg-polyhedral-face-coherence-and-uniform-star-radius`,
  `thm-cg-polyhedral-chain-metric-topology-and-properness`,
  `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`,
  `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`. Their proof routes
  (finite shapes + barycentric hat-coordinate star radius + finite-star compactness +
  arbitrary-metric length + proper-target Ascoli) are the ones scaffolded, with the
  design's warnings kept: the star radius is derived from hat coordinates, not from a
  point-to-face lower bound; no cellwise equality of the chain metric with the Euclidean
  metric is assumed; local finiteness alone is not claimed to give completeness.
- **B companion (3 items, all new ids).** `ex-cg-interval-realized-tree-versus-vertex-graph-metric`,
  `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete`,
  `ex-cg-hexagonal-a2-cell-and-graph-distance`, matching the three promised comparisons
  (interval-realized tree vs discrete vertex metric; the shrinking-edge ray; the hexagonal
  A2 cell with its barycentric triangulation vs graph distance).
- **Plan-spec comparison.** `research/plan-spec.json` agrees on page ids, orders
  1728/1729, category, companion, the A-page `requires` list and the B page's single
  requirement; its item arrays are empty. **No design-versus-plan conflict exists**, so no
  plan text was changed. `validate-plan` was run and reported the declared page order
  acyclic and consistent (its "pages carry no item list yet" note refers to the shared
  plan-spec shells, not to this manifest).
- **Recorded clarification (not a conflict).** The design's B companion says "with its
  barycentric triangulation"; the barycentric subdivision of a hexagon is the 12-triangle
  subdivision whose vertices are the six vertices, six edge midpoints and the centre (not
  the 6-triangle cone from the centre). The example states the barycentric subdivision
  correctly and computes its constants (`L=4/sqrt3`, `delta=sqrt3/24`).
- **Drift.** `research/frontier-42-coxeter-32-alpha-step1-drift.md` gives this page
  **no-drift** with "No prerequisite gap". No plan edge or ordering change was applied.

## Dependency levels (in-run only)

Computed with the shared tool logic; all levels follow from the in-run `deps` chains only.

| level | item |
|---|---|
| 0 | `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric` |
| 1 | `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` |
| 2 | `thm-cg-polyhedral-chain-metric-topology-and-properness` |
| 3 | `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`; `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` |
| 4 | `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics` |
| 5 | `ex-cg-interval-realized-tree-versus-vertex-graph-metric`; `ex-cg-hexagonal-a2-cell-and-graph-distance` |

No item depends on a B-page item or on a later item; the A-page items are ordered once and
in prerequisite order, and the two A5 consumers on the B companion point backwards.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk (published or draft) and to say
what the consumer needs. Published suppliers used and read for adequacy:
`def-metric-space`, `def-metric-topology`, `def-metric-compactness`, `def-complete-metric-space`,
`def-cauchy-in-metric`, `def-metric-convergence`, `def-metric-ball`, `lem-metric-reverse-triangle`,
`thm-compact-implies-complete-and-totally-bounded`,
`thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`, `thm-heine-borel-rn`,
`thm-barycentric-subdivision-realizes-homeomorphically`,
`lem-barycentric-face-chains-triangulate-a-geometric-simplex`,
`def-finite-convex-cell-complex-and-linear-subdivision`,
`lem-finite-convex-cell-complexes-admit-compatible-triangulations`,
`def-abstract-simplicial-complex`, `def-locally-finite-and-finite-dimensional-simplicial-complex`,
`def-geometric-realization-of-an-abstract-simplicial-complex`,
`def-simplicial-subcomplex-star-closure-and-link`, `def-face-poset-and-order-complex`,
`prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
`cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` (its printed `**Assume the Axiom of Choice**`
hypothesis is carried into A5 and declared there),
`def-geodesic-and-geodesic-metric-space`, `def-axiom-of-choice`, `def-upper-bound`,
`def-pointwise-uniform-and-uniformly-cauchy-convergence`, `def-graph-path-metric`,
`thm-the-path-metric-of-a-connected-simple-graph-is-a-metric`,
`def-cycles-trees-and-forests-in-a-simple-graph`,
`thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`,
`lem-metrics-on-rn`, `def-sine-and-cosine-by-power-series`,
`thm-sine-and-cosine-addition-formulas`, `cor-pi-is-the-first-positive-sine-zero`.
No missing, circular, forward or inadequate dependency was found. In particular:

- The definition's well-definedness (`justified_by`) target is A3, which depends on the
  definition, never the reverse; chain-length independence and finiteness under (H1) are
  stated as the definition's own obligations.
- A2 supplies the two ingredients the design promised (uniform Lipschitz constant `L` and
  uniform star radius `delta`), and A3 uses exactly those in the topology and properness
  proofs; A5 consumes A3 (properness) and A4 (length lower semicontinuity and arc-length
  reparametrization) with the published proper-target Ascoli corollary.
- The arbitrary-metric length lemma is deliberately not the published R^n theory
  (`def-arc-length-function`, `thm-every-rectifiable-path-has-an-arc-length-parametrization`,
  `thm-arc-length-is-lower-semicontinuous-under-uniform-convergence`), which is stated for
  R^n-valued paths; those items are therefore not declared and not cited.
- Choice is carried exactly once: A5 declares `def-axiom-of-choice` and identifies the
  Ascoli subsequence step as its only use. All other items are choice-free.
- No Recorded/unproved record is depended upon, and no dependency path reaches
  `deferred-set-theory-beyond-choice` (none of the suppliers is a Foundations item on that
  path).

## Sources (full text fetched and stamped)

Two independent book treatments back the A page; both bodies were downloaded, stamped and
inspected at the locators recorded in the coverage file:

1. **M. R. Bridson and A. Haefliger, _Metric Spaces of Non-Positive Curvature_** (author-hosted PDF,
   `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf`, 669 pages,
   fetch `sha256_16 894ac23c8033d213`). Read: I.1.18–I.1.20 printed pp. 11–13 (length,
   arclength function, reparametrization, lower semicontinuity); I.7.1–I.7.13 printed
   pp. 97–102 (metric simplicial complexes, strings and the intrinsic pseudometric,
   injectivity radius `e(x)`, model simplices, finite-shapes completeness); I.7.19 printed
   pp. 105–111 (finite shapes + connected gives a complete geodesic space), with the
   pathologies I.7.6, I.7.7, I.7.11 read as stated.
2. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (author manuscript PDF,
   `https://people.math.osu.edu/davis.12/davisbook.pdf`, 600 pages, fetch
   `sha256_16 ccefbb950fdcfce9`). Read: §7.3 printed pp. 128–131 (Coxeter polytopes,
   face poset, the natural cell structure, Cayley 1-skeleton); §12.1 printed pp. 231–233
   (piecewise Euclidean cell structure and the finite-shapes geodesic remark); Appendix I.3
   printed pp. 507–508 (X_k-cell structures, length metric, Def. I.3.3, Prop. I.3.4).

The design's inventory also lists Bowditch, _Notes on locally CAT(1) spaces_ §§3.3–3.4 for
these items. **Disposition: not consumed by CG-03.** Those sections (polygon energy decrease
and the short-loop class) belong to the later CAT/loop pages
(`cat-comparison-link-criteria-and-local-globalization`,
`short-loop-polygons-and-quantitative-energy-decrease`), and none of CG-03's five contracts
mentions loops, CAT(1) or nonshrinkability; the geometric source report itself records that
the Bowditch original was not read from the failed host. No Bowditch row is therefore
claimed in this pair's coverage, which still carries two independent primary treatments.
The geometric report's other CG-08/CG-12 items are likewise outside this page.

### Source caveats recorded honestly

- **Davis Prop. I.3.4(a) as printed** says a connected X_k-polyhedral complex that is
  "locally finite" is a complete geodesic space. Bridson–Haefliger, cited there (pp. 105–111),
  prove this under **finitely many shapes** (I.7.13/I.7.19), and their weaker completeness
  criterion is **finite distortion** (I.7A.13), not local finiteness. The pair's own B-page
  counterexample (shrinking-edge ray) is locally finite in Davis's A.1.9 sense ("each cell
  is a face of finitely many cells") yet is isometric to `[0,2)` and incomplete. The scaffold
  therefore relies only on clause (b)/BH I.7.13–7.19 (finite shapes) plus local finiteness
  for compact stars, never on I.3.4(a). This is a source-level caveat, not a defect in any
  library item, and it does not change the page's claims.
- **BH I.7.11** is the shrinking-interval example behind the B-page counterexample; the
  extraction of its interval lengths is garbled, so the counterexample states its own
  explicit construction (edges of lengths `2^-n`, total 2) and only cites I.7.11 as the
  phenomenon, not for a formula.

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `23 item(s), 0 missing, 0 error(s)` at the time of the run |
| scaffold policy | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `23 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-6.coverage.json --require-destination` | `1 page(s), 21 harvested result(s), 0 error(s), 1 warning(s)` — warning is `coverage-low-yield` (8/21 scaffolded); the 13 declines carry individual reasons in the file |
| full-text fetch | `tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-6.coverage.json --stamp` then check mode | `2/2 source(s) fetch-verified`; check mode `2/2 resolved`, exit 0 |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-6.coverage.json --out /tmp/batch6-url-liveness.json --recover --fail-on-dead` | `2/2 live; 0 failed` (output written to `/tmp` to avoid touching the run's shared artifact) |
| source backing | `tools/source-backing.mjs --coverage ...batch-6.coverage.json --liveness /tmp/batch6-url-liveness.json --reharvest-plan /tmp/batch6-reharvest.json` | `6 authored result(s) ... every one still backed`, exit 0 |
| plan | `tools/frontier-item-gate.mjs --run ... --tool validate-plan` | exit 0: declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among pages with item lists |
| dependency levels (batch-local) | shared `dependencyLevels` logic over this manifest | 0 errors; levels as tabled above |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | **fails while sibling batches are empty shells** (`<page>: empty scaffold inventory` for those batches); re-run after all 32 batches land |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | **fails while sibling batches are incomplete**; see the completion report below for this batch |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; batch 6 input `[]` is recorded as reviewed; the 55 in-run page edges belong to other batches and remain unreviewed until their inputs exist |
| external-reference check | `tools/frontier-item-gate.mjs --run ... --tool extcheck --quiet` | **FAIL `focus-item-unknown`** for scaffolded-but-unwritten item ids |
| forward-reference check | `tools/frontier-item-gate.mjs --run ... --tool fwdcheck --quiet` | same `focus-item-unknown` failure |
| depsource | `tools/frontier-item-gate.mjs --run ... --tool depsource --json` | crashes on `run-manifest-pages.mjs`: `Invalid or empty current page in ...batch-10.pages.json` |

### Owner-reviewed finding and disposition (engine scope, not a scaffold defect)

The original probe correctly found that item-scoped `extcheck` fails with
`focus-item-unknown` before authored item files exist. It over-attributed the finding:
only `extcheck` was in the `1-scaffold` gate battery; `fwdcheck`, positional
`precheck`/`rendercheck`/`prosecheck`, and `depsource --run` were exploratory commands,
not gates at that stage. Their results therefore did not block this stage. The included
`extcheck` gate itself was a confirmed pre-author blocker because its selector is derived
from the live manifests while the selected item carriers do not exist until `3b-author`.
Exact evidence for the included gate:

```
$ node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet
  [focus-item-unknown] --items-file names unknown item "def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric"
  ... (all scaffolded ids) ...
FAIL
$ node tools/depsource.mjs --items-file research/frontier-42-coxeter-32-frontier-gate-items.json --run frontier-42-coxeter-32
Error: Invalid or empty current page in frontier-42-coxeter-32-batch-10.pages.json
```

The manifest-only `content-policy-scaffold` gate already rejects the retired
`proved_here`, `external_refs`, and `external_dependency` fields in planned records at
this boundary. The orchestrator therefore removed only `extcheck` from `1-scaffold`;
the authored-item gate retains it after real item files exist. The live autopilot logged
`stages-reloaded` at 2026-10-06T17:35:42.807Z, before the complete scaffold gate battery
could run. No scope, item, plan, or stage ordering changed. The exploratory `depsource`
probe remains a separate observation about partially populated sibling manifests and is
not reported as a Step-1 gate failure.

## Completion

- All 8 items recorded `ready` with the examined direct dependency ids as evidence; records
  are `research/frontier-42-coxeter-32-step1-<id>.json`.
- This batch is mathematically scaffolded but not proved: the eight items are proof
  contracts for Step-3 authoring. No published content, shared plan, engine state or
  verdict was edited.

## Final check results at hand-off

- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` → exit 1, 58 work
  entries, **all** of the form `Empty scaffold inventory` for sibling pages (29 pairs not
  yet scaffolded at the time of writing). All 30 items that are scaffolded across the run
  carry current `ready` records; **no work entry names this batch**, and the eight records
  `research/frontier-42-coxeter-32-step1-<id>.json` are current for the manifest bytes on
  disk.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` → exit 1,
  58 errors, all `empty scaffold inventory` for sibling pages; no label, dependency or
  cycle error for this batch. The batch-local evaluation of the same tool logic over
  `batch-6.pages.json` reported 0 errors with the levels tabled above.
- Re-ran after stamping: `coverage-checklist` (0 errors, 1 low-yield warning),
  `source-fetch-check` (2/2 fetch-verified), `manifest-deps`, `content-policy --manifest-only`
  (0 errors, 0 warnings on the manifests present at run time).

Both run-wide failures are the expected consequence of sibling batches being mid-flight and
resolve when all 32 batches are scaffolded; the focus-mode item-validator finding recorded
above is the only unresolved engine-level issue seen from this batch.

## Self-review corrections before hand-off

A final read of the strategies found and corrected three defects, after which the affected
readiness records were refreshed (removed and re-recorded with the same examined dependency
lists, since the recorder deliberately refuses to overwrite a current record):

1. `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` strategy (iv) used a weak
   and mis-stated distance lower bound; it now uses the coordinate argument of the statement
   (`p in C_N` has coordinate at most `2-2^-N`, so `d(p,p_k) = 2^-N - 2^-k >= 2^-(N+1)` for
   `k > N`).
2. `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity` strategy had a
   garbled clause about unit speed; it now states the three-way equality (lower bound from
   the chord bound, upper bound from 1-Lipschitzness, and the chord bound itself).
3. `ex-cg-interval-realized-tree-versus-vertex-graph-metric` strategy now states the correct
   two-case proof that the nearest-point projection onto the tree path is 1-Lipschitz.

Records touched: the three corrected items plus the two whose dependency closure contains
the corrected length lemma (`thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`,
`ex-cg-hexagonal-a2-cell-and-graph-distance`). `step1-decisions check` reports no work entry
for any of the eight items after the refresh.

## Step 3b addendum (authoring pass, 2026-10-07)

The full per-item checkpoints and the handoff evidence are in
`research/frontier-42-coxeter-32-step3b-pair-coxeter-polyhedral-gluings-and-intrinsic-metrics.md`.
This note records the corrections that supersede rows above.

**Dependency levels.** The level table above (`…; 5 | ex-cg-interval…; 5 | ex-cg-hexagonal…`)
was wrong for the two B examples: `tools/item-dependency-levels.mjs` computes
levels from **in-run** dependencies only, and those two items' in-run suppliers
are A1–A3 (levels 0–2), so both compute to **3**, not 5. The item frontmatter and
the manifest rows now read 3, and the run-wide check names no batch-6 item. The
corrected order is: 0 `def-…`; 1 `lem-…-face-coherence…`; 2 `thm-…-topology…`;
3 `lem-…-length…`, `cex-cg-shrinking-edge-ray…`, `ex-cg-interval…`, `ex-cg-hexagonal…`;
4 `thm-cg-proper-polyhedral-spaces…`.

**Page `requires`.** `validate-plan` raised `undeclared-prereq` once the library
pages listed their items, because item dependencies reached four published pages
outside the declared closure:

- A page `coxeter-polyhedral-gluings-and-intrinsic-metrics` now also requires
  `measures-and-their-basic-properties` (home of
  `def-limsup-and-liminf-of-nonnegative-extended-sequences`, used by the length
  lemma and the proper-geodesics theorem).
- B page `coxeter-polyhedral-gluings-and-intrinsic-metrics-examples` now also
  requires `areas-of-elementary-plane-figures`, whose closure already contains
  `inner-product-spaces-and-orthogonality` (inner-product and Pythagorean
  suppliers) and `the-total-derivative` (`def-convex-subset-of-euclidean-space`),
  so the addition is a transitive reduction with no cycle.

The three carriers — `research/frontier-42-coxeter-32-batch-6.pages.json`,
`research/plan-spec.json` and the two library page frontmatters — were updated
together; `validate-plan` on the pair exits 0 (only pre-existing
`redundant-prereq` warnings), and `splice-plan --verify` reports no `requires`
disagreement. The design `research/plan-coxeter-groups-track.md` §CG-03 still
prints the old `Requires:` line; refreshing it is reported for Step 4.

**Item repairs.** Applied `\iota` notation in the three B items was made
subscripted (`\iota_e(C_e)`, `\iota_u(C_u)`, `\iota_{e_n}(C_{e_n})`,
`\iota_H(H)`) to pass `content-policy`; the tree example's induction proof now
carries `[base, IH]` (step 1.2) and `[discharge-induction: step 1.2]` (final step
6.1) to pass `precheck` under its declared strategy.

**Finite smoke.** No registered model matched this pair, so the batch gate was
vacuous. A new exact-`Q(sqrt 3)` model `hexagon-a2-cell-triangulation-arithmetic`
was registered in `tools/finite-smoke.mjs` and declared by
`ex-cg-hexagonal-a2-cell-and-graph-distance` in the batch-6 proof contract;
`finite-smoke` now runs one live check and `gate-liveness` passes.

**Citation fidelity.** The two widening candidates (length-lemma [F6] and
proper-geodesics [F10]) were read against the cited suppliers and dismissed as
detector artifacts; all 124 recorded quotes are present in their cited items.

**Cross-batch input.** `research/frontier-42-coxeter-32-batch-6.cross-batch-dependencies.json`
remains `[]`: no owned item declares an in-run cross-batch supplier, and no
statement change here opens a consumer repair. The unified ledger was refreshed
with `frontier-dependency-ledger.mjs refresh`.
