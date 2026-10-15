# Same-frontier dependency record

The unified ledger is `research/<run>-cross-batch-dependencies.json`.
It covers different batches in this run, including dependencies among pairs
being built in the same frontier. It is separate from the Step-3 verdicts and
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
atomically; never edit the unified ledger by hand. The engine merges current
inputs after their owning writers finish. After each input or dependency edit, run:

`node tools/frontier-dependency-ledger.mjs refresh --run <run>`

Concurrent refreshes use an exclusive lock; retry a busy lock after the other
merge finishes, never delete another process's lock. Rechecks and later authorized
writers maintain these same rows immediately when dependencies change. Read-only
reviewers report updates to the owning writer and do not write ledger files.
Do not broaden mathematical edit authority to satisfy bookkeeping.

The Step-2 scope/prerequisite gate requires an input for every batch and a review row for
every declared cross-batch edge. An empty input is valid only when that
consumer batch has no such dependencies.

Step-5 repair owners maintain only the rows affected by their assigned repairs.
Record actual consumer uses and dispositions in the owning input rows and repair
report. This ledger does not replace Step-3 verdicts or Step-5 certification and
does not introduce another cross-batch review pass.

## Historical run notes (not current worker instructions)

<!-- frontier-41-ha-dt-29-alpha-batch-22-3a:begin -->
Batch 22 Step-3a: current owned consumer uses are recorded in
`research/frontier-41-ha-dt-29-batch-22.cross-batch-dependencies.json`
with bounded current-source evidence. The historical `reader:22:1` holonomy
order error is confirmed fatal and resolved by the independently reviewed
reversed-loop Definition; its original observed bytes remain unbound.
Read-only producer alert for batch 21 / Step 3b: the manifest entry for
`def-holonomy-representation-and-holonomy-group-of-a-leaf` still quotes
`rho([a])=h_a` and omits `def-leafwise-path-and-leafwise-homotopy`, whereas the
current Definition uses `rho([a])=h_(a^-1)` and declares intrinsic leaf loops.
Synchronize that producer manifest without changing the sound current Definition.
The C1 product supplier's statement is unchanged; its local proof gap has been
repaired in batch 22 by a transverse collar and finite compact-overlap first
integrals. No new outside consumer interface repair is needed from this proof edit.
All items and any proposed withdrawals remain present for lead disposition.
<!-- frontier-41-ha-dt-29-alpha-batch-22-3a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-28-3a:begin -->
Batch 28 current owned consumers are reconciled in `research/frontier-41-ha-dt-29-batch-28.cross-batch-dependencies.json`; all 19 declared edges retain IDs and actual current-use evidence. Module-model uses require supplied splitting or the existence consumer's explicit AC construction. Coherence uses the corrected unit rings. No withdrawal is proposed.

Step-3b owner alert: `reader:28:2` and `reader:28:3` are nonfatal historical proof typing findings under the competent-reader rule, but their reused closed producer ledger rows `f41-b27-model-lift-target` and `f41-b27-lex-tensor-typing` are labelled fatal. Do not reinterpret the historical findings as false positives or double-count them. Reconcile the producer ledger severity and decision references centrally; producer files remained read-only. The proofs currently close; this is an unresolved ledger consistency issue.

Published source-maintenance alert: `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`, Step 1.1, uses the converse of its L1 citation. Finite-free lifting closes the gap without AC, as recorded in `research/frontier-41-ha-dt-29-alpha-batch-28-3a.md`, `reader:28:5`; owner should insert that short proof in the published source. Published item unchanged.
<!-- frontier-41-ha-dt-29-alpha-batch-28-3a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-30-3a:begin -->
Batch 30 Step-3a: owned cross-batch consumer input remains the empty array in
`research/frontier-41-ha-dt-29-batch-30.cross-batch-dependencies.json`; all declared suppliers of owned consumers are in batch 30 or published. New disk-frame prerequisites are the published homotopy-invariance and Gram–Schmidt theorems. Stable IDs and all page entries are retained; there is no proposed withdrawal.

Published alert: `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` has the fatal current rotation/frame-domain construction defect recorded in `research/published-consumer-supplier-ledger.md`, `reader:30:1`; owner repair remains open. The assigned prespectrum consumer now obtains its frames independently by trivializing over the disk.

Step 3b metadata alert to batch 11: the Definition proof edit in `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles` preserves all spaces, bundle isometries, orientation order, CW cells and structure maps. The actual uses in `lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum` (F1/F5, Steps 1.1–2.2) and `thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism` (F2/F4, Steps 1.2–3.1) remain mathematically valid. Their batch-11 contracts quote the whole old Definition, so refresh those quotes against the amended Definition during Step 3b. No consumer body repair is required. The other two direct reference consumers, `prop-products-of-complex-projective-spaces-span-rational-oriented-bordism` (Given, Steps 1.1–4.1) and `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism` (Given, Steps 1.2–2.1), use the same unchanged CW/stabilization/stable-evaluation interfaces and need no mathematical edit.
<!-- frontier-41-ha-dt-29-alpha-batch-30-3a:end -->

<!-- frontier-41-ha-dt-29-alpha-batch-10-3a:begin -->
Batch 10 Step-3a independently reviewed current routed consumers and their exact
supplier interfaces, with notes in its batch cross-batch dependency input and
`research/frontier-41-ha-dt-29-alpha-batch-10-3a.md`.
Batch-9 producer alerts for Step 3b: the positive-basis lemma still lists the
failing `people.math.fas.harvard.edu` Freed URL; replace it with
`https://people.math.harvard.edu/~dafr/bordism.pdf`. The framing/Thom proposition's
batch-9 manifest still says every empty-base space is one point, although the
current item correctly retains target S^k. Synchronize that manifest, and reconcile
its compressed composition with the explicit p composed with Phi_phi composed
with c of its proof. These producer artifacts remain read-only here.
The proposed withdrawal of
`lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism` remains present
for the Step-3b lead. This carrier has now been surgically corrected to union of
actual disjoint cobordism images and no arbitrary-codimension monoid. No current
item dependency/reference consumer uses its former assertion; classification
proofs use independently proved disjoint supports and count bijections. Retain
all stable IDs and page placement pending lead disposition.
<!-- frontier-41-ha-dt-29-alpha-batch-10-3a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-1-3a:begin -->
Batch 1 Step-3a: all owned consumer uses of the corrected local suppliers were checked against current Statements/Definitions, including actual incoming-face retention, qualified CW models, boundaryless product factors, compact crossing spheres and regular-endpoint interchange. All current outside dependency/reference mappings are retained in `research/frontier-41-ha-dt-29-alpha-batch-1-3a.md` for Step 3b; no outside consumer was repaired or certified. The owning batch input `research/frontier-41-ha-dt-29-batch-1.cross-batch-dependencies.json` remains `[]`: its suppliers are internal to batch 1 or published. Added field-construction dependencies in two owned consumers and the disk-coordinate inverse-function supplier are published. The published partition-gluing Proof 3.1 support gap is confirmed nonfatal and pending owner repair; exact owned reparametrization consumer uses an independent scalar proof. No withdrawal is proposed, and all stable IDs remain present.
<!-- frontier-41-ha-dt-29-alpha-batch-1-3a:end -->

<!-- frontier-41-ha-dt-29-alpha-batch-23-3a:begin -->
Batch 23 current owned consumer edges are reconciled in
`research/frontier-41-ha-dt-29-batch-23.cross-batch-dependencies.json`:
73 exact declared edges with current-use evidence, including explicit C2
adaptations and the reversed-loop holonomy convention. All 52 stable item IDs,
both pages and all existing placements/withdrawals remain present.

Step 3b alerts to **batch 31**: the report
`research/frontier-41-ha-dt-29-alpha-batch-23-3a.md`, Consumer impact table,
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
<!-- frontier-41-ha-dt-29-alpha-batch-23-3a:end -->

<!-- frontier-41-ha-dt-29-alpha-batch-4-3a:begin -->
Batch 4 Step-3a independently reviewed its current owned consumer uses and
updated `research/frontier-41-ha-dt-29-batch-4.cross-batch-dependencies.json`
(26 rows, one retained removed use). The interior-slab use in
`prop-relative-morse-inequalities-for-a-cobordism` requires the pushed-in lower
pair-homotopy comparison, not fixation of the entire original lower sublevel.
The Euler consumer uses a finite CW homotopy model, and the chain consumer
uses the explicitly maintained simultaneous-gradient rearrangement invariant.
The boundary-coefficient consumer uses its explicit core-coordinate projection;
its obsolete relative-cell edge remains marked removed for Step 3b.

Open outside-scope batch-1 alerts: the relative-cell lemma manifest misnames
its collapse direction as inclusion-induced, and the standard-handle-function
manifest overstates its whole-face level values and local constancy. Current
proofs were independently checked; manifest corrections remain their owner's
work. Exact findings, routing/pre-reader fingerprints, consumer IDs and
historical byte uncertainty are preserved in the task-named batch-4 report and
decisions. No proposed withdrawal or stable ID was removed. Computed
cross-group obligations and both impact windows remain Step 3b duties.
<!-- frontier-41-ha-dt-29-alpha-batch-4-3a:end -->


<!-- frontier-41-ha-dt-29-alpha-batch-31-3a:begin -->
Batch 31 current owned consumer review is recorded in
`research/frontier-41-ha-dt-29-alpha-batch-31-3a.md` and its exact 36-obligation
decisions file. The canonical cap-development field is now the SAME global
positive smooth V, extended before development while retaining the original
fence near its compact trace. Its direct consumers are all in batch 31; their
closed ambient hypotheses were checked. Compact-leaf/enlarged-intrinsic-set
avoidance now satisfies dom V. Source-disk nesting chooses least later
recurrence indices, with no dependent choice inference. All stable IDs remain.

Step 3b/owner holds remain: exact C2 whole-collar scalar cancellation and
same-V null-simple-frontier matching; finite differentiable cell/handle index
evaluation and primitive C2 curve adapters; final C2 torus/solid-torus seam
classification. The batch-3 support supplier was independently opened: it
localizes only the field and preserves the scalar near slab faces, so the
stronger batch-31 use is blocked, not certified. Both originally proposed
held-carrier dispositions/withdrawal discussions remain present for Step 3b;
neither held carrier was deleted, narrowed or certified. The A-page prose now
makes the additional index evaluation prerequisite explicit. Published
suppliers and other batches remained read-only. No new published defect was
confirmed. Both impact windows and cross-group closures remain engine/Step-3b
duties; risk --require-reviewed fails honestly on 14 open records.
<!-- frontier-41-ha-dt-29-alpha-batch-31-3a:end -->


