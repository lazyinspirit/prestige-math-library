---
id: lem-variable-step-bdf2-increment-ratio-recurrence
kind: lemma
title: "The variable-step BDF2 parasitic increment contracts below the sharp ratio threshold"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - alg-variable-step-bdf2-with-selected-implicit-branch
  - lem-variable-step-bdf2-interpolation-and-local-defect
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. Söderlind, L. Wang, and S. Zhang, On the zero-stability of multistep methods on smooth nonuniform grids, §4"
      url: "https://real.mtak.hu/85237/1/B111_BIT.pdf"
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5, Stability, pp. 402–406"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
---

## Statement

For the homogeneous vector-valued variable-step BDF2 recurrence obtained from [[alg-variable-step-bdf2-with-selected-implicit-branch]] by setting $f=0$, let $\Delta_n=Y_n-Y_{n-1}\in\mathbb R^d$. For every $r_n=h_n/h_{n-1}>0$,

$$\Delta_{n+1}=q(r_n)\Delta_n,\qquad q(r)=\frac{r^2}{1+2r}.$$

The multiplier satisfies $q(r)\le1$ exactly when $0<r\le1+\sqrt2$. In particular, if $0<r_n\le r_*<1+\sqrt2$ for every step, then $q(r_n)\le q_*:=r_*^2/(1+2r_*)<1$ uniformly.

## Facts & Assumptions

**Given:** The homogeneous variable-step BDF2 equation and the positive step-ratio convention in [[alg-variable-step-bdf2-with-selected-implicit-branch]].

[L1] [[lem-variable-step-bdf2-interpolation-and-local-defect]] gives the BDF2 coefficients $(1+2r_n),-(1+r_n)^2,r_n^2$.

## Proof

1.1 With $f=0$, the recurrence is $(1+2r_n)Y_{n+1}-(1+r_n)^2Y_n+r_n^2Y_{n-1}=0$. Substitute $Y_{n+1}=Y_n+\Delta_{n+1}$ and $Y_{n-1}=Y_n-\Delta_n$; the coefficient of $Y_n$ cancels, leaving $(1+2r_n)\Delta_{n+1}=r_n^2\Delta_n$. [given, L1, algebra]

2.1 Since $1+2r_n>0$, division gives $\Delta_{n+1}=q(r_n)\Delta_n$. The derivative $q'(r)=2r(1+r)/(1+2r)^2$ is positive for $r>0$, while $q(r)\le1$ is equivalent to $r^2-2r-1\le0$, or $r\le1+\sqrt2$. [step 1.1, algebra]

3.1 The function $q$ is continuous and increasing, so for $r_n\le r_*<1+\sqrt2$ its maximum is $q_*<1$. This proves the uniform contraction claim. [step 2.1, algebra] ∎
