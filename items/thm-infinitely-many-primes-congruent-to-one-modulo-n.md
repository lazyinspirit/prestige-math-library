---
id: thm-infinitely-many-primes-congruent-to-one-modulo-n
kind: theorem
title: "For every $n\\ge1$ there are infinitely many primes $p$ with $p\\equiv1\\pmod n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, lem-the-constant-term-of-a-cyclotomic-polynomial, thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity, def-roots-of-unity-in-a-field, thm-z-mod-p-is-a-field, thm-lagrange, lem-every-integer-above-one-has-a-prime-divisor, def-congruence-modulo-an-integer, def-integers-modulo-n, def-unit-group-modulo-n-and-euler-totient, def-order-in-a-group, lem-order-characterisation, thm-euclid-infinitude-of-primes, thm-root-bound-for-polynomials-over-a-domain, cor-totient-at-one-and-at-a-prime, thm-splitting-fields-exist-for-nonzero-polynomials, thm-universal-property-of-a-polynomial-ring, thm-characteristic-of-a-field-is-zero-or-prime, def-ring-characteristic, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic, def-countable, def-prime, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Theorem 9.10"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

For every integer $n\ge1$, the set

$$T_n:=\{\,p\in\mathbb Z: p\text{ is prime and } p\equiv1\!\!\pmod n\,\}$$

([[def-prime]], [[def-congruence-modulo-an-integer]]) is not finite
([[def-countable]]).

## Facts & Assumptions

**Given:** An integer $n\ge1$ and the cyclotomic polynomial $\Phi_n\in\mathbb Z[t]$ ([[def-cyclotomic-polynomial]]); evaluation at an integer is the ring homomorphism $\mathbb Z[t]\to\mathbb Z$ of [[thm-universal-property-of-a-polynomial-ring]] and [[def-polynomial-evaluation-and-root]].

[L1] $\Phi_n$ is monic in $\mathbb Z[t]$ of degree $\varphi(n)\ge1$ and $\prod_{d\mid n}\Phi_d=t^{n}-1$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L2] $\Phi_n(0)=1$ for every $n\ge2$ ([[lem-the-constant-term-of-a-cyclotomic-polynomial]]).

[L3] Over a field $K$ with $\operatorname{char}K\nmid n$ and a splitting field $E$ of $t^{n}-1$ over $K$, the roots of the image of $\Phi_n$ in $E$ are exactly the primitive $n$-th roots of unity in $E$, that is the elements of order $n$ in $E^{\times}$ ([[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]], [[def-roots-of-unity-in-a-field]], [[def-order-in-a-group]]).

[L4] $\mathbb Z/p$ is a field of characteristic $p$ for every prime $p$ ([[thm-z-mod-p-is-a-field]], [[def-ring-characteristic]], [[thm-characteristic-of-a-field-is-zero-or-prime]], [[def-integers-modulo-n]]), and every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L5] $\bigl|(\mathbb Z/p)^{\times}\bigr|=\varphi(p)=p-1$ for a prime $p$ ([[cor-totient-at-one-and-at-a-prime]], [[def-unit-group-modulo-n-and-euler-totient]]); and for a finite group $G$ with $H\le G$, $|H|$ divides $|G|$ ([[thm-lagrange]]), while $|\langle x\rangle|=\operatorname{ord}(x)$ ([[lem-order-characterisation]]).

[L6] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]], [[def-divides-in-z]]).

[L7] A nonzero polynomial of degree $k$ over an integral domain has at most $k$ distinct roots in it ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L8] The set of primes is not finite ([[thm-euclid-infinitude-of-primes]]).

## Proof

**Proof technique:** cases.

1.1 In the case $n=1$, every integer is congruent to $1$ modulo $1$, since $1$ divides every integer, so $T_1$ is the set of all primes, which is not finite by [L8]. [assume-case one, L8, given]

1.2 In the case $n\ge2$, let $S\subseteq T_n$ be any finite set and put $M:=n\prod_{p\in S}p$, an integer with $M\ge2$; the goal is to produce a prime in $T_n$ outside $S$. [assume-case big, given]

2.1 There is an integer $k\ge1$ with $\bigl|\Phi_n(kM)\bigr|>1$: the three polynomials $\Phi_n$, $\Phi_n-1$ and $\Phi_n+1$ are nonzero of degree $\varphi(n)\ge1$ by [L1], so by [L7] over the integral domain $\mathbb Z$ at most $3\varphi(n)$ integers $x$ satisfy $\Phi_n(x)\in\{-1,0,1\}$; the integers $M,2M,3M,\dots$ are pairwise distinct, so some $kM$ with $k\ge1$ avoids that finite set. [step 1.2, L1, L7]

2.2 Since $\Phi_n(0)=1$ by [L2], there is $h\in\mathbb Z[t]$ with $\Phi_n=1+t\,h$; evaluating at $kM$ gives $N:=\Phi_n(kM)=1+kM\,h(kM)$. [step 1.2, L1, L2, given]

3.1 By step 2.1 the integer $|N|$ exceeds $1$, so it has a prime divisor $p$ by [L6], and $p\mid N$. That prime does not divide $kM$: otherwise $p$ would divide $kM\,h(kM)$ and hence $N-kM\,h(kM)=1$, which is impossible for a prime. In particular $p\nmid M$, so $p\nmid n$ and $p\notin S$, both $n$ and every member of $S$ dividing $M$. [step 2.1, step 2.2, L6, given]

4.1 Reduce modulo $p$. Since $p\mid\Phi_n(kM)$, the class $\alpha:=[kM]_p$ is a root of the image of $\Phi_n$ in $(\mathbb Z/p)[t]$, and $\alpha\ne0$ because $p\nmid kM$ by step 3.1. Let $E$ be a splitting field of $t^{n}-1$ over $\mathbb Z/p$, which exists by [L4]; as $\operatorname{char}(\mathbb Z/p)=p$ does not divide $n$, [L3] applies and $\alpha$, lying in $\mathbb Z/p\subseteq E$, has order exactly $n$ in $E^{\times}$. [step 3.1, L3, L4]

5.1 The order of $\alpha$ in the subgroup $(\mathbb Z/p)^{\times}$ of $E^{\times}$ is the same $n$, so $n$ divides $\bigl|(\mathbb Z/p)^{\times}\bigr|=p-1$ by [L5]; that is $p\equiv1\pmod n$, so $p\in T_n$ and $p\notin S$. [step 3.1, step 4.1, L5, given]

6.1 In the case $n\ge2$, then, no finite subset of $T_n$ exhausts it, so $T_n$ is not finite; with step 1.1 the two cases are exhaustive and cover every $n\ge1$. [step 1.1, step 5.1, cases-exhaustive] ∎

## Remarks

- **What replaces the archimedean estimate.** The usual proof chooses $x$ large enough that $|\Phi_n(x)|>1$ by a growth estimate. Step 2.1 replaces that by a root count, which needs no order structure on $\mathbb Z$ beyond the distinctness of the multiples of $M$, and gives exactly the same conclusion.

- **The case $n=1$ is not a degenerate instance.** For $n=1$ one has $\Phi_1(0)=-1$, not $1$ ([[lem-the-constant-term-of-a-cyclotomic-polynomial]]), so step 2.2 is unavailable; the congruence is vacuous there and the statement is Euclid's theorem.
