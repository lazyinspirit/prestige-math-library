# Same-frontier dependency record

The unified ledger is `research/<run>-cross-batch-dependencies.json`.
It covers different batches in this run, including dependencies among pairs
being built in the same frontier. It is separate from the Step-5 verdicts and
the published-consumer ledger.

Step-3 adjudicators must identify every such page prerequisite and item
dependency, including implicit proof uses, well-definedness justifications and
load-bearing forward references. Record exact consumer and supplier IDs, the
required claim/hypotheses, its use/location, and any missing or inadequate support.
An absent declaration is a finding, not permission to omit the dependency.

Write one JSON array per owned consumer batch to
`research/<run>-batch-BATCH.cross-batch-dependencies.json`, even if empty:

```json
[{"kind":"item","consumer":"lem-consumer","supplier":"thm-supplier","status":"open","evidence":"Exact required claim, use/location, mismatch and repair owner."}]
```

Use `kind: page` for page IDs. Use `open`, `verified`, or `removed`; verification
needs a current mathematical check, and removal needs evidence that the use was
actually removed. One row per `(kind, consumer, supplier)`; update it instead of
appending duplicates. Only the consumer's owner edits its input file. Pair
authors sharing a consumer batch run sequentially and preserve existing rows
for sibling pairs. Route outside findings to that owner. Replace inputs
atomically; never edit the unified ledger by hand. Step 8's serial lead may
reconcile all batch inputs after the
owning writers finish. After each input or dependency edit, run:

`node tools/frontier-dependency-ledger.mjs refresh --run <run>`

Concurrent refreshes use an exclusive lock; retry a busy lock after the other
merge finishes, never delete another process's lock. Rechecks and later authorized
writers maintain these same rows immediately when dependencies change. Read-only
reviewers report updates to the owning writer and do not write ledger files.
Do not broaden mathematical edit authority to satisfy bookkeeping.

The Step-3b final gate and Step-8 join require an input for every batch and a review
row for every declared cross-batch edge. An empty input is valid only when that
consumer batch has no such dependencies.

Step 8's lead refreshes and reads the unified ledger before reviewing scope or
impact. Reconcile open findings, orphaned reviews, missing batch reviews and any
`removed` row whose declaration/use persists. Verify affected notes against
current files; neither a recorded edge nor an old `verified` note proves adequacy.
Record dispositions in the owning input rows and Step-8 report. Do not replace
the required Step-5 edge verdicts or Step-8 certification with this ledger.


<!-- frontier-41-ha-dt-29-alpha-batch-22-5a:begin -->
Batch 22 Step-5a: current owned consumer uses are recorded in
`research/frontier-41-ha-dt-29-batch-22.cross-batch-dependencies.json`
with bounded current-source evidence. The historical `reader:22:1` holonomy
order error is confirmed fatal and resolved by the independently reviewed
reversed-loop Definition; its original observed bytes remain unbound.
Read-only producer alert for batch 21 / Step 5b: the manifest entry for
`def-holonomy-representation-and-holonomy-group-of-a-leaf` still quotes
`rho([a])=h_a` and omits `def-leafwise-path-and-leafwise-homotopy`, whereas the
current Definition uses `rho([a])=h_(a^-1)` and declares intrinsic leaf loops.
Synchronize that producer manifest without changing the sound current Definition.
The C1 product supplier's statement is unchanged; its local proof gap has been
repaired in batch 22 by a transverse collar and finite compact-overlap first
integrals. No new outside consumer interface repair is needed from this proof edit.
All items and any proposed withdrawals remain present for lead disposition.
<!-- frontier-41-ha-dt-29-alpha-batch-22-5a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-28-5a:begin -->
Batch 28 current owned consumers are reconciled in `research/frontier-41-ha-dt-29-batch-28.cross-batch-dependencies.json`; all 19 declared edges retain IDs and actual current-use evidence. Module-model uses require supplied splitting or the existence consumer's explicit AC construction. Coherence uses the corrected unit rings. No withdrawal is proposed.

Step-5b owner alert: `reader:28:2` and `reader:28:3` are nonfatal historical proof typing findings under the competent-reader rule, but their reused closed producer ledger rows `f41-b27-model-lift-target` and `f41-b27-lex-tensor-typing` are labelled fatal. Do not reinterpret the historical findings as false positives or double-count them. Reconcile the producer ledger severity and decision references centrally; producer files remained read-only. The proofs currently close; this is an unresolved ledger consistency issue.

