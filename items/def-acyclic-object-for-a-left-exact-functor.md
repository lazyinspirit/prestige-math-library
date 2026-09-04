---
id: def-acyclic-object-for-a-left-exact-functor
kind: definition
title: "An acyclic object for a left exact functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-right-derived-object-relative-to-injective-resolution-data, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, def-left-exact-and-right-exact-functor]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Definition

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$, and
let $F:\mathcal A\to\mathcal B$ be an additive left exact functor between
abelian categories.

An object $A\in\mathcal D$ is **$F$-acyclic** if
$$R_I^nF(A)=0\qquad\text{for every }n>0.$$

If $J$ is another supplied injective resolution datum on the same domain and
one assumes the Axiom of Dependent Choice, then
[[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]
gives natural isomorphisms $R_I^nF(A)\cong R_J^nF(A)$ for every $n$. Under
that additional hypothesis, this vanishing condition is independent of the
chosen supplied injective datum.
