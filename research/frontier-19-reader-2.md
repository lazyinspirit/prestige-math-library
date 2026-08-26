# frontier-19 reader-2 report

## Confirmed defects

1. Fatal — `items/lem-reduced-forms-with-the-same-leading-coefficient-are-equal.md:52`
   The original step 3.2 treated every determinant-one matrix with first
   column $(0,\pm1)$ as if it sent $f=(a,b,a)$ to $(a,-b,a)$. That is false:
   with $f=(1,1,1)$ and
   $M=\begin{pmatrix}0&-1\\ 1&1\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$,
   direct substitution gives $f\mid M=(1,1,1)$, not $(1,-1,1)$. I repaired the
   proof by deriving the full transformed triple
   $(a,-b+2ars,a-brs+as^2)$ and splitting the cases $s=0$ and $s\ne0$.

2. Nonfatal — `library/number-theory/positive-definite-binary-quadratic-forms-and-reduction.md:31`
   The first summary paragraph described what the companion page does
   ("The reciprocity supplements reappear only when the companion page..."),
   which violates the A-page summary contract in `SCHEMA.md` §6. I repaired the
   paragraph so it now stays within the A-page background actually used.

## Edits

- `items/lem-reduced-forms-with-the-same-leading-coefficient-are-equal.md`
  Repaired the step 3.2 case analysis for first column $(0,\pm1)$.
- `research/frontier-19-batch-2.proof-contracts.json`
  Updated the `step-3-2` derivation claim to match the repaired proof.
- `library/number-theory/positive-definite-binary-quadratic-forms-and-reduction.md`
  Removed the companion-page sentence from the first summary paragraph.

## Coverage

- Opened 43 items: 33 assigned items and 10 cited dependency items.
- Opened 5 page files: 2 assigned pages and 3 prerequisite page files.
- Blocker: none.
- Checks run:
  `node tools/tsx-run.mjs tools/reflow.mts items/lem-reduced-forms-with-the-same-leading-coefficient-are-equal.md`
  returned `unchanged`, and
  `node tools/tsx-run.mjs tools/precheck.mts items/lem-reduced-forms-with-the-same-leading-coefficient-are-equal.md`
  returned `PASS`.

## Page verdicts

- `positive-definite-binary-quadratic-forms-and-reduction`: pass after the
  summary and item-proof repairs.
- `positive-definite-binary-quadratic-forms-and-reduction-examples`: pass.

No published-dependency defects, proposed withdrawals, or authority blockers
remain for this batch.
