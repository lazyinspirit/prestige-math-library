---
id: lem-lefschetz-hopf-index-formula-for-nondegenerate-fixed-points
kind: lemma
title: Lefschetz-Hopf index formula for nondegenerate fixed points (orientable case)
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace
  - def-global-geometric-lefschetz-number
  - def-algebraic-lefschetz-number
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall
        1974; complete 236-page PDF)
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: Ch. 3 §4, printed pp. 119-122 (for a Lefschetz map the global
        intersection number is the sum of the local numbers)
    - title: Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential
        Topology, Winter 2023 (complete 63-page lecture notes)
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: Lecture 17, printed pp. 54-55 (Theorem 155 for a diffeomorphism with
        isolated fixed points; the diagonal splitting proof)
dependency_level: 10
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed oriented smooth
$n$-manifold, $n\ge1$, and let $f:M\to M$ be smooth with every fixed point
nondegenerate. Then $\operatorname{Fix}(f)$ is finite, the geometric Lefschetz
number is defined ([[def-global-geometric-lefschetz-number]]), and
$$I(f)=\sum_{x\in\operatorname{Fix}(f)}\operatorname{ind}_x(f)=L(f),$$
where $L(f)$ is the algebraic Lefschetz number of
[[def-algebraic-lefschetz-number]].

## Facts & Assumptions

**Given:** A closed oriented smooth $n$-manifold $M$ and a smooth self-map $f$ whose fixed points are all nondegenerate; assume AC.

[F1] [[lem-orientation-twisted-diagonal-realizes-the-lefschetz-trace]] proves the graph-pullback trace and its nondegenerate fixed-point evaluation, without an orientation restriction.

[F2] [[def-global-geometric-lefschetz-number]] defines the finite index sum, and [[def-algebraic-lefschetz-number]] defines the rational homology alternating trace.

## Proof

1.1 On each component carried into itself, [F1] gives finiteness and identifies the finite local index sum with its Lefschetz trace. A component carried into a different component has no fixed points and a zero source-to-source diagonal block in homology, hence contributes zero to both quantities. Compactness gives finitely many components, so these finite sums exhaust both quantities of [F2]. [given, F1, F2]

2.1 Summing the component identities gives $I(f)=L(f)$. The supplied orientation is compatible with [F1]'s twisted proof by trivializing its orientation system, and AC is inherited from that supplier. [F1, step 1.1] ∎
