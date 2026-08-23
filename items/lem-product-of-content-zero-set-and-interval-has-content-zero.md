---
id: lem-product-of-content-zero-set-and-interval-has-content-zero
kind: lemma
title: 'The product of a content-zero set and a compact interval has content zero'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-null-and-content-zero-in-rn, def-multidimensional-rectangle-and-volume, lem-finite-sum-laws, def-interval, lem-integer-part]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

If $A\subseteq\mathbb R^m$ has content zero and $c\le d$, then $A\times[c,d]$ has content zero in $\mathbb R^{m+1}$.

## Facts & Assumptions

**Given:** A set $A\subseteq\mathbb R^m$ of content zero, a compact interval $[c,d]$, and a real tolerance $\varepsilon>0$.

[F1] A set has content zero when for every positive tolerance it has a finite cover by closed cubes whose total volume is at most that tolerance ([[def-null-and-content-zero-in-rn]]).

[F2] For every real $x$ there is a unique integer $\lfloor x\rfloor$ such that $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$ ([[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 If $A=\varnothing$, the empty family covers $A\times[c,d]$. If $d=c$, use [F1] with tolerance $\min\{\varepsilon,1/2\}$, obtaining a finite cube cover $Q_i$ with side lengths $\ell_i\le1$ and total base volume at most $\varepsilon$; then the cubes $Q_i\times[c,c+\ell_i]$ cover $A\times\{c\}$ and have total $(m+1)$-volume at most the base total. [given, F1, cases]

1.2 Suppose $A\ne\varnothing$ and $L:=d-c>0$. Use [F1] with tolerance $\delta:=\min\{1/2,\varepsilon/(2(L+1))\}$; enlarge any zero-side cubes slightly, using the unused half of this tolerance, so that the resulting finite cover has $0<\ell_i\le1$ and total base volume below $2\delta\le\varepsilon/(L+1)$. For each $i$, let $N_i:=1+\lfloor L/\ell_i\rfloor$. Fact [F2] gives $N_i\ell_i>L$ and $N_i\ell_i\le L+\ell_i$, and the $N_i$ consecutive $(m+1)$-cubes of side $\ell_i$ above $Q_i$ cover $Q_i\times[c,d]$. [given, F1, F2, construct, algebra]

2.1 The total volume of the cubes in step 1.2 is $\sum_iN_i\ell_i^{m+1}\le\sum_i(L+\ell_i)\ell_i^m\le(L+1)\sum_i\ell_i^m<\varepsilon$, the first two inequalities being the bounds $N_i\ell_i\le L+\ell_i$ and $\ell_i\le1$ of step 1.2 and the last the strict bound on the base total. Together with step 1.1 this supplies an arbitrarily small finite cube cover in every case, so $A\times[c,d]$ has content zero. [step 1.1, step 1.2, algebra] ∎
