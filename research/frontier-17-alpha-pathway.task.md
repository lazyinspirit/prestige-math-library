# Step 10 pathway closure — run `frontier-17`

Read `research/frontier-17-pathway.json` and
`research/frontier-17-pathway-closure.json`. For every pending row, read the full
existing `## <part>` section and every newly gained A page named by the row.

Rewrite that section as one coherent mathematical brief covering both its
established material and the gained pages. Replace the stale section; do not
append a patch paragraph or erase mathematics already described. Preserve the
part slug, page order, pathway frontmatter, and the frozen presentation system.
Follow SCHEMA.md §6.1: describe mathematics, not counts, rankings, workflow, or
claims about what other pages contain.

Then close the exact receipt row with `status: "closed"`,
`reviewer: "Lead Alpha"`, `disposition: "rewritten"`, a concise mathematical
`rationale`, and `final_section_sha256` equal to the current section-body hash
used by `tools/pathway-closure.mjs`. Do not add, drop, or merge rows.

Run:

```
node tools/pathway-closure.mjs check --run frontier-17
node tools/pathcheck.mjs
node tools/prosecheck.mjs
```

Fix only the exact pathway sections this receipt owns.
