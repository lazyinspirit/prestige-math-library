# Quantum native origin and refresh assessment

Run: frontier-43-complex-representation-15. Preparation only. No certification, gate, content, engine source, live state, controls, or process changes were made for this assessment. This is a new preparation branch, not a repair round. Other frontier runs are outside scope.

## Confirmed history and present gap

The immutable Step 3 baseline is `research/frontier-43-complex-representation-15-step3-auditor-baseline.json`, recorded at 2026-10-07T11:27:03.098Z. Neither `def-lie-bialgebra-and-root-graded-manin-triple` nor `thm-root-graded-manin-triple-gives-dual-lie-bialgebras` appears in its manifest inventory or existing-item-file inventory. Baseline raw-byte SHA-256: `3603076c34bf5190af68e5d8f38c6624c600bccbeb893349378abb6d90bbfd0b`.

These are genuine native additions, not first creations by the later owner helper. The original c551e812fd089d47 alpha-high attempt-1 log contains new-file diffs for the definition at line 15491 (`new file mode`, `/dev/null`) and the theorem at line 16791. Its attempt ran 11:28:19.947Z–17:28:21.015Z and failed. That failed dispatch alone cannot satisfy `authorResultAllowed(3, row)`. Its attempt-log SHA-256 is `f50817307e50c97f189e23858021338e42d8eca55874a00731f98faa643b62ed`.

The next 5359d8685d4f4924 attempt ran 18:37:25.586Z–19:04:51.097Z and failed. Quantum9049de6d60173d78 then ran 19:05:03.054Z–19:43:34.556Z successfully, using alpha-high, DeepSeek V4.1 Flash max, genuine terminal completion, and `author_artifacts.required=true`, `checked=31`, `ok=true`. Its immutable attempt-1 result is `research/frontier-43-complex-representation-15-dispatch/alpha-high-step3b-pair-quantized-enveloping-algebras-and-quantum-serre-relations-9049de6d60173d78.attempt-1.result.json`, SHA-256 `7080309bde63e652e719042aff8eeb7a83577fa1369a0d1a6dce2a765a986dff`. It covers exactly the quantum pair. The result tail and native pair report explicitly identify the two added prerequisites and the remaining engine-certification obligation. Native success is evidence of completed native author work; it is not an assertion that every mathematical decision was accepted.

The owner helper's actual before copies survive under `research/frontier-43-complex-representation-15-quantum-normalization-sources/round1-before/`. Their hashes are:

| Item | Before-copy SHA-256 | Current item SHA-256 at assessment |
| --- | --- | --- |
| def-lie-bialgebra-and-root-graded-manin-triple | `9bfc6ad7b9bffea045af725f4e25346bbeb5498d651c3c6eb4e8f86542738782` | `360955d66b3693dd32d86183fd51f088ab080cc4facdffe8e17fe3fd5d1350c8` |
| thm-root-graded-manin-triple-gives-dual-lie-bialgebras | `d48f612006e57b0f9c84218614c8277a193f8b345b8b2bffdb618f74eb917505` | `7417462abf3bc84b5a9fa0ccb3071e931d84434b6436cb99830fb4c0c1e565fe` |

Both before copies were written at 19:47:44.312Z, after native completion. They establish the helper's preserved input bytes, not a native write-window certificate. Current own-file mtimes are 20:04:08.801Z, after every successful quantum author window. The native additions already existed in the before copies and native log before the owner correction; registering them as owner-spawned creations would misstate their origin.

At inspection there is no `research/frontier-43-complex-representation-15-step3-auditor-certifications.json`. State records 3b-author as entered, without `gatesPassedAt` or `doneAt`, and quantum9049 as successful. The pair's 27 item paths, A/B pages, batch-6 manifest/contracts, and pair report exist. Presence is not mathematical acceptance, but it prevents the artifact-missing recovery mechanism from treating this completed unit as pending.

## What the existing protocols actually support

`tools/step3-auditor-items.mjs` recognizes a successful current-run alpha-high author covering the pair. Its initial certification checks current proof-input mtimes against that result. A late owner repair can establish current acceptance only when a surviving validated prior certificate supplies native origin, or the actual own-file mtime remains inside a successful native author window. Here neither condition holds. The certifier does not bootstrap historical origin from dispatch-log text, helper before copies, or an owner assertion. `loadStep3AuditorProvenance` deliberately retains historical certification without rechecking current mtimes, but there is no such certificate to retain in this case.

