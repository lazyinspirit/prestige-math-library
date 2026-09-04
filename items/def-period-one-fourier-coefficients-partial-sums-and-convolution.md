---
id: def-period-one-fourier-coefficients-partial-sums-and-convolution
kind: definition
title: "Period-one Fourier coefficients, partial sums, and convolution on the torus"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
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

Write $\mathbb T := \mathbb R / \mathbb Z$ and represent a function on
$\mathbb T$ by a one-periodic function on $\mathbb R$.

For $k \in \mathbb Z$, define the $k$-th character
$e_k(x) := e^{2\pi i kx}$.

If $f$ is integrable on one period, its Fourier coefficients are

$$\widehat f(k) := \int_0^1 f(t)e^{-2\pi i kt}\,dt \qquad (k \in \mathbb Z).$$

For $N \ge 0$, the $N$-th Fourier partial sum of $f$ is

$$S_Nf(x) := \sum_{|k| \le N}\widehat f(k)e_k(x).$$

A **trigonometric polynomial** on $\mathbb T$ is a finite linear combination of
the characters $e_k$.

If $f,g \in L^1(\mathbb T)$, their convolution is the $L^1(\mathbb T)$ class
defined for almost every $x$ by

$$(f*g)(x) := \int_0^1 f(x-t)g(t)\,dt,$$

where $f$ and $g$ are read as one-periodic representatives. More precisely,
the integrand is absolutely integrable for almost every $x$, and the displayed
formula gives an almost-everywhere-defined integrable function whose class is
independent of the chosen representatives. When one factor is bounded, as for
the Dirichlet kernels below, the integral exists at every $x$ for which the
other representative is integrable on one period.
