---
id: prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector
kind: proposition
title: "The Krylov subspace consists exactly of the vectors $p(A)b$ for zero polynomials or polynomials of degree less than $m$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-krylov-subspace-of-a-matrix-and-start-vector]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Statement

Let $A$ be a square matrix over $\mathbb R$ or $\mathbb C$, let $b$ be a vector
of matching size, and let $m\ge 1$. Then

$$K_m(A,b)=\{p(A)b:p=0\text{ or }\deg p<m\}.$$

## Facts & Assumptions

**Given:** A square matrix $A$ over $\mathbb R$ or $\mathbb C$, a vector $b$ of
matching size, and an integer $m\ge 1$.

[F1] For $m\ge 1$, the Krylov subspace is
$K_m(A,b)=\operatorname{span}\{b,Ab,\dots,A^{m-1}b\}$
([[def-krylov-subspace-of-a-matrix-and-start-vector]]).

## Proof
**Proof technique:** direct.

1.1 If $v\in K_m(A,b)$, then [F1] gives scalars $c_0,\dots,c_{m-1}$ with $$v=\sum_{j=0}^{m-1} c_j A^j b.$$ With $p(z):=\sum_{j=0}^{m-1} c_j z^j$, either $p=0$ or $\deg p<m$, and $v=p(A)b$. [F1, construct, algebra]

2.1 Conversely, $p=0$ gives $p(A)b=0\in K_m(A,b)$. If instead $\deg p<m$ and $p(z)=\sum_{j=0}^{m-1} c_j z^j$, then $$p(A)b=\sum_{j=0}^{m-1} c_j A^j b,$$ which lies in the span from [F1]. Hence every displayed $p(A)b$ lies in $K_m(A,b)$. [F1, algebra] ∎
