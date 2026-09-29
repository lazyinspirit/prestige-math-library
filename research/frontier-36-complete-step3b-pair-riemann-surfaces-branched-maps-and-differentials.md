# Step 3b — pair `riemann-surfaces-branched-maps-and-differentials`

- Run: `frontier-36-complete`; role `alpha-high`; batch 28.
- A page: `riemann-surfaces-branched-maps-and-differentials` (order 843).
- B page: `riemann-surfaces-branched-maps-and-differentials-examples` (order 844).
- Dispatch label: `step3b-pair-riemann-surfaces-branched-maps-and-differentials-c13e20ebc8f9ae95`.
- Owned files: `research/frontier-36-complete-batch-28.pages.json`,
  `…-batch-28.coverage.json`, `…-batch-28.cross-batch-dependencies.json`,
  `…-batch-28.proof-contracts.json`, `…-batch-28.notes.md` (Step 1 record),
  the 23 item files, and the two library pages. Batch 28 has no sibling pair.

## Inventory and work order

All 23 items exist, are fully authored, and carry `status: draft`; the two
library pages are written and render. Work followed the dispatch's
dependency-level order (ties by page then item ID), with the two
auditor-added lemmas at levels 0–1 placed before their consumers:

- level 0: `lem-planar-piecewise-analytic-region-triangulation` (added),
  `def-riemann-surface-and-holomorphic-atlas`;
- level 1: `lem-index-of-graph-bounded-region-boundary` (added),
  `def-holomorphic-and-meromorphic-map-of-riemann-surfaces`,
  `lem-finite-analytic-chart-triangulation-compact-riemann-surface`,
  `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`,
  `ex-basic-riemann-surface-atlases`, `ex-complex-torus-holomorphic-atlas`;
- level 2: `def-meromorphic-differential-on-a-riemann-surface`,
  `thm-local-normal-form-holomorphic-map-riemann-surfaces`,
  `ex-nonsingular-algebraic-curve-charts`,
  `ex-smooth-affine-conic-as-punctured-plane`;
- level 3: `def-ramification-index-and-branch-value`,
  `thm-residue-theorem-compact-riemann-surface`;
- level 4: `lem-pullback-order-of-meromorphic-differentials-under-branched-maps`,
  `thm-proper-holomorphic-map-riemann-surfaces-has-degree`,
  `ex-coordinate-change-for-meromorphic-differential`;
- level 5: `cex-exponential-local-biholomorphism-is-not-proper`;
- level 7: `thm-topological-classification-compact-riemann-surfaces`;
- level 8: `def-genus-and-euler-characteristic-compact-riemann-surface`;
- level 9: `thm-riemann-hurwitz-formula`;
- level 10: `ex-hyperelliptic-double-cover-ramification`,
  `ex-power-map-riemann-hurwitz`.

`item-dependency-levels check --run frontier-36-complete` passes (947 items),
so the labels above are the recomputed levels after every local repair and
addition in this dispatch.

## Scaffold audit — local repairs made

Repairs were confined to this pair's files; no other pair's file was edited.

1. **Undeclared citations added** (`thm-local-normal-form-holomorphic-map-riemann-surfaces`
   F4 → `def-connected-space`; `ex-coordinate-change-for-meromorphic-differential`
   F4 → `def-isolated-singularity-types`; `ex-hyperelliptic-double-cover-ramification`
   F8 → `def-genus-and-euler-characteristic-compact-riemann-surface`). Each fact
   cited a source missing from `deps`; item and manifest `deps` were updated.
2. **Non-existent dependency removed** (`thm-proper-holomorphic-map-riemann-surfaces-has-degree`
   declared `def-locally-constant-map`, which exists in neither the plan nor the
   library). F6 was restated from `def-connected-space` (separation ⇔ partition
   into two nonempty clopen pieces) and step 5.1 rewritten to the standard clopen
   argument: `D = {y : d(y) = d(y₀)}` is nonempty, open by the local constancy of
   step 4.1 and closed because its complement is open for the same reason, so
   `D = Y`. The claim (degree exists and is constant) is unchanged; no new item
   was needed.
