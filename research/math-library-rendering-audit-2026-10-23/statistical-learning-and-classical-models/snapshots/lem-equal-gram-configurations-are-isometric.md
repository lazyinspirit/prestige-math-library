---
id: lem-equal-gram-configurations-are-isometric
kind: lemma
title: "Finite configurations with equal Gram matrices have isometric linear spans"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-standard-coordinate-inner-products]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $n\ge0$, $x_1,\ldots,x_n\in\mathbb R^d$, and $y_1,\ldots,y_n\in\mathbb R^m$ be finite lists with $\langle x_i,x_j\rangle=\langle y_i,y_j\rangle$ for every $1\le i,j\le n$, using the standard Euclidean inner products. The assignment $\sum_{i=1}^n c_i x_i\mapsto\sum_{i=1}^n c_i y_i$ is a well-defined linear isometry from $\operatorname{span}\{x_i\}$ onto $\operatorname{span}\{y_i\}$; when $n=0$ both spans are zero spaces and the assignment is the unique zero map.

## Statement references

[Hastie, Tibshirani, and Friedman, ESL II, §18.5.2, printed pp. 670–672](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §3, PDF pp. 4–6](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** An integer $n\ge0$ and lists $x_1,\ldots,x_n\in\mathbb R^d$ and $y_1,\ldots,y_n\in\mathbb R^m$ with equal pairwise inner products.

[F1] The standard coordinate pairings on $\mathbb R^d$ and $\mathbb R^m$ are positive-definite inner products, with $\langle u,v\rangle=\sum_k u_kv_k$ ([[prop-standard-coordinate-inner-products]]).

## Proof


1.1 For any coefficients $c_1,\ldots,c_n$, bilinearity and the equal Gram entries give $\|\sum_i c_i x_i\|_2^2=\sum_{i,j}c_ic_j\langle x_i,x_j\rangle=\sum_{i,j}c_ic_j\langle y_i,y_j\rangle=\|\sum_i c_i y_i\|_2^2$. If $\sum_i c_i x_i=0$, the left side is zero, so [F1] implies $\sum_i c_i y_i=0$. Applying this to the difference of two coefficient representations shows that the assignment in the statement is well defined. [given, F1, algebra]

2.1 For coefficient lists $c,d$, the same bilinear expansion gives $\left\langle\sum_i c_ix_i,\sum_jd_jx_j\right\rangle=\sum_{i,j}c_id_j\langle x_i,x_j\rangle=\sum_{i,j}c_id_j\langle y_i,y_j\rangle=\left\langle\sum_i c_iy_i,\sum_jd_jy_j\right\rangle$. The coefficient formula is linear, and its range contains every $y_i$ because it maps $x_i$ to $y_i$; hence its range is exactly their span and it preserves inner products. If $n=0$, both spans are zero spaces and this is their unique zero map. Thus in every case the assignment is an onto linear isometry. [step 1.1, F1, algebra] ∎
