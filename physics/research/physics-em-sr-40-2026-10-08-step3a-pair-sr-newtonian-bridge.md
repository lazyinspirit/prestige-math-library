# Step 3a scope report — pair `sr-newtonian-bridge` / `sr-newtonian-bridge-examples`

- Run: `physics-em-sr-40-2026-10-08`, role alpha, label
  `step3a-pair-sr-newtonian-bridge-5f0901a5671deefe`; batch 11; 2026-10-09.
- A page `sr-newtonian-bridge` (order 229, category `special-relativity`,
  `library: physics`, 7 items); B page `sr-newtonian-bridge-examples`
  (order 230, 3 leaf items).
- Scope decision: **sufficient** for the A page (recorded via
  `tools/physics-support/step3-decisions.mjs record-scope`). No content omission
  found, no merger or enrichment recommended, no owner scope action requested.

## Inputs read

- `research/plan-spec.json` (pair entries 229/230, `requires`, consumers) and
  `research/plan-special-relativity-track.md` ("Newtonian Bridge" block,
  lines ~244–265; SR11 reservation).
- Source design: `research/first-principles-2026-10-03/relativity/scaffold/special-relativity.md`
  (SR11 row and "Bridges and empirical boundary"),
  `…/scaffold/proposed-inventory-and-checks.json` (SR11/SR11B),
  `…/scaffold/mathematical-prerequisites.md` (M08 and closure map),
  `…/scaffold/prose-scaffold.md` (SR11 source row),
  `…/scaffold/sr-supplier-proofs.md` (S7),
  `…/closure-ledger.json` (M04, M08), and
  `research/first-principles-2026-10-03/audit-expansion-2026-10-03/baseline/relativity/`
  (same SR11 row and prose-scaffold row).
- Run records: `…-batch-11.pages.json` / `.coverage.json` / `.notes.md` /
  `.cross-batch-dependencies.json`; `…-alpha-step1-drift.md` (§ `sr-newtonian-bridge`,
  verdict `no-drift`); the ten `…-step1-<item>.json` readiness records;
  `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`;
  the current manifests of batches 1–10 and 12–40 for dependency and duplicate
  checks; `research/math-imports.json` and the published placements under
  `library/`.

## Design vs scaffold

The controlling reservation (plan track and design row) promises exactly three
things on SR11 plus one remark, all present:

| Promised content | Scaffold items |
|---|---|
| M08 uniform low-speed expansion | `lem-sr-uniform-low-speed-taylor-remainder` (uniform second-order remainder with explicit constant $K(z_0)=\tfrac38(1-z_0)^{-5/2}$) and `lem-sr-uniform-low-speed-expansion-of-observer-quantities` (transport to $E_n,q_n,T_n$, uniform in the speed bound) |
| pthm specified p/E correspondence | `pthm-sr-newtonian-p-e-correspondence`, stated against the explicitly defined comparison functionals of `def-sr-newtonian-comparison-quantities` |
| explicit Galilean limiting chart maps with bounded domains | `def-sr-galilean-limiting-charts` ($\Phi_{v,C}$, $G_v$, $D_{T,R}$) and `lem-sr-uniform-galilean-limit-of-boost-charts` (exact differences, uniform $O(C^{-2})$ bounds, uniform limit on $D_{T,R}$, failure on unbounded regions) |
| rem failure at relativistic/null speeds | `rem-sr-newtonian-bridge-limits-and-failures` (no speed-independent error constant; massless case excluded; bounded-region restriction) |

The B page carries the two worked instances and the refutation promised by the
"bounded approximation / countermodel" B role:
`ex-sr-low-speed-expansion-at-beta-one-fifth`, `ex-sr-uniform-galilean-chart-bound-worked`,
`cex-sr-uniform-low-speed-remainder-fails-near-light-speed`.

