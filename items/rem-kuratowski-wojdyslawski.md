---
id: rem-kuratowski-wojdyslawski
kind: remark
title: "Kuratowski-Wojdyslawski embedding theorem"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "bounded metric spaces sit in convex sets"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Kuratowski embedding (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kuratowski_embedding"
    - title: "M. Wojdyslawski, Retractes absolus et hyperespaces des continus, Fund. Math. 32 (1939) 184-192"
      url: "https://www.impan.pl/pl/wydawnictwa/czasopisma-i-serie-wydawnicze/fundamenta-mathematicae/all/32/0/93458/retractes-absolus-et-hyperespaces-des-continus"
    - title: "Absolute neighborhood retract (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_neighborhood_retract"
pipeline_run: null
---

## Statement

Every bounded metric space is isometric to a closed subset of a convex subset of a Banach space.

Concretely, for a bounded metric space $(X, d)$ the Kuratowski map
$$\iota \colon X \to C_b(X), \qquad \iota(x) = d(x, \cdot),$$
into the Banach space of bounded continuous real functions on $X$ with the supremum norm is an
isometry, and $\iota(X)$ is closed in the closed convex hull of $\iota(X)$.

## Remarks

**Not proved in this library.** The Kuratowski map itself is elementary, but the statement is about
a Banach space and a convex subset of it, so it is recorded here with a citation.

**What would prove it.** That $\iota$ is an isometry is the triangle inequality in both directions.
The substantive half is that the image is closed in the convex hull, which is Wojdyslawski's
contribution (1939).

**Why it matters here.** It says that no generality is lost by studying subsets of convex sets in
Banach spaces rather than abstract metric spaces, which is the hypothesis under which retract theory
is developed: a metric space is an absolute retract exactly when it is a retract of every convex set
containing it as a closed subspace. It is also the standard route into the theory of hyperspaces of
continua, which is where Wojdyslawski used it.
