> The dispatch block supplies batch `<i>`.

# Post-recheck scaffold repair — batch `<i>`, `frontier-27`

Read `research/frontier-27-scaffold-closure.json` and take only `work[]` entries
whose pages belong to batch `<i>` in the scope ledger. Apply or push back on
each listed finding in this batch's manifest, coverage, and notes.

Every added scaffold item needs its coverage disposition, locator, and current
fetch-verified backing. Run the batch coverage checklist, whole-run
manifest-only content policy, and `validate-plan`.

Append `## Scaffold-fix round` to the batch notes with each finding id,
disposition, evidence, and change. Do not edit the plan, items, library, or
another batch.
