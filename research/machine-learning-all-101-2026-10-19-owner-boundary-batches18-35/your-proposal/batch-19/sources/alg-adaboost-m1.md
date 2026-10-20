---
id: alg-adaboost-m1
kind: algorithm
title: "Finite-sample AdaBoost.M1 with half-log coefficients"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
dependency_level: 0
deps: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., 12th printing'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
    - title: 'Robert E. Schapire, "The Boosting Approach to Machine Learning: An Overview," MSRI Workshop on Nonlinear Estimation and Classification, 2002'
      url: 'https://people.csail.mit.edu/dsontag/courses/ml12/notes/schapire_boosting_tutorial.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Definition

Fix a finite training sample $(x_i,y_i)_{i=1}^N$ with $N\ge1$, $x_i\in\mathcal X$, and $y_i\in\{-1,+1\}$, a finite round limit $M\ge0$, and a weak-learning routine which at each requested round returns a classifier $h_m:\mathcal X\to\{-1,+1\}$ for the current observation weights. Initialize $w_i^{(1)}=1/N$ and $F_0(x)=0$. At round $m$, compute the weighted error $e_m=\sum_{i=1}^N w_i^{(m)}\mathbf 1\{h_m(x_i)\ne y_i\}$. If $e_m=0$, halt and return $h_m$ itself as a perfect classifier with zero training error; do not form an infinite coefficient. If $e_m\ge1/2$, halt and report that the weak-learning condition failed. For $0<e_m<1/2$, set

$$a_m=\frac12\log\frac{1-e_m}{e_m},\qquad Z_m=2\sqrt{e_m(1-e_m)},$$

update $w_i^{(m+1)}=w_i^{(m)}\exp(-a_my_ih_m(x_i))/Z_m$, and set $F_m(x)=F_{m-1}(x)+a_mh_m(x)$. After $M$ completed weak rounds, return the classifier $\widehat y_M(x)=\operatorname{sign}_+(F_M(x))$, where $\operatorname{sign}_+(u)=+1$ for $u\ge0$ and $-1$ for $u<0$. Thus ties are assigned to $+1$. The coefficient convention is the half-log convention; multiplying every coefficient by the same positive factor does not change the sign classifier. The definition makes no claim about test error or generalization.

## Definition references

[Trevor Hastie, Robert Tibshirani, and Jerome Friedman, *The Elements of Statistical Learning*, 2nd ed., §10.1, Algorithm 10.1, printed pp. 337–338](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Robert E. Schapire, “The Boosting Approach to Machine Learning: An Overview,” §2, PDF pp. 2–4](https://people.csail.mit.edu/dsontag/courses/ml12/notes/schapire_boosting_tutorial.pdf)
