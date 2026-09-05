# Final-adjudicator evidence: `thm-enveloping-algebra-is-free-over-its-center`

## Decision

Disposition: `accepted-after-review`.

I independently reviewed the current theorem and proof, all five declared
dependencies, the A/B-page context, the batch-16 manifest and coverage notes,
the batch and merged proof contracts, the ordinary-risk record, the Step-6
reader/refuter evidence, both exact judge rejections, both Alpha
adjudications, and the round-2 repair account. The current item SHA-256 is
`86133347e5d8c31ecfcda9fa73aa5a6c5baeaed4f544f31d4f5f029a1107c262`.

The Alpha's second repair is mathematically correct and closes the exact
failure left by its first repair. The proof now establishes the invariant PBW
lifting and graded-center identity locally instead of attributing them to the
unfiltered statement of the Harish-Chandra isomorphism. No item, dependency,
page, contract, or metadata edit is required, and no final-adjudicator
prerequisite-repair licence is needed.

## Mathematical basis

PBW symmetrization is a filtration-preserving vector-space isomorphism
`S(g) -> U(g)` whose associated-graded map is the identity. It is equivariant
for the adjoint `g`-actions. Because `g` generates `U(g)`, its invariants in
`U(g)` are precisely `Z(U(g))`; hence symmetrization restricts to a filtered
isomorphism from `S(g)^g` onto the center and gives
`gr Z(U(g)) = S(g)^g`. This is exactly the bridge missing from both frozen
judge contexts.

Kostant's separation/harmonic decomposition supplies a graded subspace `H`
such that multiplication

`H tensor S(g)^g -> S(g)`

is an isomorphism. Choose filtered lifts in `U(g)` of a homogeneous
vector-space basis of `H`, and give `Z(U(g)) tensor H_tilde` the total
filtration. The associated graded of its multiplication map to `U(g)` is,
after the preceding graded-center identification, the separation isomorphism.
For these exhaustive nonnegative filtrations, a filtered map with isomorphic
associated graded is itself bijective: injectivity follows from the leading
term of a nonzero kernel element, and surjectivity follows by lifting the
leading term and descending induction on filtration degree. Therefore the
chosen lifts form a free left basis over the center. Centrality makes the same
basis a right basis, so the statement's final implication is also valid.

The extra Chevalley and Harish-Chandra interfaces in the declared page route
are compatible with this proof. The load-bearing freeness argument uses the
stronger local identity `gr Z(U(g))=S(g)^g` rather than trying to infer filtered
compatibility from the abstract algebra isomorphism `Z(U(g)) ~= S(h)^W`.

## Authoritative source verification

- Pavel Etingof, *Representations of Lie Groups*, Lecture 13:
  https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec13.pdf
  . Theorem 13.1 states Kostant's freeness theorem for `S(g)` over
  `S(g)^g`. Theorem 13.5(ii) states that `U(g)` is free over its center, and
  the proof immediately before it gives equivariant PBW symmetrization,
  invariant central lifts, and `gr(U(g)^g)=(S(g))^g` before invoking Theorem
  13.1. These are exactly the two nontrivial inputs used by the local proof.
- The same official course notes in the full-volume file cited by the item:
  https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
  . Sections 13.1 and 13.3 contain the separation theorem and the
  free-over-the-center consequence in their surrounding course context.

Both URLs are official MIT OpenCourseWare PDFs and were checked for the stated
support; no aggregator was used as mathematical authority.

## Focused checks

- Focused precheck: one item checked, zero failures.
- Strict batch-16 proof contract: 38/38 items checked, zero errors and zero
  warnings; the three derivations match the current three proof steps.
- Risk report: score 2, ordinary risk, arising only from the five declared
  dependencies; no high-risk review is required. The Step-6 refuter opened the
  item and recorded no finding against it.
- Render check on the theorem and both companion pages: all three passed real
  YAML, delimiter, wikilink-in-math, and KaTeX checks.
- Batch-16 content policy: 51 scoped items, zero errors and zero warnings.
- The whole-corpus dependency check had already passed after the queue-position
  1 repair, with only the repository's standing unrelated warnings.
