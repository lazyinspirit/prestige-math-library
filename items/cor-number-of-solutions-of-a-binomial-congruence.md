---
id: cor-number-of-solutions-of-a-binomial-congruence
kind: corollary
title: "If $n$ has a primitive root, $\\gcd(a,n)=1$, $m\\ge1$, and $x^m\\equiv a\\pmod n$ is solvable, then it has exactly $\\gcd(\\varphi(n),m)$ solution classes modulo $n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-index-calculus-modulo-n, def-index-of-a-unit-relative-to-a-primitive-root, thm-linear-congruence-solvability-and-solution-count, thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.III.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ admit a primitive root, let $\gcd(a,n)=1$, and let $m\ge1$. If $x^m\equiv a\pmod n$ is solvable, then it has exactly

$$\gcd(\varphi(n),m)$$

solution classes modulo $n$.

## Facts & Assumptions

**Given:** The stated hypotheses and the solvability of $x^m\equiv a\pmod n$.

[L1] Relative to a primitive root $g$, every unit has a unique index modulo $\varphi(n)$ ([[def-index-of-a-unit-relative-to-a-primitive-root]]).

[L2] The index of $x^m$ is congruent to $m\operatorname{ind}_g(x)$ modulo $\varphi(n)$ ([[prop-index-calculus-modulo-n]]).

[L3] For $u,v\in\mathbb Z$ and $f\ge1$, the congruence $uy\equiv v\pmod f$ is solvable exactly when $\gcd(u,f)\mid v$, and when solvable it has exactly $\gcd(u,f)$ solution classes in $\mathbb Z/f$ ([[thm-linear-congruence-solvability-and-solution-count]]).

[L4] A class modulo $n$ is a unit exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 Choose a primitive root $g$, put $f=\varphi(n)$, and let $r=\operatorname{ind}_g(a)$. [L1, choose]

1.2 By [L4], $a$ is a unit. If $x^m=a$, then $x\bigl(x^{m-1}a^{-1}\bigr)=1$, so every solution $x$ is a unit. [L4, given, algebra]

2.1 By [L1], exponent classes $y$ modulo $f$ parametrise unit classes bijectively as $x=g^y$, and by [L2] the solutions correspond exactly to the classes satisfying $my\equiv r\pmod f$. [step 1.1, step 1.2, L1, L2]

3.1 Here $f=\varphi(n)\ge1$, so [L3] applies; the latter congruence is solvable by the Given, so [L3] gives exactly $\gcd(m,f)=\gcd(\varphi(n),m)$ classes; the bijection in step 2.1 preserves this count, including when $n=1$ or $m=1$. [step 2.1, L3] ∎
