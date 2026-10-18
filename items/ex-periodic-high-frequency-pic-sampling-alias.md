---
id: ex-periodic-high-frequency-pic-sampling-alias
kind: example
title: A high Fourier mode aliases to a different periodic PIC grid force
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-periodic-pic-grid-and-inner-product
  - def-periodic-fourier-collocation-grid
  - lem-periodic-fourier-mode-aliasing-under-sampling
  - alg-periodic-fourier-collocation-differentiation-matrix
  - thm-periodic-fourier-collocation-differentiation-is-exact
proof_strategy: direct
axiom_use: No choice principle is used; all frequency calculations are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Chapter 2
      url: https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf
---

## Statement

On $\mathbb T_{2\pi}$, take the smooth source $\rho(x)=\cos(6x)$ and solve $-\phi''=\rho$ with zero mean. Its exact electric field $E=-\phi'$ is $E(x)=\frac16\sin(6x)$. On the five-node Fourier-collocation grid $x_j=2\pi j/5$, the sampled source is exactly $\cos(x_j)$. The mean-zero collocation solution is $\phi_N(x)=\cos x$, and the computed field is $E_N(x)=\sin x$. At every grid node, $E_N(x_j)=6E(x_j)$. This is a spectral-sampling aliasing example; it is not the centered finite-difference operator defined on the main PIC page.

## Facts & Assumptions

**Given:** The period $2\pi$, the mode $\rho(x)=\cos(6x)$, and the five-node periodic Fourier-collocation convention.

[F1] [[def-periodic-fourier-collocation-grid]]: the nodes are $x_j=2\pi j/N$ and the odd-$N$ interpolant contains modes $|k|\le (N-1)/2$.

[F2] [[lem-periodic-fourier-mode-aliasing-under-sampling]]: if $k\equiv r\pmod N$, then $e^{ikx_j}=e^{irx_j}$ at every node.

[F3] [[alg-periodic-fourier-collocation-differentiation-matrix]] and [[thm-periodic-fourier-collocation-differentiation-is-exact]]: the differentiation matrix differentiates the unique trigonometric interpolant exactly at its nodes.

## Proof

1.1 Since $6\equiv1\pmod5$, [F2] gives $e^{i6x_j}=e^{ix_j}$ for each $j$. Taking real parts yields $\rho(x_j)=\cos(x_j)$, whose unique odd-grid interpolant is $\cos x$ by [F1]. On the five-mode space $|k|\le2$, the collocation operator $-\partial_x^2$ multiplies mode $k$ by $k^2$, so its only zero mode is the constant. Therefore $\phi_N=\cos x$ is the unique zero-mean collocation solution to these sampled data. [F1, F2, given, algebra]

2.1 Direct differentiation gives $-\frac{d^2}{dx^2}\bigl(\cos(6x)/36\bigr)=\cos(6x)$ and $-\frac{d}{dx}\bigl(\cos(6x)/36\bigr)=\sin(6x)/6$. Since $\phi_N=\cos x$, exact collocation differentiation [F3], applied twice to its interpolant, gives computed field $E_N=\sin x$. At each node, $\sin(6x_j)=\sin(x_j+2\pi j)=\sin x_j$, so $E_N(x_j)=6E(x_j)$. [F1, F2, F3, step 1.1, algebra] ∎
