---
id: thm-unit-equation-enumeration-is-sound-and-complete
kind: theorem
title: "Soundness, completeness, and termination of the unit-equation enumeration procedure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - alg-enumerate-solutions-of-two-variable-number-field-unit-equation
  - thm-effective-s-unit-equation-finite-solutions
  - thm-s-unit-theorem
  - def-fundamental-units
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5, Theorem 5.12 and proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field and let $\alpha,\beta\in K^\times$. Suppose the unit-equation procedure has terminating exact subroutines that return a fundamental-unit basis, the complete finite torsion subgroup, and an integer $H\ge0$ such that every solution $\alpha x+\beta y=1$ in $(\mathcal O_K^\times)^2$ has all fundamental-unit exponents in $[-H,H]$. Then the procedure in the algorithm item halts and returns exactly the set of solutions.

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[alg-enumerate-solutions-of-two-variable-number-field-unit-equation]]

[[thm-effective-s-unit-equation-finite-solutions]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, nonzero $\alpha,\beta\in K$, and the terminating exact subroutines and exponent-bound guarantee stated above.

[F1] Every unit has a unique expression as a torsion unit times an integer combination of the returned fundamental units, and the returned torsion list is complete. ([[thm-s-unit-theorem]], [[def-fundamental-units]])

[F2] The algorithm enumerates every torsion pair and every exponent vector in the finite box $[-H,H]^{2r}$, then retains a pair exactly when the input equation holds by exact equality. ([[alg-enumerate-solutions-of-two-variable-number-field-unit-equation]])

[A1] Every solution has each unit exponent between $-H$ and $H$, and the subroutines terminate and return correct data. ([[thm-effective-s-unit-equation-finite-solutions]])

## Proof


1.1 The torsion subgroup is finite by [F1], the rank $r$ is finite because $K$ is a number field, and the box $[-H,H]^{2r}$ has $(2H+1)^{2r}$ elements. Thus the product of this box with the finite set of torsion pairs is finite. Each candidate is formed by finitely many exact field operations and one equality test, so the enumeration halts. [F1, F2, A1, given]

1.2 If a pair is output, it is formed from units by [F1] and passes the exact equality test in [F2]; hence it is a unit pair satisfying $\alpha x+\beta y=1$. This proves soundness. [F1, F2]

2.1 Let $(x,y)$ be any solution. By [A1], its two exponent vectors lie in the enumerated box. By uniqueness and completeness in [F1], their torsion factors occur in the enumerated torsion lists. The procedure therefore forms this pair, and its exact equation check succeeds, so it outputs the pair. This proves completeness. [F1, F2, A1, given] ∎
## Remarks

The certified fundamental-unit algorithm now supplies the full basis, relation and torsion data. The explicit exponent bound is constructed in the effective determination theorem; its homogeneous logarithmic lower-bound foundation remains held, so this conditional correctness theorem does not assert unconditional algorithmic readiness.

## Remarks references

[[alg-compute-units-and-class-group-from-bounded-s-units]]

[[thm-bounded-s-unit-matrix-computation-correct]]
