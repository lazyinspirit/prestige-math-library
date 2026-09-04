---
id: def-equicharacteristic-local-ring-and-coefficient-field
kind: definition
title: "Equicharacteristic local rings and coefficient fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-ring, def-field]
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
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $(A,\mathfrak m)$ be a local ring with residue field $k=A/\mathfrak m$.

The local ring $A$ is **equicharacteristic** when $\operatorname{char}(A)$ and
$\operatorname{char}(k)$ are equal.

A **coefficient field** of $A$ is a subfield $K \subseteq A$ such that the
residue map $A \to k$ restricts to an isomorphism
$$K \xrightarrow{\sim} k.$$

Thus a coefficient field is not merely an embedded field: it is an embedded
copy of the residue field itself.
