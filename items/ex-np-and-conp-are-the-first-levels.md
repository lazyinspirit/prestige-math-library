---
id: ex-np-and-conp-are-the-first-levels
kind: example
title: "Np and conp are the first levels"
status: published
origin: pipeline
deps: [prop-np-and-conp-are-the-first-levels, thm-bounded-alternation-qbf-is-level-complete]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; Examples5.2–5.3 and5.9, pp91–94."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Formula satisfiability and tautology exhibit the existential and universal first levels. For a finite simple graph $G$ and integer $k$, the language $\mathrm{EXACT}\text{-}\mathrm{INDSET}$ defined by $\alpha(G)=k$ belongs to $\Sigma_2^p\cap\Pi_2^p$; no completeness claim is made for it. Malformed inputs and $k<0$ or $k>|V(G)|$ are rejected.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] $\Sigma_1^p=NP$ and $\Pi_1^p=coNP$. ([[prop-np-and-conp-are-the-first-levels]]).

[F2] For every fixed $k\ge1$, truth of prenex Boolean formulas with $k$ alternating blocks beginning existentially is $\Sigma_k^p$-complete under polynomial-time many-one reductions. The universally starting version is $\Pi_k^p$-complete. The matrix is a general Boolean formula, empty blocks are allowed, and malformed encodings are rejected. ([[thm-bounded-alternation-qbf-is-level-complete]]).


## Verification

1.1 A formula is satisfiable exactly when some assignment makes its polynomial-time evaluation true, and is a tautology exactly when all assignments do. These are first-level predicates, with completeness for the corresponding bounded-QBF encodings. A formula with no variables has one assignment. [F1, F2]

2.1 For valid $0\le k\le n$, let $I_j(S)$ test that an $n$-bit indicator represents an independent set of cardinality $j$. Then the exact condition is $\exists S\forall T\,[I_k(S)\wedge\neg I_{k+1}(T)]$. Reversing the two independent blocks gives the same truth value: in the reverse direction fix any $T$ to obtain a witness $S$, and every $T$ must fail $I_{k+1}$. If both conditions hold one witness $S$ works for every $T$. At $k=0$ the empty set witnesses $I_0$; at $k=n$, $I_{n+1}$ is always false. This also covers the graph with no vertices. A deterministic validity test in the matrix rejects all malformed and out-of-range inputs for either polarity. [step 1.1, algebra] ∎
