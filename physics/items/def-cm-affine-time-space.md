---
id: def-cm-affine-time-space
kind: definition
title: "Affine time space with Euclidean simultaneous slices and adapted charts"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-vector-space, def-linear-map, def-kernel-and-image-of-a-linear-map, def-inner-product-space, def-orthogonal-vectors-sets-and-orthonormal-bases, def-orientation-of-a-finite-dimensional-real-vector-space, def-euclidean-inner-product, def-quotient-vector-space-and-canonical-projection, thm-first-isomorphism-theorem-for-vector-spaces, thm-linear-kernel-image-and-injectivity, thm-rank-nullity, lem-standard-basis-of-f-n]
dependency_roles:
  def-vector-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-kernel-and-image-of-a-linear-map: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-orientation-of-a-finite-dimensional-real-vector-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-quotient-vector-space-and-canonical-projection: mathematical-premise
  thm-first-isomorphism-theorem-for-vector-spaces: mathematical-premise
  thm-linear-kernel-image-and-injectivity: mathematical-premise
  thm-rank-nullity: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
justified_by: [lem-cm-adapted-coordinates-exist-and-are-unique]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 1.2.1 (Galilean relativity: translations, rotations, boosts, absolute time), printed pages 5-7"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1 (rigid body kinematics, orthogonal matrices)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $V$ be a real vector space of dimension $4$ ([[def-vector-space]]) and let $\tau:V\to\mathbb R$ be a surjective linear map ([[def-linear-map]]). Put

$$K:=\ker\tau=\{v\in V:\tau(v)=0\},$$

the kernel of $\tau$ ([[def-kernel-and-image-of-a-linear-map]]). The kernel is a linear subspace ([[thm-linear-kernel-image-and-injectivity]]), so the quotient vector space $V/K$ is defined ([[def-quotient-vector-space-and-canonical-projection]]). The first isomorphism theorem gives the linear isomorphism $V/K\to\operatorname{im}\tau=\mathbb R$, $v+K\mapsto\tau(v)$ ([[thm-first-isomorphism-theorem-for-vector-spaces]]). Since $\mathbb R$ has the one-element standard basis, $\dim\mathbb R=1$ ([[lem-standard-basis-of-f-n]] with $F=\mathbb R$ and $n=1$); rank-nullity for the surjective map $\tau$ therefore gives $\dim K=4-1=3$ ([[thm-rank-nullity]]).

Let $g$ be an inner product on $K$ in the sense of [[def-inner-product-space]]: a symmetric positive definite $\mathbb R$-bilinear form $g:K\times K\to\mathbb R$.

Let $A$ be a nonempty set equipped with an action of the additive group of $V$, written $(p,v)\mapsto p+v$, that is free and transitive: explicitly, $(p+v)+w=p+(v+w)$ and $p+0=p$ for all $p\in A$ and $v,w\in V$, and for all $p,q\in A$ there is exactly one $v\in V$ with $p+v=q$; write $q-p$ for that unique vector. The identities $p+(q-p)=q$, $(q-p)+(r-q)=r-p$ and $q-p=-(p-q)$ follow from the axioms together with uniqueness of the displacement. Such a set is an **affine space modelled on $V$**, and its elements are **events**. (This formulation restates the affine-space structure used here so that the item is self-contained; the general theory of affine spaces is supplied by the special-relativity collection for its own consumers.)

Fix an orientation of $K$ in the sense of [[def-orientation-of-a-finite-dimensional-real-vector-space]]; this is a chosen orientation class, not a chosen spatial basis.

An **adapted chart** for the data $(V,\tau,g,A)$ is a triple $(o,u,(e_1,e_2,e_3))$ consisting of

1. an origin $o\in A$;
2. a vector $u\in V$ with $\tau(u)=1$;
3. an ordered basis $(e_1,e_2,e_3)$ of $K$ that is $g$-orthonormal and positively oriented with respect to the fixed orientation of $K$ ([[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[def-orientation-of-a-finite-dimensional-real-vector-space]]).

An adapted chart exists for every such set of data and fixed orientation, by clause 3 of [[lem-cm-adapted-coordinates-exist-and-are-unique]].

For spatial coordinate vectors $x\in\mathbb R^3$, this item uses the one-based labels $x_i:=x(i-1)$ for $1\le i\le3$; thus $(x_1,x_2,x_3)$ lists the values at $0,1,2$ of the function-space vector of [[def-euclidean-inner-product]]. The labels $e_1,e_2,e_3$ name the corresponding ordered spatial basis; they do not change the underlying index set of $\mathbb R^3$.

The **adapted coordinates** of a point $p\in A$ in this chart are the pair $(t,x)\in\mathbb R\times\mathbb R^3$ determined by

$$p=o+tu+\sum_{i=1}^{3}x_ie_i,$$

when such a pair exists (existence and uniqueness are [[lem-cm-adapted-coordinates-exist-and-are-unique]], so that the notation is defined for every $p$). The number $t$ is the **time coordinate** and $x=(x_1,x_2,x_3)$ the **spatial coordinate vector** of $p$ in the chart. When $K$ is identified with $\mathbb R^3$ through the coordinates in $(e_1,e_2,e_3)$, the assignment $p\mapsto(t,x)$ is a bijection $A\to\mathbb R\times\mathbb R^3$.

**Simultaneous slices.** For $t\in\mathbb R$ set

$$A_t:=\{p\in A:\tau(p-o)=t\}.$$

The family $\{A_t\}_{t\in\mathbb R}$ is the family of **simultaneous slices** of the chart. Each $A_t$ is an affine space modelled on $K$; the derivation is immediate from the affine identities and linearity of $\tau$ and is recorded in [[lem-cm-adapted-coordinates-exist-and-are-unique]]. The **slice distance** of two points $p,q$ in a common slice $A_t$ is

$$d_g(p,q):=\sqrt{g(p-q,\,p-q)},$$

the square root taken in $\mathbb R$; this is defined because $p-q\in K$ for points of a common slice. In adapted coordinates $d_g(p,q)=\|x(p)-x(q)\|_2$, with $\|\cdot\|_2$ the Euclidean norm of [[def-euclidean-inner-product]].

## Remarks

- The data $(V,\tau,g,A)$ contain no inner product on $V$ and no identification of $V$ with $\mathbb R^4$: $g$ is defined only on $K$. Consequently a general displacement $v\in V$ with $\tau(v)\ne0$ has **no** $g$-norm defined in this structure, and "the length of a temporal displacement" is not a quantity of the model. Only displacements inside a common slice carry a length, and those are exactly the elements of $K$.

- The time coordinate of an adapted chart is fixed by $\tau$ and the origin alone: if $p=o+tu+k$ with $k\in K$, then $\tau(p-o)=t$, so $t$ is independent of $u$ and of the spatial basis. The remaining freedom in the chart (choice of $o$, $u$, oriented orthonormal basis of $K$) is what produces the transformation law of [[lem-cm-adapted-charts-and-galilean-transformations]]. The phrase "ten parameters" for the passage between two such charts refers to the dimensions of the transformation data $(b,a,v,R)$ and is not asserted here as a Lie-group dimension count.

- This is a mathematical model. No postulate that physical space and time are described by such data, that adapted charts are inertial frames, or that $g$ is measured by any apparatus is part of this definition; physical interpretations and their empirical qualifications are supplied by the physical items that consume it, with their own hypotheses.
