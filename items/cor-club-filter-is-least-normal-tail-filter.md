---
id: cor-club-filter-is-least-normal-tail-filter
kind: corollary
title: "The club filter is the least normal tail filter"
status: published
origin: pipeline
deps: ["thm-diagonal-intersection-of-clubs", "thm-normality-and-positive-pressing-down", "def-club-filter-and-nonstationary-ideal"]
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
    - title: "Williams, Exercise 37 and Exercise 40, pp.11–12, with explicit tail hypothesis"
      url: https://juliakw.net/teaching/2019/math655/part1.1.pdf
---

## Statement

In ZFC, the club filter on regular uncountable $\kappa$ is normal and is contained in every proper normal filter on $\kappa$ that contains all tails.

## Facts & Assumptions

[F1] [[thm-diagonal-intersection-of-clubs]]: Diagonal intersections of kappa many clubs are club.

[F2] [[thm-normality-and-positive-pressing-down]]: Normal proper tail filters satisfy positive pressing down.

[F3] [[def-club-filter-and-nonstationary-ideal]]: The club filter contains every set containing a club.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For a sequence of club-filter members choose a witnessing club inside each. Their diagonal is a club contained in the diagonal of the original members, so that diagonal belongs to the club filter. Tails are clubs, giving normality and tail containment. [F1, F3]

1.2 Let $F$ be a proper normal tail-containing filter and $C$ a club. If $C\notin F$, then $S=(\kappa\setminus C)\cap[1,\kappa)$ is positive: intersecting a positive set with a filter member preserves positivity, as every further filter intersection remains in $F$. On $S$ put $f(\alpha)=\sup(C\cap\alpha)$. At a successor this is below $\alpha$; at a nonzero limit equality would put $\alpha$ in the closed $C$. Hence $f$ is regressive. [F2]

2.1 For any $\xi$, take $c\in C$ above $\xi$. A point $\alpha>c$ has $f(\alpha)\ge c>\xi$, so the fibre of $\xi$ is bounded by $c+1$ and is disjoint from a tail in $F$. All fibres are small, contradicting positive pressing down. Thus $C\in F$, and upward closure includes the entire club filter in $F$. [F2, F3, step 1.2] ∎
