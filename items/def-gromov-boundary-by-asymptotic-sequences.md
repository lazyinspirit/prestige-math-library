---
id: def-gromov-boundary-by-asymptotic-sequences
kind: definition
title: "The Gromov boundary via asymptotic sequences"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space, def-gromov-product]
justified_by: [lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Definition

Let $(X,d)$ be a proper geodesic hyperbolic space and fix a basepoint $o \in X$.

A sequence $(x_n)$ in $X$ is a **Gromov sequence** if

$$
(x_m,x_n)_o \to \infty \quad \text{as } m,n \to \infty.
$$

Two Gromov sequences $(x_n)$ and $(y_n)$ are **asymptotic** if

$$
(x_m,y_n)_o \to \infty \quad \text{as } m,n \to \infty.
$$

After [[lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences]]
shows that this is an equivalence relation, the **Gromov boundary**
$\partial X$ is defined to be the set of asymptoticity classes of Gromov
sequences.