<!-- frontier-41-ha-dt-29-alpha-3b-schubert:begin -->
Step 3b lead: `lem-oriented-grassmannian-has-two-lifted-schubert-cells` remains
present, with its unchanged Statement, dependencies and consumer declarations.
F2 now correctly distinguishes finite Grassmannian stages and per-dimension
cell counts from the infinite stable CW base. Its current cover/CW risk review
and uniquely owned closed 3b citation defect are in the task-named Alpha report
and verdicts. This supersedes no independent historical review or withdrawal.
The actual surface checker includes Facts, and its four direct consumers
`def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`,
`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
`thm-bo-bso-cohomology-away-from-two`, and
`thm-integral-finite-generation-of-mo-and-mso-homology` were checked on current
content. Their two-lift CW, finite-stage and per-degree finiteness uses remain
licensed. No consumer interface changed, and the current direct-boundary receipt
is `research/frontier-41-ha-dt-29-impact-3b.json`. The complete first-window
and other cross-batch obligations remain open where the lead report says pending.
All pre-existing withdrawal/owner-hold records are preserved.
<!-- frontier-41-ha-dt-29-alpha-3b-schubert:end -->

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-7-3a:begin -->
Batch 7 current owned item consumer uses are maintained in `research/frontier-44-special-representation-examples-28-six-step-batch-7.cross-batch-dependencies.json`. Exact supplier interfaces and all routed consumer proofs were independently reviewed. Batch 6 rank-one tensor lemma F6 still attributes tensor contravariance to a single-module form supplier. Tensor-maps Proof 1.2 was corrected by batch 6 during handoff and independently rereviewed; its prior escalation remains pending explicit owner disposition. Required corrections and original producer fingerprints are retained in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-7-3a-decisions.json`; no producer edit or historical false-positive disposition is claimed. Grand-loop consumer edges remain open because those producer premises have unresolved findings. The corrected sl2 and A2 example clauses have only the same-page dual example as a consumer, whose actual uses are sound. No withdrawal is proposed, no published repair was made, and stable item IDs and page placement are preserved.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-7-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-17-3a:begin -->
Batch 17 current manifest contains only the Kronecker A/B pair. Its actual suppliers are within batch 17 or outside this restored frontier; the owned cross-batch input is now `[]`. The former 38 Whittaker/category-O records did not belong to any current batch-17 consumer (old input raw SHA-256 c6632797e80395026fc0100fa3afc9dcf56fa2d05ae0d174f4d3a72067680bde). No stable content ID, page or proposed withdrawal was removed.

Current supplier/interface and focused outside-consumer checks are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-17-3a.md`. Alpha changed only the reduction Remarks/F1 and its manifest strategy, the B-page superlative, and exact contract evidence/risk reviews; no Statement or Definition changed by Alpha. Reader padding/domain and rational-basis changes preserve the actual uses checked. The zero-based FI convention was checked against def-fi-category-and-fi-module; no spurious e_n/e_(n+1) defect is alleged. Step 3b still owns computed impact windows and any later carrier drift.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-17-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-3-3a:begin -->
Batch 3 Step-3a: independently verified all four current roots-and-rational-powers supplier interfaces used by ex-geometric-sequences-all-real-ratios, preserving exact claims and no-AC scope in the owning batch input. Other counting-page obligations belong to untouched/unflagged page prose and rem-sequence-conventions outside this routed mathematical assignment; their open statuses are preserved for Step 3b. No Statement/Definition was changed by this adjudicator; reader Example clarification in ex-absolute-value-limit has no item consumers and its page prose remains supported by lem-limit-abs. No withdrawals are proposed.

Published alerts: reader:3:1 / thm-reals-cauchy-complete remains escalated for the owner’s missing local LUB bridge disposition; the exact consumer lem-convergent-implies-cauchy uses only the valid Cauchy-convergence conclusion. Refuter:3:1 / fs-limit-preserves-strict-inequality is a confirmed nonfatal incomplete L8 sentence, recorded for owner repair. Both current proofs/actual uses reviewed; published bytes remain unchanged. Full evidence and strategy: research/frontier-44-special-representation-examples-28-six-step-alpha-batch-3-3a.md and research/published-consumer-supplier-ledger.md.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-3-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-26-3a:begin -->
Batch 26 current point-operation uses are recorded in its five-row consumer input
`research/frontier-44-special-representation-examples-28-six-step-batch-26.cross-batch-dependencies.json`.
Both forward interfaces are verified for the exact point specialization; c-softness
and compact sections are checked directly on pt/empty. The historical batch-36
unshifted cone-Hom finding remains true of reader-observed b3357fd3 bytes, while
current Proof 4.1 (raw hash 85d6e1d615ff5995fbec53ee1958c57d14a2550ded2aa674faf2293e72974cd8)
has the sound [1] shift, independently checked with signs. Step 3b must synchronize
batch-36's malformed step-4.1 contract claim/inputs. Batch 26's analytic-topology
risk-only carrier has an overbroad final choice-free supplier annotation: the
constructible-subset supplier states ambient AC, although only its elementary
locally-closed terminology is used here. The defining mathematics is choice-free;
owner should qualify the annotation. No defining interface or Statement changed;
all stable IDs and any proposed withdrawals remain present. Required unified-ledger
refresh failed on invalid batch-10 consumer ownership; fix that outside input and
refresh centrally. Full evidence and local dispositions are in the task-named
batch-26 report and decisions; no outside carrier was edited or stamped.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-26-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-6-3a:begin -->
Batch 6 Step 3a: current scoped supplier/use checks and exact owned edge union are in `research/frontier-44-special-representation-examples-28-six-step-batch-6.cross-batch-dependencies.json`; review evidence and the batch-47 right-string multiplication-side alert are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-6-3a.md`. No proposed withdrawal is deleted or introduced. Unified refresh failed on batch-10 input ownership; engine/Step-3b must disposition that outside mechanical blocker. Published carriers remain read-only.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-6-3a:end -->


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-11-3a:begin -->
Current batch-11 rim-hook owned consumers have no suppliers or page prerequisites owned by another batch in the current run manifests. Their 60 outside item supplier interfaces were checked at actual uses; all owned consumers are reviewed in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-11-3a.md`. The input `research/frontier-44-special-representation-examples-28-six-step-batch-11.cross-batch-dependencies.json` contains 130 inherited rows for unrelated KLR consumers and zero owned-consumer rows; preserve those foreign rows for engine/Step 3b ownership reconciliation. Seven current outside direct reference/dependency consumers of the rim-strip Definition use its unchanged size, height and connected/2x2-free partition-complement clauses; no further-hop consumer repair is required. No withdrawal or stable ID is removed. The unadjudicated reader runner-row-label observation for `def-e-core-e-quotient-and-e-weight` is retained in the batch report for its owner. Both cross-group impact windows remain Step 3b duties.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-11-3a:end -->


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-1-3a:begin -->
Batch 1 Step 3a: the owned consumer input `research/frontier-44-special-representation-examples-28-six-step-batch-1.cross-batch-dependencies.json` remains `[]`; all logical prerequisites of the 38 reviewed items are same-batch or published out-of-run context, with no new item or page edge. Stable item IDs and manifests are preserved, no withdrawal proposed. No original Statement or Definition was edited in this dispatch. Twelve reader item repairs are accepted; five receive contract metadata amendments. Actual owned power/root/inequality consumers were reviewed and use sound mathematical supplier claims.

Owner/Step-3b source-maintenance alert: published `def-integer-power` Definition still falsely calls the natural/negative clauses overlapping at zero (negative clause n>=1). `thm-weighted-am-gm-rational` Statement prose still denies real powers globally; the A-page `roots-and-rational-powers` repeats this and retains an unqualified supremum formula plus false limit-necessity assertion. Small corrections are fully specified in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-1-3a.md` and the locked published ledger. Exact current mathematical prerequisite proofs suffice; no substantial missing theorem, new page or algorithm is needed. Published carriers are read-only and four corresponding fatal defect rows remain deferred, so this report does not claim Step3 closure. Main supplier theorem uses by owned consumers are sound. Installed owner repairs of `lem-power-monotone`, `fs-rational-power-of-negative-base` and `rem-real-exponents-deferred` were independently reviewed and retained.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-1-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-2-3a:begin -->
Batch 2: independently checked all nine current consumer-owned cross-group rows (five finite-sum/power logical item edges, three later ordinal/cardinal orientation edges, one roots-page requirement); actual contracts and exact uses are recorded in `research/frontier-44-special-representation-examples-28-six-step-batch-2.cross-batch-dependencies.json`. Formal supplier statements unchanged. The six touched reader carriers have no outside logical consumers; the explicit rational enumeration supplies the owned algebraic example through unchanged J/z/q, and the binary diagonal uses the characteristic-function example only as sound orientation. No withdrawal proposed.

Outside published alert for Step 3b/owner: `rem-compactness-choice-ledger-metric` has obsolete library-proof absence and reverse-choice attribution prose, detailed with current raw hash and repair strategy in `research/published-consumer-supplier-ledger.md` and `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-2-3a.md`. The owned DC axiom and converse do not depend on those assertions. Keep source alert open; no outside content repaired.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-2-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-14-3a:begin -->
Batch 14 owned consumer edges are current in research/frontier-44-special-representation-examples-28-six-step-batch-14.cross-batch-dependencies.json. All external edges stay open for Step 3b. Current local abacus/core/quotient uses are sound, including normalized runner ordering, actual rim-strip removal, and the conjugate-core identity. Representation consumers remain blocked on batch-13 def-type-a-q-schur-algebra-and-weyl-modules (missing proved semistandard intersection basis/cellularity/nonzero heads) and thm-q-schur-weyl-weight-space-gram-determinant-hook-product (undefined nonregular weight maps and missing norm scalars). Exact original producer fingerprints, consumer IDs and routes are preserved in research/frontier-44-special-representation-examples-28-six-step-alpha-batch-14-3a-decisions.json. The batch-11 rim/hook-list, batch-12 Murphy, and batch-13 Jantzen historical findings were independently checked against corrected current content.

Outside direct impact: batch-48 lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected F4/1.1 still consumes the held finite-Hecke block iff and must remain held. Batch-48 lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity now has the required charge balance in F1; retain the reader historical unbalanced-beta alert for its owner, without claiming its original example refutes corrected bytes. Batch-16 def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention F7/2.1 uses only preserved finite core removal and conjugation. No outside edits, withdrawals, published repairs or impact-window closure. Stable item IDs and all existing proposed withdrawals remain present.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-14-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-18-3a:begin -->
Batch 18 FI consumers: ten current cross-batch edges are reviewed in `research/frontier-44-special-representation-examples-28-six-step-batch-18.cross-batch-dependencies.json`. Padding is currently well formed at the empty tail and rank zero. Historical reader:18:1 remains observation_basis=unbound with immutable producer fingerprints and closed row `f44-six-b18-historical-empty-padding`; Step 3b must reconcile it with producer-batch-17 repair evidence without double-counting. Direct outside consumer `thm-murnaghan-stability-for-kronecker-coefficients` was read at F1–F5 and Steps 1.1–5.1: repaired finite-generation, tensor and stability interfaces remain compatible; carrier unchanged.

