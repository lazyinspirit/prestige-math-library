---
id: prop-finite-coefficient-cdh-comparison
kind: proposition
title: Finite-coefficient motivic to cdh comparison
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-derived-coefficient-exact-sequence
  - lem-author-4b6f215bcf3b-rational-cofiber-comparison
  - lem-author-4b6f215bcf3b-em-rational-comparison-cofiber
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-derived-coefficient-exact-sequence: mathematical-premise
  lem-author-4b6f215bcf3b-rational-cofiber-comparison: mathematical-premise
  lem-author-4b6f215bcf3b-em-rational-comparison-cofiber: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 6, proof of Proposition 2.6
      reading_limits: The displayed application was read.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 4.10(2)–(4), printed pp. 20–21
      reading_limits: The theorem statement and the displayed proof of part (4) were
        read; the underlying construction and its prerequisite proofs were not
        reconstructed.
proof_strategy: direct
dependency_level: 10
---

## Statement
Let k be an algebraically closed field of characteristic zero, X an affine threefold over k as in Proposition 2.6, and p a prime. The canonical comparison induces an isomorphism

$H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)\cong H^{5,3}_{\mathrm{cdh}}(X,\mathbb Z/p)$.

Here the left group is $H^5(\mathbb Z(3)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p)$, as in [[def-motivic-cohomology]]. The right group is $H^5(\mathbb Z(3)_{\mathrm{cdh}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p)$, where $\mathbb Z(3)_{\mathrm{cdh}}$ is Elmanto–Morrow's cdh-local motivic complex on qcqs Q-schemes. Finite coefficients are taken after evaluating each complex at X. The isomorphism is induced by the actual canonical comparison map; this statement does not identify the paper's cdh site with a separately chosen small site.

## Facts & Assumptions

**Given:** k, X and p as stated.

**Goal:** Prove the displayed canonical group isomorphism.

[F1] For a qcqs Q-scheme and a nonnegative weight, the canonical motivic-to-cdh map has rational cofiber. [[lem-author-4b6f215bcf3b-em-rational-comparison-cofiber]]

[F2] A map in D(Z) with rational cofiber becomes an isomorphism after derived tensoring with Z/n for every positive n, and therefore induces an isomorphism on every cohomology group. [[lem-author-4b6f215bcf3b-rational-cofiber-comparison]]

[F3] Derived tensoring with Z/p is represented by the cone of multiplication by p. [[lem-derived-coefficient-exact-sequence]]

## Proof

1.1 Since k has characteristic zero, the unique homomorphism Q → k exists. Composition X → Spec(k) → Spec(Q) makes X a Q-scheme. An affine scheme is quasi-compact and quasi-separated, so X satisfies [F1]. [given, F1]

2.1 Apply [F1] with $j = 3$ to obtain the canonical map Z(3)_mot(X) → $\mathbb Z(3)_{\mathrm{cdh}}$(X) with rational cofiber. Since p is positive, [F2] makes its derived tensor with Z/p an isomorphism in D(Z). [F1, F2, step 1.1]

3.1 Taking $H^5$ and using the definitions in the statement gives the displayed isomorphism. By [F3] these are derived finite-coefficient groups; the map is induced from the canonical comparison before taking the quotient. This is the characteristic-zero application used on the cited article page. [F2, F3, step 2.1] ∎
