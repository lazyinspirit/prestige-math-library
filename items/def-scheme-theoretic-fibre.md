---
id: "def-scheme-theoretic-fibre"
kind: "definition"
title: "Scheme-theoretic fibre"
status: "draft"
origin: "pipeline"
deps: ["def-base-change-morphism-schemes", "lem-field-valued-points-of-schemes"]
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
    - title: "Stacks 26.18.4; Vakil 10.3.2"
      url: "https://stacks.math.columbia.edu/tag/01JW"
---

## Definition

For a morphism $f:X\to S$ and any point $s\in S$, its **scheme-theoretic fibre** is
$$X_s=X\times_S\operatorname{Spec}\kappa(s),$$
viewed as a $\kappa(s)$-scheme. The map $\operatorname{Spec}\kappa(s)\to S$ is the canonical residue-field point from [[lem-field-valued-points-of-schemes]], and the product is base change as in [[def-base-change-morphism-schemes]]. The point $s$ need not be closed. A fibre over a generic point is called a generic fibre. Empty fibres are allowed.
