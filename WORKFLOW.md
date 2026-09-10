# Build and operations

[CLAUDE.md](CLAUDE.md) defines repository rules; [SCHEMA.md](SCHEMA.md) defines
content. The TypeScript engine in `tools/autopilot/src/` owns dispatch,
retries, checks, and transitions. Agents perform assigned mathematical work;
there is no LLM orchestrator. Stage definitions in
[mathlib.mts](tools/autopilot/stages/mathlib.mts) and
[mathlib.step6.mts](tools/autopilot/stages/mathlib.step6.mts) are authoritative.

## Commands and run identity

Run from the repository root. In the examples, define this shell helper and
replace RUN with the actual run name:

```bash
autopilot() { node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts "$@"; }

autopilot frontier
autopilot frontier --next --max-pairs 27
autopilot plan --run RUN --pairs next --max-pairs 27 --state-dir .autopilot/RUN
autopilot doctor --run RUN --state-dir .autopilot/RUN
autopilot start --run RUN --state-dir .autopilot/RUN --detach
autopilot status --run RUN --state-dir .autopilot/RUN
```

Use the same `--state-dir` for every command targeting a run. Its default is
`.autopilot`; each state directory belongs to one run. An old root state file
or historical RESUME document may describe a different run. Verify the run
against the controller's command line/lock, state files, and Git history.

`start` validates the stages and runs doctor before dispatching. Doctor checks
command flags, tasks, placeholders, output schemas, scope, attempt arguments,
defect coverage, and judge-runner launch. It does not establish account quota
or mathematical correctness.

The selected state directory contains:

| File | Purpose |
|---|---|
| `state.json` | Attempts, stage/check timestamps, repair budgets, blockers, pause state |
| `events.jsonl` | Append-only events |
| `status.md` | Latest report; use `status` to recompute completion |
| `autopilot.log` | Detached controller output |
| `control.json` | Next control command, consumed by the controller |
| `controller.lock` | Controller ownership |
| `stopped` | Stop marker respected by the watchdog |

The bundled `bin/watchdog.sh` only targets the default `.autopilot` directory
and detects controllers without distinguishing runs. Do not use it for a
custom state directory or multiple concurrent runs.

### Selection and planning

`frontier` shows dependency waves from page publication status; it accepts
`--categories`. `frontier --next` selects unfinished pairs across categories
in plan order. Both A and B pages must independently have strictly more than
95% of same-category prerequisites published. Zero prerequisites qualify;
exactly 95% does not. Partner A/B edges and cross-category edges are excluded.

Planning caps the run at 27 pairs; preview can use a larger explicit cap.
Selection does not pull unpublished prerequisites into the run.
For an explicit `--pairs a-page-id,...` list, `--allow-in-run-dependencies`
permits missing prerequisites supplied by earlier pairs in that run. The scope
ledger records this exception and drift review rechecks it.
`--allow-unbuildable` records an intentional stop at Stage 1.

Planning generates manifests, covers, scope, tasks, and drift inputs.
Drift review may change prerequisite edges, order, or scope; `1-drift-apply`
materializes approved changes before scaffolding. Same-scope checkpoint recovery
preserves populated inventories and batch identities. Scope-changing recovery
refuses populated manifests. Use generators rather than editing their outputs;
`tools/run-tasks.mjs --run RUN` rewrites generic tasks from `briefs/tasks/`.

## Steps and stages

