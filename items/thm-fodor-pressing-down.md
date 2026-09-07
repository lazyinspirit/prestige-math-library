---
id: thm-fodor-pressing-down
kind: theorem
title: "Fodor’s pressing-down lemma"
status: draft
origin: pipeline
deps: ["def-regressive-function-on-ordinals", "def-club-filter-and-nonstationary-ideal", "thm-diagonal-intersection-of-clubs", "prop-basic-stationary-set-calculus"]
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
    - title: "Lietz, Lemma 5.11, pp.41–42"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Theorem 15.2, p.82"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Statement

In ZFC, let $\kappa$ be regular uncountable, let $S\subseteq\kappa\setminus\{0\}$ be stationary, and let $f:S\to\kappa$ be regressive. Then some fibre $\{\alpha\in S:f(\alpha)=\xi\}$ is stationary.

## Facts & Assumptions

[F1] [[def-regressive-function-on-ordinals]]: Regression means $f(\alpha)<\alpha$ throughout the nonzero domain.

[F2] [[def-club-filter-and-nonstationary-ideal]]: Nonstationary sets admit disjoint clubs, and stationary sets meet every club.

[F3] [[thm-diagonal-intersection-of-clubs]]: A kappa-indexed diagonal intersection of clubs is club.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If every fibre were nonstationary, ambient AC would select a club $C_\xi$ avoiding that fibre for every $\xi<\kappa$. Let $D=\mathop{\triangle}_{\xi<\kappa}C_\xi$, a club. [F2, F3]

2.1 Take $\alpha\in S\cap D$. Then $\alpha>0$ and $\xi=f(\alpha)<\alpha$, so diagonal membership gives $\alpha\in C_\xi$. But this club avoids the fibre containing $\alpha$, a contradiction. Therefore a stationary fibre exists. [F1, F2, step 1.1] ∎
