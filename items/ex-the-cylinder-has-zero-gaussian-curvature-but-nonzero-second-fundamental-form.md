---
id: ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form
kind: example
title: The cylinder has zero Gaussian curvature but nonzero second fundamental form
status: published
origin: pipeline
deps: ["def-countable-choice","def-shape-operator","thm-weingarten-equation-and-adjointness-of-the-shape-operator","prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures","def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface","prop-christoffel-formula-for-the-levi-civita-connection","prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Examples 14.2.5–14.2.6, printed pages 105–106
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Plane/half-cylinder principal-curvature comparison, printed pages 5–6
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

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Assume $\mathrm{AC}_\omega$ and let $r>0$. For the circular cylinder

$$C_r=\{(x,y,z)\in\mathbb R^3:x^2+y^2=r^2\}$$

with its induced metric, outward unit normal $\nu$, and convention
$S_\nu X=-\overline\nabla_X\nu$, the principal curvatures are $-1/r$ in
the circumferential direction and $0$ in the axial direction. Consequently
both the intrinsic sectional curvature and the extrinsic Gaussian curvature
are zero, but the second fundamental form is not zero. The countable-choice
assumption is inherited exactly from the general submanifold shape
constructions.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a radius $r>0$, the standard Euclidean
metric, and the displayed cylinder with its outward orientation.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Countable choice permits a choice from every sequence of nonempty sets. [[def-countable-choice]].

[F2] Under $\mathrm{AC}_\omega$, $S_\nu X=-(\overline\nabla_X\nu)^\top$, and $g(S_\nu X,Y)=\langle\mathrm{II}(X,Y),\nu\rangle$. [[def-shape-operator]], [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F3] Principal curvatures are the eigenvalues of $S_\nu$, while extrinsic Gaussian curvature is their product. [[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]].

[F4] For an orthonormal pair of principal directions on a Euclidean hypersurface, sectional curvature is the product of the two principal curvatures. [[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]].

[F5] The Christoffel formula and connection Leibniz rule compute the Euclidean covariant derivative in Cartesian coordinates. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

## Verification

**Proof technique:** direct calculation.

1.1 Parametrize $C_r$ by $X(\theta,z)=(r\cos\theta,r\sin\theta,z)$. The fields $e_\theta=(-\sin\theta,\cos\theta,0)$ and $e_z=(0,0,1)$ are an orthonormal tangent frame, and $\nu=(\cos\theta,\sin\theta,0)$ is the outward unit normal. [given, algebra]

2.1 The Cartesian Euclidean metric has constant coefficients, so [F5] gives zero Christoffel symbols. Since $e_\theta=(1/r)X_\theta$, differentiating the displayed normal gives $\overline\nabla_{e_\theta}\nu=(1/r)\partial_\theta\nu=e_\theta/r$, whereas $\overline\nabla_{e_z}\nu=0$. Both derivatives are tangent, so [F2] yields $S_\nu e_\theta=-e_\theta/r$ and $S_\nu e_z=0$. [F2, F5, step 1.1, algebra]

3.1 By [F3], the orthonormal frame from step 1.1 is a principal frame with principal curvatures $-1/r$ and $0$. Their product is the extrinsic Gaussian curvature, so it is zero. By [F4], the sectional curvature of the unique tangent two-plane is also $(-1/r)\cdot0=0$. [A1, F3, F4, step 1.1, step 2.1, algebra]

3.2 Applying the scalar second-fundamental-form identity in [F2] to $e_\theta$ gives $\langle\mathrm{II}(e_\theta,e_\theta),\nu\rangle=g(S_\nu e_\theta,e_\theta)=-1/r\ne0$. Therefore $\mathrm{II}(e_\theta,e_\theta)\ne0$, so the second fundamental form is not the zero tensor despite both Gaussian curvatures vanishing. [F2, step 1.1, step 2.1, algebra]

4.1 For every $r>0$ the cylinder is nonempty and two-dimensional; zero- and one-dimensional cases are therefore inapplicable. The condition $r>0$ excludes the collapsed, non-hypersurface axis and makes the circumferential direction nonzero. The periodic angular coordinate and unbounded axial coordinate introduce no endpoint or manifold boundary. The displayed frame and normal are explicit. The only choice assumption is the stated $\mathrm{AC}_\omega$ inherited through [F2]–[F4], and the calculation makes no further family choice. No biconditional is asserted. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 3.2] ∎
