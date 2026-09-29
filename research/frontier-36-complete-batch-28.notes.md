# Batch 28 Step 1 — Riemann surfaces, branched maps, and differentials

Run `frontier-36-complete`; owner `beta`; A page order 843, B page order 844. Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta-28 task, the complete CA-RS-1 design section, `research/plan-spec.json`, the owner authoring direction, the current batch-10 supplier scaffold and ready receipts, and the cross-batch ledger rules before construction. The owner direction has no special amendment for this pair. This file is construction evidence, not mathematical approval.

## Step 3b repair scope amendment (2026-09-28 17:18 UTC)

The current two-page manifest has 23 items: 15 on A and 8 on B. The Step 1
inventory and 19 decisions recorded below are historical. Four narrow items
were added without changing either selected page or order: the A-page
algebraic-curve chart lemma and its B-page example, plus A-page
`lem-planar-piecewise-analytic-region-triangulation` and
`lem-index-of-graph-bounded-region-boundary`. The latter two make the chart
cellulation and residue theorem's rectifiable, graph-bounded interface
explicit. The chart lemma now supplies separate rectifiable original cells
for contour integration and a finite face-to-face topological refinement for
classification and Riemann–Hurwitz; it does not claim smooth or analytic
regularity for the refinement edges. The Riemann–Hurwitz proof counts finite
topological cells after isolating branch vertices and proves closure and
face-to-face incidence of their lifts. The genus definition retains the
sphere digon as its geometric schema and uses the empty word only as terminal
reduction notation. The detailed proof changes and focused checks are in
`research/frontier-36-complete-operator-record.md`.

Current `manifest-deps` reports 23 items and zero errors. The refreshed
cross-batch ledger has zero unreviewed batch-28 edges: the three batch-9
Jacobian uses are `verified`, while the batch-10 classification/genus chain
remains `open` until its live author exits and those supplier proofs are
reviewed. Focused precheck and rendercheck pass on the repaired item chain.
These are repair diagnostics, not final Step 3 approval. The prior owner
`proceed` covered 13 A and 8 B items, including the algebraic-curve A/B pair;
the current amendment adds only the two named planar/index A suppliers. The
root owner reviewed that 15 A / 8 B amendment and recorded a current
scope-only `proceed` decision (hash
`6a757662f72178f64416dc6c289d4d752da63060252e23196c808141be234714`). Final item/author
receipts still require stable batch-10 supplier bytes and proof review; no
non-owner `proceed` receipt is written here.
The strict proof-contract diagnostic currently reports 89 errors and three
warnings, concentrated in five edited proof items: old source quotes,
superseded step numbers and obsolete regular-triangulation citations. The
contract entries will be regenerated once against the settled item text and
batch-10 supplier interface; the present contracts are not approval evidence.

**Owner scope enrichment after Step 3a:** The published several-variable holomorphic implicit-function theorem supplies the chart interface that the initial scaffold deferred. A now includes `lem-nonsingular-complex-algebraic-curve-holomorphic-charts` (level 1); B includes `ex-nonsingular-algebraic-curve-charts` (level 2). The general affine/projective source row is included in coverage. The historical inventory and snapshot counts below describe the initial Step 1 scaffold; the current manifest and coverage record control authoring.

## Plan comparison and scope

The design names CA-11, CA-20 and the topology covering-space pages as prerequisites and directs an oriented polygonal classification before genus. The current plan additionally requires `classification-of-compact-connected-surfaces` (order 444.1); this is the operative plan/design difference. The A page uses its in-run batch-10 polygonal classification and Euler formula rather than silently importing a surface-classification theorem. The batch-10 supplier is only scaffolded, with ready Step 1 receipts, and has not become published or Step 3 approved. The plan's B page requires this A page. No selected page pair or order was changed.

The A inventory is `def-riemann-surface-and-holomorphic-atlas` (level 0); `def-holomorphic-and-meromorphic-map-of-riemann-surfaces` and `lem-finite-analytic-chart-triangulation-compact-riemann-surface` (level 1); `def-meromorphic-differential-on-a-riemann-surface` and `thm-local-normal-form-holomorphic-map-riemann-surfaces` (level 2); `def-ramification-index-and-branch-value` and `thm-residue-theorem-compact-riemann-surface` (level 3); `lem-pullback-order-of-meromorphic-differentials-under-branched-maps` and `thm-proper-holomorphic-map-riemann-surfaces-has-degree` (level 4); `thm-topological-classification-compact-riemann-surfaces` (level 7); `def-genus-and-euler-characteristic-compact-riemann-surface` (level 8); and `thm-riemann-hurwitz-formula` (level 9). The gaps at levels 5–6 arise from the in-run batch-10 classification chain and do not imply an A-page item is missing.

