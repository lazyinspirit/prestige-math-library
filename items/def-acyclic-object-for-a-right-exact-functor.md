---
id: def-acyclic-object-for-a-right-exact-functor
kind: definition
title: "An acyclic object for a right exact functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-derived-object-relative-to-projective-resolution-data, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, def-left-exact-and-right-exact-functor]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Definition

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$, and
let $F:\mathcal A\to\mathcal B$ be an additive right exact functor between
abelian categories.

An object $A\in\mathcal D$ is **$F$-acyclic** if
$$L_n^PF(A)=0\qquad\text{for every }n>0.$$

If $Q$ is another supplied projective resolution datum on the same domain and
one assumes the Axiom of Dependent Choice, then
[[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]]
gives natural isomorphisms $L_n^PF(A)\cong L_n^QF(A)$ for every $n$. Under
that additional hypothesis, this vanishing condition is independent of the
chosen supplied projective datum.
