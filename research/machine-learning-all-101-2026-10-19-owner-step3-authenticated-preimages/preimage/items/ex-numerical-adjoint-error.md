---
id: ex-numerical-adjoint-error
kind: example
title: A finite Euler adjoint gradient can differ from the exact flow gradient
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-neural-ode
  - thm-neural-ode-global-smooth-flow
  - alg-adjoint-sensitivity-method
  - thm-continuous-ode-adjoint-gradient-formula
  - thm-discrete-adjoint-gradient-recursion
  - def-parameterized-finite-state-step-objective
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - lem-derivative-algebra-and-chain-rules
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations, §2 and Appendix B"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, §§4.2.1–4.2.2"
      url: "https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf"
verification:
  precheck: pass
---

## Example

On $[0,1]$, consider the two-rate linear neural ODE $u_1'(t)=-u_1(t)$, $u_2'(t)=\theta u_2(t)$ with $u(0)=(1,1)$ and objective $\mathcal J(\theta)=u_2(1;\theta)$, for $\theta$ in a neighborhood of $-100$. At $\theta=-100$, the decay rates are $1$ and $100$. The exact continuous-flow gradient is $\mathcal J'(-100)=\exp(-100)$. For the fixed-step Euler solver with $N\in\mathbb N$ and $N\ge1$ equal steps, its step count $N$ is the resolution setting; the finite computational graph has output $\mathcal J_N(\theta)=(1+\theta/N)^N$ and exact discrete adjoint gradient $\mathcal J_N'(-100)=(1-100/N)^{N-1}$. Thus changing the solver resolution from $N=50$ to $N=100$ changes the finite gradient from $-1$ to $0$. These values are exact for this finite calculation and assert no general solver-error or continuous-versus-discrete gradient bound.

## Example references

[Chen et al., §2 and Appendix B](https://arxiv.org/pdf/1806.07366)

[Papamakarios et al., §§4.2.1–4.2.2](https://www.jmlr.org/papers/volume22/19-1028/19-1028.pdf)

## Facts & Assumptions

**Given:** $T=1$, $u(0)=(1,1)$, $v_\theta(t,u)=(-u_1,\theta u_2)$, terminal loss $u_2(1)$, and the $N$-step forward Euler graph for $N\in\mathbb N$ with $N\ge1$.

[F1] [[def-neural-ode]]: a neural ODE is the initial-value problem $\dot u=v_\theta(t,u)$ with specified initial state.

[F2] [[thm-neural-ode-global-smooth-flow]]: the stated smooth uniformly globally Lipschitz field has a unique smooth flow on the full finite interval.

[F3] [[alg-adjoint-sensitivity-method]]: the continuous procedure solves the terminal adjoint equation and returns its initial, terminal, running, and vector-field parameter contributions.

[F4] [[thm-continuous-ode-adjoint-gradient-formula]]: under common-tube and C1 objective hypotheses, the continuous adjoint expression is the exact derivative of the continuous objective.

[F5] [[def-parameterized-finite-state-step-objective]]: C1 initial and step maps together with a C1 terminal/running objective define one finite real-arithmetic graph and its reduced objective.

[F6] [[thm-discrete-adjoint-gradient-recursion]]: the backward recursion returns the exact gradient of that finite C1 graph.

[F7] [[def-real-exponential-function-and-e]]: $e=\exp(1)$ and $\exp$ is the real exponential function.

[F8] [[thm-derivative-of-exponential]]: $\exp$ is smooth and $(\exp)'=\exp$.

[F9] [[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ for every real $x$.

[F10] [[lem-derivative-algebra-and-chain-rules]]: the sum, product, chain, and positive-integer power rules apply to the differentiable functions used below.

[F11] [[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$.

[A1] Take $I=\Theta=U_0=\mathbb R$ and $\Omega=(-101,-99)$, and set $u_0(\eta)=(1,1)$. The field $v(t,u,\eta)=(-u_1,\eta u_2)$ is jointly $C^\infty$. For every nonempty compact $K\subseteq\mathbb R$, $L_K=\max\{1,\sup_{\eta\in K}|\eta|\}$ and $M_K=0$ give the required state-Lipschitz and origin bounds; the empty compact case is vacuous. By [F7, F8], the exact solution $u_\eta(t)=(\exp(-t),\exp(\eta t))$ is continuous on the compact set $[0,1]\times\overline\Omega$, so its trajectory tube is compact. For the continuous adjoint, take $\phi(u,\eta)=u_2$ on the open set $U_\phi=\mathbb R^2\times\mathbb R$ and $\ell(t,u,\eta)=0$ on the open set $U_\ell=\mathbb R\times\mathbb R^2\times\mathbb R$. These objectives are $C^1$, and their first derivatives are constant, hence bounded and uniformly continuous on the terminal slice and common trajectory tube. Thus the continuous and finite adjoint supplier hypotheses hold.

## Verification

1.1 By [F7, F8, F10], $u_1(t)=\exp(-t)$ and $u_2(t)=\exp(\theta t)$ satisfy the displayed ODE and initial data. By [F2] this is the unique flow, so $\mathcal J(\theta)=\exp(\theta)$ and $\mathcal J'(-100)=\exp(-100)$. [A1, F1, F2, F7, F8, F10, given, algebra]

1.2 The Euler transition is the C1 map $\Psi_k(u,\theta)=((1-1/N)u_1,(1+\theta/N)u_2)$. It is a finite state-step objective as in [F5], and induction gives $u_{2,N}=(1+\theta/N)^N$. By [F10], differentiating this polynomial gives $(1+\theta/N)^{N-1}$; by [F6], the finite discrete adjoint returns exactly this derivative. [F5, F6, F10, given, induction, algebra]

2.1 For the continuous adjoint, $D_u v=\operatorname{diag}(-1,\theta)$, $p(1)=(0,1)$, and $p(t)=(0,\exp(\theta(1-t)))$ solves the terminal adjoint equation by [F8, F10]. Substituting into [F4] gives $\int_0^1\exp(\theta t)\exp(\theta(1-t))\,dt=\int_0^1\exp(\theta)\,dt=\exp(\theta)$ by [F11], which is also the output expression defined by [F3]. [A1, F3, F4, F8, F10, F11, step 1.1, algebra]

3.1 At $\theta=-100$, $N=50$ gives $(1-2)^{49}=-1$, while $N=100$ gives $(1-1)^{99}=0$. By [F9], $\exp(-100)>0$, so both finite gradients differ from the exact continuous gradient; the two finite gradients also differ from each other. This establishes only the stated finite witness, not a general error bound. [F9, step 1.1, step 1.2, algebra] ∎
