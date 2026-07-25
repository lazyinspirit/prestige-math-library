---
id: rem-hawaiian-earring-fundamental-group
kind: remark
title: "The Hawaiian earring: no universal cover, and an uncountable non-free $\\pi_1$"
status: draft
origin: session
proved_here: false
deps: [rem-covering-spaces-and-universal-cover, rem-semilocal-simple-connectedness]
justified_by: []
forward_refs: [def-countable]
aliases: [rem-hawaiian-earring]
landmark: true
short: "Compact, path connected, locally path connected, but not semi-locally simply connected"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Hawaiian earring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hawaiian_earring"
    - title: "B. de Smit, The fundamental group of the Hawaiian earring is not free, Internat. J. Algebra Comput. 2 (1992) 33-37 (author's copy)"
      url: "https://www.math.leidenuniv.nl/~desmit/papers/hawaiian_earring.pdf"
    - title: "J. W. Cannon and G. R. Conner, The combinatorial structure of the Hawaiian earring group, Topology Appl. 106 (2000) 225-271"
      url: "https://doi.org/10.1016/S0166-8641(99)00103-0"
    - title: "A. Hatcher, Algebraic Topology, Example 1.25 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
pipeline_run: null
---

## Statement

For $n \geq 1$ let $C_n \subset \mathbb{R}^2$ be the circle of radius $1/n$
centred at $(1/n, 0)$, so that every $C_n$ passes through the origin, and let

$$\mathbb{H} = \bigcup_{n \geq 1} C_n$$

carry the subspace topology of $\mathbb{R}^2$. This is the **Hawaiian earring**.

**Deferred facts.** $\mathbb{H}$ is not semi-locally simply connected at the
origin: every neighbourhood of the origin contains $C_n$ entirely for all large
$n$, and such a circle is not null homotopic in $\mathbb{H}$. Consequently
$\mathbb{H}$ has **no universal cover**, and more generally no simply connected
covering space. Its fundamental group $\pi_1(\mathbb{H}, 0)$ is **uncountable**
and is **not a free group**; in particular it is not isomorphic to the
fundamental group of the countable wedge of circles, which is free of countably
infinite rank.

## Remarks

**What is in scope, and must be stated correctly.** All of the point-set
behaviour of $\mathbb{H}$ is elementary and belongs on the library's topology
pages:

* $\mathbb{H}$ is **compact**: it is closed and bounded in $\mathbb{R}^2$, the
  closedness because the circles converge to the origin, which lies on all of
  them.
* $\mathbb{H}$ is **connected** and **path connected**: every point is joined to
  the origin inside its own circle.
* $\mathbb{H}$ is **locally path connected**, at the origin included. A basic
  neighbourhood of the origin consists of all $C_n$ with $n$ large, entire, plus
  two short arcs of each of the finitely many remaining circles, and every one of
  those pieces has the origin as a point or as an endpoint, so the neighbourhood
  is path connected. This is worth insisting on, because the Hawaiian earring is
  routinely and wrongly offered as an example of a path connected space that is
  not locally connected. It is not such an example. Its local pathology is
  homotopical, not connectivity-theoretic: it is locally path connected and fails
  only to be semi-locally simply connected.
* $\mathbb{H}$ is **metrizable**, being a subspace of $\mathbb{R}^2$, hence also
  second countable, separable and normal.
* The natural map $\varphi \colon \bigvee_{n \geq 1} S^1 \to \mathbb{H}$ from the
  countable wedge of circles with the CW (quotient) topology, sending the $n$-th
  circle homeomorphically onto $C_n$, is a **continuous bijection that is not a
  homeomorphism**. It is continuous because its restriction to each summand is,
  and it is bijective by construction; it is not a homeomorphism because
  $\mathbb{H}$ is compact while the wedge is not, the sets consisting of one
  point from each circle being closed and discrete there. This is the standard
  warning that a continuous bijection out of a non-compact space need not be a
  homeomorphism, and it is entirely elementary.

**Not proved in this library.** The failure of semi-local simple connectedness,
the non-existence of a universal cover, and both properties of
$\pi_1(\mathbb{H}, 0)$: that it is uncountable in the sense of
[[def-countable]], and that it is not free.

**What would prove it.** The homotopy track for the first two, via
[[rem-semilocal-simple-connectedness]]. The group theory is harder and genuinely
deep: that $\pi_1(\mathbb{H})$ is not free is due to Higman (1952) and has a short
modern proof by de Smit (1992), which works by mapping $\pi_1(\mathbb{H})$ onto
an inverse limit of free groups and exhibiting infinitely divisible behaviour that
no free group admits; the full combinatorial description is due to Cannon and
Conner (2000). Uncountability comes from the fact that distinct infinite reduced
words in the $C_n$ give distinct classes.

**Why it matters here.** It is the standard counterexample to the temptation to
assume every reasonable space has a universal cover, and it is a compact metric
subspace of the plane, not an exotic construction. It also separates two things
the library does care about: the wedge of circles and the earring have the same
points and the same continuous bijection between them, and differ in topology, in
compactness and in fundamental group.
