---
id: fs-pointwise-integrable-generator-constants-imply-locally-lipschitz-wgan-loss
kind: false-statement
title: "FALSE: pointwise-integrable generator constants imply a locally Lipschitz WGAN loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-compact-metric-wasserstein-one
  - def-probability-measure
  - thm-geometric-series
  - thm-monotone-convergence-for-the-integral
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - lem-dirac-integral-evaluation
justified_by: []
proof_strategy: explicit counterexample
axiom_use: "No choice principle is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Arjovsky, Chintala and Bottou, Wasserstein GAN; Assumption 1 and Appendix C, physical PDF pp. 20–21 and 24–25"
      url: https://arxiv.org/pdf/1701.07875
---

## Statement

Let $X=([0,1],|x-y|)$, let $g:\mathbb R\times\mathbb R\to[0,1]$ be jointly locally Lipschitz, and write $g_\theta(z):=g(\theta,z)$. Let $\rho$ be a Borel probability measure on latent $\mathbb R$. Suppose for every $(\theta,z)$ there is a finite local joint Lipschitz constant $L(\theta,z)\ge0$ and an open neighborhood $U_{\theta,z}$ on which
$$
|g(\theta_1,z_1)-g(\theta_2,z_2)|\le L(\theta,z)(|\theta_1-\theta_2|+|z_1-z_2|)
$$
for all $(\theta_1,z_1),(\theta_2,z_2)\in U_{\theta,z}$. Assume for every $\theta$ that $z\mapsto L(\theta,z)$ is Borel measurable and $\int_{\mathbb R}L(\theta,z)\,d\rho(z)<+\infty$. Define the pushforward probability $P_\theta(B):=\rho(\{z:g_\theta(z)\in B\})$ for Borel $B\subseteq[0,1]$, and let $V(\theta):=W_1^X(\delta_0,P_\theta)$. The proposed implication is that $V$ is locally Lipschitz at every parameter.

## Statement references

[[def-compact-metric-wasserstein-one]]

[Arjovsky et al.](https://arxiv.org/pdf/1701.07875), Assumption 1 and the local-Lipschitz inference in Appendix C, physical PDF pp. 20–21. The counterexample below refutes that inference, not the separate assertion of almost-everywhere differentiability.

## Facts & Assumptions

**Given:** The proposed implication and the explicit construction below; all indices start at $n=1$.

[F1] The geometric series starting at $n=1$ satisfies $\sum_{n=1}^\infty2^{-n}=1$. [[thm-geometric-series]]

[F2] Increasing nonnegative measurable functions pass to the limit under the integral. [[thm-monotone-convergence-for-the-integral]]

[F3] The compact-space Wasserstein cost is the infimum of coupling costs with the prescribed Borel marginals. [[def-compact-metric-wasserstein-one]]

[F4] A Dirac measure is a probability measure and integrates a nonnegative measurable function by evaluation at its point. [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]] [[lem-dirac-integral-evaluation]]

[F5] A probability measure is countably additive with total mass one. [[def-probability-measure]]

## Refutation

**Given:** The proposed implication in the Statement.

1.1 Set $a_n=4^{-n}$, $b_n=64^{-n}$, $p_n=2^{-n}$, $t_n(\theta)=\max\{1-|\theta-a_n|/b_n,0\}$ and $u_n(z)=\max\{1-4|z-n|,0\}$. Put $g_\theta(z)=\sum_{n\ge1}u_n(z)t_n(\theta)$ and $\rho(A)=\sum_{n\ge1}p_n\mathbf1_A(n)$ for Borel $A$. The nonnegative-series formula is countably additive: for disjoint sets, equality holds first for finite partial sums and then by taking suprema of finite sums of nonnegative terms. By [F1] its total mass is one. Each $g_\theta$ is Borel because the sum is pointwise a limit of continuous partial sums. [given, F1, F5, construct, algebra]

2.1 On every bounded latent neighborhood only finitely many $u_n$ are nonzero, and the supports $[n-1/4,n+1/4]$ are disjoint. Each factor is bounded by one, $u_n$ is $4$-Lipschitz and $t_n$ is $b_n^{-1}$-Lipschitz. Thus each product is jointly Lipschitz with respect to $|\theta-\theta'|+|z-z'|$, and the locally finite sum is jointly locally Lipschitz and takes values in $[0,1]$. [step 1.1, algebra]

3.1 Write $I_n=[a_n-b_n,a_n+b_n]$. These intervals are pairwise disjoint: $a_n-a_{n+1}=3a_n/4$, while $b_n+b_{n+1}=(65/64)b_n\le(65/1024)a_n<3a_n/4$. The measurable function $L(\theta,z)=\sum_{n\ge1}(4+b_n^{-1})\mathbf1_{I_n}(\theta)\mathbf1_{(n-1/2,n+1/2)}(z)$ supplies a local joint Lipschitz constant at every $(\theta,z)$. If $\theta\notin I_n$, a small parameter neighborhood misses $I_n$; if $z$ is outside all active latent supports, a small latent neighborhood makes the function zero. At support boundaries the displayed positive constant bounds the piecewise-linear product. At a fixed $\theta$ at most one $I_n$ is active, so $\int L(\theta,z)\,d\rho(z)$ is either zero or the finite number $p_n(4+b_n^{-1})$. In particular it is zero at $\theta=0$. [step 1.1, step 2.1, algebra]

4.1 Let $P_\theta=(g_\theta)_\#\rho$. Any coupling of $\delta_0$ and $P_\theta$ is concentrated on $\{0\}\times[0,1]$, so its cost is $\int x\,dP_\theta(x)$; the pushforward of $P_\theta$ under $x\mapsto(0,x)$ is such a coupling. Evaluation on the atoms, extended from finite sums by [F2], therefore gives $V(\theta)=\sum_{n\ge1}p_n t_n(\theta)$ by [F3]–[F4]. Consequently $V(0)=0$ and $V(a_n)=p_n$, so $V(a_n)/a_n=2^n\to\infty$. No finite local Lipschitz constant at zero is possible. [F2, F3, F4, step 1.1, step 3.1, algebra]

5.1 A common-neighborhood integrable envelope at zero would satisfy $K(n)\ge1/a_n=4^n$ for all sufficiently large $n$, by comparing parameters $0,a_n$. Then $\int K\,d\rho\ge\sum_{n\ge N}2^n=+\infty$, contradicting integrability. Thus the missing common-neighborhood premise is real. This witness is smooth off the countable set of triangular corners and zero, so it makes no claim to refute almost-everywhere differentiability. [F2, step 3.1, step 4.1, algebra] ∎