Lead mechanical alerts: ledger refresh fails on batch-10 invalid consumer ownership; batch-18 input retains 100 inherited Ariki rows outside its current scope, and batch-18 coverage still lists old degenerate-Ariki pages. Preserve these IDs/evidence until lead routing disposition. Run-wide defect-ledger validation also reports 49 batch-7 enum errors; no batch-18 row fails. No withdrawal is proposed or deleted. Full evidence and local check limits are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-18-3a.md`.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-18-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-8-3a:begin -->
Batch 8 current supplier-use records are maintained in research/frontier-44-special-representation-examples-28-six-step-batch-8.cross-batch-dependencies.json. Stable IDs and both pages remain present; no withdrawal is proposed. Step 3b/owner: retain the two open arbitrary-finite-type based-module action-finiteness/supported-correction obligations on lem-quasi-r-divided-power-integrality-on-based-lattices and thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules. Do not clear them from compatible finite-dimensional highest-product consumers alone. Outside-consumer alert to batch 46: thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form F4 still types source transport as varphi(q)=q^-1; the current source-to-library map has domain Q(v) and sends v to q^-1. Current generator/color-factor conclusions remain compatible; correct that exact source-variable use in the owning batch. Detailed evidence, sources and all consumer checks are in research/frontier-44-special-representation-examples-28-six-step-alpha-batch-8-3a.md.
Read-only batch-5 metadata alert: the current local-deformation carrier declares lem-cartan-projection-constructs-the-quantum-verma-contravariant-form and thm-serre-presentation-of-a-kac-moody-algebra, but its owning manifest omits them. Synchronize in the owning batch. The prescribed refresh was blocked by an unrelated batch-10 invalid review/consumer-ownership record; no outside repair made.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-8-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-19-3a:begin -->
Batch 19 current owned consumer records are maintained in `research/frontier-44-special-representation-examples-28-six-step-batch-19.cross-batch-dependencies.json`: 38 exact batch-17/18 item and page edges, with required hypotheses and actual fact/step loci. Current padding, internal-product normalization, rational Specht extension, FI realization/tensor/stability and finite-weight interfaces were independently reviewed. The two reader-corrected definitions have only owned direct item/prose consumers; all uses remain sound. Alpha amended only the top-degree lemma induction base and B-page minimality phrase, with no Statement/Definition change or outside repair. No withdrawal is proposed. Global refresh is attempted below; unrelated input validation failures are reported in the task report.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-19-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-21-3a:begin -->
Batch21 owned exact uses are maintained in `research/frontier-44-special-representation-examples-28-six-step-batch-21.cross-batch-dependencies.json`; unrelated restored sibling rows are preserved. Open transitive uses: `lem-projective-verma-multiplicities-equal-soergel-standard-ranks` -> batch20 `lem-the-central-action-on-the-deformed-antidominant-projective` via the standard-rank/wall-crossing bridge; `thm-projective-verma-multiplicities-are-kazhdan-lusztig-values-at-one` -> batch10 `thm-hodge-riemann-for-indecomposable-soergel-bimodules` via the character theorem. Required owner decisions and immutable paths/fingerprints are in the batch21 decisions/report. No producer edits, claim withdrawals, deleted IDs or schedule changes. Statement/Definition consumers require Step3b recheck after producer repair. The published Hom omission is nonfatal and its scalar-End(M) consumer use closes immediately; content repair remains with owner.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-21-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-34-3a:begin -->
Batch 34 owned consumer edges are maintained in `research/frontier-44-special-representation-examples-28-six-step-batch-34.cross-batch-dependencies.json`: 22 exact item/page edges, current uses checked and retained open for Step 3b. All stable IDs and placements remain; no withdrawal is proposed. Seven batch-31 historical findings retain unbound observed bytes and immutable producer fingerprints in the batch-34 decisions. Producer proofs were independently reviewed and remained read-only; the nonfatal refuter gap is closed by t<=k and r=(k-t)/2>=0 in the report. Step 3b must deduplicate historical producer repair rows if producer batch 31 records the same defects.

Outside direct impact: analytification users `lem-smooth-projective-modification-preserves-open-cohomology-images`, `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`, `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations` and `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` use projective/quasiprojective inputs, which satisfy separated finite-type hypotheses. The Gauss–Manin F1 blanket smooth-scheme wording is an inflated citation and needs its owning batch to align that fact to the corrected hypotheses; actual quasiprojective inputs remain covered. Hodge–Riemann direct Gauss–Manin F7 uses only preserved positivity. Combined-package users `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`, `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations` and `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps` use preserved absolute statements; the middle supplier F1 complementary pairing is now proved explicitly in combined-package step 3.1. No outside carrier edits or indirect propagation claimed; no consumer Statement change was necessary.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-34-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-28-3a:begin -->
Batch 28 owned compact-support consumers have been reviewed in generated dependency order; all twelve risk reviews are recorded in the owning contract. Stable item IDs and both pages remain. Current manifest dependencies and source/strategy evidence are reconciled. The refuter alleged acyclicity/calculus cycle is false-positive: neither pre nor post acyclicity carrier declares the reverse edge. Direct reader-interface impact checks and exact current consumer hashes are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-28-3a.md`, “Direct consumer impact”; no interface-driven outside repair or further-hop change is needed. Step 3b alert: inspect the compact-annulus support control in `lem-analytic-six-operation-support-and-trace-calculus` step 1.5 (current raw SHA 325f334986174a05a6b86ab9f25acad07e1251f13b8f30a55ca109c77318b16f). Retain the reader-reported batch-37 action-nerve augmentation/variance alert for its owner; it is outside these assigned consumer prerequisites. Both outside carriers are read-only here. No withdrawal is proposed; the fibre item retains its pre-existing bounded-complex deferral.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-28-3a:end -->


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-32-3a:begin -->
Batch 32 Step 3a: owned consumers and required cross-batch interfaces are maintained in `research/frontier-44-special-representation-examples-28-six-step-batch-32.cross-batch-dependencies.json`, preserving older records for consumers outside the current three-item dispatch. IDs and both pages remain present; no withdrawal is proposed.

OPEN producer batch 33: `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications` must establish analytic connectedness of its irreducible smooth pieces (and the analytic frontier closure comparison). Owned consumer `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`, F8 and 7.1/8.1, needs this for algebraically constructible descent. The A-page summary inherits that open claim. Reader/refuter original routing fingerprints and dependency path are preserved in the batch-32 decisions. A reference to Gallier–Shatz Theorem 1.45 pp.66–69 alone cannot discharge the local-proof prerequisite.

Step 3b downstream alert: batch 37 `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`, F5 and steps 1.1/5.1/6.1, and `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`, 2.2, consume the still-open algebraic principal-bundle restriction. Batch 33 `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`, F5 and 6.1/7.1, uses its finite open-cover derived model; that topological model survives but global algebraic-refinement uses must be checked after supplier repair. Do not edit those outside carriers from batch 32. Batches 41 proper-descent/hypercover consumers use the general finite-diagonal model, and do not need local sections or the disputed algebraic restriction for that edge.

Accepted incidence product qualification: every direct consumer uses bounded constructible input or an explicit finite diagram; `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences` already requires nonempty connected fibre and `H0=k`. No consumer Statement/Definition needed a change, so no additional impact hop is created. Exact consumer IDs and use locations are recorded in the batch report. No published mathematical defect was found in the opened prerequisite interfaces; published carriers stay read-only.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-32-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-43-3a:begin -->
Batch 43 Step-3a: 15 current owned cross-batch reviews are in `research/frontier-44-special-representation-examples-28-six-step-batch-43.cross-batch-dependencies.json`. The original old affine-perverse input is preserved identically in `research/frontier-44-special-representation-examples-28-batch-43.cross-batch-dependencies.json`; those consumers now belong to batch 39 and are outside this dispatch. Current Stiefel/triangulation, BM, smooth-incidence, six-functor and Ext/product supplier uses were checked with exact hypotheses. The PBW, Ext and equal-color manifest edges were synchronized. Ext Statement now precisely waives only total-Ext finite-dimensionality; its outside basis-projective consumer F3/1.1 needs no change. No proposed withdrawal and no outside consumer repair is introduced. See `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-43-3a.md` for evidence and checks.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-43-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-49-3a:begin -->
Batch 49 Step 3a: rebuilt the owned consumer input `research/frontier-44-special-representation-examples-28-six-step-batch-49.cross-batch-dependencies.json` with 100 current declared edges (98 item, 2 page), replacing 14 foreign quiver reviews under current batch-50 ownership. Exact displaced identities and the mathematical use reviews are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-49-3a.md`. No Statement/Definition changed and no consumer mathematics needs repair. Outside batch-24 page-summary alert: its Arakawa–Suzuki page calls T a full projective generator, while its actual definition distinguishes detector T from generator G; route the prose correction to that owner/Step 3b. Ledger refresh remains blocked by invalid batch-10 consumer ownership; no outside input was edited. No withdrawal is proposed or deleted.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-49-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-31-3a:begin -->

Batch 31 current owned consumers and supplier uses were reviewed in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-31-3a.md`. The seven stable IDs are `def-compact-kahler-manifold-and-hodge-polarization-conventions`, `lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity`, `lem-de-rham-top-integral-is-fundamental-class-evaluation`, `lem-kahler-commutators-and-laplacian-type-preservation`, `lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds`, `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`, `ex-hodge-and-polarization-of-a-point`. Scalar-comparison F7 now uses the general smooth-form definition; its Statement is unchanged. Top integration preserves its full equality and cup consequence with explicit complexification/orientation and four reader-added suppliers synchronized in the owning manifest. Pointwise Lefschetz preserves the full conclusion under the determinant metric and valid factorial ranges. Outside consumers require no necessary correction at their actual use sites. Eleven current cross-batch item uses (batches 2 and 27) are recorded in the owned input. Preserve the three inherited cross-dependency records about the former compact-Laplace pair for Step-3b lead disposition: their consumers are outside current batch-31 ownership. No withdrawal is removed. No published defect found or published edit made.

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-31-3a:end -->

