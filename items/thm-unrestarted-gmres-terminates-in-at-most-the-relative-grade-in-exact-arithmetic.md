---
id: thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic
kind: theorem
title: "In exact arithmetic, unrestarted GMRES terminates no later than the relative grade"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade,
       cor-gmres-minimizes-the-residual-over-the-affine-krylov-space,
       def-grade-and-relative-minimal-polynomial-of-a-start-vector]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

Let $A$ be invertible, let $x_0$ be an initial guess, let $r_0=b-Ax_0$, and
let $\nu=\nu(A,r_0)$. In exact arithmetic, unrestarted GMRES produces a zero
residual no later than step $\nu$.

## Facts & Assumptions

**Given:** An invertible matrix $A$, an initial guess $x_0$, the initial
residual $r_0=b-Ax_0$, and its grade $\nu=\nu(A,r_0)$.

[L1] The exact correction $A^{-1}r_0$ lies in $K_\nu(A,r_0)$
([[cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade]]).

[L2] GMRES minimizes the residual norm over
$x_0+K_\nu(A,r_0)$ ([[cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]]).

## Proof
**Proof technique:** direct.

1.1 Let $x_\ast$ be the exact solution of $Ax=b$. Then $x_\ast-x_0=A^{-1}(b-Ax_0)=A^{-1}r_0$, so [L1] gives $x_\ast\in x_0+K_\nu(A,r_0)$. [L1, algebra]

2.1 The exact solution has residual $b-Ax_\ast=0$. Since $x_\ast$ is an admissible point in the $\nu$th GMRES affine space, [L2] forces the $\nu$th GMRES residual norm to be at most $0$, hence equal to $0$. Therefore unrestarted GMRES terminates by step $\nu$. [L2, step 1.1] ∎