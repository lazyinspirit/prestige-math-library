---
id: def-aqft-operator-basis-quotient
kind: definition
title: Finite-order invariant operator-basis quotient
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-aqft-local-operator-and-dimension
  - lem-aqft-finite-order-local-operator-space-finite-dimensional
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
  lem-aqft-finite-order-local-operator-space-finite-dimensional: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics (2004 TASI Lectures)"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
verification:
  precheck: n/a
---
## Definition

Fix a finite jet order $r$, maximum polynomial field degree $q$, engineering weight $D$, finite field-species list, coefficient field $\mathbb C$, and complex reductive affine algebraic group $G$ with the finite-dimensional rational action specified on the jet generators, including the declared spacetime-index symmetries. Let $W_D$ be the finite-dimensional space of all local polynomials of weight $D$ and degree at most $q$, before imposing $G$-invariance, and let $V_D=W_D^G$ be its invariant scalar subspace. An admitted raw relation space is a specified $G$-stable linear subspace $\widetilde R_D\leq W_D$, given by explicit linear identities among the chosen polynomials. Its invariant part is $R_D=\widetilde R_D\cap V_D$. Any action, boundary, or observable interpretation of the selected identities is extra mathematical data and must be stated with the result that verifies it.

The finite-order invariant operator-basis quotient is

$$
\mathcal Q_D:=V_D/R_D.
$$

Two invariant operators represent the same class exactly when their difference lies in $R_D$. An operator basis is any finite list of representatives in $V_D$ of a vector-space basis of $\mathcal Q_D$. The quotient records precisely the declared relation space; it does not assert that every relation relevant to an arbitrary EFT, observable, or infinite operator tower has been included.

## Definition references

[[def-aqft-local-operator-and-dimension|Finite-jet local operators and engineering dimension]]

[[lem-aqft-finite-order-local-operator-space-finite-dimensional|Finite dimensionality of fixed-order local operator spaces]]

[Burgess, §§2.1–2.2](https://arxiv.org/pdf/hep-th/0701053)

[Neubert, §2](https://arxiv.org/pdf/hep-ph/0512222)

[Criado–Pérez-Victoria, §§3 and 5.1](https://arxiv.org/pdf/1811.09413)
