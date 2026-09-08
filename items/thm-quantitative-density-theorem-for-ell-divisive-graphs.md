---
id: thm-quantitative-density-theorem-for-ell-divisive-graphs
kind: theorem
title: "Quantitative density theorem for ell divisive graphs"
status: draft
origin: pipeline
deps: [def-induced-copy-density-and-homogeneous-restriction-parameter, def-subreciprocal-function-and-ell-divisibility, lem-ell-divisibility-amplifies-through-a-blockade, thm-real-power-laws, thm-logarithm-change-of-base, lem-subreciprocal-functions-close-under-the-density-recursion, def-qid-finite-density-recursion-profile]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.2 complete proof"
proof_strategy: direct
---

## Statement

Let $H$ be a nonempty finite graph that is $\ell$-divisive for a subreciprocal function $\ell$. There is $C_{H,\ell}>0$ such that, for $0<\epsilon<1/2$ and
$$\delta=2^{-C_{H,\ell}\log_2(1/\epsilon)^2/\log_2\ell(\epsilon)},$$
every nonempty finite graph $G$ with $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$ has a nonempty $S\subseteq V(G)$ of size at least $\delta|G|$ with $e(G[S])\leq\epsilon\binom{|S|}{2}$ or $e(\overline G[S])\leq\epsilon\binom{|S|}{2}$.

## Facts & Assumptions

**Given:** A nonempty $\ell$-divisive pattern $H$, a subreciprocal $\ell$, and a nonempty host satisfying the copy bound for the fraction specified at each stage below.

[F1] For the stated subreciprocal function and witnesses, the parameter construction has $p>1$, $0<\eta<1$, $\delta<x^d\eta^t$, and $t$ the least natural with $p^t\geq\epsilon^{-2}$. ([[lem-subreciprocal-functions-close-under-the-density-recursion]]).

[F2] With the parameter setup of the amplification lemma, a fixed nonempty $G$ satisfying $\operatorname{ind}_H(G)\leq(\delta|G|)^{|H|}$ and $\delta|G|>1$ has $\beta_{s-1}(u,v)\geq\eta\min\{\beta_s(pu,v),\beta_s(u,pv)\}$ for $1\leq s\leq t$ and $u,v\geq\epsilon$. ([[lem-ell-divisibility-amplifies-through-a-blockade]]).

[F3] From [[def-qid-finite-density-recursion-profile]]: If $a\geq1$ or $b\geq1$, every full $F$ qualifies and $\beta_s(a,b)=1$. At $s=0$, the only qualifying set is $V(G)$, so $\beta_0(a,b)=\rho_G(a,b)$.

## Proof

1.1 Choose divisibility witnesses $c,d$, put $z=\ell(c)^{-1/2}$, $b=2-\log_2(1-z)>2$, and $C_0=20bd$. First take $0<\epsilon<c$, and define $\delta_0$ by the displayed formula with $C_0$. If $\delta_0|G|\leq1$, any singleton $S$ has the required size and zero edges in both graphs. Otherwise the parameter construction [F1] supplies $x,p,\eta,t$ and $\delta_0<x^d\eta^t<\eta^t$; all hypotheses of [F2] hold with $\delta=\delta_0$. [F1, given]

2.1 For each integer $0\leq r\leq t$, the recurrence implies $\beta_0(\epsilon,\epsilon)\geq\eta^r\min_{0\leq i\leq r}\beta_r(p^i\epsilon,p^{r-i}\epsilon)$. At $r=0$ this is equality. To pass from $r<t$ to $r+1$, apply [F2] with $s=r+1$ to every pair $(p^i\epsilon,p^{r-i}\epsilon)$; both coordinates are at least $\epsilon$ because $p>1$. The two children have exponent pairs $(i+1,r-i)$ and $(i,r+1-i)$, whose union over $i$ is exactly all pairs summing to $r+1$. Taking their finite minimum proves the induction step. [F2, step 1.1, algebra]

3.1 At $r=t$, the product of the two arguments in every terminal pair is $p^t\epsilon^2\geq1$ by the least-natural property in [F1]. At least one argument is therefore at least 1. Each terminal profile value equals 1 by [F3]. Hence $\rho_G(\epsilon,\epsilon)=\beta_0(\epsilon,\epsilon)\geq\eta^t>\delta_0$. The attained maximum defining $\rho_G$ supplies a nonempty set of at least $\delta_0|G|$ vertices with one of the required edge bounds. Together with the singleton case, this proves the theorem on $(0,c)$ with constant $C_0$. [F1, F3, step 2.1]

4.1 For the full interval set $a=\log_2(1/c)>1$ and $C_{H,\ell}=a^2C_0$. Given $0<\epsilon<1/2$, put $\epsilon^{\prime}=\epsilon^a<c$ and let $\delta^{\prime}$ be the small-interval fraction at $\epsilon^{\prime}$ with constant $C_0$. Since $\epsilon^{\prime}\leq\epsilon$ and $\ell$ is nonincreasing, $\log_2\ell(\epsilon^{\prime})\geq\log_2\ell(\epsilon)>0$. Thus $\log_2(1/\delta^{\prime})=C_0a^2\log_2(1/\epsilon)^2/\log_2\ell(\epsilon^{\prime})\leq\log_2(1/\delta)$, so $\delta^{\prime}\geq\delta$. [step 1.1, step 3.1, algebra]

5.1 The original hypothesis implies $\operatorname{ind}_H(G)\leq(\delta^{\prime}|G|)^{|H|}$. Apply the small-interval result to $\epsilon^{\prime}$: its set has size at least $\delta^{\prime}|G|\geq\delta|G|$, and its edge bound with $\epsilon^{\prime}$ implies that with $\epsilon$. This establishes the claimed constant on the entire open interval. [step 3.1, step 4.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.2 complete proof.
