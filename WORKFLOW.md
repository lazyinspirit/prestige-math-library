# Build operations

- Run commands from the repository root. `tools/autopilot/` owns dispatch, gates and
  stage transitions. `CLAUDE.md` governs agents; `SCHEMA.md` governs content.
- The stage definitions are `tools/autopilot/stages/mathlib.mts`,
  `mathlib.step5.mts` and `mathlib.step7.mts`. Use a fresh run and state
  directory when the workflow revision changes; old receipts cannot be adopted
  under new stage numbers.

## Prepare and start

- Prepare, start and check a new run:

  ```bash
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts frontier --next
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts plan --run RUN --pairs next
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --run RUN --state-dir .autopilot/RUN
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts start --run RUN --state-dir .autopilot/RUN --detach
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run RUN --state-dir .autopilot/RUN
  ```

- `frontier --next` selects up to 35 A/B pairs by default; `plan` enforces a
  35-pair cap. Both pages of each pair must have strictly more than 95% of their
  same-category prerequisites already published.
  `plan --pairs ID,ID` selects explicit A-page IDs. Explicit in-run prerequisites need
  `--allow-in-run-dependencies`; planning does not silently add missing suppliers.
  `--allow-unbuildable` deliberately accepts a Step-1 hold.
- `plan` creates one pair per batch, the scope ledger, manifests and run tasks. It
  refuses to overwrite existing run files without `--force`. Fix generators in
  `briefs/tasks/` and use `refresh-tasks --run RUN` for changed templates. If
  `research/RUN-owner-authoring-direction.md` was added after planning, refresh Beta
  tasks with `refresh-tasks --run RUN --force` before dispatch; review enriched
  generated tasks before replacing them.
- `start` runs doctor before dispatch. Doctor checks command and task wiring, not
  mathematical correctness or provider quotas. A detached start writes
  `.autopilot/RUN/autopilot.log`.
  On restart, doctor omits historical dispatch plans only for the matching
  workflow's completed prefix: gated stages need durable gate/done stamps;
  explicitly gate-waived stages need successful dispatch coverage and their
  required artifacts on disk. Static stage, gate, command and task wiring checks
  remain active. Later proof repairs need not recreate obsolete author plans.
- Pass the same `--run` and `--state-dir` to every command. The default state directory
  is `.autopilot/`, and some older runs use it directly. Check the run name in
  `state.json` before controlling a run. `status` recomputes from disk. Historical
  `research/*RESUME.md` files do not establish live status; check the state directory
  and Git history.

## Supervise and clear gates

The engine derives validator subjects from the current run's nonempty batch
manifests. Precheck receives explicit item files; rendercheck and prosecheck
receive those files and the manifest page files. Depcheck, fwdcheck, extcheck and
depsource receive a nonempty `--items-file` selection; pathcheck receives a
nonempty `--pages-file` selection (companions map to their main page). These
opt-in validators still load the complete corpus for supplier resolution and
relevant graph checks. Depcheck reports page hygiene only on pages containing
selected subjects, checks structural B-page/discharge boundaries in their item
prerequisite closure, and checks item/page cycles reachable from those roots;
unrelated page defects, multi-home warnings and disconnected cycles are outside
the battery. Its bare invocation continues to check the complete corpus.
Depsource additionally receives `--run RUN`: validated current manifests overlay
subject entries and current item homes before Step 4 splices the canonical plan.
The full plan remains external supplier context. Validate-plan also receives
`--run RUN`: current manifest page and item objects replace the selected plan
objects before validation. Canonical item arrays may still be empty before
Step 4; current manifest items need not already occur there. Existing canonical
items must have one occurrence on their exact current page, and stale selected
plan items do not become validator subjects. Page and item diagnostics concern
manifest pages; reachable item, induced-page and declared-prerequisite cycles
remain checked. External authored
suppliers use their current item files and page homes, rather than obsolete
planned dependency records. Definition `justified_by` discharges remain forward
well-definedness checks, not logical prerequisite edges. Missing canonical
manifest pages or current items in the overlaid selected plan fail closed,
including before authoring when item files need not exist yet. Missing/empty manifests,
unknown run subjects and unresolved dependencies remain failures. Pathway placement of draft pages remains advisory.
Unrelated items and pages are context rather than formatting, audit or repair
subjects. Bare validator commands retain their historical whole-corpus behavior.
Missing, malformed, empty or unknown selections fail closed. Selector JSON files
are immutable and content-addressed in OS temporary storage; descriptors for
future stages defer selection until execution and write no run state.

- Steps 1–4: review drift and scaffold, assign groups, audit scaffolds and
  author, then splice the plan.
- Steps 5–7: independent reader/refuter review and cross-group closure, frozen
  item judgment, then frontier repair, rejudgment and the scoped gate.
- Steps 8–9: certify changed draft items and impacts, then close contracts,
  pathways, readiness, the owner report and the run commit.
- Level coverage reads component provenance with the shared renderer YAML parser,
  accepting both block and flow mappings. Scoped malformed frontmatter, missing
  components, non-string values and values outside the schema enums remain errors;
  AI-generated statements remain ineligible as future-build dependency targets.
  Owner-report kind counts also decode YAML scalars, so quoted and plain
  spellings of the same kind contribute to one count.
  A checker correction that leaves item and mathematical evidence bytes unchanged
  needs the ordinary failed-gate retry, without rewriting items or reopening the
  Step-8 suffix merely to restyle equivalent YAML.
- Step 9 readiness ends with `proof-step-separation` and `proof-blue-tags`.
  They share one deterministic renderer pass and write
  `research/RUN-proof-layout.json`. Scope is the exact current manifest item
  inventory on the run's A/B pages, including their shared published items;
  unrelated changed items are excluded. Manifest bytes, page bytes and the run
  touch record remain sealed inputs. Historical touch snapshots never add
  validator subjects. Manifest selections are checked against current page
  inventories. A legacy manifest alias resolves only to one real current
  page-owned item; missing subjects, ambiguous ownership and manifest/page
  disagreements fail closed. Introductions and notes after the final tagged QED remain
  prose; each numbered step must form one row with valid trailing blue tags.
  Failure is an owner hold, with file, section, step, source line and reason.
  Repair on stable content, refresh invalidated evidence, then retry readiness.
  No automatic content edits or extra model dispatches run for these gates.
  The owner report includes their counts. Closeout verifies content, scope,
  checker and renderer hashes before committing and checks both gates again
  without repeating rendering. Missing dependencies, zero checked steps and
  stale receipts fail. Use `node tools/proof-layout.mjs items/<id>.md ...` for
  focused checks after the last edit or formatter, rather than a corpus scan.
- Check status every ten minutes. Let running workers finish; intervene for a blocker or
  a stage that fails to close. A pause stops new dispatches, while workers already
  running continue.
- Outside Step 7's explicit repair loop, a failed gate is an owner hold. Repair every
  rejected item, finish all authorized writing that could change its covered content,
  wait for writers to drain, then refresh the invalidated decisions, contracts, reviews,
  hashes and certificates on the stable carriers together. Use `retry` to rerun the same
  gate. A gate cannot advance on an earlier pass, and `retry` does not launch an
  automatic gate-triggered repair wave.
