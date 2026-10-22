---
id: lem-double-branched-cover-of-an-oriented-link-well-defined
kind: lemma
title: "Existence and isotopy invariance of the double branched cover of a link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-double-branched-cover-of-an-oriented-link
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-classification-of-connected-covering-spaces
  - cor-based-connected-coverings-isomorphic-iff-equal-subgroups
axiom_use: "Assumes AC only through the supplied link-complement and covering-classification hypotheses; the mod-two homology character is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §2, Proposition 2.1"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Hatcher, Algebraic Topology, §3.3 and Theorem 1.38"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Assume the Axiom of Choice. For every nonempty finite oriented smooth link $L=K_1\cup\cdots\cup K_r\subset S^3$, the homomorphism $\epsilon_L:\pi_1(S^3\setminus L)\to\mathbb Z/2$ sending every component meridian to $1$ is well-defined and surjective. Its connected cover extends over the link with a simple order-two branch model, independently of the tubular charts used to describe that model. If $L'$ is ambient isotopic to $L$, the resulting oriented branched covers $\Sigma(L')$ and $\Sigma(L)$ are orientation-preservingly diffeomorphic.

## Statement references

[[def-double-branched-cover-of-an-oriented-link|Definition of the meridian character and branch extension]]

[[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold|Link complement hypotheses]]

[[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere|Alexander duality for the link]]

[[thm-classification-of-connected-covering-spaces|Covering classification]]

[[cor-based-connected-coverings-isomorphic-iff-equal-subgroups|Uniqueness for a fixed kernel]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §2](https://arxiv.org/pdf/math/0309170v1)

[Hatcher, *Algebraic Topology*, §3.3 and Theorem 1.38](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)

## Facts & Assumptions

**Given:** AC and a nonempty finite oriented link $L=K_1\cup\cdots\cup K_r$.

[F1] Alexander duality identifies $H_1(S^3\setminus L;\mathbb Z)$ with $H^1(L;\mathbb Z)\cong\mathbb Z^r$ ([[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]). Under its local intersection description, a meridian around $K_i$ evaluates as $\pm1$ on $K_i$ and $0$ on every $K_j$ with $j\ne i$.

[F2] The first Hurewicz homomorphism identifies $H_1(X;\mathbb Z)$ with the abelianization of $\pi_1(X)$, and reduction modulo two gives the corresponding mod-two abelianization ([[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]).

[F3] The complement is connected, locally path-connected, and semilocally simply connected ([[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]).

[F4] Connected covers are classified by subgroups, and two based connected covers with the same subgroup are uniquely isomorphic over the base ([[thm-classification-of-connected-covering-spaces]], [[cor-based-connected-coverings-isomorphic-iff-equal-subgroups]]).

[F5] The local normal-disk model for a branch component is $(s,z)\mapsto(s,e^{\mathrm i\eta s}z^2)$ with $s\in\mathbb R/2\pi\mathbb Z$; its meridian monodromy is nontrivial and its longitudinal monodromy is $\eta\in\mathbb F_2$ ([[def-double-branched-cover-of-an-oriented-link]]).

## Proof

1.1 Compose the Hurewicz isomorphism in [F2], the Alexander-duality isomorphism in [F1], and coordinate-sum modulo two on $\mathbb Z^r$. The local intersection description in [F1] sends a meridian of $K_i$ to $\pm e_i$, whose coordinate sum is $1$ modulo two. This defines $\epsilon_L$ and proves it is surjective because $r\ge1$; hence its kernel has index two. [F1, F2, given]

1.2 An ambient isotopy from $L$ to $L'$ restricts to an orientation-preserving diffeomorphism of their complements and carries each meridian class to a meridian class. It therefore carries $\ker\epsilon_L$ to $\ker\epsilon_{L'}$. [F1, given]

2.1 By [F3] and [F4], the index-two kernel determines a connected two-sheeted cover. On the boundary of a punctured tube around $K_i$, its two monodromies are the prescribed meridian value $1$ and a longitude value $\eta_i\in\mathbb F_2$. The local model [F5] has exactly those two monodromies; classification of covers of the punctured tube identifies it with the restricted cover. The displayed model therefore extends the cover across every branch component. If a tubular framing is changed by $k$ meridional twists, the parallel longitude changes by $k\mu_i$, so its character changes by $k$ modulo two; the corresponding rotation of the normal coordinate changes the phase in the local model by the same parity. Thus these are coordinate descriptions of one extension, not different covers. [F3, F4, F5, step 1.1]

3.1 The based covering uniqueness in [F4] identifies the two complement covers over this diffeomorphism. The identification extends over each branch tube because it preserves the two boundary monodromies in step 2.1; the local order-two models then give an orientation-preserving diffeomorphism of the closed branched covers. Thus $\Sigma(L')\cong\Sigma(L)$ as oriented manifolds. [F4, F5, step 2.1, step 1.2] ∎
