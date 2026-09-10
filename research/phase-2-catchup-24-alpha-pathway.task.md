# Step 10 — pathway closure, `phase-2-catchup-24`

Read `research/phase-2-catchup-24-pathway.json` and
`research/phase-2-catchup-24-pathway-closure.json`. For every pending receipt row, rewrite
only its named `## <part>` body as a coherent mathematical brief covering the
existing section and listed gained A pages.

Preserve pathway frontmatter, stable part slug, and page order. Close the row
with `status:"closed"`, `reviewer`, `disposition:"rewritten"`, a mathematical
rationale, and the current `final_section_sha256`; do not add, remove, or merge
receipt rows.

Run `pathway-closure check`, `pathcheck`, and `prosecheck` for the final text.
