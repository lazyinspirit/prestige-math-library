---
id: rem-c0-not-a-dual-space
kind: remark
title: "$c_0$ is not a dual space"
status: draft
origin: session
proved_here: false
deps: [rem-radon-nikodym-property]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "c_0 is no Banach space's dual"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "c space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/C_space"
    - title: "Krein-Milman theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Krein%E2%80%93Milman_theorem"
    - title: "Extreme point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_point"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

The space $c_0$ of real sequences tending to $0$, with the supremum norm, is not isometrically
isomorphic to the dual of any Banach space, and more strongly is not isomorphic to the dual of any
Banach space.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The isometric statement is a two line consequence of two facts recorded
above. The closed unit ball of $c_0$ has **no** extreme points: given $\lVert x \rVert \le 1$, some
coordinate $x_n$ is close to $0$ because $x_n \to 0$, and perturbing that coordinate up and down
exhibits $x$ as a midpoint. On the other hand, if $X$ were a dual space, its closed unit ball would
be weak-star compact by [[rem-banach-alaoglu]] and convex, so the Krein-Milman theorem would give it
extreme points, indeed enough of them to recover the ball as their closed convex hull. The
isomorphic statement needs more: a separable dual space has the Radon-Nikodym property, $c_0$ is
separable and fails it ([[rem-radon-nikodym-property]]), and if $c_0$ were isomorphic to $Y^{*}$
then $Y^{*}$ would be separable and hence a separable dual.

**Why it matters here.** "Is a dual space" looks like a property of how a space is presented, and
this result shows it is an intrinsic property that a concrete, elementary, very familiar space
fails. It is also the cleanest illustration that extreme points, which are invisible to the norm and
to sequences, carry real structural information.
