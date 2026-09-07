---
id: thm-diagonal-intersection-of-clubs
kind: theorem
title: "The diagonal intersection of clubs is club"
status: draft
origin: pipeline
deps: ["def-diagonal-club-intersection", "thm-small-intersections-of-clubs", "lem-closure-points-on-regular-cardinals"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Theorem 5.9, p.41"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Theorem 14.11, p.81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, if $\kappa$ is regular uncountable and $(C_\xi)_{\xi<\kappa}$ is a sequence of clubs of $\kappa$, then $D=\mathop{\triangle}_{\xi<\kappa}C_\xi$ is club.

## Facts & Assumptions

[F1] [[def-diagonal-club-intersection]]: Membership at alpha tests only indices xi<alpha.

[F2] [[lem-closure-points-on-regular-cardinals]]: Any self-map of a regular uncountable cardinal has club many closure points.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Define $g(\beta)=\sup_{\xi\le\beta}\min(C_\xi\setminus(\beta+1))$. Regularity keeps this below $\kappa$. By the closure-point lemma, there are unboundedly many nonzero closure points $\alpha$ of $g$; these are limits since $g(\beta)>\beta$. Fix $\xi<\alpha$ and any $\eta<\alpha$, then take $\beta<\alpha$ with $\beta\ge\xi,\eta$. The least $C_\xi$ point above $\beta$ is below $\alpha$. Thus $\alpha\in C_\xi$, proving $\alpha\in D$. [F1, F2]

2.1 If $\delta$ is a nonzero limit point of $D$, then for each $\xi<\delta$ the points of $D\cap\delta$ above $\xi$ belong to $C_\xi$ and are unbounded in $\delta$. Its closure gives $\delta\in C_\xi$ for every $\xi<\delta$, hence $\delta\in D$. This proves closure. Zero is in $D$ by definition. [F1, step 1.1] ∎
