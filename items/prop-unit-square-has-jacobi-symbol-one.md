---
id: prop-unit-square-has-jacobi-symbol-one
kind: proposition
title: "A unit square modulo an odd integer has Jacobi symbol one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-on-units-is-a-homomorphism,
       thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

If $a$ is a unit square modulo an odd positive integer $n$, then $\left(\frac an\right)=1$.

Explicitly, if $\gcd(a,n)=1$ and $x^2\equiv a\pmod n$ for some integer $x$, then the Jacobi symbol of $a$ modulo $n$ is $1$.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and integers $a,x$ such that $\gcd(a,n)=1$ and $x^2\equiv a\pmod n$.

[L1] The assignment $\chi_n([u]_n)=\left(\frac un\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$ ([[prop-jacobi-symbol-on-units-is-a-homomorphism]]).

[L2] A residue class $[u]_n$ is a unit if and only if $\gcd(u,n)=1$ ([[thm-unit-criterion-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $[a]_n$ is a unit. If $v$ is its inverse, then $[x]_n([x]_n v)=[x]_n^2v=[a]_nv=[1]_n$, so $[x]_n$ is also a unit and lies in the domain of [L1]. [L1, L2, given, algebra]

2.1 Applying [L1] to $[a]_n=[x]_n^2$ gives $\left(\frac an\right)=\chi_n([a]_n)=\chi_n([x]_n)^2=1$, since $\chi_n([x]_n)\in\{\pm1\}$. [step 1.1, L1, algebra] ∎
