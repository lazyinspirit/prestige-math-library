---
id: thm-cycle-index-of-cyclic-group
kind: theorem
title: "The cycle index of the cyclic group C_n"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cycle-index-of-a-permutation-group,
       def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
    - title: "Eric W. Weisstein, Cycle Index, Wolfram MathWorld"
      url: "https://mathworld.wolfram.com/CycleIndex.html"
pipeline_run: null
---

## Statement

Let $C_n$ act on the vertices of a labelled $n$-gon by rotation, with $n \ge 1$.
Then

$$Z(C_n)=\frac{1}{n}\sum_{d \mid n}\varphi(d)\,s_d^{n/d}.$$

## Facts & Assumptions

**Given:** an integer $n \ge 1$ and the rotation action of $C_n$ on the vertices of a labelled $n$-gon.

[A1] A rotation by $r$ steps sends each vertex $i$ to $i+r \pmod n$.

[L1] Euler's totient satisfies $\varphi(d)=|(\mathbb{Z}/d)^\times|$ ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

**Proof technique:** direct.

1.1 A rotation by $r$ steps decomposes the $n$ vertices into $\gcd(n,r)$ cycles, each of length $n/\gcd(n,r)$. Therefore its cycle-index monomial is $s_{n/\gcd(n,r)}^{\gcd(n,r)}$. [A1, algebra]

2.1 Fix a divisor $d$ of $n$. A rotation contributes the monomial $s_d^{n/d}$ exactly when its cycles have length $d$, equivalently when its step size has the form $r=(n/d)a$ with $a$ coprime to $d$. Indeed, the order of the rotation by $r$ is the least positive $m$ with $mr \equiv 0 \pmod n$, and for $r=(n/d)a$ this least $m$ is exactly $d$ when $\gcd(a,d)=1$. Therefore the rotations of order $d$ are in bijection with the units $a \in (\mathbb{Z}/d)^\times$, so there are $\varphi(d)$ of them by [L1]. [step 1.1, L1, algebra]

3.1 Average the monomials over all $n$ rotations. Grouping them by the divisor $d$ from step 2.1 yields $Z(C_n)=\frac{1}{n}\sum_{d \mid n}\varphi(d)\,s_d^{n/d}$. [step 2.1] ∎
