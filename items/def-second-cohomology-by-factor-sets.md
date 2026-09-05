---
id: def-second-cohomology-by-factor-sets
kind: definition
title: "Second cohomology by factor sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-normalized-two-cocycles-and-coboundaries-form-groups]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Definition

Since $B^2(G,M)\le Z^2(G,M)$, the **second cohomology group** in the
factor-set model is the quotient

$$H^2(G,M):=Z^2(G,M)/B^2(G,M).$$

Its elements are written $[f]$, where $f$ is a normalized two-cocycle.
Replacing $f$ by $f+\delta u$ does not change its class.
