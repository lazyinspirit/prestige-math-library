# Step 3a scope review — Fourier Restriction and the Stein–Tomas Theorem

- Run: `frontier-38-owner-30` (role: alpha; batch 6; this pair only)
- A page: `fourier-restriction-and-the-stein-tomas-theorem` (plan order 458.02617)
- B page: `fourier-restriction-and-the-stein-tomas-theorem-examples` (plan order 458.02618)
- Inventory: 21 A items (1 definition, 15 lemmas, 2 theorems, 1 corollary, 2 recorded
  remarks with `proved_here: false`), 5 B items (3 counterexamples, 2 examples, one of
  them `generation.role: example`); A `requires` five published pages, B requires the A
  page only; companion pointers pair the pages.
- Scope decision: **sufficient**, recorded in
  `research/frontier-38-owner-30-step3a-review-fourier-restriction-and-the-stein-tomas-theorem.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item contract,
  plan, page, coverage record, engine state or owner record was edited. No owner scope
  record and no prior review record existed for this pair; nothing was assumed.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-38-owner-30-batch-6.pages.json` | Current scope carrier: all 26 items with full statements, kinds, `deps`, levels, `requires`, orders, companion pointers; batch 6 contains no other pair |
| `research/frontier-38-owner-30-batch-6.coverage.json` | 9 source records (6 on A, 3 on B), 55 harvested rows with per-row locators/dispositions/reasons; fetch stamps |
| `research/frontier-38-owner-30-batch-6.notes.md` | Step-1 construction record: design/plan reconciliation, local prerequisites, attempt-2 repairs, check results, residual uncertainty |
| `research/plan-fourier-analysis-track.md` L964–1010 (binding FR-14 design), L36 row, L75 row, L324 source matrix, L1324–1325 harvest rows 36–39, L200–207 forward-reference policy | Binding prose design, source assignment, harvest mapping, declared non-load-bearing interface |
| `research/frontier-38-owner-30-owner-authoring-direction.md` | Binding owner direction; FR-14 clauses (Knapp obstruction, `beta=(n-1)/(n+1)`, HLS order `2/(n+1)`, `n>=2`) checked against the statements |
| `research/plan-spec.json` entries 458.02617/.02618 and a full consumer scan of every page's `requires` | Plan reconciliation (empty pre-splice `items`), zero plan consumers of this pair |
| `research/frontier-38-owner-30-scope-ledger.json`; `research/frontier-38-owner-30-dispatch/*` (prompts only, no result files) | Both pages in run scope; no prior or concurrent receipt for this pair |
| `items/*.md` for all 86 distinct external dependencies and the published library pages hosting them | Direct-prerequisite resolution, `status: published`, page homes, hypothesis spot-checks |
| `research/frontier-38-owner-30-step1-<id>.json` (26 files) | All 26 items recorded `ready` (attempt-2 recertified after the in-scope statement repairs) |
| Independent re-runs today: `manifest-deps`, `coverage-checklist --require-destination`, `content-policy --manifest-only`, `depcheck`, `source-fetch-check` | Current mechanical state of this batch and of the published dependency web |

## Inventory against the prose design

The manifest reproduces the binding FR-14 design 1:1 and adds exactly the seven local
prerequisites the owner direction authorises (necessary only; no padded items):

| Design item (plan L976–993) | Manifest item |
|---|---|
| A1 restriction/extension definition | `def-fourier-restriction-and-adjoint-extension-operators` |
| A2 duality of the two estimates | `lem-restriction-and-extension-estimates-are-dual` |
| A3 cap wave packet concentrates on the dual tube | `lem-cap-wave-packet-has-dual-tube-concentration` |
| A4 Knapp necessary condition | `thm-knapp-necessary-condition-for-spherical-ltwo-restriction` |
| A5 one-dimensional van der Corput | `lem-van-der-corput-oscillatory-integral-estimate` |
| A6 multidimensional nondegenerate stationary phase | `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase` |
| A7 spherical-measure decay | `lem-stationary-phase-decay-for-spherical-surface-measure` |
| A8 TT\* reduction to a convolution | `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` |
| A9 graph-patch slice family (dispersive + uniform L2) | `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` |
| A10 fractional-integration endpoint bound | `lem-stein-tomas-tt-star-bound-from-fractional-integration` |
| A11 Stein–Tomas spherical restriction theorem | `thm-stein-tomas-spherical-restriction-theorem` |
| A12 compact-hypersurface corollary | `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` |
| A13 general restriction problem (orientation) | `rem-the-general-fourier-restriction-problem` |
| A14 missing Strichartz interface (orientation) | `rem-restriction-estimates-and-the-missing-strichartz-interface` |
| B1 pointwise restriction undefined on Lp classes | `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` |
| B2 Knapp cap/tube volume computation | `ex-knapp-cap-and-tube-volume-calculation` |
| B3 flat hyperplanes fail the decay | `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` |
| B4 circle exponents | `ex-circle-stein-tomas-exponents` |
| B5 Knapp rules out below the Tomas exponent | `cex-knapp-rules-out-extension-below-the-tomas-exponent` |

