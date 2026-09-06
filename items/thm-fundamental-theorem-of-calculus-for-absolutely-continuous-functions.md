---
id: thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
kind: theorem
title: "Fundamental theorem of calculus for absolutely continuous functions"
status: published
origin: pipeline
landmark: true
deps: [def-countable-choice, def-dependent-choice, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, Theorem 23"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. For $F:[a,b]\to\mathbb R$, the following are equivalent:

1. $F$ is absolutely continuous.
2. $F'$ exists almost everywhere, $F'\in L^1[a,b]$, and
$$F(x)-F(a)=\int_a^xF'(t)\,dt\quad\text{for every }x\in[a,b].$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and a real function $F$ on the compact interval $[a,b]$.

## Proof

**Proof technique:** direct.

1.1 Assume (1). By [[thm-absolutely-continuous-functions-have-integrable-derivatives]], put $f=F'\in L^1$ a.e.; the first $L^1$ FTC [[thm-first-fundamental-theorem-of-calculus-for-l-one]] says $I_f'=f$ a.e. [given]

2.1 The corollary [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] makes $I_f$ AC, so $H:=F-F(a)-I_f$ is AC and has derivative zero a.e. The zero-derivative theorem makes $H$ constant; $H(a)=0$, giving (2). [step 1.1, algebra]

3.1 Conversely, (2) says $F=F(a)+I_{F'}$, and the same corollary makes it AC. The singleton interval satisfies both clauses directly. [step 2.1] ∎
