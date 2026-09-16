---
id: lem-corson-ordered-urysohn-automorphism-group-is-extremely-amenable
kind: lemma
title: "Aut(U_Q^<) is extremely amenable"
status: draft
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, thm-extreme-amenability-yields-bpi-in-finite-support-models, thm-finite-ramsey-for-uniform-subsets, def-metric-space, def-ramsey-colouring-and-arrow-notation]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "§§2-3, pp. 2-4"
    - title: "Jaroslav Nešetřil, Ramsey classes and homogeneous structures"
      url: "https://arxiv.org/pdf/math/0508224"
      locator: "Ramsey theorem for finite ordered rational metric spaces"
    - title: "Kechris, Pestov, and Todorcevic, Fraïssé limits, Ramsey theory, and topological dynamics of automorphism groups"
      url: "https://arxiv.org/pdf/math/0305241"
      locator: "Theorem 4.7"
---

## Statement

The group $\operatorname{Aut}(U_{\mathbb{Q}}^{<})$ of order-and-metric
automorphisms of the rational ordered Urysohn metric space, with the topology of
pointwise convergence, is extremely amenable, and so is every finite point
stabiliser required by the finite-support permutation model of
[[def-corson-ordered-rational-permutation-model]].

## Facts & Assumptions

**Given:** The age of $U_{\mathbb{Q}}^{<}$, namely the finite ordered rational metric spaces, and a finite support $E$.

[F1] Nešetřil's Ramsey theorem: the class of finite ordered rational metric spaces is a Ramsey class, so for every finite ordered rational metric space $A$ and every finite colouring of the copies of $A$ in a larger finite ordered rational metric space $B$ there is a copy $B'$ of $B$ all of whose copies of $A$ have the same colour ([[def-ramsey-colouring-and-arrow-notation]], source of the item).

[F2] The KPT correspondence: the automorphism group of a Fraïssé structure whose finite substructures are rigid and whose age is Ramsey is extremely amenable ([[thm-extreme-amenability-yields-bpi-in-finite-support-models]] is the consumer; the criterion is the cited KPT theorem).

[L1] A finite ordered rational metric space is rigid: an isomorphism onto itself preserving the order and all distances is the identity, because the points are distinguished by their order positions and their distances to the other points ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 The age of $U_{\mathbb{Q}}^{<}$ is the class of finite ordered rational metric spaces, and $U_{\mathbb{Q}}^{<}$ is its Fraïssé limit, since it is universal and homogeneous for that class. [given]

2.1 Every finite ordered rational metric space is rigid by [L1], and the age is a Ramsey class by [F1]; hence the hypotheses of the KPT criterion [F2] hold for the Fraïssé limit $U_{\mathbb{Q}}^{<}$, and $\operatorname{Aut}(U_{\mathbb{Q}}^{<})$ is extremely amenable. [step 1.1, F1, F2, L1]

3.1 For a finite support $E$, the stabiliser $\operatorname{fix}(E)$ is the automorphism group of the expansion of $U_{\mathbb{Q}}^{<}$ by constants for the finitely many points of $E$; the age of that expansion is again a class of finite ordered rational metric spaces with finitely many named constants, and it remains rigid and Ramsey, because colourings of expansions over a fixed finite substructure are colourings of a finite set of structural embeddings to which [F1] and [L1] apply unchanged. [step 2.1, F1, L1]

4.1 By [F2] applied to the expansion of step 3.1, $\operatorname{fix}(E)$ is extremely amenable; since $E$ was an arbitrary finite support, every finite point stabiliser required by the permutation model is extremely amenable. [step 3.1, F2]

5.1 The whole group is the case $E = \varnothing$ of step 4.1, so both the group and its finite stabilisers are extremely amenable, which is the statement. [step 2.1, step 4.1, F2] ∎
