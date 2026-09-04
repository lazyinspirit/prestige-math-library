---
id: def-dirichlet-and-fejer-kernels
kind: definition
title: "Dirichlet and Fejer kernels"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Definition

For $N \ge 0$, the **Dirichlet kernel** on $\mathbb T$ is

$$D_N(t) := \sum_{|k| \le N} e_k(t).$$

The **Fejer kernel** is the arithmetic mean

$$F_N(t) := \frac{1}{N+1}\sum_{j=0}^N D_j(t).$$

Equivalently,

$$D_N(t) = 1 + 2\sum_{k=1}^N \cos(2\pi kt),$$

so $D_N$ is real-valued and even. Also

$$\int_0^1 D_N(t)\,dt = 1,$$

because every nonconstant character has integral $0$ over one period.
