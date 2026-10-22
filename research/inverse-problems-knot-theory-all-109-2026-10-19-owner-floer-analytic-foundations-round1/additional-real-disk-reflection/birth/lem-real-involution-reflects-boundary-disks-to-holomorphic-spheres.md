---
id: lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres
kind: lemma
title: "A real involution reflects boundary disks to holomorphic spheres"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-holomorphic-inverse-function-theorem-several-variables, thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, lem-real-oval-divisors-exclude-holomorphic-spheres-in-symmetric-products]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Section3.7 motivates an empty integrable boundary-degeneration model; the involution reflection argument under the precise real-model hypotheses is proved here"
---

## Statement

Assume Countable Choice. Let $X$ be a complex manifold with an antiholomorphic involution $R:X\to X$. Every smooth map $v:\overline{\mathbb D}\to X$ holomorphic in $\mathbb D$ and satisfying $v(\partial\mathbb D)\subset\operatorname{Fix}(R)$ extends to a holomorphic sphere by
$$V(z)=v(z)\quad(|z|\le1),\qquad V(z)=R\bigl(v(1/\overline z)\bigr)\quad(|z|\ge1).$$
The value at infinity is $R(v(0))$. If $v$ is nonconstant, this sphere is nonconstant and contains every boundary value of $v$.

In particular let $\Sigma$ be a connected closed Riemann surface with an antiholomorphic involution $\rho$, let $C_1,\ldots,C_{m+1}$ be pairwise disjoint embedded circles in its fixed set, and let
$$L=\{p_1+\cdots+p_m:p_i\in C_i\}\subset\operatorname{Sym}^m(\Sigma),\qquad m\ge1.$$
For the standard complex symmetric-product structure, every smooth holomorphic closed disk with boundary on $L$ is constant, and no nonconstant holomorphic sphere intersects $L$.

The real Riemann surface and fixed circles are supplied hypotheses. Their existence for a given diagram, compatibility with all its auxiliary charts, regularity for perturbed structures, and deformation-invariant disk counts are separate assertions. For balanced $m=h+k-1$ this result does not assert the existence of $m+1$ real ovals when $k>1$.

## Statement references

[[def-countable-choice]]

[[lem-real-oval-divisors-exclude-holomorphic-spheres-in-symmetric-products]]

## Facts & Assumptions

**Given:** The complex manifold with its actual smooth antiholomorphic involution and smooth closed disk, or the supplied surface involution and fixed ovals in the application. Smoothness of the map up to the physical boundary is part of the hypothesis.

[F1] [[thm-holomorphic-inverse-function-theorem-several-variables]] gives holomorphic coordinates from an invertible complex derivative. [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]] makes a $C^1$ complex-valued function holomorphic when its Cauchy–Riemann equations hold everywhere. The latter applies componentwise to maps from a complex coordinate disk.

[F2] [[lem-real-oval-divisors-exclude-holomorphic-spheres-in-symmetric-products]] proves that no nonconstant standard holomorphic sphere passes through a divisor selecting one point from each of $m$ distinct supplied real ovals when there is one further fixed oval. Its proof includes the actual incidence norm and zero-and-pole argument; no Abel–Jacobi assertion is required.

## Proof

