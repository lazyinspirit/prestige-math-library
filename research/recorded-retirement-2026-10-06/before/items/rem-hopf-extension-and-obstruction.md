---
id: rem-hopf-extension-and-obstruction
kind: remark
title: "Hopf's extension theorem and obstruction theory"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: [rem-obstruction-theory]
landmark: false
short: "Why Tietze does not extend maps into spheres"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Obstruction theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Obstruction_theory"
    - title: "H. Hopf, Die Klassen der Abbildungen der n-dimensionalen Polyeder auf die n-dimensionale Sphaere, Comment. Math. Helv. 5 (1933) 39-54"
      url: "https://doi.org/10.1007/BF01297505"
    - title: "Hopf degree theorem (nLab)"
      url: "https://ncatlab.org/nlab/show/Hopf+degree+theorem"
    - title: "Tietze extension theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tietze_extension_theorem"
pipeline_run: null
---

## Statement

**Hopf's classification theorem.** If $X$ is a CW complex of dimension at most
$n$, then the map sending a homotopy class $[f] \in [X, S^n]$ to
$f^*(\sigma) \in H^n(X;\mathbb{Z})$, where $\sigma$ generates
$H^n(S^n;\mathbb{Z})$, is a bijection. Homotopy classes of maps into a sphere are
therefore completely described by a cohomology class.

**Hopf's extension theorem.** Let $X$ be a CW complex of dimension at most $n+1$,
let $A \subseteq X$ be a subcomplex, and let $f \colon A \to S^n$ be continuous.
Then $f$ extends continuously to $X$ if and only if a single **obstruction class**
$\mathfrak{o}(f) \in H^{n+1}(X, A; \pi_n(S^n)) \cong H^{n+1}(X, A; \mathbb{Z})$
vanishes.

**Obstruction theory** is the general machine behind this. Extending a map into a
target $Y$ skeleton by skeleton, the failure to extend over the
$(k+1)$-skeleton is a cocycle with values in $\pi_k(Y)$, whose class in
$H^{k+1}(X, A; \pi_k(Y))$ vanishes exactly when the map on the $k$-skeleton can
be altered, rel the $(k-1)$-skeleton, so as to extend one dimension further.

## Remarks

**Not proved in this library.**

**What would prove it.** CW complexes and cellular approximation, homotopy groups,
cohomology with local or ordinary coefficients, see
[[rem-homology-and-cohomology]], and the cellular chain-level construction of the
obstruction cocycle.

**Why it matters here.** It answers a question the library raises and cannot
settle. The **Tietze extension theorem** is in scope: a continuous real-valued
function on a closed subspace of a normal space extends to the whole space, and
the same holds for maps into $\mathbb{R}^m$, into an interval, or into any
convex subset of $\mathbb{R}^m$, because the proof extends coordinatewise and
convexity absorbs the corrections. It fails completely for maps into a sphere,
and the obstruction above is the reason.

The smallest instance is worth separating out. The identity map
$S^n \to S^n$ extends continuously to $B^{n+1}$ if and only if there is a
retraction of $B^{n+1}$ onto $S^n$, and there is none for $n \geq 0$; so already
the simplest sphere-valued extension problem has no solution, and this is exactly
the no-retraction theorem of [[rem-brouwer-fixed-point]]. For $n = 0$ this is
elementary and in scope, since $S^0$ is a two-point discrete space and $B^1$ is
connected, so no continuous retraction exists. For $n \geq 1$ it is deferred with
Brouwer. What obstruction theory adds is that this single failure is measured by
one cohomology class, and that all the higher failures are measured the same way.
