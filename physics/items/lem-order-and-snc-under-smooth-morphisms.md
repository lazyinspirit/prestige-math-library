---
id: lem-order-and-snc-under-smooth-morphisms
kind: lemma
title: Order and simultaneous normal crossings are preserved by smooth morphisms
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-effective-cartier-divisor
  - def-embedding-dimension-and-regular-local-ring
  - def-etale-morphism-schemes
  - def-local-ring
  - def-order-of-an-ideal-sheaf-at-a-point
  - def-regular-system-of-parameters
  - def-relative-dimension-smooth-morphism
  - def-simple-normal-crossings-divisors
  - def-smooth-morphism-schemes
  - lem-ag-geometrically-regular-fibres-local-presentation
  - lem-etale-formal-local-isomorphism
  - thm-ag-standard-smooth-geometric-regularity
  - thm-associated-graded-ring-of-a-regular-local-ring
  - thm-localisation-and-flat-base-change-of-regular-sequences
  - thm-quotient-and-lifting-regularity-across-a-regular-element
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero,
        J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version
        math/0401401 (28 pp., dated October 25, 2018)
      url: https://arxiv.org/pdf/math/0401401
---

## Statement

Assume AC ([[def-axiom-of-choice]]), as inherited from the regular-local algebra suppliers.

Let $\varphi\colon X'\to X$ be a smooth morphism of smooth $K$-schemes ([[def-smooth-morphism-schemes]]).

