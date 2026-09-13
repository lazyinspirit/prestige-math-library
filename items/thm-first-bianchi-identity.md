---
id: thm-first-bianchi-identity
kind: theorem
title: First Bianchi identity
status: published
origin: pipeline
deps: ["def-countable-choice","def-curvature-of-an-affine-connection","def-levi-civita-connection","def-lie-bracket-of-smooth-vector-fields","prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 11.3.2(3), printed pages 75–76
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 7.4(d), proof on printed pages 122–123
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

For the torsion-free Levi–Civita connection and all smooth vector fields
$X,Y,Z$,

$$R(X,Y)Z+R(Y,Z)X+R(Z,X)Y=0.$$

Equivalently, the cyclic sum over the three input slots of the curvature
endomorphism vanishes.

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Curvature is the bracket-corrected commutator of covariant derivatives. [[def-curvature-of-an-affine-connection]].

[F2] Torsion freeness of the Levi–Civita connection says $\nabla_XY-\nabla_YX=[X,Y]$. [[def-levi-civita-connection]].

[F3] In a chart, smoothness of a vector field is equivalent to smoothness of
its coordinate coefficients.
[[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]].

[F4] The Lie bracket is the commutator of the two vector fields acting on
smooth functions: $[X,Y]f=X(Yf)-Y(Xf)$.
[[def-lie-bracket-of-smooth-vector-fields]].

## Proof

**Given:** $\mathrm{AC}_\omega$, smooth vector fields $X,Y,Z$ and the Levi–Civita connection $\nabla$.

1.1 On any coordinate chart, write $X=X^i\partial_i$ and $Y=Y^i\partial_i$. Applying [F4] to a local smooth function and using the ordinary product rule, the terms with second derivatives cancel and give $[X,Y]=\bigl(X^i\partial_iY^j-Y^i\partial_iX^j\bigr)\partial_j.$ The displayed coefficients are smooth by [F3], so every bracket used below is a smooth vector field. [A1, F3, F4, algebra]

1.2 Expanding the three curvature terms by [F1] and collecting derivatives with the same outer field gives the cyclic sum as $$\begin{aligned}&\nabla_X(\nabla_YZ-\nabla_ZY)+\nabla_Y(\nabla_ZX-\nabla_XZ)+\nabla_Z(\nabla_XY-\nabla_YX)\\&\qquad-\nabla_{[X,Y]}Z-\nabla_{[Y,Z]}X-\nabla_{[Z,X]}Y.\end{aligned}$$ By [F2] the three parenthesized differences are $[Y,Z]$, $[Z,X]$, and $[X,Y]$. [F1, F2, algebra]

2.1 Acting on an arbitrary local smooth function $f$ and using [F4], expand the twelve resulting third-order compositions in $$[X,[Y,Z]]f+[Y,[Z,X]]f+[Z,[X,Y]]f.$$ Each composition occurs once with sign $+$ and once with sign $-$; hence the sum is zero. Since equality of vector fields is local and is detected by their action on smooth functions, the Jacobi identity holds for $X,Y,Z$. [F4, step 1.1, algebra]

3.1 Apply [F2] once more to pair each term $\nabla_X[Y,Z]$ with $-\nabla_{[Y,Z]}X$, and cyclically. The expression from step 1.2 becomes $[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]$, which is zero by step 2.1. [F2, step 2.1, step 1.2] ∎