- A Step-1 scaffold needs a current ready or escalated decision and a correct in-run
  item dependency level. Consumer scaffold batches wait for complete, stable transitive
  supplier batches. An unresolved final gate stays with the owner. Step-3 authors can
  write consumers before in-run suppliers finish, but must name the missing supplier and
  proof use, then reconcile escalated decisions before the Step-3 gate. The pre-author
  snapshot is taken before authors start; Step 4 splices the plan afterward.
  Author task planning recomputes order from the current dependency graph while
  sibling authors are writing. It does not rewrite stored level labels; the
  scaffold and final author gates still require correct labels on stable content.
- Pair-author dispatch receipts distinguish the runner's `process_exit_code`
  from the dispatch `exit_code`. Missing or empty item/page files, proof contracts
  or the assigned report make an otherwise zero-exit pair dispatch fail.
  `author_artifacts` names the missing carriers; `terminal_summary` retains only
  terminal-event flags before the temporary session home is removed. File presence
  is not mathematical acceptance; the normal artifact and content gates still apply.
  Auditor-addition certification covers IDs absent from the immutable pre-author
  inventory and its existing-item-file list. Original scaffold IDs require ordinary
  current Step-3 item decisions even when their files are newly written.
- Finite smoke obligations must quote an actual assertion in the selected item
  and use a relevant registered model. The triangle conditional-expectation
  check enumerates placements and prefixes, including its tie rule, partition
  and crossing edges. Its bounded verification does not prove the general
  approximation theorem. A zero-check contract cannot satisfy gate liveness.
- Step-5 readers, refuters and adjudicators examine the authored mathematics.
  Adjudication shares the reader/refuter pipeline: each batch receives its own
  adjudicator as soon as its collection receipt succeeds and its workers
  have drained, while unrelated batches continue reviewing. The complete Step-5a
  gate battery runs once at the pipeline join after all batches and writers finish.
  Each new adjudicator uses `5a-batch-N` and writes separate `alpha-batch-N-5a`
  reports and decisions. Existing group dispatches and their decisions remain valid
  while older runs drain; they are not replaced or duplicated.
  Resolve actual failing subjects and cross-group impacts. A changed Statement or Definition
  opens a direct-consumer review; continue another hop only if that consumer's own
  Statement or Definition changes. Proof, citation, dependency and metadata edits with
  unchanged interfaces do not propagate. A reference alone does not require an edit.
  When prior bytes are unavailable, explicit owner resolution may accept a fully
  reviewed current touched/page carrier with `change_kind: current_content_review`.
  Record the unknown historical delta honestly; mathematical findings, risk reviews,
  ledger ownership and current content hashes still require normal closure.
  Append-only ledger corrections retain superseded rows as history. Both ledger
  validation and Step-5 ownership/open-defect checks use the shared validated
  active ownership rows; historical references remain available for provenance.
  Active rows retain the full closed ledger schema. Superseded rows retain
  their original class, subclass and location labels as historical taxonomy; every
  other field check and backward same-run/subject supersedes linkage remain
  required for the selected run. New appends always require current canonical labels.
  The closed ledger schema includes the exact native `7.2-impact` stage and
  `frontier-owner-alpha-repair`, the recorded label for its `alpha-repair`
  frontier owner lane. These labels preserve detection provenance; they grant
  no dispatch coverage or mathematical acceptance.
  A prior repair captured after correction, or one physical defect reported
  against distinct carriers, requires explicit owner evidence binding the exact
  obligations, ledger row, current raw bytes and native report hashes. A prior
  repair must also reconstruct its authenticated before hash by the exact inverse
  edit. Treat both edit literals as raw text: inverse replacement must not
  interpret Markdown dollar signs as JavaScript replacement tokens. A current
  owner-provenance bundle derived after correction must state that timing and
  hash-bind the genuine receipt, raw guards and before archive; it does not
  establish previously unbound reader observations. Immutable reader/refuter
  observations remain unchanged.

- Step 7 freezes `research/RUN-step7-v2/frontier.json`. Its adjudication, repair,
  rejudgment and item gates cover draft IDs in that frontier. Batch adjudicators resolve
  rejections; three owner lanes close disjoint frontier impacts; central certification
  follows after all writers and separate consumer maintenance finish. Rejudgment and
  repair repeat until the latest round's unique confirmed fatal original frontier items
  are strictly below 5% of the original frontier. All confirmed nonfatal defects also
  require repair. The complete scoped gate then repeats repair, recertification and the
  same battery until green. Outside findings remain recorded and excluded from frontier
  item gates; global, runtime and unknown failures still block. Step 7.9 and its
  continuations cannot add items. Collection and stable snapshot guards select
  frozen-frontier subjects while retaining full graph and hash context for their
  external suppliers; unrelated edits are excluded, and changed relevant supplier
  interfaces still require actual frontier-consumer review. A held initial or repeat
  owner-impact gate validates the final closed aggregate after all continuation
  passes, including their bound evidence, current subject and prerequisite guards,
  and latest required consumer reviews. Earlier pass collections remain immutable
  historical snapshots; legitimate later repairs do not make them gate snapshots.
  Manifest-scoped validator adapters retain their own explicit file selections;
  the battery does not append item paths as validator flags. JSON-mode adapters
  emit only validator JSON, and dependency-selector errors remain global blockers.
  Ledger closure agreement and the terminal open-defect check use validated
  active ownership rows; superseded rows remain immutable historical evidence.
  A held initial or repeat
  collection may load `research/RUN-step7-v2/PHASE-ROUND-owner-supplement.json`
  only after native writers drain: explicit root authority, the exact uncertain
  blocker, frozen rejection, native report and successful dispatch must be sealed.
  Root reviews cover only that blocker, necessary existing frontier Definition
  suppliers and actual direct consumers, with current item and context hashes and
  full-text source review. Native bytes remain historical evidence; the supplement
  cannot change verdicts, defect classification, confidence requirements or scope.
- Step 8 derives both its changed-item receipt and initial judge dispatch from
  the same owning-run manifest selector and immutable post-Step-7 baseline.
  Subjects are the frozen frontier and legitimate owned additions; missing or
  multiply owned subjects block. Unrelated work remains advisory context and is
  excluded from this run's judgments, stamps and receipt-currency comparison.
  A guarded owner recovery may add consumer verdict-currency targets named by
  the current native closure and sealed owner authorization. Those targets must
  be owned by the run and remain separate from its mathematical change receipt.
- Step 9 readiness seals owned content and workflow evidence, substantive
  supplier and formal proof context, relevant page homes/prerequisites, and
  validation code/configuration. Shared plan and ledger carriers use relevant
  record projections; bare navigation links protect identity and home resolution.
  Unrelated runs' content and ledger appends do not invalidate this seal. Native
  global/runtime gates still block, and later report outputs remain separately
  checked. Complete documentation and code-hash updates before writing readiness.
- Empty Step-7 batch adjudication assignments in the initial or repeat pack
  close through a tool lane bound to that exact run, phase, round, unit and pack
  hash. The report records mechanical zero-work closure with no mathematical
  review, decisions, creations or ledger updates. The collector checks the
  frozen judge input and empty assignment; nonempty batches, owner repairs,
  maintenance and gate diagnostics retain their review obligations. Existing
  Alpha artifacts remain on their original adjudication path.
