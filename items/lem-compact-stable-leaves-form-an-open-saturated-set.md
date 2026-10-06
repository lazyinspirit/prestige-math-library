---
id: lem-compact-stable-leaves-form-an-open-saturated-set
kind: lemma
title: "Compact leaves with finite holonomy form an open saturated set"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-trivial-holonomy-gives-a-product-foliated-neighbourhood, thm-local-reeb-stability, lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented, def-transversely-oriented-codimension-one-foliation, def-stable-leaf-of-a-foliation, def-saturated-neighbourhood-of-a-leaf, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced Mathematics 91, 2003)"
      url: "https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016"
      locator: "Design locators: §2.5, pp. 44–51 (global Reeb stability; openness of the set of stable leaves)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.2, printed pp. 140–143 (the set of spherical/stable leaves is open)"
dependency_level: 14
---

## Statement

Assume $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a
transversely oriented codimension-one foliation of a smooth manifold $M$, let
$L$ be a compact leaf with finite fundamental group
([[def-transversely-oriented-codimension-one-foliation]]), and let
$S\subseteq M$ be the union of the leaves of $F$ that are compact and
diffeomorphic to $L$. Then $S$ is open and saturated, and it is nonempty (it
contains $L$). More generally, for any regular foliation the union of the
compact leaves with finite holonomy group is open and saturated.

## Facts & Assumptions

**Given:** A transversely oriented codimension-one foliation $F$, a compact leaf $L$ with finite $\pi_1(L)$, and the union $S$ of the compact leaves diffeomorphic to $L$.

[F1] A union of leaves is saturated for $F$, and a saturated set is open exactly when every point of it has a saturated neighbourhood contained in it ([[def-saturated-neighbourhood-of-a-leaf]]).

[F2] In a transversely oriented codimension-one foliation a compact leaf with finite fundamental group has trivial holonomy, and a compact leaf with trivial holonomy has a fundamental system of product foliated neighbourhoods $L_x\times D$ whose leaves are compact and diffeomorphic to $L_x$ ([[lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented]], [[cor-trivial-holonomy-gives-a-product-foliated-neighbourhood]]).

[F3] A compact leaf with finite holonomy has a saturated neighbourhood whose leaves are all compact with finite holonomy ([[thm-local-reeb-stability]]).

## Proof

**Proof technique:** direct.

1.1 (Saturated and nonempty.) The set $S$ is a union of leaves, hence saturated by [F1], and it contains $L$ because $L$ is compact and diffeomorphic to itself; in particular $S$ is nonempty. [F1]

1.2 (Openness in the codimension-one case.) Let $x\in S$ and let $L_x$ be the leaf of $F$ through $x$; by definition of $S$, $L_x$ is compact and diffeomorphic to $L$, so $\pi_1(L_x)$ is finite; by [F2] the holonomy of $L_x$ is trivial and $L_x$ has a saturated product neighbourhood $U\cong L_x\times D$ all of whose leaves are compact and diffeomorphic to $L_x$, hence diffeomorphic to $L$. Therefore $U\subseteq S$, and since $x$ was arbitrary, $S$ is open [F1]. [F1, F2]

2.1 (General regular case.) Let $F$ be any regular foliation and let $S'\subseteq M$ be the union of the compact leaves with finite holonomy group. It is saturated as a union of leaves, and if $x\in S'$ then its leaf $L_x$ is compact with finite holonomy, so local Reeb stability supplies a saturated neighbourhood $U$ of $L_x$ all of whose leaves are compact with finite holonomy [F3]; hence $U\subseteq S'$ and $S'$ is open. In the transversely oriented codimension-one situation, $S$ is a subcollection of these leaves, and its openness follows specifically from the common diffeomorphism type argument in step 1.2. Trivial holonomy does not imply finite fundamental group. [F1, F3, step 1.2] ∎
