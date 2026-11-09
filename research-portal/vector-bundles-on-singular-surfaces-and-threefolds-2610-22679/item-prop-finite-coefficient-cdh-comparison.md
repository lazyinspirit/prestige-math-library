---
title: Finite-coefficient motivic to cdh comparison
status: draft
research_item: prop-finite-coefficient-cdh-comparison
dependency_level: 10
---

PDF p. 6: Proof of Proposition 2.6, EM23 Theorem 4.10(4)

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)
- [lem-author-4b6f215bcf3b-rational-cofiber-comparison](item-lem-author-4b6f215bcf3b-rational-cofiber-comparison)
- [lem-author-4b6f215bcf3b-em-rational-comparison-cofiber](item-lem-author-4b6f215bcf3b-em-rational-comparison-cofiber)

## Statement
Let k be an algebraically closed field of characteristic zero, X an affine threefold over k as in Proposition 2.6, and p a prime. The canonical comparison induces an isomorphism

$H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)\cong H^{5,3}_{\mathrm{cdh}}(X,\mathbb Z/p)$.

Here the left group is $H^5(\mathbb Z(3)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p)$, as in [def-motivic-cohomology](item-def-motivic-cohomology). The right group is $H^5(\mathbb Z(3)_{\mathrm{cdh}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p)$, where $\mathbb Z(3)_{\mathrm{cdh}}$ is Elmanto–Morrow's cdh-local motivic complex on qcqs Q-schemes. Finite coefficients are taken after evaluating each complex at X. The isomorphism is induced by the actual canonical comparison map; this statement does not identify the paper's cdh site with a separately chosen small site.

## Facts & Assumptions

**Given:** k, X and p as stated.

**Goal:** Prove the displayed canonical group isomorphism.

[F1] For a qcqs Q-scheme and a nonnegative weight, the canonical motivic-to-cdh map has rational cofiber. [lem-author-4b6f215bcf3b-em-rational-comparison-cofiber](item-lem-author-4b6f215bcf3b-em-rational-comparison-cofiber)

[F2] A map in D(Z) with rational cofiber becomes an isomorphism after derived tensoring with Z/n for every positive n, and therefore induces an isomorphism on every cohomology group. [lem-author-4b6f215bcf3b-rational-cofiber-comparison](item-lem-author-4b6f215bcf3b-rational-cofiber-comparison)

[F3] Derived tensoring with Z/p is represented by the cone of multiplication by p. [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)

## Proof

1.1 Since k has characteristic zero, the unique homomorphism Q → k exists. Composition X → Spec(k) → Spec(Q) makes X a Q-scheme. An affine scheme is quasi-compact and quasi-separated, so X satisfies [F1]. [given, F1]

2.1 Apply [F1] with $j = 3$ to obtain the canonical map Z(3)_mot(X) → $\mathbb Z(3)_{\mathrm{cdh}}$(X) with rational cofiber. Since p is positive, [F2] makes its derived tensor with Z/p an isomorphism in D(Z). [F1, F2, step 1.1]

3.1 Taking $H^5$ and using the definitions in the statement gives the displayed isomorphism. By [F3] these are derived finite-coefficient groups; the map is induced from the canonical comparison before taking the quotient. This is the characteristic-zero application used on the cited article page. [F2, F3, step 2.1] ∎
