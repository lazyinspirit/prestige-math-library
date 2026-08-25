---
id: prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field
kind: proposition
title: "$\\sum_{d\\mid n}d\\,N_q(d)=q^{n}$ for the counts $N_q(d)$ of monic irreducibles of degree $d$ over $\\mathbb F_q$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-factorization-of-x-qn-minus-x, thm-polynomial-degree-of-a-product-over-a-domain, def-polynomial-degree-leading-coefficient-and-monic, def-sum-over-a-finite-index-set, cor-polynomial-ring-over-a-domain-is-a-domain, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Roots and Irreducibles (expository blurb), formula (6.2) and Example 6.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/rootirred.pdf"
    - title: "K. Conrad, Finite Fields (expository blurb), Section 6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$ and, for an integer $d\ge1$, let
$N_q(d)$ denote the number of monic irreducible polynomials of degree $d$ in
$\mathbb F_q[t]$. Then each $N_q(d)$ is finite, and for every $n\ge1$

$$\sum_{d\mid n}d\,N_q(d)=q^{n},$$

the sum being over the positive divisors $d$ of $n$ ([[def-divides-in-z]],
[[def-sum-over-a-finite-index-set]]). At $n=1$ the identity reads $N_q(1)=q$.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of order $q\ge2$ and an integer $n\ge1$; monic polynomials are as in [[def-polynomial-degree-leading-coefficient-and-monic]].

[L1] In $\mathbb F_q[t]$ one has $t^{q^{n}}-t=\prod P(t)$, the product being over the monic irreducible $P\in\mathbb F_q[t]$ whose degree divides $n$, each such $P$ occurring once ([[thm-factorization-of-x-qn-minus-x]]).

[L2] If $R$ is an integral domain and $f,g\in R[x]$ are nonzero, then $fg\ne0$ and $\deg(fg)=\deg f+\deg g$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] If $R$ is an integral domain, then $R[x]$ is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 For each $d\ge1$ the monic polynomials of degree $d$ in $\mathbb F_q[t]$ are the $t^{d}+a_{d-1}t^{d-1}+\dots+a_0$ with $a_0,\dots,a_{d-1}\in\mathbb F_q$, so there are exactly $q^{d}$ of them and $N_q(d)\le q^{d}$ is finite. [given, algebra]

2.1 Consequently the family of monic irreducible $P\in\mathbb F_q[t]$ with $\deg P\mid n$ is finite, having at most $\sum_{d\mid n}q^{d}$ members, so the product in [L1] is a finite product of nonzero polynomials in the integral domain $\mathbb F_q[t]$ ([L3]). [step 1.1, L1, L3]

3.1 Taking degrees in [L1] and applying [L2] repeatedly to that finite product gives $\deg(t^{q^{n}}-t)=\sum_{\deg P\mid n}\deg P$, where the sum runs over the same finite family; and $\deg(t^{q^{n}}-t)=q^{n}$ because $q^{n}>1$. [step 2.1, L1, L2, algebra]

4.1 Splitting that sum according to the degree of $P$: the possible degrees are exactly the positive divisors $d$ of $n$, there are $N_q(d)$ monic irreducibles of degree $d$, and each contributes $d$; hence $\sum_{d\mid n}d\,N_q(d)=q^{n}$. [step 1.1, step 3.1, algebra]

5.1 At $n=1$ the only positive divisor is $d=1$, so the identity reads $N_q(1)=q$, in agreement with the fact that the monic polynomials of degree one are the $t-a$ for $a\in\mathbb F_q$ and each is irreducible. [step 1.1, step 4.1, algebra] ∎

## Remarks

- **What the identity does not give.** It determines $N_q(n)$ only once every $N_q(d)$ for proper divisors $d$ of $n$ is known, so it is a recursion rather than a formula. Inverting it into a closed form is a separate matter and is not carried out here.
