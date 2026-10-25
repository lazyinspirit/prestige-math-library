---
id: thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity
kind: theorem
title: "Over a field whose characteristic does not divide $n$, the roots of $\\Phi_n$ are exactly the primitive roots of unity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, def-roots-of-unity-in-a-field, prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, def-repeated-root-and-separable-polynomial, def-cyclotomic-extension, def-unit-group-modulo-n-and-euler-totient, lem-order-characterisation, def-order-in-a-group, def-polynomials-that-split-and-splitting-fields, cor-polynomial-ring-over-a-domain-is-a-domain, cor-factor-theorem-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring, def-monoid-finite-product, thm-generalised-associativity, def-ring-characteristic, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
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
    - title: "P. L. Clark, Field Theory (course notes/monograph), Theorem 9.7"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field and $n\ge1$ with $\operatorname{char}K\nmid n$
([[def-ring-characteristic]], [[def-divides-in-z]]), and let $E$ be a splitting
field of $t^{n}-1$ over $K$, that is $E=K(\mu_n)$
([[def-cyclotomic-extension]]). Write $\Phi_n$ also for the image of the integer
polynomial $\Phi_n$ ([[def-cyclotomic-polynomial]]) in $K[t]$. Then $\Phi_n$ is
separable over $K$ ([[def-repeated-root-and-separable-polynomial]]), it splits
over $E$, and its roots in $E$ are exactly the $\varphi(n)$ primitive $n$-th
roots of unity in $E$ ([[def-roots-of-unity-in-a-field]],
[[def-unit-group-modulo-n-and-euler-totient]]).

## Facts & Assumptions

**Given:** A field $K$, an integer $n\ge1$ with $\operatorname{char}K\nmid n$, a splitting field $E$ of $t^{n}-1$ over $K$, and the convention that for every finite subset $T\subseteq E$ the product $\prod_{\zeta\in T}(t-\zeta)\in E[t]$ means the finite product along any enumeration of $T$; because $E[t]$ is a commutative ring, the value is independent of the enumeration ([[def-monoid-finite-product]], [[thm-generalised-associativity]], [[thm-polynomial-ring-is-a-commutative-ring]]). In particular, for each positive divisor $d$ of $n$, let $S_d:=\{\zeta\in\mu_n(E):\operatorname{ord}(\zeta)=d\}$ and $\Psi_d:=\prod_{\zeta\in S_d}(t-\zeta)\in E[t]$.

[L1] $t^{n}-1$ is separable over $K$ when $\operatorname{char}K\nmid n$, and then $\mu_n(E)$ is cyclic of order $n$ with exactly $\varphi(n)$ primitive $n$-th roots of unity ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]], [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]).

[L2] For every $m\ge1$ one has $\prod_{d\mid m}\Phi_d=t^{m}-1$ in $\mathbb Z[t]$, each $\Phi_d$ monic of degree $\varphi(d)$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]); reduction into $K[t]$ preserves this identity.

[L3] A monic $f$ of degree $m$ splits over $E$ when $f=\prod_{j=1}^{m}(t-\alpha_j)$ with $\alpha_j\in E$, repetitions allowed, and a splitting field is generated over $K$ by the roots ([[def-polynomials-that-split-and-splitting-fields]]).

[L4] $f$ is separable over $K$ when no extension field of $K$ contains an $a$ with $(t-a)^{2}$ dividing the image of $f$ ([[def-repeated-root-and-separable-polynomial]]).

[L5] For an element $x$ of finite order $m$, $x^{k}=e$ if and only if $m\mid k$ ([[lem-order-characterisation]], [[def-order-in-a-group]]).