| Step | Stage IDs | Required result |
|---|---|---|
| 1a — drift | `1-drift`, `1-drift-apply` | Reviewed prerequisites and mechanically synchronized scope/tasks |
| 1b–c — scaffold and gate | `1-scaffold` | Current item-readiness records, reconciled scaffolds and full checks |
| 2 — assign | `2-assign` | Disjoint Alpha groups covering every batch, at most three batches each |
| 3a — scope | `3a-scope` | Sufficient scope or explicit owner approval for every pair |
| 3b — audit | `3b-audit` | Current item decisions and final mechanical gates |
| 4 — materialize | `4-splice`, `4-baseline` | Synchronized item inventory and pre-author snapshot |
| 5 — author | `5-author` | Complete batches enter 6B; full checks pass at the author/review join before the 6B baseline |
| 6B–D — close | `6b-prepare`, `6b-adjudicate`, `6b-baseline`, `6c-edges`, `6c-cross`, `6d-close` | Direct authored-content review, cross-group resolution, impact evidence, Step 6 receipt |
| 7 — judge | `7-scope`, `7-judge` | Frozen-text judgments and group reader digests |
| 8 — repair | `8-baseline`, `8-scope`, `8-adjudicate`, `8-preflight`, `8-rejudge`, `8-close`, `8-final`, `8-freeze` | Authorized fatal repairs and current certification |
| 9 — certify changes | `9-scope`, `9-scope-render`, `9-scope-freeze`, `9-changes-judge`, `9-close`, `9-changes-stamp`, `9-receipt` | Decline review, changed-content judgment, impact and coverage receipts |
| 10 — close run | `10-contract-close`, `10-snapshot-v2`, `10-pathway-sync-v2`, `10-pathway-seed-v2`, `10-pathway-author-v2`, `10-stamps-v2`, `10-readiness-v2`, `10-evidence-v2`, `10-report-baseline-v2`, `10-owner-report-v2`, `10-owner-report-render-v2`, `10-close-v2` | Contracts, pathways, stamps, readiness, report, obligations, commit |

## Roles, models, and limits

[tools/models.mjs](tools/models.mjs) owns model IDs and profiles;
[tools/dispatch.mjs](tools/dispatch.mjs) owns role defaults, permissions,
web access, sessions, and output capture. Stage profiles override role defaults.

| Assignment | Configured model / effort |
|---|---|
| Step 1 scaffolding; Step 9 `step9-lead` | Astra / medium |
| Step 5 authors and author recovery | Astra / medium |
| Step 3a scope reviewers; Group Alpha (`alpha`) | Sol / high |
| Step 3b item adjudicators | Astra / medium |
| Step 6b adjudicators and their gate recovery | Astra / medium |
| Step 8 adjudication | Sol / xhigh |
| Step 8 final adjudication | Astra / medium |
| Step 2 partition; Step 7 group readers; other Step 9/10 agents | Terra / high |
| Item judge | Terra / xhigh |

Other dispatches use their role defaults; for example, unprofiled Beta uses
Terra xhigh. Consult the stage-selected profile, not a role name alone.

Step 6B uses Astra / medium to review authored items and pages directly.
There are no Step 6A readers or refuters.

- Do not repeat Step 3's scaffold/scope audit; review actual authored arguments.
- Be impartial and honest about understanding. Consult authoritative web sources for unfamiliar mathematics.
- Accept sound content; repair defects locally. Fully author definitions and lemmas in assigned existing A pages when needed.
- Escalate substantial prerequisites that cannot be supplied locally. Never accept unresolved mathematics; report source/understanding blockers honestly.
- Record every published defect in the canonical published-consumer ledger.
- Every item/page, including new local suppliers, needs an evidence-bearing `accepted`, `repaired`, or `escalated` decision. Acceptance needs no invented defect row.
- 6C's cross-batch audit and 6D's closure remain unchanged.

Rate limits do not authorize a model change; substitution requires an owner
instruction.

Betas author their batches. Group Alphas review assigned authored content.
Group Alphas resolve assigned findings; Lead Alpha handles cross-group work
and receipts. Judges return frozen-text verdicts. Tools own mechanical work.
Every agent dispatch must declare a supported mathematical/review `job`.

