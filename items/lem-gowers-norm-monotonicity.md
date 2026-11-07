---
id: lem-gowers-norm-monotonicity
kind: lemma
title: "Monotonicity of the Gowers uniformity norms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
aliases: []
deps: [def-gowers-uniformity-norm-on-finite-cyclic-groups,
       lem-gowers-cauchy-schwarz-inequality,
       lem-of-square-monotone]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§5, equations (5.6)–(5.7), printed p. 496."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142 (2012), author's preliminary version"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "§1.3.3, printed p. 58, monotonicity conclusion after Exercise 1.3.19; the exercise is proved locally."
    - title: "Julia Wolf, Arithmetic and polynomial progressions in the primes [after Gowers, Green, Tao and Ziegler], Astérisque 352 (2013)"
      url: "https://www.numdam.org/item/AST_2013__352__389_0.pdf"
      locator: "§2.1, printed p. 395, nested uniformity norm hierarchy and recursive formula."
---

## Statement

Let $N\ge1$, $G_N=\mathbb Z/N\mathbb Z$, $d\ge2$, and $f:G_N\to\mathbb C$. Then

$$\|f\|_{U^{d-1}(G_N)}\le\|f\|_{U^d(G_N)},$$

where for each integer $q\ge1$, the $U^q$ norm is the nonnegative $2^q$-th root of the normalized alternating $q$-cube average.

## Statement references

[[def-gowers-uniformity-norm-on-finite-cyclic-groups]]

[Green and Tao, §5, equations (5.6)–(5.7)](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Tao, *Higher Order Fourier Analysis*, §1.3.3](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

[Wolf, §2.1](https://www.numdam.org/item/AST_2013__352__389_0.pdf)

## Facts & Assumptions

**Given:** $N\ge1$, $G_N=\mathbb Z/N\mathbb Z$, an integer $d\ge2$, and $f:G_N\to\mathbb C$.

[F1] The $U^q$ norm is the nonnegative $2^q$-th root of the normalized alternating $q$-cube average ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F2] For every family of functions on a $q$-cube, the absolute Gowers cube average is bounded by the product of the $U^q$ norms of its vertex functions ([[lem-gowers-cauchy-schwarz-inequality]]).

[F3] Squaring is strictly increasing on the nonnegative reals: $0\le a<b$ implies $a^2<b^2$ ([[lem-of-square-monotone]]).

## Proof

1.1 On the $d$-cube put $g_\omega=f$ when $\omega_d=0$ and $g_\omega=1$ when $\omega_d=1$. The alternating cube average of this family is the $(d-1)$-cube average of $f$, because the last-coordinate-one factors equal $1$ and the last increment is then unused; it is therefore $\|f\|_{U^{d-1}}^{2^{d-1}}$ by the norm definition. The constant function $1$ has $U^d$ norm $1$ because its cube product is identically $1$. The Gowers Cauchy–Schwarz inequality therefore bounds the absolute average by $\|f\|_{U^d}^{2^{d-1}}$. [F1, F2, given, algebra]

1.2 Both norms are nonnegative by the norm definition. If the first were larger than the second, repeated strict monotonicity of squaring would make their $2^{d-1}$ powers strictly ordered in the opposite direction to step 1.1; hence $\|f\|_{U^{d-1}}\le\|f\|_{U^d}$. [given, F1, F3, step 1.1] ∎
