---
id: prop-density-pullback-under-local-diffeomorphisms
title: "Pullback of densities by local diffeomorphisms"
kind: proposition
status: draft
origin: pipeline
deps: ["def-density-bundle-and-smooth-density"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Propositions 16.38 and 16.40, pp.430–431, with local-diffeomorphism qualification"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

For a local diffeomorphism $F:M^n\to N^n$, pullback of smooth densities is smooth and in coordinates satisfies
$$F^*(f|dy|)=(f\circ F)|\det DF|\,|dx|.$$
It is real-linear, obeys $F^*(a\delta)=(a\circ F)F^*\delta$ for smooth functions $a$ on $N$, and $(F\circ G)^*=G^*F^*$ for composable local diffeomorphisms.

## Facts & Assumptions

[F1] [[def-density-bundle-and-smooth-density]]: For a smooth manifold $M^n$, with boundary allowed, the **density bundle** is $DM=\coprod_{p\in M}D(T_pM)$. In coordinates $x$, let $|dx|=|dx^1\cdots dx^n|$ be the density taking value one on the coordinate frame. On overlaps, $$|dy|=|\det D_x y|\,|dx|.$$ A smooth density is a section with smooth real coefficient in these frames. Its support is the closure of its nonzero locus. The absolute determinants are positive smooth transition functions and satisfy the cocycle identities by the chain rule. A countable atlas and thm-vector-bundle-construction-from-a-smooth-cocycle therefore give a smooth line bundle. For boundary charts the same gluing proof uses half-space product charts; smoothness of transitions follows from their local extensions, and Hausdorffness and second countability follow as for the supplied cocycle construction. The fibers are lines by prop-one-densities-form-a-one-dimensional-vector-space. When $n=0$ the empty frame trivializes $DM=M\times\mathbb R$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Define $(F^*\delta)_p(v_1,\ldots,v_n)=\delta_{F(p)}(dF_pv_1,\ldots,dF_pv_n)$. The density transformation law makes this a density and gives the stated coefficient. Since $\det DF$ never vanishes, its sign is locally constant and its absolute value is smooth, including in boundary charts. [F1, given]

2.1 Linearity and the scalar-function rule follow by evaluation, and the chain rule with $|\det(AB)|=|\det A||\det B|$ gives composition. For $n=0$ the empty determinant equals one. The local-diffeomorphism assumption matters: the smooth map $x\mapsto x^2$ pulls $|dy|$ back pointwise to $2|x||dx|$, which is not smooth at zero. [step 1.1, algebra] ∎
