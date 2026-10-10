# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Same-frontier dependency record

The unified ledger is `research/<run>-cross-batch-dependencies.json`.
It covers different batches in this run, including dependencies among pairs
being built in the same frontier. It is separate from the Step-5 verdicts and
the published-consumer ledger.

Step-3 adjudicators must identify every such page prerequisite and item
dependency, including implicit proof uses, well-definedness justifications and
load-bearing forward references. Record exact consumer and supplier IDs, the
required claim/hypotheses, its use/location, and any missing or inadequate support.
An absent declaration is a finding, not permission to omit the dependency.

Write one JSON array per owned consumer batch to
`research/<run>-batch-BATCH.cross-batch-dependencies.json`, even if empty:

```json
[{"kind":"item","consumer":"lem-consumer","supplier":"thm-supplier","status":"open","evidence":"Exact required claim, use/location, mismatch and repair owner."}]
```

Use `kind: page` for page IDs. Use `open`, `verified`, or `removed`; verification
needs a current mathematical check, and removal needs evidence that the use was
actually removed. One row per `(kind, consumer, supplier)`; update it instead of
appending duplicates. Only the consumer's owner edits its input file. Pair
authors sharing a consumer batch run sequentially and preserve existing rows
for sibling pairs. Route outside findings to that owner. Replace inputs
atomically; never edit the unified ledger by hand. The engine merges current
inputs after their owning writers finish. After each input or dependency edit, run:

`node tools/physics-support/frontier-dependency-ledger.mjs refresh --run <run>`

Concurrent refreshes use an exclusive lock; retry a busy lock after the other
merge finishes, never delete another process's lock. Rechecks and later authorized
writers maintain these same rows immediately when dependencies change. Read-only
reviewers report updates to the owning writer and do not write ledger files.
Do not broaden mathematical edit authority to satisfy bookkeeping.

The Step-3b final gate requires an input for every batch and a review row for
every declared cross-batch edge. An empty input is valid only when that
consumer batch has no such dependencies.

Step-7 repair owners maintain only the rows affected by their assigned repairs.
Record actual consumer uses and dispositions in the owning input rows and repair
report. This ledger does not replace Step-5 verdicts or Step-7 certification and
does not introduce another cross-batch review pass.
