---
id: thm-tdmath-finite-bath-error-bound
kind: theorem
title: "Finite-bath canonical error bound"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["cor-taylor-remainder-bound","def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-countable-canonical-model","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"cor-taylor-remainder-bound":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-countable-canonical-model":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
---

## Statement

Let $I$ be a finite nonempty subsystem state set, let $E_i\in\mathbb R$ satisfy $|E_i|\le L$ for $L\ge0$, and let the dimensionless bath entropy $s_B$ be $C^2$ on an open interval $U$ containing $[u_0-L,u_0+L]$, with $|s_B''(u)|\le M$ on that closed interval for $M\ge0$. Use one energy unit for $E_i,u_0,L$, so $\beta=s_B'(u_0)$ has inverse-energy units and $M$ has inverse-energy-squared units; $\delta=ML^2/2$ is dimensionless. Put $Z:=\sum_{j\in I}e^{-\beta E_j}$ and $q_i:=e^{-\beta E_i}/Z$. Suppose the joint shell weights induce the normalized subsystem law $p_i:=e^{s_B(u_0-E_i)}/\sum_{j\in I}e^{s_B(u_0-E_j)}$. Then $|s_B(u_0-E_i)-s_B(u_0)+\beta E_i|\le\delta$ for every $i$, and $\sum_i|p_i-q_i|\le e^{2\delta}-1$.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] $I$ is finite and nonempty; $E_i\in\mathbb R$; $L,M\ge0$; $|E_i|\le L$; and $s_B$ is $C^2$ on an open interval U containing $[u_0-L,u_0+L]$ with the stated second-derivative bound. Both laws are normalized on the same state set.

[F1] [[def-tdmath-countable-canonical-model]]: for a finite energy list and real $\beta$, $q_i=e^{-\beta E_i}/Z$ is the normalized canonical law.

[F2] [[cor-taylor-remainder-bound]]: a bound $|s_B''|\le M$ gives the first-order Taylor error at most $M|E_i|^2/2$.

[F3] [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], and [[thm-natural-logarithm-laws]]: the exponential is positive and logarithms of products are additive.

## Proof

**Given:** The finite subsystem, the twice differentiable bath entropy with bounded second derivative, and the stated shell-weight rule.

1.1 Apply [F2] to $s_B$ at $u_0$ with increment $-E_i$. It gives $s_B(u_0-E_i)=s_B(u_0)-\beta E_i+r_i$ where $|r_i|\le M E_i^2/2\le\delta$. [A1, F2]

1.2 The marginal is therefore $p_i=q_i e^{r_i}/C$, where $C:=\sum_jq_je^{r_j}$. The bounds $e^{-\delta}\le e^{r_j}\le e^\delta$ and $\sum_jq_j=1$ imply $e^{-\delta}\le C\le e^\delta$, so $e^{-2\delta}\le p_i/q_i\le e^{2\delta}$. [F1, F3, step 1.1]

2.1 For $x\in[e^{-2\delta},e^{2\delta}]$, $|x-1|\le e^{2\delta}-1$. Thus $\sum_i|p_i-q_i|=\sum_iq_i|p_i/q_i-1|\le(e^{2\delta}-1)\sum_iq_i=e^{2\delta}-1$. The case $\delta=0$ is included and gives equality of the laws. [F1, F3, step 1.2, algebra] ∎
