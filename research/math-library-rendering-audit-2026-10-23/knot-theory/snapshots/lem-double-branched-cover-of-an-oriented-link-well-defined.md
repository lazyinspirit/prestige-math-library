---
id: lem-double-branched-cover-of-an-oriented-link-well-defined
kind: lemma
title: "Existence and isotopy invariance of the double branched cover of a link"
status: published
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
  - cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy
  - thm-isotopy-extension
axiom_use: "Assumes AC through the supplied link-complement and covering-classification hypotheses; its consequence ACω also supplies compatible tubular normalization and relative isotopy extension. The mod-two homology character is choice-free."
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

[F6] Under $\mathrm{AC}_\omega$, two tubular embeddings of the same normal bundle inducing the same vertical normal-quotient map are ambient isotopic near a compact core, fixing that core ([[cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy]]). The relative open-set clause of [[thm-isotopy-extension]] also extends an isotopy of an ambient open set with open track near any compact subset. In the application the ambient manifold is the boundaryless $S^3$, the core is the compact union of link circles, the normal identifications are explicitly equalized, and the fiber-linear isotopy consists of open embeddings after a common shrinking. AC implies the required countable choice.

## Proof

1.1 Compose the Hurewicz isomorphism in [F2], the Alexander-duality isomorphism in [F1], and coordinate-sum modulo two on $\mathbb Z^r$. The local intersection description in [F1] sends a meridian of $K_i$ to $\pm e_i$, whose coordinate sum is $1$ modulo two. This defines $\epsilon_L$ and proves it is surjective because $r\ge1$; hence its kernel has index two. [F1, F2, given]

1.2 An ambient isotopy from $L$ to $L'$ restricts to an orientation-preserving diffeomorphism of their complements and carries each meridian class to a meridian class. It therefore carries $\ker\epsilon_L$ to $\ker\epsilon_{L'}$. [F1, given]

2.1 By [F3] and [F4], the index-two kernel determines a connected two-sheeted cover. On a punctured tube around $K_i$, its two monodromies are the meridian value $1$ and a longitude value $\eta_i\in\mathbb F_2$. The local model [F5] has exactly these monodromies, so covering classification identifies its punctured part with the restricted cover. Attach its core to obtain a smooth extension in the chosen charts. This constructs an extension; independence of the smooth total-space diffeomorphism type requires the normalization below, not merely equality of boundary monodromies. [F3, F4, F5, step 1.1]

3.1 Compare two oriented tubular charts $\varphi_0,\varphi_1$ around the same component. Express them over a common oriented core parameter $s$; a change of the original core parameter only replaces the unit phase $e^{\mathrm i\eta_j s}$ by a smooth unit loop $a_j(s)$ of the same winding number $\eta_j$. Let $A(s)\in GL^+(2,\mathbb R)$ be the unique vertical linear change for which $\varphi_1\circ A$ and $\varphi_0$ induce the same normal-quotient identification. Write $A=RP$ by smooth polar decomposition, with $R(s)\in SO(2)$ and $P(s)$ positive definite. The compatible-tube assertion [F6] gives an ambient isotopy fixing the core and carrying $\varphi_0$ to $\varphi_1\circ A$ near it. The fiber-linear isotopy $R((1-t)P+tI)$ then connects $A$ to $R$ through invertible maps. On a common smaller tube its composition with $\varphi_1$ is an isotopy of open embeddings, with open track, fixing the core. The relative open-set clause of [F6] extends it near the compact core. Thus an ambient diffeomorphism $g$, isotopic to the identity through maps fixing the whole link, satisfies $g\circ\varphi_0=\varphi_1\circ R$ near this component. Choose the supports in disjoint component tubes and compose the finitely many isotopies. [F6, step 2.1, construct]

4.1 Identify $R(s)$ with a unit complex number, of winding $k$. The image under $g$ of the first chart longitude has slope $\lambda_1+k\mu$ in the second chart, so preservation of the meridian character gives $\eta_0\equiv\eta_1+k\pmod2$. The unit loop $R(s)a_0(s)/a_1(s)$ therefore has even winding. It has a smooth periodic square root $r(s)$: lift its argument on $[0,2\pi]$, halve it, and use even winding to match the endpoints and derivatives. In the two branch models $b_j(s,z)=(s,a_j(s)z^2)$ the map $(s,z)\mapsto(s,r(s)z)$ consequently covers $g$, since $a_1r^2=Ra_0$. It is an orientation-preserving smooth diffeomorphism including $z=0$. The two signs of $r$ differ by the deck map. Choose the sign matching the complement-cover isomorphism at one point of each connected punctured tube; covering uniqueness makes them agree throughout that tube. Hence the local lifts glue to the complement lift. This proves independence of the oriented smooth total-space diffeomorphism type from arbitrary oriented tubular charts. It does not assert a smooth lift over the identity base map between arbitrary unnormalized charts. [F4, F5, step 1.1, step 3.1, construct, algebra]

5.1 Let $F$ be the terminal diffeomorphism of the given ambient isotopy from $L$ to $L'$. First choose the target tubular charts by transporting the source charts through $F$. Corresponding longitudes have the same character, and in these transported branch coordinates a lift is $(s,z)\mapsto(s,z)$, or its deck translate. By step 1.2 and [F4] the complement covers are isomorphic over $F$; on every punctured tube that isomorphism is one of these two local lifts, so it extends smoothly across the branch core. The resulting map is an orientation-preserving diffeomorphism of the closed total spaces. Finally steps 3.1–4.1 compare the transported target charts with any originally chosen target charts. Thus $\Sigma(L')\cong\Sigma(L)$ as oriented manifolds, with no unjustified smooth extension of an arbitrary normal germ. [F4, F5, step 1.2, step 2.1, step 3.1, step 4.1] ∎
