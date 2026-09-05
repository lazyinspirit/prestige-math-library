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

Write every planned page directly at
`library/<page.category>/<page.id>.md`. A prerequisite category does not own a
later track: in particular, every functional-analysis A/B pair belongs under
`library/functional-analysis/`, never under `library/real-analysis/`.

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

run: frontier-30
role: beta
label: author-batch-8
covers: 8
output: research/frontier-30-batch-8.proof-contracts.json

> The dispatch block supplies batch `8`.

# Step 5 — author batch `8`, `frontier-30`

Use `research/frontier-30-batch-8.pages.json`, `.notes.md`, `.coverage.json`,
`.proof-contracts.json`, the generated batch task, and resolved Step-3 findings
as the authoring inputs. Author only the batch's planned items and pages.

For each proof-bearing item, complete the item-specific proof-contract and
boundary dispositions: a `checked` row identifies its proof step; a
`not_applicable` row gives the mathematical reason for that statement. Preserve
the exact claim of every cited `[F#]`, `[A#]`, or `[L#]` target.

Run precheck on the batch items, `validate-plan`, and item-scoped
`content-policy`; apply any canonical precheck repair before rerunning. Append
`## Step-5 authoring` to the batch notes with authored ids, provenance rationale,
narrowed/dropped claims, and blockers.
