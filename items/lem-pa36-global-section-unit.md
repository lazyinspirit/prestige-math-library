---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-pa36-global-section-unit.json
  precheck: pass
id: lem-pa36-global-section-unit
kind: lemma
title: The unit $V \to \Gamma \operatorname{Loc}_\kappa(V)$ is an isomorphism for antidominant twists
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-pa36-global-sections-and-localization
  - def-quasi-coherent-module-scheme
  - def-sheaf-tensor-product
  - lem-pa36-qcoh-filtered-union-and-cech-colimits
  - thm-pa36-flag-d-affinity
  - thm-pa36-global-twisted-differential-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.4, proof of Theorem 6.4.1, printed p. 96; unit from a free presentation"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "Corollary 4.12 proof, printed pp. 43–44; comparison only, the unit is proved first here"
---

## Statement

For antidominant $\kappa$ and every left $A_\kappa$-module $V$, the unit of
the adjunction in [[lem-pa36-localization-adjunction]] is an isomorphism
$$V\xrightarrow{\sim}\Gamma(X,\operatorname{Loc}_\kappa V).$$

## Facts & Assumptions

**Given:** Antidominant $\kappa$ and a left $A_\kappa$-module $V$.

[F1] $\Gamma(X,-)$ is exact on quasi-coherent $\mathcal D_\kappa$-modules for
antidominant $\kappa$ ([[thm-pa36-flag-d-affinity]]).

[F2] $\Gamma(X,\mathcal D_\kappa)=A_\kappa$ as a filtered algebra
([[thm-pa36-global-twisted-differential-operators]]).

[F3] On this finite affine cover, global sections of quasi-coherent modules
commute with filtered colimits, hence with arbitrary direct sums
([[lem-pa36-qcoh-filtered-union-and-cech-colimits]]).

## Proof

1.1 Choose a free presentation $$A_\kappa^{(I)}\longrightarrow A_\kappa^{(J)}\longrightarrow V\longrightarrow0.$$ Localization is a tensor functor, so it is right exact and gives $$\mathcal D_\kappa^{(I)}\longrightarrow\mathcal D_\kappa^{(J)} \longrightarrow\operatorname{Loc}_\kappa(V)\longrightarrow0.$$ Applying the exact global-sections functor [F1] preserves exactness. [F1, given]

2.1 By [F3], global sections commute with the direct sums in step 1.1; by [F2], each free term becomes the corresponding free $A_\kappa$-module. Under the adjunction unit, the maps on these free terms are the identity maps on $A_\kappa^{(I)}$ and $A_\kappa^{(J)}$. The cokernels of the two presentations are therefore identified by the induced unit map on $V$. Hence $V\to\Gamma(X,\operatorname{Loc}_\kappa V)$ is an isomorphism. [F2, F3, step 1.1, algebra] ∎

