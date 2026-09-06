---
id: ex-cauchy-kovalevskaya-normal-form
kind: example
title: "Cauchy–Kovalevskaya normal form with analytic data"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part III: Analysis of Partial Differential Equations"
      url: "https://giacomoageno.github.io/LectureNotesAPDE.pdf"
---

## Example

For analytic $g_0,g_1$, the wave equation $u_{tt}=u_{xx}$ with
$u(0,x)=g_0(x)$ and $u_t(0,x)=g_1(x)$ is a second-order analytic Cauchy problem
in normal form.  This checks its hypotheses only; it does not invoke a
recorded theorem.

## Facts & Assumptions

**Given:** Analytic functions $g_0,g_1$ and the wave equation $u_{tt}=u_{xx}$.

## Verification

**Proof technique:** direct.

1.1 The equation is solved for the second normal derivative: $u_{tt}=u_{xx}$, whose right side is analytic in the relevant jet variables. [given, algebra]

2.1 The normal line is $t$, and the data supply exactly $\partial_t^0u|_{t=0}=g_0$ and $\partial_tu|_{t=0}=g_1$, the orders $0$ and $1$ required for order $2$. [step 1.1, given]

3.1 The coefficient of $u_{tt}$ is $1$, so $t=0$ is noncharacteristic for this solved normal form. [step 1.1, algebra] ∎
