---
id: def-middle-handle-intersection-matrix-of-an-h-cobordism
kind: definition
title: The middle-handle intersection matrix of an h-cobordism
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 13
deps:
- def-attaching-belt-intersection-matrix-of-adjacent-index-handles
- prop-relative-handle-chain-complex-of-a-cobordism
- lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices
- def-oriented-smooth-manifold-and-oriented-chart
- def-local-oriented-intersection-sign
- def-oriented-intersection-number
- def-mod-two-intersection-number
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- def-countable-choice
- def-orientation-local-system-and-orientation-cover
- thm-creation-of-a-cancelling-handle-pair
- thm-handle-cancellation
- thm-parametric-transversality
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
- thm-compactly-supported-vector-fields-are-complete
- thm-fundamental-theorem-on-flows
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170)
verification:
  precheck: n/a
---
## Definition

In the situation of the concentration lemma
([[lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices]]),
choose an orientation of $W$. Such an orientation exists: choose one at an interior basepoint and transport it along paths by [[def-orientation-local-system-and-orientation-cover]]. Transport depends only on endpoint-fixed path homotopy, so simple connectivity makes its value at each point unique. In each chart the transported value is constant in the orientation-cover coordinate; hence it is a continuous local orientation. The boundary collars extend this orientation to $W$ and induce one on each level. This is a single initial choice, not a family of independent choices.

Let the presentation of the h-cobordism have handles $e_1,\dots,e_r$ of index
$k$ and $g_1,\dots,g_r$ of index $k+1$, $2\le k\le n-2$, attached at the two
consecutive levels, and let $N$ be the outgoing boundary after the $k$-handles
([[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]). After an
arbitrarily small isotopy of the attaching data the attaching spheres $A_i$ of
the $g_i$ and the belt spheres $B_j$ of the $e_j$ are transverse, and the
**middle-handle intersection matrix** of the h-cobordism for the chosen
presentation is

$$M=(I(A_i,B_j))\in M_r(\mathbb Z),$$

the matrix of oriented intersection numbers in $N$
([[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]]).
The sphere orientations use the core and belt-normal convention of the relative
handle-chain proposition and the boundary orientation of $N$ when $W$ is oriented
([[def-oriented-smooth-manifold-and-oriented-chart]]); without orientations the
matrix $(\#_2(A_i\cap B_j))\in M_r(\mathbb Z/2)$ with entries the mod-two
intersection numbers is defined ([[def-mod-two-intersection-number]]).

By the relative handle chain complex
([[prop-relative-handle-chain-complex-of-a-cobordism]]) this matrix represents
$\partial_{k+1}:C_{k+1}\to C_k$ on row coordinate vectors, $x\mapsto xM$;
the matrix on column coordinate vectors is $M^T$. For a fixed handle count, slides, sign changes and renumbering give the corresponding basis changes of this differential. Presentation changes may also insert or delete an isolated geometrically cancelling $k/(k+1)$ pair ([[thm-creation-of-a-cancelling-handle-pair]], [[thm-handle-cancellation]]). Its attaching and belt spheres have no incidences with the old handles and meet one another once, so the new matrix is $M\oplus(\varepsilon)$, $\varepsilon=\pm1$, or $M\oplus(1)$ after reorientation. In particular the empty and one-pair presentations of $S^n\times[0,1]$ have matrices of sizes $0$ and $1$; presentation-dependence includes stabilization, which cannot be produced by size-preserving basis changes alone. The
matrix is only readable for a configuration that is already transverse; if some
pair is not transverse, the matrix is read after a small isotopy, which does not
change the presented manifold. Countable choice is inherited from the
intersection-number and handle suppliers ([[def-countable-choice]]).

For fixed oriented attaching data the entries are independent of the small transverse isotopy, by the homotopy-invariance clause of [[def-oriented-intersection-number]]; the same holds modulo two by [[def-mod-two-intersection-number]]. For $r=0$ the matrix is empty and the corresponding differential is the unique isomorphism $0\to0$.

The transverse isotopy can be chosen arbitrarily small: on the compact middle level $N$, finitely many chart vector fields multiplied by compactly supported bumps span $TN$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]). Compose their small-time flows to obtain a finite-parameter family $H_s$ of diffeomorphisms with $H_0=\mathrm{id}$ ([[thm-compactly-supported-vector-fields-are-complete]], [[thm-fundamental-theorem-on-flows]]). The evaluation $(x,s)\mapsto H_s(x)$ is a submersion for $s$ in a sufficiently small parameter ball, by the spanning condition at $s=0$ and compactness. Applied to the disjoint union of attaching spheres, parametric transversality to each of the finitely many fixed belt spheres gives parameters arbitrarily near zero that are good for all pairs ([[thm-parametric-transversality]]). The isotopy $t\mapsto H_{ts}$ applied to all upper attaching embeddings transports their framings and preserves their mutual disjointness; the belt spheres remain the fixed comparison family.
