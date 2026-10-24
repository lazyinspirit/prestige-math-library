---
id: def-complete-group
kind: definition
title: "Complete group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-center-of-a-group, def-outer-automorphism-group]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Definition

A group $N$ is **complete** when both of the following hold:

1. its center is trivial, $Z(N)=1$ ([[def-center-of-a-group]]);
2. its outer automorphism group is trivial, $\operatorname{Out}(N)=1$
   ([[def-outer-automorphism-group]]).

Equivalently, every automorphism of $N$ is inner and no nontrivial element of
$N$ commutes with all of $N$.
