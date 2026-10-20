---
id: alg-direct-preference-optimization-finite-budget
kind: algorithm
title: Finite-budget direct preference optimization by mini-batch gradient descent
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-bradley-terry-preference-model
  - thm-dpo-reward-policy-reparameterization
  - def-finite-straight-line-computational-program
  - def-c-one-map-and-local-inverse
  - alg-reverse-mode-automatic-differentiation
  - thm-reverse-mode-computes-gradient
justified_by:
  - lem-finite-budget-dpo-properties-and-work
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Definition

Input a finite ordered preference dataset $D=((x_i,y_i^w,y_i^l))_{i=1}^n$ with $n\ge1$, finite response sets $Y_{x_i}$ of size at least two, distinct $y_i^w,y_i^l\in Y_{x_i}$, reference probability vectors $q_{x_i}$ with all coordinates positive, a coefficient $\beta>0$, a parameter domain $\Theta\subseteq\mathbb R^d$ that is open, and a conditional policy family $\pi_\theta(\cdot\mid x_i)$ that is a probability vector with all coordinates positive on each $Y_{x_i}$ for every $\theta\in\Theta$, with coordinates totally differentiable in $\theta$ and continuous derivative. Also input an initial value $\theta_0\in\Theta$, a finite integer $T\ge0$, a list of finite nonempty mini-batches $B_t=(i_{t,1},\ldots,i_{t,m_t})$ with indices in $\{1,\ldots,n\}$ for each $0\le t<T$, and finite step sizes $\eta_t\ge0$. Duplicated indices in a mini-batch are allowed. Require each observed scalar log-probability $\theta\mapsto\log\pi_\theta(y_i^w\mid x_i)$ and $\theta\mapsto\log\pi_\theta(y_i^l\mid x_i)$ to be represented by a finite real-arithmetic graph whose primitive maps are totally differentiable with continuous derivative matrices on an open neighborhood of every evaluated parameter; a piecewise-$C^1$ primitive is allowed only on a unique strict branch.

Also supply an exact membership oracle $M_\Theta:\mathbb R^d\to\{0,1\}$ that returns $1$ exactly on $\Theta$ and terminates on every call, with finite declared per-call cost $c_\Theta(z)$. Use this oracle for the candidate-parameter test below. Supply terminating exact evaluators for the policy-graph primitive values, derivative-transpose applications, and primitive-domain and strict-branch tests. In the work model, each such primitive call and each scalar arithmetic operation, comparison, exponential, logarithm, maximum, or absolute value costs one unit; vector operations count their scalar entries. Membership-oracle calls are counted separately and their costs added. These supplied oracle operations are part of the input model; openness of $\Theta$ alone is not asserted to provide a computable membership test, nor is a bit-complexity or floating-point bound asserted.

For real $u$, evaluate the per-record loss by the equivalent stable expression
$$s(u)=\max(0,-u)+\log(1+e^{-|u|})=\log(1+e^{-u}).$$
Set $u_i(\theta)=\beta[\log(\pi_\theta(y_i^w\mid x_i)/q_{x_i}(y_i^w))-\log(\pi_\theta(y_i^l\mid x_i)/q_{x_i}(y_i^l))]$ and initially compute $L_D(\theta_0)=n^{-1}\sum_i s(u_i(\theta_0))$. Store $(\theta_{\mathrm{last}},L_{\mathrm{last}})=(\theta_0,L_D(\theta_0))$.

For $t=0,\ldots,T-1$, compute the mini-batch objective $L_t(\theta)=m_t^{-1}\sum_{j=1}^{m_t}s(u_{i_{t,j}}(\theta))$. For each index in the batch, use reverse-mode AD on the finite policy-log-probability graphs to compute the Euclidean gradients of the two log probabilities, and form the exact loss gradient from the finite DPO gradient formula proved on the A page:
$$g_t=-\frac{\beta}{m_t}\sum_{j=1}^{m_t}\sigma(-u_{i_{t,j}}(\theta_t))\left(\nabla_\theta\log\pi_{\theta_t}(y_{i_{t,j}}^w\mid x_{i_{t,j}})-\nabla_\theta\log\pi_{\theta_t}(y_{i_{t,j}}^l\mid x_{i_{t,j}})\right).$$
Do not differentiate through the max/absolute-value expression used only to evaluate $s(u)$; use this explicit derivative formula. If reverse mode returns `DOMAIN_ERROR` or `NONDIFFERENTIABLE`, stop and return $(\theta_{\mathrm{last}},L_{\mathrm{last}})$ with that status. Otherwise set $\theta'=\theta_t-\eta_tg_t$. Evaluate $M_\Theta(\theta')$. If its value is $0$, so $\theta'\notin\Theta$, stop and return the last valid pair with status `DOMAIN_ERROR`. If its value is $1$, so $\theta'\in\Theta$, set $\theta_{t+1}=\theta'$, evaluate $L_D(\theta_{t+1})$, and update $(\theta_{\mathrm{last}},L_{\mathrm{last}})=(\theta_{t+1},L_D(\theta_{t+1}))$.

After all $T$ updates, return $(\theta_T,L_D(\theta_T))$ with status `COMPLETED`. Thus $T=0$ returns the initial parameters and initial full-data loss. The procedure uses the fixed mini-batch indices and step-size schedule as supplied; it makes no convergence or statistical-optimality assertion.

## Definition references

[[lem-finite-budget-dpo-properties-and-work]]: proves well-definedness, the stored valid-pair invariant, the exact mini-batch gradient, finite termination, and the work and membership-oracle bounds under the declared input model.

[[def-bradley-terry-preference-model|Finite Bradley–Terry preference model]]: defines the pairwise comparison probability and sigmoid.

[[thm-dpo-reward-policy-reparameterization|DPO reward-policy reparameterization and gradient]]: supplies the exact finite DPO loss gradient.

[[def-finite-straight-line-computational-program|Finite real-arithmetic program]]: fixes the finite topological graph and real-arithmetic conventions, and allows a primitive to be piecewise C1 only on a unique strict branch.

[[def-c-one-map-and-local-inverse|Continuously differentiable Euclidean maps]]: C1 means total differentiability with continuous derivative matrix.

[[alg-reverse-mode-automatic-differentiation|Reverse-mode automatic differentiation]]: specifies the reverse sweep for a finite scalar-output C1 graph.

[[thm-reverse-mode-computes-gradient|Reverse mode computes the graph gradient]]: confirms the returned cotangents are the exact derivative on each fixed strict branch.

[Rafailov et al., §4 Eq. (7), Appendix B implementation](https://arxiv.org/pdf/2305.18290v3)

[Purdue PrefOpt course notes, §4a](https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html)

## Remarks

This is a finite real-arithmetic update procedure. The equivalent loss-value expression and procedure properties are justified by the separate result listed above. The gradient is computed from the explicit smooth formula, so the max/absolute-value implementation branch at $u=0$ is not differentiated. No floating-point error bound, minimizer attainment, convergence rate, or generalization guarantee is asserted.
