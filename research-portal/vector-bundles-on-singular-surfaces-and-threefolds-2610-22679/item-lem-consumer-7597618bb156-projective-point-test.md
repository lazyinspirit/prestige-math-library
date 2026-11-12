---
title: The actual EM Chern operation on the standard point
status: draft
research_item: lem-consumer-7597618bb156-projective-point-test
dependency_level: 30
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [lem-author-d026a7b99ace-positive-rr-coefficient](item-lem-author-d026a7b99ace-positive-rr-coefficient)
- [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map)
- [lem-author-d026a7b99ace-positive-coordinates](item-lem-author-d026a7b99ace-positive-coordinates)
- [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible nested universe and site bounds of the supplied actual EM coefficient and perfect K-theory constructions. Over any algebraically closed field $k$, let $P=\mathbb P^3_k$ and $p=[1:0:0:0]$. Use the actual supported Chern operation, the residue-object generator $u_p=[\mathcal O_p]$ and the positive cycle generator $\delta_p$ selected by the supplied comparison $\Psi$. Then, for every integer $n$,
$$c_{3,p}(nu_p)=2n\delta_p.$$
On the standard affine chart $D_+(X_0)=\mathbb A^3_k$ this gives the same formula at the origin, with the same positive generators under open excision. There $u_0$ is represented by the ordinary coordinate Koszul resolution of $k$ over $k[t_1,t_2,t_3]$.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible nested universes containing $\omega$, the fields, schemes, small sites and enhanced categories required by the supplied constructions. Their existence is a separate size assumption. These are exactly the construction assumptions retained in [F1]–[F3].

[F1] [lem-author-d026a7b99ace-positive-rr-coefficient](item-lem-author-d026a7b99ace-positive-rr-coefficient), Facts F0, F2–F5 and Proof 1.1–2.1, provides the independent projective test calculation for the actual EM operations. Its F0 checks that this $P$ is a smooth pure three-dimensional Noetherian finite-type qcqs scheme. With $h=c_1(\mathcal O(1))$, its F2 gives $H^{6,3}_{\rm mot}(P,\mathbb Z)=\mathbb Z h^3$. Its coordinate Koszul resolution gives $[\mathcal O_p]=1-3[\mathcal O(-1)]+3[\mathcal O(-2)]-[\mathcal O(-3)]$ in actual perfect $K_0(P)$. Its actual total-Cartan calculation, including negative integer multiples, gives $c_3(n[\mathcal O_p])=2nh^3$. Only those subarguments are used; the later RR application in that supplier's Proof 3.1 is not used.

[F2] [lem-author-d026a7b99ace-positive-coordinates](item-lem-author-d026a7b99ace-positive-coordinates) gives $K_{0,p}(P)=\mathbb Z u_p$ and $H^{6,3}_p(P,\mathbb Z)=\mathbb Z\delta_p$, with their actual excision maps and their residue/cycle normalizations. The coordinate-flag normalization in [F1]'s F2 gives $\iota_H(\delta_p)=h^3$: its three smooth Cartier-divisor pushforwards give the positive global hyperplane cube. The specified refined Gysin, coefficient and forget-support comparisons used in that flag argument are supplied by [lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport](item-lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport). This uses a Gysin comparison of coefficient theories, not an identification of their independently constructed K-space Chern operations.

[F3] [lem-author-d026a7b99ace-supported-chern-map](item-lem-author-d026a7b99ace-supported-chern-map) gives the actual Chern support-to-global square and its open-excision compatibility. In particular $\iota_Hc_{3,p}(z)=c_3(\iota_Kz)$. Its qcqs-complement hypothesis holds on $P$ and its affine chart by [F1].

## Proof
**Given:** The field, projective test pair, actual operations, Choice and size assumptions above.

**Goal:** Prove $c_{3,p}(nu_p)=2n\delta_p$ for every integer $n$, and the stated affine-chart formula and Koszul representative.

1.1 Use the Koszul and actual Cartan subarguments of [F1]. Explicitly, the total series of the displayed residue-object class is $(1-2ht)^3/((1-ht)^3(1-3ht))$. Through degree three its numerator is $1-6ht+12h^2t^2-8h^3t^3$ and its denominator is $1-6ht+12h^2t^2-10h^3t^3$, so its quotient is $1+2h^3t^3$ modulo $t^4$. Here congruence means equality of coefficients through degree three. The actual total-series homomorphism in [F1] makes the series of $n[\mathcal O_p]$ its $n$th power. Modulo $t^4$ this changes the degree-three coefficient to $2nh^3$, also for negative $n$, since the inverse of $1+at^3$ is $1-at^3$ in that quotient. No integer is inverted. Thus $c_3(n[\mathcal O_p])=2nh^3$ in the original coefficient group. [A1, F1]

2.1 By [F2], the support-forgetting map from $\mathbb Z\delta_p$ to $\mathbb Z h^3$ sends its specified generator to its specified generator and is injective. By [F3] and step 1.1, both $c_{3,p}(nu_p)$ and $2n\delta_p$ map to $2nh^3$; injectivity gives the asserted supported equality. Restrict to the standard affine chart. The excision comparisons in [F2]–[F3] preserve the actual operation and both positive generators, so the origin has the same formula. The restriction of the coordinate Koszul resolution in [F1] is precisely the coordinate Koszul resolution on that chart. This argument uses no independently constructed RR Chern operation. [F1, F2, F3, step 1.1] ∎
