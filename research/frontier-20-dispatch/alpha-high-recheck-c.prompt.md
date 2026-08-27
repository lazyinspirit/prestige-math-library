# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-20-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-20
role: alpha-high
label: recheck-c
covers: 4, 6, 7

> The dispatch block supplies the group label and batches.

# Step 3 — scaffold recheck

Read `research/frontier-20-alpha-c-step3-scaffold-review.md` and each
assigned batch's `## Step-3 fix pass` notes. Verify every reported fix or
pushback against the current manifest, coverage, and plan.

Refresh and check `research/frontier-20-alpha-<your-group>-scope-decisions.json`
with `tools/scope-decisions.mjs`. Resolve any newly pending row from current
evidence before the check.

Write `research/frontier-20-alpha-<your-group>-recheck.md` with one disposition per
finding. Update `research/frontier-20-alpha-<your-group>-step3-verdicts.json` only
after verifying the current bytes: `sufficient` for a closed pair, or
`insufficient` with a nonempty missing list for one that remains blocked.
