---
id: cor-moore-penrose-image-and-kernel-identities
kind: corollary
title: "The Moore--Penrose pseudoinverse exchanges image and adjoint-image, and exchanges kernel and adjoint-kernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant,
       thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces,
       thm-adjoint-kernel-and-range-orthogonality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
    - title: "Stanford CS205L, Unit 11: Zero Singular Values"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_11_svd_pinv_solns.pdf"
---

## Statement

For every finite real or complex matrix $A$,

$$ \operatorname{im}A^+=\operatorname{im}A^*, \qquad \operatorname{im}(A^+)^*=\operatorname{im}A, $$

and

$$ \ker A^+=\ker A^*, \qquad \ker (A^+)^*=\ker A. $$

## Facts & Assumptions

**Given:** A finite real or complex matrix $A$.

[L1] $AA^+$ and $A^+A$ are the orthogonal projections onto $\operatorname{im}A$ and $\operatorname{im}A^*$ ([[thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]]).

[L2] Pseudoinversion is involutive and adjoint-compatible: $(A^+)^+=A$ and $(A^+)^*=(A^*)^+$ ([[prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant]]).

[L3] For every finite-dimensional operator, $\ker T^*=(\operatorname{im}T)^\perp$ and $\ker T=(\operatorname{im}T^*)^\perp$ ([[thm-adjoint-kernel-and-range-orthogonality]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $A$: $A^+A$ is the orthogonal projection onto $\operatorname{im}A^*$. Apply [L1] again to $A^+$ and use [L2] to identify $(A^+)^+=A$; then $A^+A$ is also the orthogonal projection onto $\operatorname{im}A^+$. Orthogonal projections onto a given space are unique, so $\operatorname{im}A^+=\operatorname{im}A^*$. [L1, L2]
2.1 Using [L2] in the same way, $AA^+$ is both the orthogonal projection onto $\operatorname{im}A$ and the orthogonal projection onto $\operatorname{im}(A^+)^*$. Hence $\operatorname{im}(A^+)^*=\operatorname{im}A$. [L1, L2, step 1.1]
2.2 By [L3] and step 1.1, $$ \ker A=(\operatorname{im}A^*)^\perp =(\operatorname{im}A^+)^\perp =\ker (A^+)^*. $$ [L3, step 1.1, algebra]
3.1 By [L3] and step 2.1, $$ \ker A^*=(\operatorname{im}A)^\perp =(\operatorname{im}(A^+)^*)^\perp =\ker A^+. $$ [L3, step 2.1, algebra]
4.1 Steps 1.1, 2.1, 3.1, and 2.2 give the image and kernel identities. [step 1.1, step 2.1, step 3.1, step 2.2] ∎