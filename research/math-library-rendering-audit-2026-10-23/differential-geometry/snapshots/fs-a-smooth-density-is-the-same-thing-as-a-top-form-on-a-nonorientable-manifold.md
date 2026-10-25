---
id: fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold
title: "False: densities and top forms coincide on nonorientable manifolds"
kind: false-statement
status: published
origin: pipeline
deps: ["def-density-bundle-and-smooth-density", "prop-every-smooth-manifold-admits-a-positive-smooth-density", "thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.37 and following explanation, p.430"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

False assertion: the smooth density bundle and the top-form bundle have a canonical identification even on a nonorientable manifold.

## Facts & Assumptions

[F1] [[def-density-bundle-and-smooth-density]]: For a smooth manifold $M^n$, with boundary allowed, the **density bundle** is $DM=\coprod_{p\in M}D(T_pM)$. In coordinates $x$, let $|dx|=|dx^1\cdots dx^n|$ be the density taking value one on the coordinate frame. On overlaps, $$|dy|=|\det D_x y|\,|dx|.$$ A smooth density is a section with smooth real coefficient in these frames. Its support is the closure of its nonzero locus. The absolute determinants are positive smooth transition functions and satisfy the cocycle identities by the chain rule. A countable atlas and thm-vector-bundle-construction-from-a-smooth-cocycle therefore give a smooth line bundle. For boundary charts the same gluing proof uses half-space product charts; smoothness of transitions follows from their local extensions, and Hausdorffness and second countability follow as for the supplied cocycle construction. The fibers are lines by prop-one-densities-form-a-one-dimensional-vector-space. When $n=0$ the empty frame trivializes $DM=M\times\mathbb R$.

[F2] [[prop-every-smooth-manifold-admits-a-positive-smooth-density]]: Assuming $\mathrm{AC}_\omega$, every smooth manifold, with or without boundary, admits a smooth positive density.

[F3] [[thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form]]: Assume $\mathrm{AC}_\omega$. A smooth manifold is orientable if and only if it has a nowhere-vanishing smooth top-degree form.

## Refutation

**Given:** The proposed assertion; use the data constructed below.

1.1 Consider the strip quotient $(\mathbb R\times(-1,1))/((s,t)\sim(s+1,-t))$. Narrow rectangles of s-width less than one give charts; the seam changes coordinates by $(s,t)\mapsto(s+1,-t)$, of determinant $-1$. Disjoint translates make the quotient Hausdorff and images of rational rectangles form a countable base. Thus it is a smooth manifold. The local positive density $|ds\,dt|$ is unchanged by the seam and descends globally, consistently with existence of positive densities. [F1, F2]

2.1 A nowhere-zero top form on this quotient would lift to $a(s,t)\,ds\wedge dt$ with $a(s+1,0)=-a(s,0)$. Continuity on the central segment from s=0 to s=1 forces a zero by the intermediate value theorem, contradicting nonvanishing. The orientability criterion therefore detects this obstruction. A bundle isomorphism from densities to top forms would take the nowhere-zero density to a nowhere-zero top form, which is impossible. [F3, step 1.1] ∎
