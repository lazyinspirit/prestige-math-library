---
id: def-based-handle-chain-complex-over-the-fundamental-group-ring
kind: definition
title: "The based handle chain complex over the fundamental group ring"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: ["def-smooth-cobordism-triad-for-morse-theory", "def-handle-decomposition-relative-to-the-incoming-boundary", "lem-a-handle-decomposition-gives-a-relative-cw-complex", "lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers", "def-based-cellular-chain-complex-of-a-universal-cover", "def-right-group-ring-action-on-the-chains-of-a-universal-cover", "def-group-ring", "def-universal-covering-space", "thm-deck-group-of-a-universal-cover-is-the-fundamental-group", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-countable-choice", "thm-cellular-approximation-for-maps-of-cw-pairs"]

dependency_level: 7
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §§1.2--1.4, printed pp. 7--22; Chapter 2 §2.2 (2.12)--(2.14), printed pp. 30--32"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Definition 8.14 and Proposition 8.17, printed pp. 176--178; PDF pages 184, 186"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a nonempty connected compact smooth cobordism triad with a finite index-ordered handle presentation $H$ relative to $M_0$ ([[def-smooth-cobordism-triad-for-morse-theory]], [[def-handle-decomposition-relative-to-the-incoming-boundary]]). Fix a finite CW model $K\simeq M_0$ when $M_0$ is nonempty; such models exist by [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]. If $M_0$ is empty, use $K=\varnothing$. Transfer the handle attaching maps to this model using a chosen homotopy inverse and the cell-attachment induction of [[lem-a-handle-decomposition-gives-a-relative-cw-complex]]. Cellular approximation at each finite stage gives a finite CW pair $(X,K)\simeq(W,M_0)$ with one relative cell per handle ([[thm-cellular-approximation-for-maps-of-cw-pairs]]). Fix this model and its comparisons throughout. In subsequent notation for cellular chains, $W,M_0$ mean these chosen models $X,K$.

Put $\pi=\pi_1(W)$ and $R=\mathbb Z[\pi]$ ([[def-group-ring]]). If the incoming inclusion induces a fundamental-group isomorphism, identify $\pi$ with $\pi_1(M_0)$ along that inclusion, as in every h-cobordism application. Choose a universal cover $p:\widetilde X\to X$; $p^{-1}K$ is its induced cover of $K$, and need not be a universal cover unless the incoming fundamental-group map is an isomorphism ([[def-universal-covering-space]], [[def-based-cellular-chain-complex-of-a-universal-cover]]).

The **based handle chain complex** is
$$C^{\mathrm h}_k(W,M_0;H):=C_k^{\mathrm{cell}}(\widetilde X,p^{-1}K;R),$$
where the semicolon records the deck-induced module structure and the homology coefficients defining cellular chains are integral. Its right action is $c\cdot g=T_{g^{-1}}c$ ([[def-right-group-ring-action-on-the-chains-of-a-universal-cover]], [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]). An orientation of each handle core and one oriented lift of its relative cell give a basis $[h]$ in the handle's degree. The complex is bounded finite based free over $R$; an empty handle list gives the zero complex.

In these bases the relative cellular boundary is
$$d[h]=\sum_{h'}[h']\cdot a_{h'h},\qquad a_{h'h}=\sum_{g\in\pi}\lambda_{h',g}g,$$
with $h'$ ranging over handles one index lower. For transverse middle-level data, $\lambda_{h',g}$ is the incidence count of the chosen lifted attaching sphere against the belt of the lifted handle $T_{g^{-1}}\widetilde h'$, with its transported core and normal orientations. For a lifted lower $k$-handle, the relevant collapse on its outgoing region $D^k\times S^{\dim W-k-1}$ is $(x,y)\mapsto[x]\in D^k/S^{k-1}$, with the attaching rim and all other lower pieces sent to the quotient basepoint. The fibre over the interior point $[0]$ is exactly its belt sphere. Transversality makes $[0]$ a regular value of the restricted upper attaching sphere, and each local degree is its attaching-belt sign. Summing these local degrees in every lift gives the formula (the incidence identity of [[lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers]]); only finitely many lifted belts meet the compact attaching sphere. This defines the labels unambiguously in the right convention: the matrix has lower handles as rows and upper handles as columns, and coordinate columns are multiplied by that matrix on the left. If $W$ is oriented, these incidence signs are the ordinary attaching-belt signs in each oriented lift; without global orientability, use the lifted local core/normal orientations rather than a nonexistent global boundary orientation. Reduction modulo two forgets the signs.

With the CW model fixed, reordering, reorienting or relifting handle generators changes the bases by permutations and units $\pm g$. This definition does not assert independence of the chosen finite CW model or compare arbitrary presentations.
