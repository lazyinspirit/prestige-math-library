---
id: cex-complex-step-absolute-value-returns-the-wrong-derivative
kind: counterexample
title: "The absolute value has a real derivative but the complex-step estimator returns zero"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-complex-step-derivative-estimator, thm-complex-step-derivative-has-second-order-error-under-holomorphy, def-complex-conjugate-real-imaginary-part-and-modulus]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham, What Is the Complex Step Approximation?"
      url: "https://nhigham.com/2020/10/06/what-is-the-complex-step-approximation/"
    - title: "Mike Giles, Monte Carlo methods, Lecture 6: Complex Variable Trick"
      url: "https://www2.maths.ox.ac.uk/~gilesm/mc/mc/lec6.pdf"
    - title: "R. Boudjemaa, M. G. Cox, A. B. Forbes, and P. M. Harris, Automatic Differentiation Techniques and their Application in Metrology, NPL Report CMSC 26/03"
      url: "https://eprintspublications.npl.co.uk/2828/1/cmsc26.pdf"
dependency_level: 2
---

## Statement refuted

The complex-step estimator gives the real derivative for every function whose real restriction is differentiable.

## Facts & Assumptions

**Given:** $f(z)=|z|$, $x=1$, and any $h>0$.

[F1] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: if $z=a+bi$, then $|z|=\sqrt{a^2+b^2}$ and $\operatorname{Im}z=b$.

[F2] [[def-complex-step-derivative-estimator]]: $C_hf(x)=\operatorname{Im}f(x+ih)/h$.

[F3] [[thm-complex-step-derivative-has-second-order-error-under-holomorphy]]: its derivative-error conclusion assumes $f$ is holomorphic near the vertical segment and real on a real interval around $x$.

## Counterexample

**Given:** The function, point and step in the Facts & Assumptions.

1.1 On a real neighborhood of $1$, $f(t)=|t|=t$, so the ordinary derivative of the real restriction at $1$ is $1$. [given, F1, algebra]

1.2 By [F1], $f(1+ih)=\sqrt{1+h^2}$ is real. Thus [F2] gives $C_hf(1)=0$ for every $h>0$, which never approaches the derivative $1$. [given, F1, F2, algebra]

2.1 The complex difference quotient along real increments $s$ is $(|1+s|-1)/s=1$ for $|s|<1$ and $s\ne0$. Along imaginary increments it is $(\sqrt{1+s^2}-1)/(is)=-is/(\sqrt{1+s^2}+1)\to0$. The two limits differ, so $f$ is not complex differentiable at $1$, exactly where [F3] requires holomorphy. [given, F1, F3, algebra] ∎
