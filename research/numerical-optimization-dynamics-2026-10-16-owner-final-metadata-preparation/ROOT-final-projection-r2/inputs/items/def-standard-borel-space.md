---
id: def-standard-borel-space
kind: definition
title: "Standard Borel spaces"
status: published
origin: pipeline
deps: [def-measurable-space, def-polish-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Definition 2.3"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Definition

A measurable space $(E,\mathcal E)$ is **standard Borel** if there are a Polish space $P$ and a bijection $h:E\to P$ such that $A\in\mathcal E$ exactly when $h[A]$ is Borel in $P$. Thus the measurable structure is part of the datum; no particular compatible Polish topology on $E$ is selected.
