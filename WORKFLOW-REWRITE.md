# Workflow rewrite handoff

Branch: `workflow/group-author-nine-step`.
Baseline: `68e7b599f`, a snapshot of the existing workflow edits.
Implementation is isolated in this clone; it is not installed in the live checkout.
No live controller, worker, state, ledger or published content was changed.

Step 3 group authors now audit, repair and author. The separate authoring stage
is removed. Step 4 retains mechanical splice/refusal handling; author snapshots
bracket authoring. Scoped local A-page definitions/lemmas require current author
decisions before splice. Substantial prerequisites and suspected published
defects go to the owner. Every dispatched agent and item judge receives the
honesty/source-reading requirement and web-search access.

The active sequence is Steps 1–4, 5a, 5b, 6–9. WORKFLOW.md lists every stage.
Active code, task templates, schemas and tests use these identifiers. Historical
research artifacts are preserved, not rewritten or treated as current prompts.
Revision `group-authors-nine-step-v1` rejects incompatible existing run state and
receipts. Installation requires owner coordination and a fresh run; do not
hot-install into the running frontier or copy old dispatch receipts.

Validation: the complete autopilot suite finished with 639 passed, 0 failed,
1 skipped. The skipped guard test was then replaced with a self-contained
fixture: matching judge evidence passes, and an unsupported adjudication fails
with exactly `judge-adjudication-no-rejection`. Its safety suite and type check
were rerun: 10 passed, 0 failed, 0 skipped. The full suite has not been rerun
after this test-only correction. Tests cover author artifacts, local prerequisite insertion, task
generation, model profiles, revision isolation, review/closure routing, and
Step 3 → Step 4 → Step 5 → Step 6 transitions. Type checking is included.
Commands used:

```bash
node tools/tsx-run.mjs --test --test-concurrency=4 tools/autopilot/test/*.test.mts
git diff --check
```

Only the rewrite commit belongs to this task. The baseline snapshot includes
preexisting edits; compare it with the target checkout before integration.
Untracked research task files in this clone are disposable test output and are
not part of the rewrite commit.
