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
- Step-5 readers, refuters and adjudicators examine the authored mathematics. Resolve
  actual failing subjects and cross-group impacts. A changed Statement or Definition
  opens a direct-consumer review; continue another hop only if that consumer's own
  Statement or Definition changes. Proof, citation, dependency and metadata edits with
  unchanged interfaces do not propagate. A reference alone does not require an edit.

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