3. **Uncitable remark retargeted** (`ex-complex-torus-holomorphic-atlas` F3;
   `lem-nonsingular-complex-algebraic-curve-holomorphic-charts` F8). Both facts
   cited the published remark `rem-complex-plane-euclidean-dictionary`, which has
   no `## Statement`/`## Definition`/`## Example`/`## Remark` heading; a strict
   proof contract can only quote from those sections, so no citation to it can
   ever be contracted. The facts now cite
   `thm-complex-numbers-are-the-real-coordinate-plane`, whose Statement gives the
   same identification `Φ(a+bi) = (a,b)` verbatim. Mathematical content
   unchanged; `deps` updated in item and manifest.
4. **Dangling step reference** (`ex-hyperelliptic-double-cover-ramification`
   step 5.1 cited "steps 1.2–1.4" though the item has no step 1.4). Corrected to
   steps 1.1, 1.2, 2.1 and 2.2, which is what the sentence uses.
5. **Missing proof headings** (`lem-planar-piecewise-analytic-region-triangulation`,
   `lem-finite-analytic-chart-triangulation-compact-riemann-surface`). Both items
   carried numbered steps outside any `##` heading, so parsers and every
   proof-bearing gate saw zero steps. A `## Proof` heading was inserted before
   each `**Proof technique:**` line; no wording changed.

## Local suppliers added (auditor-created class)

- `lem-planar-piecewise-analytic-region-triangulation` (A page, level 0):
  slab/graph triangulation of a compact plane region with piecewise
  real-analytic boundary avoiding a prescribed finite set, choice-free, with the
  graph-bounded orientation convention. Load-bearing for the chartwise
  triangulation and the residue theorem.
- `lem-index-of-graph-bounded-region-boundary` (A page, level 1): the positively
  oriented boundary of a graph-bounded region has winding number 1 at interior
  points, 0 outside, and is null-homologous in any open superset.

Both are registered in the batch manifest, the coverage file (canonical rows),
the proof contract, and the A-page item list. Per the dispatch, these items are
not sent through a Step 3 self-review; the engine certifies them after a
successful dispatch. `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`
and `ex-nonsingular-algebraic-curve-charts` were supplied by the owner's scope
enrichment and are authored and contracted here.

## Proof contracts

`research/frontier-36-complete-batch-28.proof-contracts.json`: 23 items,
211 citations (each with the source section, a verbatim excerpt and the exact
list of steps that use the fact), 140 numbered-step derivations with stated
inputs, and 184 boundary rows (8 standard cases per item).

- `node tools/proof-contract.mjs … --strict` → **1 error**, the escalation below
  (`citation-fact-uncontracted [thm-topological-classification-compact-riemann-surfaces]`:
  F4 cites `thm-classification-of-compact-connected-surfaces`, which has no item
  file). All other 22 items pass strictly. The missing supplier's text does not
  exist anywhere, so a quote for it cannot honestly be written; leaving the
  citation uncontracted is the honest state.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` → no
  quote-not-found, no widening candidates.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` →
  no template clusters, no contradicted dispositions.

## Checks actually run (batch 28)

- `precheck` (explicit item paths, all 23): pass, 0 failing.
- `rendercheck` (23 items + 2 pages): OK.
- `content-policy research/frontier-36-complete-batch-28.pages.json`: 23 scoped
  items, 0 errors, 0 warnings.
- `coverage-checklist … --require-destination`: 1 page, 44 harvested results,
  0 errors/warnings.
