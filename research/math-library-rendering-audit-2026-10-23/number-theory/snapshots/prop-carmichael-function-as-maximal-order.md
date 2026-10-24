---
id: prop-carmichael-function-as-maximal-order
kind: proposition
title: "Carmichael's $\\lambda(n)$ is the maximum order of a unit modulo $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-carmichael-function, thm-structure-of-the-unit-group-modulo-n, lem-order-characterisation, def-lcm, thm-gcd-lcm-product, thm-order-of-element-in-direct-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Lemma C.V.5"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

For every $n\ge1$ there is a unit modulo $n$ of order $\lambda(n)$, and every unit has order dividing $\lambda(n)$. Thus $\lambda(n)$ is the maximum element order in $(\mathbb Z/n)^\times$.

## Facts & Assumptions

**Given:** A positive integer $n$.

[L1] $\lambda(n)$ is the exponent of the unit group ([[def-carmichael-function]]).

[L2] The unit group is a finite direct product of cyclic groups with the explicit $2$-power factors described in [[thm-structure-of-the-unit-group-modulo-n]].

[L3] An element of order $r$ is killed precisely by the multiples of $r$ ([[lem-order-characterisation]]).

[L4] For $a,b\in\mathbb Z$ both nonzero, $\operatorname{lcm}(a,b)$ is the least positive common multiple of $a$ and $b$; if $a=0$ or $b=0$ then the only common multiple is $0$ and $\operatorname{lcm}(a,b)=0$. It is defined for two arguments only ([[def-lcm]]).

[L5] Every common multiple of $a$ and $b$ is a multiple of $\operatorname{lcm}(a,b)$ ([[thm-gcd-lcm-product]]).

[L6] If $g$ and $h$ have finite orders $m,n\ge1$, then $\operatorname{ord}(g,h)=\operatorname{lcm}(m,n)$ in the external direct product ([[thm-order-of-element-in-direct-product]]).

## Proof

**Proof technique:** direct.

1.1 In the decomposition [L2], choose a generator in every cyclic factor, including generators of both cyclic factors in the exceptional $2$-power component. [L2, choose]

1.2 Let $r_0,\ldots,r_{k-1}$ be the orders of the chosen generators and define the iterated least common multiple from the binary operation of [L4] by $\ell_0=1$ and $\ell_{s+1}=\operatorname{lcm}(\ell_s,r_s)$; [L4] supplies only the binary operation, so this recursion is what gives the list value. Induction on $s$ shows a positive $m$ satisfies $\ell_s\mid m$ exactly when $r_i\mid m$ for every $i<s$: at $s=0$ both sides always hold, and $\ell_{s+1}\mid m$ holds exactly when $\ell_s\mid m$ and $r_s\mid m$, by [L5] one way and because both divide $\ell_{s+1}$ the other. By [L3] a power kills the product exactly when it is divisible by every $r_i$, so the exponent of the product is $\ell_k$. [L1, L2, L3, L4, L5, algebra]

2.1 The tuple of chosen generators has order $\ell_k$: iterating [L6] over the $k$ factors gives $\operatorname{ord}$ of the tuple as the same iterated least common multiple, with the empty product contributing the identity of order $\ell_0=1$. [step 1.1, step 1.2, L3, L4, L6]

3.1 Steps 2.1 and 1.2 produce a unit of order $\lambda(n)$, while [L1] makes every element order divide $\lambda(n)$. The empty product at $n=1$ gives the identity of order $1$. [step 2.1, step 1.2, L1, L2] ∎
