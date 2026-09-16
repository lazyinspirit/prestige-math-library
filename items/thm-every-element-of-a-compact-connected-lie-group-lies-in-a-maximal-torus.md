---
id: thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus
kind: theorem
title: Every element lies in a maximal torus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics, thm-hopf-rinow, thm-maximal-tori-exist-in-compact-lie-groups, def-axiom-of-choice, thm-cartans-closed-subgroup-theorem, thm-closure-of-a-connected-set, thm-continuous-image-of-a-connected-space, lem-closed-subset-of-a-compact-space-is-compact, thm-structure-of-a-compact-connected-abelian-lie-group, def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4, Corollaries 4.46 and 4.48"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§9–§11"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every element of a compact connected Lie group
belongs to a maximal torus.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected Lie group $G$ with identity $e$, Lie algebra $\mathfrak g$ and an element $g\in G$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar-based averaging of [L1] and the greedy theory of [L3], and through the countable-choice content of [L2] inside the ambient ZFC setting.

[L1] $G$ carries a Riemannian metric invariant under both translations, and for such a metric the geodesics through the identity are exactly the one-parameter subgroups $t\mapsto\exp(tX)$ ([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]).

[L2] Hopf–Rinow: on a connected boundaryless Riemannian manifold with every closed bounded subset compact, every two points are joined by a minimizing geodesic; if the metric is complete these conditions hold ([[thm-hopf-rinow]]).

[L3] Every compact Lie group contains a maximal torus and every torus is contained in a maximal torus ([[thm-maximal-tori-exist-in-compact-lie-groups]]).

[L4] A closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup, and the closure of a connected set is connected; a continuous image of the connected space $\mathbb R$ is connected; a closed subset of the compact group $G$ is compact ([[thm-cartans-closed-subgroup-theorem]], [[thm-closure-of-a-connected-set]], [[thm-continuous-image-of-a-connected-space]], [[lem-closed-subset-of-a-compact-space-is-compact]]).

[L5] Every compact connected abelian Lie group is a torus ([[thm-structure-of-a-compact-connected-abelian-lie-group]], [[def-torus-and-maximal-torus-in-a-compact-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 Fix a bi-invariant Riemannian metric $g$ on $G$ by [L1]. Endow $G$ with the induced Riemannian distance; every closed subset of the compact space $G$ is compact by [L4], so the condition "every closed bounded subset is compact" of [L2] holds and Hopf–Rinow applies. [L1, L2, L4]

2.1 By [L2] there is a minimizing geodesic $\gamma:[0,1]\to G$ with $\gamma(0)=e$ and $\gamma(1)=g$; write $X:=\gamma'(0)\in\mathfrak g$. [L2, step 1.1]

3.1 By the geodesic clause of [L1] the geodesic through the identity with initial velocity $X$ is the one-parameter subgroup $t\mapsto\exp(tX)$, so $\gamma(t)=\exp(tX)$ and in particular $g=\exp(X)$. [L1, step 2.1]

4.1 Let $A:=\overline{\exp(\mathbb RX)}$ be the closure of the image of the continuous homomorphism $t\mapsto\exp(tX)$ from the connected space $\mathbb R$. Then $\exp(\mathbb RX)$ is a connected abelian subgroup by additivity of the exponential along the line, so $A$ is a subgroup (the closure of a subgroup is a subgroup, since multiplication and inversion are continuous), it is abelian, it is closed by definition, it is compact by [L4], and it is connected by [L4] as the closure of a connected set. By [L4] it is an embedded Lie subgroup of $G$; by [L5] it is a torus, and it contains $g$ because $g=\exp(X)\in\exp(\mathbb RX)$. [L4, L5, step 3.1]

5.1 By [L3] the torus $A$ is contained in a maximal torus $M$ of $G$, so $g\in A\subseteq M$; this includes the case of finite-order $g$, for which the same computation produces the one-parameter subgroup and no direct use of the cyclic subgroup's identity component is made. The Axiom of Choice entered through the cited averaging and structure theory. [A1, L3, step 4.1] ∎