- `proof-contract --strict`: 1 error (the escalated supplier; see above).
- `item-dependency-levels check --run frontier-36-complete`: pass (947 items).
- `validate-plan research/plan-spec.json`: OK.
- `frontier-dependency-ledger refresh --run frontier-36-complete`: refreshed; the
  three batch-28 cross-batch rows are preserved and still `open`.
- `author-check frontier-36-complete 28`: precheck ✔, rendercheck ✔,
  content-policy ✔, proof-contract ✘ (the single escalated citation). Result
  saved to `research/frontier-36-complete-author-check-28.json`.

## Escalations (owner-held; author a consumer only with this flag)

`thm-classification-of-compact-connected-surfaces` (batch-10 page
`classification-of-compact-connected-surfaces`, order 444.1) exists only as a
scaffold; there is no `items/thm-classification-of-compact-connected-surfaces.md`.
Consumers and consuming steps in this pair:

| consumer | use | steps |
| --- | --- | --- |
| `thm-topological-classification-compact-riemann-surfaces` | [F4] normal forms, invariants, polygon words | 3.1, 4.1 (also Statement and Remarks) |
| `def-genus-and-euler-characteristic-compact-riemann-surface` | AC paragraph of Well-definedness; genus from the classification | Well-definedness (no numbered steps) |
| `thm-riemann-hurwitz-formula` | [F6] genus interface | 2.1, 5.1, 7.1, 8.1 |
| `ex-hyperelliptic-double-cover-ramification` | [F8] genus of the sphere | 5.1, 6.1 |
| `ex-power-map-riemann-hurwitz` | [F7] genus of the sphere | 3.1, 4.1 |

`cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`
(batch-10, order 444.1's page, scaffold only) is the exact supplier of the
`χ = 2 − 2g` clause used by `def-genus-…` in its Well-definedness paragraph and
transitively by the three items above. The same paragraph also names the
unauthored `cor-orientability-and-euler-characteristic-determine-a-compact-connected-surface`.

Proof obligations the supplier must discharge (stated in the consumer's own
Remarks): (i) produce the homeomorphism to `#_gT^2` or the `k`-fold projective
plane and the uniqueness of the label; (ii) identify the square-word family with
the nonorientable models; (iii) match "integral orientability" with the
orientation induced by a complex atlas through the local-homology generator used
in step 2.1 of the topological classification.

Because these suppliers are unauthored, the five consuming items keep
`escalate` and must not be accepted until the supplier items are authored and
their actual use reconciled.

### AC propagation

The five consumers above assume the Axiom of Choice and declare
`def-axiom-of-choice`; each states that AC enters exactly through the batch-10
classification chain: `thm-topological-classification-…` [F4]/[F6] step 4.1,
`def-genus-…` (AC paragraph), `thm-riemann-hurwitz-formula` [F6]/[F7] step 8.1,
`ex-hyperelliptic-…` [F10] step 6.1, `ex-power-map-…` step 4.1. The other 18
items are choice-free and say so explicitly (finite selections only).

## Open obligation — item decisions could not be recorded

**Blocker (owner action required).** The pair's Step 3a scope receipt is
owner-held and stale: the owner `proceed` receipt has
`sha256 = 359b413e…` (`2026-09-27T17:55:13Z`) for the pre-addition scope, while
the current `scopeHash` is `34b83ccd…`, because this dispatch (as the brief
authorises) added the two plane-geometry lemmas to the A-page manifest.
`tools/step3-decisions.mjs record-item` refuses with *"Step 3a must clear for the
item pair before item auditing"*, and a reviewer scope record is refused while an
owner receipt exists ("Only the owner may change an owner scope decision").
Consequently **no `step3b-review-<item>.json` decision receipts exist for the 21
scaffold items**, and the stale scope-decline review
(`…-step3a-review-…`, `insufficient`, `13ace8c1…`) could not be refreshed by
this role. No `--owner` flag was used and no receipt was hand-written.

Remedy, either path:

1. let this dispatch complete, then run
   `node tools/step3-auditor-items.mjs certify --run frontier-36-complete`
   (the engine does this after a successful author result): it revalidates the
   baseline owner `proceed` against the baseline scope hash and closes the
   current scope as auditor-authored once both added items are certified; or
2. the owner records `proceed` for the current scope hash.

Then record the decisions (in dependency order): `accept` with confidence 1 for
the 16 scaffold items listed below, and `escalate` for the five consumers of the
batch-10 suppliers. (The two `lem-planar…`/`lem-index…` additions are certified
by the engine as auditor-created items, not by this role.)

**Accept-ready (18 = the 16 scaffold items + the 2 auditor additions):** `lem-planar-piecewise-analytic-region-triangulation`,
`lem-index-of-graph-bounded-region-boundary`, `def-riemann-surface-and-holomorphic-atlas`,
`def-holomorphic-and-meromorphic-map-of-riemann-surfaces`,
`lem-finite-analytic-chart-triangulation-compact-riemann-surface`,
`lem-nonsingular-complex-algebraic-curve-holomorphic-charts`,
`ex-basic-riemann-surface-atlases`, `ex-complex-torus-holomorphic-atlas`,
`def-meromorphic-differential-on-a-riemann-surface`,
`thm-local-normal-form-holomorphic-map-riemann-surfaces`,
`ex-nonsingular-algebraic-curve-charts`, `ex-smooth-affine-conic-as-punctured-plane`,
`def-ramification-index-and-branch-value`,
`thm-residue-theorem-compact-riemann-surface`,
`lem-pullback-order-of-meromorphic-differentials-under-branched-maps`,
`thm-proper-holomorphic-map-riemann-surfaces-has-degree`,
`ex-coordinate-change-for-meromorphic-differential`,
`cex-exponential-local-biholomorphism-is-not-proper`.

(`accept` vs `repaired` is a bookkeeping choice: this batch item set was
authored from scaffolds in this dispatch, and four of the items also received
the local repairs listed above.)

**Escalate (5):** `thm-topological-classification-compact-riemann-surfaces`,
`def-genus-and-euler-characteristic-compact-riemann-surface`,
`thm-riemann-hurwitz-formula`, `ex-hyperelliptic-double-cover-ramification`,
`ex-power-map-riemann-hurwitz`.

## Published items — potential defects

None confirmed. The published direct prerequisites inspected by statement and
relevant proof during this dispatch were
`def-real-analytic-function`, `thm-real-analytic-inverse-and-implicit-function-theorems`,
`lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical`,
`thm-holomorphic-implicit-function-theorem`,
`def-topological-manifold-without-boundary`, `def-quotient-topology`,
`def-initial-and-final-topology`, `thm-heine-borel-rn`,
`thm-complex-numbers-are-the-real-coordinate-plane`, `def-connected-space`,
`thm-complex-exponential-is-entire-with-derivative-itself`,
`def-isolated-singularity-types`, `thm-laurent-expansion-annulus`,
`thm-chain-rule-for-complex-derivatives`, `def-axiom-of-choice`, and the
`def-riemann-sphere-holomorphic-charts` atlas. No statement/use mismatch was
found; the only interface limitation found is the following, and it is a
convention issue, not a defect of an argument.

**Library-wide observation (route to the ledger owner, not a defect claim).**
`rem-complex-plane-euclidean-dictionary` and the other published remarks written
without a `##` section heading cannot be quoted by the strict proof contract
(`SOURCE_SECTIONS` = Statement, Statement refuted, Definition, Example, Remark).
Any fact that links such an item is uncontracted by construction, and no
published contract in the library does cite one. Remediation options: give such
remarks a `## Remark` heading in a future maintenance pass, or keep citing the
theorem that states the identification (what this pair now does).

## Pre-splice plan notes for Step 4

- `validate-plan research/plan-spec.json` is clean; the A page's manifest
  `requires` equals the plan's (`classification-of-compact-connected-surfaces`
  among them).
