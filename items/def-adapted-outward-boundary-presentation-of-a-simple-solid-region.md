---
id: def-adapted-outward-boundary-presentation-of-a-simple-solid-region
kind: definition
title: "Boundary presentations adapted to a simple solid region in a coordinate direction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-simple-solid-region-in-a-coordinate-direction, def-finitely-patched-regular-surface-and-integrals, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-admissible-regular-parametrized-surface-patch, def-cross-product-in-r3, def-riemann-integral-over-a-jordan-set, def-metric-interior-closure-boundary, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians, def-null-and-content-zero-in-rn]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Definition

Let $(k,D,\gamma_1,\gamma_2)$ be a simple description of a solid $E\subseteq\mathbb R^3$ in the direction $k$ ([[def-simple-solid-region-in-a-coordinate-direction]]), and write

$$\Gamma_2:=\{p:\pi_k(p)\in D,\ p_k=\gamma_2(\pi_k(p))\},\qquad \Gamma_1:=\{p:\pi_k(p)\in D,\ p_k=\gamma_1(\pi_k(p))\}$$

for the **upper** and **lower graph** of the description. Let $\Sigma=\bigl((D_1,\varphi_1),\ldots,(D_P,\varphi_P)\bigr)$ be a compatible finite patch presentation in the sense of [[def-finitely-patched-regular-surface-and-integrals]], each $(D_j,\varphi_j)$ a regular parametrized surface patch of [[def-admissible-regular-parametrized-surface-patch]], whose patch images cover $\partial E$ and are contained in $\partial E$. Write $\varphi_{j,u},\varphi_{j,v}$ for the two parameter derivatives, and $\varphi_{j,u}\times\varphi_{j,v}$ for the oriented area vector of [[def-oriented-unit-normal-and-flux-of-a-surface-patch]], whose coordinates are those of [[def-cross-product-in-r3]].

The presentation $\Sigma$ is **adapted** to the description $(k,D,\gamma_1,\gamma_2)$ when the index set $\{1,\ldots,P\}$ is partitioned into three sublists $\Sigma^+$, $\Sigma^-$ and $\Sigma^0$, supplied with the presentation, such that all of the following hold.

1. **Upper faces.** For $j\in\Sigma^+$, the image of $\varphi_j$ lies in the graph of $\gamma_2$ and the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ is positive on the interior of $D_j$.
2. **Lower faces.** For $j\in\Sigma^-$, the image of $\varphi_j$ lies in $\Gamma_1$ and the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ is negative on the interior of $D_j$.
3. **Lateral faces.** For $j\in\Sigma^0$, the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ vanishes on the interior of $D_j$.
4. **The graph faces cover the base.** Writing $V_j:=\pi_k\bigl[\varphi_j[D_j^\circ]\bigr]$ for the **projected image** of the $j$th patch, the projected images of the upper sublist are pairwise disjoint and fill $D$ up to content zero, and the same holds for the lower sublist: for each of $\Sigma^+$ and $\Sigma^-$ the sets $V_j$ with $j$ in that sublist are pairwise disjoint and $D\setminus\bigcup V_j$ has content zero in the sense of [[def-null-and-content-zero-in-rn]].
5. **Both graph sublists are nonempty.** $\Sigma^+\ne\emptyset$ and $\Sigma^-\ne\emptyset$; the lateral sublist $\Sigma^0$ may be empty.

The partition into the three sublists is part of the supplied data, exactly as the description $(k,D,\gamma_1,\gamma_2)$ is; nothing here is inferred from the set $E$ or from the unordered collection of patch images. Interiors are those of [[def-metric-interior-closure-boundary]] and integrals over the projected images are those of [[def-riemann-integral-over-a-jordan-set]].

## Remarks

- **The conditions are on the sign of one coordinate, not on outwardness.** Clauses 1 to 3 are analytic: by [[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]] the $k$th coordinate of the oriented area vector is the Jacobian determinant of $\pi_k\circ\varphi_j$, so clause 1 says that the projection of an upper patch is orientation-preserving on the parameter interior and clause 3 says that a lateral patch projects with vanishing Jacobian determinant. That the induced normals of the graph faces then point out of $E$ is a theorem, [[prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal]], rather than part of this definition.

- **A graph face is not required to be a graph patch.** Clause 1 asks only that the patch image lie in $\Gamma_2$; it does not ask that $\varphi_j$ be the map $w\mapsto(w,\gamma_2(w))$ read in the projected coordinates. That is what admits the eight spherical octants and the four quarter-cylinders: their graph functions have unbounded gradient at the equator or at the silhouette, so they are not $C^1$ on a neighbourhood of the closed base and could not parametrize a patch, while the octants and quarters themselves are patches in every direction at once.

- **Why the lateral condition is imposed on the interior.** The parameter region of a patch is the closure of its interior, and the $k$th coordinate of the oriented area vector is continuous on the whole region, so a vanishing condition on the interior already forces vanishing everywhere on the region. Stating it on the interior keeps the three clauses in the same form and matches where clauses 1 and 2 can be stated at all, since the oriented area vector may vanish on a parameter boundary.

- **What clause 4 is for.** It is the only clause that ties the presentation to the base quantitatively: without it, one tiny upper patch in $\Gamma_2$ together with one tiny lower patch in $\Gamma_1$ could satisfy clauses 1, 2, 3 and 5 while covering almost none of either graph. Pairwise disjointness and the content-zero residue are what make the sum of the graph-face fluxes an integral over the whole of $D$.
