---
id: "lem-chain-dimension-open-cover"
kind: "lemma"
title: "Dimension can be computed on an open cover"
deps: ["def-dimension-noetherian-topological-space"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §3l chain interpretation; §5j p.115"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "A chain meets any open meeting its smallest member in a strict chain: nonempty opens of an irreducible space are dense. Conversely take closures of chains in an open; closure intersected with the open recovers each member."
---

## Statement

For every open cover $T=\bigcup_{i\in I}U_i$ of a Noetherian space, $\dim T=\sup_i\dim U_i$, with empty supremum $-\infty$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a Noetherian topological space $T$, define $\dim T$ as the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$. Thus a one-member chain has length zero. Set $\dim\varnothing=-\infty$, and allow $\dim T=+\infty$. The supremum of an empty family of dimensions is $-\infty$. ([[def-dimension-noetherian-topological-space]]).

## Proof

1.1 If $T$ is empty all terms have dimension $-\infty$. Otherwise, for a chain of irreducible closed subsets $C_0\subsetneq\cdots\subsetneq C_s$ in an open $U$, their closures in $T$ are irreducible and closed, and $\overline{C_j}\cap U=C_j$. Hence their closures remain strictly nested and $\dim U\le\dim T$. [F1]

2.1 For a chain $Z_0\subsetneq\cdots\subsetneq Z_s$ in $T$, choose $x\in Z_0$ and a covering open $U_i$ containing $x$. Each $Z_j\cap U_i$ is nonempty, irreducible and closed in $U_i$. A nonempty open of an irreducible space is dense: two disjoint nonempty opens would give a cover by two proper closed subsets. Thus $\overline{Z_j\cap U_i}=Z_j$. The intersections form a strict chain of the same length. Taking suprema proves the claim. [F1, step 1.1] ∎
