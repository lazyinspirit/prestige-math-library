---
id: thm-eventown
kind: theorem
title: "Eventown: distinct $A_1,\\dots,A_m\\subseteq[n]$ with every $\\lvert A_i\\rvert$ and every $\\lvert A_i\\cap A_j\\rvert$ even satisfy $m\\le 2^{\\lfloor n/2\\rfloor}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-oddtown, lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size, lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form, lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field, def-linear-combination-and-span, def-linear-subspace, thm-z-mod-p-is-a-field, def-set-family-and-its-incidence-matrix, def-standard-bilinear-form-on-a-coordinate-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.2"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "O. Pikhurko, An Introduction to Combinatorics, §4.2"
      url: "https://people.maths.ox.ac.uk/keevash/eac/notes.pdf"
pipeline_run: null
---

## Statement

Let $A_1,\dots,A_m$ be distinct subsets of $[n]$. If every $\lvert A_i\rvert$ is
even and every intersection $\lvert A_i\cap A_j\rvert$ with $i\ne j$ is even,
then

$$m\le2^{\lfloor n/2\rfloor}.$$

## Facts & Assumptions

**Given:** distinct subsets $A_1,\dots,A_m\subseteq[n]$ with every $\lvert A_i\rvert$ even and every $\lvert A_i\cap A_j\rvert$ even for $i\ne j$.

[L1] Over $\mathbb{F}_2$, the standard-form values of all the incidence vectors $v_{A_i}$ vanish against one another and against themselves ([[lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size]]).

[L2] For a subspace $U\le\mathbb{F}_2^n$, one has $\dim U^\perp=n-\dim U$ ([[lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form]]).

[L3] A $d$-dimensional vector space over $\mathbb{F}_2$ has $2^d$ elements ([[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]]).

## Proof

**Proof technique:** direct.

1.1 Work over $\mathbb{F}_2$, and let $U$ be the span of the incidence vectors $v_{A_1},\dots,v_{A_m}$. By [L1], every pairing $\langle v_{A_i},v_{A_j}\rangle$ is $0$. [L1, given]

2.1 Bilinearity then gives $\langle u,u'\rangle=0$ for all $u,u'\in U$, so $U\subseteq U^\perp$. [step 1.1]

3.1 Writing $d=\dim U$, the inclusion of step 2.1 and [L2] give $d\le n-d$. Hence $2d\le n$, so $d\le\lfloor n/2\rfloor$. [L2, step 2.1]

4.1 The $m$ distinct incidence vectors lie in $U$, so $m\le\lvert U\rvert$. By [L3], $\lvert U\rvert=2^d\le2^{\lfloor n/2\rfloor}$, and therefore $m\le2^{\lfloor n/2\rfloor}$. [L3, step 3.1] ∎

## Remarks

- The floor enters only because $d$ is an integer and $2d\le n$. The proof is otherwise the same in both parities of $n$.
