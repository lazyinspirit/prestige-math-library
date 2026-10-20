---
id: alg-constrained-policy-optimization
kind: algorithm
title: "Sample-based constrained policy optimization update"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - def-discounted-value-and-advantage-functions
  - def-differentiable-stochastic-policy
  - def-hessian-and-euclidean-critical-point
  - def-kullback-leibler-divergence
  - def-normalized-discounted-state-occupancy
  - thm-policy-performance-bound-by-average-divergence
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Joshua Achiam, David Held, Aviv Tamar, and Pieter Abbeel, Constrained Policy Optimization, PMLR 70 (2017)"
      url: "https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf"
      locator: "§5.3 and §§6.1–6.3, ideal trust-region update, sampled linearization, conjugate-gradient solves, line search, and cost shaping, PDF pp. 4–6."
---

## Definition

Assume the Axiom of Choice for the theoretical average-KL comparison, and let a finite discounted CMDP have cost signals $c_1,\ldots,c_m$ with thresholds $b_1,\ldots,b_m$. Let $\theta\mapsto\pi_\theta$ be a stationary policy family on an open subset of $\mathbb R^d$ with fixed common support, and assume its policy coordinates are twice continuously differentiable on a neighborhood of the current parameter $\theta_k$. Choose a trust radius $\delta>0$, a backtracking factor $\beta\in(0,1)$, and a finite backtracking budget $L\ge0$. At iteration $k$, the finite data batch consists of $N\ge1$ rows $(s_j,a_j,\omega_j,\widehat A_j^r,\widehat A_{1,j}^c,\ldots,\widehat A_{m,j}^c)$ from trajectories generated in the CMDP under the current policy $\pi_{\theta_k}$, where $\omega_j\ge0$, $\sum_j\omega_j=1$, and $\pi_{\theta_k}(a_j\mid s_j)>0$. The advantage estimates are real numbers held fixed during the update, and the batch also includes real baseline-cost estimates $\widehat J_{i,k}$. The weights and estimates may come from any fixed rollout or critic estimator; this procedure assumes no accuracy property for them. It specifies the exact finite-data trust-region subproblem and line search; implementations that approximate the subproblem solve are discussed separately.

For $\theta$ near $\theta_k$, define the finite sample surrogates

$$\widehat L_r(\theta):=\sum_{j=1}^N\omega_j\left(\frac{\pi_\theta(a_j\mid s_j)}{\pi_{\theta_k}(a_j\mid s_j)}-1\right)\widehat A_j^r,\qquad \widehat L_i^c(\theta):=\sum_{j=1}^N\omega_j\left(\frac{\pi_\theta(a_j\mid s_j)}{\pi_{\theta_k}(a_j\mid s_j)}-1\right)\widehat A_{i,j}^c.$$

and $\widehat K(\theta):=\sum_j\omega_jD_{\rm KL}(\pi_\theta(\cdot\mid s_j)\|\pi_{\theta_k}(\cdot\mid s_j))$. Put $g=\nabla\widehat L_r(\theta_k)$, $u_i=(1-\gamma)^{-1}\nabla\widehat L_i^c(\theta_k)$, $H=\nabla^2\widehat K(\theta_k)$, and $q_i=\widehat J_{i,k}-b_i$. The update procedure is:

1. If $H$ is not symmetric positive definite, meaning $x^THx>0$ for every nonzero $x\in\mathbb R^d$, return `no-step`. Otherwise form the local quadratic program

   $$\max_{x\in\mathbb R^d} g^Tx\quad\text{subject to}\quad q_i+u_i^Tx\le0\ (i=1,\ldots,m),\qquad \frac12x^THx\le\delta.$$

2. If this program is feasible, let $x^*$ be its lexicographically least global maximizer. The feasible set is a closed subset of the compact ellipsoid, so the maximizer set is nonempty and compact. Minimize the first coordinate on that set, restrict to its nonempty compact minimizers, and repeat for each coordinate; the resulting point is the lexicographically least maximizer. If the program is infeasible and $m=1$, compute $v=H^{-1}u_1$. If $u_1=0$, return `no-step`, since the linearized cost cannot be reduced. Otherwise $u_1^Tv>0$ by positive definiteness, and use the cost-recovery proposal $x^*=-\sqrt{2\delta/(u_1^Tv)}\,v$. If the program is infeasible and $m>1$, return `no-step`.

3. For $j=0,\ldots,L$, set $\theta_j=\theta_k+\beta^jx^*$. Accept the first $\theta_j$ in the policy family's parameter domain for which every sample cost estimate $\widehat J_{i,k}+(1-\gamma)^{-1}\widehat L_i^c(\theta_j)$ is at most $b_i$. If no candidate passes this sample check, return `no-step`; otherwise output the accepted parameter as $\theta_{k+1}$.

For finite constants $D_i\ge0$, optional nonnegative bounded transition signals $\Delta_i:\mathcal X\to[0,D_i]$ may be included in the supplied cost-advantage and baseline estimates by estimating the shaped costs $c_i+\Delta_i$. The exact theorem concerns exact policies and expectations; the line search above checks only the supplied sample estimates.

## Definition references

[[def-axiom-of-choice|Every family of nonempty sets has a choice function; AC is required for the theorem's KL branch.]]

[[def-constrained-markov-decision-process|The finite CMDP model and bounded transition signals.]]

[[def-discounted-cost-constraint|The expected discounted cost and its threshold.]]

[[def-discounted-value-and-advantage-functions|The value and advantage quantities estimated by the supplied critic.]]

[[def-differentiable-stochastic-policy|A differentiable stationary policy family with fixed common support and score vectors.]]

[[def-hessian-and-euclidean-critical-point|The Hessian matrix is the matrix of second partial derivatives of a scalar function on an open Euclidean domain.]]

[[def-kullback-leibler-divergence|Directional KL uses natural logarithms and is infinite when the first action law is not absolutely continuous with respect to the second.]]

[[def-normalized-discounted-state-occupancy|The state distribution targeted by the discounted sample weights.]]

[[thm-policy-performance-bound-by-average-divergence|The exact policy-return bound that motivates the trust-region constraint; its KL branch assumes AC.]]

[Achiam et al., *Constrained Policy Optimization*, §5.3 and §§6.1–6.3](https://proceedings.mlr.press/v70/achiam17a/achiam17a.pdf).
