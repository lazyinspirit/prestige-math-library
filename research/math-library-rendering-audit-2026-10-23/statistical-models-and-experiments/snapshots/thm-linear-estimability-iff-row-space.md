---
id: thm-linear-estimability-iff-row-space
kind: theorem
title: "Linear estimability is equivalent to row-space membership"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-fixed-design-linear-regression-model
  - def-linear-estimability-in-fixed-design
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - lem-standard-basis-of-f-n
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
proof_strategy: direct
---

## Statement

In a fixed-design first-moment regression model with $X\in\mathbb R^{n\times p}$,
a contrast $c^T\beta$ is linearly estimable if and only if
$$c\in\operatorname{row}(X)=\operatorname{im}(X^T),$$
equivalently if and only if there exists $a\in\mathbb R^n$ with $X^Ta=c$.
Whenever this holds, $a^TY$ is unbiased for $c^T\beta$ for every $\beta$.
Here $\operatorname{row}(X)$ is defined as the image of the transpose map.

## Facts & Assumptions

**Given:** A fixed-design first-moment regression model with parameter $\beta\in\mathbb R^p$, a contrast vector $c\in\mathbb R^p$, and a fixed vector $a\in\mathbb R^n$ when one is supplied.

[F1] The response has finite coordinate means and $\mathbb E_\beta Y=X\beta$ for every $\beta$. [[def-fixed-design-linear-regression-model]].

[F2] The contrast $c^T\beta$ is linearly estimable exactly when a fixed measurable statistic $a^TY$ is unbiased for it at every $\beta$. [[def-linear-estimability-in-fixed-design]].

[F3] Expectation is linear on finite linear combinations of integrable random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]].

[F4] The standard coordinate vectors $e_0,\ldots,e_{p-1}$ form a basis of $\mathbb R^p$. [[lem-standard-basis-of-f-n]].

## Proof

**Proof technique:** direct.

1.1 For any fixed $a$, each coordinate of $Y$ is integrable by [F1], so the finite linear combination $a^TY$ is integrable. Linearity [F3] gives $\mathbb E_\beta[a^TY]=a^T\mathbb E_\beta Y=a^TX\beta=(X^Ta)^T\beta.$ [F1, F3, algebra]

2.1 If $X^Ta=c$, step 1.1 gives $\mathbb E_\beta[a^TY]=c^T\beta$ for every $\beta$. By [F2] the contrast is linearly estimable. The equation $X^Ta=c$ says exactly that $c\in\operatorname{im}(X^T)=\operatorname{row}(X)$. [F2, step 1.1]

2.2 Conversely, suppose $c^T\beta$ is linearly estimable. By [F2] there is a fixed $a$ for which the expectation in step 1.1 equals $c^T\beta$ for every $\beta$. Thus $(X^Ta-c)^T\beta=0$ for every $\beta$; taking $\beta=e_j$ for each standard coordinate vector in [F4] shows coordinatewise that $X^Ta=c$. Hence $c$ belongs to the row space. [F2, F4, step 1.1, choose]

3.1 Steps 2.1 and 2.2 prove both implications, and step 1.1 proves the stated unbiasedness for every representative $a$ with $X^Ta=c$. [step 2.1, step 2.2, step 1.1] ∎
