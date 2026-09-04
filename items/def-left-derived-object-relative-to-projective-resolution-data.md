---
id: def-left-derived-object-relative-to-projective-resolution-data
kind: definition
title: "Left derived objects relative to supplied projective resolution data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-supplied-projective-resolution-datum, def-additive-functor, def-deleted-resolution, def-homology-object-of-a-chain-complex, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]
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

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$ of
objects in an abelian category $\mathcal A$, and let
$F:\mathcal A\to\mathcal B$ be an additive functor to an abelian category
$\mathcal B$.

For $A\in\mathcal D$ and $n\in\mathbb Z$, the **$n$th left derived object of
$F$ relative to $P$ at $A$** is
$$L_n^PF(A):=H_n\!\bigl(F(P(A)_{\mathrm{del}})\bigr),$$
where $P(A)_{\mathrm{del}}$ is the deleted resolution from
[[def-deleted-resolution]].

No exactness hypothesis on $F$ is needed for this definition. The datum $P$
supplies the chosen resolution whose image under $F$ is being measured by
homology.
