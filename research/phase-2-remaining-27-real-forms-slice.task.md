# Step 3b slice dispatch — `real-forms-and-real-semisimple-lie-algebras`, slice <slice>

Run `phase-2-remaining-27`, pair `real-forms-and-real-semisimple-lie-algebras`
(batch 13). Read `research/phase-2-remaining-27-real-forms-recovery-direction.md`
first: it is binding. Five agents share this pair; collisions are forbidden.

## Your slice

Focus: <focus>

Items — work these exact ids, in this order, and no others:

<items>

## Rules

- Write only `items/<id>.md` for the ids above. Never edit another slice's item,
  `research/phase-2-remaining-27-batch-13.pages.json`, the coverage file, the
  proof-contract file, the batch notes, or the pair report — the orchestrator
  merges those after all five slices land.
- Record a Step-3b decision for every id you own, and only those:
  `node tools/step3-decisions.mjs record-item --run phase-2-remaining-27 --item <id>
  --decision accept|repaired|escalate --confidence 1 --dependencies '<json>'
  --reason '<evidence>'`. Use `repaired` if you changed the text, `accept` if the
  item as it stands is complete, and `escalate` (without `--confidence`) only with
  the exact gap and locator.
- Keep each item's frontmatter `deps` equal to its manifest row's `deps` unless the
  mathematics requires a change; if it does, make the change in the item and list it
  under "manifest patches" in your report so the orchestrator can merge it.
- Every proof-bearing item must pass
  `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (adopt the canonical form
  it prints if it reports REPAIR) and `node tools/rendercheck.mjs` on the file.
- Sources: Anthony W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed.,
  Chapter VI §§1–11, Theorems 6.11, 6.16, 6.31, 6.40, 6.46, 6.51, 6.57, 6.59, 6.74,
  6.88, 6.94, 6.96 and 6.105 with their intervening lemmas and proofs
  (https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf); Pavel
  Etingof, *Lie Groups and Lie Algebras*, Lectures 39–41 and 43
  (https://math.mit.edu/~etingof/lnlg.pdf). Search the web for anything else you
  need. Never fabricate a proof or a source reading.
- Write your slice report to
  `research/phase-2-remaining-27-real-forms-slice-<slice>-report.md`: ids completed,
  decisions recorded, checks actually run, manifest patches proposed, and every exact
  unresolved gap.
- Mathematical integrity: full proofs only; `deps` must list every load-bearing
  prerequisite; an item you cannot complete stays `escalated` with its locator.
