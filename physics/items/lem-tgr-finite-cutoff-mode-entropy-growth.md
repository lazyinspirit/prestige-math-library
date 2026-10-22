---
id: lem-tgr-finite-cutoff-mode-entropy-growth
kind: lemma
title: Finite mode cutoffs can have unbounded entropy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-tgr-finite-cutoff-outside-entropy
  - def-qc-density-operator
  - def-qc-tensor-register-and-permutation
  - def-natural-logarithm
  - cor-exponential-reciprocal-and-positivity
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - def-real-numbers
  - cor-cauchy-reals-lub-complete
  - thm-of-archimedean
dependency_roles:
  def-tgr-finite-cutoff-outside-entropy: mathematical-premise
  def-qc-density-operator: mathematical-premise
  def-qc-tensor-register-and-permutation: mathematical-premise
  def-natural-logarithm: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-real-numbers: mathematical-premise
  cor-cauchy-reals-lub-complete: mathematical-premise
  thm-of-archimedean: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, section 5.2.1
      url: https://jhwatrous.github.io/TQI.5.pdf
    - title: John Preskill, Quantum Shannon Theory, Chapter 10, section 10.2
      url: https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf
---

## Statement

Fix a real number $k_B>0$. For each integer $N\ge1$, let $H_{\rm in}=\mathbb C$ with its standard inner product and basis $1$, and let $H_{{\rm out},N}=(\mathbb C^2)^{\otimes N}$ with the standard product inner product and product basis. Identify the product basis of $\mathbb C\otimes H_{{\rm out},N}$ with that of $H_{{\rm out},N}$. For the density operator $\rho_N=I_{2^N}/2^N$, where $I_{2^N}$ is the identity matrix on this $2^N$-dimensional space, the outside entropy is

$$ S_{\rm out}(\rho_N;\mathbb C,H_{{\rm out},N})=k_BN\log2, $$

which tends to $+\infty$ as $N\to\infty$.

## Statement references

[[def-tgr-finite-cutoff-outside-entropy]]

[[def-qc-density-operator]]

[[def-qc-tensor-register-and-permutation]]

[[def-natural-logarithm]]

[[cor-exponential-reciprocal-and-positivity]]

[[thm-exponential-addition-formula]]

[[thm-exponential-is-strictly-increasing]]

[[thm-of-archimedean]]

[Watrous, The Theory of Quantum Information, Chapter 5, section 5.2.1](https://jhwatrous.github.io/TQI.5.pdf)

[Preskill, Quantum Shannon Theory, Chapter 10, section 10.2](https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf)

## Facts & Assumptions

**Given:** A positive real $k_B$, an integer $N\ge1$, the one-dimensional input space $\mathbb C$, and the $N$-factor output space $(\mathbb C^2)^{\otimes N}$.

[F1] [[def-tgr-finite-cutoff-outside-entropy]]: the outside density is obtained by summing the diagonal blocks over an orthonormal basis of the input factor, and its entropy is $-k_B$ times the natural-log spectral sum.

[F2] [[def-qc-density-operator]]: a density operator on a nonzero finite-dimensional space is non-negative and has trace one.

[F3] [[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on $(0,\infty)$.

[F4] [[cor-exponential-reciprocal-and-positivity]]: for every real $x$, $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$.

[F5] [[def-real-exponential-function-and-e]]: the real exponential is defined by its power series; at input $0$, every positive-degree term vanishes and the zero-degree term is $1$, so $\exp(0)=1$.

[F6] [[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$.

[F7] [[thm-exponential-is-strictly-increasing]]: the real exponential is strictly increasing, hence injective.

[F8] In every complete ordered field $F$, for each $x\in F$ there is a natural number $n\ge1$ with $x<n\cdot1_F$ ([[thm-of-archimedean]]).

[F9] [[def-qc-tensor-register-and-permutation]]: tensoring the standard basis in each $\mathbb C^2$ factor gives the ordered product basis of $H_{{\rm out},N}$, so its dimension is $2^N$.

[F10] The library real numbers are the Cauchy-sequence quotient $\mathbb R=\mathcal C/\mathcal N$ ([[def-real-numbers]]), and this real field has the least-upper-bound property, so it is a complete ordered field ([[cor-cauchy-reals-lub-complete]]).

## Proof

1.1 The matrix $\rho_N=I_{2^N}/2^N$ is non-negative and has trace $2^N/2^N=1$, so it is a density operator by [F2] and [F9]. Since the input factor is one-dimensional, the defining partial trace in [F1] has one summand and gives $\rho_{{\rm out},N}=I_{2^N}/2^N$. [given, F1, F2, F9, algebra]

1.2 The spectrum of $\rho_{{\rm out},N}$ consists of $2^N$ copies of $2^{-N}$. For $N=1$, $\exp(N\log2)=2$ by [F3]; if $\exp(N\log2)=2^N$, [F6] gives $\exp((N+1)\log2)=\exp(N\log2)\exp(\log2)=2^{N+1}$. Induction yields $\exp(N\log2)=2^N$ for every $N\ge1$. By [F4], $\exp(-N\log2)=1/2^N=2^{-N}$, so [F3] and injectivity in [F7] give $\log(2^{-N})=-N\log2$. [given, F3, F4, F6, F7, algebra]

2.1 Substitution into [F1] gives $S_{\rm out}=-k_B\,2^N2^{-N}\log(2^{-N})=k_BN\log2$. Also $\log2>0$, because [F5] gives $\exp(0)=1<2=\exp(\log2)$ and [F7] is strictly increasing. [given, F1, F5, F7, step 1.2, algebra]

3.1 Let $c=k_B\log2>0$. For any real $M$, [F10] makes $\mathbb R$ a complete ordered field, so [F8] applied to $M/c$ supplies a natural number $N_0\ge1$ with $N_0>M/c$. For every integer $N\ge N_0$, step 2.1 gives $S_{\rm out}=cN\ge cN_0>M$, which is exactly convergence to $+\infty$. [given, F8, F10, step 2.1, algebra] ∎
