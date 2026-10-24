---
id: thm-composita-of-cyclotomic-extensions
kind: theorem
title: "$K(\\mu_m)K(\\mu_n)=K(\\mu_{\\operatorname{lcm}(m,n)})$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclotomic-extension, def-roots-of-unity-in-a-field, prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, thm-lagrange, def-lcm, thm-gcd-lcm-product, thm-euclids-lemma, def-order-in-a-group, lem-order-characterisation, def-generated-subgroup, def-polynomials-that-split-and-splitting-fields, thm-splitting-fields-exist-for-nonzero-polynomials, def-repeated-root-and-separable-polynomial, thm-characteristic-of-a-field-is-zero-or-prime, def-ring-characteristic, def-finitely-generated-field-extension, def-divides-in-z, def-prime]
justified_by: []
forward_refs: [cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case]
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
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Chapter 9, Section 1"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field and let $m,n\ge1$ be integers such that
$\operatorname{char}K$ divides neither $m$ nor $n$ ([[def-ring-characteristic]],
[[def-divides-in-z]]). Put $\ell:=\operatorname{lcm}(m,n)$ ([[def-lcm]]) and let
$\Omega$ be a splitting field of $t^{\ell}-1$ over $K$
([[thm-splitting-fields-exist-for-nonzero-polynomials]]). Then
$\operatorname{char}K\nmid\ell$; the subfields $K(\mu_m(\Omega))$ and
$K(\mu_n(\Omega))$ of $\Omega$ are cyclotomic extensions of $K$ of orders $m$ and
$n$ ([[def-cyclotomic-extension]]); and their compositum inside $\Omega$ is

$$K(\mu_m)\,K(\mu_n)=K(\mu_{\ell})=\Omega .$$

## Facts & Assumptions

**Given:** A field $K$, integers $m,n\ge1$ with $\operatorname{char}K$ dividing neither, $\ell=\operatorname{lcm}(m,n)$, and a splitting field $\Omega$ of $t^{\ell}-1$ over $K$; the characteristic of a field is $0$ or a prime ([[thm-characteristic-of-a-field-is-zero-or-prime]]), and $0$ divides no positive integer.

[L1] $\operatorname{lcm}(a,b)$ is a common multiple of $a$ and $b$ ([[def-lcm]]); every common multiple of $a$ and $b$ is a multiple of $\operatorname{lcm}(a,b)$, and $\gcd(a,b)\operatorname{lcm}(a,b)=|ab|$ ([[thm-gcd-lcm-product]]).

[L2] If a prime $p$ divides $ab$ then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]], [[def-prime]]).

[L3] $t^{k}-1$ is separable over $K$ exactly when $\operatorname{char}K\nmid k$, and then a splitting field $E$ has $\mu_k(E)$ cyclic of order $k$ and $E=K(\zeta)$ for any primitive $k$-th root of unity ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]], [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]], [[def-roots-of-unity-in-a-field]]).

[L4] A polynomial is separable over $K$ when no extension field contains a repeated root ([[def-repeated-root-and-separable-polynomial]]); a splitting field is generated over $K$ by the roots ([[def-polynomials-that-split-and-splitting-fields]], [[def-finitely-generated-field-extension]]).

[L5] For a finite group $G$ and $H\le G$, $|H|$ divides $|G|$ ([[thm-lagrange]]); $\langle S\rangle$ is the smallest subgroup containing $S$ ([[def-generated-subgroup]]); and $|\langle x\rangle|=\operatorname{ord}(x)$ for an element of finite order ([[lem-order-characterisation]], [[def-order-in-a-group]]).

## Proof

**Proof technique:** direct.

1.1 $\operatorname{char}K\nmid\ell$. If $\operatorname{char}K=0$ this is immediate; if $\operatorname{char}K=p$ is a prime dividing $\ell$, then $\ell$ divides $mn$ because $\gcd(m,n)\ell=mn$ by [L1] and $\gcd(m,n)\ge1$, so $p\mid mn$ and [L2] gives $p\mid m$ or $p\mid n$, contrary to hypothesis. [L1, L2, given]

