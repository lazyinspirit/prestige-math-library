# frontier-18 reader-6 report

Batch: `6`
Pages:
- `library/real-analysis/the-divergence-theorem-and-classical-stokes.md`
- `library/real-analysis/the-divergence-theorem-and-classical-stokes-examples.md`

## Findings

### R6-1
- Item: `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`
- Location: `items/ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation.md`, proof steps `3.3` to `5.1`
- Severity: fatal
- Defect: The example claims the octant presentation is adapted in all three coordinate directions, but the written proof only fully discharges the `z`-direction data. In the `x` and `y` directions it gives sign splits for the oriented area vector, but it never states the corresponding simple descriptions or proves the required projected-image coverage clauses from the definition of an adapted presentation.
- Evidence: Step `3.2` supplies the `z`-direction base and graph functions and step `4.1` verifies the projected-image coverage there. Steps `3.3` and `3.4` mention only the signs of the first and second coordinates of the oriented area vector. Nothing before step `5.1` establishes the `x`- or `y`-direction bases, boundary graph functions, or the “fill the base up to content zero” clause required by [[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]].
- Repair: Rewrote the proof to supply the missing `x`- and `y`-direction simple descriptions, added explicit projected-coverage steps for both missing directions, added the graph-content-zero dependency actually used in those steps, and resynced `research/frontier-18-batch-6.proof-contracts.json`.

### R6-2
- Item: `ex-the-right-circular-cylinder-is-an-elementary-solid-region`
- Location: `items/ex-the-right-circular-cylinder-is-an-elementary-solid-region.md`, proof steps `3.3` to `5.1`
- Severity: fatal
- Defect: The example claims the six-patch presentation is adapted in all three coordinate directions, but the proof leaves part of that verification implicit. It fully checks the `z` direction and part of the `x` direction, then jumps to the final conclusion without proving the remaining lower-sublist coverage in the `x` direction or the corresponding `y`-direction description and coverage clauses.
- Evidence: Step `3.1` supplies the full `z`-direction description. Step `3.2` supplies the `x`-direction description and sign split, and step `4.2` checks only the projected interiors of the two upper side quarters. Step `3.3` says only that the `y` direction is “the same argument” with `sin θ` in place of `cos θ`, but it never states the `y`-direction base and graph functions or verifies the projected-image coverage required by the adapted-presentation definition before step `5.1` concludes the example.
- Repair: Rewrote the proof to state the missing `y`-direction description explicitly, added the omitted coverage arguments for both graph sublists in the `x` and `y` directions, removed one now-unused disc-content citation, and resynced `research/frontier-18-batch-6.proof-contracts.json`.

## Additional Checks

- Confirmed the A-page uses the required two-paragraph summary, with both paragraphs under 150 words.
- Confirmed the examples page has no authored body.
- Opened every in-scope page and item file on the assigned A/B pair.
- Opened the cited dependency items needed to verify the repaired and potentially weak steps.
- Provenance: every in-scope mathematical-content item I opened has both `provenance.statement` and `provenance.proof`.
- I found no in-scope item whose `deps` rely on another item with `provenance.statement: ai-generated`.
- After the repairs above, I found no additional proof-step, citation, title/Statement, boundary, or provenance defect in the remaining in-scope items.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation.md items/ex-the-right-circular-cylinder-is-an-elementary-solid-region.md`
  - unchanged on both files
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation.md items/ex-the-right-circular-cylinder-is-an-elementary-solid-region.md`
  - pass / pass after adopting the canonical phase order in the ball example
- `node tools/proof-contract.mjs research/frontier-18-batch-6.proof-contracts.json --strict`
  - `0 error(s), 0 warning(s), 51/51 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-18-batch-6.proof-contracts.json`
  - no missing quotes and no widening candidates in the batch contracts after repair

## Per-Page Verdict

- `the-divergence-theorem-and-classical-stokes`: clean read on Statements, proofs, citations, boundary cases, and provenance for the in-scope items I opened. I found no remaining defects on this page.
- `the-divergence-theorem-and-classical-stokes-examples`: repaired `R6-1` and `R6-2`, both fatal proof-completeness defects where the written proofs did not establish the full claimed adaptation data. I found no further defects on this page after the repairs and recheck.

Items opened: 67 item files total (`61` in scope, `6` cited dependencies), plus both scoped page files.
