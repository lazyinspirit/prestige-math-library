---
id: thm-optimal-step-for-forward-and-central-difference-error-bounds
kind: theorem
title: "The forward and central error bounds have explicit balancing steps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-forward-and-central-difference-truncation-and-evaluation-error-bounds, thm-of-square-roots, thm-nth-roots-exist]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Complex Step Approximation?"
      url: "https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/"
    - title: "Andreas Buttenschoen, Introduction to Scientific Computing, Numerical Differentiation"
      url: "https://www.buttenschoen.ca/MATH551/numerical-differentiation/"
dependency_level: 2
---

## Statement

Let $H>0$. Consider the conservative error bounds from [[thm-forward-and-central-difference-truncation-and-evaluation-error-bounds]] on a permitted step interval $(0,H]$, where every stencil with $h\le H$ stays inside the domain. If $M_2>0$ and $\delta>0$, the forward bound

$$E_+(h)=M_2h/2+2\delta/h$$

has the unique unconstrained minimizer $h_+=\sqrt{4\delta/M_2}$ and minimum $2\sqrt{M_2\delta}$. On $(0,H]$ the minimizer is $\min\{h_+,H\}$. If $M_3>0$ and $\delta>0$, the central conservative bound

$$E_0(h)=M_3h^2/6+2\delta/h$$

has the unique unconstrained minimizer $h_0=\sqrt[3]{6\delta/M_3}$ and minimum $M_3h_0^2/2$; on $(0,H]$ the minimizer is $\min\{h_0,H\}$. These optimize the displayed error bounds, not the unknown actual error.

If $\delta=0$ and the corresponding truncation constant is positive, the bound has infimum $0$ as $h\downarrow0$ and no minimizer for $h>0$. If the corresponding truncation constant is $0$ and $\delta>0$, the bound decreases with $h$, so its capped minimum is at $H$. If $\delta$ and the corresponding truncation constant are both zero, every permitted step is optimal.

## Facts & Assumptions

**Given:** The derivative bounds, evaluation-error bound and permitted cap described above.

[F1] [[thm-forward-and-central-difference-truncation-and-evaluation-error-bounds]]: the forward and central conservative bounds are $M_2h/2+2\delta/h$ and $M_3h^2/6+2\delta/h$.

[F2] [[thm-of-square-roots]] and [[thm-nth-roots-exist]]: positive real numbers have unique positive square and cube roots.

## Proof

**Given:** The hypotheses listed above.

1.1 Set $r:=h/h_+>0$. The identity $h_+^2=4\delta/M_2$ gives $E_+(h)=\frac{M_2h_+}{2}(r+r^{-1})$, while $E_+(h_+)=M_2h_+$. Since $r+r^{-1}-2=(r-1)^2/r\ge0$, equality holds exactly at $r=1$. Thus $h_+$ is the unique unconstrained minimizer and its value is $2\sqrt{M_2\delta}$. [given, F1, F2, algebra]

1.2 Set $r:=h/h_0$ and $a:=M_3h_0^2/6>0$. From $h_0^3=6\delta/M_3$, $E_0(h)=a(r^2+2/r)$ and $E_0(h_0)=3a$. The difference is $a(r^2+2/r-3)=a(r-1)^2(r+2)/r\ge0$, with equality only at $r=1$. Thus $h_0$ uniquely minimizes the unconstrained bound, and the minimum is $3a=M_3h_0^2/2$. [given, F1, F2, algebra]

2.1 If $0<r_1<r_2\le1$, then $(r_1+r_1^{-1})-(r_2+r_2^{-1})=(r_2-r_1)(1/(r_1r_2)-1)>0$, since $r_1r_2<1$. Hence $E_+$ strictly decreases up to $h_+$; the global bound from step 1.1 gives the cap minimizer $\min\{h_+,H\}$. [given, step 1.1, algebra]

2.2 If $0<r_1<r_2\le1$, then $(r_1^2+2/r_1)-(r_2^2+2/r_2)=(r_2-r_1)(2/(r_1r_2)-(r_1+r_2))>0$, since $r_1r_2<1$ and $r_1+r_2<2$. Hence the central bound strictly decreases up to $h_0$, so the cap minimizer is $\min\{h_0,H\}$. [given, step 1.2, algebra]

3.1 If $\delta=0$, the bounds in [F1] are positive multiples of $h$ or $h^2$ and have infimum $0$ as $h\downarrow0$, not attained for $h>0$. If a truncation constant is $0$ and $\delta>0$, the bound is a positive multiple of $h^{-1}$ and decreases to $0$ as $h\to\infty$, while on a permitted capped interval it is minimized at $H$. If both constants vanish the bound is identically zero. [given, F1, algebra] ∎
