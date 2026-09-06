---
id: def-wiener-algebra-of-the-circle
kind: definition
title: "The Wiener algebra of the circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes, Chapter 4"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, Definition 3.3.15"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Definition

With the Fourier convention of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]], define
$$A(\mathbb T):=\left\{f\in L^1(\mathbb T):\sum_{k\in\mathbb Z}|\widehat f(k)|<\infty\right\}.$$
Its Wiener norm is $\|f\|_A:=\sum_{k\in\mathbb Z}|\widehat f(k)|$. Functions
in this definition are initially $L^1$-classes. Assuming the Axiom of
Countable Choice, the later
[[lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]]
supplies their distinguished continuous representatives.
