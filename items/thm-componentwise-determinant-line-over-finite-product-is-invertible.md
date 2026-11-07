---
id: thm-componentwise-determinant-line-over-finite-product-is-invertible
kind: theorem
title: "Componentwise Determinant Line over a Finite Product Is Invertible"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-determinant-line-over-finite-product-of-domains
  - def-determinant-line-of-a-perfect-complex
  - def-product-ring
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV §1 and §6.3.2; Quillen K-theory and determinant conventions."
    - title: "M. Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups"
      url: "https://arxiv.org/pdf/0812.1556"
      locator: "§3; determinant lines for perfect complexes."
---

## Statement

Under the hypotheses of the definition of $\operatorname{Det}_R(P^\bullet)$ for $R=\prod_{j=1}^mD_j$, the $R$-module $\operatorname{Det}_R(P^\bullet)$ is invertible. Its inverse is $\prod_j\operatorname{Hom}_{D_j}(\operatorname{Det}_{D_j}(P_j^\bullet),D_j)$, and base change along the $j$th projection $R\to D_j$ identifies it with $\operatorname{Det}_{D_j}(P_j^\bullet)$.

## Statement references

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

[M. Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups](https://arxiv.org/pdf/0812.1556)

## Facts & Assumptions

**Given:** The finite product determinant line from [[def-determinant-line-over-finite-product-of-domains]].

[F1] [[def-determinant-line-over-finite-product-of-domains]]: the line is the finite product of the component determinant lines.

[F2] [[def-determinant-line-of-a-perfect-complex]]: each component determinant over a domain is an invertible module, with inverse its dual.

[F3] [[def-product-ring]]: tensor products and module equalities over a finite product decompose componentwise through the coordinate idempotents.

## Proof

**Proof technique:** componentwise tensor-product calculation.

1.1 Put $L_j=\operatorname{Det}_{D_j}(P_j^\bullet)$ and $L_j^\vee=\operatorname{Hom}_{D_j}(L_j,D_j)$. By [F2], multiplication $L_j\otimes_{D_j}L_j^\vee\to D_j$ is an isomorphism for every $j$. [F2, given]

2.1 The coordinate idempotents in [F3] decompose the tensor product $(\prod_jL_j)\otimes_R(\prod_jL_j^\vee)\cong\prod_j(L_j\otimes_{D_j}L_j^\vee)\cong\prod_jD_j=R$. Thus the stated inverse makes the line invertible. Tensoring with $D_j$ kills all components $i\ne j$ and preserves the $j$th component, giving $L_j$. [F1, F3, step 1.1, algebra]

3.1 The isomorphisms are componentwise and commute with the coordinate projections, so both the inverse and base-change assertions hold for every $j$, including $m=1$. [step 2.1, F1, algebra] ∎
