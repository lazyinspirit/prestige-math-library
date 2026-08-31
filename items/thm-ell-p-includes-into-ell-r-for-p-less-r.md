---
id: thm-ell-p-includes-into-ell-r-for-p-less-r
kind: theorem
title: "$\\ell^p$ includes into $\\ell^r$ for $p < r$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-ell-p-is-l-p-of-counting-measure, def-counting-measure, prop-counting-measure-is-a-measure, def-real-power, thm-real-power-laws, thm-exponential-is-strictly-increasing]
proof_strategy: "For counting measure, only finitely many terms can exceed 1 when a sequence lies in ell^p. Split the series at that finite set and compare |a_n|^r to |a_n|^p on the tail where |a_n| <= 1."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorems 8.12 and 8.13"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Chapter 17 overview"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $1\le p<r\le\infty$. If $a=(a_n)_{n\ge0}\in\ell^p$, then $a\in\ell^r$. When
$r<\infty$ one has

$$\|a\|_r\le\|a\|_p,$$

and when $r=\infty$ one has

$$\|a\|_\infty\le\|a\|_p.$$

## Facts & Assumptions

**Given:** A real sequence $a=(a_n)_{n\ge0}$ in $\ell^p$.

[L1] $\ell^p$ is $L^p$ of counting measure on $\mathbb N$
([[rem-ell-p-is-l-p-of-counting-measure]], [[def-counting-measure]],
[[prop-counting-measure-is-a-measure]]).

[L2] Real powers obey the usual laws, and for fixed base $b>1$ the map
$x\mapsto b^x$ is strictly increasing
([[def-real-power]], [[thm-real-power-laws]], [[thm-exponential-is-strictly-increasing]]).

## Proof

**Proof technique:** For counting measure, only finitely many terms can exceed
$1$ when a sequence lies in $\ell^p$. Split the series at that finite set and
compare $|a_n|^r$ to $|a_n|^p$ on the tail where $|a_n|\le1$.

1.1 If $r=\infty$, then for each $n$, [L1]
$$|a_n|^p\le\sum_{k=0}^\infty |a_k|^p=\|a\|_p^p,$$
so taking $p$-th roots gives $|a_n|\le\|a\|_p$. Hence
$\|a\|_\infty\le\|a\|_p$.

1.2 Assume $r<\infty$. Because $\sum_n |a_n|^p<\infty$, only finitely many indices can satisfy $|a_n|>1$; otherwise the $p$-series would dominate the divergent sum of infinitely many $1$'s. Thus $|a_n|\le1$ for all sufficiently large $n$. Since $r>p$, one has $|a_n|^r\le|a_n|^p$ on that tail, so $\sum_n |a_n|^r$ converges. [L1, L2]

2.1 For every $n$, [step 1.1, step 1.2, L1, algebra]
$$\sum_{k<n}|a_k|^r\le \left(\sup_k |a_k|^{r-p}\right)\sum_{k<n}|a_k|^p\le \|a\|_\infty^{r-p}\sum_{k<n}|a_k|^p.$$
Using step 1.1, this becomes
$$\sum_{k<n}|a_k|^r\le \|a\|_p^{r-p}\sum_{k<n}|a_k|^p.$$
Letting $n\to\infty$ yields $\|a\|_r^r\le\|a\|_p^r$, hence
$\|a\|_r\le\|a\|_p$.

3.1 Step 1.1 proves the endpoint $r=\infty$, and step 2.1 proves the finite-$r$ estimate. [step 1.1, step 2.1] ∎