Batch-34 handoff detail: Gauss–Manin fact F1 citation wording belongs to batch 38. Batch 31 exterior manifest strategy has J scalar i^(q-p) rather than i^(p-q); its current proof is correct. Hatcher Theorem 3.26 is on printed p.236, not pp.241–243. Batch-34 dependency-ledger refresh failed on batch-10 input ownership; the 22-edge input remains ready for a lead rerun after that unrelated mechanical fix.


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-38-3a:begin -->
Batch 38 Step 3a: all seven routed touched carriers and their current owned use chain are reviewed in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-38-3a.md`. The owned cross-batch input now records 25 actual item/page consumer-use rows while preserving 20 inherited foreign logarithmic-consumer rows for engine/Step 3b ownership reconciliation. The current logarithmic supplier independently supplies the full lower-weight, compactification-image and functoriality statements used by fixed part; historical conditional notes are not used as current proof verdicts. The manifest transcribes all newly declared dependencies and 20 added page requirements; engine/Step 3b should reconcile the untouched page frontmatter requires under its ownership route. No Statement or Definition changed, no mathematical escalation remains, no published carrier is edited, and stable IDs/proposed withdrawals remain present. These records are local consumer-use evidence, not producer certification or impact-window closure.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-38-3a:end -->


## frontier-44-special-representation-examples-28-six-step — batch 12 Step 3a

Batch 12 owns the 14 `dj-bridge` carriers on `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` and its companion. Current required supplier interfaces are the generic standard basis, tableaux/partitions/inversion length, dominance/conjugation, finite free Hom, RSK count, radical nilpotence and classical integral Specht/sign-duality/Coxeter presentation. All are local or published; its current consumer-batch cross-dependency input remains `[]`. Definition/Statement amendments retain these hypotheses, and assigned consumer uses are sound. See `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-12-3a.md` for exact item decisions, source evidence and the eleven outside draft consumer checks. Step 3b must review batch-13 `ex-q-schaper-for-shape-three-two-at-e-two` Verification 1.3: fixed-first-index straightening does not alone establish the claimed preservation of canonical rows used for its divisor; compare complete Mathas Lemma 3.38 and the right-handed Proposition 3.16. No outside edit or confirmed-defect verdict is claimed. Required refresh was attempted but rejected batch-10 input for invalid review/consumer ownership; owner must resolve that mechanical blocker. Stable IDs and all proposed withdrawals elsewhere are preserved.

Batch-38 page alert: unchanged `geometric-fixed-parts-and-gauss-manin-semisimplicity-examples` Objective claims it consumes only its companion A page. Its reviewed example actually invokes `thm-complex-nth-roots-and-roots-of-unity` and `cor-geometric-unit-circle-has-fundamental-group-z`, requiring their two external pages, now transcribed in the owned manifest. With no routed page obligation, a surgical page prose/requirement correction is routed to engine/Step 3b; exact evidence is in the batch-38 report.

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-5-3a:begin -->
Batch 5: all 25 owned consumer proofs and all 30 external prerequisite interfaces reviewed in dependency order. The batch input remains [] because no owned logical supplier is in another current run manifest. Seven reader-added dependency edges on six carriers and current claim/source metadata are synchronized in the owning manifest; this resolves the batch-8 deformation-metadata alert.

Step 3b routed current draft support facts: batch 6 lem-highest-weight-tensor-maps-and-their-adjunction F1 and thm-grand-loop-existence-of-highest-weight-crystal-bases F1; batch 7 thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals F2. Replace support equality with containment; standard sl2 L(0) is the exact counterexample. Current hashes, actual use evidence and compatible outside consumer inventory are in research/frontier-44-special-representation-examples-28-six-step-alpha-batch-5-3a.md. No outside edits, published repairs or withdrawals.

Shared dependency refresh failed on unrelated batch-10 invalid review/consumer ownership. Preserve all existing records and rerun after owner/lead correction; no mechanical failure was counted as a defect.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-5-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-22-3a:begin -->
Current batch22: one page prerequisite and five item uses are independently checked in `research/frontier-44-special-representation-examples-28-six-step-batch-22.cross-batch-dependencies.json`; regular KL supplier owner is now batch21. Historical batch14 scaffold-escalation remarks and owner receipts remain unchanged. The prior 26 input rows belonging to other current consumer batches are preserved verbatim in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-22-3a.md` for Step3b rehoming; no withdrawal is deleted. Required refresh attempted and blocked by batch10 input: invalid review or consumer ownership. Route this mechanical ownership reconciliation to batch10 owner/Step3b lead; no mathematical defect row was created for it.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-22-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-10-3a:begin -->
Batch 10: current Soergel carrier/page manifests have no in-run cross-batch supplier edges. Replaced the copied 31 KLR consumer rows (all open, no withdrawal proposal) in the owned batch-10 input with the actual empty edge set. Refresh attempted and failed on batch-11 input: invalid review or consumer ownership; outside input remains read-only for its owner.

Outside direct consumers of the corrected reduction interface: thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule F4, thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules F4, prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v F3. They use origin reduction/shifts, preserved by the reader correction. Their separate comparison/support inputs remain open for Step 3b; no outside consumer proof is certified. The S(x) formula correction has only batch-10 direct item consumers, all use KL characters. The rank-one trace correction has only its B-page listing as direct consumer. The general primitive/subspace and factorization repairs retain the hypotheses used by their batch-10 consumers; their unresolved mathematical suppliers remain recorded in the batch-10 report.

Published support/Hom/positivity and two rank-two prerequisite defects are A-P in research/published-consumer-supplier-ledger.md, with exact carrier IDs, hashes, consumers and repair routes. No withdrawal is proposed; preserve all item IDs. Report/decisions: research/frontier-44-special-representation-examples-28-six-step-alpha-batch-10-3a.md and its companion decisions JSON.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-10-3a:end -->


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-40-3a:begin -->
Batch 40 current owned consumer/supplier checks are recorded in `research/frontier-44-special-representation-examples-28-six-step-batch-40.cross-batch-dependencies.json` and the named Alpha report. Inherited input rows for unrelated analytic consumers remain preserved for engine/lead ownership reconciliation; the global refresh is currently blocked first by invalid consumer ownership in batch 11. Historical batch-37 augmentation and simplex-typing findings are confirmed against exact archived bytes and resolved by independent review of the current Definition; batch-40 decisions retain producer routing.

Step-3b evidence alert: reader-40 reported a complex/real degree-drop mismatch, a freely-adjoined equivariant flag-ring claim, and unsupported elementary KLR operator formulas in batch 43. Current PBW Facts F4 says twice the complex dimension, Proof 1.1 now proves H_G(flags)=H_T(pt)=k[x_1,...,x_m], and Proof 3.2 supplies cellwise Euler localization; current KLR Facts F3/Proof 1.2-1.3 derive elementary geometry and use that PBW computation. Current hashes and focused evidence are in the Alpha report. These historical findings must be reconciled by the owning batch/Step-3b lead; no outside consumer was edited or globally certified here. No withdrawals proposed or removed.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-40-3a:end -->

## Current run batch 44 Step 3a

Alpha batch-44 reviewed the six routed projective/perverse carriers and maintained 37 current cross-batch item/page uses in `research/frontier-44-special-representation-examples-28-six-step-batch-44.cross-batch-dependencies.json`. All current consumer uses satisfy their opened supplier interfaces; no Statement or Definition changed. Preserve the 24 inherited rows naming former convolution/Ext consumers outside current batch-44 ownership for Step-3b lead disposition, including their open status and stable IDs. No proposed withdrawal was removed. The required ledger refresh exited 1 because batch-11 input has invalid review or consumer ownership; no other owner input or unified research ledger was edited by this worker. Full mathematical review, decision evidence and local checks: `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-44-3a.md`.

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-37-3a:begin -->
Batch 37 current Step 3a: all ten routed item carriers independently reviewed in generated dependency order; exact report and decisions at `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-37-3a.md` and `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-37-3a-decisions.json`. Three repairs accepted (frame cohomology gap, action-nerve definition, constant-input point example); seven general constructibility/resolution-dependent obligations remain escalated with open risk reviews. Current owned supplier edges were appended to `research/frontier-44-special-representation-examples-28-six-step-batch-37.cross-batch-dependencies.json`; inherited records for unrelated consumers are preserved. No page/item withdrawal, published edit or engine transition.

OPEN producer batch 33: `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications` must establish the analytic connectedness/frontier closure comparison for its irreducible smooth pieces. Its current SHA256 remains `f45db009c27ec039c7303c73c6ea923c0ea3284b44fe215b58c2e0c21210acf0`. Current proof, all twelve consumed interfaces, contract and manifest were opened independently; the dimension induction and holomorphic charts do not prove the global comparison. Consulted Gallier–Shatz Theorem 1.45/Lemma 1.46 pp.66–69; its substantial normalization/covering/holomorphic-extension route is absent locally. Required owner decision: provide and independently review a local proved supplier in batch 33, then reopen batch 32 Cech F8/7.1 and batch 33 conical 6.1/7.1. Existing batch-32 escalation is preserved.

Owned consumer holds: `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences` F6/4.3; `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom` F5/1.1/5.1/6.1; `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom` F2/1.2 and F3/2.2; `thm-constructible-six-functors-proper-base-change-and-verdier-duality` F3/F4/1.1–2.1; `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative` F3/F4/3.1–6.1; `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` F1/F2/1.1–3.1; `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars` F1/F2/F3. Sound local reader changes remain; no completed whole-repair confidence is asserted for these escalations. The point example independently uses only constant sheaves, metric frame gap and topological Cech descent and does not clear the generic supplier hold.

Step 3b alert to batch 45: `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` Proof 3.1, current raw SHA256 `c9b0667b41c05eba8ea617ac76365cd2f5a6a3cc2a0809e8bed02962f8ebef16`, explicitly defines its intermediate image using unshifted dense-open local system L. Replace the inputs to perverse H0(j_!L)→H0(Rj_*L) with L[dim Z]. Identity inclusion on a smooth curve gives zero for the written unshifted image but IC=L[1]. This is a confirmed outside proof defect, kept read-only here; owner must disposition a surgical correction. Its F3/F5/F9 and 1.1–5.1 also inherit the general algebraic resolution hold.

The nine outside direct interface consumers (union of immutable pre/current dependency and reference edges) are in batches 40, 43, 45 and 46; report table gives exact IDs, hashes and actual uses. The changed variance/algebraic-bundle/action/invariant-gluing interfaces need no additional consumer Statement/Definition repair. Route general inherited prerequisite holds to Step 3b and retain the batch-45 shifted-image alert. No defective published prerequisite was confirmed.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-37-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-23-3a:begin -->
Batch23 owns the current parabolic-O/Fock consumers, with 90 scoped dependency records in research/frontier-44-special-representation-examples-28-six-step-batch-23.cross-batch-dependencies.json. Report research/frontier-44-special-representation-examples-28-six-step-alpha-batch-23-3a.md preserves the 31 inherited old symmetric-group consumer identities for lead routing, records direct root-prefix and f/e-sign consumer checks (no forced defining-interface repair), and lists exact open impact paths to batches24/49. The linkage/KL signed-wedge bridge and full-tensor upper-crystal label prerequisite remain open; nine owned risk reviews remain open. Batch20 degree-parenthetical and batch22 manifest-dependency synchronization alerts are outside edit scope. Stable item IDs and all content remain present; no withdrawal or publication was made.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-23-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-39-3a:begin -->
Batch 39 independently reviewed all eight owned current carriers and the routed batch-32 incidence supplier. Actual required consumer claims and hypotheses are recorded in `research/frontier-44-special-representation-examples-28-six-step-batch-39.cross-batch-dependencies.json` (24 item edges, two page prerequisites). Its 22 misplaced batch-34 rows were removed from this input only after confirming every stable row key remains in the batch-34 owner input; no other owner file was edited. The connected acyclic interval/disk incidence applications meet the restored H0 augmentation condition. Historical `reader:39:1` is confirmed fatal against the exact recovered pre-reader bytes and shares closed producer row `f44-six-step-3a-batch32-inc-cone-h0`; the current producer proof is sound for this use. No original owned Statement/Definition changed; no outside consumer mathematical repair or withdrawal is proposed.

