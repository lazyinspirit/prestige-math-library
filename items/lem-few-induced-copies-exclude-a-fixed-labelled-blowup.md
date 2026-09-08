---
id: lem-few-induced-copies-exclude-a-fixed-labelled-blowup
kind: lemma
title: "Few induced copies exclude a fixed labelled blowup"
status: published
origin: pipeline
deps: [lem-good-copy-extension-count, def-induced-copy-density-and-homogeneous-restriction-parameter]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: 4.2
proof_strategy: contradiction
---

## Statement

Let $J$ be nonempty with $j=|J|$, and $t\geq1$ an integer. If $\operatorname{ind}_J(G)<(t/j)^j$, no $(t,1/j)$-blowup of $J$ exists in $G$.

## Facts & Assumptions

**Given:** A nonempty $j$-vertex graph $J$, integer $t\geq1$, and $\operatorname{ind}_J(G)<(t/j)^j$.

[F1] From [[lem-good-copy-extension-count]]: Every good embedding of $J[I]$, $I\subseteq V(J)$, has at least $(t/j)^{j-|I|}$ good extensions to $J$.

## Proof

1.1 Suppose such a blowup exists. Its unique empty good embedding has at least $(t/j)^j$ good full extensions by [F1] with $I=\varnothing$. [assume-contra, F1]

2.1 Every good extension is an induced embedding, so $\operatorname{ind}_J(G)\geq(t/j)^j$, contradicting the strict hypothesis. Therefore the blowup cannot exist. [step 1.1, discharge-contradiction] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.2.
