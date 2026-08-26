---
id: ex-weak-and-bruhat-orders-in-s-three
kind: example
title: "The weak and Bruhat orders on $S_3$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-weak-order-on-the-symmetric-group, def-bruhat-order-on-the-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On $S_3$, the weak-order cover relations are

$$012 \prec 021,\quad 012 \prec 102,\quad 021 \prec 120,\quad 102 \prec 201,\quad 120 \prec 210,\quad 201 \prec 210,$$

while the Bruhat-order cover relations are

$$012 \prec 021,\quad 012 \prec 102,\quad 021 \prec 120,\quad 021 \prec 201,\quad 102 \prec 120,\quad 102 \prec 201,\quad 120 \prec 210,\quad 201 \prec 210.$$

So the Bruhat order is strictly finer than the weak order already on $S_3$.

## Facts & Assumptions

**Given:** The weak order by inversion inclusion and the Bruhat order by rank inequalities ([[def-weak-order-on-the-symmetric-group]], [[def-bruhat-order-on-the-symmetric-group]]).

## Verification

**Proof technique:** direct.

1.1 Computing inversion sets gives the six weak-order covers displayed above. In particular, $021$ and $201$ are incomparable in weak order because their inversion sets are $\{(1,2)\}$ and $\{(0,1),(0,2)\}$ respectively. [given]

2.1 Computing the rank inequalities shows that $021<201$ and $102<120$ in Bruhat order, producing the two extra cover relations listed above. Thus Bruhat order is strictly finer than weak order on $S_3$. [step 1.1, given] ∎