Lead mechanical alert: required refresh `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28-six-step` fails on `frontier-44-special-representation-examples-28-six-step-batch-11.cross-batch-dependencies.json: invalid review or consumer ownership`. Batch 11 is outside this dispatch and was left untouched; lead should reconcile that input before the shared ledger can refresh. This is a mechanical blocker, not a mathematical defect-ledger row. Complete review evidence, verdicts and local checks are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-39-3a.md`.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-39-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-41-3a:begin -->
Batch 41 owned edges are reconciled to the current proper-descent inventory in `research/frontier-44-special-representation-examples-28-six-step-batch-41.cross-batch-dependencies.json`; stale equivariant consumers are homed elsewhere and their carriers were not changed. Current actual uses: proper-surjection and hypercover results consume the batch-32 general coinduced finite-diagonal derived model, batch-39 ordinary proper base change/exact pullback/right-derived composition, and batch-32/33 constructible/analytic conventions. The open batch-32 algebraic-refinement escalation is preserved and is not consumed for the topological total-model clause. No withdrawal is proposed; all stable IDs remain.

Step 3b alert: `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`, F2 at line 68, attributes the hypercover theorem to arbitrary bounded-below constructible F; the actual supplier states F in D_c^b. Its actual steps 1.1/3.1/3.2 use the bounded constant rational coefficient, so no downstream Statement change is needed. Its owning batch should surgically align F2 and the corresponding contract/manifest citation. The outside carrier was read-only. Direct nodal-curve and owned truncation consumers use preserved proper matching covers, constant coefficients or bounded F, and the same finite-limit coskeleton convention.

Historical incidence findings reader:41:2–4 reuse closed producer rows (star-basis, convex-stars, cone-h0) with explicit same_defect_as links to the batch-32 touched obligation; do not count them twice. Reader:41:7 is nonfatal historical citation prose with correct trailing tags; unbound intermediate bytes and owner-directed historical disposition remain explicit in the decisions.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-41-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-4-3a:begin -->
Batch 4 Step 3a reviewed all 15 owned item cross-batch uses against current supplier statements/proofs and records them, with exact current raw hashes, in research/frontier-44-special-representation-examples-28-six-step-batch-4.cross-batch-dependencies.json. Its two induced page edges remain open for the Step 3b lead. Reconciled the owner-repaired def-cardinal -> thm-burali-forti and fs-ordinals-form-a-set -> thm-hartogs/def-cardinal declarations in the owning manifest (fs level 7). Stable IDs and all proposed withdrawals remain present. No outside carrier repair, group adjudication, impact-window closure or engine acceptance is claimed. Full evidence is research/frontier-44-special-representation-examples-28-six-step-alpha-batch-4-3a.md.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-4-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-36-3a:begin -->
Batch 36 reviewed its current routed consumers in dependency order. The owned input research/frontier-44-special-representation-examples-28-six-step-batch-36.cross-batch-dependencies.json contains 42 current edges with exact supplier interfaces and consumer loci; stale foreign-consumer rows were reconciled. Stable item and page IDs remain, with no withdrawal. The Definition correction to fibrewise softness leaves all five owned direct consumers and the outside point-operation forward-reference example sound; no outside mathematical repair is required.

Step 3b bookkeeping alert: shared refresh failed on batch-11.cross-batch-dependencies.json (invalid review or consumer ownership). The whole-run defect ledger has 87 foreign-row schema errors, including batch 7 role/location and batch 24 disposition/location values. Batch 36 has 14 exact decisions, 26 closed and locally validated defect rows, eleven complete risk reviews and passing scoped checks. The lead and respective owners must repair their own inputs before the engine closes the shared checks. See research/frontier-44-special-representation-examples-28-six-step-alpha-batch-36-3a.md for evidence and limitations.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-36-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-20-3a:begin -->
Batch 20 current seven cross-batch item/page obligations are maintained in `research/frontier-44-special-representation-examples-28-six-step-batch-20.cross-batch-dependencies.json`. The three origin-reduction/shift interfaces are sound; rational/real character comparison and normalized-duality prerequisites remain open with batch 10. Exact producer/consumer paths and immutable fingerprints are preserved in the batch-20 decisions. Owned nilcone, lifting, central order and deformed polynomial Hom/rank branches remain escalated, including the current Endomorphismensatz scalar slip. All 21 original reader/refuter findings and stable item IDs remain present; no completed repair or closure is claimed for them. The 21 inherited Hecke/Specht rows are preserved verbatim in the task-named report for rehoming. The three outside direct consumers of changed interfaces were checked at their actual uses and routed for outstanding supplier blockers, without outside edits. No published carrier or proposed withdrawal was removed.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-20-3a:end -->

<!-- frontier-44-six-b46-3a -->
Batch 46 Step-3a KLR consumer evidence: research/frontier-44-special-representation-examples-28-six-step-alpha-batch-46-3a.md. The current batch-46 cross-batch file contains 69 actual KLR supplier edges added here, with exact owned consumers and independently checked current Statement/Definition uses. Preserve its 25 inherited Hodge-theory rows pending Step-3b ownership disposition; they do not belong to current batch 46. The reader's 92 outside transitive consumer trace remains a Step-3b interface obligation, not a completed whole-proof review. All twenty item IDs and both pages remain. No withdrawal is proposed or deleted. Batch-8's source-variable alert was repaired in form-comparison F4 (Q(v)->Q(q), v->q^-1). The counterexample uses the exact simply-laced witness and B-page summaries were repaired. No published defect was identified; published content remained read-only.

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-33-3a:begin -->
Batch 33 reviewed its 25 current in-run item/page edges in `research/frontier-44-special-representation-examples-28-six-step-batch-33.cross-batch-dependencies.json`. The mandatory refresh is blocked by the unrelated batch-11 input ownership error; owning writer/engine must resolve it.

OPEN owned prerequisites: `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications` needs a locally proved analytic-connectedness and frontier comparison; its irreducible smooth algebraic pieces and charts do not supply the connected analytic strata required by definition. `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`, step 1.1, and `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`, steps 5.1-7.1, actually consume this held refinement. The conditional local conical theorem starts with a GIVEN Whitney stratification and does not establish new strata. Preserve all prior escalations and any proposed withdrawals for Step 3b.

Batch-32 incidence historical reader:33:1/2 findings remain confirmed, tied to exact archive/raw pre-reader bytes and reused closed producer rows. Current incidence proof and actual finite-model prerequisites independently reviewed. Batch-33 Cech use is plain finite-open-cover topological descent, not its held algebraic GL-bundle restriction. Batch-32 Cech F8/7.1 and downstream batch-37 algebraic constructibility remain routed to their owners after local comparison closure. The relative-tube lemma itself promises irreducible pieces only; do not inflate it into the missing connectedness comparison. No item or page was withdrawn or edited by batch-33 Alpha.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-33-3a:end -->

Batch-46 local-check lead alerts: scoped depcheck still reports inherited page cycles foundations-of-the-real-numbers -> construction-of-r-via-cauchy-sequences -> construction-of-r-via-dedekind-cuts -> foundations-of-the-real-numbers and analytic-derived-six-operations-and-duality -> complex-algebraic-stratified-topology -> constructible-incidence-and-cochain-models -> analytic-derived-six-operations-and-duality. Untouched/unflagged def-klr-induction-and-restriction-bimodules has a missing deps declaration for its linked thm-graded-bimodule-tensor-hom-adjunction; local tensor construction remains sound. These stayed outside the routed edits and require lead disposition. The task-named report records exit codes honestly; no whole-run gate closure is claimed.


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-48-3a:begin -->
Batch 48 current owned consumers: 54 deduplicated current prerequisite edges
are recorded in `research/frontier-44-special-representation-examples-28-six-step-batch-48.cross-batch-dependencies.json`.
Four uses remain open: the batch-47 page prerequisite and the regular-Hom
consumer's projectivity, categorical-commutator and normalized-action inputs.
Producer findings retain their immutable pre-reader and routing fingerprints
in the task-named batch-48 decisions; producer carriers stayed read-only.

Step 3b/owner alerts: batch 47 must supply the cyclotomic P/Q ideal-transfer
identities and compatible comparison square/recurrence/counit coefficients.
Batch 48 still requires explicit Hecke/KLR normalizations and all colour
relations, the restricted-profile trace perfectness calculation, the
coloured-cycle center lifts and the signed off-support marked-strip identity.
Exact affected carriers, attempted closure, sources and owner decisions are in
`research/frontier-44-special-representation-examples-28-six-step-alpha-batch-48-3a.md`.
The Schur map-carrier Statement was corrected to endomorphisms of M, hence
basis elements of C_n. Its four direct consumers use that exact intended
interface; their body Statements/Definitions need no change. No outside
mathematical consumer repair is requested for that qualification.

The owned input previously held 37 stale perverse-sheaf edges and no proposed
withdrawal. Replaced those misassigned routing rows with current owned edges;
no perverse content was edited, deleted or withdrawn. All batch-48 stable IDs
and promised pages remain present; no withdrawal is proposed.
Required native refresh failed with an invalid consumer-ownership review in
`research/frontier-44-special-representation-examples-28-six-step-batch-11.cross-batch-dependencies.json`.
Batch 11/lead must reconcile that outside input and rerun refresh; batch 48
has not changed it or claimed a successful global merge. This mechanical
failure created no defect row.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-48-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-13-3a:begin -->
Batch 13 reviewed all routed carriers in dependency order; exact evidence and 42 decisions are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-13-3a.md` and its decisions JSON. Actual owned draft-supplier/page edges are now recorded in the batch-13 cross-batch input. The q-Schur semistandard construction, general finite-e row divisor and cross-weight semistandard norm remain owner escalations. The concrete (3,2)/(3,1,1) zero forms were repaired by finite row/Garnir identities; this does not close the general divisor or Weyl norm. Stable IDs and proposed holds/withdrawals are retained. No Statement/Definition/Example claim changed in this adjudicator's two item edits. Existing foreign batch-20 category-O rows in this input were preserved for owner relocation. Refresh failed on batch-11 invalid review/consumer ownership; no successful unified refresh is claimed. Historical reader:13:8 and reader:14:4 share one closed producer-gap row, with different unbound observation locators; owner/engine must reconcile any exact sharing guard. Published carriers remained read-only and no new published defect was established.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-13-3a:end -->


<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-47-3a:begin -->
Batch 47 has 114 current consumer-owned edges in `research/frontier-44-special-representation-examples-28-six-step-batch-47.cross-batch-dependencies.json`. Canonical extraction retains open interfaces for the left/right string orientation, signed-only star preservation, and the integrable-module-only tensor rule. Historical geometry rows formerly in this input belong to current batch 43; their 12 exact rows are preserved in the batch-47 report for owner merging/disposition. Global refresh is blocked by batch 11 invalid consumer ownership; no outside input or unified ledger was hand-edited. The jump Statement consumers (canonical extraction and simple/projective crystal comparison) and the word-projective refutation consumer (owned B-page) were checked; no necessary outside Statement repair arose. All stable item IDs and proposed withdrawals/rebuilds remain present.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-47-3a:end -->

<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-50-3a:begin -->
Batch 50 Step 3a: all current owned consumer item/page edges are recorded in `research/frontier-44-special-representation-examples-28-six-step-batch-50.cross-batch-dependencies.json`; the general homogeneous trace/relative-cap edges remain open under existing defect `f44-six-b47-symmetry-adjunction-premise`. Exact use checks and scope limits are in `research/frontier-44-special-representation-examples-28-six-step-alpha-batch-50-3a.md`. Current jump/extraction and adapted FIRST/RIGHT arguments were read where needed; this batch does not overwrite producer-owned native escalation history.

