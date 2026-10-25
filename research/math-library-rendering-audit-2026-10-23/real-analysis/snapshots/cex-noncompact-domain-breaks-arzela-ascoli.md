---
id: cex-noncompact-domain-breaks-arzela-ascoli
kind: counterexample
title: "Translations of a fixed bump on $\\mathbb R$ are uniformly bounded and equicontinuous but have no uniformly convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-uniform-cauchy-criterion-real-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement refuted

Refuted: on an arbitrary metric domain, a uniformly bounded family satisfying the usual all-metric-space $\varepsilon$--$\delta$ equicontinuity condition must have a uniformly convergent subsequence.

## Facts & Assumptions
**Given:** $b(x)=\max\{1-|x|,0\}$ and $f_n(x)=b(x-n)$ for $n\in\mathbb N$.

[L1] A uniformly convergent sequence of real-valued functions is uniformly Cauchy ([[thm-uniform-cauchy-criterion-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 The triangular bump is $1$-Lipschitz and takes values in $[0,1]$. Every translate $f_n$ has the same properties. Thus the family is uniformly bounded and, for every $\varepsilon>0$, the common choice $\delta=\varepsilon$ gives $|x-y|<\delta\Rightarrow|f_n(x)-f_n(y)|<\varepsilon$ for every $n$; this is the ordinary all-metric-space equicontinuity condition used in the refuted claim. [given, algebra]

1.2 If $|m-n|\ge2$, then at $x=n$ one has $f_n(n)=1$ and $f_m(n)=0$; consequently $\lVert f_n-f_m\rVert_\infty\ge1$. [given, algebra]

2.1 Every infinite subsequence contains two indices separated by at least $2$, so no subsequence is uniformly Cauchy. [step 1.2, algebra]

3.1 By [L1], no subsequence can converge uniformly. [L1, step 2.1, algebra] ∎
