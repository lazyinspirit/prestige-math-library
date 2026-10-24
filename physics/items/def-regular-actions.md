---
id: def-regular-actions
kind: definition
title: "Regular actions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-free-group-action, def-group-action]
justified_by: []
aliases: []
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Definition

Let $G$ act on a set $\Omega$.

The action is **regular** if it is both transitive ([[def-group-action]]) and
free ([[def-free-group-action]]).

Equivalently, the action is transitive and each point stabilizer is trivial:
for every $\alpha \in \Omega$, the condition $g \cdot \alpha = \alpha$ forces
$g = e$.
