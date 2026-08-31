---
id: thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization
kind: theorem
title: "Before breakdown, Arnoldi produces an orthonormal Krylov basis and a rectangular upper-Hessenberg factorization"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-arnoldi-process,
       def-krylov-subspace-of-a-matrix-and-start-vector,
       def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems — lecture notes on Arnoldi's method"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

Let $A$ be an $n\times n$ matrix over $\mathbb R$ or $\mathbb C$, let $b$ be a
nonzero vector of matching size, and let $m\ge1$. Assume the Arnoldi process
for $(A,b)$ runs through step $m$ without breakdown. Let

$$Q_m=[v_1\,\dots\,v_m], \qquad Q_{m+1}=[v_1\,\dots\,v_{m+1}],$$

and let $\bar H_m=(h_{ij})_{1\le i\le m+1,\,1\le j\le m}$, where the Arnoldi
coefficients occupy the positions $i\le j+1$ and $h_{ij}:=0$ for $i>j+1$.
Then:

1. $v_1,\dots,v_m$ are orthonormal;
2. $\operatorname{span}\{v_1,\dots,v_m\}=K_m(A,b)$;
3. $\bar H_m$ has the rectangular upper-Hessenberg zero pattern
   $h_{ij}=0$ for $i>j+1$;
4. $AQ_m=Q_{m+1}\bar H_m$.

## Facts & Assumptions

**Given:** A square matrix $A$ over $\mathbb R$ or $\mathbb C$, a nonzero start
vector $b$ of matching size, an integer $m\ge1$, and an Arnoldi run through
step $m$ with no breakdown.

[F1] In Arnoldi, each step defines
$w_j=Av_j-\sum_{i=1}^j h_{ij}v_i$ with $h_{ij}=\langle Av_j,v_i\rangle$, and
when $h_{j+1,j}=\|w_j\|\ne0$ one sets $v_{j+1}=w_j/h_{j+1,j}$
([[def-arnoldi-process]]).

[F2] For $m\ge1$, one has
$K_m(A,b)=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\}$
([[def-krylov-subspace-of-a-matrix-and-start-vector]]).

[F3] The square-matrix upper-Hessenberg condition is the zero pattern
$h_{ij}=0$ for $i>j+1$
([[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]).

## Proof
**Proof technique:** direct.

1.1 By construction in [F1], the vector $w_j$ is orthogonal to each $v_i$ for $1\le i\le j$, because $h_{ij}=\langle Av_j,v_i\rangle$ subtracts exactly the orthogonal projection of $Av_j$ onto $v_i$. Since there is no breakdown, $w_j\ne0$, so $v_{j+1}=w_j/\|w_j\|$ is a unit vector orthogonal to $v_1,\dots,v_j$. Starting from the unit vector $v_1=b/\|b\|$, induction gives orthonormality of $v_1,\dots,v_m$. [F1, algebra]

1.2 Again by [F1], each $v_{j+1}$ is a linear combination of $Av_j,v_1,\dots,v_j$. Induction using [F2] therefore gives $v_i\in K_i(A,b)\subseteq K_m(A,b)$ for $i\le m$. Conversely, $Av_j=\sum_{i=1}^{j+1} h_{ij}v_i$ lies in $\operatorname{span}\{v_1,\dots,v_{j+1}\}$, and induction from $v_1=b/\|b\|$ shows that $b,Ab,\dots,A^{m-1}b$ all lie in $\operatorname{span}\{v_1,\dots,v_m\}$. By [F2], the two spans are equal. [F1, F2, algebra]

2.1 For each column $j$, the Arnoldi relation from [F1] involves only $v_1,\dots,v_{j+1}$. By the definition of $\bar H_m$ in the Statement, its remaining entries satisfy $h_{ij}=0$ for $i>j+1$, the same zero pattern as the square upper-Hessenberg condition [F3]. The column relations assemble exactly into $AQ_m=Q_{m+1}\bar H_m$. [F1, F3, algebra] ∎
