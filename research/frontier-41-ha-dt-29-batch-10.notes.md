# Frontier 41 (HA + DT) — batch 10 Step 1 notes

**Owner:** beta, batch 10. **Pair:** `the-hopf-degree-theorem` (A, order 551) /
`the-hopf-degree-theorem-examples` (B, order 552), differential topology. This
file records scaffold decisions and evidence, not Step-3 mathematical approval.

## Scope, plan and design

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the batch task
`research/frontier-41-ha-dt-29-beta-10.task.md`, the complete DT-18 design at
`research/plan-differential-topology-track.md` L1010--1046 with its hard-proof
closure, §8's DT-18 source row, §§12.1--12.4 and §12.6, the current
`research/plan-spec.json` (the pair carries the declared `requires` and an empty
item list) and the DT-17 manifest being written concurrently by batch 9.
The owner direction's differential-topology clauses bind this pair only
generally (retain dimension/regularity restrictions, never treat a planned
supplier as published, report blockers honestly); its item-level clauses concern
DT-19/§12.1 and do not change DT-18.

## Inventory

The A manifest carries **20 items**: the 14 designed items plus **6 local
prerequisites** added for mathematical closure, all on the same A page. The B
manifest carries the 5 designed examples/counterexample. Every item has an
explicit `deps` array, a statement, a proof strategy, provenance, per-item
sources and a tool-computed `dependency_level` (0--9; three level-0 items, one
level-9 item). No page approaches the 100-item cap.

Added items (with the design gap they close):

1. `def-frame-bundle-of-a-smooth-manifold` — design items 2/4/5 speak of
   framings being moved and compared; the frame bundle of $TM$ with its two
   torsor components is the object Freed's proof uses.
2. `lem-components-of-the-frame-bundle-of-a-connected-manifold` — Freed's
   Lemma 2.44 (two components iff orientable, connected otherwise), including
   that same-component framings are joined by a *smooth* path; the design's
   items 4/5 assert completeness of the integer/mod-two invariants without it.
3. `lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant`
   — Freed's Lemma 2.45; the design's item 2 uses its "adjust the framing within
   a component" remark and items 4/5 use it to standardise points.
4. `lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism` — makes
   disjoint union well defined on framed cobordism classes and additive for the
   signed count and parity; the design's items 4 and 5 assert additivity of the
   invariants without an item supplying it.
5. `def-mod-two-degree-of-a-map-to-a-sphere` — the design's item 8 uses "mod-two
   degree" but no mod-two degree is on disk (the de Rham degree is integral and
   oriented only); the definition as the parity of a regular fibre needs no
   orientation of $M$.
6. `lem-mod-two-degree-is-well-defined-and-homotopy-invariant` — supplies the
   well-definedness the definition defers, and the comparison
   $\deg_2\equiv\deg\pmod 2$ in the oriented case.

