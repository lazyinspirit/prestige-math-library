---
id: rem-simple-connectedness
kind: remark
title: "Simple connectedness as a homotopy notion"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Trivial fundamental group; this library uses convex and star-shaped instead"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Simply connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Simply_connected_space"
    - title: "Fundamental group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_group"
    - title: "A. Hatcher, Algebraic Topology, Ch. 1 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
    - title: "fundamental group (nLab)"
      url: "https://ncatlab.org/nlab/show/fundamental+group"
pipeline_run: null
---

## Statement

Let $X$ be a topological space. Two paths $\alpha, \beta \colon [0,1] \to X$ with
$\alpha(0) = \beta(0)$ and $\alpha(1) = \beta(1)$ are **path homotopic** if there
is a continuous $H \colon [0,1] \times [0,1] \to X$ with $H(s,0) = \alpha(s)$,
$H(s,1) = \beta(s)$, $H(0,t) = \alpha(0)$ and $H(1,t) = \alpha(1)$ for all $s,t$.
Path homotopy is an equivalence relation, and concatenation of paths descends to
the classes; the classes of loops based at a point $x_0$ form a group under
concatenation, the **fundamental group** $\pi_1(X, x_0)$, with identity the class
of the constant loop and inverse the class of the reversed loop.

The space $X$ is **simply connected** if it is path connected and
$\pi_1(X, x_0)$ is the trivial group for some, equivalently every, basepoint
$x_0$. Equivalently: $X$ is path connected and any two paths in $X$ with the same
endpoints are path homotopic; equivalently, every loop in $X$ is null homotopic.

## Remarks

**Not proved in this library.** Nothing above is established here. The library
does not construct the fundamental group, does not prove that concatenation is
well defined on path-homotopy classes, does not prove that the group is
independent of the basepoint on a path connected space, and does not prove the
equivalence of the three formulations of simple connectedness.

**What would prove it.** The homotopy track: homotopy of maps and of paths, the
groupoid of path classes, the fundamental group as a functor from pointed spaces
to groups, and the change-of-basepoint isomorphism induced by a path. This is the
opening chapter of any algebraic topology course and is elementary in the sense
of needing no machinery beyond point-set topology, but it is a track this library
has not built, so it is recorded and not proved.

**Why it matters here.** Simple connectedness is the hypothesis analysis wants
whenever it needs a region with no holes: for the Poincare lemma (a closed
differential form on such a region is exact), for the gradient theorem and path
independence of line integrals, and for the existence of primitives and of
branches of the logarithm. The library does not use it. It uses elementary
substitutes instead, and the substitution is deliberate:

* **convex** and **star-shaped** open sets, for which the required homotopy is
  written down explicitly by the straight-line formula
  $H(s,t) = (1-t)\alpha(s) + t\,c$ toward the centre $c$, so that the Poincare
  lemma and the gradient theorem are proved by direct construction with no
  homotopy theory at all;
* **polygonally connected** open subsets of $\mathbb{R}^n$, which is the
  elementary substitute for path connectedness rather than for simple
  connectedness: on an open subset of $\mathbb{R}^n$, connected, path connected
  and polygonally connected all coincide, and the polygonal form is the one that
  can be proved by a clopen argument.

Star-shaped implies simply connected, and the converse fails, so every theorem
this library states with a star-shaped or convex hypothesis is a strictly special
case of the homotopy-theoretic statement. That is the honest position: the
results are true as stated, and the general form is not available here.