New local prerequisites (all consumed, all inside the declared `requires` closure):
`lem-fourier-pairing-for-a-finite-measure-and-schwartz-data`,
`lem-unit-sphere-is-lebesgue-null`,
`lem-sphere-finite-graph-charts-and-surface-density`,
`lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph`,
`lem-localized-curved-patch-measure-transform-decay`,
`lem-spherical-cap-and-dual-slab-scales`,
`lem-compact-curved-hypersurface-finite-graph-cover`.

Owner-direction clauses, checked in the statements: (i) the Knapp obstruction is the
theorem `...p<=2(n+1)/(n+3)` with the dual `q>=2(n+1)/(n-1)` and the `delta->0` cap
exhibition; (ii) the temporal decay is the slice exponent
`(n-1)(1/p-1/2)`, which at `p_0=2(n+1)/(n+3)` equals `beta=(n-1)/(n+1)`; (iii) the HLS
order is recorded as `1/p-1/p'=2/(n+1)=1-beta` in
`lem-stein-tomas-tt-star-bound-from-fractional-integration`; (iv) every geometric
statement carries `n>=2`. No designed claim is dropped; no item outside the designed
subject is added.

## Source coverage

- 9 source records (Williams §11.1–11.4; Wolff §6–§7; Tao notes 8; Tao notes 9;
  Datar; Hunter on A; Williams/Wolff/Tao 8 on B), all fetch-verified when re-run
  today (`9/9 source(s) fetch-verified`, 0 drops). Williams §§11.1–11.4 is the
  complete primary treatment (Theorem 11.1, Lemma 11.2, Propositions 11.3–11.4,
  equations (11.1)–(11.19)); the other sources supply stationary phase, the Knapp
  computation, curvature/shape-operator and surface-measure material.
- 55 harvested rows, all destination-mapped: 30 `included`, 19 `inline`,
  1 `already-published` (the FR-13 HLS theorem), 5 `out-of-scope` each with a
  result-specific reason (Wolff's dyadic non-endpoint proof kept only as an
  independent cross-check; Wolff Theorem 7.4/Lemma 7.5 unused; Tao 8 §§5–7 outside
  range; the fetched Tao notes 9 contains finite abelian group theory only).
- Recorded locator drift, not escalated: the design's "Wo §2, pp. 6–10" is §7,
  pp. 41–49 of the fetched Wolff edition, and the cited "Taob note 9" is not
  restriction material, so the Strichartz leaf is re-sourced to Williams §11.4
  (the owner direction permits one fully local treatment with a second locator
  only where one exists). No plan-promised harvest row (rows 36–39 for FR-14) is
  unmapped.

## Role in the library

FR-14 is the L2-density restriction pair of the Fourier track, sitting after FR-13
(Riesz potentials/HLS) and consuming the FR-6 and FR-13 A pages, the published
Plancherel page, `product-measures-and-the-fubini-tonelli-theorems` (polar measure),
`regular-surfaces-and-surface-integrals`, and the published interpolation and
differential-geometry interfaces. A full scan of `plan-spec.json` finds **no plan page
whose `requires` names this pair**, so it is currently a terminal consumer; the
Strichartz application is deliberately a non-load-bearing `proved_here: false` remark
with no PDE page id (design L200–207; no item depends on it). The B page is a true
example companion: each leaf consumes A items (`cex-flat...` also consumes the
corollary), and none of the five B items is a dependency of any A item.

