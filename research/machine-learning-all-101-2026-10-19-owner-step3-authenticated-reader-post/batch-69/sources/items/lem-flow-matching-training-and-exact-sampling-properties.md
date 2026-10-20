---
id: lem-flow-matching-training-and-exact-sampling-properties
kind: lemma
title: Conditional flow-matching batch gradients and exact-flow output law
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-flow-matching-training-and-sampling
  - def-probability-path-and-velocity-field
  - thm-conditional-flow-matching-gradient-identity
  - def-neural-ode
  - thm-neural-ode-global-smooth-flow
  - def-euclidean-inner-product
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-law-or-distribution-of-a-random-element
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-independent-random-elements-have-product-joint-law
  - thm-change-of-variables-for-expectation
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integral-triangle-inequality
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-mean-value-theorem
justified_by: []
axiom_use: No choice principle is used; all probability laws and samplers are supplied.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §§3.2 and 6.2"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.3 Algorithm 3"
      url: "https://arxiv.org/html/2506.02070"
---

## Statement

Take all inputs, laws, histories, notation, hypotheses, and instructions of the conditional flow-matching training and exact-flow sampling procedure, including its full conditional-path regularity, marginal positivity, finite-loss, derivative-majorant, fresh-batch independence, random-iterate integrability, and parameter-domain assumptions. In particular, the number of training rounds satisfies $N\ge0$, the batch size satisfies $B\ge1$, each $\theta_k$ is measurable with respect to the pre-batch history $\mathcal F_k$, and the $B$ training triples at round $k$ have the supplied law $Q$ independently of that history. For every $k=0,\ldots,N-1$, both $g_k$ and $\nabla_\theta\mathcal L_M(\theta_k)$ are integrable, and

$$\mathbb E[g_k\mid\mathcal F_k]=\nabla_\theta\mathcal L_M(\theta_k)\quad\text{almost surely}.$$

The arithmetic update is defined for every prescribed nonnegative step size; remaining in the open parameter domain is a hypothesis, not a consequence of unbiasedness. If the additional exact-flow sampling hypotheses in that procedure hold, namely a jointly smooth extension of the field to an open time interval containing $[0,1]$ and the uniform state-Lipschitz and origin bounds on every compact parameter set, then its terminal output $X_1=\Phi^{\theta_N}_{1,0}(X_0)$ is well-defined and measurable. For every Borel set $A\subseteq\mathbb R^d$ its conditional output law is

$$\mathbb P(X_1\in A\mid\mathcal F_N)=\mu_0\bigl(\{x:\Phi^{\theta_N}_{1,0}(x)\in A\}\bigr)\quad\text{almost surely}.$$

For $N=0$, there is no batch update, $\theta_N=\theta_0$, and the exact-flow conclusion still applies under the same sampling hypotheses. These statements supply neither convergence of the parameter updates nor equality of the output law with a desired data law, nor a numerical solver or an error or cost bound.

## Statement references

[[alg-flow-matching-training-and-sampling|The complete input, hypothesis, history, batch-update and exact-flow sampling conventions.]]

