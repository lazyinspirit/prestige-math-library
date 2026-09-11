---
id: fs-torsion-free-means-curvature-free
kind: false-statement
title: "Torsion free means curvature free"
status: draft
origin: pipeline
deps: ["prop-christoffel-formula-for-the-levi-civita-connection","prop-connection-laws-in-directional-form","prop-leibniz-rules-for-the-lie-bracket-with-function-multiples","def-lie-bracket-of-smooth-vector-fields","prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For an affine connection define $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. Call it curvature free when this expression vanishes identically. The assertion that every torsion-free connection is curvature free is false, even for Levi–Civita connections on the plane.

## Facts & Assumptions

**Given:** The displayed local meaning of curvature; no later curvature theorem is assumed.

[F1] Connections are function-linear in the direction and satisfy the section Leibniz rule ([[prop-connection-laws-in-directional-form]]).

[F2] $[fX,Y]=f[X,Y]-Y(f)X$ and $[X,fY]=f[X,Y]+X(f)Y$ ([[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

[F3] $[X,Y]f=X(Yf)-Y(Xf)$ ([[def-lie-bracket-of-smooth-vector-fields]]).

[F4] The Levi–Civita coefficients are $\Gamma^k{}_{ij}=\tfrac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$ ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F5] Symmetric lower Christoffel indices in coordinate frames are equivalent to torsion freeness ([[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]]).

## Refutation

1.1 First verify that the displayed $R$ has an intrinsic pointwise meaning. Expanding $R(fX,Y)Z$ by [F1] and [F2] leaves $fR(X,Y)Z-Y(f)\nabla_XZ+Y(f)\nabla_XZ=fR(X,Y)Z$. The definition is skew in $X,Y$, hence is also function-linear in $Y$. On replacing $Z$ by $fZ$, the two iterated derivatives contribute second-derivative coefficient $(X(Yf)-Y(Xf))Z$, which is canceled by the bracket derivative using [F3]. Their cross terms are $Y(f)\nabla_XZ+X(f)\nabla_YZ$ in each order and cancel as well. What remains is $fR(X,Y)Z$. Additivity and real linearity follow by expansion. Thus $R$ is function-linear in all three inputs. In a local coordinate frame expand each input into its finite sum of components; these identities express $R$ as the corresponding trilinear sum of the smooth fields $R(\partial_i,\partial_j)\partial_k$. Therefore its values depend only on pointwise inputs and its coefficients are smooth. The original expression uses intrinsic operations, so its vanishing is independent of coordinates. [F1, F2, F3]

1.2 Set $g=e^{2x^2}(dx^2+dy^2)$ on $\mathbb R^2$. This is smooth positive definite everywhere. Its only nonzero metric derivatives are $\partial_xg_{xx}=\partial_xg_{yy}=4xe^{2x^2}$, while $g^{xx}=g^{yy}=e^{-2x^2}$ and off-diagonal entries vanish. Substitution in [F4] gives $\Gamma^x{}_{xx}=2x$, $\Gamma^x{}_{yy}=-2x$, $\Gamma^y{}_{xy}=\Gamma^y{}_{yx}=2x$, with every other coefficient zero. The lower indices are symmetric, so torsion is zero by [F5]. [F4, F5, given]

2.1 Coordinate fields commute. From step 1.2, $\nabla_{\partial_x}\nabla_{\partial_y}\partial_y=\nabla_{\partial_x}(-2x\partial_x)=(-2-4x^2)\partial_x$, whereas $\nabla_{\partial_y}\nabla_{\partial_x}\partial_y=\nabla_{\partial_y}(2x\partial_y)=-4x^2\partial_x$. Hence $R(\partial_x,\partial_y)\partial_y=-2\partial_x$, nonzero even at $x=0$, where every Christoffel symbol in step 1.2 is zero. By step 1.1 this is an intrinsic nonvanishing value, and step 1.2 supplies zero torsion. These explicit calculations refute the proposed implication without any later curvature, holonomy or surface-integration theorem. [F1, step 1.1, step 1.2] ∎
