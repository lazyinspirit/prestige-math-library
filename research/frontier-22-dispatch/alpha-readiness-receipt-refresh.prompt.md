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
group work, `research/frontier-22-alpha-groups.json` is the assignment: it permits at
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

run: frontier-22
role: alpha
label: readiness-receipt-refresh
covers: all

# Readiness receipt refresh — `frontier-22`

The post-Step-9 readiness repairs changed dependency declarations after the
whole-level receipts were issued. Refresh only the two now-stale receipts:

- `research/frontier-22-audit-coverage.json`
- `research/frontier-22-spine-audit.json`

Use the owning tools to generate fresh templates. Do not hand-edit stale scope
or hash fields.

## Spine receipt

`node tools/spine-audit.mjs --template ...` currently selects the same 58 proof
items at the same `content_sha256` values as the existing receipt. Dependency
cone counts, the scope hash, or both changed. Carry the existing concrete
attestations only where the item id and content hash are identical, update the
template-owned scope fields, and validate with `spine-audit --receipt`. If any
id or content hash differs when you regenerate it, freshly read that proof
before attesting it.

## Whole-level receipt

Generate a fresh `level-coverage --template` against all nine current manifests,
the merged proof contracts, judge ledger, adjudications, terminal resolutions,
and current context. Preserve valid reconciliation reasons only where the
planned and actual dependency arrays are byte-for-byte the same. Semantically
review and supply concrete, item-specific reasons for every new or changed
reconciliation row. The currently detected changed/new set is:

- `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`
- `def-primary-decomposition-minimal-and-isolated-components`
- `ex-embedded-component-varies-but-radical-does-not`
- `ex-primary-localisation-kills-a-component`
- `ex-primary-maximal-radical-test`
- `lem-associated-primes-contained-in-support`
- `lem-intersection-of-primary-submodules-with-same-radical`
- `lem-localisation-of-a-primary-submodule`
- `lem-noetherian-ring-maximal-element-annihilator-exists`
- `lem-zero-divisor-annihilator-contained-in-associated-prime`
- `thm-isolated-primary-components-are-unique`
- `thm-lasker-noether-primary-decomposition`
- `thm-primary-submodule-characterisations`
- `thm-second-uniqueness-theorem-primary-decomposition`

Do not use a receipt to hide a judge, contract, or mathematical defect. If the
semantic reconciliation exposes one, report it explicitly. Otherwise update
the reviewer/attestation to state that this is the post-readiness-repair refresh.

Run and report:

1. `node tools/spine-audit.mjs --receipt research/frontier-22-spine-audit.json`
2. the full `node tools/level-coverage.mjs` gate with contracts, judge ledger,
   adjudications, terminal resolutions, both receipts, current-context
   verification, and all nine manifests.

Write a concise report to
`research/frontier-22-alpha-readiness-receipt-refresh.md` naming the carried
spine evidence, the 14 dependency reconciliations, validation results, and any
blockers. Do not modify unrelated files.
