---
id: lem-pa36-localization-adjunction
kind: lemma
title: Localization is left adjoint to global sections
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-pa36-global-sections-and-localization
  - def-quasi-coherent-module-scheme
  - def-sheaf-tensor-product
  - lem-pa36-flag-tdo-pbw-and-twist
  - thm-affine-quasi-coherent-equivalence
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

[F2] Localization is the sheafification of
$W\mapsto\mathcal D_\kappa(W)\otimes_{A_\kappa}V$, with restrictions induced
from $\mathcal D_\kappa$ ([[def-pa36-global-sections-and-localization]]);
the tensor-Hom correspondence for this construction is checked in step 2.1.

[F3] The local PBW basis makes $\mathcal D_\kappa$ quasi-coherent as a left
$\mathcal O_X$-module ([[lem-pa36-flag-tdo-pbw-and-twist]], proof steps 1.1–2.1).
On an affine chart $U=\operatorname{Spec}R$, it is therefore the
associated sheaf of $Q=\Gamma(U,\mathcal D_\kappa)$; its sections on $D(f)$
are $Q_f$ ([[thm-affine-quasi-coherent-equivalence]]). The Axiom of Choice
is inherited from these suppliers.

## Proof

1.1 On an affine chart $U=\operatorname{Spec}R$, put $Q=\Gamma(U,\mathcal D_\kappa)$. Right multiplication by $A_\kappa$ commutes with left multiplication by $R$. Thus $Q\otimes_{A_\kappa}V$ is an $R$-module, and for every $f\in R$ there is a natural isomorphism $$Q_f\otimes_{A_\kappa}V\cong(Q\otimes_{A_\kappa}V)_f,\qquad(q/f^m)\otimes v\longmapsto(q\otimes v)/f^m.$$ The inverse sends $(q\otimes v)/f^m$ to $(q/f^m)\otimes v$; additivity and the balancing relations make both maps well-defined. By [F2] and [F3], the tensor presheaf on the distinguished-open basis of $U$ is therefore the associated sheaf of $Q\otimes_{A_\kappa}V$. Its sheafification has that restriction on $U$, proving that $\operatorname{Loc}_\kappa V$ is quasi-coherent. Left multiplication on its first factor gives its left $\mathcal D_\kappa$-action. [F2, F3, given, algebra]

2.1 The tensor-Hom correspondence here follows directly from balancing. Given an $A_\kappa$-linear map $V\to\operatorname{Hom}_{\mathcal D_\kappa}(\mathcal D_\kappa,M)$, write its value at $v$ as $h_v$ and send $d\otimes v$ over $W$ to $h_v|_W(d)$. The $A_\kappa$-action on Hom is $(a h)(d)=h(da)$, so the rule is balanced, respects restrictions, and extends through sheafification to a $\mathcal D_\kappa$-linear map. Conversely such a sheaf map gives $h_v$ by $d\mapsto\phi(d\otimes v)$. These constructions are inverse and natural, and step 1.1 places their source in the required quasi-coherent category. [F2, step 1.1, construct]

3.1 Evaluation at $1$ identifies $\operatorname{Hom}_{\mathcal D_\kappa}(\mathcal D_\kappa,M)$ with $\Gamma(X,M)$. A morphism is determined by the image of $1$; conversely, each global section $m$ defines the morphism $d\mapsto d\,m$. Under this identification the $A_\kappa$-action is the one from [F1]. Substituting into step 2.1 gives the natural bijection $$\operatorname{Hom}_{\mathcal D_\kappa}(\operatorname{Loc}_\kappa V,M) \cong\operatorname{Hom}_{A_\kappa}(V,\Gamma_\kappa M),$$ which is the asserted adjunction. Right exactness of localization follows because a left adjoint preserves cokernels. [F1, step 2.1, algebra] ∎

