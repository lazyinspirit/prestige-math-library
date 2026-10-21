# Mathematics build operations

The deterministic `tools/autopilot/` engine owns dispatches and transitions. The
approved build checklist is [research/workflow-rebuild-plan.md](research/workflow-rebuild-plan.md); consult it when changing
this workflow. Mathematics and its sibling engine have separate revisions,
worker prompts, supporting tools, content and run state.

Freshly planned run namespaces now select the compact statement-first revision: every item
class has an uninterrupted statement/description with links afterward, one per
line and paragraph. A/B summaries are not generated: authors write frontmatter-only pages. Code
requires empty bodies and sets compact-layout metadata after initial authoring. Prerequisites render as a
disclosure collapsed by default. The native six steps, models and repair limits remain.
Existing runs retain their selected stages and original policy, including after
restart. See [activation and mechanical checks](tools/STATEMENT-FIRST.md).

## Six-step workflow

| Step | Work | Agents and handoff |
|---|---|---|
| 1 | Prerequisite drift, scaffolding and complete initial authoring | Existing drift agents and GPT-6 Luna/max authors; authored items, A/B pages, contracts, source evidence and manifests |
| 2 | Review, one local repair and owner escalation | Luna-max reviewers/local repairers; at most two reviews and one repair; owner/orchestrator resolves escalations and runs gates |
| 3 | Independent review | GPT-6 Luna/max readers and refuters; GPT-6.1 Sol/medium batch adjudicators; final validation and mechanical closure |
| 4 | Batch review and judging | GPT-6.1 Sol/medium read-only batch readers plus GPT-6 Luna/max judges |
| 5 | Adjudication and repair | Existing native repair, consumer maintenance, certification and gate routes |
| 6 | Closeout | Contracts, pathways, stamps, readiness, evidence, owner report and local closeout commit |

The former Step 2 assignment stage and former Step 4 splice/integration stage
are deleted. Necessary group metadata is generated mechanically during planning.
Accepted manifests are transcribed into the canonical plan at Step 2's existing
mechanical join, followed by the post-authoring snapshot. Neither operation has
its own agent or workflow stage. The pre-authoring snapshot runs before Step 1
construction. Initial item and page authoring happens entirely in Step 1;
later stages retain their substantive review, repair and finalization duties.

The Step-1 `content-policy-scaffold` gate retains its gate identity and joins
all current run manifests in authored-carrier mode, without `--manifest-only`.
It checks the completed items' provenance, source references and generated-claim
containment, together with manifest capacity and duplicate-ID checks. The
separate `manifest-deps` gate still requires explicit manifest dependency arrays.
Future-mint checks belong before authoring; existing Step-1 carriers do not need
the later canonical-plan transcription to qualify for authored-item validation.
Subsequent `content-policy-items` gates recheck the current authored carriers.

## Construction and escalation

Step 1 keeps existing drift/source recovery, readiness, scope, page-capacity and
owner-hold mechanisms. Initial authors use `gpt-6-luna-max`; drift/source recovery
retains its existing model assignments. Both drift reviewers and authors
must escalate significant unmet prerequisites directly to the owner, giving the
smallest missing supplier, consuming claims/steps and affected consumers.
Scaffolding agents fully author all assigned items, pages and proof contracts;
a proof strategy or successful process alone is not a completed carrier.
Readiness records bind the finished carriers. Cross-pair supplier completion
does not hold initial author dispatch; nonempty authored inventories and current
readiness remain required for acceptance.

After a confirmed planning defect is repaired, the owner may resolve its exact
`drift-blocked` verdict through `research/RUN-owner-drift-resolutions.json`
(version 1, `owner-resolved-drift-blockers`, `authorized_by: owner`). The receipt
binds the unchanged native report and full archived original report, successful
original native attempt/result and prompt, original drift evidence, and current
page scope/interfaces. Each resolution names the exact page/verdict, complete
archived source preimages and changed current raw source hashes, and focused
owner acceptance evidence referencing the genuine delegated repair evidence.
Consumer dispositions cover the companion and every direct/indirect planned
consumer. Missing, stale or ambiguous bindings fail closed; acceptance satisfies
only the named planning blocker. It grants no new worker execution, proof or
review coverage, rewrites no native evidence, and leaves all scope checks,
later reviews, recertification and complete gate batteries mandatory. The schema
and scope-digest calculation are in [tools/drift-owner-resolutions.md](tools/drift-owner-resolutions.md).

Construction readiness retains its snapshot and receipt-stamped decisions across
fresh controller contexts belonging to the same configuration and frontier.
Manifest, coverage, plan, consumed supplier and missing-dependency file stamps
guard reuse. When alias lookup is used, the entire item inventory is also
stamp-bound: any change rebuilds alias resolution together with dependency bytes
and readiness decisions. Failed input scans discard partial cached inputs and
keep the scaffold incomplete. Scheduling caches never certify changed inputs.

Planning and the existing drift-apply join write `research/RUN-batch-dependency-levels.json` before construction. Before each Step 1 dispatch the engine recomputes this artifact from current page requirements and manifest/carrier logical dependencies, rejects batch cycles, and includes the batch level and suppliers in the worker task. Batch level is zero without in-run suppliers, otherwise one plus their maximum level. Initial mathematics authoring uses `unitPrerequisitePolicy: 'priority'`: sort all pending pairs by dependency level before selecting slots, without waiting for cross-pair suppliers to finish. Fill the configured stage, role and global capacity, then refill immediately on worker completion; retain adoption and exclusive-writer guards. For 7, 6, 8 and 12 pairs in successive levels with 30 slots, start all 21 pairs in the first three levels and 9 in the fourth, then admit the next fourth-level pair whenever a slot opens. Authors continue independent work against declared interfaces and record unresolved supplier checks honestly; they cannot claim readiness or quote absent supplier bodies. Actual authored-carrier/readiness requirements, full gates, review and supplier-before-consumer repair remain mandatory. Other stages retain the default completion policy. External suppliers remain context.

Each dispatch pass shares a fresh manifest/alias snapshot across its dependency graph. Priority authors with disjoint outputs receive one fan-out graph check rather than one full graph rebuild per slot. Snapshots are confined to the current pass; subsequent dispatches read current inputs again.

Initial priority-author scheduling parses complete actual source `deps` fields
and any needed alias fields with the renderer's YAML parser, together with all
current manifests. Unrelated metadata being written by another author does not
block slot refill. A missing or unformed source frontmatter envelope is unfinished
construction input: its declared manifest/page dependencies remain, and available
source dependencies are read again on the next dispatch pass. This does not
certify that source or grant readiness. Complete present dependency/alias fields
that are malformed or duplicate, invalid manifests, ambiguous ownership and
cycles still fail closed; no batch or declared dependency is dropped. This narrow graph
projection records scheduling metadata only. Post-drain level recomputation,
ordinary level commands, readiness, reviews and every gate retain strict whole
frontmatter parsing and check the actual current carriers.

Item inventories and logical dependencies are determined in scaffold manifests before item carriers are written; authors compute labels there and construct carriers in ascending item level. Item `dependency_level` is recorded and independently checked in Step 1: zero
without in-run logical suppliers, otherwise one plus the maximum supplier level.
External suppliers remain context. No rebatching or additional review stage is introduced. Logical dependencies must agree between authored bodies and
manifests; aliases resolve to canonical suppliers. Definition discharges and
nonlogical links are hash-bound context, not extra logical scheduling edges.

## Whole-batch scope/prerequisite loop

Step 2 workers perform only substantive scope/prerequisite review, local source
repair and escalation. Each batch has a read-only `scope-reviewer` and a local
`scope-repairer`, both `gpt-6-luna-max`; reuse their respective sessions where
available. Each review covers the entire current batch, including additions and
complete A/B pages, before returning one consolidated result.

The sequence is review/accept -> ONE local repair -> final review/accept ->
escalate to the OWNER. The engine permits at most two complete reviews and one
local repair. Escalate immediately when a significant prerequisite gap cannot be
rigorously resolved locally on the same page. Other page-local defects receive
the single repair and final review. If the second review remains unsatisfied for
any reason, escalate; there is no second local repair or third engine review.
Failed processes and retries do not reset successful review/repair counters.

There is no prerequisite-completion dispatch barrier in Step 2. Share up to
30 active engine workers only among reviews and local repairs, and refill each
available slot immediately. There is no automatic owner-repair dispatch.
Independent assigned source scopes run concurrently; only overlapping authorized
write files wait for an active writer. Read-only consumer context does not reserve
worker slots or block another pair. Repairers write
directly to their assigned source files, without private workspaces. Inspect
actual suppliers before their consumers within each repair. Imported sources
remain read-only. Preserve approved claims, inventory promises and pair/page
identities; prove necessary intermediate results rather than dropping scope.

Whenever an original Statement/Definition changes, the same agent traces and
checks all direct and indirect consumers using old/current dependencies, aliases
and nonlogical uses. Physical public-interface changes have the same duty in
physics. Check actual supplier uses and assumptions; repair consumers within the
assigned source scope and report required outside repairs to the owner. Every
affected consumer appears in the substantive result, and the final reviewer
checks the local repair's consumer dispositions.

Workers have no hashing, rehashing, certification, recertification, numeric-level
reconciliation, manifest/coverage/proof-contract maintenance, evidence-ledger or
automated formatting/validator duties in Step 2. Their lightweight result contains
only identity, prepared inventory, round, decision, defect types, concise findings
and required consumer dispositions. The optional legacy hash report field serves
only already-running old workers; new workers do not compute or report hashes.
Honest uncertainty, rigorous complete arguments and faithful source use remain
substantive obligations. Existing manifests are navigation context, not worker
maintenance assignments.

