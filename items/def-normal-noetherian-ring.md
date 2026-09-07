---
id: "def-normal-noetherian-ring"
kind: "definition"
title: "normal noetherian ring"
deps: ["def-integral-closure-and-integrally-closed-domain"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Definition 8.34 and Remarks 8.35–8.36, p.56"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

A commutative Noetherian ring $R$ is **normal** if every prime localization $R_{\mathfrak p}$ is an integrally closed domain. This is a local condition and does not require $R$ itself to be a domain. The zero ring satisfies it vacuously. For a domain, integrally closed means that every element of its fraction field integral over it belongs to it.
