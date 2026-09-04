> The dispatch block supplies batch `<i>`.

# Step 5 — author batch `<i>`, `frontier-29`

Use `research/frontier-29-batch-<i>.pages.json`, `.notes.md`, `.coverage.json`,
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
