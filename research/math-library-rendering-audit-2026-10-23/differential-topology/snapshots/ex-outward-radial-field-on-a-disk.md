---
id: ex-outward-radial-field-on-a-disk
kind: example
title: "The outward radial field on a disk"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-with-outward-pointing-boundary, thm-index-of-a-nondegenerate-vector-field-zero, def-euler-characteristic-of-a-compact-manifold, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, def-inward-outward-and-boundary-tangent-vectors, def-smooth-vector-field-as-a-tangent-bundle-section, def-euclidean-spheres-and-closed-balls, def-axiom-of-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, the disk example on printed p. 36 (outward field, index sum one)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Theorem 2.3.1 and its simplest instance, printed p. 33"
dependency_level: 9
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the applications of Poincare-Hopf below.

On the closed unit ball $D^n=\overline B_2(0,1)\subseteq\mathbb R^n$, $n\ge1$
([[def-euclidean-spheres-and-closed-balls]]), the radial field $X(u)=u$ points
strictly outward along $\partial D^n$
([[def-inward-outward-and-boundary-tangent-vectors]]) and has its only zero at
the centre, nondegenerate with linearization $I_n$ and index
$\operatorname{sign}\det I_n=+1$
([[thm-index-of-a-nondegenerate-vector-field-zero]]). Since $D^n$ is
contractible, $H_0(D^n;\mathbb Q)\cong\mathbb Q$ and all higher rational
homology vanishes
([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]), so
$\chi(D^n)=1$ ([[def-euler-characteristic-of-a-compact-manifold]]); the index
sum $+1$ equals $\chi(D^n)$, verifying the boundary form
[[thm-poincare-hopf-with-outward-pointing-boundary]] in the simplest case.

## Facts & Assumptions

**Given:** The closed unit ball $D^n\subseteq\mathbb R^n$, $n\ge1$, and the radial field $X(u)=u$ ([[def-smooth-vector-field-as-a-tangent-bundle-section]]).

[F1] At a boundary point $u\in\partial D^n$ the outward direction is the radial direction $u$, and $X(u)=u$ has positive inner product with it ([[def-inward-outward-and-boundary-tangent-vectors]]).

[F2] A nondegenerate zero has index $\operatorname{sign}\det(DX_p)$ ([[thm-index-of-a-nondegenerate-vector-field-zero]]).

[F3] For a contractible space the rational homology is that of a point, so $\chi(D^n)=1$, and the boundary form of Poincare-Hopf gives $\sum_p\operatorname{ind}_pX=\chi(D^n)$ for a strictly outward field ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]], [[def-euler-characteristic-of-a-compact-manifold]], [[thm-poincare-hopf-with-outward-pointing-boundary]]).

## Verification

1.1 The field $X$ is linear with $DX_u=I_n$, invertible at every point, so its only zero is the centre $0$ and that zero is nondegenerate; by [F2] its index is $\operatorname{sign}\det I_n=+1$, so the index sum is $+1$. [F2, algebra]

2.1 On the boundary sphere the outward normal is the radial vector $u$, so $\langle X(u),u\rangle=|u|^2=1>0$ and the field is strictly outward by [F1]; by [F3] the index sum equals $\chi(D^n)$, and the value $+1$ computed in step 1.1 matches $\chi(D^n)=1$. [F1, F3, step 1.1, algebra] ∎
