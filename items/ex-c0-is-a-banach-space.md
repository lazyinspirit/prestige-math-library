---
id: ex-c0-is-a-banach-space
kind: example
title: "$c_0$ is Banach for the supremum norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-ell-infinity-is-a-banach-space,
       lem-closed-subspace-of-a-banach-space-is-banach]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-27
---

## Example

Let
$$c_0:=\{x=(x_n)_{n\ge 0}\in \ell^\infty : x_n\to 0\}.$$
With the supremum norm inherited from $\ell^\infty$, the space $c_0$ is Banach.

## Facts & Assumptions

**Given:** An arbitrary $z\in\ell^\infty\setminus c_0$.

[L1] The space $\ell^\infty$ is Banach for the supremum norm ([[ex-ell-infinity-is-a-banach-space]]).

[L2] A closed subspace of a Banach space is Banach ([[lem-closed-subspace-of-a-banach-space-is-banach]]).

## Verification

**Proof technique:** direct.

1.1 Since $z_n$ does not tend to zero, there is $\varepsilon>0$ such that for every $N$ some $n\ge N$ satisfies $|z_n|\ge\varepsilon$. [given, algebra]

2.1 For any $y\in c_0$, choose $N$ so that $|y_n|<\varepsilon/2$ for all $n\ge N$, and then choose $n\ge N$ as in step 1.1. Thus $\|z-y\|_\infty\ge |z_n|-|y_n|\ge\varepsilon/2$. The open ball of radius $\varepsilon/2$ about $z$ misses $c_0$, so $c_0$ is closed. [step 1.1, choose, algebra]

3.1 The limit laws for scalar sequences make $c_0$ a linear subspace of $\ell^\infty$. Since it is closed by step 2.1 and $\ell^\infty$ is Banach by [L1], [L2] makes $c_0$ Banach. [step 2.1, L1, L2, algebra] ∎