The engine retains simple dispatch, routing, overlap coordination and the bounded
two-review/one-repair counters. Minimal pass receipts record dispositions and
counts. After the engine pass and worker drain, pause for the owner before the
Step-2 battery. Escalated pairs remain explicit holds. The owner/orchestrator
alone resolves escalations, handles metadata and recertification, and runs the
Step-2 gates. Preserve CLAUDE.md's maximum of two outside escalation-resolution
cycles; they are not additional engine review/local-repair rounds. Resolved owner
escalations receive direct acceptance without an engine re-review or counter reset.
The owner controls the battery and advancement to Step 3.

A Step-2 native worker that finishes after the tick's `onProgress` collection
boundary receives one same-tick grace from synthetic artifact-stalemate detection.
The next tick collects its genuine result and still detects any persistent
missing acceptance derivative. This grace is bounded to an in-memory set of
units active at that boundary; it records no coverage, changes no counters or
receipts, and does not affect acceptance, gates, existing holds or other stages.

The engine writes `research/RUN-step2-owner-pass.json` before the owner pause.
If remaining local work resumes, it drains and produces
`RUN-step2-owner-battery-ready.json`, pausing again before the battery. Neither
handoff performs recertification or grants gate authorization. The owner may
record resolved escalation acceptance from the content workspace:

```bash
node tools/batch-scope-review.mjs owner-resolve --run RUN --batch N --decision accept --reviewer OWNER --reason 'Exact resolution'
```

Historical `--decision continue` commands also accept directly. Apply owner
resolution only after source writers drain. This never dispatches another engine
review, restores a spent local repair, or replaces the orchestrator's pre-battery
work.

Finite-smoke obligations use named deterministic computations in `tools/finite-smoke.mjs` and exact source assertion excerpts in proof contracts. The registry includes finite covariance/rank, scalar Lasso and collinear-design witnesses, robust-estimator partition/rank/zero-data boundaries, deterministic replacement counterexamples, log-space binomial witnesses, bounded log-series checks for numerical constants, exact Rademacher and four-row regression witnesses, and finite Poisson-window and Strauss likelihood comparisons. Parameter values describe the finite model and must satisfy the check's domain. A finite-smoke pass checks only that model, not the general proof; a counterexample obligation passes when its stated false-claim witness is verified. Unknown names and stale assertion excerpts fail explicitly. Registry changes are validated by the authorized full gate battery; do not substitute an empty selection or fabricate success for an unsupported name.

Numerical finite-smoke families are composed by `tools/finite-smoke-numerical.mjs` from domain modules and the shared `tools/finite-smoke-numerical-core.mjs`. They independently recompute bounded, fixed finite models using their authored selectors and input restrictions; these checks do not establish asymptotic rates or general convergence, stability, or existence theorems. Each contract row must name a registered check and include an exact assertion excerpt from the current item source. Duplicate numerical check names are rejected. Integrate row changes with their current per-row guards so concurrent boundary metadata is preserved, and validate the installed registry through the authorized native scoped full battery; do not run unrelated registry self-tests.

The three `finite-smoke-frontier81-*.mjs` domain modules add 49 fixed classical,
quantum and Temperley–Lieb/Cherednik fixtures. They compute finite probability
laws, diagram products, polynomial operators, incidence matrices and small
quantum models independently of the claimed result. Selectors must match each
fixture's documented bounds; contract assertions remain exact source excerpts.
These checks establish no infinite-dimensional, asymptotic or general categorical
claim. Their focused regression tests include invalid selectors and deliberately
broken mathematical kernels.

Four finite Gaussian checks cover normal-normal posterior moments, working-normal coverage calibration, a truncated-normal support/TV witness, and one Gaussian-sequence coordinate's posterior and predictive law. `normal-normal-finite-n-posterior` uses n=1,2,5, tau=1/2,1,2 and sample means -2,0,3; `normal-working-model-calibration-boundary` uses z=1,2 and sigma=1/2,1,2, with alpha defined by the quantile relation; `boundary-posterior-support-and-tv-witness` uses n=1,4,16 and Delta=-2,0,2; `gaussian-sequence-one-coordinate-posterior` uses n=i=alpha=kappa_i=1 and observations -2,0,3. These fixed models use independent numerical integration of original Gaussian density products or interval probabilities, 4,096-panel Simpson quadrature, ten-standard-deviation moment windows and tolerance 1e-8. They do not verify CLTs, asymptotic posterior convergence, infinite products, or square-summable support. Their contract assertions must be exact source excerpts; fixture lists are fixed by the registry rather than contract parameters.

The `finite-smoke-ml101-*.mjs` modules provide fixed machine-learning fixtures for Gaussian laws, VC counts, calibration, sparse models, privacy, optimization, flows, and reinforcement learning. Contract rows retain their original obligations and bind exact current source assertions. The registry rejects duplicate check names before merging legacy and new families. Selectors remain strict; `--self-test` supplies one documented fixed fixture per new callback while retaining the legacy defaults. These computations check only their bounded models, and the native scoped battery validates the actual contract selection.

The `anisotropic-real-norm-complex-homogeneity-witness` check uses exact Gaussian-integer pairs `[real, imaginary]`, positive integer weights `[1,2]`, vector `[1,0]` and scalar `[0,1]` to recompute `N(1)=1`, `N(i)=2` and `|i|=1`. It rejects a witness satisfying complex homogeneity, a different source normalization, or incorrect claimed values. This is finite counterexample sanity evidence; it does not verify the real norm axioms for all real coordinates.

The `cyclotomic-rank-one-f5-inverse` check exhausts all 16 unit parameter pairs in F5 and independently searches all 25 quadratic residues for the inverse of X. The `cyclotomic-rank-one-content-collision` check reduces the actual rational specialization Q=2, u1=u2=1 using exact monic integer polynomial division, then checks every unit repeated root in F5. It verifies a nonzero square-zero element and vanishing interpolation denominator. These are bounded sanity checks for rank-one examples, not proofs for arbitrary fields or ranks.

During content-policy inventory reads, a missing carrier is retried five times
over at most 770 ms to tolerate concurrent replacement by another workflow.
Persistent absence and all other read errors still fail; no inventory entry,
scoped item, prerequisite, or policy check is omitted.

## Independent review through closeout

For an owner-authorized recovery of exactly two local, unpushed legacy whole-tree
closeout commits, `autopilot reopen-closeout --run RUN --state-dir .autopilot/RUN
--authorization research/RUN-closeout-reopen-authorization.json --inspect` reads
the exact guards without changing Git or state. The same command without
`--inspect` requires the sealed guards and a current owner scope policy, archives
the genuine native suffix history and original commits in a hash-bound bundle,
and compare-and-swaps only `main` to their parent. It preserves the current index
byte for byte and checks working file bytes/modes before and after the ref change.
Original pre-legacy outside staging remains explicitly unknown; it is never
reconstructed from the parent tree. Only `6-readiness-v2` through `6-close-v2`
reopens, paused; native restart/resume must rerun its actual gates, reporting and
scoped commit. Earlier stages and mathematical carriers remain untouched.

Step 3 uses independent batch review and routed adjudication after authoring in
dependency-level order. Step 3b is retired in both engines: there is no separate
cross-batch edge review, impact-review window or unfinished cross-review lane.
Step-3 readers and refuters use GPT-6 Luna/max; batch adjudicators use GPT-6.1
Sol/medium. Step-4 read-only batch readers use GPT-6.1 Sol/medium, and the
per-item judge sweep uses GPT-6 Luna/max.
The final sequence is `3a-baseline` then `3a-close`. The existing Step 3a
validation battery remains in adjudication. Mechanical closure checks exact
current item, contract, manifest and page carriers against the post-gate
snapshots and plan correspondence; it freezes evidence without repeating the
passed review or introducing another gate battery. Source and
empirical qualifications survive regeneration.

New closure receipts use version 3 with basis `dependency-ordered-step3a` and
bind the exact Step 3a evidence. Historical version-2 receipts remain verifiable
against their original evidence, including completed Step 3b work. Retiring the
stage grants no new review coverage, clears no confirmed defect and leaves
published-repair handoffs for their later independent judgments. Cross-batch
consumer defects found during review go to the owner for supplier-first repair;
they are not deferred to a retired stage.

An existing successful Step-3a `accepted_repair` verdict may retain its native
meaning after accompanying metadata reconciliation through explicit
`source_identical_acceptance_continuities` entries in the run's owner repair
evidence. Each guard binds the genuine native completion, assignment, report,
archived accepted decision and immutable reader-post carrier, requires exact
current source claim/dependency mirrors and an actual strict contract pass,
and preserves missing historical manifest projections as explicitly unknown.
This records acceptance continuity, never new worker coverage; it neither
stamps decisions nor waives any other gate.

The ordinary continuity case requires identical raw source bytes. A separately
hash-proven complete reader-post source preimage may also establish metadata
continuity when the entire current body is exactly identical and parsed
frontmatter differs only in `dependency_level`, `verification` or
`provenance`. Status, run, dependencies, sources, assumptions, proof strategy
and all other fields remain unchanged. Owner/delegated audit, source-audit and
published-repair markers may not be added or changed through this exception.
An unknown source delta is never classified as metadata from hashes alone.
A definition, algorithm or remark with no numbered proof may retain the exact
original/current null contract; proof-bearing missing contracts remain errors.

