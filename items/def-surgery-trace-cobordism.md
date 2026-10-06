---
id: "def-surgery-trace-cobordism"
kind: "definition"
title: "Surgery trace cobordism"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps: ["def-framed-embedded-surgery-sphere", "def-p-surgery-on-a-smooth-m-manifold", "def-attaching-a-smooth-handle-with-corner-rounding", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-smooth-cobordism-triad-for-morse-theory", "lem-product-cobordisms-have-critical-point-free-presentations", "def-smooth-collar-of-a-manifold-boundary", "def-oriented-smooth-manifold-and-oriented-chart", "def-induced-boundary-orientation", "def-oriented-smooth-cobordism", "def-countable-choice"]
justified_by: []
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
      locator: "Chapter 3 §3.4.1, printed p. 72 (the bordism W=D^{k+1}×D^{n-k}∪_q M×[0,1], obtained from M×[0,1] by attaching a handle D^{k+1}×D^{n-k} to M×{1}, with M=M×{0} and M' the other part of the boundary); §3.4.3, Theorem 3.59 (4), printed pp. 75-76"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi) and the trace bordism (F;f,f'):(W;M,M')->X×(I;{0},{1}) with W=M×I∪_g D^{n+1}×D^{m-n}, printed p. 195"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed pp. 196-197 (the supporting manifold W=(M×I)∪_f h^r with boundary part W=M and supported boundary part W=M')"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a closed
smooth $m$-manifold, $0\le p\le m-1$, $q=m-p$, and let
$\varphi:S^p\times D^q\hookrightarrow M$ be a framed embedded surgery sphere
([[def-framed-embedded-surgery-sphere]]). Regard $\varphi$ in the upper face
$M\times\{1\}$ of the cylinder $M\times[0,1]$ as the embedding
$\varphi\times\{1\}$, whose image is contained in the interior of that face. The
**surgery trace cobordism** of $\varphi$ is the compact smooth
$(m+1)$-manifold
$$W_\varphi=(M\times[0,1])\cup_{\varphi\times\{1\}}(D^{p+1}\times D^q),$$
that is, the cylinder $M\times[0,1]$ with the standard $(p+1)$-handle
$D^{p+1}\times D^q$ attached along the framed sphere, the corner along
$\varphi(S^p\times\partial D^q)$ being rounded in the standard way
([[def-attaching-a-smooth-handle-with-corner-rounding]]). The index shift is
part of the construction: a surgery datum of sphere dimension $p$ produces a
handle of index $p+1$, whose attaching region is $S^p\times D^q$ and whose
outgoing region is $D^{p+1}\times S^{q-1}$
([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).

The cylinder is the product cobordism with the empty handle presentation, whose
incoming face is $M_0=M\times\{0\}$ and whose outgoing face is
$M\times\{1\}$; the product presentation and its, possibly empty, collar
structure are those of
[[lem-product-cobordisms-have-critical-point-free-presentations]], and the
collar of the incoming face is the one used whenever the trace is recorded as a
cobordism ([[def-smooth-collar-of-a-manifold-boundary]],
[[def-smooth-cobordism-triad-for-morse-theory]]).

The trace carries the following fixed pieces of structure, which are not
choices made afterwards:

- the **incoming face** $M\times\{0\}$, identified with $M$ by the product
  structure;
- the **core disk** $D^{p+1}\times\{0\}$ of the attached handle;
- the **cocore disk** $\{0\}\times D^q$ of the attached handle;
- the **belt sphere** $\{0\}\times S^{q-1}\subseteq D^{p+1}\times S^{q-1}$,
  a copy of which lies in the outgoing face of $W_\varphi$.

When $M$ is oriented, an oriented trace additionally requires compatibility
of the framing with the orientation: choose the handle orientation so its
attaching identification reverses the induced boundary orientations of the
handle and the cylinder. The orientation then glues, and $W_\varphi$ is an oriented
bordism from $M$ to its outgoing face, the outgoing face carrying the induced
boundary orientation and the incoming face the negative of the orientation of
$M$, in the outward-normal-first convention of
[[def-induced-boundary-orientation]]; this is the oriented bordism relation of
[[def-oriented-smooth-cobordism]], and the orientation of $M$ determines the extending orientation when this compatibility
holds. For $p\ge1$ the attaching region is connected, so the handle
orientation can always be chosen to match it. For $p=0$ its two components
must both match that one handle orientation; an arbitrary pair of interval
framings need not do so, and the unoriented trace remains defined in that case.
The supplied orientation is the only ambient orientation used ([[def-oriented-smooth-manifold-and-oriented-chart]]).

Nothing is proved here. In particular, the identification of the outgoing face
with the surgered manifold $M_\varphi$ of
[[def-p-surgery-on-a-smooth-m-manifold]] is the content of the upper-boundary
theorem of this page, and the deformation retractions of the trace are not part
of the definition.
