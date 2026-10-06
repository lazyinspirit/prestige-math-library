# Batch 7 notes — Vector Field Index, Euler Characteristic and Poincaré–Hopf

Run `frontier-41-ha-dt-29`, role **beta**, label **batch-7**, covers exactly one A/B pair:

- A page `vector-field-index-euler-characteristic-and-poincare-hopf` (order 541, `differential-topology`);
- B page `vector-field-index-euler-characteristic-and-poincare-hopf-examples` (order 542).

Constructed artifacts: `research/frontier-41-ha-dt-29-batch-7.pages.json`,
`research/frontier-41-ha-dt-29-batch-7.coverage.json`,
`research/frontier-41-ha-dt-29-batch-7.cross-batch-dependencies.json`,
`research/frontier-41-ha-dt-29-batch-7-url-liveness.json`, the 31
`research/frontier-41-ha-dt-29-step1-<id>.json` readiness records, and the batch-7 rows of the
aggregate `research/frontier-41-ha-dt-29-cross-batch-dependencies.json` (refreshed, 0 orphaned).
No published content, shared plan, engine state or verdict was edited. This is a Step-1 scaffold:
every record is a readiness statement for Step 3 authoring, not a mathematical acceptance.

## 1. Inventory and dependency levels

A page — 25 items (the design's 16 plus 9 added prerequisites); B page — 6 items (the design's
six entries). All 31 items carry an explicit `deps` array and a `dependency_level` recomputed
run-wide by `node tools/item-dependency-levels.mjs`. Levels refer to in-run dependencies only;
published and other-run suppliers do not raise them.

A page `vector-field-index-euler-characteristic-and-poincare-hopf`:

| level | item | kind |
|---|---|---|
| 0 | `def-euler-characteristic-of-a-compact-manifold` | definition |
| 6 | `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions` | proposition |
| 0 | `def-isolated-zero-and-local-index-of-a-vector-field` | definition |
| 1 | `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization` | lemma |
| 0 | `def-nondegenerate-zero-of-a-vector-field` | definition |
| 2 | `thm-index-of-a-nondegenerate-vector-field-zero` | theorem |
| 3 | `lem-local-index-is-additive-under-a-transverse-perturbation` | lemma |
| 3 | `prop-vector-field-zero-index-is-a-zero-section-intersection-number` | proposition |
| 2 | `lem-negation-scales-the-local-index-by-minus-one-to-the-dimension` | lemma |
| 1 | `lem-index-sum-of-an-outward-field-is-the-gauss-degree` | lemma |
| 5 | `thm-poincare-hopf-for-closed-manifolds` | theorem |
| 6 | `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic` | corollary |
| 3 | `cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda` | corollary |
| 6 | `cor-morse-critical-point-sum-is-the-euler-characteristic` | corollary |
| 6 | `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic` | corollary |
| 0 | `lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball` | lemma |
| 0 | `lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball` | lemma |
| 4 | `lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball` | lemma |
| 3 | `lem-reflection-of-an-outward-field-extends-over-the-double` | lemma |
| 7 | `lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold` | lemma |
| 8 | `thm-poincare-hopf-with-outward-pointing-boundary` | theorem |
| 5 | `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic` | corollary |
| 7 | `thm-converse-poincare-hopf-for-nowhere-zero-fields` | theorem |
| 0 | `lem-closed-connected-one-manifolds-are-circles` | lemma |
| 9 | `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary` | remark |

B page `vector-field-index-euler-characteristic-and-poincare-hopf-examples`:

| level | item | kind |
|---|---|---|
| 7 | `ex-hairy-ball-theorem-for-even-spheres` | example |
| 8 | `ex-a-nowhere-zero-vector-field-on-an-odd-sphere` | example |
| 3 | `ex-source-sink-and-saddle-indices-on-a-surface` | example |
| 9 | `ex-outward-radial-field-on-a-disk` | example |
| 9 | `cex-an-inward-radial-field-violates-the-outward-boundary-formula` | counterexample |
| 7 | `cex-an-interval-has-nonzero-euler-characteristic-despite-being-odd-dimensional` | counterexample |

