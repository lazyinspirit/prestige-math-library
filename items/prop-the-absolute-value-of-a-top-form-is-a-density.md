---
id: prop-the-absolute-value-of-a-top-form-is-a-density
title: "Absolute value of a top form as a density"
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
    - title: "Lee Proposition 16.35(c), p.428 and nonvanishing paragraph p.430; Nicolaescu Example 3.4.2(b) with corrected regularity"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

For a smooth top form $\omega$ on $M$, pointwise absolute value defines a nonnegative continuous density $|\omega|$, with $|\omega|=|-\omega|$. It is smooth on the nonvanishing locus of $\omega$ but need not be smooth at its zeros.

## Facts & Assumptions

[F1] [[def-density-bundle-and-smooth-density]]: For a smooth manifold $M^n$, with boundary allowed, the **density bundle** is $DM=\coprod_{p\in M}D(T_pM)$. In coordinates $x$, let $|dx|=|dx^1\cdots dx^n|$ be the density taking value one on the coordinate frame. On overlaps, $$|dy|=|\det D_x y|\,|dx|.$$ A smooth density is a section with smooth real coefficient in these frames. Its support is the closure of its nonzero locus. The absolute determinants are positive smooth transition functions and satisfy the cocycle identities by the chain rule. A countable atlas and thm-vector-bundle-construction-from-a-smooth-cocycle therefore give a smooth line bundle. For boundary charts the same gluing proof uses half-space product charts; smoothness of transitions follows from their local extensions, and Hausdorffness and second countability follow as for the supplied cocycle construction. The fibers are lines by prop-one-densities-form-a-one-dimensional-vector-space. When $n=0$ the empty frame trivializes $DM=M\times\mathbb R$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 If $\omega=f\,dx^1\wedge\cdots\wedge dx^n$, define $|\omega|=|f|\,|dx|$. Taking absolute values in the determinant transformation law gives the density transition law, so these local expressions glue. Their coefficients are continuous and nonnegative, and changing $\omega$ to $-\omega$ leaves them unchanged. [F1]

2.1 Near a point where $f\neq0$, its sign is constant, so $|f|=f$ or $-f$ is smooth there. For $\omega=x\,dx$ on $\mathbb R$, the coefficient $|x|$ has left derivative $-1$ and right derivative $1$ at zero, hence is not smooth. The zero form itself gives the smooth zero density; on a zero-manifold every function is smooth. [step 1.1, algebra] ∎
