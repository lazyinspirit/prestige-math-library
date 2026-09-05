---
id: cex-fejer-means-need-not-converge-uniformly-for-discontinuous-data
kind: counterexample
title: "Fejer means need not converge uniformly for discontinuous data"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
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

## Statement refuted

For every one-periodic integrable function $f$, the Fejer means $\sigma_Nf$
converge uniformly to $f$.

## Facts & Assumptions

**Given:** The one-periodic step function $$f(x):=\begin{cases} 1, & 0<x<1/2,\\ 0, & -1/2<x<0, \end{cases}$$ with $f(0)=f(1/2)=0$.

[L1] The Fejer means are averages of the Fourier partial sums ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

## Counterexample

**Proof technique:** direct.

1.1 For each $N$, the function $S_jf$ is a trigonometric polynomial for every $0\le j\le N$, so [L1] makes $\sigma_Nf$ a trigonometric polynomial as well. In particular, every $\sigma_Nf$ is continuous. [L1, algebra]

2.1 If $\sigma_Nf$ converged uniformly to $f$, then the uniform limit of the continuous functions $\sigma_Nf$ would be continuous. But the chosen $f$ has a jump at $0$, so it is discontinuous. Therefore uniform convergence to $f$ is impossible. This single step function refutes the universal statement. [step 1.1, algebra] ∎
