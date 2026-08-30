> The dispatch block supplies the group label and batches.

# Step 3 — scaffold recheck

Read `research/frontier-24-alpha-<group>-step3-scaffold-review.md` and each
assigned batch's `## Step-3 fix pass` notes. Verify every reported fix or
pushback against the current manifest, coverage, and plan.

Refresh and check `research/frontier-24-alpha-<your-group>-scope-decisions.json`
with `tools/scope-decisions.mjs`. Resolve any newly pending row from current
evidence before the check.

Write `research/frontier-24-alpha-<your-group>-recheck.md` with one disposition per
finding. Update `research/frontier-24-alpha-<your-group>-step3-verdicts.json` only
after verifying the current bytes: `sufficient` for a closed pair, or
`insufficient` with a nonempty missing list for one that remains blocked.