All 14 design ids and all 5 B ids are present unchanged; no item was dropped or
weakened. One designed statement was tightened for type-correctness during
scaffold: the cancellation lemma (design item 2) is stated with a closed ambient
$M$ and a chart ball $U\subseteq M$, the null-cobordism being a framed cobordism
of $M$ supported in $U$, so that it is literally an instance of DT-17's
framed-cobordism definition (a non-closed open ball cannot be an ambient
manifold in that definition); the model computation and all hypotheses are
unchanged. The design's proof route is preserved exactly: the hard-proof closure
("the converse is precisely the zero-dimensional framed-cobordism
classification plus inverse PT") is implemented by items 5--9 of the design
(framing sign, cancellation, signed-count invariance, the two classifications),
the de Rham comparison item 6, then the realization and inverse-PT lemmas, and
only then the two Hopf theorems. The already-owned homotopy invariance of degree
is used only in the easy direction of the classification.

## Design / plan conflicts and sharpenings (recorded, not silently fixed)

1. **Design order vs prerequisite order.** The design lists items 7--8 (the two
   Hopf theorems) before its items 9--10 (realization and inverse PT), but the
   theorems' converses consume 9--10. The manifest orders 9--10 before 7--8,
   with ids unchanged. This is a design-order correction, not a scope change.
2. **GP source-register range.** Plan §8's register row for Guillemin--Pollack
   reads "Ch. 2 §4, pp. 77--84; Ch. 3 §§3--5 and §7, pp. 107--140 and
   148--150", i.e. it omits §6. The design (and this dispatch) cite GP Ch. 3 §6,
   pp. 141--147, exactly the section between those ranges. The current plan
   controls; §6 was read in full and harvested here, and plan §8's register row
   is recorded as stale for reconciliation.
3. **`requires` list.** The design's prose requires line also names
   `spectra-and-stable-homotopy-groups` ("only for standard homotopy notation");
   plan §12.4's exact array and the dispatch omit it. The plan controls; the page
   shell and this manifest use the §12.4 array.
4. **Overlap with published sphere classification (design item 11).** The
   published `thm-based-sphere-maps-are-classified-by-geometric-degree` already
   classifies *based* sphere self-maps by degree, and DT-17's in-run
   `lem-based-and-free-homotopy-classes-of-sphere-maps-agree` removes the
   basepoint. Design item 11 is therefore not new mathematics; it is kept as
   designed and stated as the free-homotopy specialization of the new general
   theorem (a genuine corollary of item 15 with $M=S^m$), and this overlap is
   flagged for owner reconciliation rather than silently dropped.
5. **Overlap with published examples (B items 1--2).** The degree computations
   behind `ex-power-maps-on-the-circle-have-their-exponent-as-degree` and
   `ex-reflection-of-a-sphere-has-degree-minus-one` are already on disk
   (`prop-degree-of-the-power-map-on-the-circle`,
   `ex-degree-of-the-circle-power-map`, `ex-degree-of-a-reflection-of-a-sphere`,
   `ex-degree-of-a-coordinate-reflection-on-a-sphere`). The new B items are
   stated for their designed *classification* content (which homotopy class the
   computation picks out) and cite the published computations as suppliers;
   flagged for owner reconciliation.
6. **Design item 5 name vs published DT-15 proposition.** The published
   `prop-zero-dimensional-bordism-groups` already gives the abstract bordism
   groups $\Omega_0^{O}\cong\mathbb Z/2$ and $\Omega_0^{SO}\cong\mathbb Z$.
   Design item 5 is sharpened to the *framed* statement needed by the
   Pontryagin-Thom route: framed cobordism classes of framed $0$-manifolds in a
   closed connected nonorientable $M$ are classified by parity. The published
   abstract statement and the new ambient framed statement are different claims;
   the strategy says so explicitly.

## Dependency and mathematical audit

**In-run dependencies.** All DT-17 (batch 9) suppliers used are its A-page
items, all stated for an arbitrary closed ambient manifold: the framed-cobordism
relation, the framing definition, the framed regular preimage, the
Pontryagin-Thom map, the framed-cobordism-to-homotopy and
preimage-to-original-map lemmas, regular-value independence, homotopic-map
preimage cobordism, and positive-basis path-connectedness. I read each
statement and the relevant strategy text; their hypotheses (closed $X$, neat
submanifolds, literal framing restriction at collars) match every use here.
Because DT-17's manifest is still in flight, every edge is recorded `open` with
its required claim and use in
`research/frontier-41-ha-dt-29-batch-10.cross-batch-dependencies.json`
(24 item rows plus the page row; the frame-bundle definition additionally consumes DT-17's positive-basis path-connectedness lemma, recorded as its own edge). Nothing is treated as published.

**Published suppliers read and checked.** DT-15's
`prop-zero-dimensional-bordism-groups` (parity/signed-count invariants and the
boundary-pushforward computation the L2-style argument mirrors),
`def-unoriented-smooth-cobordism-of-closed-manifolds`, `def-oriented-smooth-cobordism`,
`lem-fundamental-class-of-a-boundary-pushes-forward-to-zero`; the existence and
orientation items `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations`,
`def-orientation-local-system-and-orientation-cover`,
`prop-the-manifold-orientation-system-is-a-local-system`,
`def-orientable-manifold`, `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form`,
`def-orientation-of-a-finite-dimensional-real-vector-space`,
`def-product-orientation`, `def-induced-boundary-orientation`,
`def-relative-fundamental-class-and-boundary-orientation`; the de Rham degree
items `def-degree-of-a-proper-smooth-map-by-compact-support-cohomology`,
`def-local-orientation-sign-of-a-regular-preimage`,
`thm-regular-value-formula-for-degree`,
`cor-degree-is-an-integer-and-independent-of-the-regular-value`,
`prop-degree-is-multiplicative-under-composition`,
`prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism`,
`thm-degree-is-invariant-under-proper-smooth-homotopy`,
`prop-degree-of-the-power-map-on-the-circle`; the approximation and Sard items
`thm-morse-sard-for-smooth-manifolds`,
`cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map`,
`thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic`,
`thm-relative-whitney-approximation-for-manifold-valued-maps`; the topology
items `def-path-connected`,
`thm-connected-and-locally-path-connected-implies-path-connected`,
`thm-path-lifting-for-covering-maps`, `def-connected-space`,
`def-homotopy-relative-and-path-homotopy`, `def-homotopy-equivalence`,
`cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence`;
the published examples `ex-degree-of-the-circle-power-map`,
`ex-degree-of-a-reflection-of-a-sphere`,
`ex-degree-of-a-coordinate-reflection-on-a-sphere`; and the projective-space
items `lem-real-projective-space-cellular-homology-and-pinch-map`,
`ex-real-projective-space-is-orientable-exactly-in-odd-dimension`,
`ex-real-projective-space-from-affine-charts`. Checks made item by item:
hypothesis match (closedness/connectedness/orientability exactly where the
degree and classification statements require them), direction of the
regular-value and rotation arguments, the collar sign convention at the bottom
and top faces of $M\times I$, the rank-zero and empty-fibre clauses, and the
comparison of the de Rham local sign $\operatorname{sgn}(df_x)$ with the
normal-frame sign $\varepsilon(x)$ (they agree because a positive basis is
used). No missing, circular, forward or inadequate dependency remains; no
published supplier consumed here is defective.

**Dependency levels.** Computed by `tools/item-dependency-levels.mjs` over the
run's manifests; within batch 10 the distribution is
0:2, 1:2, 2:4, 3:2, 4:2, 5:3, 6:2, 7:4, 8:3, 9:1 (maximum 9, on the reflection
example through the homotopy-equivalence corollary). No cycle exists, and no
label was hand-written.

**Choice bookkeeping.** No arbitrary choice is used beyond $\mathrm{AC}_\omega$,
which is stated where it is genuinely consumed: smoothing paths in the frame
bundle (item 2), smoothing maps/homotopies in the classification theorems
(items 15/16 and the mod-two degree lemma), and the DT-17 definitions that
inherit it (framed-cobordism and framed-preimage items). The boundary-count
arguments, the model cancellation cobordism, the frame-bundle definition and
the signed-count/pairity bookkeeping are choice-free. No incompatible-axiom
branch is touched and no Recorded result is used.

## Source evidence and dispositions

Three independent treatments were fetched as full text, inspected and stamped
with `source-fetch-check --stamp` on 2026-10-05. No retrieval failure or retry
sequence occurred, so no source drop or alternative-proof record is needed.

| Treatment | Exact inspected locator | Main supported items | Stamp |
| --- | --- | --- | --- |
| [Freed, *Bordism: Old and New*](https://people.math.harvard.edu/~dafr/bordism.pdf) (lecture notes, primary) | Lecture 2, printed pp. 20--24 (framings, Theorem 2.35, Theorem 2.37, frame bundle (2.40)--(2.43), Lemmas 2.44--2.46, (2.47)--(2.48), Exercise 2.49) | framed preimage/count-to-degree, both Hopf theorems, frame bundles, component lemma, path lemma, cancellation lemma, $\mathbb Z$ classification | PDF, 208 pages, 7243524 bytes, sha256_16 `ddecb72e0c9197c6` |
| [Milnor, *Topology from the Differentiable Viewpoint*](https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf) (monograph) | Ch. 7, printed pp. 42--49 (framings, Pontryagin construction) and Ch. 8, printed pp. 50--51 (signed count = degree; Theorem of Hopf; nonorientable mod 2 theorem) | signed count = degree, $[M,S^m]$ classification (both cases), examples | PDF, 76 pages, 1654205 bytes, sha256_16 `2c3b7412deda8aa9` |
| [Guillemin--Pollack, *Differential Topology*](https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf) (textbook) | Ch. 3 §6, printed pp. 141--147 (Hopf Degree Theorem and its proof apparatus) and Ch. 2 §4, printed pp. 82--84 (mod 2 degree, $S^1$ and projective examples) | Hopf theorem statement and mod-two degree definition/invariance, circle/projective examples | PDF, 236 pages, 3472576 bytes, sha256_16 `e4d815443ae77128` |

The coverage file records **43 harvested rows**: A page 28 (12 included, 3
inline, 6 deferred, 7 out-of-scope), B page 15 (11 included, 4 out-of-scope).
Deferrals resolve: the framing, framed-cobordism and Pontryagin-Thom headings go
to `pontryagin-thom-and-framed-cobordism` (the in-run DT-17 pair), the
vector-field application of the Hopf theorem to
`vector-field-index-euler-characteristic-and-poincare-hopf` (DT-13 of this run),
and GP's Extension Theorem is a recorded `owner-decision` because no page of
this run consumes it. Declines have distinct reasons (GP's alternative isotopy
induction, winding-number route and extension theorem; positive-codimension
computations; cohomotopy and vector-field ownership; polynomial examples).

## Published defects for the canonical ledger

No published item consumed by this batch was found defective; no supplier
repair is requested. Two **overlaps** are recorded above for owner
reconciliation because they concern design items duplicating published content
modulo a genuine weakening of hypotheses: design item 11 versus the published
`thm-based-sphere-maps-are-classified-by-geometric-degree` (based vs free), and
B items 1--2 versus the published circle-power and reflection examples
(computation vs classification). Neither overlap blocks the scaffold: the
designed claims are true, are stated at their designed strength, and cite the
published items as suppliers.

## Checks and outstanding findings

Checks run on 2026-10-05 (UTC), in this order, on the final artifacts:

- `step1-decisions.mjs record` for all 25 batch-10 items (decision `ready`,
  examined-dependency lists and evidence in each record); `step1-decisions.mjs
  check --run frontier-41-ha-dt-29` (final snapshot, other batches still
  landing): 329 run items, 244 ready, **no batch-10 item and no batch-10 page among
  the 117 unresolved work entries**, which are
  the other batches' empty inventories and unrecorded items.
- `item-dependency-levels.mjs check --run frontier-41-ha-dt-29`: exit 1 solely
  on 32 `empty scaffold inventory` errors for other batches (snapshot); no error names a
  batch-10 item, and the batch-10 labels equal the computed values (maximum 9).
- `manifest-deps.mjs` on the batch manifest: 25 items, 0 missing, 0 errors;
  whole-run invocation over every current run manifest: 329 items, 0 missing,
  0 errors.
- `content-policy.mjs --manifest-only` on batch 10 **together with its in-run
  supplier batch 9**: 50 scoped items, 0 errors, 0 warnings; whole-run
  invocation over every current manifest: 329 scoped items, 0 errors,
  0 warnings. Run on batch 10 alone it reports the expected
  `batch-dependency-missing` findings for the DT-17 items (24, the number of
  distinct in-run supplier edges), which exist only as in-run planned supply (recorded, not suppressed).
- `coverage-checklist.mjs ... --require-destination`: 2 pages, 43 harvested
  results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage ... --stamp` and the check re-run: 6/6
  sources fetch-verified, 0 documented drops.
- `url-sweep.mjs --coverage ... --fail-on-dead`: 3/3 live, 0 failed, 0 blocking;
  liveness written to `research/frontier-41-ha-dt-29-batch-10-url-liveness.json`.
- `validate-plan.mjs research/plan-spec.json`: exit 0 (acyclic order, no
  item-level cycles, forward references, B-page dependencies or unresolved ids).
- `extcheck.mjs`: exit 0 (only the pre-existing unrelated recorded-not-proved
  notices).
- `manifest-integrity.mjs --run frontier-41-ha-dt-29`: 58 pages owed, 58 in the
  manifests, no scope drift.
- `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29`: batch 10
  is a reviewed batch with 25 reviewed edges and 0 orphaned reviews;
  `--require-reviewed` still exits 1 because other batches have not written
  their consumer inputs.

**Outstanding findings for the owner/operator, honestly recorded.** (i) The
batch's readiness records and dependency levels are current against the DT-17
manifest as of this run snapshot; DT-17 is still in flight, and any later edit
to a supplier statement invalidates the affected records and must trigger a
recompute and re-record — this is ordinary Step-1 reconciliation, not a batch
defect. (ii) The two published-content overlaps and the plan §8 GP-register
stale range are recorded above for reconciliation; none of them blocks authoring
this pair. (iii) The whole-run `step1` and dependency-level gates cannot close
until the other batches supply inventories and records; no unresolved
mathematical finding of batch 10 remains.
