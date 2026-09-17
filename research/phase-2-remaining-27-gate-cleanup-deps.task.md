# Gate cleanup — depcheck `b-leaf-content` errors

Run `phase-2-remaining-27`. `node tools/depcheck.mjs` currently FAILS with 26
hard `[b-leaf-content]` errors: an authored item depends on an item that lives
only on an examples (B) page, and B pages must be leaves. Warnings
(`multi-home`, `cited-not-in-deps`, `orphan`, `b-leaf-legacy`) are NOT yours to
fix here.

## What to do

1. Collect the list: `node tools/depcheck.mjs | grep b-leaf-content`.
2. For each error, read the consumer item and the supplier item. Then apply the
   smallest correct fix, in this order of preference:
   a. If the supplier's content is A-page material used by other items too,
      re-home it: add the item id to the companion A page's `examples:` list in
      `library/<category>/<A-page>.md` (multi-home is legal, A pages may carry
      an `examples:` list). Keep the B page listing it as well.
   b. If the dependency is not genuinely load-bearing, remove it from the
      consumer's frontmatter `deps` (and from the manifest row in
      `research/phase-2-remaining-27-batch-<b>.pages.json`) only after checking
      the proof does not use the supplier.
   c. Never delete the supplier's content and never weaken a statement.
3. Re-run `node tools/depcheck.mjs` and confirm zero `b-leaf-content` errors and
   still `OK` for cycles/references.
4. Run `node tools/tsx-run.mjs tools/author-check.mts phase-2-remaining-27 <b>`
   for every batch you touched and confirm `ok: true`.

## Rules

- You may edit item frontmatter `deps`, the `examples:` lists of the relevant
  A pages, and the matching manifest rows. Do not touch proof text, coverage,
  other items, or the cross-batch-dependency files (a sibling lane owns those).
- Mathematical integrity: re-homing is a structural fix, not a licence to move
  an item off a leaf page whose content the consumers rely on.
- Report to `research/phase-2-remaining-27-gate-cleanup-deps-report.md`: each
  error, the fix applied, and the final depcheck summary.
