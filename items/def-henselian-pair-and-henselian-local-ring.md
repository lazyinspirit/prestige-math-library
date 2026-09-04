---
id: def-henselian-pair-and-henselian-local-ring
kind: definition
title: "Henselian pairs and Henselian local rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-ring]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Definition

Let $A$ be a commutative ring and let $I \subseteq A$ be an ideal.

The pair $(A,I)$ is a **Henselian pair** when:

1. $I \subseteq J(A)$, and
2. for every monic polynomial $f \in A[T]$ and every factorization
   $$\overline f=g_0h_0$$
   in $(A/I)[T]$ with $g_0,h_0$ monic and $(g_0,h_0)=(1)$, there is a unique
   factorization
   $$f=gh$$
   in $A[T]$ with $g,h$ monic and $\overline g=g_0$, $\overline h=h_0$.

If $(A,\mathfrak m)$ is a local ring, then $A$ is a **Henselian local ring**
when the pair $(A,\mathfrak m)$ is Henselian.

This page uses the Jacobson-radical condition as part of the definition rather
than as a theorem proved later; that is the convention in the cited sources and
is the hypothesis spent by the uniqueness and unit arguments below.
