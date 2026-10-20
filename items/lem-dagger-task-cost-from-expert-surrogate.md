---
id: lem-dagger-task-cost-from-expert-surrogate
kind: lemma
title: Expert-surrogate loss bounds finite-horizon task-cost increase
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-imitation-learning-and-expert-surrogate-loss
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the performance-difference argument is a finite sum over the horizon and finite state/action sets."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "Theorem 2.2 and its complete hybrid-policy proof, §2.2, PDF pp. 2–3."
    - title: "Bardienus Duisterhof, Kimberly Truong, and Khush Agrawal, Algorithmic Foundations of Interactive Learning, Lecture 9: DAgger & Covariate Shift in IL, lecturer J. Andrew Bagnell"
      url: "https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf"
      locator: "Lecture 9, equations (9.72)–(9.74), PDF p. 54 / note page 48; the complete local hybrid-policy derivation is supplied here."
---

## Statement

Let a finite-horizon MDP, horizon $T\ge1$, initial distribution, deterministic expert $\pi^*$, learner policy $\pi_\theta$, task cost $J$, expert cost-to-go $Q_t^*$, expert value $V_t^*(s)=Q_t^*(s,\pi^*(s))$, occupancy $d_{\pi_\theta}$, and surrogate $\ell(s,\theta)$ be as defined previously. Suppose $u\ge0$ and

$$Q_t^*(s,a)-V_t^*(s)\le u$$

for every time $0\le t<T$, state $s\in S$, and admissible action $a\in A(s)$, and suppose $\ell(s,\theta)\ge\sum_{a\ne\pi^*(s)}\pi_\theta(a\mid s)$ for every state. Then

$$J(\pi_\theta)-J(\pi^*)\le uT\sum_{s\in S}d_{\pi_\theta}(s)\ell(s,\theta).$$

The one-step cost-to-go bound is required at all states and times, including states not reached by the expert.

## Statement references

[[def-imitation-learning-and-expert-surrogate-loss]]: defines finite-horizon task cost, expert cost-to-go recursion, normalized state occupancy, and the surrogate's expert-action-disagreement domination condition.

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): Theorem 2.2 and its complete hybrid-policy proof, §2.2, PDF pp. 2–3.

[Duisterhof, Truong, and Agrawal, *Algorithmic Foundations of Interactive Learning*, Lecture 9](https://interactive-learning-algos.github.io/assets/pdfs/afil_scribe_book.pdf): equations (9.72)–(9.74), PDF p. 54 / note page 48; used for terminology only.

## Facts & Assumptions

**Given:** The finite MDP and policy definitions in the Statement, a learner parameter $\theta$, $u\ge0$, the uniform one-step expert cost-to-go upper bound, and the statewise surrogate disagreement upper bound.

[F1] [[def-imitation-learning-and-expert-surrogate-loss]]: $J(\pi)$ is the finite sum of expected per-time costs, $d_\pi=T^{-1}\sum_{t<T}\mu_t^\pi$, and $Q_t^*(s,a)=c_t(s,a)+\sum_{s'}P(s'\mid s,a)V_{t+1}^*(s')$ with $V_t^*(s)=Q_t^*(s,\pi^*(s))$.

[F2] For any sequence of Markov policies $(\rho_t)_{t=0}^{T-1}$, define $\mu_0^\rho=\mu_0$, recursively set $\mu_{t+1}^\rho(s')=\sum_s\mu_t^\rho(s)\sum_{a\in A(s)}\rho_t(a\mid s)P(s'\mid s,a)$, and define $J(\rho)=\sum_{t=0}^{T-1}\sum_s\mu_t^\rho(s)\sum_{a\in A(s)}\rho_t(a\mid s)c_t(s,a)$. For a stationary policy this agrees with $J$ in [F1].

[A1] $Q_t^*(s,a)-V_t^*(s)\le u$ for every $t,s,a$.

[A2] $\ell(s,\theta)\ge\sum_{a\ne\pi^*(s)}\pi_\theta(a\mid s)$ for every $s$.

## Proof

1.1 For $k=0,\ldots,T$, let $\rho_t^{(k)}=\pi_\theta$ for $t<k$ and $\rho_t^{(k)}=\pi^*$ for $t\ge k$. By [F2], these time-dependent policies have finite-horizon costs $J(\rho^{(k)})$, with $J(\rho^{(0)})=J(\pi^*)$ and $J(\rho^{(T)})=J(\pi_\theta)$. Telescoping gives $J(\pi_\theta)-J(\pi^*)=\sum_{k=0}^{T-1}(J(\rho^{(k+1)})-J(\rho^{(k)}))$. [given, F1, F2, construct, algebra]

2.1 The two hybrid policies in the $k$th difference have the same state distribution $\mu_k^{\pi_\theta}$ at time $k$, because both use $\pi_\theta$ for the first $k$ decisions. From then on, one takes the learner action at time $k$ and the other takes the expert action, and both follow the expert afterward. The cost recursion [F2] and the definition of $Q_k^*$ therefore give $J(\rho^{(k+1)})-J(\rho^{(k)})=\sum_{s\in S}\mu_k^{\pi_\theta}(s)\sum_{a\in A(s)}\pi_\theta(a\mid s)\bigl(Q_k^*(s,a)-V_k^*(s)\bigr)$. [F1, F2, step 1.1, algebra]

3.1 For $a=\pi^*(s)$ the cost-to-go difference in step 2.1 is zero by the definition of $V_k^*$. For every other action it is at most $u$ by [A1]. Therefore each inner sum in step 2.1 is at most $u\sum_{a\ne\pi^*(s)}\pi_\theta(a\mid s)\le u\ell(s,\theta)$ by [A2]. [A1, A2, step 2.1, algebra]

4.1 Sum step 3.1 over $k=0,\ldots,T-1$ and use $d_{\pi_\theta}=T^{-1}\sum_{k<T}\mu_k^{\pi_\theta}$ from [F1]. The result is $J(\pi_\theta)-J(\pi^*)\le u\sum_{k<T}\sum_s\mu_k^{\pi_\theta}(s)\ell(s,\theta)=uT\sum_s d_{\pi_\theta}(s)\ell(s,\theta)$, as claimed. [F1, step 1.1, step 3.1, algebra] ∎