- Published repairs use `research/published-consumer-supplier-ledger.md` for
  mathematical defects. They have no item gate, rejudge or adjudication obligation.
  Their changed Statements or Definitions still require direct-consumer review.
  A recorded local repair preserves the genuine published before carrier and
  binds its raw and mathematical hashes, unique pre-edit ownership claim,
  current ledger evidence and successful local checks. A prior carrier without
  an `audited` or `verified` entry may instead use the receipt's
  `prior_publication_commit`: a full Git commit ID that is an ancestor of HEAD,
  has a committer timestamp no later than the ownership claim and contains
  exactly those published before bytes at `items/<id>.md`. Git replacement
  objects are ignored. This records
  existing publication, not an independent audit or authority to publish a draft;
  a judge marker alone is insufficient.
  Operational dispatch and retry history belongs in run records, not that ledger.
  Step 9 commits on main; new content stays draft. Publication status changes
  and pushing are owner acts.
- Source-backed claims need recorded full-text retrieval, not just a URL or PDF page
  count. After an initial failure, search alternatives and make at most five recovery
  retries; reuse the recorded attempts. After exhaustion, supply a complete alternative
  local proof and prerequisites with justified confidence, or escalate the exact
  uncertainty. A later dead URL does not undo a verified full-text fetch; live URL and
  backing checks run at Step 5b.

### Owner-selected authoring of ready pairs

An owner may explicitly request Step 3b for approved pairs while other pairs remain
scope-held. Select `tools/autopilot/stages/mathlib.ready-pairs.mts` in the run's
`config.json`. Before starting, seal every pair's final item inventory and claim
interfaces in `research/RUN-ready-pair-authoring.json`: version 1, matching `run`,
`authorized_by: "owner"`, the owner's `authorization`, and `scopes` containing every
A page's `page` and current `scopeHash` as `sha256`. Held-pair strategy and source
repairs may continue after sealing; alert the supervisor before changing an interface.

This table preserves stage IDs, receipts and workflow revision. It overlaps the
three Step-3 stages, takes the immutable pre-author snapshot after scope dispatches
drain, and dispatches only pairs with a current sufficient review or owner proceed.
Authors wait for the snapshot process to finish. Every existing gate still checks
the full frontier after writers drain; Step 4 waits for complete Step-3 closure.
Restart the controller when selecting the run-local stage table.

An explicitly owner-authorized Step-3 pair split preserves the immutable auditor
baseline. After manifests settle and before dispatching either split author, call
`registerOwnerPairSplit(root, run, { from_page, new_pages, authorization })` from
`tools/step3-auditor-items.mjs`. Keep the original A/B identities in the retained
pair; `new_pages` lists its A page and the new A page. Authorization supplies
`owner: true`, `reason`, a research JSON `evidence` path and its raw-byte
`evidence_sha256`. That evidence must contain version 1, the run, `owner: true`,
`action: "step3-owner-pair-split"`, and the exact `from_page`, ordered `new_pages`
and reason. The separate append-only `RUN-step3-owner-pair-splits.json` binds the
immutable baseline, exact original item partition, and both pre-author scope
hashes. It grants no scope review or item audit; original items remain original,
and each split still needs its ordinary scope decision before additions can
use auditor certification. Do not edit live engine state or move the baseline.


### Step 3 owner-spawned creation origin

A genuinely new local supplier written by an owner-spawned helper has a distinct
origin receipt, registered with
`node tools/step3-owner-creation.mjs register --run RUN --id ITEM --evidence research/JSON`.
The registrar never edits the original Step 3 auditor baseline. It excludes IDs
already in that inventory or its existing-file list, and refuses to replace an
origin or reclassify an existing native creation certificate.

The evidence JSON uses `version: 1`, `step: 3`,
`policy: owner-spawned-step3-creation-v1`,
`evidence_class: owner-spawned-creation`, exact `run`, `id`, `page`, string `batch`,
`owner: true`, `owner_identity`, a distinct actual `author.identity` under
`/root/...`, `attested_at`, `reason`, and `owner_held_escalation`.
It binds both `baseline_sha256` (SHA-256 of `JSON.stringify` of the parsed original
baseline) and `baseline_file_sha256` (original raw bytes).
`step3OwnerCreationClaim(loadStep3(root, run), id)` supplies the exact current
`page`, `batch`, `claim_sha256` and `item_file_sha256` fields. Claim identity binds
the manifest's ID, kind, title and statement plus the authored Statement/Definition
sections. Subsequent proof repairs need a fresh ordinary owner decision; changing
the claim or home invalidates this origin and requires owner-held resolution.

`author.timeline` must either contain `mode: known`, genuine `started_at` and
`ended_at` after the baseline and before attestation, or `mode: unknown`,
`after_baseline: true` and an explicit `reason`, with no invented timestamps.
`sources` lists existing research files as `{ role, path, sha256 }` with roles
`assignment`, `authorship` and `escalation`. Assignment evidence must identify the
run, item, owner and actual author; authorship evidence must identify the run,
item, author, claim hash and authored-byte hash; escalation evidence must identify
the run and exact held escalation. Stale source bytes invalidate registration.
No `author_result` field is accepted.

Creation is origin only. The Step 3 certifier excludes a validated owner creation
from auditor-created classification only after an ordinary current
`recordStep3` owner `repaired` decision binds its current proof inputs and examined
dependencies, including its declared manifest and authored dependencies. It emits
no auditor item or scope certificate for that creation. Scope approval, native
unit coverage and mathematical acceptance remain their ordinary obligations.
For a dependency-ordered pass after every writer drains, load one context with
`const snapshot = loadStep3(root, run)` and pass it as the optional third argument
`recordStep3(root, decision, snapshot)`. Only a genuine context for the exact root
and run is accepted. This reuses manifest parsing and transitive input caches;
ordinary two-argument calls still load fresh inputs and all receipt/history
semantics are unchanged. Snapshot reuse assumes stable files: before issuing a
certification bundle or attempting a gate, load a new context, compare the complete
current inventory and all final item hashes/receipts, and require
`checkStep3(fresh, 'final').closed`. Any midpass mutation requires a fresh complete
pass; a cached snapshot is never evidence that current on-disk inputs passed.

Before `recordStep3` replaces an item-owner decision, it preserves the actual
current receipt bytes under
`research/RUN-step3b-owner-history-ITEM/JSON-DIGEST.json`. History is immutable and
is captured only from the canonical current receipt; there is no retrospective
history registrar. A prior native certificate may validate its historical repair
marker against this archive while the next certification requires the ordinary
current owner decision. An archived repair never substitutes for current
acceptance, and native author-result validation remains mandatory.

All other additions retain native provenance checks. Late sibling supplier inputs
may be owner-recertified when the item's own file is still in a genuine successful
native author write window; a new helper or later own-proof edit cannot borrow an
old result without surviving immutable native origin evidence.
A successful native restart may also adopt an unchanged postbaseline draft from
an interrupted predecessor: its real prompt inside that run's dispatch directory
must identify the exact run and successful label and explicitly assign the item
at its current home, that prompt must predate the restart's start, its author
artifact check must have passed, and the own file
must predate the restart's start. The own file must still predate its end; later
supplier inputs require the ordinary current owner repair or independent review.
This preserves native origin and never registers owner creation or rewrites the
baseline, author result, prompt, or prior owner history.

## Controls

