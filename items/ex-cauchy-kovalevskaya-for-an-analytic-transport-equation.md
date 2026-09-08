---
id: ex-cauchy-kovalevskaya-for-an-analytic-transport-equation
kind: example
title: Analytic transport data
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
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §5 transport discussion following Exercise 24, printed p. 14; the constant-vector solution is computed locally.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22, PDF pp. 25–27; independent comparison for the analytic reduction and majorant argument.
status: published
origin: pipeline
proof_strategy: direct
deps: ["thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form", "lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation", "thm-chain-rule-for-total-derivatives"]
---

## Example

For a fixed $a\in\mathbb R^d$ and analytic g near zero, the problem $u_t+a\cdot D_xu=0$, $u(0,x)=g(x)$ has the analytic solution $u(t,x)=g(x-at)$ near zero.

## Facts & Assumptions

**Given:** The constant transport vector and analytic initial function in the Example. The proposed translated function must satisfy the equation and data.

[F1] Analytic substitution is valid on a smaller polydisc. ([[lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation]]).

[F2] The derivative of a composite is the composite of the differentials. ([[thm-chain-rule-for-total-derivatives]]).

[F3] The analytic normal-form solution germ is unique. ([[thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form]]).

## Verification

1.1 The map $(t,x)\mapsto x-at$ is linear and sends zero to zero, so F1 makes $u=g(x-at)$ analytic on a sufficiently small neighborhood. F2 gives $u_t=-a\cdot Dg(x-at)$ and $D_xu=Dg(x-at)$; thus $u_t+a\cdot D_xu=0$ and $u(0,x)=g(x)$. [given, F1, F2]

2.1 The solved right side $F(t,x,u,p)=-a\cdot p$ is polynomial in its jet variables and therefore analytic at the required initial jet. F3 identifies the displayed solution with the unique analytic germ. For the explicit data $d=1,a=2,g(x)=x^2$, this gives $u=(x-2t)^2$, $u_t=-4(x-2t)$ and $2u_x=4(x-2t)$, displaying the cancellation directly. [step 1.1, F3, algebra] ∎

## Source notes

Gantumur, §5 transport discussion following Exercise 24, printed p. 14; the constant-vector solution is computed locally.
