---
id: cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis
kind: corollary
title: "Finiteness of the fundamental group is sufficient, but not necessary, for Reeb stability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-local-reeb-stability, cor-trivial-holonomy-gives-a-product-foliated-neighbourhood, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-based-loops-and-fundamental-group, def-induced-homomorphism-on-fundamental-groups, def-simply-connected, def-stable-leaf-of-a-foliation, def-countable-choice-principle-for-foliation-pair, lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced Mathematics 91, 2003)"
      url: "https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016"
      locator: "Design locators: §2.3, pp. 30–33 (local Reeb stability; finite π₁ implies finite holonomy)"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (product foliations have trivial holonomy)"
dependency_level: 13
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]],
[[lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]]). Let $F$ be a regular
foliation and $L$ a compact leaf. If $\pi_1(L,x)$ is finite then the holonomy
group $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$, being a homomorphic image
of a finite group, is finite; hence $L$ is stable by
[[thm-local-reeb-stability]]. Finiteness of $\pi_1(L)$ is therefore sufficient
for stability. It is not necessary: the product foliation of $L\times\mathbb R^q$
by the slices $L\times\{t\}$ has compact leaves with trivial holonomy for every
compact leaf $L$, including leaves with infinite fundamental group. In
particular, for a compact leaf the hypothesis "finite holonomy" is strictly
weaker than "finite fundamental group".

## Facts & Assumptions

**Given:** A regular foliation $F$ with a compact leaf $L$, and a base point $x\in L$.

[F1] The holonomy group is the image $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$ of the holonomy representation ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F2] The image of a finite group under a homomorphism is finite ([[lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite]]).

[F3] A compact leaf with finite holonomy is stable ([[thm-local-reeb-stability]], [[def-stable-leaf-of-a-foliation]]).

[F4] In the product foliation of $L\times\mathbb R^q$ by the slices $L\times\{t\}$, leafwise transport in product coordinates is the identity of a transversal, so the holonomy of every leaf is trivial; trivial holonomy gives product foliated neighbourhoods ([[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]], [[def-based-loops-and-fundamental-group]], [[def-induced-homomorphism-on-fundamental-groups]]).

## Proof

**Proof technique:** direct.

1.1 (Sufficiency.) Suppose $\pi_1(L,x)$ is finite. Then $\operatorname{Hol}(L,x)=\rho_x(\pi_1(L,x))$ is the image of a finite group under the homomorphism $\rho_x$, hence finite [F1, F2]. By local Reeb stability the compact leaf with finite holonomy is stable [F3]. Thus finiteness of the fundamental group is sufficient for stability of $L$. [F1, F2, F3]

1.2 (Non-necessity.) Consider the product foliation of $L\times\mathbb R^q$ by the slices $L\times\{t\}$ for a compact leaf $L$. Every leaf is compact and diffeomorphic to $L$, and the leafwise transport of a transversal $\{y\}\times\mathbb R^q$ in product coordinates is the identity, so the holonomy representation is trivial and the leaf has a fundamental system of product neighbourhoods [F4]. This applies in particular when $\pi_1(L,x)$ is infinite, so finiteness of the fundamental group is not necessary for stability; and since trivial holonomy is finite, "finite holonomy" is strictly weaker than "finite fundamental group" for compact leaves. [F4]

2.1 Therefore on compact leaves the hypothesis consumed by local Reeb stability is finiteness of the holonomy group; finiteness of $\pi_1$ implies it and is sufficient, while product foliations with infinite $\pi_1$ show it is not necessary. [step 1.1, step 1.2] ∎
