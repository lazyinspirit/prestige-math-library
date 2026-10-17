---
id: ex-chebyshev-lobatto-endpoint-clustering
kind: example
title: "Chebyshev–Lobatto nodes cluster quadratically at the endpoints"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 5
deps: [def-chebyshev-gauss-lobatto-collocation-grid, lem-sine-chord-and-lipschitz-bounds, thm-sine-and-cosine-subtraction-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–78 / PDF pp. 74–84; Chebyshev–Gauss–Lobatto points."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–255 (full-book PDF); Lobatto points and endpoint clustering."
generation:
  role: example
---

## Example

For $x_j=\cos(j\pi/N)$, the endpoint gap $x_0-x_1$ is at most $\pi^2/(2N^2)$, whereas a central adjacent-node gap is at least $\sqrt2/N$. Their ratio tends to zero, so the mesh is not uniform and its smallest spacing has quadratic endpoint scale.

## Facts & Assumptions

**Given:** An integer $N\ge2$ and the decreasing Chebyshev–Gauss–Lobatto nodes $x_j$.

[F1] [[def-chebyshev-gauss-lobatto-collocation-grid]]: $x_j=\cos(j\pi/N)$ for $0\le j\le N$.

[F2] [[thm-sine-and-cosine-subtraction-formulas]] and [[thm-sine-and-cosine-addition-formulas]]: cosine differences reduce to products of sine factors, $\sin(a+b)=\sin a\cos b+\cos a\sin b$, and $\cos(2t)=\cos^2t-\sin^2t$.

[F3] [[lem-sine-chord-and-lipschitz-bounds]]: $\sin t\ge2t/\pi$ for $0\le t\le\pi/2$ and $|\sin u-\sin v|\le|u-v|$ for all real $u,v$.

[F4] [[thm-sine-cosine-signs-monotonicity-and-ranges]] and [[thm-quarter-turn-values-and-shift-formulas]]: sine is increasing on $[0,\pi/2]$ and $\sin(\pi/2)=1$.

## Verification

1.1 The subtraction and addition identities [F2] give $x_j-x_{j+1}=2\sin\left(\frac{(2j+1)\pi}{2N}\right)\sin\left(\frac\pi{2N}\right),\qquad x_0-x_1=2\sin^2\left(\frac\pi{2N}\right).$ By [F3], $\sin(\pi/(2N))\le\pi/(2N)$, hence $x_0-x_1\le\pi^2/(2N^2)$. [F1, F2, F3, algebra]

2.1 If $N$ is odd, choose $j=(N-1)/2$; then $(2j+1)\pi/(2N)=\pi/2$ and [F4] gives sine equal to $1$, so the gap formula in step 1.1 and [F3] give a central gap at least $2/N\ge\sqrt2/N$. If $N$ is even, choose $j=N/2-1$ and write $t=\pi/2-\pi/(2N)\ge\pi/4$. The addition and subtraction formulas [F2] give $\sin(\pi/4)=\cos(\pi/4)$ and $2\sin(\pi/4)\cos(\pi/4)=\sin(\pi/2)=1$. The chord bound [F3] gives $\sin(\pi/4)\ge1/2>0$, hence $\sin(\pi/4)=\sqrt2/2$; monotonicity [F4] now gives $\sin t\ge\sqrt2/2$. In either parity, [F3] also gives $\sin(\pi/(2N))\ge1/N$, so the selected central gap in step 1.1 is at least $\sqrt2/N$. [given, F2, F3, F4, step 1.1, algebra]

3.1 The ratio of the endpoint gap to this central gap is at most $\pi^2/(2N)$, which tends to zero as $N\to\infty$. This proves the stated endpoint clustering and nonuniformity. [step 1.1, step 2.1, algebra] ∎