`tools/step3-owner-creation.mjs` is for genuine first creation by an actual owner-spawned author, with assignment/authorship/escalation evidence. Its schema accepting postbaseline IDs does not authorize retrospective relabeling of native creations. The helper before files and native new-file diffs positively rule out that characterization here.

`retry --unit` preserves successful dispatches and rearms failed/unfinished attempts. It does not retract successful coverage. `dispatchStage` subtracts ordinary successful coverage before planning. `stage-stalemate` applies only to covered units missing artifacts, so it cannot schedule this pair. Step3's failure hook first tries partial certification and can return owner-held or mechanical-only resolution; the configured `owner-recertify` gate policy also prevents automatic gate-triggered repair waves. Neither `retry` nor ordinary certification is a supported completed-unit native refresh control.

No certification or gate was invoked to discover this gap. No mtimes were changed or historical evidence manufactured.

## Least destructive lawful route and minimal public design

A fresh, substantive, engine-dispatched native author refresh of this one pair can examine the corrected origin-sensitive suppliers and actual current inputs. Its genuine new successful result then supplies current native author evidence. It need not claim the old author wrote the later owner edits, infer origin from their mtimes, or erase the real first-author history. Existing public controls lack the required completed-unit refresh operation; a narrow engine capability is needed before scheduling it. Root review must approve that implementation before source changes.

Proposed public command, after implementation, review, and worker drain:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts refresh \
  --run frontier-43-complex-representation-15 \
  --state-dir .autopilot/frontier-43-complex-representation-15 \
  --stage 3b-author \
  --unit quantized-enveloping-algebras-and-quantum-serre-relations \
  --reason 'Refresh native author evidence for corrected def-lie-bialgebra-and-root-graded-manin-triple and thm-root-graded-manin-triple-gives-dual-lie-bialgebras; inspect actual current suppliers and complete pair artifacts without gratuitous edits.'
