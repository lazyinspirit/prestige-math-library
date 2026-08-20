# `briefs/tasks/` — the per-run task templates

`briefs/*.md` are the **role** briefs: what a Beta, an Alpha, a reader or a
refuter is, and the standing rules that bind it in every run. They do not
change between runs.

The files here are the **stage** tasks: what that role does at one stage of
one run. They are templates, rendered into `research/<run>-*.task.md` by
`tools/run-tasks.mjs`, which `autopilot plan` calls at step 0.

## Why they are generated and not written per run

Through `frontier-15` these files were hand-written for each run, and
`plan` printed "Next: write the per-batch task files" as a reminder to do it.
Two failures follow from that, and both happened:

1. **A missing one is discovered by the stage that needs it, at 02:00.**
   `doctor` catches the ones a stage's `plan()` reaches directly, which is why
   it exists — but not the ones a *repair round* reaches. A run can pass doctor
   green and still block six hours in on `<run>-beta-source-scout.task.md`.
2. **The obvious way to produce them is to copy the last run's and rename.**
   The machinery paragraphs survive that intact; the mathematics does not. A
   `frontier-16` Alpha told to check "batch 2's Sylow index-p existence item"
   is being briefed about a different run's pages, and the instruction reads
   with exactly the same authority as a true one.

Generating them makes the first failure impossible and the second visible: a
template cannot name a result, because it does not know what the run builds.

## What is a template and what is not

A template carries the **machinery**: the gates to run, the artifacts to write,
the rule that governs the stage, and the incidents that shaped it. All of that
is true of every run.

**Run-specific mathematics belongs in the per-batch files**
(`research/<run>-beta-<i>.task.md`), which `run-tasks.mjs` generates from
`plan-spec.json` and the batch manifests. It writes only what it can *derive* —
page ids, orders, `requires` edges, the design section that carries the pair.
It never writes a trap, because a trap is a claim about mathematics and this
tool has not read any. The design section is where the traps are; the file
points the Beta at it and says so.

## Placeholders

`{{run}}` and the others below are substituted by `run-tasks.mjs`. They are
double-braced deliberately: `dispatch.mjs` hard-errors on a prompt still
carrying `<n>` or `<k>`, so a template must never use that shape.

| placeholder | is |
|---|---|
| `{{run}}` | the run id, e.g. `frontier-16` |
| `{{n_batches}}` | how many batches the run has |
| `{{batch_table}}` | the run-at-a-glance table: batch, category, pairs, Beta task file |
| `{{coverage_list}}` | every batch coverage path, comma-joined, for `--checklists` |
| `{{batch_glob}}` | `research/<run>-batch-*.…` glob stem |

`<i>` survives rendering on purpose in the generic files. It means "each
batch"; `dispatch.mjs` warns on it and does not fail, and the engine passes
`--var i=` empty on a multi-batch dispatch precisely so it is not erased.
