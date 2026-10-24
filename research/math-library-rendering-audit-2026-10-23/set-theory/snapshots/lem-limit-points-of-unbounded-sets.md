---
id: lem-limit-points-of-unbounded-sets
kind: lemma
title: "Limit points of an unbounded set form a club"
status: published
origin: pipeline
deps: ["lem-closure-points-on-regular-cardinals"]
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
    - title: "Lietz, Corollary 5.5, p.40"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Statement

In ZFC, if $\operatorname{cf}(\theta)>\omega$ and $X\subseteq\theta$ is unbounded, then $\operatorname{acc}_\theta(X)$ is club.

## Facts & Assumptions

[F1] [[lem-closure-points-on-regular-cardinals]]: A nondecreasing self-map of an ordinal of uncountable cofinality has club many closure points.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Define $f(\beta)=\min\{x\in X:x>\beta\}$. This exists by unboundedness, is nondecreasing, and satisfies $f(\beta)>\beta$. Its closure points form a club. A nonzero closure point cannot be a successor $\gamma+1$, since $f(\gamma)\ge\gamma+1$; and for every $\beta<\delta$ a nonzero closure point has $\beta<f(\beta)<\delta$. Thus it is in $\operatorname{acc}(X)$. Conversely each nonzero limit point of $X$ is closed under $f$. [F1]

2.1 Removing zero from the closure-point club preserves unboundedness and closure at nonzero limits. Equivalently, closure of acc follows directly: below a limit of limit points, first choose a limit point above a given bound, then a point of $X$ above that bound. Hence acc is club with exactly the stipulated nonzero-limit convention. [step 1.1] ∎