Stage batch capacity is 27; group capacity is nine. Actual concurrency also
obeys role slots and the configured global limit, currently **24** in
`autopilot.config.json`. The judge sweep has a separate pool capped at 27.
Whole-run writes and ordered snapshots/receipts are serial.
Dispatch starts are staggered by three seconds; completion wakes the engine.
Controls/external work use the configured 30-second polling fallback.
Configured reports are every ten minutes. Supervisors check every ten
minutes and intervene only on blockers or repairs that fail to finish.

Agents and judges currently compact at **200,000 total context tokens**.
This is a trigger, not a hard ceiling. Read complete relevant arguments in
bounded chunks. Writing agents checkpoint completed items in assigned notes;
after compaction, reread current proofs, dependencies, sources, and open
obligations. Read-only roles reread their supplied evidence and write no
checkpoints.

Dispatch receipts retain observed input, cached input, output, request peaks,
requests above 272k, and compactions. Cached input is part of input; missing
telemetry is unavailable, not zero. These counters are not billing estimates.
Logs retain bounded beginnings/ends with truncation markers.

## Completion and checks

A stage clears only when successful matching results cover every unit,
required artifacts exist, and its gates pass. Process exit alone is insufficient.
The engine recomputes coverage from disk, adopts compatible live dispatches,
and reconciles their eventual receipts. Persisted stage ownership also adopts
repair-hook labels outside the primary result pattern. A group join waits
for adopted repair jobs as well as locally launched jobs before rerunning
gates or spending another repair round.
Legacy results may use `coversMap`; when no result declares coverage, the
coverage helper falls back to a result count. Artifact and gate checks still apply.

Completed, inactive author batches enter Step 6B without waiting for other
batches. These stages overlap per batch:

`5-author → 6b-prepare → 6b-adjudicate`

Preparation freezes one complete batch. Each group adjudicator receives only
ready batches; writers within a group are serialized, including adopted jobs.
Later subsets merge their reports and decisions without replacing earlier work.
All Step 5 and 6B gates still run over the full frontier at the join, with no
writers active. Only then does the whole-frontier sequence begin:

`6b-baseline → 6c-edges → 6c-cross → 6d-close`

Preparation freezes the authored inventory. Group review covers all authored
items/pages and local definitions or lemmas added during repair. High/critical
risk reviews are recorded during that same read. Mechanical checks enforce
coverage, current hashes, dependency integrity, and defect accountability.
Historical version-2 reader/refuter evidence remains verifiable; new runs use
version-3 direct scopes. Preparation refuses to overwrite an existing legacy scope.

Checks cover plan/scope/splice consistency, dependencies, forward/external
references, rendering, prose, sources, pathways, provenance, contracts,
finite smoke tests, risk, boundaries, citation fidelity, and evidence liveness.
Passing structural checks or finite tests does not prove mathematics.
Risk reports preserve complete piped JSON and failure exit codes; the process
exits naturally after output drains. Risk routing targets the direct 6B Alpha,
not retired reader/refuter stages.

The Set Theory completion track has an additional bootstrap gate. Foundations
pages fail validation if their declared page prerequisites or authored logical
dependencies reach `deferred-set-theory-beyond-choice`, even transitively. That
catalogue is a target ledger, never a supplier page.

Source gates require harvest dispositions and verified active sources or
documented Step-1 source drops. After an initial full-text retrieval failure,
search alternate locations and retry at most five times. Stop on success;
recorded attempts survive handoffs and repeated fetch-tool invocations.
After exhaustion, construct complete alternative arguments with all required
local dependencies, or escalate to the owner. Full mathematical confidence
and genuine recovery evidence are required for a drop; it waives the original
backing and any source-count shortfall, not results or dependency checks.
Temporary outages do not establish permanent unavailability. Step 3
independently judges the alternative, not the fetch receipt.
Compressed-object PDF sources require `mutool` for an accurate page count;
parser failure leaves them unstamped. A page-count pass does not establish
that the cited chapter is present or has been read. Source fetching allows
at least two seconds per address connection attempt, within its overall
timeout, to avoid premature failures on reachable academic hosts.
PDFs shorter than four pages require `short_document_reading` on the source:
`scope: full-document`, full `sha256`, `pages`, printed `first_page` and
`last_page`, `reviewed_by`, `reviewed_at` (YYYY-MM-DD), `publication`, and
`completeness_evidence`. Read every page and verify the complete publication
range, including its ending; never use this for an abstract or partial extract.
The fetch tool binds the receipt to downloaded bytes and page count; check
mode revalidates it. This records full-text availability, not a proof verdict;
Step 3 still independently checks source use and mathematics.
URL liveness reads decoded coverage strings and excludes `historical_*`
snapshots, `checks`, `recovery_attempts`, and `source_resolution`; valid dropped sources are
history, not live citations. Fetch/backing/coverage gates validate each drop;
it supplies no fabricated fetch stamp or mathematical approval.

