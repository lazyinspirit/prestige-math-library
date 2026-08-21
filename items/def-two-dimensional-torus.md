---
id: def-two-dimensional-torus
kind: definition
title: 'The two-dimensional torus $T^2=(\mathbb R/\mathbb Z)^2$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-circle-as-real-line-mod-integers, def-product-topology]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Definition

Let $Q=\mathbb R/\mathbb Z$ be the quotient circle of [[def-circle-as-real-line-mod-integers]]. The **two-dimensional torus** is the product space

$$T^2:=Q\times Q$$

with the product topology ([[def-product-topology]]), pointed at $([0],[0])$. This definition uses the quotient-circle model in both coordinates.
