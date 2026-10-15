---
id: cex-rademacher-errors-do-not-give-exact-regression-t
kind: counterexample
title: "Independent Rademacher errors need not give the Gaussian regression t pivot"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-student-t-and-f-laws
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Section 15: Multiple Linear Regression, PDF pp. 5–7"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
    - title: "Charlotte Wickham, Statistics: Lecture Three — Linear Models, PDF pp. 6–7"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
---

## Statement refuted

Full column rank, $n>p$, independent errors with mean zero and common positive variance suffice for the exact Gaussian-regression Student $t_{n-p}$ contrast pivot.

## Facts & Assumptions

**Given:** The Rademacher-error model described below, and the Student $t_1$ law.

[A1] The Axiom of Choice is assumed for the normal and Student $t$ law definitions; the finite enumeration below uses no choice. [[def-axiom-of-choice]]

[F1] The $t_1$ CDF is continuous and strictly increasing on $\mathbb R$, so $t_1$ is not a point mass at zero. [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

## Counterexample

Take $n=2$, $p=1$, $X=(1,1)^T$, $\beta=0$, and independent errors $\epsilon_1,\epsilon_2$ with $\mathbb P(\epsilon_i=1)=\mathbb P(\epsilon_i=-1)=1/2$. They have mean zero and variance $\sigma^2=1$, while $X$ has rank one and $n>p$. Let $\widehat\beta=(X^TX)^{-1}X^TY$, $RSS=\|(I-P_X)Y\|^2$, $s^2=RSS/(n-p)$, and use the nonzero contrast $c=1$ with pivot set to zero when $s=0$.

**Given:** All four equally likely pairs $(\epsilon_1,\epsilon_2)\in\{(-1,-1),(-1,1),(1,-1),(1,1)\}$.

1.1 Since $X^TX=2$, $\widehat\beta=(\epsilon_1+\epsilon_2)/2$ and $RSS=(\epsilon_1-\epsilon_2)^2/2$. If the errors agree, then $RSS=0$ and the pivot is zero by its definition. If they disagree, then $\widehat\beta=0$, $RSS=2$, and the pivot denominator is $s\sqrt{(X^TX)^{-1}}=\sqrt2\sqrt{1/2}=1$, so the pivot is again zero. These cases exhaust the four outcomes. [given, construct, algebra]

2.1 Thus the pivot equals zero almost surely. By [F1], a $t_1$ random variable has a continuous law and hence assigns probability zero to the singleton $\{0\}$, whereas this pivot assigns it probability one. Its law is not $t_1$, refuting the statement. [A1, F1, step 1.1, algebra] ∎