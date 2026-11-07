---
id: lem-gowers-cauchy-schwarz-inequality
kind: lemma
title: "Gowers Cauchy–Schwarz inequality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
aliases: []
deps: [def-gowers-uniformity-norm-on-finite-cyclic-groups,
       thm-integers-modulo-n-basic-algebra,
       thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§5, equations (5.1)–(5.5), printed pp. 493–495."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142 (2012), author's preliminary version"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "§1.3.3, printed pp. 57–58, Gowers inner product and Exercise 1.3.19; the proof is reconstructed locally."
    - title: "Julia Wolf, Arithmetic and polynomial progressions in the primes [after Gowers, Green, Tao and Ziegler], Astérisque 352 (2013)"
      url: "https://www.numdam.org/item/AST_2013__352__389_0.pdf"
      locator: "§2.1, printed p. 395, the uniformity norm and Gowers–Cauchy–Schwarz discussion."
---

## Statement

Let $N\ge1$, $d\ge1$, $G_N=\mathbb Z/N\mathbb Z$, and let $f_\omega:G_N\to\mathbb C$ for every $\omega\in\{0,1\}^d$. Define

$$Q_d((f_\omega)):=\mathbb E_{x,h_1,\ldots,h_d\in G_N}\prod_{\omega\in\{0,1\}^d}\mathcal C^{|\omega|}f_\omega(x+\omega\cdot h),$$

where the average is uniform over the $N^{d+1}$ tuples, $|\omega|=\sum_j\omega_j$, $\omega\cdot h=\sum_j\omega_jh_j$, and $\mathcal C^m$ is the identity for even $m$ and complex conjugation for odd $m$. Then

$$\big|Q_d((f_\omega))\big|\le\prod_{\omega\in\{0,1\}^d}\|f_\omega\|_{U^d(G_N)}.$$

## Statement references

[[def-gowers-uniformity-norm-on-finite-cyclic-groups]]

[Green and Tao, §5, equations (5.1)–(5.5)](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Tao, *Higher Order Fourier Analysis*, §1.3.3 and Exercise 1.3.19](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

[Wolf, §2.1](https://www.numdam.org/item/AST_2013__352__389_0.pdf)

## Facts & Assumptions

**Given:** $N\ge1$, $d\ge1$, $G_N=\mathbb Z/N\mathbb Z$, and a family $f_\omega:G_N\to\mathbb C$ indexed by $\omega\in\{0,1\}^d$.

[F1] The $U^d$ norm is the nonnegative $2^d$-th root of the normalized alternating cube average, and $\mathcal C^m$ conjugates exactly when $m$ is odd ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F2] $(G_N,+)$ is an abelian group, so $(x,h)\mapsto(x,x+h)$ is a bijection of $G_N^2$ ([[thm-integers-modulo-n-basic-algebra]]).

[F3] On a measure space, the complex $L^2$ pairing satisfies $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$; in particular this holds for normalized counting measure on any finite set ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Proof

1.1 Fix a coordinate, relabel it as the last coordinate, write $h'=(h_1,\ldots,h_{d-1})$, and for $b\in\{0,1\}$ put $A_b(h'):=\mathbb E_{x\in G_N}\prod_{\omega'\in\{0,1\}^{d-1}}\mathcal C^{|\omega'|}f_{(\omega',b)}(x+\omega'\cdot h')$. The last-coordinate-zero face contributes the product defining $A_0$, and the last-coordinate-one face contributes the conjugate of the corresponding product defining $A_1$ shifted by $h_d$. The map $(x,h_d)\mapsto(x,y=x+h_d)$ is a bijection by the group inverse law; averaging over $x,h_d$ therefore factors the two faces and gives $Q_d=\mathbb E_{h'}A_0(h')\overline{A_1(h')}$. The same computation applies to any chosen coordinate because the cube coordinates can be permuted. [given, F1, F2, algebra]

1.2 Apply complex Cauchy–Schwarz to the finite uniform average over $h'$ to obtain $|Q_d|^2\le(\mathbb E_{h'}|A_0(h')|^2)(\mathbb E_{h'}|A_1(h')|^2)$. For each $b$, expand the square in the corresponding factor using an independent $x'\in G_N$ and reparameterize $x'=x+h_d$; the result is $Q_d$ for the cube family in which both last-coordinate faces equal $f_{(\omega',b)}$. Thus one application of Cauchy–Schwarz replaces the original family by the two families with that coordinate fixed at $0$ and $1$. [given, F3, step 1.1, algebra]

2.1 Apply the coordinate inequality of step 1.2 successively to each resulting family in each of the $d$ coordinates. After all coordinates are fixed, the $2^d$ remaining cube averages are the constant families with value $f_\eta$, one for each $\eta\in\{0,1\}^d$; each such average is $\|f_\eta\|_{U^d(G_N)}^{2^d}$ by the norm definition. Therefore $|Q_d|^{2^d}\le\prod_{\eta\in\{0,1\}^d}\|f_\eta\|_{U^d(G_N)}^{2^d}$. [given, F1, step 1.2, induction]

2.2 Taking the nonnegative $2^d$-th root of the inequality in step 2.1 gives the stated Gowers Cauchy–Schwarz inequality. [F1, step 2.1, algebra] ∎
