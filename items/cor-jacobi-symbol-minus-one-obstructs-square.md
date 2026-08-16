---
id: cor-jacobi-symbol-minus-one-obstructs-square
kind: corollary
title: "Jacobi symbol minus one obstructs quadratic residuosity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-unit-square-has-jacobi-symbol-one]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
pipeline_run: null
---

## Statement

Let $n$ be an odd positive integer and let $a\in\mathbb Z$ satisfy $\gcd(a,n)=1$. If $\left(\frac an\right)=-1$, then $a$ is not a square modulo $n$.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and an integer $a$ with $\gcd(a,n)=1$ and $\left(\frac an\right)=-1$.

[L1] If $a$ is a unit square modulo an odd positive integer $n$, then $\left(\frac an\right)=1$ ([[prop-unit-square-has-jacobi-symbol-one]]).

## Proof

**Proof technique:** direct.

1.1 If $a$ were a square modulo $n$, the gcd hypothesis would make it a unit square and [L1] would give $\left(\frac an\right)=1$. [L1, given]

2.1 This contradicts the given value $\left(\frac an\right)=-1$, so $a$ is not a square modulo $n$. [step 1.1, given] ∎
