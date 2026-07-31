---
id: lem-pairwise-coprime-divisibility
kind: lemma
title: "For a finite pairwise-coprime list of positive integers, the product divides every common multiple, and each initial product is coprime to every remaining modulus"
status: published
origin: session
deps: [def-coprime, lem-coprime-divides-product, def-monoid-finite-product, thm-generalised-associativity, thm-induction-principle, cor-euclids-lemma-for-finite-products, lem-every-integer-above-one-has-a-prime-divisor, def-common-divisor-and-gcd]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
pipeline_run: null
---

## Statement

Let $n_0,\ldots,n_{r-1}$ be a finite list of positive integers such that
$\gcd(n_i,n_j)=1$ whenever $i\ne j$. Put
$P_k:=\prod_{i<k}n_i$, with $P_0=1$.

1. For every $k\le j<r$, $\gcd(P_k,n_j)=1$.
2. If every $n_i$ divides an integer $M$, then $P_r\mid M$.

The products are finite monoid products ([[def-monoid-finite-product]]).

## Facts & Assumptions

**Given:** A natural $r$, a pairwise-coprime list of positive integers $n_0,\ldots,n_{r-1}$, its initial products $P_k$, and an integer $M$ divisible by every list member.

[L1] A prime dividing a finite product of integers divides one of its factors ([[cor-euclids-lemma-for-finite-products]]).

[L2] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L3] If $u\mid M$, $v\mid M$, and $\gcd(u,v)=1$, then $uv\mid M$ ([[lem-coprime-divides-product]]).

[L4] Finite products have empty value $1$ and satisfy $P_{k+1}=P_kn_k$ ([[def-monoid-finite-product]], [[thm-generalised-associativity]]).

[L5] Coprime integers have gcd $1$, whose only positive divisors are $1$ ([[def-coprime]], [[def-common-divisor-and-gcd]]).

[L6] Induction proves a statement at every natural number from its base case and successor implication ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Fix $k\le j<r$. If $\gcd(P_k,n_j)>1$, [L2] supplies a prime $q$ dividing this gcd. Then $q\mid P_k$, so [L1] gives an $i<k\le j$ with $q\mid n_i$; also $q\mid n_j$, contradicting $\gcd(n_i,n_j)=1$ because $i\ne j$ and the positive prime $q>1$ would divide that gcd. Hence $\gcd(P_k,n_j)=1$. [L1, L2, L5]

1.2 At $k=0$, $P_0=1$ divides $M$. [base, L4]

2.1 Assume $P_k\mid M$ for some $k<r$. The hypothesis gives $n_k\mid M$, and step 1.1 gives $\gcd(P_k,n_k)=1$; hence [L3] gives $P_kn_k=P_{k+1}\mid M$. [ih, step 1.1, L3, L4]

3.1 Induction using steps 1.2 and 2.1 yields $P_k\mid M$ for every $k\le r$, and in particular $P_r\mid M$; together with step 1.1 this proves both clauses. [step 1.1, step 1.2, step 2.1, L6, discharge-induction] ∎