2.1 By [L3] and step 1.1 the polynomial $t^{\ell}-1$ is separable over $K$, the group $\mu_{\ell}(\Omega)$ is cyclic of order $\ell$, and $\Omega=K(\mu_{\ell}(\Omega))$. [step 1.1, L3, L4]

3.1 For every positive divisor $k$ of $\ell$ one has $\bigl|\mu_k(\Omega)\bigr|=k$ and $K(\mu_k(\Omega))$ is a splitting field of $t^{k}-1$ over $K$, hence a cyclotomic extension of $K$ of order $k$: indeed $t^{k}-1$ divides $t^{\ell}-1$, since $t^{\ell}-1=(t^{k}-1)(t^{\ell-k}+t^{\ell-2k}+\dots+1)$, so it splits over $\Omega$, and a repeated root of it would be a repeated root of $t^{\ell}-1$, excluded by step 2.1 through [L4]; so its $k$ roots are distinct and they are the elements of $\mu_k(\Omega)$, which generate $K(\mu_k(\Omega))$ over $K$. [step 2.1, L3, L4, algebra]

4.1 $m$ and $n$ are positive divisors of $\ell$ by [L1], so step 3.1 applies to both: $K(\mu_m(\Omega))$ and $K(\mu_n(\Omega))$ are cyclotomic extensions of $K$ of orders $m$ and $n$, and each contains a primitive root of unity of its order by [L3]. [step 3.1, L1, L3]

5.1 Both are contained in $\Omega=K(\mu_{\ell}(\Omega))$, since $\mu_m(\Omega)$ and $\mu_n(\Omega)$ are subsets of $\mu_{\ell}(\Omega)$ by $m\mid\ell$ and $n\mid\ell$; hence their compositum inside $\Omega$ is contained in $K(\mu_{\ell})$. [step 2.1, step 4.1, L1]

5.2 For the reverse inclusion, fix a primitive $m$-th root of unity $\zeta_m\in\mu_m(\Omega)$ and a primitive $n$-th root of unity $\zeta_n\in\mu_n(\Omega)$, and let $H:=\langle\zeta_m,\zeta_n\rangle\le\mu_{\ell}(\Omega)$. By [L5] the orders $m=|\langle\zeta_m\rangle|$ and $n=|\langle\zeta_n\rangle|$ both divide $|H|$, so $|H|$ is a common multiple of $m$ and $n$ and therefore a multiple of $\ell$ by [L1]; and $|H|$ divides $\ell$ by [L5]. Hence $|H|=\ell$ and $H=\mu_{\ell}(\Omega)$. [step 2.1, step 4.1, L1, L5]

6.1 Both $\zeta_m$ and $\zeta_n$ lie in the compositum $K(\mu_m)K(\mu_n)$, which is a field, so $H\subseteq K(\mu_m)K(\mu_n)$ and therefore $\mu_{\ell}(\Omega)\subseteq K(\mu_m)K(\mu_n)$ by step 5.2; hence $\Omega=K(\mu_{\ell}(\Omega))\subseteq K(\mu_m)K(\mu_n)$. With step 5.1 this gives $K(\mu_m)K(\mu_n)=K(\mu_{\ell})=\Omega$. [step 2.1, step 5.1, step 5.2] ∎

## Remarks

- **The intersection is not the mirror image of this.** The compositum identity holds over every base field of admissible characteristic, but the corresponding identity $K(\mu_m)\cap K(\mu_n)=K(\mu_{\gcd(m,n)})$ does not: it is proved here only over $\mathbb Q$ ([[thm-intersections-of-rational-cyclotomic-fields]]), and the companion page gives a finite-base-field failure in [[cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case]].
