# Final-adjudicator evidence: `lem-computation-history-domino-encoding`

## Disposition

`repaired`

The Alpha repair removed the incompatible auxiliary machine and supplied the
standard finite tile families for the original clamped-left machine.  The
result still conflated canonical configuration words with the fixed-or-growing
words used by the domino simulation.  In the library's canonical convention, a
left move that erases the last nonblank cell may shorten the configuration
word.  The listed tiles cannot shorten a simulation block.  Conversely, the
global boundary tile `(#, blank#)` can add harmless right padding even when the
head did not cross the displayed edge, so the Alpha proof's claim of a unique
next encoded word was too strong.

## Independent review

I inspected the full item and all four direct dependencies, the A-page and its
paired B-page, batch-19 coverage, the batch and merged proof contracts, the
critical risk review, both frozen judge rejections, defects
`frontier-30-S8-f-021` and `frontier-30-S8-f-044`, the Alpha recovery
adjudication, and the concrete example already resolved at queue position 2.

Authoritative verification:

- https://www.cs.sjsu.edu/faculty/pollett/154.13.13s/Lec01052013.html — the
  SJSU CS 154 notes give the designated start tile; right- and left-transition
  tiles; symbol, separator, and boundary-extension tiles; accepting-cleanup
  tiles; and the terminal anchor.  They explicitly describe cleanup as a
  sequence of progressively smaller post-acceptance blocks.
- https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/a48f01c5374e72ee4f68a70bc0e38583_MIT18_404f20_lec10.pdf — MIT 18.404J
  Lecture 10 defines configurations and separator-delimited computation
  histories, then constructs a PCP instance whose matches correspond to
  accepting histories and identifies the required starting-domino condition.

## Independent repair

I kept the public Statement unchanged and repaired the proof as follows.

- A configuration may be represented with arbitrary trailing blank padding;
  padding is retained when the canonical word would shrink.
- A right move across the displayed edge grows the chosen representative by
  one blank.  Optional use of the same boundary tile elsewhere merely changes
  padding and not the decoded configuration.
- The state-at-right-edge accepting case is explicitly decoded using an
  implicit scanned blank.  The analogous nonaccepting abbreviation cannot
  occur in a complete match because no transition or cleanup top can consume
  that state immediately before the separator.
- Cleanup is described as repeated whole-block passes using copiers around one
  cleanup tile, followed by the terminal anchor at the final `q_acc#` lag.
- The converse now claims uniqueness only for the decoded deterministic
  successor, not for its padded word representative.

No direct dependency was changed, so no owner-prerequisite-repair licence is
applicable.  I regenerated the lemma's citation/derivation records in the
batch-19 and merged proof-contract files and updated the matching critical-risk
records to describe the repaired padding and boundary cases.

Focused checks passed:

- phase-format precheck of the lemma;
- strict batch-19 and merged proof-contract checks for the lemma;
- batch-19 citation-fidelity check;
- preservation of the queue-position-2 consumer's public dependency interface.

