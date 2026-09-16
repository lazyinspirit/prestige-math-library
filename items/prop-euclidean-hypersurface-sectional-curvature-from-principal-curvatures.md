---
id: prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures
kind: proposition
title: Euclidean hypersurface sectional curvature from principal curvatures
status: published
origin: pipeline
deps: ["def-countable-choice","def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface","thm-weingarten-equation-and-adjointness-of-the-shape-operator","thm-gauss-equation-for-a-riemannian-submanifold","thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Corollary 14.2.2(4), including its sectional-curvature specialization, printed pages 104–105
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Euclidean hypersurface Gauss equation (8.4) and principal-curvature diagonalization, printed pages 140–142
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Assume $\mathrm{AC}_\omega$. Let $M^m\subseteq\mathbb R^{m+1}$ be a
Euclidean hypersurface with $m\geq2$ and a supplied smooth unit normal. If
$e_i,e_j\in T_pM$ are orthonormal principal directions with $i\ne j$ and
principal curvatures $\kappa_i,\kappa_j$, then

$$K(\operatorname{span}\{e_i,e_j\})=\kappa_i\kappa_j.$$

The choice hypothesis is inherited through both the smooth hypersurface
shape/projection constructions and the supplied sectional-curvature interface.

## Facts & Assumptions

**Given:** Countable choice, the Euclidean hypersurface, a point $p$, and the two supplied orthonormal principal directions.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Principal directions satisfy $S_\nu e_a=\kappa_a e_a$. [[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]].

[F2] For tangent vectors, $g(S_\nu X,Y)=\langle\mathrm{II}(X,Y),\nu\rangle$. [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F3] The Gauss equation has quadratic terms in the order stated on this page. [[thm-gauss-equation-for-a-riemannian-submanifold]].

[F4] Euclidean space is locally isometric to itself and therefore has zero Riemann curvature. [[thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space]].

[F5] On an orthonormal pair, sectional curvature is $\operatorname{Rm}(e_i,e_j,e_j,e_i)$. [[def-sectional-curvature]].

## Proof

**Proof technique:** direct.

1.1 The normal bundle is spanned by the unit field $\nu$. By [F1]–[F2], $$\mathrm{II}(e_i,e_i)=\kappa_i\nu,\qquad \mathrm{II}(e_j,e_j)=\kappa_j\nu,\qquad \mathrm{II}(e_i,e_j)=g(S_\nu e_i,e_j)\nu=0,$$ because $e_i,e_j$ are orthogonal eigenvectors. Symmetry gives the same mixed value in the reversed order. [F1, F2, algebra]

2.1 Substitute $X=e_i$, $Y=Z=e_j$, and $W=e_i$ into [F3]. The ambient term is zero by [F4]; step 1.1 makes the first quadratic term $\kappa_i\kappa_j$ and the mixed term zero. Thus $\operatorname{Rm}^M(e_i,e_j,e_j,e_i)=\kappa_i\kappa_j.$ Since the pair is orthonormal, [F5] identifies the left side with the asserted sectional curvature. [A1, F3, F4, F5, step 1.1, algebra]

3.1 The assertion is vacuous on an empty hypersurface. Dimensions zero and one are excluded by $m\geq2$, exactly because no tangent two-plane exists there. The calculation applies at a boundary point and uses positive definiteness for orthonormality. The directions are supplied, so no eigenbasis is selected; $\mathrm{AC}_\omega$ is inherited through [F1]–[F3] and [F5], and no new choice is made. [F1, F2, F3, F5, step 1.1, step 2.1] ∎
