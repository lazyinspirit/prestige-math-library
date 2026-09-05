---
id: rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims
kind: remark
title: "The particular Yoneda end and the enriched functor category have different size requirements"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-strong-enriched-yoneda-lemma-as-a-particular-end, def-functor-category]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Sections 2.2 and 2.4"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Sections 3.4 and 7.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Remark

The enriched end in
[[thm-strong-enriched-yoneda-lemma-as-a-particular-end]] is a single object
with a universal enriched wedge. By contrast,
[[def-functor-category]] forms an ordinary category of set-coded functors and
ordinary natural transformations when its source is small; it neither defines
enriched hom-objects nor imposes completeness hypotheses on the base.

When the enriched functor category $[\mathcal A,\mathcal V]$ is formed, its
hom-object between two enriched functors $F$ and $G$ is an enriched end of the
objects $[FA,GA]$. Forming the whole enriched functor category therefore asks
for such an end for every pair $(F,G)$, whereas the strong Yoneda theorem
directly exhibits one particular end whether or not all of those other ends
exist.

So two claims must be kept separate:

- the weak and strong enriched Yoneda lemmas identify a specific object or set
  attached to a single representable functor;
- the existence of the entire enriched functor category requires all of its
  enriched hom-objects to exist, commonly under additional smallness and
  completeness hypotheses.

This page proves only the former. Even for the set-object sources used here,
one particular Yoneda end does not by itself construct every hom-object of a
full enriched functor category.