Step 3b metadata alerts: batch 9 Fock-node theorem manifest omits its current wedge-basis and Hopf deps; batch 48 grading-corollary manifest retains the former universal nontrivial title. Historical reader findings reuse the existing closed producer physical rows and retain unbound observation limits. The assigned A-page now places all four generic local/support/tower helpers in its authoritative anchor order and matches its manifested Arakawa–Suzuki prerequisite. Stable IDs and all proposed withdrawals remain present; no withdrawal is proposed or deleted here.
<!-- frontier-44-special-representation-examples-28-six-step-alpha-batch-50-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-1-3a:begin -->
Batch 1 Step 3a: the owned cross-batch input is `[]`; all reviewed consumer suppliers are within batch 1 or published prerequisite context. The kernel reader change and manifest reconciliation affect source metadata only, preserving every Definition and dependency interface. The factorization theorem and both Bernoulli consumers use the current local definitions with their hypotheses satisfied; no affected outside consumer or published defect was identified. Three CRITICAL risk reviews are complete in the owning contract. Stable IDs are retained and no withdrawal is proposed. Evidence and the single routed decision: `research/mathematical-statistics-foundations-37-alpha-batch-1-3a.md` and its companion decisions JSON.
<!-- mathematical-statistics-foundations-37-alpha-batch-1-3a:end -->

<!-- msf37-alpha-batch21-3a:begin -->
Run mathematical-statistics-foundations-37, batch 21: independently reviewed the current routed delta-method, continuity counterexample, sample-variance and Z-estimator arguments and actual direct suppliers. Owned cross-batch inputs retain exact stochastic-order, Slutsky and estimator-interface uses, including the current measurable-composite condition. No missing supplier or interface change; sample-variance repair qualifies an erroneous external-source final display only. No withdrawal proposed. Evidence: research/mathematical-statistics-foundations-37-alpha-batch-21-3a.md.
<!-- msf37-alpha-batch21-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-2-3a:begin -->
Batch 2 Step 3a: the current `def-statistical-experiment` supplies the measurable data space and each probability law used by the procedure, action-law lemma, statistic/test definitions and three examples/counterexamples. The current `def-estimand-on-a-statistical-model` supplies the function psi:Theta->Y used by the estimator definition; the consumer adds a target sigma-algebra and claims no parameter measurability. These eight owned item-consumer uses were independently read against the actual definitions. The action-law proof and three high-risk examples are sound; its single nonfatal contract step-reference error is repaired, with exact evidence in `research/mathematical-statistics-foundations-37-alpha-batch-2-3a.md` and its decisions file. No Statement/Definition changed, no outside consumer repair is required, and no withdrawal is proposed. Existing page-only cross-batch requirements remain in their own scope; no whole outside-page audit is claimed.
<!-- mathematical-statistics-foundations-37-alpha-batch-2-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-10-3a:begin -->
Batch 10 Step 3a: preserve the four owned cross-batch records and their open reconciliation status in research/mathematical-statistics-foundations-37-batch-10.cross-batch-dependencies.json. The normal-mean and Gaussian regression theorem consumers use the current batch-2 def-statistic-and-estimator only for measurable Borel data maps; both uses satisfy the exact Definition. The A-page estimator prerequisite records that interface, and its supplemental product-measures prerequisite supports the density proof through the current product-law/Tonelli statements. No supplier interface changed, no necessary consumer repair or missing prerequisite was found, and no outside batch acceptance is asserted. All stable IDs and proposed withdrawals elsewhere remain present. Eight risk reviews and the touched witness audit-enrichment decision are recorded in research/mathematical-statistics-foundations-37-alpha-batch-10-3a.md and its decisions JSON.
<!-- mathematical-statistics-foundations-37-alpha-batch-10-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-4-3a:begin -->
Batch 4 independently checked its three current cross-batch uses: page dominated-experiments-likelihood-and-sufficiency -> statistical-experiments-models-and-identifiability; def-dominated-statistical-experiment -> def-statistical-experiment; ex-bernoulli-likelihood-ratio-and-change-of-measure -> def-statistical-experiment. The supplier provides a common measurable sample space, parameter labels and probability laws without parameter measurability; the supplied sigma-finite dominator and explicit two-point example satisfy this interface. Supplier current raw SHA256: cabfd72e24a31076ea1387db98c7fc2251917d8558c98d108d12dbdd235e838b. Existing records in research/mathematical-statistics-foundations-37-batch-4.cross-batch-dependencies.json remain valid. No Statement/Definition changed, outside consumer repair or withdrawal is proposed, and no existing proposed withdrawal is removed. Evidence and local checks: research/mathematical-statistics-foundations-37-alpha-batch-4-3a.md.
<!-- mathematical-statistics-foundations-37-alpha-batch-4-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-25-3a:begin -->
Batch 25 reviewed and refreshed all seven owned cross-batch records: both A-page prerequisite interfaces, the density-target definition uses of experiment/model/estimand/statistic, and the fixed-point KDE lemma use of statistic/estimator. The current supplier definitions supply exactly the finite Borel data and real target-space interfaces used; selected-version point evaluation is explicitly not assumed identifiable. No Statement/Definition changed, outside consumer repair or withdrawal is required, and published carriers remain read-only. Exact evidence and all eleven decisions are in research/mathematical-statistics-foundations-37-alpha-batch-25-3a.md and its companion decisions JSON.
<!-- mathematical-statistics-foundations-37-alpha-batch-25-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-26-3a:begin -->

Batch 26 current consumer review: `def-nadaraya-watson-estimator` and `def-local-polynomial-estimator` use `def-statistic-and-estimator` only for the Borel data-map and same-target experiment/estimand interface; both actual Definitions now supply that interface and exhaustive fallback branches. `def-pointwise-regression-risk` uses the same statistic supplier and `def-loss-function-and-risk` for a nonnegative squared-loss integral, allowing infinity; actual current Definitions were opened and are compatible. The A page requires `nonparametric-density-estimation-and-kernels` for finite-valued Borel normalized kernel conventions (batch 26 specializes to nonnegative symmetric kernels with explicit moments) and `losses-risk-and-decision-rules` for this risk interface. Existing batch-owned input `research/mathematical-statistics-foundations-37-batch-26.cross-batch-dependencies.json` retains all seven rows; no new cross-batch dependency or removed use is needed. Five newly explicit conditional-integration item/manifest edges target a published supplier rather than an in-run batch. All actual uses of the two clarified estimator definitions lie in batch 26 and were checked without further claim changes. No outside repair or withdrawal is proposed. Evidence and exact dispositions: `research/mathematical-statistics-foundations-37-alpha-batch-26-3a.md` and its decisions file.

