---
title: A unit-induced integral field coefficient zigzag
status: published
research_item: lem-adjudicate-6e70d30b9793-field-unit-zigzag
dependency_level: 1
---

PDF p. 17: Corollary 6.9; integral Chern and support comparison

## Prerequisites

- [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

## Statement
Fix a perfect field $k$. Write $H_{\rm Spi}$ for Spitzweck's integral field spectrum, $H_{\mathbb A}=s^0KGL_k$, and $U=s^0\mathbf1_k$. There is a specified zigzag of unital motivic ring equivalences
$$H_{\rm Spi}\xleftarrow{u_{\rm Spi}}U\xrightarrow{u_K}H_{\mathbb A}.$$
Both arrows are induced by units and the zeroth-slice functor. Their integral equivalence, including in characteristic $p$, is justified below using the canonical rank construction over $\operatorname{Spec}\mathbb Z$ and base change, rather than inferring it from a product-compatible field coefficient model. The shifted graded coefficient maps preserve products, units and the unit-adjoint reduced $\mathbb P^1$ class, with the same Tate-coordinate convention on both sides.

## Statement references

[thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input)

## Facts & Assumptions
[F1] [thm-adjudicate-6e70d30b9793-oriented-field-map-input](item-thm-adjudicate-6e70d30b9793-oriented-field-map-input) imports BEM Corollary9.7, which gives the integral E∞ unit equivalence $u_K$ and the base-change equivalence $g^*s^0\mathbf1_{\mathbb Z}\simeq s^0\mathbf1_k$, for $g:\operatorname{Spec}k\to\operatorname{Spec}\mathbb Z$. No prime is inverted.

[F2] Bachmann, The very effective covers of KO and KGL over Dedekind schemes, Theorem1.1(1), Example1.3 and Lemma2.1, give over $\mathbb Z$ the canonical map $\Sigma^\infty_{\rm fr}\mathrm{Vect}\simeq f_0KGL$ and the equivalence induced by rank
$$(\Sigma^\infty_{\rm fr}\mathrm{Vect})/\beta\longrightarrow\Sigma^\infty_{\rm fr}\mathbb Z\simeq H_{\rm Spi}.$$
Here $f_1H_{\rm Spi}=0$ holds over the Dedekind base $\mathbb Z$ as explicitly stated with Theorem1.1; the 1/2 assumption belongs only to the separate KO assertion. Bott periodicity identifies the displayed cofiber with $s^0KGL_{\mathbb Z}$.

[F3] Hoyois, The localization theorem for framed motivic spaces, Theorem21 and proof, identify $\Sigma^\infty_{\rm fr}\mathbb Z$ with Spitzweck HZ by a natural E∞ equivalence, adjoint to the actual ring isomorphism on constant integers. It sends the rank-one constant to the ring unit, and is stable under arbitrary base change. Spitzweck Remark11.2 supplies the canonical unit-induced E∞ map $u_{\rm Spi}:s^0\mathbf1\to s^0H_{\rm Spi}\simeq H_{\rm Spi}$ over fields. The integral zero-slice/effectivity facts also hold over $\mathbb Z$ by [F2]–[F3].

## Proof
**Given:** The stated integral spectra and maps, the existing universes.

**Goal:** Establish the actual first arrow as an integral equivalence with its unit, independently of an unread characteristic range of the classical sphere-slice theorem.

1.1 Over $\mathbb Z$, use [F2] to obtain the equivalence $a:s^0KGL_{\mathbb Z}\to H_{{\rm Spi},\mathbb Z}$. Its construction is rank on the framed vector-bundle model followed by the equivalence of [F3]. The vector-bundle tensor unit is $\mathcal O$, whose rank is the constant1. Consequently the composite of the sphere unit through $f_0KGL$, its Bott cofiber, and $a$ is the actual unit of $H_{\rm Spi}$, by the adjunction construction in [F3]. This is a unit triangle of actual maps, not an inference that an arbitrary equivalence preserves units. [F2, F3]

2.1 Let $b:s^0\mathbf1_{\mathbb Z}\to H_{{\rm Spi},\mathbb Z}$ be the map induced by that unit. Because $H_{{\rm Spi},\mathbb Z}$ is effective and has $f_1=0$, maps from $s^0\mathbf1$ to it are identified with maps from the effective unit: the $f_1\mathbf1$ term is orthogonal to a zero-slice target. Thus the triangle in step 1.1 identifies $b$ with $a\circ u_{K,\mathbb Z}$. Both factors are integral equivalences by [F1]–[F2], so $b$ is an equivalence. Its E∞ structure is the one supplied by multiplicative slices and the actual unit; no multiplicative structure on an arbitrary chosen Bott quotient is required for this inference. [F1, F2, F3, step 1.1]

3.1 Pull this unit triangle back along $g$. Spitzweck HZ is absolute, and BEM Corollary9.7 identifies $g^*s^0\mathbf1_{\mathbb Z}$ with $s^0\mathbf1_k$. Naturality of units and slice comparison identifies the resulting map with the canonical $u_{{\rm Spi},k}$ in [F3]: both factor the same unit into the field zero-slice target. Hence this particular map is an integral equivalence. Together with the integral $u_K$ of [F1] it gives the claimed zigzag. This argument never uses a characteristic-zero theorem to assert an integral characteristic-$p$ result. [F1, F2, F3, step 2.1]

4.1 By BEM Remark 3.21 and Remark 3.23 in [F1], the normalized reduced $\mathbb P^1$ class of a motivic ring $E$ is adjoint to $\mathbb T\to E\otimes\mathbb T$ induced by its unit. Since the two maps of the zigzag are the actual unital ring maps, they preserve this class. Spitzweck Proposition11.1/Lemma6.6 identify its original Picard normalization; the later Picard-space detection and EM comparison helpers therefore apply unchanged. [F1, F3, step 3.1] ∎
