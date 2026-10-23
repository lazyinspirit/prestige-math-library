---
id: def-fd-lax-pattern
kind: definition
title: Strict hyperbolicity and Lax shock pattern
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-conservation-system
dependency_roles:
  def-fd-conservation-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter III §3.1 and Chapter VIII §8.3"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

For a one-dimensional system $U_t+\partial_xF(U)=0$ with $F\in C^1(\mathcal O;\mathbb R^m)$ on an open state domain $\mathcal O\subseteq\mathbb R^m$, the system is strictly hyperbolic at $V\in\mathcal O$ if the Jacobian $DF(V)$ has $m$ distinct real eigenvalues. Write them in increasing order as $\lambda_1(V)<\cdots<\lambda_m(V)$. For states $U_L,U_R\in\mathcal O$ and speed $s\in\mathbb R$ satisfying the Rankine–Hugoniot equality
$$F(U_R)-F(U_L)=s(U_R-U_L),$$
assume strict hyperbolicity at both states. The jump is a $k$-Lax shock, $1\leq k\leq m$, if
$$\lambda_k(U_R)<s<\lambda_k(U_L),$$
and also $\lambda_{k-1}(U_L)<s$ when $k>1$, and $s<\lambda_{k+1}(U_R)$ when $k<m$. The outer inequality is omitted at each endpoint $k=1$ or $k=m$.

## Definition references

[[def-fd-conservation-system|one-dimensional conservation system]]

## Remarks

These inequalities describe the incoming-characteristic pattern at a shock. They are a definition: strict hyperbolicity and the Rankine–Hugoniot equality alone do not imply them. This definition makes no claim that a system has such a shock, or that a Riemann or Cauchy problem has a solution or a unique solution.
