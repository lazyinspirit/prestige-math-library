---
id: ex-power-residues-modulo-seventeen
kind: example
title: "Fourth and eighth powers modulo $17$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulers-criterion-for-binomial-congruences, cor-number-of-solutions-of-a-binomial-congruence, cor-primitive-roots-modulo-prime, cor-totient-at-one-and-at-a-prime, lem-prime-not-dividing-is-coprime]
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
    - title: "A. Gorodnik, Number Theory, Lecture 9, Example 1.3"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Example

The nonzero fourth powers modulo $17$ are $1,4,13,16$, and the nonzero eighth powers are $1,16$. Each fourth-power target has four fourth roots, and each eighth-power target has eight eighth roots.

## Facts & Assumptions

**Given:** The prime modulus $17$ and nonzero target classes.

[L1] If $n\ge1$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$, and $d=\gcd(m,\varphi(n))$, then $x^m\equiv a\pmod n$ is soluble exactly when $a^{\varphi(n)/d}\equiv1\pmod n$ ([[thm-eulers-criterion-for-binomial-congruences]]).

[L2] Every prime admits a primitive root modulo that prime ([[cor-primitive-roots-modulo-prime]]).

[L3] For every prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L4] Under the hypotheses of [L1], a soluble congruence $x^m\equiv a\pmod n$ has exactly $\gcd(\varphi(n),m)$ solution classes ([[cor-number-of-solutions-of-a-binomial-congruence]]).

[L5] If $p\nmid a$, then $p$ and $a$ are coprime ([[lem-prime-not-dividing-is-coprime]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $17$ admits a primitive root, [L3] gives $\varphi(17)=16$, and [L5] supplies the coprimality of every nonzero target. Thus [L1] says that a target is a fourth power exactly when its fourth power is $1$, and an eighth power exactly when its square is $1$. [L1, L2, L3, L5, given]

2.1 Direct reduction gives the fourth-power values $1^4=4^4=13^4=16^4\equiv1$, $2^4=8^4=9^4=15^4\equiv16$, $3^4=5^4=12^4=14^4\equiv13$, and $6^4=7^4=10^4=11^4\equiv4$. Squaring the unit classes shows that the targets satisfying $a^2\equiv1$ are exactly $1,16$. These lists agree with both directions of the tests in [L1]. [L1, step 1.1, algebra]

3.1 Fact [L4] gives $\gcd(16,4)=4$ roots for each fourth-power target and $\gcd(16,8)=8$ roots for each eighth-power target. [L3, L4, step 2.1, algebra] ∎
