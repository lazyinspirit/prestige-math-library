---
id: thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field
kind: theorem
title: "For $\\gcd(n,q)=1$ the reduction of $\\Phi_n$ in $\\mathbb F_q[t]$ is a product of distinct monic irreducibles, each of degree the order of $[q]$ modulo $n$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity, prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, thm-the-cyclotomic-galois-group-over-a-finite-field, thm-conjugates-over-a-finite-field-are-the-frobenius-powers, def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, def-cyclotomic-extension, def-order-in-a-group, def-unit-group-modulo-n-and-euler-totient, def-repeated-root-and-separable-polynomial, thm-polynomial-ring-over-a-field-is-a-ufd, def-irreducible-and-prime-elements-in-a-domain, thm-polynomial-degree-of-a-product-over-a-domain, def-polynomial-degree-leading-coefficient-and-monic, def-finitely-generated-field-extension, def-roots-of-unity-in-a-field, thm-finite-fields-have-prime-power-order, def-extension-degree-and-finite-extension, def-coprime, def-divides-in-z, def-ring-characteristic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 5.4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "K. Conrad, Finite Fields (expository blurb), Theorem 5.5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$ and let $n\ge1$ with
$\gcd(n,q)=1$ ([[def-coprime]]). Put $d:=\operatorname{ord}([q]_n)$, the
multiplicative order of $[q]_n$ in $(\mathbb Z/n)^{\times}$
([[def-order-in-a-group]], [[def-unit-group-modulo-n-and-euler-totient]]). Then
the image of $\Phi_n$ in $\mathbb F_q[t]$ ([[def-cyclotomic-polynomial]]) is a
product of pairwise distinct monic irreducible polynomials, each of degree $d$,
and there are $\varphi(n)/d$ of them.

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of order $q$, of characteristic $p$ with $q$ a power of $p$ ([[thm-finite-fields-have-prime-power-order]], [[def-ring-characteristic]]), and $n\ge1$ with $\gcd(n,q)=1$; hence $p\nmid n$ ([[def-divides-in-z]]). Write $E:=\mathbb F_q(\mu_n)$ ([[def-cyclotomic-extension]], [[def-finitely-generated-field-extension]]) and $\bar\Phi_n$ for the image of $\Phi_n$ in $\mathbb F_q[t]$.

[L1] Over a field $K$ with $\operatorname{char}K\nmid n$ and a splitting field $E$ of $t^{n}-1$, the image of $\Phi_n$ in $K[t]$ is separable, splits over $E$, and its roots in $E$ are exactly the $\varphi(n)$ primitive $n$-th roots of unity in $E$ ([[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]], [[def-roots-of-unity-in-a-field]]).

[L2] $\Phi_n$ is monic of degree $\varphi(n)$, and reduction into $\mathbb F_q[t]$ preserves both ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[L3] $[\mathbb F_q(\mu_n):\mathbb F_q]=\operatorname{ord}([q]_n)$ ([[thm-the-cyclotomic-galois-group-over-a-finite-field]], [[def-extension-degree-and-finite-extension]]).

[L4] For $\pi\in\mathbb F_q[t]$ monic irreducible of degree $e$ with a root $\alpha$ in an extension field, $\mathbb F_q(\alpha)$ is a finite field of order $q^{e}$ and $[\mathbb F_q(\alpha):\mathbb F_q]=e$ ([[thm-conjugates-over-a-finite-field-are-the-frobenius-powers]]).

[L5] $F[x]$ is a unique factorisation domain for every field $F$ ([[thm-polynomial-ring-over-a-field-is-a-ufd]]); irreducible elements are as in [[def-irreducible-and-prime-elements-in-a-domain]].

[L6] $f$ is separable over $K$ when no extension field contains an $a$ with $(t-a)^{2}$ dividing the image of $f$ ([[def-repeated-root-and-separable-polynomial]]).

[L7] Over an integral domain, $\deg(fg)=\deg f+\deg g$ for nonzero $f,g$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L8] In any field $F$, the group $\mu_n(F)$ is cyclic of order dividing $n$; if it contains a primitive $n$-th root of unity, then its order is $n$, and in that case its generators are exactly the primitive $n$-th roots of unity ([[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]).

## Proof

**Proof technique:** direct.

1.1 Since $q$ is a power of $p$ and $\gcd(n,q)=1$, the prime $p$ does not divide $n$; so [L1] applies with $K=\mathbb F_q$ and the splitting field $E=\mathbb F_q(\mu_n)$, and [L3] gives $[E:\mathbb F_q]=d$. [L1, L3, given]

1.2 By [L2] the polynomial $\bar\Phi_n$ is monic of degree $\varphi(n)\ge1$, so by [L5] it is a product of monic irreducible polynomials of $\mathbb F_q[t]$, say $\bar\Phi_n=\pi_1\cdots\pi_r$ with each $\pi_i$ monic irreducible. [L2, L5]

2.1 Each $\pi_i$ has a root in $E$. By [L1] the polynomial $\bar\Phi_n$ splits over $E$ into $\varphi(n)$ distinct linear factors, and $\pi_i$ divides it; since $E[t]$ is a unique factorisation domain by [L5], $\pi_i$ is, up to a unit, a product of some of those linear factors. Thus it has a root $\alpha_i\in E$, and $\alpha_i$ is a primitive $n$-th root of unity by [L1]. [step 1.2, L1, L5]

3.1 No two of the $\pi_i$ coincide. If $\pi_i=\pi_j=\pi$ for $i\ne j$, then $\pi^2$ divides $\bar\Phi_n$. By step 2.1 the polynomial $\pi$ has a linear factor $t-\alpha$ in $E[t]$, so $(t-\alpha)^2$ divides $\bar\Phi_n$ there, contradicting the separability supplied by [L1] and [L6]. [step 1.2, step 2.1, L1, L5, L6]

3.2 Every $\pi_i$ has degree $d$. Writing $e_i:=\deg\pi_i$, [L4] gives $[\mathbb F_q(\alpha_i):\mathbb F_q]=e_i$. Since $\alpha_i$ is primitive, [L8] makes $\mu_n(E)$ a cyclic group of order $n$ with generators exactly the primitive $n$-th roots, so $\alpha_i$ generates $\mu_n(E)$. Hence $\mu_n(E)\subseteq\mathbb F_q(\alpha_i)$ and therefore $E=\mathbb F_q(\mu_n(E))\subseteq\mathbb F_q(\alpha_i)$; and $\alpha_i\in E$ gives $\mathbb F_q(\alpha_i)\subseteq E$. Thus $\mathbb F_q(\alpha_i)=E$ and $e_i=[E:\mathbb F_q]=d$ by step 1.1. [step 1.1, step 2.1, L4, L8]

4.1 Comparing degrees with [L7] and [L2], $\varphi(n)=\deg\bar\Phi_n=\sum_{i=1}^{r}e_i=rd$, so $r=\varphi(n)/d$; with steps 3.1 and 3.2 this is the assertion. [step 1.2, step 3.1, step 3.2, L2, L7] ∎

## Remarks

- **The degree of every factor is the same, and that is the content.** A polynomial can factor into irreducibles of different degrees; here it cannot, because adjoining any primitive root produces the same field $\mathbb F_q(\mu_n)$. The primitive roots need not form a single Frobenius orbit: for $n=7$ over $\mathbb F_2$ they split into two orbits of size three, one for each irreducible cubic factor on the companion page.
