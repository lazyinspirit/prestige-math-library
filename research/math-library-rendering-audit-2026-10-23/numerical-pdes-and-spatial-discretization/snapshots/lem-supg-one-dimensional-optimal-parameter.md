---
id: lem-supg-one-dimensional-optimal-parameter
kind: lemma
title: "The one-dimensional SUPG parameter is positive and bounded"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-supg-one-dimensional-convection-diffusion-model, def-supg-one-dimensional-residual-form]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Example 5.16, printed p. 56: the exact coth parameter and its equivalent fitted one-dimensional scheme."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slide 80, PDF p. 9: the optimal one-dimensional parameter $\\coth(h/(2\\epsilon))-2\\epsilon/h$."
---

## Statement

Let $s>0$ and define $m(s):=\coth s-1/s$ and $c_*:=\min\{(3\sinh 1)^{-1},\coth 1-1\}>0$. Then
$$c_*\min\{s,1\}\le m(s)<1,\qquad m(s)\le s/2.$$
Consequently, for the parameter in [[def-supg-one-dimensional-residual-form]],
$$0<\frac{c_*}{2}\min\left\{\frac{h^2}{2\epsilon},\frac{h}{|b|}\right\}\le\tau<\frac{h}{2|b|},\qquad \tau\le\frac{h^2}{8\epsilon}.$$

## Facts & Assumptions

**Given:** $s>0$, $\epsilon>0$, $b\ne0$, $h>0$, and $\mathrm{Pe}=|b|h/(2\epsilon)$.

[F1] [[def-supg-one-dimensional-convection-diffusion-model]]: $\mathrm{Pe}>0$ is the dimensionless parameter $|b|h/(2\epsilon)$.

[F2] [[def-supg-one-dimensional-residual-form]]: $\tau=h(2|b|)^{-1}m(\mathrm{Pe})$.

## Proof

1.1 Put $q(s)=s\cosh s-\sinh s$. Then $q(0)=0$ and $q'(s)=s\sinh s>0$ for $s>0$, so $q(s)>0$ and $m(s)=q(s)/(s\sinh s)>0$. [given, algebra]

2.1 The identity $\coth s-1=2/(e^{2s}-1)$ and $e^{2s}-1=\int_0^{2s}e^t\,dt>2s$ give $m(s)<1$. [step 1.1, algebra]

2.2 For $0<s\le1$, $q(s)=\int_0^s t\sinh t\,dt\ge s^3/3$. The function $\sinh s/s$ is increasing because its derivative is $q(s)/s^2>0$, hence $\sinh s\le s\sinh 1$ on this range. Therefore $m(s)\ge s/(3\sinh1)$. For every $s>0$, monotonicity of $\sinh$ also gives $q(s)\le\sinh(s)\int_0^s t\,dt=s^2\sinh(s)/2$, whence $m(s)\le s/2$. [step 1.1, algebra]

3.1 Since $\sinh s>s$ for $s>0$, $m'(s)=s^{-2}-(\sinh s)^{-2}>0$. Thus for $s\ge1$, $m(s)\ge m(1)=\coth1-1$. Together with step 2.2 this proves the two-sided bound. Substituting $s=\mathrm{Pe}$ into [F2] gives the stated lower and first upper bounds on $\tau$, using $h(2|b|)^{-1}\min\{\mathrm{Pe},1\}=\frac12\min\{h^2/(2\epsilon),h/|b|\}$. The last upper bound follows from $m(\mathrm{Pe})\le\mathrm{Pe}/2$. [F1, F2, step 2.2, algebra] ∎