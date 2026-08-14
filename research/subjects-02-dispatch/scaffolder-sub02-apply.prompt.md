# subjects-02 — apply the reconciliation rulings

**You are an expert mathematician applying settled cross-track rulings to prose
scaffolds.** Every decision is already made. You apply them exactly; you do not
re-adjudicate, and you do not decide anything new.

## Read first

1. `research/subjects-02-RULINGS.md` — the six rulings. This is your instruction set.
2. `research/subjects-02-RECONCILIATION.md` — the evidence, with file and line
   references for every id.
3. `research/subjects-02-SEAMS.md` §4 — the ownership table the rulings enforce.

## What to change

Only these files, and only as the rulings require:

- `research/plan-functional-analysis-track.md` — S-1
- `research/plan-fourier-analysis-track.md` — S-1, S-2 (anchor change)
- `research/plan-pde-track.md` — S-2
- `research/plan-differential-geometry-track.md` — S-3, S-4
- `research/plan-representation-theory-lie-track.md` — S-3 if it needs a note
- `research/plan-representation-theory-groups-track.md` — S-6 reorder
- the six subjects-02 track files, for the S-5 non-load-bearing notes if any is
  not already written that way

**Never touch** `plan-spec.json`, `items/**`, `library/**`, or any normative doc.

## How to apply

- **Removing a duplicated id from a scaffold means removing its proposed item
  row and repointing anything that cited it to the owning track's relative
  label.** It does not mean deleting the surrounding mathematics. Where the
  losing track still needs the object, it cites — check that the citation reads
  correctly in context, not just that the row is gone.
- **S-1 requires real mathematical work, not a deletion.** FA-14's proof plan
  currently routes trigonometric density and completeness through Fejér. Rewrite
  items 17–18 and the plan to obtain density from the complex self-adjoint
  Stone–Weierstrass theorem already scaffolded in topology, verifying in the text
  that the trigonometric algebra is unital, self-adjoint and separates points.
  If that rewrite does not close honestly, **stop and record a blocker** rather
  than leaving FA-14 with a broken proof plan.
- **S-2 changes the Fourier anchor** from PDE's last page to probability's last
  page, and adds a declared forward reference from FR to PDE for Sobolev spaces
  and Strichartz. Update FR's placement section and its forward-reference
  section. PDE-19 gains a citation to FR-8 and keeps everything else.
- **S-6** swaps RG-28 and RG-29 so the property-(T) illustration follows its
  supplier. Renumber only those two and fix every internal reference to them.

## Verify before you finish, and report the numbers

- **Zero** of the 54 ids is proposed by two scaffolds any more. Check each group:
  AT–DG 25, RL–DG 14, FR–FA 7, FR–PDE 8.
- No id was invented, and no id that only one track proposed was removed.
- Every scaffold you edited still parses as the document it was: its pair table,
  source matrix, crosswalk and item inventory all intact and mutually consistent.
- Report per file: rows removed, rows rewritten, citations repointed.

**No permission prompts of any kind.** If an operation truly needs new authority,
record a blocker in `research/subjects-02-APPLY-REPORT.md` and continue with
everything else. Write that report as your single new file.
