---
id: cor-generators-of-a-finite-cyclic-group
kind: corollary
title: "The generators of a cyclic group of order $m$ are the $g^a$ with $\\gcd(a,m)=1$, so there are $\\varphi(m)$ of them"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-order-of-a-power-in-a-finite-cyclic-group, lem-order-characterisation, thm-unit-criterion-modulo-n, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Proposition 2.5.12"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Let $G=\langle g\rangle$ be cyclic of order $m$. The generators of $G$ are exactly the elements $g^a$ with $\gcd(a,m)=1$, for $a$ taken modulo $m$. Consequently $G$ has $\varphi(m)$ generators.

## Facts & Assumptions

**Given:** A cyclic group $G=\langle g\rangle$ of finite order $m$.

[L1] $\operatorname{ord}(g^a)=m/\gcd(a,m)$ ([[lem-order-of-a-power-in-a-finite-cyclic-group]]).

[L2] For $x$ of finite order $r$, the powers $x^0,\ldots,x^{r-1}$ are pairwise distinct and $\langle x\rangle=\{x^s:s<r\}$, so $\langle x\rangle$ is finite with $|\langle x\rangle|=\operatorname{ord}(x)$ ([[lem-order-characterisation]]).

[L3] The unit classes modulo $m$ are exactly the classes represented by integers coprime to $m$ ([[thm-unit-criterion-modulo-n]]).

[L4] There are $\varphi(m)$ units modulo $m$ ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $|\langle g^a\rangle|=\operatorname{ord}(g^a)$ and $|G|=|\langle g\rangle|=\operatorname{ord}(g)=m$. Since $\langle g^a\rangle\subseteq G$ and $G$ is finite, $g^a$ generates $G$ exactly when $|\langle g^a\rangle|=m$, that is exactly when $\operatorname{ord}(g^a)=m$. By [L1] this says $m/\gcd(a,m)=m$, equivalently $\gcd(a,m)=1$. [L1, L2, algebra]

1.2 By [L2] the powers $g^0,\ldots,g^{m-1}$ are pairwise distinct, so distinct exponent classes modulo $m$ give distinct powers of $g$. [L2]

2.1 By [L3] and [L4], exactly $\varphi(m)$ exponent classes satisfy the condition in step 1.1, proving the count. [step 1.1, step 1.2, L3, L4] ∎
