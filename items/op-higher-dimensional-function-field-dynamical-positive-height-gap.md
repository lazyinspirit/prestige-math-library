---
id: op-higher-dimensional-function-field-dynamical-positive-height-gap
kind: open-problem
title: "Positive height gap for totally non-isotrivial dynamics"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-vector-valued-height-over-finitely-generated-field
  - def-polarized-endomorphism-of-projective-variety
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander Carney, Heights and arithmetic dynamics over finitely generated fields"
      url: "https://arxiv.org/pdf/2010.07200v1"
      locator: "§5.2, Conjecture 5.13"
    - title: "Thomas Gauthier and Gabriel Vigny, The Geometric Dynamical Northcott and Bogomolov Properties"
      url: "https://perso.pages.math.cnrs.fr/users/thomas.gauthier/Northcott_polarized.pdf"
      locator: "§1.3–§1.6, Theorem A, Corollary 1.5, and Remark 1.6"
    - title: "Niki Myrto Mavraki and Harry Schmidt, On the dynamical Bogomolov conjecture for families of split rational maps"
      url: "https://arxiv.org/pdf/2201.10455v4"
      locator: "§1.5, Theorem 1.11 and its proof: a height inequality for isotrivial-free split maps over one-dimensional function fields"
---

## Open problem

Let $K/k$ be a finitely generated field extension with $\operatorname{trdeg}_k K=d+1$, and fix an intermediate field $k\subseteq k_1\subseteq K$ with $\operatorname{trdeg}_k k_1=1$. Let $\pi:\operatorname{Spec}K\to\operatorname{Spec}k_1$ be the morphism induced by inclusion. Let $X/K$ be a geometrically normal projective variety and let $(X,f,L,q)$ be a polarized dynamical system that is totally non-isotrivial over $k$: it is not constructibly isotrivial, and no positive-dimensional periodic closed subvariety has constructibly isotrivial restricted dynamics. Let $h_f$ be its vector-valued canonical height, with values in the integrable completed Picard group of $K/k$, ordered by pseudo-effectivity; let $\pi^*$ be the induced pullback from the completed integrable Picard group of $k_1/k$; and say that $\alpha$ has positive arithmetic degree when its arithmetic degree on the projective model of $k_1/k$ is positive. For each fixed integer $D\ge1$, does there exist such an $\alpha$ for which
$$
\{P\in X(\overline K): h_f(P)\le\pi^*\alpha,\ [K(P):K]\le D\}
$$
is finite?

## Open problem references

[[def-vector-valued-height-over-finitely-generated-field]]

[[def-polarized-endomorphism-of-projective-variety]]

## Facts & Assumptions

**Given:** A finitely generated extension $K/k$, an intermediate field $k_1$, a polarized system $(X,f,L,q)$, and an integer degree bound $D\ge1$.

[F1] The vector-valued canonical height, its pseudo-effective order, and total non-isotriviality have the definitions stated above. ([[def-vector-valued-height-over-finitely-generated-field]])

[F2] The polarization is the eigen-sheaf condition $f^*L\cong L^{\otimes q}$ for an ample $L$ and $q>1$. ([[def-polarized-endomorphism-of-projective-variety]])

## Status

Carney's Conjecture 5.13 gives this formulation and states it is known for rational maps on $\mathbb P^1$ and for abelian varieties, while the general case appears unknown. Gauthier–Vigny 2025 prove a characteristic-zero geometric Northcott result through periodic isotrivial subvarieties and explicitly do not establish the general positive height gap. Mavraki–Schmidt's arXiv v4 (July 2024), Theorem 1.11 gives a height inequality for isotrivial-free split systems over one-dimensional function fields, outside a proper exceptional subset. These are special-case results and do not settle this general vector-valued conjecture.

The cited arXiv v4 labels 1.9 as a conjecture about relative dynamical Bogomolov, not the height inequality. The established special-case height inequality cited here is Theorem 1.11; neither claim is used as a logical proof supplier.
