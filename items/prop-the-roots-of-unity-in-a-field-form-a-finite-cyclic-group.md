---
id: prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group
kind: proposition
title: "$\\mu_n(K)$ is cyclic of order dividing $n$, and has a primitive $n$-th root of unity exactly when its order is $n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-roots-of-unity-in-a-field, cor-finite-subgroups-of-units-in-a-domain-are-cyclic, thm-root-bound-for-polynomials-over-a-domain, lem-a-finite-cyclic-group-has-euler-totient-many-generators, lem-order-characterisation, def-unit-group-modulo-n-and-euler-totient, def-order-in-a-group, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 1.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Lemmas 9.1 and 9.2"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field and $n\ge1$. Then $\mu_n(K)=\{x\in K:x^{n}=1\}$
([[def-roots-of-unity-in-a-field]]) is a finite cyclic subgroup of $K^{\times}$
whose order divides $n$ ([[def-divides-in-z]]). It contains a primitive $n$-th root of unity if and only
if $\bigl|\mu_n(K)\bigr|=n$, and in that case the primitive $n$-th roots of unity
in $K$ are exactly the generators of $\mu_n(K)$, of which there are $\varphi(n)$
([[def-unit-group-modulo-n-and-euler-totient]]).

## Facts & Assumptions

**Given:** A field $K$, an integer $n\ge1$, and the subgroup $\mu_n(K)$ of $K^{\times}$ ([[def-roots-of-unity-in-a-field]]).

[L1] Let $D$ be an integral domain. Every finite subgroup $G\le D^{\times}$ of the unit group of $D$ is cyclic ([[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]).

[L2] A nonzero polynomial of degree $k$ over an integral domain has at most $k$ distinct roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L3] For an element $x$ of finite order $m$ in a group: $x^{k}=e$ if and only if $m\mid k$; and $|\langle x\rangle|=m=\operatorname{ord}(x)$ ([[lem-order-characterisation]], [[def-order-in-a-group]]).

[L4] In a cyclic group $\langle g\rangle$ of finite order $m$, the element $g^{a}$ generates the group if and only if $\gcd(a,m)=1$, and the group has exactly $\varphi(m)$ generators ([[lem-a-finite-cyclic-group-has-euler-totient-many-generators]]).

## Proof

**Proof technique:** direct.

1.1 $\mu_n(K)$ is the set of roots in $K$ of the nonzero polynomial $t^{n}-1$, of degree $n$; a field is an integral domain, so $\bigl|\mu_n(K)\bigr|\le n$ by [L2] and $\mu_n(K)$ is finite. [L2, given]

2.1 Being a finite subgroup of $K^{\times}$, $\mu_n(K)$ is cyclic by [L1]; write $m:=\bigl|\mu_n(K)\bigr|$ and fix a generator $\zeta_0$, so that $\operatorname{ord}(\zeta_0)=m$ by [L3]. [step 1.1, L1, L3]

3.1 The order $m$ divides $n$: $\zeta_0\in\mu_n(K)$ gives $\zeta_0^{\,n}=1$, and [L3] turns this into $m\mid n$. [step 2.1, L3]

3.2 If $K$ contains a primitive $n$-th root of unity $\zeta$, that is an element of order $n$, then $\zeta^{n}=1$ puts $\zeta$ in $\mu_n(K)$, and $\langle\zeta\rangle\subseteq\mu_n(K)$ has $n$ elements by [L3], so $n\le m$; with step 1.1 this forces $m=n$. [step 1.1, step 2.1, L3]

3.3 Conversely, if $m=n$ then the generator $\zeta_0$ of step 2.1 has order $n$ and so is a primitive $n$-th root of unity in $K$. [step 2.1, L3]

4.1 Suppose $m=n$. An element $x\in K$ of order $n$ lies in $\mu_n(K)=\langle\zeta_0\rangle$ and satisfies $|\langle x\rangle|=n=|\mu_n(K)|$ by [L3], so $\langle x\rangle=\mu_n(K)$ and $x$ is a generator; conversely a generator has order $n$ by [L3]. So the primitive $n$-th roots of unity in $K$ are exactly the generators of $\mu_n(K)$, and [L4] counts them as $\varphi(n)$. [step 2.1, step 3.2, step 3.3, L3, L4] ∎

## Remarks

- **Order dividing $n$, not equal to $n$.** The two failures are different in kind. Over $\mathbb Q$ the polynomial $t^{3}-1$ simply does not split, so $\mu_3(\mathbb Q)=\{1\}$; over a field of characteristic three it cannot split into distinct factors at all, since $t^{3}-1=(t-1)^{3}$ there ([[prop-p-power-roots-of-unity-in-characteristic-p]]). Only the first failure is repaired by passing to a splitting field.