Page metadata agree exactly with `plan-spec.json`: ids, orders 229/230, kind A/B,
category `special-relativity`, `library: physics`, companion pairing, and
`requires = [sr-energy-momentum, darboux-lhopital-and-taylor]` (B requires the A
page only). The second `requires` entry is the Step-1 recorded declaration of the
published home of `cor-taylor-remainder-bound`, used by the Taylor lemma; it is
already spliced into the canonical plan and replaces the historical `SR02,SR08`
closure labels. The reservation's 18/8 row is a closure budget including
reserved supplier slots; the pair-specific suppliers now live on earlier pages
(`sr-spacetime-primitives`, `sr-lorentz-transformations`, `sr-worldlines-and-clocks`,
`sr-energy-momentum`) and in the imported mathematics library. No promised
definition, result or example was dropped or narrowed.

Mathematical-boundary check: all five mathematical items depend only on
mathematical items; the two example/counterexample items on the B page are pure
mathematics; the physical items (`def-sr-newtonian-comparison-quantities`,
`pthm-sr-newtonian-p-e-correspondence`, `rem-…`) use
`post-sr-massive-particle-dynamics` / `post-sr-ideal-massless-particle-momentum`
as physical assumptions and the SI conventions as a formulation prerequisite.
No item depends on a B-page item (B-leaf preserved; `plan-spec.json` shows no
page requiring `sr-newtonian-bridge-examples`).

## Intended role and consumers

SR11 is the SR framework's controlled low-speed bridge: a conditional
correspondence between the model's adopted measured energy/momentum/kinetic
energy and explicitly defined Newtonian comparison expressions, with
$z_0$-dependent uniform constants on $|w|^2\le z_0c^2< c^2$, the Galilean chart
limit on bounded regions, and the recorded failure modes. It sits after
`sr-energy-momentum` (order 223), matching the drift verdict `no-drift`. In the
canonical plan the only A-page consumer is `gr-flat-and-newtonian-bridges`
(GR07, order 245, outside this EM/SR run), which owns the deferred weak/slow
field reduction (Carroll §4.1) and the Q4 uniform weak-field calculation; the
pair's scope clause (e) and remark (iii) state that no framework equivalence,
trajectory/force convergence or varying-$c$ limit is asserted, so that
separation is consistent. The B page is a leaf.

## Source coverage

Three substantive treatments, all fetch-verified, plus one documented dropped
retrieval location with a byte-identical alternative:

- B. Crowell, *Special Relativity* (rev. 2020-12-10), `https://archive.org/download/sr_20220102/sr.pdf`
  (10 728 180 bytes, sha256_16 `4c11e8f367267d53`, 246 pp.), Ch. 4 §4.2
  pp. 82–86, §4.3.3 Ex. 8 p. 91, §4.3.4 pp. 95–96, problems 11–12 p. 117 —
  the source of the low-speed kinetic-energy/momentum expansion and the
  ultrarelativistic unboundedness recorded in the pair.
- D. Tong, *General Relativity* (2019), author-hosted
  `https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf`
  (3 108 446 bytes, sha256_16 `3ba65dc61f22a69c`, 290 pp.), §1.2.3 pp. 16–19 —
  the Taylor-expansion lead; §1.2.2 (action) is out of scope with a recorded
  reason. The official Cambridge URL is recorded as a dropped location (TLS
  chain verification failures on the initial attempt and all five retries);
  the included claims are carried by the byte-identical author-hosted copy.
- S. M. Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019v1,
  `https://arxiv.org/pdf/gr-qc/9712019` (1 583 209 bytes, sha256_16
  `d4cbfeed3a18370c`, 238 pp.), §1.5 p. 27 included (small-$v$ identification);
  §4.1 pp. 105–106 deferred to `gr-flat-and-newtonian-bridges` (weak/static
  Newtonian limit).

The coverage file disposes 23 harvested rows: 16 included, 1 inline, 1 deferred,
5 out-of-scope, each with a written reason (Bertozzi account, equivalence-principle
accuracy claim, action principle, and related). The design's declared shortfall
("Included with M08 error bounds; not a universal cross-framework identification")
is preserved in the theorem's scope clause and the limits remark. No empirical
claim, precision or measurement is made anywhere on the pair; the deferred
weak-field content belongs to its own later page.

