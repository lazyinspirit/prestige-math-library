---
id: fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane
kind: false-statement
title: Sectional curvature depends on an ordered basis of the plane
status: draft
origin: pipeline
deps: ["def-countable-choice","lem-sectional-curvature-is-independent-of-the-basis-of-the-plane"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.1.1 and Definition 12.1.3, printed pages 81–82
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 8.8 and proof, printed pages 145–146
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[lem-sectional-curvature-is-independent-of-the-basis-of-the-plane]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

**False claim:** the sectional curvature assigned to a tangent two-plane
depends on the choice or ordering of a basis of that plane.

In fact it depends only on the unoriented two-plane.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Riemannian manifold, a point $p$, a tangent two-plane
$\sigma\subseteq T_pM$, and two supplied ordered bases $(X,Y)$ and
$(X',Y')$ of $\sigma$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[lem-sectional-curvature-is-independent-of-the-basis-of-the-plane]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] If $(X,Y)$ and $(X',Y')$ are two ordered bases of the same tangent
two-plane, their sectional-curvature quotients are equal.
[[lem-sectional-curvature-is-independent-of-the-basis-of-the-plane]].

## Refutation

**Proof technique:** direct.

1.1 The two supplied ordered pairs are bases of the same plane $\sigma$. Therefore [F1] directly gives $K(X',Y')=K(X,Y)$. [A1, F1]

2.1 In particular, $(Y,X)$ is another ordered basis of $\sigma$, so [F1] gives $K(Y,X)=K(X,Y)$. Reversing orientation therefore carries no extra curvature datum. [F1, step 1.1]

3.1 Steps 1.1–2.1 apply to every tangent two-plane, so they refute both choice-of-basis and orientation dependence. On an empty, zero-dimensional, or one-dimensional manifold there are no tangent two-planes, making the false claim vacuous rather than producing an exception. Positive definiteness makes the Gram determinant nonzero for each basis; degenerate bilinear forms are outside the Riemannian hypothesis. The argument is pointwise, uses no parameter endpoint, and the plane and both bases are supplied, so it makes no further family choice beyond the stated inherited assumption. No biconditional is asserted. [F1, step 1.1, step 2.1] ∎
