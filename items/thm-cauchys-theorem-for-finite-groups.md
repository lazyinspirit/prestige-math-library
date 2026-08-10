---
id: thm-cauchys-theorem-for-finite-groups
kind: theorem
title: "Cauchy's theorem: if a prime $p$ divides $|G|$, then $G$ has an element of order $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-p-group-fixed-point-congruence, def-finite-p-group, thm-integers-modulo-n-basic-algebra, def-integers-modulo-n, thm-standard-representatives-modulo-n, thm-cardinality-of-a-set-of-functions, def-nat-power, def-prime, def-divides-in-z, def-order-in-a-group, lem-order-characterisation]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 5.7"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $p$ be prime. If $p\mid|G|$, then $G$
contains an element of order $p$.

## Facts & Assumptions

**Given:** A finite group $G$ and a prime $p$ dividing $|G|$.

[L1] A finite $p$-group acting on a finite set satisfies the fixed-point congruence ([[thm-p-group-fixed-point-congruence]]).

[L2] The additive group $\mathbb Z/p$ is a group with $p$ elements and hence is a finite $p$-group ([[thm-integers-modulo-n-basic-algebra]], [[def-integers-modulo-n]], [[thm-standard-representatives-modulo-n]], [[def-finite-p-group]]).

[L3] If $A$ and $B$ are finite, the set of functions $B\to A$ has cardinality $|A|^{|B|}$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

[L4] A prime is greater than $1$ and has only $1$ and itself as positive divisors ([[def-prime]]).

[L5] Divisibility means existence of an integer factor ([[def-divides-in-z]]).

[L6] The order of an element is the least positive exponent giving the identity ([[def-order-in-a-group]], [[lem-order-characterisation]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\Omega$ be the set of $p$-tuples $(g_0,\ldots,g_{p-1})\in G^p$ whose ordered product is $e$. The first $p-1$ coordinates determine the last uniquely as $(g_0\cdots g_{p-2})^{-1}$, so [L3] gives $|\Omega|=|G|^{p-1}$; since $p\mid|G|$ and $p-1\ge1$, one has $p\mid|\Omega|$. [L3, L4, L5, construct]

2.1 Let $1\in\mathbb Z/p$ act on $\Omega$ by cyclic rotation. If $g_0\cdots g_{p-1}=e$, then $g_1\cdots g_{p-1}g_0=g_0^{-1}(g_0\cdots g_{p-1})g_0=e$, so rotation preserves $\Omega$; $p$ rotations are the identity, and [L2] therefore gives an action of the finite $p$-group $\mathbb Z/p$. [step 1.1, L2]

3.1 A tuple is fixed by every rotation exactly when it is constant, say $(g,\ldots,g)$, and it lies in $\Omega$ exactly when $g^p=e$. [step 2.1, L6]

3.2 By [L1], $|\Omega|\equiv|\Omega^{\mathbb Z/p}|\pmod p$. Step 1.1 makes the left side divisible by $p$, so the number of fixed tuples is divisible by $p$. The constant identity tuple is fixed, and a positive multiple of $p>1$ cannot equal $1$, so there is another fixed tuple. [step 1.1, step 2.1, L1, L4, L5]

4.1 By step 3.1, this second tuple is $(g,\ldots,g)$ for some $g\ne e$ with $g^p=e$. By [L6], the positive order of $g$ divides the prime $p$ and is not $1$, so it is $p$. [step 3.1, step 3.2, L4, L6, discharge-construct] ∎
