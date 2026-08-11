---
id: cor-index-p-subgroups-of-finite-p-groups-are-normal
kind: corollary
title: "Every subgroup of index $p$ in a finite $p$-group is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, thm-finite-index-core-bound-and-finite-overgroups, lem-core-is-largest-normal-subgroup-contained, cor-index-tower-finite, thm-lagrange, def-factorial-and-falling-factorial, cor-euclids-lemma-for-finite-products, thm-canonical-prime-factorisation, def-prime, def-index, def-normal-subgroup]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Corollary 6.4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a finite $p$-group and let $H\le P$. If $[P:H]=p$, then
$H\mathrel{\trianglelefteq}P$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$ and a subgroup $H\le P$ with $[P:H]=p$.

[L1] For $K=\operatorname{Core}_P(H)$, one has $K\mathrel{\trianglelefteq}P$, $K\le H$, and $[P:K]\mid p!$ ([[thm-finite-index-core-bound-and-finite-overgroups]], [[lem-core-is-largest-normal-subgroup-contained]]).

[L2] Every subgroup of $P$ has order a power of $p$ ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[L3] If $K\le H\le P$, then $[P:K]=[P:H][H:K]$ ([[cor-index-tower-finite]]).

[L4] The factorial is the product of the positive natural numbers at most $p$ ([[def-factorial-and-falling-factorial]]).

[L5] If a prime divides a finite product, it divides one of the factors ([[cor-euclids-lemma-for-finite-products]]).

[L6] Prime factorisation is unique ([[thm-canonical-prime-factorisation]]).

[L7] A prime $p$ is greater than $1$ and has no positive divisors other than $1$ and $p$ ([[def-prime]]).

[L8] For a subgroup of a finite group, the subgroup order divides the group order and the quotient is the index ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Put $K=\operatorname{Core}_P(H)$. By [L1] and [L3], $K\mathrel{\trianglelefteq}P$, $K\le H$, $[P:K]\mid p!$, and $[P:K]=p[H:K]$. [L1, L3]

2.1 By [L2] and [L8], the orders of $P$ and $K$ are powers of $p$ and their quotient is $[P:K]$; [L6] therefore makes $[P:K]$ a positive power of $p$, and step 1.1 makes it divisible by $p$. [step 1.1, L2, L6, L8]

3.1 Among the factors $1,\ldots,p$ in $p!$, only $p$ is divisible by $p$ by [L7]. If $p^2$ divided $p!$, cancellation of the factor $p$ and [L5] would make $p$ divide one of $1,\ldots,p-1$, impossible. Thus the positive power of $p$ in step 2.1 that divides $p!$ is exactly $p$. [step 1.1, step 2.1, L4, L5, L7]

4.1 Step 1.1 now gives $p=p[H:K]$, so $[H:K]=1$ and $H=K$. Since $K$ is normal in $P$, so is $H$. [step 1.1, step 3.1, algebra] ∎
