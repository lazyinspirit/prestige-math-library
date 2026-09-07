---
id: "def-common-refinement-equivalence-of-roofs"
kind: "definition"
title: "Common refinement equivalence of roofs"
deps: ["def-left-roof-representing-a-localized-morphism"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.1–10.3.14, pp. 379–384"
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
justified_by: ["lem-roof-equivalence-is-an-equivalence-relation"]
---

## Definition

Two left roofs $(s:U\to X,f:U\to Y)$ and $(t:U'\to X,g:U'\to Y)$ are **common-refinement equivalent** if there are $a:V\to U$ and $b:V\to U'$ such that $sa=tb\in S$ and $fa=gb$. Only the composite $sa=tb$ is required to belong to $S$; neither refinement leg is separately required to do so. Left roofs have the orientation fixed in [[def-left-roof-representing-a-localized-morphism]].
