---
id: thm-mobius-function-of-a-finite-chain
kind: theorem
title: "On a finite chain, the Möbius function is $1$ on the diagonal, $-1$ on covers and $0$ on longer intervals"
status: published
origin: session
deps: [lem-poset-mobius-recurrence, def-chain, def-finite-cardinality, thm-strong-induction, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1"
      url: "https://math.mit.edu/~rstan/ec/ec1toc.html"
pipeline_run: null
---

## Statement

Let $C$ be a finite totally ordered poset, and let $x\le y$ in $C$. Then

$$\mu_C(x,y)=\begin{cases}1,&x=y,\\-1,&y\text{ covers }x,\\0,&\text{there is }z\text{ with }x<z<y.\end{cases}$$

## Facts & Assumptions

**Given:** A finite chain $C$ ([[def-chain]]) and comparable elements $x\le y$.

[L1] $\mu(x,x)=1$ and $\mu(x,y)=-\sum_{x\le z<y}\mu(x,z)$ for $x<y$ ([[lem-poset-mobius-recurrence]]).

[L2] Strong induction on finite interval cardinality ([[thm-strong-induction]], [[def-finite-cardinality]]).

[L3] A proper subset of a finite set has smaller cardinality ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** induction.

1.1 The diagonal value is $1$ by [L1]. [base, L1]

1.2 If $y$ covers $x$, then the recurrence has only the term $z=x$, so $\mu(x,y)=-\mu(x,x)=-1$. [L1]

1.3 Fix an interval cardinality and assume the formula holds on every strictly smaller interval. [ih]

1.4 Suppose there is an element strictly between $x$ and $y$. The finite nonempty chain $(x,y]$ has a least element $c$: starting with any element, successively retain the smaller one while traversing a finite enumeration. Then $c$ covers $x$ and $c<y$. [given, construct]

2.1 For every $z$ with $c<z<y$, the interval $[x,z]$ is a proper subset of $[x,y]$ and contains the intermediate element $c$, so the inductive hypothesis and [L3] give $\mu(x,z)=0$. [step 1.3, step 1.4, L3]

3.1 The recurrence now gives $\mu(x,y)=-\sum_{x\le z<y}\mu(x,z)=-(\mu(x,x)+\mu(x,c))=-(1-1)=0$. [step 1.1, step 1.2, step 2.1, L1]

4.1 The diagonal and cover cases are steps 1.1 and 1.2; step 3.1 proves the longer-interval case from all smaller intervals, so strong induction completes the formula. [step 1.1, step 1.2, step 1.3, step 3.1, L2, discharge-induction] ∎
