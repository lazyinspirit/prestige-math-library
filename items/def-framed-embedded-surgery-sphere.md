---
id: "def-framed-embedded-surgery-sphere"
kind: "definition"
title: "Framed embedded surgery sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps: ["def-smooth-manifold", "def-smooth-embedding", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "def-tubular-neighbourhood-of-an-embedded-submanifold", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary"]
justified_by: []
aliases: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed pp. 72-73 (the embedding q:S^k×D^{n-k}->M and the discussion 'the existence of the extension q is equivalent to the triviality of the normal bundle'); §3.4.3, printed pp. 75-76 (Theorem 3.59 (1), (3))"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (ii) (a framed n-immersion g:S^n×D^{m-n}->M) and (iv), printed pp. 194-195"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed p. 196 (the embedding phi:S^{r-1}×D^{m-r+1}->M with image in the interior)"
---

## Definition

Let $M$ be a smooth $m$-manifold and let $0\le p\le m-1$, with $q=m-p$, so
that $q\ge1$. A **framed embedded surgery sphere** of dimension $p$ in $M$ is a
smooth embedding
$$\varphi:S^p\times D^q\hookrightarrow M$$
whose image lies in the interior of $M$. Its **underlying sphere** is the smooth
embedding $\varphi_0:S^p\to M$, $\varphi_0(x)=\varphi(x,0)$ obtained by
restricting to the zero of the disk factor
([[def-smooth-embedding]], [[def-smooth-manifold]]). The differential in the disk directions at $(x,0)$, followed by the quotient
$T_{\varphi_0(x)}M\to T_{\varphi_0(x)}M/d\varphi_0(T_xS^p)$, is a linear
isomorphism $\mathbb R^q\to\nu_{\varphi_0,x}$: $d\varphi$ is invertible and
its sphere directions are precisely the tangent space of the underlying
sphere. These isomorphisms vary smoothly and give its **normal framing**
([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).
The framing is
part of the data and is fixed, not taken up to homotopy: the same underlying
sphere with a different trivialization is a different framed embedded surgery
sphere.

The existence of such product-embedding data is equivalent to triviality of
the normal bundle, as proved in the
framing lemma of this page using the tubular neighbourhood theorem. A framing
alone does not specify a unique tubular embedding; here the entire embedding
$\varphi$ is supplied. The
disk-factor convention $D^q$ matches the handle vocabulary of
[[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: the attaching
region of the standard handle is a product of a sphere and a disk, and its
attaching sphere is the zero of the disk factor.

The range is the one fixed by the plan: $0\le p\le m-1$, equivalently $q\ge1$.
The case $p=m-1$ is included, and then $q=1$: the framing trivializes a normal
line bundle, so the normal direction must be orientable. The case $p=m$ is not
included, because then the disk factor would be $D^0$ and the construction
below would require a surgery on an $S^{-1}$, which is not defined. No
orientation of $M$ is assumed, and the definition performs no construction: an
existence statement for $\varphi$ is not part of it.

The smooth structure and boundary conventions used for $M$ are those of
[[def-smooth-manifold]] and
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], and the
smooth vector bundle conventions are those of
[[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]. This definition
uses no choice principle.
