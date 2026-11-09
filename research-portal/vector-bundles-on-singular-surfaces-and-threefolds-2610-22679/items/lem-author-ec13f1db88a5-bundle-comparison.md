---
id: lem-author-ec13f1db88a5-bundle-comparison
kind: lemma
title: Agreement with the existing projective-relation and virtual bundle first
  classes
status: published
domain: mathematics
deps:
  - prop-chern-whitney-identities
  - def-motivic-chern-classes
  - def-total-chern-class
  - lem-flag-tower-cohomology-detection
  - lem-determinants-of-short-exact-sequences
  - lem-author-79117e1d72ed-additive-c1
  - prop-motivic-projective-bundle-formula
  - math:def-axiom-of-choice
dependency_roles:
  prop-chern-whitney-identities: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  def-total-chern-class: mathematical-premise
  lem-flag-tower-cohomology-detection: mathematical-premise
  lem-determinants-of-short-exact-sequences: mathematical-premise
  lem-author-79117e1d72ed-additive-c1: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 21
---

## Statement
Assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied motivic Chern, Picard and flag constructions. For any field $k$ and qcqs $X/k$, the supplied projective-relation first class of an actual bundle $E$ satisfies $c_1(E)=\gamma_X(\det E)$, where $\gamma_X:\operatorname{Pic}(X)\to H^{2,1}(X)$ is the actual EM orientation. The same holds for the existing virtual first class on $K^0_{\rm vb}(X)$. This statement neither assumes nor concludes that $K^0_{\rm vb}(X)\to K_0(\operatorname{Perf}(X))$ is surjective.

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the stated site and universe bounds. These are inherited by the Whitney, projective-relation, flag-detection and virtual-series inputs in [F1]–[F3] when applied in steps 1.1–3.1. The finite rank partition introduces no additional arbitrary choice.

[F1] [[prop-chern-whitney-identities]] supplies actual filtered-root Whitney and normalization on lines; [[lem-author-79117e1d72ed-additive-c1]] supplies additive natural $\gamma$.

[F2] [[lem-determinants-of-short-exact-sequences]] identifies the determinant of a line-filtered bundle with the tensor product of its line quotients, naturally under pullback.

[F3] The abstract constant-rank detection statement in [[lem-flag-tower-cohomology-detection]] applies to the actual theory of [[prop-motivic-projective-bundle-formula]] over every field, since its projective-bundle contract has that scope. Its finite-clopen motivic restriction property supplies varying ranks; [[def-total-chern-class]] defines their gluing and virtual extension.

## Proof
**Given:** $E$ or a virtual bundle class on a qcqs scheme over an arbitrary field $k$, with AC and the stated compatible size bounds.

**Goal:** Reuse the sound line/filtration argument with justified all-field detection.

1.1 For a constant-rank $E$, take its flag tower in [F3]. Pullback is injective in bidegree(2,1). On the tower, [F1] makes $c_1$ the sum of its line-quotient first classes, and [F2] makes its determinant the tensor product of those lines. Additivity of $\gamma$ identifies these expressions. Naturality and injectivity therefore give $c_1(E)=\gamma_X(\det E)$ on $X$. This uses the abstract detecting PBF statement, not an algebraically closed hypothesis of a separately worded splitting theorem. [A1, F1, F2, F3]

2.1 For varying rank use the finite clopen rank partition and joint restriction isomorphism in [F3]. The same equality holds on every component, including rank-zero components where both classes are zero. It therefore holds globally. [A1, F1, F2, F3, step 1.1]

3.1 For a difference $[V]-[W]$ in the presented vector-bundle group, the linear coefficient of its representative-independent series is $c_1(V)-c_1(W)$ by [F3]. The exact-sequence determinant identity in [F2] kills every relation of the presented bundle group, so determinant defines a homomorphism on that group without a locally Noetherian hypothesis. Together with additivity of $\gamma$ in [F1], this identifies the expression as $\gamma(\det V\otimes(\det W)^{-1})$. This proves the claimed virtual comparison without identifying either group with all perfect classes. [A1, F1, F2, F3, step 2.1] ∎
