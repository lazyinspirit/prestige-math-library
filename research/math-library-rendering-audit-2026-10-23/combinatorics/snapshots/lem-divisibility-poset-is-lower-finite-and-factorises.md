---
id: lem-divisibility-poset-is-lower-finite-and-factorises
kind: lemma
title: "The divisibility poset is lower-finite, and each divisor interval factorises as a product of finite chains of prime exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-divisibility-poset-on-positive-integers, def-poset-interval-and-finiteness-conditions, lem-divisor-bound, thm-subset-of-a-finite-set, thm-canonical-prime-factorisation, lem-divisibility-via-valuations, def-p-adic-valuation, thm-product-rule, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.8.4–3.8.5"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

The divisibility poset $\mathbb Z_{>0}$ is lower-finite. More precisely, if $a\mid b$ and $q:=b/a$, choose the distinct prime divisors $p_0,\ldots,p_{r-1}$ of $q$ and put $e_i:=v_{p_i}(q)$. Then

$$[a,b]_{\mid}\cong\prod_{i<r}\{0,1,\ldots,e_i\}$$

as posets, where the right side has coordinatewise order. The isomorphism sends $d=ac$ to $(v_{p_i}(c))_{i<r}$. For $q=1$ the product is the one-point empty product.

## Facts & Assumptions

**Given:** Positive integers $a\mid b$, their positive quotient $q=b/a$, and the divisibility poset of [[def-divisibility-poset-on-positive-integers]].

[L1] A divisor $d$ of a nonzero integer $n$ satisfies $d\ne0$ and $|d|\le|n|$, so a positive divisor $d$ of a positive integer $n$ satisfies $1\le d\le n$ ([[lem-divisor-bound]]).

[L2] Every nonnegative integer is the image of a unique natural number, and the embedding preserves order ([[lem-nat-embeds-int]]).

[L3] Subsets of finite sets are finite ([[thm-subset-of-a-finite-set]]).

[L4] Canonical prime factorisation expresses a positive integer as the product of its distinct prime powers, with the exponent $v_p$ uniquely determined ([[thm-canonical-prime-factorisation]], [[def-p-adic-valuation]]).

[L5] For positive integers $c,c'$, $c\mid c'$ exactly when $v_p(c)\le v_p(c')$ for every prime $p$ ([[lem-divisibility-via-valuations]]).

[L6] Finite Cartesian products of finite sets are finite ([[thm-product-rule]]).

## Proof

**Proof technique:** direct.

1.1 For a positive integer $n$, every element of its principal ideal is a positive divisor $d$ with $1\le d\le n$ by [L1]. By [L2] these integers correspond to a subset of the finite natural initial segment through $n$, hence form a finite set by [L3]. Thus the divisibility poset is lower-finite. [L1, L2, L3]

1.2 Multiplication by $a$ gives an order isomorphism from $[1,q]_{\mid}$ to $[a,b]_{\mid}$: if $c\mid q$, then $ac\mid aq=b$; and if $a\mid d\mid b$, write $d=ac$ and cancel $a$ from $b=aq=d t=act$ to get $q=ct$. [given, construct]

1.3 By [L4], every divisor $c$ of $q$ has the unique form $c=\prod_{i<r}p_i^{k_i}$ with $0\le k_i\le e_i$, and every such exponent tuple gives a divisor of $q$. Thus $c\mapsto(k_i)_{i<r}$ is a bijection from $[1,q]_{\mid}$ to the displayed finite Cartesian product. [L4, L6]

2.1 By [L5], $c\mid c'$ holds exactly when $k_i\le k'_i$ for every $i<r$, so the bijection in step 1.3 preserves and reflects the order. [step 1.3, L5]

3.1 Composing steps 1.2 and 1.3 gives the asserted interval factorisation; step 2.1 makes it a poset isomorphism, and step 1.1 proves lower-finiteness. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
