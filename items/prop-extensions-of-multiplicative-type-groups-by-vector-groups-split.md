---
id: prop-extensions-of-multiplicative-type-groups-by-vector-groups-split
kind: proposition
title: Extensions of multiplicative-type groups by a one-dimensional vector group with a linear action split
dependency_level: 6
deps:
  - thm-nonaffine-group-scheme-normal-subgroup-quotient
  - def-axiom-of-choice
  - def-affine-scheme
  - def-crossed-homomorphism-and-hochschild-extension
  - def-group-of-multiplicative-type-and-torus
  - def-hochschild-cohomology-of-algebraic-groups
  - def-smooth-morphism-schemes
  - lem-ga-torsors-over-affine-schemes-are-trivial
  - lem-multiplicative-type-groups-are-linearly-reductive
  - prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Proposition 15.31, printed p. 318; Theorem 15.34(a), printed pp. 319-320
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Proposition 16.38 and Theorem 16.41(a), printed pp. 285-286
---
## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $G$ be an affine algebraic group of multiplicative type over $k$ ([[def-group-of-multiplicative-type-and-torus]], [[def-affine-scheme]]), and let
$$0\to U\to E\to G\to1$$
be an extension of affine algebraic groups in which $U\cong\mathbf G_a$ and the induced action of $G$ on $U$ is linear (equivalently, $U$ is identified with $\mathbf G_a$ on which $G$ acts through a character). Then the extension splits: $E\cong U\rtimes G$, and the projection admits a homomorphism of algebraic groups as a section.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, an affine group $G$ of multiplicative type, and an extension $0\to U\to E\to G\to1$ with $U\cong\mathbf G_a$ and linear $G$-action.

[F1] For an extension of group functors $0\to M\to E\to G\to1$ that admits a section as a map of set-valued functors (a Hochschild extension), the induced conjugation action of $G$ on $M$ is defined and the equivalence classes of such extensions inducing that action are classified by $H^2(G,M)$; the extension is trivial, i.e. $E\cong M\rtimes G$, exactly when the class vanishes. ([[def-crossed-homomorphism-and-hochschild-extension]], [[def-hochschild-cohomology-of-algebraic-groups]])

[F2] If $U\cong\mathbf G_a$ is a commutative group scheme with a $G$-action, the projection $E\to G$ makes $E$ a $U$-torsor over the affine base $G$; every $\mathbf G_a$-torsor over an affine scheme is trivial, so the projection admits a scheme section and $E$ is a Hochschild extension in the sense of [F1]. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-ga-torsors-over-affine-schemes-are-trivial]], [[def-crossed-homomorphism-and-hochschild-extension]])

[F3] A group of multiplicative type over a field is linearly reductive, and a linearly reductive affine algebraic group has $H^n(G,V)=0$ for all $n\ge1$ and every rational representation $V$. ([[lem-multiplicative-type-groups-are-linearly-reductive]], [[prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups]])

## Proof

**Given:** The Axiom of Choice, a field $k$, an affine group $G$ of multiplicative type, and an extension $0\to U\to E\to G\to1$ with $U\cong\mathbf G_a$ and linear $G$-action.

1.1 The action of $G$ on $U$ is linear, so it endows $U\cong\mathbf G_a$ with the structure of a rational representation of $G$; the projection $E\to G$ is a torsor under this group scheme $U$ over the affine base $G$, and by [F2] it is trivial, so there is a morphism of schemes $s:G\to E$ with $\pi\circ s=\operatorname{id}_G$. Thus the extension is a Hochschild extension, and by [F1] its isomorphism class corresponds to an element of $H^2(G,U)$ with coefficients in the representation $U$ of $G$. [F1, F2]

2.1 Since $G$ is of multiplicative type, [F3] makes it linearly reductive, and therefore $H^2(G,U)=0$ for the rational representation $U$; by [F1] the class of the extension vanishes, so the extension is equivalent to the split extension $U\rtimes G$ and is therefore split by a homomorphism of algebraic groups. [F1, F3, step 1.1] ∎ 