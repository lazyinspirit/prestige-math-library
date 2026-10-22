---
id: lem-interior-annulus-core-segments-have-pair-adapted-product-tubes
kind: lemma
title: Interior annulus core segments have pair-adapted product tubes
status: draft
origin: session
deps:
  - lem-pair-chart-supported-surface-isotopies-extend-ambiently
  - thm-fundamental-theorem-for-nonautonomous-smooth-odes
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles Livingston, Connected sums of codimension two locally flat submanifolds
      url: https://doi.org/10.1017/prm.2022.87
      locator: Section 3, elementary local motions of a connected locally flat submanifold in Lemma 3.3
---

## Statement

Let $e:S^1\times[0,1]\to M$ parametrize a locally flat properly embedded annulus $A$ in a four-manifold $M$, with product end collars. Fix $\theta_0\in S^1$ and write $\alpha(s)=e(\theta_0,s)$. For every $0<a<b<1$, one pair chart of $(M,A)$ contains $\alpha([a,b])$. Consequently this compact interior subarc has a pair-adapted product neighborhood: an embedding $T:D^3\times[a,b]\to\operatorname{Int}M$, extending to a neighborhood of its domain, with $T(0,s)=\alpha(s)$ and $T^{-1}(A)=D^1\times[a,b]$ for the standard diameter $D^1\subset D^3$.

The chart can be obtained from an initial local pair chart by an ambient isotopy supported away from the boundary of $M$ and preserving $A$ setwise. No compatibility with the prescribed product germs at $s=0,1$, or complement identification for a spanning tube, is asserted.

## Facts & Assumptions

**Given:** The annulus parametrization, its locally flat pair charts, and the compact interior source interval $[a,b]$.

[F1] An intrinsic surface isotopy supported in a compact subset of one pair chart extends ambiently, preserving the surface. [[lem-pair-chart-supported-surface-isotopies-extend-ambiently]]

[F2] A smooth compactly supported Euclidean vector field has its unique flow; on a bounded time interval a bound on the field and local existence extend it globally by the Cauchy endpoint argument. [[thm-fundamental-theorem-for-nonautonomous-smooth-odes]]

## Proof

1.1 Choose $a<c<d<b$ so close together that the subarc $\alpha([c,d])$ lies in one pair chart $U_0$ with compact closure in the interior of $M$. Use the annulus parametrization to put coordinates $(x,s)$ on a thin intrinsic strip about $\alpha([a,b])$, where $x=0$ is the core. Cover the core path from $d$ to $b$ by finitely many intrinsic open rectangles whose closures lie in single locally flat pair charts and whose source height ranges avoid $c$. A sufficiently fine finite subdivision of that path has each consecutive pair of its heights in one such rectangle, with a closed interval between them strictly inside its height range. [given, construct, choose]

2.1 In one rectangle choose a smooth angular cutoff $\lambda(x)$ equal to one near $x=0$ and compactly supported in its width, and a smooth height function $w(s)$ supported in its height range and positive on the closed interval between the two chosen heights. The intrinsic vector field $\lambda(x)w(s)\partial_s$ has a flow by [F2], preserves the core, fixes $\alpha(c)$, and moves the current right endpoint to the next chosen height after the finite positive time $\int ds/w(s)$. Reparametrize that time interval to $[0,1]$. Extending the flow by the identity gives an intrinsic annulus isotopy supported in that rectangle. In the surface coordinates of its ambient pair chart this is a compactly supported plane isotopy, so [F1] extends it to $M$, preserving $A$. Apply these finitely many operations along the subdivision; the image of $\alpha([c,d])$ becomes $\alpha([c,b])$. Repeat towards the left using negative height fields supported away from $b$, moving $c$ to $a$. The composite ambient isotopy preserves $A$ and takes $\alpha([c,d])$ exactly onto $\alpha([a,b])$, since its action on the core is increasing at every stage. Every support is compact in the interior, and there are only finitely many. [F1, F2, step 1.1, construct]

3.1 Let $H$ be its terminal homeomorphism. Then $H(U_0)$, with the transported chart, is a single pair chart containing $\alpha([a,b])$. In that chart write the coordinates as $(y,z)\in\mathbb R^2\times\mathbb R^2$ with $A$ given by $z=0$. Compactness allows a slightly enlarged intrinsic rectangle about $\{\theta_0\}\times[a,b]$ to lie in $H(U_0)\cap A$. For a sufficiently small width $\eta>0$ define $y(x,s)$ to be the chart coordinates of $e(\theta_0+\eta x,s)$, $|x|\le1$. This is an intrinsic homeomorphism onto its image in the plane. For a fixed small $\rho>0$ the formula $(x,z,s)\mapsto q^{-1}(y(x,s),\rho z)$, with $|x|\le1$, $|z|\le1$, is therefore an embedded product $(D^1\times D^2)\times[a,b]$, meeting $A$ exactly at $z=0$. The same formula on the slightly enlarged rectangle extends the embedding beyond its domain boundaries. [step 2.1, given, construct]

4.1 Identify $D^1\times D^2$ with $D^3$ by radial rescaling. Explicitly, on the cylinder put $\|v\|_c=\max\{|x|,|z|\}$ and $\|v\|_2=\sqrt{x^2+|z|^2}$; the map $v\mapsto(\|v\|_c/\|v\|_2)v$ for $v\ne0$, extended by zero, is a homeomorphism onto the Euclidean unit ball, with inverse $v\mapsto(\|v\|_2/\|v\|_c)v$. It fixes the diameter $z=0$. Composing the previous product embedding with that inverse yields $T$ and the claimed pair equality. This rescaling also extends to all of $\mathbb R^3$, so the neighborhood extension persists. [step 3.1, construct, algebra] ∎

## Remarks

The compact interior statement is complete. It does not extend to $a=0,b=1$ by a limit argument: neither a coherent limit of these charts nor agreement with the two endpoint product germs has been constructed. Likewise an ambient isotopy straightening only the core does not identify the complement of an arbitrary embedded product tube with the standard product complement.
