---
id: thm-xd-uniformization-truncation-and-error
kind: theorem
title: "Uniformization truncation, mass loss, and arithmetic-error ledger"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-xd-finite-column-generator
  - lem-xd-uniformized-matrix-is-stochastic
  - alg-xd-budgeted-uniformization-accumulation
  - thm-xd-finite-generator-master-equation-uniformization
  - lem-xd-geometric-poisson-tail-bound
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - lem-xd-finite-matrix-exponential-series
  - def-p-norms-on-rn
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bennett L. Fox and Peter W. Glynn, Computing Poisson Probabilities"
      url: "https://web.stanford.edu/~glynn/papers/1988/FG88.pdf"
      locator: "Proposition 1 and §§1–3, printed pp. 440–443; truncation-error bounds, recursive weights, and floating-point caveats."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.4, equation (3.28), PDF pp. 14–15; Poisson mixture for transient probabilities."
---

## Statement

Let $Q$ be a finite column generator, $p_0$ a column probability vector, and $\nu>0$ an admissible rate. For $\lambda=\nu t$ and $K\ge0$, the exact one-series partial sum

$$u_K(t):=\sum_{k=0}^{K}e^{-\lambda}\frac{\lambda^k}{k!}P^kp_0$$

is nonnegative and substochastic, and its exact $\ell^1$ distance from $p(t)$ is the scalar Poisson tail $\tau_K(\lambda)=\mathbb P(\operatorname{Pois}(\lambda)>K)$. If $\nu t>0$, the budgeted algorithm sets $m=\lceil\nu t\rceil$ and $\mu=\nu t/m\le1$, and uses $R_{\mu,K}=\sum_{k=0}^K e^{-\mu}\mu^kP^k/k!$. Then $R_{\mu,K}^m p_0$ is nonnegative and substochastic, and its exact transient $\ell^1$ error is

$$1-\left(\sum_{k=0}^{K}e^{-\mu}\frac{\mu^k}{k!}\right)^m\le m\tau_K(\mu)\le mG_K(\mu).$$

If a computed vector $\widehat u$ has a separately certified accumulated arithmetic/algebraic error $E_{\rm alg}:=\|\widehat u-R_{\mu,K}^mp_0\|_1$, then $\|p(t)-\widehat u\|_1\le mG_K(\mu)+E_{\rm alg}$. In rounded arithmetic, if $T$ is a validated upper bound for $mG_K(\mu)$, then $\|p(t)-\widehat u\|_1\le T+E_{\rm alg}$. The geometric tail certificate is not obtained by floating-point subtraction from one.

## Facts & Assumptions

**Given:** A finite column generator $Q$, a probability vector $p_0$, an admissible $\nu>0$, $t\ge0$, and a finite truncation index $K$.

[F1] [[lem-xd-uniformized-matrix-is-stochastic]]: $P=I+Q/\nu$ is nonnegative and column stochastic.

[F2] [[thm-xd-finite-generator-master-equation-uniformization]]: $p(t)=e^{tQ}p_0$ and $e^{tQ}=\sum_{k\ge0}e^{-\nu t}(\nu t)^kP^k/k!$.

[F3] [[def-scalar-poisson-count-law]] and [[lem-poisson-count-law-normalization-and-moments]]: the weights $w_k(\mu)=e^{-\mu}\mu^k/k!$ are nonnegative and sum to one.

[F4] [[lem-xd-geometric-poisson-tail-bound]]: $\tau_K(\mu)\le G_K(\mu)$ when $\mu<K+2$.

[F5] [[def-p-norms-on-rn]]: the vector $1$-norm is $\|x\|_1=\sum_i|x_i|$.

