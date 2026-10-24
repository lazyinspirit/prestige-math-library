---
id: lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system
kind: lemma
title: Reduction of higher-order normal form with jet compatibility
provenance:
  statement: literature-derived
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
      locator: Gantumur, §4 Corollary 20 and proof, equations (53)–(57), printed p. 11. The compatibility recovery is proved by formal uniqueness below.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22 Step 1, equations (2.11)–(2.13), PDF p. 25.
status: published
origin: pipeline
proof_strategy: direct
deps: ["lem-normal-form-pde-determines-a-unique-formal-taylor-series", "thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form", "thm-symmetry-of-higher-mixed-partials", "lem-analytic-ordinary-differential-systems-by-coefficient-majorants"]
---

## Statement

For the scalar solved normal equation of order $m\ge1$ with allowed jets $|\alpha|+j\le m$, $j<m$, introduce $U_\beta$ for all $(d+1)$-multi-indices $|\beta|\le m-1$. With data $U_{(\alpha,j)}(0,x)=\partial_x^\alpha g_j(x)$ there is an analytic first-order system involving only these U and their first spatial derivatives whose analytic solution satisfies $U_\beta=D^\beta U_0$. Thus this system and the original scalar equation with its m data are equivalent.

## Facts & Assumptions

**Given:** The scalar analytic solved normal equation of order $m\ge1$ with allowed jets $|\alpha|+j\le m$, $j<m$, and analytic data $g_j$. The proposed vector data are $U_{(\alpha,j)}(0,x)=\partial_x^\alpha g_j(x)$.

[F1] Scalar normal form and first-order systems determine unique formal series after analytic data subtraction. ([[lem-normal-form-pde-determines-a-unique-formal-taylor-series]]).

[F2] Analytic first-order systems with analytic data have unique analytic solution germs. ([[thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form]]).

[F3] Mixed derivatives commute for analytic functions. ([[thm-symmetry-of-higher-mixed-partials]]).

[F4] Analytic finite ODE systems have unique analytic solution germs. ([[lem-analytic-ordinary-differential-systems-by-coefficient-majorants]]).

## Proof

1.1 For $|\beta|\le m-2$ prescribe $\partial_tU_\beta=U_{\beta+e_t}$. For $|\beta|=m-1$ other than $(m-1)e_t$, choose the least spatial i with $\beta_i>0$ and prescribe $\partial_tU_\beta=\partial_iU_{\beta-e_i+e_t}$. For $\beta=(m-1)e_t$, prescribe $\partial_tU_\beta=F$, replacing jets of order at most m-1 by U, and each allowed order-m jet $\gamma$ by $\partial_iU_{\gamma-e_i}$ using the least spatial i with $\gamma_i>0$. Such i exists because the pure m-time jet is excluded. Thus every right side uses only U and first spatial derivatives of U. [given, algebra]

2.1 The prescribed data are analytic derivatives of the g_j, and the finite right-hand side is analytic near their compatible initial jet. For $d\ge1$, F2 supplies a unique analytic vector U. If $d=0$, there are no spatial derivatives or mixed jets, and F4 supplies that vector as an analytic ODE solution. Independently F1 supplies the scalar formal solution u for the original data. Formal differentiation shows that $D^\beta u$ solves every equation in step 1.1 and has initial trace $\partial_x^\alpha g_j$. The first-order formal uniqueness clause of F1 therefore identifies the Taylor series of each analytic U_beta with $D^\beta u$. [step 1.1, F1, F2, F4]

3.1 In particular the Taylor series of U_0 is u. Differentiating its convergent series shows $D^\beta U_0$ and U_beta have identical Taylor series; hence they coincide on a smaller neighborhood. Substituting in the pure-time equation in step 1.1 yields the scalar equation, and its first m data follow from the traces of U_{je_t}. Conversely for any analytic scalar solution, F3 makes its actual derivative vector satisfy every equation and datum in step 1.1. These constructions are inverse, including m=1 when the sole unknown is U_0 and the pure-time equation is the original equation. [step 1.1, step 2.1, F3] ∎

## Remarks

When the scalar right side is affine in its highest-order jets, the displayed vector system is quasilinear: the substitutions in step 1.1 put every highest jet into a first spatial derivative, with coefficients depending only on the coordinates and lower jets U. The nonlinear first-order theorem used in step 2.1 also handles general analytic dependence on those derivatives. Setting the number of spatial variables to zero leaves the familiar higher-order ODE chain $U_0^{\prime}=U_1,\ldots,U_{m-2}^{\prime}=U_{m-1},U_{m-1}^{\prime}=F$.

## Source notes

Gantumur, §4 Corollary 20 and proof, equations (53)–(57), printed p. 11. The compatibility recovery is proved by formal uniqueness below.
