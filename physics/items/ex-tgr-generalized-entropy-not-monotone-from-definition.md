---
id: ex-tgr-generalized-entropy-not-monotone-from-definition
kind: example
title: Additive entropy definition does not imply monotonicity
status: draft
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
  - thm-exponential-is-strictly-increasing
dependency_roles:
  def-tgr-finite-cutoff-outside-entropy: mathematical-premise
  def-qc-density-operator: mathematical-premise
  def-qc-tensor-register-and-permutation: mathematical-premise
  def-natural-logarithm: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, section 5.2.1
      url: https://jhwatrous.github.io/TQI.5.pdf
    - title: John Preskill, Quantum Shannon Theory, Chapter 10, section 10.2
      url: https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf
---

## Example

Let $s\in\mathbb R$ be a fixed additive term, let $H_{\rm in}=\mathbb C$ with its standard inner product and basis $(1)$, and let $H_{\rm out}=\mathbb C^2$ with its standard inner product and orthonormal basis $(f_0,f_1)$. In the ordered product basis $(1\otimes f_0,1\otimes f_1)$, set the joint density matrices $\rho_0=\begin{pmatrix}1/2&0\\0&1/2\end{pmatrix}$ and $\rho_1=\begin{pmatrix}1&0\\0&0\end{pmatrix}$. On the ordered two-point set $\{0,1\}$ define $G(t):=s+S_{\rm out}(\rho_t;H_{\rm in},H_{\rm out})$. Then

$$ G(1)=G(0)-k_B\log2<G(0). $$

This is a finite matrix comparison for an additive definition; the labels $0,1$ do not describe a physical evolution.

## Example references

[[def-tgr-finite-cutoff-outside-entropy]]

[[def-qc-density-operator]]

[[def-qc-tensor-register-and-permutation]]

[[def-natural-logarithm]]

[[cor-exponential-reciprocal-and-positivity]]

[[thm-exponential-is-strictly-increasing]]

[Watrous, The Theory of Quantum Information, Chapter 5, section 5.2.1](https://jhwatrous.github.io/TQI.5.pdf)

[Preskill, Quantum Shannon Theory, Chapter 10, section 10.2](https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf)

## Facts & Assumptions

**Given:** The one-dimensional input space $\mathbb C$, the two-dimensional output space $\mathbb C^2$, a fixed real $s$, and $k_B>0$.

[F1] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is non-negative and has trace one.

[F2] [[def-tgr-finite-cutoff-outside-entropy]]: the outside density is the input-factor partial trace, and outside entropy is $-k_B$ times the finite natural-log spectral sum, with $0\log0=0$.

[F3] [[def-qc-tensor-register-and-permutation]]: the ordered tensor product of orthonormal factor bases is an orthonormal basis in the displayed factor order.

[F4] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on the positive reals.

[F5] [[cor-exponential-reciprocal-and-positivity]]: for every real $x$, $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$.

[F6] [[def-real-exponential-function-and-e]]: the real exponential is defined by its power series; at input $0$, every positive-degree term vanishes and the zero-degree term is $1$, so $\exp(0)=1$.

[F7] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing and therefore injective.

## Verification

1.1 Both displayed matrices are self-adjoint, non-negative, and trace one in the ordered product basis from [F3], so they are density operators by [F1]. [given, F1, F3, algebra]

2.1 Since $H_{\rm in}$ is one-dimensional, the partial trace in [F2] has one term and returns $\rho_t$. The eigenvalues of $\rho_0$ are $(1/2,1/2)$ and those of $\rho_1$ are $(1,0)$. [given, F2, F3, step 1.1, algebra]

3.1 By [F4]–[F7], $\log1=0$, $\log(1/2)=-\log2$, and $\log2>0$: the first follows from [F6], the second from [F5] and injectivity in [F7], and the third from $1=\exp(0)<2=\exp(\log2)$ by [F6] and [F7]. Therefore [F2] gives $S_{\rm out}(\rho_0)=k_B\log2$ and $S_{\rm out}(\rho_1)=0$. [given, F2, F4, F5, F6, F7, step 2.1, algebra]

4.1 The fixed term $s$ cancels, so $G(1)-G(0)=-k_B\log2<0$ by $k_B>0$ and step 3.1. Thus the additive definition alone does not force a nondecreasing value on these ordered data. [given, step 3.1, algebra] ∎
