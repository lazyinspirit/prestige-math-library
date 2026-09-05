---
id: def-cesaro-and-abel-means-of-a-fourier-series
kind: definition
title: "Cesaro and Abel means of a Fourier series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution, def-dirichlet-and-fejer-kernels]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Definition

Let $f$ be integrable on one period.

For $N \ge 0$, the **Cesaro mean** (or **Fejer mean**) of order $N$ of the
Fourier series of $f$ is

$$\sigma_N f(x) := \frac{1}{N+1}\sum_{j=0}^N S_jf(x).$$

Because [[def-dirichlet-and-fejer-kernels]] defines
$$F_N(t)=\frac{1}{N+1}\sum_{j=0}^N D_j(t),$$
and [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]
defines convolution and partial sums, one has

$$\sigma_N f = f * F_N.$$

For $0 \le r < 1$, the series

$$P_r(t) := \sum_{k \in \mathbb Z} r^{|k|} e_k(t)$$

converges absolutely and uniformly on $\mathbb T$, because
$$\sum_{k\in\mathbb Z}\bigl|r^{|k|}e_k(t)\bigr|=\sum_{k\in\mathbb Z}r^{|k|}<\infty.$$
The **Abel mean** of the Fourier series of $f$ is

$$A_r f(x) := \sum_{k \in \mathbb Z} r^{|k|}\widehat f(k)e_k(x).$$

Because $|\widehat f(k)|\le\int_0^1|f(t)|\,dt$, this series also converges
absolutely and uniformly in $x$. Therefore termwise integration against the
absolutely convergent kernel series gives

$$A_r f = f * P_r.$$