<!-- mathematical-statistics-foundations-37-alpha-batch-26-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-28-3a:begin -->
Batch 28 owned consumers retain all twelve stable IDs and their current dependency interfaces. The ten HIGH/CRITICAL reviews are complete in the owning proof contract; evidence and source locators are in `research/mathematical-statistics-foundations-37-alpha-batch-28-3a.md`. Common-dominated DQM uses the current batch-4 AC density convention; real mean-zero Hilbert and closed-span uses retain Countable Choice. Published suppliers remain read-only. No statement or definition changed, no affected outside consumer or unresolved dependency defect was identified, and no withdrawal is proposed. The scope owes zero decisions.
<!-- mathematical-statistics-foundations-37-alpha-batch-28-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-8-3a:begin -->
Batch 8 independently reviewed the exact current supplier interfaces for its owned consumers: statistical experiment labels/laws, measurable statistics, pointwise binary probability kernels and rejection convention, action-section risk, and common sigma-finite domination with finite nonnegative RN representatives. The unchanged density representative supplier proof was also checked. Existing batch-8.cross-batch-dependencies.json records remain compatible. Reader corrections change no Statement or Definition. Three stale title/dependency mirrors were synchronized in the owning batch manifest, and exact citation contracts were corrected to actual source text. No outside consumer repair, published defect, or withdrawal is proposed; existing withdrawals elsewhere remain untouched. Evidence: research/mathematical-statistics-foundations-37-alpha-batch-8-3a.md.
<!-- mathematical-statistics-foundations-37-alpha-batch-8-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-30-3a:begin -->
Batch 30 Step-3a: current owned consumers and exact supplier interfaces are independently reviewed in `research/mathematical-statistics-foundations-37-batch-30.cross-batch-dependencies.json` (alpha_review fields). One-sided DQM, normalized mean-one LAN proxies, common target-centered regularity, L2 derivative representation and explicit AC/Countable Choice conventions agree with current uses. The historical removed convolution candidate and prior owner resolutions remain present. The added continuous-mapping dependency is published context; no new in-run supplier edge is introduced. No withdrawal or outside mathematical repair is proposed. See `research/mathematical-statistics-foundations-37-alpha-batch-30-3a.md` for the local citation/markup repairs and checks.
<!-- mathematical-statistics-foundations-37-alpha-batch-30-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-11-3a:begin -->
Batch11 Step3a: owned experiment consumers satisfy the actual common measurable-space/probability-law interface; uniform/discrete examples require no parameter sigma-field. The t interval consumes the current batch10 normal-mean/residual theorem and t-CDF lemma under AC, n>=2, positive variance and a common full-measure D_n. Both current complete supplier proofs were independently read; the exact pivot and quantile uses are sound. The binomial inversion uses the batch8 singleton-null size interface, nonempty alternative and strict lower-tail rejection. The known-normal example's increasing-event tail calculation satisfies continuity-from-below. Published def-orthogonal-projection and cor-continuous-functions-are-borel-measurable have confirmed nonfatal prose findings, recorded A-P for owner maintenance; their exact mathematical uses remain sound. Reader completeness-dependency repair is accepted, manifest mirrored, contract iff evidence anchored; no Statement/Definition change or outside consumer repair. Two USC slide8 PDF locators corrected to p.10. Stable IDs and existing proposed withdrawals retained; no new withdrawal. Evidence: research/mathematical-statistics-foundations-37-alpha-batch-11-3a.md and companion decisions.
<!-- mathematical-statistics-foundations-37-alpha-batch-11-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-22-3a:begin -->
Run mathematical-statistics-foundations-37, batch22: all owned consumer uses in research/mathematical-statistics-foundations-37-batch-22.cross-batch-dependencies.json were reviewed against the actual used supplier statements. Parametric/dominated/QMD and pointwise-score interfaces remain distinct; stochastic-order/Slutsky, centered iid CLT and Gaussian/chi-square conventions match the proofs with explicit AC. MLE exactness and consistency are assumed; no M/Z ULLN or Z-estimator result is imported. Reader global-maximizer clarification has exactly three item consumers: thm-wald-score-likelihood-ratio-asymptotic-chi-square, ex-normal-mean-exact-likelihood-calibration and cex-boundary-null-has-nonstandard-lr-limit; each uses global full/null maximizers and needs no interface repair. No proposed withdrawal or missing prerequisite is introduced. The boundary item Facts F2 citation was locally corrected without changing its Statement/deps. Report research/mathematical-statistics-foundations-37-alpha-batch-22-3a.md records an owner alert for the unrouted examples-page sentence conflating MLE and statistics, with explicit numerical witness and proposed wording. Page remains unchanged pending owner routing.
<!-- mathematical-statistics-foundations-37-alpha-batch-22-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-23-3a:begin -->
Batch 23 reviewed current QMD, likelihood-density, loss-risk, Bayes-risk and vector-Slutsky interfaces in its 18 cross-batch records. The QMD density family is supplied; its omission of a selected-likelihood-density edge is not a missing prerequisite. Owned consumers use exactly L2 QMD, finite randomized risks and finite-vector convergence; no mutual absolute continuity or uncountable uniform LAN is inferred. Only citation/proof-justification repairs were made; no Statement/Definition changed, so no consumer interface repair is required. No withdrawal was proposed or removed. Supplementary nonfatal source-locator defects are closed in the canonical defect ledger and recorded in research/mathematical-statistics-foundations-37-alpha-batch-23-3a.md for engine routing.
<!-- mathematical-statistics-foundations-37-alpha-batch-23-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-19-3a:begin -->
Batch 19 Alpha current owned-consumer review: exact interface inventory remains in `research/mathematical-statistics-foundations-37-batch-19.cross-batch-dependencies.json`. Independently checked the scalar/vector MGF and finite-tail suppliers for `lem-fixed-design-subgaussian-score-concentration`, both product lemmas, both covariance concentration theorems and `lem-directional-tail-implies-subgaussian-mgf`; net cardinality/control suppliers for `thm-centered-subgaussian-sample-covariance-bound`; directional KL, finite-product KL, full-matrix metric measurability, deterministic kernel and Fano interfaces for `lem-diagonal-covariance-minimax-lower-bound` and `lem-gaussian-kullback-leibler-covariance-formula`. Gaussian and Lebesgue substitution uses retain AC and its Countable Choice consequence. Page-only symmetrization context is not asserted as a proof supplier. Current actual uses support the reviewed claims. Alpha amended the score fact to explicitly include zero proxy and corrected a floor comparison in the local sparse-mixture proof; neither changes a Statement/Definition, dependency, ID or approved claim. No affected outside repair or withdrawal. Full evidence and local checks: `research/mathematical-statistics-foundations-37-alpha-batch-19-3a.md`. This is scoped interface evidence, not independent supplier certification.
<!-- mathematical-statistics-foundations-37-alpha-batch-19-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-9-3a:begin -->
Run mathematical-statistics-foundations-37, batch 9: independently reviewed owned MLR/UMP consumers against current experiment, statistic, sigma-finite domination, likelihood-density, randomized-test and test-size suppliers. AC selects finite density versions and implies countable choice for normal/Lebesgue uses; pairwise exceptional sets suffice. The actual randomized-test supplier specifies pointwise binary probability kernels, and all four reader-repaired consumers now construct their kernels explicitly. Current cross-batch item records carry alpha_review evidence preserving earlier records. Karlin-Rubin and normal-nonexistence reader Statement clarifications have only the binomial and normal examples as direct item/reference consumers; both actual uses remain sound. Local uniqueness repair changes only two proof conclusions to P0-almost-sure equality and preserves the theorem Statement. Four stale manifest claim/dependency mirrors synchronized. No outside consumer repair or published defect found; no withdrawal proposed or deleted. Evidence: research/mathematical-statistics-foundations-37-alpha-batch-9-3a.md and companion decisions.
<!-- mathematical-statistics-foundations-37-alpha-batch-9-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-6-3a:begin -->
Batch 6 owned consumer interfaces reviewed independently in dependency order: thm-rao-blackwell uses the common-kernel Definition of def-sufficient-statistic and the complete kernel-integration proof of lem-procedure-action-law-is-measurable; thm-lehmann-scheffe uses the all-parameter integrability condition of def-complete-statistic; ex-rao-blackwell-bernoulli-observation constructs a common finite kernel including endpoint supported fibers. All uses of def-statistic-and-estimator and def-randomized-procedure-as-a-markov-kernel have correct measurable domains/targets and pointwise kernel sections. AC is retained. Published covariance/variance scope and binomial linearity/locator findings are recorded in research/published-consumer-supplier-ledger.md; owned examples use bounded finite-space or Bernoulli-only portions valid independently of those general-scope defects. Reader Example clarification has no direct item/reference consumers, only its assigned B page whose actual summary remains valid. Four stale manifest mirrors synchronized. All seven required risk reviews complete. Historical touched-item disposition remains pending owner authorization/recoverable complete pre-reader bytes; current mathematics is sound. No withdrawal proposed or deleted. Evidence research/mathematical-statistics-foundations-37-alpha-batch-6-3a.md and companion decisions.

Independent native continuation: explicit owner current-content authorization resolves the four touched historical-comparison blockers, preserving unknown byte deltas and archived escalations. All current owned uses independently reviewed; common RCD and all-parameter completeness interfaces remain valid. Four published findings retain original severity and now have actual owner repairs plus independent current-source/prerequisite review and fixed ledger rows. ex-binomial-sample-proportion supplies common bounded coordinates; ex-biased-estimator-lower-mse uses the unchanged Bernoulli subclaim. No withdrawal removed, no outside source edited, no supplier certification claimed. Evidence research/mathematical-statistics-foundations-37-alpha-batch-6-3a.md and companion eight decisions.
<!-- mathematical-statistics-foundations-37-alpha-batch-6-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-32-3a:begin -->
Batch 32 independently reviewed owned actual uses of batch-31 `def-gross-error-path` in the functional definition, M-location theorem, median theorem and counterexample: one common-space probability mixture and fixed nonnegative right contamination direction only. Batch-29 `def-pathwise-differentiable-functional` and `def-asymptotically-linear-estimator-and-influence-function` are terminology context in the functional definition; their score/estimator notions are not identified with pointwise gross-error derivatives, and their Riesz/choice conclusions are not imported. The present current-content review found no supplier defect or affected outside consumer. Existing cross-batch construction/history records are preserved; stable IDs and proposed withdrawals are unchanged (none proposed here). Six required risk reviews are complete. Evidence: `research/mathematical-statistics-foundations-37-alpha-batch-32-3a.md`.
<!-- mathematical-statistics-foundations-37-alpha-batch-32-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-31-3a:begin -->

Batch 31 Step-3a review: `research/mathematical-statistics-foundations-37-alpha-batch-31-3a.md`. Owned consumers `def-contamination-robust-risk`, `def-contamination-modulus`, and `thm-huber-contamination-modulus-lower-bound` use the actual `def-loss-function-and-risk` target-first interface and measurable action sections; their current uses are sound. `def-huber-contamination-model`, `def-adversarial-sample-replacement`, `def-contamination-modulus`, `def-contamination-robust-risk`, and `ex-bounded-sample-mean-under-replacement` use the actual `def-statistical-experiment` measurable sample-space/family interface without parameter measurability. The equal-mixture lemma uses the batch-4 nonnegative RN representative supplier with finite domination, absolute continuity and explicit AC. Current supplier interfaces and the RN proof were independently read. The common-law supplier and finite-product interface support the level-5 theorem. The mean example's finite-expectation inference was repaired locally by explicit atomic restriction; its Statement/Definition and deps did not change, so no consumer propagation is required. All stable IDs and historical records are retained; no withdrawal or published correction is proposed. Current cross-batch inventory remains `research/mathematical-statistics-foundations-37-batch-31.cross-batch-dependencies.json`.

<!-- mathematical-statistics-foundations-37-alpha-batch-31-3a:end -->

## mathematical-statistics-foundations-37 — Step 3a batch 12

Owned consumer edges remain in `research/mathematical-statistics-foundations-37-batch-12.cross-batch-dependencies.json`. Independently checked `thm-conditioning-on-a-nuisance-sufficient-statistic` → batch-5 `def-sufficient-statistic`: the supplied common probability kernel and standard-Borel premises support Proof 1.1–2.1 without AC. Batch-5 owner alert: normalize its definition precheck from pending to n/a and synchronize its manifest factor-through dependency; no supplier edit or completed repair is claimed. Independently checked the batch-8 `def-test-size-and-power` uses by `def-conditional-test-given-statistic`, `thm-conditional-test-controls-unconditional-level`, and `ex-fishers-exact-test-from-two-binomial-samples`: measurable bounded test functions, nonempty disjoint hypotheses, per-law conditional versions and null-supremum size agree. The Fisher equality null includes endpoints p=0,1. All stable IDs and prior proposed withdrawals are retained. See `research/mathematical-statistics-foundations-37-alpha-batch-12-3a.md` and its seven decisions.

