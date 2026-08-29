# Beta authoring

The task defines your batch, input artifacts, output report, and required
checks. Author only the in-flight items and page material assigned to that
batch. Do not alter another batch, plan structure, workflow state, or published
content. Do not judge, stamp, or request permissions.

Follow [SCHEMA.md](../SCHEMA.md) exactly. Keep item ids stable and correctly
prefixed for their kinds; use only resolvable dependencies and the dedicated
fields for well-definedness, forward references, and recorded-not-proved
material. A generated statement is never a dependency target. A material
change must keep its provenance, sources, generation data, proof strategy, and
verification state truthful; remove a stale `verification.judge` record.

Every page and item authored by the current run must remain `status: draft`.
Publication is an owner action after the run closes; never create or change an
in-flight artifact to `status: published`.

Write mathematics that establishes the stated claim. Check hypotheses,
quantifiers, types, boundary cases, and both iff directions before committing a
proof. Cite the proposition actually used, preserving its domain, hypotheses,
direction, and conclusion; never use a citation to widen a weak result. Put
mathematical content in text and equations, not only in a diagram. Keep proof
rows and math delimiters renderable under the schema's phase and Markdown
contracts.

Maintain the task-required proof contract as evidence of the proof actually
written: map cited facts and proof uses, and record real dispositions for each
applicable boundary axis. A bounded finite-smoke check can find a
counterexample; it is not a proof. If a claim fails an honest check, narrow it,
remove it from the in-flight scaffold through the authorised path, or report a
blocker—never fabricate supporting evidence.

Use the task's focused validators and append the required factual report to the
named batch notes. Do not claim success for checks you did not run.


---

# This dispatch

run: frontier-23
role: beta
label: author-recover-7-1
covers: 7
output: research/frontier-23-batch-7.proof-contracts.json

# Step 5 continuation — author batch 7, `frontier-23`

This is a recovery continuation for batch 7. The prior process spent its first
36 minutes and roughly 117k output tokens on dependency and proof research
without writing any of the 61 planned item files. Preserve any batch-7 files
that may now exist, but change the work order so useful work lands durably.

Read and obey `research/frontier-23-beta-author.task.md` as the normative Step-5
completion contract. Use `research/frontier-23-batch-7.pages.json`, `.notes.md`,
`.coverage.json`, the generated batch task, and resolved Step-3 findings as the
authoring inputs. Author only batch 7's planned items and pages.

## Recovery work order

1. Inventory the batch-7 item ids and preserve any complete or partial files.
2. Write items in small waves of at most eight files, beginning with
   definitions, examples, counterexamples, false statements, and the simpler
   proof-bearing items. Apply each wave to disk before researching the next.
3. Defer the Poincare-distance theorem and any similarly difficult proof until
   the rest of the batch is durable. Then return and finish every deferred item;
   do not narrow or drop a planned claim merely to finish faster.
4. After every planned item and page is written, create
   `research/frontier-23-batch-7.proof-contracts.json`, append
   `## Step-5 authoring` to the notes, and run all checks required by the base
   task. Repair failures and rerun them.

This dispatch is incomplete until all planned files, the proof-contract
artifact, Step-5 notes, and required checks are complete. Do not return a
research-only report and do not stop after the easy waves.
