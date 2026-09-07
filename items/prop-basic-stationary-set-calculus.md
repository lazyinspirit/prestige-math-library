---
id: prop-basic-stationary-set-calculus
kind: proposition
title: "Basic stationary-set calculus"
status: published
origin: pipeline
deps: ["def-club-filter-and-nonstationary-ideal"]
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
    - title: "Vasey, Example 14.13(1)–(5), p.81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
    - title: "Lietz, Lemma 5.6 and Definition 5.7"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Statement

In ZFC, for $\operatorname{cf}(\theta)>\omega$: stationary subsets of $\theta$ are unbounded; every club is stationary; supersets of stationary sets are stationary; the intersection of a stationary set with a club is stationary; and a union of fewer than $\operatorname{cf}(\theta)$ nonstationary sets is nonstationary.

## Facts & Assumptions

[F1] [[def-club-filter-and-nonstationary-ideal]]: Stationarity means meeting every club; the club filter and its dual ideal are closed under the stated small intersections and unions.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Every tail $[\beta,\theta)$ is closed and unbounded: for any bound take a larger ordinal above $\beta$, and a limit of tail points is still at least $\beta$. A bounded set is disjoint from a suitable tail, so cannot be stationary. This also excludes the empty set and all singletons. [F1]

1.2 Two clubs intersect in a club and hence nontrivially, so each club is stationary. Supersets preserve intersections with every club. For stationary $S$ and clubs $C,D$, the club $C\cap D$ meets $S$, so $S\cap C$ meets every $D$ and is stationary. [F1]

2.1 For a small family of nonstationary sets, their union is in the dual ideal by its completeness. Explicitly choose an avoiding club for each member and intersect those clubs; the resulting club avoids the union. For the empty family the union is empty, avoided by $\theta$. [F1] ∎
