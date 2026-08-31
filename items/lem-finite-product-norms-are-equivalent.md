---
id: lem-finite-product-norms-are-equivalent
kind: lemma
title: "The standard finite product norms are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-product-norms-on-finitely-many-normed-spaces, def-p-norms-on-rn,
       thm-cauchy-schwarz-and-the-euclidean-norm, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

Let $n\ge 1$ and let $E=\prod_{k<n}E_k$ be a finite product of normed spaces,
equipped with the three standard product norms of
[[def-product-norms-on-finitely-many-normed-spaces]]. Then for every
$x\in E$,
$$\|x\|_{\max}\le \|x\|_2\le \|x\|_1\le n\|x\|_{\max}.$$
Consequently these three norms are equivalent.

## Facts & Assumptions

**Given:** A natural number $n\ge 1$, normed spaces $E_0,\dots,E_{n-1}$, and a point $x=(x_0,\dots,x_{n-1})\in \prod_{k<n}E_k$.

[L1] The three product norms are $\|x\|_{\max}=\max_{k<n}\|x_k\|$, $\|x\|_1=\sum_{k<n}\|x_k\|$, and $\|x\|_2=\bigl(\sum_{k<n}\|x_k\|^2\bigr)^{1/2}$ ([[def-product-norms-on-finitely-many-normed-spaces]]).

[L2] In $\mathbb{R}^n$, the Euclidean norm is bounded above by the $1$-norm, and Cauchy-Schwarz holds ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** direct.

1.1 For each coordinate, $\|x_k\|^2$ is one of the nonnegative summands in $\sum_{j<n}\|x_j\|^2$, so $\|x_k\|\le \|x\|_2$ for every $k$ and therefore $\|x\|_{\max}\le \|x\|_2$. [L1, algebra]

1.2 Applying the scalar inequality $\|(a_k)\|_2\le \|(a_k)\|_1$ from [L2] to the nonnegative real tuple $(\|x_0\|,\dots,\|x_{n-1}\|)$ gives $\|x\|_2\le \|x\|_1$. [L1, L2]

1.3 Since every coordinate norm is at most $\|x\|_{\max}$, summing $n$ such bounds gives $\|x\|_1\le n\|x\|_{\max}$. [L1, algebra]

2.1 The three displayed inequalities of steps 1.1, 1.2, and 1.3 are exactly the comparison constants needed for equivalence of the three norms. [step 1.1, step 1.2, step 1.3] ∎
