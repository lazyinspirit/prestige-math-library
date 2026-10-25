---
id: ex-a-metric-space-as-an-enriched-category
kind: example
title: "A Lawvere metric space as an enriched category"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-enriched-category, def-metric-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.2"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Example

Let $(X,d)$ be a metric space. Regard $[0,\infty]$ as a preorder with the
reverse order $\ge$, tensor product $+$, and unit $0$. Defining the
hom-object from $x$ to $y$ to be the number $d(x,y)$ makes $X$ into an
$[0,\infty]$-enriched category.

## Facts & Assumptions

**Given:** A metric space $(X,d)$.

[L1] A metric satisfies $d(x,x)=0$ and the triangle inequality ([[def-metric-space]]).

[L2] A $\mathcal V$-category is encoded by identities and composition in the base preorder ([[def-enriched-category]]).

## Verification

**Proof technique:** direct.

1.1 Because the unit of the base is $0$, the identity axiom for [L2] is exactly the statement $0\ge d(x,x)$, which holds by [L1]. [L1, L2, given]

1.2 The composition axiom in the reversed-order preorder is $d(y,z)+d(x,y)\ge d(x,z)$, which is exactly the triangle inequality from [L1]. [L1, L2]

2.1 Therefore every metric space is a Lawvere-style enriched category over the base $([0,\infty],\ge,+,0)$. [step 1.1, step 1.2] ∎
