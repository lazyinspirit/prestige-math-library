---
id: def-cyclic-branched-cover-of-a-knot
kind: definition
title: "Cyclic branched cover of a knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - lem-knot-tubular-exterior-and-boundary
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-classification-of-connected-covering-spaces
  - def-regular-covering
  - thm-regular-covering-characterizations
  - cor-deck-group-of-a-regular-covering
  - def-deck-transformation-and-deck-group
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 10.C, printed pp. 297–300"
---

## Definition

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot in the standard oriented $3$-sphere, choose its compact exterior $E_K$ with boundary torus $T_K$, and let $\mu$ and $\lambda$ be its positive meridian and preferred longitude. The exterior homology theorem gives $H_1(E_K;\mathbb Z)=\mathbb Z[\mu]$. Let $\phi:\pi_1(E_K)\to\mathbb Z$ be the composite of abelianization with the homomorphism $[\mu]\mapsto1$. For an integer $q\ge2$, let $\phi_q$ be the composite $\pi_1(E_K)\xrightarrow{\phi}\mathbb Z\to\mathbb Z/q\mathbb Z$, and let $p_q:E_q\to E_K$ be the connected cover classified by $\ker\phi_q$. On $T_K$, the homomorphism sends $[\mu]\mapsto1$ and $[\lambda]\mapsto0$, so the preimage of $T_K$ is a connected torus cover whose fundamental group corresponds to $\langle\mu^q,\lambda\rangle$. Let $\widetilde\mu$ be the closed lift of $\mu^q$. Attach a solid torus to $E_q$ with its meridian identified with $\widetilde\mu$; the resulting oriented closed $3$-manifold is the $q$-fold cyclic branched cover $\Sigma_q(K)$. In tubular coordinates near $K$, the extended map to $S^3$ has local form $(s,w)\mapsto(s,w^q)$, and the deck group $\mathbb Z/q\mathbb Z$ acts by $w\mapsto e^{2\pi i/q}w$.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots in the standard oriented three-sphere]]

[[def-knot-exterior|The chosen compact exterior and boundary torus]]

[[lem-knot-tubular-exterior-and-boundary|The exterior is a smooth manifold with torus boundary and retracts from the open complement]]

[[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold|Connectedness and local covering hypotheses for the knot complement]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and preferred longitude conventions]]

[[thm-knot-exterior-homology-and-longitude|The positive meridian generates exterior homology and the longitude is null-homologous]]

[[prop-the-first-hurewicz-map-in-degree-one-is-abelianization|The first homology of the exterior is the abelianization of its fundamental group]]

[[def-covering-map-and-evenly-covered-neighbourhoods|Covering maps and their sheets]]

[[thm-classification-of-connected-covering-spaces|Connected covers classified by fundamental-group subgroups]]

[[def-regular-covering|Definition of a regular covering]]

[[thm-regular-covering-characterizations|A normal subgroup gives a regular covering]]

[[cor-deck-group-of-a-regular-covering|The deck group is the quotient by the covering subgroup]]

[[def-deck-transformation-and-deck-group|Deck transformations and deck group]]

[[def-axiom-of-choice|The Axiom of Choice used by the exterior-homology theorem]]
