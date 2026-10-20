---
id: thm-policy-performance-bound-by-average-divergence
kind: theorem
title: "Policy performance bound by average divergence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - def-normalized-discounted-state-occupancy
  - lem-discounted-occupancy-change-bounded-by-average-tv
  - lem-finite-action-average-tv-controlled-by-kl
  - lem-mdp-performance-difference-identity-with-arbitrary-baseline
  - lem-normalized-discounted-state-occupancy-is-probability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017), main paper"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§5.1, Theorem 1 and Corollary 3, PDF pp. 2–3."
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017), supplementary material"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf"
      locator: "Appendix 10.1.2, complete Lemma 2/Lemma 3 and Theorem 1 proof, PDF pp. 2–4."
---

## Statement

Let a finite discounted CMDP, a bounded transition signal $g$, a bounded function $f:S\to\mathbb R$, and stationary policies $\pi,\pi'$ be given. For each state define

$$\bar\delta_f^{g,\sigma}(s):=\sum_{a\in A(s)}\sum_{\rho\in\mathcal R}\sum_{s'\in S}\sigma(a\mid s)p(s',\rho\mid s,a)\bigl(g(s,a,\rho,s')+\gamma f(s')-f(s)\bigr),\qquad \sigma\in\{\pi,\pi'\}.$$

Set $\epsilon_f^g(\pi'):=\max_{s\in S}|\bar\delta_f^{g,\pi'}(s)|$ and

$$L_{\pi,f}^g(\pi'):=\sum_{s\in S}d^\pi(s)\bigl(\bar\delta_f^{g,\pi'}(s)-\bar\delta_f^{g,\pi}(s)\bigr),\qquad D_{\pi,f}^{\pm,g}(\pi'):=\frac{L_{\pi,f}^g(\pi')}{1-\gamma}\pm\frac{2\gamma\epsilon_f^g(\pi')}{(1-\gamma)^2}\sum_{s\in S}d^\pi(s)\operatorname{TV}_s(\pi',\pi),$$

where $\operatorname{TV}_s(\pi',\pi):=\frac12\sum_{a\in A(s)}|\pi'(a\mid s)-\pi(a\mid s)|$. Then

$$D_{\pi,f}^{-,g}(\pi')\le J_g^{\pi'}(\mu)-J_g^\pi(\mu)\le D_{\pi,f}^{+,g}(\pi').$$

These total-variation bounds are choice-free. Under the additional Axiom of Choice, define

$$\overline D_{\rm KL}^{\pi}(\pi'\|\pi):=\sum_{s:d^\pi(s)>0}d^\pi(s)D_{\rm KL}\bigl(\pi'(\cdot\mid s)\|\pi(\cdot\mid s)\bigr),$$

using natural logarithms and $+\infty$ when the first action law is not absolutely continuous with respect to the second. The same inequalities hold after replacing $\sum_s d^\pi(s)\operatorname{TV}_s(\pi',\pi)$ by $\sqrt{\overline D_{\rm KL}^{\pi}(\pi'\|\pi)/2}$; when the average KL is infinite, these KL-form inequalities are interpreted as the trivial extended bounds $-\infty\le J_g^{\pi'}(\mu)-J_g^\pi(\mu)\le+\infty$. Taking $g=r$ gives the reward bound, and taking $g=c_i$ gives the corresponding bound for each discounted cost.

## Statement references

[[def-constrained-markov-decision-process|The finite transition model, bounded signals, initial law, and discount.]]

[[def-discounted-cost-constraint|The expected discounted signal objective $J_g^\pi(\mu)$.]]

[[def-normalized-discounted-state-occupancy|The normalized occupancy $d^\pi$.]]

[[lem-finite-action-average-tv-controlled-by-kl|The AC-conditional finite-action Pinsker/Jensen bound.]]

[[lem-discounted-occupancy-change-bounded-by-average-tv|The resolvent estimate for the change of discounted state occupancy.]]

[[lem-mdp-performance-difference-identity-with-arbitrary-baseline|The exact performance-difference identity for arbitrary bounded $f$.]]

[Achiam et al., *Constrained Policy Optimization*, §5.1](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).

[Achiam et al., *Constrained Policy Optimization*, supplementary material, Appendix 10.1](https://proceedings.mlr.press/v70/achiam17a/achiam17a-supp.pdf).

## Facts & Assumptions

**Given:** A finite discounted CMDP, bounded transition signal $g$, bounded function $f$, stationary policies $\pi,\pi'$, and $0\le\gamma<1$.

[A1] [[def-axiom-of-choice]]: AC is used only in the KL branch, through the Pinsker theorem and the directional KL definition; the total-variation proof below is choice-free.

[F1] [[def-constrained-markov-decision-process]]: the state and action sets are finite and nonempty, the transition/reward mass is normalized, and $g$ is bounded.

[F2] [[def-discounted-cost-constraint]]: $J_g^\sigma(\mu)$ is the expected discounted transition-signal series.

[F3] [[def-normalized-discounted-state-occupancy]] and [[lem-normalized-discounted-state-occupancy-is-probability]]: $d^\sigma$ is the normalized discounted state occupancy and is a probability distribution.

[F4] [[lem-mdp-performance-difference-identity-with-arbitrary-baseline]]: $J_g^{\pi'}(\mu)-J_g^\pi(\mu)=L_{\pi,f}^g(\pi')/(1-\gamma)+(1-\gamma)^{-1}\sum_s(d^{\pi'}(s)-d^\pi(s))\bar\delta_f^{g,\pi'}(s)$.

[F5] [[lem-discounted-occupancy-change-bounded-by-average-tv]]: $\|d^{\pi'}-d^\pi\|_1\le2\gamma(1-\gamma)^{-1}\sum_s d^\pi(s)\operatorname{TV}_s(\pi',\pi)$.

[F6] [[lem-finite-action-average-tv-controlled-by-kl]]: under AC, the same weighted average of finite-action total variations is at most the square root of half the weighted directional KL.

## Proof

1.1 By [F1] and [F3], $S$ is finite, $d^\pi,d^{\pi'}$ are probability distributions, and each finite sum defining $\bar\delta_f^{g,\pi'}(s)$ is bounded by $\|g\|_\infty+(1+\gamma)\|f\|_\infty$; hence $\epsilon_f^g(\pi')$ is finite. By [F2], the returns are the defined bounded-signal discounted sums. The identity [F4] writes their difference as $L_{\pi,f}^g(\pi')/(1-\gamma)$ plus the remainder $(1-\gamma)^{-1}\sum_s(d^{\pi'}(s)-d^\pi(s))\bar\delta_f^{g,\pi'}(s)$. The triangle inequality gives $|\sum_s(d^{\pi'}-d^\pi)\bar\delta_f^{g,\pi'}|\le\sum_s|d^{\pi'}-d^\pi||\bar\delta_f^{g,\pi'}|\le\epsilon_f^g(\pi')\|d^{\pi'}-d^\pi\|_1$. [F1, F2, F3, F4, given, algebra]

2.1 Substitute [F5] into the remainder bound in step 1.1. The resulting error is at most $2\gamma\epsilon_f^g(\pi')(1-\gamma)^{-2}\sum_s d^\pi(s)\operatorname{TV}_s(\pi',\pi)$, which gives the two total-variation inequalities. [F5, step 1.1, algebra]

3.1 Assume AC. If $\overline D_{\rm KL}^{\pi}(\pi'\|\pi)=+\infty$, the stated extended KL inequalities are immediate. Otherwise [F6] bounds the average total variation in step 2.1 by $\sqrt{\overline D_{\rm KL}^{\pi}(\pi'\|\pi)/2}$. Replacing the nonnegative error term by this upper bound gives the two KL-form inequalities. This step alone uses AC; steps 1.1–2.1 do not. [A1, F6, step 2.1, algebra] ∎
