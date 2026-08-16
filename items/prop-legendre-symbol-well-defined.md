---
id: prop-legendre-symbol-well-defined
kind: proposition
title: "The Legendre symbol is well defined on residue classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, prop-quadratic-residue-is-representative-independent, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$, the Legendre symbol belongs to $\{-1,0,1\}$, depends only on the numerator modulo $p$, and satisfies

$$\left(\frac ap\right)=0\quad\Longleftrightarrow\quad p\mid a.$$

## Facts & Assumptions

**Given:** An odd prime $p$ and integers $a,b$ with $a\equiv b\pmod p$.

[L1] The Legendre symbol is $0$ on a numerator divisible by $p$, $1$ on a quadratic residue modulo $p$, and $-1$ on a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] The congruence $a\equiv b\pmod p$ means that $p$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

[L3] Quadratic residuosity of a unit integer depends only on its residue class ([[prop-quadratic-residue-is-representative-independent]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $p\mid(a-b)$, so $p\mid a$ exactly when $p\mid b$. Thus congruent numerators enter the zero branch of [L1] simultaneously. [L1, L2, given]

2.1 If $p\nmid a$, then also $p\nmid b$ by step 1.1, and [L3] says that $a$ and $b$ are simultaneously quadratic residues or simultaneously nonresidues. Hence [L1] assigns them the same sign. [L1, L3, step 1.1]

3.1 The three disjoint branches in [L1] give only the values $-1,0,1$; step 1.1 proves that divisibility gives value zero, and the two unit branches give nonzero values. Therefore the symbol is representative-independent and is zero exactly when $p$ divides its numerator. [L1, step 1.1, step 2.1] ∎
