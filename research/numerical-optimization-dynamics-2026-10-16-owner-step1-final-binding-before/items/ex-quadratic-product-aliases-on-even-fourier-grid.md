---
id: ex-quadratic-product-aliases-on-even-fourier-grid
kind: example
title: "A quadratic Fourier product aliases two high modes on an even grid"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 2
deps: [def-periodic-fourier-collocation-grid, lem-periodic-fourier-mode-aliasing-under-sampling, thm-sine-and-cosine-addition-formulas, thm-quarter-turn-values-and-shift-formulas]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Benjamin Seibold, MIT 18.336 Lecture 24: Pseudospectral Methods"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/f37c267439433cc6f62b0dec078e3d4f_MIT18_336S09_lec24.pdf"
      locator: "Complete four-page note, PDF pp. 1–2; Fourier pseudospectral products and the 2/3 truncation discussion."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 7"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 7, printed pp. 231–244 (complete book PDF); periodic Fourier modes, sampling and nonlinear products."
---

## Example

On the $N=4$ periodic grid, let $p(x)=\cos x+\cos(2x)$. The continuous square has modes through frequency four, but its grid interpolant is
$$
I_4(p^2)=\frac32+2\cos x+\frac12\cos(2x).
$$
The frequency-three mode aliases to frequency one, and the frequency-four mode aliases to the constant mode. This exact sample identity is not a de-aliasing or nonlinear stability result.

## Facts & Assumptions

**Given:** The four-point grid $x_j=\pi j/2$, the interpolant convention, and $p(x)=\cos x+\cos(2x)$.

[F1] [[def-periodic-fourier-collocation-grid]]: for $N=4$, the interpolation space is spanned over $\mathbb R$ by $1,\cos x,\sin x,\cos(2x)$.

[F2] [[lem-periodic-fourier-mode-aliasing-under-sampling]]: modes whose integer frequencies are congruent modulo $4$ have the same samples, and sampled products have frequency equal to the sum modulo $4$.

[F3] [[thm-sine-and-cosine-addition-formulas]]: $\cos u\cos v=\frac12(\cos(u+v)+\cos(u-v))$.

[F4] [[thm-quarter-turn-values-and-shift-formulas]]: on $x_j=\pi j/2$, $\cos(4x_j)=1$ and $\cos(3x_j)=\cos(x_j)$.

## Proof

1.1 By [F3], $p(x)^2=\cos^2x+2\cos x\cos(2x)+\cos^2(2x)=1+\cos x+\frac12\cos(2x)+\cos(3x)+\frac12\cos(4x).$ [F3, algebra]

2.1 At every grid node [F4] turns this into $p(x_j)^2=\frac32+2\cos(x_j)+\frac12\cos(2x_j)$. The right side belongs to [F1]'s interpolation space. [given, F1, F4, step 1.1, algebra]

3.1 The modes at frequencies $3$ and $4$ in step 1.1 are identified on the grid by the congruences $3\equiv-1\pmod4$ and $4\equiv0\pmod4$, exactly as [F2] states. Thus the displayed interpolant has the same samples as $p^2$, with the two alias contributions combined. [F1, F2, step 1.1, step 2.1, algebra] ∎

