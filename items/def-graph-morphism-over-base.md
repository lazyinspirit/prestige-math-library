---
id: "def-graph-morphism-over-base"
kind: "definition"
title: "The graph morphism over a base"
status: "draft"
origin: "pipeline"
deps: ["thm-fibre-products-of-schemes-exist", "def-scheme-over-base"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 11.1.17, p.232"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---

## Definition

For an $S$-morphism $u:X\to Y$ (as in [[def-scheme-over-base]]), the **graph morphism** is $\Gamma_u=(\operatorname{id}_X,u):X\to X\times_S Y$, supplied by [[thm-fibre-products-of-schemes-exist]]. Its first projection is the identity and its second projection is $u$. The definition alone does not assert that its image is closed.
