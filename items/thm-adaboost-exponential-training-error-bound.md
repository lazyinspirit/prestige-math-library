---
id: thm-adaboost-exponential-training-error-bound
kind: theorem
title: "AdaBoost's exponential training-loss and nonpositive-margin bound"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
dependency_level: 1
deps:
  - alg-adaboost-m1
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., 12th printing'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'Robert E. Schapire, "The Boosting Approach to Machine Learning: An Overview," MSRI Workshop on Nonlinear Estimation and Classification, 2002'
      url: 'https://people.csail.mit.edu/dsontag/courses/ml12/notes/schapire_boosting_tutorial.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Let $M\ge0$ be a finite sequence of completed rounds of finite-sample AdaBoost.M1, with weighted errors $0<e_m<1/2$, scores $F_M(x)=\sum_{m=1}^M a_mh_m(x)$, and $Z_m=2\sqrt{e_m(1-e_m)}$. Then

$$\sum_{i=1}^N e^{-y_iF_M(x_i)}=N\prod_{m=1}^M Z_m$$

and

$$\frac1N\sum_{i=1}^N\mathbf 1\{y_iF_M(x_i)\le0\}\le\prod_{m=1}^M Z_m.$$

The empty product for $M=0$ is $1$. Under the algorithm's $+1$ tie rule, the empirical classification error is also at most this product. This is a finite training-margin bound only and makes no test-generalization claim.

## Statement references

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, 2nd ed., §10.4, equations (10.8)–(10.15), printed pp. 343–344](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Robert E. Schapire, “The Boosting Approach to Machine Learning: An Overview,” §3, equations (2)–(6), PDF pp. 4–5](https://people.csail.mit.edu/dsontag/courses/ml12/notes/schapire_boosting_tutorial.pdf)

## Facts & Assumptions

**Given:** A fixed finite binary-labeled sample and a finite sequence of completed rounds with $0<e_m<1/2$.

[F1] [[alg-adaboost-m1]]: The initialization is $w_i^{(1)}=1/N$ and $F_0=0$.

[F2] [[alg-adaboost-m1]]: The weighted error is $e_m=\sum_{i=1}^N w_i^{(m)}\mathbf 1\{h_m(x_i)\ne y_i\}$.

[F3] [[alg-adaboost-m1]]: For $0<e_m<1/2$, $a_m=\frac12\log\frac{1-e_m}{e_m}$ and $Z_m=2\sqrt{e_m(1-e_m)}$.

[F4] [[alg-adaboost-m1]]: The update is $w_i^{(m+1)}=w_i^{(m)}\exp(-a_my_ih_m(x_i))/Z_m$ and $F_m(x)=F_{m-1}(x)+a_mh_m(x)$.

[F5] [[alg-adaboost-m1]]: The classifier uses $\operatorname{sign}_+(u)=+1$ for $u\ge0$ and $-1$ for $u<0$, so ties are assigned to $+1$.

## Proof

1.1 The initial weights sum to $1$ by [F1]. Inductively assume the weights at round $m$ sum to $1$; by [F2], the total weights on correct and incorrect examples are $1-e_m$ and $e_m$. For a temporary coefficient $a\ge0$, the exponential reweighting sum is $q_m(a)=(1-e_m)e^{-a}+e_me^a$. Its second derivative is positive, and $q_m'(a)=e_me^a-(1-e_m)e^{-a}$ vanishes uniquely at $a=\frac12\log((1-e_m)/e_m)>0$, which equals the algorithm's coefficient by [F3]. Substitution gives $q_m(a_m)=2\sqrt{e_m(1-e_m)}=Z_m$. By [F4], the next weights divide the reweighted terms by this exact sum, so they also sum to $1$. Induction proves normalization at every round and the stated minimization formula. [given, F1, F2, F3, F4, algebra, induction]

2.1 Put $S_m=\sum_i e^{-y_iF_m(x_i)}$. By [F1], $S_0=N$ and $w_i^{(1)}=e^{-y_iF_0(x_i)}/S_0$. If $w_i^{(m)}=e^{-y_iF_{m-1}(x_i)}/S_{m-1}$, then [F4] gives $w_i^{(m+1)}=e^{-y_iF_m(x_i)}/(S_{m-1}Z_m)$. Step 1.1 establishes that the weights normalize, so the update denominator is the sum of the reweighted terms and $S_m=S_{m-1}Z_m$. Induction yields $S_M=N\prod_{m=1}^M Z_m$. [F1, F4, step 1.1, induction, algebra]

3.1 If $y_iF_M(x_i)\le0$, then $e^{-y_iF_M(x_i)}\ge1$; if the margin is positive, its indicator is zero. Hence each nonpositive-margin indicator is at most its exponential term, and summing and applying step 2.1 proves the stated bound. By [F5], a misclassified positive-label example has negative margin and a misclassified negative-label example has nonpositive margin, so training error is no larger than the bounded nonpositive-margin fraction. [F5, step 2.1, algebra] ∎
