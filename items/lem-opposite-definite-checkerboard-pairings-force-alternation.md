---
id: lem-opposite-definite-checkerboard-pairings-force-alternation
kind: lemma
title: "Opposite definite checkerboard pairings force alternation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-reduced-alternating-link-diagram
  - def-tait-graph-of-a-link-diagram
  - lem-connected-projection-has-connected-tait-graphs
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - lem-alternating-checkerboard-normal-pairing-is-definite
  - thm-cellular-homology-computes-singular-homology
  - cor-homology-of-spheres
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the normal-transfer linking interface. The graph decomposition, band calculation and definiteness argument are finite rational constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, Theorems 1.1 and 5.1; finite signed-cycle-space proof supplied here"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
---

## Statement

Assume full AC. Let $D$ be a connected regular link diagram on an oriented two-sphere, with its two standard smooth checkerboard disk-and-band surfaces $B,W$. If the normal-transfer pairing on $B$ is positive definite and that on $W$ is negative definite, or conversely, then $D$ is alternating. The zero-dimensional form is allowed as either definite sign. No primeness or reducedness assumption is required.

## Statement references

[[def-axiom-of-choice]]

[[def-reduced-alternating-link-diagram]]

## Facts & Assumptions

**Given:** Full AC, the connected regular diagram, its actual two checkerboard surfaces, and their opposite definiteness.

[F1] Both Tait graphs of a connected projection with crossings are connected. Their vertices are the regions of their colors and their edges are the crossing bands. ([[lem-connected-projection-has-connected-tait-graphs]], [[def-tait-graph-of-a-link-diagram]])

[F2] The normal-transfer pairing is well-defined on rational surface homology and is preserved by smooth ambient isotopy. A disk-and-band surface retracts onto its finite graph spine. ([[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]])

[F3] The actual band calculation in the checkerboard-definiteness proof, step 3.1, evaluates a half-twisted band's contribution as its incidence sign times the square of its signed strand coefficient; the disk contributions cancel between the two normal sides. That calculation does not use equality of the different bands' signs. Its mixed-crossing calculation is repeated below. ([[lem-alternating-checkerboard-normal-pairing-is-definite]])

[F4] Cellular homology computes the homology of a finite cellulation, and the first homology of a two-sphere is zero. ([[thm-cellular-homology-computes-singular-homology]], [[cor-homology-of-spheres]])

[F5] A Jordan curve on the sphere bounds a disk on each side, obtained from plane Jordan–Schönflies in two punctured sphere charts. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

## Proof

1.1 A crossingless connected diagram is a single circle and is alternating vacuously. Otherwise put a vertex in each black disk and a core through each black band. This embeds the connected black Tait graph $G$ in the sphere, with white regions its disk faces. One can see the disk-face assertion by thickening the connected graph: each boundary circle bounds, on its side away from that connected neighborhood, a disk; those disjoint disks fill the complement. Equivalently these are the original checkerboard regions shrunk across the crossing strips. Orient the edges of $G$ and identify their rational chain space with $E=\mathbb Q^m$, with its coordinate Euclidean inner product. Let $C=\ker\partial_1$ be its cycle space. The black surface retracts onto $G$, so its first rational homology is exactly $C$. [given, F1, F2, F5, construct]

2.1 Draw the white dual graph, orienting each dual edge by positive intersection with its primal edge. Its cycles, expressed in these same edge coordinates, form precisely $C^\perp$. Indeed the dual is a cellular graph on the sphere. By [F4], every dual cycle is the boundary of a rational sum of its faces. These faces correspond to the primal vertices; their oriented boundary vectors, in crossing coordinates, are the signed incidence rows of $\partial_1$, up to one common orientation convention. Thus the dual cycle space is $\operatorname{im}\partial_1^T$. Finite rational elimination gives $E=\ker\partial_1\oplus\operatorname{im}\partial_1^T$ orthogonally: their intersection is zero since $\langle\partial_1^T u,x\rangle=\langle u,\partial_1x\rangle$, and the rank-nullity dimensions sum to $m$. Hence the white first homology is the required orthogonal complement, including primal loops and bridges. [step 1.1, F1, F2, F4, algebra, construct]

3.1 At crossing $e$ denote the black band's planar half-turn incidence by $\epsilon_e\in\{1,-1\}$. The white band has incidence $-\epsilon_e$: in the same four-sector crossing chart its attaching sectors are the other two, so its normal half-turn runs in the opposite direction while its boundary retains the same overpassing branch. For any graph cycle, clear denominators and run signed parallel strands through each band, joining them in the disk cores. For an original strand and a transferred strand a half-turn gives two mixed crossings of the same incidence sign, one from each normal side; the linking count is half their signed sum. Reversing either strand reverses that contribution. Summing the ordered strand pairs therefore gives $\epsilon_e a_e^2$ at the black band. On the planar disk cores the two normal sides give opposite contributions, including crossings of the joining arcs; these cancel. This is the local strip computation of [F3], now retaining each band's own sign. Restore rational coefficients to obtain $q_B(a)=\sum_e\epsilon_e a_e^2$ on $C$ and $q_W(b)=-\sum_e\epsilon_e b_e^2$ on $C^\perp$. No alternation has been assumed in this computation. [step 1.1, step 2.1, F2, F3, construct, algebra]

4.1 Choose $\sigma=1$ if $q_B$ is positive and $q_W$ negative, and $\sigma=-1$ otherwise. Then $Q(x)=\sum_e\sigma\epsilon_e x_e^2$ is positive on every nonzero rational vector in either $C$ or $C^\perp$. Suppose some coefficient $\sigma\epsilon_e$ is negative. Let $N$ be the coordinate subspace of all such edges and $P_N$ its orthogonal projection. For a nonzero vector $u$ in either subspace, positivity says $\|P_Nu\|^2<\|u\|^2/2$. Decompose the corresponding negative unit coordinate vector as $e=c+d$, with $c\in C$, $d\in C^\perp$; the decomposition is rational by finite elimination. At least one summand is nonzero. The triangle and two-term Cauchy inequalities give $1=\|P_Ne\|\le\|P_Nc\|+\|P_Nd\|<(\|c\|+\|d\|)/\sqrt2\le\sqrt{\|c\|^2+\|d\|^2}=1$, a contradiction. Thus every $\epsilon_e=\sigma$. This argument also applies when one cycle space is zero. [given, step 2.1, step 3.1, algebra]

5.1 Finally check alternation along any projection edge. The chosen-color sector lies on opposite local sides when that edge is read outward from its two crossing ends. In a half-twist chart, changing that sector side reverses its incidence sign, and switching the visited strand between over and under also reverses it. Therefore equal incidence signs at the two ends hold exactly when those two crossing visits have opposite over-under status. Step 4.1 supplies equal signs at every pair of ends, including when an edge returns to the same crossing. Successive visits along every link component consequently switch over and under. This is alternation by definition, with no assertion about reducedness or primeness. [step 4.1, F1, construct] ∎
