---
id: lem-quantitative-univalence-from-controlled-derivative
kind: lemma
title: "Controlled derivative oscillation forces injectivity on a fixed subdisc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-univalent-holomorphic-function, lem-bloch-rescaling-at-an-almost-maximal-derivative, thm-unit-disc-schwarz-lemma-with-rigidity, thm-rouche-theorem]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, §7.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $g$ be holomorphic on $\mathbb D$ with $g(0)=0$, $g'(0)=1$, and
$|g'(w)|\le2$ on $\mathbb D$. Then $g$ is univalent on $D(0,1/6)$ and

$$D(0,1/12)\subset g(D(0,1/6)).$$

## Facts & Assumptions

**Given:** A holomorphic map $g:\mathbb D\to\mathbb C$ with $g(0)=0$, $g'(0)=1$, and $|g'|\le2$ on $\mathbb D$.

[L1] If $h:\mathbb D\to\mathbb D$ is holomorphic and $h(0)=0$, then $|h(w)|\le|w|$ ([[thm-unit-disc-schwarz-lemma-with-rigidity]]).

[L2] Rouche's theorem preserves zero count under a strict boundary perturbation ([[thm-rouche-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Define $h(w):=(g'(w)-1)/3$. Then $h$ is holomorphic on $\mathbb D$, $h(0)=0$, and $|h(w)|\le(|g'(w)|+1)/3\le1$. Hence [L1] gives $|g'(w)-1|\le3|w|$ for every $w\in\mathbb D$. [L1, given, algebra]

2.1 If $|w|\le1/6$, step 1.1 gives $|g'(w)-1|\le1/2$. For $w_1,w_2\in D(0,1/6)$, one has $g(w_1)-g(w_2)=\int_{[w_2,w_1]} g'(\zeta)\,d\zeta$, so $|g(w_1)-g(w_2)-(w_1-w_2)|\le|w_1-w_2|/2$. Therefore $|g(w_1)-g(w_2)|\ge|w_1-w_2|/2$, which shows injectivity on $D(0,1/6)$. [step 1.1, algebra]

2.2 On $|w|=1/6$, one has $|g(w)-w|\le\int_0^1 |g'(tw)-1|\,|w|\,dt\le3|w|^2/2=1/24<1/6=|w|$. Fix $\xi$ with $|\xi|<1/12$. Then on $|w|=1/6$, $|(g(w)-\xi)-w|\le |g(w)-w|+|\xi|<1/24+1/12=1/8<1/6=|w|$. Rouche [L2] gives the same zero count for $g(w)-\xi$ and $w$, so $g(w)=\xi$ has exactly one solution in $D(0,1/6)$. [L2, step 1.1, algebra]

3.1 Step 2.2 shows every $|\xi|<1/12$ lies in $g(D(0,1/6))$, and step 2.1 shows the restriction there is univalent. [step 2.1, step 2.2] ∎
