---
id: cex-rudin-bounded-spikes-are-not-equicontinuous
kind: counterexample
title: "Rudin's bounded rational spikes are not equicontinuous and have no uniformly convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-arzela-ascoli-for-real-ck, thm-uniform-limit-continuous-real-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local positive-index and subsequence repair; complete target and direct supplier proofs read; targeted precheck/rendercheck. No independent judgment or whole-closure certification."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement refuted

Refuted: a uniformly bounded family of continuous functions on $[0,1]$ must be equicontinuous or have a uniformly convergent subsequence.

## Facts & Assumptions
**Given:** For each integer $n\ge1$, let $f_n(x)=x^2/(x^2+(1-nx)^2)$ for $0\le x\le1$. The sequence is explicitly indexed by the positive integers, so $1/n$ is always defined and belongs to $[0,1]$.

[L1] A uniform limit of continuous real functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 The denominator is positive: if its two nonnegative summands vanished, $x=0$ and $1-nx=0$ would both hold, which is impossible. Each $f_n$ is therefore continuous, $0\le f_n\le1$, $f_n(0)=0$, and $f_n(1/n)=1$. [given, algebra]

1.2 For every fixed $x>0$, $f_n(x)\to0$, while $f_n(0)=0$. Thus any uniformly convergent subsequence would have the zero function as its pointwise limit, consistently with [L1]. [given, L1, algebra]

2.1 Take $\varepsilon=1/2$. For every $\delta>0$ there is an integer $n\ge1$ with $1/n<\delta$, but $|f_n(1/n)-f_n(0)|=1$. Thus no common radius works at $0$, so the family is not equicontinuous. [step 1.1, algebra]

2.2 For every subsequence $(f_{n_j})$, the indices $n_j$ tend to infinity, so step 1.2 still forces any uniform limit to be zero. But $\lVert f_{n_j}\rVert_\infty=f_{n_j}(1/n_j)=1$ for every $j$, contradicting uniform convergence to zero. No subsequence is uniformly convergent. [step 1.1, step 1.2, algebra]

3.1 This bounded family is neither equicontinuous nor uniformly sequentially compact. [step 2.1, step 2.2, algebra] ∎
