---
id: def-root-of-unity-weyl-and-dual-weyl-module-families
kind: definition
title: Integral Weyl and dual Weyl families at a root of unity
status: published
dependency_level: 4
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-quantum-group-forms, def-axiom-of-choice, thm-quantum-highest-weight-modules-deform-the-classical-weight-character, thm-root-of-unity-lusztig-module-category-is-braided-rigid, thm-integral-triangular-decomposition-for-the-lusztig-form]
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

Assume the Axiom of Choice inherited from the integral global-basis suppliers ([[def-axiom-of-choice]]). Fix a finite simply-laced root system, its full weight lattice $P$ and coroot lattice $Q^\vee$, and the corresponding Lusztig form $U_A$ over $A=\mathbb Z[v,v^{-1}]$. Let $\zeta\in\mathbb C^\times$ satisfy $\operatorname{ord}(\zeta^2)=\ell$, with $\ell$ odd and $\ell>h$, where $h$ is the maximum of the Coxeter numbers of the irreducible components (the usual Coxeter number in the irreducible case). Both orders $\ell$ and $2\ell$ for $\zeta$ are permitted. For an irreducible system, use the category of finite dimensional integrable type-1 modules with full toral quantum-binomial weight characters supplied by [[thm-root-of-unity-lusztig-module-category-is-braided-rigid]]. For a reducible system $\Phi=\bigsqcup_a\Phi_a$, use the same conditions componentwise on $P=\bigoplus_aP_a$ and $Q^\vee=\bigoplus_aQ_a^\vee$: the full toral character and every divided-power weight shift are required for each simple color. Concretely its algebra is the tensor product of the component Lusztig forms, specialized at the same $\zeta$. Indeed different components' generators commute, so multiplication from that tensor product is surjective, and the free integral triangular bases of [[thm-integral-triangular-decomposition-for-the-lusztig-form]] make it injective. Tensoring the component coproducts and antipodes supplies the Hopf structure; the product of their pivots supplies the pivotal isomorphism. Thus the component categories supply the stated duality on every finite module over this tensor product, without requiring that the module itself be a pure tensor.

For $\lambda\in P^+$ let $V_A(\lambda)=U_A^-v_\lambda$ be the actual finite free highest lattice of [[thm-quantum-highest-weight-modules-deform-the-classical-weight-character]]. Define
$$
\Delta_\zeta(\lambda)=\mathbb C\otimes_{A,\,v\mapsto\zeta}V_A(\lambda),\qquad \nabla_\zeta(\lambda)=\Delta_\zeta(-w_0\lambda)^*.
$$
Here $(-)^*$ is the ordinary finite-dimensional Hopf dual in the stated category. These are the **Weyl** and **dual Weyl** families. The pivotal isomorphism identifies their double duals with the original modules, so ordinary duality exchanges the two families, with label $\lambda\mapsto-w_0\lambda$.

A module has a Weyl or dual Weyl filtration if it has a finite submodule filtration with sections in the corresponding family. A **tilting module** has both filtrations. Existence of indecomposable tiltings at every label, their classification, and their affine-alcove behavior are separate results; these are not included in this definition.
