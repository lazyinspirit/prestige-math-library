---
id: lem-trace-of-commutators-of-square-matrices-is-zero
kind: lemma
title: "The trace of a matrix commutator is zero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-trace-of-a-square-matrix-over-a-commutative-ring]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed., §8D, Theorem 8.49"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $R$ be a commutative ring, let $d\geq 0$, and let $A,B\in M_d(R)$. Then

$$\operatorname{tr}(AB-BA)=0.$$

## Facts & Assumptions

**Given:** A commutative ring $R$, an integer $d\geq 0$, and square matrices $A=(a_{ij}),B=(b_{ij})\in M_d(R)$.

[F1] [[def-trace-of-a-square-matrix-over-a-commutative-ring]]: for a square matrix $C=(c_{ij})$, $\operatorname{tr}(C)=\sum_{i<d}c_{ii}$, with the empty sum equal to $0_R$ when $d=0$.

## Proof

1.1 By matrix multiplication and [F1], $\operatorname{tr}(AB)=\sum_{i<d}\sum_{j<d}a_{ij}b_{ji}$. [given, F1, algebra]

2.1 By [F1], $\operatorname{tr}(BA)=\sum_{i<d}\sum_{j<d}b_{ij}a_{ji}$. Since $R$ is commutative, reordering each product and exchanging the finite dummy indices gives $\operatorname{tr}(BA)=\sum_{i<d}\sum_{j<d}a_{ij}b_{ji}=\operatorname{tr}(AB)$. [given, F1, step 1.1, algebra]

3.1 The diagonal entries of $AB-BA$ are the differences of the corresponding diagonal entries, so [F1] and step 2.1 give $\operatorname{tr}(AB-BA)=\operatorname{tr}(AB)-\operatorname{tr}(BA)=0$. The same calculation covers $d=0$ because both sums are empty. [given, F1, step 2.1, algebra] ∎
