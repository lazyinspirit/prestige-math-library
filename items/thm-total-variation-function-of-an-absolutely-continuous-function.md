---
id: thm-total-variation-function-of-an-absolutely-continuous-function
kind: theorem
title: "Total-variation function of an absolutely continuous function"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, def-total-variation-function-on-a-compact-interval, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]
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
    - title: "R. K. Srivastava, MA550 Measure Theory Lecture Notes, Corollary 4.38"
      url: "https://www.iitg.ac.in/rksri/MA550_Measure_Theory_Lecture_Notes_2024.pdf"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. If $F\in AC[a,b]$, then
$$V_F(x)=\int_a^x|F'(t)|\,dt\quad\text{and}\quad V_F'=|F'|\text{ a.e.}$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, $F\in AC[a,b]$, and its total-variation function $V_F$.

## Proof

**Proof technique:** direct.

1.1 The sharp FTC gives $F(v)-F(u)=\int_u^vF'$, so every partition sum is at most $\int_a^x|F'|$. [given, algebra]

2.1 Approximate the sign of $F'$ by a finite step function and use its sign-change endpoints as a partition; the corresponding partition sum approaches $\int_a^x|F'|$. Thus the supremum defining [[def-total-variation-function-on-a-compact-interval]] equals that integral. [step 1.1, choose]

3.1 Since $|F'|\in L^1[a,b]$, [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] makes the right side an absolutely continuous function, and [[thm-first-fundamental-theorem-of-calculus-for-l-one]] gives its derivative $|F'|$ almost everywhere. Step 2.1 identifies that function with $V_F$. [step 2.1] ∎
