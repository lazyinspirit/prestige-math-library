---
id: lem-amsgrad-momentum-energy-bound
kind: lemma
title: AMSGrad momentum energy is bounded by a coordinatewise weighted gradient sum
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-amsgrad
  - lem-adaptive-moment-updates-well-defined
  - def-natural-numbers
  - def-integer-power
  - thm-induction-principle
  - def-finite-sum
  - lem-finite-sum-laws
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-of-square-monotone
  - thm-of-square-roots
  - def-ordered-field
  - lem-of-sign-rules
  - lem-of-inverse-positive
  - cor-cauchy-reals-lub-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Sashank J. Reddi, Satyen Kale, and Sanjiv Kumar, On the Convergence of Adam and Beyond"
      url: "https://arxiv.org/pdf/1904.09237"
      locator: "Appendix D, intermediate AMSGrad momentum-energy lemma and its complete convolution estimate, PDF pp. 15–16."
---

## Statement

Run uncorrected AMSGrad for a finite horizon $T\ge1$ with $\alpha_t=\alpha/\sqrt t$, $\alpha>0$, $\beta_2\in(0,1)$, $0\le\beta_{1,t}\le\beta_1<\sqrt{\beta_2}$, and $\gamma=\beta_1/\sqrt{\beta_2}$. For each coordinate, interpret $m_{t,i}^2/\sqrt{\widehat v_{t,i}}$ as zero when $\widehat v_{t,i}=0$. Then
$$\sum_{t=1}^T\alpha_t\sum_{i=1}^d\frac{m_{t,i}^2}{\sqrt{\widehat v_{t,i}}} \le \frac{\alpha}{(1-\beta_1)(1-\gamma)\sqrt{1-\beta_2}} \sum_{i=1}^d\sum_{t=1}^T\frac{|g_{t,i}|}{\sqrt t}.$$

## Statement references

[[alg-amsgrad]]: gives the moment recurrences, historical maximum, and time-varying first-moment weights.

[[lem-adaptive-moment-updates-well-defined]]: all moment coordinates are finite and all second-moment coordinates are nonnegative; a zero second-moment coordinate has zero first moment.

[[thm-cauchy-schwarz-and-the-euclidean-norm]]: finite-coordinate Cauchy–Schwarz.

