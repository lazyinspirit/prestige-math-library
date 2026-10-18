---
id: def-pa36-global-sections-and-localization
kind: definition
title: Global sections and localization at a fixed infinitesimal character
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-pa36-flag-tdo-and-module
  - def-quasi-coherent-module-scheme
  - def-sheaf-tensor-product
  - thm-pa36-global-twisted-differential-operators
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§1.5 and §6.4, printed pp. 59–62 and 96"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "§4.4, printed pp. 33–34; localization and global sections"
---

## Definition

Fix $\kappa\in\mathfrak h^*$ and $A_\kappa$, $\mathcal D_\kappa$ as in
[[def-pa36-flag-tdo-and-module]]. By
[[thm-pa36-global-twisted-differential-operators]], the sheaf
$\mathcal D_\kappa$ is a right $A_\kappa$-module by multiplication by global
sections, and $\Gamma(X,-)$ takes values in left $A_\kappa$-modules through
the infinitesimal action. Define
$$\operatorname{Loc}_\kappa(V):=\mathcal D_\kappa\otimes_{A_\kappa}V,
\qquad V\in A_\kappa\text{-}\mathbf{Mod},$$
where the tensor product is the sheaf tensor product. Define
$\Gamma_\kappa(M):=\Gamma(X,M)$ for a quasi-coherent left
$\mathcal D_\kappa$-module $M$. Localization is right exact as a tensor
functor. The next item proves the adjunction and verifies that these
constructions land in the stated categories.
