---
id: ex-cauchy-kovalevskaya-for-a-second-order-normal-form
kind: example
title: A second-order normal system
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 Corollary 20 and equations (55)–(57), printed p. 11; scalar wave specialization computed locally.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22 Step 1, PDF p. 25; the wave instance is calculated locally.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system"]
---

## Example

For analytic g,h, the equation $u_{tt}=u_{xx}$ with data $u(0,x)=g(x)$, $u_t(0,x)=h(x)$ is equivalent to $u_t=v$, $v_t=w_x$, $w_t=v_x$, with data $(u,v,w)(0,x)=(g,h,g^{\prime})$.

## Facts & Assumptions

**Given:** The equation $u_{tt}=u_{xx}$, its two analytic Cauchy data, and the three proposed jet variables of the Example.

[F1] The compatible first-order jet system has an analytic solution recovering the scalar equation. ([[lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system]]).

## Verification

1.1 For an analytic scalar solution put $v=u_t,w=u_x$. Then $u_t=v$, $v_t=u_{tt}=u_{xx}=w_x$ and $w_t=u_{xt}=u_{tx}=v_x$, with traces $(g,h,g^{\prime})$. These are precisely the m=2 equations of F1. [given, F1, algebra]

2.1 Conversely F1 supplies an analytic system solution. Its error $e=w-u_x$ satisfies $e_t=v_x-\partial_xv=0$ and $e(0,x)=g^{\prime}(x)-g^{\prime}(x)=0$, so e is identically zero. Thus $u_{tt}=v_t=w_x=u_{xx}$ and $u_t(0,x)=h$. For $g=x^2,h=1$, the explicit solution is $u=x^2+t^2+t$, $v=2t+1,w=2x$: both $v_t$ and $w_x$ equal 2, and both $w_t$ and $v_x$ equal 0. [step 1.1, F1, algebra] ∎

## Source notes

Gantumur, §4 Corollary 20 and equations (55)–(57), printed p. 11; scalar wave specialization computed locally.