The `frontier-39-step6-recovery.mts` table is restricted to run
`frontier-39-analysis-30`. It caps Step-6 dispatches and native Sol61 judge calls
at three after the recorded provider outage; models, coverage and gates remain
unchanged. Select it in that run's state-directory configuration after workers
drain and the controller stops, then use one bounded native recovery. The recovery
wrapper forwards its reload version to the canonical stage table so sibling stage
fixes reach live gate descriptors without changing the recovery cap or stage order.

- Current agent defaults and Step-5/6 review profiles use GPT-6.1 Sol at high
  effort. DeepSeek V4.1 Flash max assignments remain explicit. Legacy Sol and
  Luna registry entries preserve historical evidence; new default judges use
  the `sol61` lineup at high effort. Running workers retain their launch settings.

- Step 3b authors, including pair, legacy-group and recovery author dispatches,
  use DeepSeek V4.1 Flash at max effort (`deepseek-v4.1-flash-max`). Stage-table
  edits reload at the next controller tick; active calls retain their original
  launch profiles, and new calls use the reloaded selection.

- A run-local stage table may reduce dispatch concurrency and set the existing
  `JUDGE_CONCURRENCY_GPT_6_1_SOL` cap for its native judge tools after a recorded
  HTTP 429 outage. Keep the model, effort, coverage and successful evidence;
  let active workers finish before a bounded native retry.

- `autopilot.config.json` sets the runtime dispatch budget. `concurrency` is
  the fallback for stages without an explicit cap; `globalConcurrency` caps
  each controller's total in-flight dispatches, not a host-wide shared pool.
  A machine budget below a stage's lane capacity queues pending units without
  reducing the approved build scope. These caps do not bound subprocess
  fan-out within a native tool.

- All agent lanes use `model_auto_compact_token_limit=500000` with scope `total`.
  The dispatcher and judge pass this explicitly for isolated Codex homes;
  the orchestrator and its spawned agents use the global Codex configuration.
  Running sessions retain their startup settings until restarted or resumed
  with the updated configuration. Compaction occurs at a turn boundary.

- Send controls to the run's state directory:

  ```bash
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts pause  --run RUN --state-dir .autopilot/RUN
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts report --run RUN --state-dir .autopilot/RUN
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts retry  --run RUN --state-dir .autopilot/RUN
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts resume --run RUN --state-dir .autopilot/RUN
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts stop   --run RUN --state-dir .autopilot/RUN
  ```

- `pause` and `stop` act at the next controller tick and leave in-flight workers
  running. `stop` ends the controller and writes a stop marker; `resume` clears the
  marker and pause state but does not start a stopped controller. Run `start` again for
  an inactive controller. `report` forces a report. `retry --unit ID` limits failed
  dispatch rearming to a unit, while unfinished gate checks still rerun.
- A completed pair in the active, unclosed `3b-author` stage can receive an
  explicit bounded native author refresh:

  ```bash
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts refresh --run RUN \
    --state-dir .autopilot/RUN --stage 3b-author --unit PAIR \
    --reason 'Name the corrected origin-sensitive suppliers and required input audit'
  ```

  The controller validates exact run identity, stage opt-in, current boundary,
  owned successful unit and absence of a live unit/cohort writer. Closed,
  skipped, future and unsupported stages are refused; this control does not
  reopen a completed suffix. Drain owner writers before requesting refresh.
  The request preserves old result files and dispatch history, masks coverage
  only for its named unit, and freezes a new request-specific native plan and
  label. Duplicate pending requests retain the original identity and budget.
  Dispatch uses the normal stage/role/global caps, adopted-worker accounting,
  cohort exclusion, preflight and stagger. Failed attempts consume the normal
  fixed-label attempt cap; `retry --unit PAIR` can explicitly rearm exhaustion.
  A request remains pending through restart until its engine-started label has
  a genuine successful native result with the exact run, role, unit and a start
  at or after request acceptance. Old results and synthetic engine receipts
  cannot discharge it; all stage status, completion and gate joins share that
  rule. Step3b refresh retains the centralized DeepSeek Flash max profile.
  Native refresh is actual fresh examination of corrected suppliers, current
  proof inputs and required pair artifacts/contracts. Preserve reviewed claims
  and proofs; never edit solely to touch timestamps or invent creation history.
  It does not itself certify mathematical acceptance. After every writer drains,
  perform the full dependency-ordered Step3 recertification and normal native
  certification/gate pass on stable current inputs. Original provenance checks,
  immutable baseline and successful history remain mandatory.

- To pause just after a stage closes, write its exact ID to the control file:

  ```bash
  printf '%s\n' '{"command":"pause-at","stage":"5b-close"}' > .autopilot/RUN/control.json
  ```

  This boundary fires before the next stage dispatches. Stage skipping needs explicit
  owner authority.
- For a provider outage, `.autopilot/RUN.profile-overrides.json` may contain
  `{"version":1,"profiles":{"requested-profile":"effective-profile"}}`. Both names must
  be registered in `tools/models.mjs`. Only new dispatches use the override; their
  receipts record both profiles. Remove it after recovery. Restart the controller for
  configuration or imported registry changes; stage module changes hot-reload.

## Step 5 owner context additions

The active version-2 reader route and the historical version-3 direct route
apply the same current certified owner-Remark exception. A post-reader Remark
without that exact creation provenance and explicit not-supplied proof status
remains an unsupported addition.

The ordinary local-addition guard remains limited to Definitions and Lemmas. An
owner-created Remark may also retain an explicitly unproved claim when its
current Step-5 certificate validates the supported owner-spawned creation origin,
its exact batch and carriers, and its item declares `proved_here: false` and
`provenance.proof: not-supplied`. This is source context, not a new proved
theorem. Native certification, missing creation evidence, supplied proofs and
other item kinds do not qualify. Ordinary routing and prerequisite checks still
apply; this exception does not change immutable reader scope or findings.

## Step 5b impact windows

The lead task and engine gates use `--direct-boundary` for both impact windows:
`pre-author -> post-5a` and `post-5a -> current`. The tool includes direct logical
consumers and direct citations of every changed public interface. Each
independently changed consumer interface is also a source event. Review the
actual consumed clause on current carriers; propagate farther when a necessary
consumer repair changes that consumer's own Statement or Definition, and
recompute the live window after that change. An unchanged consumer interface
ends its propagation path.

The active lead owns reviews and receipts. A receipt computed without the flag
has a different scope and cannot satisfy the direct-boundary gate. Preserve
completed mathematical evidence and genuine unresolved defects while preparing
the exact current receipt; recomputed graph counts do not certify source claims,
replace current-hash review, or erase independently changed consumer obligations.
Both windows still need their reviewer and every required justified disposition,
and the normal impact and closure gates remain unchanged.

Frontier impact gates and lead task commands use `tools/frontier-item-gate.mjs`
with `--tool impact-audit`; it derives a nonempty `--items-file` selection from
the current manifests before every call. Missing or empty scope fails. The tool
loads the complete dependency and citation graph, keeps changed frontier items
and changed external suppliers used by frontier consumers, and requires
dispositions only for the selected consumers. Preserve earlier unscoped receipts
as history when normalizing a scoped receipt; excluded pending rows are not
mathematical passes; preserved outside dispositions, including pending rows,
do not require status or note closure for this frontier gate. Required frontier
dispositions still need justified review. Bare `tools/impact-audit.mjs` commands
retain their full-corpus behavior for explicit maintenance.

## Step 5 findings in another current-run batch