1.1 At a fixed point $x$ of $R$, its derivative $A$ is a conjugate-linear involution on the complex vector space $T_xX$. Its fixed real subspace $W$ satisfies $T_xX=W\oplus iW$ over $\mathbb R$: for any $z$, write $z=(z+Az)/2+i(z-Az)/(2i)$, with both displayed real-vector parts fixed by $A$; and a vector fixed by $A$ and also in $iW$ is zero by applying $A$. Thus a real basis of $W$ is a complex basis of $T_xX$. Start with any complex coordinate map $Z$ about $x$ and postcompose by a complex-linear isomorphism so that $Z(x)=0$ and its derivative carries $A$ to complex conjugation. Work on the intersection of this chart domain and its image under $R$, an invariant neighborhood of $x$. The map $$H(y)=\bigl(Z(y)+\overline{Z(R(y))}\bigr)/2$$ is holomorphic there and has derivative $dZ_x$, since the derivative of its second summand at $x$ is also $dZ_x$. By [F1] it is a local holomorphic coordinate. It satisfies $H(R(y))=\overline{H(y)}$. Shrink to an invariant chart by choosing a conjugation-invariant ball in the intersection of its image and its conjugate and taking its inverse image inside an invariant neighborhood where $H$ is injective. In this chart $R$ is exactly conjugation and its fixed set is exactly the real coordinate plane. All basis and shrinking choices here are finite-dimensional and finite. [F1, given, construct, algebra]

2.1 The two formulas for $V$ agree on the unit circle because $v$ has fixed boundary values. They define a smooth holomorphic map away from that circle, including infinity: in the coordinate $w=1/z$ there the expression is $R(v(\overline w))$, the composition of two antiholomorphic maps. To check the seam, choose a fractional linear source coordinate near any unit-circle point that sends that arc to a real interval and sends the involution $z\mapsto1/\overline z$ to conjugation. Such a coordinate is explicit: after a unit-circle rotation taking the point away from $1$, the Cayley function $i(1+z)/(1-z)$ has this property, as direct substitution verifies. By continuity choose a small source neighborhood whose images under both formulas lie in one chart from step1.1. In these coordinates one coordinate function is a smooth holomorphic $f$ on the upper half-disk, real on its straight edge, and its continuation below is $\overline{f(\overline z)}$. On that edge the tangential derivatives $f_x$ are real, while $f_y=i f_x$ by the upper Cauchy–Riemann equation and smoothness to the edge. The reflected function has the same value, the same $x$ derivative $\overline{f_x}=f_x$, and the same $y$ derivative $-\overline{f_y}=f_y$ there. Hence it is $C^1$ across the edge: the piecewise continuous derivatives match, and integrating them on coordinate segments gives the common first derivative at the edge as well. Its Cauchy–Riemann equations hold on both sides and on the edge by continuity, so [F1] makes the continuation holomorphic throughout the disk. This applies to every target coordinate. Thus $V$ is a holomorphic sphere, with its asserted value at infinity. Restriction to the original disk proves nonconstancy whenever $v$ is nonconstant, and the formula retains every boundary value. [F1, step 1.1, construct, algebra]

3.1 For the application define $R(p_1+\cdots+p_m)=\rho(p_1)+\cdots+\rho(p_m)$. This is a well-defined smooth antiholomorphic involution of the complex symmetric product. In detail, about a tuple choose disjoint complex coordinate disks around its distinct support points, paired under $\rho$; their corresponding target disks have coordinates $z\mapsto\overline{z\circ\rho}$. The monic polynomial coefficients of each cluster are elementary symmetric functions of its coordinates, so $R$ sends those coefficients to their complex conjugates in the corresponding cluster, possibly permuting clusters. It is therefore antiholomorphic in the standard symmetric-product charts, including repeated-point tuples. Its square is the identity because $\rho^2=1$. Every point of $L$ is fixed by $R$ and has distinct entries, since the selected circles are disjoint. By [F2] no nonconstant holomorphic sphere passes through any such point. [F2, construct, algebra]

4.1 If a nonconstant smooth holomorphic disk had boundary on $L$, step2.1 applied to the involution in step3.1 would produce a nonconstant sphere through any chosen boundary value in $L$. Step3.1 excludes that sphere. Hence every such disk is constant, and the same step already excludes every nonconstant sphere intersecting $L$. The proof establishes an empty integrable disk model under the stated supplied real-geometry hypotheses only. It neither constructs those hypotheses for arbitrary diagrams nor extends the empty count to generic perturbations without a separate compactness and parameterized-moduli argument. [step 2.1, step 3.1, contradiction] ∎
