---
id: thm-small-intersections-of-clubs
kind: theorem
title: "Intersections of fewer than the cofinality many clubs"
status: published
origin: pipeline
deps: ["lem-closure-points-on-regular-cardinals", "def-club-subsets-of-ordinals", "thm-cofinality-basics"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Lemma 5.6, pp.40–41"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Theorems 14.5 and 14.8, pp.80–81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, let $\operatorname{cf}(\theta)>\omega$ and let $(C_i)_{i<\mu}$ be clubs of $\theta$, with $\mu<\operatorname{cf}(\theta)$. Then $\bigcap_{i<\mu}C_i$ is club, taking the empty intersection to be $\theta$. In particular fewer than $\kappa$ clubs intersect to a club on regular uncountable $\kappa$.

## Facts & Assumptions

[F1] [[lem-closure-points-on-regular-cardinals]]: Nondecreasing maps on an ordinal of uncountable cofinality have club many closure points.

[F2] [[thm-cofinality-basics]]: Fewer than the cofinality many ordinals below theta have supremum below theta.

[F3] [[def-club-subsets-of-ordinals]]: A club contains all its nonzero limit points below the ambient ordinal.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $\mu=0$, the intersection is $\theta$, which is closed and unbounded in itself. For $\mu>0$, let $f_i(\beta)=\min(C_i\setminus(\beta+1))$ and $g(\beta)=\sup_{i<\mu}f_i(\beta)$. The supremum is below $\theta$, and $g$ is nondecreasing and strictly above its argument. [F2, F3]

2.1 The nonzero closure points $\delta$ of $g$ are unbounded by the closure lemma. For every $i$ and $\beta<\delta$, $\beta<f_i(\beta)\le g(\beta)<\delta$. Thus $C_i\cap\delta$ is unbounded in $\delta$; $\delta$ is a nonzero limit and belongs to each $C_i$. This proves unboundedness of the intersection. [F1, F3, step 1.1]

3.1 If $\delta$ is a nonzero limit point of the intersection, it is a limit point of each $C_i$, hence lies in each. This proves closure; the case $\mu=1$ is included. Specializing $\theta=\kappa$ gives the last assertion. [F3, step 2.1] ∎
