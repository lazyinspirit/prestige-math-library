---
id: def-stoichiometric-mass-invariant
kind: definition
title: Stoichiometric conservation and dissipation functionals
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps:
  - def-reaction-vector-field-and-quasipositivity
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§0, printed p. 1: mass conservation as a qualitative requirement for transport-reaction discretizations. The weighted linear-functional convention here is defined explicitly."
verification:
  precheck: n/a
---

## Definition

Let $F:U\to\mathbb R^m$ be the reaction vector field of [[def-reaction-vector-field-and-quasipositivity]], and let $R\subset U$ be a state set. A vector $c\in[0,\infty)^m$ is a **stoichiometric conservation vector on $R$** if $c^TF(z)=0$ for every $z\in R$. It is a **stoichiometric dissipation vector on $R$** if $c^TF(z)\le0$ for every $z\in R$. The corresponding pointwise mass is $c^Tz$.

For a Lebesgue measurable domain $\Omega\subseteq\mathbb R^d$ and a measurable field $u:\Omega\to\mathbb R^m$ such that $\int_\Omega|c^Tu(x)|\,dx<\infty$, the continuous total mass is $\mathcal M_c(u)=\int_\Omega c^Tu(x)\,dx$, with Lebesgue integration. In particular, this is defined for bounded measurable fields on finite-volume domains. For any finite index set $I$ with assigned positive weights $m_i$, the discrete total mass of states $U_i\in\mathbb R^m$ is $\mathcal M_{c,h}(U)=\sum_{i\in I}m_ic^TU_i$. The weights and index set are part of the discrete model. Conservation and dissipation always refer to these stated functionals and the stated state set; no claim is made for a different weight vector or for reactions outside $R$.
