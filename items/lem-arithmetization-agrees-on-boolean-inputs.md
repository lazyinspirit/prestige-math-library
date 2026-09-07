---
id: lem-arithmetization-agrees-on-boolean-inputs
kind: lemma
title: "Arithmetization preserves Boolean values"
status: draft
origin: pipeline
deps: [def-arithmetization-of-a-boolean-formula]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a78.5.1, p.158"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For every field $F$, Boolean formula $\varphi$ on $n\geq0$ variables and assignment $a\in\{0,1\}^n$, $P_\varphi(a)$ equals the Boolean value of $\varphi(a)$, embedded as $0$ or $1$ in $F$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Arithmetization uses the stated constant, variable, NOT, AND and OR gates ([[def-arithmetization-of-a-boolean-formula]]).

## Proof

1.1 Constants and variable leaves have their prescribed Boolean values by the recursive construction. This includes a constant formula on the singleton cube $\{0,1\}^0$. [F1, base]

1.2 For inputs $u=0,1$, $1-u$ gives respectively $1,0$. For input pairs $(0,0),(0,1),(1,0),(1,1)$, the product $uv$ gives $0,0,0,1$, and $u+v-uv$ gives $0,1,1,1$. These computations hold also in characteristic two. [F1, algebra]

2.1 Assume each immediate subformula has the correct value. The gate calculations then give the correct value for its parent. This proves the parent implication, including when its value is zero or one. [step 1.1, step 1.2, ih]

3.1 Starting at the leaves and applying the parent implication up the finite formula tree proves agreement for the whole formula, including formulas that are identically false or true. [step 1.1, step 2.1, discharge-induction] ∎