A reader may report a draft supplier outside its assigned batch using
`subject_type: "in-run-dependency"` and the exact assigned `consumer_id` whose
`deps`/`justified_by` closure reaches it. The splitter verifies unique producer
ownership in the current run, actual prerequisite reachability, draft run
identity, and current source, producer contract and manifest fingerprints.
Another run's draft or an arbitrary run item cannot enter through this route.
Producer membership does not certify its mathematics.

Unique current-manifest ownership and draft status establish a producer's run
identity even when an older carrier omits `pipeline_run`; an explicit marker
naming another run is rejected. Ambiguous ownership is rejected as well.
Published-dependency routing follows actual `deps`/`justified_by` edges through
readable current-manifest prerequisites as context, retaining their reachable
published or claimed suppliers. These run items are never recorded as published
subjects. Drafts outside the current manifests do not extend its closure.

The original `reader:BATCH:K` obligation stays with the consumer batch's Alpha;
the producer remains outside its edit scope. Its source is added to the normal
refuter scope for a read of current bytes. Collection retains the original
reader evidence and fingerprints; a refuter flags only a defect present in the
current source. The generated Alpha order includes the producer at its actual
dependency level as read-only work. An unresolved current supplier defect must
be escalated to its owner; normal producer and consumer proof acceptance still
applies.

Definition producers marked `proof: not-applicable` retain exact source and manifest fingerprints even when their numbered-proof contract is absent; its hash explicitly records `null`. This is routing evidence, not a proof waiver, and ordinary definition adjudication remains required. Other proof-bearing producers require a contract.

Routing stores the immutable producer pre-reader snapshot separately from the
current producer carrier. A reader may supply optional
`observed_source: {snapshot: "pre" | "current", item_sha256: "<raw SHA-256>"}`
only when those bytes actually bind its observation; the splitter checks that
hash against the declared producer snapshot. Without a binding, the observation
is explicitly `unbound`, with a null observed-carrier hash. A historical baseline
is not relabeled as a full-byte observation, and corrected current bytes are not
treated as the original defective source.

When an actual reviewed proof repair removes a redundant historical dependency
route, the owner may explicitly register the exact surviving native obligation
with `tools/step5-owner-historical-routes.mjs`. Follow its
[exact-byte source and owner-review requirements](tools/step5-owner-historical-routes.md).
Only a complete original hash-bound YAML path, immutable report/pre-snapshot
identity, original batch assignment and current owner proof review support this
exception. Current producer fingerprints and ordinary adjudication remain
mandatory; historical observations and native findings are never rewritten.

Alpha decisions for this route retain `producer_batch` and `consumer_id`, decide
the normal finding verdict and reference exactly one closed defect-ledger row.
An unbound original observation additionally requires
`historical_delta_unknown: true` and concrete `owner_resolution` evidence of at
least 40 characters. This preserves historical uncertainty while requiring an
independent current proof review; it does not waive the reader finding. A true
historical defect repaired by the producer is not a false positive. If it is the
same defect as the producer's accepted/amended reader repair, use exact
`same_defect_as` and concrete `same_defect_evidence`; the gate verifies the
producer and immutable baseline before permitting one ledger row to serve both
obligations. Stamping binds decisions to the current producer item, contract and
manifest, and Step5 closure freezes the existing routing and hash artifacts.

For an exact owner page repair made after a successful native reader but before
routing, use the page-only authority tool; do not remove the native finding or
revert a correct repair merely to satisfy the changed-carrier guard:

```sh
node tools/step5-owner-post-reader-page-repairs.mjs capture --run RUN --batch N --page PAGE --owner /root
node tools/step5-owner-post-reader-page-repairs.mjs check --run RUN --evidence research/AUTHORIZATION.json
node tools/step5-owner-post-reader-page-repairs.mjs record --run RUN --evidence research/AUTHORIZATION.json
```

Capture requires the genuine successful reader result, original findings/report,
unique manifest ownership, writer drain and before bytes exactly matching the
immutable pre-reader page. It freezes separate before bytes and their typed page
carrier without changing native artifacts or snapshots. A previously applied
owner repair may supply `--before-file PATH --provenance owner-recovered-before`
or `owner-reconstructed-before`; the exact pre hash remains mandatory. This
records owner-before/pre-snapshot provenance, not proof that the reader observed
those exact full bytes. A capture labeled `owner-captured-current` must equal the
actual live page even when a before-file is supplied; recovered or reconstructed
preimages must retain their separate provenance kinds. A page changed by the reader cannot use this default
exception. Page-only frontmatter placement corrections are allowed after capture;
item repairs, manifest changes and new subjects are not.

The authorization JSON has version1, policy
`owner-step5-post-reader-page-repair-v1`, run, batch, page,
`owner_identity: "/root"`, actual review time `at`, the capture path/raw SHA256,
`current_path`, `after_raw_sha256`, ordered nonempty unique literal
`edits: [{before, after}]`, hash-bound `original_owner_artifact` and `review`
references, `reviewed: true`, and a concrete reason of at least80 characters.
The original owner artifact must contain both raw page guards; the review also
names the run and exact page. Replaying the unique replacements against the
frozen before bytes must produce exactly the guarded current page. `record`
creates an exclusive read-only authority file per page; adding a different page
cannot alter an earlier scope binding, and duplicate/replaced authority fails.
Registration changes no finding, report, decision, ledger, snapshot, certification
or control, and grants no mathematical acceptance.

Registration also freezes a separate immutable after-repair page archive.
Capture, record and split require the current page to equal that registered after
carrier. Later checking validates the frozen before-to-after repair and native
history; legitimate subsequent native Alpha amendments retain normal current
carrier/stamp/adjudication guards and do not rewrite the authority. Relevant
reader, exact `5a-batch-N` Alpha and numeric-batch dispatcher writers must drain
before capture or record.

The splitter retains every original `reader:N:K` obligation and the normal
`page:N:PAGE` changed-page obligation. Its original reader observation remains
explicitly unbound with null `observed_sha256`; a separate hash-bound
`owner_page_repair` reference records the owner-before carrier. Scope checks
reload that exact per-entry authority and require the frozen archives and all
original evidence to remain bound; ordinary current-content checks govern later
Alpha edits. Reader decisions must explicitly retain
`historical_delta_unknown: true` and concrete `owner_resolution`; a real historical
defect does not become a false positive just because its current page is fixed.
Ordinary native adjudication, current-carrier checks, confidence and closed
ledger references remain mandatory for both routes. Where the two routes share
one actual physical defect row, the existing strict owner `shared_defects`
evidence binds both exact obligations/targets; two independent defects remain
two rows. No blanket permission to report already reader-repaired carriers in
open findings is introduced.

For a same-batch post-reader defect, a touched accepted/amended repair and its
actual `refuter:BATCH:K` finding may reference the same closed ledger row.
Both obligations remain required. The repair must have confidence one and the
exact same item and batch; the refuter verdict must confirm fatal or nonfatal.
An explicit `same_defect_as` and at least 40 characters of concrete
`same_defect_evidence` must link the two decisions. The gate binds the finding
to its exact scope row and verifies its observed composite carrier against the
immutable post-reader snapshot. Existing current carrier, severity, repaired
disposition and ledger checks still apply, in either decision iteration order.
This is not a general duplicate-ledger exemption or source acceptance.

