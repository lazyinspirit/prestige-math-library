# Final-adjudicator evidence: `ex-modified-pcp-is-undecidable`

## Disposition

`repaired`

The Alpha repair correctly added a move direction, fixed the left-boundary
semantics, and grounded the three displayed initial dominoes in the repaired
computation-history dependency.  The three concatenations in step 1.1 are
correct.  A further local defect remained in step 2.1: the accepting-cleanup
and terminal dominoes alone cannot close the unmatched suffix
`triangleright q_acc 1 #`.  Legal copier and separator-copy dominoes must be
interleaved with the two cleanup dominoes.

## Independent review

I inspected the example, both direct dependencies, its B-page and paired
A-page, the batch-19 manifest/coverage and proof contract, the batch risk
notes (which contain no item-specific risk entry for this example), both
frozen judge rejections, defects `frontier-30-S8-f-016` and
`frontier-30-S8-f-043`, and the Alpha recovery adjudication.  The example's
claimed undecidability context is correctly delegated to
`thm-modified-pcp-is-undecidable`; its own mathematical obligation is the
explicit accepting instance.

External verification:

- https://www.cs.sjsu.edu/faculty/pollett/154.13.13s/Lec01052013.html — the
  SJSU CS 154 notes list the designated start tile, right- and left-transition
  tiles, symbol and separator copiers, right-boundary extension, the two
  accepting-cleanup tile families, and the final accepting anchor used by the
  construction.  The notes also explain that the cleanup makes the top row
  catch the bottom row after an accepting configuration is reached.
- https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/ — MIT's official course page
  identifies the computation-history method as the reduction route used to
  prove PCP undecidable.

## Independent repair

I retained the Alpha's initial three tiles and appended the exact legal suffix

`(triangleright q_acc,q_acc), (1,1), (#,#), (q_acc 1,q_acc), (#,#),
(q_acc ##,#)`.

Direct concatenation now shows that both complete rows equal

`# triangleright q_0 1 # triangleright q_acc 1 # q_acc 1 # q_acc ##`.

Every suffix tile is explicitly supplied by the direct dependency.  No direct
dependency was edited, so no owner-prerequisite-repair licence is applicable.
I regenerated the example's derivation/citation entry in the batch-19 and
merged proof-contract files.

Focused checks after repair:

- phase-format precheck of the example;
- strict batch-19 and merged proof-contract checks for the example;
- batch-19 citation-fidelity check;
- direct independent concatenation of the displayed domino sequence.
