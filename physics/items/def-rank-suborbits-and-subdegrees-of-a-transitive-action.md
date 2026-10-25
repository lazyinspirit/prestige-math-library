---
id: def-rank-suborbits-and-subdegrees-of-a-transitive-action
kind: definition
title: "Rank, suborbits, and subdegrees of a transitive action"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-orbit-and-stabilizer]
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

Let $G$ act transitively on a set $\Omega$, and fix a point $\alpha \in \Omega$.
Its stabilizer is
$$G_\alpha := \{\, g \in G : g \cdot \alpha = \alpha \,\}$$
([[def-orbit-and-stabilizer]]).

The orbits of $G_\alpha$ on $\Omega$ are the **suborbits** of the action at
$\alpha$.

Their cardinalities are the **subdegrees**.

The **rank** of the transitive action is the number of its suborbits at the
chosen basepoint $\alpha$.
