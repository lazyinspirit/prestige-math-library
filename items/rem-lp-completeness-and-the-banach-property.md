---
id: rem-lp-completeness-and-the-banach-property
kind: remark
title: "$L^p$ completeness and the Banach-property wording"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-riesz-fischer-completeness-of-l-p]
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 7.10"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Theorem 7.24"
      url: "https://measure.axler.net/MIRA.pdf"
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
---

[[thm-riesz-fischer-completeness-of-l-p]] proves the mathematics this page
needs: with the descended norm, $L^p(\mu)$ is complete for $1\le p\le\infty$.
Later functional-analysis pages supply the vocabulary seam by naming a complete
normed space a Banach space. The terminology is deferred; the completeness proof
is not.
