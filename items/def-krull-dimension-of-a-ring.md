---
id: def-krull-dimension-of-a-ring
kind: definition
title: "Krull dimension of a nonzero ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-27
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

Let $R$ be a nonzero commutative ring. A **strict chain of prime ideals of length $n$** is a sequence
$$
\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_n
$$
of prime ideals of $R$.

The **Krull dimension** of $R$ is the supremum of all integers $n\ge 0$ for which such a chain exists. This supremum is allowed to be infinite.

On this page the zero ring is left outside the definition so that later chain statements do not hide that degenerate boundary.
