---
id: thm-count-of-quadratic-residues-modulo-prime
kind: theorem
title: "An odd prime has $(p-1)/2$ nonzero quadratic residues and as many nonresidues"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quadratic-residues-subgroup-modulo-prime, thm-lagrange, cor-unit-group-modulo-prime-is-cyclic, cor-number-of-solutions-of-a-binomial-congruence, cor-primitive-roots-modulo-prime, cor-totient-at-one-and-at-a-prime, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Mascot, Legendre Symbols and Quadratic Reciprocity, Chapter 3"
      url: "https://www.maths.tcd.ie/~mascotn/teaching/2020/MAU23101/3%20Legendre.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For an odd prime $p$, exactly $(p-1)/2$ nonzero classes are quadratic residues modulo $p$, and exactly $(p-1)/2$ are quadratic nonresidues. Each nonzero quadratic residue has exactly two square roots modulo $p$, while each nonresidue has none.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] The nonzero quadratic-residue classes form an index-two subgroup of $(\mathbb Z/p)^\times$ ([[thm-quadratic-residues-subgroup-modulo-prime]]).

[L2] If $G$ is finite and $H\le G$, then $|G|=[G:H]|H|$ ([[thm-lagrange]]).

[L3] Under its primitive-root, coprimality, positivity, and solubility hypotheses, $x^m\equiv a\pmod n$ has exactly $\gcd(\varphi(n),m)$ solution classes ([[cor-number-of-solutions-of-a-binomial-congruence]]).

[L4] Every prime admits a primitive root modulo that prime ([[cor-primitive-roots-modulo-prime]]).

[L5] For every prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L6] The group $(\mathbb Z/p)^\times$ is cyclic of order $p-1$ ([[cor-unit-group-modulo-prime-is-cyclic]]).

[L7] If $p\nmid a$, then $p$ and $a$ are coprime ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 Let $Q$ be the subgroup of nonzero square classes. By [L1], $[G:Q]=2$ for $G=(\mathbb Z/p)^\times$, and [L6] gives $|G|=p-1$; hence [L2] gives $|Q|=(p-1)/2$. Its complement in $G$ has the same cardinality and consists of the nonresidues. [L1, L2, L6, given]

1.2 If $a$ represents a class in $Q$, then $p\nmid a$, so [L7] gives $\gcd(a,p)=1$. Facts [L4] and [L5] discharge the prime specialisation of [L3], which gives $\gcd(p-1,2)=2$ roots because $p$ is odd. [L3, L4, L5, L7, algebra]

2.1 A nonresidue has no square root by the description of $Q$ in [L1], while step 1.2 gives exactly two roots for each member of $Q$. Together with step 1.1, this proves all assertions. [L1, step 1.1, step 1.2] ∎
