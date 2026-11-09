---
id: lem-author-ec13f1db88a5-rank-zero-stage
kind: lemma
title: The actual first EM stage is the rank-zero K space on all qcqs schemes
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - prop-motivic-weight-zero
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - def-motivic-filtration
  - lem-affine-perfect-k-zero-bridge
  - math:thm-etale-morphisms-open-and-quasi-finite
  - math:thm-proper-morphism-closed-image
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  prop-motivic-weight-zero: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  def-motivic-filtration: mathematical-premise
  lem-affine-perfect-k-zero-bridge: mathematical-premise
  math:thm-etale-morphisms-open-and-quasi-finite: mathematical-premise
  math:thm-proper-morphism-closed-image: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
---

## Statement
Assume the Axiom of Choice and fixed compatible site and universe size bounds for the constructions below. Let $k$ be any field. On its qcqs schemes, the actual EM weight-zero map $q_0:K\to\operatorname{gr}^0K$ induces the locally constant Euler rank on $K_0$. Moreover $\Omega^\infty\operatorname{gr}^0K$ is the discrete Nisnevich sheaf $\underline{\mathbb Z}$ of locally constant integer functions. Thus $S=\Omega^\infty\operatorname{Fil}^1K$ is the actual rank-zero fiber of $\Omega^\infty K\to\underline{\mathbb Z}$, and $\pi_0\operatorname{Fil}^1K(X)$ identifies injectively with $\ker(\operatorname{rank}:K_0(X)\to\underline{\mathbb Z}(X))$ for every qcqs $X$.

## Facts & Assumptions

[A1] Choice and the fixed compatible site and universe bounds are retained when applying [[prop-motivic-weight-zero]] in [F1], specifically its derived constant-sheaf interpretation and negative-degree vanishing in step 2.1 and the resulting rank-fiber computation in step 3.1. [[math:def-axiom-of-choice]]

[F1] [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] and [[prop-motivic-weight-zero]] identify the actual unital gr⁰ map with $R\Gamma_{\rm cdh}(\mathbb Z)$ on the precise prime-field qcqs site of [[lem-author-dcdf962edbda-qcqs-site]].

[F2] [[math:thm-etale-morphisms-open-and-quasi-finite]] makes surjective étale covers open quotient maps; [[math:thm-proper-morphism-closed-image]] makes proper surjections closed quotient maps. [[lem-affine-perfect-k-zero-bridge]] gives $K_0$ of a field as $\mathbb Z$ with unit generator. [[def-motivic-filtration]] supplies the actual fiber sequence Fil¹K→K→gr⁰K.

## Proof
**Given:** Any field $k$ and qcqs $X/k$, with the supplied actual tower.

**Goal:** Identify weight-zero sections, its map and the whole first-stage fiber.

1.1 The presheaf $L(V)$ of locally constant integer functions on $|V|$ is a cdh sheaf on the site in [F1]. Indeed, for a finite Nisnevich cover its disjoint-union map is a surjective open quotient map by [F2]; for an abstract blowup covering its disjoint-union map is proper surjective and hence closed quotient. Matching functions are constant on each set-theoretic fiber: two points over the same base point have a common point in their scheme fiber product since the tensor product of their residue fields over that base field is nonzero. A matching function therefore descends uniquely, and the quotient topology makes the descended function continuous to the discrete set $\mathbb Z$. This proves descent for the generators and hence the generated topology. [F1, F2, construct]

2.1 The map from the constant presheaf to $L$ is locally an isomorphism: locally constant functions are constant on an open cover (finite after quasi-compactness), and equality of constant values is detected there. The empty object uses its empty cover and the zero group. Thus $L$ is the ordinary cdh constant sheaf. Consequently $H^0_{\rm cdh}(X,\mathbb Z)=L(X)$ and negative cohomology is zero, as for the derived sections of any ordinary sheaf. Applying Ω∞ to gr⁰ therefore gives precisely the discrete sheaf $L$. This is computation on the actual big site, not a small-site substitution. [A1, F1, step 1.1]

3.1 For every point $x$ of $X$, pull back $q_0$ to $\operatorname{Spec}\kappa(x)$. Its $K_0$ and weight-zero target are $\mathbb Z$, and the map is unital by [F1], hence identity. Its value at $x$ on any perfect class is therefore its Euler rank. Values at all points determine the function in $L(X)$, so $q_0$ is the full rank function. Finally Ω∞ preserves fibers, and the discrete target has no positive homotopy groups; the fiber sequence in [F2] gives the asserted rank-zero space and the injective identification on $\pi_0$. [A1, F1, F2, step 2.1] ∎