[Reddi, Kale, and Kumar, Appendix D](https://arxiv.org/pdf/1904.09237)

## Facts & Assumptions

**Given:** The finite gradient vectors and AMSGrad recurrences in the Statement, with the stated parameter ranges.

[F1] [[alg-amsgrad]]: $m_{t,i}=\beta_{1,t}m_{t-1,i}+(1-\beta_{1,t})g_{t,i}$ and $v_{t,i}=\beta_2v_{t-1,i}+(1-\beta_2)g_{t,i}^2$.

[F2] [[lem-adaptive-moment-updates-well-defined]]: $0\le v_{t,i}\le\widehat v_{t,i}$; because $\beta_2>0$, $v_{t,i}=0$ exactly when $\widehat v_{t,i}=0$, and then all corresponding moment and gradient entries are zero.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for finite real lists, $(\sum_j a_jb_j)^2\le(\sum_j a_j^2)(\sum_j b_j^2)$.

[F4] [[def-integer-power]], [[def-natural-numbers]], [[def-finite-sum]], and [[lem-finite-sum-laws]]: $\beta^0=1$, $\beta^{n+1}=\beta^n\beta$, finite sums distribute over addition, and finite sums may be reindexed.

[F5] [[lem-of-square-monotone]] and [[thm-of-square-roots]]: if $0\le a\le b$, then $\sqrt a\le\sqrt b$.

[F6] [[def-ordered-field]], [[lem-of-sign-rules]], [[lem-of-inverse-positive]], and [[cor-cauchy-reals-lub-complete]]: positive coefficients preserve inequalities and positive denominators may be divided through.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Expanding the first-moment recurrence [F1] recursively gives $m_{t,i}=\sum_{j=1}^t a_{t,j}g_{j,i}$, where $a_{t,t}=1-\beta_{1,t}$ and $a_{t,j}=\beta_{1,t}a_{t-1,j}$ for $j<t$. Induction gives $0\le a_{t,j}\le\beta_1^{t-j}$: the terminal coefficient is at most $1$, and each earlier coefficient acquires one factor at most $\beta_1$. [F1, F6, given, induction, algebra]

2.1 By [F3] applied to $\sqrt{a_{t,j}}$ and $\sqrt{a_{t,j}}g_{j,i}$, $$m_{t,i}^2\le\left(\sum_{j=1}^ta_{t,j}\right)\left(\sum_{j=1}^ta_{t,j}g_{j,i}^2\right) \le\frac{1}{1-\beta_1}\sum_{j=1}^t\beta_1^{t-j}g_{j,i}^2,$$ because $\sum_{k=0}^{t-1}\beta_1^k=(1-\beta_1^t)/(1-\beta_1)\le1/(1-\beta_1)$. The identity follows by multiplying the finite sum by $1-\beta_1$ and telescoping $\sum_{k=0}^{t-1}(\beta_1^k-\beta_1^{k+1})=1-\beta_1^t$ using [F4]; the denominator is positive by [F6]. [F3, F4, F5, F6, step 1.1, given, algebra]

3.1 Iterating the second-moment recurrence [F1] gives $v_{t,i}=(1-\beta_2)\sum_{j=1}^t\beta_2^{t-j}g_{j,i}^2$. By [F2] and [F5], $\sqrt{\widehat v_{t,i}}\ge\sqrt{v_{t,i}}$. If this value is zero, [F2] makes the energy term zero. Otherwise, for each nonzero $g_{j,i}$, $$\sqrt{v_{t,i}}\ge\sqrt{1-\beta_2}\,\sqrt{\beta_2^{t-j}}|g_{j,i}|.$$ The root recursion gives $\sqrt{\beta_2^n}=(\sqrt{\beta_2})^n$ for every integer $n\ge0$; induction proves this because both sides are nonnegative and have the same square. Also $\beta_1^n/(\sqrt{\beta_2})^n=(\beta_1/\sqrt{\beta_2})^n$ by the integer-power recursion, so $\beta_1^n/\sqrt{\beta_2^n}=\gamma^n$. Using step 2.1 termwise in the finite sum therefore gives $$\frac{m_{t,i}^2}{\sqrt{\widehat v_{t,i}}} \le\frac{1}{(1-\beta_1)\sqrt{1-\beta_2}}\sum_{j=1}^t\gamma^{t-j}|g_{j,i}|.$$ Zero gradient terms contribute zero. [F1, F2, F5, F6, step 2.1, given, induction, algebra]

4.1 Multiply step 3.1 by $\alpha/\sqrt t$, sum over $t$ and coordinates, and reorder the finite sums. Since $1/\sqrt t\le1/\sqrt j$ for $t\ge j$ and $(1-\gamma)\sum_{k=0}^{T-j}\gamma^k=1-\gamma^{T-j+1}\le1$ by the same finite telescoping identity from step 2.1, $$\sum_{t=1}^T\alpha_t\sum_i\frac{m_{t,i}^2}{\sqrt{\widehat v_{t,i}}} \le\frac{\alpha}{(1-\beta_1)\sqrt{1-\beta_2}} \sum_i\sum_{j=1}^T|g_{j,i}|\sum_{t=j}^T\frac{\gamma^{t-j}}{\sqrt t} \le\frac{\alpha}{(1-\beta_1)(1-\gamma)\sqrt{1-\beta_2}}\sum_i\sum_{j=1}^T\frac{|g_{j,i}|}{\sqrt j}.$$ This is the stated inequality. [F4, F6, step 2.1, step 3.1, given, algebra] ∎

