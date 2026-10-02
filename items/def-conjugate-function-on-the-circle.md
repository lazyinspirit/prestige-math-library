---
id: def-conjugate-function-on-the-circle
kind: definition
title: Conjugate function on the circle
status: published
origin: pipeline
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 10, Definition 10.1, printed p. 57"
---

## Definition

Work on the torus $\mathbb T=\mathbb R/\mathbb Z$ with the conventions of
[[def-period-one-fourier-coefficients-partial-sums-and-convolution]]: the
characters are $e_k(x)=e^{2\pi ikx}$ for $k\in\mathbb Z$, the Fourier
coefficients of a one-period integrable $f$ are
$\widehat f(k)=\int_0^1f(t)e^{-2\pi ikt}\,dt$, and a trigonometric polynomial
is a finite complex linear combination of characters.

Let $f=\sum_{|k|\le M}c_ke_k$ be a trigonometric polynomial, so that
$\widehat f(k)=c_k$ for $|k|\le M$ and $\widehat f(k)=0$ for $|k|>M$. The
**conjugate function** of $f$ is the trigonometric polynomial

$$Cf:=\sum_{0<|k|\le M}\bigl(-i\operatorname{sgn}(k)\bigr)\widehat f(k)\,e_k,\qquad \operatorname{sgn}(k):=\begin{cases}1,&k>0,\\0,&k=0,\\-1,&k<0.\end{cases}$$

Equivalently, $Cf$ is the unique trigonometric polynomial whose Fourier
coefficients are

$$\widehat{Cf}(k)=-i\operatorname{sgn}(k)\,\widehat f(k)\qquad(k\in\mathbb Z).$$

Consequently $\widehat{Cf}(0)=0$: every constant trigonometric polynomial lies
in the kernel of $C$.

The assignment $C$ is complex-linear on the space of trigonometric
polynomials. It also preserves real-valuedness: if $f$ is real, then
$\widehat f(-k)=\overline{\widehat f(k)}$ for every $k$, and
$-i\operatorname{sgn}(-k)\overline{\widehat f(k)}
=\overline{-i\operatorname{sgn}(k)\widehat f(k)}$, so $\widehat{Cf}$ has the
conjugate symmetry that characterizes a real trigonometric polynomial.

Two conventions are fixed by this definition. The factor $-i$ and the sign
refer to the characters $e_k(x)=e^{2\pi ikx}$ and to the coefficient
convention above; conjugating real functions, as in $f\mapsto -C f$, is the
opposite sign convention. And $C$ is defined on trigonometric polynomials
alone: no bound on any $L^p(\mathbb T)$ norm and no extension to arbitrary
integrable functions is asserted here. The extension to $L^p(\mathbb T)$ for
$1<p<\infty$ is proved on this page after the kernel formula below.
