---
id: lem-coprime-ideal-extension-contraction-for-quadratic-orders
kind: lemma
title: "Extension and contraction of ideals prime to a quadratic conductor"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-quadratic-order-of-discriminant
  - thm-proper-fractional-ideal-of-quadratic-order-is-invertible
  - lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
  - def-fractional-ideal
  - def-product-and-colon-of-fractional-ideals
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Theorem 11.1 proof and Lemma 11.26, printed pp. 237–240; prime-to-conductor ideal classes"
    - title: "J. S. Milne, Class Field Theory, Version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, ideals prime to a finite modulus, printed pp. 147–153; maximal-order context only"
verification: {}
---

## Statement

Let $K$ be an imaginary quadratic field with maximal order $\mathcal O_K$,
let $f\ge1$, and put $\mathcal O_f=\mathbb Z+f\mathcal O_K$. An integral
$\mathcal O_f$-ideal $I$ is “prime to $f$” when $I+f\mathcal O_K=\mathcal O_f$;
an integral $\mathcal O_K$-ideal $J$ is “prime to $f$” when
$J+f\mathcal O_K=\mathcal O_K$. Extension $I\mapsto I\mathcal O_K$ and contraction
$J\mapsto J\cap\mathcal O_f$ are inverse multiplicative bijections between
integral $\mathcal O_f$-ideals prime to $f$ and integral $\mathcal O_K$-ideals
prime to $f$. In particular, every $\mathcal O_f$-ideal in this set is
invertible.

## Statement references

[[def-quadratic-order-of-discriminant|The order of conductor $f$ is $\mathbb Z+f\mathcal O_K$.]]

[Milne, *Class Field Theory*, Version 4.03, Chapter V §1, ideals prime to a modulus, pp. 147–153](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** An imaginary quadratic field $K$, its maximal order $\mathcal O_K$, an integer $f\ge1$, and $\mathcal O_f=\mathbb Z+f\mathcal O_K$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_f$ is a rank-two order with conductor $f\mathcal O_K$.

[F2] [[thm-ring-of-integers-free-of-rank-degree]]: $\mathcal O_K$ is a free rank-two $\mathbb Z$-module.

[F3] [[thm-proper-fractional-ideal-of-quadratic-order-is-invertible]]: every proper fractional ideal of $\mathcal O_f$ is invertible.

## Proof

1.1 If a maximal ideal $\mathfrak m$ of $\mathcal O_f$ does not contain $f$, then $f$ is a unit in $(\mathcal O_f)_{\mathfrak m}$ and $\mathcal O_f[1/f]=\mathcal O_K[1/f]$, so the localized rings agree. If $\mathfrak m$ contains $f$, every ideal $I$ prime to $f$ has $I_{\mathfrak m}=(\mathcal O_f)_{\mathfrak m}$. The corresponding statements hold for maximal ideals of $\mathcal O_K$. [F1, F2, given]

2.1 For $I$ prime to $f$, compare $I$ and $(I\mathcal O_K)\cap\mathcal O_f$ after localization at each maximal ideal of $\mathcal O_f$. Away from $f$ the rings and the extended ideal agree by step 1.1; at maximal ideals over $f$, both localized ideals are the whole local ring by coprimality. Equality of finitely generated submodules can be checked at all maximal ideals, hence $(I\mathcal O_K)\cap\mathcal O_f=I$. [F1, step 1.1, given, algebra]

3.1 For $J$ prime to $f$, the same localization argument at every maximal ideal of $\mathcal O_K$ gives $(J\cap\mathcal O_f)\mathcal O_K=J$. Therefore extension and contraction are mutual inverse maps. They preserve products because the localized rings and ideals agree away from $f$, while all ideals involved are the unit ideal at maximal ideals over $f$. [F1, step 1.1, step 2.1, algebra]

4.1 At each maximal ideal $\mathfrak m$ of $\mathcal O_f$ away from $f$, the localized order is the Dedekind ring $\mathcal O_K[1/f]$ and the localized nonzero ideal is invertible, so its local multiplier ring is the local order. At maximal ideals over $f$, coprimality gives $I_{\mathfrak m}=(\mathcal O_f)_{\mathfrak m}$ and again its local multiplier ring is the local order. Localization commutes with the multiplier ring for a finitely generated ideal: if $xI_{\mathfrak m}\subseteq I_{\mathfrak m}$, a common denominator $s\notin\mathfrak m$ gives $sxI\subseteq I$, hence $x\in(I:I)_{\mathfrak m}$. Therefore $(I:I)$ agrees with $\mathcal O_f$ at every maximal ideal and equals $\mathcal O_f$. [F1, F3, step 1.1, step 3.1, algebra] ∎
