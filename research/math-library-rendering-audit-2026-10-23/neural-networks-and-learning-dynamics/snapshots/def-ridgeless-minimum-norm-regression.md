---
id: def-ridgeless-minimum-norm-regression
kind: definition
title: Ridgeless minimum-norm least-squares regression
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hastie, Montanari, Rosset, and Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation"
      url: "https://arxiv.org/pdf/1903.08560"
      locator: "Section 2.1, Definition 1 and Proposition 1."
---

## Definition

For positive integers $n,p$, a real design matrix $X\in\mathbb R^{n\times p}$,
and a response vector $y\in\mathbb R^n$, the **ridgeless minimum-norm
least-squares estimator** is

$$\widehat\beta:=X^+y.$$

Equivalently, it is the unique vector of smallest Euclidean norm among all
minimisers of $u\mapsto\|Xu-y\|_2^2$. The word *ridgeless* means that this
least-squares objective has no added positive quadratic penalty
$\lambda\|u\|_2^2$.

## Definition references

[[def-moore-penrose-pseudoinverse]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]

[[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]

[Hastie, Montanari, Rosset, and Tibshirani, §2.1](https://arxiv.org/pdf/1903.08560)

## Facts & Assumptions

**Given:** Positive integers $n,p$, $X\in\mathbb R^{n\times p}$, and
$y\in\mathbb R^n$.

[F1] Every finite real matrix $X\in\mathbb R^{n\times p}$ has a unique
Moore--Penrose pseudoinverse $X^+\in\mathbb R^{p\times n}$ satisfying the four
Penrose equations ([[def-moore-penrose-pseudoinverse]],
[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[F2] For every finite real matrix $X$ and vector $y$, $X^+y$ is the unique
least-squares minimiser of minimum Euclidean norm
([[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]).

## Verification

1.1 By [F1], $X^+$ exists uniquely and has size $p\times n$, so $X^+y$ is a well-defined vector in $\mathbb R^p$. [given, F1]

2.1 By [F2], this vector is exactly the unique minimum-norm least-squares solution, which verifies the equivalent characterization. [given, F2] ∎ 
