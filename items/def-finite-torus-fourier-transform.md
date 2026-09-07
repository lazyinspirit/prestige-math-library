---
id: def-finite-torus-fourier-transform
kind: definition
title: "Finite torus fourier transform"
status: draft
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §8.1.1 Definition8.4 and torus examples, p70."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Definition

On $V=(\mathbb Z/m\mathbb Z)^2$, $m\ge1$, let $\omega=e^{2\pi i/m}$ and $\chi_b(x)=\omega^{b_1x_1+b_2x_2}$. Residue representatives do not affect these values. With inner product $\langle f,g\rangle=m^{-2}\sum_x f(x)\overline{g(x)}$, define
$$\widehat f(b)=\langle f,\chi_b\rangle=m^{-2}\sum_x f(x)\omega^{-b\cdot x}.$$
The norm is $\|f\|^2=m^{-2}\sum_x|f(x)|^2$. At $m=1$ there is one character, the constant function one. The sign in the exponent is part of this convention.
