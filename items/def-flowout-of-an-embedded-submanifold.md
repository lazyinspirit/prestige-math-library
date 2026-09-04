---
id: def-flowout-of-an-embedded-submanifold
kind: definition
title: "The flowout of an embedded submanifold by a vector field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-and-global-flow, def-embedded-submanifold-and-slice-chart]
justified_by: []
aliases: []
landmark: false
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Let $X$ be a smooth vector field on $M$ with local flow $\Phi:\mathcal D\to M$,
and let $S\hookrightarrow M$ be an embedded submanifold. If
$\mathcal O\subseteq \mathcal D\cap(\mathbb R\times S)$ is an open set, the
image

$$ \Phi(\mathcal O) $$

is called the **flowout of $S$ along $X$ determined by $\mathcal O$**.

When $\mathcal O$ is a neighbourhood of $\{0\}\times S$, this is the part of
$M$ reached by flowing points of $S$ for small times.
