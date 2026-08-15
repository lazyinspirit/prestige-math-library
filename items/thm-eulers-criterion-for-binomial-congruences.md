---
id: thm-eulers-criterion-for-binomial-congruences
kind: theorem
title: "Euler's criterion: if $n$ has a primitive root, $\\gcd(a,n)=1$, and $m\\ge1$, then $x^m\\equiv a\\pmod n$ is solvable if and only if $a^{\\varphi(n)/\\gcd(\\varphi(n),m)}\\equiv1\\pmod n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primitive-root-modulo-n, def-index-of-a-unit-relative-to-a-primitive-root, prop-index-calculus-modulo-n, thm-linear-congruence-solvability-and-solution-count, def-common-divisor-and-gcd, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.III.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ admit a primitive root, let $\gcd(a,n)=1$, and let $m\ge1$. Put $d=\gcd(m,\varphi(n))$. Then

$$x^m\equiv a\pmod n$$

is solvable if and only if

$$a^{\varphi(n)/d}\equiv1\pmod n.$$

## Facts & Assumptions

**Given:** Integers $n\ge1$, $a$, and $m\ge1$ satisfying the stated hypotheses, and $d=\gcd(m,\varphi(n))$.

[L1] A primitive root has order $\varphi(n)$ ([[def-primitive-root-modulo-n]]).

[L2] Relative to a primitive root $g$, every unit has a unique index modulo $\varphi(n)$ ([[def-index-of-a-unit-relative-to-a-primitive-root]]).

[L3] Index calculus turns a power into scalar multiplication of its index ([[prop-index-calculus-modulo-n]]).

[L4] The congruence $uy\equiv v\pmod f$ is solvable exactly when $\gcd(u,f)\mid v$ ([[thm-linear-congruence-solvability-and-solution-count]]).

[L5] A greatest common divisor divides both of its arguments ([[def-common-divisor-and-gcd]]).

[L6] A class modulo $n$ is a unit exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 Choose a primitive root $g$, put $f=\varphi(n)$, and let $k=\operatorname{ind}_g(a)$. By [L6], $a$ is a unit. If $x^m=a$, then $x\bigl(x^{m-1}a^{-1}\bigr)=1$, so every solution $x$ is also a unit. [L1, L2, L6, choose, algebra]

1.2 Again by [L1] and [L3], $a^{f/d}=1$ exactly when $f\mid kf/d$. Since $d\mid f$ by [L5], this is equivalent to $d\mid k$. [L1, L3, L5, algebra]

2.1 By [L2] and [L3], writing a candidate unit as $x=g^y$ turns $x^m=a$ in the unit group into $my\equiv k\pmod f$. By [L4], this is solvable exactly when $d\mid k$. [step 1.1, L2, L3, L4]

3.1 Steps 2.1 and 1.2 give the claimed biconditional. The argument also covers $n=1$ and $m=1$, where $f=d=1$. [step 2.1, step 1.2] ∎
