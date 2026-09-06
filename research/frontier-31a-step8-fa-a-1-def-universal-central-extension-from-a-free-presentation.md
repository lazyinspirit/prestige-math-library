# FA terminal evidence — queue a/1

Item: `def-universal-central-extension-from-a-free-presentation`.
Decision: **accepted-after-review**. Source status: **verified**.

Read CLAUDE.md, README.md and SCHEMA.md; the frozen queue; the current item;
all three direct dependencies (`def-perfect-group`,
`def-free-presentation-kernel-data`,
`lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists`); the published
commutator convention; both Schur A/B pages; batch-1 manifest, coverage and
notes; batch-1 proof contracts and refuter risk record; Alpha's step8 context
and report; and both exact item rows in the judge history plus Sol's fatal
adjudication. This definition has no proof-bearing contract, consistently with
`proof: not-applicable`; the adjacent centrality and universality contracts
were inspected. The refuter flagged no defect here. Alpha's adjacent
universality concern concerns uniqueness, not existence of this defined map.

## Independent mathematical basis

The current text explicitly binds an exact free presentation of a perfect
G. Thus R is normal in F. Conjugation carries a generator [f,r] to
[tft^-1,trt^-1], so [F,R] is normal in F; each such generator lies in both R
and [F,F]. Hence the quotient and the induced homomorphism exist. The image
of [F,F] is [G,G]=G, including G=1. No finiteness hypothesis is needed.
This verifies the complete local definition against its actual prerequisites.

Terra's first rejection correctly demanded free-presentation hypotheses,
which Sol supplied. Terra's final rejection treats the title as an extra
unproved assertion. The body explicitly says candidate, exactly matching the
manifest claim and Alpha convention. The page immediately follows it with
`lem-free-presentation-construction-is-a-central-extension` and
`thm-free-presentation-construction-has-the-universal-property`; it also has
`thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect`, whose
step 1.2 supplies the full uniqueness argument. The construction's conventional
title is consistent with this definition/theorem division; no backward
prerequisite or circular universality premise is needed.

Independently, put Q=F/[F,R] and U=[F,F]/[F,R]. Perfectness of G gives
Q=U(R/[F,R]), with the latter factor central, so U=[Q,Q]=[U,U]. Freeness
lifts F into any central extension E of G, and centrality kills [F,R]. Any
two maps U to E over G differ by a homomorphism to its central abelian kernel;
U perfect forces this difference to vanish. This also closes the adjacent
reader concern without relying solely on independence of generator lifts.
No dependency needs an edit.

## Source verification

- https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
  — full Outlook 1.5.15, printed pp. 40–41, verifies the perfect-group scope
  and the initial-object convention for universal central extensions.
- https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf
  — read §6.9 through the complete proof of Lemma 6.9.6, printed pp. 198–201.
  Construction 6.9.3 defines the same free-presentation map; Lemma 6.9.4
  establishes perfectness of its source; Theorem 6.9.5 and Lemma 6.9.6 give
  existence and uniqueness of the map to every central extension. The source
  uses [R,F], the same subgroup as [F,R] under the library's commutator
  convention.

## Checks and completion

Focused rendercheck: passed (1 file). Focused precheck: exit 0, 0 proof-bearing
items checked, as expected for a definition. No item, dependency, contract,
manifest, or judge stamp changed. No unresolved mathematical obligation for
this queued definition. Next action: submit the terminal recorder; only after
its acceptance begin queue item 2.

## Context reseal after queue item 2 repair

The recorder initially accepted this item at context
`6e6f6913ef691d2b04f747b56e5dc8eba13b5498b193de4108698f6e6bf793ac`.
The subsequent authorized repair of queue item 2 clarified its Statement to
name trivial coefficients and both naturality variables. Because the hash
includes all A/B sibling interfaces, this changed this item's context, while
its own item hash remains
`40d9df01da73d326050560f6e0771df32eb73a5b1dc4c1e17a5ff2ef424f2a8b`.
Reread this definition and all three direct prerequisites: their text and the
mathematical basis above remain unchanged. The new UCT sibling interface is
consistent with the page convention and makes no new assertion about the
universal-extension construction. Reseal the same accepted-after-review
outcome under the current context before recording item 2. This is an exact
context renewal, not another judge verdict or a change of disposition.
