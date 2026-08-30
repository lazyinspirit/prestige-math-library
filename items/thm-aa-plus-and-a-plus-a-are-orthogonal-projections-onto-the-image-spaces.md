---
id: thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces
kind: theorem
title: "$AA^+$ and $A^+A$ are the orthogonal projections onto $\\operatorname{im}A$ and $\\operatorname{im}A^*$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rank-equals-number-of-nonzero-singular-values,
       thm-moore-penrose-pseudoinverse-exists-and-is-unique,
       thm-self-adjoint-idempotents-are-exactly-orthogonal-projections,
       thm-singular-value-decomposition]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
    - title: "Stanford CS205L, Unit 11: Zero Singular Values"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_11_svd_pinv_solns.pdf"
---

## Statement

Let $A$ be a finite real or complex matrix. Then $AA^+$ is the orthogonal
projection onto $\operatorname{im}A$, and $A^+A$ is the orthogonal projection
onto $\operatorname{im}A^*$.

## Facts & Assumptions

**Given:** A matrix $A$ over $\mathbb R$ or $\mathbb C$.

[L1] Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[L2] The rank equals the number of nonzero singular values ([[cor-rank-equals-number-of-nonzero-singular-values]]).

[L3] A self-adjoint idempotent is exactly an orthogonal projection onto its image ([[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]).

[L4] Every finite real or complex matrix has a singular value decomposition
([[thm-singular-value-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], write $A=U\Sigma V^*$. Define $B:=V\Sigma^+U^*$ by reciprocating the positive singular values and leaving the zero block fixed. Direct diagonal multiplication verifies the four Penrose equations, so uniqueness in [L1] gives $B=A^+$. Hence $$ AA^+=U(\Sigma\Sigma^+)U^*, \qquad A^+A=V(\Sigma^+\Sigma)V^*. $$ [L1, L4, algebra]

2.1 The products $\Sigma\Sigma^+\in M_m(\mathbb F)$ and $\Sigma^+\Sigma\in M_n(\mathbb F)$ are the respective rank-$r$ diagonal projections, each with $1$ in its nonzero singular directions and $0$ elsewhere, where $r$ is the number of nonzero singular values from [L2]. Hence $AA^+$ and $A^+A$ are self-adjoint idempotents. [L2, step 1.1, algebra]

3.1 By [L3], $AA^+$ and $A^+A$ are orthogonal projections onto their image spaces. In the singular basis, $\operatorname{im}(AA^+)$ is the span of the left singular vectors corresponding to the nonzero singular values, which is exactly $\operatorname{im}A$. [L3, step 1.1, step 2.1, algebra]

4.1 The same computation shows that $\operatorname{im}(A^+A)$ is the span of the right singular vectors corresponding to the nonzero singular values, which is exactly $\operatorname{im}A^*$. [step 3.1, algebra]

5.1 Therefore $AA^+$ and $A^+A$ are the orthogonal projections onto $\operatorname{im}A$ and $\operatorname{im}A^*$ respectively. [step 3.1, step 4.1] ∎
