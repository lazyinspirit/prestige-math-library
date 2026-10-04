---
id: thm-normal-functions-codimension-one-intersection
kind: theorem
title: Regular functions on a normal variety are cut out in codimension one
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normal-point-and-normal-variety, lem-r-one-s-two-intersection-of-height-one-localisations, lem-normal-domain-implies-s-two, thm-normality-is-local-for-domains, def-codimension-irreducible-subvariety, thm-local-ring-affine-variety-localization, def-classical-integral-affine-atlas-and-chartwise-morphism, lem-classical-integral-affine-charts-have-canonical-common-function-field, def-function-field-variety, def-rational-function-regular-at-point, lem-normality-local-on-affine-opens, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: Theorem 8.14 and Corollary 8.15 (rational functions with no poles in codimension one are regular)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, MIT 18.721 Algebraic Geometry notes (January 26, 2022), Ch. 4 §§4.2-4.3"
      url: "https://ocw.mit.edu/courses/18-721-algebraic-geometry-fall-2020/"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an irreducible normal classical variety over an
algebraically closed field, with function field $k(X)$, and let
$\varphi\in k(X)$ be a rational function. Then $\varphi$ is regular on all of $X$ if and only if, on every affine chart $U$ with $A=k[U]$, it lies in $A_{\mathfrak p}$ for every height-one prime $\mathfrak p$ of $A$. Equivalently,
$$\Gamma(X,\mathcal O_X)=\bigcap_{U\text{ affine}}\ \bigcap_{\operatorname{ht}\mathfrak p=1}k[U]_{\mathfrak p}\subseteq k(X).$$
These are local rings along codimension-one irreducible subvarieties, not necessarily local rings at classical closed points. Height is the algebraic codimension convention here. In dimension zero an empty intersection is interpreted as $k(X)$.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the irreducible normal classical variety $X$ with function field $k(X)$, a rational function $\varphi\in k(X)$, and a finite affine chart $U\subseteq X$ with coordinate ring $A=k[U]$.

[F1] $A$ is a Noetherian integrally closed domain; a rational function is regular at a point $y$ exactly when it lies in the local ring $\mathcal O_{X,y}$, and on the affine chart this local ring is the localisation $A_{\mathfrak m_y}$ ([[lem-normality-local-on-affine-opens]], [[def-normal-point-and-normal-variety]], [[def-rational-function-regular-at-point]], [[thm-local-ring-affine-variety-localization]]). AC is used here.

[F2] Every Noetherian integrally closed domain satisfies Serre's condition $(S_2)$, and a Noetherian domain with $(S_2)$ equals the intersection of its height-one localisations inside its fraction field ([[lem-normal-domain-implies-s-two]], [[lem-r-one-s-two-intersection-of-height-one-localisations]]); the intersection is read inside $k(X)=\operatorname{Frac}(A)$ ([[def-function-field-variety]]).

[F3] All affine charts share the field $k(X)$ ([[def-classical-integral-affine-atlas-and-chartwise-morphism]], [[lem-classical-integral-affine-charts-have-canonical-common-function-field]]). A prime $\mathfrak p$ on a chart defines the prime-local ring $A_{\mathfrak p}$ along its irreducible subvariety. We use height one to express codimension one, rather than adjoining nonclosed points to the classical point set.

## Proof

1.1 On an affine chart $U$ the coordinate ring $A$ is a Noetherian integrally closed domain by [F1]. By [F2], $A=\bigcap_{\operatorname{ht}\mathfrak p=1}A_{\mathfrak p}$ inside $k(X)$. Thus membership in every height-one localization is equivalent to $\varphi\in A$, which is regularity on $U$. If $A$ is a field, the same equality uses the stated empty-intersection convention. [F1, F2, F3, given]

2.1 If the membership condition holds on every chart, step 1.1 makes $\varphi$ regular on each member of a finite affine cover. The sections agree on overlaps because they represent the same rational function in $k(X)$, so they glue to a global regular function. Conversely a global regular function restricts to an element of each $A$, and hence belongs to every $A_{\mathfrak p}$. This proves the equivalence and the intersection formula. [F1, F2, F3, step 1.1] ∎