- The batch-28 cross-batch input keeps its three `open` rows (page-level,
  `thm-topological-classification-…`, `def-genus-…`); they stay open while
  batch-10 is unauthored. No plan or other pair's file was edited.
- The plan already places the batch-10 page before this pair (order 444.1 < 843);
  no new prerequisite pair and no order change is requested.

## Handoff summary

- Completed: all 23 items authored and contracted; both pages written;
  precheck/rendercheck/content-policy/coverage/levels/plan/ledger checks pass;
  author-check fails only on the single escalated citation.
- Local suppliers added: the two plane-geometry lemmas (registered everywhere).
- Open obligations: the two batch-10 suppliers (exact IDs, consumers and steps
  above); the owner scope refresh that unblocks the 21 item decisions; the
  five `escalate` items remain escalated.

## Per-item checkpoint record

| item | claim (title) | deps | primary source locator |
| --- | --- | --- | --- |
| `lem-planar-piecewise-analytic-region-triangulation` | Slab triangulation of a compact plane region bounded by finitely many piecewise real-analy | 4 | §2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 49–51): subdivision of a geodesically cut surface into polygons whose sides are graphs, followed b |
| `lem-index-of-graph-bounded-region-boundary` | Index of the boundary of a graph-bounded plane region | 11 | Printed pp. 227–228; the argument-increment computation of the index of a grid cell, transferred here from rectangles to graph-bounded curvilinear reg |
| `def-riemann-surface-and-holomorphic-atlas` | Riemann surfaces and holomorphic atlases | 3 | Ch. 1 §2, Definitions 1.6 and 1.8, printed pp. 9–10 |
| `lem-nonsingular-complex-algebraic-curve-holomorphic-charts` | Local holomorphic charts on nonsingular complex algebraic curves | 11 | Ch. 1 §2, Examples 1.9(iii)–(iv), printed pp. 10–11: a zero set with nonvanishing gradient, and the projective hypersurface defined by a homogeneous p |
| `def-holomorphic-and-meromorphic-map-of-riemann-surfaces` | Holomorphic maps and meromorphic functions on Riemann surfaces | 3 | Ch. 1 §2, Definition 1.14 and Examples 1.15; Ch. 4 §2, discussion before Theorem 4.4 |
| `lem-finite-analytic-chart-triangulation-compact-riemann-surface` | Finite chartwise triangulation of a compact Riemann surface | 6 | §2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 49–51): a compact surface is triangulated along finitely many arcs in general position; the argume |
| `def-meromorphic-differential-on-a-riemann-surface` | Meromorphic differentials, orders and residues | 15 | Ch. 6 §2, Definition 6.2 and the discussion of MΩ_{S,p}, printed pp. 54–55: the residue as the coefficient of z^{-1}dz in a local coordinate, and the  |
| `thm-local-normal-form-holomorphic-map-riemann-surfaces` | Local power-map normal form on Riemann surfaces | 9 | Ch. 3, Theorem 3.2 and its proof, printed pp. 16–17: a nonconstant holomorphic map between Riemann surfaces has the local form z ↦ z^e in suitable coo |
| `def-ramification-index-and-branch-value` | Ramification index, ramification order and branch value | 6 | Ch. 4 §2, the multiplicity mult_p(f) of a nonconstant holomorphic map at a point and the normal form z ↦ z^{mult_p(f)}, printed pp. 43–44. |
| `thm-residue-theorem-compact-riemann-surface` | Residue theorem on a compact Riemann surface | 14 | Ch. 6 §2, Proposition 6.3 and its proof, printed pp. 54–55: the sum of the residues of a meromorphic differential on a compact Riemann surface vanishe |
| `lem-pullback-order-of-meromorphic-differentials-under-branched-maps` | Pullback order formula for a branched holomorphic map | 9 | Ch. 4 §2, Theorem 4.4 and its proof, printed p. 43: the order of a pulled-back meromorphic differential at a point equals e times the order at the ima |
| `thm-proper-holomorphic-map-riemann-surfaces-has-degree` | Degree of a proper holomorphic map of Riemann surfaces | 14 | Ch. 4 §2, Proposition–Definition 4.5 and Corollary 4.6, printed pp. 43–44: a proper nonconstant holomorphic map has a degree d=Σ_{x∈f^{-1}(y)}mult_x(f |
| `thm-topological-classification-compact-riemann-surfaces` | Topological classification of compact Riemann surfaces | 8 | §2.3.A, the finite triangulation of a compact surface and the polygonal normal form, and §2.4.A, the classification of compact surfaces and the orient |
| `def-genus-and-euler-characteristic-compact-riemann-surface` | Genus and Euler characteristic of a compact Riemann surface | 5 | Ch. 1 §2 and Ch. 4 §3: the genus of a compact Riemann surface and its computation from a polygonal schema or triangulation. |
| `thm-riemann-hurwitz-formula` | Riemann–Hurwitz formula for compact Riemann surfaces | 13 | Ch. 4 §3, Theorem 4.8, printed pp. 45–46: the topological cell-deficit proof of the Riemann–Hurwitz formula. |
| `ex-basic-riemann-surface-atlases` | Atlases on the sphere, plane, disc and annulus | 13 | Ch. 1 §2, Examples 1.7(i) and 1.9(i), printed pp. 9–10: the projective line as a complex manifold and Riemann surface, together with the standing exam |
| `ex-complex-torus-holomorphic-atlas` | The complex torus as a Riemann surface | 12 | Ch. 1 §2, Example 1.7(ii) and Example 1.9(ii), printed p. 10: for a lattice L in C the quotient C/L has holomorphic translation transitions, and is a  |
| `ex-smooth-affine-conic-as-punctured-plane` | A nonsingular affine conic is a punctured-plane Riemann surface | 14 | Ch. 1 §2, Examples 1.9(iii) and the explicit conic example, printed pp. 10–11: the zero set x^2+y^2=1 is identified with the punctured plane by u=x+iy |
| `ex-nonsingular-algebraic-curve-charts` | Nonsingular affine and projective curves as Riemann surfaces | 15 | Ch. 1 §2, Examples 1.9(iii)–(iv), printed pp. 10–11: the affine zero set of holomorphic functions with nonvanishing gradient and the projective zero s |
| `ex-coordinate-change-for-meromorphic-differential` | Orders and residues under inversion on the sphere | 8 | Ch. 6 §2, Definition 6.2 and Proposition 6.3, printed pp. 54–55: residues computed in a local coordinate and the vanishing of the total residue; the s |
| `cex-exponential-local-biholomorphism-is-not-proper` | The exponential map has no finite proper-map degree | 8 | Ch. 2–3, proper maps of Riemann surfaces and the exponential covering C → C^×; used as the standing example of a local biholomorphism that is not prop |
| `ex-hyperelliptic-double-cover-ramification` | Hyperelliptic double covers and their genus | 13 | Ch. 1 §2 (algebraic curve examples), Ch. 4 §§2–3 (double covers, ramification and the hyperelliptic genus count), printed pp. 9–11 and 43–46. |
| `ex-power-map-riemann-hurwitz` | Riemann–Hurwitz for the sphere power map | 12 | Ch. 1 §2 and Ch. 4 §§2–3: the sphere power map z^n as the standard totally ramified example, with the Riemann–Hurwitz check. |

Every item above is `status: draft`, carries a proof contract in the batch
contract file, and passes `precheck`, `rendercheck` and `content-policy`; the
only item with a strict-contract error is
`thm-topological-classification-compact-riemann-surfaces`, for the escalated
batch-10 supplier recorded above. The two auditor additions are the first two
rows and are the items the engine certifies.
