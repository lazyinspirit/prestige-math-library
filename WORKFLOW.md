# Build and operations reference

This is the active TypeScript/autopilot build reference. The source of truth is
`tools/autopilot/`: `src/` is the engine, `stages/mathlib.mts` and
`stages/mathlib.step6.mts` are the live build table, and `bin/autopilot.mts`
is the CLI. Code wins over this file. Read [README.md](README.md) for repository
and provenance rules and [SCHEMA.md](SCHEMA.md) for page/item contracts.

This runbook covers the new-content build.

## Commands

In this repository, `autopilot` means:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts
```

`frontier` reads `status:` from page files, not Git history, to return the full
A/B dependency schedule. Its strict wave view shows how publishing one pair can
unlock later pairs. `frontier --next` instead computes the permanent bounded
next-run set across every unfinished planned pair, regardless of category. A
pair qualifies only when both its A page and its B page independently have
strictly more than 95% of their same-category `requires` already published;
exactly 95% fails and zero same-category dependencies qualifies. A<->B partner
edges and cross-category edges are excluded from each page's denominator, so
categories remain independent frontier roots. Qualifying pairs are capped in
deterministic plan order and unpublished prerequisites are not pulled into the
same run. `plan --pairs next` uses the same selector and is capped at the
pipeline's 24-pair ceiling. The read-only preview may use a larger explicit
`--max-pairs`. `plan` and the Stage-1 drift gate enforce the same threshold;
an explicit pair list may use `--allow-in-run-dependencies` when every missing
same-category prerequisite is an earlier pair in that same run. The scope
ledger records that narrow exception, and Stage 1 rechecks it; it does not alter
`frontier --next`. `--allow-unbuildable` records an intentional stage-1 stop.
Planning writes
batch manifests, covers, the immutable scope ledger, generated task files, and
drift-review inputs.

```bash
autopilot frontier [--categories category-a,category-b]
autopilot frontier --next [--max-pairs 24]
autopilot plan --run <run> --pairs <a-page-id,...> [--allow-in-run-dependencies]
autopilot plan --run <run> --pairs next [--max-pairs 24]
autopilot doctor --run <run>
autopilot start --run <run> --detach
autopilot status [--run <run>]
```

`start` validates the stage table and runs `doctor` before it detaches. It then
drives stages 1–10 without an LLM orchestrator. The detached log is
`.autopilot/autopilot.log`; `tools/autopilot/bin/watchdog.sh` may restart a
non-stopped, incomplete engine. `.autopilot/` is a single-run state directory;
use a fresh `--state-dir` for another run.

## Conceptual steps and stage IDs

Stage IDs are operational rather than conceptual. The current table has 48
stages.

| Step | Actual stages | Closure |
|---|---|---|
| 0 — select/plan | `frontier`, `plan`, `1-drift` | Fixed scope plus Alpha's gated prerequisite-drift review. |
| 1 — scaffold | `1-scaffold` | Beta source/scaffold work with scope, plan, harvest, source liveness/backing/fetch, and policy gates. |
| 2 — assign | `2-assign` | A partitioning Alpha groups batches; `alpha-groups.mjs` requires full, disjoint coverage and groups of at most three batches. |
| 3 — scaffold closure | `3-review` → `3-fix` → `3-recheck` | Group Alpha review, owned-Beta remediation, and one sufficient verdict per pair. |
| 4 — materialize | `4-splice`, `4-baseline` | The splice tool alone transcribes IDs; edge refusals are adjudicated before the pre-author touch snapshot. |
| 5 — author | `5-author` | Batches are authored; its whole-level gates run at the read-pipeline join. |
| 6 — independent closure | `6a-baseline`, `6a-read`, `6a-split`, `6a-refute`, `6a-collect`, `6b-adjudicate`, `6b-baseline`, `6c-edges`, `6c-cross`, `6d-close` | Independent readers, mechanically scoped refuters, group decisions, lead cross-group closure, and a hash-bound Step-6 receipt. |
| 7 — frozen judgment | `7-scope`, `7-judge` | Group partition, full skeptical sweep, and read-only group digests. |
| 8 — fatal repair/certification | `8-baseline`, `8-scope`, `8-adjudicate`, `8-preflight`, `8-rejudge`, `8-close`, `8-final`, `8-freeze` | Licensed repair, integrity before targeted judgment, bounded judge cycles, final exact currency, and snapshot. |
| 9 — delta/impact/receipts | `9-scope`, `9-scope-render`, `9-scope-freeze`, `9-changes-judge`, `9-close`, `9-changes-stamp`, `9-receipt` | Changed denial decisions, exact mathematical recertification, impact closure, then whole-level and spine receipts. |
| 10 — readiness/close | `10-contract-close`, `10-snapshot-v2`, `10-pathway-sync-v2`, `10-pathway-seed-v2`, `10-pathway-author-v2`, `10-stamps-v2`, `10-readiness-v2`, `10-evidence-v2`, `10-report-baseline-v2`, `10-owner-report-v2`, `10-owner-report-render-v2`, `10-close-v2` | Terminal ledger, pathways, stamps, readiness, evidence, read-only report, obligations, and close-out commit in serial order. |

## Ownership

`tools/models.mjs` owns model IDs, runners, stage-selectable profiles, and
judge-lineup resolution. Step 2's partitioning Alpha runs on `gpt-5.6-terra`
at `high` reasoning effort.
`tools/dispatch.mjs` owns role caps, effort, web access, sandbox enforcement,
provider isolation, session handling, and output capture. The current judge
lineup is the singleton `gpt-5.6-terra` lane. Stage profiles route Step-5
authoring, Step-6 readers, and all Step-9/10 agent dispatches through
`deepseek-v4-pro` at the requested `xhigh` tier (DeepSeek spells its top tier
`max`); Step-6 refuters use `gpt-5.6-terra` at `xhigh`, and Step-7 group readers
use `gpt-5.4` at `xhigh`. DeepSeek's official Codex catalog declares a
1,048,576-token window, and every DeepSeek dispatch fails closed unless its
rollout attests the exact provider/model/effort and at least 995,000 effective
tokens (the official catalog reserves five percent of the nominal window).

| Role | Build responsibility | Evidence |
|---|---|---|
| Beta | Scaffold, source repair, and author its batch. | Manifests, coverage, contracts, authored files. |
| Reader | Audit a foreign batch. | Report and structured findings. |
| Refuter | Read-only review of reader-untouched and high/critical-risk items. | Scoped structured refutation. |
| Group Alpha | Step-3 review/recheck, Step-6 decisions, Step-7 reading, and Step-8 adjudication for assigned batches. | Namespaced decisions/reports and exact adjudications. |
| Lead Alpha | Step-6 cross-group closure, Step-9 scope work, and level receipts. | Cross-edge, scope, audit, and spine receipts. |
| Special Alpha roles | Partition, narrower recheck/pathway work, fatal adjudication, or final read-only interpretation. | Stage-declared artifact. |
| Tool stage | All disk-deterministic transition, routing, checking, receipt, stamp, report, and commit work. | Command result plus declared artifact. |
| Judge | Frozen-text verdicts only. | Judge ledger, current context/item hashes, closure. |

`src/roles.mts` requires every agent dispatch to name a cognitive `job` and
refuses mechanical jobs such as transition, coverage, gate running, retry
arithmetic, or batching. The engine, not an agent, decides pending work,
dispatches, gate outcomes, and stage transitions.

## Engine and gate semantics

A stage declares units, a result pattern, a plan, artifacts, and gates.
Completion requires successful matching dispatches whose `covers` union contains
every owed unit, every declared artifact exists, and the gates passed. An
`ok:false`, malformed, unmatched, or artifact-less result covers nothing.
`coversMap` only annotates compatible older/external results.

Disk is authoritative. `state.json` is an atomically written cache of attempts,
stage timestamps, repair accounting, blockers, and pause state; completion is
always recomputed from artifacts. `events.jsonl` is append-only history and
`status.md` is the replaceable current report. `status` also observes eligible
external dispatches rather than reporting only this process's children.

Verbose gate output is retained as a bounded head and tail in `events.jsonl`,
preserving summaries and terminal diagnostics without allowing a per-item
checker to add megabytes to one event.

Only two contiguous groups pipeline by unit:

- `scaffold`: `3-review` → `3-fix` → `3-recheck`.
- `read`: `5-author` → `6a-baseline` → `6a-read` → `6a-split` →
  `6a-refute` → `6a-collect` → `6b-adjudicate`.

A unit can enter a pipeline successor after its own predecessor; a group Alpha
waits for its full cohort. Every pipeline member's gates wait for the drained
group and run once over the level. All other stages are barriers, so a later
group never starts while an earlier group still has a dispatch in flight.

Concurrency is the minimum of stage capacity, optional global capacity, and the
shared role capacity across a pipeline; the dispatcher enforces role slots too.
Starts are staggered by three seconds by default. The executor uses argv with
`shell:false` and kills a timed-out dispatch process group after its grace
period. It adopts a live external dispatch only when its run, result pattern,
and covers match the current stage, then reconciles its eventual result into
state.

The run-level and batch widths are 24. Thus `1-scaffold`, `3-fix`, `5-author`,
and the per-batch Step-6 baseline/read/split/refute/collect stages can expose
all 24 independent batches without an engine-imposed second wave. Group work
keeps the stricter three-batches-per-Alpha attention bound, so a 24-batch run
admits at most eight groups and the Step-3, Step-6b, Step-7 reader, and Step-8
group lanes are capped at eight. `7-judge` admits those eight readers plus its
one sweep controller, while the sweep has its own 24-call Terra pool.
Whole-level writers, snapshots, ledger mutators, receipts, and other ordering
barriers remain serial because their lower caps are correctness constraints
rather than throughput defaults.

`src/spec.mts` rejects duplicate IDs, missing units/plan/pattern, invalid
pattern resolvers, non-contiguous pipelines, or a pipelined stage lacking its
role/cohort contract. Each stage needs nonempty gates or an explanatory
`gatesWaived`; the terminal stage cannot waive. A gate with no argv, absent
required inputs, an empty declared list, or unreadable/too-small liveness
evidence fails. Gates run in order, stop at the first failure, and record later
reachable failures as advisory evidence. Network-signature failures get one
gate retry; an unchanged failed battery is not rerun until an event, altered
dispatch directory, expired outage backoff, or explicit retry can change it.

## Dispatch and preflight

Plans are typed argv, never shell strings. Before each primary or repair fan-out,
`Executor.preflightPlan` resolves inputs, rejects unresolved identity
placeholders and shell tool plans, checks the cognitive job, and runs the exact
repository dispatcher with `--dry-run`. The dry run validates role selection,
assembled prompt/task, output schema, and output path before a model attempt is
spent.

The engine supplies run, covers, unit, output artifact, and attempt number.
`dispatch.mjs` atomically reserves an attempt-specific prompt/log/result suffix,
keeps the unsuffixed names as latest-result compatibility paths, and limits
structured output artifacts to `research/`. Read-only enforcement is role and
runner specific; inspect it with:

Dispatch stdout and stderr capture is bounded to the beginning and end of each
stream. Long or noisy agent runs therefore retain startup metadata and final
diagnostics without risking a V8 string-limit crash before their result receipt
is written; an explicit marker records any omitted middle output.

Every agent uses a 200,000-token automatic compaction threshold counting total
active context, except Step-8 `final-adjudicator`, which retains the model's
default compaction behavior. Fresh and resumed dispatches use the same policy;
the nominal model window is unchanged. Stateless judges also receive the setting.
This is a trigger, not a hard request-size ceiling: a large tool result can
overshoot it. Agents read bounded chunks without skipping required mathematics,
checkpoint completed items in authorized artifacts, and reread the current proof,
dependencies, source passages, and unresolved obligations after compaction.
Read-only roles never write checkpoints; their durable inputs remain authoritative.

Before deleting an isolated session home, the dispatcher extracts token counters
into `token_usage`: dispatch input, cached-input (a subset of input), output,
observed request count, peak request input, requests above 272k, and compactions.
Resumed sessions subtract the earlier session baseline; repeated rate-limit token
events are deduplicated. Missing telemetry is reported as unavailable, not zero.
These observed counters do not establish actual billing or include unreported
requests. No transcript is retained by this extraction.

```bash
node tools/dispatch.mjs --check-read-only
```

`autopilot doctor --run <run>` verifies the live stage specification, flags
against tools, generated brief/task availability, identity placeholders, output
schemas, scope ledger, exact `--attempt` argv plumbing, current-run
defect-ledger coverage, and configured judge-runner reachability. `start` runs
this check unconditionally.

## Build gates and evidence

The scope ledger is checked repeatedly, so a promised page cannot disappear.
`validate-plan.mjs` checks plan order/shape; splice verification keeps plan and
batch manifests aligned. The drift reviewer may add a backward edge, reorder,
mint a prerequisite pair, or rescope, but `drift-apply.mjs` mechanically
materializes its accepted decision.

Source gates require harvest dispositions, fetch-verification stamps, live URLs,
and source backing for each authored result. URL recovery precedes replacement;
only redundant dead backing may be retired automatically. A source problem that
requires judgment routes to a source-scouting Beta.

The repository battery runs precheck, dependency, forward/external reference,
render, prose, dependency-source, pathway, scope, and splice checks.
`content-policy.mjs` checks manifest capacity before authoring and scoped item
policy afterwards, including provenance and external-dependency records.

Proof-bearing items have per-batch contracts that merge before this fixed
battery: strict proof contract, finite smoke, risk report, boundary audit,
citation fidelity, and gate liveness. Finite smoke is a bounded counterexample
search, never a general proof. Step 6 requires Alpha risk review, sends
high/critical-risk and reader-untouched items to refutation, and verifies exact
refuter scope coverage. Each 6b group Alpha must write complete, item-specific
`risk_review` records for every high/critical item in its owned batches before
the reviewed gate runs. If residue remains, the engine retains the gate's full
failure output, charges every named item in the same battery, and repairs the
set in parallel by owning Alpha group rather than revealing a truncated tail in
serial waves.

The strict proof-contract citation check recognises all three schema declaration
routes: `deps`, `justified_by`, and `forward_refs`. Forward citations remain
subject to the separate ordering and closure rules enforced by `fwdcheck`.

Touch snapshots define `pre-author → post-6b`, `post-6b → current`, and
`post-step8 → Step-9` impact windows. Impact receipts require dispositions for
downstream consumers. `6d-close` freezes the Step-6 artifacts, routing,
published-repair handoff, and ledger hashes.

Every confirmed fatal has exactly one row in
`research/defect-ledger.jsonl`; the ledger gate rejects missing, duplicate, or
incompatible closure entries. Step 10 mechanically renders
`research/DEFECT-LEDGER.md` and its terminal gate permits no open ledger row.

## Frozen judge lifecycle

The configured judge set is resolved only through `tools/models.mjs`. Every
item receives one stateless, ephemeral xhigh call from each configured judge.
The call contains the full target item, compact interfaces for direct
dependencies, and compact statement/definition/example/remarks interfaces for
the complete A/B pair; sibling proofs are judged only in their own calls. This
retains pair-aware checking without repeatedly sending every sibling proof or
accumulating earlier item turns. `judge-sweep.mjs` runs up to 24 Terra calls,
stops launching work immediately on a usage/rate-limit signature, and resumes
safely from the append-only hash-attested ledger. Codex JSON events supply real
input, cached-input, and output token telemetry. Every scoped item needs a
current verdict from the configured set; retained rows for unselected sets are
evidence, not coverage.

When stamp verification needs pair-context hashes, `judge.mts` computes the
requested set in one process and one corpus read instead of reloading the
repository in a subprocess for every item.

Step-7 group Alphas still read their entire assigned groups against frozen text
and emit schema-checked digests. Step 8 starts a fresh Sol adjudication from the
mechanically rendered task and that durable digest; it does not replay the
reader transcript. A failed digest gate rereads only the named bad groups.
Write scope remains with the owning group, while cross-group discoveries become
alerts requiring the owner's group disposition.

Step-8 adjudicators have web search enabled. Whenever their mathematics is
uncertain, their task requires them to verify the point against original
sources and record the exact source support before deciding or repairing it.

Each rejection has an exact item/model/context-hash outcome:
`confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`. Only a confirmed
fatal authorizes a Step-8 content edit; the other outcomes close without
content, contract, impact, or judge changes. An obvious published-item error
uses its separate evidence-bound repair path and needs a targeted current
verdict.

Step-8 repair prompts carry complete diagnostic records relevant to their owner,
including cross-owner references and ambiguous records. One shared evidence file
retains the full battery output and assignment map; each prompt identifies its
path and hash. Filtering prompt context never changes routing or whole-level gates.

`8-preflight` closes non-judge integrity before paid rejudgment. `8-rejudge`
targets only repaired or stale items and closes only with no stale verdict,
unadjudicated rejection, or open fatal. The durable receipt caps each item at
two Step-8 frozen-context cycles; there is never a third judge cycle. When the
second cycle is again confirmed fatal, the owning group Alpha adjudicates and
repairs it before escalation. The engine then starts one fresh Final
Adjudicator per affected group: an independent Sol agent at xhigh reasoning with
web search enabled. Its frozen queue is ordered, and the terminal recorder
refuses item N until items 1 through N-1 have current exact-hash resolutions.
For each item the FA follows the library's adopted conventions, verifies any
unfamiliar mathematics against authoritative web sources, and either accepts
Alpha's repair or makes and checks an independent repair. The resulting
exact-hash terminal resolution is closure evidence, not a fabricated judge
verdict or pass stamp. An exhausted item not licensed by two confirmed-fatal
Alpha repair cycles remains an explicit owner/session intervention blocker.
`8-final` has no repair hook, making post-budget currency failures visible.
The terminal audit verifies each Final Adjudicator queue against its historical
rows. Resealing an earlier item in a later queue does not erase evidence that an
older queue ran in order; current hashes independently invalidate any later item
whose mathematics or pair context actually changed.

Step 9 extracts the exact post-Step-8 mathematical delta, judges and
adjudicates it, then applies its stamps. The final stamp stage verifies every
scoped item; a stamp records a current pass, not an adjudicated rejection.
The generated `verification.judge` block is excluded from both the stamped
item's attestation hash and any whole-source fallback used for a sibling's pair
interface, so applying stamps cannot invalidate current judge or terminal
resolution context.

Every scaffold manifest item must carry an explicit `deps` array. Missing empty
arrays are normalized mechanically at the Step-1/3 scaffold joins and again
before the Step-9 receipt, so the whole-level audit does not spend an Alpha call
repairing syntax; malformed dependency values remain hard errors.

## Repairs, outages, and controls

A failed plan stops at its configured/stage attempt limit and becomes a
labelled blocker. Gate repair hooks are bounded by `maxFixRounds`; Step 6 instead
has three tries per named gate/item. Covered work with a missing artifact becomes
the same bounded `stage-stalemate` failure.

Step-6 artifact-owner recovery dispatches declare empty coverage: they repair
the malformed or missing reader/refuter/contract input, then the pending split
or collect tool runs and alone covers the mechanical stage. This keeps a
successful recovery result from stranding the stage with its output artifact
still unmaterialized.

A repair hook performs a mechanical fix when one exists and otherwise dispatches
the responsible cognitive role. Its full fan-out passes launch preflight before
any sibling starts; a deterministic launch error restores the round/item budget.
An external outage refunds its round and schedules a 20-minute default backoff
or a hook-supplied time, so an unavailable provider is not treated as failed
mathematics.

Controls are consumed from `.autopilot/control.json` rather than awaited:

```bash
autopilot pause
autopilot resume
autopilot report
autopilot retry [--unit <unit>]
autopilot skip --stage <stage-id>
autopilot stop
```

`pause` blocks new dispatches but leaves active ones running. `stop` leaves
active work and state available for later adoption. `retry` re-arms failed or
unfinished lanes and unfinished repair accounting after intervention, but cannot
extend the durable per-item judge-cycle cap. `skip` is an owner action that
marks a stage complete and waives its assurance.

## Step-10 boundary

Step 10 serially closes terminal contracts/ledger, pathways, stamps, final
readiness, reconciled evidence, protected-tree reporting, obligations, and the
main-branch close-out commit. `publication-ready.mjs` requires all run items to
remain `status: draft` and seals the final protected-tree hash. Runtime state
directories named `.autopilot` or `.autopilot-*` are excluded from both Step 10
tree seals because their event and status files continue changing while the
sealed content is verified.

Final readiness performs one complete level-coverage scan. That scan includes
configured-judge closure, so a second judge-only scan is not run.

`step10-report.mjs evidence` reconciles readiness, judge/adjudication, defect,
touch, and pathway artifacts into a hash-bound packet. The read-only reporting
role can interpret only that packet; mechanical rendering supplies the factual
counts and fatal rows. The report-integrity receipt stops any protected-tree
mutation between readiness and close-out.

`10-close-v2` calls `run-commit.mjs` on `main` and gates terminal obligations,
integrity, readiness, and a clean tree. The command writes its successful result
receipt before staging and includes it in the same commit, avoiding a
receipt-only repair pass and second commit. It neither pushes nor changes
`status:`.
Only the owner may perform the personal final audit, deliberate
`status: published` change, and push/deployment; engine completion is therefore
`publishable pending owner approval`, never publication.