[F6] [[def-induced-matrix-p-norm]], [[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]], and [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: for a nonnegative matrix, its induced $1$-norm is its maximum column sum and induced matrix norms are submultiplicative.

[F7] [[alg-xd-budgeted-uniformization-accumulation]]: with $m$ substeps, the exact truncated vector is $R_{\mu,K}^mp_0$, the term count is at most $B$, rounded output carries a validated tail upper bound $T\ge mG_K(\mu)$, and any approximate vector carries its separate $E_{\rm alg}$ bound.

[F8] [[lem-xd-finite-matrix-exponential-series]]: $e^{sQ}e^{tQ}=e^{(s+t)Q}$ for real $s,t$.

## Proof


**Proof technique:** compare the full stochastic operator with its substochastic partial sum.

1.1 For any $\mu>0$, set $S_\mu=e^{\mu Q/\nu}=e^{-\mu}e^{\mu P}$ and $R_{\mu,K}=\sum_{k=0}^K w_k(\mu)P^k$. By [F1], each $P^k$ is nonnegative and column stochastic; [F2] and [F3] give $S_\mu=\sum_{k\ge0}w_k(\mu)P^k$ with nonnegative weights summing to one. Thus $R_{\mu,K}$ is nonnegative with common column sum $s_K:=\sum_{k=0}^K w_k(\mu)\le1$, and $S_\mu-R_{\mu,K}$ is nonnegative with common column sum $\tau_K(\mu)$. [F1, F2, F3, algebra]

2.1 The induced norm formula [F6] gives $\|S_\mu\|_1=1$, $\|R_{\mu,K}\|_1=s_K$, and $\|S_\mu-R_{\mu,K}\|_1=\tau_K(\mu)$. If $\lambda=\nu t=0$, only the $k=0$ Poisson weight is nonzero, so $p(t)=u_K(t)=p_0$ and the omitted mass is zero. If $\lambda>0$, apply step 1.1 with $\mu=\lambda$: $(S_\lambda-R_{\lambda,K})p_0$ is nonnegative and its coordinate sum is $\tau_K(\lambda)$; by [F5], the exact one-series $\ell^1$ omitted mass is therefore exactly the scalar Poisson tail. [F1, F2, F3, F5, F6, step 1.1]

3.1 In the time-split algorithm, $0<\mu\le1$ and $K\ge0$, so $\mu<K+2$ and [F4] gives $\tau_K(\mu)\le G_K(\mu)$. For $m$ substeps the telescoping identity $S_\mu^m-R_{\mu,K}^m=\sum_{j=0}^{m-1}S_\mu^{m-1-j}(S_\mu-R_{\mu,K})R_{\mu,K}^j$, [F5]–[F6], and step 2.1 give $\|S_\mu^m-R_{\mu,K}^m\|_1\le m\tau_K(\mu)\le mG_K(\mu)$. [F4, F5, F6, step 2.1, algebra]

4.1 Every term in the telescoping identity is nonnegative, so the exact vector error on $p_0$ is nonnegative. Each column sum of $S_\mu^m$ is one and each column sum of $R_{\mu,K}^m$ is $s_K^m$; hence its $\ell^1$ mass is exactly $1-s_K^m=1-(1-\tau_K(\mu))^m\le m\tau_K(\mu)$. This proves the exact time-split lost-mass identity and the preceding error bound. [F1, F3, F5, F6, step 3.1, algebra]

5.1 Since $m\mu=\nu t$, [F8] gives $S_\mu^m=e^{tQ}$ and [F2] gives $S_\mu^mp_0=p(t)$, while [F7] identifies the exact truncated output as $R_{\mu,K}^mp_0$. The triangle inequality for the vector $1$-norm [F5] therefore yields $\|p(t)-\widehat u\|_1\le\|p(t)-R_{\mu,K}^mp_0\|_1+\|R_{\mu,K}^mp_0-\widehat u\|_1\le mG_K(\mu)+E_{\rm alg}\le T+E_{\rm alg}$ when the validated upper bound $T$ is supplied. On a successful rounded execution, the validated acceptance test gives $G_K(\mu)\le\varepsilon/m$ with $m\ge1$, so $mG_K(\mu)\le\varepsilon=T$ for the algorithm's returned choice, irrespective of how loose its separately supplied backend bound $U$ is. In exact arithmetic the choice $T=mG_K(\mu)$ satisfies $T\le\varepsilon$ by the same acceptance test. If $\nu t=0$, the algorithm returns $p_0$ and both error terms are zero. [F2, F5, F7, F8, step 4.1, algebra] ∎
