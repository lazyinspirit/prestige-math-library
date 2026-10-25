---
id: ex-folner-intervals-in-the-integers
kind: example
title: "Intervals in Z are Folner sets"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-folner-set-and-folner-condition, thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

For $(\mathbb Z,+)$ and any finite subset $S\subseteq\mathbb Z$, the intervals
$F_n=[-n,n]\cap\mathbb Z$ are eventually $(S,\varepsilon)$-Folner for every
$\varepsilon>0$.

## Facts & Assumptions

**Given:** A finite set $S\subseteq\mathbb Z$ and a real $\varepsilon>0$.

[L1] $(S,\varepsilon)$-Folner sets are defined by the symmetric-difference estimate ([[def-folner-set-and-folner-condition]]).

[L2] Under the ultrafilter lemma, such Folner families witness amenability through the Folner criterion ([[thm-folner-criterion-for-amenability]]).

## Verification

**Proof technique:** direct.

1.1 Let $M=\max_{s\in S}|s|$. For every $s\in S$, the translate $s+F_n$ differs from $F_n$ only near the two ends of the interval, so $|(s+F_n)\triangle F_n|\le2M$. [given, algebra]

2.1 Since $|F_n|=2n+1$, the ratio $|(s+F_n)\triangle F_n|/|F_n|$ is at most $2M/(2n+1)$ and therefore tends to $0$ uniformly in $s\in S$. Hence $F_n$ is eventually $(S,\varepsilon)$-Folner in the sense of [L1], illustrating the criterion [L2]. [L1, L2, step 1.1] ∎
