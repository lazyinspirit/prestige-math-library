---
id: def-baer-sum-of-extension-classes
kind: definition
title: "The Baer sum of extension classes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pullback-and-pushout-of-an-extension, def-biproduct]
justified_by: [lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Definition

Let $\xi$ and $\eta$ be extensions of $M$ by $N$. Form their direct sum, pull it back along the diagonal $\Delta:M\to M\oplus M$, and then push that extension out along the codiagonal $\nabla:N\oplus N\to N$. The resulting extension of $M$ by $N$ is the **Baer sum** $[\xi]+[\eta]$. The direct sum alone has endpoints $N\oplus N$ and $M\oplus M$, so it is only an intermediate construction.
