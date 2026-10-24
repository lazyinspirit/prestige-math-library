---
id: def-qftx-global-susy-vacuum-state
kind: definition
title: Global supersymmetry vacuum state and invariance
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-breaking-and-phenomenology
axiom_base: "ZF + ACω, as required by the representation data"
deps:
  - def-qftx-super-poincare-algebra-4d
  - def-qftx-unitary-super-poincare-representation
  - def-countable-choice
dependency_roles:
  def-qftx-super-poincare-algebra-4d: mathematical-premise
  def-qftx-unitary-super-poincare-representation: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: not-applicable
physical_scope: "Terminology for a normalized rest-frame ground-state vector in an adopted positive unitary representation of the four-dimensional extended super-Poincare algebra. It asserts neither existence of such a vector nor realization as a vacuum of a quantum field theory."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§7.1, printed p. 72, equations (7.1.1)–(7.1.2): the N=1 vacuum-energy sum-of-norms identity and the zero-energy/supersymmetry-invariance relation; the local item fixes the extended-algebra operator-domain formulation."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§6.1, printed pp. 35–36: the vacuum energy as a sum of supercharge norms and the supersymmetry-invariant vacuum condition."
verification:
  precheck: pending
---

## Definition

Let a positive unitary representation of the four-dimensional extended super-Poincare algebra act on a complex Hilbert space $\mathcal H$, with common invariant product domain $\mathcal D$, translation generators $P^\mu$, supercharges $Q^I_\alpha$, and actual Hilbert adjoints $(Q^I_\alpha)^*$, using metric $\eta=\operatorname{diag}(-1,1,1,1)$, $\sigma^0=I_2$, and natural units $\hbar=c=1$. A **rest-frame ground-state vector** is a vector $\Omega\in\mathcal D$ such that $\|\Omega\|=1$, there is a real number $E_\Omega$ with $P^0\Omega=E_\Omega\Omega$ and $P^j\Omega=0$ for $j=1,2,3$, and

$$\langle P^0\psi,\psi\rangle\ge E_\Omega\|\psi\|^2\qquad(\psi\in D(P^0)).$$

Such a vector is called a **global supersymmetry vacuum state** in the representation. Its vacuum energy is the eigenvalue $E_\Omega$, with units of mass in natural units; it is not an energy density. The vector is **boundary-neutral** when $Z^{IJ}\Omega=0$ and $\bar Z_{IJ}\Omega=0$ for every central generator, **supersymmetry-invariant** when $Q^I_\alpha\Omega=(Q^I_\alpha)^*\Omega=0$ for every $I,\alpha$, and **supersymmetry-noninvariant** when at least one of these vectors is nonzero. These are separate predicates: boundary neutrality does not define supersymmetry invariance. The definition does not assert that any such vector exists or that a constant field configuration is allowed by a separate field-model boundary condition.

## Definition references

[Stephen P. Martin, *A Supersymmetry Primer*, §7.1, equations (7.1.1)–(7.1.2)](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §6.1](https://arxiv.org/pdf/hep-th/0101055).

Four-dimensional real extended super-Poincare algebra: [[def-qftx-super-poincare-algebra-4d]].

Positive unitary representation, joint spectrum, common product domain, and actual charge adjoints: [[def-qftx-unitary-super-poincare-representation]].

The Axiom of Countable Choice, which is part of the representation's mathematical base: [[def-countable-choice]].
