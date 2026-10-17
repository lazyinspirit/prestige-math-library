---
id: lem-higher-order-rolle
kind: lemma
title: "Higher-order Rolle theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-higher-derivatives-and-smoothness, thm-rolle, cor-differentiable-implies-continuous, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "University of Florida note, Generalized Rolle's theorem"
      url: "https://people.clas.ufl.edu/bruceedwards/files/GeneralRolle.pdf"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$ with $n\ge1$, let $x_0<\cdots<x_n$, and let $f$ be continuous on $[x_0,x_n]$ and $n$-times differentiable on $(x_0,x_n)$. If $f(x_j)=0$ for every $j\le n$, then some $c\in(x_0,x_n)$ satisfies $f^{(n)}(c)=0$.

## Facts & Assumptions

**Given:** The ordered zeros and the stated regularity.

[L1] Rolle's theorem produces a zero of $h'$ between two zeros of a continuous, interior-differentiable function $h$ ([[thm-rolle]]).

[L2] Differentiability at a point implies continuity there ([[cor-differentiable-implies-continuous]]), and induction applies to natural numbers ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $n=1$, Rolle's theorem on $[x_0,x_1]$ gives $c\in(x_0,x_1)$ with $f'(c)=0$. [base, L1]

1.2 For $n\ge2$, apply Rolle on each $[x_{j-1},x_j]$ to obtain $y_j\in(x_{j-1},x_j)$ with $f'(y_j)=0$, so $y_1<\cdots<y_n$. [given, L1, choose]

2.1 The function $f'$ is continuous on $[y_1,y_n]$, because those points lie in $(x_0,x_n)$ and the existence of $f''$ gives continuity there; it is $(n-1)$-times differentiable on $(y_1,y_n)$. Apply the induction hypothesis of order $n-1$ to $f'$ and the $n$ ordered zeros $y_1,\ldots,y_n$. This gives $c\in(y_1,y_n)\subset(x_0,x_n)$ with $(f')^{(n-1)}(c)=f^{(n)}(c)=0$. [step 1.2, L2, ih]

3.1 The claim follows for every $n\ge1$. [step 1.1, step 2.1, L2, discharge-induction] ∎
