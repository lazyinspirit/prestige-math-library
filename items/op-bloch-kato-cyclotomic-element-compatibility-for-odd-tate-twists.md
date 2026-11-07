---
id: op-bloch-kato-cyclotomic-element-compatibility-for-odd-tate-twists
kind: open-problem
title: "Cyclotomic-Element Compatibility for Odd Tate-Twist Tamagawa Formulas"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-bloch-kato-motivic-pair-and-tamagawa-measure
  - def-higher-quillen-k-group-of-ring-of-integers
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Open problem

Let $r\ge3$ be odd, let $a$ be a root of unity of order $n$, and put $E=\mathbb Q(a)$. Write $\widehat{\mathbb Z}=\prod_\ell\mathbb Z_\ell$ and $\mathbb A_f=\widehat{\mathbb Z}\otimes_{\mathbb Z}\mathbb Q$ for the finite adeles of $\mathbb Q$; its $\ell$-component is $\mathbb Q_\ell$, not $\mathbb Q_\ell/\mathbb Z_\ell$. Let $c_r(a)\in\operatorname{gr}^r_\gamma(K_{2r-1}(E)\otimes\mathbb Q)$ denote Beilinson's cyclotomic element in the source normalization: under every embedding $\tau:E\hookrightarrow\mathbb C$, its complex regulator is the class of
$$-(r-1)!\sum_{j\ge1}\frac{\tau(a)^j}{j^r}\quad\text{in }\mathbb C/\mathbb Q(2\pi i)^r.$$
Let $c_{r,n}(a)\in H^1(E,\widehat{\mathbb Z}(r))$ denote the source's Deligne–Soulé cyclotomic element. Its normalization modulo torsion is specified after restriction as follows: for every $m\ge1$ and every extension $F/E$ containing all $m$th roots of $a$, its image under restriction and coefficient reduction in
$$H^1(F,\mathbb Z/m\mathbb Z(r))\simeq(F^\times/F^{\times m})\otimes\mathbb Z/m\mathbb Z(r-1)$$
is
$$\sum_{\zeta^m=a}\{1-\zeta\}\otimes[\zeta^n]^{\otimes(r-1)},$$
with $\zeta=1$ omitted when $a=1$. Here $[\zeta^n]\in\mu_m(F)=\mathbb Z/m\mathbb Z(1)$, since $(\zeta^n)^m=a^n=1$; it is this $m$-torsion root, rather than $\zeta$, that occurs in the tensor factor.

Prove that the image of $c_r(a)$ under the source's finite-adelic étale regulator and the image of $n^{1-r}c_{r,n}(a)$ under coefficient extension from $\widehat{\mathbb Z}$ to $\mathbb A_f$ coincide up to sign in
$$H^1(E,\mathbb A_f(r)).$$
Equivalently, their $\ell$-components are compared in $H^1(E,\mathbb Q_\ell(r))$. The integral cyclotomic element is first mapped to this rational coefficient space; no comparison in torsion coefficients is intended.

## Open problem references

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Status

This is the odd-$r\ge3$ part of Bloch–Kato Conjecture 6.2 as formulated in the source, printed p. 384. The source records Soulé's proof for $r=2$ and leaves its stated comparison conjectural. The present source check establishes that historical attribution and its exact coefficient and restriction conventions; it does not establish the present-day literature status of the comparison.

The Beilinson and Deligne–Soulé element constructions and finite-adelic étale regulator are identified here by their source normalizations, not locally reconstructed or accepted as theorem suppliers. Those construction obligations and a current status determination remain held. This item is not a theorem supplier.

## Status references

[Bloch–Kato, notation for finite adeles in §5, printed p. 369; cyclotomic elements and Conjecture 6.2, printed p. 384](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)
