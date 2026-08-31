---
id: prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor
kind: proposition
title: "For a diagonalizable matrix, the GMRES residual bound carries the eigenvector-conditioning factor $\\kappa(V)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual]
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

Assume $A=V\Lambda V^{-1}$ is diagonalizable, with
$\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$. If $r_m$ is the $m$th
GMRES residual, then

$$\|r_m\|_2\le \kappa_2(V)\min_{\substack{\deg p\le m\\ p(0)=1}} \max_{1\le i\le n}|p(\lambda_i)|\,\|r_0\|_2,$$

where $\kappa_2(V)=\|V\|_2\|V^{-1}\|_2$.

## Facts & Assumptions

**Given:** A diagonalization $A=V\Lambda V^{-1}$ and an $m$th GMRES residual
$r_m$.

[L1] One has $r_m=p_m(A)r_0$ for some polynomial $p_m$ with $\deg p_m\le m$ and
$p_m(0)=1$, and GMRES chooses such a polynomial minimizing the residual norm
([[prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], $$r_m=p_m(A)r_0=Vp_m(\Lambda)V^{-1}r_0.$$ Hence $$\|r_m\|_2\le \|V\|_2\,\|p_m(\Lambda)\|_2\,\|V^{-1}\|_2\,\|r_0\|_2.$$ Since $p_m(\Lambda)$ is diagonal, its operator norm is $\max_i |p_m(\lambda_i)|$. Therefore $$\|r_m\|_2\le \kappa_2(V)\max_i |p_m(\lambda_i)|\,\|r_0\|_2.$$ [L1, algebra]

2.1 The polynomial $p_m$ from [L1] minimizes $\|p(A)r_0\|_2$ over all polynomials with $\deg p\le m$ and $p(0)=1$, so the bound from step 1.1 also holds after taking the minimum over that admissible class. [L1, step 1.1] ∎