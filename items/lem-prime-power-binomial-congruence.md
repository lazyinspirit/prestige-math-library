---
id: lem-prime-power-binomial-congruence
kind: lemma
title: "For odd prime $p$ and $s\\ge1$, $(1+p^su)^p\\equiv1+p^{s+1}u\\pmod {p^{s+2}}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-binomial-coefficient, thm-pascals-rule, thm-binomial-closed-formula, thm-euclids-lemma, lem-coprime-divides-product, def-congruence-modulo-an-integer, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Lemma C.IV.5"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

If $p$ is an odd prime, $s\ge1$, and $u\in\mathbb Z$, then

$$ (1+p^su)^p\equiv1+p^{s+1}u\pmod {p^{s+2}}.$$

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $s\ge1$, and $u\in\mathbb Z$.

[L1] Binomial coefficients count subsets and have their usual boundary values ([[def-binomial-coefficient]]).

[L2] Pascal's rule holds for binomial coefficients ([[thm-pascals-rule]]), and the closed factorial formula holds when the lower index does not exceed the upper one ([[thm-binomial-closed-formula]]).

[L3] If a prime divides a product, it divides one factor ([[thm-euclids-lemma]]); a divisor coprime to one factor may be cancelled from a divisibility relation ([[lem-coprime-divides-product]]).

[L4] Congruence modulo an integer is divisibility of the difference ([[def-congruence-modulo-an-integer]]).

[L5] Mathematical induction holds on $\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Induction on the exponent using [L2] gives the binomial expansion $(1+z)^p=\sum_{r=0}^{p}\binom pr z^r$ in $\mathbb Z$. [L1, L2, L5]

1.2 For $1\le r<p$, the identity $r\binom pr=p\binom{p-1}{r-1}$ follows from [L2]. Since $p\nmid r$, [L3] implies $p\mid\binom pr$. [L2, L3, algebra]

2.1 Substitute $z=p^su$ in step 1.1. For $2\le r<p$, step 1.2 makes the $r$th term divisible by $p^{1+sr}$, hence by $p^{s+2}$; the final term is divisible by $p^{sp}$, and $sp\ge s+2$ because $p\ge3$ and $s\ge1$. [step 1.1, step 1.2, algebra]

3.1 Modulo $p^{s+2}$ only the constant and linear terms remain, namely $1+p\cdot p^su=1+p^{s+1}u$, which is the asserted congruence by [L4]. [step 2.1, L4] ∎
