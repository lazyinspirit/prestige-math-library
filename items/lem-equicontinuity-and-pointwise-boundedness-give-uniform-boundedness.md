---
id: lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness
kind: lemma
title: "Equicontinuity and pointwise boundedness on a compact metric space imply uniform boundedness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-equicontinuity-on-a-compact-domain-is-uniform, def-equicontinuity-and-boundedness-in-ck]
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

## Statement

An equicontinuous, pointwise-bounded family $\mathcal F\subseteq C(K,\mathbb R)$ on a nonempty compact metric space is uniformly bounded.

## Facts & Assumptions
**Given:** An equicontinuous and pointwise-bounded family $\mathcal F$.

[L1] There is a common radius $\delta>0$ such that $d(x,y)<\delta$ implies $|f(x)-f(y)|<1$ for all $f\in\mathcal F$ ([[lem-equicontinuity-on-a-compact-domain-is-uniform]]).

[L2] Pointwise boundedness and uniform boundedness have the quantified meanings in [[def-equicontinuity-and-boundedness-in-ck]].

## Proof

**Proof technique:** direct.

1.1 The $\delta$-balls cover $K$; compactness supplies finitely many centres $a_0,\ldots,a_N$ whose $\delta$-balls cover it. [L1, choose]

2.1 By pointwise boundedness, choose $M_i\ge0$ with $|f(a_i)|\le M_i$ for every $f\in\mathcal F$, and let $M:=1+\max_i M_i$. [L2, step 1.1, choose]

3.1 For $x\in K$, choose $i$ with $d(x,a_i)<\delta$; then $|f(x)|\le|f(x)-f(a_i)|+|f(a_i)|<1+M_i\le M$. [step 1.1, step 2.1, L1, algebra]

4.1 Thus $M$ uniformly bounds $\mathcal F$. [step 3.1, L2] ∎
