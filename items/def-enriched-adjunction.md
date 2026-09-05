---
id: def-enriched-adjunction
kind: definition
title: "Enriched adjunction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-functor, thm-a-closed-monoidal-category-is-enriched-in-itself, rem-the-underlying-category-can-lose-information]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.11"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Marzieh Bayeh et al., Left-Induced Model Structures and Diagram Categories, Definition A.3"
      url: "https://arxiv.org/pdf/1401.3651"
---

## Definition

Let $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal A$ be
$\mathcal V$-functors, where $\mathcal V$ is enriched in itself
([[thm-a-closed-monoidal-category-is-enriched-in-itself]]).

An **enriched adjunction** $F\dashv_{\mathcal V}G$ is a family of isomorphisms
in $\mathcal V$

$$\mathcal B(FA,B)\cong\mathcal A(A,GB)$$

natural in $A$ and $B$.

Applying global elements to these hom-objects gives ordinary bijections of
hom-sets, but [[rem-the-underlying-category-can-lose-information]] warns that
the enriched isomorphism is stronger than merely having an adjunction in the
underlying categories.
