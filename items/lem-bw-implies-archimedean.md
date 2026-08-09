---
id: lem-bw-implies-archimedean
kind: lemma
title: "Bolzano-Weierstrass alone forces the Archimedean property, so it needs no separate Archimedean hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, def-ordered-field, lem-of-add-order, lem-of-abs-value, lem-of-naturals-positive, lem-of-sequence-basics, cor-of-one-positive, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "J. Lebl, Basic Analysis I, §1.2 and §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field with the Bolzano-Weierstrass property (BW) of
[[def-completeness-properties]]. Then $F$ is Archimedean
([[def-archimedean-field]]).

Consequently (BW) needs no Archimedean hypothesis attached to it, in contrast
with the nested interval property and with Cauchy completeness, which do
([[fs-nested-intervals-implies-lub]], [[fs-cauchy-complete-implies-lub]]).

## Facts & Assumptions

**Given:** An ordered field $F$ with (BW).

[L1] The property (BW): every bounded sequence in $F$ has a subsequence converging in $F$ ([[def-completeness-properties]]).

[L2] Sequences in an ordered field: a sequence is a function $\mathbb{N} \to F$; it is bounded when $|x_k| \le M$ for every $k$ and some $M \in F$; a subsequence is taken along a strictly increasing $n : \mathbb{N} \to \mathbb{N}$; convergence and Cauchyness in $F$ are as fixed there ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: $F$ is Archimedean when for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$, where $0 \cdot 1_F = 0$ and $(n+1)\cdot 1_F = n \cdot 1_F + 1_F$ ([[def-archimedean-field]]).

[L4] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_F$ is strictly increasing on $\{1,2,3,\dots\}$, and $(m+n)\cdot 1_F = m \cdot 1_F + n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L5] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[lem-of-abs-value]]).

[L6] A sequence converging in $F$ is Cauchy in $F$ (clause 3 of [[lem-of-sequence-basics]]).

[L7] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); the order is total, so the failure of $x < y$ is $y \le x$; adding a constant preserves the order ([[lem-of-add-order]], [[def-ordered-field]]). Here [[lem-of-add-order]] states the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L8] Discreteness of $\mathbb{N}$: $m < p$ if and only if $m + 1 \le p$ ([[lem-nat-discrete]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $F$ has (BW) and is not Archimedean; then there is $x \in F$ such that $x < n \cdot 1_F$ fails for every natural $n$, that is, $n \cdot 1_F \le x$ for every $n \in \mathbb{N}$. [L3, L7, assume-contra]

1.2 Let $(y_k)$ be the sequence in $F$ given by $y_k := k \cdot 1_F$, so that $y_0 = 0$, $y_{k+1} = y_k + 1_F$, and $y_k \ge 0$ for every $k$. [L2, L3, L4]

2.1 $(y_k)$ is bounded: $|y_k| = y_k \le x$ for every $k$. [step 1.1, step 1.2, L2, L5]

3.1 By (BW) there is a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and an $L \in F$ with $y_{n_j} \to L$ in $F$. [step 2.1, L1, L2]

4.1 The subsequence $(y_{n_j})$ is therefore Cauchy in $F$, so, $1_F$ being positive, there is $J \in \mathbb{N}$ with $|y_{n_j} - y_{n_i}| < 1_F$ for all $i, j \ge J$. [step 3.1, L2, L6, L7]

5.1 But $n_J < n_{J+1}$ gives $n_J + 1 \le n_{J+1}$ and hence $y_{n_{J+1}} \ge y_{n_J + 1} = y_{n_J} + 1_F$, so $y_{n_{J+1}} - y_{n_J} \ge 1_F > 0$ and $|y_{n_{J+1}} - y_{n_J}| \ge 1_F$, contradicting step 4.1. [step 1.2, step 4.1, L4, L5, L7, L8]

6.1 The assumption of step 1.1 is therefore untenable, and an ordered field with (BW) is Archimedean. [step 5.1, discharge-contradiction] ∎

## Remarks

- **The witness sequence is the obstruction itself.** In a non-Archimedean field
  the canonical naturals are bounded, so they form a bounded sequence; and no
  subsequence of them can converge, because consecutive terms of any
  subsequence stay at distance at least $1_F$. That is the whole argument, and
  it shows that (BW) fails in every non-Archimedean ordered field, for instance
  in $\mathbb{R}(t)$ ([[cex-ordered-field-not-archimedean]]) and in
  $\mathbb{R}((t^{-1}))$ ([[lem-laurent-non-archimedean]]).

- Note which direction is being used: the sequence is bounded and has no
  convergent subsequence, so (BW) is contradicted. Nothing here says that
  $(y_k)$ fails to be Cauchy for some other reason; it is Cauchy along no
  subsequence at all.
