---
id: alg-cyclic-perceptron
kind: algorithm
title: The cyclic perceptron update procedure
status: draft
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
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Definition

Input a finite ordered sample $((x_i,y_i))_{i=1}^n$ with $n\ge1$, $x_i\in\mathbb R^d$, and $y_i\in\{-1,+1\}$. Put $\widetilde x_i=(x_i,1)\in\mathbb R^{d+1}$ and initialize $w=0$. In each pass, visit $i=1,\ldots,n$ in the fixed order. Whenever $y_iw^T\widetilde x_i\le0$, replace $w$ by $w+y_i\widetilde x_i$ and count one update. After a full pass with no updates, stop and return $w$. The associated classifier returns $+1$ when $w^T(x,1)>0$ and $-1$ when $w^T(x,1)\le0$, so a score tie is assigned to $-1$. The procedure has no iteration limit; if its stop condition never holds, it continues with further passes.

## Definition references

[Hastie, Tibshirani, and Friedman, ESL, §4.5.1, update (4.44)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §2.2](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)