```

This command is a design, not an available command or permission to run it now.

The smallest coherent implementation comprises:

1. `tools/autopilot/bin/autopilot.mts`, `src/control.mts`, `src/types.mts`: expose `refresh`, requiring explicit stage, unit and nonempty reason; carry run identity and a generated request nonce. Stage opt-in supplies a `refreshPlan` hook. Reject unsupported stages, unknown units, foreign run identity, skipped/closed stages, and stages beyond the current unfinished transition boundary. Do not reopen a passed stage or invalidate a completed suffix.
2. `src/state.mts` and types: persist engine-owned refresh requests keyed by stage/unit, with nonce, request time, reason, requested unit, launched labels/attempts and eventual successful result reference. Preserve every old success receipt and dispatch record. Preserve completed request history; an already pending request cannot silently acquire a fresh retry budget.
3. `src/executor.mts`: centralize effective coverage so a pending request masks only its named unit in `stageStatus`, `unitsComplete`, dispatch planning and the group join. Count mode must not make a refresh complete. A request completes only from a genuine successful result for an engine-started request label, correct run/role/pattern and named coverage, with a valid start at or after the request and a valid end. Old, merely later-ending, wrong-run, failed, unrelated and pre-request processes do not satisfy it. Reconcile result evidence before deriving completion after restart.
4. Dispatch refresh through the existing `dispatchStage` capacity, active-adoption, exclusive-cohort, preflight, prerequisite and stagger checks. A live local/adopted writer for the unit or its cohort prevents another launch. The newly repaired adopted stage/role/global accounting remains intact. The request's per-request attempt ceiling bounds refresh retries even if current-input hashing changes the dispatch label; exhaustion remains owner-held. An explicit scoped retry can rearm the request without manufacturing success.
5. `stages/mathlib.mts`: opt in only Step3b pair authoring initially. Reuse its actual alpha-high/DeepSeek max native author plan, narrow covers to the one pair, add the request nonce to the ordinary 16-hex label hash, and append focused direction to the existing task. Keep the normal result pattern, required artifacts, source obligations and gates. A fresh label preserves the earlier successful canonical result instead of overwriting it.
6. `tools/autopilot/test/native-refresh.test.mts` (new focused fixture) and relevant control tests: verify old successes remain byte-identical, only one named completed unit becomes pending, a genuine fresh native result closes it, failure leaves it pending, bounded attempts cannot be evaded by changing plan hashes, duplicate requests are idempotent, unknown/foreign/closed requests are refused, local/adopted/cohort writers block launch, caps remain effective, restart reconciles an already written genuine result, and gates never advance while refresh is pending. Include a Step3 pair-plan test for unchanged author profile/pattern and the request-bound task scope.
7. `tools/autopilot/README.md` and `WORKFLOW.md`: document the explicit control, narrow unfinished-stage authority, evidence distinction and bounded retries. Root owns integration, scoped commit, deployment and any live action.

Focused task direction: re-read the corrected Manin definition before the Manin theorem, then inspect the actual directly affected native proof inputs and pair artifacts. Adopt, repair or escalate the actual mathematical argument through normal native author responsibility; report what was examined and any necessary amendments. Do not edit for timestamp freshness, repeat unrelated settled mathematics, touch sibling pair carriers, invent successful historical authorship or treat owner repair as independent review. The request reason identifies the two origin-sensitive suppliers; full pair artifact auditing remains mandatory because the native result still covers the pair.

After the fresh native worker and all other writers drain, root must refresh every Step3 item in one supplier-before-consumer pass, reload a fresh context, validate complete inventory/current hashes and receipts, issue the normal native certification bundle, and require full `checkStep3(..., 'final').closed` before the same native Step3 gate battery. Midpass mutation invalidates the pass. No frontier42 action or broad corpus validator is part of this route.

## Assessment boundary

The provenance restriction is doing its intended job; weakening it is unnecessary. The concrete missing capability is an explicit, bounded completed-unit refresh inside an unfinished stage. Implementing that scheduling capability is a new engine repair requiring root review, rather than a reason to alter baseline, timestamps, successful results or certificates. No repair round was consumed by this preparation.

## Authorized engine implementation round 1 — review handoff

Root subsequently approved the design and authorized engine implementation only. The public `refresh` control is now implemented in the uncommitted review patch; it has not been issued to a live run. Requests are stored append-only in engine state, preserve old results, and freeze their normal native plan/label. Only active, unclosed, opted-in Step3b pair units are accepted. Existing dispatcher preflight, caps, adoption, cohorts and stagger remain the dispatch route. A request-specific genuine native success must carry the correct label/run/role/single-unit coverage and a valid postrequest start/end; a synthetic `written_by: autopilot` result cannot complete it.

Review files: `tools/autopilot/bin/autopilot.mts`, `src/control.mts`, `src/state.mts`, `src/types.mts`, `src/executor.mts`, `stages/mathlib.mts`, new `test/native-refresh.test.mts`, native `README.md`, and normative `WORKFLOW.md`. The concurrent unrelated Step1 extcheck change in mathlib is preserved and is not this repair's hunk. Root must review the actual patch before a scoped commit. No live state, controls, processes, content, origin checks, workflow revision or frontier scope changed during implementation.

Targeted validation, cwd `tools/autopilot`:

```bash
node --import tsx --test test/native-refresh.test.mts
# 10 tests passed, including public CLI round trip and foreign-run refusal.

node --import tsx --test test/native-refresh.test.mts test/adoption-capacity.test.mts \
  test/dispatch-preflight.test.mts test/executor-efficiency.test.mts test/item-dependency-levels.test.mts
# 53 tests passed before the final separate CLI test was added.
```

The adjacent scaffold-final suite produced one unchanged failure. It was independently reproduced using exact HEAD `stages/mathlib.mts` and HEAD `test/scaffold-final.test.mts` in temporary sibling source/test copies; those copies were deleted after the check. Relevant certifier/decision sources and original test are byte-identical to HEAD. Baseline command, cwd `tools/autopilot`:

```bash
node --import tsx --test \
  --test-name-pattern='owner gate repair recertifies an existing auditor-created item' \
  test/scaffold-final-native-refresh-baseline.test.mts
