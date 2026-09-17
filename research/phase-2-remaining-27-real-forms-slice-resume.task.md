# Step 3b slice resume — `real-forms-and-real-semisimple-lie-algebras`, slice <slice>

Run `phase-2-remaining-27`, pair `real-forms-and-real-semisimple-lie-algebras`
(batch 13). Read `research/phase-2-remaining-27-real-forms-recovery-direction.md`
and `research/phase-2-remaining-27-real-forms-slice.task.md` first; both are
binding. A previous slice dispatch stopped before finishing its list; this
resumes it. Do not explore or edit any item outside your list.

## Your slice

Focus: <focus>

Items — work these exact ids, in this order, and no others:

<items>

## What the previous dispatch left

- Items whose `items/<id>.md` already exists are authored but NOT certified:
  read each, verify the proof at the dispatch standard, repair it locally if it
  falls short, and record its decision.
- Items with no file must be authored now.

## Rules

- Write only `items/<id>.md` for the ids above. Never edit another slice's item,
  the batch manifest, the coverage file, the proof-contract file, the batch notes,
  or the pair report.
- Record a decision for every id you own, and only those: `node tools/step3-decisions.mjs
  record-item --run phase-2-remaining-27 --item <id> --decision accept|repaired|escalate
  --confidence 1 --dependencies '<json>' --reason '<evidence>'`.
- Every proof-bearing item must pass `node tools/tsx-run.mjs tools/precheck.mts
  items/<id>.md` (adopt the canonical form it prints if it reports REPAIR) and
  `node tools/rendercheck.mjs` on the file.
- Sources: Knapp, *Lie Groups Beyond an Introduction*, 2nd ed., Chapter VI
  (https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf);
  Etingof, *Lie Groups and Lie Algebras*, Lectures 39–41 and 43
  (https://math.mit.edu/~etingof/lnlg.pdf). Search the web for anything else.
  Never fabricate a proof or a source reading.
- Update your slice report `research/phase-2-remaining-27-real-forms-slice-<slice>-report.md`
  with the ids completed, decisions recorded, checks run and any exact gap.
- Save budget: work the list in order, one item at a time, and write each item's
  file and decision before starting the next.
