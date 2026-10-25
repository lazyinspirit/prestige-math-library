---
id: ex-qa-20-commuting-two-term-simulation
kind: example
title: Exact simulation of two commuting terms
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-20-first-order-product-formula
  - thm-qa-19-matrix-exponential-unitary-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed p. 134: the exact product identity for commuting Hamiltonians."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed p. 72: the commuting case and the distinction from noncommuting exponentials."
---

## Example

If two finite-dimensional self-adjoint matrices $H_1,H_2$ commute, then every first-order product step is exact:
$$e^{-ihH_1}e^{-ihH_2}=e^{-ih(H_1+H_2)}\qquad(h\in\mathbb R).$$
Consequently $S_1(t/r)^r=U_{H_1+H_2}(t)$ for every $t\in\mathbb R$ and $r\ge1$.

## Facts & Assumptions

**Given:** Self-adjoint endomorphisms $H_1,H_2$ of a finite-dimensional complex inner-product space, with $H_1H_2=H_2H_1$; real $t$ and integer $r\ge1$.

[F1] [[def-qa-20-first-order-product-formula]] defines $S_1(h)=e^{-ihH_1}e^{-ihH_2}$ in the displayed operator order.

[F2] [[thm-qa-19-matrix-exponential-unitary-properties]] gives $U_K'(s)=-iKU_K(s)$, uniqueness for that initial-value problem, and $U_K(s+u)=U_K(s)U_K(u)$.

## Verification


1.1 Put $A=-iH_1$ and $B=-iH_2$, so $AB=BA$. Define $Y(s)=e^{sA}e^{sB}$. By [F2] and the product rule, $Y'(s)=Ae^{sA}e^{sB}+e^{sA}Be^{sB}=(A+B)Y(s)$, where commutation lets $B$ pass through $e^{sA}$. Also $Y(0)=I$. [given, F2, algebra]

2.1 The unique solution of $Z'=(A+B)Z$, $Z(0)=I$, is $U_{H_1+H_2}(s)$ by [F2]. Hence $Y(h)=U_{H_1+H_2}(h)$ for every real $h$, which proves the one-step identity in [F1]. [step 1.1, F1, F2]

3.1 Taking $h=t/r$ and composing the exact identity $r$ times gives $S_1(t/r)^r=U_{H_1+H_2}(t/r)^r=U_{H_1+H_2}(t)$ by the group law in [F2] and the product definition [F1]. [step 2.1, F1, F2, algebra] ∎
