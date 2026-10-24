---
id: ex-a-central-product-of-two-cyclic-groups-of-order-four
kind: example
title: "The central product of two cyclic groups of order four along their subgroups of order two is abelian of order eight"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-order-centre-and-derived-subgroup-of-a-central-product, def-external-direct-product-of-groups, thm-classification-of-cyclic-groups, def-order-in-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Example

The central product of two cyclic groups of order four along their subgroups of order two is abelian of order eight.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[L1] The subgroup $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ of $G\times H$ is central, hence normal ([[lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup]]).

[L2] The canonical maps $G\to G\circ_\alpha H$ and $H\to G\circ_\alpha H$ are injective homomorphisms whose images commute elementwise, generate $G\circ_\alpha H$, and meet in the image of $Z_1$ ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

[L3] $|G\circ_\alpha H|=|G||H|/|Z_1|$, the centre of $G\circ_\alpha H$ is the image of $Z(G)\times Z(H)$, and its derived subgroup is the image of $G'\times H'$ ([[prop-order-centre-and-derived-subgroup-of-a-central-product]]).

[L4] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: ([[thm-classification-of-cyclic-groups]]).

[L5] $$G\times H:=\{(g,h):g\in G,\ h\in H\}$$ ([[def-external-direct-product-of-groups]]).

[L6] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).


## Verification

**Proof technique:** direct.

1.1 Identify the unique subgroup of order two in each factor by the unique isomorphism between them and form the quotient of the direct product. [F1, L1, L4, L5]

1.2 The order formula gives $4\cdot4/2=8$, and the whole group is abelian because both factors are. [L2, L3]

2.1 The result is the direct product of a cyclic group of order four with one of order two, so a central product of nonabelian factors is not required for the construction and an abelian central product need not be extraspecial. [L4, L6, step 1.2] ∎
