---
id: lem-deck-transformations-correspond-to-normalizer-cosets
kind: lemma
title: "Deck transformations of a connected covering correspond to cosets in the subgroup normalizer"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-covering-basepoint-change-conjugates-subgroup,
       cor-based-connected-coverings-isomorphic-iff-equal-subgroups,
       def-normalizer-of-a-subgroup,
       lem-centralizers-and-normalizers-are-subgroups,
       def-monodromy-action-on-a-covering-fibre,
       prop-local-path-connectedness-lifts-and-descends-along-coverings,
       thm-connected-and-locally-path-connected-implies-path-connected,
       thm-path-lifting-for-covering-maps,
       prop-deck-transformations-are-determined-by-one-point-and-act-freely,
       thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Proposition 1.39"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Let $p:(E,e_0)\to(B,b_0)$ be a connected covering of a path-connected locally path-connected base, and put

$$G=\pi_1(B,b_0),\qquad H=p_*\pi_1(E,e_0).$$

For $g\in G$, let $e_g=e_0\cdot g$ under right monodromy. A deck transformation $\tau_g$ satisfying $\tau_g(e_0)=e_g$ exists exactly when $g\in N_G(H)$, and it is then unique. The assignment

$$\Theta:N_G(H)\longrightarrow\operatorname{Deck}(E/B),\qquad g\longmapsto\tau_g$$

is a surjective homomorphism. Two elements have the same image exactly when they determine the same coset $Hg$, and $\ker\Theta=H$.

## Facts & Assumptions

**Given:** The based connected covering and groups $G,H$ in the Statement.

[L1] For a covering with path-connected total space, at the endpoint $e_g$ of the lift of a loop representing $g$, the induced subgroup is $g^{-1}Hg$ ([[lem-covering-basepoint-change-conjugates-subgroup]]).

[L2] Two based connected coverings are based-isomorphic exactly when their induced subgroups are equal ([[cor-based-connected-coverings-isomorphic-iff-equal-subgroups]]).

[F1] The normalizer is $N_G(H)=\{g\in G:gHg^{-1}=H\}$ ([[def-normalizer-of-a-subgroup]]).

[F2] Two deck transformations of a connected covering that agree at one point are equal ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F3] Right monodromy sends $(e,g)$ to the endpoint $e\cdot g$ of the lift of a representative loop ([[def-monodromy-action-on-a-covering-fibre]]).

[F4] Traversal-order concatenation gives multiplication in the fundamental group ([[thm-fundamental-group-laws]]).

[F5] The normalizer of a subgroup is itself a subgroup ([[lem-centralizers-and-normalizers-are-subgroups]]).

[F6] Local path-connectedness lifts along a covering, and a connected locally path-connected space is path-connected ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]], [[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F7] Every path in the base has a unique lift from a prescribed point in the fibre ([[thm-path-lifting-for-covering-maps]]).

## Proof

**Proof technique:** direct.

1.1 Local path-connectedness of the base lifts to $E$, and connectedness then makes $E$ path-connected by [F6]. [F6, given]

2.1 By [L1], now licensed by step 1.1, the same covering based at $e_g$ has induced subgroup $g^{-1}Hg$. [step 1.1, L1, F3]

3.1 A deck transformation taking $e_0$ to $e_g$ is exactly a based isomorphism from $(E,e_0)$ to $(E,e_g)$. By [L2], it exists exactly when $H=g^{-1}Hg$, which by [F1] is exactly $g\in N_G(H)$; uniqueness follows from [F2]. [step 2.1, L2, F1, F2]

4.1 For $g,g'\in N_G(H)$, [F2] gives $\tau_g=\tau_{g'}$ exactly when $e_0\cdot g=e_0\cdot g'$. Applying the action by $g'^{-1}$ reduces this to $e_0\cdot(gg'^{-1})=e_0$, which holds exactly when the lifted loop closes at $e_0$, equivalently when $gg'^{-1}\in p_*\pi_1(E,e_0)=H$. Thus $\tau_g=\tau_{g'}$ exactly when $Hg=Hg'$. By step 1.1, given any point $e$ in the fibre, choose a path from $e_0$ to $e$; its projection is a loop at $b_0$, and uniqueness in [F7] makes the lifted endpoint $e_0\cdot g$ equal to $e$. Hence the monodromy orbit is the whole fibre, so step 3.1 and [F2] make $\Theta$ surjective. [step 1.1, step 3.1, F2, F3, F7, choose]

5.1 By [F5], $N_G(H)$ is a group. Deck transformations commute with lifted endpoints: $\tau_g(e_0\cdot h)=\tau_g(e_0)\cdot h$. Hence $$(\tau_g\circ\tau_h)(e_0)=\tau_g(e_0\cdot h)=(e_0\cdot g)\cdot h=e_0\cdot(gh)=\tau_{gh}(e_0),$$ so [F2] gives $\tau_g\tau_h=\tau_{gh}$ and $\Theta$ is a homomorphism. Its kernel consists of the $g$ with $e_0\cdot g=e_0$. If $g=p_*[\lambda]\in H$, the lift of a representative projected loop is the closed loop $\lambda$, so it fixes $e_0$; conversely, if the lift of a representative of $g$ closes at $e_0$, that lifted loop projects to $g$ and puts $g$ in $H$. Thus $\ker\Theta=H$. [step 4.1, F2, F3, F4, F5] ∎
