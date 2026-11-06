---
id: rem-freed-witten-type-i-scope-boundary
kind: remark
title: "Freed–Witten and Type I Scope Boundary"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
category: string-theory
physical_scope: "Source-backed boundary between the oriented Type II D-brane anomaly setup and the separate Type I orientation-reversal projection. It makes no Type I anomaly-cancellation claim."
deps: []
dependency_roles: {}
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel S. Freed and Edward Witten, Anomalies in String Theory with D-Branes, hep-th/9907189v2"
      url: "https://arxiv.org/pdf/hep-th/9907189v2"
      locator: "Introduction, PDF p. 1, explicitly limiting the paper to oriented Type II worldsheets and excluding orientifolds and Type I."
    - title: "K. S. Gimon and J. Polchinski, Consistency Conditions for Orientifolds, hep-th/9601038v3"
      url: "https://arxiv.org/pdf/hep-th/9601038v3"
      locator: "§§1–3, PDF pp. 1–10, for the distinct Type I/orientifold projection and consistency analysis."
    - title: "Joseph Polchinski, Shyamoli Chaudhuri, and Clifford V. Johnson, Notes on D-Branes, hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.6 and Lecture III, full 47-page lecture notes, for unoriented strings, orientifolds, and Type I."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Remark

Freed and Witten formulate their D-brane anomaly analysis for oriented Type II worldsheets and explicitly exclude orientifolds and Type I strings. Their condition therefore supplies no Type I $\Omega$-projection rule or Type I tadpole calculation. Gimon and Polchinski analyze the latter projection and its consistency conditions as a separate unoriented-string problem. The two source scopes must remain distinct: the oriented Type II anomaly result cannot be extended to Type I by analogy, and the Type I O9/D9 tadpole result does not prove the Type II Freed–Witten condition. This remark makes no claim that Type I has no additional anomaly conditions.

## Remark references

[Freed and Witten, Introduction and §6](https://arxiv.org/pdf/hep-th/9907189v2)

[Gimon and Polchinski, §§1–3](https://arxiv.org/pdf/hep-th/9601038v3)

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.6 and Lecture III](https://arxiv.org/pdf/hep-th/9602052v2)
