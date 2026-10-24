---
id: lem-binary-zero-one-risk-excess-with-zero-tie
kind: lemma
title: "Binary zero-one excess risk with a zero-score error convention"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-classification-calibration-of-a-surrogate
  - def-population-and-empirical-risk
  - lem-finite-label-conditional-probability-function
  - def-measurable-function-between-measurable-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 4, Section 4.7, Lemma 4.5, printed pp. 74–75 (PDF pp. 91–92)"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

For a binary supervised problem with the full power-set sigma-algebra on $Y\in\{-1,+1\}$, conditional positive-label probability $\eta$, and any measurable real-valued score $h$, use $R_{01}(h)=P(Yh(X)\le0)$ and $R_{01}^*=\mathbb E\min\{\eta(X),1-\eta(X)\}$. Then
$$R_{01}(h)-R_{01}^*=2\mathbb E\!\left[\left|\eta(X)-\tfrac12\right|\mathbf1_{\{h(X)(\eta(X)-\tfrac12)\le0\}}\right]+\mathbb E\!\left[\min\{\eta(X),1-\eta(X)\}\mathbf1_{\{h(X)=0\}}\right].$$

## Statement references

[[def-classification-calibration-of-a-surrogate]]: fixes $\eta$, $R_{01}$, and $R_{01}^*$, including the zero-score-is-error convention.

[Mohri et al., Lemma 4.5, printed pp. 74–75 (PDF pp. 91–92)](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): the source predicts $+1$ at zero, and its displayed equality overcounts when $h(x)=0$ and $\eta(x)>1/2$; the corrected zero-score-is-error identity above is proved here.

## Facts & Assumptions

**Given:** A binary supervised problem, its conditional probability function $\eta$, and a measurable real-valued score $h$.

[F1] For every measurable feature event $\{X\in A\}$, $P(Y=+1,X\in A)=\mathbb E[\eta(X)\mathbf1_{\{X\in A\}}]$. [[lem-finite-label-conditional-probability-function]]

[F2] $R_{01}(h)$ is the population risk of the indicator loss $\mathbf1_{\{yh\le0\}}$, and $R_{01}^*=\mathbb E\min(\eta,1-\eta)$. [[def-population-and-empirical-risk]] [[def-classification-calibration-of-a-surrogate]]

[F3] A measurable real-valued function has measurable preimages of Borel intervals, including its sign sets and the threshold set $\{\eta\ge1/2\}$. [[def-measurable-function-between-measurable-spaces]]

## Proof

1.1 Put $A_- = \{x:h(x)\le0\}$ and $A_+ = \{x:h(x)\ge0\}$, which are measurable by [F3]. The event $\{Yh(X)\le0\}$ is the disjoint union of $\{Y=+1,X\in A_-\}$ and $\{Y=-1,X\in A_+\}$. Applying [F1] to $A_-$ and using $P(X\in A_+,Y=-1)=P(X\in A_+)-P(X\in A_+,Y=+1)$ gives $R_{01}(h)=\mathbb E[\eta(X)\mathbf1_{A_-}(X)+(1-\eta(X))\mathbf1_{A_+}(X)].$ Subtracting [F2]'s Bayes-risk integrand reduces the identity to a pointwise comparison for each $x$. [F1, F2, F3, given, algebra]

2.1 Fix $x$ and abbreviate $a=\eta(x)$. If $a>1/2$, then on $h(x)>0$ the conditional risk is $1-a$ and the excess is zero; on $h(x)<0$ it is $a$, so the excess is $2a-1=2|a-1/2|$; on $h(x)=0$ it is $1$, so the excess is $a=(2a-1)+(1-a)$. If $a<1/2$, the same three cases $h(x)<0$, $h(x)>0$, and $h(x)=0$ give excesses $0$, $1-2a=2|a-1/2|$, and $1-a=(1-2a)+a$, respectively. If $a=1/2$, every nonzero score has excess zero and a zero score has excess $1/2$. In each case the excess equals $2|a-1/2|\mathbf1_{\{h(x)(a-1/2)\le0\}}+\min(a,1-a)\mathbf1_{\{h(x)=0\}}$. [step 1.1, F2, algebra]

3.1 Integrating the pointwise equality in step 2.1 and using step 1.1 proves the displayed risk identity. [step 1.1, step 2.1, algebra]

4.1 The right side of the identity is nonnegative, so every measurable score has risk at least $R_{01}^*$. Define $h_B(x)=+1$ when $\eta(x)\ge1/2$ and $h_B(x)=-1$ otherwise. Its two level sets are measurable by [F3]; at each $x$, its conditional zero-one risk is $\min\{\eta(x),1-\eta(x)\}$, including equality at $\eta=1/2$. Thus $R_{01}(h_B)=R_{01}^*$, verifying that the stated Bayes risk is the attained infimum. [F1, F2, F3, step 3.1, algebra] ∎
