---
id: lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring
kind: lemma
title: "A polynomial vanishing at every tuple from an infinite subdomain is the zero polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multivariate-polynomial-ring-by-iteration, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, thm-root-bound-for-polynomials-over-a-domain, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Lemma 8.21"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 5.19"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $S$ be an integral domain, let $R\subseteq S$ be a subring whose underlying
set is infinite, let $m\ge1$, and let $f\in S[x_1,\dots,x_m]$
([[def-multivariate-polynomial-ring-by-iteration]]). If

$$f(a_1,\dots,a_m)=0\qquad\text{for all }a_1,\dots,a_m\in R,$$

then $f=0$ in $S[x_1,\dots,x_m]$.

Here $f(a_1,\dots,a_m)$ is the iterated evaluation of
[[def-polynomial-evaluation-and-root]], carried out one indeterminate at a time
along the construction of $S[x_1,\dots,x_m]$.

## Facts & Assumptions

**Given:** An integral domain $S$, an infinite subring $R\subseteq S$, and the polynomial rings $S[x_1,\dots,x_m]$ built by iteration ([[def-multivariate-polynomial-ring-by-iteration]]).

[L1] A nonzero polynomial $g\in D[x]$ of degree $k$ over an integral domain $D$ has at most $k$ distinct roots in $D$ ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L2] If $R$ is an integral domain, then $R[x_1,\dots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$ ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[L3] A nonzero $g=\sum_i a_ix^i$ has a largest index with $a_i\ne0$, its degree; the zero polynomial has no degree ([[def-polynomial-degree-leading-coefficient-and-monic]]).

## Proof

**Proof technique:** induction.

1.1 Base case $m=1$: let $g\in S[x]$ vanish at every element of $R$. If $g\ne0$ it has a degree $k$ by [L3], so by [L1] it has at most $k$ distinct roots in $S$; but every one of the infinitely many elements of $R\subseteq S$ is a root, and an infinite set has more than $k$ elements. Hence $g=0$. [L1, L3, base]

1.2 Inductive hypothesis: fix $m\ge1$ and assume that every $g\in S[x_1,\dots,x_m]$ vanishing at all tuples from $R$ is zero. [ih]

2.1 Let $f\in S[x_1,\dots,x_{m+1}]=S[x_1,\dots,x_m][x_{m+1}]$ vanish at every tuple from $R$, and write $f=\sum_{j\le k}g_jx_{m+1}^{\,j}$ with $g_j\in S[x_1,\dots,x_m]$. Fix $a=(a_1,\dots,a_m)\in R^{m}$; then $\sum_{j\le k}g_j(a)\,x_{m+1}^{\,j}$ is an element of $S[x_{m+1}]$ vanishing at every element of $R$, so it is zero by step 1.1, and therefore $g_j(a)=0$ for every $j\le k$. [step 1.1, L2, given]

3.1 Since $a\in R^{m}$ was arbitrary, each $g_j$ vanishes at every tuple from $R$, so $g_j=0$ by step 1.2 and hence $f=0$. This completes the induction, and the statement holds for every $m\ge1$. [step 1.2, step 2.1, discharge-induction] ∎

## Remarks

- **Infinite, not merely large.** The hypothesis cannot be weakened to a finite $R$ of any size: over $R=S=\mathbb F_q$ the nonzero polynomial $x^{q}-x$ vanishes at every element, and in $m$ indeterminates so does $x_1^{q}-x_1$. This is exactly why the normal basis theorem needs a separate argument over a finite base field ([[thm-normal-basis-theorem-for-a-cyclic-extension]]).
