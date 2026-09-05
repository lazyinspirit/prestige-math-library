> The dispatch block supplies batch `<i>`.

# Step 5 — author batch `<i>`, `{{run}}`

Required inputs are `research/{{run}}-batch-<i>.pages.json`,
`research/{{run}}-batch-<i>.notes.md`,
`research/{{run}}-batch-<i>.coverage.json`, and
`research/{{run}}-beta-<i>.task.md`. Use `research/{{run}}-alpha-groups.json`
to find the group whose `covers` includes this batch, then read its
`research/{{run}}-alpha-GROUP-step3-verdicts.json` and
`research/{{run}}-alpha-GROUP-step3-scaffold-review.md` (replace GROUP with
that exact label). Report a missing required input; do not search prior runs
for a substitute. Author only the batch's planned items and pages.

`research/{{run}}-batch-<i>.proof-contracts.json` is an output to complete;
read and preserve any existing entries, or create it if absent. Use the
contract requirements in `SCHEMA.md` and `tools/proof-contract.mjs`, not another
run's contracts as mathematical evidence. Read sources at the locators in this batch's coverage
and notes, together with the exact current cited dependency statements.

For each proof-bearing item, complete the item-specific proof-contract and
boundary dispositions: a `checked` row identifies its proof step; a
`not_applicable` row gives the mathematical reason for that statement. Preserve
the exact claim of every cited `[F#]`, `[A#]`, or `[L#]` target.

Run `node tools/tsx-run.mjs tools/precheck.mts` with the explicit
`items/ID.md` paths from this batch's manifest; do not omit the paths.
Run `node tools/validate-plan.mjs`,
`node tools/content-policy.mjs research/{{run}}-batch-<i>.pages.json`, and
`node tools/proof-contract.mjs research/{{run}}-batch-<i>.proof-contracts.json --strict`.
Apply any canonical precheck repair before rerunning. Append
`## Step-5 authoring` to the batch notes with authored ids, provenance rationale,
narrowed/dropped claims, and blockers.