```

Current command:

```bash
node --import tsx --test \
  --test-name-pattern='owner gate repair recertifies an existing auditor-created item' \
  test/scaffold-final.test.mts
```

Both exit 1 identically at test line 512: the expected regex is `invalid owner recertification provenance`, while the actual rejection is `lem-created: missing owner recertification provenance`, from `tools/auditor-created-items.mjs:1630`. This is an unchanged error-message expectation; the tampered evidence is rejected. It was not edited in this branch.

`npm run typecheck` still reports 34 diagnostics only in `test/auditor-created-items.test.mts`, `test/judge-stateless.test.mts`, `test/pair-author-completion.test.mts`, `test/ready-pairs.test.mts`, `test/step7-groups.test.mts`, and `test/step7-workflow.test.mts`. No changed engine, stage, CLI or native-refresh test has a diagnostic. Scoped `git diff --check` passes. There was no broad corpus validation or live gate attempt.

## Root review correction — focused repair round 2

Root's one concrete review finding was that status masked completion but retained an ordinary numeric coverage message. `stageStatus` now derives its numeric covered count and missing-unit message from the same masked `stageCoverage` set, retaining the explicit native-refresh annotation. A new focused test checks that ordinary 3/4 coverage becomes effective 2/4 after refreshing `a`, with missing `[a,d]` and completed siblings `[b,c]`. COUNT fallback remains unable to complete a refresh.

Final focused check, cwd `tools/autopilot`:

```bash
node --import tsx --test test/native-refresh.test.mts \
  test/adoption-capacity.test.mts test/executor-efficiency.test.mts
# 43 tests passed, including all 11 native-refresh tests.
```

Scoped diff check passes. Native completion still requires the exact engine-started request dispatch record and a genuine matching result with valid postrequest timing; old successes and synthetic receipts cannot satisfy it. This closes the two permitted engine-refresh repair rounds. Root integration/commit approval remains the next step; no live action has been taken.

## Root independent check and public-wrapper harness correction

Root's independent run of the same 43 tests from repository-root cwd, using an absolute available tsx loader, returned 42 pass / 1 failure. The public CLI test failed at its expected-success assertion (`native-refresh.test.mts:155`) because its child invocation hardcoded `--import tsx`; that package resolves from `tools/autopilot` cwd used in the earlier local pass but not from repository-root cwd. This was a concrete test-harness portability defect; it was not a fresh engine repair round.

Only the harness invocation was corrected: the test resolves the absolute repository `tools/tsx-run.mjs` from its own `import.meta.url` and invokes that documented public wrapper for the child CLI. Engine code remains unchanged after round 2. The corrected same-43 rerun from repository-root cwd used:

```bash
node --import /home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/tsx/dist/loader.mjs \
  --test tools/autopilot/test/native-refresh.test.mts \
  tools/autopilot/test/adoption-capacity.test.mts \
  tools/autopilot/test/executor-efficiency.test.mts
```

Result: 43 passed / 0 failed. This explicitly distinguishes root's genuine environment failure from the earlier local pass. Root supplied the cwd and absolute-loader invocation description; the exact original shell line was not included in the review message. The command above is the exact corrected rerun executed by this reviewer. No live controls/state/process changes or commit were made.

Root independently repeated the corrected repository-root 43-test check and obtained 43/43, exit 0, then approved the narrow commit. Commit: `318ee7674f355d22d81d71f418685c937682c5b4` (`Add bounded native refresh for active Step 3b pairs`). Exact nine committed files are `WORKFLOW.md`, `tools/autopilot/README.md`, `tools/autopilot/bin/autopilot.mts`, `tools/autopilot/src/control.mts`, `tools/autopilot/src/executor.mts`, `tools/autopilot/src/state.mts`, `tools/autopilot/src/types.mts`, `tools/autopilot/stages/mathlib.mts` (refresh hunks only), and `tools/autopilot/test/native-refresh.test.mts`. The initially empty index was inspected, then only those approved changes were staged and the staged inventory/diff checked before commit. The unrelated Step1 extcheck-removal hunk remains uncommitted and preserved. Index is empty afterward. Root owns target-run reload and public refresh issuance; this reviewer performed no live controls/state/process actions.
