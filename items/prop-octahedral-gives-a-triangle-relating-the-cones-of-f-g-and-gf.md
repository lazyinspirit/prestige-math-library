---
id: prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf
kind: proposition
title: "The octahedral axiom gives a triangle relating the cones of f, g, and gf"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, def-triangulated-category-axiom-tr-four-octahedral, prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.2"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Statement

For composable $X\xrightarrow fY\xrightarrow gZ$, choices of cone objects
$Q_f,Q_{gf},Q_g$ fit into a distinguished triangle
$$Q_f\longrightarrow Q_{gf}\longrightarrow Q_g\longrightarrow Q_f[1].$$

## Facts & Assumptions

**Given:** Composable maps and distinguished completions for $f$, $g$, and $gf$.

## Proof

1.1 Apply TR4 to precisely these three completions. [given]

2.1 Its fourth face is the displayed distinguished triangle; changing a chosen completion only replaces its cone object by a noncanonical isomorphic one. [step 1.1, given] ∎
