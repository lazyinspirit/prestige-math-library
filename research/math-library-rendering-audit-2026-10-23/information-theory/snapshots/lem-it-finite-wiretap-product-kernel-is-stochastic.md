---
id: lem-it-finite-wiretap-product-kernel-is-stochastic
kind: lemma
title: "The finite wiretap product law is stochastic"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-finite-stochastic-kernel]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only finite products and sums occur."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF p. 23-8: the joint finite DMC law p(y,z|x)."
---

## Statement

Use one-based coordinate labels for blocks: for $a^n\in\mathcal A^n$, a function on $\{0,\ldots,n-1\}$, write $a_i:=a^n(i-1)$ for $1\le i\le n$.

For finite nonempty alphabets $\mathcal X,\mathcal Y,\mathcal Z$, a stochastic kernel $W(y,z\mid x)$ from $\mathcal X$ to $\mathcal Y\times\mathcal Z$, and every $n\ge1$, the block formula

$$W^n(y^n,z^n\mid x^n):=\prod_{i=1}^nW(y_i,z_i\mid x_i)$$

is a stochastic kernel from $\mathcal X^n$ to $(\mathcal Y\times\mathcal Z)^n$.

## Facts & Assumptions

**Given:** A finite stochastic kernel $W(y,z\mid x)$ between the finite nonempty alphabets above and an integer $n\ge1$.

[F1] [[def-finite-stochastic-kernel]]: a finite stochastic kernel has nonnegative entries and each input row sums to one.

## Proof

1.1 Fix $x^n\in\mathcal X^n$. Every factor $W(y_i,z_i\mid x_i)$ is nonnegative by [F1], so every product $W^n(y^n,z^n\mid x^n)$ is nonnegative. [given, F1]

2.1 Finite distributivity factors the output sum as $\sum_{y^n,z^n}W^n(y^n,z^n\mid x^n)=\prod_{i=1}^n\left(\sum_{y_i,z_i}W(y_i,z_i\mid x_i)\right)=\prod_{i=1}^n1=1.$ The row sums are one by [F1]; together with step 1.1 these are exactly the stochastic-kernel conditions. [F1, step 1.1, algebra] ∎
