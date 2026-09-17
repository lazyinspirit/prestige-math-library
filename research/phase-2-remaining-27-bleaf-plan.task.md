# Step 4 cleanup — validate-plan `b-leaf` and `prefix` findings

Run `phase-2-remaining-27`. `node tools/validate-plan.mjs research/plan-spec.json`
exits 1 with two hard classes (`redundant-prereq` lines are pre-existing
warnings and must be left alone):

- **51 `b-leaf`**: an in-run item depends on a PUBLISHED item whose home is an
  examples (B) page. Most are on the real-forms pages (20 + 6 + 2 + 1) and the
  moment-maps pages (5 + 2 + 1 + 1), plus root-systems (3), AHSS examples (2)
  and others. B pages must be leaves.
- **4 `prefix`**: manifest rows declare `kind: remark` for
  `lem-sigma-cellular-base-yields-a-compatible-metric`,
  `lem-solovay-almost-disjoint-extension-under-ma`,
  `lem-ladder-separation-from-hyp` and
  `def-dodd-jensen-covering-and-square-package`, whose ids require `lem-`/`def-`.

## Fixing the prefix findings

Read each item file's frontmatter `kind` and set the manifest row's `kind` to
match it (they are lemmas/definitions, not remarks), then re-splice.

## Fixing the b-leaf findings

For each finding, read the consumer item and the published supplier. Then apply
ONE of these, in order of preference:

1. **Replace** the dependency with an earlier A-page item that states the same
   fact (the A page of the supplier's own pair is the natural home: e.g. a
   theorem the example merely illustrates). Update the consumer's frontmatter
   `deps` and every proof citation naming the old supplier.
2. **Move** the supplier's home: remove it from its examples page's list in
   `library/<category>/<page>-examples.md` and add it to the companion A page's
   `examples:` list — a MOVE, never a multi-home (a second home makes the splice
   fail with `dup-id`, which is why the earlier re-homing attempt cannot simply
   be repeated). This changes a published page's inventory; the ledger must be
   updated in the same pass only if the item is defective, so normally no
   ledger entry is needed.
3. Never delete the supplier's content and never weaken a consumer's statement.

After each batch of fixes: `node tools/splice-plan.mjs --run phase-2-remaining-27
--batch <b> --update --accept-requires`, then
`node tools/splice-plan.mjs --run phase-2-remaining-27 --all`, then
`node tools/validate-plan.mjs research/plan-spec.json`. Iterate until it exits 0
with zero `b-leaf`, `prefix`, `dup-id`, `undeclared-prereq` and cycle findings.
Also run `node tools/depcheck.mjs` (must stay OK), `node tools/tsx-run.mjs
tools/precheck.mts` for every item you edit, and `node tools/manifest-deps.mjs`
on every manifest you touch.

## Rules

- Edit only: the consumer items' frontmatter `deps` and citation tags, the
  supplier items' home lists in `library/**` page files, the matching manifest
  rows, and (for prefix) the manifest `kind` fields. Do not touch other items,
  coverage, contracts, scope decisions or reports.
- Report to `research/phase-2-remaining-27-bleaf-plan-report.md`: per finding,
  consumer, supplier, the option applied, the file(s) changed, and the final
  validate-plan/depcheck outputs.
