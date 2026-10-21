---
id: lem-ucb-suboptimal-arm-expected-pulls
kind: lemma
title: "Expected pull count for a suboptimal UCB arm"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [def-stochastic-bandit-and-pseudo-regret, def-centered-subgaussian-reward, alg-upper-confidence-bound-bandit, lem-independent-subgaussian-prefix-tail, def-natural-logarithm, thm-natural-logarithm-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Theorem 7.1 proof, §7.1, PDF pp. 114–117 / printed pp. 105–108; fixed-prefix warning PDF p. 112 / printed p. 103."
    - title: "Sébastien Bubeck and Nicolò Cesa-Bianchi, Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems"
      url: "https://arxiv.org/pdf/1204.5721"
      locator: "Theorem 2.1 proof, Chapter 2 §2.2, PDF pp. 14–15 / printed pp. 11–12; deterministic-prefix union bounds for the time-indexed UCB rule."
---

## Statement

Let $n,k$ be integers with $n\ge\max\{k,2\}$. In an $n$-round $k$-armed stochastic bandit, suppose every reward-stack entry is 1-sub-Gaussian. Run the upper-confidence-bound algorithm with $\delta=n^{-2}$. For every arm $i$ with gap $\Delta_i>0$, its number of pulls satisfies
$$
\mathbb E[T_i(n)]\le 3+\frac{16\log n}{\Delta_i^2},
$$
where $\log$ is the natural logarithm and the expectation is over the reward table and learner randomization.

## Statement references

[[def-centered-subgaussian-reward]]: each reward is mean-centred and satisfies the exact MGF bound for every real parameter.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): Theorem 7.1 proof, §7.1, PDF pp. 114–117 / printed pp. 105–108; fixed-prefix warning, PDF p. 112 / printed p. 103.

[Sébastien Bubeck and Nicolò Cesa-Bianchi, *Regret Analysis of Stochastic and Nonstochastic Multi-armed Bandit Problems*](https://arxiv.org/pdf/1204.5721): Theorem 2.1 proof, Chapter 2 §2.2, PDF pp. 14–15 / printed pp. 11–12.

## Facts & Assumptions

**Given:** An $n$-round reward-stack model with $n\ge\max\{k,2\}$, all reward entries 1-sub-Gaussian, a suboptimal arm $i$ with $\Delta_i>0$, and the UCB algorithm run with $\delta=n^{-2}$.

[F1] Each arm has finite mean $\mu_i$, gap $\Delta_i=\mu^*-\mu_i$, and stack entries $X_{s,i}$ are independent with law $P_i$ ([[def-stochastic-bandit-and-pseudo-regret]]).

[A1] Every table entry is centered 1-sub-Gaussian in the exact MGF sense ([[def-centered-subgaussian-reward]]).

[F2] For every deterministic $s\in[n]$, the prefix mean $\widehat\mu_{i,s}=s^{-1}\sum_{r=1}^sX_{r,i}$ satisfies $\mathbb P(\widehat\mu_{i,s}-\mu_i\ge x),\mathbb P(\widehat\mu_{i,s}-\mu_i\le-x)\le e^{-sx^2/2}$ for $x\ge0$ ([[lem-independent-subgaussian-prefix-tail]]).

[F3] After initialization, the UCB index of arm $i$ with $s>0$ observations is its observed-prefix mean plus $\sqrt{2\log(1/\delta)/s}$; the least-index maximizer is selected ([[alg-upper-confidence-bound-bandit]]).

[F4] For $n\ge2$, $\log n>0$ and $\log(n^2)=2\log n$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

1.1 Fix a suboptimal arm $i$, let $i^*$ be the least index with $\mu_{i^*}=\mu^*$, write $L=\log n>0$, and put $u_i=\lceil16L/\Delta_i^2\rceil$. For each deterministic prefix length $s\in[n]$, set $r_s=\sqrt{4L/s}$; by [F4] this is the UCB bonus when $\delta=n^{-2}$. If $u_i\ge n$, then $T_i(n)\le n\le u_i\le16L/\Delta_i^2+1$, which is stronger than the claim. Hence assume $u_i<n$, so $r_{u_i}\le\Delta_i/2$. [given, F1, F3, F4, algebra]

2.1 Define the good event $G_i=\left(\bigcap_{s=1}^n\{\widehat\mu_{i^*,s}+r_s\ge\mu^*\}\right)\cap\{\widehat\mu_{i,u_i}+r_{u_i}<\mu^*\}$. On $G_i$, arm $i$ cannot be selected at any round when it already has $u_i$ pulls: its index is then below $\mu^*$, whereas the good event makes the index of arm $i^*$ at least $\mu^*$ for every possible deterministic prefix length $s\in[n]$. Since each pull increases $T_i$ by one, $T_i(n)\le u_i$ on $G_i$. [given, F1, F3, step 1.1]

3.1 The complement of the first event in $G_i$ is contained in the union of the $n$ deterministic-prefix events $\{\widehat\mu_{i^*,s}-\mu^*<-r_s\}$. By [F2] under [A1] and the union bound, its probability is at most $\sum_{s=1}^n e^{-sr_s^2/2}=n e^{-2L}=1/n$. This union is over fixed $s$, not the random pull count $T_{i^*}(t)$. [given, A1, F2, step 2.1, algebra]

3.2 Since $r_{u_i}\le\Delta_i/2$, the other failure event in $G_i$ is contained in $\{\widehat\mu_{i,u_i}-\mu_i\ge\Delta_i/2\}$. By [F2] under [A1] its probability is at most $e^{-u_i\Delta_i^2/8}\le e^{-2L}=n^{-2}$. Therefore $\mathbb P(G_i^c)\le1/n+1/n^2$. [given, A1, F2, step 1.1, step 2.1, algebra]

4.1 Always $T_i(n)\le n$, while step 2.1 gives $T_i(n)\le u_i$ on $G_i$. Thus $\mathbb E[T_i(n)]\le u_i+n\mathbb P(G_i^c)\le16L/\Delta_i^2+1+1+1/n\le16\log n/\Delta_i^2+3$, where $n\ge2$ was used in the last inequality. This proves the claim. [given, step 1.1, step 2.1, step 3.2, algebra] ∎