Splicing preserves an existing complete same-page inventory when a run
manifest is empty; partial or missing inventories fail. Manifest items require
explicit `deps` arrays, normalized mechanically when absent.
Proof contracts recognize `deps`, `justified_by`, and `forward_refs`;
forward references still require their own ordering/cycle checks.

Step 3 records same-frontier cross-batch dependencies (including same-group
batches) under `briefs/tasks/frontier-dependency-ledger.md`. Consumer-batch inputs
merge into `research/RUN-cross-batch-dependencies.json`; writers maintain them
after dependency edits. Stage joins refresh and deduplicate the ledger, and
Step 9's lead reads it for scope and impact. This inventory does not replace
mathematical review, Step-6 verdicts, or certification.

Manifest policy accepts an existing item only when the canonical plan already
homes it on that same page, or an owner-approved re-home receipt licenses the
move. An existing ID claimed by another page remains a fatal collision.

Snapshots track `pre-author → post-6b`, `post-6b → current`, and
`post-step8 → Step 9`. Impact receipts account for downstream consumers.
Every confirmed fatal requires one compatible row in
`research/defect-ledger.jsonl`; Step 10 renders `DEFECT-LEDGER.md` and
requires no open rows.

## Repairs and controls

### Step 1: drift, construction, final gate

- **1a — Sol/high Alpha:** read assigned prose and the canonical plan; apply authorized prerequisite/order corrections. New pairs, scope changes and unresolved mathematics require the owner. Write the drift report; do not edit manifests or scope records.
- **Mechanical materialization:** `1-drift` checks report/spec decisions with `--before-apply`; `1-drift-apply` synchronizes approved changes and checks final scope/buildability. Failure holds; there is no automatic drift re-review.
- **1b — Astra/medium Beta per batch:** construct items in prerequisite order, read authoritative sources for unfamiliar mathematics, supply complete local dependencies and source coverage, and record each item as `ready` or `escalated`. Keep unchanged ready items intact.
- **Write boundaries:** Betas own batch manifests, coverage, notes, item-readiness records and consumer-batch dependency inputs. They do not edit published content, shared plans, verdicts or engine state. Cross-batch changes and new prerequisite pairs are escalated with exact designs and supplier chains.
- **1c — owner/operator reconciliation:** resolve escalations and reconcile affected prose, the canonical plan, Phase-2 scope/counts, cross-batch records and `published-consumer-supplier-ledger.md`. Recording a future pair does not authorize adding it to this run or using it as a published supplier.
- **Final engine gate:** require current readiness for every item plus scope, drift, coverage, manifest dependencies/policy, the merged cross-batch ledger, plan, external-reference and source checks. The complete failure set is written to `research/RUN-step1-blockers.json`; no repair agent is launched. After applied corrections, rerun gates without rebuilding unchanged scaffolds.

Use `tools/step1-decisions.mjs`:

```bash
node tools/step1-decisions.mjs record --run RUN --item ID --decision ready --dependencies '["SUPPLIER_ID"]' --reason "Proof strategy, exact dependency checks and evidence"
node tools/step1-decisions.mjs record --run RUN --item ID --decision escalated --dependencies '[]' --reason "Exact blocker and required owner action"
node tools/step1-decisions.mjs check --run RUN
```

