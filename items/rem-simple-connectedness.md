---
id: rem-simple-connectedness
kind: remark
title: "Simple connectedness as a homotopy notion"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-based-loops-and-fundamental-group,
               thm-fundamental-group-laws,
               def-simply-connected,
               thm-convex-subsets-have-trivial-fundamental-group]
aliases: []
landmark: false
short: "Trivial fundamental group; change of basepoint and equivalent formulations remain deferred"
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

**Partly proved elsewhere in this library.** The library now constructs based
loop classes and the fundamental group
([[def-based-loops-and-fundamental-group]]), proves that concatenation is well
defined and gives the group laws ([[thm-fundamental-group-laws]]), and defines
simple connectedness by requiring a trivial fundamental group at every
basepoint ([[def-simply-connected]]). What is not proved is the
change-of-basepoint isomorphism on a path-connected space and, consequently, the
equivalence of the three formulations stated above.

**What would prove the remaining clauses.** A path-induced
change-of-basepoint isomorphism, with its independence and composition laws,
would show that one basepoint suffices and would identify null-homotopy of every
loop with endpoint-fixed homotopy of any two paths. The groupoid language is a
natural way to package that argument, but it is not needed for the fundamental
group core already present.

**Why it matters here.** Simple connectedness is the hypothesis analysis wants
whenever it needs a region with no holes: for the Poincare lemma (a closed
differential form on such a region is exact), for the gradient theorem and path
independence of line integrals, and for the existence of primitives and of
branches of the logarithm. The library now uses the definition in its topology
track and proves that every nonempty convex Euclidean subset is simply connected
([[thm-convex-subsets-have-trivial-fundamental-group]]). The analysis results
named above still use elementary substitutes, and that restriction is
deliberate:

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
case of the homotopy-theoretic statement. The remaining unavailable generality
is the change-of-basepoint theorem and the equivalent path and loop
formulations, not the definition or group construction themselves.
