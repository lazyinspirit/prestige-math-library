---
id: def-burau-infinite-cyclic-cover
kind: definition
title: "The Burau infinite cyclic cover"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-total-winding-homomorphism-of-the-punctured-disk
  - lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected
  - lem-subgroup-quotient-of-universal-cover
  - thm-classification-of-connected-covering-spaces
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-regular-covering-characterizations
  - cor-deck-group-of-a-regular-covering
  - thm-deck-group-as-normalizer-quotient
  - def-regular-covering
  - def-deck-transformation-and-deck-group
  - def-monodromy-action-on-a-covering-fibre
  - thm-sheets-equal-fundamental-group-index
  - thm-first-isomorphism-theorem-groups
  - def-covering-map-and-evenly-covered-neighbourhoods
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5), and section 4 (Theorem 4.1)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Allen Hatcher, Algebraic Topology, section 1.3 (covering spaces) and section 2.2 (cellular homology and its agreement with singular homology)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 1.3: lifting Propositions 1.30-1.34, printed pp. 60-62; classification Theorem 1.38, printed pp. 67-68; regularity and deck group Proposition 1.39, printed pp. 71-72"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$ (as in the definition of the total winding homomorphism: for
$n=0$ the map $\pi_1(X,d)\to\mathbb Z$ is trivial, not surjective, and there
is no infinite cyclic cover). Let $X=D^2\setminus Q_n$, let $d$ be the
boundary basepoint, and let
$\omega:\pi_1(X,d)\to\mathbb Z$ be the total winding homomorphism of
[[def-total-winding-homomorphism-of-the-punctured-disk]]. Put
$K=\ker\omega$. The **Burau infinite cyclic cover** is the based connected
covering
$$p:(\tilde X,\tilde d)\longrightarrow(X,d)$$
classified by the subgroup $K$, so that
$p_*\pi_1(\tilde X,\tilde d)=K$ and $\tilde d$ is the chosen lift of $d$. It
exists and is unique up to a unique based isomorphism
([[lem-subgroup-quotient-of-universal-cover]],
[[thm-classification-of-connected-covering-spaces]]) because $X$ is nonempty,
path-connected, locally path-connected and semilocally simply connected
([[lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected]]),
and $[\pi_1(X,d):K]=\infty$. Because $K$ is normal, the cover is regular, its
deck group is
$$\operatorname{Deck}(\tilde X/X)\cong\pi_1(X,d)/K\cong\mathbb Z$$
([[thm-regular-covering-characterizations]],
[[cor-deck-group-of-a-regular-covering]],
[[thm-deck-group-as-normalizer-quotient]]), and we write $t$ for the deck
transformation corresponding to the **positive** generator of $\mathbb Z$,
that is, the deck transformation whose monodromy raises total winding by $1$
([[def-monodromy-action-on-a-covering-fibre]]). Then
$\operatorname{Deck}(\tilde X/X)=\{t^k:k\in\mathbb Z\}$, deck transformations
act on the left ([[def-deck-transformation-and-deck-group]]), and $t^{-1}$ is
the negative generator. The sign of $t$ is fixed once and for all by the
positive orientation of the standard meridians and the identification
$\pi_1/K\cong\mathbb Z$.

## Facts & Assumptions

**Given:** The punctured disk $X=D^2\setminus Q_n$ with basepoint $d$, the total winding homomorphism $\omega:\pi_1(X,d)\to\mathbb Z$, and $K=\ker\omega$.

[F1] Since $X$ is nonempty, path-connected, locally path-connected and semilocally simply connected, every subgroup $H\le\pi_1(X,d)$ is realised by a based connected covering $p_H:(E_H,e_H)\to(X,d)$ with $(p_H)_*\pi_1(E_H,e_H)=H$ ([[lem-subgroup-quotient-of-universal-cover]], [[lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected]]).

[F2] For such a base, the assignment $[p:(E,e_0)\to(X,d)]\mapsto p_*\pi_1(E,e_0)$ is a bijection from based-isomorphism classes of based connected coverings to subgroups of $\pi_1(X,d)$; hence the based connected covering with image subgroup $K$ is unique up to a unique based isomorphism ([[thm-classification-of-connected-covering-spaces]]); any two based covering isomorphisms are lifts of the same projection and agree at the basepoint, so they are equal by [[thm-uniqueness-of-lifts-from-a-connected-space]].

[F3] A connected covering is regular exactly when its image subgroup is normal, and then its deck group acts transitively on fibres ([[thm-regular-covering-characterizations]], [[def-regular-covering]]).

[F4] For a regular connected covering of a path-connected locally path-connected base, $\operatorname{Deck}(E/B)\cong G/H$, where $G=\pi_1(B,b_0)$ and $H=p_*\pi_1(E,e_0)$ ([[cor-deck-group-of-a-regular-covering]]); equivalently $\operatorname{Deck}(E/B)\cong N_G(H)/H$ ([[thm-deck-group-as-normalizer-quotient]]).

[F5] The first isomorphism theorem: $\omega$ factors as an isomorphism $G/\ker\omega\to\operatorname{im}\omega$ ([[thm-first-isomorphism-theorem-groups]]); the total winding homomorphism is surjective with $\operatorname{im}\omega=\mathbb Z$ ([[def-total-winding-homomorphism-of-the-punctured-disk]]).

[F6] Monodromy is the right action in which $e\cdot[\alpha]$ is the endpoint of the lift of $[\alpha]$ starting at $e$, and the corresponding left action is $[\alpha]\cdot e:=e\cdot[\alpha]^{-1}$ ([[def-monodromy-action-on-a-covering-fibre]]).

[F7] A fibre of a covering with nonempty path-connected total space is in bijection with the set of right cosets of the image subgroup, so the index of $K$ equals the cardinality of the fibre ([[thm-sheets-equal-fundamental-group-index]]).

## Proof

**Proof technique:** direct.

1.1 *The kernel and its quotient.* The kernel $K=\ker\omega$ is a normal subgroup of $\pi_1(X,d)$, and by [F5] the map $\omega$ induces an isomorphism $\pi_1(X,d)/K\to\operatorname{im}\omega=\mathbb Z$. Hence $\pi_1(X,d)/K$ is infinite and the index of $K$ is infinite: a finite index would make the quotient finite. [F5]

1.2 *Existence and uniqueness of the cover.* The four hypotheses of [F1] hold by [[lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected]], so the subgroup $K$ is realised by a based connected covering $p:(\tilde X,\tilde d)\to(X,d)$ with $p_*\pi_1(\tilde X,\tilde d)=K$; by the bijection [F2] any two such based coverings are uniquely based-isomorphic. This defines the Burau infinite cyclic cover. [F1, F2]

2.1 *Regularity, deck group and the generator $t$.* Since $K$ is normal, [F3] makes $p$ regular, and [F4] together with step 1.1 gives $\operatorname{Deck}(\tilde X/X)\cong\pi_1(X,d)/K\cong\mathbb Z$; by [F7] the fibre is in bijection with the set of right cosets of $K$, so the fibre is infinite. Fixing the isomorphism as the one induced by $\omega$, the positive generator of $\mathbb Z$ corresponds to a deck transformation $t$; by [F6] the monodromy of $t$ raises the total winding of loops by $1$. The group generated by $t$ is all of $\operatorname{Deck}(\tilde X/X)$, so $\operatorname{Deck}(\tilde X/X)=\{t^k:k\in\mathbb Z\}$ with $t^{-1}$ the negative generator, and the left-action convention on the total space is the one recorded in [[def-deck-transformation-and-deck-group]]. [F3, F4, F6, F7, step 1.1] ∎
