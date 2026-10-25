---
id: def-incidence-correspondence-varieties
kind: definition
title: Incidence correspondence loci
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-varieties-universal-property, def-grassmannian-subspaces, cor-projective-variety-product-exists, cor-grassmannian-smooth-irreducible-dimension]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §§5g and 6m
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
---

## Definition

Let $V$ be an $n$-dimensional vector space over the page's algebraically closed field $k$, with $n\ge1$. For $0\le r\le n$, the **point--plane incidence correspondence
locus** is the subset of the now-constructed projective product
$$\mathcal I_{1,r}(V)=\{([v],S)\in\mathbf P(V)\times\operatorname{Gr}(r,V):v\in S\},$$
with its two projections. More generally, for $0\le a\le b\le n$, the containment correspondence is
$$\mathcal I_{a,b}(V)=\{(A,B)\in\operatorname{Gr}(a,V)\times\operatorname{Gr}(b,V):A\subseteq B\}.$$
The following lemma proves that these subsets are closed; the word
"variety" is reserved until irreducibility has also been established.
