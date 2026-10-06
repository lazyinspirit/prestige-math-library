---
id: lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists
kind: lemma
title: "The covering of a leaf associated with the holonomy kernel exists"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
  - def-holonomy-representation-and-holonomy-group-of-a-leaf
  - lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action
  - def-immersed-submanifold
  - def-leaf-of-a-regular-foliation
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
  - thm-universal-cover-existence
  - def-universal-covering-space
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-covering-space-action
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - thm-covering-maps-inject-fundamental-groups
  - thm-sheets-equal-fundamental-group-index
  - thm-covering-space-lifting-criterion
  - thm-universal-cover-uniqueness-and-dominating-property
  - cor-convex-subsets-of-rn-are-contractible
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - def-countable-choice
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation, $L$ a leaf with base point $x$, $T$ a local transversal
at $x$, $\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$ the holonomy
representation and $K=\ker\rho_x$
([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). Then there is a
connected covering $p:\widehat L\to L$ with
$p_*\pi_1(\widehat L,\hat x)=K$ for a point $\hat x$ over $x$: take the
universal cover $\widetilde L\to L$, identify $\pi_1(L,x)$ with its deck group,
and put $\widehat L:=\widetilde L/K$. Moreover any two connected coverings of
$L$ with image subgroup $K$ are isomorphic over $L$.

## Facts & Assumptions

**Given:** A leaf $L$ of a regular foliation $F$ with base point $x$, a local transversal $T$ at $x$, the holonomy representation $\rho_x$, and $K=\ker\rho_x\le\pi_1(L,x)$.

[F1] The leaf $L$ carries a unique smooth structure for which the inclusion is a connected injective immersion and an integral manifold of $TF$; in particular $L$ is a connected smooth manifold of dimension $\dim M-\operatorname{codim}F$ ([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]], [[def-immersed-submanifold]], [[def-leaf-of-a-regular-foliation]]).

[F2] Every connected topological manifold is locally path connected and locally simply connected in the sense required for covering theory: it is locally Euclidean, and the images of convex open sets under charts are simply connected because convex subsets of $\mathbb R^n$ are contractible; consequently a connected manifold is path connected. A zero-dimensional connected manifold is a singleton, so its local simple connectivity follows directly ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]], [[cor-convex-subsets-of-rn-are-contractible]]).

[F3] Every path-connected, locally path-connected, semilocally simply connected space has a universal cover, and the deck group of a universal cover is isomorphic to the fundamental group of the base, the isomorphism carrying a loop class to the deck transformation moving a chosen fibre point to the corresponding lifted endpoint ([[thm-universal-cover-existence]], [[def-universal-covering-space]], [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

[F4] The deck group of a covering with connected total space acts by a covering-space action, and the orbit map of a covering-space action is a covering map with deck group exactly the acting group when the total space is path-connected ([[lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[def-covering-space-action]]).

[F5] A covering $q:\widehat L\to L$ induces an injection $q_*$ on fundamental groups, and the image subgroup has index equal to the number of sheets; two connected coverings of $L$ with the same image subgroup are isomorphic over $L$ by the lifting criterion, applied using the universal cover's dominating property ([[thm-covering-maps-inject-fundamental-groups]], [[thm-sheets-equal-fundamental-group-index]], [[thm-covering-space-lifting-criterion]], [[thm-universal-cover-uniqueness-and-dominating-property]]).

## Proof

**Proof technique:** direct.

1.1 **The leaf is a nice base.** By [F1] the leaf $L$ is a connected smooth manifold with its own manifold topology and smooth structure, the inclusion $L\hookrightarrow M$ being a connected injective immersion. By [F2] $L$ is path-connected, locally path-connected and semilocally simply connected. Hence by [F3] there is a universal cover $q:\widetilde L\to L$ and the deck group $\operatorname{Deck}(q)$ is isomorphic to $\pi_1(L,x)$ via the assignment sending a loop class to the deck transformation moving a chosen point of the fibre over $x$ to the lifted endpoint. Fix $\tilde x$ over $x$; this fixes the isomorphism. [F1, F2, F3]

2.1 **The subgroup acts by a covering-space action.** The deck group acts on the connected total space $\widetilde L$ by a covering-space action by [F4]. Restricting the action to the subgroup $K$ (under the isomorphism of step 1.1) preserves the defining property: a neighbourhood $U$ with $\gamma U\cap U=\varnothing$ for all nonidentity $\gamma\in\operatorname{Deck}(q)$ also satisfies it for all nonidentity elements of $K$. [F4, step 1.1]

3.1 **The intermediate covering.** Let $q_K:\widetilde L\to\widehat L:=\widetilde L/K$ be the orbit covering supplied by [F4]. Since $q$ is constant on $K$-orbits, it factors uniquely as $q=p\circ q_K$ through a continuous map $p:\widehat L\to L$. For a connected evenly covered coordinate neighborhood $W\subseteq L$, the sheets of $q^{-1}(W)$ are permuted by $K$. Each $K$-orbit of sheets projects under $q_K$ to one open set in $\widehat L$ mapped homeomorphically by $p$ onto $W$: choose one sheet to define its inverse, and the other sheets in its orbit give exactly the same quotient points. Distinct sheet orbits give disjoint sets. Thus $p$ is a covering. The space $\widehat L$ is path connected as the continuous image of the path-connected universal cover. [F2, F3, F4, step 2.1, construct]


4.1 **The image subgroup.** Fix $\hat x=q_K(\tilde x)$. For a loop $a$ at $x$, let $\tilde a$ be its lift through $q$ starting at $\tilde x$. Its endpoint is $g\tilde x$, where $g$ is the deck transformation corresponding to $[a]$ by [F3]. Then $q_K\circ\tilde a$ is its lift through $p$, and this lift closes exactly when $q_K(g\tilde x)=q_K(\tilde x)$, equivalently $g\in K$, since the deck action is free. If $[a]\in p_*\pi_1(\widehat L,\hat x)$, an upstairs representing loop and uniqueness of lifts show this lift closes. Conversely, a closed lift is an upstairs loop projecting to $a$. Hence $p_*\pi_1(\widehat L,\hat x)=K$; injectivity of $p_*$ in [F5] also gives $\pi_1(\widehat L,\hat x)\cong K$. [F3, F4, F5, step 3.1]


5.1 **Uniqueness.** Let $p':\widehat L'\to L$ be a connected covering with image subgroup $K$ at a point $\hat x'$ over $x$. Coverings of a locally path-connected manifold are locally path connected, so their connected total spaces are path connected. The lifting criterion [F5], applied to $p$ through $p'$ and to $p'$ through $p$, gives based maps $u:\widehat L\to\widehat L'$ and $v:\widehat L'\to\widehat L$ over $L$. The composites and the identities are based lifts of $p$ or $p'$ through the same covering, so uniqueness in the lifting criterion gives $vu=\mathrm{id}$ and $uv=\mathrm{id}$. Thus these coverings are isomorphic over $L$. If a different point over $x$ was originally chosen, choose a point at which its image subgroup is $K$, as required by the hypothesis. [F2, F5, step 3.1, step 4.1] ∎
