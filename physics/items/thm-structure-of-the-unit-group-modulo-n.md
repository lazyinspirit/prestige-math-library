---
id: thm-structure-of-the-unit-group-modulo-n
kind: theorem
title: "The unit group modulo $n$ is the product of its odd-prime cyclic factors and its explicit $2$-power factor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-group-chinese-remainder-decomposition, thm-unit-group-modulo-odd-prime-power-is-cyclic, thm-unit-group-modulo-two-power-structure, thm-canonical-prime-factorisation, thm-totient-of-a-prime-power, def-unit-group-modulo-n-and-euler-totient, cor-prime-order-group-is-cyclic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, §§C.IV–C.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ have prime-power factorisation $n=2^a\prod_{i<r}p_i^{k_i}$, where the $p_i$ are distinct odd primes and $k_i\ge1$. Then

$$ (\mathbb Z/n)^\times\cong U_{2,a}\times\prod_{i<r}C_{p_i^{k_i-1}(p_i-1)},$$

where $U_{2,0}$ and $U_{2,1}$ are trivial, $U_{2,2}=C_2$, and

$$U_{2,a}=C_2\times C_{2^{a-2}}\quad(a\ge3).$$

For $n=1$ the product is empty and hence trivial.

## Facts & Assumptions

**Given:** A positive integer $n$ and its displayed prime-power factorisation.

[L1] CRT gives an isomorphism from a unit group to the product of the unit groups of pairwise coprime factors ([[thm-unit-group-chinese-remainder-decomposition]]).

[L2] For odd $p$, $(\mathbb Z/p^k)^\times$ is cyclic of order $p^{k-1}(p-1)$ ([[thm-unit-group-modulo-odd-prime-power-is-cyclic]]).

[L3] For $a\ge3$, $(\mathbb Z/2^a)^\times\cong C_2\times C_{2^{a-2}}$ ([[thm-unit-group-modulo-two-power-structure]]).

[L4] Given an injective list of primes containing every prime divisor of $n\ge1$, one has $n=\prod_ip_i^{v_{p_i}(n)}$, the exponents being determined by $n$ ([[thm-canonical-prime-factorisation]]). The Given of this theorem supplies exactly such a list, namely the primes of the displayed factorisation.

[L5] $\varphi(2)=1$ and $\varphi(4)=2$ by the prime-power formula ([[thm-totient-of-a-prime-power]]).

[L7] The totient is the cardinality of the unit group: $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L6] Every group of prime order is cyclic ([[cor-prime-order-group-is-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], the displayed factors are pairwise coprime, so [L1] decomposes the unit group into its $2$-power factor and the odd-prime-power factors. [L4, L1]

2.1 Substitute [L2] for every odd factor and [L3] for the $2$-power factor when $a\ge3$. [step 1.1, L2, L3]

2.2 If $a=0$ there is no $2$-factor. If $a=1$, then [L5] gives $\varphi(2)=1$ and [L7] reads that as $\bigl|(\mathbb Z/2)^\times\bigr|=1$, so the unit group is trivial. If $a=2$, then [L5] and [L7] give $\bigl|(\mathbb Z/4)^\times\bigr|=2$, prime order, so [L6] makes it cyclic. [step 1.1, L5, L6, L7]

3.1 Steps 2.1 and 2.2 give the asserted decomposition. When $n=1$, [L1] identifies the empty product with the one-element unit group. [step 2.1, step 2.2, L1] ∎
