---
id: def-incidence-matrix-of-a-two-design
kind: definition
title: "The point-block incidence matrix of a $2$-design"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-two-design]
verification:
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

Let $(P,\mathcal B)$ be a $2$-$(v,k,\lambda)$ design. After choosing an order of
the points and an order of the blocks, its **point-block incidence matrix** is
the $v\times|\mathcal B|$ matrix $N=(n_{pB})$ with entries
$$n_{pB}:=\begin{cases}1,&p\in B,\\0,&p\notin B.\end{cases}$$

Changing the chosen orders only permutes rows and columns, so the incidence
information itself does not depend on the orders.
