---
id: thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form
kind: theorem
title: Cauchy–Kovalevskaya for first-order analytic systems
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
      locator: Gantumur, §4 Theorem 18, printed pp. 9–10; Corollary 20 proof, p. 11, for nonzero analytic data.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22, PDF pp. 25–27; independent comparison for the analytic reduction and majorant argument.
status: published
origin: pipeline
proof_strategy: direct
deps: ["lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form", "lem-normal-form-pde-determines-a-unique-formal-taylor-series", "lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion", "lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution", "thm-power-series-define-holomorphic-functions-in-several-variables"]
---

## Statement

Let $d,N\ge1$, let $g:\mathbb R^d\to\mathbb R^N$ be analytic near zero, and let F be analytic near $(0,0,g(0),Dg(0))$. Then $u_t=F(t,x,u,D_xu)$, $u(0,x)=g(x)$ has a unique real analytic solution germ at $(0,0)$. Existence holds on a nonempty neighborhood; uniqueness is among analytic germs.

## Facts & Assumptions

**Given:** An analytic first-order normal system with analytic initial data and a right side analytic at the actual initial value and spatial jet, as specified in the statement.

[F1] Subtracting g gives an analytic zero-data system. ([[lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form]]).

[F2] First-order analytic zero-data systems have a unique formal solution. ([[lem-normal-form-pde-determines-a-unique-formal-taylor-series]]).

[F3] The positive Goursat system dominates the zero-data formal solution. ([[lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion]]).

[F4] The specified positive system has a convergent analytic solution with the required origin jet. ([[lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution]]).

[F5] Geometric coefficient bounds give convergence and termwise differentiation. ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

## Proof

1.1 By F1 set $w=u-g(x)$ to obtain $w_t=H(t,x,w,D_xw)$ with zero data. Put $c=H(0,0,0,0)$ and $z=w-tc$. Its equation is $z_t=H(t,x,z+tc,D_xz)-c=:K(t,x,z,D_xz)$, where K is analytic and K(0)=0. Its initial data remain zero. All substitutions stay inside the original analytic neighborhood after a finite shrinking. [given, F1, algebra]

2.1 F2 gives a unique formal z. Choose a common positive-radius coefficient bound M,r for the finite analytic family K (equivalently bound the absolute series on a smaller polydisc). F4 constructs the convergent positive Goursat majorant for these constants; F3 gives $|[t^q x^\alpha]z_j|\le[t^q x^\alpha]U_j$. Choose a positive polyradius s strictly inside the convergence region of U. If $C=\max_j\sum_\beta [Z^\beta]U_j s^\beta$, then every coefficient of z is at most $Cs^{-\beta}$. [step 1.1, F2, F3, F4]

3.1 F5 makes z an analytic sum on a smaller polydisc and permits its spatial and time derivatives to be taken termwise. Shrink once more so the absolute sums of z and its spatial derivatives are inside the convergence radii of K. Expanding K then gives an absolutely convergent substitution, whose Taylor coefficients agree with the formal substitution in F2. Each coefficient of $z_t-K(t,x,z,D_xz)$ is zero by the recursion; hence this function is identically zero there. All coefficients are real, so the restriction is a real analytic solution. Adding tc and g reverses step 1.1 and supplies the prescribed trace. [step 1.1, step 2.1, F2, F5]

4.1 Any other analytic solution undergoes the same subtraction in step 1.1; its Taylor series solves the identical zero-data formal problem. F2 forces equality of every coefficient with z. On a common smaller neighborhood both analytic functions equal their series and therefore coincide. Reversing the subtraction proves uniqueness of the original germ. [step 1.1, step 3.1, F2] ∎

## Source notes

Gantumur, §4 Theorem 18, printed pp. 9–10; Corollary 20 proof, p. 11, for nonzero analytic data.