## Prerequisite audit (independent pass)

The ten items declare 40 distinct `deps` targets; all 40 resolve:

- 19 current-run scaffold items with nonempty statements, all earlier than the
  consumers: batch 1 `def-sr-affine-minkowski-model`,
  `def-inertial-frame-and-inertial-chart`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-sr-si-units-and-coordinate-conventions`, `def-lorentz-form-and-inertia`,
  `def-causal-classification-of-lorentz-vectors`; batch 2 `def-lorentz-boost`;
  batch 3 `thm-sr-proper-time-and-observer-decomposition`; batch 8
  `def-sr-observed-energy-momentum-and-kinetic-energy`,
  `lem-sr-energy-momentum-observer-identities`,
  `lem-sr-four-momentum-in-inertial-frame`, `post-sr-massive-particle-dynamics`,
  `post-sr-ideal-massless-particle-momentum`; batch 11 the pair's own earlier
  items. Spot-checked clause content: the observer decomposition supplies
  $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$ and the chart coordinate form;
  the observer identities supply $E_n=mc^2\gamma$, $T_n=mc^2(\gamma-1)$,
  $q_n=m\gamma w$, $|q_n|=mc\sqrt{\gamma^2-1}$; the postulate supplies the
  measured-quantity identification conditional on $m>0$ and excludes $m=0$.
- 21 published imported mathematical items (present in `items/` and in the
  pinned `math-imports.json`), all with published page placements whose homes
  lie inside the pair's declared prerequisite closure (54-page closure of
  `requires`): `cor-taylor-remainder-bound` (home `darboux-lhopital-and-taylor`),
  `cor-triangle-inequality-for-inner-product-norm`, the real-analysis items
  `def-abs-value`, `lem-of-abs-value`, `lem-of-inverse-positive`,
  `lem-of-triangle-inequality`, `thm-of-archimedean`, `thm-of-square-roots`,
  `def-integer-power`, `def-rational-power`, `lem-rational-power-laws`,
  `lem-rational-power-monotone`, `thm-cauchy-schwarz-finite`, `def-interval`,
  `def-linear-map`, `def-vector-valued-derivative-and-integral`,
  `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`, `thm-chain-rule`,
  `thm-real-power-agrees-with-rational-exponent`,
  `thm-real-power-continuity-and-derivatives`.

Run-wide checks: no item ID of this pair collides with any other manifest or with
an imported mathematical ID (471 run items, 0 duplicates); every dependency edge
of the pair points backward in the current scaffold. **No potentially unmet
prerequisite was found**: no consumer on this pair requires a claim absent from
both the published library and the current scaffold. Uncertainty (not a scope
blocker): the in-run suppliers are Step-1 scaffold statements with `ready`
readiness records, not authored proofs; all 36 batch-11 cross-batch review rows
remain `open`, so Step-3b authoring must re-verify the actual interface uses
(the batch notes document that reconciliation, including the one
`darboux-lhopital-and-taylor` declaration repair, which is already reflected in
the canonical plan).

## Decision and next action

Decision for the A page `sr-newtonian-bridge`: **sufficient**. The planned
definitions, results and examples cover the reserved SR11 subject exactly
(explicit comparison functionals; uniform low-speed expansion with
speed-bound-dependent constants; the specified p/E correspondence as a
conditional physics theorem; explicit Galilean limiting charts with bounded
regions and their failure off bounded regions; the failure remark; worked
instances and a counterexample on the B leaf), with the design's qualifications
and source coverage preserved. No omission, merger or enrichment is required.

- Review receipt recorded with `tools/physics-support/step3-decisions.mjs record-scope`.
- Owner action required: record `proceed` for the current scope (or
  `merge`/`enrich` with amendments) to close Step 3a for this pair.
- No scaffold file, item, page, plan entry or published content was edited by
  this review; no item approvals or owner records were written.
- Limits of this review: it verifies scope, resolution, page metadata, source
  coverage and interface presence, not proof correctness or source fidelity of
  the planned arguments; those remain with Step-3b authoring and the
  independent review gates.
