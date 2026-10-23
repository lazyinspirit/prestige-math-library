---
id: prop-fd-entropy-jump
kind: proposition
title: Entropy jump residual
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - thm-fd-rankine-hugoniot
  - def-fd-piecewise-traces
  - def-fd-conservation-system
  - thm-chain-rule-for-total-derivatives
  - def-countable-choice
dependency_roles:
  thm-fd-rankine-hugoniot: mathematical-premise
  def-fd-piecewise-traces: mathematical-premise
  def-fd-conservation-system: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter III §3.2 and Chapter IV §4.5"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §§2–3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "Piotr Gwiazda, Martin Michálek, and Agnieszka Świerczewska-Gwiazda, A Note on Weak Solutions of Conservation Laws and Energy/Entropy Conservation, §1"
      url: "https://arxiv.org/pdf/1706.10154"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$).

Let $I\subseteq\mathbb R$ and $\Omega\subseteq\mathbb R^d$ be open, let $\mathcal O\subseteq\mathbb R^m$ be open and convex, and let $F_j\in C^1(\mathcal O;\mathbb R^m)$, $1\leq j\leq d$. Let $n\in\mathbb R^d$ have $|n|=1$, let $s\in\mathbb R$, and set $\Sigma=\{(t,x)\in I\times\Omega:n\cdot x=st\}$. Suppose $U$ is piecewise $C^1$ across $\Sigma$, satisfies $U_t+\sum_jDF_j(U)\partial_{x_j}U=0$ classically on each open side, and the state, flux, and entropy compositions are locally integrable. Let $\eta\in C^2(\mathcal O;\mathbb R)$ be convex and let $q_j\in C^1(\mathcal O;\mathbb R)$ satisfy $Dq_j(V)=D\eta(V)DF_j(V)$ for every $V\in\mathcal O$. With $[G]=G_R-G_L$, the distributional entropy residual is
$$\partial_t\eta(U)+\sum_{j=1}^d\partial_{x_j}q_j(U)=\left(\sum_{j=1}^dn_j[q_j(U)]-s[\eta(U)]\right)\delta_\Sigma.$$
Here $\delta_\Sigma$ uses the plane measure defined in the vector jump-residual theorem: integrate in $t$ and in $z\in\mathbb R^{d-1}$ with $x=Ez+stn\in\Omega$, where $E:\mathbb R^{d-1}\to n^\perp$ is a linear isometry onto $n^\perp$, using Lebesgue measure $\lambda_{d-1}$ and singleton mass one when $d=1$. The entropy inequality $\partial_t\eta(U)+\sum_j\partial_{x_j}q_j(U)\leq0$ holds near the interface if and only if $\sum_jn_j[q_j(U)]-s[\eta(U)]\leq0$ at every interface point. Entropy admissibility is an additional condition; the conservation jump equality alone does not imply it.

## Statement references

[[thm-fd-rankine-hugoniot|vector jump-residual calculation]]

[[def-fd-conservation-system|entropy-flux compatibility and inequality convention]]

[[def-countable-choice|Axiom of Countable Choice]]

## Facts & Assumptions

**Given:** Countable Choice; the state field, entropy pair, and planar interface in the Statement.

[F1] [[def-fd-conservation-system]] defines a convex entropy pair by $Dq_j=D\eta\,DF_j$ and fixes the entropy inequality sign by requiring the nonnegative-test integral to be nonnegative.

[F2] [[def-fd-piecewise-traces]] fixes the one-sided traces and jump orientation $[G]=G_R-G_L$.

[F3] [[thm-fd-rankine-hugoniot]] proves the interface distribution calculation from the distributional derivative definition and one-dimensional integration by parts in a normal coordinate.

[F4] [[thm-chain-rule-for-total-derivatives]] states $D(q\circ U)=Dq(U)\circ DU$ when $U$ and $q$ are totally differentiable.

[F5] [[def-countable-choice]]: Countable Choice is the hypothesis required by the Rankine–Hugoniot supplier in [F3].

[A1] On each open side, $U$ satisfies the conservation system classically and has the piecewise $C^1$ extensions from [F2].

## Proof

1.1 On either open side, [F4] and entropy compatibility give $\partial_t\eta(U)+\sum_j\partial_{x_j}q_j(U)=D\eta(U)\left(\partial_tU+\sum_jDF_j(U)\partial_{x_j}U\right)=0$. [given, A1, F1, F4, algebra]

2.1 The fields $\eta(U)$ and $q_j(U)$ have $C^1$ extensions to each side of $\Sigma$. Apply the normal-coordinate distribution calculation from [F3] under the stated Countable Choice assumption [F5] to this scalar density and its scalar fluxes; the bulk residuals vanish by step 1.1, leaving the interface coefficient $\sum_jn_j[q_j(U)]-s[\eta(U)]$. The interface measure is the time integral of the isometric pushforward of Lebesgue measure specified in [F3]. [given, F2, F3, F5, step 1.1]

3.1 If this coefficient is nonpositive everywhere, pairing the residual with any nonnegative test gives a nonpositive value, which is the distributional inequality. If the coefficient is positive at a point, continuity makes it positive on a smaller interface patch; a nonnegative test supported there has positive pairing, contradicting the inequality. Thus the distributional inequality holds exactly under the stated pointwise condition. [given, F2, step 2.1] ∎
