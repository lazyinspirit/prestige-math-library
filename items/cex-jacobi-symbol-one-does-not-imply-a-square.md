---
id: cex-jacobi-symbol-one-does-not-imply-a-square
kind: counterexample
title: "Jacobi symbol one does not imply a square: $(2/15)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, prop-unit-square-has-jacobi-symbol-one]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, Note 1.3"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
pipeline_run: null
---

## Statement refuted

The converse of [[prop-unit-square-has-jacobi-symbol-one]] is false: a unit $a$ with $\left(\frac an\right)=1$ need not be a square modulo the odd positive integer $n$.

## Facts & Assumptions

**Given:** The unit numerator $2$ and the odd denominator $15=3\cdot5$.

[L1] For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$ ([[def-jacobi-symbol]]).

## Counterexample

**Proof technique:** direct.

1.1 The nonzero square classes modulo $3$ are $\{1\}$ and those modulo $5$ are $\{1,4\}$, so $(2/3)=-1$ and $(2/5)=-1$. Using $15=3\cdot5$ in [L1] gives $(2/15)=(-1)(-1)=1$. [L1, given, algebra]

2.1 If $x^2\equiv2\pmod{15}$, reduction modulo $3$ would give $x^2\equiv2\pmod3$, but the complete square set modulo $3$ is $\{0,1\}$. Thus $2$ is not a square modulo $15$, despite its Jacobi symbol being $1$. [step 1.1, algebra] ∎
