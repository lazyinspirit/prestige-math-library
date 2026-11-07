---
id: thm-number-field-first-norm-index-inequality
kind: theorem
title: "First norm-index inequality for a cyclic number-field extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-idele-class-group-of-a-global-field
  - lem-global-idele-class-module-fixed-points
  - lem-cyclic-number-field-idele-class-herbrand-quotient
  - def-axiom-of-choice
  - def-dependent-choice
  - def-idele-group-of-a-global-field
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §4, Theorem 4.3 and Corollary 4.4"
    - title: "M. A. Sharifi, Algebraic Number Theory"
      url: "https://math.ucla.edu/~sharifi/notes/algnum-ch10.html"
      locator: "§10.7, Corollary 10.7.7"
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). Let $L/K$ be a cyclic extension of number fields of degree $n$, and let $C_K=\mathbb A_K^\times/K^\times$ and $C_L=\mathbb A_L^\times/L^\times$. Then the norm quotient is finite and satisfies

$$[C_K:N_{L/K}C_L]\ge n.$$

Equivalently, $[\mathbb A_K^\times:K^\times N_{L/K}(\mathbb A_L^\times)]\ge n$.

## Statement references

[[def-idele-class-group-of-a-global-field]]

[[lem-cyclic-number-field-idele-class-herbrand-quotient]]

[Milne, *Class Field Theory*, VII §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Sharifi, *Algebraic Number Theory*, §10.7](https://math.ucla.edu/~sharifi/notes/algnum-ch10.html)

## Facts & Assumptions

**Given:** the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC); a cyclic extension $L/K$ of number fields of degree $n$.

[F1] The canonical map $C_K\to C_L^G$ is an isomorphism, so $\widehat H^0(G,C_L)=C_K/N_{L/K}C_L$. [[lem-global-idele-class-module-fixed-points]]

[F2] The Herbrand quotient of $C_L$ is $|\widehat H^0(G,C_L)|/|\widehat H^{-1}(G,C_L)|=n$, with both groups finite. [[lem-cyclic-number-field-idele-class-herbrand-quotient]]

[F3] The idèle class group is the quotient of the idèle group by the diagonal multiplicative group, and the idele norm is compatible with the field norm on principal ideles. [[def-idele-class-group-of-a-global-field]] [[def-idele-group-of-a-global-field]]


[A1] AC, Countable Choice, and DC are hypotheses of the fixed-point input [F1] and the Herbrand quotient input [F2], used in step 1.1. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[lem-global-idele-class-module-fixed-points]] [[lem-cyclic-number-field-idele-class-herbrand-quotient]]
## Proof

**Given:** The data above.

1.1 By [F1], $\widehat H^0(G,C_L)\cong C_K/N_{L/K}C_L$. By [F2], this quotient and $\widehat H^{-1}(G,C_L)$ are finite and $|\widehat H^0|/|\widehat H^{-1}|=n$. [F1, F2, given, A1]

2.1 Since $|\widehat H^{-1}(G,C_L)|$ is a positive integer, step 1.1 gives $|C_K/N_{L/K}C_L|=n|\widehat H^{-1}(G,C_L)|\ge n$. The idelic quotient has the same index by [F3], proving both forms. This is the lower bound; the opposite direction is not asserted here. [F3, step 1.1, algebra] ∎
