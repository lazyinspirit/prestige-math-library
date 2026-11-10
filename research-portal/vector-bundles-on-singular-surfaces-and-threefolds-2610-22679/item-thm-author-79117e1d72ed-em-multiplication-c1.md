---
title: External EM multiplicative motivic complexes and actual Chern map
status: published
research_item: thm-author-79117e1d72ed-em-multiplication-c1
dependency_level: 9
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (arXiv v1) · §2.2, pp.11–12; Definitions4.9/4.23, pp.21/27–28; Theorems4.10(1)/4.24(1); Lemma5.1 and its proof and Definition5.2, pp.33–34; multiplication and (5.2), p.34; line convention immediately before Theorem5.24, p.43](https://arxiv.org/pdf/2309.08463v1)

## Statement
Let $F=\mathbb Q$ or $\mathbb F_p$. The supplied EM complexes $C_b(X)=\mathbb Z(b)_{\rm mot}(X)$ on qcqs $F$-schemes are the shifted graded pieces of the specified multiplicative filtration. In the terminology of EM §2.2, the graded spectra $G_b=C_b[2b]$ form a natural commutative algebra object for graded Day convolution: there are coherent associative symmetric unital products $G_b\wedge G_d\to G_{b+d}$ and unit $\mathbb S\to G_0$, and pullbacks preserve this data. Equivalently these induce the usual motivic cup products, with even weight shifts. The negative graded pieces vanish, so $C_b=0$ for $b<0$.
There is the actual natural map of complex-valued presheaves
$$c_1:R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\longrightarrow C_1(X)$$
of Lemma5.1/Definition5.2. Its degree-two source is $\operatorname{Pic}(X)$ with tensor-product group law. It agrees with the classical class on smooth $F$-schemes. The maps denoted $c_1(\mathcal O(1))^m\pi^*$ in §5 are defined using this class and the multiplication just specified.
EM writes $P_X^{\rm lin}(V)$ for the projectivization classifying rank-one subbundles of $V$, with tautological subbundle $\mathcal O(-1)$ and its dual $\mathcal O(1)$.

## External input
These are the stated construction and conventions at the exact locators in the source reference, restricted to the completed motivic-complex supplier. Definitions4.9/4.23 take pullbacks in filtered E∞-algebras; §2.2 gives the symmetric monoidal associated-graded construction. Definition5.2 supplies the complex map, rather than a class chosen from group agreement. Import those established foundations. Restriction along the prime-field forgetful functor supplies the same interface on qcqs schemes over any field. No replacement of the supplied motivic theory or K-theory model is made.
