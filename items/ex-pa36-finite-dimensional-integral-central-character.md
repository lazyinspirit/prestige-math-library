---
id: ex-pa36-finite-dimensional-integral-central-character
kind: example
title: Finite-dimensional irreducible sl2 modules have exact integral central characters
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-bgg-category-o
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - cor-pa36-category-o-localization
  - lem-harish-chandra-projection-computes-highest-weight-scalars
  - prop-verma-and-finite-dimensional-modules-lie-in-category-o
  - thm-pa36-regular-beilinson-bernstein-localization
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - thm-harish-chandra-isomorphism-for-the-center
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.4, printed p. 96; coherent localization and the exact infinitesimal character"
---

## Example

Let $G=\mathrm{SL}_2$ and $n\ge0$. The finite-dimensional irreducible
$V(n\rho)$ of highest weight $n\rho$ lies in BGG category $\mathcal O$ and
has exact central character $\chi_{(n+1)\rho}$. Since the Weyl group sends
$(n+1)\rho$ to $-(n+1)\rho$, the same character has regular antidominant
representative
$$\kappa=-(n+1)\rho.$$
The corollary [[cor-pa36-category-o-localization]] therefore localizes this
object to a coherent strongly B-equivariant $\mathcal D_\kappa$-module. The
claim concerns the **exact** central-character subcategory
$\ker\chi_\kappa\cdot V=0$. The generalized-character condition
$\forall v\ \exists N:\,(\ker\chi_\kappa)^N v=0$ is a different condition;
no equivalence for the entire generalized block is asserted.

## Facts & Assumptions

**Given:** $G=\mathrm{SL}_2$, its Weyl group $W=\{1,s\}$,
$\rho(h)=1$, and an integer $n\ge0$.

[F1] The simple finite-dimensional representation of highest weight
$n\rho$ exists and is irreducible ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

[F2] Finite-dimensional $\mathfrak h$-semisimple modules belong to BGG
category $\mathcal O$ ([[prop-verma-and-finite-dimensional-modules-lie-in-category-o]]
via [[def-bgg-category-o]]).

[F3] A central element acts on a highest-weight module of highest weight
$\lambda$ by $\operatorname{pr}(z)(\lambda)$, and the shifted Harish–Chandra
map is W-invariant ([[lem-harish-chandra-projection-computes-highest-weight-scalars]],
[[thm-harish-chandra-isomorphism-for-the-center]]).

[F4] For integral regular antidominant $\kappa$, the exact central-character
part of BGG $\mathcal O$ localizes to coherent strongly B-equivariant modules
([[cor-pa36-category-o-localization]]).

## Verification

1.1 By [F1], $V(n\rho)$ is finite-dimensional and irreducible. Its Cartan action is diagonalizable, so [F2] places it in $\mathcal O$. Schur's lemma makes every central element act by a scalar; evaluating on a highest vector and using [F3], its central character is $\chi_{n\rho+\rho}= \chi_{(n+1)\rho}$. [F1, F2, F3]

2.1 In type $A_1$, $s\rho=-\rho$, so $s((n+1)\rho)=-(n+1)\rho=\kappa$. W-invariance in [F3] gives $\chi_\kappa=\chi_{(n+1)\rho}$. The pairing $\langle\kappa,\alpha^\vee\rangle=-(n+1)$ is nonzero and nonpositive, so $\kappa$ is regular antidominant. [F3, step 1.1, algebra]

3.1 The central ideal $\ker\chi_\kappa$ annihilates $V(n\rho)$ exactly, not merely by a power, because its central character is $\chi_\kappa$ by step 2.1. Thus it belongs to the exact subcategory in [F4], and that corollary gives the asserted coherent strongly B-equivariant localization. The generalized-character condition permits nilpotent action of the central ideal and is not used in this example. [F4, step 2.1] ∎

