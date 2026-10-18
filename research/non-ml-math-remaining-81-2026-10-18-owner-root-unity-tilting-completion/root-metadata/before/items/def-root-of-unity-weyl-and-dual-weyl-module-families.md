---
id: def-root-of-unity-weyl-and-dual-weyl-module-families
kind: definition
title: Integral Weyl and dual Weyl families at a root of unity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-quantum-group-forms, def-axiom-of-choice, thm-quantum-highest-weight-modules-deform-the-classical-weight-character, thm-root-of-unity-lusztig-module-category-is-braided-rigid]
justified_by: [lem-root-of-unity-integral-weyl-specialization]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Henning Haahr Andersen and Catharina Stroppel, Fusion Rings for Quantum Groups
      url: https://pure.au.dk/ws/files/77171619/Fusion_Rings_for_Qunatum_Groups.pdf
      locator: Section 2.1, PDF pages 6–7; Weyl and dual Weyl modules.
---

## Definition

Assume the Axiom of Choice inherited from the integral global-basis suppliers ([[def-axiom-of-choice]]). Fix a finite simply-laced root system, its full weight lattice $P$ and coroot lattice $Q^\vee$, and the corresponding Lusztig form $U_A$ over $A=\mathbb Z[v,v^{-1}]$. Let $\zeta\in\mathbb C^\times$ satisfy $\operatorname{ord}(\zeta^2)=\ell$, with $\ell$ odd and $\ell>h$, where $h$ is the Coxeter number. Both orders $\ell$ and $2\ell$ for $\zeta$ are permitted. Work in the category of finite dimensional integrable type-1 modules with full toral quantum-binomial weight characters supplied by [[thm-root-of-unity-lusztig-module-category-is-braided-rigid]], not just eigenvalues of the $K_i$.

For $\lambda\in P^+$ let $V_A(\lambda)=U_A^-v_\lambda$ be the actual finite free highest lattice of [[thm-quantum-highest-weight-modules-deform-the-classical-weight-character]]. Define
$$
\Delta_\zeta(\lambda)=\mathbb C\otimes_{A,\,v\mapsto\zeta}V_A(\lambda),\qquad \nabla_\zeta(\lambda)=\Delta_\zeta(-w_0\lambda)^*.
$$
Here $(-)^*$ is the ordinary finite-dimensional Hopf dual in the stated category. These are the **Weyl** and **dual Weyl** families. The pivotal isomorphism identifies their double duals with the original modules, so ordinary duality exchanges the two families, with label $\lambda\mapsto-w_0\lambda$.

A module has a Weyl or dual Weyl filtration if it has a finite submodule filtration with sections in the corresponding family. A **tilting module** has both filtrations. Existence of indecomposable tiltings at every label, their classification, and their affine-alcove behavior are separate results; these are not included in this definition.
