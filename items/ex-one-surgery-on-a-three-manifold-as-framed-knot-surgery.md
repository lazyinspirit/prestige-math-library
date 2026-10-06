---
id: "ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery"
kind: "example"
title: "One-surgery on a three-manifold as framed knot surgery"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps: ["def-p-surgery-on-a-smooth-m-manifold", "lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism", "lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors", "prop-homology-effect-of-surgery-away-from-the-middle-dimensions", "thm-fundamental-group-of-a-product", "thm-fundamental-group-of-the-circle", "thm-higher-dimensional-spheres-are-simply-connected", "def-induced-homomorphism-on-fundamental-groups"]
justified_by: []
aliases: []
proof_strategy: "compute the two solid-torus gluings of the unknot surgery and separate the results by the fundamental group"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi) and Proposition 10.2, printed pp. 195-196 (surgery replaces S^n×D^{m-n} by D^{n+1}×S^{m-n-1}; the effect is determined by the framing)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed pp. 196-197 (a modification is determined by phi; M' has the same boundary as M and the result depends on the diffeotopy class of the attaching embedding)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed pp. 72-73 (the surgery glues along S^k×S^{n-k-1} using the framing, and the existence of the extension of the embedding decides the framing)"
---

## Example

Assume $\mathrm{AC}_\omega$, as in the surgery definition. For a framed knot
in a closed oriented $3$-manifold, $1$-surgery replaces $S^1\times\operatorname{int}D^2$
by $D^2\times S^1$, with the boundary identification fixed by the framing.

For the unknot use $S^3=\partial(D_x^2\times D_y^2)$ with compatible corner
rounding, decomposed into $U=S_x^1\times D_y^2$ and $V=D_x^2\times S_y^1$.
The core is $S_x^1\times\{0\}\subset U$. Its framing with integer twist $k$
is the actual product embedding $\varphi_k(x,z)=(x,x^kz)$ into $U$.
Zero twist produces $S^2\times S^1$; one twist produces $S^3$.
Their fundamental groups are $\mathbb Z$ and $0$, so these are different
results for the same underlying knot. A bare swap of the two boundary circles
is not a framing change: it exchanges the meridian with a longitude and does
not extend over the removed solid torus.

## Verification

**Given:** the unknot core in $U$, and the framed embeddings $\varphi_0$
and $\varphi_1$; circle coordinates are complex numbers of modulus one.

[F1] [[def-p-surgery-on-a-smooth-m-manifold]] specifies the gluing by the
framed product embedding on the boundary torus.

[F2] [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]
gives $\partial(D^2\times D^2)=(S^1\times D^2)\cup(D^2\times S^1)$,
with handle parameters $k=2$, $n=4$.

[F3] [[thm-fundamental-group-of-a-product]],
[[thm-fundamental-group-of-the-circle]], and
[[thm-higher-dimensional-spheres-are-simply-connected]] give
$\pi_1(S^2\times S^1)\cong\mathbb Z$ and $\pi_1(S^3)=0$.

[F4] A diffeomorphism and its inverse give inverse induced maps on loop
classes by composition ([[def-induced-homomorphism-on-fundamental-groups]]),
so distinct fundamental groups rule out diffeomorphism.

1.1 Each $\varphi_k$ is a smooth embedding with inverse $(x,y)\mapsto(x,x^{-k}y)$ on $U$, and all have core $S^1\times\{0\}$. Writing the replacement torus as $T=D_a^2\times S_b^1$, its boundary gluing to $V$ is $g_k(a,b)=(a,a^kb)$. This follows directly from [F1], using $a$ as the attaching-sphere coordinate and $b$ as the normal-circle coordinate. [F1, given, construct]

2.1 For $k=0$, $g_0$ is the product identification. Thus $V\cup_{g_0}T=(D^2\cup_{S^1}D^2)\times S^1\cong S^2\times S^1$. To check smoothness of the disk double identification, map polar disk coordinates $(r,u)$ in the two copies to $(\sin(\pi r/2)u,\pm\cos(\pi r/2))$ on $S^2$; it is smooth and invertible at the centres and in the signed collar coordinate at the seam. [F1, step 1.1, algebra]

2.2 For $k=1$, change coordinates by diffeomorphisms of the solid tori themselves: $L:V\to V$, $L(x,y)=(xy^{-1},y)$, and $R:T\to T$, $R(a,b)=(ab^{-1},b)$. The transformed boundary gluing is $L\circ g_1\circ R(a,b)=(b^{-1},a)$, as direct multiplication shows. This exchanges the two boundary circle factors with one reversal. In the boundary decomposition of [F2], identify the first solid torus $S^1\times D^2$ with $T=D^2\times S^1$ by $(a,b)\mapsto(b^{-1},a)$; it is a diffeomorphism, so the transformed gluing produces the boundary of $D^2\times D^2$. A convex corner rounding is radially transverse to all rays from the origin; write its boundary as $\rho(u)u$ for smooth positive $\rho$ on $S^3$. The radial map and its inverse $z\mapsto z/|z|$ prove that boundary is diffeomorphic to $S^3$. Hence one-twist surgery gives $S^3$. [F1, F2, step 1.1, construct, algebra]

3.1 By [F3] and [F4], the manifolds computed in steps 2.1 and 2.2 cannot be diffeomorphic. These two valid framings of the same core knot therefore give different diffeomorphism types. [F3, F4, step 2.1, step 2.2] ∎
