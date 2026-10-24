---
id: def-two-design
kind: definition
title: "A $2$-$(v,k,\\lambda)$ design"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Jan. 29"
      url: "https://people.math.harvard.edu/~elkies/M155.09/jan29"
---

## Definition

Let $v,k,\lambda$ be natural numbers with $2\le k<v$ and $\lambda\ge1$. A
**$2$-$(v,k,\lambda)$ design** is a pair $(P,\mathcal B)$ such that:

- $P$ is a finite set with $|P|=v$;
- $\mathcal B$ is a finite collection of distinct $k$-element subsets of $P$,
  called the **blocks**;
- every subset of $P$ with cardinality $2$ lies in exactly $\lambda$ blocks.

## Remarks

The number of blocks and the number of blocks through a point are not part of
the definition. They are derived immediately below.