The initial B inventory was `ex-basic-riemann-surface-atlases` and `ex-complex-torus-holomorphic-atlas` (level 1); `ex-smooth-affine-conic-as-punctured-plane` (level 2); `ex-coordinate-change-for-meromorphic-differential` (level 4); `cex-exponential-local-biholomorphism-is-not-proper` (level 5); and `ex-hyperelliptic-double-cover-ramification` and `ex-power-map-riemann-hurwitz` (level 10). The conic is proved explicitly by `x+iy` from the curve to `C*`. The general nonsingular-curve atlas now has its own B example and A support lemma, as recorded above.

Each item was appended once in prerequisite order and received its own `step1-decisions record` outcome before the next item. All 19 decisions are `ready`, with examined dependency IDs and evidence in the individual records. A final dependency audit added the published local-logarithm and Heine–Borel lemmas to the hyperelliptic example, made its completion at infinity and compactness argument explicit, and refreshed that item's ready receipt; its in-run level stayed 10. No earlier ready inventory was replaced. The manifest labels every item with its computed `dependency_level` and has explicit `deps`.

## Proof and dependency audit

Published direct prerequisites inspected by statement and relevant proof include `def-riemann-sphere-holomorphic-charts`, `thm-local-normal-form-holomorphic-map`, `thm-identity-theorem-holomorphic-functions`, `thm-residue-theorem-null-homologous-cycle`, `cor-residue-contour-integral-formula`, `cor-connected-cover-of-a-simply-connected-space-is-trivial`, `def-covering-map-and-evenly-covered-neighbourhoods`, `thm-kernel-and-fibres-of-complex-exponential`, `lem-local-holomorphic-logarithm-nonvanishing-function-on-disc`, `thm-heine-borel-rn`, the compact/Hausdorff and manifold definitions, and `def-axiom-of-choice`. The local normal form is applied only to nonconstant chart expressions. For proper maps, compact exclusion supplies one common target neighborhood with no missing preimages; the weighted count then survives branch values. The published planar residue theorem is applied only inside a chart to an oriented piecewise-analytic face boundary, after all poles have been moved into face interiors.

The added chartwise triangulation lemma is load-bearing for residue and Riemann–Hurwitz. It gives a finite analytic-coordinate-circle arrangement, finite chart-contained curvilinear faces and a finite subdivision into piecewise-analytic triangles. The proof strategy explains why generic circle choices avoid common arcs and tangencies, why a compact analytic pair has finitely many intersections, how finite planar cuts triangulate multiply bounded faces, and why paired orientations cancel. It does not use a global meromorphic function, de Rham, Stokes or AC. Jost proves finite smooth triangulability by a different metric/geodesic route; Hinich's triangulation argument instead presupposes a nonconstant global meromorphic function and cannot supply this page's proof. Step 3 should scrutinize the strengthened chartwise construction directly; source triangulability alone does not establish piecewise-analytic chart containment.

The batch-10 in-run chain was examined rather than treated as published: `thm-classification-of-compact-connected-surfaces` (level 6) depends on its polygonal normal-form theorem, finite triangulation and Schoenflies chain; `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g` (level 7) supplies the exact `χ=2−2g` formula. Both carry AC. The A-page classification and genus items declare `def-axiom-of-choice` and state that AC enters through this chain. Riemann–Hurwitz and its two worked examples inherit AC from genus. Surface charts, the local triangulation, residue, local ramification, proper degree and pullback-order formulas are choice free. The local formula `ord_x(f*η)=e_x ord_y(η)+e_x−1` is proved before its Riemann–Hurwitz consumer; no global nonzero differential or canonical divisor is assumed. The Euler cell proof inserts branch values as vertices and counts the `d` face and edge lifts and the vertex deficit `Σ(e_x−1)`. No Foundations item in this batch reaches `deferred-set-theory-beyond-choice`.