Only the owner or an explicitly authorized operator may use `--owner` to
record readiness after resolving an escalation. Records bind to current item
and transitive declared/examined dependency content. Changes invalidate the
affected readiness; an escalation remains owner-controlled even after edits.
These are construction records, not Step-3 approvals.

Initial dispatch failures retain the configured three-attempt infrastructure
limit and four-hour scaffold timeout. Gate failures and missing-output
stalemates hold for intervention without mathematical repair budgets or
fingerprint loops. Source recovery has its separate six-attempt total above.

Existing stage IDs and scaffold files are preserved. Old worker results do not
supply readiness records. A run returning to Step 1 needs explicit current
records, not invented approvals or a bulk mathematical rebuild. Do not reset
completed stages or regenerate live tasks merely to install this change.
Already launched prompts do not change; coordinate any cutover with the owner.
The new executor hold handler requires a controller restart before using this
Step-1 flow; stage-file hot reload alone does not load executor changes.

### Step 3: scope, item audit, final gate

- **3a — Sol/high group Alpha:** review each pair's scope against its prose design and source coverage. Record sufficient or insufficient. Insufficient scope stops for the owner; reviewers cannot enrich, merge or override an escalation.
- **Owner:** decide to proceed, merge pairs or enrich scaffolds. Apply amendments to manifests, coverage, prose, plan and scope records, then record proceed for the resulting pair. All pairs must clear 3a before 3b starts.
- **3b — Astra/medium group Alpha:** audit one item at a time in prerequisite order. Accept, repair locally with 100% confidence, or escalate. Be unbiased, acknowledge uncertainty, and read authoritative sources for unfamiliar mathematics. Examine actual published, planned and frontier dependencies, including implicit uses; maintain cross-batch records.
- **Owner:** resolve escalated items. Record an applied repair; otherwise hold. An adjudicator cannot replace an escalation, even after inputs change.
- **Final gate — engine:** require current decisions for all items plus dependency, scope, policy, coverage, source, plan and frontier-ledger checks. Accepted, locally repaired and owner-repaired items receive no further mathematical adjudication on unchanged inputs. Mechanical failures hold for local resolution, not another review loop.

Use `tools/step3-decisions.mjs`. Scope receipts bind the pair's claims and
inventory; item receipts bind the item and transitive declared/examined
dependencies. Changed content invalidates affected approvals. Owner decisions
remain owner-controlled. Hashing records currency, not mathematical adequacy.

Only the owner or an explicitly authorized operator may use `--owner`:

```bash
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --owner --decision merge --reason "Owner merger decision; amendments pending"
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --owner --decision enrich --reason "Owner enrichment decision; amendments pending"
node tools/step3-decisions.mjs record-scope --run RUN --page A_ID --owner --decision proceed --reason "Owner approval of current scope"
node tools/step3-decisions.mjs record-item --run RUN --item ITEM_ID --owner --decision repaired --dependencies '["SUPPLIER_ID"]' --reason "Applied repair and evidence"
node tools/step3-decisions.mjs record-item --run RUN --item ITEM_ID --owner --decision hold --dependencies '[]' --reason "Unresolved issue"
node tools/step3-decisions.mjs check --run RUN --phase final
```

Active stages use `briefs/step3-scope.md` and `briefs/step3-audit.md`, not old
run-specific recheck prompts. Historical `3-review/3-fix/3-recheck` results and
`scaffold-resolution.mjs` receipts do not satisfy the new gates. A paused run
entering these stages requires new scope and item decisions; upgrading code does
not authorize resuming it. Launch/provider retry limits and other stages are unchanged.

### Phase-2 supplier boundary

