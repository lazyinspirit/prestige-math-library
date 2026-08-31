---
id: cor-unrestarted-gmres-residual-norms-are-nonincreasing
kind: corollary
title: "For unrestarted GMRES, the residual norms are nonincreasing"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

Let $x_m$ be an unrestarted GMRES iterate at step $m$. Then

$$\|b-Ax_{m+1}\|_2\le \|b-Ax_m\|_2 \qquad(m\ge 0).$$

## Facts & Assumptions

**Given:** Unrestarted GMRES iterates $x_m$ and $x_{m+1}$ for the same initial
guess $x_0$.

[L1] Each GMRES iterate minimizes the residual norm over its affine Krylov
space $x_0+K_m(A,r_0)$ ([[cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]]).

## Proof
**Proof technique:** direct.

1.1 Because $K_m(A,r_0)\subseteq K_{m+1}(A,r_0)$, one has $x_0+K_m(A,r_0)\subseteq x_0+K_{m+1}(A,r_0)$. In particular, $x_m$ is an admissible competitor for the $(m+1)$st minimization problem. [given, algebra]

2.1 By [L1], $x_{m+1}$ minimizes the residual norm over the larger affine space, so $$\|b-Ax_{m+1}\|_2\le \|b-Ax_m\|_2.$$ [L1, step 1.1] ∎