For an existing source repaired only after the native read, stabilization instead
creates `post-reader:BATCH:ID`. Its exact expected target must be
`stabilized: true`, and its decision must be `amended_repair` with
`repair_confidence: 1`. It may share the existing actual same-batch
`reader:BATCH:K` or `refuter:BATCH:K` defect row only for the same ID, with the
explicit same-defect link and evidence above. The gate validates the complete
original finding against its scope and typed immutable reader-post item/page
carrier, and the repair against the exact stabilized obligation. The one ledger
row must have a repaired disposition (`fixed`, `narrowed`, or `dropped`), the
proper severity, and `adjudication_ref` entries naming both exact obligations
at the actual group decision-file path. Both decisions remain required, in
either iteration order. The original finding, report and snapshot stay unchanged;
no second manufactured defect row or rewritten observation is needed. Added
helpers retain the separate existing causal-addition rule. Ordinary current
fingerprint, stamps and gate checks still apply. When this exact owner amendment
has already been frozen into `pre-5a`, its current carrier may equal that
stabilized carrier only after the complete shared-finding rule succeeds. It must
still differ from the immutable reader-post source; ordinary and unshared
amendments retain their original source guards. This avoids demanding an
artificial extra edit merely to recertify the already completed amendment.

An actual added repair helper may causally close an existing exact
`reader:BATCH:K` or `refuter:BATCH:K` finding in another group. Its
`causal_subject` must name that original finding's subject; `same_defect_as`
must name that exact obligation, with at least 40 characters explaining the
actual causal repair. The helper's added target and completed repair verdict,
actual finding/scope identity, source snapshot binding and current normal
carrier checks remain mandatory. For an in-run producer, the recorded producer
pre-reader path, raw snapshot hash and typed carrier must remain unchanged.
The same repaired ledger row must name the original subject and retain both
exact obligation references at their actual decision-file paths. Sharing works
whether the helper group or finding group is checked first. An unrelated
producer defect stays separate; helper creation never licenses relabelling a
finding or manufacturing a defect row. Existing touched-consumer causal addition
behavior is unchanged.

When one closed row has three or more owners, the gate retains every independently
validated decision as a possible anchor. It verifies the existing strict sharing
rules for each pair in either iteration order and requires the entire family to
be connected by valid pairs. Thus a reader, two refuters and a stabilized owner
amendment may share one genuine defect without requiring every finding to name
the first decision. Every claim still needs its real native scope/source binding,
current carrier, severity/disposition and applicable exact ledger references.
A matching item ID or producer preimage alone does not create a same-defect link;
explicit evidence and compatible typed source classes remain required.
Ordinary native refuter records may omit their optional `subject_type`. The
sharing validator resolves this omission only from the exact native scope row,
its actual refuter assignment and the uniquely typed immutable reader-post
item/page carrier matching the recorded observed hash. Explicit source classes
remain unchanged; foreign producer findings cannot masquerade as local items.

The same rule admits a property-typed `page:BATCH:ID` accepted/amended repair
with confidence one and an actual same-batch refuter finding. The page must be
in the scope's changed-page and post-page inventories and the immutable
snapshot's page inventory, with valid file and page-manifest hashes. The
refuter observation equals the unanchored post-reader page carrier hash
(excluding `item_order`); the repair decision's separate order-anchor and
current-page checks remain intact. Item repairs still require the immutable
item inventory and all three item/contract/manifest hashes.

Different coarse defect classifications may describe the same actual error.
A reader and refuter in the same batch may share one closed row only when
their exact scope rows name the same item or page, have equal severity and
confirmed verdict, and bind the same immutable post-reader observed carrier.
An explicit `same_defect_as` and at least 40 characters of concrete causal
equivalence evidence remain mandatory in either iteration order. Page
observations exclude `item_order`; item observations retain all three carrier
hashes. Both original classifications and obligations remain unchanged, and
all current verdict, severity, repair and ledger-disposition checks still apply.
The closed row must also reference both exact obligations at their canonical
decisions-file path and match the subject and Step5 stage; fatal/nonfatal
severity and disposition must agree with the shared confirmed verdict.
Matching subject or carrier alone does not establish that two defects are one.

### Carried Step3 graph prerequisite evidence

The exact Step3-origin item
`lem-smooth-euclidean-hypersurface-graph-and-localization` may use a
`current-graph-lemma-manifest-review` evidence branch when its original
manifest projection cannot be recovered. This remains a carried-origin
refresh: the immutable Step3 origin, Step5 candidate-specific delta and real
successful batch dispatch context are still required. Original commissioned
items and new Step5 creation cannot use it.

Evidence retains `historical_delta_unknown: true`, every current carrier
hash, explicit current proof/supplier/direct-consumer review, exact
current source/dependency mirrors and hashed source evidence. The owner
approval link must bind the current run's historical checkpoint, its exact
hash and the approved obligation for this item. Per-item successful precheck,
rendercheck and strict proof-contract checks must bind the same current
carriers and ID, as for the existing exact ball-lemma branch. This records
owner provenance; it does not create native audit evidence or certify the
source merely from file presence.

When a later native Step-7 repair changes this exact graph lemma's proof and
dependencies, its closed Step-5 owner receipt remains historical origin evidence.
Provenance loading may validate that receipt against the frozen Step-5 closure,
sealed post-5a item/manifest/contract hashes, and the identical Step-7 starting
boundary. It also requires the original owner approval, hashed source evidence,
per-item checks and direct-consumer guards, plus a genuine hash-bound native
Step-7 adjudication/repair and certificate matching the current item. Only the
obsolete dependency projection is read historically; current item/manifest
dependency and source mirrors must still agree. Original Step-3 provenance and
historical uncertainty remain unchanged. Initial Step-5 owner bootstrapping is
still checked against live carriers; this later provenance path cannot create an
origin, accept a stale current certification, rewrite a closed receipt, or replace
current proof review and normal gates.

### Authenticated carried Statement repairs

An existing Step3 auditor-created item may use the Step5 owner recertification
basis `initial-step5-authenticated-statement-source-mirror` for a verified
Statement correction and synchronization of source fields already present in
the item. Exact recovered pre-reader item/manifest bytes must match the sealed
baseline; bytes outside Statement and actual item source metadata remain
unchanged, apart from soft line wrapping within Given and local Facts paragraphs
that preserves paragraph boundaries and mathematical text. The full Proof remains
byte-identical. Native input snapshots, unchanged subject contract apart from its
exact native review, successful dispatch context and the stable subject review
must bind current carriers. Sibling edits and mechanical decision stamps do not
alter that evidence. The owner receipt remains an owner refresh, preserves the
original Step3 origin and never invents native authorship or missing history.

`initial-step5-authenticated-native-input-manifest-mirror` handles a carried
item whose manifest was synchronized with mathematics already reviewed by a
successful native Step5 dispatch. The exact current raw item and mathematical
contract must match that dispatch's post-reader inputs; the contract may add
only its authenticated native review. Recovered baseline manifest projections
must match the immutable boundary. Current claim, dependency, source and other
metadata mirrors must match the actual item, and an altered strategy must match
its proof technique. Native review notes and the stable subject decision digest
are checked separately from sibling rows and mechanical stamps. A native log
may authenticate its complete printed snapshot, or its exact raw frontmatter,
claim, all Facts and full Proof/Verification sections together with the explicit
subject input comparison. These are distinct forms of actual read evidence.

