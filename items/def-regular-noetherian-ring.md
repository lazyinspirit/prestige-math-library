---
id: "def-regular-noetherian-ring"
kind: "definition"
title: "regular noetherian ring"
deps: ["def-embedding-dimension-and-regular-local-ring"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Definition 12.14 and Corollary 12.34"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

A commutative Noetherian ring $R$ is **regular** if for every prime ideal $\mathfrak p$, the local ring $R_{\mathfrak p}$ is regular local. This includes the zero ring vacuously. The maximal-localization test is proved in the localization and polynomial-extension theorem.
