---
id: ex-collinear-fixed-design-estimability
kind: example
title: "Collinear predictors can leave a contrast estimable"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-fixed-design-linear-regression-model
  - def-least-squares-solution-set
  - thm-least-squares-fitted-vector-and-solution-set
  - def-linear-estimability-in-fixed-design
  - thm-linear-estimability-iff-row-space
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

Take the two-observation design and response
$$X=\begin{pmatrix}1&1\\1&1\end{pmatrix},\qquad y=\begin{pmatrix}1\\3\end{pmatrix}.$$
Both columns of $X$ are identical. The least-squares fit is unique, but the
coefficient pair is not. The contrast $\beta_1+\beta_2$ is linearly estimable;
neither $\beta_1$ nor $\beta_2$ is.

## Facts & Assumptions

**Given:** A fixed-design first-moment regression with $X$ and observed vector
$y$ as in the Example.

[F1] Every least-squares solution has fitted vector $P_{\operatorname{col}(X)}y$
and residual $y-P_{\operatorname{col}(X)}y$; its coefficient solution set is
one translate of $\ker X$.
[[thm-least-squares-fitted-vector-and-solution-set]].

[F2] A contrast $c^T\beta$ is linearly estimable exactly when
$c\in\operatorname{row}(X)=\operatorname{im}(X^T)$.
[[thm-linear-estimability-iff-row-space]].

## Verification

**Proof technique:** direct.

**Given:** The matrix $X$ and response $y$ displayed above.

1.1 For $b=(b_1,b_2)^T$, put $s=b_1+b_2$. Then $Xb=(s,s)^T$, and the squared residual is $(1-s)^2+(3-s)^2=2(s-2)^2+2.$ It is minimized exactly when $s=2$. Thus the full coefficient solution set is $(1,1)^T+t(1,-1)^T$ for $t\in\mathbb R$, its fitted vector is $(2,2)^T$, and its residual is $(-1,1)^T$, in agreement with [F1]. [given, F1, algebra]

2.1 The row space of $X$ is $\operatorname{span}\{(1,1)^T\}$. Hence $c=(1,1)^T$ is in the row space and is estimable; indeed $X^T(1/2,1/2)^T=(1,1)^T$, so $(Y_1+Y_2)/2$ estimates $\beta_1+\beta_2$ unbiasedly. The vector $(1,0)^T$ is not in that row space, since every vector $X^Ta$ has equal coordinates. Therefore neither single coefficient is linearly estimable by [F2]. [F2, algebra] ∎

## Remarks

The finite check verifies this stated witness: for the two-column design
$X=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $v=(1,-1)^T$, $Xv=0$, the Gram
matrix $X^TX/2$ differs from $I_2$, and $v_1\ne0$. This check illustrates the
rank-deficient direction; the algebraic proof above supplies the general
interpretation.
