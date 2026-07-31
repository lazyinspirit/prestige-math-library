---
id: ex-zero-divisors-modulo-composites
kind: example
title: "A modulus $n>1$ is composite exactly when two nonzero classes in $\\mathbb Z/n$ have product $[0]_n$"
status: published
origin: session
deps: [def-prime, def-addition-and-multiplication-modulo-n, thm-unit-criterion-modulo-n, thm-standard-representatives-modulo-n, def-common-divisor-and-gcd]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
pipeline_run: null
---

## Example

For every integer $n>1$, the following are equivalent:

1. $n$ is composite.
2. There are nonzero classes $u,v\in\mathbb Z/n$ with $uv=[0]_n$.

## Facts & Assumptions

**Given:** An integer $n>1$.

[L1] A positive integer greater than $1$ is composite exactly when it has a divisor $d$ with $1<d<n$; otherwise it is prime ([[def-prime]]).

[L2] Products in $\mathbb Z/n$ are computed on representatives, and the quotient has standard representatives $0,\ldots,n-1$ ([[def-addition-and-multiplication-modulo-n]], [[thm-standard-representatives-modulo-n]]).

[L3] A class $[a]_n$ is a unit exactly when $\gcd(a,n)=1$, and the gcd is a nonnegative common divisor that is positive when its arguments are not both zero ([[thm-unit-criterion-modulo-n]], [[def-common-divisor-and-gcd]]).

## Verification

**Proof technique:** direct.

1.1 If $n$ is composite, write $n=ab$ with $1<a<n$ and $1<b<n$. Then $[a]_n$ and $[b]_n$ are nonzero standard classes, but $[a]_n[b]_n=[ab]_n=[n]_n=[0]_n$. [L1, L2]

1.2 Conversely, suppose nonzero classes have product zero and choose their standard representatives $a,b$, so $0<a,b<n$ and $n\mid ab$. The class $[a]_n$ cannot be a unit, because multiplying an equation $[a]_n[b]_n=[0]_n$ by its inverse would give $[b]_n=[0]_n$. Hence $d:=\gcd(a,n)>1$ by [L3]. Since $d\mid a$ and $0<a<n$, one also has $d<n$, so $d$ is a nontrivial divisor of $n$ and $n$ is composite by [L1]. [L1, L2, L3]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