In-run suppliers used (14 cross-batch edges, 12 item + 2 page; all reviewed in the batch input):
batch 4 `morse-inequalities-and-the-handle-chain-complex`
(`cor-morse-euler-characteristic-identity`, `prop-morse-handle-chain-complex-computes-singular-homology`,
`lem-exact-sequence-dimension-inequality`), batch 2 `intersection-pairings-self-intersection-and-euler-classes`
(`lem-normal-push-off-zeros-are-self-intersection-points`, `thm-self-intersection-is-the-euler-number-of-the-normal-bundle`,
`prop-mod-two-self-intersection-needs-no-orientation`, `cor-diagonal-self-intersection-is-the-euler-number-of-tm`),
and batch 1 `handle-decompositions-duality-and-rearrangement`
(`thm-morse-functions-and-handle-decompositions-correspond`, `lem-a-handle-decomposition-gives-a-relative-cw-complex`).
77 published items are consumed; no published item is edited.

## 2. Design, owner direction and plan reconciliation

Read before construction: `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
(binding; it contains no DT-13-specific amendment, but its §12 supersession and "do not rehome
inherited definitions" rules were checked: this pair mints no published definition and does not
touch `def-stiefel-whitney-number-of-a-closed-manifold` or
`def-pontryagin-number-of-a-closed-oriented-manifold`), the complete DT-13 design section
(`research/plan-differential-topology-track.md` L801–L859: A items 1–16, B items 1–6, the
"Hard-proof closure" paragraph), `research/plan-spec.json` for both pages (orders 541/542,
11 declared requires on the A page), and the batch-2/batch-4 manifests as the in-run suppliers.
The owner direction and the plan agree on the pair's scope; no claim was weakened or dropped.

Conflicts, deviations and observations (all preserved, none silently dropped):

(a) **Source substitution (design-named treatments vs. what was read).** The design names
"M Ch. 6, pp. 32–41; GP Ch. 3 §§5 and 7, pp. 132–150; Stanford Math 215B Lectures 16–17,
pp. 49–55; H Ch. 5 §2, pp. 131–140". Milnor §6 and Guillemin–Pollack Ch. 3 §§5–7 were
downloaded in full and read at the cited pages. The design's Stanford locator is not usable:
the file behind it (Ionel, notes by Lin, Math 215B Winter 2023, `web.stanford.edu/~lindrew/math215B.pdf`)
contains the vector-field vocabulary and announces Poincaré–Hopf as forthcoming but never states
or proves it. Hirsch Ch. 5 §2 is the design's intersection-number treatment of the same theorem;
its full text was not obtained, and no retry chain was started because two complete independent
treatments of every claim had already been read. In their place the batch reads in full and uses
Robbin–Salamon, *Introduction to Differential Topology* (web draft 2018; Ch. 2 §§2.2–2.3 states
and proves the boundary form with an outward field, Lemma 2.3.2 is Hopf's lemma, Lemma 2.3.3 the
degenerate-zero perturbation) and Nicolaescu, *An Invitation to Morse Theory*, 2nd ed. (Corollary
2.3.3, the alternating critical-point sum). The batch thus has three complete full-text book
treatments (Milnor, Guillemin–Pollack, Robbin–Salamon) plus the Morse text, and no
`source_resolution` drop is involved because nothing design-named is claimed as read and the
replacement sources were harvested on their own terms. Recorded for owner/Step-4 review.

(b) **Added prerequisite items (9).** Beyond the design's 16 A entries the manifest scaffolds:
`lem-negation-scales-the-local-index-by-minus-one-to-the-dimension`,
`lem-index-sum-of-an-outward-field-is-the-gauss-degree` (Hopf's Lemma 3),
`lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball`,
`lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball`,
`lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball`,
`lem-reflection-of-an-outward-field-extends-over-the-double`,
`lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold`,
`cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`, and
`lem-closed-connected-one-manifolds-are-circles`. They lie inside the pair's stated scope, sit on
the same A page before their consumers, and keep every design claim intact. The first is used by
the odd-dimensional corollary and the reflection lemma; the Hopf lemma is the engine of the closed
form; the cancellation pair is the converse; the reflection/even-dimensional pair and the product
argument replace Milnor's corner-smoothing Step 3 by doubling; the Euler-number corollary is the
bridge to DT-12 promised by `cor-diagonal-self-intersection-is-the-euler-number-of-tm`; the
one-manifold classification covers the `n=1` case of the design's converse theorem (it is proved
from the published arc-length overlap lemma and Milnor's appendix).

(c) **The converse theorem's "obstruction-theory interface" (design's Hard-proof closure).**
The design says the converse "needs obstruction theory from AT if not proved by handle
cancellation; resolve that interface at build". Resolved by the *cancellation of zeros*: a generic
field on a closed manifold with index sum zero has equal numbers of `+1` and `-1` nondegenerate
zeros; pairs are joined by embedded arcs and cancelled inside disjoint balls by the degree-zero
extension lemma (proved here from the published based Hopf classification). This is
Guillemin–Pollack's Exercises 10–13 / Hopf's amalgamation argument. The published obstruction page
stays declared in the page `requires` but is not consumed by any item; no item depends on the
primary-obstruction identification of the Euler class. Recorded as an interface resolution, not a
plan change.

(d) **Plan `requires` array vs. actual closure (observation, not edited).** The plan-spec requires
of the A page do not list several published pages whose items the routes use:
`whitney-embedding-tubular-neighbourhoods-and-approximation` (embedding, tube, retraction,
relative Whitney approximation), `morse-functions-critical-values-and-genericity` (existence of an
excellent Morse function), `gradient-like-vector-fields-and-morse-trajectories` (Riemannian
gradient), `higher-homotopy-groups-and-cofiber-sequences` (based Hopf classification),
`riemannian-metrics-length-distance-and-volume`, `sublevel-deformation-and-the-handle-attachment-theorem`
(corner rounding), and `relative-homology-excision-and-mayer-vietoris`. All of them are inside the
page's transitive prerequisite closure (checked against `plan-spec.json`: the closure has 291
pages and contains every one of these), and `whitney...`/`sard...` are inherited through the
declared `oriented-and-mod-two-intersection-numbers`. The `requires` array was left exactly as the
plan-spec has it; owner/Step-4 may wish to widen the direct list for readability.

(e) **Boundary form: assembled route, main caveat.** Milnor's Step 3 and Robbin–Salamon's proof
both handle a compact manifold with boundary by extending the field over a smoothed tube; the
corner smoothing is the one technical point Milnor himself flags. This scaffold avoids it: the
even-dimensional case is proved on the double with the reflected field, and the odd-dimensional
case is reduced to the even case by the product with `[0,1]` (a vertical component `psi(t)d_t`
with a single simple zero). Both devices are standard but are a scaffold-level assembly; Step 3
must verify the collar/reflection computation (`lem-reflection-of-an-outward-field-extends-over-the-double`),
the cofibration hypothesis in additivity (collar neighbourhood retract), and the product index
computation (block determinant) in full. This is the batch's main Step-3 caveat.

(f) **Design item 8 and the orientation convention.** The DT-11/DT-12 intersection machinery is
orientation-based, while the local index is orientation-free. The bridge item
`prop-vector-field-zero-index-is-a-zero-section-intersection-number` fixes the convention in its
statement: `TM` is oriented along the zero section by the horizontal-then-vertical sum, under which
the local intersection sign is `sign det(DX_p)`. This reproduces the DT-12 determinant computation
(`lem-normal-push-off-zeros-are-self-intersection-points`) and avoids a hidden sign ambiguity; the
convention is recorded here for the later Lefschetz/self-intersection consumers.

(g) **Overlap with published content.** The hairy-ball theorem is already published as
`thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere` (direct degree proof). The B-page
example `ex-hairy-ball-theorem-for-even-spheres` is the independent Euler-characteristic
application demanded by this pair and does not re-prove the degree argument. No duplicate item is
minted and no published item is edited.

## 3. Dependency and readiness verification

Method: every item's `deps` array was read against the actual current supplier statements and
strategies — the published `items/*.md` files for the 77 out-of-run suppliers and the in-run
batch-1/2/4 manifest statements for the 14 cross-batch edges. Checked: hypothesis match, direction
of the used implication, dimension and parity conventions (the `(-1)^n` negation law, the
`(-1)^{n-lambda}` negative-gradient index, the boundary orientation of small spheres), the
compactness/closedness and relative hypotheses, and the choice strength of each supplier. Every
declared dependency resolves; no missing, circular, forward or inadequate dependency was found; no
item consumes a Recorded (`proved_here: false`) result; no path reaches
`deferred-set-theory-beyond-choice`.

Findings of this pass:

- All 31 items have a complete proof strategy with named suppliers and met prerequisites; all 31
  readiness records are `ready`, none escalated.
- The one place where the scaffold names elementary mathematics without a dedicated published
  item is the path in `GL_n(R)` used for the degree of a linear automorphism (`thm-index-of-a-nondegenerate-vector-field-zero`,
  `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`). Step 3 should attach
  `cor-a-row-reduction-is-a-product-of-elementary-matrices` and
  `cor-operator-determinant-by-row-reduction` (both published) to the elementary-factor path, or
  cite Gram–Schmidt. This is an authoring detail, not a gap in the route.
- Two items carry a `justified_by` pointer for well-definedness instead of a `deps` back-edge, per
  SCHEMA: `def-euler-characteristic-of-a-compact-manifold` (finiteness in
  `prop-euler-characteristic-additivity...`) and `def-isolated-zero-and-local-index-of-a-vector-field`
  (chart independence in `lem-vector-field-index-is-independent...`). The reverse arrow in a `deps`
  array would have been a cycle; the run-wide level computation confirms the resolved graph is
  acyclic.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` exits 1 only because 18
  other batches still have empty inventories; no batch-7 page or item appears in any error, and
  every one of the 31 labels matches the run-wide computation (maximum level 9, on the A-page
  remark and two B-page items).
- `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29`: 480 items, 465 ready; all 31
  batch-7 records are closed with zero batch-7 flags. Remaining work is 18 empty scaffolds, 11
  stale records in other batches and 4 batch-11 escalations — none touching this pair.
- `frontier-dependency-ledger refresh --run frontier-41-ha-dt-29`: refreshed, batch 7 now among the
  reviewed batches; 293 edges, 0 orphaned reviews; the 14 batch-7 edges (12 item + 2 page) are all
  `verified` with statement/strategy evidence in the batch input.

## 4. Axiom-strength bookkeeping

- Items assuming the full Axiom of Choice (10; `def-axiom-of-choice` in `deps`, stated in the
  contract): `def-euler-characteristic-of-a-compact-manifold` (through the finiteness pointer),
  `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions`,
  `thm-poincare-hopf-for-closed-manifolds`, `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic`,
  `cor-morse-critical-point-sum-is-the-euler-characteristic`,
  `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic`,
  `lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold`,
  `thm-poincare-hopf-with-outward-pointing-boundary`, `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic`,
  `thm-converse-poincare-hopf-for-nowhere-zero-fields` — AC enters only through the published
  existence of an excellent Morse function on a compact manifold (and, transitively, through the
  embedding/transversality selections that are only AC_ω).
- Items assuming only countable choice (`def-countable-choice` in `deps`; `thm-poincare-hopf-for-closed-manifolds`
  is in both lists):
  `prop-vector-field-zero-index-is-a-zero-section-intersection-number` (transverse-representative
  selection in DT-11), `thm-poincare-hopf-for-closed-manifolds` (tube embedding),
  `lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball`,
  `lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball`,
  `lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball`,
  `lem-reflection-of-an-outward-field-extends-over-the-double`,
  `lem-closed-connected-one-manifolds-are-circles`.
- Items with no choice principle: the index definition and its independence
  (`def-isolated-zero-and-local-index-of-a-vector-field`,
  `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization`,
  `def-nondegenerate-zero-of-a-vector-field`), the determinant theorem
  (`thm-index-of-a-nondegenerate-vector-field-zero`), the additivity/perturbation lemma, the
  negation lemma, Hopf's Gauss-degree lemma, the two gradient corollaries, the boundary remark and
  all six B-page examples/counterexamples (their homology inputs are choice-free).
- No item assumes the negation of any consequence of AC, no item consumes a choice principle
  stronger than AC, and the choice-free finite-dimensional statements are not silently upgraded.
  Axiom-of-choice usage is carried to consumers exactly as SCHEMA requires.

## 5. Sources, stamps and coverage

Four sources, all downloaded in full and read at the cited locators; `source-fetch-check --stamp`
recorded 7/7 source rows fetch-verified (a row per page-source pair):

| source | kind | bytes | batch-7 use |
|---|---|---|---|
| Milnor, *Topology from the Differentiable Viewpoint* (76 pp., with the 1-manifold appendix) | textbook | 10,139,305 | index definition and invariance, Hopf's Lemma 3, Theorem 1, Steps 1–3, odd-sphere examples, Hopf's existence remark, 1-manifold classification |
| Guillemin–Pollack, *Differential Topology* (complete book) | textbook | 3,472,576 | index and examples, Poincaré–Hopf via tangent families, zero-section/graph scheme, the converse Exercises 10–13, cell-count Euler characteristic |
| Robbin–Salamon, *Introduction to Differential Topology* (web draft 2018) | lecture-notes | 1,476,513 | isolated/nondegenerate zeros, Hopf's lemma, the perturbation lemma, the boundary form of Poincaré–Hopf, Euler characteristic and Betti numbers |
| Nicolaescu, *An Invitation to Morse Theory*, 2nd ed. | textbook | 1,821,860 | the topological Morse inequalities and `sum (-1)^lambda mu_f(lambda) = chi(M)` (Corollary 2.3.3) |

Every A-page item has at least one harvest row; coverage: 64 harvested results over the two pages
(54 `included`, 0 `inline`, 1 `already-published`, 5 `deferred`, 4 `out-of-scope`), with every
declined row carrying its own reason and every deferral a resolvable destination
(`fixed-point-index-and-the-lefschetz-theorem`, `morse-inequalities-and-the-handle-chain-complex`).
The B page is backed by Milnor, Guillemin–Pollack and Robbin–Salamon directly.

## 6. Command results (actual)

| check | result |
|---|---|
| `coverage-checklist research/frontier-41-ha-dt-29-batch-7.coverage.json --require-destination` | 2 pages, 64 harvested results, 0 errors, 0 warnings |
| `source-fetch-check --coverage ... --stamp` (batch 7) | 7/7 source rows fetch-verified (7 newly stamped); check mode 7/7 resolved, 0 documented drops |
| `url-sweep --coverage ... --out ... --recover --fail-on-dead` (batch 7) | 4/4 URLs live, 0 failed, 0 recoverable, 0 suspect; 4 citation decisions, 0 source drops |
| `source-backing --coverage ... --liveness ... --require-verified` | 28 authored result(s); every one still backed by an openable source |
| `manifest-deps` (all 29 run manifests) | 480 items, 0 normalized, 0 errors |
| `content-policy --manifest-only` (all 29 run manifests) | 480 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels check --run` | exit 1 only for 18 empty inventories of other batches; 0 findings touching batch 7; all 31 labels match |
| `step1-decisions check --run` | 480 items / 465 ready run-wide; all 31 batch-7 records closed, 0 batch-7 flags |
| `frontier-dependency-ledger refresh --run` | refreshed; 293 edges, 0 orphaned; batch 7 reviewed with 14 edges (12 item + 2 page) |
| `validate-plan research/plan-spec.json` | exit 0 (acyclic order; no item-level cycles, forward references, B-page dependencies or unresolved ids among pages with item lists) |
| `extcheck` | exit 0 (every recorded-not-proved statement is a cited remark; pre-existing notes unchanged) |
| `fwdcheck` | exit 0 (all forward references declared and closed) |
| `drift-review-check --run frontier-41-ha-dt-29 --before-apply` | 29 pages reviewed, decisions valid; this page `no-drift` (`research/frontier-41-ha-dt-29-alpha-step1-drift.md` lines 169–175) |
| `audit-manifest research/frontier-41-ha-dt-29-batch-7.pages.json` | 31 `missing-source` defects, one per scaffold id, because no batch-7 item is authored yet; expected at Step 1 and not a scaffold defect |
| `depcheck` (repo-wide, published content) | FAIL: pre-existing published audit/verification debt (e.g. `published-unaudited`, `published-unchecked`); 0 findings mention a batch-7 id; 5 findings touch published prerequisites of this batch (see §7) |

## 7. Published items examined; findings for the canonical ledger

All 77 published items in the batch's dependency closure were read at statement level and their
frontmatter checked. No mathematical defect was found in a published statement actually consumed.
Five mechanical/verification findings are recorded for owner reconciliation (published content was
not edited from this scaffold):

1–5. `items/def-local-oriented-intersection-sign.md`, `items/def-oriented-intersection-number.md`,
`items/lem-compact-transverse-complementary-intersections-are-finite.md`,
`items/thm-oriented-intersection-number-is-homotopy-invariant.md` (all DT-11, consumed by
`prop-vector-field-zero-index-is-a-zero-section-intersection-number`) and
`items/lem-overlap-of-arc-length-parametrizations-of-a-one-manifold.md` (consumed by
`lem-closed-connected-one-manifolds-are-circles`) each carry depcheck `published-unaudited`:
status published but neither `verification.audited` nor `verification.verified` is set, and no
local repair receipt. Publication state: published. Planned supplier: none (mathematics
unchanged). Repair strategy: add the missing audit/verification receipt (or a local published
repair receipt) through the owner's published-repair process; the Statements and Proofs need no
change.
6. Naming/statement mismatch (not a mathematical defect, not consumed as a dependency):
`items/cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section.md` promises a
perturbation-existence corollary in its title but its Statement only says that a section already
transverse to the zero section has a codimension-`r` zero set. Batch 7 uses the published
`thm-transversality-homotopy-theorem` for perturbation instead. Repair strategy (owner, low
priority): rename the item to match its Statement or restate it with the perturbation conclusion;
no consumer in this batch depends on it.
7. Overlap observation: `items/thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere.md`
(published, direct degree proof) already proves the hairy-ball statement whose Euler-characteristic
application is the B-page example `ex-hairy-ball-theorem-for-even-spheres`. No duplicate theorem is
minted; the two routes are independent and the example cites only this pair's corollary.

## 8. Remaining uncertainty and next steps

- **Boundary form (main caveat, §2(e)).** The double/product route is a scaffold-level assembly
  replacing Milnor's smoothed tube. Step 3 must either complete it — collar model for the
  reflected field, the cofibration hypothesis in additivity, and the block-determinant index of the
  product field — or fall back to Milnor's Step 3 with an explicit corner-smoothing argument. The
  claims and their consumers are already aligned with either route.
- **Converse theorem's ball selection (§2(c)).** The existence of pairwise disjoint embedded balls,
  one per opposite-index pair, is assembled in
  `lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball`; Step 3 must supply the
  embedded-arc smoothing and the tube-to-ball corner rounding in detail. If that assembly cannot be
  completed, the fallback is Guillemin–Pollack's single-chart isotopy (push all zeros into one
  Euclidean chart) combined with an induction on the number of pairs.
- **Elementary linear algebra in the determinant theorem.** Attach the published row-reduction
  items to the `GL_n` path (see §3); this is bookkeeping, not mathematical uncertainty.
- **Choice strength of additivity.** `prop-euler-characteristic-additivity...` assumes full AC
  through `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function`. A choice-weaker
  alternative (generic height functions, AC_ω) is possible but not needed; if Step 3 adopts it, the
  corollaries' AC flags must be re-derived rather than assumed.
- **Source substitution (§2(a))**: recorded for owner/Step-4 review; no `source_resolution` drop is
  involved, and every claim has at least two full-text treatments read during this batch.
- No other unresolved mathematical uncertainty was found; nothing was escalated.
- Owner/operator reconciliation and the full engine gate follow construction; a worker exit and a
  readiness record are not independent mathematical approval. Step 3 provides that review.
