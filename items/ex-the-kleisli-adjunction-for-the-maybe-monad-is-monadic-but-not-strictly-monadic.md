---
id: ex-the-kleisli-adjunction-for-the-maybe-monad-is-monadic-but-not-strictly-monadic
kind: example
title: "The Kleisli adjunction for the maybe monad is monadic but not strictly monadic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monad, def-kleisli-category, def-eilenberg-moore-category, def-t-algebra-and-algebra-homomorphism, def-monadic-and-strictly-monadic-functor, thm-the-comparison-functor-exists-and-is-unique, thm-the-kleisli-adjunction-induces-the-given-monad, thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras, def-equivalence-and-adjoint-equivalence-of-categories, prop-category-isomorphisms-are-bijective-on-objects-and-morphisms, def-initial-terminal-and-zero-object]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.4(i), 5.2.11(i), and 5.3.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For the maybe monad $T(X)=X\amalg\{\bot\}$ on $\mathbf{Set}$, the comparison from its Kleisli category to its Eilenberg–Moore category is an equivalence but not an isomorphism under the fixed concrete coproduct encoding. Hence the Kleisli right adjoint is monadic but not strictly monadic.

## Facts & Assumptions

**Given:** The maybe monad with unit the inclusion and multiplication collapsing either occurrence of $\bot$.

[L1] A Kleisli arrow $X\to Y$ is an ordinary map $X\to T(Y)$ ([[def-kleisli-category]]).

[L2] An equivalence consists of quasi-inverse functors and natural isomorphisms between their composites and the identity functors ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L3] An isomorphism of categories is bijective on objects and morphisms ([[prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]).

[L4] A right adjoint with induced monad $T$ is monadic when its comparison functor $K$ is an equivalence of categories, and strictly monadic when $K$ is an isomorphism of categories ([[def-monadic-and-strictly-monadic-functor]]).

[L5] The comparison functor is the unique $K$ with $U^TK=U$, $KF=F^T$ and $K(\varepsilon_d)=\varepsilon^T_{Kd}$, namely $K(d)=(Ud,U\varepsilon_d)$ and $K(h)=U(h)$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

[L6] For a monad $(T,\eta,\mu)$ on $\mathcal C$ there is an adjunction $F_T:\mathcal C\rightleftarrows\mathcal C_T:U_T$ whose induced monad is $(T,\eta,\mu)$ on the nose ([[thm-the-kleisli-adjunction-induces-the-given-monad]]).

[L7] For a monad $T$ on $\mathcal C$ the canonical comparison $M:\mathcal C_T\to\mathcal C^T$ sends $A$ to the free algebra $(TA,\mu_A)$ and is fully faithful, and its strict image is exactly the full subcategory of free $T$-algebras ([[thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras]]).

## Verification

**Proof technique:** direct.

1.1 A map $X\to Y\amalg\{\bot\}$ is a partial function from $X$ to $Y$, with $\bot$ marking undefined values, so [L1] identifies the Kleisli category with sets and partial functions. [L1, construct]

1.2 A maybe-monad algebra chooses a point $y_0$ as the value of $\bot$ and fixes every $y\in Y$ by the unit law; the multiplication law adds no further data. Algebra homomorphisms are precisely basepoint-preserving maps, so the Eilenberg–Moore category is the category of pointed sets. [given, construct]

2.1 By [L6] the Kleisli adjunction induces the maybe monad on the nose, so [L5] applies to it and its comparison is the canonical one of [L7]. That comparison sends a Kleisli object $X$ to the free algebra $(T(X),\mu_X)$, which step 1.2 identifies with the free pointed set $X\amalg\{\bot\}$ based at $\bot$, and sends a Kleisli arrow to its underlying function. A quasi-inverse sends a pointed set $(Y,y_0)$ to $Y\setminus\{y_0\}$; adjoining and deleting the basepoint give the natural isomorphisms required by [L2], including the empty Kleisli object and the one-point algebra. [step 1.1, step 1.2, L2, L5, L6, L7]

3.1 Thus the comparison is an equivalence, and by [L6] the Kleisli right adjoint induces the maybe monad, so it is monadic by [L4]. [step 2.1, L2, L4, L6]

4.1 By [L7] the strict image of the comparison is the full subcategory of free algebras. Under the fixed tagged-coproduct encoding, the pointed singleton $(\{0\},0)$ is isomorphic to but not literally equal to the free pointed set on the empty set, whose point is the distinguished tag $\bot$, so it is not in that image. The comparison is therefore not surjective on objects and is not an isomorphism by [L3], so strict monadicity fails by [L4]. [step 2.1, L3, L4, L7] ∎
