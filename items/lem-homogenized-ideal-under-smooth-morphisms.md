---
id: "lem-homogenized-ideal-under-smooth-morphisms"
kind: "lemma"
title: "Homogenization commutes with smooth pullback"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 7
deps:
  - "lem-ag-geometrically-regular-fibres-local-presentation"
  - "def-axiom-of-choice"
  - "def-homogenized-ideal"
  - "def-maximal-order-and-tangent-directions"
  - "def-smooth-morphism-schemes"
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

Let $\varphi\colon X'\to X$ be a smooth morphism of smooth $K$-schemes and let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ on $X$ with ordered SNC exceptional family $E$ ([[def-maximal-order-and-tangent-directions]]).
Then $\varphi^*(H(\mathcal I))=H(\varphi^*\mathcal I)$ ([[def-homogenized-ideal]]).

## Facts & Assumptions

**Given:** Assume AC. Let $\varphi\colon X'\to X$ be a smooth morphism of smooth $K$-schemes and let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ on $X$.

[A1] [[def-axiom-of-choice]]: AC is assumed through the derivative-transport and order-preservation suppliers [F1] and [F2].

[F1] [[lem-derivative-ideals-under-etale-morphisms]]: for an étale morphism $\psi$ one has $\psi^*\mathcal D^i(\mathcal A)=\mathcal D^i(\psi^*\mathcal A)$ for all $i$.

[F2] [[lem-order-and-snc-under-smooth-morphisms]]: for a smooth morphism $\varphi$ the order is preserved, $\operatorname{ord}_{x'}(\varphi^*\mathcal A)=\operatorname{ord}_{\varphi(x')}(\mathcal A)$, The standard smooth local presentation in [[lem-ag-geometrically-regular-fibres-local-presentation]] factors a smooth germ locally as an étale morphism followed by a projection.

[F3] [[def-maximal-order-and-tangent-directions]]: maximal order means $\operatorname{ord}_x(\mathcal I)\le\mu$ at every point in every characteristic, and $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$.

[F4] [[def-homogenized-ideal]]: $H(\mathcal I)=\sum_{i=0}^{\mu-1}\mathcal D^i(\mathcal I)T(\mathcal I)^i$, and pullback of ideal products and sums is computed termwise.

## Proof

1.1 Derivative ideals commute with smooth pullback. A projection $\pi\colon X\times\mathbb A^r\to X$ satisfies $\pi^*\mathcal D^i(\mathcal A)=\mathcal D^i(\pi^*\mathcal A)$ because differentiating a pulled-back function in the $X$-directions gives the pulled-back derivatives and the new $\mathbb A^r$-coordinate derivatives annihilate the pulled-back generators of $\mathcal A$. For an étale morphism this is [F1]. A general smooth germ factors locally as an étale morphism after a projection by [F2], so for smooth $\varphi$ one has $\varphi^*\mathcal D^i(\mathcal A)=\mathcal D^i(\varphi^*\mathcal A)$ for every coherent ideal $\mathcal A$ and every $i\ge0$. [A1, F1, F2]

2.1 Maximal order is preserved. By [F2, F3], at every $x'\in X'$ one has $\operatorname{ord}_{x'}(\varphi^*\mathcal I)=\operatorname{ord}_{\varphi(x')}(\mathcal I)\le\mu$, so the pullback is of maximal order in every characteristic. Step 1.1 also gives $T(\varphi^*\mathcal I)=\mathcal D^{\mu-1}(\varphi^*\mathcal I)=\varphi^*T(\mathcal I)$. [A1, F2, F3, step 1.1]

3.1 Homogenization commutes. Using step 1.1 termwise, $\varphi^*H(\mathcal I)=\sum_{i=0}^{\mu-1}\varphi^*(\mathcal D^i(\mathcal I)T(\mathcal I)^i)=\sum_{i=0}^{\mu-1}\mathcal D^i(\varphi^*\mathcal I)\bigl(\varphi^*T(\mathcal I)\bigr)^i=\sum_{i=0}^{\mu-1}\mathcal D^i(\varphi^*\mathcal I)T(\varphi^*\mathcal I)^i=H(\varphi^*\mathcal I)$, where step 2.1 identified $T(\varphi^*\mathcal I)=\varphi^*T(\mathcal I)$. [A1, F4, step 1.1, step 2.1] ∎
