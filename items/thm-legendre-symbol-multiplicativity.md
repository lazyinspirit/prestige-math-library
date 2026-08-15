---
id: thm-legendre-symbol-multiplicativity
kind: theorem
title: "The Legendre symbol is multiplicative for all integer numerators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, prop-legendre-symbol-on-units-is-homomorphism, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Theorem 1.6"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$ and all integers $a,b$,

$$\left(\frac{ab}{p}\right)=\left(\frac ap\right)\left(\frac bp\right).$$

Consequently, if $p\nmid c$, then $(ac^2/p)=(a/p)$.

## Facts & Assumptions

**Given:** An odd prime $p$ and integers $a,b,c$.

[L1] The Legendre symbol is $0$ when its numerator is divisible by $p$, $1$ on a quadratic residue, and $-1$ on a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] A class $[a]_p$ is a unit exactly when $\gcd(a,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L3] Restricted to $(\mathbb Z/p)^\times$, the Legendre symbol is a homomorphism to $\{\pm1\}$ whose kernel is the nonzero square subgroup ([[prop-legendre-symbol-on-units-is-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 If $p$ divides $a$ or $b$, then it divides $ab$. By [L1], the left side is zero and one factor on the right is zero, so the identity holds. [L1, L2, given]

2.1 If $p$ divides neither factor, then [L2] makes $[a]_p$ and $[b]_p$ units. The homomorphism identity in [L3] gives the displayed multiplicativity. [L2, L3, step 1.1]

3.1 If $p\nmid c$, then $[c]_p^2$ lies in the kernel described by [L3], so $(c^2/p)=1$. Applying the proved multiplicative identity to $a$ and $c^2$ gives $(ac^2/p)=(a/p)$. [L1, L3, step 2.1] ∎
