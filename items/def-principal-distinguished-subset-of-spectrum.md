---
id: def-principal-distinguished-subset-of-spectrum
kind: definition
title: "Principal distinguished subsets of the prime spectrum"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime-spectrum-and-vanishing-sets]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring and let $f\in R$. The **principal distinguished subset** determined by $f$ is
$$
D(f)=\{\mathfrak p\in\operatorname{Spec}(R):f\notin\mathfrak p\}.
$$
It is the complement of $V((f))$ inside the set $\operatorname{Spec}(R)$.
