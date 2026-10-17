---
id: ex-periodic-fourier-collocation-exactness-and-nyquist-mode
kind: example
title: "Four-point Fourier collocation differentiates the Nyquist cosine at its nodes"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 3
deps: [def-periodic-fourier-collocation-grid, alg-periodic-fourier-collocation-differentiation-matrix, thm-periodic-fourier-collocation-differentiation-is-exact, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-chain-rule, thm-algebra-of-derivatives]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §2.2"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 79–83 / PDF pp. 85–89; even periodic grids and Fourier differentiation."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 7"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 7, printed pp. 231–244 (complete book PDF); even-grid periodic interpolation and differentiation."
generation:
  role: example
---

## Example

Take $N=4$ and $p(x)=1+2\cos x+3\sin x-4\cos(2x)$ on the grid $x_j=\pi j/2$. Its samples are $U=(-1,8,-5,2)$. The interpolating space contains the Nyquist cosine $\cos(2x)$, while the derivative matrix omits that mode's derivative because it vanishes at every grid point. The returned derivative vector is $(3,-2,-3,2)$.

## Facts & Assumptions

**Given:** The four-point periodic Fourier grid, the real interpolant convention, and the polynomial $p$.

[F1] [[def-periodic-fourier-collocation-grid]]: for even $N=4$ the interpolation space contains $1,\cos x,\sin x,\cos(2x)$ and uses the cosine Nyquist mode only.

[F2] [[thm-quarter-turn-values-and-shift-formulas]]: the sine and cosine values at integer multiples of $\pi/2$ are $0,\pm1$.

[F3] [[thm-sine-and-cosine-derivatives]] and [[thm-chain-rule]]: $(\cos(kx))'=-k\sin(kx)$ and $(\sin(kx))'=k\cos(kx)$.

[F5] [[thm-algebra-of-derivatives]]: derivatives distribute over finite sums and scalar multiples.

[F4] [[thm-periodic-fourier-collocation-differentiation-is-exact]]: the matrix output on nodal data equals the derivative of their periodic trigonometric interpolant at every grid point, with the Nyquist derivative zero at the nodes.

## Proof

1.1 Substitution of $x_0=0,x_1=\pi/2,x_2=\pi,x_3=3\pi/2$ into $p$ using [F2] gives respectively $-1,8,-5,2$. The frequencies $0,1,2$ lie in [F1]'s interpolation space, so $p$ is the interpolant of these samples. [given, F1, F2, algebra]

1.2 By [F3] and [F5], $p'(x)=-2\sin x+3\cos x+8\sin(2x)$. At the four nodes, the final term is zero and the first two terms give $3,-2,-3,2$. [given, F2, F3, F5, algebra]

2.1 Exactness [F4] therefore gives $D_4U=(3,-2,-3,2)$, including the vanishing nodal derivative of the Nyquist mode. [F1, F4, step 1.1, step 1.2] ∎

