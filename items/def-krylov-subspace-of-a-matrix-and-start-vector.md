---
id: def-krylov-subspace-of-a-matrix-and-start-vector
kind: definition
title: "The Krylov subspace $K_m(A,b)=\\operatorname{span}\\{b,Ab,\\dots,A^{m-1}b\\}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-matrix-product-and-identity-matrix]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Definition

Let $A$ be a square matrix over $\mathbb R$ or $\mathbb C$ and let $b$ be a
vector of matching size. Define

$$K_0(A,b):=\{0\},$$

and for $m\ge 1$ define the $m$th **Krylov subspace**

$$K_m(A,b):=\operatorname{span}\{b,Ab,\dots,A^{m-1}b\}.$$

Thus $K_m(A,b)\subseteq K_{m+1}(A,b)$ for every $m\ge 0$.
