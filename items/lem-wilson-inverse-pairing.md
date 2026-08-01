---
id: lem-wilson-inverse-pairing
kind: lemma
title: "In $(\\mathbb{Z}/p)^\\times$, inversion pairs every class except $[1]_p$ and $[-1]_p$, which are the only self-inverse classes"
status: published
origin: session
deps: [thm-z-mod-p-is-a-field, def-unit-group-modulo-n-and-euler-totient, lem-inverse-unique, thm-standard-representatives-modulo-n, def-integers-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Wilson's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Prime_Numbers/3.02%3A_Wilsons_Theorem"
pipeline_run: null
---

## Statement

Let $p$ be prime. In the finite unit group $(\mathbb Z/p)^\times$, inversion
partitions all classes other than $[1]_p$ and $[-1]_p$ into disjoint pairs
$\{u,u^{-1}\}$ with distinct members. The only self-inverse classes are
$[1]_p$ and $[-1]_p$.

When $p=2$ these two displayed classes coincide, and the unit group has that
single element.

## Facts & Assumptions

**Given:** A prime $p$ and the unit group $(\mathbb Z/p)^\times$.

[L1] The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L2] Units form a finite group under multiplication and every class has one standard representative; moreover $[a]_p=[b]_p$ exactly when $a\equiv b\pmod p$, which means $p\mid(a-b)$ ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-standard-representatives-modulo-n]], [[def-integers-modulo-n]], [[def-congruence-modulo-an-integer]]).

[L3] An invertible element has a unique inverse, and every one-sided inverse equals that inverse ([[lem-inverse-unique]]).

## Proof

**Proof technique:** direct.

1.1 If a unit $u$ is self-inverse, then $u^2=[1]_p$, so $(u-[1]_p)(u+[1]_p)=[0]_p$. In a field a product is zero only if a factor is zero: if the first factor is nonzero, multiply by its inverse. Hence $u=[1]_p$ or $u=-[1]_p=[-1]_p$. [L1]

1.2 Conversely, $[1]_p^2=[1]_p$ and $[-1]_p^2=[1]_p$, so both displayed classes are self-inverse. [L1]

1.3 If $p=2$, then $2\mid(1-(-1))$, so $[1]_2=[-1]_2$; the unique nonzero standard class is $[1]_2$, and it is the only unit. [L1, L2]

2.1 On the remaining finite set, inversion has no fixed point by steps 1.1 and 1.2. Since $u$ is an inverse of $u^{-1}$, uniqueness in [L3] gives $(u^{-1})^{-1}=u$. Therefore the inversion orbits are disjoint pairs $\{u,u^{-1}\}$ with distinct members. [step 1.1, step 1.2, L2, L3]

3.1 Steps 1.1 through 2.1 prove the pairing and its boundary case. [step 1.1, step 1.2, step 2.1, step 1.3] ∎
