---
id: thm-jacobi-map-kernel-and-square-subgroup
kind: theorem
title: "The kernel of the Jacobi map and the subgroup of unit squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-on-units-is-a-homomorphism,
       prop-unit-square-has-jacobi-symbol-one,
       thm-unit-square-criterion-modulo-odd-prime-powers,
       cor-number-of-square-roots-of-a-unit-modulo-n,
       thm-unit-group-modulo-odd-prime-power-is-cyclic,
       thm-unit-group-chinese-remainder-decomposition,
       def-kernel-and-image-of-group-homomorphism,
       def-jacobi-symbol, thm-canonical-prime-factorisation,
       lem-p-adic-valuation-additive, thm-first-isomorphism-theorem-groups,
       thm-lagrange, def-index, cor-index-tower-finite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., Exercise 12.3"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $n=\prod_{i<r}p_i^{e_i}$ be an odd positive integer in canonical prime factorisation, let $U_n=(\mathbb Z/n)^\times$, and let $U_n^2=\{u^2:u\in U_n\}$. Then

$$U_n^2\le\ker\chi_n,\qquad [U_n:U_n^2]=2^r.$$

The Jacobi homomorphism $\chi_n$ is trivial if and only if $n$ is a square. Consequently,

$$[\ker\chi_n:U_n^2]=\begin{cases}2^r,&n\text{ is a square},\\2^{r-1},&n\text{ is not a square}.\end{cases}$$

For $n=1$, one has $r=0$ and every group and index above is trivial and equal to one.

## Facts & Assumptions

**Given:** An odd positive integer $n=\prod_{i<r}p_i^{e_i}$ in canonical prime factorisation and its unit group $U_n$.

[L1] The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $U_n\to\{\pm1\}$ ([[prop-jacobi-symbol-on-units-is-a-homomorphism]]).

[L2] Every unit square modulo an odd positive integer has Jacobi symbol one ([[prop-unit-square-has-jacobi-symbol-one]]).

[L3] For odd $n=\prod_{i<r}p_i^{e_i}$, the soluble unit congruence $x^2\equiv a\pmod n$ has exactly $2^r$ roots ([[cor-number-of-square-roots-of-a-unit-modulo-n]]).

[L4] For every odd prime $p$ and $k\ge1$, the group $(\mathbb Z/p^k)^\times$ is cyclic of even order $p^{k-1}(p-1)$ ([[thm-unit-group-modulo-odd-prime-power-is-cyclic]]).

[L5] The Chinese remainder map gives $U_n\cong\prod_{i<r}(\mathbb Z/p_i^{e_i})^\times$, including the empty factorisation ([[thm-unit-group-chinese-remainder-decomposition]]).

[L6] For a group homomorphism $f:G\to H$, one has $G/\ker f\cong\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[L7] If $G$ is finite and $H\le G$, then $|G|=[G:H]|H|$ ([[thm-lagrange]]).

[L8] For a finite-index subgroup, $[G:H]=|G/H|$ ([[def-index]]).

[L9] If $K\le H\le G$ and $G$ is finite, then $[G:K]=[G:H][H:K]$ ([[cor-index-tower-finite]]).

[L10] For an odd prime $p$, a unit is a square modulo $p^k$ if and only if its Legendre symbol modulo $p$ is one ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

[L11] For a homomorphism $f:G\to H$, $\ker f=\{g\in G:f(g)=e_H\}$ and $\operatorname{im}f=\{f(g):g\in G\}$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L12] Canonical prime-factor exponents are determined by the integer ([[thm-canonical-prime-factorisation]]).

[L13] For a prime $p$ and nonzero integers $u,v$, $v_p(uv)=v_p(u)+v_p(v)$ ([[lem-p-adic-valuation-additive]]).

[L14] The Jacobi symbol is the product of the prime Legendre symbols with their canonical multiplicities ([[def-jacobi-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Since $U_n$ is abelian, the squaring map $s:U_n\to U_n$, $s(u)=u^2$, is a homomorphism with image $U_n^2$. By [L2] and the kernel definition [L11], every element of $U_n^2$ lies in $\ker\chi_n$, so $U_n^2\le\ker\chi_n$. [L1, L2, L11, algebra]

1.2 The kernel of $s$ is the root set of $x^2=1$, which has $2^r$ elements by [L3]. Applying [L6] to $s$ and then [L7] and [L8] gives $[U_n:U_n^2]=|\ker s|=2^r$. This also holds for $r=0$, when [L5] identifies $U_1$ with the one-element group. [L3, L5, L6, L7, L8, algebra]

1.3 By [L12] and [L13], $n$ is a square exactly when every exponent $e_i$ is even. In that case [L14] makes every value of $\chi_n$ equal to $1$. If some $e_j$ is odd, [L4] supplies a generator, hence a nonsquare, in $(\mathbb Z/p_j^{e_j})^\times$; [L10] gives it Legendre symbol $-1$. Combine it with identity elements in the other factors by [L5]. Formula [L14] gives the resulting global unit Jacobi value $-1$, so [L1] is surjective. Therefore $\chi_n$ is trivial exactly when $n$ is a square. [L1, L4, L5, L10, L12, L13, L14, choose]

2.1 If $n$ is a square, step 1.3 gives $\ker\chi_n=U_n$, so step 1.2 yields $[\ker\chi_n:U_n^2]=2^r$. Otherwise [L1], [L6], [L7], [L8], and [L11] give $[U_n:\ker\chi_n]=2$; applying [L9] to $U_n^2\le\ker\chi_n\le U_n$ and using step 1.2 gives $[\ker\chi_n:U_n^2]=2^{r-1}$. [step 1.1, step 1.2, step 1.3, L1, L6, L7, L8, L9, L11, algebra] ∎
