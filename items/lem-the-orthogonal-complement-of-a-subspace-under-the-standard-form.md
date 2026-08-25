---
id: lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form
kind: lemma
title: "For a subspace $U\\le F^{n}$, $\\dim_F U^{\\perp}=n-\\dim_F U$, where $U^{\\perp}=\\{x:\\langle x,u\\rangle=0\\text{ for all }u\\in U\\}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-standard-bilinear-form-on-a-coordinate-space, def-linear-subspace, def-dimension, thm-dimension-of-a-linear-subspace, def-linear-map, thm-rank-nullity, thm-row-rank-equals-column-rank, def-row-space-column-space-nullspace-and-matrix-ranks, def-rank-and-nullity, thm-linear-kernel-image-and-injectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.2"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $U\le F^n$ be a subspace, and define

$$U^\perp:=\{\,x\in F^n : \langle x,u\rangle=0\text{ for every }u\in U\,\}.$$

Then

$$\dim_FU^\perp=n-\dim_FU.$$

## Facts & Assumptions

**Given:** a field $F$, a natural number $n$, and a subspace $U\le F^n$.

[F1] A finite-dimensional subspace has a basis, and its dimension is at most $n$ ([[thm-dimension-of-a-linear-subspace]]).

[F2] Row rank equals column rank ([[thm-row-rank-equals-column-rank]]).

[F3] Rank-nullity gives $\dim_FF^n=\operatorname{nullity}\Phi+\operatorname{rank}\Phi$ for a linear map $\Phi:F^n\to F^d$ ([[thm-rank-nullity]]).

[F4] The standard form is $\langle x,y\rangle=\sum_{i<n}x_iy_i$ ([[def-standard-bilinear-form-on-a-coordinate-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $u_1,\dots,u_d$ be a basis of $U$, where $d=\dim_FU$, and define the linear map $\Phi:F^n\to F^d$ by $\Phi(x)=(\langle x,u_1\rangle,\dots,\langle x,u_d\rangle)$. [F1, F4, construct]

2.1 By definition, $\ker\Phi=U^\perp$. The matrix of $\Phi$ has the vectors $u_1,\dots,u_d$ as its rows, so its row rank is $d$ because those rows are independent; hence its column rank is also $d$ by [F2], and therefore $\operatorname{rank}\Phi=d$. [F1, F2, step 1.1]

3.1 Rank-nullity [F3] now gives $n=\dim_FF^n=\operatorname{nullity}\Phi+\operatorname{rank}\Phi=\dim_FU^\perp+d$, so $\dim_FU^\perp=n-d=n-\dim_FU$. [F3, step 2.1] ∎

## Remarks

- The cases $U=0$ and $U=F^n$ are included automatically: then $U^\perp=F^n$ and $U^\perp=0$ respectively.
