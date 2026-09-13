---
id: fs-curvature-is-obtained-by-commuting-two-covariant-derivatives-without-a-bracket-correction
kind: false-statement
title: Curvature is obtained by commuting two covariant derivatives without a bracket correction
status: published
origin: pipeline
deps: ["def-curvature-of-an-affine-connection", "lem-curvature-is-c-infinity-linear-in-all-three-vector-fields", "def-affine-connection-on-a-smooth-manifold", "prop-connection-laws-in-directional-form", "prop-leibniz-rules-for-the-lie-bracket-with-function-multiples"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 11, Section 11.1, curvature definition and coordinate formula, printed pages 71–72
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, flatness criterion (7.3), curvature definition, and Proposition 7.1 proof, printed pages 117–118
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

**False claim:** the raw commutator

$$C(X,Y)Z:=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ$$

is the curvature of an affine connection. In fact it need not be
$C^\infty(M)$-linear in $X$ or $Y$; the correction
$-\nabla_{[X,Y]}Z$ is essential.

## Facts & Assumptions

**Given:** An affine connection and smooth vector fields and functions.

[F1] An affine connection is function-linear in its differentiating field and
satisfies the section Leibniz rule.
[[def-affine-connection-on-a-smooth-manifold]],
[[prop-connection-laws-in-directional-form]].

[F2] The bracket satisfies
$[X,fY]=f[X,Y]+X(f)Y$.
[[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]].

[F3] Curvature is the bracket-corrected commutator, and that corrected
operation is function-linear in all three fields.
[[def-curvature-of-an-affine-connection]],
[[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]].

## Refutation

**Proof technique:** direct.

1.1 Using [F1] but no bracket term gives $$C(X,fY)Z=\nabla_X(f\nabla_YZ)-f\nabla_Y\nabla_XZ=fC(X,Y)Z+X(f)\nabla_YZ.$$ The extra derivative term shows the precise obstruction to tensoriality. [F1, algebra]

2.1 For an explicit witness, take $M=\mathbb R$ with its flat affine connection $\nabla_{a\partial_x}(b\partial_x)=ab'\partial_x$, and put $X=Y=\partial_x$, $f(x)=x$, and $Z=x\partial_x$. Then $C(X,X)Z=0$, whereas direct differentiation gives $$C(X,fX)Z=\nabla_X(x\partial_x)-\nabla_{xX}(\partial_x)=\partial_x\ne0=fC(X,X)Z.$$ Thus the raw commutator fails function-linearity even in dimension one with a flat torsion-free connection. [F1, step 1.1, algebra]

2.2 By [F2], $$\nabla_{[X,fY]}Z=f\nabla_{[X,Y]}Z+X(f)\nabla_YZ.$$ Subtracting this expression from step 1.1 cancels the extra term and gives $R(X,fY)Z=fR(X,Y)Z$, as asserted by [F3]. This identifies exactly why the bracket correction cannot be omitted. [F2, F3, step 1.1, algebra]

3.1 The counterexample uses a nonempty boundaryless one-manifold and nonzero $Z$; empty and zero-dimensional manifolds cannot witness the failure because all vector fields vanish there. The calculation is local and remains valid in a boundary chart away from its endpoint. No metric, nondegeneracy, orientation, endpoint limit, or choice axiom is used, and no biconditional is asserted. [F1, F2, F3, step 2.1, step 2.2] ∎