## Dependency and prerequisite checks (re-verified today)

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-6.pages.json`:
  26 items, 0 errors. `coverage-checklist ... --require-destination`: 0 errors,
  0 warnings. `content-policy --manifest-only`: 26 scoped items, 0/0.
- `node tools/depcheck.mjs`: repo-wide OK — no cycles, all references resolve, no
  draft items on published pages (only pre-existing `cited-not-in-deps` advisories,
  none involving this batch).
- All 86 distinct direct external dependencies (142 edges, covering every item and
  both pages) resolve to `status: published` items; none is homed only on an
  examples/B page; the five declared `requires` pages are published. The transitive
  closure of the corollary (1,917 published items) was resolved by script.
- Hypothesis spot-checks: the FR-13 theorem
  `thm-hardy-littlewood-sobolev-fractional-integration` states `n>=1`, `0<alpha<n`,
  `1<p<n/alpha`, which covers the consumed one-dimensional case `alpha=2/(n+1)<1`,
  `p_0<(n+1)/2`; `cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime`
  gives exactly `A^{2/p-1}B^{2-2/p}`, i.e. the slice decay
  `<t>^{-(n-1)(1/p-1/2)}`; `lem-riesz-thorin-bound-on-the-finite-simple-core`
  supplies the `L^q`, `q>=q_0`, extrapolation used with the uniform bound on `Eg`.
- All 26 items carry current `ready` records; the batch cross-batch input is `[]`
  and the page-level edges are published pages.

## Unmet prerequisites (flagged)

One potentially unmet prerequisite was identified; it is flagged with its evidence,
not decided:

- **Consuming item:** `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature`
  (through `lem-compact-curved-hypersurface-finite-graph-cover`).
- **Required prerequisite claim and hypotheses:** every compact embedded `C^infinity`
  hypersurface `S` in `R^n` (`n>=2`) admits a continuous global unit normal field
  (is coorientable), so that the corollary's phrase "extrinsic Gaussian curvature"
  (defined in this library only for a *supplied* normal, via
  `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`)
  and the cover lemma's stated hypothesis "with a continuous unit normal field" can be
  discharged.
- **Evidence for its absence:** the cover lemma states the normal field as a
  hypothesis; the corollary's statement does not assume one; the corollary's full
  1,917-item transitive published closure contains no supplier (script check).
  Targeted searches found only `def-induced-orientation-on-a-hypersurface-from-a-coorientation`
  (assumes a coorientation), `def-normal-and-conormal-bundles-of-an-embedded-submanifold`
  (defines the bundles, no triviality), `thm-jordan-brouwer-separation` (only
  `S^{n-1}`-type embeddings), `rem-jordan-curve-theorem` (n=2 orientation remark), and
  the orientation page (`def-orientable-manifold` etc.) — no compact-hypersurface
  coorientability result.
- **Confirmed vs uncertain:** absence of any supplier in the published library and in
  the 26-item scaffold is confirmed for the items searched. What is *uncertain* is
  whether the authoring stage must discharge the cover lemma's hypothesis at all: the
  cover lemma's own recorded strategy is orientation-free ("`K != 0`
  gives `det D^2h != 0` up to sign" via local graph projections + compactness), so the
  corollary can be wired without a global normal.
- **Recommended action (no scaffold edit made):** at Step 3b, either (preferred)
  build the finite graph cover inline from the local defining submersion, the graph
  shape-operator determinant formula and Heine–Borel compactness — this needs no new
  item and no statement change — or, if
  `lem-compact-curved-hypersurface-finite-graph-cover` is to remain the sole supplier,
  the owner should amend its hypothesis/statement or authorise a local bridge item
  ("compact embedded `C^infinity` hypersurfaces in `R^n` admit a continuous unit normal
  field"). The second route is an inventory/statement change and therefore stays
  owner-held under this dispatch.

## Minor observations (not scope blockers)

1. Three items have no dedicated coverage row — the pairing lemma, the graph-cover
   lemma and the corollary. Their content is mapped to the Williams Step-1/§11.1 and
   Proposition 11.3 rows and to plan harvest row 36; Step 3b should make the source
   anchoring of these locally built items explicit.
2. The orientation remark attributes the settled `n=2` restriction problem to
   "Fefferman–Stein"; Stovall's survey credits "Fefferman–Stein and Zygmund". The
   remark is orientation-only (`proved_here: false`, `external_dependency` recorded),
   so this is a Step-3b source-wording check, not a scope matter.
3. The five page-level back-edges found by splice validation
   (`euclidean-surface-measure-divergence-and-green-identities`,
   `rank-theorems-and-embedded-submanifolds`,
   `riemann-curvature-and-riemannian-submanifolds`,
   `riemannian-metrics-length-distance-and-volume`,
   `geodesics-the-exponential-map-completeness-and-hopf-rinow`) are published pages;
   the manifest deliberately keeps only the plan's five declared `requires`, and the
   adjudication of the extra edges belongs to Step 4 (recorded, not escalated).
4. `ex-circle-stein-tomas-exponents` is an `ai-generated` arithmetic leaf, as the
   design specifies; no source is claimed for it.

## Judgment

**Sufficient.** The planned definitions, results and examples cover the intended
subject — restriction and extension operators on a compact curved hypersurface, the
duality between the two estimates, the exact Knapp obstruction `p_0=2(n+1)/(n+3)`
(`q_0=2(n+1)/(n-1)`), a complete endpoint proof along the
stationary-phase -> localized curved-patch decay -> TT\* -> slice interpolation ->
one-dimensional fractional integration route with `beta=(n-1)/(n+1)` and HLS order
`2/(n+1)`, the full `p<=p_0` / `q>=q_0` range with sharpness, the invariant
compact-hypersurface corollary, and honest orientation remarks for the open general
restriction problem and the deliberately uncommissioned Strichartz interface — with
an example companion that checks the exponents, the cap/tube scaling, the necessity
of pointwise Schwartz initial data and the curvature hypothesis. The inventory is
design- and owner-direction-identical, the source record is complete and
fetch-verified with every decline reasoned, all direct prerequisites are published
(none examples-only), and the pair has no plan consumer left unsupported.

Residual uncertainty, recorded honestly (Step-3b matters, not scope blockers):

- The global-normal prerequisite above must be resolved in the authoring wiring of
  the corollary (preferred: the orientation-free inline cover).
- The uniform-in-`nu` compactness steps inside
  `lem-localized-curved-patch-measure-transform-decay` must be written out by the
  author rather than cited; the local prerequisites were sourced and inspected but
  proof-level verification remains with Step 3b and the review stages.
- I verified the cited statements, the current manifests/coverage and the dependency
  resolution; I did not re-read every proof page of the full Williams/Wolff texts in
  this session (the source records state the Step-1 read evidence), and the
  proof-level obligations stay with the later gates.
