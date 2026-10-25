---
id: ex-exact-state-with-inexact-log-density-quadrature
title: "Zero state error can coexist with nonzero log-density quadrature error"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-countable-choice
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - cor-global-log-density-error-from-state-and-quadrature
  - thm-continuous-flow-log-density-equation
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-derivative-of-exponential
  - lem-derivative-of-a-power
  - thm-euler-global-state-and-log-density-error
  - thm-natural-logarithm-laws
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_use: "Countable Choice is used only for the continuous-flow density interpretation; the state and quadrature computations are choice-free."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ricky T. Q. Chen, Yulia Rubanova, Jesse Bettencourt, and David Duvenaud, Neural Ordinary Differential Equations"
      url: "https://arxiv.org/pdf/1806.07366"
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference"
      url: "https://jmlr.org/papers/volume22/19-1028/19-1028.pdf"
---

## Example

Assume Countable Choice. Let $f(t,x)=tx$ on $[0,1]\times\mathbb R$, start at $x(0)=0$, take $h=1/N$, and choose any strictly positive continuous probability density $p_0$ on $\mathbb R$. Initialize $\widehat\ell_0=\log p_0(0)$. The exact and Euler state paths are both identically zero, but the left-Euler divergence update has terminal log-density error $h/2$. Replacing only this scalar update by midpoint quadrature makes the terminal log density exact.

## Facts & Assumptions

**Given:** Countable Choice, $T=1$, $N\ge1$, $h=1/N$, $f(t,x)=tx$ on $[0,1]\times\mathbb R$, $x(0)=0$, a positive continuous probability density $p_0$ on $\mathbb R$, and the Euler state update with scalar initialization $\widehat\ell_0=\log p_0(0)$ and either left-Euler or midpoint divergence quadrature.

[A1] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]); it is used only for the density interpretation inherited from [F1].

[F1] Along a C¹ diffeomorphic flow, $p_t(\Phi_t(x_0))=p_0(x_0)/\det D\Phi_t(x_0)$ and the exact log-density derivative is $-\operatorname{div}_x f$ ([[thm-continuous-flow-log-density-equation]]).

[F2] The error bound separates the global state error, the state sensitivity of the scalar quadrature update, and its exact-start quadrature defect ([[cor-global-log-density-error-from-state-and-quadrature]]).

[F3] Euler on a bounded C² tube satisfies the proved state and log-density error bounds when its divergence update uses left-Euler quadrature ([[thm-euler-global-state-and-log-density-error]]).

[F4] The real exponential is defined by its power series and has derivative $\exp$ ([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]]).

[F5] The derivative of $t\mapsto\exp(t^2/2)$ is $t\exp(t^2/2)$, by the power rule, scalar-multiple rule, and chain rule ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F6] $\exp(t)>0$ and $1/\exp(t)=\exp(-t)$ ([[cor-exponential-reciprocal-and-positivity]]).

[F7] For positive $u,v$, $\log(u/v)=\log u-\log v$ ([[thm-natural-logarithm-laws]]).

[F8] The natural logarithm is the inverse of $\exp$ on positive reals, so $\log(\exp u)=u$ ([[def-natural-logarithm]]).

## Verification

1.1 Define $\Phi_t(x_0):=\exp(t^2/2)x_0$ for $t\in[0,1]$. By [F5], $\partial_t\Phi_t(x_0)=t\exp(t^2/2)x_0=t\Phi_t(x_0)=f(t,\Phi_t(x_0))$, and $\Phi_0(x_0)=x_0$; [F6] makes each slice a C¹ diffeomorphism $\mathbb R\to\mathbb R$ with inverse $y\mapsto y/\exp(t^2/2)$. Thus $x(t)=\Phi_t(0)=0$ is the exact path. Euler has $x_{n+1}=x_n+h t_nx_n$, hence $x_n=0$ for every $n$ by induction. The compact convex state set $K=[-1,1]$ contains the exact and Euler states, and the bounded convex open set $U=(-1,2)\times(-2,2)$ contains $[0,1]\times K$; $f(t,x)=tx$ is C² with bounded derivatives there, so [F3] applies to its left-Euler density update. [given, F3, F4, F5, F6, algebra, induction]

2.1 Since $D\Phi_1(0)=\exp(1/2)$, [F1] gives $p_1(0)/p_0(0)=1/\exp(1/2)=\exp(-1/2)$ by [F6]. Since $p_0(0)>0$, [F7] and [F8] give the exact log-density change $\log p_1(0)-\log p_0(0)=-1/2$. The left-Euler update gives $-h\sum_{n=0}^{N-1}t_n=-h^2\sum_{n=0}^{N-1}n=-h^2N(N-1)/2=-1/2+h/2$: the sum formula holds at $N=1$, and if it holds at $N$ then adding the next term $N$ gives $(N+1)N/2$. Thus its absolute log-density error is $h/2>0$. For midpoint quadrature, $-h\sum_{n=0}^{N-1}(t_n+h/2)=-h^2\bigl(N(N-1)/2+N/2\bigr)=-h^2N^2/2=-1/2$, so its error is zero with the state solver unchanged. In [F2], state sensitivity vanishes because the integrand $t$ is independent of $x$, and midpoint quadrature has zero local defect because $t$ is affine. [given, A1, F1, F2, F6, F7, F8, step 1.1, algebra, induction] ∎
