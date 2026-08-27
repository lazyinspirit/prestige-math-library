---
id: def-height-of-a-prime-ideal
kind: definition
title: "The height of a prime ideal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime-and-maximal-ideals, def-localisation-at-a-prime-ideal, def-krull-dimension-of-a-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 3.14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.60: Dimension of rings"
      url: "https://stacks.math.columbia.edu/tag/00KD"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. The **height** of $\mathfrak p$ is the Krull dimension of the local ring $R_{\mathfrak p}$:
$$
\operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p}).
$$
