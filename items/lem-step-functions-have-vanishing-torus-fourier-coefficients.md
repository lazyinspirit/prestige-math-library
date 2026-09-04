---
id: lem-step-functions-have-vanishing-torus-fourier-coefficients
kind: lemma
title: "Step functions on one period have vanishing Fourier coefficients"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
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

## Statement

Let $s$ be a step function on $[0,1)$, and extend it one-periodically to
$\mathbb R$. Then there is a constant $C \ge 0$ such that

$$|\widehat s(k)| \le \frac{C}{|k|} \qquad (k \ne 0).$$

In particular, $\widehat s(k) \to 0$ as $|k| \to \infty$.

## Facts & Assumptions

**Given:** A one-period step function $s$ on $[0,1)$.

[L1] Fourier coefficients on $\mathbb T$ are defined by $\widehat f(k)=\int_0^1 f(t)e^{-2\pi ikt}\,dt$ ([[def-period-one-fourier-coefficients-partial-sums-and-convolution]]).

## Proof

**Proof technique:** direct.

1.1 Write $s=\sum_{j=1}^m a_j\mathbf 1_{[x_{j-1},x_j)}$ for a partition $0=x_0<\cdots<x_m=1$. For $k \ne 0$, [L1, algebra] $$\widehat{\mathbf 1_{[x_{j-1},x_j)}}(k)=\int_{x_{j-1}}^{x_j} e^{-2\pi ikt}\,dt=\frac{e^{-2\pi ikx_{j-1}}-e^{-2\pi ikx_j}}{2\pi ik}.$$ Therefore $$\left|\widehat{\mathbf 1_{[x_{j-1},x_j)}}(k)\right|\le\frac{1}{\pi |k|}.$$ [L1, algebra]

2.1 By linearity, $$\widehat s(k)=\sum_{j=1}^m a_j\widehat{\mathbf 1_{[x_{j-1},x_j)}}(k).$$ Step 1.1 then gives $$|\widehat s(k)|\le\frac{1}{\pi |k|}\sum_{j=1}^m |a_j|.$$ Taking $C:=\pi^{-1}\sum_{j=1}^m|a_j|$ proves the displayed bound. [step 1.1, algebra]

3.1 Since $C/|k| \to 0$ as $|k| \to \infty$, step 2.1 yields $\widehat s(k)\to0$. [step 2.1, algebra] ∎
