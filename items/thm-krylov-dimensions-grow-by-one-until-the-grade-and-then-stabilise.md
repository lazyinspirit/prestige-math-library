---
id: thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise
kind: theorem
title: "The dimensions of the Krylov spaces grow by one until the grade and then stabilize"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-grade-and-relative-minimal-polynomial-of-a-start-vector,
       prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Statement

Let $\nu=\nu(A,b)$ be the grade of $b$ relative to $A$. Then:

1. for every integer $m$ with $0\le m<\nu$, one has $\dim K_m(A,b)=m$;
2. for every integer $m\ge \nu$, one has $K_m(A,b)=K_\nu(A,b)$.

Equivalently, the dimensions increase by one at each step until the grade and
then stop changing.

## Facts & Assumptions

**Given:** A square matrix $A$, a vector $b$, and its grade $\nu=\nu(A,b)$.

[F1] The relative minimal polynomial $q_{A,b}$ is monic of degree $\nu$ and
satisfies $q_{A,b}(A)b=0$ ([[def-grade-and-relative-minimal-polynomial-of-a-start-vector]]).

[L1] For every $m\ge 1$,
$K_m(A,b)=\{p(A)b:\deg p<m\}$ ([[prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector]]).

## Proof
**Proof technique:** direct.

1.1 If $0\le m<\nu$ and $\sum_{j=0}^{m-1} c_j A^j b=0$, then the polynomial $p(z)=\sum_{j=0}^{m-1} c_j z^j$ satisfies $\deg p<m<\nu$ and $p(A)b=0$. By minimality in [F1], this forces $p=0$, so $b,Ab,\dots,A^{m-1}b$ are linearly independent. Therefore $\dim K_m(A,b)=m$. [F1, L1, algebra]

2.1 Writing $q_{A,b}(z)=a_0+a_1z+\dots+a_{\nu-1}z^{\nu-1}+z^\nu$, the relation $q_{A,b}(A)b=0$ from [F1] shows that $A^\nu b\in K_\nu(A,b)$. Multiplying the same relation by $A^k$ for each $k\ge 0$ gives $A^{\nu+k}b\in K_\nu(A,b)$ as well. Hence every generator of $K_m(A,b)$ for $m\ge \nu$ already lies in $K_\nu(A,b)$, so $K_m(A,b)=K_\nu(A,b)$. [F1, algebra] ∎