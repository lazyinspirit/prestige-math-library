---
id: prop-jacobi-symbol-on-units-is-a-homomorphism
kind: proposition
title: "For fixed odd modulus, the Jacobi symbol is a homomorphism on the unit group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-well-defined, thm-jacobi-symbol-multiplicativity,
       def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n,
       def-group-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Fix an odd positive integer $n$. The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$.

Here $\{\pm1\}$ is the two-element multiplicative group, except that the image is the one-element subgroup $\{1\}$ when the character is trivial.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and unit classes $[a]_n,[b]_n\in(\mathbb Z/n)^\times$.

[L1] The Jacobi symbol belongs to $\{-1,0,1\}$, depends only on $a\pmod n$, and is zero exactly when $\gcd(a,n)>1$ ([[prop-jacobi-symbol-well-defined]]).

[L2] For odd positive $n$, $\left(\frac{ab}{n}\right)=\left(\frac an\right)\left(\frac bn\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L3] The unit group $(\mathbb Z/n)^\times$ consists of the invertible residue classes modulo $n$ under multiplication ([[def-unit-group-modulo-n-and-euler-totient]]).

[L4] The class $[a]_n$ is a unit if and only if $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

[L5] A group homomorphism $f:G\to H$ is a function satisfying $f(xy)=f(x)f(y)$ for all $x,y\in G$ ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the value $\left(\frac an\right)$ depends only on the residue class. By [L3] and [L4], a unit class has $\gcd(a,n)=1$, so [L1] rules out the value zero; hence $\chi_n$ is a well-defined function from $(\mathbb Z/n)^\times$ to $\{\pm1\}$. [L1, L3, L4]

2.1 For unit classes $[a]_n$ and $[b]_n$, [L2] gives $\chi_n([a]_n[b]_n)=\chi_n([ab]_n)=\chi_n([a]_n)\chi_n([b]_n)$, which is the condition in [L5]. Thus $\chi_n$ is a group homomorphism, including when $n=1$ and the unit group has one element. [step 1.1, L2, L5] ∎