Stabilized `post-reader` acceptance may separately use
`stabilized_source_identical_acceptance_continuities`, as specified in
[tools/step3-owner-stabilized-source-identical-continuity.md](tools/step3-owner-stabilized-source-identical-continuity.md).
Raw source bytes and per-item manifest carriers must match the authenticated pre-3a
input; only preserved review metadata and explicitly authenticated supplier
quotations may differ in the contract. Genuine successful native proof review remains the acceptance source;
retained original proof reading and current focused acceptance are attributed
separately when no fresh proof reread occurred. Added helpers require actual creator
provenance, later independent native review and current native creation
certification; a typed requirement for that certification is not evidence that
it already exists. The ordinary battery produces the real certificate before
closure freezes it. Marked `owner_repair_evidence_policy` receipts freeze the
canonical owner registry and its explicit own-run evidence; old unmarked
receipts retain their original artifact sets. No new coverage is supplied.

For a validated same-ID prerequisite rehome, native assignment and reader-post
snapshot bindings retain their original batch. Only current manifest and
contract lookups use the authenticated current home. Mechanical source-level
or verification changes require the complete archived before source to match
the immutable post-reader raw hash and the actual current mathematical source
to match the authenticated before/after rehome archives. Invalid receipts,
changed proof bodies and unsupported current contract inputs fail closed.

An owner may preserve a genuine native reader finding about an outside published
page through `RUN-step3-owner-required-page-routes.json` (version 1,
`owner-step3-required-published-page-route-v1`). This narrow routing receipt
binds the original unchanged finding, report, successful native attempt and
structured completion, prompt, immutable pre/post snapshots, current assigned
page manifest and its explicit `requires` edge. The assigned consumer must
reach an actual published item listed on that page through hash-bound current
logical dependency edges. The page must remain outside all run manifests.
Owner-current before and after archives, identical frontmatter, at most two
unique literal prose edits, and focused owner review bind the exact correction.
These archives establish no historical full-byte reader observation. The native
subject label and reader obligation remain unchanged; an explicit page carrier
route uses the actual published page bytes and never a fabricated item carrier.
The route grants no scope, edit authority, acceptance or review coverage. Normal
independent adjudication, explicit historical uncertainty, current page sealing,
defect-ledger closure and every gate remain mandatory. Unregistered foreign
findings retain the ordinary rejection; this receipt does not enlarge refuter
or owned-page inventories. The Step-3 closure freezes this exact optional registry
and its hash-bound native and owner historical evidence; later verification rejects
registry or referenced-evidence mutation.
A later native Step-5 manifest mirror repair may retain the route's exact old
manifest through its existing content-addressed supporting-metadata archive.
Closure accepts only the original expected hash, authenticated by a verified
current certificate, its identical frozen certificate, and a certificate-bound
native owner collection with its unchanged pack, reports and successful results.
The original closure still records the original manifest path/hash. Current
origin-page ownership, its explicit required-page edge, the same assigned
consumer and the published page's exclusion from run ownership are checked
separately. Other historical references remain strict; no registry or closure
is refreshed and no new historical observation or acceptance is supplied.
Downstream routes use that same archive authentication for their supplier and
consumer manifests, retaining exact historical and current subject inventories
and current unique draft ownership and direct dependency checks. An authentic
owner-captured original preimage absent from Step-5 certification may instead be
bound by `RUN-step3-owner-manifest-continuities.json` (version 1,
`owner-step3-historical-manifest-continuity`). This explicit root historical-only
receipt binds the unchanged original registry, exact route/index/reference,
original closed Step-3 receipt and successful native close result, recovered raw
preimage and earlier owner receipt pinning its original hash. Durable copies of
both original owner evidence files must live in run-owned `research/`; original
runtime paths may remain provenance metadata but are not future inputs. Creation
requires an archived paused/drained 5.9 state with the exact native ledger failure
naming that changed downstream manifest. The original closure path/hash remains;
no prior certificate binding, native observation or mathematical acceptance is
invented. Missing or changed evidence fails closed; other historical references
stay strict and all gates retain their ordinary current inputs.

Before the first Step-3 closure, authenticated full original downstream
manifests may instead use the strict preclosure policy in
[tools/step3-preclosure-manifest-continuity.md](tools/step3-preclosure-manifest-continuity.md).
Original route entries and finding bindings remain unchanged. Exact original
archives, current manifests, successful immutable native Alpha completions and
truthfully dated root metadata reconciliation are bound separately. Historical
and current page IDs, categories, kinds and per-page item inventories must
agree; current ownership and direct dependencies remain checked. Only the
explicit `manifest_evidence_policy` marker opts a new receipt into freezing
both histories. No prior closure, reader observation or acceptance is invented;
unmarked historical receipts keep their existing verification rules.

An unchanged page may meet only the narrow `decision-not-applied` exception
in [tools/step3-owner-unchanged-page-repairs.md](tools/step3-owner-unchanged-page-repairs.md)
when its existing budget-status summary becomes true through its genuinely
changed owned procedure. Successful native Alpha must independently confirm
both separate fatal findings, explicitly review the unchanged page and causal
repair, and retain both active fixed ledger rows. Exact original/current
carriers, native results, prompt, report, decisions and causal literals remain
bound. This grants no staleness, scope, acceptance or source-edit exception;
marked owner-repair evidence closure freezes the complete supporting record.

A home67 Alpha that genuinely completed with mathematical escalations may receive
one fresh native prerequisite review through the separate
[owner-escalation continuation](tools/step3-owner-escalation-home-alpha-continuations.md).
It requires completed root proof and consumer review, proper new owner-created
lemma origins, exact current carriers and immutable original native evidence.
Every old obligation and each new helper is independently owed again; creation
authorship grants no review credit. The registered complete task must reach the
native worker, and every ordinary gate remains mandatory. Install and restart
the paused, drained run controller before activating changed static helpers.

When a reader repairs some defects but cannot resolve another in the same
draft, the owner may retain its original open finding through
`RUN-step3-owner-partial-reader-repairs.json`. This routing-only record binds
the genuine successful reader result, unchanged report, frozen post-reader
snapshot and exact remaining findings/carriers. Both touched and reader
obligations remain; normal independent adjudication, ledger closure and all
gates are still required. Missing or changed authority fails closed.

An exact native finding about an unchanged own-run draft helper outside every
current manifest may use the explicit [unmanifested draft context route](tools/step3-owner-unmanifested-draft-context.md). It binds the genuine native
observation and direct assigned consumer, creates no producer home or frontier
coverage, and permits only independent nonfatal, false-positive or escalated
disposition. Context edits and fatal-repair acceptance require ordinary owner
repair instead; normal ledger, carrier seals and closure evidence remain required.
The same registered unchanged helper may be an actual refuter's extra read-only
context and flagged obligation, with exact native output and prompt bindings.
It gains no assigned coverage; every original reader and refuter decision is
still independently required. A source-only shared flag may bind exactly two
complete authenticated reader anchors and their distinct assigned consumers
as a group; native consumer, source and observed hash stay null. It chooses
no singular consumer and seals both current uses. Other ambiguous attribution
fails closed. An explicit current root capture of an existing complete
refuter last-message may preserve an actually clipped result tail, with
strict successful-session/attempt/prompt/log bindings and no invented native
historical digest. The default still requires complete native output.
An explicit separate basis preserves a native `in-flight-item` finding with
null consumer and source observation. A bound root current-proof/use review
and separate owner consumer witness seal only the actual current context;
they supply no historical observation or whole-supplier acceptance.

An explicitly registered proof-only owner repair of an exactly observed
unmanifested helper preserves its original fatal finding and before source.
The repaired-context mode binds actual application, complete current helper
and primary-consumer review, and unchanged Statement/Facts/metadata. Fresh
Alpha review of both original gaps, a confidence-one fatal-fixed decision,
ordinary ledger and current seals remain required. It grants no helper home
or inherited review. The same route documents its exact observation limits.

A native risk-only title alert can use the separately guarded
[native title continuation](tools/step3-owner-native-risk-title-home.md).
Only its exact title and manifest mirror change; all old obligations, one
real new gate and full risk review are independently owed. The
`owner-step3-same-assignment-consumer-witness-v1` route preserves a native
misattributed consumer while binding an already assigned actual direct
consumer separately. Its complete last-message capture explicitly supplies
no absent historical native digest. Neither route alters original findings,
accepts mathematics or waives ordinary gates.

A definition may acquire its first real proof contract after its frozen
pre-reader snapshot; routing preserves the original null contract hash and
requires the current contract. A reader's intermediate supplier observation
whose source bytes were not retained may be registered in
`RUN-step3-owner-unbound-reader-observations.json`, bound to the exact successful
reader receipt and unchanged finding/report. The original reported digest stays
visible, but the observation is explicitly unbound: historical uncertainty,
independent current-source review, ledger closure and all gates remain required.

The existing one-shot native refuter coverage continuation also handles a
completed report that omits an assigned subject. Archive the exact original
report/result, drain writers and bind the complete current refuter inventory
before dispatch. A truncated native diagnostic tail must match a substantial exact
raw archived-report suffix containing the not-opened and flagged fields; the
unchanged hash-bound full report supplies the original observations. Only a fresh
successful native correction result supplies coverage; never add an unread subject to the old report or waive collection.

Outside published-supplier alerts in native Step-4 digests retain their exact
original bytes. The owner may record `research/RUN-step4-published-alert-routes.json`
(version 1, `owner-routed-step4-published-alerts`, `authorized_by: owner`). Each
route binds the unchanged digest, exact alert index and object, successful native
reader attempt and original structured output, focused owner evidence, and the
current policy-valid recorded published repair. Digests and later alert routing
validate that receipt; published routes remain separately visible in the derived
alert inventory and never acquire a fabricated in-run owner or new review coverage.
Original Step-3 closure and judge verdicts remain immutable. Existing judge
currency rules continue to govern unchanged consumer carriers.

