---
id: def-one-variable-alexander-module-of-an-oriented-link
kind: definition
title: "The one-variable Alexander module of an oriented link"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold,
       thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere,
       prop-the-first-hurewicz-map-in-degree-one-is-abelianization,
       def-covering-map-and-evenly-covered-neighbourhoods,
       thm-classification-of-connected-covering-spaces,
       lem-subgroup-quotient-of-universal-cover, def-regular-covering,
       cor-deck-group-of-a-regular-covering, def-deck-transformation-and-deck-group,
       def-based-loops-and-fundamental-group, def-induced-homomorphism-on-fundamental-groups,
       def-the-laurent-polynomial-ring, thm-universal-property-of-localisation,
       def-axiom-of-choice, thm-regular-covering-characterizations,
       thm-cellular-cochains-compute-cohomology-with-local-coefficients]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.4 printed p. 52 (the infinite cyclic cover of a link complement)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "John Milnor, Infinite cyclic coverings, Conference on the Topology of Manifolds (1968), 115-133; the one-variable Alexander module as a module over the Laurent polynomial ring"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnor1.pdf"
---

## Definition

Assume the Axiom of Choice. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be an
oriented link with $r\ge1$ components and complement $X_L$,
([[def-oriented-link-in-s-three-and-ambient-isotopy]]), and let
$$\varphi:H_1(X_L;\mathbb Z)\longrightarrow\mathbb Z$$
be the **total linking homomorphism**, defined as the composite
$$H_1(X_L;\mathbb Z)\xrightarrow[\ \sim\ ]{\mathrm{Alex}}\widetilde H^1(L;\mathbb Z)\cong\bigoplus_{i=1}^rH^1(K_i;\mathbb Z)\xrightarrow{\text{sum}}\mathbb Z,$$
where the first arrow is Alexander duality
([[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]),
each $H^1(K_i;\mathbb Z)\cong\mathbb Z$ is the orientation-induced
identification, and the last map sums the $r$ coordinates. By
[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] the map $\varphi$
may again be written $\pi_1(X_L)\to H_1(X_L)\xrightarrow{\varphi}\mathbb Z$; we
denote both composites by $\varphi$ and set $K:=\ker\varphi$.

The **one-variable Alexander module** of $L$ is
$$A_L:=H_1(\widetilde{X_L};\mathbb Z),$$
the first singular homology of the connected infinite cyclic cover
$p:\widetilde{X_L}\to X_L$ classified by $K$
([[thm-classification-of-connected-covering-spaces]],
[[lem-subgroup-quotient-of-universal-cover]],
[[def-covering-map-and-evenly-covered-neighbourhoods]]), equipped with its
structure of module over $\Lambda=\mathbb Z[t^{\pm1}]$
([[def-the-laurent-polynomial-ring]]) in which $t$ acts by the deck
transformation corresponding to the positive generator of
$\operatorname{Deck}(\widetilde{X_L}/X_L)\cong\mathbb Z$.

**Caveats.** The cover is the one classified by $K=\ker\varphi$; since $K$ is
normal the cover is regular and its deck group is
$\pi_1(X_L)/K\cong\mathbb Z$
([[def-regular-covering]], [[thm-regular-covering-characterizations]], [[cor-deck-group-of-a-regular-covering]],
[[def-deck-transformation-and-deck-group]]). The module $A_L$ is ordinary
integral homology of the cover, with the deck action as its module structure;
no twisting by a representation of the link group is used. The total linking
homomorphism satisfies $\varphi(\mu_i)=1$ for a meridian $\mu_i$ of any one
component, so $r\ge1$ is needed for $\varphi$ to be interesting and $A_L$
depends on the orientations of all components through this map.

## Facts & Assumptions

**Given:** AC and an oriented link $L=K_1\cup\cdots\cup K_r\subset S^3$ with $r\ge1$ components, complement $X_L$ and fundamental group $G=\pi_1(X_L)$.

[A1] The Axiom of Choice: every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). It supplies Alexander duality in [F2], cellular cohomology comparison, and the complement supplier [F1], including that supplier’s countable-choice tubular-neighbourhood hypothesis.

