---
id: prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
kind: proposition
title: "$\\Phi_{p^{r}}(t)=\\sum_{k<p}t^{kp^{r-1}}$, and $\\Phi_{p^{r}}(t+1)$ is Eisenstein at $p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, thm-eisenstein-irreducibility-criterion, thm-z-mod-p-is-a-field, prop-p-power-roots-of-unity-in-characteristic-p, thm-universal-property-of-a-polynomial-ring, def-polynomial-evaluation-and-root, thm-totient-of-a-prime-power, cor-polynomial-ring-over-a-domain-is-a-domain, def-content-and-primitive-integer-polynomial, lem-content-divisibility-characterisation, lem-every-integer-above-one-has-a-prime-divisor, cor-euclids-lemma-for-finite-products, def-prime, def-divides-in-z, def-polynomial-degree-leading-coefficient-and-monic, def-irreducible-and-prime-elements-in-a-domain, def-ring-characteristic]
justified_by: []
forward_refs: [ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 5.3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 1.42"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and $r\ge1$. Then

$$\Phi_{p^{r}}(t)=\sum_{k=0}^{p-1}t^{kp^{r-1}}=\frac{t^{p^{r}}-1}{t^{p^{r-1}}-1},$$

the polynomial $\Phi_{p^{r}}(t+1)\in\mathbb Z[t]$ satisfies the Eisenstein
criterion at $p$ ([[thm-eisenstein-irreducibility-criterion]]), and consequently
$\Phi_{p^{r}}$ is irreducible in $\mathbb Q[t]$
([[def-irreducible-and-prime-elements-in-a-domain]]).

The sum starts at $k=0$: its first term is the constant $1$, and evaluation at
$t=1$ ([[def-polynomial-evaluation-and-root]]) gives $\Phi_{p^{r}}(1)=p$.

## Facts & Assumptions

**Given:** A prime $p$ and an integer $r\ge1$; the cyclotomic polynomials of [[def-cyclotomic-polynomial]] and the substitution homomorphisms of [[thm-universal-property-of-a-polynomial-ring]], under which $t\mapsto t+1$ is a ring automorphism of $\mathbb Z[t]$ and of $\mathbb Q[t]$ with inverse $t\mapsto t-1$.

[L1] For every $n\ge1$, $\prod_{d\mid n}\Phi_d=t^{n}-1$ with each $\Phi_d$ monic in $\mathbb Z[t]$ of degree $\varphi(d)$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L2] Let $f=a_nx^{n}+\dots+a_0\in\mathbb Z[x]$ be primitive with $n\ge1$. If a prime $p$ satisfies $p\nmid a_n$, $p\mid a_i$ for every $i<n$, and $p^{2}\nmid a_0$, then $f$ is irreducible in $\mathbb Q[x]$ ([[thm-eisenstein-irreducibility-criterion]]).

[L3] A nonzero integer polynomial is primitive exactly when no prime divides all of its coefficients ([[lem-content-divisibility-characterisation]], [[def-content-and-primitive-integer-polynomial]]).

[L4] For a fixed integer $k\ge1$, in a field $K$ of characteristic $p>0$ one has $t^{p^{k}}-1=(t-1)^{p^{k}}$ in $K[t]$ ([[prop-p-power-roots-of-unity-in-characteristic-p]]); $\mathbb Z/p$ is such a field ([[thm-z-mod-p-is-a-field]], [[def-ring-characteristic]]).

[L5] $\varphi(p^{k})=p^{k}-p^{k-1}$ for every prime $p$ and $k\ge1$ ([[thm-totient-of-a-prime-power]]).

[L6] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]); and if a prime divides a finite product of integers it divides one of the factors ([[cor-euclids-lemma-for-finite-products]]).

[L7] $R[x]$ is an integral domain when $R$ is ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 The positive divisors of $p^{j}$ are exactly $p^{0},\dots,p^{j}$: a positive $d$ dividing $p^{j}$ with $d>1$ has a prime divisor $q$ by [L6], and $q\mid p^{j}$ forces $q\mid p$ by [L6], hence $q=p$ since $p$ is prime and $q>1$ ([[def-prime]], [[def-divides-in-z]]); writing $d=pd'$ gives $d'\mid p^{j-1}$ by cancellation, and repeating reduces $d$ to a power of $p$ not exceeding $p^{j}$. [L6, given]

