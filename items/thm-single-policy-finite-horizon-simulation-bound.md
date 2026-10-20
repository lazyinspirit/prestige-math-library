---
id: thm-single-policy-finite-horizon-simulation-bound
kind: theorem
title: "Finite-horizon simulation bound for one fixed policy"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-learned-mdp-model
  - def-finite-horizon-mdp-return
  - lem-finite-policy-kernel-tv-propagation
  - lem-total-variation-half-l1-formula-on-a-countable-space
  - lem-of-triangle-inequality
  - lem-triangle-inequality-finite
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sergey Levine, Aviral Kumar, George Tucker, and Justin Fu, Offline Reinforcement Learning: Tutorial, Review, and Perspectives on Open Problems"
      url: "https://arxiv.org/pdf/2005.01643"
      locator: "§2.1, PDF pp. 3–4, and §5.1, PDF pp. 25–26: finite-horizon returns, model error, and distribution shift. The bound below is proved locally."
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition-in-progress"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf"
      locator: "Chapter 8 §§8.3 and 8.5, printed pp. 203–205 and 210–212: planning under model error and transition backups. The bound below is proved locally."
---

## Statement

Let $M=(S,(A(s))_{s\in S},r,P)$ and $\widehat M=(S,(A(s))_{s\in S},\widehat r,\widehat P)$ be finite models on a common nonempty finite state set and common nonempty finite action sets, with $r,\widehat r\in[0,1]$ and probability transition rows. Fix a horizon $H\ge1$, a common initial state law $\mu$, and one possibly time-dependent randomized Markov policy $\pi=(\pi_t)_{t=0}^{H-1}$. Let $d_t$ and $\widehat d_t$ be the state occupancies under $M$ and $\widehat M$, respectively, starting from $d_0=\widehat d_0=\mu$. Define

$$C_H^\pi=\{(s,a): d_t(s)\pi_t(a\mid s)>0\text{ or }\widehat d_t(s)\pi_t(a\mid s)>0\text{ for some }0\le t<H\}.$$

Suppose $|r(s,a)-\widehat r(s,a)|\le\epsilon_r$ and $\operatorname{TV}(P(\cdot\mid s,a),\widehat P(\cdot\mid s,a))\le\epsilon_p$ for every $(s,a)\in C_H^\pi$, where $\operatorname{TV}(p,q)=\frac12\sum_{s'}|p(s')-q(s')|$. Then

$$|J_H(M,\mu,\pi)-J_H(\widehat M,\mu,\pi)|\le H\epsilon_r+\binom{H}{2}\epsilon_p.$$

The guarantee concerns this fixed policy and the stated reachable pairs; it does not bound the policy selected by optimizing the learned model.

## Statement references

[[def-learned-mdp-model|The finite models share a state-action domain, bounded expected rewards, and probability transition rows; model errors use uniform reward error and total variation.]]

[[def-finite-horizon-mdp-return|Finite-horizon Markov-policy occupancies and returns are defined by a finite recursion and sum.]]

## Facts & Assumptions

**Given:** The finite models, common law, horizon, fixed policy, reachable-pair error bounds, and notation in the Statement.

[F1] [[def-learned-mdp-model]]: every transition row is a probability distribution on the common finite state set, and both reward means lie in $[0,1]$.

[F2] [[def-finite-horizon-mdp-return]]: each model's state occupancy is propagated by the policy-weighted transition row, and its return is the sum of the policy-weighted expected rewards for times $0$ through $H-1$.

[F3] [[lem-finite-policy-kernel-tv-propagation]]: if transition-row total-variation error is at most $\epsilon_p$ on all pairs with positive learned state-action occupancy under a policy row, then the next-state total-variation distance is at most the current distance plus $\epsilon_p$.

[F4] [[lem-total-variation-half-l1-formula-on-a-countable-space]]: on the finite state set, total variation is one half of the sum of absolute mass differences.

[F5] [[lem-of-triangle-inequality]]: for real $u,v$, $|u+v|\le |u|+|v|$.

[F6] [[lem-triangle-inequality-finite]]: for every finite initial segment, the absolute value of a sum of reals is at most the sum of their absolute values.

## Proof

**Given:** The two finite models, common initial law, fixed policy, and error bounds from the Statement.

1.1 At time $0$, $\operatorname{TV}(d_0,\widehat d_0)=0$. If $0\le t<H-1$, every pair with $\widehat d_t(s)\pi_t(a\mid s)>0$ belongs to $C_H^\pi$, so its transition rows satisfy [F3]. Applying [F3] to the policy at time $t$ gives $\operatorname{TV}(d_{t+1},\widehat d_{t+1})\le\operatorname{TV}(d_t,\widehat d_t)+\epsilon_p$. Induction yields $\operatorname{TV}(d_t,\widehat d_t)\le t\epsilon_p$ for every $0\le t<H$. [given, F1, F2, F3, algebra]

2.1 For a fixed time $t$, set $g_t(s)=\sum_a\pi_t(a\mid s)r(s,a)$ and $\widehat g_t(s)=\sum_a\pi_t(a\mid s)\widehat r(s,a)$. These functions lie in $[0,1]$ by [F1]. For $x_s=d_t(s)-\widehat d_t(s)$, one has $\sum_sx_s=0$; by [F4] the total positive mass and total negative mass of $(x_s)$ both equal $\operatorname{TV}(d_t,\widehat d_t)$. Since $0\le g_t(s)\le1$, it follows that $|\sum_sx_sg_t(s)|\le\operatorname{TV}(d_t,\widehat d_t)$. Also, every pair with $\widehat d_t(s)\pi_t(a\mid s)>0$ lies in $C_H^\pi$, so $|\sum_{s,a}\widehat d_t(s)\pi_t(a\mid s)(r(s,a)-\widehat r(s,a))|\le\epsilon_r$. Decomposing the difference of the two time-$t$ expected rewards and applying [F5] gives an absolute difference at most $t\epsilon_p+\epsilon_r$ by step 1.1. [given, F1, F2, F4, F5, step 1.1, algebra]

3.1 By [F2], the return difference is the sum of the $H$ timewise expected-reward differences. The finite-sum triangle inequality [F6] and step 2.1 therefore give $|J_H(M,\mu,\pi)-J_H(\widehat M,\mu,\pi)|\le\sum_{t=0}^{H-1}(t\epsilon_p+\epsilon_r)=H\epsilon_r+\frac{H(H-1)}2\epsilon_p=H\epsilon_r+\binom{H}{2}\epsilon_p$. The arithmetic sum evaluates to $H(H-1)/2$. [F2, F6, step 2.1, algebra] ∎
