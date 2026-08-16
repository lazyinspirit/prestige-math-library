---
id: def-jordan-canonical-form
kind: definition
title: "Jordan bases and Jordan canonical forms over the base field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-jordan-block-and-jordan-string]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 8C"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4-5"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Definition

A **Jordan basis over $F$** for an endomorphism $T:V\to V$ is an ordered basis obtained by concatenating Jordan strings for $T$, all with eigenvalues in $F$ ([[def-jordan-block-and-jordan-string]]). The matrix of $T$ in such a basis is block diagonal with blocks $J_m(\lambda)$ and is called a **Jordan canonical form of $T$ over $F$**.

The adjective “canonical” records the block multiset, not a prescribed order of blocks: permuting the strings usually changes the literal block diagonal matrix. On the zero space the empty basis and empty block matrix form the Jordan basis and Jordan form.
