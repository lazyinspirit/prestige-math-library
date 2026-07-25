---
id: rem-covering-spaces-and-universal-cover
kind: remark
title: "Covering spaces and the universal cover"
status: draft
origin: session
proved_here: false
deps: [rem-simple-connectedness]
justified_by: []
forward_refs: []
aliases: [rem-universal-cover]
landmark: true
short: "Coverings, lifting, and the Galois correspondence with subgroups of the fundamental group"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Covering space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Covering_space"
    - title: "covering space (nLab)"
      url: "https://ncatlab.org/nlab/show/covering+space"
    - title: "A. Hatcher, Algebraic Topology, Section 1.3 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
    - title: "J. P. May, A Concise Course in Algebraic Topology, Ch. 3 (University of Chicago)"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

A continuous surjection $p \colon E \to X$ is a **covering map** if every point of
$X$ has an open neighbourhood $U$ such that $p^{-1}(U)$ is a disjoint union of
open subsets of $E$, each mapped homeomorphically onto $U$ by $p$. Such a $U$ is
said to be evenly covered, and $E$ is a **covering space** of $X$.

The results that make covering spaces useful, none of them proved here:

* **Unique path lifting and the homotopy lifting property.** Given a covering
  $p \colon E \to X$, a path $\gamma$ in $X$ and a point $e \in p^{-1}(\gamma(0))$,
  there is exactly one path $\tilde{\gamma}$ in $E$ with $p \circ \tilde{\gamma} =
  \gamma$ and $\tilde{\gamma}(0) = e$; and path homotopies lift likewise, so
  path-homotopic paths have path-homotopic lifts with the same endpoint
  (the monodromy theorem).
* **Injectivity.** $p_* \colon \pi_1(E, e) \to \pi_1(X, p(e))$ is injective, so
  the covering realises a subgroup of $\pi_1(X, p(e))$.
* **The universal cover.** A covering $p \colon \tilde{X} \to X$ with $\tilde{X}$
  path connected and simply connected is called **universal**; it covers every
  other path connected covering of $X$, and it is unique up to isomorphism of
  coverings over $X$. It exists if and only if $X$ is path connected, locally
  path connected and semi-locally simply connected.
* **The Galois correspondence.** For such an $X$, the isomorphism classes of path
  connected coverings of $X$ correspond bijectively to the conjugacy classes of
  subgroups of $\pi_1(X, x_0)$, the universal cover corresponding to the trivial
  subgroup; and the group of deck transformations of the universal cover is
  isomorphic to $\pi_1(X, x_0)$.

## Remarks

**Not proved in this library.** None of the lifting theorems, the existence and
uniqueness of the universal cover, or the correspondence with subgroups is
established here.

**What would prove it.** The homotopy track. Lifting is proved by a Lebesgue
number argument on the square together with uniqueness of lifts on a connected
domain; the universal cover is constructed as the set of path-homotopy classes of
paths in $X$ starting at $x_0$, topologised by lifting basic open sets; the
correspondence is then bookkeeping with $p_*$ and deck transformations. The
construction needs [[rem-semilocal-simple-connectedness]], which is precisely the
condition making that topology locally trivial.

**Why it matters here.** The library meets covering maps constantly without being
able to name them. The map $t \mapsto e^{2\pi i t}$ from $\mathbb{R}$ to the unit
circle, and the complex exponential $\exp \colon \mathbb{C} \to \mathbb{C}
\setminus \{0\}$, are the two basic examples, and every statement the library
proves about winding numbers, continuous arguments and branches of the logarithm
is a lifting statement in disguise. Those statements are proved here by explicit
elementary constructions, using uniform continuity and compactness of $[0,1]$
rather than a general lifting theorem, so the results stand; what is missing is
the organising language, not the content.
