---
title: The origin of the affine line has zero perfect K class
status: published
research_item: lem-adjudicate-7a5c49c4e930-affine-line-point-class
dependency_level: 13
---

## Prerequisites

- [def-article-conventions](item-def-article-conventions)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules)
- [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring)
- [math:ex-polynomial-ring-flat-smooth](https://alphabetamath.cc/item/ex-polynomial-ring-flat-smooth)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)
- [math:ex-skyscraper-coherent-closed-point](https://alphabetamath.cc/item/ex-skyscraper-coherent-closed-point)
- [math:lem-quotient-spectrum-map-is-a-closed-immersion](https://alphabetamath.cc/item/lem-quotient-spectrum-map-is-a-closed-immersion)
- [math:thm-localisation-of-modules-is-exact](https://alphabetamath.cc/item/thm-localisation-of-modules-is-exact)
- [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization)
- [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and suitable universes for perfect complexes and their K-theory. Let $k$ be a field, $A=k[t]$, and $X=\operatorname{Spec}A$, the affine line over $k$. Let $x$ be the point corresponding to the ideal $(t)$, and let $i:\operatorname{Spec}k\hookrightarrow X$ be induced by evaluation at $t=0$. Then $X$ is quasi-compact and quasi-separated and is smooth over $k$, $x$ is closed with residue field $\kappa(x)=k$, and the residue sheaf $i_*k$ is perfect. Its degree-zero perfect K-theory class vanishes:

$$[i_*k]=0\quad\text{in }K_0(X)=\pi_0K(X).$$

Here $K$ is nonconnective K-theory of perfect complexes; $i_*k$ denotes the sheaf with sections $k$ on opens containing $x$ and zero on opens avoiding $x$, with scalar action through evaluation at $x$. A perfect complex is locally represented by a bounded complex of finite locally free modules; a sheaf in a perfect-complex class is placed in degree zero.

## Facts & Assumptions
**Given:** $k,A,X,x,i$ as in the statement, AC and compatible suitable universes. The polynomial ring consists of finite coefficient sequences, with coefficientwise addition and convolution multiplication. The constants embed $k$ into $A$ and $t$ is the sequence with coefficient $1$ at degree one and zero elsewhere.

**Goal:** Check the geometric hypotheses and prove the vanishing by an explicit two-term resolution and the affine Euler-class comparison.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) supplies the assumed AC, retained for the affine compactness, smoothness, associated-sheaf and perfect K-theory suppliers below. Suitable universes are assumed with the closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) and inherited compatibly from the perfect-complex and K-theory interfaces, not inferred from AC.

[F1] [def-article-conventions](item-def-article-conventions) supplies scheme-over-field, qcqs and residue-field conventions, with the base field here explicitly arbitrary. [math:def-polynomial-ring-over-a-commutative-ring](https://alphabetamath.cc/item/def-polynomial-ring-over-a-commutative-ring) supplies the coefficient model of $k[t]$ used in the resolution. Smooth morphisms and closed immersions use [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) and [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes).

[F2] [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) give the two affine compactness properties. [math:ex-polynomial-ring-flat-smooth](https://alphabetamath.cc/item/ex-polynomial-ring-flat-smooth) with base $k$ and one variable gives smoothness over $k$, under AC.

[F3] [math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct) makes $A$ Noetherian. For a maximal ideal of such a ring, [math:ex-skyscraper-coherent-closed-point](https://alphabetamath.cc/item/ex-skyscraper-coherent-closed-point) identifies the associated sheaf of the quotient module with the closed-point residue sheaf and identifies its residue field with that quotient. [math:lem-quotient-spectrum-map-is-a-closed-immersion](https://alphabetamath.cc/item/lem-quotient-spectrum-map-is-a-closed-immersion) gives the closed immersion induced by the quotient map.

[F4] [math:def-exact-and-short-exact-sequences-of-modules](https://alphabetamath.cc/item/def-exact-and-short-exact-sequences-of-modules) defines short exactness by equality of successive images and kernels, including injectivity and surjectivity at the ends. [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization) identifies stalks of associated sheaves, naturally in module maps, with module localizations. [math:thm-localisation-of-modules-is-exact](https://alphabetamath.cc/item/thm-localisation-of-modules-is-exact) preserves a short exact module sequence under localization. [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise) then establishes exactness of its associated sheaf sequence.

[F5] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfect complexes, quasi-isomorphisms and degreewise associated-sheaf representatives on an affine scheme. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) defines $K(X)$ and $K_0(X)$, using the degree-zero stable homotopy group of [def-stable-spectra-interface](item-def-stable-spectra-interface). Under the assumed AC and universes, [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies $K_0(X)$ with vector-bundle K zero and sends a bounded finite-projective complex to the alternating sum of its associated bundle terms.

## Proof
1.1 Evaluation $\epsilon:A\to k$, $\sum a_jt^j\mapsto a_0$, is a surjective ring homomorphism: convolution gives constant coefficient $a_0b_0$ for a product, and constants give all values. Its kernel is $(t)$, since a polynomial has zero constant term exactly when it is $t$ times the polynomial obtained by shifting its coefficients down one place. Every ideal properly containing $(t)$ contains an element with nonzero constant term; subtracting its multiple of $t$ and then multiplying by that nonzero constant's inverse puts $1$ in the ideal. Thus $(t)$ is maximal and $A/(t)\cong k$. By [F3], $x$ is closed, its residue field is $k$, and $i$ is the quotient closed immersion with residue sheaf $\widetilde{A/(t)}=i_*k$. By [F2], $X$ is qcqs and smooth over $k$. The polynomial ring is generated over $k$ by $t$, so it also satisfies the article's finite-type affine convention. [A1, F1, F2, F3, given]

2.1 Multiplication by $t$ on $A$ is injective, since it shifts a finite coefficient sequence one place up without losing a coefficient. Together with step 1.1 this proves exactness of $0\to A\xrightarrow{t}A\xrightarrow{\epsilon}k\to0$. Apply [F4] at every prime and then its stalkwise criterion: the associated sheaf sequence is exact, with last term $i_*k$ by step 1.1. Hence the associated complex of $P^{-1}=A$, $P^0=A$, $d^{-1}=t$ and all other terms zero has an augmentation to $i_*k[0]$ inducing all cohomology isomorphisms. It is a quasi-isomorphism by [F5]. The two terms are free of rank one, hence finite projective (a map from $A$ lifts through a surjection by lifting the image of $1$), and their associated bundles are both $\mathcal O_X$. Thus $i_*k$ is perfect and its class maps by [F5] to $-[\mathcal O_X]+[\mathcal O_X]=0$. That comparison is an isomorphism, so $[i_*k]=0$ in $K_0(X)$ itself. The assumed Choice and universe conditions discharge the hypotheses of all invoked constructions. [A1, F1, F4, F5, step 1.1] ∎
