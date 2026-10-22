---
id: thm-ribbon-evaluation-independent-of-colored-braid-representative
kind: theorem
title: "Framed colored-braid representative independence"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-colored-framed-knot-evaluation-from-ribbon-category
  - lem-multicolored-ribbon-coupon-evaluation
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Uses ACω only through the multicolored framed-tangle evaluator."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapter I, Theorem 2.5 and §§3–4"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, §8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Assume countable choice. Let $\mathcal C$ be a ribbon category with chosen left duals. If two finite colored braids have color-preserving endpoint permutations and their blackboard-framed closures are isotopic as oriented framed links by an isotopy preserving each component color, then their evaluations agree in $\operatorname{End}_{\mathcal C}(\mathbf1)$. Thus the framed colored evaluation of a closed braid is independent of its colored-braid representative whenever the represented framed colored links are the same.

## Statement references

[[def-colored-framed-knot-evaluation-from-ribbon-category|Colored framed-link evaluation]]

[[lem-multicolored-ribbon-coupon-evaluation|Multicolored framed-tangle isotopy invariance]]

[Turaev, *Quantum Invariants of Knots and 3-Manifolds*, Chapter I, Theorem 2.5 and §§3–4](https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf)

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §8.10](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** Countable choice, a ribbon category, two finite colored braids, and a framed colored isotopy between their closures.

[F1] The colored framed-link evaluation is the framed ribbon-tangle functor applied to the closed link and takes values in $\operatorname{End}_{\mathcal C}(\mathbf1)$ ([[def-colored-framed-knot-evaluation-from-ribbon-category]]).

[F2] The multicolored ribbon-tangle evaluator is invariant under every boundary-relative framed graph isotopy and handles arbitrary object colors with the chosen duality maps ([[lem-multicolored-ribbon-coupon-evaluation]]).

[A1] Countable choice is assumed for the cited construction of the multicolored tangle evaluator ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the Statement and [A1].

1.1 Under [A1], each braid closure is a framed colored link with empty boundary. By [F1], its value is the endomorphism of the tensor unit assigned by the multicolored framed-tangle evaluator, and its component labels are exactly the colors carried around the permutation cycles. [F1, F2, A1, given]

2.1 The isotopy hypothesis is a framed graph isotopy that preserves the labels. By [F2], the two closed tangles have equal evaluation morphisms. Applying [F1] identifies those morphisms with the two braid-closure values, proving equality in $\operatorname{End}_{\mathcal C}(\mathbf1)$. This statement concerns framed isotopy; an ordinary Markov stabilization that changes framing is not an additional move here. [F1, F2, step 1.1, given] ∎
