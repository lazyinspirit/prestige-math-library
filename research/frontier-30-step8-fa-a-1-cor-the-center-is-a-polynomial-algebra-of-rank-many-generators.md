# Final-adjudicator evidence: `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`

## Decision

Disposition: `repaired`.

I independently reviewed the final item, its three current direct dependencies,
the A/B-page context, the batch-16 manifest, coverage notes and source locators,
the merged and batch proof contracts, the ordinary-risk record, the Step-6
reader/refuter evidence, both exact judge rejections, both Alpha adjudications,
and the round-2 Alpha repair. The final item SHA-256 is
`2f9a893baccd08152edf2818ceccdb3c000383b1a92d018c73ae0a7689adcab0`.

The Alpha's round-2 mathematical mechanism is correct, but the resulting
artifact was not complete. The standalone Statement still said that if
`g` has rank `r`, then "its center" is polynomial. Grammatically that makes
the antecedent the Lie algebra itself; for a semisimple Lie algebra that center
is zero, whereas the proof concerns the center of its enveloping algebra. I
repaired the Statement to name a complex semisimple Lie algebra explicitly and
to assert the result for `Z(U(g))`. I made the same distinction in the item
title.

Both proof-contract copies were also stale: they still described the rejected
three-step proof that transported "homogeneous" generators through an
unfiltered Harish-Chandra isomorphism. On the repaired four-step item, the
strict checker consequently reported `4.1 has no derivation or routine-step
contract`. I replaced the stale third derivation, added the leading-symbol
fourth derivation, and synchronized the boundary descriptions in
`research/frontier-30-batch-16.proof-contracts.json` and
`research/frontier-30-proof-contracts.json`.

No direct dependency item was changed, so no final-adjudicator prerequisite
repair licence is required.

## Mathematical basis

Let `g` be complex semisimple and let `h` be a Cartan subalgebra. The
Harish-Chandra isomorphism identifies `Z(U(g))` with `S(h)^W` as an algebra,
and the reflection-group invariant theorem makes the latter a polynomial
algebra on `rank(g)` homogeneous generators. That proves the unfiltered
polynomial-algebra assertion.

The PBW-degree assertion needs the additional argument now present in the
item. PBW symmetrization is filtration preserving, has the identity as its
associated-graded map, and is equivariant for the adjoint `g`-actions. Since
`g` generates `U(g)`, an element of `U(g)` is killed by the adjoint action of
`g` exactly when it is central. Symmetrization therefore restricts to a
filtered vector-space isomorphism

`S(g)^g -> U(g)^g = Z(U(g))`

and yields `gr Z(U(g)) = S(g)^g`. Chevalley restriction lifts homogeneous
basic invariants of `S(h)^W` to homogeneous algebraically independent
generators `p_i` of `S(g)^g`. Their symmetrizations `z_i` are central and have
leading symbols `p_i`, hence the claimed PBW filtration degrees. A
leading-symbol induction generates every filtered central element from the
`z_i`; taking the highest weighted part of a putative polynomial relation
would give a nonzero relation among the algebraically independent `p_i`.
Thus the repaired proof establishes both generation and algebraic
independence without treating the filtered center as a graded algebra.

The downstream `sl_3` example is consistent with this formulation: its degree
two and degree three elements are filtration-degree generators of
`Z(U(sl_3))`, not homogeneous elements of a grading on the center.

## Authoritative source verification

- Pavel Etingof, *Representations of Lie Groups*, Lecture 13, Theorem 13.5:
  https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec13.pdf
  . The theorem states that for a complex semisimple Lie algebra of rank `r`,
  `Z(U(g))` is polynomial on `r` generators of specified PBW filtration
  degrees. Its proof explicitly gives PBW symmetrization as a `g`-module
  isomorphism, lifts homogeneous symmetric invariants to central elements, and
  concludes `gr(U(g)^g)=(S(g))^g`. This directly verifies the nontrivial
  filtered step used in the final proof.

The PDF was opened through the official MIT OpenCourseWare result and checked
for the stated theorem and proof; no search snippet or aggregator was used as
mathematical authority.

## Focused checks

- Item reflow: unchanged and canonical.
- Focused precheck: one item checked, zero failures.
- Strict batch-16 proof contract: 38/38 items checked, zero errors and zero
  warnings; this specifically closes the formerly unmapped step 4.1.
- Risk report: score 2, ordinary risk, with the written induction as its only
  structural signal; no high-risk review is required.
- Render check on the item and both companion pages: all three passed real
  YAML, delimiter, wikilink-in-math, and KaTeX checks.
- Batch-16 content policy: 51 scoped items, zero errors and zero warnings.
- Dependency check: exit 0; all references resolve and no cycle exists. Its
  433 whole-corpus warnings are standing issues unrelated to this item.
