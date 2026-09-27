---
id: lem-equicontinuity-on-a-compact-domain-is-uniform
kind: lemma
title: "An equicontinuous family on a compact metric space is uniformly equicontinuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicontinuity-and-boundedness-in-ck, def-metric-compactness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

Let $(K,d)$ be a nonempty compact metric space and let $\mathcal F\subseteq C(K,\mathbb R)$ be equicontinuous. For every $\varepsilon>0$ there is $\delta>0$ such that for every $f\in\mathcal F$ and $x,y\in K$, $d(x,y)<\delta$ implies $|f(x)-f(y)|<\varepsilon$.

## Facts & Assumptions
**Given:** A positive real $\varepsilon$ and an equicontinuous family $\mathcal F$ on $K$.

[L1] For each $a\in K$ there exists some radius $r>0$ such that $d(x,a)<r$ implies $|f(x)-f(a)|<\varepsilon/2$ for every $f\in\mathcal F$ ([[def-equicontinuity-and-boundedness-in-ck]]).

[L2] Compactness means that every open cover has a finite subcover ([[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 Form the set of all pairs $(a,r)$ with $a\in K$, $r>0$, and the property in [L1]. The balls $B(a,r/2)$ for these pairs form an open cover of $K$ by [L1]. Compactness gives finitely many such pairs $(a_0,r_0),\ldots,(a_N,r_N)$ whose balls cover $K$. No radius was selected simultaneously for every point of $K$. [L1, L2, construct]

2.1 Let $\delta$ be the least of the finitely many positive radii $r_i/2$. If $d(x,y)<\delta$, choose $i$ with $x\in B(a_i,r_i/2)$; then both $x$ and $y$ lie in $B(a_i,r_i)$. [step 1.1, algebra]

3.1 The two estimates from [L1] and the triangle inequality give $|f(x)-f(y)|<\varepsilon$ for every $f\in\mathcal F$. [step 2.1, L1, algebra] ∎