Step 3 checks structural page prerequisites and actual item-level proof
dependencies separately. A defect in another item merely sharing a prerequisite
page is Phase-3 consumer debt, not a blocker on a new supplier. Retain that debt
in `research/published-consumer-supplier-ledger.md`. A blocking published defect
must identify the owned item, actual dependency path, and affected premise;
unlinked proof uses and well-definedness obligations count too. Reroute or
prove those premises locally when possible. Never accept a defective actual
supplier, waive the Foundations boundary, or replace independent verdicts with
a graph traversal. Apply this rule through Step 3b and owner decisions; never
rewrite an escalation as an adjudicator acceptance.

```bash
autopilot pause --state-dir .autopilot/RUN
autopilot resume --state-dir .autopilot/RUN
autopilot report --state-dir .autopilot/RUN
autopilot retry --state-dir .autopilot/RUN
autopilot retry --unit 3 --state-dir .autopilot/RUN
autopilot stop --state-dir .autopilot/RUN
```

- `pause`: stop new dispatches; active work continues.
- `resume`: clear pause/stop marker. It does not launch a dead controller.
- `retry`: re-arm failed/unfinished dispatches and unfinished repair budgets
  after intervention; completed work remains covered. It cannot extend the
  lifetime judge cap. `--unit` filters dispatch resets, but unfinished-stage
  repair-budget resets are not unit-scoped.
- `stop`: exit the controller, leaving active work available for adoption.
- `skip --stage ID`: owner-only waiver of that stage's assurance.

To restart, stop the controller, verify it exited, then issue `resume` and
`start --run RUN --state-dir .autopilot/RUN --detach`. Wait for resume to be
consumed before sending retry: control.json holds one command, not a queue.
Controller locking rejects duplicate starts.

### Owner-authorized post-6B run merge

Merge only after every source run has completed6B and is paused with no
unfinished dispatches. `merge-runs.mjs` refuses active sources and existing
targets. It checks current source routing and any frozen Step6 closure,
maps disjoint batches/groups, preserves original source evidence and imports
exact pending published-repair handoffs. It never creates model-success
receipts or marks unexecuted stages passed.

```bash
node tools/autopilot/bin/merge-runs.mjs prepare --run NEW --sources OLD1,OLD2
node tools/autopilot/bin/merge-runs.mjs verify --run NEW
autopilot start --run NEW --state-dir .autopilot/NEW --detach
```

Preparation creates namespaced artifacts, the tool receipt directory, and a run-local `config.json` with
only `run` and `stages`. Other configuration, including models and limits,
still comes from the global configuration. All controls/status calls use
the new state directory; an explicit conflicting run name is rejected.
Task generation omits the unreachable initial drift task for imported runs.
Legacy reader/refuter envelope checksums are rebound to translated containers;
original source checksums and mathematical carriers remain unchanged.

The merged stage table begins with a machine-verified import checkpoint, then
an owned repair join reruns all canonical Step 5 and 6B gates over the combined frontier before
the canonical 6B baseline, 6C, 6D and every later stage. Source
item hashes, original artifact hashes, imported envelope hashes and defect
records are bound by the import record. Composite impact baselines preserve
each source's earlier owned changes; the original snapshots remain intact.
Only container identities/checksums change during import, not mathematical
carriers or original review attribution. Fresh combined6C checks and closure
remain required before Step 7. The existing guarded 6C-to-Step-8 protocol
does not waive earlier import gates; a merge supplies no verification stamp.
Separating import verification from the repair join preserves source evidence
while allowing genuine later repairs to merged copies. The join uses the
canonical Astra/medium 6B repair hook and budgets, with no gate waiver.
Splice verification parses page YAML, so quoted published page/item IDs are
recognized as existing suppliers rather than unbuilt prerequisites.
If preparation or verification fails, keep the target stopped and reconcile
the exact diagnostics. Source runs remain available and must stay paused.

