---
id: thm-jump-hazard-survival-product
kind: theorem
title: Survival jumps multiply by one minus the atomic hazard
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-countable-choice
  - def-cumulative-distribution-function-of-a-random-variable
  - def-parametric-survival-and-reliability
  - thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures
  - thm-probability-law-and-distribution-function-correspondence
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §2.1, PDF p. 10"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §8.1.2.3, PDF p. 16"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
---

## Statement

Assume Countable Choice. Let $T\ge0$ have CDF $F_T(t)=P(T\le t)$ and
survival $S_T(t)=P(T>t)$. For any $t\ge0$ with $S_T(t^-)=P(T\ge t)>0$, define
the atomic hazard
$$q_T(t):=\frac{P(T=t)}{P(T\ge t)}.$$
Then
$$S_T(t)=S_T(t^-)(1-q_T(t)).$$

In particular, if $m\ge1$ and the law is supported on a finite set of distinct times
$0\le t_1<\cdots<t_m$ and each listed point has positive mass, put
$q_j:=q_T(t_j)$. Then
$$S_T(t_j)=\prod_{r=1}^{j}(1-q_r),\qquad 1\le j\le m.$$
For laws with both continuous and atomic parts, the pointwise jump identity
still holds at every atom; this finite-support product is not a formula for the
continuous decrease between atoms.

## Facts & Assumptions

**Given:** Countable Choice, a nonnegative event time $T$, and the stated finite support condition when the product formula is used.

[F1] $F_T(t)=P(T\le t)$ and $S_T(t)=P(T>t)=1-F_T(t)$ for $t\ge0$; $S_T(t^-):=P(T\ge t)$. [[def-cumulative-distribution-function-of-a-random-variable]], [[def-parametric-survival-and-reliability]]

[F2] Under Countable Choice, the law of $T$ satisfies $P(T=t)=F_T(t)-F_T(t^-)$. [[thm-probability-law-and-distribution-function-correspondence]], [[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]]

[A1] Countable Choice is used by [F2] for the CDF/measure correspondence and atom formula. [[def-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 By [F2], $P(T=t)=F_T(t)-F_T(t^-)$. Also $P(T\ge t)=P(T>t)+P(T=t)$, so [F1] gives $$S_T(t^-)=1-F_T(t^-),\qquad P(T=t)=S_T(t^-)-S_T(t).$$ [A1, F1, F2, algebra]

2.1 Divide the identity in step 1.1 by the positive quantity $S_T(t^-)$. Using the definition of $q_T(t)$ gives $$q_T(t)=1-\frac{S_T(t)}{S_T(t^-)},$$ which is equivalent to $S_T(t)=S_T(t^-)(1-q_T(t))$. [step 1.1, given, algebra]

3.1 In the finite-support case, $S_T(t_1^-)=1$, since $T\ge t_1$. For $j>1$, no probability mass lies in $(t_{j-1},t_j)$, so $S_T(t_j^-)=P(T\ge t_j)=P(T>t_{j-1})=S_T(t_{j-1})$. Applying step 2.1 successively yields $$S_T(t_j)=S_T(t_{j-1})(1-q_j)=\prod_{r=1}^{j}(1-q_r),$$ where the initial factor is $S_T(t_1^-)=1$. [step 2.1, given, algebra]

4.1 Step 2.1 proves the jump identity for every atom with positive pre-jump survival, and step 3.1 proves the finite atomic product formula. [step 2.1, step 3.1] ∎