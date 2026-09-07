---
id: thm-normality-and-positive-pressing-down
kind: theorem
title: "Normality is equivalent to positive pressing down"
status: draft
origin: pipeline
deps: ["def-normal-filter-on-a-regular-cardinal", "def-regressive-function-on-ordinals"]
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
    - title: "Williams, Propositions 35 and 39, pp.11–12; Corollary 36 qualification"
      url: https://juliakw.net/teaching/2019/math655/part1.1.pdf
---

## Statement

In ZFC, a proper tail-containing filter $F$ on a regular uncountable $\kappa$ is normal iff every regressive map on an $F$-positive $S\subseteq\kappa\setminus\{0\}$ has an $F$-positive fibre. Such a normal filter is $\kappa$-complete.

## Facts & Assumptions

[F1] [[def-normal-filter-on-a-regular-cardinal]]: Normality is diagonal closure; positivity means meeting every filter member, and all tails belong to the proper filter.

[F2] [[def-regressive-function-on-ordinals]]: Regressive values are strictly below nonzero arguments.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 If $F$ is normal and every fibre of a regressive $f:S\to\kappa$ is small, all their complements belong to $F$. Their diagonal belongs to $F$ and must meet $S$. At an intersection point $\alpha$, its value $f(\alpha)<\alpha$ forces it into the complement of its own fibre, a contradiction. [F1, F2]

1.2 Conversely let $A_\xi\in F$ and suppose their diagonal $D$ is not in $F$. Then $S=\kappa\setminus D$ is positive and excludes zero. For $\alpha\in S$, take the least $\xi<\alpha$ with $\alpha\notin A_\xi$. This defines a regressive map. A positive fibre would be disjoint from the corresponding filter member $A_\xi$, impossible. Hence $D\in F$. [F1, F2]

2.1 For $(A_i)_{i<\mu}$ in $F$, $\mu<\kappa$, pad by $\kappa$ at all remaining indices. Its diagonal, intersected with $[\mu,\kappa)$, is in $F$ and is contained in $\bigcap_{i<\mu}A_i$. Upward closure proves completeness. For $\mu=0$ the intersection is $\kappa$. [F1, step 1.2]

∎
