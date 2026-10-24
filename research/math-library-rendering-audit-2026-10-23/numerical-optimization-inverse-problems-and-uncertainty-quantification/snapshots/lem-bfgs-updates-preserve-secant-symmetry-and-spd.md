---
id: lem-bfgs-updates-preserve-secant-symmetry-and-spd
kind: lemma
title: "Bfgs updates preserve the secant equations, symmetry, and positive definiteness"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-bfgs-curvature-pair-and-update-formulas
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.1, equations (6.17)–(6.19) and the proof of positive definiteness, printed pp. 140–142 / PDF pp. 158–160."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, BFGS formulas and positive-definiteness argument, printed pp. 21–22 / PDF pp. 22–23."
---

## Statement

Let $B\in\mathbb R^{n\times n}$ be SPD, let $H=B^{-1}$, and let $s,y\in\mathbb R^n$ satisfy $s\ne0$ and $d:=s^Ty>0$. Define $B^+,H^+$ by [[def-bfgs-curvature-pair-and-update-formulas]]. Then $B^+$ and $H^+$ are SPD, $B^+s=y$, $H^+y=s$, and $B^+H^+=I$. In particular, the two updates remain consistent inverses and satisfy their secant equations.

## Facts & Assumptions

**Given:** The matrices $B,H$, vectors $s,y$, and update formulas in the Statement.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: $B^+=B-Bss^TB/(s^TBs)+yy^T/d$ and $H^+=(I-sy^T/d)H(I-ys^T/d)+ss^T/d$.

## Proof


**Given:** The matrices $B,H$, vectors $s,y$, and update formulas in the Statement.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: $B^+=B-Bss^TB/(s^TBs)+yy^T/d$ and $H^+=(I-sy^T/d)H(I-ys^T/d)+ss^T/d$.



1.1 Put $c:=s^TBs>0$. The matrix $B^+$ is symmetric. For any $z$, the first two terms of $z^TB^+z$ satisfy $$ z^TBz-\frac{(z^TBs)^2}{c} =\min_{\lambda\in\mathbb R}(z-\lambda s)^TB(z-\lambda s)\ge0, $$ because completing the square gives the minimum at $\lambda=(s^TBz)/c$. Equality holds exactly when $z$ is a scalar multiple of $s$. If $z\ne0$ is such a multiple, the last term $(z^Ty)^2/d$ is strictly positive; if it is not a multiple, the displayed minimum is strictly positive. Hence $B^+$ is SPD. [given, F1, algebra]

1.2 The matrix $H^+$ is symmetric. For any $z$, put $w:=z-(s^Tz)y/d$. Then $$ z^TH^+z=w^THw+\frac{(s^Tz)^2}{d}. $$ If $s^Tz\ne0$, the second term is positive. If $s^Tz=0$ and $z\ne0$, then $w=z$ and $z^THz>0$. Thus $H^+$ is SPD. [given, F1, algebra]

1.3 Substitution of $s$ into the Hessian update gives $B^+s=Bs-Bs(s^TBs)/c+y(y^Ts)/d=y$. In the inverse update, $(I-ys^T/d)y=0$, so $H^+y=ss^Ty/d=s$. [F1, algebra]

2.1 Let $u:=Bs$ and $A:=B-uu^T/c=B^+-yy^T/d$. Since $u^TH=s^T$, we have $AH=I-us^T/c$. Using $B^+s=y$ from step 1.3, $$ B^+H^+=(B^+-yy^T/d)H(I-ys^T/d)+(1/d)ys^T =(I-us^T/c)(I-ys^T/d)+(1/d)ys^T=I, $$ because $s^Ty=d$. Thus $H^+=(B^+)^{-1}$, since $B^+$ is SPD by step 1.1. [F1, step 1.1, step 1.3, algebra] ∎

