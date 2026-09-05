---
id: ex-fejer-means-of-a-single-character
kind: example
title: "Fejer means of a single character"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-cesaro-and-abel-means-of-a-fourier-series]
proof_strategy: direct
verification:
  precheck: pass
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
---

## Example

Let $k\in\mathbb Z$. For every $N\ge0$,

$$\sigma_Ne_k=\left(1-\frac{|k|}{N+1}\right)_+e_k.$$

## Facts & Assumptions

**Given:** An integer $k$ and an integer $N\ge0$.

[L1] The Cesaro means are defined by
$$\sigma_Nf=\frac1{N+1}\sum_{j=0}^N S_jf$$
([[def-cesaro-and-abel-means-of-a-fourier-series]]).

## Verification

**Proof technique:** direct.

1.1 The Fourier coefficients of $e_k$ vanish except at $k$, where the coefficient is $1$. Hence $$S_je_k=\begin{cases} 0, & j<|k|,\\ e_k, & j\ge |k|. \end{cases}$$ [L1, algebra]

2.1 If $|k|>N$, then every term in the Cesaro average from [L1] is $0$, so $\sigma_Ne_k=0$. If $|k|\le N$, then exactly $N+1-|k|$ of the terms equal $e_k$, and therefore $$\sigma_Ne_k=\frac{N+1-|k|}{N+1}e_k=\left(1-\frac{|k|}{N+1}\right)e_k.$$ This is the same as the displayed $(\cdot)_+$ formula, and for $N=0$ it gives $\sigma_0e_0=e_0$ and $\sigma_0e_k=0$ for $k\ne0$. [L1, step 1.1, algebra] ∎
