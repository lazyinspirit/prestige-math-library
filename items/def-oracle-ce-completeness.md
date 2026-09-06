---
id: def-oracle-ce-completeness
kind: definition
title: "Oracle-c.e. completeness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relative-computability-and-enumerability, def-computable-many-one-reduction]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

An $A$-c.e. set $K$ is **$A$-c.e.-complete** when for every $A$-c.e. set
$W$ there is a total $A$-computable function $f$ such that
$$n\in W\iff f(n)\in K.$$
We write this $W\le_m^A K$.
