---
id: thm-unit-square-criterion-modulo-two-powers
kind: theorem
title: "Unit square criterion and root count modulo powers of two"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-group-modulo-two-power-structure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $a$ be odd.

- Modulo $2$, the congruence $x^2\equiv a\pmod2$ has exactly one solution class.
- Modulo $4$, it is soluble if and only if $a\equiv1\pmod4$, and then it has exactly two solution classes.
- For $k\ge3$, the congruence $x^2\equiv a\pmod{2^k}$ is soluble if and only if $a\equiv1\pmod8$; when soluble, the number of roots is one for modulus $2$, two for modulus $4$, and four for modulus $2^k$ with $k\ge3$.

## Facts & Assumptions

**Given:** An odd integer $a$ and an integer exponent $k\ge1$.

[L1] For $k\ge3$, every unit modulo $2^k$ has a unique representation $(-1)^\varepsilon5^j$ with $\varepsilon\in\{0,1\}$ and $j$ modulo $2^{k-2}$ ([[thm-unit-group-modulo-two-power-structure]]).

## Proof

**Proof technique:** direct.

1.1 Modulo $2$, the unique odd class is $1$ and its square is $1$. Modulo $4$, the odd classes $1$ and $3$ both square to $1$, so an odd target is soluble exactly when it is $1$ modulo $4$, and then both odd classes are roots. [given, algebra]

1.2 Let $k\ge3$ and write a unit uniquely as $(-1)^\varepsilon5^j$ by [L1]. Squaring sends $(\varepsilon,j)$ to $(0,2j)$, so a unit is a square exactly when $\varepsilon=0$ and $j$ is even. Modulo $8$, the four coordinate-parity possibilities give residues $1,5,7,3$, respectively, so this condition is equivalent to $a\equiv1\pmod8$. [L1, algebra]

2.1 The kernel of the squaring map in the coordinates of [L1] has the two choices for $\varepsilon$ and the two solutions of $2j=0$ modulo $2^{k-2}$, hence has four elements. Every nonempty fibre of a group homomorphism is a translate of its kernel, so every soluble target for $k\ge3$ has exactly four roots. Together with step 1.1, this proves all criteria and counts. [step 1.1, step 1.2, L1, algebra] ∎