Two finite owner reconciliations retain their actual authors. For the grand
maximal domination lemma, the hash-proven native input is replayed through the
logged literal vertical-tab repair, then the owner's recorded exact F1
before/after supplier-alignment replacement. Its unchanged mathematical
contract and separate native/owner review notes remain bound. For the first
resolvent counterexample, `initial-step5-owner-resolvent-projection-review`
requires the native-read current mathematical body, exact baseline/current
projections and the root's complete-proof/current-contract adjudication. It
records the owner's source/DC reconciliation, not invented native authorship.
Neither branch authorizes original-item promotion or new creation.

The tangential maximal norm lemma also admits one exact owner citation replay:
the root's recorded Countable Choice qualification of the radial/nontangential
Definition is mirrored in its F1 contract quote. The current literal quote and
raw supplier hashes, unchanged native item, explicit Statement/Given choice
premise, original owner receipt/evidence and Step3 origin are bound together.
Inverse replay of only that quote must recover the sealed native mathematical
contract and the prior contract including its unchanged native risk review.
Historical loading of the old receipt uses that same replay only when its
unchanged evidence is the hashed predecessor and every refreshed live carrier
matches. The public refresh revalidates the carried native manifest basis.
The current quote retains owner provenance; this refresh does not assert that
the native reviewer read the later owner repair or author a new proof review.

For `frontier-39-analysis-30`'s carried lacunary BMO example, the closed
Step-5 owner manifest receipt remains historical origin evidence after the native
Step-7 owner impact lane updates its sole L1 BMO Definition quotation. Historical
loading requires the sealed Step-5 closure and post-5a carriers, identical Step-7
starting boundary, unchanged current item and manifest, current Step-8 boundary,
and a genuine hash-bound native metadata repair and current central Step-7
item/context certification. Inverse replay of the single quotation printed in
the authenticated native Step-5 log must recover the exact historical full and
mathematical contracts; all original native review and decision checks still run
against that recovered contract. The receipt and evidence remain immutable.
This path does not refresh live mathematical evidence or create a new origin.

For the same run's grand maximal domination lemma, historical loading permits
only the native Step-7 update of its F3 grand maximal Definition quotation.
The original logged vertical-tab correction and root's F1 supplier-alignment
replay remain required by the ordinary Step-5 bootstrap. The old raw Definition
must come from that authenticated native Step-5 log; changing only this quote
must recover the sealed historical full and mathematical contracts. The current
item and manifest, sealed Step-5/Step-7 boundaries, native impact-initial-r1-u1
producer and closed aggregate, current Step-8 boundary and central Step-7
item/context certification are required independently. This preserves the
original native and owner authors and leaves the closed receipt immutable.

For `frontier-39-analysis-30`'s carried truncated maximal estimates lemma, the
closed Step-5 owner receipt remains historical origin evidence after the native
Step-7 fatal repair replaces its radial truncated grand operator with the full
aperture-one cone supremum. Historical loading requires the sealed Step-5
closure and post-5a carriers, identical Step-7 starting boundary, and exact old
item, manifest and contract preimages recovered from actual native inputs and
matching every historical carrier hash. The original Step-5 native review,
subject decision, owner evidence and Step-3 origin checks run against those old
carriers. Separately, loading requires the rejected native tuple, successful
repair dispatch and collected repaired review, the actual direct-consumer
examination, subsequent supplier-impact closure, and current central Step-7
item/context certification matching the immutable Step-8 boundary. Current
claim, source and dependency mirrors remain required. This path preserves the
receipt and evidence, does not replay the repaired current proof as historical
mathematics, and cannot replace current review or reopen Step 5.

The dilation's public `owner-recertify --refresh-evidence` option refreshes
only an authorized `accepted_repair` to `amended_repair` decision binding on
identical carriers, preserving every other stable review field. It writes a
new receipt with a hashed `supersedes` link and keeps the original receipt and
evidence immutable. Normal certification selects and validates that current
receipt. This option cannot replace mathematical content or erase history.

## Frontier validator scope

Item gates select only the current run's manifest items. `tools/frontier-item-gate.mjs`
derives the selection before each validator call; it never defaults to the corpus
when manifests or items are missing. Precheck uses selected item files; render and
prose checks also include the run's existing pages. Dependency, forward-reference,
external-result and source-home validators load the full library to resolve
suppliers but check selected subjects. Relevant prerequisite cycles still fail;
unrelated items, page hygiene and cycles do not hold the frontier. Exact owner
item hashes bind relevant planned interfaces; an unrelated rewrite of the shared
plan file does not invalidate owner recertification by timestamp alone. Pathway checks
select the run's pages and retain their prerequisite placements as context. Plan
validation uses the same selected page scope, including before scaffold item
lists are populated; it checks the frontier's declarations without gating
unrelated plan entries.

The `gate-liveness` precheck probe uses the shared `frontier-gate-scope.mjs`
adapter to pass exact current manifest item files. Missing, malformed, empty or
unknown inventories fail liveness, including with `--allow-missing`; unrelated
items and external suppliers cannot contribute to its proof count. Liveness
still measures work performed and retains each probe's validator exit status;
the ordinary validator gates determine whether that work passed.

Step-5 closure, Step-8 impact closure and Step-9 pathway gates use the same
frontier selectors. Step-8 impact closure keeps the cumulative `pre-author`
to latest snapshot window and its existing receipt, with full supplier context
and only selected consumers as review subjects. The scoped prose check includes
existing pathways of selected categories.

Step-5 published-dependency findings outside the manifest inventory may close
only their owned consumer use through `context_accepted`. The root receipt binds
the original finding, active adjudicator, actual current supplier/consumer
mathematical hashes, literal consumed clause and consumer premises, complete
prerequisite review and retained open maintenance finding. It does not certify
or repair the published interface. Stamping and final routing retain this seal;
changed used mathematics invalidates it. In-frontier suppliers cannot use it.

Bare validator commands retain their repository-wide behavior for explicit
maintenance. Outside-frontier repairs have their own recorded local evidence;
their publication audit or formatting is not a gate on this run.

## Scoped closeout with unrelated work present

Step-9 evidence validates the canonical defect-ledger history and supersession
links before checking active fatal obligations. Validly superseded observations
remain visible in the fatal-defect table, labelled historical with their current
owner; they do not become current blockers. Active open or incomplete fatal
rows and invalid ownership links still fail evidence generation.

Step-9 readiness and report integrity seal physical files and exact symbolic-link
target bytes with distinct file/link hash prefixes. They do not follow directory
links or external targets; physically present targets are protected at their own
paths. Dangling links are included without changing them. Changes to this hashing
rule require normal readiness refresh and its complete gate battery, followed by
a new report snapshot; old receipts are not rewritten as historical evidence.

`tools/run-commit.mjs` retains its existing whole-tree behavior for runs without
a closeout scope policy. To preserve unrelated staged changes and working files,
the owner may create `research/RUN-closeout-scope.json` **before** Step 9 seals
readiness and report integrity. This changes commit ownership only; mathematical,
proof-layout, obligation, readiness and owner-report gates still apply. A missing
tracked policy is an error, not a fallback to whole-tree staging.

The policy is exact and run-local:

```json
{
  "version": 1,
  "run": "RUN",
  "authorized_by": "owner",
  "authorization": "Owner authorization for this run's scoped closeout.",
  "additional_paths": []
}
```

