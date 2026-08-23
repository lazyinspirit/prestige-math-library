---
id: def-real-beta-integral
kind: definition
title: 'Euler''s real Beta integral'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-improper-integral-at-a-finite-endpoint, def-real-power]
justified_by: [thm-real-beta-integral-convergence]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Definition

For $p,q>0$, define $B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}\,dt$.

The integral is improper at both endpoints. The exact convergence theorem [[thm-real-beta-integral-convergence]] proves that it exists precisely for the displayed positive parameters and therefore discharges the definition's existence obligation.
