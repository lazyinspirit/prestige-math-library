---
page: bipartite-coxeter-elements-and-ordered-root-complexes
title: "Bipartite Coxeter Elements and Ordered Root Complexes"
status: published
requires: [finite-reflection-length-and-orthogonal-moved-spaces, finite-lattice-projections-and-coxeter-chain-labels, spherical-simplex-metrics-angular-links-and-cones]
items: [def-cg-bipartite-coxeter-element-and-root-recursion, lem-cg-steinberg-bipartite-root-enumeration, lem-cg-ordered-root-pairings-and-simple-systems, def-cg-brady-watt-ordered-spherical-root-complex, lem-cg-ordered-root-complex-is-geometric-simplicial, thm-cg-root-complex-convex-cones-and-facet-induction]
examples: []
---

This page constructs the ordered positive-root model for an irreducible finite Coxeter group and proves the geometry of its root complex. The companion [[bipartite-coxeter-elements-and-ordered-root-complexes-examples]] gives explicit rank-two and type-$A_3$ calculations.

## Bipartite data and root order

The tree Coxeter diagram splits into two commuting color classes. The page's first item defines their Coxeter element, cyclic simple-root and dual-vector recursions, and the conditional map $\mu(v)=-2(C_V-I)^{-1}v$, with $C_V=\rho(c)$. [[lem-cg-steinberg-bipartite-root-enumeration]] proves the Coxeter-plane angle, the positive-root enumeration $\Phi_+=(\rho_1,\ldots,\rho_{nh/2})$, and invertibility of $C_V-I$. [[lem-cg-ordered-root-pairings-and-simple-systems]] proves the $\mu$-root sign and vanishing rules and constructs the canonical simple systems and increasing reduced tuples for every $\sigma\le_T c$.

## The ordered root complex

[[def-cg-brady-watt-ordered-spherical-root-complex]] defines $X(c)$ from its ordered two-root compatibility relation, then defines the full subcomplexes $X(\sigma)$, their inclusive root prefixes, and positive-cone realizations. It makes no geometric claim. [[lem-cg-ordered-root-complex-is-geometric-simplicial]] proves the exact factorization and zero-pairing criterion, independence of simplex roots, the prefix link rule, and common-face intersections of geometric cones.

[[thm-cg-root-complex-convex-cones-and-facet-induction]] proves the separating-root lemma and the rank-and-prefix facet induction. Each transported facet normal is computed from $\mu(b)-B(\mu(b),a)\mu(a)=\mu(R(a)b)$; the proof identifies its sign and excludes unsupported earlier roots. At the endpoint, $c[X(\sigma)]$ is the positive-root cone cut out by the canonical $\mu(\theta_j)^+$ halfspaces, so its unit-sphere section is spherically convex. The theorem also records the exact realization intersection identity and explicitly abstains from asserting that arbitrary moved-space intersections are meets or that $[1,c]$ is a lattice.

## Prerequisites

The reading path places [[finite-reflection-length-and-orthogonal-moved-spaces]], [[finite-lattice-projections-and-coxeter-chain-labels]] and [[spherical-simplex-metrics-angular-links-and-cones]] before this page. The first supplies the reflection-length and orthogonal moved-space framework; the second is the earlier lattice and chain-label context; the third supplies the spherical Gram-simplex result used to identify each face-cone section in step 4.1 of item 20. Item-level inputs are recorded in the authored items and their batch manifest.
