---
id: def-adjoint-twisted-homology-and-culler-shalen-data
kind: definition
title: "Adjoint-twisted homology and Culler-Shalen data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-knot-twisted-chain-complex-and-reidemeister-torsion
  - lem-twisted-fox-jacobian-is-cellular-boundary
justified_by: []
proof_strategy: not-applicable
axiom_use: "Finite CW chains and the conjugation representation are choice-free once the specified full-AC knot-exterior data are fixed."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, §§3.1 and 3.5"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Marc Culler and Peter B. Shalen, Varieties of group representations and splittings of 3-manifolds, §3"
      url: "https://marc-culler.info/static/home/papers/CharacterVarieties.pdf"
---

## Definition

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, $E_K$ its exterior, and $\rho:\pi_1(E_K)\to SL_2(\mathbb C)$ a representation. The **adjoint local system** $\operatorname{Ad}\rho$ has fibre $\mathfrak{sl}_2(\mathbb C)$ and left group-module action $\gamma\cdot v=\rho(\gamma)v\rho(\gamma)^{-1}$. In the first-loop-first intrinsic convention, this means forward path transport $T_\gamma(v)=\rho(\gamma)^{-1}v\rho(\gamma)$; equivalently the corresponding right action is $v\cdot\gamma=\rho(\gamma)^{-1}v\rho(\gamma)$. Its twisted homology $H_*(E_K;\operatorname{Ad}\rho)$ is the intrinsic local-system homology with these transports, equivalently the homology of the cellular local-coefficient complex for a supplied CW structure; the same convention defines boundary-torus twisted homology and the inclusion map $i_*:H_1(\partial E_K;\operatorname{Ad}\rho)\to H_1(E_K;\operatorname{Ad}\rho)$. An **admissible adjoint representation** is one for which there is a nonzero vector $v_\rho\in\mathfrak{sl}_2(\mathbb C)$ fixed by the peripheral adjoint action such that $\{[v_\rho\otimes\lambda],[v_\rho\otimes\mu]\}$ is a basis of $H_1(\partial E_K;\operatorname{Ad}\rho)$ and $\ker i_*$ is one-dimensional. For an irreducible affine character curve $X$, its function field $\mathbb C(X)$ is the fraction field of its coordinate domain. A **tautological representation** over $\mathbb C(X)$ is a homomorphism $\rho_X:\pi_1(E_K)\to SL_2(\mathbb C(X))$ whose character is the generic character of $X$. A **smooth projective completion** is a smooth complete curve birational to $X$ that contains $X$ as a dense open subset. An **ideal point** is a point $x$ of that completion outside $X$; it defines the discrete valuation $v_x(f)=\operatorname{ord}_x(f)$ on $\mathbb C(X)$. The valuation ring is $\mathcal O_x=\{f:v_x(f)\ge0\}$, and a **uniformizer** is an element $\pi\in\mathcal O_x$ with $v_x(\pi)=1$. Its residue field is $k_x=\mathcal O_x/(\pi)$. An $\mathcal O_x$-lattice in $\mathbb C(X)^2$ is a free rank-two $\mathcal O_x$-submodule spanning $\mathbb C(X)^2$; two lattices are homothetic if one is a nonzero scalar multiple of the other. The **Bruhat–Tits tree** has homothety classes of these lattices as vertices, with two vertices adjacent if representatives satisfy $\pi\Lambda\subsetneq\Lambda'\subsetneq\Lambda$ and $\Lambda/\Lambda'$ is one-dimensional over $k_x$. Whenever the tautological representation exists, it acts on this tree. The ideal point, valuation, action, and any essential surface produced from the action are its Culler–Shalen data; that surface is called the associated Culler–Shalen surface.

## Definition references

[[def-singular-and-cellular-chain-complexes-with-local-coefficients|Intrinsic local-system chains and correctly typed cover-chain conventions]]

[[thm-cellular-chains-compute-homology-with-local-coefficients|Cellular comparison for local coefficients]]

[[def-knot-twisted-chain-complex-and-reidemeister-torsion|Twisted cellular chain complex]]

[[lem-twisted-fox-jacobian-is-cellular-boundary|Fox boundary matrix convention]]

[Bénard, Florens, and Rodau, §§3.1 and 3.5](https://arxiv.org/html/2103.14151)

[Culler and Shalen, §3](https://marc-culler.info/static/home/papers/CharacterVarieties.pdf)
