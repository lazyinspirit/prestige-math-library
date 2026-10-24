---
id: cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field
kind: corollary
title: "Over an algebraically closed field, maximal ideals of an affine algebra are kernels of points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-quotient-is-field-iff-ideal-maximal, lem-affine-algebra-points-as-k-algebra-maps, cor-weak-nullstellensatz-algebraically-closed-coordinate-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Remark 13.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be an algebraically closed field and let $A$ be an affine $k$-algebra.
Then every maximal ideal of $A$ is the kernel of a $k$-algebra map $A\to k$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and an affine $k$-algebra $A$.

[L1] Every affine $k$-algebra admits a presentation $A\cong k[x_1,\ldots,x_n]/I$ for some ideal $I$.

[L2] Maximal ideals of a quotient correspond to maximal ideals upstairs that contain the defining ideal ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L3] Over an algebraically closed field, maximal ideals of the polynomial ring are evaluation ideals ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[L4] $k$-points of a quotient algebra are exactly its $k$-algebra maps to $k$ ([[lem-affine-algebra-points-as-k-algebra-maps]]).

## Proof

**Proof technique:** direct.

1.1 Choose a presentation $A\cong k[x_1,\ldots,x_n]/I$ as in [L1], and let $\mathfrak m$ be a maximal ideal of $A$. Its inverse image in the polynomial ring is a maximal ideal $\mathfrak M$ containing $I$. [L1, L2, given, choose]

2.1 By [L3], there exists $a\in k^n$ with $\mathfrak M=(x_1-a_1,\ldots,x_n-a_n)$. Since $I\subseteq \mathfrak M$, the point $a$ annihilates every element of $I$. Therefore [L4] gives a $k$-algebra map $A\to k$ corresponding to $a$, and its kernel is exactly $\mathfrak m$. [L3, L4, step 1.1]

3.1 Hence every maximal ideal of $A$ is the kernel of a $k$-point. [step 2.1] ∎