(1) For every coherent ideal sheaf $\mathcal I\subseteq\mathcal O_X$ ([[def-coherent-module-scheme]]) and every $x'\in X'$ with $x=\varphi(x')$,
$$\operatorname{ord}_{x'}(\varphi^*\mathcal I)=\operatorname{ord}_x(\mathcal I),$$
where the order is that of [[def-order-of-an-ideal-sheaf-at-a-point]].

(2) Assume in addition that $X'$ is of pure dimension, as required by the SNC interface. If $E$ is a family of divisors in simultaneous SNC position on $X$ ([[def-simple-normal-crossings-divisors]]) then the family $\varphi^{-1}(E)$ of scheme-theoretic inverse images of its members is a family of divisors in simultaneous SNC position on $X'$; the individual inverse images are reduced effective Cartier divisors ([[def-effective-cartier-divisor]]).

This is the source's Lemma 2.4.1.

## Facts & Assumptions

**Given:** A smooth morphism $\varphi:X'\to X$ of smooth $K$-schemes, an arbitrary point $x'\in X'$ with image $x$, and a coherent ideal sheaf $\mathcal I$ or a simultaneous SNC family on $X$. Assume the Axiom of Choice inherited from the regular-local algebra suppliers.

[A1] [[def-axiom-of-choice]]: AC is inherited from the regular-local parameter, regular-sequence, and associated-graded suppliers below; no residue-field equality is assumed.

[F1] [[def-smooth-morphism-schemes]] and [[def-local-ring]]: the induced map of Noetherian local rings $A=\mathcal O_{X,x}\to B=\mathcal O_{X',x'}$ is flat and local, and its fibre local ring $B/\mathfrak m_AB$ is regular. Both $A$ and $B$ are regular, since $X$ and $X'$ are smooth over $K$.

[F2] [[def-embedding-dimension-and-regular-local-ring]] and [[def-regular-system-of-parameters]]: a regular local ring of dimension $d$ has a minimal maximal-ideal generating tuple of length $d$, called a regular system of parameters; its classes are a basis of the cotangent space.

[F3] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: a regular local ring is a domain and every regular system of parameters is a regular sequence.

[F4] [[thm-localisation-and-flat-base-change-of-regular-sequences]]: a regular sequence remains regular after faithfully flat base change.

[F5] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: if $z$ is a nonzerodivisor in the maximal ideal of a Noetherian local ring $R$ and $R/(z)$ is regular, then $R$ is regular and $z\notin\mathfrak m_R^2$. In a regular local ring, quotienting by a parameter gives a regular local ring.

[F6] [[thm-associated-graded-ring-of-a-regular-local-ring]]: a cotangent basis in a regular local ring identifies its maximal-adic associated graded ring with the polynomial algebra on the classes of that basis.

[F7] [[def-order-of-an-ideal-sheaf-at-a-point]] and [[def-coherent-module-scheme]]: the order of an ideal stalk $I\subseteq A$ is the supremum of the integers $N\ge0$ with $I\subseteq\mathfrak m_A^N$, with value $+\infty$ for the zero ideal.

[F8] [[def-simple-normal-crossings-divisors]] and [[def-effective-cartier-divisor]]: an SNC divisor is locally the reduced product of a subset of a regular system of parameters, and simultaneous SNC requires this for the union of every subfamily. A nonzerodivisor equation gives an effective Cartier divisor; a unit equation gives the empty effective divisor.

## Proof

1.1 Work at an arbitrary $x'$ and its image $x$, with $A,B$ as in [F1], maximal ideals $\mathfrak m,\mathfrak n$, and residue fields $\kappa=A/\mathfrak m$, $\lambda=B/\mathfrak n$. The map $A\to B$ is faithfully flat: for any proper ideal $J\subseteq A$, locality gives $JB\subseteq\mathfrak n$, so $B/JB\ne0$; any nonzero $A$-module contains a nonzero cyclic submodule $A/J$, whose injection remains injective after flat tensoring, so its tensor with $B$ is nonzero. The closed-fibre local ring $B/\mathfrak mB$ is regular by smoothness. This argument applies to nonclosed and nonrational points as well. [F1, given]

2.1 Choose a regular system of parameters $u_1,\ldots,u_d$ of $A$. Its image in $B$ is a regular sequence by [F3, F4]. Put $B_i=B/(u_1,\ldots,u_i)B$; the terminal ring $B_d=B/\mathfrak mB$ is regular. Backward induction using [F5] shows that every $B_i$ is regular and that the class of $u_{i+1}$ is outside the square of its maximal ideal. Thus $u_{i+1}\notin(u_1,\ldots,u_i)B+\mathfrak n^2$, and the images of all $u_i$ are linearly independent in $\mathfrak n/\mathfrak n^2$. Extend them to a cotangent basis; its lifts generate $\mathfrak n$ by the finite-generator Nakayama argument (if the quotient module equals its maximal-ideal multiple, a matrix $I-M$ with unit determinant annihilates its generators). They therefore form a regular system of parameters of $B$. When $d=0$ the tuple is empty and the same conclusion is immediate. [F2, F3, F4, F5, step 1.1, choose]

3.1 By [F6], the parameter systems in step 2.1 identify $\operatorname{gr}_{\mathfrak m}A$ with $\kappa[U_1,\ldots,U_d]$ and $\operatorname{gr}_{\mathfrak n}B$ with $\lambda[U_1,\ldots,U_d,V_1,\ldots,V_e]$. The induced graded map sends each $U_i$ to the corresponding parameter class and extends the residue-field embedding $\kappa\to\lambda$; it is therefore injective. In particular an element of $\mathfrak m^j\setminus\mathfrak m^{j+1}$ remains outside $\mathfrak n^{j+1}$. [F6, step 2.1, algebra]

3.2 At a point $x$ on an SNC union, choose its distinct component equations $u_1,\ldots,u_c$ as part of a regular system of parameters of $A$, as in [F8]. Step 2.1, applied with that system, shows that their images are part of a regular system of parameters of $B$. Hence the inverse image union is locally the product of those same distinct parameter equations, so it has SNC at $x'$. This applies to every subfamily and every point over it, independently of its residue field or its position in the fibre, proving simultaneous SNC. Where no component occurs, the equation is a unit and its inverse image is empty. [F8, step 2.1]

4.1 For an ideal $I\subseteq A$ and $N\ge0$, the inclusion $I\subseteq\mathfrak m^N$ implies $IB\subseteq\mathfrak n^N$ because the map is local. Conversely, if $IB\subseteq\mathfrak n^N$ and $a\in I\setminus\mathfrak m^N$, choose the largest $j<N$ for which $a\in\mathfrak m^j$; step 3.1 gives $a\notin\mathfrak n^{j+1}$, contradicting $a\in IB\subseteq\mathfrak n^N$. Thus $I\subseteq\mathfrak m^N\iff IB\subseteq\mathfrak n^N$ for every $N$, and taking suprema proves (1), including unit ideals of order zero and zero ideals of infinite order. Flatness identifies the ideal pullback with its extended ideal. [F1, F7, step 3.1, algebra]

5.1 Each pulled-back member is a product of distinct parameters in the regular local domain $B$, hence a nonzerodivisor. Each individual parameter generates a prime ideal, since its quotient is regular by [F5] and a domain by [F3]. Their distinct principal prime ideals have intersection equal to their product: divisibility by one prime parameter and the fact that it divides none of the others prove this successively. The product ideal is consequently radical. Thus each inverse image is a reduced effective Cartier divisor, completing (2). AC is used only through the parameter and associated-graded suppliers [A1]; no completion isomorphism or equality of residue fields is used. [A1, F3, F5, F8, step 3.2, algebra] ∎
