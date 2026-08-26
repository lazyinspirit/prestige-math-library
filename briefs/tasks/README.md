# Task templates

`tools/run-tasks.mjs` renders every Markdown file here except this README to
`research/<run>-<template>.task.md`; `tools/step8-scope.mjs` separately composes
the Step 7/8 group tasks. The live stage table is the selection authority.

Templates contain only stage-specific inputs, write authority, required output,
and focused gate work. Role-wide conduct and mathematical standards belong in
the dispatched role brief; run-specific page data belongs in generated tasks,
batch manifests, scope receipts, and the plan.

`run-tasks.mjs` replaces only these placeholders:

| placeholder | rendered value |
|---|---|
| `{{run}}` | run identifier |
| `{{n_batches}}` | batch count |
| `{{batch_table}}` | batch, category, pair, and Beta-task table |
| `{{coverage_list}}` | comma-separated batch coverage paths |
| `{{batch_glob}}` | run batch-path stem |

Generic per-batch templates retain `<i>` for the dispatch batch. Do not add a
template unless a current stage or task composer selects it.
