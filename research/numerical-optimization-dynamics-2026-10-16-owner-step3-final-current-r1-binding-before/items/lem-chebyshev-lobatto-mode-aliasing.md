---
id: lem-chebyshev-lobatto-mode-aliasing
kind: lemma
title: "Chebyshev–Lobatto interpolation folds polynomial modes"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-chebyshev-gauss-lobatto-collocation-grid, def-cardinal-polynomial-interpolation, thm-cardinal-polynomial-interpolant-exists-uniquely, def-chebyshev-polynomials-first-and-second-kind, thm-chebyshev-multiple-angle-identities, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, lem-chebyshev-degree-leading-coefficients-and-extreme-values]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the alias class is a finite integer residue calculation."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–78 / PDF pp. 74–84; Chebyshev–Lobatto interpolation and polynomial differentiation."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 247–255 (full-book PDF); Chebyshev extreme points and polynomial interpolation."
---
 
## Statement

Let $N\ge1$, let $x_j=\cos(j\pi/N)$, and let $I_N^L$ denote degree-at-most-$N$ interpolation on these nodes. For every integer $n\ge0$, let $\rho_N(n)$ be the unique integer $r\in\{0,\ldots,N\}$ congruent to either $n$ or $-n$ modulo $2N$. Then
$$
I_N^L T_n=T_{\rho_N(n)}.
$$
In particular, sampling a Chebyshev series on the Lobatto grid can fold every degree $n>N$ to a degree at most $N$.

## Facts & Assumptions

**Given:** An integer $N\ge1$, its Chebyshev–Gauss–Lobatto grid, and an integer $n\ge0$.

[F1] [[def-chebyshev-gauss-lobatto-collocation-grid]]: $x_j=\cos(j\pi/N)$ for $0\le j\le N$, with distinct nodes.

[F2] [[def-chebyshev-polynomials-first-and-second-kind]] defines the polynomials $T_n$; [[thm-chebyshev-multiple-angle-identities]] gives $T_n(\cos\theta)=\cos(n\theta)$.

[F3] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: a polynomial of degree at most $N$ that agrees with the data at the $N+1$ distinct increasing nodes is their unique interpolant; reversing node order and data order preserves the same interpolation polynomial.

[F4] [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]: $T_r$ has degree $r$ for every $r\ge1$, and $T_0=1$.

[F5] Applying the cosine shift by $\pi$ in [[thm-quarter-turn-values-and-shift-formulas]] twice gives $\cos(\alpha+2q\pi)=\cos\alpha$ for every integer $q$; [[cor-trigonometric-parity-and-pythagorean-identity]] gives $\cos(-\alpha)=\cos\alpha$.

## Proof

1.1 Reduce $n$ modulo $2N$ to a residue $s\in\{0,\ldots,2N-1\}$ and put $r=\min(s,2N-s)$. Then $0\le r\le N$, $r\equiv n$ or $-n\pmod{2N}$, and this $r$ is unique: the classes $\{\pm r\}$ are distinct for $0<r<N$, with singleton classes at $r=0,N$. [given, F1, choose, algebra]

2.1 For every node $x_j$, [F2] gives $T_n(x_j)=\cos(nj\pi/N)$. Since $n\equiv\pm r\pmod{2N}$, [F5] gives $\cos(nj\pi/N)=\cos(rj\pi/N)=T_r(x_j)$. Thus $T_n$ and $T_r$ have the same nodal values. [F2, F5, step 1.1, algebra]

3.1 By [F4], $T_r$ has degree $r\le N$. Interpolation uniqueness [F3] therefore gives $I_N^LT_n=T_r$. [F1, F3, F4, step 2.1] ∎