No defective published actual prerequisite was identified in this audit. The external-reference checker still reports unrelated published `Recorded`-dependency debt elsewhere; it is not used as a supplier here. If Step 3 finds a flaw in the batch-10 classification proof, its exact item chain above is the repair path, and this pair's genus/Riemann–Hurwitz approval must wait. There is no cross-batch change or new selected prerequisite pair beyond the plan's already required batch-10 surface-classification page.

## Cross-batch placement

The consumer-owned input `research/frontier-36-complete-batch-28.cross-batch-dependencies.json` records three open rows: A page → batch-10 `classification-of-compact-connected-surfaces` (order 444.1); `thm-topological-classification-compact-riemann-surfaces` → `thm-classification-of-compact-connected-surfaces`; and `def-genus-and-euler-characteristic-compact-riemann-surface` → `cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g`. The first A consumer is order 843; the B consumer is order 844 and adds no separate earlier-batch supplier. The batch-10 inventory and exact uses are stated above. These rows remain `open` until supplier authoring and review, and ledger refresh was run after writing the consumer input.

## Sources and harvest

Four independent complete PDFs were downloaded, text-extracted and read at the recorded proof passages. `source-fetch-check --stamp` verified all four full bodies and wrote fetch stamps. The 41 harvested results, exact locators, inclusion/inline/deferred/out-of-scope dispositions and supported item IDs are in the coverage file. No source-resolution waiver or alternative-proof drop was claimed.

- [Looijenga, *Riemann Surfaces*](https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf), complete 63-page notes: Ch. 1 §2, Ch. 4 §§2–3 and Ch. 6 §2; atlas, proper-degree, Riemann–Hurwitz and residue arguments.
- [McMullen, Math 213b *Riemann Surfaces*](https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf), complete 183-page notes: Chs. 2–3 and 6; independent local-form, proper-map, genus-count and differential treatments.
- [Jost, *Compact Riemann Surfaces*, Ch. 2](https://www.math.wichita.edu/~ryan/teaching/M829F/syllabus/Jost-book/JJ_ch2.pdf), complete 62-page chapter: §§2.3, 2.3.A, 2.4.A; full triangulation and orientation proofs, with its distinct metric route marked out of scope where appropriate.
- [Hinich, *Riemann Surfaces*, lecture 7](https://math.haifa.ac.il/hinich/RSlec/lec7.pdf), complete nine-page lecture: §§8.4.3–8.5.3; triangle-cancellation residue and cell-count Riemann–Hurwitz, with the circular-for-this-pair meromorphic-function triangulation route explicitly excluded.

## Checks and unresolved run-wide findings

Snapshot: 2026-09-27 12:15 UTC; other batch writers are active, so run-wide counts can change.

- `coverage-checklist ... --require-destination`: **pass**, one page, 41 harvested results, zero errors or warnings.
- `source-fetch-check --coverage ...`: **pass**, 4/4 full-text verified and 4/4 resolved; the earlier `--stamp` run stamped all four.
- Whole-run `manifest-deps` over the current batch manifests: **pass**, 692 items, zero missing dependencies or errors. Whole-run manifest-only `content-policy`: **pass**, 692 scoped items, zero errors or warnings.
- `step1-decisions check --run frontier-36-complete`: **not closed**: 692 items, 675 current ready, 17 escalations, and eight still-empty pages in batches 7, 8, 9 and 16; no batch-28 receipt is missing or stale.
- `item-dependency-levels check --run frontier-36-complete`, after the batch-10 supplier scaffold existed: **not closed** solely for those eight other empty pages; no batch-28 label error was reported.
- Canonical `validate-plan research/plan-spec.json`: **pass** for the still-empty planned inventories. A read-only whole-run overlay of current batch items into a temporary plan reports one error outside batch 28: `flat-smooth-and-etale-morphisms` depends on the `zariski-tangent-spaces-regular-points-smoothness-and-bertini` page outside its declared prerequisite closure. No batch-28 item is cited in that error list. The overlay is diagnostic; no shared plan was edited here.
- `extcheck.mjs`: exit 0 with 43 warnings from unrelated published external-reference debt, none identified as a batch-28 supplier defect.

The remaining batch-10 authoring/Step 3 review and run-wide empty inventories are owner/operator reconciliation work; they do not turn a Step 1 readiness record into final mathematical approval.
