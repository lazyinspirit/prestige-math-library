---
id: thm-lz78-stationary-expected-rate
kind: theorem
title: "LZ78 expected-rate universality for stationary sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - thm-stationary-entropy-rate-limit
  - lem-finite-alphabet-past-information-convergence
  - thm-stationary-expected-prefix-code-rate
  - alg-lz78-incremental-prefix-code
  - thm-lz78-prefix-code-lossless
  - lem-lz78-distinct-parse-ziv-inequality
  - lem-finite-block-entropy-chain-rule
  - lem-finite-kl-nonnegative-choice-free
  - lem-finite-kl-nonnegative-choice-free
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
---
## Statement

For every stationary finite-alphabet source, the expected explicit terminated LZ78 code length per source symbol converges to the entropy rate in bits, without an ergodicity assumption.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source $X$ on alphabet $\mathcal A$ of size $q\ge2$, its bit entropy rate $h$, and the explicit terminated LZ78 code of [[alg-lz78-incremental-prefix-code]] and [[thm-lz78-prefix-code-lossless]].

[F1] [[thm-lz78-prefix-code-lossless]]: the terminated output is a nonempty prefix-free lossless code with no supplied record count; for $N$ output records its length is at most $N[\log_2(N+1)+2\log_2\log_2(N+2)+3+\lceil\log_2(q+1)\rceil]$.

[F2] [[lem-lz78-distinct-parse-ziv-inequality]]: for a distinct parsing and any order-$k$ kernel $Q$, $-\log_2Q(x_0^{n-1}\#\mid s)\ge\sum_{\ell,u}c_{\ell,u}\log_2c_{\ell,u}$.

[F3] [[lem-finite-alphabet-past-information-convergence]]: the finite-past conditional entropy $H_2(X_0\mid X_{-k}^{-1})$ tends to $h$.

[F4] [[thm-stationary-expected-prefix-code-rate]]: the optimal expected prefix-code rate tends to $h$.

[F5] [[lem-finite-kl-nonnegative-choice-free]]: finite KL against any subprobability reference is nonnegative in bits, and $\ln t\le t-1$ for $t>0$.

[F6] [[lem-finite-block-entropy-chain-rule]]: finite joint entropy satisfies the chain rule and conditioning cannot increase entropy.

## Proof

**Given:** The stationary source, parser and code length convention.

1.1 Let $N$ be the number of phrases in parsing $X_0^{n-1}\#$ over the augmented alphabet $\mathcal A\cup\{\#\}$, and let $c_{\ell,u}$ count phrases of length $\ell$ and preceding $k$-symbol context $u$. The phrases are distinct. For $r=\lfloor\frac12\log_{q+1}(n+1)\rfloor$, at most $\sum_{j=1}^r(q+1)^j=O(\sqrt n)$ phrases have length at most $r$, while longer phrases use at least $r+1$ symbols. Thus $N=O(n/\log n)$ uniformly over input words. [F2, given, algebra]

2.1 Let $\widehat P(L=\ell,U=u)=c_{\ell,u}/N$ be the empirical law of a uniformly selected phrase. Since phrase lengths sum to $n+1$, $E L=(n+1)/N$, and $U$ has at most $q^k$ values. If $\mu=E L>0$, compare the law of $L$ with the geometric distribution $r_j=(\mu+1)^{-1}(\mu/(\mu+1))^j$, $j\ge0$. Nonnegative relative entropy [F5] gives $$H_2(L)\le-E\log_2r_L=(\mu+1)\log_2(\mu+1)-\mu\log_2\mu\le\log_2(e(\mu+1)),$$ because $\ln(1+x)\le x$ for $x\ge0$ (the derivative of $x-\ln(1+x)$ is $x/(1+x)\ge0$). The case $\mu=0$ has $H_2(L)=0$. Comparing $U$ with the uniform law on its support and using [F5] gives $H_2(U)\le k\log_2q$; [F6] gives $H_2(L,U)\le H_2(L)+H_2(U)$. Since $N=O(n/\log n)$, $x\mapsto x\log((n+1)/x)$ is increasing on this range for all large $n$, so $$N H_2(L,U)=O\!\left(\frac{n\log\log n}{\log n}\right)+O\!\left(\frac{kn}{\log n}\right)=o(n)$$ for each fixed $k$. [F2, F5, F6, step 1.1, algebra]

3.1 The explicit code length satisfies $L_n\le N(\log_2N+2\log_2\log_2(N+2)+C)+N\lceil\log_2(q+1)\rceil$. Since $$N\log_2N=\sum_{\ell,u}c_{\ell,u}\log_2c_{\ell,u}+NH_2(L,U),$$ combine [F2] with step 2.1. The index redundancy and symbol fields are $o(n)$ uniformly for fixed $k$, so pointwise $$L_n\le-\log_2Q_k(X_0^{n-1}\#\mid s)+o(n).$$ [F1, F2, step 1.1, step 2.1, algebra]

4.1 For the kernel in step 3.1 use the augmented alphabet $\mathcal A\cup\{\#\}$ and $\delta=1/(n+1)$. At ordinary source symbols set $Q_{k,n}(a\mid u)=(1-\delta)P(X_0=a\mid X_{-k}^{-1}=u)$ and $Q_{k,n}(\#\mid u)=\delta$; after $\#$ choose any stochastic row. Stationarity and the conditional-entropy definition give $$E[-\log_2Q_{k,n}(X_0^{n-1}\#\mid X_{-k}^{-1})]=nH_2(X_0\mid X_{-k}^{-1})+n\log_2\frac1{1-\delta}+\log_2(n+1)=nH_k+O(\log n),$$ since $n\ln(1+1/n)\le1$. Thus [F3] and step 3.1 give $\limsup_n E L_n/n\le h$ after $k\to\infty$. [F3, step 3.1, algebra]

5.1 By [F1], the LZ78 code is a prefix code, so its expected length is at least the optimal expected prefix-code length for that block. [F4] gives $\liminf_n E L_n/n\ge h$. Together with step 4.1 this proves convergence to $h$. The proof uses stationarity but not ergodicity. [F1, F4, step 4.1, algebra] ∎
