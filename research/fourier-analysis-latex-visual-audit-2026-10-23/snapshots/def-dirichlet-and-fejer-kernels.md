---
id: def-dirichlet-and-fejer-kernels
kind: definition
title: "Dirichlet and Fejer kernels"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (def-dirichlet-and-fejer-kernels). No independent judge or whole-closure certification.
    delegated_by: owner
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

where this is the ordinary Riemann integral of the continuous finite sum.
Every nonconstant character has Riemann integral $0$ over one period. Under
Countable Choice it agrees with the torus Lebesgue integral in
[[def-period-one-fourier-coefficients-partial-sums-and-convolution]].
