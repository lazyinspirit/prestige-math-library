---
id: lem-pa36-localization-adjunction
kind: lemma
title: Localization is left adjoint to global sections
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-pa36-global-sections-and-localization
  - def-quasi-coherent-module-scheme
  - def-sheaf-tensor-product
  - thm-pa36-global-twisted-differential-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§1.5 and §6.4, printed pp. 59–62 and 96"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "Proposition 4.8, printed p. 34; the tensor-Hom adjunction"
---

## Statement

For every $\kappa\in\mathfrak h^*$,
$\operatorname{Loc}_\kappa:A_\kappa\text{-}\mathbf{Mod}\to
\operatorname{QCoh}(X,\mathcal D_\kappa)$ is left adjoint to
$\Gamma_\kappa:\operatorname{QCoh}(X,\mathcal D_\kappa)\to
A_\kappa\text{-}\mathbf{Mod}$.

## Facts & Assumptions

**Given:** The TDO sheaf $\mathcal D_\kappa$, its global algebra
$A_\kappa\cong\Gamma(X,\mathcal D_\kappa)$, a left $A_\kappa$-module $V$, and
a quasi-coherent left $\mathcal D_\kappa$-module $M$.

[F1] $A_\kappa\cong\Gamma(X,\mathcal D_\kappa)$ as filtered algebras
([[thm-pa36-global-twisted-differential-operators]]).

[F2] The sheaf tensor product with $\mathcal D_\kappa$ is computed on affine
charts; a free presentation of $V$ expresses the result as a cokernel of a
map between direct sums of $\mathcal D_\kappa$, so it is quasi-coherent
([[def-sheaf-tensor-product]], [[def-quasi-coherent-module-scheme]]).

## Proof

1.1 By the sheaf tensor-Hom adjunction, a morphism of left
$\mathcal D_\kappa$-modules
$\mathcal D_\kappa\otimes_{A_\kappa}V\to M$ is equivalent to an
$A_\kappa$-linear map
$$V\to\operatorname{Hom}_{\mathcal D_\kappa}(\mathcal D_\kappa,M).$$
The map is natural in $V$ and $M$; [F2] ensures the sheaf tensor lies in
$\operatorname{QCoh}(X,\mathcal D_\kappa)$. [F2, given]

2.1 Evaluation at $1$ identifies
$\operatorname{Hom}_{\mathcal D_\kappa}(\mathcal D_\kappa,M)$ with
$\Gamma(X,M)$. A morphism is determined by the image of $1$; conversely,
each global section $m$ defines the morphism $d\mapsto d\,m$. Under this
identification the $A_\kappa$-action is the one from [F1]. Substituting into
step 1.1 gives the natural bijection
$$\operatorname{Hom}_{\mathcal D_\kappa}(\operatorname{Loc}_\kappa V,M)
\cong\operatorname{Hom}_{A_\kappa}(V,\Gamma_\kappa M),$$
which is the asserted adjunction. Right exactness of localization follows
from right exactness of sheaf tensor product. [F1, step 1.1, algebra] ∎
