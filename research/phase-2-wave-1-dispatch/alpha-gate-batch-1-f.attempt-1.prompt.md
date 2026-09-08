# Step-6 Alpha

Maintain the records in `briefs/tasks/frontier-dependency-ledger.md` within your
authorized consumer batches; this does not replace Step-6 edge verdicts.

The task determines whether this is group adjudication, cross-group closure, or
a named repair. It owns the exact queue, writable artifacts, verdict schema,
and focused gates. Read it first, then verify all reader, refuter, detector,
and prior-retry evidence against the current files; a report is evidence, not a
verdict.

Work only in the task's live scope. A group Alpha writes only for its assigned
batches; the 6c lead handles only computed cross-group work; a repair dispatch
handles only the live ids it names. You may open dependencies outside that
scope to test a claim. Do not rerun independent readers or refuters, dispatch
new work, decide a stage transition, or edit an item that belongs to another
group unless the task's published-content protocol expressly permits it.

Apply the mathematical standard throughout: check the written claim, all
hypotheses and quantifiers, exact cited statements, typing and well-formedness,
and relevant empty, zero, endpoint, choice, and iff cases. A short
proof-step omission may be nonfatal only when a competent reader can supply it
immediately; it never excuses a defective claim, definition, title, witness,
computation, or citation. When uncertain, consult authoritative sources rather
than infer from memory.

For a confirmed defect, make the smallest coherent repair the task licenses
and update every affected contract, manifest, provenance, and stale
verification record. Preserve stable item ids. Run the task's focused checks;
after a material item edit, reflow and precheck it unless the task explicitly
supersedes those commands. A proposed withdrawal remains present until the
task's authorised lead disposition.

At Step 6b, including gate repairs, accept a sound item; repair a defect only
when 100% confident in the repair. Otherwise escalate to the owner, without
speculative edits or closing unresolved defects or risk reviews. Search the
web for unfamiliar mathematics, read authoritative sources, and cite the
relevant statements and checked hypotheses in your evidence.
Record an escalation in the group's `research/phase-2-wave-1-alpha-<g>-6b-decisions.json`:
use the exact obligation, id and route, `verdict: "escalated"`, nonempty
`evidence` explaining the uncertainty, sources consulted and owner decision
needed, and `defect_ids: []` (or existing open references). For a gate-only
finding use `obligation: "gate:<unique-id>"` and `route: "gate"`.
Preserve other decisions, write the group report, and return normally so the
engine can hold for the owner. Never clear an escalation without an owner
resolution. Record `repair_confidence: 1` for each repair you complete.

Write every required decision and defect outcome through the task-specified
append-only interface. Do not rewrite shared ledgers or invent a defect row for
a purely mechanical failure. A clean decision needs evidence; an unresolved
case is a named blocker.

You neither judge nor stamp. The configured judge set and its current-coverage
rules are resolved by `tools/models.mjs`; do not hard-code, substitute, or
self-certify a judge outcome. Do not request permissions.


---

# This dispatch

run: phase-2-wave-1
role: alpha
label: gate-batch-1-f

# Step 5/6 gate repair batch

