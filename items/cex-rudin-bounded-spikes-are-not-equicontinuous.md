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
  audited: 2026-08-02
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
**Given:** $f_n(x)=x^2/(x^2+(1-nx)^2)$ for $0\le x\le1$.

[L1] A uniform limit of continuous real functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

## Proof

**Proof technique:** direct.

1.1 Each $f_n$ is continuous, $0\le f_n\le1$, $f_n(0)=0$, and $f_n(1/n)=1$. [given, algebra]

1.2 For every fixed $x>0$, $f_n(x)\to0$, while $f_n(0)=0$. Thus any uniformly convergent subsequence would have the zero function as its pointwise limit, consistently with [L1]. [given, L1, algebra]

2.1 The common values at $0$ and $1/n\to0$ contradict equicontinuity at $0$. [step 1.1, algebra]

2.2 Uniform convergence to zero is impossible because $\lVert f_n\rVert_\infty\ge f_n(1/n)=1$. [step 1.1, step 1.2, algebra]

3.1 This bounded family is neither equicontinuous nor uniformly sequentially compact. [step 2.1, step 2.2, algebra] ∎
