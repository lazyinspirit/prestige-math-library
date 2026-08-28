---
id: def-center-of-the-group-algebra
kind: definition
title: "The center $Z(k[G])$ of the group algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3 Section 3.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Definition

Let $k$ be a field and let $G$ be a group. The **center of the group algebra**
is

$$
Z(k[G]):=\{x \in k[G]:xy=yx \text{ for every } y \in k[G]\}.
$$

It is the central $k$-subalgebra of $k[G]$ that will later be computed both
from conjugacy classes and from the Wedderburn decomposition.
