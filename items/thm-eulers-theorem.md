---
id: thm-eulers-theorem
kind: theorem
title: "Euler's theorem: if $n\\ge1$ and $\\gcd(a,n)=1$, then $a^{\\varphi(n)}\\equiv1\\pmod n$"
status: published
origin: session
deps: [cor-g-to-the-group-order-is-identity, def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n, def-addition-and-multiplication-modulo-n, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic, def-group-power]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

Let $n\ge1$ be an integer and let $a\in\mathbb Z$. If $\gcd(a,n)=1$, then

$$a^{\varphi(n)}\equiv1\pmod n.$$

## Facts & Assumptions

**Given:** A positive integer $n$ and an integer $a$ with $\gcd(a,n)=1$.

[F1] The unit group $(\mathbb Z/n)^\times$ is finite of order $\varphi(n)$ and has identity $[1]_n$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L1] The class $[a]_n$ is a unit if and only if $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

[L2] Every element $u$ of a finite group satisfies $u^{|G|}=e$ ([[cor-g-to-the-group-order-is-identity]], [[def-group-power]]).

[F2] Multiplication of residue classes satisfies $[x]_n[y]_n=[xy]_n$, so natural powers satisfy $[a]_n^k=[a^k]_n$; and $[x]_n=[y]_n$ exactly when $x\equiv y\pmod n$ ([[def-addition-and-multiplication-modulo-n]], [[def-congruence-modulo-an-integer]], [[lem-congruence-respects-integer-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $[a]_n\in(\mathbb Z/n)^\times$. Applying [L2] in that group gives $[a]_n^{\varphi(n)}=[1]_n$. [given, F1, L1, L2]

2.1 By [F2], the equality is $[a^{\varphi(n)}]_n=[1]_n$, which is equivalent to $a^{\varphi(n)}\equiv1\pmod n$. [step 1.1, F2] ∎
