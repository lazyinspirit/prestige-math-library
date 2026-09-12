---
id: "cor-weak-convergence-implies-lower-semicontinuity-of-the-norm"
kind: "corollary"
title: "Weak convergence implies lower semicontinuity of the norm"
deps: ["def-weak-convergence-of-nets-and-sequences", "cor-relative-hahn-banach-dual-norming", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB ([[def-hahn-banach-extension-principle-relative]]). If a net $x_i\rightharpoonup x$ in a real or complex normed space $X$, then

$$\|x\|\le\liminf_i\|x_i\|:=\sup_{i_0}\inf_{i\ge i_0}\|x_i\|,$$

where the right side is an extended nonnegative real number. No boundedness of the net is assumed.

## Facts & Assumptions

[F1] Weak convergence gives $f(x_i)\to f(x)$ for every $f\in X^*$ ([[def-weak-convergence-of-nets-and-sequences]]).

[F2] Under HB, $\|x\|=\max_{\|f\|\le1}|f(x)|$ ([[cor-relative-hahn-banach-dual-norming]]).

## Proof

**Given:** HB and a weakly convergent net with specified limit $x$.

1.1 Write $L=\sup_{i_0}\inf_{i\ge i_0}\|x_i\|$. Every tail is nonempty because the index preorder is reflexive and nonempty, so its infimum exists in $[0,\infty)$, and their supremum exists in $[0,\infty]$. For $f\in X^*$ with $\|f\|\le1$ and any $\varepsilon>0$, scalar convergence and $||a|-|b||\le|a-b|$ give eventually $\|x_i\|\ge |f(x_i)|>|f(x)|-\varepsilon$. Thus one tail infimum is at least $|f(x)|-\varepsilon$, whence $L\ge |f(x)|-\varepsilon$. [given, F1, algebra]

2.1 If $L=\infty$ the assertion holds. Otherwise letting the positive error decrease shows $L\ge |f(x)|$ for every dual unit-ball member: a positive gap is contradicted by half that gap. The HB norm formula yields $L\ge\|x\|$. At $x=0$ this follows already from $L\ge0$; the zero functional ensures the dual unit ball is nonempty, even for the zero space. $\square$ [step 1.1, F2, algebra]
