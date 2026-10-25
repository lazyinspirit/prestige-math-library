---
id: cor-the-reduced-cyclotomic-polynomial-is-irreducible-exactly-when-q-generates-the-unit-group
kind: corollary
title: "The reduction of $\\Phi_n$ is irreducible over $\\mathbb F_q$ exactly when $[q]$ generates $(\\mathbb Z/n)^\\times$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, def-cyclotomic-polynomial, def-unit-group-modulo-n-and-euler-totient, def-order-in-a-group, lem-order-characterisation, def-irreducible-and-prime-elements-in-a-domain, def-generated-subgroup, def-polynomial-degree-leading-coefficient-and-monic, def-coprime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Corollary 5.7"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "K. Conrad, Finite Fields (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$ and $n\ge1$ with
$\gcd(n,q)=1$ ([[def-coprime]]). The image of $\Phi_n$ in $\mathbb F_q[t]$
([[def-cyclotomic-polynomial]]) is irreducible
([[def-irreducible-and-prime-elements-in-a-domain]]) if and only if $[q]_n$
generates $(\mathbb Z/n)^{\times}$ ([[def-generated-subgroup]],
[[def-unit-group-modulo-n-and-euler-totient]]). In particular this can happen
only when $(\mathbb Z/n)^{\times}$ is cyclic.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of order $q$ and $n\ge1$ with $\gcd(n,q)=1$; write $d:=\operatorname{ord}([q]_n)$ ([[def-order-in-a-group]]) and $\bar\Phi_n$ for the image of $\Phi_n$ in $\mathbb F_q[t]$.

[L1] $\bar\Phi_n$ is a product of pairwise distinct monic irreducible polynomials, each of degree $d$, and there are $\varphi(n)/d$ of them ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]]).

[L2] $\Phi_n$ is monic of degree $\varphi(n)$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L3] $\bigl|(\mathbb Z/n)^{\times}\bigr|=\varphi(n)$ ([[def-unit-group-modulo-n-and-euler-totient]]), and $\bigl|\langle x\rangle\bigr|=\operatorname{ord}(x)$ for an element of finite order ([[lem-order-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the number of monic irreducible factors of $\bar\Phi_n$, counted without repetition and with none repeated, is $r=\varphi(n)/d$. [L1]

2.1 If $r=1$ then $\bar\Phi_n$ is itself one of those monic irreducible polynomials, hence irreducible; if $r\ge2$ then $\bar\Phi_n$ is a product of $r$ polynomials each of degree $d\ge1$, none of them a unit, so it is not irreducible. Hence $\bar\Phi_n$ is irreducible exactly when $r=1$, that is exactly when $d=\varphi(n)$. [step 1.1, L1, L2]

3.1 By [L3] the subgroup $\langle[q]_n\rangle$ has order $d$ and $(\mathbb Z/n)^{\times}$ has order $\varphi(n)$, so $d=\varphi(n)$ holds exactly when $\langle[q]_n\rangle=(\mathbb Z/n)^{\times}$, that is exactly when $[q]_n$ generates the unit group. With step 2.1 this proves the equivalence, and a group with a generator is cyclic. [step 2.1, L3] ∎

## Remarks

- **When the criterion cannot be met at all.** If $(\mathbb Z/n)^{\times}$ is not cyclic then no class generates it, so the reduction of $\Phi_n$ is reducible over every finite field of order coprime to $n$; the smallest such $n$ is $8$, where $(\mathbb Z/8)^{\times}$ has three elements of order two and no element of order four.