Step-4 alerts about another batch's in-run page route to its actual page-owning
group, just as item alerts route to their item-owning group. Same-batch findings
belong in concerns. Page findings retain ordinary owning-group disposition and
page currency guards; they cannot license an item repair or supply judge coverage.

Step 4's read-only
batch digests use `RUN-batch-N-step5-context.json`; a digest from another batch
cannot cover the inventory, and retries target only failing batches.

Step 5 retains the round-based adjudication/repair engine, supplier-before-consumer
maintenance, frozen frontier guards and its complete gate battery. The
judgment/adjudication rounds continue until the latest round has zero items
deemed defective by adjudicators (zero unique confirmed-fatal items across all
adjudicated subjects). Any confirmed-fatal item requires another round, even if
repaired within that round; uncertainty, missing adjudications and unresolved
defects still block closure. The frozen original inventory remains unchanged.
Step 5 rejudgment uses GPT-6.1 Sol at high reasoning effort, independent of the
Step-4 judge model.
Step-5 final judge closure retains the genuine frozen Step-4 Luna verdicts for
original-frontier items whose guard text is unchanged from the native baseline.
Changed items require current Sol evidence, subject to the existing current
central-certification policy. A selective closure joins the complete immutable
frontier, hash-bound baseline and original native verdict inventory; it never
accepts arbitrary models, invents verdicts or drops subjects. All normal item/context
currency and exact rejection-adjudication checks continue to apply.
Genuine native Step-5 helper creations stay separate from that frozen original
frontier. Selective closure requires exactly all original IDs plus all creations
from the authenticated native certificate, with no unknown, duplicate or omitted
subject. Original baseline/Luna checks remain unchanged; helpers acquire no
invented original verdict and require the existing current central certification
or genuine current Sol evidence under ordinary closure currency checks.
Repeated adjudication consumes the actual rejudge verdicts.
An explicit native confirmed-fatal supplier scope blocker may receive a separately
attributed current root repair review through the guarded
[version-2 owner supplement](tools/step5-owner-scope-blocker.md). The unchanged
native finding, successful dispatch and paused/drained creation state remain
bound; genuine supplier and blocker repairs, complete affected-consumer inventory,
current reviews and source reading are mandatory. Original fatal counts and all
later gates remain; this supplies no new native execution or judge credit.
The same guarded loader has a separate version-3 form for a completed native
assigned repair that explicitly routes a fatal open direct result supplier. It
binds the original paused/drained pre-gate state, exact native finding and
supplier preimage, genuine Statement repair, recursively complete affected
consumer inventory and current root reviews. It requires no artificial gate
failure and preserves the native decision, observations and fatal counts.
Terminal judge stamps and mechanical coverage use the same per-item policy and
stamp the actual judging model. When an item has no verification mapping or
source block, its first judge-only verification mapping is inserted immediately
after the opening frontmatter delimiter. Removing that mapping must recover the
original guard and judge representations exactly; stamping cannot change item
currency through separator whitespace. A guarded native `record-operational-supplement`
may reconcile a coverage-only diagnostic from an incorrect lineup descriptor.
Creation requires the exact paused native repair stage and drained successful
workers; it binds their unchanged reports, assignment, diagnostics, original
frontier/baseline/verdict inventory, prior certificate and creation state.
Collection rechecks genuine current original verdicts and keeps diagnostic-only
carrier observations separate from new mathematical reviews and certification.
It cannot substitute for a source repair, missing history or another gate defect.
If native collection cached its derivatives before that supplement, the guarded
`recover-operational-derived` command preserves the original collected, closed
and certification artifacts and records hash-bound immutable variants. Only the
normal mutable current-certificate pointer changes; certification starts from
the authenticated prior certificate and genuine native reviews, while unchanged
operational observations retain their original verdict coverage. Effective native
lookups validate that projection before using the corrected variants.
The owner-supervised wrapper forwards its reload version to the native stage
table and applies the owner hold before progress bookkeeping, so paused work
cannot cache derived collections before an authorized reconciliation.

An owner may admit an individually confirmed Step-4 reader concern about an
unchanged draft original-frontier item whose genuine original Luna verdict is
`keep:true`, before the first `impact-initial-1` owner pack freezes. The optional
`research/RUN-step5-reader-concern-admissions.json` is version 1, kind
`owner-confirmed-step4-reader-concerns`, authorized by `owner` with
`owner_identity: /root`, `native_coverage_adopted: false`, a dated record,
`original_count`, nonempty bounded `entries` and raw-SHA256 `bindings`.
Each entry names `id`, owning string `batch`, zero-based `concern_index`, the
exact original `concern` object, `before_guard_sha256`, and `owner_review`.
The review records `reviewed_by: root`, `confirmed_defect: true`, `reviewed_at`,
a concrete `reason`, and a bound focused `evidence_file`; exact proposed edits
use `proposed_edits: [{source_excerpt, proposed_replacement}]` with unique current
literal excerpts, or a bound `candidate_patch_file`. A single edit may place
`source_excerpt` and `proposed_replacement` directly on `owner_review`.
These are focused repair instructions, never preapplied source edits.

Bindings cover the immutable original frontier, baseline and verdict inventory;
the frozen initial pack and every genuine successful native per-unit initial
report/result (including unchanged mechanical zero-work reports); each current
owning batch manifest; the unchanged native Step-4 digest, successful Sol 6.1
medium reader result and exact attempt result and original structured output;
and focused root review evidence or candidate patches. Native preparation also
requires and binds the actual successful initial collection, once produced.
`node tools/step5-workflow.mjs check-reader-concerns --run RUN` validates the
admission read-only at the drained paused 5.1 boundary without claiming that
collection already exists. Preparation accepts only that boundary or drained 5.2
before owner dispatch; stale guards, missing individual confirmation, malformed or
foreign subjects, duplicate entries, or a late admission fail closed.

Version 2 is an explicit opt-in under the same admission kind and retains every
version-1 frozen-frontier, original accepted-Luna, baseline/current-draft,
initial-native-handoff, owner-confirmation, proposed-edit and pre-impact guard.
Creation requires the actual paused, drained native 5.1 owner hold after every
genuine initial unit completes and before the first impact pack freezes. The
envelope adds `creation_state: {file, captured_at}` and
`owner_gate_request: {file, id}` pointing to exact research archives of that
native state and matching request, both raw-SHA256-bound in `bindings`.
The request must name the same run, group and sole stage `5.1-adjudicate`;
the archived state must be paused and drained. Its dispatch rows must match
every successful initial native result and unit coverage, including genuine
mechanical zero-work completions; worker results also retain exact immutable
attempt and successful terminal execution checks. The root records the truthful
archive capture time in `captured_at`, after the native request's `at`, and
`recorded_at` must follow that capture. The native request must follow all
completed initial dispatches. The native state has no update-time field;
filesystem modification times confer no historical authority. Capture exact
native bytes at this real hold; no synthetic paused state is permitted.
Read-only validation still requires live paused, drained 5.1. Native impact
preparation actually runs in drained, unpaused 5.2 before owner dispatch and
authenticates these paused-creation archives while rechecking all original
reports, current manifests and unchanged kept-item guards. It does not require
or imply a new 5.2 pause. All current run manifests remain bound and each item
must have a unique current owner. Version-1 behavior is unchanged.
Each entry supplies typed `source_kind: concern` or
`source_kind: alert` and `reader_batch` separately from owning `batch`.
Concern entries retain the version-1 `concern_index`/`concern` fields and must
come from the owning batch with actual `items_read` membership. Alert entries
must come from a different genuine frozen reader batch, retain zero-based
`alert_index` and the exact original `alert` object with `item: id`, and must
not also supply concern fields. They never imply or alter `items_read`.

The narrow alert route requires the successful original Sol 6.1 medium stable
result to match its immutable attempt, its exact structured output to match the
actual source digest, and a complete unaborted successful terminal result.
`source_observation` records a bound native log/prompt and an exact
`command_output_prefix` for a successful original `cat items/ID.md` read whose
full returned source carrier occurs literally in that log. Its `source_excerpt`
must be a literal quoted passage in the original alert finding and occur in both
that archived source and the unchanged current source. Nonquoting or incomplete
observations do not qualify for this narrow route. `source_continuity.source_file`
is that exact full source archive, bound in the admission; its raw hash must match
the owning batch's original post-3a snapshot. The bound original version-3
Step-3 closure must seal that snapshot, predate the reader, and bind the same
canonical guard as the archive, frozen Step-5 baseline and unchanged current
source. These checks authenticate an actual observation; they invent no past
read, cross-batch coverage or mathematical acceptance. Original alerts stay in
their actual source digest and are never cloned into an owning digest.

Native impact targets and same-reviewer ownership remain keyed only by `id`;
the preserved typed finding and actual `reader_batch` travel in the ordinary
owner pack. Owner repairs, any consequent supplier/consumer duties, current
certification and judgments, source currency and every ordinary gate remain owed.
When installing this adapter at a drained paused boundary, restart the native
controller and any workflow host in fresh processes before resuming: the workflow
statically imports this module, so reloading only a queried workflow URL cannot
invalidate its already cached reader-admission dependency. Do not rewrite frozen
packs or native history to load new code.

