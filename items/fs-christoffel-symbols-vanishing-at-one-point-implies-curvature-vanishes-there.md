---
id: fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there
kind: false-statement
title: Christoffel symbols vanishing at one point implies curvature vanishes there
status: published
origin: pipeline
deps: ["prop-coordinate-formula-for-the-curvature-tensor","thm-existence-of-normal-neighborhoods","def-normal-neighborhood-and-normal-coordinate-chart","prop-properties-of-normal-coordinates-at-the-center","def-countable-choice","thm-a-regular-level-set-is-an-embedded-submanifold","prop-tangent-space-of-a-regular-level-set-is-the-kernel","def-shape-operator","def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface","prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lemma 11.3.1 and proof, printed pages 74–75
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 5.11, printed pages 77–78, and equations (7.3)–(7.4), printed pages 117–119
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]] and [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

**False claim:** if all Levi–Civita Christoffel symbols vanish at a point,
then the Riemann curvature tensor vanishes at that point.

Assume $\mathrm{AC}_\omega$. Normal coordinates make all Christoffel symbols
vanish at their centre, but curvature there can be nonzero because the
coordinate curvature formula retains first derivatives of those symbols.

## Facts & Assumptions

**Given:** Countable choice.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]] and [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Under countable choice, a supplied ordered orthonormal tangent basis gives normal coordinates, and at their centre $p$ one has $\partial_i|_p=e_i$, $g_{ij}(p)=\delta_{ij}$, and $\Gamma^k{}_{ij}(p)=0$. [[def-countable-choice]], [[thm-existence-of-normal-neighborhoods]], [[def-normal-neighborhood-and-normal-coordinate-chart]], [[prop-properties-of-normal-coordinates-at-the-center]].

[F2] In the convention $R(\partial_i,\partial_j)\partial_k=R^\ell{}_{kij}\partial_\ell$, the coordinate curvature formula is $$R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}.$$ [[prop-coordinate-formula-for-the-curvature-tensor]].

[F3] A nonempty regular level set is an embedded submanifold, and its tangent space is the kernel of the defining differential. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F4] For a Euclidean hypersurface, the shape operator is $S_\nu X=-(\overline\nabla_X\nu)^\top$; its eigenvectors are principal directions; and the sectional curvature of the plane spanned by supplied orthonormal principal directions is the product of their principal curvatures. [[def-shape-operator]], [[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]], [[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]].

[F5] For an orthonormal pair $(X,Y)$, $K(\operatorname{span}\{X,Y\})=\operatorname{Rm}(X,Y,Y,X)$. [[def-sectional-curvature]].

## Refutation

**Proof technique:** direct counterexample.

1.1 Let $S^2=\{q\in\mathbb R^3:\lVert q\rVert^2=1\}$ with its induced metric. For $F(q)=\lVert q\rVert^2$, one has $dF_q(v)=2\langle q,v\rangle$, which is surjective at every $q\in S^2$. Thus [F3] makes $S^2=F^{-1}(1)$ an embedded Euclidean hypersurface and gives $T_qS^2=q^\perp$. The field $\nu(q)=q$ is consequently a smooth unit normal. [F3, algebra]

2.1 Fix $p=(0,0,1)$ and the tangent vectors $e_1=(1,0,0)$ and $e_2=(0,1,0)$. They are orthonormal. Because $\overline\nabla_X\nu=X$ on the sphere, [F4] gives $S_\nu X=-X$; hence $e_1,e_2$ are principal directions with curvatures $\kappa_1=\kappa_2=-1$. The hypersurface formula in [F4] now gives $K(\operatorname{span}\{e_1,e_2\})=(-1)(-1)=1$. [A1, F4, step 1.1, algebra]

3.1 Use [F1] to take the normal coordinates at $p$ associated to the supplied ordered basis $(e_1,e_2)$. Then every $\Gamma^k{}_{ij}(p)=0$ and $\partial_i|_p=e_i$. By [F5] and step 2.1, $$R^1{}_{2,1,2}(p)=\operatorname{Rm}_p(\partial_1,\partial_2,\partial_2,\partial_1)=1.$$ [F1, F5, step 2.1]

4.1 At $p$, the two quadratic Christoffel terms in [F2] vanish, but [F2] and step 3.1 give $$1=R^1{}_{2,1,2}(p)=\partial_1\Gamma^1{}_{22}(p)-\partial_2\Gamma^1{}_{12}(p).$$ Thus all Christoffel symbols vanish at $p$ while their first derivatives produce nonzero curvature there, refuting the claim. [F2, step 3.1, algebra]

5.1 The witness is nonempty, boundaryless, two-dimensional, and positive definite. Empty, zero-dimensional, and one-dimensional Riemannian manifolds cannot supply this sectional-curvature witness, but one counterexample suffices to refute the universal claim. Normal-coordinate domains are open, so no chart endpoint is used. Countable choice is used exactly through [F1]; the point, normal, and ordered tangent basis are explicit, so there is no further selection. No biconditional is asserted. [F1, step 1.1, step 2.1, step 3.1, step 4.1] ∎
