---
id: thm-the-standard-flat-function-is-smooth-and-flat-at-zero
kind: theorem
title: "The standard flat function is smooth and flat at zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-standard-flat-function, lem-exponential-decay-dominates-every-inverse-power, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

The standard flat function $\beta$ is smooth on $\mathbb R$, and $\beta^{(n)}(0)=0$ for every $n\in\mathbb N_0$.

## Facts & Assumptions

**Given:** The standard flat function $\beta$.

[F1] The standard flat function is $0$ on $(-\infty,0]$ and is $\exp(-1/t)$ on $(0,\infty)$ ([[def-the-standard-flat-function]]).

[L1] For every $m\in\mathbb N$, one has $\beta(t)/t^m\to 0$ as $t\to 0^+$ ([[lem-exponential-decay-dominates-every-inverse-power]]).

[L2] The derivative of $\exp$ is $\exp$, and one-variable derivatives satisfy the chain rule and algebra rules ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[A1] For each $n\in\mathbb N_0$ there is a polynomial $P_n$ such that $\beta^{(n)}(t)=P_n(1/t)\exp(-1/t)$ for every $t>0$.

## Proof

**Proof technique:** direct.

1.1 Repeatedly applying [L2] on $(0,\infty)$ proves [A1] by a routine induction on $n$. [L2, given]

2.1 For each $n$, both $\beta^{(n)}(t)$ and $\beta^{(n)}(t)/t$ are finite linear combinations of terms $\beta(t)/t^m$, so both tend to $0$ as $t\to 0^+$ by [L1] and step 1.1. [L1, step 1.1, A1]

3.1 We prove recursively that $\beta$ is $C^n$, that $\beta^{(n)}$ vanishes on $(-\infty,0]$, and that $\beta^{(n)}(0)=0$. The case $n=0$ is [F1]. If the claim holds for $n$, then the left derivative of $\beta^{(n)}$ at $0$ is $0$ because $\beta^{(n)}$ is zero on $(-\infty,0]$, and the right derivative is $\lim_{t\to 0^+}\beta^{(n)}(t)/t=0$ by step 2.1. Thus $\beta^{(n+1)}(0)$ exists and equals $0$, and step 2.1 also gives continuity at $0$. [F1, step 2.1]

4.1 Hence $\beta$ is smooth on $\mathbb R$ and all of its derivatives vanish at $0$. [step 3.1] ∎
