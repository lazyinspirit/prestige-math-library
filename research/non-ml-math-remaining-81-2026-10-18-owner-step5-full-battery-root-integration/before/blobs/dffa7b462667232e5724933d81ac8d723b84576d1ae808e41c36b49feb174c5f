---
id: lem-discrete-memoryless-channel-block-kernels-are-stochastic
kind: lemma
title: "The DMC product laws are stochastic kernels"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-discrete-memoryless-channel, def-finite-stochastic-kernel]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only finite products and finite sums occur."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.1, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

For a finite DMC $W$ and every $n\ge1$, the block formula $W^n(y^n\mid x^n)=\prod_{i=1}^n W(y_i\mid x_i)$ is a stochastic kernel from $\mathcal X^n$ to $\mathcal Y^n$.

## Facts & Assumptions

**Given:** A finite DMC $W$ with finite nonempty alphabets and an integer $n\ge1$.

[F1] [[def-discrete-memoryless-channel]]: the block values are $W^n(y^n\mid x^n)=\prod_{i=1}^nW(y_i\mid x_i)$.

[F2] [[def-finite-stochastic-kernel]]: every entry of $W$ is nonnegative and $\sum_{y\in\mathcal Y}W(y\mid x)=1$ for each input $x$.

## Proof

1.1 Fix $x^n\in\mathcal X^n$. By [F1] and [F2], each product $W^n(y^n\mid x^n)$ is nonnegative. [F1, F2, given]

2.1 Summing over the finite product alphabet and factoring the finite sum gives $\sum_{y^n\in\mathcal Y^n}W^n(y^n\mid x^n)=\prod_{i=1}^n(\sum_{y_i\in\mathcal Y}W(y_i\mid x_i))=\prod_{i=1}^n1=1$. Together with step 1.1, these are exactly the stochastic-kernel conditions. [F1, F2, step 1.1, algebra] ∎
