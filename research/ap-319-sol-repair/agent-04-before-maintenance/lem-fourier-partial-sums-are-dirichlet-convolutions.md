---
id: lem-fourier-partial-sums-are-dirichlet-convolutions
kind: lemma
title: "Fourier partial sums are Dirichlet convolutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution, def-dirichlet-and-fejer-kernels]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $f$ be a one-period integrable function on $\mathbb R$. Then for every
$N \ge 0$ and every $x \in \mathbb R$,

$$S_Nf(x) = \int_0^1 f(x-t)D_N(t)\,dt = (f*D_N)(x).$$

## Facts & Assumptions

**Given:** A one-period integrable function $f$, an integer $N \ge 0$, and a real $x$.

[L1] Fourier coefficients, Fourier partial sums, and torus convolution are defined exactly as in [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

[L2] The Dirichlet kernel is $D_N(t)=\sum_{|k|\le N}e_k(t)$, where $e_k(t)=e^{2\pi i kt}$ ([[def-dirichlet-and-fejer-kernels]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the convolution against the finite sum [L1, L2, algebra] gives $$\int_0^1 f(x-t)D_N(t)\,dt = \sum_{|k|\le N}\int_0^1 f(x-t)e^{2\pi ikt}\,dt.$$ [L1, L2, algebra]

2.1 For each $k$, substitute $u=x-t$. Then $$\int_0^1 f(x-t)e^{2\pi ikt}\,dt = e^{2\pi ikx}\int_{x-1}^x f(u)e^{-2\pi iku}\,du.$$ The integrand $u \mapsto f(u)e^{-2\pi iku}$ is one-periodic, so its integral over $[x-1,x]$ equals its integral over $[0,1]$, namely $\widehat f(k)$. Therefore $$\int_0^1 f(x-t)e^{2\pi ikt}\,dt = \widehat f(k)e_k(x).$$ [L1, step 1.1, algebra]

3.1 Summing step 2.1 over $|k|\le N$ yields $$\int_0^1 f(x-t)D_N(t)\,dt = \sum_{|k|\le N}\widehat f(k)e_k(x) = S_Nf(x).$$ By [L1], the integral is also $(f*D_N)(x)$. [L1, step 2.1, algebra] ∎
