# Step 7 adjudication — group **g**, run `frontier-42-coxeter-32`

You are the group Alpha for batches **11**, **15**: 2 A/B pair(s), 4 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-42-coxeter-32-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `cat-comparison-link-criteria-and-local-globalization` | A | coxeter-groups | 1738 | `spherical-simplex-metrics-angular-links-and-cones`, `homotopy-and-homotopy-equivalence`, `covering-spaces-and-lifting`, `further-trigonometric-identities-and-inverses`, `hilbert-space-geometry-and-riesz-representation`, `foundations-of-the-real-numbers` |
| 11 | `cat-comparison-link-criteria-and-local-globalization-examples` | B | coxeter-groups | 1739 | `cat-comparison-link-criteria-and-local-globalization` |
| 15 | `short-loop-polygons-and-quantitative-energy-decrease` | A | coxeter-groups | 1746 | `cat-comparison-link-criteria-and-local-globalization` |
| 15 | `short-loop-polygons-and-quantitative-energy-decrease-examples` | B | coxeter-groups | 1747 | `short-loop-polygons-and-quantitative-energy-decrease` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cat-comparison-link-criteria-and-local-globalization` — CAT Comparison, Link Criteria, and Local Globalization (9 item(s))

- `def-cg-cat-zero-cat-one-and-local-geodesic` · definition — Comparison triangles, the CAT(0) and CAT(1) inequalities, local CAT, local geodesics and round circles
- `def-cg-comparison-angle-and-alexandrov-angle` · definition — Comparison angles of hinges, model triangle angles, and the Alexandrov upper angle
- `lem-cg-comparison-convexity-and-model-spaces` · lemma — Comparison triangles in the Euclidean plane and the round sphere, model spaces, and CAT(0) and CAT(1) consequences
- `lem-cg-alexandrov-comparison-triangle-gluing` · lemma — Alexandrov comparison: straightening a hinge, gluing comparison triangles, and patchwork
- `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` · theorem — Berestovskii's cone criterion and the polyhedral link criterion
- `lem-cg-local-geodesic-endpoint-stability` · lemma — Endpoint stability for local geodesics in complete locally CAT(0) spaces
- `lem-cg-local-geodesic-continuation-and-path-space-covering` · lemma — The space of local geodesics, its length metric, and the covering criterion for local isometries
- `thm-cg-complete-simply-connected-local-cat-zero-globalization` · theorem — Complete, simply connected, locally CAT(0) length spaces are CAT(0)
- `thm-cg-compact-local-cat-one-short-circle-criterion` · theorem — Compact geodesic locally CAT(1) spaces are CAT(1) exactly when they contain no short circle

### `cat-comparison-link-criteria-and-local-globalization-examples` — CAT Comparison, Link Criteria, and Local Globalization — Examples (4 item(s))

- `ex-cg-intervals-and-metric-trees-are-cat-zero` · example — Intervals and metric trees are CAT(0)
- `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one` · example — The unit circle is CAT(1) at the strict perimeter boundary
- `ex-cg-short-circle-fails-cat-one` · example — A circle of circumference $\ell<2\pi$ fails CAT(1)
- `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group` · example — A complete locally CAT(0) circle whose fundamental group prevents global CAT(0)

### `short-loop-polygons-and-quantitative-energy-decrease` — Short Loop Polygons and Quantitative Energy Decrease (9 item(s))

- `def-cg-short-loop-homotopy-and-nonshrinkability` · definition — Short loops, the uniform-plus-length topology, short-loop homotopies, and nonshrinkability
- `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy` · definition — Uniform local radii, cyclic small-mesh polygons, mesh, length, energy, the midpoint operation and the zero-limit basin
- `lem-cg-cat-one-short-and-closed-local-geodesics` · lemma — Short local geodesics in a CAT(1) space are geodesics, and closed local geodesics have length at least $2\pi$
- `lem-cg-polygon-midpoint-drop-and-equality` · lemma — Existence of the uniform radius, continuity of the midpoint operation, the energy drop, its equality case, and convergence of zero-limit polygons
- `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` · lemma — The spherical radius estimate, the quadrilateral separation constant, and the finite midpoint-operation comparison disk
- `lem-cg-local-cat-one-products-from-sine-comparison` · lemma — Local CAT(1) of the $l^2$ product from a model $S^2\times S^2$ sine-comparison calculation
- `lem-cg-comparison-product-perturbation-and-degenerate-limits` · lemma — Perturbation by a Euclidean regular polygon: comparison-disk bounds for degenerate comparison triangles
- `lem-cg-uniform-energy-decrement-and-short-class-closedness` · lemma — The uniform energy decrement on the basin, bounded iteration, and the closedness of the basin inside the short polygon space
- `lem-cg-bowditch-quantitative-short-loop-control` · lemma — Polygon transfer, the basin as the shrinkable class, and the short-loop criterion

### `short-loop-polygons-and-quantitative-energy-decrease-examples` — Short Loop Polygons and Quantitative Energy Decrease — Examples (4 item(s))

- `ex-cg-midpoint-iteration-on-a-spherical-triangle` · example — Midpoint iteration on a small equilateral spherical triangle contracts geometrically to its centre
- `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` · example — Equally spaced points on a metric circle: stationary energy and the equality case
- `ex-cg-null-homotopy-versus-short-loop-shrinkability` · example — Null-homotopy versus shrinkability through short loops on $S^2$ and on a short circle
- `ex-cg-zero-length-boundary-of-the-energy-criterion` · example — The zero-length boundary: constant tuples, collapsed edges and the degeneracy of the energy decrement at $L=0$

## Your seams

Your pages depend on another group's:

- `cat-comparison-link-criteria-and-local-globalization` requires `spherical-simplex-metrics-angular-links-and-cones` (group e, batch 8)

Another group's pages depend on yours:

- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `cat-comparison-link-criteria-and-local-globalization`
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `short-loop-polygons-and-quantitative-energy-decrease`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-42-coxeter-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-42-coxeter-32`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
