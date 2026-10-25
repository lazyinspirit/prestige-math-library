---
id: rem-separability-is-essential-for-finite-integral-closure
kind: remark
title: "Why the finite-separable hypothesis is retained in the integral-closure theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-finite-integral-closure-in-a-finite-separable-extension]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Remark

The preceding proof is genuinely tied to separability: its key device is the trace-dual basis, and that device collapses once the trace form degenerates. For inseparable extensions the trace can vanish identically, so the argument that traps the integral closure inside one finite trace-dual lattice is no longer available.

This page therefore keeps the exact finite-separable statement. It does not claim any purely inseparable replacement without extra hypotheses on the base domain.
