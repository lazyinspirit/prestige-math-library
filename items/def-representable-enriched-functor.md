---
id: def-representable-enriched-functor
kind: definition
title: "Representable enriched functor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-a-closed-monoidal-category-is-enriched-in-itself, def-enriched-functor]
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.6 and Section 1.10"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Definition

Let $\mathcal A$ be a $\mathcal V$-category and assume $\mathcal V$ is enriched
in itself as in [[thm-a-closed-monoidal-category-is-enriched-in-itself]].
Fix an object $K$ of $\mathcal A$.

The **representable enriched functor**

$$\mathcal A(K,-):\mathcal A\longrightarrow\mathcal V$$

is the $\mathcal V$-functor whose value at $A$ is the hom-object
$\mathcal A(K,A)$ and whose structure morphism on a pair $(A,B)$ is the
transpose, in the self-enrichment of $\mathcal V$, of the enriched composition
morphism

$$\mathcal A(A,B)\otimes\mathcal A(K,A)\longrightarrow\mathcal A(K,B).$$

The contravariant representable $\mathcal A(-,K)$ is defined analogously on
$\mathcal A^{\mathrm{op}}$.