2.1 By [L1] at $n=p^{r}$ and at $n=p^{r-1}$, using step 1.1, $\prod_{j=0}^{r}\Phi_{p^{j}}=t^{p^{r}}-1$ and $\prod_{j=0}^{r-1}\Phi_{p^{j}}=t^{p^{r-1}}-1$; dividing, $\bigl(t^{p^{r-1}}-1\bigr)\Phi_{p^{r}}=t^{p^{r}}-1$. [step 1.1, L1]

3.1 With $u:=t^{p^{r-1}}$ the elementary identity $(u-1)\sum_{k=0}^{p-1}u^{k}=u^{p}-1$ gives $\bigl(t^{p^{r-1}}-1\bigr)\sum_{k=0}^{p-1}t^{kp^{r-1}}=t^{p^{r}}-1$; comparing with step 2.1 and cancelling the nonzero factor $t^{p^{r-1}}-1$ in the integral domain $\mathbb Z[t]$ ([L7]) yields $\Phi_{p^{r}}=\sum_{k=0}^{p-1}t^{kp^{r-1}}$. [step 2.1, L7, algebra]

3.2 Reducing step 2.1 modulo $p$ and applying [L4] twice in $(\mathbb Z/p)[t]$ gives $\overline{\Phi_{p^{r}}}\,(t-1)^{p^{r-1}}=(t-1)^{p^{r}}$, and cancelling in the integral domain $(\mathbb Z/p)[t]$ ([L7]) gives $\overline{\Phi_{p^{r}}}=(t-1)^{p^{r}-p^{r-1}}$. [step 2.1, L4, L7]

4.1 Evaluating step 3.1 at $t=1$ gives $\Phi_{p^{r}}(1)=p$, since the sum has $p$ terms each equal to $1$; so the constant term of $\Phi_{p^{r}}(t+1)$ is $p$, which is divisible by $p$ and not by $p^{2}$. [step 3.1, algebra]

4.2 Substituting $t+1$, which commutes with reduction modulo $p$ because both are ring homomorphisms fixing the coefficients appropriately, gives $\overline{\Phi_{p^{r}}(t+1)}=t^{p^{r}-p^{r-1}}=t^{\varphi(p^{r})}$ by [L5]. So every coefficient of $\Phi_{p^{r}}(t+1)$ other than the leading one is divisible by $p$, while the leading coefficient is $1$ because $\Phi_{p^{r}}(t+1)$ is monic of degree $\varphi(p^{r})$ by [L1] and the substitution being degree preserving. [step 3.2, L1, L5, given]

5.1 $\Phi_{p^{r}}(t+1)$ is primitive by [L3], no prime dividing its leading coefficient $1$, and its degree $\varphi(p^{r})$ is at least $1$ by [L5]; steps 4.1 and 4.2 supply the three Eisenstein conditions at $p$, so [L2] makes it irreducible in $\mathbb Q[t]$. [step 4.1, step 4.2, L2, L3, L5]

6.1 The substitution $t\mapsto t-1$ is a ring automorphism of $\mathbb Q[t]$ carrying $\Phi_{p^{r}}(t+1)$ to $\Phi_{p^{r}}$; a ring automorphism preserves units and factorisations, so it carries irreducible elements to irreducible elements, and $\Phi_{p^{r}}$ is irreducible in $\mathbb Q[t]$. [step 5.1, given] ∎

## Remarks

- **The term $k=0$ is load bearing.** Dropping it would change $\Phi_{p^{r}}(1)$ from $p$ to $p-1$, and the Eisenstein constant-term condition would fail. The highest exponent would be unchanged, so the degree alone would not detect the wrong polynomial.

- **A self-contained route for prime powers.** This gives irreducibility over $\mathbb Q$ for $n$ a prime power without the general argument of [[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]], and unlike that argument it exhibits an explicit polynomial to which a named criterion applies. The general theorem covers every $n$ and does not supersede this computation; the companion page works out the case $p=7$ in [[ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial]].
