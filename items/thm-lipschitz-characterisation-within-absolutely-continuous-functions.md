---
id: thm-lipschitz-characterisation-within-absolutely-continuous-functions
kind: theorem
title: "Lipschitz characterisation within absolutely continuous functions"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, thm-c1-lipschitz-ac-bv-hierarchy, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, §3.5"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. For $F\in AC[a,b]$ and $L\ge0$, $F$ is $L$-Lipschitz if and only if
$|F'|\le L$ almost everywhere.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, $F\in AC[a,b]$, and $L\ge0$.

## Proof

**Proof technique:** direct.

1.1 If $F$ is $L$-Lipschitz, every difference quotient is bounded by $L$; wherever the derivative exists, $|F'|\le L$. Absolute continuity itself follows from [[thm-c1-lipschitz-ac-bv-hierarchy]]. [given]

1.2 Conversely, the sharp FTC gives $F(y)-F(x)=\int_x^yF'$, whose absolute value is at most $L|y-x|$. [given, algebra]

2.1 This proves both directions; it includes $L=0$ and $a=b$. [step 1.1, step 1.2] ∎
