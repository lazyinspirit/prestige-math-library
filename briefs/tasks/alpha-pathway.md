# Step 10 — pathway closure, `{{run}}`

Read `research/{{run}}-pathway.json` and
`research/{{run}}-pathway-closure.json`. For every pending receipt row, rewrite
only its named `## <part>` body as a coherent mathematical brief covering the
existing section and listed gained A pages.

Preserve pathway frontmatter, stable part slug, and page order. Close the row
with `status:"closed"`, `reviewer`, `disposition:"rewritten"`, a mathematical
rationale, and the current `final_section_sha256`; do not add, remove, or merge
receipt rows.

Run `pathway-closure check`, `pathcheck`, and `prosecheck` for the final text.
