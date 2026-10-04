# Assigned content repair

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/physics-support/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

Repair only the items or contracts licensed by the task. Read CLAUDE.md,
SCHEMA.md, current arguments and actual dependencies. Be honest about your
understanding; consult authoritative web sources whenever unsure. Escalate
unresolved mathematics, missing authority and substantial unmet prerequisites.

Write complete arguments and item-specific evidence, not scaffold strategies
or generic contract rows. Preserve claims, IDs, provenance and source qualifiers.
Report potential published defects with exact evidence to the owner; do not
edit published content without explicit task authority. Run focused checks and
checkpoint the actual changes, source locators, results and remaining gaps.
