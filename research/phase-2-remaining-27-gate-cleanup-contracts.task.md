# Gate cleanup — proof-contract citation errors and fwdcheck forward links

Run `phase-2-remaining-27`. Two repo-wide gates fail on items authored in this
run:

1. `proof-contract` — after
   `node tools/merge-proof-contracts.mjs --run phase-2-remaining-27`
   (writes `research/phase-2-remaining-27-proof-contracts.json`),
   `node tools/proof-contract.mjs research/phase-2-remaining-27-proof-contracts.json --strict`
   reports 41 errors of the forms
   `citation-use-step-missing [<item>]: F<k> names a missing step number` and
   `citation-use-unmapped [<item>]: F<k> ...`.
2. `fwdcheck` — `node tools/fwdcheck.mjs --quiet` reports 73 errors of the form
   `[forward-undeclared] items/<id>.md: wikilink [[<target>]] points forward to
   <page> (#<order>); declare it in forward_refs`.

Do them in this order, because both may touch the same item file: finish and
verify the proof-contract pass before starting the fwdcheck pass.

## Proof-contract pass

- For each `citation-use-step-missing` error: the fact line cites a step number
  that does not exist in the proof (usually a renumbering after an edit). Read
  the item, find the step the fact actually supports, and correct the citation —
  either the bracket tag in the fact line or the step numbering — without
  changing any mathematical content. Adopt the canonical form
  `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` prints if it reports
  REPAIR.
- For each `citation-use-unmapped` error: the fact line's cited target cannot be
  matched to a step or an external item; make the citation explicit and correct.

## fwdcheck pass

- For each `forward-undeclared` error: the item links to an item whose page is
  later in reading order. Add the target to the item's frontmatter
  `forward_refs` list ONLY if the link is a real, load-bearing forward use;
  otherwise remove the wikilink or replace it with the correct earlier item.
  A forward reference that is not load-bearing prose prose must not be
  declared — fix the link instead.

## Verify

- Re-run both commands until they exit zero
  (`merge-proof-contracts` then `proof-contract --strict`; `fwdcheck --quiet`).
- Run `node tools/tsx-run.mjs tools/precheck.mts` and confirm 0 failing, and
  `node tools/depcheck.mjs` and confirm no new errors.

## Rules

- Edit only the item files named in the two error lists (their frontmatter
  `forward_refs` and their proof-step citation tags), plus the regenerated
  contract file. Do not touch manifests, coverage, scope decisions or the
  cross-batch-dependency files — sibling lanes own those.
- Mathematical integrity: a citation fix must keep the claim it supports true;
  when in doubt, cite the step that actually proves the claim.
- Report to `research/phase-2-remaining-27-gate-cleanup-contracts-report.md`
  with every item touched, the error before/after, and the final gate outputs.