<!-- mathematical-statistics-foundations-37-alpha-batch-13-3a:begin -->
Batch 13: independently reviewed all twelve owned consumers and their actual direct supplier interfaces in dependency order. Experiment/model/estimand/observational-equivalence/identifiability uses remain valid; existing cross-batch records and stable IDs are preserved. Reader Borel-target/pointwise-event clarifications invalidate no actual outside consumer use. The two owned concrete-metric citations now use proved lem-real-line-is-a-metric-space; no Statement/Definition changed in this adjudication. All ten risk reviews and the nine routed decisions are in research/mathematical-statistics-foundations-37-alpha-batch-13-3a.md and its decisions JSON. Owner routing is still required for the additional risk-review discovery in ex-nonidentifiable-targets-preclude-consistency F10 (closed defect mathematical-statistics-foundations-37-3a-batch-13-example-usual-metric-citation): the immutable dispatch gives this repaired carrier no owed touched/finding decision. No published defect, outside edit or withdrawal established.
<!-- mathematical-statistics-foundations-37-alpha-batch-13-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-15-3a:begin -->
Batch 15 Step-3a: owned consumers and exact interfaces remain in research/mathematical-statistics-foundations-37-batch-15.cross-batch-dependencies.json. Concentration and asymptotic-convergence pages are page context only; the assigned proofs import no item from batches 14 or 13. Independently checked the local Hoeffding -> finite-class deviation, real-power -> L-r metrics, grid/set-entropy/VC-subgraph -> function entropy, and product-law/Jensen/Tonelli -> symmetrization interfaces. The actual uses preserve unit range, finite independence, finite positive envelope norm, V-1 dimension, finite r, closed-ball/strict-packing conventions and specified countable-subclass measurability. Countable Choice is explicit only in the nonmeasurable-supremum witness; the finite-grid entropy route uses finite choice only. Alpha changed no Statement/Definition; the one new item edit clarifies the finite-class unit-range title. Reader-added dependencies and corrected titles are synchronized in the owned manifest; all stable IDs and proposed-withdrawal records remain. No outside consumer repair or published defect was established. Report and six decisions: research/mathematical-statistics-foundations-37-alpha-batch-15-3a.md and its decisions JSON. This records scoped supplier-use review, not whole-supplier publication certification.
<!-- mathematical-statistics-foundations-37-alpha-batch-15-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-36-3a:begin -->
Batch 36 reviewed its routed carriers and all HIGH/CRITICAL consumers in dependency order. The current batch-36.cross-batch-dependencies.json is []; all logical in-run suppliers are local. Six source-identity repairs change no Statement, Definition, proof, dependencies or manifest interface. The reader’s least-cutoff repair is accepted with exact frozen post source hash; the example is not a logical supplier. No outside consumer repair, published defect or withdrawal is proposed. The local Parseval, independent-inner-product, covariance, Gaussian and finite-dependent CLT suppliers support the main Hilbert sample-sum CLT and its examples. See research/mathematical-statistics-foundations-37-alpha-batch-36-3a.md and sibling decisions.
<!-- mathematical-statistics-foundations-37-alpha-batch-36-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-18-3a:begin -->
Batch 18 actual supplier uses reviewed in generated dependency order. Projection risk and finite support-selection consumers use unique orthogonal components and linear/contractive projections, including rank zero. BIC and sparse upper bounds use the current centered all-directions sub-Gaussian proxy and fixed-subspace tail; their noise coordinates need not be independent. Binomial indices are natural k or 2s<=d; both direct consumers checked. Gaussian lower bound uses independent-coordinate product KL, separated sparse packing and vector Fano, with scalar T_1 in the two-point branch. Outside-owner/batch-17 citation alert: lem-gaussian-location-kl-formula F6/step1.2 needs thm-natural-logarithm-laws; formula independently reviewed and correct, closed nonfatal-recorded defect msf37-b18-3a-gaussian-kl-log-citation retains pending maintenance. Published projection grammar historically confirmed and owner current correction independently reviewed; no consumer change. Matching-rate corollary transfers fitted loss exactly via X=sqrt(n)I and Z=Y/sqrt(n), under AC. No new withdrawal or consumer Statement/Definition change. Existing construction records preserved. Report: research/mathematical-statistics-foundations-37-alpha-batch-18-3a.md.
<!-- mathematical-statistics-foundations-37-alpha-batch-18-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-16-3a:begin -->
Batch 16 independently reviewed the current empirical-process, covering/bracketing, sub-Gaussian, Bernstein and finite-dimensional asymptotic-distribution supplier interfaces for the owned consumers. Exact consumer edge evidence is enriched in research/mathematical-statistics-foundations-37-batch-16.cross-batch-dependencies.json. Declared prerequisite page summaries were checked only for these used interfaces. The CLT proof-only centered-envelope bound repair changes no Statement/Definition or dependency; no outside consumer repair is required. Stable IDs retained; no withdrawal or defective published supplier found. Nine HIGH/CRITICAL risk reviews complete. Report: research/mathematical-statistics-foundations-37-alpha-batch-16-3a.md.
<!-- mathematical-statistics-foundations-37-alpha-batch-16-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-37-3a:begin -->
Batch 37: owned consumer lem-regular-conditional-kernels-push-forward-under-measurable-random-maps -> published supplier thm-monotone-convergence-for-the-integral, F6/steps 2.1 and 4.1. Current published Statement and Given do not declare X, its sigma-algebra or mu. Full simple-minorant proof and all eight declared prerequisite bodies independently read; argument is sound once an arbitrary measure space and measurable f_n:X->[0,infinity] are stated. Consumer lem-regular-conditional-kernels-push-forward-under-measurable-random-maps steps 2.1 and 4.1 supply (Omega,F,P) and nonnegative measurable partial sums. Hunter Measure Theory §4.1 p.39 and §4.2 Theorem 4.6 pp.40–41 explicitly provide the measure-space setting. Published repair is deferred to owner, not completed. Current canonical hash 920700e8dbd7f7e1197d654af41d9e03a86d24099e0bf68afb71ab8a1ac3c4cf equals routed pre_sha256; original observed_source is null and routed observed digest b79a7f8d5e2031d4310e66b565022615a990c981fbcae4b93b5e6b9c37f0949b is retained without claiming an exact observed-byte preimage. Stable IDs retained; no withdrawal. Owner supplier-first published declaration repair pending; no local consumer rewrite needed under the supplied probability-space hypotheses. Higher coverage consumers inherit this recorded interface debt. Report research/mathematical-statistics-foundations-37-alpha-batch-37-3a.md.
<!-- mathematical-statistics-foundations-37-alpha-batch-37-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-17-3a:begin -->
Batch 17 Step-3a review: current owned consumers preserve the directional likelihood/RN hypotheses, nonnegative kernel risk and event-supremum TV conventions. Exact evidence and all twelve completed risk reviews are in `research/mathematical-statistics-foundations-37-alpha-batch-17-3a.md` and the owning proof contract. The existing batch-17 cross-batch dependency records remain present.

KL clarification consumer: `lem-gaussian-kullback-leibler-covariance-formula` (batch 19) uses a strictly positive finite density ratio and an integrable quadratic log ratio; its use is compatible. Product-index correction consumers: `thm-gaussian-sparse-sequence-minimax-lower-bound`, `lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound`, `lem-clean-dense-gaussian-covariance-minimax-lower-bound`, and `lem-diagonal-covariance-minimax-lower-bound` use ordinary n-factor KL additivity (n>=1), without dependence on the former index labels. Their actual cited uses were read; no supplier-induced consumer repair is required. The three owned Gaussian example contracts now quote the exact i<n supplier Statement. No outside carrier was edited; no withdrawal or escalation is proposed.

Fresh native batch17 continuation: independently rechecked current owned consumer interfaces and the prior KL-definition/product-index impact uses. Repaired only `lem-gaussian-location-kl-formula` deps/F6/Proof1.2 by adding the exact positive logarithm quotient law; its Statement and all constants are unchanged, so no consumer source repair is required. Owned Gaussian example uses remain valid, and outside batch18 `thm-gaussian-sparse-sequence-minimax-lower-bound` F2/Proof1.2/2.1 still uses the same formula. Append-only repair disposition `msf37-b17-3a-gaussian-kl-log-citation-repair` resolves the existing `msf37-b18-3a-gaussian-kl-log-citation` maintenance; original batch18 findings, routing and ledger history are preserved. Stable IDs, cross-batch records and proposed dispositions retained. Current report and all twelve fresh risk reviews supersede current acceptance claims for the old source; archived attempt1 remains historical evidence.
<!-- mathematical-statistics-foundations-37-alpha-batch-17-3a:end -->

Batch37 current-source addendum:  During final validation the owner installed the explicitly approved ambient-binding repair (research/mathematical-statistics-foundations-37-owner-mct-ambient-thm-monotone-convergence-for-the-integral-repair.json). Independently reread the complete current MCT carrier: Statement/Given now bind arbitrary (X,A,mu), all four proof paragraphs are unchanged and sound, and both owned consumer applications satisfy the clarified hypotheses. Mathematical repair resolved; owner retains native published-repair protocol/recertification. F6 contract quote refreshed to exact current Statement. Original deferred ledger history remains; no local consumer source repair is necessary.

<!-- mathematical-statistics-foundations-37-alpha-batch-5-3a:begin -->
Batch 5 independently reviewed the current experiment/statistic, domination/density and likelihood-change-of-measure supplier interfaces used by its 18 existing cross-batch records in `research/mathematical-statistics-foundations-37-batch-5.cross-batch-dependencies.json`. These suppliers remain unchanged and their consumer uses retain the sigma-finite, AC and per-parameter-null-set qualifications. Basu now explicitly assumes standard-Borel data; its sole item consumer is the owned normal example on Borel R^n and requires no repair. The discrete-class minimality proof now compares with every sufficient sigma-field under explicit AC, carried to its sole item consumer, the owned Bernoulli count example; the example has no further item consumer. The vector minimality Statement is unchanged and its owned point-mass consumer uses the repaired full comparison. All affected item and reference/page uses were searched; no necessary outside repair or published defect was found. Stable IDs and all pre-existing proposed withdrawals are preserved. Evidence and ten routed decisions: `research/mathematical-statistics-foundations-37-alpha-batch-5-3a.md` and `research/mathematical-statistics-foundations-37-alpha-batch-5-3a-decisions.json`.
<!-- mathematical-statistics-foundations-37-alpha-batch-5-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-34-3a:begin -->
Batch 34: independently reviewed the actual covariance consumer interfaces to batches 17 (directional KL/Pinsker, finite-product KL, Fano and binary Le Cam), 19 (positive-definite Gaussian KL), 31 (Huber model/modulus/equalization) and 33 (consecutive balanced blocks, majority radius and Borel minimum-norm median). The covariance algorithm now explicitly calls the batch-33 procedure with the original sample and k; all direct item/reference consumers are owned batch-34 carriers and need no repair. Reader scope clarification for bounded matrix-depth compactness is compatible with the independently proved fixed-cap/global selector; heavy-tail theorem uses the source-enriched conditional Lepski interface. No supplier outside the batch was edited.

Published prerequisite alert: thm-nonnegative-integral-zero-iff-zero-almost-everywhere omits the ambient measure/sigma-algebra binding in Statement and Given. Owned consumer lem-scaled-gaussian-covariance-has-depth-at-least-half F4/step 2.1 supplies its Gaussian probability space, and the elementary forward implication is independently closed. Owner should bind arbitrary (X,A,mu), retain the sound three-paragraph proof, and use the native published-repair protocol. Deferred defect msf37-b34-published-zero-integral-ambient and A-P index row preserve this obligation; no published source edit or closure is claimed. Stable IDs and all existing withdrawal proposals are preserved. Report: research/mathematical-statistics-foundations-37-alpha-batch-34-3a.md.
<!-- mathematical-statistics-foundations-37-alpha-batch-34-3a:end -->

<!-- mathematical-statistics-foundations-37-alpha-batch-33-3a:begin -->
Batch 33 Alpha independently checked owned consumer interfaces: `thm-univariate-trimmed-mean-under-replacement` uses batch-14 `thm-bernstein-independent-sums` at its actual one-sided proof step 2.1; `ex-polynomial-tail-law-with-finite-variance` uses batch-14 `def-subgaussian-variable-and-vector` at its centered MGF definition. `prop-correct-scale-multivariate-trimming-slab-bound` uses batch-15 `thm-independent-process-symmetrization` and `thm-one-sided-coordinate-rademacher-contraction`, deriving its needed one-sided ghost/sign version locally on a countable rational direction class. Batch-31 `def-adversarial-sample-replacement` supplies the floor(2 eta N) full-sample budget to the univariate and multivariate theorems, slab proposition, zero-covariance lemma and half-replacement counterexample; `def-huber-contamination-model` is contextual model distinction only in the counterexample. Exact current supplier statements/definitions were opened; no outside supplier defect affecting these uses was found.

The univariate finite quantile domain is corrected to 0<u<1 while its tail functional remains defined for 0<u<=1, including E(1,X). Its only direct/reference consumers are the owning A-page summary and `alg-univariate-trimmed-mean` contextual Remark; both actual uses remain sound and require no edits. The reader's explicit eta>=0 and half-replacement eta<=1 match the existing replacement-fraction domain. No consumer outside batch 33 needs repair. All sixteen HIGH/CRITICAL risk reviews and eleven touched dispositions are recorded in `research/mathematical-statistics-foundations-37-alpha-batch-33-3a.md` and its task-named decisions JSON. No published source was edited and no proposed withdrawal was removed. These are local mathematical dispositions, not engine stamps or judge verdicts.
<!-- mathematical-statistics-foundations-37-alpha-batch-33-3a:end -->