The first ordinary 5.2 pack unions these explicit concern subjects with real
consumer impacts and records their distinct origin. Mutable manifest preimages
are archived by the existing supporting-evidence mechanism. The admission grants
no worker execution, mathematical acceptance, judgment, or fatal-threshold credit,
and changes no frozen pack, native report or original verdict. Genuine 5.2
workers review and repair, 5.3 certifies, and 5.4 obtains current Sol judgments for
changed guards. Only actual Statement/Definition changes propagate consumers.
Concern-owning 5.2 lanes use persistent runtime homes under
`.autopilot/RUN/step5-reader-owner-sessions/uN`; necessary subsequent consumer
passes retain the supplier's owner and resume its authenticated successful native
session. Missing session continuity or conflicting reviewer ownership holds for
the root. Unrelated lanes retain their existing dispatch behavior, and all later
rounds, closure checks and complete gate batteries remain mandatory.

The additional
`proof-contract-coverage` mechanical check still requires a contract for each
actual proof-bearing carrier. No new substantive review gate is added. Step 6
performs mechanical contract closure and emits `step6-` owner-report artifacts;
its readiness and closeout commit remain evidence-bound. Publishing/pushing are
owner actions, separate from this build.

Fresh Step 6 uses metadata/render checks -> focused repair -> all final gates
(repeat after repairs) -> concise report -> scoped commit, for both mathematics
and physics. Every distinct mechanical condition and repair route remains;
identical checks run once. Readiness/report integrity hash only the frontier,
actual suppliers, owned evidence and workflow inputs. Git plumbing preserves
foreign working files by construction and verifies outside index flags/HEAD
metadata plus owned committed blobs inside the transaction. There is no
post-commit content gate battery. See [the implementation](tools/STEP6-REBUILD.md)
and [mechanical check map](tools/STEP6-MECHANICAL-CHECKS.md). New v3 stages require
an explicit guarded cutover for historical frozen runs; installation alone does
not migrate or resume them. Legacy closeout/recovery commands remain available
for their original historical receipts. Exact owner-authorized addition-only
published-ledger fragments are supported only by the v3 transaction: authority
and evidence are sealed before preparation, while separate current HEAD/index
foreign residuals and all working bytes are preserved at the actual ref boundary.
They grant record-level commit authority only, without mathematical acceptance
or ownership of the entire shared carrier. Conflicts fail closed.
Exact native v3 packaging preflight may observe the two future-derived
`RUN-pathway-closure.json` and `RUN-judge-closure.json` carriers as absent before
preparation/gates produce them. Every present carrier remains subject to the
same regular-file and symlink checks. This grants no closure or gate credit:
the actual final transaction requires both products, and ordinary native pathway
and current-judge closure gates remain mandatory. Legacy preflight and final
scope loading retain their existing strict closure requirements.

Closeout ignore checks reuse the genuine parsed index for a bounded fast path:
case-sensitive, nonsparse configuration, default ordinary index flags, safe
literal subjects and no pathspec environment overrides. Exact indexed filenames
and literal parent paths with indexed descendants retain native tracked-path
exclusion; every remaining selected path receives actual Git ignore evaluation
with `--no-index`. The parsed index's original raw snapshot and matching
configuration must remain current around the check. Ambiguous states retain the
original native command, including sparse/index-backed ignore handling. No path,
ignore rule, scope/ref guard or present-carrier requirement is waived.

Readiness and closeout treat both `ENOENT` and `ENOTDIR` as an absent path:
a regular file cannot contain child evidence files. Readiness follows existing
local references; required owned carriers still fail when absent or nonregular,
and other filesystem errors remain fatal.

Closeout may close an unchanged published prerequisite ownership claim through
`research/RUN-published-noop-closure.json` (`unchanged-published-ownership-closure`,
version 1). This separate owner-authorized receipt binds the exact claim ledger,
original frozen Step-3 closure, unique claim, current raw carrier and canonical
pre-edit hash, and an ancestor publication committed before the ownership claim.
Native Step-3 closure verification must still pass. This records no mathematical
repair, audit, acceptance or initial publication. A changed canonical hash still
requires the ordinary recorded published repair; neither claim nor native evidence
is rewritten. The no-op receipt itself belongs to the sealed closeout scope.

For an already-performed genuinely delegated published repair whose pre-edit
ownership was not serialized, use the explicit owner recovery:
`node tools/published-repairs.mjs adopt --run RUN --file research/acceptance.json
--receipt research/adoption.json`. Ordinary pre-edit claims remain the default.
This command never edits items or supplies native execution, audit or judge
coverage. It refuses an existing claim and stamps adoption with the actual
current time. Do not backdate evidence or restore old items to simulate history.

The owner acceptance is version 1, kind
`owner-acceptance-delegated-published-repair`, with `authorized_by: owner`,
`verdict: accepted`, actual `accepted_at`, `run`, `id`, `group`, `before_file`,
`before_raw_sha256`, `pre_sha256`, `corrected_file`, `corrected_raw_sha256`,
`content_sha256`, `prior_publication_commit`, `delegated_file`,
`delegated_sha256`, and `delegated_pointer`. Files are durable regular research
files; `corrected_file` archives the complete corrected bytes before replacing
stale verification stamps. Both canonical hashes use `itemHashGuard`.
The full immutable publication commit must be an ancestor of HEAD and contain
the byte-identical published `before_file`, regardless of old audit markers.
The separate delegated JSON must name this run, a delegated `/root/` agent and
lane; the pointer is exactly `/actual_source_repairs/N` (a `before`/`current`
record) or `/items/N` (an `original`/`current` record). The unique item record
must bind the original archive path/raw hash and corrected live item path/raw
hash. Owner acceptance must bind the exact delegated JSON bytes. A changed
delegated artifact requires new acceptance before adoption.

For an actual sequence of delegated integrations, replace the three
`delegated_*` fields with `delegated_chain`, an ordered array of
`{file, sha256, pointer, before_field, corrected_file}` records (at most 16).
Each `corrected_file` is a complete raw snapshot matching that delegated
record's `current.sha256`. The first delegated before path/hash must match the
Git-authenticated original archive; subsequent before bytes must equal the
preceding corrected snapshot, and the final corrected bytes must equal the
accepted corrected snapshot. `before_field` is `before` for
`actual_source_repairs`, or `original` or the explicitly recorded
`integrated_preimage` for `items`. Every artifact and intermediate snapshot is
reauthenticated; mixed single/chain evidence, gaps and inferred endpoints fail.

The resulting claim has explicit `claim_kind: owner-adopted-delegated-repair`,
`adoption_receipt` and `adoption_sha256`; its receipt binds the exact owner
acceptance. Recorded local repair policy reauthenticates this entire chain,
including Git provenance and the current canonical carrier. Replace stale
verification evidence, run actual current precheck and rendercheck after
adoption, and record the ordinary repair receipt and canonical ledger block.
The repair receipt's original archive, before hashes, current canonical hash,
publication commit, item, run and group must match owner acceptance. Recovery
does not satisfy or alter any native workflow gate, frozen history, audit,
judge, publication or owner mathematical acceptance requirement.

If a subsequent actual delegated normalization changes the adopted canonical
carrier, preserve history through `node tools/published-repairs.mjs adopt-refresh
--run RUN --file research/new-acceptance.json --receipt research/new-adoption.json
--history research/new-history.json`. This route requires exactly one existing
explicit adopted claim; it cannot refresh an ordinary pre-edit claim. The new
focused acceptance adds `previous_claim_sha256`, the SHA-256 of
`JSON.stringify` of the parsed active claim. Original item/run/group, ancestor
commit, archive and pre-edit hashes must remain identical. New acceptance
supplies separate genuine delegated formatter evidence and complete raw
snapshots. Its first before snapshot must match the predecessor's accepted
canonical hash; verification-only raw differences are allowed at this sole
boundary. Subsequent steps still join exact raw bytes. The final snapshot must
match the live canonical carrier and differ from the predecessor canonical hash.

Refresh creates new nonoverwriting history and adoption receipts at the actual
current time, preserves the complete prior claim and raw adoption/acceptance
receipts with their hashes, then atomically replaces only the active claim row
under the ownership lock. Earlier evidence remains intact. Recorded repair
policy recursively authenticates each predecessor using its own accepted raw
snapshot, never the later live source. Forged history, changed original scope,
unbound formatter evidence and gaps fail. Refresh confers no audit, judge or
native coverage; current actual local checks must follow the refresh date.

Owner-authorized `RUN-closeout-operational-contexts.json` may omit exact temporary
`overlay`/`shadow` resolver directories beneath the run's owner repair evidence
from the scoped Git commit. Each directory binds its physical tree (file bytes,
entry modes and symlink target bytes without dereferencing), reason and external
hash-bound proposal evidence. Required content/receipts, actual published-repair
inputs, frozen Step-3 artifacts, additional owned paths and prior committed
closeout paths cannot be excluded. These contexts remain on disk, retain full
report protection, and become outside-preservation subjects; the ordinary
canonical-path symlink refusal remains unchanged.

Mathematics closeout projects the independent `physics/.physics-autopilot/`
runtime out of working-byte preservation only; outside Git index and HEAD remain
strictly protected. An already-committed closeout whose original baseline included
that live runtime may recover through owner-authorized
`RUN-closeout-runtime-recovery.json`. Exact archives of its committed final receipt
and failure diagnostic remain immutable. Frozen original runtime metadata must
reconstruct the original full working digest when combined with current canonical
outside rows; original outside index/HEAD digests must still match. Recovery binds
the current policy/context, retains every original owned path, and requires unchanged
original items/pages, manifests/contracts and canonical ledgers. The owner's exact
administrative bridge for `WORKFLOW.md` and `tools/run-commit-scope.mjs` binds their
original index/HEAD/working metadata and exact current metadata. Replacing only
those two rows must reconstruct all three original full digests; both files remain
outside-preserved throughout native commit and subsequent checks. No other
administrative/source change is authorized by this bridge. All native gates
still run. Only after those checks may native closeout write a fresh final receipt
and commit the administrative recovery; later `--check` uses its ordinary new baseline.