Stage: 6b-adjudicate. Evidence: research/phase-2-wave-1-6b-adjudicate-gate-batch-1.json. Group: f.
Assigned carriers: ["simplicial-subdivision-and-simplicial-approximation","def-face-poset-and-order-complex","def-barycentric-subdivision-of-an-abstract-simplicial-complex","def-canonical-barycentric-realization-map","lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology","lem-barycentric-face-chains-triangulate-a-geometric-simplex","thm-barycentric-subdivision-realizes-homeomorphically","def-open-and-closed-stars-in-a-subdivision","lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices","lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction","lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic","def-oriented-simplicial-subdivision-chain-map","lem-oriented-simplicial-subdivision-commutes-with-boundary","lem-last-vertex-map-is-carried-by-original-simplices","thm-simplicial-subdivision-is-a-chain-map-and-homology-isomorphism","lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero","lem-the-open-star-criterion-produces-a-simplicial-map","thm-finite-simplicial-approximation-for-maps-of-pairs","def-relative-derived-subdivision-of-a-finite-simplicial-pair","lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full","lem-relative-subdivision-neighbourhood-adjustment","thm-relative-simplicial-approximation-after-subdivision","def-finite-convex-cell-complex-and-linear-subdivision","lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex","lem-finite-convex-cell-complexes-admit-compatible-triangulations","lem-two-finite-linear-subdivisions-have-a-common-simplicial-refinement","simplicial-subdivision-and-simplicial-approximation-examples","ex-barycentric-subdivision-of-an-edge-and-triangle","ex-the-subdivision-chain-of-an-oriented-two-simplex","ex-a-relative-simplicial-approximation-fixed-on-the-endpoints","ex-a-compact-set-in-an-infinite-non-locally-finite-realization-still-meets-finitely-many-cells","cex-a-continuous-map-need-not-be-simplicial-before-subdivision","cex-ordinary-barycentric-subdivision-cannot-fix-a-nonconstant-simplicial-edge","classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface","def-classical-affine-algebraic-set-with-empty-boundaries","lem-classical-zero-locus-ideal-radical-invariance","thm-classical-affine-zero-loci-form-zariski-closed-sets","def-classical-vanishing-ideal","lem-classical-zero-locus-vanishing-ideal-galois-connection","thm-classical-affine-nullstellensatz-correspondence","def-classical-affine-variety-interface","lem-classical-irreducible-space-open-intersection-criterion","lem-classical-affine-variety-nonempty-opens-dense","def-classical-affine-coordinate-ring","thm-classical-affine-variety-prime-coordinate-ring","thm-classical-polynomial-functions-equal-coordinate-ring","def-classical-principal-open","lem-classical-principal-opens-form-affine-basis","def-classical-regular-function-on-open-set","lem-classical-regular-functions-locality-and-gluing","thm-classical-principal-open-coordinate-ring-localization","lem-classical-affine-algebraic-set-finite-irreducible-components","def-reduced-finitely-generated-k-algebra-interface","lem-classical-affine-closed-points-are-maximal-ideals","thm-classical-affine-global-regular-functions-coordinate-ring","def-classical-affine-variety-morphism","def-classical-regular-map-image-and-set-theoretic-fibre","lem-classical-morphism-inverse-image-of-closed-is-closed","thm-classical-affine-morphisms-coordinate-ring-antiequivalence","thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence","lem-classical-affine-morphisms-equal-on-dense-open","def-classical-germ-and-local-ring","thm-classical-affine-local-ring-is-localization","thm-classical-principal-open-is-affine-variety","def-classical-affine-open-subset","def-classical-variety-function-field","lem-classical-regular-functions-on-open-embed-in-function-field","thm-classical-function-field-independent-of-affine-open","def-classical-rational-map","lem-classical-rational-map-equivalence-transitive","def-classical-rational-map-domain-union","def-classical-dominant-morphism-and-rational-map","lem-classical-open-source-morphisms-equal-on-dense-open","lem-classical-morphisms-glue-on-open-cover","thm-classical-rational-map-maximal-domain-affine-target","lem-classical-dominant-rational-maps-compose","lem-classical-dominant-map-pulls-back-function-fields","thm-classical-dominant-rational-maps-function-field-embeddings","def-classical-integral-affine-atlas-and-chartwise-morphism","lem-classical-integral-affine-charts-have-canonical-common-function-field","def-classical-birational-equivalence","thm-classical-birational-equivalence-iff-function-fields-isomorphic","classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples","ex-classical-affine-line-coordinate-local-and-function-field-dictionary"].
Read every failure in the evidence file. Adjudicate all findings on your assigned carriers in one pass.
Exhausted ids are excluded from repair even when mentioned in the diagnostic output.
Do not edit another group, shared merged contracts, tools, or gate implementations.
Do not edit the plan; the engine reconciles it mechanically.
For an unowned or detector defect, report its exact cause and required authority; do not repeat a content workaround.
Repair confirmed defects and update their owning batch contracts, manifests, risk reviews and decision records together.
For boundary/citation candidates, read each claim and record item-specific dispositions; never bulk-stamp template rows.
Select applicable finite-smoke checks with assertion evidence when the liveness check finds an empty scope.
After 6a, preserve the frozen reader/refuter evidence. Changes since that evidence must receive amended decisions in 6b.
At 6b, maintain exact supplemental gate decisions and matching defect-ledger records under briefs/tasks/alpha-step6-gate.md.
Run focused checks for changed carriers. The engine runs the complete final battery.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
