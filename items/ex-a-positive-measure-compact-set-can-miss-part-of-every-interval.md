---
id: ex-a-positive-measure-compact-set-can-miss-part-of-every-interval
kind: example
title: "A positive-measure compact set can miss part of every interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-rationals-countable, thm-geometric-series, thm-finite-and-countable-subadditivity-of-measures, thm-heine-borel-characterisation-r, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.26(i)"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

There exists a compact set $K\subseteq[0,1]$ with positive Lebesgue measure
such that every nonempty open interval in $\mathbb{R}$ contains a point outside
$K$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the unit interval $[0,1]$.

[L1] The rationals are countable. ([[thm-rationals-countable]])

[L2] The geometric series satisfies $$\sum_{k=1}^\infty 2^{-k-2}=\frac14.$$ ([[thm-geometric-series]])

[L3] Lebesgue measure is countably subadditive on measurable sets. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L4] A subset of $\mathbb{R}$ is compact if and only if it is closed and bounded. ([[thm-heine-borel-characterisation-r]])

[L5] The interval $[0,1]$ has Lebesgue measure $1$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Verification

**Proof technique:** direct.

1.1 Enumerate $\mathbb{Q}\cap(0,1)$ as $(q_k)_{k\ge1}$ using [L1]. For each [L1, given, choose, construct] $k$, choose an open interval $I_k$ centred at $q_k$ of length below $2^{-k-2}$, and put $$U:=\bigcup_{k\ge1}I_k.$$ The set $U$ is open and dense in $(0,1)$ because every nonempty open [L1, L2, L3, given, choose, construct, algebra] interval in $(0,1)$ contains a rational point $q_k$ and hence meets $I_k$. Also [L3] and [L2] give $$\lambda(U)\le\sum_{k=1}^\infty\lambda(I_k)<\sum_{k=1}^\infty2^{-k-2}=\frac14.$$ [L2, L3, given, choose, construct, algebra]

2.1 Define [L4, L5, step 1.1, algebra] $$K:=[0,1]\setminus U.$$ Then $K$ is closed and bounded, hence compact by [L4]. By [L5] and step 1.1, $$\lambda(K)\ge\lambda([0,1])-\lambda(U)>1-\frac14=\frac34,$$ so $K$ has positive measure. Let $J$ be a nonempty open interval in $\mathbb{R}$. If $J$ is not [L4, L5, step 1.1, algebra] contained in $[0,1]$, then $J$ already contains a point outside $K\subseteq[0,1]$. If $J\subseteq(0,1)$, then step 1.1 gives $J\cap U\ne\varnothing$, so $J$ contains a point outside $K$. Thus every nonempty open interval contains a point outside $K$. [step 1.1, algebra]

3.1 The compact set $K$ therefore has positive measure while missing part of [step 2.1] every interval. [step 2.1] ∎
