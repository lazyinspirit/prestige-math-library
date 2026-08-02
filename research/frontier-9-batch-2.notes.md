# Frontier 9 batch 2 — source and authoring ledger

Scope: Euclidean domains/PIDs/UFDs and free groups/presentations. This is
draft-only authoring in the linked `build-foundations-ab-pairs` worktree.

## Authored core

- Domain divisibility, associates, irreducible and prime elements, Euclidean
  domains, PIDs, and UFDs.
- Formal inverse alphabets, free reduction, the reduced-word construction and
  universal property, free-group uniqueness, presentations as quotients by
  normal closures, and the theorem that every group admits such a presentation.
- The companion pages contain the sign-safe Euclidean function on $\mathbb Z$
  and an explicit formal-cancellation calculation.

Definitions are literature-derived. The normal-form theorem and its local
stack-reduction proof are literature-derived in statement and AI-altered in
proof; it discharges the forward well-definedness references on the two word and
free-group definitions.

## Sources checked for this slice

- [Sharifi, *Abstract Algebra*, Advanced Ring Theory](https://math.ucla.edu/~sharifi/algebra.pdf),
  for Euclidean domains, PIDs, irreducibles, primes, and UFDs.
- [John McKernan, *Presentations and Groups of Small Order*, Lecture 12](https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf),
  for reduced words and the free-group universal property.
- [Mark Brittenham, *Group Presentations*, class notes](https://www.math.unl.edu/~mbrittenham2/classwk/872s07/lecnotes/slides.from.class/cls08--presentations.pdf),
  for presentations as quotients by normal closures.

## Boundary and authoring obligations

- The Euclidean function is required only to give division with smaller
  nonzero remainder; stronger optional conventions are not smuggled in.
- UFD uniqueness explicitly permits both permutation and associates.
- The Euclidean-domain-to-PID implication is included. PID-to-UFD and the
  factorisation-existence chain are deferred because the current compact core
  does not yet contain their minimal-ideal and factorisation lemmas; no UFD
  implication is claimed from the definition alone.