Stage files hot-reload after validation; completed stage order cannot change.
Configuration and imported model-registry changes require a controller restart.
Prompts already supplied to agents do not change; task-template edits require
regeneration for existing runs.

Launch preflight validates the complete dispatch arguments before any repair
group starts. Deterministic launch errors restore repair budgets.
Stages require gates or an explicit `gatesWaived` explanation; terminal gates
cannot be waived by the stage definition.

Failed dispatches stop at the stage/configured attempt limit (default: three).
Step 1 reports holds as described above. Steps 5 and 6B retain three repair
attempts per gate/item: mechanical fixes first, then non-overlapping Alpha
groups or one writer for unknown ownership. Their unchanged-input checks stop
repeated ineffective repairs. Other stages use their declared budgets; final
checks remain mandatory.

Step 6B recovery repairs live findings; it does not dispatch readers or refuters.
A repair hook reporting an external outage refunds its round and defaults to
20-minute backoff. This does not guarantee that every failed provider dispatch
is recognized as an outage; inspect its result and log.

## Judgment and repair authority

Step 7 judges each item independently with the full item, direct-dependency
interfaces, and A/B-pair interfaces. Sibling proofs are judged separately.
Verdicts bind to item/model/context hashes. Old-model records or changed hashes
do not cover current judgment. The sweep stops new launches on rate limits.

Step 7 group readers produce frozen digests. Step 8 starts fresh adjudicators
from those digests and generated tasks. Every reader concern, cross-group alert,
and judge rejection requires an owning-group disposition; page concerns cannot
license unrelated item repairs.

Rejection outcomes are `confirmed_fatal`, `confirmed_nonfatal`, or
`false_positive`. Only confirmed fatal findings authorize mathematical repair.
Published-item repairs require their separate evidence and targeted verdict.
Verify uncertain mathematics against authoritative sources before deciding.

A licensed repair may add necessary supporting lemmas, registered before
consumers in pages, manifests, contracts, and group scope. Their dependency
chains must reach the licensed consumer. Each new lemma needs its first
engine-managed judgment; this does not grant another consumer rejudge.

`8-preflight` closes integrity checks before rejudging and retains the original
fatal repair authority. Frozen close stages do not inherit that edit authority.
Repair tasks retain complete relevant diagnostics and evidence hashes.
Unknown ownership gets one reviewer; repeated unchanged failures stop.

Each initially repaired item receives **one paid Terra rejudge**.
Rejection goes to a fresh Astra final adjudicator, which accepts or independently
repairs the item without another consumer judge call. A missing current verdict
after that paid attempt requires intervention, not a second attempt.
Final adjudicators resolve their frozen queues in order, recording exact-hash
terminal resolutions. These are closure evidence, not judge pass stamps.
`8-final` has no repair hook.

Step 9 reviews declined scope, judges the post-Step-8 mathematical changes,
closes impact obligations, and applies current pass stamps. Any separately
authorized mathematical review enters the same certification.
Receipt review includes reused items and missing contracts; contract recovery
requires reading the proof and passing the full checks, not editing mathematics.
Generated judge stamps are excluded from the corresponding attestation hashes.

## Final readiness and publication

Step 10 closes contracts, ledger, pathways, stamps, readiness, evidence, report,
obligations, and commit in order. New content must remain draft.
Reused published content may retain its status only if the same identity was
published at the scope ledger's pinned `baseline_commit`, an ancestor of HEAD.
Missing historical evidence blocks readiness.

Readiness and report receipts bind to the protected tree; runtime directories
named `.autopilot` or `.autopilot-*` are excluded. Do not edit protected files
between readiness and close-out. The report agent reads only the reconciled
evidence packet; tools render counts and the complete fatal ledger.

`10-close-v2` calls `tools/run-commit.mjs` on main, includes its final receipt
in the close-out commit, and requires clean-tree and terminal checks.
It does not publish or push. Completion means **publishable pending owner
approval**: the owner performs the personal audit, publication status changes,
and push/deployment.
