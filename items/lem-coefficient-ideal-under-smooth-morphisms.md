---
id: "lem-coefficient-ideal-under-smooth-morphisms"
kind: "lemma"
title: "The coefficient ideal commutes with smooth pullback"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 7
deps:
  - "lem-ag-geometrically-regular-fibres-local-presentation"
  - "def-axiom-of-choice"
  - "def-coefficient-ideal"
  - "def-smooth-morphism-schemes"
  - "lem-addition-and-multiplication-of-marked-ideals"
  - "lem-derivative-ideals-under-etale-morphisms"
  - "lem-order-and-snc-under-smooth-morphisms"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

Let $\varphi\colon X'\to X$ be a smooth morphism of smooth $K$-schemes and let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ on $X$ ([[def-coefficient-ideal]]).
Then $\varphi^*(C(\mathcal I,\mu))=C(\varphi^*\mathcal I,\mu)$.

## Facts & Assumptions

**Given:** Assume AC. Let $\varphi\colon X'\to X$ be a smooth morphism of smooth $K$-schemes and let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ on $X$.

[A1] [[def-axiom-of-choice]]: AC is assumed through the smooth/étale supplier [F2] and the marked-sum supplier [F3].

[F1] [[def-coefficient-ideal]]: $C(\mathcal I,\mu)=\sum_{i=0}^{\mu-1}(\mathcal D^i(\mathcal I),\mu-i)$, the sum of marked ideals.

[F2] [[lem-derivative-ideals-under-etale-morphisms]], [[lem-order-and-snc-under-smooth-morphisms]]: derivative ideals commute with étale pullback, [[lem-ag-geometrically-regular-fibres-local-presentation]] factors smooth germs locally as étale after a projection, and smooth pullback preserves orders; hence $\varphi^*\mathcal D^i(\mathcal I)=\mathcal D^i(\varphi^*\mathcal I)$ for all $i$ and $\varphi^*(\mathcal I,\mu)$ is of maximal order with the same $\mu$.

[F3] [[lem-addition-and-multiplication-of-marked-ideals]]: pullback of a sum of marked ideals is the sum of the pullbacks, since the operation is defined by ideal sums, products and orders, all of which are compatible with inverse image.

## Proof

1.1 Termwise comparison. For a projection, derivatives in the base directions pull back, and derivatives in the new variables annihilate the pulled-back generators; Leibniz shows that derivatives of their variable-coefficient multiples give no additional generators. The étale comparison and local factorization in [F2] therefore give derivative-ideal equality for every smooth morphism. By [F2] the pullback of the $i$-th summand is $\varphi^*(\mathcal D^i(\mathcal I),\mu-i)=(\mathcal D^i(\varphi^*\mathcal I),\mu-i)$, and these are exactly the summands of $C(\varphi^*\mathcal I,\mu)$. [A1, F1, F2]

2.1 Summing the summands. Pullback of a sum of marked ideals is the sum of the pullbacks by [F3], so summing the identity of step 1.1 over $0\le i\le\mu-1$ gives $\varphi^*C(\mathcal I,\mu)=\sum_i(\mathcal D^i(\varphi^*\mathcal I),\mu-i)=C(\varphi^*\mathcal I,\mu)$, which is the assertion. [A1, F1, F3, step 1.1] ∎
