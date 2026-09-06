---
id: rem-bounded-derivative-design-correction
kind: remark
title: "Bounded-derivative design correction"
status: draft
origin: pipeline
deps: [cor-bounded-derivative-implies-lipschitz, thm-c1-lipschitz-ac-bv-hierarchy]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.3"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

The proposed counterclaim “everywhere differentiable with bounded derivative
need not be absolutely continuous” is false on a compact interval.  Under the
stated continuity and derivative hypotheses,
[[cor-bounded-derivative-implies-lipschitz]] gives Lipschitz continuity, and
[[thm-c1-lipschitz-ac-bv-hierarchy]] then gives absolute continuity.
