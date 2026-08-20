---
id: lem-subgroup-quotient-of-universal-cover
kind: lemma
title: "Every subgroup acts on the universal cover with a connected quotient covering that realizes it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-cover-existence,
       thm-deck-group-of-a-universal-cover-is-the-fundamental-group,
       def-covering-space-action,
       thm-orbit-map-of-a-covering-space-action-is-a-covering,
       prop-deck-transformations-are-determined-by-one-point-and-act-freely,
       def-covering-map-and-evenly-covered-neighbourhoods,
       def-monodromy-action-on-a-covering-fibre,
       thm-covering-maps-inject-fundamental-groups, def-path-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.36"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $B$ be nonempty, path-connected, locally path-connected, and semilocally simply connected, fix $b_0\in B$, and put $G=\pi_1(B,b_0)$. For every subgroup $H\le G$, there is a based connected covering

$$p_H:(E_H,e_H)\longrightarrow(B,b_0)$$

such that $(p_H)_*\pi_1(E_H,e_H)=H$. It is obtained by letting $H$ act through deck transformations on a universal cover $\widetilde B$ and taking $E_H=\widetilde B/H$.

## Facts & Assumptions

**Given:** The base $B$, basepoint $b_0$, group $G$, and subgroup $H$ in the Statement.

[F1] Every such base has a universal covering space ([[thm-universal-cover-existence]]).

[F2] With traversal-order multiplication, $G$ is isomorphic to the universal deck group by the assignment taking a loop class to the deck transformation that moves a chosen fibre point to its lifted endpoint, with no path reversal ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

[F3] The orbit map of a covering-space action is a covering map ([[thm-orbit-map-of-a-covering-space-action-is-a-covering]]).

[F4] Monodromy is the right action in which $e\cdot[\alpha]$ is the endpoint of the lift of $\alpha$ from $e$ ([[def-monodromy-action-on-a-covering-fibre]]).

[F5] A covering-space action is an action by homeomorphisms with neighbourhoods disjoint from every nonidentity translate ([[def-covering-space-action]]).

[F6] A covering is locally a disjoint union of sheets, each mapped homeomorphically to one evenly covered neighbourhood ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F7] On a covering with connected total space, two deck transformations that agree at one point are equal ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

## Proof

**Proof technique:** constructive.

1.1 Fix a universal cover $p:(\widetilde B,\widetilde b_0)\to(B,b_0)$ by [F1], and use [F2] to regard $H$ as a subgroup of its deck group. Over an evenly covered neighbourhood of $b\in B$, choose the sheet containing a given $\widetilde b$. A nonidentity deck transformation sends it to a different sheet: otherwise it would send the unique point over $b$ in that sheet to itself and hence be the identity by [F7]. Thus [F5] holds, so the restricted $H$-action is a covering-space action. [F1, F2, F5, F6, F7]

2.1 Let $q:\widetilde B\to E_H:=\widetilde B/H$ be the orbit map, which is a covering by [F3]. Since $p$ is constant on $H$-orbits, it induces $p_H:E_H\to B$. Over an evenly covered $W\subseteq B$, the $H$-orbits of the sheets of $p^{-1}(W)$ have disjoint images under $q$, and on each such image $p_H$ is identified with the homeomorphism from any representative sheet to $W$. Hence $p_H$ is a covering by [F6]. The path-connected space $\widetilde B$ maps continuously and surjectively to $E_H$, so $E_H$ is path-connected, with basepoint $e_H=q(\widetilde b_0)$. [step 1.1, F3, F6, construct]

3.1 For a loop $\alpha$ at $b_0$, its lift to $E_H$ from $e_H$ is $q\circ\widetilde\alpha$, where $\widetilde\alpha$ is its universal lift. This lift closes exactly when the universal endpoint lies in the $H$-orbit of $\widetilde b_0$, which by [F2] and [F4] holds exactly when $[\alpha]\in H$. A loop class is in $(p_H)_*\pi_1(E_H,e_H)$ exactly when it has a closed lift to $E_H$, so the induced subgroup is precisely $H$. [step 2.1, F2, F4, discharge-construct] ∎