Step-6 report integrity recognizes an existing foreign library page independently
of its mutable item manifest only when an unchanged sealed foreign scope ledger
uniquely owes the exact page ID and A/B kind. Its unique frozen and current
library paths must agree, the canonical plan category and kind must match, and
the current regular nonsymlink carrier must declare that page ID. This grants
no new item ownership, page creation, category relocation or shared-track
exemption. The selected run's readiness prerequisite context and exact reporter
inputs remain sealed, and native readiness verification is still mandatory.

The mathematics Step-6 report-integrity snapshot excludes the root-relative
`physics/` namespace owned by the independent physics workflow. Mathematics
sources, shared tools and run evidence retain their existing protection; the
physics reporter continues to seal its own content root. When correcting an
overbroad report baseline, archive its original exact bytes before taking a
fresh native snapshot and retrying the gate.

Worker supporting evidence for mutable batch manifests, proof contracts and
shared ledgers is archived as exact content-addressed bytes at collection.
The exact native `research/RUN-step5-v2/supporting-metadata/SHA256.json`
namespace may contain raw JSON, JSONL or Markdown. Readiness and report source
sealing authenticate the SHA256 filename against the complete regular-file bytes
and retain those bytes without parsing, projecting or following historical links,
including archives from another run reached by native evidence. Missing,
symlinked or changed archives fail closed; other JSON evidence remains strict.
This retains historical evidence without granting ownership or current coverage. The original worker
report remains unchanged; later native repairs may update the live batch carrier.
The frontier-44 six-step historical handoff additionally requires exact archived
preimages, unchanged native origin reports, packs and successful dispatches, and
archived successor deltas within completed native repair assignments. This
preserves historical evidence only; current review contexts and every gate still
apply to the actual current carriers.

The same run's gate-2 ledger input retains its exact archived preimage through
the authenticated gate-3 schema repair and seven owner-attributed append-only
severity corrections. The historical certificate and native reports stay
unchanged. This byte-history bridge grants no current ledger-schema exemption;
the ordinary strict ledger checks still apply to the current ledger.

The frontier-44 six-step defect ledger retains its original frozen Step-3
taxonomy bytes. `defect-ledger validate` and `check` interpret the historical
aliases only after matching the original 1,284-row projection's pinned hash
and successfully verifying the native Step-3 closure. Validation maps proof
and fact loci to `proof-step` and `facts-block`, omitted example hypotheses to
`statement`, the source DOI and page inventory loci to `frontmatter`, and the
page Objective to `page-summary`. Original proof-gap/derivation/field labels
map to `unsupported-inference`, the compound inference/type label to
`invalid-inference`, `alpha` to `group-alpha`, and `repaired` to `fixed`.
All original labels and evidence remain in the ledger; no receipt is resealed.
Every structural, severity, ownership and closure check still applies, and new
appends and later Step-5 rows retain the strict schema.

The machine-learning-all-101-2026-10-19 defect ledger uses a validation-only
projection for 18 exact original Step-3 row objects pinned in
`tools/defect-ledger-historical-metadata.mjs`. It maps their recorded legacy
location/subclass vocabulary and exposes the same original URL as an evidence
locator while retaining every original evidence field. Raw rows, reasons,
severity, disposition, ownership, timestamps and adjudication references stay
unchanged. Changed objects and other runs receive no compatibility; new appends
remain strict. Missing confirmed-fatal ledger coverage remains a hard failure.

For `inverse-problems-knot-theory-all-109-2026-10-19`, the same validation-only
helper interprets exactly nine original Step-3 rows through ten approved
metadata normal forms. Exact run, ID, complete original-row digest and old
field values are required. The original ledger bytes, evidence, verdicts,
severity, ownership and references remain unchanged; append stays strict.
This reconciles location, repair-cost and internal-citation taxonomy without
creating review coverage or exempting new or changed rows. The original and
normal-form evidence is in the run supervision `ledger-schema99-normalization`
packet.

The same run's original frozen 317-row Step-3 ledger projection is verified
through `step3-native-ledger-successor-history.mjs` after its exact successful
native gate-r1-u1 owner appended 18 taxonomy successors (11 in the draft
Step-3 selection). This verify-only path authenticates the unchanged original
closure, exact native report/pack/prompt, successful result and identical
immutable attempt, all 18 original/successor row hashes, same-subject backward
supersession, preserved semantic/evidence fields and actual execution-time
recording dates. Removing only those authenticated selected successor IDs must
recover exactly the original 317-row count and hash. This native append
integrity check runs unconditionally for this run during verify, including when
the selected historical count/hash already matches; missing all selected
successors cannot bypass it. Missing, changed, duplicate
or unbound rows fail; no native report, raw row, closure slot or original hash is
rewritten. Both original and successor rows still owe ordinary current schema,
active ownership, exact adjudication coverage and every native gate. This grants
no new review, certification or mathematical acceptance; close/default behavior
and existing normalization-history versions are unchanged.

Required-page closure verification carries the already-selected original frozen
artifact map through its manifest-history lookup. The unchanged closure, exact
registry bytes, original route/index and original manifest slot authenticate a
genuine restored hash-addressed preimage. No certificate entry, closure slot or
historical hash is added or rewritten. Both historical and current required-page
and consumer ownership checks remain required; default/close callers retain
their certified-history behavior. Install and reload at a drained owner hold,
then recertify current inputs and run the complete native gate battery.

## Run controls and cutover

Published mathematics category audits use the separate TypeScript
[`mathlib.audit.mts`](tools/autopilot/stages/mathlib.audit.mts) entry point and
[`audit.mts`](tools/autopilot/bin/audit.mts) planner; see
[the audit runbook](tools/autopilot/AUDIT.md). They run on main and preserve all
original published statuses. Preparation deletes page summaries and installs
collapsed prerequisites/all-item diagrams mechanically, without an LLM. The
audit omits native Step 3 (independent review), reusing native Steps 2, 4, 5
and 6 with their owner holds and complete gate batteries. Audit numbering is
1 intake, 2 scope review, 3 batch review/judging, 4 adjudication/repair, 5 closeout.
After scope acceptance and its full battery, a mechanical handoff verifies the
accepted manifest-to-plan join and records a snapshot before batch review.
Native stage/evidence IDs retain their existing numbers; the audit uses fresh
`published-math-audit-v2` state without migrating existing runs.
Every GPT-6.1 Sol call in the audit, including repairs and nested rejudges, uses
medium effort through its recorded run policy; ordinary-build effort is unchanged.

In native Step 5, publication no longer exempts a frozen-frontier item from
adjudication, repair guards, certification, required rejudgment, judge stamps or
defect closure. This applies to ordinary math builds as well as category audits;
outside-context maintenance does not silently enlarge the frozen frontier.

Mathematics run inventory supports up to 130 A/B pairs, with exactly one pair per
batch and at most three batches per group. Groups use lowercase spreadsheet
labels (`a` through `z`, then `aa`, `ab`, and so on). Inventory capacity does not
increase active workers: the default global concurrency limit is 20, and stage,
role, prerequisite, exclusive-writer, review and gate checks still apply. Physics
retains its own independent limits.

Extend an existing unfinished Step-1 frontier with native `plan --append` only
after original `1-drift` and `1-drift-apply` have passed natively and the run is
paused at `1-scaffold` (or a native append boundary), with controller and writers
stopped and drained. Append preserves prior manifests and evidence, archives
changed generated metadata, and adds fresh native drift review and apply stages.
It cannot remove or replace prior pairs. When an owner's revised pre-authoring
scope requires removing original pairs, preserve that run and its evidence and
plan a fresh superseding run; earlier readings may be cited as context, while
all native execution, review and gate evidence must be obtained for the new run.
Never force-replan or rewrite historical native reports to imply new coverage.

Use `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts` with the ordinary
`plan`, `doctor`, `start`, `status`, `pause`, `resume` and `retry` commands.
`doctor` and generated task checks can run before authoring; they do not prepare
or spend review rounds. No stage may install new prompts beneath a live old run.
The original `1-drift` plan gate forwards `--before-apply`: it checks current
manifest inventories against the repaired canonical page metadata before native
drift materialization updates those manifests. The `1-drift-apply` gate and all
later plan gates validate the materialized manifest metadata normally. Both
modes retain the same nonempty page selection and dependency/identity checks.
Doctor checks complete command flags, including digit-bearing names such as `--step5-run`, against their tool definitions.
The new revision is `six-step-v1-construction-scope`. Start a fresh run and state directory; historical
receipts/revisions do not satisfy the rebuilt pipeline. Legacy authoring-prefix
migration and ready-pair initial-authoring variants are not current entry routes.
Preserve historical run evidence rather than relabeling it. The retained authoring claim-resolution API is documented in [tools/step3-owner-creation.md](tools/step3-owner-creation.md); it supplies historical origin continuity only.

Guarded same-ID relocation of proved prerequisites uses [tools/step3-owner-rehomes.md](tools/step3-owner-rehomes.md). It preserves the original Step-3a obligation batches while hashing actual current homes; it grants no new review coverage.

Native auditor-created certification considers genuine successful immutable dispatch attempts as historical authoring windows, alongside the stable aliases retained for existing receipts. An immutable attempt must match its run, allowed role/label, attempt/replay filename and evidence tag, complete unaborted successful terminal result, and exact dispatched prompt identity. Identical stable/immutable observations count as one candidate window, preferring the immutable filename; new immutable links freeze the result and prompt bytes. A newer annotation-only dispatch does not erase an earlier authentic carrier-write window or supply coverage outside its own interval. Baseline exclusion, actual carrier time bounds, current carrier hashes and independent-review obligations remain unchanged.

