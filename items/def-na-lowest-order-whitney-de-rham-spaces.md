---
id: def-na-lowest-order-whitney-de-rham-spaces
kind: definition
title: Lowest-order Whitney and Nedelec de Rham spaces
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-na-hcurl-space, def-matching-affine-simplicial-meshes, def-oriented-simplicial-cell-chains, def-covariant-contravariant-piola-maps-and-hdiv-hcurl, thm-affine-piola-differential-and-trace-moment-identities, def-na-hdiv-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\Omega\subset\mathbb R^3$ have a finite matching affine tetrahedral mesh $\mathcal T$ as in [[def-matching-affine-simplicial-meshes]]. The H(curl) and H(div) graph-space conventions used below carry their stated Countable Choice assumptions. Choose one orientation for every mesh edge and face and the ambient orientation for each tetrahedron, with incidence signs given by [[def-oriented-simplicial-cell-chains]]. Write $t_e$ for the unit tangent in the chosen direction of an edge $e$, and $n_F$ for the unit normal determined by the chosen orientation of a face $F$ and the ambient orientation. On a tetrahedron $K$ with barycentric coordinates $\lambda_0,\lambda_1,\lambda_2,\lambda_3$, list the vertices in any order and let $P_1(K)$ denote scalar polynomials of total degree at most one. For an ordered edge $[i,j]$, put $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$; reversing its orientation changes the sign. Set
$$W_h^0:=\{q\in C^0(\overline\Omega):q|_K\in P_1(K)\text{ for every }K\in\mathcal T\}.$$
The first-family lowest-order Nedelec space is
$$N_h^1:=\{u\in H(\operatorname{curl};\Omega):u|_K\in\operatorname{span}\{\phi_{ij}:0\le i<j\le3\}\text{ for every }K\in\mathcal T,\text{ and every global edge }e\text{ has one common oriented circulation }\int_e u|_K\cdot t_e\,ds\text{ for all }K\supset e\}.$$
The local Raviart–Thomas space is $RT_0(K)=\{a+c x:a\in\mathbb R^3,\ c\in\mathbb R\}$. With $H(\operatorname{div};\Omega)$ as defined by [[def-na-hdiv-space]], set
$$N_h^2:=\{v\in H(\operatorname{div};\Omega):v|_K\in RT_0(K)\text{ for every }K\in\mathcal T,\text{ and every global face }F\text{ has one common oriented flux }\int_F v|_K\cdot n_F\,dS\text{ for all }K\supset F\},\qquad N_h^3:=\{q\in L^2(\Omega):q|_K\text{ is constant for every }K\in\mathcal T\}.$$
The covariant affine Piola map for $N_h^1$ and contravariant affine Piola map for $N_h^2$ use the orientation-preserving cell maps and conventions of [[def-covariant-contravariant-piola-maps-and-hdiv-hcurl]]. Their differential and moment identities are those of [[thm-affine-piola-differential-and-trace-moment-identities]]. The edge, face, and cell degrees of freedom are respectively the oriented edge circulation, oriented face-normal flux, and cell integral.

In the two conformity conditions above, each cellwise polynomial restriction has a unique polynomial representative on its closed cell, and those representatives define the displayed edge and face integrals. Thus the global edge and face moments are part of the assembled-space definition; their correspondence with all cochains is proved by the local unisolvence and commuting-moment items, not inferred from rough-field traces.
