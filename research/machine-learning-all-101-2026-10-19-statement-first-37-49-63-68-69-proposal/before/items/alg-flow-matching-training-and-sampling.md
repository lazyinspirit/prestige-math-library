---
id: alg-flow-matching-training-and-sampling
kind: algorithm
title: Conditional flow-matching training and exact-flow sampling
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-probability-path-and-velocity-field
  - thm-conditional-flow-matching-gradient-identity
  - def-neural-ode
  - thm-neural-ode-global-smooth-flow
  - def-euclidean-inner-product
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-law-or-distribution-of-a-random-element
justified_by: []
axiom_use: No choice principle is used; all probability laws and samplers are supplied.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §§3.2 and 6.2"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §3.3 Algorithm 3"
      url: "https://arxiv.org/html/2506.02070"
---

## Algorithm

Let $d,q,B\ge1$, $N\ge0$, and $\Theta\subseteq\mathbb R^q$ be open. Let $\lambda$ be a sigma-finite Borel measure on $\mathbb R^d$, let $\pi$ be a Borel probability measure on $\mathbb R^d$, and let $\rho:[0,1]\times\mathbb R^d\times\mathbb R^d\to[0,\infty]$ and $u^c:[0,1]\times\mathbb R^d\times\mathbb R^d\to\mathbb R^d$ be jointly measurable. Assume $\int\rho_t(x\mid x_1)\,\lambda(dx)=1$ for every $t$ and for $\pi$-almost every $x_1$, and that for $\pi$-almost every $x_1$, $\rho_t(\cdot\mid x_1)$ and every component of $\rho_tu^c_t(\cdot\mid x_1)$ are continuously differentiable in $(t,x)$ on $(0,1)\times\mathbb R^d$ and satisfy $$\partial_t\rho_t(x\mid x_1)+\sum_{j=1}^d\partial_{x_j}\bigl(\rho_t(x\mid x_1)(u^c_t)^j(x\mid x_1)\bigr)=0.$$ For every compact $K\subset(0,1)\times\mathbb R^d$, suppose there is a nonnegative $G_K\in L^1(\pi)$ bounding on $K$, for $\pi$-almost every $x_1$, the absolute values of $\rho_t$, $\partial_t\rho_t$, each component of $\rho_tu^c_t$, and each corresponding spatial flux derivative.

Define $p_t(x):=\int\rho_t(x\mid x_1)\,\pi(dx_1)$ and $J_t(x):=\int\rho_t(x\mid x_1)u^c_t(x\mid x_1)\,\pi(dx_1)$. Assume $0<p_t(x)<\infty$ and $J_t(x)$ is finite on $[0,1]\times\mathbb R^d$, and put $u^m_t(x):=J_t(x)/p_t(x)$. Let $v:[0,1]\times\mathbb R^d\times\Theta\to\mathbb R^d$ be jointly measurable and continuously differentiable in $\theta$, with jointly measurable parameter derivative. Define $$\mathcal L_C(\theta):=\int_0^1\!\int\!\int\rho_t(x\mid x_1)\|v(t,x;\theta)-u^c_t(x\mid x_1)\|_2^2\,\pi(dx_1)\lambda(dx)dt$$ and $$\mathcal L_M(\theta):=\int_0^1\!\int p_t(x)\|v(t,x;\theta)-u^m_t(x)\|_2^2\,\lambda(dx)dt.$$ Assume these losses and $$C:=\int_0^1\!\int\!\int\rho_t(x\mid x_1)\|u^c_t(x\mid x_1)-u^m_t(x)\|_2^2\,\pi(dx_1)\lambda(dx)dt$$ are finite for every training parameter. Write $D_\theta v$ for the matrix with entries $(D_\theta v)_{ij}=\partial_{\theta_j}v^i$. For every compact $H\subset\Theta$ and coordinate $j$, suppose nonnegative integrable majorants $G^C_{H,j}$ on $dt\,\lambda(dx)\,\pi(dx_1)$ and $G^M_{H,j}$ on $dt\,\lambda(dx)$ satisfy, for every $\theta\in H$ outside fixed null sets, $$2\rho_t(x\mid x_1)\left|\left\langle\partial_{\theta_j}v(t,x;\theta),v(t,x;\theta)-u^c_t(x\mid x_1)\right\rangle\right|\le G^C_{H,j}(t,x,x_1)$$ and $$2p_t(x)\left|\left\langle\partial_{\theta_j}v(t,x;\theta),v(t,x;\theta)-u^m_t(x)\right\rangle\right|\le G^M_{H,j}(t,x).$$ Supply independent samples $(T,X_1,X)$ with joint law $dt\,\pi(dx_1)\rho_t(x\mid x_1)\lambda(dx)$, where $dt$ is Lebesgue probability measure on $[0,1]$.

