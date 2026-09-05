---
id: ex-dirichlet-characters-modulo-eight-and-twelve
kind: example
title: "Dirichlet character tables modulo 8 and 12"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-character-modulo-q, def-principal-dirichlet-character]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, Number Theory I, Example 18.18"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

The moduli $8$ and $12$ illustrate noncyclic unit groups and the resulting
character tables.

## Facts & Assumptions

**Given:** The definition of Dirichlet characters and of the principal
character ([[def-dirichlet-character-modulo-q]],
[[def-principal-dirichlet-character]]).

## Verification

**Proof technique:** direct.

1.1 The unit groups $(\mathbb Z/8\mathbb Z)^\times=\{1,3,5,7\}$ and $(\mathbb Z/12\mathbb Z)^\times=\{1,5,7,11\}$ are both isomorphic to $C_2\times C_2$. Hence each has four homomorphisms to $\{\pm1\}$. For modulus $8$, taking signs independently on the generators $3$ and $5$ produces the four characters with values $(0,1,0,\pm1,0,\pm1,0,\pm1)$ on the classes $0,\dots,7$, subject to $\chi(7)=\chi(3)\chi(5)$. [given, algebra]

2.1 The same construction for modulus $12$ uses the generators $5$ and $7$, with $\chi(11)=\chi(5)\chi(7)$. Thus all four characters have zeroes on the nonunits and values $(0,1,0,0,0,\pm1,0,\pm1,0,0,0,\pm1)$ on $0,\dots,11$. Because every homomorphism from $C_2\times C_2$ to $\{\pm1\}$ is determined by the chosen signs on a basis, these are all the Dirichlet characters modulo $8$ and $12$. [step 1.1, given, algebra] ∎
