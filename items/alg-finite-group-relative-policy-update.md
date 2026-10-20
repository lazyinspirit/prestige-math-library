---
id: alg-finite-group-relative-policy-update
kind: algorithm
title: "Finite-budget group-relative policy update"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-verifier-and-generation-protocol
  - def-differentiable-stochastic-policy
  - lem-finite-response-likelihood-ratio-change-of-measure
  - def-probability-measure
  - def-finite-sum
justified_by:
  - lem-finite-group-relative-update-termination-and-calls
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning, original arXiv v1"
      url: "https://arxiv.org/pdf/2501.12948v1"
      locator: "§2.2.1, GRPO objective, old-policy sequence ratios, group-relative reward normalization, and reference-policy penalty."
    - title: "John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov, Proximal Policy Optimization Algorithms, original arXiv v1"
      url: "https://arxiv.org/pdf/1707.06347v1"
      locator: "§2.2 and §3, clipped surrogate based on the old/new policy probability ratio and the KL-penalty alternative."

---

## Definition

Fix a nonempty finite ordered prompt list $(q_1,\ldots,q_M)$ with no repeated prompt. For each prompt $q_\ell$, take the finite truncated response set $Y_{q_\ell}$, ordered policy support $B_{q_\ell}$, and policy family $\pi_\theta(\cdot\mid q_\ell)$ from the generation protocol, with open parameter domain $U$. Fix a reference probability mass function $\pi_{\mathrm{ref}}(\cdot\mid q_\ell)$ that is positive on exactly $B_{q_\ell}$, a finite reward function $r_{q_\ell}:B_{q_\ell}\to\mathbb R$, an initial parameter $\theta_0\in U$, group size $G\ge2$, a positive integer number $T$ of outer iterations, a positive integer number $K$ of inner steps per outer iteration, a clipping threshold $\epsilon\in(0,1)$, a penalty weight $\beta\ge0$, and positive step sizes $\eta_{t,k}$ for $1\le t\le T$ and $1\le k\le K$. The prompt weights are uniform. Response draws, reward and policy-mass evaluations, scalar arithmetic, square roots, logarithms and comparisons are supplied terminating exact operations with finite per-call costs. Draws return supported responses with the specified independent law. Also supply an exact total domain oracle $M_U:\mathbb R^d\to\{0,1\}$, returning $1$ exactly on $U$, and an exact objective-gradient oracle: given the frozen outer-iteration data and a parameter in $U$, it returns the Euclidean gradient of $F_t$ when that total derivative exists and returns undefined-gradient otherwise. Both oracles terminate on every call with finite per-call cost. The gradient oracle includes the fixed finite objective data and any policy evaluations needed for its decision. This is a supplied-oracle model; it asserts neither an algorithm for deciding differentiability of arbitrary functions nor a general membership algorithm for arbitrary open sets.

At outer iteration $t$, freeze $\theta_{t-1}$ and, for each prompt $q_\ell$, draw $G$ independent responses $Y_{\ell,1},\ldots,Y_{\ell,G}$ from $\pi_{\theta_{t-1}}(\cdot\mid q_\ell)$. Compute the finite rewards $R_{\ell,i}:=r_{q_\ell}(Y_{\ell,i})$, their mean

$$\overline R_\ell:=\frac1G\sum_{i=1}^{G}R_{\ell,i},$$

and their population standard deviation

$$s_\ell:=\sqrt{\frac1G\sum_{i=1}^{G}(R_{\ell,i}-\overline R_\ell)^2}.$$

Set $A_{\ell,i}:=(R_{\ell,i}-\overline R_\ell)/s_\ell$ when $s_\ell>0$, and set $A_{\ell,i}=0$ for every $i$ when $s_\ell=0$. Hold the responses, rewards, and advantages fixed through the $K$ inner steps. For a candidate parameter $\theta\in U$, use the sequence-level ratio

$$\rho_{\ell,i}(\theta):=\frac{\pi_\theta(Y_{\ell,i}\mid q_\ell)}{\pi_{\theta_{t-1}}(Y_{\ell,i}\mid q_\ell)}.$$

The denominator is positive. Define $\operatorname{clip}(x,1-\epsilon,1+\epsilon):=\min(1+\epsilon,\max(1-\epsilon,x))$, and use the exact finite-distribution forward KL penalty

$$D_{\mathrm{KL}}(\pi_\theta(\cdot\mid q_\ell)\Vert\pi_{\mathrm{ref}}(\cdot\mid q_\ell)):=\sum_{j=1}^{n_{q_\ell}}\pi_\theta(b_{q_\ell,j}\mid q_\ell)\log\frac{\pi_\theta(b_{q_\ell,j}\mid q_\ell)}{\pi_{\mathrm{ref}}(b_{q_\ell,j}\mid q_\ell)},$$

where $(b_{q,1},\ldots,b_{q,n_q})$ is the ordered support from the generation protocol. The empirical objective is

$$F_t(\theta):=\frac1M\sum_{\ell=1}^{M}\left[\frac1G\sum_{i=1}^{G}\min\left\{\rho_{\ell,i}(\theta)A_{\ell,i},\operatorname{clip}(\rho_{\ell,i}(\theta),1-\epsilon,1+\epsilon)A_{\ell,i}\right\}-\beta D_{\mathrm{KL}}(\pi_\theta(\cdot\mid q_\ell)\Vert\pi_{\mathrm{ref}}(\cdot\mid q_\ell))\right].$$

For each outer iteration, set $\theta^{(0)}:=\theta_{t-1}$. For each inner step $k$, call the supplied objective-gradient oracle at $\theta^{(k-1)}$. If it returns a gradient, form the proposed update

$$\theta^{(k)}:=\theta^{(k-1)}+\eta_{t,k}\nabla F_t(\theta^{(k-1)})$$

and call $M_U$ at that proposal. If $M_U$ returns $1$, apply it; the stipulated fixed positive support then holds on $U$. If the gradient oracle returns undefined-gradient, stop and return the last valid parameter with status undefined-gradient. If $M_U$ returns $0$, stop and return the last valid parameter with status invalid-update. After $K$ successful inner steps set $\theta_t:=\theta^{(K)}$ and continue to the next outer iteration. After $T$ successful outer iterations return $\theta_T$ with status complete. This procedure asserts no monotone improvement, unbiasedness, or convergence guarantee.

## Definition references

[[lem-finite-group-relative-update-termination-and-calls]]: proves valid-parameter and finite-objective properties, finite termination, and the response-draw and gradient-attempt bounds in the supplied-oracle model.

[[def-verifier-and-generation-protocol|The finite truncation, response sets, policy support, and prompt-wise probability masses.]]

[[def-differentiable-stochastic-policy|The differentiable policy family and fixed positive support convention.]]

[[lem-finite-response-likelihood-ratio-change-of-measure|For positive finite response laws, the sequence-level probability ratio is the exact finite change-of-measure factor before clipping.]]

[[def-finite-sum|The finite sums used for group averages and the exact finite-distribution KL.]]

[[def-probability-measure|The probability laws that govern the finite response draws.]]
