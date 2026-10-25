---
id: def-linear-separable-margin-and-hard-margin-svm
kind: definition
title: "Bias-free linear margins and the hard-margin SVM"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Soudry, Elad Hoffer, Mor Shpigel Nacson, Suriya Gunasekar, and Nathan Srebro, The Implicit Bias of Gradient Descent on Separable Data, equations (1) and (4)"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §10.1"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Definition

A finite binary sample is a list $(x_i,y_i)_{i=1}^n$ with $n\ge1$ and $d\ge1$, features $x_i\in\mathbb R^d$, and labels $y_i\in\{-1,+1\}$. The bias-free linear score with parameter $w\in\mathbb R^d$ is $x\mapsto\langle w,x\rangle$, and its signed margin on example $i$ is $m_i(w):=y_i\langle w,x_i\rangle$. The sample is **strictly linearly separable** if there exists $u\in\mathbb R^d$ with $\min_{1\le i\le n}m_i(u)>0$. Its **hard-margin feasible set** is $\mathcal F:=\{w\in\mathbb R^d:m_i(w)\ge1\text{ for all }i\}$, and its **hard-margin problem** is minimizing $\frac12\|w\|_2^2$ over $\mathcal F$. No intercept or bias term is present in this score or objective.

## Definition references

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, equations (1) and (4)](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §10.1](https://mjt.cs.illinois.edu/dlt/)
