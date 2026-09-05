---
id: def-conical-limit-in-an-enriched-category
kind: definition
title: "Conical enriched limit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-enriched-weighted-limit, thm-the-free-enriched-category-two-adjunction]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 3.8"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 7.5"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Definition

Assume $\mathcal V$ is symmetric monoidal right closed, locally small,
complete, and cocomplete.

Let $\mathcal K$ be a small ordinary category and let $D:\mathcal K\to\mathcal B_0$
be an ordinary diagram in the underlying category of a $\mathcal V$-category
$\mathcal B$.

Using [[thm-the-free-enriched-category-two-adjunction]], regard $D$ as the same
data as a $\mathcal V$-functor $\widetilde D:\mathcal K_{\mathcal V}\to\mathcal B$.
A **conical enriched limit** of $D$ is the enriched weighted limit of
$\widetilde D$ by the constant weight at the tensor unit $\mathbf 1$.

So conical enriched limits are the enriched limits whose weight carries no
extra indexing data beyond the ordinary shape $\mathcal K$.
