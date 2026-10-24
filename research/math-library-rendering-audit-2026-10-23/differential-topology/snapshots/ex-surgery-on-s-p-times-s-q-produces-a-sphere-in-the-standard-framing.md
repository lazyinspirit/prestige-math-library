---
id: "ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing"
kind: "example"
title: "Surgery on a product of spheres produces a sphere in the standard framing"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps:
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-euclidean-spheres-and-closed-balls
  - def-framed-embedded-surgery-sphere
  - def-p-surgery-on-a-smooth-m-manifold
  - lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors
  - lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism
  - thm-surgery-is-reversed-by-dual-surgery
justified_by: []
aliases: []
proof_strategy: "read the two boundary decompositions of a product of disks in the two directions"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi), printed p. 195 (the two pieces S^n×D^{m-n} and D^{n+1}×S^{m-n-1} are exchanged by the surgery, and their union is the boundary of the product of disks)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (the modification and its reverse have the same supporting manifold)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (the modification replaces S^k×D^{n-k} by D^{k+1}×S^{n-k-1})"
---

## Example

Assume $\mathrm{AC}_\omega$, as in the surgery definition. Let $0\le p\le m-1$, $q=m-p$, and $M=S^p\times S^q$. Embed $S^p$ as
$S^p\times\{y_0\}$ and frame it by the $S^q$-factor: use the labelled hemisphere decomposition of $S^q$, with $y_0$ the pole of the removed hemisphere, to obtain a product neighbourhood $S^p\times D^q$. Then the $p$-surgery
along this framed sphere produces $S^{p+q}=S^m$. Separately, the standard
decomposition $S^m=(S^p\times D^q)\cup(D^{p+1}\times S^{q-1})$ shows that
$p$-surgery on $S^m$ along the standard framed $S^p$ produces
$S^{p+1}\times S^{q-1}$: these are different $p$-surgeries. The inverse of the first is a
$(q-1)$-surgery on $S^m$ returning $S^p\times S^q$, while the inverse of the
second is a $(q-1)$-surgery on $S^{p+1}\times S^{q-1}$ returning $S^m$.

## Verification

**Given:** the integers $0\le p\le m-1$ and $q=m-p$, the manifold
$M=S^p\times S^q$, the embedded sphere $S^p\times\{y_0\}$, and the standard
decompositions of the relevant disk products.

[F1] [[def-p-surgery-on-a-smooth-m-manifold]]: the $p$-surgery replaces
$\varphi(S^p\times\operatorname{int}D^q)$ by $D^{p+1}\times S^{q-1}$ glued
along $S^p\times S^{q-1}$ by the identification induced by the framing.

[F2] [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]:
$\partial(D^{p+1}\times D^q)=(S^p\times D^q)\cup(D^{p+1}\times S^{q-1})$, the
two sides meeting along $S^p\times S^{q-1}$; the boundary of a product is the
union of the products with the boundary of one factor.

[F3] [[def-euclidean-spheres-and-closed-balls]]: The labelled double of $D^n$ is explicitly diffeomorphic to the sphere for $n\ge1$, by the following elementary map (not a theorem asserted by the cited definition): for $x=ru$ in each copy, send $x$ to $(\sin(\pi r/2)u,\pm\cos(\pi r/2))$. At $r=0$ the first component is $(\sin(\pi|x|/2)/|x|)x$, smooth with nonzero derivative, and the last component is an even smooth function of $|x|$. At the glued seam use signed collar distance $t=\pm(1-r)$; the last coordinate becomes $\sin(\pi t/2)$ and the first becomes $\cos(\pi t/2)u$, giving a smooth chart with invertible derivative. The maps are bijective on the two hemispheres and these local inverses are smooth, so this is a diffeomorphism.

[F4] [[def-framed-embedded-surgery-sphere]]: a framing is part of the data, and
the product structure of $\varphi$ is exactly the trivialization of the normal
bundle of the underlying sphere.

[F5] [[thm-surgery-is-reversed-by-dual-surgery]]: for a closed connected starting manifold, the two modifications are
inverse up to diffeomorphism and share the same supporting manifold; the dual
sphere has dimension $q-1$ and the dual piece is $D^q\times S^p$.

1.1 The disk chart at $y_0$ exhibits the embedding $\varphi:S^p\times D^q\hookrightarrow S^p\times S^q$, $\varphi(x,y)=(x,y)$ in the chart, with image in the interior; its restriction to the disk factor is the product trivialization, so $\varphi$ is a framed embedded surgery sphere with underlying sphere $S^p\times\{y_0\}$, framed by the $S^q$-factor. [F4, given]

1.2 Use the hemisphere parameterizations given by the map of [F3]. The removed neighbourhood in the second factor is one labelled closed hemisphere and its closed complement is the other, with matching boundary coordinate $S^{q-1}$. Thus removing the open tube leaves exactly $S^p\times D^q$ with the boundary identification specified by the product framing; no complement assertion for an arbitrary disk chart is needed. [F1, F3, F4, given]

2.1 Glue $D^{p+1}\times S^{q-1}$ to the complement of step 1.2 by the product boundary identification. By [F2] this is the rounded boundary of $D^{p+1}\times D^q$. Choose a convex rounding of the product corners: its boundary is transverse to each ray from the origin, so it is $\{\rho(u)u:u\in S^m\}$ for a positive smooth $\rho$. The radial map $u\mapsto\rho(u)u$ has smooth inverse $z\mapsto z/|z|$, proving that this boundary is diffeomorphic to $S^m$. Rounding independence gives the same diffeomorphism type for other compatible roundings. This proves the first computation, including $p=0$ and $q=1$. [F1, F2, step 1.2, construct, algebra]

3.1 For the dual reading, regard $S^m=\partial(D^{p+1}\times D^q)$ with the decomposition of [F2]; the standard framed $S^p=S^p\times\{0\}$ lies in the solid piece $S^p\times D^q$ and has tubular neighbourhood $S^p\times D^q\subseteq S^m$, framed by the $D^q$-factor. The $p$-surgery on $S^m$ along this sphere removes $S^p\times\operatorname{int}D^q$ and glues in $D^{p+1}\times S^{q-1}$ along $S^p\times S^{q-1}$, leaving two copies of $D^{p+1}\times S^{q-1}$ glued along their common boundary; that double is the product $S^{p+1}\times S^{q-1}$ of the double of $D^{p+1}$, which is $S^{p+1}$ by [F3], with the closed factor $S^{q-1}$, the gluing being the product identification. Hence the surgery on $S^m$ along the standard framed $S^p$ produces $S^{p+1}\times S^{q-1}$. [F1, F2, F3, step 2.1]

4.1 For $p\ge1$, the starting product is connected, so [F5] shows that the inverse of the first computation uses the belt sphere of dimension $q-1$ in $S^m$ and returns $S^p\times S^q$. For $p=0$, compute that inverse directly: in $S^m=\partial(D^1\times D^q)$, remove the interior of the belt tube $D^1\times S^{q-1}$ and insert $S^0\times D^q$. The complement is another $S^0\times D^q$, with the product boundary identification; their union is $S^0\times(D^q\cup_{S^{q-1}}D^q)\cong S^0\times S^q$ by [F3]. The second computation operates on the other sphere, of dimension $p$, in $S^m$, and produces $S^{p+1}\times S^{q-1}$; its inverse returns $S^m$. Thus the two $p$-surgeries are not identified with each other's dual operations. [F1, F2, F3, F5, step 2.1, step 3.1, algebra] ∎