Current Step-3 owner repair helpers use `tools/auditor-created-items.mjs
owner-create --run RUN --step 3 --id ITEM --evidence research/JSON` after
stable source, manifest and proof-contract integration. Immutable origins bind
baseline exclusion, the actual distinct author, assignment/authorship/escalation
evidence and all six current carrier hashes; creation records no independent
review or native execution coverage. Routing also permits an ownership-certified
draft generated counterexample with `generation.role: counterexample`, an actual
refutation and no logical consumers in current frontier manifests or authored
sources. This narrow exception retains ordinary independent review and every
gate; historical scopes, baselines and worker receipts remain unchanged.

For a genuinely native-created Step-3 helper repaired before its first
certificate, `auditor-created-items.mjs native-origin --run RUN --step 3 --id
ITEM --evidence research/JSON` records only immutable birth evidence. It retains
the actual successful immutable native result/prompt/log and original archived
source/manifest/contract projections. Restricted static replay of the logged
successful literal source writes must reproduce the original full item exactly;
actual captured metadata mtimes remain checked, and no missing item timestamp is
invented. The existing `owner-recertify` then binds the actual outside repair
authors, complete source-change chain and all six current hashes, preserving
native authorship separately. Both are metadata operations, not certification
attempts or independent review. Use the ordinary certification gate only after
all escalations resolve. Full schemas and the bounded supported writer grammar
are in [tools/auditor-created-items.md](tools/auditor-created-items.md). Baseline
exclusion, unchanged home/batch, immutable native evidence, current carrier
currency and every review/judge/gate requirement remain mandatory.
First Step-3 closure replays each origin with the actual native log, then pins
the immutable receipt and all original source/metadata/result/prompt/baseline
markers under `native-created-step3-origin-freeze-v1`; transcripts stay outside
the scoped commit. A later missing-log load requires those exact frozen pins
and the successful native `tool-step3-close` result. Present logs always retain
ordinary hash/replay validation; there is no unsealed fallback.


An explicitly owner-authorized restored frontier may retain its original
`pipeline_run` markers. Step-3 dependency routing recognizes those draft IDs
only through `research/RUN-continuation.json`: exact source run, nonempty
hash-bound original manifest archives, matching inventory counts, and
`historical_execution_coverage_adopted: false` are required. Current manifests
must still give a unique owner. This grants content ownership only; old worker,
review and gate receipts never satisfy the new run. Other run markers and
unlisted IDs remain rejected.

Item/page validators select current run manifests. Outside suppliers stay
prerequisite context; do not validate or repair unrelated content. Closeout checks
the engine's content commit. All owner-gate authorization remains one-attempt,
current-hash-bound and formatting/metadata-only under CLAUDE.md.

Proof-layout subjects are exactly the nonempty current manifest inventory, with
unique manifest and actual page ownership. Extra page entries are allowed only
as explicitly declared published prerequisite context in
`research/RUN-proof-layout-context.json`, bound to the owner-approved
`RUN-rehomed.json` evidence and current source hashes. These context inputs are
sealed by the receipt but do not receive frontier proof-layout audits; unknown,
duplicate, unpublished or stale context entries fail closed.

## Pre-gate recertification

Mathematics owner-supervised wrappers also check authorization through the
executor's optional `beforeGates` hook at the drained group join, before any
pending gate descriptor consumes permission. A last worker completing after
`onProgress` therefore still reaches the owner hold. This hook respects pauses,
local/adopted writers and pending native refreshes; it does not repeat native
collection/advance hooks. Stages without it retain their normal gate behavior.

An owner-supervised run may select `tools/autopilot/stages/owner-supervised.mts`
through its run-local `config.json`. Compact runs select
`tools/autopilot/stages/owner-supervised-compact.mts`, retaining their compact
revision and worker prompts. A run may also opt into temporary per-unit holds
through `owner-unit-holds.json` in `ctx.stateDir` (or `ctx.config.stateDir`).
The exact version-1 object is `{version:1,run:"RUN",authorized_by:"owner",
owner_identity:"/root",holds:[{stages:["3a-refute"],units:["52"]}]}`. Stage and
unit arrays contain unique exact strings present in every selected native stage’s
current unit list; unknown stages or units, wildcard selectors,
extra fields, malformed JSON or mismatched authority/run fail closed. The
wrapper composes inherited `unitEligible`, leaving held units owed and their
consumers blocked by native prerequisite checks. Other eligible work continues;
no coverage, gate or final Step-6 transaction changes. Holds affect future
dispatch only and do not interrupt an existing writer. Root clears the hold by
atomically writing the same authority with `holds:[]` (or removing the file)
after the protected repair is complete. This preserves the native stage table,
dispatches and full gate batteries, and pauses after writers drain before each
battery. The supervisor resolves all escalations, then runs
`node tools/owner-gate-supervision.mjs --run RUN --state-dir .autopilot/RUN
--escalations-resolved`. The tool hashes the current manifest frontier and its
supplier context, checks dependency labels and actual-renderer proof formatting
in dependency order, and records a single-battery permission. The supervisor
resumes the native controller. Changed inputs or a consumed permission require
a fresh pass; no review verdict, certification history or gate is waived.
Readiness alias discovery parses only alias declarations in unrelated carriers;
it rejects invalid or ambiguous aliases. Every reached supplier is still parsed
in full and bound into the current-input hash.
Drift planning boundaries record page metadata only because content does not
yet exist; authored boundaries reject empty inventories. This optional wrapper
does not affect other runs or change their worker prompts.
Gate-control files live in the run's runtime state directory. Immutable pass
receipts live with native dispatch evidence, which the report-integrity snapshot
excludes. The final pass after the closeout commit stays in runtime state so
the check does not create uncommitted source files; every final native gate
still runs over the committed carriers.

Outside Codex supervisors follow CLAUDE.md: resolve escalations before gates and
perform a fresh dependency-ordered formatting/metadata-only pass immediately
before every attempt. This pass is not a detailed mathematical review. Only
failed subjects and their downstream consumers receive focused mathematical
repair; rerun the complete gate battery after repair. Keep the mathematics
engine's existing owner-held failure/retry controls. Physics has its own native
one-attempt authorization receipt protocol; its receipt files are not math
workflow inputs.

## Algorithms

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

Worker supporting hashes for shared defect ledgers also bind immutable archived
bytes at collection. Later ledger additions preserve that historical support;
they do not replace validation of the current ledger.

## Open problems

Use `kind: open-problem`, an `op-` ID, `## Open problem` and `## Status` for
unresolved claims. Review exact formulation, dated status, sources and partial
results; do not invent a proof or proof-acceptance stamp. Contracts use
`open_problem_review` instead of proof worksheets. Open problems can consume
formulation prerequisites but never supply `deps`, `justified_by` or proof
premises, including alias-resolved or indirect uses. Source/status review
does not certify a solution. Keep established results awaiting local authoring
as separate proof obligations, and preserve physical postulates/observations.

The optional [initial metadata-history adapter](tools/step5-initial-metadata-history.md)
preserves authenticated original Step5.1 handoffs when source-backed manifest
title/dependency/level mirrors and the single declared source level label must
be corrected before collection. Root records exact before/after archives at the
actual paused, drained5.1 hold. Historical source reviews remain historical;
the collection retains actual current hashes and explicitly queues the changed
source for genuine Step5.2 review before certification. Later live repairs do
not rewrite the archived repair-time graph. This grants no current review,
judge credit, mathematical acceptance or gate exemption.

Native Step 5 initial collection may preserve exact historical supporting proof-contract bytes through `tools/step5-quote-history.mjs`. The owner records the immutable `research/R-step5-v2/initial-1-owner-quote-history.json` only at a paused, drained 5.1 boundary. It binds the original successful native pack/report/dispatch and exact before/current archives, permits only citation quote mirrors verified against current source sections, and rejects every other metadata change. Collection freezes the original bytes using its existing content-addressed evidence path. This grants historical byte continuity only; current review, source currency, execution coverage, and every native gate remain required.

Certified Step 5 rejudgment explicitly uses `judge-sweep.mjs --currency exact-context`: reusable verdicts must match both the current item and frozen context hashes, exactly as required by the round receipt. The ordinary sweep default remains `context-or-item`. Native retry preserves completed exact-context verdicts and calls only targets still owed; it never rewrites prior verdicts or adopts old-context consumer reviews.

An optional owner-confirmed original Step5.1 open-finding registry routes explicit
current repair requests for existing draft original-frontier items through
[the native initial-scope finding adapter](tools/step5-initial-scope-findings.md).
Creation requires paused, drained5.1 before the first impact freeze/dispatch and
archives the actual runtime state and exact owner request. Actual drained5.2
planning may be unpaused; it binds the authentic initial collection, all original
handoffs, exact native findings, current source guards and individual root work
instructions. These requests remain separate from Step4 reader concerns and
adjudication decisions, preserve genuine same-reviewer origins and frozen input
evidence, and grant no review coverage or exemption from ordinary certification,
rejudgment, thresholds or gates. After impact freeze the registry is immutable.

In centralized Step 5 mode, deletion protection covers the frozen frontier and its current transitive `deps`/`justified_by` suppliers, with canonical IDs taking precedence over the original native pack aliases. Missing protected inputs fail closed; absent original alias context retains strict global deletion rejection. Foreign deletions remain visible as `excluded.deleted` observations, excluded and not passed. Legacy mode retains its global deletion policy.

