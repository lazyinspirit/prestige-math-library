---
id: cex-nonuniqueness-of-a-tr-three-completion
kind: counterexample
title: "Nonuniqueness of a TR3 completion"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [fs-the-third-map-in-a-morphism-of-triangles-is-unique, def-triangulated-category-axiom-tr-three]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Remark 13.9.11"
      url: "https://stacks.math.columbia.edu/tag/014D"
---

## Statement refuted

TR3 completions need not be unique. In $K(\mathbb Z\text{-Mod})$, take the
standard cone triangle of the zero map $S^0\mathbb Z\to S^0\mathbb Z[1]$.
The zero square on its first two terms has two distinct completions.

## Counterexample

**Given:** The displayed data.

1.1 The cone is $S^0\mathbb Z[1]\oplus S^0\mathbb Z[1]$. Besides the zero third component, take the chain map whose matrix has the identity from the second summand to the first and zero in all other entries. [given]

2.1 Both third components kill the cone inclusion and are killed by the cone projection, so each completes the same zero square; they differ on the second summand and hence are distinct in $K(\mathbb Z\text{-Mod})$. [step 1.1, given] ∎
