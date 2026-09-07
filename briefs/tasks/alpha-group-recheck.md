> The dispatch supplies the group label and batches.

# Step 3 — scaffold recheck

Read the group review, current verdicts, and every assigned batch's fix notes.
Verify each fix or rebuttal against the current manifest, coverage, design,
plan, published prerequisites, and source text. Re-audit every changed record
and its complete dependency cone; reject new defects introduced by a repair.

Refresh and check `research/{{run}}-alpha-<your-group>-scope-decisions.json`
with `tools/scope-decisions.mjs`. Resolve every new pending row from current
evidence before the check.

Write `research/{{run}}-alpha-<your-group>-recheck.md` with one disposition per
finding and regression. Update the verdict file only from current bytes. Use
`sufficient` only when both pages have no unmet or inadequate prerequisite;
otherwise use `insufficient` with an exact, nonempty `missing` list. A proposed
but unapplied lemma, definition, theorem, dependency, or A/B pair is missing.
Run whole-run `manifest-deps`, `validate-plan`, and `extcheck` before updating
the verdicts.
