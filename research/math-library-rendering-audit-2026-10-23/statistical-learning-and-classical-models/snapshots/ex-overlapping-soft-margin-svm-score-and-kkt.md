---
id: ex-overlapping-soft-margin-svm-score-and-kkt
kind: example
title: Conflicting labels, a soft-margin optimum, and the meaning of its score
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-hard-and-soft-margin-support-vector-machines
  - ex-linear-and-polynomial-kernels
  - thm-soft-margin-svm-dual-and-kkt-conditions
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 12.2.1, printed pp. 420–421; Section 12.3.2, printed pp. 427–428, especially Table 12.1; Section 18.5, printed pp. 668–672, for real-valued SVM predictions.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.4.1, printed pp. 141–144; SVM decision scores and soft margin.'
---

## Example

Take $X=\mathbb R$, $\mathcal H=\mathbb R$, $\phi(x)=x$, and $k(x,z)=xz$. For $C>0$ and the ordered sample $(-1,-1),(1,+1),(1,-1)$, the soft-margin SVM has the optimum $w=0$, $b=-1$, $\xi=(0,2,0)$ with objective $2C$; dual multipliers are $\alpha=(0,C,C)$ and $\mu=(C,0,0)$. Its score is $-1$ at $x=1$, where the sample has one positive and one negative label. Applying the separately specified logistic map $\sigma(t)=(1+e^{-t})^{-1}$ to that score gives $1/(1+e)$, not the empirical positive-label frequency $1/2$. These are finite-sample quantities; the SVM score is not a probability supplied by the SVM optimization.

## Example references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §12.2.1, §12.3.2/Table 12.1, and §18.5](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.4.1](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[[def-hard-and-soft-margin-support-vector-machines]]

[[ex-linear-and-polynomial-kernels]]

[[thm-soft-margin-svm-dual-and-kkt-conditions]]

## Facts & Assumptions

**Given:** The feature map, the ordered sample, $C>0$, and the soft-margin definition.

[F1] The soft-margin constraints and objective are those in the hard- and soft-margin SVM definition ([[def-hard-and-soft-margin-support-vector-machines]]).

[F2] The SVM KKT equations include $w=\sum_i\alpha_i y_i\phi(x_i)$, $\sum_i\alpha_i y_i=0$, $C-\alpha_i-\mu_i=0$, and complementarity for both inequality families ([[thm-soft-margin-svm-dual-and-kkt-conditions]]).

[F3] The feature map $\phi(x)=x$ realizes the positive semidefinite linear kernel $k(x,z)=xz$ ([[ex-linear-and-polynomial-kernels]]).

## Verification




1.1 The feature map in [F3] realizes the stated linear kernel. At $w=0$, $b=-1$, the scores at all three observations equal $-1$. Their signed margins are respectively $1,-1,1$, so $\xi=(0,2,0)$ satisfies every soft-margin constraint, with objective $2C$. [given, F1, F3, construct, algebra]


2.1 For any feasible tuple, let $t=w+b$, the score at $x=1$. The two observations at $x=1$ require $\xi_2\ge\max(0,1-t)$ and $\xi_3\ge\max(0,1+t)$. If $-1\le t\le1$ these lower bounds sum to $2$; if $t>1$, the second is $1+t>2$; and if $t<-1$, the first is $1-t>2$. Thus $\xi_2+\xi_3\ge2$ for every feasible tuple, and its objective is at least $C(\xi_2+\xi_3)\ge2C$. [step 1.1, F1, algebra]


3.1 The candidate in [step 1.1] is therefore globally optimal. For $\alpha=(0,C,C)$ and $\mu=(C,0,0)$, $\sum_i\alpha_i y_i\phi(x_i)=C-C=0=w$, $\sum_i\alpha_i y_i=C-C=0$, and $C-\alpha_i-\mu_i=0$ for all three indices. Each margin constraint is active, so $\alpha_i g_i^{(m)}=0$; also $\mu_i\xi_i=0$ for each $i$. These are the KKT conditions in [F2]. [step 1.1, step 2.1, F1, F2, algebra]


4.1 The dual objective is $\sum_i\alpha_i-\frac12\|\sum_i\alpha_i y_i\phi(x_i)\|^2=2C$, equal to the primal value. The score at $x=1$ is $-1$, while the empirical positive-label frequency among the two observations at $x=1$ is $1/2$. The logistic transform of the score is $(1+e)^{-1}\ne1/2$; the SVM optimization does not assert that this transformed value is a probability. [step 1.1, step 3.1, F2, algebra] ∎