[F1] $L$ is nonempty and compact, and $X_L$ is connected, locally path-connected and semilocally simply connected, so the classification of connected coverings applies to $X_L$ ([[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]).

[F2] Alexander duality gives $\widetilde H_1(X_L;\mathbb Z)\cong\widetilde H^1(L;\mathbb Z)$, and $X_L$ is connected, so $H_1(X_L;\mathbb Z)=\widetilde H_1(X_L;\mathbb Z)$; the disjoint-union structure of $L$ gives $\widetilde H^1(L;\mathbb Z)\cong\bigoplus_iH^1(K_i;\mathbb Z)\cong\mathbb Z^r$, each $H^1(K_i;\mathbb Z)$ being freely generated by the class dual to the orientation class of $K_i$: the one-vertex, one-edge CW structure of the oriented circle has zero cellular differential, so its degree-one cochain group and cohomology are $\mathbb Z$ (cellular comparison with constant coefficients [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]) ([[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]], [[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]).

[F3] For a subgroup $H\le\pi_1(B,b_0)$ of the fundamental group of a nonempty, path-connected, locally path-connected and semilocally simply connected base, there is a connected covering classified by $H$, obtained as the quotient of a universal cover by $H$; a normal subgroup gives a regular covering, whose deck group is $G/H$ ([[lem-subgroup-quotient-of-universal-cover]], [[thm-classification-of-connected-covering-spaces]], [[cor-deck-group-of-a-regular-covering]], [[def-regular-covering]], [[thm-regular-covering-characterizations]], [[def-deck-transformation-and-deck-group]]).

[F4] The Hurewicz map $\pi_1(X_L)\to H_1(X_L;\mathbb Z)$ is surjective with kernel the commutator subgroup ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]), so $\varphi$ is equivalently a surjection $G\to\mathbb Z$; its kernel is normal in $G$.

[F5] $\Lambda=\mathbb Z[t^{\pm1}]$ is the localisation of $\mathbb Z[t]$ at the powers of $t$; it is commutative with unit and $t$ is a unit. A $\Lambda$-module structure on an abelian group $M$ is the same as a unital ring homomorphism $\Lambda\to\operatorname{End}(M)$, equivalently (by the universal property of the localisation) the datum of a group homomorphism $\mathbb Z\to\operatorname{Aut}(M)$ ([[def-the-laurent-polynomial-ring]], [[thm-universal-property-of-localisation]]).

[F6] A deck transformation of a covering acts by a homeomorphism of the cover and hence by a group automorphism of every homology group; the deck group acts on the left ([[def-deck-transformation-and-deck-group]]).

[F7] In the orientation-normalized Alexander duality of [F2], a positive meridian of $K_i$ maps to the cohomology class evaluating $1$ on its oriented circle and $0$ on the others. Here a positive meridian is the oriented boundary of a small normal disk intersecting $K_i$ once positively and missing the other components. This local description follows from the supplier’s construction (Proof 4.1–6.1): excision restricts to that normal disk, the pair connector is its boundary map, and capping with the ambient orientation evaluates the single oriented transverse intersection as $+1$. A disk disjoint from another component gives zero there. Thus this is a local computation of the duality map, not a choice of an arbitrary isomorphism $H_1(X_L)\cong\mathbb Z^r$.

## Proof

1.1 **The total linking homomorphism.** The composite $\varphi$ of [F2] is a homomorphism $H_1(X_L;\mathbb Z)\to\mathbb Z$; writing it on $\pi_1$ through the Hurewicz abelianization surjection of [F4] gives the same homomorphism on abelianisations. Since the sum map $\bigoplus_iH^1(K_i)\to\mathbb Z$ is surjective, so is $\varphi$. By [F7] each positive meridian maps to its component coordinate, so $\varphi(\mu_i)=1$. In particular $K=\ker\varphi$ is a normal subgroup of $G$ with $G/K\cong\mathbb Z$. [A1, F1, F2, F4, F7]

2.1 **The cover and its deck group.** By [F1] the base $X_L$ is nonempty, path-connected, locally path-connected and semilocally simply connected, so [F3] applies to the subgroup $K$ and provides a connected covering $p:\widetilde{X_L}\to X_L$ with $p_*\pi_1(\widetilde{X_L})=K$. As $K$ is normal by step 1.1, this covering is regular with deck group $\operatorname{Deck}(\widetilde{X_L}/X_L)\cong G/K\cong\mathbb Z$, generated by the deck transformation $\tau$ corresponding to $1\in\mathbb Z$. [F3, step 1.1]

3.1 **Module structure.** By [F6] the deck transformation $\tau$ acts as a group automorphism $\tau_*$ of $A_L=H_1(\widetilde{X_L};\mathbb Z)$; since $\tau$ is invertible with inverse given by the deck transformation for $-1$, $\tau_*$ is an automorphism of the abelian group $A_L$. Sending $t\mapsto\tau_*$ therefore defines a group homomorphism $\mathbb Z\to\operatorname{Aut}(A_L)$, which by the universal property of the localisation in [F5] is exactly a $\Lambda$-module structure on $A_L$ with $t$ acting as $\tau_*$. This completes the construction of $A_L$ and of its module structure. [F5, F6, step 2.1] ∎
