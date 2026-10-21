---
id: def-double-branched-cover-of-an-oriented-link
kind: definition
title: "Double branched cover of an oriented link"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-classification-of-connected-covering-spaces
  - def-regular-covering
  - thm-regular-covering-characterizations
  - def-axiom-of-choice
justified_by:
  - lem-double-branched-cover-of-an-oriented-link-well-defined
axiom_use: "Assumes AC through the link-complement manifold and covering-space hypotheses; the mod-two meridian character itself is choice-free."
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §§1–2"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Hatcher, Algebraic Topology, Theorem 1.38 and Proposition 1.39"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Definition

Assume the Axiom of Choice. Let $L=K_1\cup\cdots\cup K_r$ be a nonempty finite oriented smooth link in the standard oriented three-sphere, and put $X_L=S^3\setminus L$. A small meridian about $K_i$ is the boundary of a normal disk fiber; its orientation is immaterial modulo two. The mod-two meridian character is the homomorphism $\epsilon_L:\pi_1(X_L)\to\mathbb Z/2$ that sends every component meridian to $1$. For each $K_i$, choose an oriented tubular chart, meaning a diffeomorphism from a normal disk bundle onto a neighborhood, written $\varphi_i:(\mathbb R/2\pi\mathbb Z)\times D^2\to N_i$ and respecting the core orientation. Let $\lambda_i$ be the parallel longitude given by $\varphi_i((\mathbb R/2\pi\mathbb Z)\times\{z_0\})$ for a fixed $z_0\in\partial D^2$, and set $\eta_i=\epsilon_L([\lambda_i])\in\{0,1\}$. The double branched cover $\Sigma(L)$ is the closed three-manifold obtained by taking the connected two-sheeted cover of $X_L$ classified by $\ker\epsilon_L$ and extending it over each $K_i$ with local normal-disk model $(s,z)\mapsto(s,e^{\mathrm i\eta_i s}z^2)$ in these coordinates. Give its total space the orientation for which the covering map is orientation-preserving away from the branch locus.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Finite oriented smooth links in the standard three-sphere]]

[[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold|The complement is an eligible connected manifold]]

[[thm-classification-of-connected-covering-spaces|Connected covers and fundamental-group subgroups]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §§1–2](https://arxiv.org/pdf/math/0309170v1)

[Hatcher, *Algebraic Topology*, Theorem 1.38 and Proposition 1.39](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)
