---
id: lem-dyadic-cubes-of-one-generation-partition-rn
kind: lemma
title: "For each generation, the dyadic cubes of that generation are pairwise disjoint and cover $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dyadic-cube-in-rn, def-half-open-box, def-integer-power, lem-power-laws, lem-integer-part, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.1.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and let $k \in \mathbb{N}$. Every $x \in \mathbb{R}^n$ lies in
exactly one dyadic cube of generation $k$ ([[def-dyadic-cube-in-rn]]); that is,
the generation-$k$ dyadic cubes are pairwise disjoint and their union is
$\mathbb{R}^n$. Each of them has volume $\operatorname{vol}(Q_{k,m}) = 2^{-kn}$
([[def-half-open-box]]).

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, a natural number $k$, and the dyadic cubes of generation $k$.

[L1] $Q_{k,m} = \{\, x \in \mathbb{R}^n : m_i 2^{-k} < x_i \le (m_i+1)2^{-k} \text{ for every } i<n \,\}$ ([[def-dyadic-cube-in-rn]]).

[L2] For a nonempty box $\operatorname{vol}(B) := \prod_{i<n}(b_i - a_i)$ when every $a_i$ and every $b_i$ is real ([[def-half-open-box]]).

[F1] For every real $x$ there is exactly one integer $p$ with $p \le x < p + 1$ ([[lem-integer-part]]).

[F2] For $a \ne 0$ and $m,n \in \mathbb{Z}$, $a^{m+n} = a^m a^n$ and $(a^m)^n = a^{mn}$ ([[lem-power-laws]], claims 1 and 3; [[def-integer-power]]).

[F3] $\prod_{k<n}(a_kb_k) = (\prod_{k<n}a_k)(\prod_{k<n}b_k)$, and finite products are defined by the recursion $\Pi_0 = 1$, $\Pi_{\sigma(n)} = \Pi_n \cdot a_n$ ([[lem-finite-sum-laws]], claim 6; [[def-finite-sum]]).

## Proof

**Proof technique:** direct.

1.1 For a real $t$ there is exactly one integer $m$ with $m < t \le m+1$: applying [F1] to $-t$ gives the unique integer $p$ with $p \le -t < p+1$, and $m := -p-1$ then satisfies $m < t \le m+1$, while any integer $m'$ with $m' < t \le m'+1$ yields $-m'-1 \le -t < -m'$, so $-m'-1 = p$ by the uniqueness in [F1] and $m' = m$. [F1, algebra]

1.2 Since $2^{-k} > 0$, the condition $m_i2^{-k} < x_i \le (m_i+1)2^{-k}$ is equivalent to $m_i < 2^kx_i \le m_i+1$, the powers satisfying $2^k2^{-k} = 1$. [L1, F2, algebra]

1.3 The volume of $Q_{k,m}$ is $\prod_{i<n}\big((m_i+1)2^{-k} - m_i2^{-k}\big) = \prod_{i<n}2^{-k} = \big(2^{-k}\big)^{n} = 2^{-kn}$, the last two equalities by the recursion for finite products and the power laws. [L1, L2, F2, F3]

2.1 Given $x \in \mathbb{R}^n$, step 1.1 applied in each coordinate to the real $2^kx_i$ produces exactly one integer $m_i$ with $m_i < 2^kx_i \le m_i+1$, so by step 1.2 the function $m$ so determined is the unique index of a generation-$k$ dyadic cube containing $x$; hence the generation-$k$ cubes cover $\mathbb{R}^n$ and no two of them share a point. [step 1.1, step 1.2, L1]

3.1 Steps 2.1 and 1.3 are the Statement. [step 1.3, step 2.1] ∎
