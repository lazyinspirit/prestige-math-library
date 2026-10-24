---
id: lem-coordinate-telescoping-on-a-euclidean-ball
kind: lemma
title: "Small coordinate-by-coordinate increments stay inside a Euclidean ball and telescope the total increment"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-inner-product, lem-standard-basis-of-f-n, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.4"
      url: "https://www.jirka.org/ra/html/sec_svthedercont.html"
pipeline_run: null
---

## Statement

Let $B(a,r)\subseteq U\subseteq\mathbb R^m$ and let $\|h\|_2<r$. Define $p_0=a$ and $p_j=a+\sum_{i<j}h_ie_i$ for $1\le j\le m$. Then every $p_j$ lies in $B(a,r)$, $p_m=a+h$, and for every map $f$ on $U$,

$$f(a+h)-f(a)=\sum_{j<m}\bigl(f(p_{j+1})-f(p_j)\bigr).$$

## Facts & Assumptions

**Given:** The displayed ball, vector $h$, and coordinate-prefix points $p_j$.

[L1] The coordinate list of $x\in F^{n}$ with respect to the ordered basis $e$ is its ordinary coordinate list ([[lem-standard-basis-of-f-n]]).

[L2] The Euclidean norm of $x$ is $\|x\|_2=\sqrt{\sum_{i<n}x_i^2}$ ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 The standard-basis coordinate formula makes $p_m=a+h$, while $p_j-a$ has coordinates $h_i$ for $i<j$ and $0$ otherwise. [L1, L2]

2.1 Hence $\|p_j-a\|_2^2=\sum_{i<j}h_i^2\le\sum_{i<m}h_i^2=\|h\|_2^2<r^2$, so every prefix point is in $B(a,r)$. [step 1.1, L2, algebra]

3.1 Summing $f(p_{j+1})-f(p_j)$ cancels all intermediate values and leaves $f(p_m)-f(p_0)=f(a+h)-f(a)$. [step 1.1, step 2.1] ∎
