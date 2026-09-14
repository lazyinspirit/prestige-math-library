---
id: cor-the-adjoint-representation-splits-into-simple-ideals
kind: corollary
title: The adjoint representation splits into simple ideals
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-weyls-complete-reducibility-theorem, thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 4.15 and Weyl's theorem"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§§4–5, Theorems 4.15 and 5.20"
---

## Statement

For a finite-dimensional semisimple characteristic-zero Lie algebra, every
adjoint submodule is an ideal with an ideal complement, and the irreducible
adjoint summands are precisely the simple ideals.

## Facts & Assumptions

**Given:** A semisimple Lie algebra $\mathfrak g$ under its adjoint action.

[L1] Weyl's theorem gives every submodule an invariant complement
([[thm-weyls-complete-reducibility-theorem]]).

[L2] The algebra is a finite direct sum of simple ideals
([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]]).

## Proof

**Proof technique:** translate module language into ideal language.

1.1 A subspace $U\subseteq\mathfrak g$ is stable under the adjoint action exactly when $[\mathfrak g,U]\subseteq U$, which is exactly the ideal condition. Therefore [L1] says every ideal has an ideal complement. [L1]

2.1 An irreducible adjoint summand is a nonzero ideal with no nonzero proper ideal of $\mathfrak g$. It cannot be abelian, since that would be a solvable ideal of a semisimple algebra. Its ideal complement commutes with it, so an ideal inside the summand is also an ideal of $\mathfrak g$; hence the summand is simple. Conversely, each simple factor from [L2] has no proper adjoint submodule and is irreducible. The zero algebra has the empty decomposition. [L2, step 1.1] ∎