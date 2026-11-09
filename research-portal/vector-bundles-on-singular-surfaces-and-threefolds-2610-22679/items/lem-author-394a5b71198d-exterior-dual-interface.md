---
id: lem-author-394a5b71198d-exterior-dual-interface
kind: lemma
title: The actual exterior-dual class in affine perfect K zero
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - def-exterior-determinant-bundles
  - lem-affine-bundle-module-interface
  - lem-exterior-euler-duality
  - lem-regular-zero-koszul-euler-class
  - math:def-axiom-of-choice
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  lem-exterior-euler-duality: mathematical-premise
  lem-regular-zero-koszul-euler-class: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 13
---

## Statement
Assume AC. On a noetherian affine scheme $X=\operatorname{Spec}A$ and for a rank-$r$ bundle $E$, define $\varepsilon(E)=\sum_{i=0}^r(-1)^i[\Lambda^iE^\vee]\in K_0(X)$, where $K_0(X)$ is the article\'s perfect spectral K-zero group and brackets are degree-zero bundle object classes. For $P=\Gamma(X,E)$ the ordinary projective-module expression $C^K_r(P)=\sum_i(-1)^i[\Lambda^iP^*]$, $P^*=\operatorname{Hom}_A(P,A)$, maps to exactly $\varepsilon(E)$ under the affine comparison. Moreover $\lambda_{-1}(E)=(-1)^r[\det E]\varepsilon(E)$, so these two exterior conventions vanish simultaneously. For a regular section of $E$, its Koszul complex uses $E^\vee$ and has ambient class $\varepsilon(E)$.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] The affine comparison identifies the module/bundle Grothendieck classes with perfect spectral object classes, and the affine equivalence preserves duals and tensor products. [[def-vector-bundle-classes]], [[lem-affine-bundle-module-interface]]

[F2] Exterior powers and determinants are functorial, finite locally free and have the increasing-wedge bases. [[def-exterior-determinant-bundles]]

[F3] The exterior-duality identity is $\lambda_{-1}(E)=(-1)^r[\det E]\lambda_{-1}(E^\vee)$ with the determinant factor a unit. [[lem-exterior-euler-duality]]

[F4] A regular section of $E$ is a functional on $E^\vee$; its Koszul class has the dual exterior sum. [[lem-regular-zero-koszul-euler-class]]

## Proof

1.1 The finite sum defining $\varepsilon(E)$ exists and is invariant under bundle isomorphisms by [F1] and [F2]. Sheafification identifies $P^*$ with $E^\vee$ by [F1]. The natural map from the sheaf associated to $\Lambda^iP^*$ to $\Lambda^iE^\vee$ is an isomorphism: on a principal cover trivializing $P^*$ both sides have the same increasing-wedge bases and the map carries each basis to itself. The affine comparison thus carries every summand of $C^K_r(P)$ to the displayed summand of $\varepsilon(E)$. [F1, F2, construct]

2.1 Tensor compatibility makes the affine comparison respect multiplication on these bundle classes; the product is tensor product on both presentations. Therefore [F3] carries its determinant-unit identity into spectral $K_0(X)$ and proves simultaneous vanishing. [F1, F3, step 1.1]

3.1 Apply the regular-section clause of [F4] to $E$ itself. Its complex has terms $\Lambda^iE^\vee$, so its alternating ambient class is precisely $\varepsilon(E)$. This calculation fixes the source convention but supplies no converse splitting theorem. [F4, step 1.1] ∎
