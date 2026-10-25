---
id: lem-local-solvability-of-the-augmented-characteristic-ode
kind: lemma
title: "Local solvability and C1 parameter dependence for the augmented characteristic ODE"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmented-characteristic-system-for-a-quasilinear-pde, thm-smooth-dependence-of-ode-solutions-on-parameters]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement

At every $y_0\in V$, the system in
[[def-augmented-characteristic-system-for-a-quasilinear-pde]] has, after
shrinking to $|s|<\epsilon$ and a neighbourhood $W$ of $y_0$, a unique common
solution $(X,Z)$ for $y\in W$.  It is $C^1$ in $(s,y)$.

## Facts & Assumptions

**Given:** The smooth coefficients and $C^1$ initial strip in the definition, and $y_0\in V$.

## Proof

**Proof technique:** direct.

1.1 Put $Y:=(X,Z)$ and $G(x,z):=(a(x,z),b(x,z))$.  The coefficients in the defining Cauchy problem are smooth, so $G$ is smooth. [given, construct]

2.1 Apply [[thm-smooth-dependence-of-ode-solutions-on-parameters]] to $Y'=G(Y)$ with initial value $Y(0,y)=(\gamma(y),\phi(y))$.  It gives a common local interval, uniqueness, and $C^1$ dependence on $y$; including the ODE variable gives $C^1$ dependence on $(s,y)$. [step 1.1, given] ∎
