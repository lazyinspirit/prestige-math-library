---
id: "prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms"
kind: "proposition"
title: "The localization functor sends quasi isomorphisms to isomorphisms"
deps: ["def-derived-category-of-an-abelian-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For every quasi-isomorphism $s:X\to Y$, $Q(s)$ is invertible in the derived category, with inverse represented by the roof $Y\xleftarrow sX\xrightarrow {1_X}X$.

## Facts & Assumptions

**Given:** For every quasi-isomorphism $s:X\to Y$, $Q(s)$ is invertible in the derived category, with inverse represented by the roof $Y\xleftarrow sX\xrightarrow {1_X}X$.

[F1] The derived category is the roof localization of the homotopy category at quasi-isomorphisms ([[def-derived-category-of-an-abelian-category]]).

## Proof

1.1 The derived category is the localization at quasi-isomorphisms, so the proposed inverse is the allowed roof $(s,1_X)$. This includes $s=1_0$ at the zero complex. [F1]

2.1 Composing the roof with $Q(s)$ gives the identity roof of $X$ in one order and $(s,s)$ in the other. The latter refines $(1_Y,1_Y)$ via $s$ and $1_X$, so both products are identities. [F1, algebra] ∎
