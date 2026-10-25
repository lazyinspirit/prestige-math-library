---
id: def-nilpotent-endomorphism
kind: definition
title: "Nilpotent endomorphisms and their nilpotency index"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-map, thm-well-ordering-principle]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 8B"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

An endomorphism $N:V\to V$ is **nilpotent** if $N^k=0$ for some positive integer $k$. Its **nilpotency index** is the least positive integer $r$ such that $N^r=0$; this least exponent exists by the well-ordering principle ([[thm-well-ordering-principle]]).

The unique endomorphism of the zero space is nilpotent. With the same least-positive-exponent convention, its nilpotency index is $1$ because its identity and zero endomorphisms coincide.
