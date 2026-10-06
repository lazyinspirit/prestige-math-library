---
id: "def-p-surgery-on-a-smooth-m-manifold"
kind: "definition"
title: "p-surgery on a smooth m-manifold"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps: ["def-framed-embedded-surgery-sphere", "def-attaching-a-smooth-handle-with-corner-rounding", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-smooth-collar-of-a-manifold-boundary", "thm-collar-neighborhood-theorem", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary", "def-countable-choice"]
justified_by: ["lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism"]
aliases: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (the modification M'=D^{k+1}×S^{n-k-1}∪_{im(q|S^k×S^{n-k-1})}(M-int(im(q))) and the technique of straightening the angle)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi), printed p. 195 (the effect M'=cl.(M\\g(S^n×D^{m-n}))∪D^{n+1}×S^{m-n-1} of an n-surgery removing a framed n-embedding)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (removing the interior of the image of phi and attaching D^r×S^{m-r} by phi restricted to S^{r-1}×S^{m-r}; M' has the same boundary as M)"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a smooth
$m$-manifold, let $0\le p\le m-1$ and $q=m-p$, so that $q\ge1$, and let
$\varphi:S^p\times D^q\hookrightarrow M$ be a framed embedded surgery sphere
with image in the interior of $M$ ([[def-framed-embedded-surgery-sphere]]). The
**$p$-surgery on $M$ along $\varphi$**, also called a spherical modification of
type $(p+1,q)$, is the smooth $m$-manifold $M_\varphi$ obtained by removing the
open tubular piece $\varphi(S^p\times\operatorname{int}D^q)$ and gluing in
$D^{p+1}\times S^{q-1}$ along the common boundary, using the identification
induced by $\varphi$ on $S^p\times S^{q-1}$:
$$M_\varphi=\bigl(M\setminus\varphi(S^p\times\operatorname{int}D^q)\bigr)\cup_{\varphi|_{S^p\times S^{q-1}}}\bigl(D^{p+1}\times S^{q-1}\bigr).$$

The two pieces are smooth manifolds with boundary sharing the boundary component
$S^p\times S^{q-1}$ under the identification induced by $\varphi$; the complement
also retains $\partial M$. They are glued along collars of the shared component and the seam is
smoothed by the signed collar charts also used along the boundary of a smooth handle attachment
([[def-attaching-a-smooth-handle-with-corner-rounding]],
[[thm-collar-neighborhood-theorem]]). The smooth structure produced this way is
independent of the auxiliary collar and smoothing choices up to a
diffeomorphism supported near the seam; this is proved by the gluing lemma of
this page, and it is the sense in which the construction is
well defined ([[lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism]]).

The **core sphere** is $\varphi_0:S^p\to M$, $\varphi_0(x)=\varphi(x,0)$; it
lies in the removed piece and is not a submanifold of $M_\varphi$. The **belt sphere** is
$\{0\}\times S^{q-1}\subseteq
D^{p+1}\times S^{q-1}\subseteq M_\varphi$, a closed embedded $(q-1)$-sphere with
the normal data of the disk-factor decomposition
([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]). The glued-in
disk factor has dimension $p+1$, while the whole piece has dimension
$(p+1)+(q-1)=m$. The disk dimension is the index shift recorded by the trace
construction of this page.

The boundary identification is the restriction of the supplied product
embedding $\varphi$, whose derivative along the core induces the normal
framing. Changing that embedding or its framing can change the surgery, but
distinct normal framings need not give distinct boundary identifications or
distinct diffeomorphism types. Nothing in the definition
asserts that a framing exists for a given embedded sphere; that condition is the
content of the framing lemma of this page.

When $\partial M\ne\varnothing$ the construction takes place in the interior of
$M$ and leaves $\partial M$ unchanged: the removed piece lies in the interior
and the glued-in piece meets $\partial M$ in no point. The case $p=m-1$ (so $q=1$)
replaces an open product neighbourhood $S^{m-1}\times(-1,1)$ by the two disks
$D^m\times S^0$; the openness of the removed piece and the count of the disk
factors are the point of the endpoint formula, which is computed on the B page.
No case $p=m$ is included, since then $q=0$ and the boundary being traded would
be $S^m\times S^{-1}$; the range $0\le p\le m-1$ excludes it, in accordance with
the plan's binding repair.

The smooth structure and boundary conventions are those of
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], and
diffeomorphism means diffeomorphism of smooth manifolds
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). Countable Choice
is used exactly where the cited collar and handle-attachment suppliers use it,
that is, in the existence of the collars along which the two pieces are glued.
