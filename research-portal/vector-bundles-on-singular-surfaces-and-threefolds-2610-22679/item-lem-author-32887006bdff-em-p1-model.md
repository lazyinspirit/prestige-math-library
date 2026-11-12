---
title: An actual non-A¹ P¹-spectrum for the supplied EM complexes
status: published
research_item: lem-author-32887006bdff-em-p1-model
dependency_level: 18
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input)
- [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [lem-adjudicate-112a302cd08b-ordinary-base-smooth-site](item-lem-adjudicate-112a302cd08b-ordinary-base-smooth-site)



## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied constructions. For every qcqs scheme $S$ over a field $k$, restriction of the supplied EM complexes to smooth qcqs $S$-schemes admits a canonical homotopy-commutative motivic ring spectrum model $\mathcal E_S$ in the non-$\mathbb A^1$ category of Annala–Iwasa. Its nonnegative levels are $\Omega^\infty A_n$ where $A_n(Y)=\mathbb Z(n)_{\rm mot}(Y)[2n]$. For every $i\geq0$ its diagonal group $\mathcal E_S^{2i,i}(Y)$ is naturally $H^{2i,i}_{\rm mot}(Y,\mathbb Z)$, with the actual product. No $\mathbb A^1$ localization is taken.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed size bounds discharge the selected graded/PBF input [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input) when constructing the graded algebra and using its actual projective-line equivalence in steps 1.1–2.1. The model and coefficient-stabilization constructions retain those same bounds.

[F1] [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input) supplies the natural commutative graded spectra $A_n$, the actual pointed class $b=c_1(\mathcal O(1))$ on $(\mathbb P^1,\infty)$, and the complex-level P¹ formula.

[F2] [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input) supplies the symmetric P¹-spectrum model: a commutative symmetric sequence with a map from the free graded sphere algebra on P¹ in degree1 is a commutative lax P¹-spectrum; it is a P¹-spectrum when the adjoint bonding maps are equivalences. It also supplies coefficient stabilization and the evaluation/shift rule.

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) fixes the qcqs condition on the schemes $S$ and $Y$; [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) fixes smoothness of the structural morphism $Y\to S$. The restriction is to these smooth qcqs test schemes.

[F4] [def-motivic-cohomology](item-def-motivic-cohomology) fixes the actual coefficient complex and the convention $H^{2i,i}_{\rm mot}(Y,\mathbb Z)=H^{2i}(\mathbb Z(i)_{\rm mot}(Y))$.

[F5] [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework) fixes the non-$\mathbb A^1$ smooth Zariski site, its space- and spectrum-valued coefficient categories, the pointed projective line, symmetric sequences with Day convolution, free graded sphere algebra, motivic ring spectra and diagonal grading. Use these multiplicative coefficient categories with the compatible universe bounds in [A1]; ordinary coefficient stabilization is the symmetric monoidal left adjoint whose lax monoidal right adjoint is used below. The localization, adjunction and shift assertions applied to them are supplied by [F2]. Here and in the Statement, the complex notation $A_n(Y)=\mathbb Z(n)_{\rm mot}(Y)[2n]$ denotes its Eilenberg–Mac Lane realization when regarded as an ordinary spectrum, as in [F1].

[F6] [lem-adjudicate-112a302cd08b-ordinary-base-smooth-site](item-lem-adjudicate-112a302cd08b-ordinary-base-smooth-site) identifies the native smooth site over this ordinary $S$ with the ordinary smooth qcqs site, including its Zariski sheaves, symmetric monoidal coefficient constructions, pointed projective line and Picard stack. Restrict [F1] first to ordinary smooth qcqs $S$-schemes, then transport along this site equivalence. Nisnevich descent in [F1] includes Zariski descent; the covering diagrams on the ordinary smooth subcategory are the same Zariski diagrams. Transport therefore gives the actual graded sheaf algebra on the native site, its Picard map and the specified infinity nullhomotopy, with the original values, products and projective-line equivalences. This uses the discreteness of the base $S$, not an unspecified extension of EM complexes to arbitrary derived schemes.

## Proof
**Given:** $S$ qcqs over a field, the Axiom of Choice and the fixed compatible site and universe bounds.

**Goal:** Construct the actual model and diagonal identification.

1.1 By [F6], transport the restriction of the graded algebra in [F1] to the native smooth Zariski site, with its actual Picard map and pointed class. Use this graded algebra $A_n$, with trivial symmetric-group actions on each level and the induced coherent symmetric products. Equivalently restrict its grading along the symmetric monoid $B\Sigma\mathbb N\to\mathbb N$. The class $b:\Sigma^\infty(\mathbb P^1,\infty)\to A_1$ defines an algebra map from the free graded sphere algebra of [F2]. Thus $A$ is a commutative lax P¹-spectrum in Zariski sheaves of ordinary spectra; its bonding maps are multiplication by this very class. [A1, F1, F2, F3, F5, F6, construct]

2.1 Every native test scheme $Y$ is ordinary by [F6]; its pointed projective line and infinity restriction are the ordinary ones. The adjoint map $A_n(Y)\to\operatorname{fib}(A_{n+1}(\mathbb P^1_Y)\to A_{n+1}(Y))$ is the second summand of the actual P¹ formula in [F1], hence an equivalence. The fiber uses the infinity section, on which $b$ is zero with the trivial-line nullhomotopy supplied by its pointed Picard map. Consequently $A$ is already an Ω-P¹-spectrum, so its levels need no replacement by unrelated objects. [A1, F1, F2, F5, F6, step 1.1]

3.1 Apply the lax monoidal right adjoint Ω∞ of coefficient stabilization in [F2]. It preserves the adjoint bonding equivalences and gives the stated ring spectrum $\mathcal E_S$ with levels $\Omega^\infty A_n$. By the shift/evaluation rule, $\mathcal E_S^{2i,i}(Y)=\pi_0 A_i(Y)=H^{2i}(\mathbb Z(i)_{\rm mot}(Y))$. The maps arise from the actual graded products, so this identification preserves their multiplication and naturality. The coefficients restrict from all ordinary qcqs schemes over the prime field and are transported by [F6], so they apply when the ordinary base $S$ is singular. [F1, F2, F4, F5, F6, step 1.1, step 2.1] ∎
