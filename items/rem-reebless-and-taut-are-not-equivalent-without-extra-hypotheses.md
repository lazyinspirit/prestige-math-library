---
id: rem-reebless-and-taut-are-not-equivalent-without-extra-hypotheses
kind: remark
title: Reeblessness and tautness are not equivalent without extra hypotheses
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
- lem-a-reeb-component-obstructs-tautness
- lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component
- lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal
- def-countable-choice-principle-for-foliation-pair
- cor-codimension-one-frobenius-criterion
- def-dead-end-component
- def-two-dimensional-torus
- def-reeb-component-in-a-cooriented-three-manifold-foliation
justified_by: []
aliases: []
landmark: false
dependency_level: 14
verification:
  precheck: n/a
sources:
  scraped: []
  references:
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.2, printed pp. 40-41
---

## Statement

Assume $\mathrm{AC}_\omega$. For a smooth cooriented codimension-one foliation of a closed oriented three-manifold, tautness implies Reeblessness by [[lem-a-reeb-component-obstructs-tautness]], but Reeblessness alone does not imply tautness.

Here is a closed example. On $T^3=(\mathbb R/\mathbb Z)^3$, with coordinates $(x,y,z)$, put
$$\alpha=\cos(2\pi x)\,dx+\sin(2\pi x)\,dy.$$
This is nowhere zero and $\alpha\wedge d\alpha=0$, so its kernel defines a smooth cooriented foliation by [[cor-codimension-one-frobenius-criterion]]. The tori $x=0$ and $x=1/2$ are leaves. On each intervening strip the other leaves satisfy
$$y+\frac{1}{2\pi}\log|\sin(2\pi x)|=c\pmod1,$$
with $z$ free, and are intrinsically cylinders. There are no plane leaves, so no saturated region can have the interior-plane foliation required by [[def-reeb-component-in-a-cooriented-three-manifold-foliation]]. Thus the foliation is Reebless. The compact saturated region $0\le x\le1/2$ has the $\alpha$-positive normal pointing inward at both boundary tori. It is a dead-end component in [[def-dead-end-component]], so the foliation is not taut by [[lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component]].

## Remarks

Ranz, Corollary 2.13(ii), printed pp.40–41, instead describes a noncompact strip product. Its strips are not compact dead-end components under this page's definition, so that terminology does not justify the closed-manifold comparison. The explicit torus construction above supplies the witness directly. The single-transversal conclusion additionally uses nonempty compact connected ambient manifolds, as stated in [[lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal]].
