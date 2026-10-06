---
id: def-framing-sign-of-a-zero-dimensional-regular-preimage
kind: definition
title: The framing sign of a zero-dimensional regular preimage
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
- def-frame-bundle-of-a-smooth-manifold
- def-framed-regular-preimage-of-a-map-to-a-sphere
- def-framing-of-a-normal-bundle
- def-normal-and-conormal-bundles-of-an-embedded-submanifold
- def-orientation-of-a-finite-dimensional-real-vector-space
- def-oriented-smooth-manifold-and-oriented-chart
- def-local-orientation-sign-of-a-regular-preimage
- def-smooth-manifold
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: The signed count of framed points, printed p.23 ('a framed point is a point $y\in M$ together with a basis of $T_yM$')
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, $\operatorname{sgn}(x)=+1$ or $-1$ according as the preferred basis determines the right or wrong orientation, printed p.50
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 2, Section 4, signed counting of preimages modulo orientation, printed pp.82-84
---
## Definition

Assume countable choice $\mathrm{AC}_\omega$, inherited from the framed
preimage of [[def-framed-regular-preimage-of-a-map-to-a-sphere]]. Let $M$ be a
closed oriented smooth $m$-manifold with $m\ge1$, and let $(N,\varphi)$ be a
closed framed $0$-dimensional submanifold of $M$ in the sense of
[[def-framing-of-a-normal-bundle]]. Since $\dim N=0$, the normal bundle of $N$
in $M$ is $\nu(N\subseteq M)=\coprod_{x\in N}T_xM/T_xN=\coprod_{x\in N}T_xM$
over the finite set $N$
([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]), and the
framing is a family of linear isomorphisms
$\varphi_x:T_xM\to\mathbb R^m$; the pair $(x,\varphi_x)$ is a framing of the
point $x$ in the frame-bundle dictionary of
[[def-frame-bundle-of-a-smooth-manifold]], namely the inverse of the element
$(x,\varphi_x^{-1})\in B(M)_x$.

The **framing sign** of $x\in N$ is
$$\varepsilon(x):=\begin{cases}+1,&\varphi_x\ \text{is orientation-preserving for the given orientation of}\ T_xM\ \text{and the standard orientation of}\ \mathbb R^m,\\ -1,&\text{otherwise},\end{cases}$$
and the **signed count** of $(N,\varphi)$ is
$\Phi(N,\varphi):=\sum_{x\in N}\varepsilon(x)\in\mathbb Z$. Replacing
$\varphi_x$ by $A\circ\varphi_x$ for $A\in\mathrm{GL}_m(\mathbb R)$ multiplies
$\varepsilon(x)$ by the sign of $\det A$, so the sign records exactly the
orientation class of the framing and is constant on the two components of the
fibre $B(M)_x$; when $M$ is oriented and a positive chart is used,
$\varepsilon(x)=+1$ precisely for the positively oriented framings of
[[def-oriented-smooth-manifold-and-oriented-chart]] and
[[def-orientation-of-a-finite-dimensional-real-vector-space]]. The empty
$0$-manifold has signed count $0$, and the definition uses no choice beyond the
inherited $\mathrm{AC}_\omega$ and no orientation when only the unframed parity
of $N$ is considered.

For the **framed regular preimage** of a smooth map $f:M\to S^m$ at a regular
value $y$ with a positive basis $b$ of $T_yS^m$, write $\beta:T_yS^m\to\mathbb R^m$ for the coordinate isomorphism sending the positive basis $b$ to the standard basis. The induced framing is
$f_*b=\beta\circ df_x$ on $\nu(x)=T_xM$
([[def-framed-regular-preimage-of-a-map-to-a-sphere]]), and the framing sign of
$x\in f^{-1}(y)$ is exactly the **local orientation sign**
$\operatorname{sgn}(df_x)$ of
[[def-local-orientation-sign-of-a-regular-preimage]]: both compare the
isomorphism $df_x:T_xM\to T_yS^m$ of oriented vector spaces, and the positive
coordinate isomorphism $\beta$ carries the given orientation of $T_yS^m$ to the standard orientation
of $\mathbb R^m$. In particular the signed count of the framed preimage is the
sum of the local orientation signs of $f$ over the regular fibre.
