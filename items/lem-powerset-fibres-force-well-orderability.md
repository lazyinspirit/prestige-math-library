---
id: lem-powerset-fibres-force-well-orderability
kind: lemma
title: "Power-set fibres force well-orderability"
status: draft
origin: pipeline
deps: ["thm-cantor-powerset", "def-well-order"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Caicedo, Some choiceless results (4), §9 fibre lemma and proof (ordinal version)"
      url: https://caicedoteaching.wordpress.com/2009/01/29/580-some-choiceless-results-4/
---

## Statement

In ZF, if $X\times\mathcal P(X)\preceq X\sqcup\alpha$ for an ordinal $\alpha$, then $X$ is well-orderable.

## Facts & Assumptions

[F1] [[thm-cantor-powerset]]: There is no surjection from a set onto its power set.

[F2] [[def-well-order]]: A well-order is a total order in which every nonempty subset has a least element.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Fix the injection $j$. For each $x\in X$, the image of $\{x\}\times\mathcal P(X)$ cannot lie wholly in the $X$-summand. Otherwise it gives an injection $\mathcal P(X)\to X$; its inverse, extended by $\varnothing$ off the range, would surject $X$ onto its power set. [F1]

2.1 The ordinal part of that fibre is therefore nonempty. Let $b(x)$ be its least ordinal. Different fibres have disjoint images by injectivity of $j$, so $b:X\to\alpha$ is injective. Pull back the ordinal well-order along $b$: totality follows from injectivity and ordinal trichotomy, and a nonempty subset has the unique point whose image is its image set’s least ordinal. For $X=\varnothing$ this is the empty order; if $\alpha=0$ the first step forces $X=\varnothing$. [F2, step 1.1] ∎
