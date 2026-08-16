---
id: cex-product-of-two-quadratic-nonresidues-modulo-a-composite
kind: counterexample
title: "Two quadratic nonresidues modulo $15$ can have a nonresidue product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quadratic-residue-modulo-n, prop-quadratic-residue-is-representative-independent, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement refuted

The product of two quadratic nonresidues modulo an integer need not be a quadratic residue. Modulo $15$, the classes of $2$ and $7$ are nonresidues, and their product $14$ is also a nonresidue.

## Facts & Assumptions

**Given:** The composite modulus $15$.

[L1] A unit integer is a quadratic residue modulo $n$ exactly when it has a square root modulo $n$, and otherwise it is a quadratic nonresidue ([[def-quadratic-residue-modulo-n]]).

[L2] The quadratic-residue classes are exactly the image of squaring on $(\mathbb Z/n)^\times$ ([[prop-quadratic-residue-is-representative-independent]]).

[L3] A class $[a]_n$ is a unit exactly when $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L3], the units modulo $15$ are $1,2,4,7,8,11,13,14$. Squaring them gives respectively $1,4,1,4,4,1,4,1$, so [L2] identifies the square image as exactly $\{1,4\}$. [L2, L3, given, algebra]

2.1 The unit classes $2,7,14$ lie outside that image, so [L1] and [L2] make all three quadratic nonresidues modulo $15$. [L1, L2, step 1.1]

3.1 Yet $2\cdot7=14\pmod{15}$, so the product of the two nonresidues $2$ and $7$ is the nonresidue $14$. [step 2.1, algebra] ∎
