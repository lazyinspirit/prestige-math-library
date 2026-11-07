---
id: def-determinant-line-over-finite-product-of-domains
kind: definition
title: "Determinant Line of a Perfect Complex over a Finite Product of Domains"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
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
    - title: "The Stacks Project, Derived Categories of Schemes 101"
      url: "https://stacks.math.columbia.edu/download/perfect.pdf"
      locator: "§39; determinant lines and perfect complexes."
---

## Definition

Let $R=\prod_{j=1}^mD_j$ be a finite product of commutative integral domains, with $m\ge1$, and let $P^\bullet$ be a bounded cochain complex of finitely generated projective $R$-modules. Write $e_j$ for the idempotent selecting the $j$th factor and $P_j^\bullet=e_jP^\bullet$. Define
$$\operatorname{Det}_R(P^\bullet):=\prod_{j=1}^m\operatorname{Det}_{D_j}(P_j^\bullet),$$
where each component determinant is formed by the alternating tensor product of top exterior powers of its terms. The finite product on the right is regarded as an $R$-module by componentwise scalar action.

## Definition references

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

[M. Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups](https://arxiv.org/pdf/0812.1556)

[The Stacks Project, Derived Categories of Schemes 101](https://stacks.math.columbia.edu/download/perfect.pdf)

## Facts & Assumptions

**Given:** A finite product ring $R=\prod_{j=1}^mD_j$ and a bounded complex $P^\bullet$ of finite projective $R$-modules.

[F1] [[def-product-ring]]: product-ring operations and identities are componentwise; the coordinate idempotents select the factors.

[F2] [[def-determinant-line-of-a-perfect-complex]]: over a commutative domain, the determinant of a bounded finite-projective complex is the alternating tensor product of the top exterior powers of its terms.

## Proof

**Proof technique:** componentwise construction.

1.1 Each idempotent $e_j$ gives a direct summand $P_j^i=e_jP^i$ of the finite projective $R$-module $P^i$; the $j$th summand is a finite projective $D_j$-module. Thus [F2] defines each component determinant line appearing in the formula. [F1, F2, given, algebra]

2.1 The product of these finitely many $D_j$-modules has the componentwise action of $R$ prescribed by [F1], so the displayed formula defines an $R$-module without an infinite product or a choice of representatives. [step 1.1, F1, algebra] ∎
