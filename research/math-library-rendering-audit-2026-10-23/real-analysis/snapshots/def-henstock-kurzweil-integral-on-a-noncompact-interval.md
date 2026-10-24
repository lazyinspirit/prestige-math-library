---
id: def-henstock-kurzweil-integral-on-a-noncompact-interval
kind: definition
title: "Henstock–Kurzweil integrals on half-open and unbounded intervals by compact truncation limits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-henstock-kurzweil-integral-on-a-compact-interval, def-one-sided-limits, def-limits-at-infinity]
justified_by: []
forward_refs: []
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
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Definition

Suppose $f$ is HK integrable on every compact subinterval of an interval with a missing endpoint.

- On $[a,b)$ with finite $b$, define $\int_a^b f:=\lim_{c\uparrow b}\int_a^c f$ when this finite limit exists.
- On $[a,\infty)$, define $\int_a^\infty f:=\lim_{c\to\infty}\int_a^c f$ when this finite limit exists.
- Missing left endpoints are defined by the analogous right limits. For compact Henstock–Kurzweil integrals the orientation convention used here is $\int_v^u f:=-\int_u^v f$ when $u<v$, with $\int_u^u f:=0$; it is a convention for the compact HK values of [[def-henstock-kurzweil-integral-on-a-compact-interval]], not an invocation of the Darboux-only orientation definition.

These are **noncompact Henstock–Kurzweil integrals**. Existence always means existence as a finite real number. A compact interval with both endpoints included uses the compact definition, not a truncation limit.
