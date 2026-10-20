---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
id: cex-arbitrary-baseline-bound-without-old-policy-residual
kind: counterexample
title: "An arbitrary baseline requires the old-policy residual"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-constrained-markov-decision-process
  - def-normalized-discounted-state-occupancy
  - def-discounted-cost-constraint
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

For every finite discounted CMDP with immediate reward signal $r(s,a,\rho,s')=\rho$, bounded function $f:S\to\mathbb R$, and stationary policies $\pi,\pi'$, define

$$\delta_f(s,a,\rho,s'):=\rho+\gamma f(s')-f(s),\qquad \bar\delta_f^\sigma(s):=\sum_{a\in A(s)}\sum_{\rho\in\mathcal R}\sum_{s'\in S}\sigma(a\mid s)p(s',\rho\mid s,a)\delta_f(s,a,\rho,s'),\quad \sigma\in\{\pi,\pi'\},$$

$$\epsilon_f:=\max_{s\in S}|\bar\delta_f^{\pi'}(s)|,\qquad L_{\pi,f}(\pi'):=\frac{1}{1-\gamma}\sum_{s\in S}d^\pi(s)\bar\delta_f^{\pi'}(s),$$

and

$$D^\pm_{\pi,f}(\pi'):=L_{\pi,f}(\pi')\pm\frac{2\gamma\epsilon_f}{(1-\gamma)^2}\sum_{s\in S}d^\pi(s)\operatorname{TV}_s(\pi',\pi),\qquad \operatorname{TV}_s(\pi',\pi):=\frac12\sum_{a\in A(s)}|\pi'(a\mid s)-\pi(a\mid s)|,$$

where $d^\pi$ is the normalized discounted state occupancy. Then always

$$D^-_{\pi,f}(\pi')\le J_r^{\pi'}(\mu)-J_r^\pi(\mu)\le D^+_{\pi,f}(\pi').$$

## Statement references

[[def-constrained-markov-decision-process|The finite discounted CMDP interface.]]

[[def-normalized-discounted-state-occupancy|The normalized discounted occupancy.]]

[[def-discounted-cost-constraint|The unnormalized discounted transition-signal return.]]

## Facts & Assumptions

**Given:** A one-state CMDP $S=\{s\}$ with one action, deterministic self-transition and reward $1$, one identically zero cost signal, initial law $\mu(s)=1$, discount $\gamma=0$, baseline $f(s)=0$, and identical policies $\pi'=\pi$ choosing the only action with probability one. Powers at time zero have the convention $\gamma^0=1$, including $\gamma=0$.

[F1] [[def-constrained-markov-decision-process]]: a finite CMDP has a nonempty finite state set, normalized finite transition masses, and bounded transition reward and cost signals.

[F2] [[def-normalized-discounted-state-occupancy]]: $d^\pi(s)=(1-\gamma)\sum_{t\ge0}\gamma^t\mu_t^\pi(s)$.

[F3] [[def-discounted-cost-constraint]]: for bounded signal $g$, $J_g^\pi(\mu)$ is the unnormalized discounted sum of its finite-time expectations.

## Counterexample

**Given:** The one-state model above and the definitions in the refuted statement.

1.1 The deterministic transition and policy masses are normalized, and both the reward and cost are bounded, so this is a finite CMDP. By [F2] its occupancy has $d^\pi(s)=d^{\pi'}(s)=1$ at $\gamma=0$. By [F3] both reward returns satisfy $J_r^\pi(\mu)=J_r^{\pi'}(\mu)=1$, so $J_r^{\pi'}(\mu)-J_r^\pi(\mu)=0$. [given, F1, F2, F3, algebra]

2.1 Since $f=0$ and the reward is $1$, the residual is $\delta_f=1$ and $\epsilon_f=1$. The stated surrogate is $L_{\pi,f}(\pi')=1$. Identical policies have statewise total variation zero, so $D^-_{\pi,f}(\pi')=D^+_{\pi,f}(\pi')=1$. The asserted lower inequality is $1\le0$, which is false by step 1.1. Subtracting the old-policy residual expectation instead gives the corrected surrogate $1-1=0$. [given, step 1.1, algebra] ∎
