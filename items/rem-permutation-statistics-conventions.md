---
id: rem-permutation-statistics-conventions
kind: remark
title: "This page uses the published inversion number and the shifted Eulerian indexing $A(n,k)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-inversions-inversion-number-and-sign, def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

This page keeps the published inversion convention of
[[def-inversions-inversion-number-and-sign]] exactly as written: permutations act
on $n=\{0,1,\dots,n-1\}$, and an inversion is a pair $(i,j)$ with $i<j<n$ and
$\sigma(i)>\sigma(j)$. Nothing here reverses that orientation or silently shifts
to a $1,\dots,n$ indexing set.

The same zero-based convention is used for descents and excedances, but the
**major index** is still the classical sum of descent positions counted from
$1$. Thus a descent at the zero-based position $i$ contributes $i+1$ to
$\operatorname{maj}(\sigma)$.

The Eulerian number $A(n,k)$ counts permutations of $S_n$ with exactly $k$
descents, so $k$ ranges from $0$ to $n-1$ when $n \ge 1$. We also set
$A(0,0)=1$, and the Eulerian polynomial is
$A_n(t)=\sum_{k=0}^{n-1}A(n,k)t^k$ for $n\ge1$ with $A_0(t)=1$.