Step 5 library inventory tolerates short concurrent-authoring read races with six bounded attempts for missing files, frontmatter, or matching IDs (five waits totaling at most 3.1 seconds per affected file). Persistent invalid inputs and other errors still fail; no item is skipped. Raw, guard and statement hashes come from the same successfully read source text. This provides per-item read consistency, not an atomic corpus snapshot; native frontier currency and certification checks remain mandatory.

Step 5 inventory accepts explicit run context to keep frozen/current frontier items, explicit maintenance subjects and their transitive suppliers strict, with canonical IDs before current and historical aliases. Only after bounded read retries may an unavailable unrelated authoring carrier be excluded: its exact manifest ownership and active native author dispatch must be established, and it must be outside the required closure and declared frontier consumers. Valid outside items remain available for discovery. Content-addressed run-local observations bind the manifest, state and dispatch evidence and explicitly grant no mathematical review or certification coverage. Unowned, ambiguous or required unavailable inputs still fail. No other run is modified or controlled; unscoped callers retain strict inventory behavior.

Explicit native owner `downstream_pending` entries are bounded unique frontier
IDs already present in the same report's ordinary `downstream` and collected
inventory. Continuation authenticates the unchanged original collected report,
pack and successful Sol6.1/high dispatch against its immutable attempt.
Native base-wave coverage is the bare lane; continuation coverage is the exact
`phase:lane` stage unit, while reports retain the decoded bare lane. Initial
adjudicator report handling is unchanged; the owner-wave helper alone validates
the bounded pending extension against the actual frontier. A genuine
current same-wave sibling review or later owner-pass review can discharge this
work; an initial adjudicator review or earlier pass cannot. Only missing current
work enters the next ordinary pass, defaulting to the actual declaring owner and
its genuine persistent session. Existing stricter same-reviewer duties remain.
New packs retain exact origin report paths and original affected-use text as
`native_downstream_pending`, with bound report/result/attempt evidence; only new
ordinary task files show that context. Existing packs, reports, admissions,
receipts and task/prompt files are never rewritten. Closure recomputes genuine
current coverage, and ordinary certification, judging and all gates remain owed.

After active writers drain at an owner hold, the existing native `advance-impact`
command may create the next real pass before gate permission/resume. This uses
ordinary collection/progress transitions, grants no gate waiver and supplies no
mathematical acceptance or refreshed old review. Workflow installation/reload
still occurs only at the actual paused, drained boundary.

An opt-in version-4 `step5-owner-current-repair-supplement` at the existing
`repeat-N-owner-current-repairs.json` path resolves separately confirmed scope defects
before the actual paused/drained 5.5 owner boundary passes its native gate. Its
separate path coexists with versions 1–3 at the original supplement path;
overlapping current review/decision rows must be exactly identical.
It admits only typed entries: a genuine completed assigned confirmed-fatal
repair that narrowed a frozen approved clause, or an exact original successful
native `repair_notes` outside-lane alert about an unassigned unchanged draft
frontier definition. Entries retain original report/result/attempt/prompt,
frozen approved and native-post source archives, actual creation state/request,
separate root finding, real repair attribution and actual current root reviews.
The assigned branch preserves original outcome/type and fatal counts; the
outside-alert branch supplies no rejection, decision or native full-reading
claim. Only source-backed actual root defining-clause repairs qualify.

The bounded existing-frontier scope includes all affected old/current direct
consumers, propagating further only through actual defining-clause changes.
No new native execution, fake open finding, native report rewrite or changed
verdict is supplied. Collection preserves original native rows and separately
attributes current root reviews/repairs; ordinary interface propagation,
outside maintenance, ordinary 5.6 consumer work, 5.7 certification, current Sol judgment and every gate
remain mandatory. Versions 1–3/default behavior are unchanged. Creation must
precede the first 5.6 pack/dispatch; native collection consumes the authenticated
paused creation after ordinary permission/resume in the same drained 5.5 stage.


A completed native consumer-maintenance proof repair of an already certified
run-created draft helper outside the immutable frontier may supply a separate
`native-consumer-maintenance` certification basis. It is not a frontier review,
new creation, adjudication decision or judgment. Certification authenticates the
current closed wave's selected pack and collection, frozen assignments/tasks,
original report, successful immutable native attempt and actual prompt, exact
surgical reconstruction whose guard and `itemHashJudge` match the prior certified
helper (raw maintenance hashes are distinct), unchanged metadata and
Statement, current source bytes, and unchanged dependency/reference supplier
source snapshots since the maintenance pack. Missing or stale evidence fails;
Statement/Definition changes and ordinary outside items do not use this bridge.
The certificate separately records this maintenance basis and centrally computes
its actual current certification context. Original creation provenance, native
reports, fatal counts, frozen frontier, consumer duties, Sol judgment scope and
all ordinary gates remain unchanged. Still-current authenticated prior maintenance
bases carry forward by helper ID on later waves; a genuine newer basis supersedes
them, while stale source/supplier evidence fails rather than disappearing.
Saved certification reuse also checks the
current source and context of these maintained helpers. Install/reload changes
only at an actual paused, drained boundary.


A failed current native Step-6 v3 finalization, including a run that entered v3
without an earlier cutover, may use mathematics `cutover-step6 --refresh` with
its existing inspected owner-sealed authorization. This refresh supports exactly
`six-step-v1-construction-scope` and `six-step-v1-compact`; historical cutover
remains exclusive to the construction-scope revision. Compact refresh requires the exact
run-local native compact adapter (`mathlib.compact.mts` or
`owner-supervised-compact.mts`) and native `compact-v1` policy. Its guards
separately seal the runtime configuration bytes and adapter/policy identity;
source guards retain all actual tooling bytes. It requires the stopped,
paused/drained unfinished finalizer and genuine completed preceding battery.
The transition does not reuse that battery: archive its actual history, reset
only Step-6 dispatch/results/state through the native transition, then execute
fresh preparation and every final gate before report/commit. Steps 1–5 and
original Step-3 closure remain unchanged.

The failed-refresh inspector authenticates actual completed failed dispatches
and event pairs with the supported pre-ref source-change refusal messages.
Success, unknown/pending transactions, commit-bearing or commit-landed results
require separate recovery. The original Git base comes from an authenticated
previous cutover, or, for a fresh v3 run, the already sealed native plan-projection
original HEAD; no guessed base or current-HEAD shortcut is accepted. Independent
foreign commits are allowed only when that base is an ancestor and every
intervening commit has the identical exact owned HEAD projection. Current owned
index rows must equal their authenticated bases with ordinary flags: separately
sealed original index rows for shared plan/ledger projections, and the original
HEAD for ordinary owned files. Absent original ordinary index evidence is not
invented to admit staged owned differences. Shared foreign records retain their
separate HEAD/index bytes. Any owned integration, movement, conflicting index,
missing authority or race fails closed without resetting a ref or index.

The exact current HEAD, raw index, owned projections, scope, source, state/events
and failed-attempt basis are sealed in the refresh guards and rechecked before
the one atomic native state swap. Original state/events, preparation, reports,
results and authorization remain in the cutover archive/receipt chain; the event
stream remains append-only. Neither code installation, inspection nor refresh
creates coverage, changes foreign working/index/HEAD carriers, or authorizes
publication/push. Tests for this repair were explicitly waived by the owner;
that does not waive the fresh actual native Step-6 preparation and full battery.

In Steps 2–5, repairers and adjudicators check every assigned TikZ/tikzcd
diagram for mathematical correctness, repair defects and add missing diagrams
where needed. This includes commutative and string diagrams, Young tableaux,
braids, Temperley–Lieb diagrams and other types. Existing write scopes,
read-only roles and the requirement for proofs independent of diagrams remain.

An explicitly unavailable initial native reporting context may use the guarded
[initial reporting-owner context recovery](tools/step5-initial-reporting-owner-recovery.md)
at the actual paused, drained 5.2 boundary before any followup pack/progress.
The opt-in all-lane receipt authenticates every original initial execution,
root-confirmed unavailable context, complete current guards and the real hold.
Its separate historical scheduling observation grants no current review or native
acceptance; exact original uncertainty remains recorded, and ordinary collection
continues to reject it. At the existing permitted owner-hold native advance-impact
boundary, three new persistent owners review their complete original assignments
plus pending consumers, suppliers first. Later passes resume these genuine new
reporting sessions. Overlapping floors or genuine reader-identity conflicts fail
closed. Default dispatch, immutable originals, repair budgets and every ordinary
certification, judgment and gate remain unchanged.

An optional [successful successor uncertainty continuation](tools/step5-successor-uncertainty-continuation.md)
handles exactly the first persistent initial owner3 pass after reporting recovery.
It requires the actual paused/drained5.2 boundary, original successful immutable
native execution and a genuine completed same-owner proof-only mathematical
repair with all affected consumer dispositions and current guards. Exact original
uncertainty remains a strict ordinary collection failure and a separate zero-credit
historical observation. Only still-current nonuncertain original native evidence
outside the forced affected floor can carry as existing evidence. The permitted
native advance-impact helper prepares a new ordinary pass resuming the actual
persistent reporting session; fresh supplier/consumer reviews remain mandatory.
No gate permission, repair-budget reset, source narrowing, old-report rewrite or
mathematical acceptance is supplied by this scheduling bridge.

The defect-ledger check drains both output streams before exiting so native
pipe capture retains its complete excluded-finding evidence and actual checked-row
summary. Exclusions remain excluded, not passed; errors and the positive scoped
row liveness floor remain blocking.