[L6] $R[x]$ is an integral domain when $R$ is ([[cor-polynomial-ring-over-a-domain-is-a-domain]]); and $f(a)=0$ if and only if $x-a$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the polynomial $t^{n}-1$ is separable over $K$ and $\mu_n(E)$ is cyclic of order $n$; so $t^{n}-1$ has $n$ distinct roots in $E$, namely the elements of $\mu_n(E)$, and $t^{n}-1=\prod_{\zeta\in\mu_n(E)}(t-\zeta)$ by [L3]. [L1, L3]

1.2 Each $\zeta\in\mu_n(E)$ has order dividing $n$ by [L5], and for a positive divisor $m$ of $n$ the condition $\zeta^{m}=1$ says exactly $\operatorname{ord}(\zeta)\mid m$; so $\mu_m(E)$ is the disjoint union of the $S_d$ over positive divisors $d$ of $m$. [L5, given]

2.1 For every positive divisor $m$ of $n$ the polynomial $t^{m}-1$ divides $t^{n}-1$ in $\mathbb Z[t]$, since $t^{n}-1=(t^{m}-1)(t^{n-m}+t^{n-2m}+\dots+1)$; hence it splits over $E$ with distinct roots, which are the elements of $\mu_m(E)$, and $t^{m}-1=\prod_{\zeta\in\mu_m(E)}(t-\zeta)$ with $\bigl|\mu_m(E)\bigr|=m$. [step 1.1, L3, L4, algebra]

3.1 Consequently $\prod_{d\mid m}\Psi_d=\prod_{\zeta\in\mu_m(E)}(t-\zeta)=t^{m}-1$ for every positive divisor $m$ of $n$. [step 2.1, step 1.2]

4.1 For every positive divisor $d$ of $n$ the image of $\Phi_d$ in $E[t]$ is $\Psi_d$, by induction on $d$ through the divisors of $n$: at $d=1$ both are $t-1$, since $S_1=\{1\}$; and if the claim holds for every positive divisor $e$ of $d$ with $e<d$, then [L2] and step 3.1 give $\bigl(\prod_{e\mid d,\,e<d}\Psi_e\bigr)\Phi_d=t^{d}-1=\bigl(\prod_{e\mid d,\,e<d}\Psi_e\bigr)\Psi_d$, and cancelling the nonzero left factor in the integral domain $E[t]$ ([L6]) gives $\Phi_d=\Psi_d$. [step 3.1, L2, L6]

5.1 Taking $d=n$: the image of $\Phi_n$ in $E[t]$ is $\prod_{\zeta\in S_n}(t-\zeta)$, so $\Phi_n$ splits over $E$ and its roots there are exactly the elements of $S_n$, which are the elements of order $n$ in $\mu_n(E)$, that is the primitive $n$-th roots of unity in $E$; there are $\varphi(n)$ of them by [L1], in agreement with $\deg\Phi_n=\varphi(n)$ from [L2]. [step 4.1, L1, L2]

6.1 $\Phi_n$ is separable over $K$. The product identity [L2] shows that the image of $\Phi_n$ divides $t^n-1$ in $K[t]$. If an extension field $L/K$ contained an $a$ for which $(t-a)^2$ divided the image of $\Phi_n$, then the same square would divide the image of $t^n-1$ in $L[t]$, making $a$ a repeated root of $t^n-1$. This contradicts the separability of $t^n-1$ supplied by [L1]. Thus [L4] applies. [L1, L2, L4, algebra] ∎

## Remarks

- **Both hypotheses are used, and neither can be dropped.** If the characteristic divides $n$ then $t^{n}-1$ is not separable and the roots of $\Phi_n$ do not separate into orders at all; and the statement is about the roots in a splitting field, not in $K$ itself, since $\Phi_n$ may have no root in $K$ at all, as $\Phi_3$ over $\mathbb Q$ shows.

- **Irreducibility is a separate question.** The theorem says what the roots of $\Phi_n$ are; it says nothing about whether $\Phi_n$ factors over $K$. Over $\mathbb Q$ it does not ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]), over a finite field it usually does ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]]), and in both cases the root description above is the same.
