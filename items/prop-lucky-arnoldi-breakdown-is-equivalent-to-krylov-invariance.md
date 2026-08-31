---
id: prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance
kind: proposition
title: "Exact Arnoldi breakdown is equivalent to invariance of the current Krylov space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
       thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

Let $m\ge1$. Suppose Arnoldi has run through step $m$ without earlier breakdown. Then the
next Arnoldi residual vanishes, equivalently $h_{m+1,m}=0$, if and only if the
current Krylov space $K_m(A,b)$ is $A$-invariant.

## Facts & Assumptions

**Given:** An integer $m\ge1$ and an Arnoldi run through step $m$ with basis vectors
$v_1,\dots,v_m$.

[L1] Before breakdown, Arnoldi produces an orthonormal basis of $K_m(A,b)$ and
the relations
$Av_j\in\operatorname{span}\{v_1,\dots,v_{j+1}\}$ for $1\le j\le m$
([[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]).

## Proof
**Proof technique:** direct.

1.1 Assume $h_{m+1,m}=0$. Then the Arnoldi step gives $Av_m\in\operatorname{span}\{v_1,\dots,v_m\}=K_m(A,b)$. For every $j<m$, [L1] already gives $Av_j\in K_{j+1}(A,b)\subseteq K_m(A,b)$. Since the $v_j$ form a basis of $K_m(A,b)$, linearity shows $A(K_m(A,b))\subseteq K_m(A,b)$. [L1, algebra]

2.1 Conversely, assume $K_m(A,b)$ is $A$-invariant. Because $v_m\in K_m(A,b)$, one has $Av_m\in K_m(A,b)=\operatorname{span}\{v_1,\dots,v_m\}$. Therefore the part of $Av_m$ orthogonal to that span is zero, so the Arnoldi residual $w_m$ vanishes and hence $h_{m+1,m}=\|w_m\|=0$. [L1, algebra] ∎
