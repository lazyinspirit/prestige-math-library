---
id: lem-nonaffine-affine-normal-subgroup-products
kind: lemma
title: "Products of smooth connected affine normal subgroups are in the same class"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-group-image-exact-quotient-properties, lem-nonaffine-connected-group-geometrically-connected]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 6.42 and Proposition 8.2, pp.127,149"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Lemma 3.1.4"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Let $G$ be a separated finite-type $k$-group scheme, and $N_1,N_2$ smooth connected affine closed normal subgroups. The fppf product subgroup $N_1N_2\subset G$, consisting of points which locally on an fppf cover are products of points of $N_1$ and $N_2$, is a smooth connected affine closed normal subgroup containing both.

## Facts & Assumptions

[F1] A group image is the exact scheme kernel quotient, is closed, and inherits affineness, smoothness and connectedness from its source. ([[lem-nonaffine-group-image-exact-quotient-properties]])

[F2] Smooth connected groups are geometrically integral. ([[lem-nonaffine-connected-group-geometrically-connected]])

## Proof

**Given:** AC, $G,N_1,N_2$ as in the statement.

1.1 Conjugation of $N_2$ on the normal subgroup $N_1$ defines a semidirect product with underlying scheme $N_1\times N_2$ and multiplication $(n_1,n_2)(m_1,m_2)=(n_1(n_2m_1n_2^{-1}),n_2m_2)$. Multiplication and inverse are regular by the subgroup and group identities. The morphism to $G$ sending $(n_1,n_2)$ to $n_1n_2$ is a homomorphism. Its source is affine and smooth by products, and connected by [F2]. Thus [F1] gives a closed smooth connected affine image $P$. Since the exact image projection is fppf onto, the points of $P$ are precisely fppf local products, so $P=N_1N_2$. The identity in either factor gives inclusion of both subgroups. [F1, F2, given, construct, algebra]

2.1 Any point of $G$ conjugates each $N_i$ into itself after every base change. Conjugating a local product therefore gives another local product. Since membership in a closed subgroup is detected after a faithful flat cover by its ideal equations, $P$ is normal scheme theoretically. This proves every asserted property. AC is inherited from [F1]–[F2]. [F1, step 1.1, algebra] ∎