Given an initial parameter $\theta_0\in\Theta$ and step sizes $\eta_0,\ldots,\eta_{N-1}\ge0$, for each $k=0,\ldots,N-1$ draw a batch of $B$ triples and set
$$g_k:=\frac1B\sum_{b=1}^{B}2\,D_\theta v(T_{k,b},X_{k,b};\theta_k)^T\left(v(T_{k,b},X_{k,b};\theta_k)-u^c_{T_{k,b}}(X_{k,b}\mid X_{1,k,b})\right), \qquad \theta_{k+1}:=\theta_k-\eta_k g_k.$$
Assume all iterates $\theta_0,\ldots,\theta_N$ remain in $\Theta$. Training uses only conditional samples and does not solve the neural ODE during these updates. For exact-flow sampling, draw $X_0$ from a supplied initial probability law $\mu_0$ and return $X_1=\Phi^{\theta_N}_{1,0}(X_0)$, where $\Phi^{\theta_N}_{t,s}$ solves $\dot z(t)=v(t,z(t);\theta_N)$ with $z(s)=X_0$. This last step is well-defined if the field extends to an open time interval containing $[0,1]$, is jointly $C^\infty$ in time, state, and parameter, and on every compact parameter set $H\subset\Theta$ has uniform constants $L_H,M_H<\infty$ satisfying
$$\|v(t,z;\theta)-v(t,w;\theta)\|_2\le L_H\|z-w\|_2, \qquad \|v(t,0;\theta)\|_2\le M_H$$
for $t\in[0,1]$, $\theta\in H$, and $z,w\in\mathbb R^d$. For each Borel set $A\subseteq\mathbb R^d$, the output law assigns mass $\mu_0(\{x:\Phi^{\theta_N}_{1,0}(x)\in A\})$. The procedure gives no convergence guarantee for the parameter updates or equality of this output law with a desired data law.

## Algorithm references

[Lipman et al., §3.2 and §6.2](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §3.3 Algorithm 3](https://arxiv.org/html/2506.02070)

## Facts & Assumptions

**Given:** The conditional probability path and velocity, endpoint sampler, parameterized vector field and its sampled gradients, initial parameter, batch size, step sizes, supplied initial law, and exact-flow regularity hypotheses in the Algorithm.

[F1] [[def-probability-path-and-velocity-field]]: a conditional density path is normalized for the endpoint law almost everywhere, and its conditional velocity is defined by the conditional continuity equation.

[F2] [[thm-conditional-flow-matching-gradient-identity]]: under finite loss, positive finite marginal density, local endpoint domination for the conditional continuity equation, and dominated parameter derivatives, the conditional and marginal squared-loss gradients agree.

[F3] [[def-neural-ode]]: for a fixed parameter, the neural ODE is the initial-value problem $\dot z(t)=v(t,z(t);\theta)$ with the stated initial condition.

[F4] [[thm-neural-ode-global-smooth-flow]]: a jointly smooth field on an open time interval containing $[0,1]$, with uniform state-Lipschitz and origin bounds on compact parameter sets, has a unique global flow on $[0,1]$.

[F5] [[def-euclidean-inner-product]]: the squared Euclidean loss is $\|a-b\|_2^2=\langle a-b,a-b\rangle$.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the expectation of a finite sum of integrable random vectors is the sum of their expectations, componentwise.

[F7] [[def-law-or-distribution-of-a-random-element]]: the law of a measurable map $S$ under $\mu_0$ assigns a Borel set $A$ the measure $\mu_0(S^{-1}(A))$.

## Verification

**Given:** The hypotheses in the Algorithm.

1.1 At an update parameter where the hypotheses of [F2] hold, [F1] identifies the sampled triple with the conditional path law. The coordinate gradient of its squared loss is the vector appearing in $g_k$, by differentiating the squared Euclidean norm [F5]. Its expected sample gradient is therefore $\nabla_\theta\mathcal L_C(\theta_k)$, which equals $\nabla_\theta\mathcal L_M(\theta_k)$ by [F2]. [given, F1, F2, F5, algebra]

2.1 Each batch vector is integrable by the derivative-domination hypotheses in [F2]. Linearity [F6] gives $\mathbb E[g_k]=\nabla_\theta\mathcal L_M(\theta_k)$; hence the update uses an unbiased batch estimate of the marginal objective gradient whenever the stated hypotheses hold. The arithmetic update is defined for every nonnegative step size as long as $\theta_k\in\Theta$. [given, F2, F6, step 1.1, algebra]

3.1 For $\theta_N$ satisfying the exact-flow bounds, [F3] identifies the sampling equation as a neural ODE and [F4] gives its unique solution on the full interval. The terminal map is continuous, hence Borel measurable, and [F7] identifies the returned law by $\mu_0(\{x:\Phi^{\theta_N}_{1,0}(x)\in A\})$ for each Borel set $A$. This verifies that the exact-flow output is defined; it makes no claim that the learned field realizes the target path. [given, F3, F4, F7] ∎

## Source notes

The cited papers specify the conditional sample, squared regression loss, parameter update, and ODE sampling steps. This algorithm makes the sampler law, batch gradient, exact global-flow conditions, and output law explicit. Its parameter updates carry no optimization convergence guarantee, and the exact flow is a mathematical solution rather than a numerical solver with an error bound.