Published source-maintenance alert: `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`, Step 1.1, uses the converse of its L1 citation. Finite-free lifting closes the gap without AC, as recorded in `research/frontier-41-ha-dt-29-alpha-batch-28-5a.md`, `reader:28:5`; owner should insert that short proof in the published source. Published item unchanged.
<!-- frontier-41-ha-dt-29-alpha-batch-28-5a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-30-5a:begin -->
Batch 30 Step-5a: owned cross-batch consumer input remains the empty array in
`research/frontier-41-ha-dt-29-batch-30.cross-batch-dependencies.json`; all declared suppliers of owned consumers are in batch 30 or published. New disk-frame prerequisites are the published homotopy-invariance and Gram–Schmidt theorems. Stable IDs and all page entries are retained; there is no proposed withdrawal.

Published alert: `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` has the fatal current rotation/frame-domain construction defect recorded in `research/published-consumer-supplier-ledger.md`, `reader:30:1`; owner repair remains open. The assigned prespectrum consumer now obtains its frames independently by trivializing over the disk.

Step 5b metadata alert to batch 11: the Definition proof edit in `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` preserves all spaces, bundle isometries, orientation order, CW cells and structure maps. The actual uses in `lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum` (F1/F5, Steps 1.1–2.2) and `thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism` (F2/F4, Steps 1.2–3.1) remain mathematically valid. Their batch-11 contracts quote the whole old Definition, so refresh those quotes against the amended Definition during Step 5b. No consumer body repair is required. The other two direct reference consumers, `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism` (Given, Steps 1.1–4.1) and `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism` (Given, Steps 1.2–2.1), use the same unchanged CW/stabilization/stable-evaluation interfaces and need no mathematical edit.
<!-- frontier-41-ha-dt-29-alpha-batch-30-5a:end -->

<!-- frontier-41-ha-dt-29-alpha-batch-10-5a:begin -->
Batch 10 Step-5a independently reviewed current routed consumers and their exact
supplier interfaces, with notes in its batch cross-batch dependency input and
`research/frontier-41-ha-dt-29-alpha-batch-10-5a.md`.
Batch-9 producer alerts for Step 5b: the positive-basis lemma still lists the
failing `people.math.fas.harvard.edu` Freed URL; replace it with
`https://people.math.harvard.edu/~dafr/bordism.pdf`. The framing/Thom proposition's
batch-9 manifest still says every empty-base space is one point, although the
current item correctly retains target S^k. Synchronize that manifest, and reconcile
its compressed composition with the explicit p composed with Phi_phi composed
with c of its proof. These producer artifacts remain read-only here.
The proposed withdrawal of
`lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism` remains present
for the Step-5b lead. This carrier has now been surgically corrected to union of
actual disjoint cobordism images and no arbitrary-codimension monoid. No current
item dependency/reference consumer uses its former assertion; classification
proofs use independently proved disjoint supports and count bijections. Retain
all stable IDs and page placement pending lead disposition.
<!-- frontier-41-ha-dt-29-alpha-batch-10-5a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-1-5a:begin -->
Batch 1 Step-5a: all owned consumer uses of the corrected local suppliers were checked against current Statements/Definitions, including actual incoming-face retention, qualified CW models, boundaryless product factors, compact crossing spheres and regular-endpoint interchange. All current outside dependency/reference mappings are retained in `research/frontier-41-ha-dt-29-alpha-batch-1-5a.md` for Step 5b; no outside consumer was repaired or certified. The owning batch input `research/frontier-41-ha-dt-29-batch-1.cross-batch-dependencies.json` remains `[]`: its suppliers are internal to batch 1 or published. Added field-construction dependencies in two owned consumers and the disk-coordinate inverse-function supplier are published. The published partition-gluing Proof 3.1 support gap is confirmed nonfatal and pending owner repair; exact owned reparametrization consumer uses an independent scalar proof. No withdrawal is proposed, and all stable IDs remain present.
<!-- frontier-41-ha-dt-29-alpha-batch-1-5a:end -->

<!-- frontier-41-ha-dt-29-alpha-batch-23-5a:begin -->
Batch 23 current owned consumer edges are reconciled in
`research/frontier-41-ha-dt-29-batch-23.cross-batch-dependencies.json`:
73 exact declared edges with current-use evidence, including explicit C2
adaptations and the reversed-loop holonomy convention. All 52 stable item IDs,
both pages and all existing placements/withdrawals remain present.

