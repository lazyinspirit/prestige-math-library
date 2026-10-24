---
id: ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared
kind: example
title: "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, def-external-semidirect-product, thm-totient-of-a-prime-power, thm-unit-criterion-modulo-n]
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
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Example

For every prime $p$, the affine group of $\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\mapsto ax+b$ with $a\equiv1\pmod p$. It has order $p^3$, including when $p=2$. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

[L4] For every prime $p$ and natural $k\ge1$, $$\varphi(p^k)=p^k-p^{k-1}.$$ Equivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are exactly those whose standard representatives are divisible by $p$. ([[thm-totient-of-a-prime-power]]).

[L5] Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$ (def-unit-group-modulo-n-and-euler-totient) if and only if $$\gcd(a,n)=1,$$ that is, if and only if $a$ and $n$ are coprime (def-coprime). Consequently the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$. ([[thm-unit-criterion-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 The affine group is $(\mathbb Z/p^2)\rtimes(\mathbb Z/p^2)^\times$ and has order $p^2\varphi(p^2)=p^3(p-1)$. Reduction of the multiplier modulo $p$ is a homomorphism to $(\mathbb Z/p)^\times$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its kernel consists of arbitrary translations and the $p$ units $1+pt$ with $t\in\mathbb Z/p$. It is therefore normal of order $p^2\cdot p=p^3$, the full $p$-part of the affine-group order, and so is the unique Sylow $p$-subgroup. [step 1.1, given, algebra]

3.1 For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim. [step 2.1, given, algebra] ∎
