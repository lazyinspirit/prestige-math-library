---
id: lem-corson-rational-metric-not-metacompact
kind: lemma
title: "Corson's rational metric space is not metacompact"
status: draft
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, def-paracompact-space, def-metacompact-space, def-cover-refinement-and-local-finiteness, def-metric-space, def-metric-ball, def-metric-topology, def-permutation-support-system-and-normal-filter]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "§§2-3, pp. 2-4"
---

## Statement

In Corson's permutation model of
[[def-corson-ordered-rational-permutation-model]], the rational Urysohn metric
space has an open cover with no point-finite refinement; in particular it is not
metacompact ([[def-metacompact-space]], [[def-paracompact-space]],
[[def-cover-refinement-and-local-finiteness]]).

## Facts & Assumptions

**Given:** The atom space $U_{\mathbb{Q}}^{<}$ in its model, the open cover by rational-radius balls of the small radii of the construction, and a supposed point-finite refinement.

[F1] The model is a ZFA model in which every set has a finite support; an element of the model has a finite support $E \subseteq A$ fixed by the automorphisms used below ([[def-corson-ordered-rational-permutation-model]], [[def-permutation-support-system-and-normal-filter]]).

[F2] $U_{\mathbb{Q}}^{<}$ is ultrahomogeneous for finite ordered rational metric subspaces: every finite partial isometry preserving the order and the metric extends to an automorphism of the whole space, and finite ordered rational metric extensions with the same order pattern exist with the prescribed rational distances. [given, source]

[L1] The cover: for a small positive rational $r$ and a point $a$ of the space, the rational ball $B(a,r)$ is an open set of the metric topology; the family of such balls for the radii used in the construction covers the space ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose the cover $\mathcal{U}$ of [L1] has a point-finite refinement $\mathcal{V}$; since $\mathcal{V}$ is a set of the model, fix a finite support $E \subseteq A$ of $\mathcal{V}$ by [F1]. [assume-contra, L1, F1]

2.1 Choose a point $a$ of the space outside $E$ and a member $V \in \mathcal{V}$ containing $a$; then the pair $(E, V)$ has a finite support, and the radii and the finitely many points used to describe $V$ can be taken to lie in a finite set $E' \supseteq E$. [step 1.1, F1]

3.1 By [F2] the finite partial isometry that fixes $E$ and $a$ pointwise and moves the unsupported witness of $V$ through the rational positions of a small interval extends to an automorphism $p$ of the atom space; since $p$ fixes $E$ it fixes $\mathcal{V}$ and hence sends members of $\mathcal{V}$ through $a$ to members of $\mathcal{V}$ through $a$. [step 2.1, F2]

4.1 Varying the target position of the witness through infinitely many rational values produces infinitely many distinct members of $\mathcal{V}$ through the fixed point $a$, because distinct rational target positions give distinct images of a ball of fixed positive radius; this contradicts the point-finiteness of $\mathcal{V}$ at $a$. [step 3.1, F2]

5.1 Therefore no point-finite refinement of the cover exists, so the space is not metacompact, and it is a fortiori not paracompact; the failure is stated as the absence of a point-finite refinement, since no definition of metacompactness beyond the covering property is used. [step 4.1, L1, discharge-contradiction] ∎
