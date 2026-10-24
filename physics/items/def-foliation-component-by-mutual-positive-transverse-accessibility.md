---
id: def-foliation-component-by-mutual-positive-transverse-accessibility
kind: definition
title: "Foliation components as mutual positive transverse-accessibility classes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-positive-transverse-accessibility-between-leaves, lem-positive-transverse-accessibility-is-a-preorder, def-equivalence-relation, lem-equivalence-classes-partition, def-interior-closure-boundary-top]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations, English translation by J. A. Zilber"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a71, Definition1.4 and Lemma1.1, printed p.2; mutual-accessibility component definition immediately following Lemma1.1"
---

## Definition

Let F be a C² cooriented codimension-one foliation on a smooth manifold M without
boundary. Its foliation component containing a leaf A is the saturated subset
$$\mathcal C_F(A)=\bigcup\{B:B\text{ is a leaf},\ A\succeq_F B\text{ and }B\succeq_F A\}.$$
The
equivalence classes of leaves under mutual positive transverse accessibility partition
the leaf set; their unions partition M into saturated subsets. This is Novikov’s
connected component of the foliation. It is not defined as an ordinary connected
component of M or M minus a leaf, and it differs from one-direction positive reach
alone. A boundary leaf L of a distinct component means $L\cap\mathcal
C_F(A)=\varnothing$ and $L\subseteq\partial_M\mathcal C_F(A)$, with boundary in the
ambient topology. This definition does not assert that a component’s closure is a
manifold with boundary.

## Remarks

The partition assertion also has a finite, choice-free justification, so it does not require importing the standing $\mathrm{AC}_\omega$ hypothesis of the cited preorder lemma. Two points of a connected leaf are joined by a finite plaque path: the points reachable by finite plaque paths and their complement are open in the leaf. Smooth the finitely many corners. Given a genuine positive segment and such initial and terminal plaque paths, choose a positive transverse field and defining form near their compact images using finitely many chart bumps. For its flow, the transverse error along a displaced leafwise path is bounded by $A|u|$, whereas its offset contributes at least $bu'$ for some $b>0$. Choose offsets with $u'=B|u|+\delta$ and $bB>A$, vanishing at the desired outer endpoints, and interpolate their small endpoint values along the original positive segment. This adjusts both endpoints and allows two genuine positive segments to concatenate; chartwise smoothing keeps their transverse derivatives positive. Equality cases are immediate. Transitivity, formal reflexivity and symmetry of mutual accessibility now give an equivalence relation, whose classes partition the leaves and whose saturated unions partition $M$ without choosing class representatives.
