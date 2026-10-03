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

- `frontier --next` selects up to 30 A/B pairs by default; `plan` enforces a
  30-pair cap. Both pages of each pair must have strictly more than 95% of their
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
- Pass the same `--run` and `--state-dir` to every command. The default state directory
  is `.autopilot/`, and some older runs use it directly. Check the run name in
  `state.json` before controlling a run. `status` recomputes from disk. Historical
  `research/*RESUME.md` files do not establish live status; check the state directory
  and Git history.

## Supervise and clear gates

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
  A checker correction that leaves item and mathematical evidence bytes unchanged
  needs the ordinary failed-gate retry, without rewriting items or reopening the
  Step-8 suffix merely to restyle equivalent YAML.
- Step 9 readiness ends with `proof-step-separation` and `proof-blue-tags`.
  They share one deterministic renderer pass and write
  `research/RUN-proof-layout.json`. Scope includes every item on the run's A/B
  pages, shared published items, and additional items changed since the first
  run touch snapshot. Introductions and notes after the final tagged QED remain
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

- Step 7 freezes `research/RUN-step7-v2/frontier.json`. Its adjudication, repair,
  rejudgment and item gates cover draft IDs in that frontier. Batch adjudicators resolve
  rejections; three owner lanes close disjoint frontier impacts; central certification
  follows after all writers and separate consumer maintenance finish. Rejudgment and
  repair repeat until the latest round's unique confirmed fatal original frontier items
  are strictly below 5% of the original frontier. All confirmed nonfatal defects also
  require repair. The complete scoped gate then repeats repair, recertification and the
  same battery until green. Outside findings remain recorded and excluded from frontier
  item gates; global, runtime and unknown failures still block. Step 7.9 and its
  continuations cannot add items.
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

## Controls

- Current agent defaults and Step-5/6 review profiles use GPT-6.1 Sol at high
  effort. DeepSeek V4.1 Flash max assignments remain explicit. Legacy Sol and
  Luna registry entries preserve historical evidence; new default judges use
  the `sol61` lineup at high effort. Running workers retain their launch settings.

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

## Step 5 findings in another current-run batch

A reader may report a draft supplier outside its assigned batch using
`subject_type: "in-run-dependency"` and the exact assigned `consumer_id` whose
`deps`/`justified_by` closure reaches it. The splitter verifies unique producer
ownership in the current run, actual prerequisite reachability, draft run
identity, and current source, producer contract and manifest fingerprints.
Another run's draft or an arbitrary run item cannot enter through this route.
Producer membership does not certify its mathematics.

The original `reader:BATCH:K` obligation stays with the consumer batch's Alpha;
the producer remains outside its edit scope. Its source is added to the normal
refuter scope for a read of current bytes. Collection retains the original
reader evidence and fingerprints; a refuter flags only a defect present in the
current source. The generated Alpha order includes the producer at its actual
dependency level as read-only work. An unresolved current supplier defect must
be escalated to its owner; normal producer and consumer proof acceptance still
applies.

Routing stores the immutable producer pre-reader snapshot separately from the
current producer carrier. A reader may supply optional
`observed_source: {snapshot: "pre" | "current", item_sha256: "<raw SHA-256>"}`
only when those bytes actually bind its observation; the splitter checks that
hash against the declared producer snapshot. Without a binding, the observation
is explicitly `unbound`, with a null observed-carrier hash. A historical baseline
is not relabeled as a full-byte observation, and corrected current bytes are not
treated as the original defective source.

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

## Scoped closeout with unrelated work present

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

Automatic ownership includes every selected page, its current items and category
pathways, the scope ledger, canonical `research/plan-spec.json` and published
supplier ledger, current published-repair claim targets with valid recorded repair
evidence, and all Git-eligible `research/RUN-*` files and directories. It includes
the policy and normal final `RUN-dispatch/tool-close-step9-v2.result.json`. Ignored
raw dispatch logs and transcripts are never force-added or copied. Required
carriers must exist and be eligible for Git; selected pathways cannot be omitted.

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
- **Fatal finding after Step 7:** Use `recover-step8` only with explicit owner
  authorization, after repairing its named items and before Step 9 dispatches. Its
  version-1 JSON needs `run`, a unique `recovery_id`, `baseline:"post-step7"`,
  `authorized_by:"owner"`, the owner's `authorization` text, nonempty `required_targets`
  within `allowed_targets`, and `reopen_stages` exactly
  `["8-changes-judge","8-close","8-changes-stamp","8-receipt"]`.

  ```bash
  node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts recover-step8 --run RUN --state-dir .autopilot/RUN --authorization AUTH.json
  ```

  The command checks the changed-item allowlist against the `post-step7` snapshot,
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
