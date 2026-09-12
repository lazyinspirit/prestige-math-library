---
id: def-differential-associated-to-an-exact-couple
kind: definition
title: Differential associated to an exact couple
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-exact-couple]
justified_by: [lem-the-exact-couple-differential-squares-to-zero]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Lemma 12.21.2 and Remark 12.21.5"
      url: https://stacks.math.columbia.edu/tag/011P
---

## Definition

For a page-$r$ [[def-exact-couple|exact couple]], define its associated
**differential** by
$$d_{p,q}=j_{p-1,q}k_{p,q}:E_{p,q}\longrightarrow E_{p-r,q+r-1}.$$
The bidegrees of $k$ and $j$ add to $(-1,0)+(1-r,r-1)=(-r,r-1)$,
so total degree decreases by one. The square-zero identity is proved in
[[lem-the-exact-couple-differential-squares-to-zero]] before homology is formed.
For an initial couple $r=1$ this map has bidegree $(-1,0)$.
The zero couple has zero differential. The composite is specified uniquely;
neither a section of $i$ nor a preimage selection is part of this definition.
