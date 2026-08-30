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
group work, `research/frontier-24-alpha-groups.json` is the assignment: it permits at
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

run: frontier-24
role: alpha-adjudicate
label: step8-preflight-review-2

# Exact Step-8 repair envelope — 8-preflight, round 2

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-24",
  "stage": "8-preflight",
  "round": 2,
  "mode": "preflight",
  "group": null,
  "failures": [
    {
      "id": "defect-ledger",
      "stage": "8-preflight",
      "why": "ERROR confirmed_fatal on cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded",
      "output": "defect-ledger: 207 defect row(s) checked for frontier-24, 20 error(s)\nERROR confirmed_fatal on cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on cex-total-variation-can-exceed-the-absolute-value-of-the-set-value (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on def-principal-part-at-an-isolated-point (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on def-signed-measure (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on ex-pole-pushing-along-three-discs (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-a-hahn-decomposition-is-unique (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-finite-values-and-finite-additivity-force-finite-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on fs-total-variation-always-equals-the-absolute-value-of-the-set-value (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-riemann-map-extremal-family-is-nonempty (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-runge-pole-pushing-lemma (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on lem-two-omitted-values-rule-out-an-essential-singularity (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on prop-simple-integrals-are-bounded-by-total-variation (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-gamma-weierstrass-product (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-mittag-leffler-theorem-on-plane-domains (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-stirling-formula-gamma (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-total-variation-of-a-complex-measure-is-finite (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\nERROR confirmed_fatal on thm-zero-divisor-theorem-on-plane-domains (gpt-5.6-terra) has no ledger row — the defect the adjudicator confirmed was never recorded\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [],
  "assigned_items": [],
  "live_tuples": []
}
```

---

# Step 8 — targeted repair-integrity review, `{{run}}`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
