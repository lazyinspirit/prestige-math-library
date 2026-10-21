---
id: def-maximal-abelian-cover-alexander-module
kind: definition
title: "The maximal-abelian-cover Alexander module of an oriented link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-one-variable-alexander-module-of-an-oriented-link
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-normal-and-conormal-bundles-of-an-embedded-submanifold
  - def-tubular-neighbourhood-of-an-embedded-submanifold
  - prop-normal-and-conormal-bundles-are-smooth-vector-bundles
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - thm-classification-of-connected-covering-spaces
  - thm-regular-covering-characterizations
  - cor-deck-group-of-a-regular-covering
  - def-deck-transformation-and-deck-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-axiom-of-choice
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4, pp. 4–5"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Thomas Cochran, Classical Isotopy Invariants of Links and 3-Manifolds, slides 4–5"
      url: "https://math.rice.edu/~cochran/ResearchLectures/KAISTLecture2.pdf"
---

## Definition

Assume the Axiom of Choice. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be a nonempty oriented smooth link with $r\ge1$ components, and let $X_L=S^3\setminus L$ be its open complement. For each component choose a smooth fibrewise norm on its normal plane bundle $\nu(K_i)$ and a tubular map $\Phi_i$ from an open neighborhood of the zero section, fixing the zero section, together with a radius $\epsilon_i>0 whose closed disk subbundle lies in that neighborhood. Require the resulting closed tubes $N(K_i)=\Phi_i(D_{\epsilon_i}\nu(K_i))$ to be pairwise disjoint, and put $N(L)=\bigcup_{i=1}^rN(K_i)$ and $E_L=S^3\setminus\operatorname{int}_{S^3}N(L)$, the resulting compact smooth $3$-manifold with boundary. The tube choices are part of the input. Choose a basepoint $b\in E_L\subset X_L$. Orient each normal disk so that the positive tangent to $K_i$ followed by its positive normal basis agrees with the fixed orientation of $S^3$. A **positive meridian** $\mu_i$ of $K_i$ is the oriented boundary of the radius-$\epsilon_i$ normal disk in one fibre of $\nu(K_i)$; the curve lies on $\partial E_L$ and is disjoint from every component of $L$; its spanning normal disk meets $K_i$ transversely once with positive sign and misses every other component. Alexander duality identifies $H_1(X_L;\mathbb Z)$ with $\mathbb Z^r$ and identifies the classes of $\mu_1,\ldots,\mu_r$ with its standard basis. Write $G=\pi_1(X_L,b)$ and let $\phi:G\to H_1(X_L;\mathbb Z)$ be the first Hurewicz homomorphism, equivalently abelianization. The subgroup $\ker\phi$ is normal. The connected covering $p:X_L^{\mathrm{ab}}\to X_L$ classified by $\ker\phi$ is the **maximal abelian cover**; it is regular and its deck group is identified with $G/\ker\phi\cong H_1(X_L;\mathbb Z)$. Put $\Lambda_r=\mathbb Z[H_1(X_L;\mathbb Z)]\cong\mathbb Z[t_1^{\pm1},\ldots,t_r^{\pm1}]$, where $t_i$ is the deck transformation corresponding to $[\mu_i]$. The isomorphism sends each variable to its group-ring basis element; monomials $t_1^{n_1}\cdots t_r^{n_r}$ correspond bijectively to the basis elements indexed by $n_1[\mu_1]+\cdots+n_r[\mu_r]$. Define the absolute multivariable Alexander module by

$$
A_L=H_1(X_L^{\mathrm{ab}};\mathbb Z),
$$

as a left $\Lambda_r$-module under the deck action. “Absolute” means this is ordinary homology of the covering space, not relative homology with respect to a fibre over the basepoint.

## Definition references

[[def-one-variable-alexander-module-of-an-oriented-link]]

[[def-oriented-link-in-s-three-and-ambient-isotopy]]

[[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]

[[def-tubular-neighbourhood-of-an-embedded-submanifold]]

[[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]

[[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]]

[[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[[thm-classification-of-connected-covering-spaces]]

[[thm-regular-covering-characterizations]]

[[cor-deck-group-of-a-regular-covering]]

[[def-deck-transformation-and-deck-group]]

[[def-group-ring]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[def-knot-exterior]]

[[def-knot-meridian-and-preferred-longitude]]

[[def-axiom-of-choice]]
