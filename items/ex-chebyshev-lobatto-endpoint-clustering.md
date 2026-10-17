---
id: ex-chebyshev-lobatto-endpoint-clustering
kind: example
title: "Chebyshev–Lobatto nodes cluster quadratically at the endpoints"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 5
deps: [def-chebyshev-gauss-lobatto-collocation-grid, lem-sine-chord-and-lipschitz-bounds, thm-sine-and-cosine-subtraction-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-of-square-roots, cor-archimedean-reciprocal, lem-of-naturals-positive, lem-of-inverse-positive, thm-algebra-of-limits]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 68–78 / PDF pp. 74–84; Chebyshev–Gauss–Lobatto points."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–255 (full-book PDF); Lobatto points and endpoint clustering."
---

## Example

For $x_j=\cos(j\pi/N)$, the endpoint gap $x_0-x_1$ is at most $\pi^2/(2N^2)$, whereas a central adjacent-node gap is at least $\sqrt2/N$. Their ratio tends to zero, and the smallest spacing has quadratic endpoint scale. The mesh is nonuniform for $N\ge3$; for $N=2$ the nodes $1,0,-1$ are equally spaced.

## Facts & Assumptions

**Given:** An integer $N\ge2$ and the decreasing Chebyshev–Gauss–Lobatto nodes $x_j$.

[F1] [[def-chebyshev-gauss-lobatto-collocation-grid]]: $x_j=\cos(j\pi/N)$ for $0\le j\le N$.

[F2] [[thm-sine-and-cosine-subtraction-formulas]] and [[thm-sine-and-cosine-addition-formulas]]: cosine differences reduce to products of sine factors, $\sin(a+b)=\sin a\cos b+\cos a\sin b$, and $\cos(2t)=\cos^2t-\sin^2t$.

[F3] [[lem-sine-chord-and-lipschitz-bounds]]: $\sin t\ge2t/\pi$ for $0\le t\le\pi/2$ and $|\sin u-\sin v|\le|u-v|$ for all real $u,v$.

[F4] [[thm-sine-cosine-signs-monotonicity-and-ranges]] and [[thm-quarter-turn-values-and-shift-formulas]]: sine is strictly increasing on $[0,\pi/2]$ and $\sin(\pi/2)=1$.

[F5] [[thm-of-square-roots]]: each nonnegative real has a unique nonnegative square root.

[F6] [[cor-archimedean-reciprocal]]: for every $\varepsilon>0$ there is an integer $n\ge1$ with $1/n<\varepsilon$. [[lem-of-naturals-positive]]: canonical positive naturals are positive and strictly increasing. [[lem-of-inverse-positive]]: reciprocation reverses strict order on positive reals. [[thm-algebra-of-limits]]: a fixed real multiple of a sequence converging to zero also converges to zero.

## Verification

1.1 The subtraction and addition identities [F2] give $x_j-x_{j+1}=2\sin\left(\frac{(2j+1)\pi}{2N}\right)\sin\left(\frac\pi{2N}\right),\qquad x_0-x_1=2\sin^2\left(\frac\pi{2N}\right).$ By [F3], $\sin(\pi/(2N))\le\pi/(2N)$, hence $x_0-x_1\le\pi^2/(2N^2)$. [F1, F2, F3, algebra]

2.1 If $N$ is odd, choose $j=(N-1)/2$; then $(2j+1)\pi/(2N)=\pi/2$ and [F4] gives sine equal to $1$, so the gap formula in step 1.1 and [F3] give a central gap at least $2/N\ge\sqrt2/N$. If $N$ is even, choose $j=N/2-1$ and write $t=\pi/2-\pi/(2N)\ge\pi/4$. The addition and subtraction formulas [F2] give $\sin(\pi/4)=\cos(\pi/4)$ and $2\sin(\pi/4)\cos(\pi/4)=\sin(\pi/2)=1$. Thus $\sin^2(\pi/4)=1/2$; the chord bound [F3] gives $\sin(\pi/4)\ge1/2>0$, so uniqueness of the nonnegative square root [F5] gives $\sin(\pi/4)=\sqrt2/2$. Monotonicity [F4] now gives $\sin t\ge\sqrt2/2$. In either parity, [F3] also gives $\sin(\pi/(2N))\ge1/N$, so the selected central gap in step 1.1 is at least $\sqrt2/N$. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 Put $a=\pi/(2N)$. Every adjacent gap has the form $2\sin((2j+1)a)\sin a$, with $a\le(2j+1)a\le\pi-a$. Reflecting about $\pi/2$ and using monotonicity [F4] gives $\sin((2j+1)a)\ge\sin a$; equality occurs at $j=0$ and $j=N-1$. Hence the smallest spacing is exactly $2\sin^2a$, and [F3] bounds it by $2/N^2\le2\sin^2a\le\pi^2/(2N^2)$. For every $\varepsilon>0$, [F6] supplies an integer $n\ge1$ with $1/n<\varepsilon$; for every integer $N\ge\max\{2,n\}$, positivity and monotonicity of the canonical naturals and reciprocal order give $0<1/N\le1/n<\varepsilon$. Thus $1/N\to0$, and the endpoint-to-central-gap ratio is at most $\pi^2/(2N)$, which tends to zero by the fixed-multiple limit law in [F6]. For $N\ge3$, the selected central angle, reflected into $[0,\pi/2]$ if necessary, is strictly larger than $a$; strict monotonicity in [F4] makes its gap larger than the endpoint gap. For $N=2$, the nodes are $1,0,-1$ and both gaps equal $1$. This proves the quadratic endpoint scale with its stated nonuniformity exception. [F2, F3, F4, F6, step 1.1, step 2.1, algebra] ∎
