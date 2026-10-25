---
id: lem-dagger-mixture-occupancy
kind: lemma
title: Expert mixing changes finite-horizon state occupancy by at most the mixing mass
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-imitation-learning-and-expert-surrogate-loss
  - lem-finite-horizon-mdp-policy-occupancy
  - thm-induction-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument is a finite recursion on state probability vectors."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Lemma 4.1 and proof, §4.2, PDF p. 4: occupancy comparison under expert mixing."
    - title: "Bardienus Duisterhof, Kimberly Truong, and Khush Agrawal, Algorithmic Foundations of Interactive Learning, Lecture 9: DAgger & Covariate Shift in IL, lecturer J. Andrew Bagnell"
      url: "https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf"
      locator: "Lecture 9, PDF pp. 50–53 / note pages 46–47: per-decision expert/learner mixture and learner-induced occupancy loss."
---

## Statement

Let a finite-horizon MDP have positive integer horizon $T$, and let $\pi^*$ and $\hat\pi$ be stationary Markov policies. For a stationary policy $\pi$, define its state transition matrix by $P_\pi(s,s')=\sum_{a\in A(s)}\pi(a\mid s)P(s'\mid s,a)$; for a state vector $\mu$, define $(\mu P_\pi)(s')=\sum_{s\in S}\mu(s)P_\pi(s,s')$. Fix $\beta\in[0,1]$ and let $\pi_\beta(a\mid s)=\beta\pi^*(a\mid s)+(1-\beta)\hat\pi(a\mid s)$, which is the per-decision expert/learner mixture. For every function $g:S\to[0,1]$, its finite-horizon average occupancies satisfy

$$\left|\sum_{s\in S}d_{\pi_\beta}(s)g(s)-\sum_{s\in S}d_{\hat\pi}(s)g(s)\right|\le1-(1-\beta)^T\le\min\{1,T\beta\}.$$

Here $d_\pi=T^{-1}\sum_{t=0}^{T-1}\mu_t^\pi$ is the normalized average of the state marginals from the common initial distribution.

## Statement references

[[def-imitation-learning-and-expert-surrogate-loss]]: defines the finite-horizon state recursion, normalized average occupancy, and the DAgger per-decision policy mixture.

[[thm-induction-principle]]: finite recursion and Bernoulli inequality use natural-number induction.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Lemma 4.1 and proof, §4.2, PDF p. 4.

[Duisterhof, Truong, and Agrawal, *Algorithmic Foundations of Interactive Learning*, Lecture 9](https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf): PDF pp. 50–53 / note pages 46–47.

## Facts & Assumptions

**Given:** The finite MDP, initial distribution, horizon, policies, and mixture parameter in the Statement.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: for each policy $\pi$, $\mu_{t+1}^\pi=\mu_t^\pi P_\pi$ and $d_\pi=T^{-1}\sum_{t<T}\mu_t^\pi$.

[F2] [[lem-finite-horizon-mdp-policy-occupancy]]: every $\mu_t^\pi$ and $d_\pi$ is a probability vector, with nonnegative coordinates.

[F3] [[thm-induction-principle]]: a property holding at zero and preserved by successors holds for all natural indices.

## Proof

1.1 Put $q=1-\beta$. The transition matrix of the mixed policy is $P_{\pi_\beta}=qP_{\hat\pi}+\beta P_{\pi^*}$ by finite-sum distributivity. For each $t\le T$, we show $\mu_t^{\pi_\beta}=q^t\mu_t^{\hat\pi}+r_t$, where $r_t$ has nonnegative coordinates and total mass $1-q^t$. At $t=0$, take $r_0=0$. If the formula holds at $t<T$, the recursion gives $\mu_{t+1}^{\pi_\beta}=q^{t+1}\mu_{t+1}^{\hat\pi}+\underbrace{q^t\beta\mu_t^{\hat\pi}P_{\pi^*}+r_tP_{\pi_\beta}}_{r_{t+1}}$. The two terms defining $r_{t+1}$ have nonnegative coordinates, and their total masses are $q^t\beta$ and $1-q^t$, so $r_{t+1}$ has mass $1-q^{t+1}$. Induction proves the decomposition for every $t\le T$. [F1, F2, F3, algebra, construct]

2.1 Since $0\le q\le1$, for each $t<T$ one has $q^t\ge q^T$. Thus $r'_t:=r_t+(q^t-q^T)\mu_t^{\hat\pi}$ is nonnegative and has mass $1-q^T$. Averaging over $t=0,\ldots,T-1$ gives $d_{\pi_\beta}=q^T d_{\hat\pi}+r'$, where $r'=T^{-1}\sum_{t<T}r'_t$ has mass $1-q^T$. If $1-q^T>0$, normalize $r'$ to a probability vector $\nu$; then for $g:S\to[0,1]$ the difference of expectations is $(1-q^T)(\sum_s\nu(s)g(s)-\sum_s d_{\hat\pi}(s)g(s))$, whose absolute value is at most $1-q^T$. If $1-q^T=0$, the occupancies are equal and the same bound is zero. [F1, F2, step 1.1, algebra, construct]

3.1 The Bernoulli inequality $q^T=(1-\beta)^T\ge1-T\beta$ follows by induction: it is equality at $T=0$, and multiplying $q^n\ge1-n\beta$ by $q\ge0$ gives $q^{n+1}\ge(1-n\beta)(1-\beta)=1-(n+1)\beta+n\beta^2\ge1-(n+1)\beta$. Also $1-q^T\le1$, so $1-q^T\le\min\{1,T\beta\}$. Combining this with step 2.1 proves the Statement. [F3, step 2.1, algebra] ∎
