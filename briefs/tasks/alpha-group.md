> The dispatch supplies the group label and batches.

# Step 3 — scaffold review

Independently audit every assigned A/B pair from its manifest, coverage, notes,
design, current plan, published prerequisites, and source text. Verify every
claim, proof route, source disposition, and transitive dependency path. Review
the B page as part of the pair. Do not edit batch scaffold files; send every
defect to the owning Beta.

For each gap, name the exact claim or dependency path and required repair.
Require added definitions, lemmas, or theorems when they close the gap. If a
new prerequisite A/B pair is needed, specify its title, category, placement,
prerequisites, item inventory, and prose-scaffold destination. The affected
pair remains `insufficient` until the addition exists in the scaffold and plan.

Run `node tools/scope-decisions.mjs refresh --run {{run}} --group <your-group>`.
Resolve every pending row in
`research/{{run}}-alpha-<your-group>-scope-decisions.json` as `stands` or
`owner-decision` with current evidence, then run its `check` command.
Run whole-run `manifest-deps`, `validate-plan`, and `extcheck`.

Write `research/{{run}}-alpha-<your-group>-step3-scaffold-review.md` and
`research/{{run}}-alpha-<your-group>-step3-verdicts.json`. The verdict file has
one pair verdict keyed by A-page ID. Use `sufficient` only when both pages have
complete and adequate prerequisites. Otherwise use `insufficient` with a
nonempty `missing` list of exact defects, repairs, dependency paths, and sources
where applicable. Route shared prose-scaffold and plan edits to one authorized
writer; they cannot be waived.
