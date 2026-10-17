---
id: ex-euler-linear-flow-exact-log-density-update
title: "Euler has state error but exact log-density quadrature for a linear flow"
kind: example
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-countable-choice
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - def-integer-power
  - cor-exponential-reciprocal-and-positivity
  - cor-mean-value-theorem
  - lem-power-monotone
  - thm-algebra-of-derivatives
  - thm-continuous-flow-log-density-equation
  - thm-derivative-of-exponential
  - thm-euler-global-state-and-log-density-error
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is used only for the continuous-flow density interpretation; the scalar state and Euler sums are choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference"
      url: "https://jmlr.org/papers/volume22/19-1028/19-1028.pdf"
---

## Example

Assume Countable Choice. Let $f(t,x)=x$ on $[0,1]\times\mathbb R$, start at $x(0)=1$, take $h=1/N$, and use any strictly positive continuous probability density $p_0$ on $\mathbb R$. Initialize $\widehat\ell_0=\log p_0(1)$. The exact state is $x(t)=e^t$, while Euler gives $x_n=(1+h)^n$, so its final state error is $e-(1+1/N)^N>0$. The exact continuous-flow log-density change is $-1$, and the Euler divergence accumulator also gives exactly $-1$.

## Facts & Assumptions

**Given:** Countable Choice, $T=1$, $N\ge1$, $h=1/N$, $f(t,x)=x$ on $[0,1]\times\mathbb R$, $x(0)=1$, a positive continuous probability density $p_0$ on $\mathbb R$, and the Euler state and divergence updates initialized by $\widehat\ell_0=\log p_0(1)$.

[A1] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]); it is used only for the density interpretation inherited from [F1].

[F1] For a C¹ diffeomorphic flow, $p_t(\Phi_t(x_0))=p_0(x_0)/\det D\Phi_t(x_0)$ and the log-density derivative is $-\operatorname{div}f$ ([[thm-continuous-flow-log-density-equation]]).

[F2] Under the stated C² tube and flow hypotheses, Euler state updates and the divergence accumulator have the fixed-time error bounds proved in [[thm-euler-global-state-and-log-density-error]].

[F3] The real exponential is defined by its power series, is differentiable with derivative $\exp$, and satisfies $\exp(0)=1$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]]).

[F4] $\exp(t)>0$ and $1/\exp(t)=\exp(-t)$ ([[cor-exponential-reciprocal-and-positivity]]).

[F5] The mean value theorem gives $\exp(h)-\exp(0)=\exp'(c)h$ for some $c\in(0,h)$ ([[cor-mean-value-theorem]]).

[F6] $\exp$ is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[F7] $\exp(u+v)=\exp(u)\exp(v)$ ([[thm-exponential-addition-formula]]).

[F8] Natural powers preserve order on nonnegative bases for exponent $N\ge1$ ([[lem-power-monotone]]); they satisfy the recursive natural-power definition ([[def-integer-power]]).

[F9] A scalar multiple of a differentiable function is differentiable with derivative the same scalar multiple ([[thm-algebra-of-derivatives]]).

[F10] For positive $u,v$, $\log(u/v)=\log u-\log v$ ([[thm-natural-logarithm-laws]]).

[F11] The natural logarithm is the inverse of $\exp$ on positive reals, so $\log(\exp u)=u$ ([[def-natural-logarithm]]).

## Verification

1.1 Extend the given field to the open domain $\mathbb R^2$ by the same formula $f(t,x)=x$; its restriction to $[0,1]\times\mathbb R$ is unchanged. Define $\Phi_t(x_0):=\exp(t)x_0$ for $t\in[0,1]$. By [F3] and [F9], $\partial_t\Phi_t(x_0)=\exp(t)x_0=f(t,\Phi_t(x_0))$ and $\Phi_0(x_0)=x_0$; [F4] makes every slice a C¹ diffeomorphism $\mathbb R\to\mathbb R$ with inverse $y\mapsto y/\exp(t)$. Thus $x(t)=\Phi_t(1)=\exp(t)$ is the exact path. Euler satisfies $x_{n+1}=(1+h)x_n$, so induction gives $x_n=(1+h)^n$. Since $h>0$, [F5] gives $\exp(h)-1=\exp(c)h$ for some $c\in(0,h)$, and [F6] with $\exp(0)=1$ gives $\exp(c)>1$, hence $1+h<\exp(h)$. By [F8], $(1+h)^N<\exp(h)^N$; [F7] gives $\exp(h)^N=\exp(Nh)=\exp(1)$, so $|x_N-x(1)|=\exp(1)-(1+h)^N>0$. For $1\le n\le N$, [F8] and [F7] give $1\le x_n\le\exp(nh)\le\exp(1)$, while $x_0=1$; exact states lie in $[1,\exp(1)]$ by [F6]. Therefore $K=[0,\exp(1)]$ contains the exact path and Euler nodes. The bounded convex open set $U=(-1,2)\times(-1,\exp(1)+1)$ contains $[0,1]\times K$, and $f(t,x)=x$ is C² with bounded derivatives there, so [F2] applies. [given, F2, F3, F4, F5, F6, F7, F8, F9, induction, algebra]

2.1 Here $D\Phi_1(1)=\exp(1)$, so [F1] gives $p_1(\exp(1))/p_0(1)=1/\exp(1)=\exp(-1)$ by [F4]. Since $p_0(1)>0$, [F10] and [F11] show that the exact log-density change is $\log(p_1(\exp(1)))-\log p_0(1)=-1$. Euler subtracts $h\operatorname{div}_x f=h$ on each of the $N$ steps, so its computed change is $-Nh=-1$; with the given exact initialization, the log-density error is zero despite the positive state error from step 1.1. [given, A1, F1, F4, F10, F11, step 1.1, algebra] ∎
