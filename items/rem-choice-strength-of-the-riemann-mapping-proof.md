---
id: rem-choice-strength-of-the-riemann-mapping-proof
kind: remark
title: "Choice strength used in the extremal proof of the Riemann mapping theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-riemann-map-extremal-derivative-is-attained, thm-montel-theorem-for-holomorphic-functions]
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

The displayed extremal proof assumes the Axiom of Choice. Its nonconstructive step is concentrated in the choice of
a maximizing sequence and the successive subsequence extraction used in Montel's
theorem. That is exactly the step isolated in
[[lem-riemann-map-extremal-derivative-is-attained]] and in the proof of
[[thm-montel-theorem-for-holomorphic-functions]]; once the limiting extremizer
exists, the remaining univalence and surjectivity arguments are explicit.
