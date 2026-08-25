---
id: cex-a-step-set-for-which-the-reflection-argument-fails
kind: counterexample
title: "The step set $\\{(1,1),(1,-2)\\}$ breaks the reflection argument"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [lem-a-diagonal-path-that-changes-side-of-a-level-meets-it, lem-reflection-at-the-first-visit-to-a-level-is-a-bijection, def-lattice-path-and-step-set, thm-reflection-principle-for-diagonal-lattice-paths]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement refuted

The reflection argument on the A page depends on the step set $\{U,D\}$ with
height changes $\pm1$. It does not extend unchanged to arbitrary step sets.

## Facts & Assumptions

**Given:** the step set $S=\{(1,1),(1,-2)\}$ and the level $0$.

[L1] A diagonal path with $h(0)\le c\le h(n)$ or $h(n)\le c\le h(0)$ meets the level $c$ somewhere ([[lem-a-diagonal-path-that-changes-side-of-a-level-meets-it]]).

[L2] For diagonal paths with steps $(1,1)$ and $(1,-1)$ whose endpoints lie above the level $c$ and which first visit $c$ at some index $\tau$, the initial segment up to $\tau$ may be reflected across the line $y=c$ to obtain the bijection of [[lem-reflection-at-the-first-visit-to-a-level-is-a-bijection]].

[L3] For diagonal paths with steps $(1,1)$ and $(1,-1)$ and endpoints strictly above a level, the reflection principle identifies paths touching that level with paths from the reflected starting height, and subtracts their count from the total ([[thm-reflection-principle-for-diagonal-lattice-paths]]).

## Counterexample

**Proof technique:** direct.

1.1 The one-step path from $(0,1)$ to $(1,-1)$ with step $(1,-2)$ starts above the level $0$ and ends below it, but its heights are only $1$ and $-1$, so it never has height $0$. This path is outside [L1]'s diagonal-step hypothesis and shows that the conclusion of [L1] fails if that hypothesis is dropped. [L1, given]

2.1 Because the path of step 1.1 never visits the level $0$, the first-visit reflection of [L2] is undefined on it. So the bijection on which the reflection count rests is absent. [L2, step 1.1]

3.1 The naive analogue of the count fails too. For these same steps there is no path from $(0,1)$ to $(2,1)$, so the total count is $0$ and the count of paths staying strictly above $0$ is also $0$; but there is one path from $(0,-1)$ to $(2,1)$, namely `UU`. Illegally extending the subtraction pattern of [L3] would therefore give $0-1=-1$, which is not a count of paths. [L3, step 2.1] ∎

## Remarks

- The broken step is exactly the one hidden in the ordinary proof: when the height jump can skip over the forbidden level, "changes side" no longer means "meets the level first."
