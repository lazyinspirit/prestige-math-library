---
id: def-moore-penrose-pseudoinverse
kind: definition
title: "The Moore--Penrose pseudoinverse $A^+$ as the solution of the four Penrose equations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-product-and-identity-matrix,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Roger Penrose, A generalized inverse for matrices"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0305004100030929"
---

## Definition

Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, and let
$A\in M_{m\times n}(\mathbb F)$. A matrix $B\in M_{n\times m}(\mathbb F)$ is a
**Moore--Penrose pseudoinverse** of $A$ when

$$ABA=A,\qquad BAB=B,$$

and the two square products are self-adjoint:

$$
(AB)^*=AB,\qquad (BA)^*=BA.
$$

When such a matrix exists and is unique, it is denoted by $A^+$.

The four displayed relations are the **Penrose equations**. They are written in
the matrix product and adjoint conventions of
[[def-matrix-product-and-identity-matrix]] and
[[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]].
