---
id: def-left-derived-map-relative-to-resolution-data
kind: definition
title: "The left derived map relative to supplied resolution data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-derived-object-relative-to-projective-resolution-data, lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions, lem-the-induced-homology-map-is-independent-of-the-comparison-lift]
verification:
  audited: 2026-09-04
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

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$ in
an abelian category $\mathcal A$, let $F:\mathcal A\to\mathcal B$ be an
additive functor to an abelian category $\mathcal B$, let $A,B\in\mathcal D$,
and let $n\in\mathbb Z$. For a morphism $u:A\to B$, choose any comparison lift
$$\widetilde u_\bullet:P_\bullet(A)\to P_\bullet(B).$$

The **left derived map of $u$ in degree $n$ relative to $P$** is the induced
map on homology
$$L_n^PF(u):=H_n\!\bigl(F(\widetilde u_\bullet)\bigr):L_n^PF(A)\to L_n^PF(B).$$

By [[lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions]]
such a lift exists, and by
[[lem-the-induced-homology-map-is-independent-of-the-comparison-lift]] the
result does not depend on which lift was chosen.
