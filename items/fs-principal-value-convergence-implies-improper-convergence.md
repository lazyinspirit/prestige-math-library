---
id: fs-principal-value-convergence-implies-improper-convergence
kind: false-statement
title: "FALSE: existence of a Cauchy principal value forces improper convergence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [rem-cauchy-principal-value-dictionary,
       def-cauchy-principal-value,
       thm-improper-convergence-implies-principal-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "W. F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

**False claim:** if
$\operatorname{PV}\!\int_{-\infty}^{\infty}f(x)\,dx$
exists, then
$\int_{-\infty}^{\infty}f(x)\,dx$
exists as an ordinary improper integral.

## Facts & Assumptions

**Given:** The odd rational function $f(x)=x/(1+x^2)$.

[L1] Principal value is defined by symmetric truncation and does not by itself assert separate one-sided convergence ([[def-cauchy-principal-value]], [[rem-cauchy-principal-value-dictionary]]).

[L2] Ordinary improper convergence implies principal-value convergence, but the implication is not stated as an equivalence ([[thm-improper-convergence-implies-principal-value]]).

## Refutation

**Proof technique:** direct.

1.1 Because $f$ is odd, [given, L1] $\int_{-R}^{R}\frac{x}{1+x^2}\,dx=0$ for every $R>0$, so gives $\operatorname{PV}\!\int_{-\infty}^{\infty}\frac{x}{1+x^2}\,dx=0.$ [L1]

2.1 On $(0,\infty)$ one has $x/(1+x^2)\sim1/x$, so $\int_1^\infty \frac{x}{1+x^2}\,dx=\frac12\log(1+x^2)\Big|_1^\infty$ diverges to $+\infty$, and by oddness the left tail diverges to $-\infty$. Therefore the ordinary improper integral does not exist. [step 1.1, L2, algebra]

3.1 So the existence of a principal value does not force ordinary improper convergence. [step 1.1, step 2.1] ∎
