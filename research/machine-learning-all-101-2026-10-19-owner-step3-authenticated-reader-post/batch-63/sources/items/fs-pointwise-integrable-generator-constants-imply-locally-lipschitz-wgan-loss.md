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
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - def-nonnegative-extended-series
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
  - thm-change-of-variables-for-expectation
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
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

[F4] The Dirac set function at $0$ is a probability measure. [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]]

[F5] A probability measure is countably additive with total mass one. [[def-probability-measure]]

[F6] A measurable random element has a probability law, and integration against its law equals integration after composition with the random element. [[def-random-element-and-real-random-variable]] [[def-law-or-distribution-of-a-random-element]] [[lem-law-of-a-random-element-is-a-probability-measure]] [[thm-change-of-variables-for-expectation]]

[F7] Nonnegative measurable functions admit increasing simple approximations; the nonnegative integral agrees with the finite-sum simple integral on simple functions; a nonnegative extended series is the supremum of its finite partial sums. [[def-nonnegative-simple-measurable-function]] [[def-integral-of-a-nonnegative-simple-function]] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]] [[def-nonnegative-extended-series]]

## Refutation

**Given:** The proposed implication in the Statement.

1.1 Set $a_n=4^{-n}$, $b_n=64^{-n}$, $p_n=2^{-n}$, $t_n(\theta)=\max\{1-|\theta-a_n|/b_n,0\}$ and $u_n(z)=\max\{1-4|z-n|,0\}$. Put $g_\theta(z)=\sum_{n\ge1}u_n(z)t_n(\theta)$ and $\rho(A)=\sum_{n\ge1}p_n\mathbf1_A(n)$ for Borel $A$. The nonnegative-series formula is countably additive: for disjoint sets, equality holds first for finite partial sums and then by taking suprema of finite sums of nonnegative terms. By [F1] its total mass is one. Each $g_\theta$ is Borel because the sum is pointwise a limit of continuous partial sums. [given, F1, F5, construct, algebra]

2.1 On every bounded latent neighborhood only finitely many $u_n$ are nonzero, and the supports $[n-1/4,n+1/4]$ are disjoint. Each factor is bounded by one, $u_n$ is $4$-Lipschitz and $t_n$ is $b_n^{-1}$-Lipschitz. Thus each product is jointly Lipschitz with respect to $|\theta-\theta'|+|z-z'|$, and the locally finite sum is jointly locally Lipschitz and takes values in $[0,1]$. [step 1.1, algebra]

3.1 Write $I_n=[a_n-b_n,a_n+b_n]$. These intervals are pairwise disjoint: $a_n-a_{n+1}=3a_n/4$, while $b_n+b_{n+1}=(65/64)b_n\le(65/1024)a_n<3a_n/4$. The measurable function $L(\theta,z)=\sum_{n\ge1}(4+b_n^{-1})\mathbf1_{I_n}(\theta)\mathbf1_{(n-1/2,n+1/2)}(z)$ supplies a local joint Lipschitz constant at every $(\theta,z)$. If $\theta\notin I_n$, a small parameter neighborhood misses $I_n$; if $z$ is outside all active latent supports, a small latent neighborhood makes the function zero. At support boundaries the displayed positive constant bounds the piecewise-linear product. At a fixed $\theta$ at most one $I_n$ is active, so $\int L(\theta,z)\,d\rho(z)$ is either zero or the finite number $p_n(4+b_n^{-1})$. In particular it is zero at $\theta=0$. [step 1.1, step 2.1, algebra]

4.1 Let $\iota(y)=(0,y)$ and let $\gamma_\theta=\iota_\#P_\theta$. The map $\iota$ is continuous in the product topology, so [F6] makes $\gamma_\theta$ a Borel probability; for every Borel $A\subseteq X$ its marginals satisfy $\gamma_\theta(A\times X)=\mathbf1_{\{0\in A\}}=\delta_0(A)$ and $\gamma_\theta(X\times A)=P_\theta(A)$, so it is a coupling. If $\gamma$ is any coupling and $C\subseteq X\times X$ is Borel, set $B_C=\iota^{-1}(C)$, which is Borel by continuity. The first marginal gives $\gamma((X\setminus\{0\})\times X)=0$, so $\gamma(C)=\gamma(C\cap(\{0\}\times X))=\gamma(\{0\}\times B_C)$. It also gives $\gamma((X\setminus\{0\})\times B_C)=0$, and the second marginal gives $\gamma(X\times B_C)=P_\theta(B_C)$; hence $\gamma(\{0\}\times B_C)=P_\theta(B_C)=\gamma_\theta(C)$. Thus this coupling is unique, and [F6] gives its cost as $\int_X y\,dP_\theta(y)=\int g_\theta\,d\rho$. For any nonnegative simple $s=\sum_jc_j\mathbf1_{A_j}$, the definition of $\rho$ and the simple-integral formula give $\int s\,d\rho=\sum_n p_ns(n)$, since the finite sum over $j$ commutes with the nonnegative series. Choose simple $s_k\uparrow g_\theta$; [F2] and [F7] give $\int g_\theta\,d\rho=\lim_k\sum_n p_ns_k(n)=\sum_n p_ng_\theta(n)$, where the last equality follows by taking suprema over finite partial sums and over $k$. Since $g_\theta(n)=t_n(\theta)$ and the parameter intervals in step 3.1 are disjoint, at most one term is nonzero. Therefore $V(\theta)=\sum_{n\ge1}p_nt_n(\theta)$. Consequently $V(0)=0$ and $V(a_n)=p_n$, so $V(a_n)/a_n=2^n\to\infty$. No finite local Lipschitz constant at zero is possible. [F2, F3, F4, F6, F7, step 1.1, step 3.1, algebra]

5.1 A common-neighborhood generator envelope at zero would provide a measurable full-measure set $E$ and an integrable $K$ such that the envelope inequality holds for every $z\in E$ and all parameters in one neighborhood $U$. Since $\rho(\{n\})=p_n>0$ and $\rho(E^c)=0$, every integer $n$ lies in $E$. For all sufficiently large $n$, $a_n\in U$, and comparison of parameters $0,a_n$ at $z=n$ gives $K(n)\ge |g_{a_n}(n)-g_0(n)|/a_n=1/a_n=4^n$. By [F7], $\int K\,d\rho=\sum_n p_nK(n)\ge\sum_{n\ge N}2^n=+\infty$, contradicting integrability. Thus the missing common-neighborhood premise is real. This witness is smooth off the countable set of triangular corners and zero, so it makes no claim to refute almost-everywhere differentiability. [F7, step 1.1, step 2.1, algebra] ∎
