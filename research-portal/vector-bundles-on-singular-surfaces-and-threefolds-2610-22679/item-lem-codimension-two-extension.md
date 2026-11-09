---
title: Functions extend across codimension two
status: draft
research_item: lem-codimension-two-extension
dependency_level: 2
---

PDF p. 9: Equality of functions and units on the smooth locus

## Prerequisites

- [lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)
- [math:lem-normal-noetherian-domain-intersection-of-height-one-localizations](https://alphabetamath.cc/item/lem-normal-noetherian-domain-intersection-of-height-one-localizations)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction is an isomorphism of sheaves of rings $\mathcal O_X\cong j_*\mathcal O_U$. Consequently restriction gives isomorphisms on global functions and on groups of global units.

Here a noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from that component's generic point to the given point. A global unit is a global function admitting a multiplicative inverse.

## Facts & Assumptions

[F1] Under the Axiom of Choice, every affine open of a noetherian normal scheme is the spectrum of a finite product of noetherian integrally closed domains; the corresponding factor spectra are open and closed integral subschemes ([lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)).

[F2] Under the Axiom of Choice, a noetherian integrally closed domain $A$ with fraction field $K$ equals the intersection of its height-one localizations inside $K$ ([math:lem-normal-noetherian-domain-intersection-of-height-one-localizations](https://alphabetamath.cc/item/lem-normal-noetherian-domain-intersection-of-height-one-localizations)). If there are no height-one primes, the intersection is understood to be $K$.

[A1] The Axiom of Choice is assumed for [F1] and [F2] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

**Given:** A noetherian normal scheme $X$, an open immersion $j:U\hookrightarrow X$ containing all points of component codimension at most one, and the Axiom of Choice.

**Goal:** Show that $\mathcal O_X\to j_*\mathcal O_U$ is an isomorphism and obtain the asserted global isomorphisms.

1.1 It suffices to prove that restriction $\mathcal O_X(V)\to\mathcal O_U(U\cap V)$ is an isomorphism on a basis of affine opens $V$: the kernel and cokernel sheaves then have zero stalks. By [F1], each such $V$ is a finite disjoint union of affine spectra of noetherian integrally closed domains. These factor spectra form a basis as $V$ varies, and restriction to a factor preserves its structure sheaf. Thus it is enough to consider $V=\operatorname{Spec} A$ for such a domain $A$. Its generic point and each point corresponding to a height-one prime of $A$ belong to $U$: codimension is unchanged when passing to an open neighborhood, since chains of generalizations of a point in an open set remain in that open set. [F1, A1, given]

2.1 Put $W=U\cap V$ and let $K=\operatorname{Frac}(A)$. Since $W$ contains the generic point, it is dense in the integral scheme $V$. A section $s$ on $W$ determines an element $z\in K$ by its generic stalk. For every height-one prime $\mathfrak p$, the point $\mathfrak p$ lies in $W$, so the germ of $s$ there belongs to $A_{\mathfrak p}$ and maps to $z$ in $K$. Hence $z$ lies in every height-one localization, and [F2] gives $z\in A$. The section defined by $z$ agrees with $s$ on $W$: on any principal open $D(f)\subseteq W$, both are elements of the domain $A_f$ and have the same image in $K$, so they are equal; such opens cover $W$. Thus restriction from $A$ to $\mathcal O_U(W)$ is surjective. It is injective because $W$ contains the generic point and $A\hookrightarrow K$ is injective. This also covers the case that $A$ is a field. [F2, A1, step 1.1, given]

3.1 Steps 1.1 and 2.1 show that the restriction morphism is an isomorphism on a basis and therefore an isomorphism of sheaves of rings. Taking sections over $X$ gives $\Gamma(X,\mathcal O_X)\cong\Gamma(U,\mathcal O_U)$. A ring isomorphism carries precisely the invertible elements to invertible elements, with inverses preserved, so it also gives an isomorphism of global unit groups. [step 1.1, step 2.1] ∎
