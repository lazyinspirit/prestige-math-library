---
id: thm-carmichael-function-formula
kind: theorem
title: "Carmichael's function on prime powers and its least-common-multiple formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-carmichael-function, thm-structure-of-the-unit-group-modulo-n, lem-order-characterisation, def-lcm, thm-gcd-lcm-product]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.V.6"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Carmichael's function satisfies $\lambda(1)=1$, and for prime powers,

$$\lambda(p^k)=p^{k-1}(p-1)\quad(p\text{ odd},\ k\ge1),$$

$$\lambda(2)=1,\qquad\lambda(4)=2,\qquad\lambda(2^k)=2^{k-2}\quad(k\ge3).$$

If $n=\prod_{i<r}q_i^{e_i}$ is its prime-power factorisation, then

$$\lambda(n)=\operatorname{lcm}_{i<r}\lambda(q_i^{e_i}).$$

Here $\operatorname{lcm}$ of a finite list is the iterated binary least common multiple of [[def-lcm]], which defines that operation for two arguments only: set $\operatorname{lcm}_{i<0}a_i:=1$ and $\operatorname{lcm}_{i<s+1}a_i:=\operatorname{lcm}\bigl(\operatorname{lcm}_{i<s}a_i,\;a_s\bigr)$. In particular the empty least common multiple is $1$, which is the value taken at $n=1$.

## Facts & Assumptions

**Given:** A positive integer $n$ and its prime-power factorisation.

[L1] $\lambda(n)$ is the exponent of the unit group ([[def-carmichael-function]]).

[L2] The structure theorem gives every prime-power factor of the unit group explicitly ([[thm-structure-of-the-unit-group-modulo-n]]).

[L3] An exponent kills an element precisely when it is divisible by that element's order ([[lem-order-characterisation]]).

[L4] For $a,b\in\mathbb Z$ both nonzero, $\operatorname{lcm}(a,b)$ is the least positive common multiple of $a$ and $b$; if $a=0$ or $b=0$ then the only common multiple is $0$ and $\operatorname{lcm}(a,b)=0$. It is defined for two arguments only ([[def-lcm]]).

[L5] Every common multiple of $a$ and $b$ is a multiple of $\operatorname{lcm}(a,b)$ ([[thm-gcd-lcm-product]]).

## Proof

**Proof technique:** direct.

1.1 Reading the exponents of the cyclic factors in [L2] gives the displayed odd-prime and $2$-power formulas, as well as $\lambda(1)=1$. [L1, L2, L3]

1.2 Let $a_0,\ldots,a_{r-1}$ be the factor exponents and $\ell_s=\operatorname{lcm}_{i<s}a_i$ as defined in the Statement from the binary operation of [L4]. Induction on $s$ shows that a positive integer $m$ satisfies $\ell_s\mid m$ exactly when $a_i\mid m$ for every $i<s$: at $s=0$ both sides hold always, since $\ell_0=1$ and the condition is vacuous; and $\ell_{s+1}=\operatorname{lcm}(\ell_s,a_s)$ divides $m$ exactly when $\ell_s\mid m$ and $a_s\mid m$, by [L5] for one direction and because $\ell_s$ and $a_s$ both divide $\ell_{s+1}$ for the other. In a finite direct product a power kills every tuple exactly when it is divisible by the exponent of each factor, by [L1] and [L3]; so the least such positive power is $\ell_r$. [L1, L3, L4, L5, algebra]

2.1 Apply step 1.2 to the CRT decomposition in [L2] to obtain the formula for general $n$, including the empty product at $n=1$. [step 1.2, L2] ∎