Step 5b alerts to **batch 31**: the report
`research/frontier-41-ha-dt-29-alpha-batch-23-5a.md`, Consumer impact table,
records all 16 direct outside consumers of the reader's revised interfaces.
`lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood`,
Step 1.1, applies compact separation to the whole compact leaf A although
the fence only supplies V near its loop; prove A is inside dom V or fix a
global positive smooth V before constructing the fence. Step 3.1's enlarged
compact S must also lie inside dom V.
`lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation`,
F3 and Steps 4.1–5.1, must explicitly match its plaque projection to the same
positive smooth V and short orbit segments of the cap product. Compact range
bookkeeping alone does not establish that exact factorization.
`lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar` and
`lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band`
have corresponding fixed-cap matching checks in the report. Outside items
and their owners' input ledgers were left unchanged. No withdrawal is proposed.
<!-- frontier-41-ha-dt-29-alpha-batch-23-5a:end -->

<!-- frontier-41-ha-dt-29-alpha-batch-4-5a:begin -->
Batch 4 Step-5a independently reviewed its current owned consumer uses and
updated `research/frontier-41-ha-dt-29-batch-4.cross-batch-dependencies.json`
(26 rows, one retained removed use). The interior-slab use in
`prop-relative-morse-inequalities-for-a-cobordism` requires the pushed-in lower
pair-homotopy comparison, not fixation of the entire original lower sublevel.
The Euler consumer uses a finite CW homotopy model, and the chain consumer
uses the explicitly maintained simultaneous-gradient rearrangement invariant.
The boundary-coefficient consumer uses its explicit core-coordinate projection;
its obsolete relative-cell edge remains marked removed for Step 5b.

Open outside-scope batch-1 alerts: the relative-cell lemma manifest misnames
its collapse direction as inclusion-induced, and the standard-handle-function
manifest overstates its whole-face level values and local constancy. Current
proofs were independently checked; manifest corrections remain their owner's
work. Exact findings, routing/pre-reader fingerprints, consumer IDs and
historical byte uncertainty are preserved in the task-named batch-4 report and
decisions. No proposed withdrawal or stable ID was removed. Computed
cross-group obligations and both impact windows remain Step 5b duties.
<!-- frontier-41-ha-dt-29-alpha-batch-4-5a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-31-5a:begin -->
Batch 31 current owned consumer review is recorded in
`research/frontier-41-ha-dt-29-alpha-batch-31-5a.md` and its exact 36-obligation
decisions file. The canonical cap-development field is now the SAME global
positive smooth V, extended before development while retaining the original
fence near its compact trace. Its direct consumers are all in batch 31; their
closed ambient hypotheses were checked. Compact-leaf/enlarged-intrinsic-set
avoidance now satisfies dom V. Source-disk nesting chooses least later
recurrence indices, with no dependent choice inference. All stable IDs remain.

Step 5b/owner holds remain: exact C2 whole-collar scalar cancellation and
same-V null-simple-frontier matching; finite differentiable cell/handle index
evaluation and primitive C2 curve adapters; final C2 torus/solid-torus seam
classification. The batch-3 support supplier was independently opened: it
localizes only the field and preserves the scalar near slab faces, so the
stronger batch-31 use is blocked, not certified. Both originally proposed
held-carrier dispositions/withdrawal discussions remain present for Step 5b;
neither held carrier was deleted, narrowed or certified. The A-page prose now
makes the additional index evaluation prerequisite explicit. Published
suppliers and other batches remained read-only. No new published defect was
confirmed. Both impact windows and cross-group closures remain engine/Step-5b
duties; risk --require-reviewed fails honestly on 14 open records.
<!-- frontier-41-ha-dt-29-alpha-batch-31-5a:end -->


<!-- frontier-41-ha-dt-29-alpha-5b-schubert:begin -->
Step 5b lead: `lem-oriented-grassmannian-has-two-lifted-schubert-cells` remains
present, with its unchanged Statement, dependencies and consumer declarations.
F2 now correctly distinguishes finite Grassmannian stages and per-dimension
cell counts from the infinite stable CW base. Its current cover/CW risk review
and uniquely owned closed 5b citation defect are in the task-named Alpha report
and verdicts. This supersedes no independent historical review or withdrawal.
The actual surface checker includes Facts, and its four direct consumers
`def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`,
`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
`thm-bo-bso-cohomology-away-from-two`, and
`thm-integral-finite-generation-of-mo-and-mso-homology` were checked on current
content. Their two-lift CW, finite-stage and per-degree finiteness uses remain
licensed. No consumer interface changed, and the current direct-boundary receipt
is `research/frontier-41-ha-dt-29-impact-5b.json`. The complete first-window
and other cross-batch obligations remain open where the lead report says pending.
All pre-existing withdrawal/owner-hold records are preserved.
<!-- frontier-41-ha-dt-29-alpha-5b-schubert:end -->
