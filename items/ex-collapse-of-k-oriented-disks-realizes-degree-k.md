---
id: ex-collapse-of-k-oriented-disks-realizes-degree-k
kind: example
title: Collapsing $k$ oriented disks realizes degree $k$
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-euclidean-spheres-and-closed-balls
- def-induced-boundary-orientation
- def-orientation-preserving-parametrization
- def-oriented-smooth-manifold-and-oriented-chart
- lem-every-integer-degree-is-realized-by-a-map-to-the-sphere
- thm-regular-value-formula-for-degree
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, the Special Case and Extension Theorem realizing prescribed degrees by pinching disks, printed pp.144-146
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: the collapse construction (2.34) and Theorem 2.37, printed pp.22-23
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Sections 7-8, pinching a disk to produce maps of prescribed degree, printed pp.42-51
---
## Example

Let $M$ be a nonempty closed connected oriented smooth $m$-manifold, $m\ge1$, and let
$k\in\mathbb Z$. Pick $|k|$ pairwise disjoint closed coordinate balls in $M$.
On each ball read the explicit smooth pinch model $F$ of [[lem-every-integer-degree-is-realized-by-a-map-to-the-sphere]] through a chart centred at that ball. Choose the chart sign so that $\operatorname{sgn}(dF_0)\operatorname{sgn}(d\varphi_i)=\operatorname{sgn}(k)$; for this outward-normal-first sphere orientation, $\operatorname{sgn}(dF_0)=(-1)^{m+1}$. Extend by the same base point $N$ outside the balls. The resulting smooth map $f_k:M\to S^m$ has the point $y_-=F(0)$ of
the model as a regular value whose preimage is exactly the set of centres of
the chosen balls, one point per ball, so that
$\deg(f_k)=\sum_{i=1}^{|k|}\operatorname{sgn}(df_{k,p_i})$. Choosing all local
signs to be $\operatorname{sgn}(k)$ gives $\deg(f_k)=k$. For $k=\pm1$ this is
the pinch of a single oriented ball, and for $k=0$ the empty family gives the
constant map, of degree $0$.

## Facts & Assumptions

**Given:** A nonempty closed connected oriented smooth $m$-manifold $M$ with $m\ge1$, an integer $k$, the unit sphere $S^m\subseteq\mathbb R^{m+1}$ with its standard orientation for which the outward normal of the ball is first, and the explicit model pinch $F:\mathbb R^m\to S^m$ of the realization lemma with its regular value $y_-$ ([[def-euclidean-spheres-and-closed-balls]], [[def-induced-boundary-orientation]]).

[F1] For every integer $k$ there is a smooth map $M\to S^m$ of degree $k$, constructed by reading the smooth model pinch $F$ in $|k|$ pairwise disjoint closed coordinate balls (with a chart orientation chosen for the desired local sign) and extending by the base point; the model satisfies $F^{-1}(y_-)=\{0\}$, $dF_0$ invertible, and $F=N$ outside the unit ball ([[lem-every-integer-degree-is-realized-by-a-map-to-the-sphere]]).

[F2] For a proper smooth map $f:M\to S^m$ with $M$ a nonempty connected oriented closed manifold, a regular value $y$ with finite fibre gives $\deg(f)=\sum_{x\in f^{-1}(y)}\operatorname{sgn}(df_x)$, where $\deg$ is the compact-support degree and the signs use the orientations of source and target ([[thm-regular-value-formula-for-degree]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

[F3] A chart of the oriented manifold $M$ is orientation-preserving or orientation-reversing, and the sign of the chart multiplies the local orientation sign of a composition with the chart; $S^m$ carries the stated orientation ([[def-orientation-preserving-parametrization]], [[def-oriented-smooth-manifold-and-oriented-chart]], [[def-induced-boundary-orientation]]).

## Verification

**Proof technique:** direct.

1.1 The realization lemma supplies exactly the objects described: the model $F$ with $F^{-1}(y_-)=\{0\}$, $dF_0$ invertible and $F=N$ off the unit ball, and the glued map $f_k$ which equals $F$ read through the $i$-th chart near the centre $p_i$ and $N$ elsewhere; its construction and its smoothness are those verified there. [F1, given]

1.2 The preimage of $y_-$ under $f_k$ is exactly $\{p_1,\dots,p_{|k|}\}$: each centre gives a preimage by $F(0)=y_-$, the model has no other preimage of $y_-$ inside the unit ball, and points outside the balls as well as points of a ball mapping outside the unit ball have value $N\ne y_-$; the differential $df_{k,p_i}=dF_0\circ d\varphi_i$ is invertible, so $y_-$ is a regular value and $f_k$ is proper because $M$ is compact. [F1, given]

2.1 By step 1.2 and [F2], $\deg(f_k)=\operatorname{sgn}(dF_0)\sum_{i=1}^{|k|}\varepsilon_i$ with $\varepsilon_i=\pm1$ the orientation sign of the $i$-th chart, by [F3]; choosing every chart so that $\operatorname{sgn}(dF_0)\varepsilon_i=\operatorname{sgn}(k)$ makes the sum equal to $k$. For $k=0$ there is no ball and $f_0=N$ is constant, with an empty regular fibre over any point different from $N$, so $\deg(f_0)=0$. This realizes every prescribed degree by collapsing oriented disks with the prescribed local signs. [F2, F3, step 1.2, algebra] ∎