Automatic ownership includes every selected page, its current items and existing
category pathways, the scope ledger, canonical `research/plan-spec.json` and published
supplier ledger, current published-repair claim targets with valid recorded repair
evidence, and all Git-eligible `research/RUN-*` files and directories. It includes
the policy and normal final `RUN-dispatch/tool-close-step9-v2.result.json`. Ignored
raw dispatch logs and transcripts are never force-added or copied. Required
carriers must exist and be eligible for Git; existing selected-category pathways
cannot be omitted. Absent category pathways remain governed by the native pathway
gates and are not authored during closeout. Present symbolic links, including
dangling links, and other nonregular owned carriers remain errors.
Ignore eligibility uses `git check-ignore` with exact NUL-separated filenames;
its filename input does not accept Git's literal pathspec flag. Ignored owned
carriers still fail closeout.

For an actual shared supporting change, add an exact object to `additional_paths`
with `path`, raw `sha256`, a concrete `reason` (at least 20 characters), and
`ownership_evidence`. The evidence must be current-run research JSON with `run`
and an `owned_paths` array containing the same exact `path` and `sha256`. A null
hash authorizes an absent, previously tracked deletion. Wildcards, directory
allowlists, unsafe paths, symlinks and duplicate or redundant paths are refused.
This is whole-file ownership: resolve unrelated edits within an owned file before
authorizing it. The tool does not separate mixed hunks or infer ownership from a
dirty status.

Scoped closeout runs on main, stages literal NUL-delimited paths into a temporary
index, and commits those paths with `git commit --only`. It then updates only
owned entries in the real index. The existing final dispatch receipt records
hashes and counts of the outside staged entries (including flags), outside HEAD
entries, and outside working bytes and modes. Successful return and subsequent
`run-commit --check` verify preservation and that every owned artifact is
committed and current. Unrelated staged changes may remain staged. The receipt
records a precommit baseline; it does not claim a postcommit check happened before
the commit. No new late evidence file is created outside the dispatch directory.

Preservation excludes Git metadata, `node_modules`, `.autopilot*` runtime, and
the current run's operational dispatch `.log`/`.log.gz` files, which may append.
Other ignored files remain in place and are included in outside byte checks.
Executable commit, index or reference hooks, active clean/process filters,
external fsmonitor helpers, unresolved conflicts, submodules, split indexes and
redirected Git environments fail closed. No hook, filter or configuration is disabled. Non-UTF-8
paths and unsupported index formats are also refused. Cross-scope renames and
ambiguous cross-scope deletion/addition pairs require ownership reconciliation.

The sole reviewed hook exception is the installed `post-commit` script whose
exact source exits when `graphify-out` is absent. A policy may add this exact
`reviewed_hook` object:

```json
{
  "name": "post-commit",
  "path": "/home/lazyinspirit/.config/git/hooks/post-commit",
  "sha256": "a9cc684a69d83b0e6b88a43ec490ffb6cea46482c2b7df7ec9c9133914e5cb53",
  "required_absent_path": "graphify-out"
}
```

Only these fixed values and guard semantics are supported. The configured hook
path, regular executable source hash and guard-path absence are verified before
and after each index mutation and commit, and again at final verification. A
changed source, path or newly present `graphify-out` fails closed. The normal
hook executes as installed; no hook, filter or Git setting is replaced or
disabled. Other active hooks remain refused.

Drain mathematical, evidence and Git writers before the normal closeout stage.
Concurrent changes are detected where checked; this is not an atomic transaction
against external writers. A failure after Git creates the commit holds closeout
and reports that the commit landed; the tool does not reset or discard work.
After repair, rerun the ordinary engine gates on current carriers. Scoped
closeout does not push, publish, change stages or revise the workflow.

## Guarded recovery

- Before recovery, pause the run, let all workers finish, stop the controller
  and inspect `status`. Recovery guards reject active work and preserve
  completed evidence. After recovery, inspect status, start the controller,
  then resume the paused run.

- **Interrupted Step-7 impact or gate repair:** Use only for an uncollected current
  `7.2-impact`, `7.6-impact` or `7.9-repair` assignment after fixing its routing defect:

  ```bash
  node tools/step7-impact-recovery.mjs --run RUN --state-dir .autopilot/RUN --reason "Corrected routing defect and its cause"
  ```

  It rejects changed items, active maintenance, successful workers and collected or
  certified evidence. It preserves the failed assignment and creates a fresh numbered
  pass; repeating the same reason is idempotent.
- **Revisit Step 5 after Step 7:** The owner-authorized `reopen-step5` command applies
  only after `7-freeze` and before Step 8 starts. Its version-1 authorization JSON must
  bind `run`, `authorized_by`, `authorization` and the exact
  `STEP5_STAGES` array in `tools/autopilot/src/step5-reopen.mts` as
  `reopen_stages`.

  ```bash
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts reopen-step5 --run RUN --state-dir .autopilot/RUN --authorization AUTH.json
  ```

  It archives Step-5 receipts and generated artifacts, preserves Steps 6–7, and arms a
  pause after `5b-close` by default.
- **Mathematical repair after Step 7:** Use `recover-step8` only with explicit owner
  authorization, after repairing its named items and before Step 9 dispatches. Its
  version-1 JSON needs `run`, a unique `recovery_id`, `baseline:"post-step7"`,
  `authorized_by:"owner"`, the owner's `authorization` text, nonempty `required_targets`
  within `allowed_targets`, and `reopen_stages` exactly
  `["8-changes-judge","8-close","8-changes-stamp","8-receipt"]`.

  ```bash
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts recover-step8 --run RUN --state-dir .autopilot/RUN --authorization AUTH.json
  ```

  The command uses the same owning-run change selector to check the repair
  allowlist against the `post-step7` snapshot; unrelated changes are not recovery
  subjects. It requires a paused run, a stopped controller and drained writers,
  archives the Step-8 suffix receipts, and leaves the run paused. Step-7 history remains
  intact.
- **Historical checkpoint migration:** The current migration accepts only a verified
  merged post-review checkpoint. Export with the old integration checkout before
  installing the new workflow. The source must be paused and inactive, and the target
  namespace must be unused. Prepare a distinct fresh run with the current tools,
  then verify:

  ```bash
  node tools/autopilot/bin/migrate-checkpoint.mjs export --run OLD --root LIVE_REPO
  node tools/autopilot/bin/migrate-checkpoint.mjs prepare --source OLD --run NEW
  node tools/autopilot/bin/migrate-checkpoint.mjs verify --run NEW
  ```

  The migration copies hash-bound evidence, not old dispatch successes. The new run
  executes current import, author and review gates and fresh Step-5b closure. If
  preparation stopped before creating state, use
  `prepare --source OLD --run NEW --resume-preparation`. It accepts only
  byte-identical generated files and unchanged source evidence.

## Frontier 41 main integration history

The sealed source41 Step7 certificate retains its original full shared-ledger
carrier after the merge restores native39/40 journals. Verification requires the
exact original certificate and ledger hashes, an owner recovery record, every
original row unchanged, exactly1948 added39/40 rows, and an identical ordered41
projection. It accepts no other evidence change or new mathematical verdict.
The same binding preserves the original human ledger and admits its exact
current native rendering. All230 other certificate evidence artifacts remain
unchanged; neither history carrier changes a proof or a judgment.
