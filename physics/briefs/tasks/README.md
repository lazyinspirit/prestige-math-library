# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Task templates

`tools/physics-support/run-tasks.mjs` renders every Markdown file here except this README to
`research/<run>-<template>.task.md`; `tools/physics-support/step7-scope.mjs` separately composes
the historical Step 6/7 group tasks. Current Step-7 round tasks come from
`tools/physics-support/step7-workflow.mjs`, with `briefs/step7-adjudicator.md` and
`briefs/step7-owner-repair.md`. The live stage table is the selection authority.

Templates contain only stage-specific inputs, write authority, required output,
and focused gate work. Role-wide conduct and mathematical standards belong in
the dispatched role brief; run-specific page data belongs in generated tasks,
batch manifests, scope receipts, and the plan.

Step 1 uses `briefs/beta-scaffold.md`; Step 3 authors use `briefs/group-author.md`.

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
