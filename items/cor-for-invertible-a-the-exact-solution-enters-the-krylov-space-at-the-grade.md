---
id: cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade
kind: corollary
title: "If $A$ is invertible, the exact solution of $Ax=b$ lies in the Krylov space at the grade"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-grade-and-relative-minimal-polynomial-of-a-start-vector,
       thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise,
       def-invertible-matrix-and-general-linear-group]
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

Let $A$ be invertible, let $b$ be a vector, and let $\nu=\nu(A,b)$. If
$x_\ast$ is the exact solution of $Ax=b$, then

$$x_\ast\in K_\nu(A,b).$$

## Facts & Assumptions

**Given:** An invertible matrix $A$, a vector $b$, its grade $\nu=\nu(A,b)$,
and the exact solution $x_\ast=A^{-1}b$.

[F1] The relative minimal polynomial $q_{A,b}$ is monic of degree $\nu$ and
satisfies $q_{A,b}(A)b=0$ ([[def-grade-and-relative-minimal-polynomial-of-a-start-vector]]).

[L1] For every $m\ge \nu$, one has $K_m(A,b)=K_\nu(A,b)$
([[thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise]]).

## Proof
**Proof technique:** direct.

1.1 If $b=0$, then $x_\ast=0\in K_0(A,b)=K_\nu(A,b)$. Assume now that $b\ne0$. Write $q_{A,b}(z)=a_0+a_1z+\dots+a_{\nu-1}z^{\nu-1}+z^\nu$. The constant term $a_0$ is nonzero, because $a_0=0$ would give $q_{A,b}(z)=zr(z)$ and then $0=q_{A,b}(A)b=A\,r(A)b$, so invertibility of $A$ would imply $r(A)b=0$ with $\deg r=\nu-1$, contradicting [F1]. [given, F1, algebra]

2.1 From $q_{A,b}(A)b=0$ we obtain $$a_0 b + A(a_1I+\dots+a_{\nu-1}A^{\nu-2}+A^{\nu-1})b=0.$$ Multiplying by $A^{-1}$ and dividing by $a_0$ yields $$x_\ast=A^{-1}b=-a_0^{-1}(a_1I+\dots+a_{\nu-1}A^{\nu-2}+A^{\nu-1})b,$$ so $x_\ast\in K_\nu(A,b)$. The inclusion is already enough, and [L1] shows it persists in every later Krylov space. [F1, L1, algebra] ∎