[Lipman et al., §3.2 and §6.2](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.3 Algorithm 3](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** The conditional probability path and velocity, endpoint sampler, parameterized vector field and its sampled gradients, initial parameter, batch size, step sizes, supplied initial law, and exact-flow regularity hypotheses in the Algorithm.

[F1] [[def-probability-path-and-velocity-field]]: a conditional density path is normalized for the endpoint law almost everywhere, and its conditional velocity is defined by the conditional continuity equation.

[F2] [[thm-conditional-flow-matching-gradient-identity]]: under finite loss, positive finite marginal density, local endpoint domination for the conditional continuity equation, and dominated parameter derivatives, the conditional and marginal squared-loss gradients agree.

[F3] [[def-neural-ode]]: for a fixed parameter, the neural ODE is the initial-value problem $\dot z(t)=v(t,z(t);\theta)$ with the stated initial condition.

[F4] [[thm-neural-ode-global-smooth-flow]]: a jointly smooth field on an open time interval containing $[0,1]$, with uniform state-Lipschitz and origin bounds on compact parameter sets, has a unique global flow on $[0,1]$, and its terminal map is jointly smooth in initial state and parameter.

[F5] [[def-euclidean-inner-product]]: the squared Euclidean loss is $\|a-b\|_2^2=\langle a-b,a-b\rangle$.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the expectation of a finite sum of integrable random vectors is the sum of their expectations, componentwise.

[F7] [[def-law-or-distribution-of-a-random-element]]: the law of a measurable map $S$ under $\mu_0$ assigns a Borel set $A$ the measure $\mu_0(S^{-1}(A))$.

[F8] [[def-conditional-expectation-given-a-sigma-algebra]]: for an integrable real random variable, a conditional-expectation version is measurable, integrable, and has the same integrals on every event in the conditioning sigma-algebra; vector statements apply coordinatewise.

[F9] [[thm-independent-random-elements-have-product-joint-law]]: independent random elements have the product of their marginal laws as their joint law.

[F10] [[thm-change-of-variables-for-expectation]]: the expectation of an integrable function of a random element equals its integral against the law of that element.

[F11] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: an integrable function on a sigma-finite product can be integrated in either order with equal results.

[F12] [[thm-integral-triangle-inequality]]: the absolute value of an integrable scalar function's integral is bounded by the integral of its absolute value.

[F13] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative product-measurable function has a measurable section-integral function and equal iterated and product integrals.

[F14] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable in its interior has each difference quotient equal to an interior derivative.

## Proof

**Given:** The hypotheses in the Algorithm.

1.1 Fix $k$ and a history for which $\theta_k=\theta\in\Theta$ and both losses at $\theta$ are finite. Choose a compact parameter box $H\subset\Theta$ with $\theta$ in its interior. Changing coordinates one at a time, the mean value theorem [F14] and the derivative majorants in [F2] bound the differences between each loss integrand at $\theta'$ and at $\theta$ by the corresponding sums of $|\theta'_j-\theta_j|G^C_{H,j}$ and $|\theta'_j-\theta_j|G^M_{H,j}$. Integrating these bounds proves local finiteness of both losses throughout the interior of $H$, so [F2] applies there and gives $\nabla_\theta\mathcal L_C(\theta)=\nabla_\theta\mathcal L_M(\theta)$. For fixed $w=(t,x_1,x)$, put $a_\theta:=v(t,x;\theta)-u^c_t(x\mid x_1)$. Bilinearity and symmetry [F5] give $$\|a_{\theta+\varepsilon e_j}\|_2^2-\|a_\theta\|_2^2=\langle a_{\theta+\varepsilon e_j}-a_\theta,a_{\theta+\varepsilon e_j}+a_\theta\rangle.$$ Dividing by $\varepsilon$ and taking the limit using differentiability of $v$ shows that the $j$th coordinate of the sample gradient is $2\langle\partial_{\theta_j}v,v-u^c\rangle$, exactly the $j$th coordinate of $\zeta(\theta,w)$. Since the triple has law $Q$, the expectation change-of-variables formula [F10] identifies its $Q$-mean with $\nabla_\theta\mathcal L_C(\theta)$. Thus its $Q$-mean is $\nabla_\theta\mathcal L_M(\theta)$. [given, F1, F2, F5, F10, F14, algebra]

2.1 Each $\zeta_{k,b}$, and hence $g_k$, is integrable by the explicit batch-integrability assumption. For fixed $\theta$, put $m(\theta):=\int_Q\zeta(\theta,w)\,Q(dw)$. Joint measurability, Tonelli [F13], and the local derivative majorants make $m$ measurable and finite; at each visited parameter step 1.1 gives $m(\theta_k)=\nabla_\theta\mathcal L_M(\theta_k)$. Fubini [F11] and the integral triangle inequality [F12] show that each coordinate of $m(\theta_k)$ is integrable, with its absolute expectation bounded by that of the corresponding sample-gradient coordinate. For every $A\in\mathcal F_k$, independence and the product-law fact [F9], the change-of-variables formula [F10], and Fubini [F11] give $$\mathbb E[\mathbf1_A g_k]=\mathbb E\!\left[\mathbf1_A\int_{Q^{\otimes B}}\frac1B\sum_{b=1}^B\zeta(\theta_k,w_b)\,Q^{\otimes B}(d(w_1,\ldots,w_B))\right]=\mathbb E[\mathbf1_A\nabla_\theta\mathcal L_M(\theta_k)],$$ where step 1.1 identifies each fixed-parameter $Q$-mean and [F6] gives linearity. Thus [F8] makes $\nabla_\theta\mathcal L_M(\theta_k)$ a version of $\mathbb E[g_k\mid\mathcal F_k]$; the batch estimate is unbiased conditionally on its pre-batch history. The arithmetic update is defined for every nonnegative step size when $\theta_k\in\Theta$. [given, F6, F8, F9, F10, F11, F12, step 1.1, algebra]

3.1 For the realized $\theta_N$ satisfying the exact-flow bounds, [F3] identifies the sampling equation as a neural ODE and [F4] gives its unique solution on the full interval and joint continuity of $(x,\theta)\mapsto\Phi^\theta_{1,0}(x)$. The terminal output is therefore measurable as a function of the independent initial draw and the training history. Conditional on $\mathcal F_N$, $\theta_N$ is fixed, so [F7] identifies the conditional output law by $\mu_0(\{x:\Phi^{\theta_N}_{1,0}(x)\in A\})$ for each Borel set $A$. This verifies that the exact-flow output is defined; it makes no claim that the learned field realizes the target path. [given, F3, F4, F7] ∎

## Source notes

The cited flow-matching sources motivate conditional regression and exact ODE sampling. The local conditional-unbiasedness argument explicitly treats random iterates, fresh-batch independence, and integrability. The smooth-flow supplier establishes global well-definedness under the stated additional regularity and uniform bounds. No learned-field target-distribution guarantee or numerical approximation bound is asserted.
