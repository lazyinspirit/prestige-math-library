---
id: lem-smc-centered-filtering-feynman-kac-contraction
kind: lemma
title: "Centered filtering Feynman–Kac operators contract terminal tests"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - def-dobrushin-coefficient-for-probability-kernels
  - lem-dobrushin-contraction-from-density-ratios
  - cor-layer-cake-formulas-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
axiom_use: "AC is inherited through the SMC law and Radon–Nikodym conventions. The specified positive density versions and finite kernel calculations make no additional choice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
      locator: "Normalized future-kernel proof route; the explicit corrected domination and version hypotheses are stated locally, not inferred from the source's insufficient displayed weight bound."
---

## Statement

Let $\mathsf X$ be a nonempty standard-Borel space with a sigma-finite reference measure $\lambda$, and let $\eta_0$ be a probability on it. For $s\ge1$, supply jointly measurable, strictly positive finite densities $g_s(z\mid x)$ of probability transition kernels relative to $\lambda$, and measurable likelihood factors $f_s$ with $0<a\le f_s(z)\le b<\infty$. These specified versions satisfy, for one $C\ge1$ and every $s,x,x',z$,
$$g_s(z\mid x)\le Cg_s(z\mid x').$$
Define $c_s=\eta_{s-1}(g_sf_s)$, $\eta_s(h)=\eta_{s-1}(g_s(f_sh))/c_s$, and $E_sh(x)=g_s(f_sh)(x)/c_s$. They are the operators of [[def-smc-clt-function-classes-and-variance-recursions]] restricted to last-state tests in the corresponding filtering model. Put $\rho=1-C^{-2}$. For every bounded measurable real terminal test $\psi$ and $0\le k<t$,
$$\|E_{k+1:t}(\psi-\eta_t\psi)\|_\infty\le C\rho^{t-k}\operatorname{osc}(\psi).$$
For $k=t$ the identity image is bounded by $\operatorname{osc}(\psi)$; use $\rho^n=0$ for $n\ge1$ when $C=1$. This is a closed last-state-test assertion, not a contraction of arbitrary functions of the full stored path. Positivity, finiteness and the ratio bounds refer to the supplied pointwise density versions, not to unspecified unrelated null-set versions.

## Facts & Assumptions

**Given:** The specified positive finite density versions, probability transitions, initial probability, uniform row ratio and likelihood bounds, and bounded terminal test in the Statement.

[F1] [[thm-measurability-of-integration-against-a-kernel]]: a nonnegative measurable function integrated against a probability kernel has a measurable section integral.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative measurable product integrals equal their iterated integrals.

[F3] [[lem-dobrushin-contraction-from-density-ratios]]: normalized probability-kernel density rows with ratio at most $R$ have Dobrushin coefficient at most $1-R^{-1}$.

[F4] [[def-dobrushin-coefficient-for-probability-kernels]]: the coefficient is the supremum event-supremum total-variation distance between two output laws.

[F5] [[cor-layer-cake-formulas-for-random-variables]]: for a nonnegative bounded random variable $U\le1$, $EU=\int_0^1P(U>r)dr$.

## Proof

1.1 Fix $k<t$. Define $Q_{j,t}h(x)$ by iterating the kernels $g_{j+1},\ldots,g_t$, multiplying by $f_{j+1},\ldots,f_t$, and evaluating $h$ at the final state. Put $H_{j,t}=Q_{j,t}1$ and $H_{t,t}=1$. Measurability follows from [F1], while probability normalization and the bounds on $f_s$ give $a^{t-j}\le H_{j,t}\le b^{t-j}$. Comparing the first transition row gives $H_{j,t}(x)\le C H_{j,t}(x')$ for $j<t$. Consequently $r_{k,t}:=H_{k,t}/\eta_k(H_{k,t})$ is positive, at most $C$, and has $\eta_k$-mean one. [F1, given, construct, algebra]

1.2 For $j=k+1,\ldots,t$, set $L_{j,t}(x,dz)=g_j(z\mid x)f_j(z)H_{j,t}(z)\lambda(dz)/H_{j-1,t}(x)$. The recursion for $H$ shows that these are probability kernels, with strictly positive finite denominators. The ratio of two of their density rows is $[g_j(z\mid x)/g_j(z\mid x')][H_{j-1,t}(x')/H_{j-1,t}(x)]\le C^2$ by step 1.1. Thus [F3] gives $\delta(L_{j,t})\le1-C^{-2}=\rho$. Telescoping the $H$ factors in the product kernel $P_{k,t}=L_{k+1,t}\cdots L_{t,t}$ gives $P_{k,t}h=Q_{k,t}h/H_{k,t}$. [F1, F2, F3, step 1.1, construct, algebra]

2.1 For any probability kernel $K$ and bounded real $h$ of positive oscillation, put $u=(h-\inf h)/\operatorname{osc}(h)$. Then $0\le u\le1$, and [F5] under each output law gives $K u(x)-K u(x')=\int_0^1[K(x,\{u>r\})-K(x',\{u>r\})]dr$. By [F4], its absolute value is at most $\delta(K)$. If the oscillation is zero, $K$ preserves the constant and the same oscillation bound is immediate. Hence $\operatorname{osc}(Kh)\le\delta(K)\operatorname{osc}(h)$. Iterating this inequality along the kernels in step 1.2 gives $\operatorname{osc}(P_{k,t}h)\le\rho^{t-k}\operatorname{osc}(h)$. [F4, F5, step 1.2, construct, algebra]

3.1 The filtering recursion and iterated integration [F2] yield $\eta_t h=\eta_k(Q_{k,t}h)/\eta_k(H_{k,t})$ and $\prod_{j=k+1}^tc_j=\eta_k(H_{k,t})$. Thus $E_{k+1:t}h=r_{k,t}P_{k,t}h$. Take $h=\psi-\eta_t\psi$. Then $\eta_k(r_{k,t}P_{k,t}h)=0$, and $r_{k,t}\eta_k$ is a probability by step 1.1. Therefore the global infimum of $P_{k,t}h$ is at most zero and its supremum is at least zero, so its sup norm is at most its oscillation. Step 2.1 bounds this by $\rho^{t-k}\operatorname{osc}(\psi)$; multiplying by $r_{k,t}\le C$ proves the claim. For $k=t$, the mean $\eta_t\psi$ lies between $\inf\psi$ and $\sup\psi$, giving the identity-case bound. [F2, step 1.1, step 1.2, step 2.1, given, algebra] ∎

## Source notes

The local proof supplies the normalized future-kernel argument explicitly. The density-ratio hypothesis alone does not compare a target transition to its proposal; the separate variance theorem imposes that additional domination and an initial weight bound. No finite-particle or arbitrary-path time-uniform claim is imported from the source.
