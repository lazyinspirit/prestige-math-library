---
id: ex-nonseparable-perceptron-cycles
kind: example
title: Two contradictory labels make the cyclic perceptron repeat a two-pass cycle
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [alg-cyclic-perceptron]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Example

Use the ordered one-dimensional sample $(x_1,y_1)=(0,+1)$, $(x_2,y_2)=(0,-1)$. It is not separable by an affine score because both observations have the same augmented input $(0,1)$ and require opposite strict signs. For the zero-initialized cyclic perceptron, every pass updates on both observations and returns the weight vector to zero, so no no-update pass occurs.

## Example references

[[alg-cyclic-perceptron]]

[Hastie, Tibshirani, and Friedman, ESL, §4.5.1](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §2.2](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)

## Facts & Assumptions

**Given:** The ordered sample and the zero-initialized procedure with augmented input $(x,1)$.

[F1] The procedure updates $w\leftarrow w+y_i(x_i,1)$ whenever $y_iw^T(x_i,1)\le0$, and terminates only after a full pass with no updates. [[alg-cyclic-perceptron]]

## Verification

1.1 Both augmented inputs equal $(0,1)$. Starting at $w_0=(0,0)$, the first observation has margin zero and triggers the update $w_1=(0,1)$. [given, F1, algebra]

2.1 The second observation then has signed margin $(-1)(0,1)^T(0,1)=-1$, so [F1] updates to $w_2=(0,1)-(0,1)=(0,0)$. Thus each pass repeats the initial state and updates twice, so the stop condition never holds. The sample is nonseparable because a single score at the shared input cannot be strictly positive and strictly negative simultaneously. [F1, step 1.1, algebra] ∎
