---
id: "lem-dimension-finite-union-components"
kind: "lemma"
title: "Dimension of a finite closed union"
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
    - title: "Milne §2m 2.49 p.54: maximum over irreducible components"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Every irreducible closed subset lies in one member of a finite closed cover; apply to the largest term of a chain."
---

## Statement

If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] For a Noetherian topological space $T$, define $\dim T$ as the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$. Thus a one-member chain has length zero. Set $\dim\varnothing=-\infty$, and allow $\dim T=+\infty$. The supremum of an empty family of dimensions is $-\infty$. ([[def-dimension-noetherian-topological-space]]).

## Proof

1.1 If $m=0$ or $T=\varnothing$, there are no nonempty irreducible closed subsets and the conventions give the equality. Otherwise every chain in a closed $T_i$ is also a chain in $T$, giving $\dim T\ge\dim T_i$. [F1]

2.1 For a chain $Z_0\subsetneq\cdots\subsetneq Z_s$ in $T$, write $Z_s=\bigcup_i(Z_s\cap T_i)$. Irreducibility, applied repeatedly to this finite closed cover, forces $Z_s\subseteq T_i$ for some $i$. The entire chain lies in that $T_i$. Taking suprema gives the reverse bound, including unbounded chain lengths. [F1, step 1.1] ∎
