---
id: thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
kind: theorem
title: "Every nonnegative measurable function is the increasing limit of simple measurable functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-real-valued-measurable-function, def-nonnegative-simple-measurable-function, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 7.1 setup"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Definition 4.4"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

Let $f:X\to[0,+\infty]$ be measurable. Then there is an increasing sequence of
nonnegative simple measurable functions $(s_n)$ such that $s_n(x)\uparrow f(x)$
for every $x\in X$.

## Facts & Assumptions

**Given:** A measurable function $f:X\to[0,+\infty]$.

[L1] For a measurable $f$, the sets $f^{-1}(B)$ are measurable for every Borel $B\subseteq\overline{\mathbb R}$ ([[def-extended-real-valued-measurable-function]]).

[L2] A nonnegative measurable function with finite range is a nonnegative simple measurable function ([[def-nonnegative-simple-measurable-function]]).

[L3] Increasing pointwise suprema of measurable functions are measurable, and measurable functions remain measurable under the elementary truncations used below ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Set $s_0:=0$. For $n\ge1$ and $0\le k<n2^n$, put [L1, L2, construct]
$$E_{n,k}:=\{x:k2^{-n}\le f(x)<(k+1)2^{-n}\}\cap\{f<n\},$$
and set
$$s_n:=\sum_{k=0}^{n2^n-1}k2^{-n}\chi_{E_{n,k}}+n\chi_{\{f\ge n\}}.$$
Each $E_{n,k}$ and $\{f\ge n\}$ is measurable by [L1], the range of $s_n$ is
finite, and therefore each $s_n$ is simple by [L2]; $s_0$ is also simple.

2.1 For each $x$, one has $0\le s_n(x)\le f(x)$. If $f(x)<+\infty$ and [step 1.1, algebra]
$n>f(x)$, then $f(x)-2^{-n}<s_n(x)\le f(x)$; if $f(x)=+\infty$, then
$s_n(x)=n$. Hence $s_n(x)\to f(x)$.

3.1 The functions are increasing. Indeed, $s_n(x)$ is a dyadic multiple of [step 2.1, L3, algebra] ∎
$2^{-n}$ below $f(x)\wedge n$, hence also a dyadic multiple of $2^{-(n+1)}$
below $f(x)\wedge(n+1)$; so the defining maximality of the $(n+1)$-st dyadic
truncation gives $s_n(x)\le s_{n+1}(x)$. Therefore $s_n\uparrow f$, in accord
with [L3].
