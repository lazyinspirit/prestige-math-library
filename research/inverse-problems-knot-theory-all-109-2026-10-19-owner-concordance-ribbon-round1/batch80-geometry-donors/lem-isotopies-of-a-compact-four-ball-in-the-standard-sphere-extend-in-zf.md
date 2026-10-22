---
id: lem-isotopies-of-a-compact-four-ball-in-the-standard-sphere-extend-in-zf
kind: lemma
title: Compact four-ball isotopies in the standard sphere extend without choice
status: draft
origin: session
deps: [thm-euclidean-inverse-function-theorem, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-heine-borel-rn, lem-smooth-bump-between-concentric-euclidean-balls]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Morris Hirsch, Differential Topology, Chapter 8, compact-source isotopy extension
      url: https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf
---

## Statement

Let $F:B^4\times[0,1]\to S^4$ be a smooth isotopy of embeddings of the closed standard ball into the standard smooth sphere, with smoothness meaning local smooth extension across all source boundary faces. Then there is a smooth ambient isotopy $H_s:S^4\to S^4$ with $H_0=\mathrm{id}$ and $H_sF_0=F_s$. No choice principle is assumed.

## Statement references

[[thm-euclidean-inverse-function-theorem]]

[[thm-picard-lindelof-local-existence-and-uniqueness]]

## Facts & Assumptions

**Given:** The specified compact Euclidean ball, sphere and smooth isotopy.

[F1] The Euclidean inverse function theorem supplies local inverse maps at invertible derivatives. [[thm-euclidean-inverse-function-theorem]]

[F2] Smooth Euclidean time-dependent fields have unique local flows and smooth dependence on the initial point and parameters. [[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F3] Closed bounded Euclidean sets are compact, and concentric coordinate balls have smooth cutoffs. [[thm-heine-borel-rn]], [[lem-smooth-bump-between-concentric-euclidean-balls]]

## Proof

1.1 Regard $S^4$ as the unit sphere in $\mathbb R^5$ and use its explicit finite stereographic atlas. At each $(x,s)\in B^4\times[0,1]$ choose a target chart and a local smooth extension of $F$ across its source faces. The derivative in $x$ has rank four, since each slice is an embedding. The map $(x,s)\mapsto(F_s(x),s)$ therefore has an invertible derivative in these target coordinates. By [F1] it has a smooth local inverse, including across the source faces. On its image define the spatial velocity by differentiating the extended $F$ in $s$ and substituting this inverse. It is a smooth tangent vector field along $S^4$, depending smoothly on time. Shrink this target neighborhood so its intersection with the actual track comes only from this local inverse branch: the track map is a continuous injection from a compact space into a Hausdorff space, hence a homeomorphism onto its image, and the image of the compact complement of a smaller source neighborhood is closed and avoids the point. Its value at every point of the actual track in that shrunken inverse neighborhood is $\partial_s F_s(x)$. No agreement between different extensions away from the actual track is required. [F1, given, construct]

2.1 The actual track is compact by [F3]. Choose finitely many of the inverse neighborhoods in step 1.1 and smaller concentric coordinate balls whose union covers it. The cutoffs of [F3], pulled back through the product charts, give finitely many smooth nonnegative functions $b_j$, supported inside the corresponding inverse neighborhoods, with $b=\sum b_j>0$ on the track. Choose $c>0$ with $b\ge c$ there. Choose a smooth scalar cutoff $\eta$ vanishing for $b\le c/3$ and equal to one for $b\ge2c/3$. Define $X=\eta(b)\sum_j b_jX_j/b$ where $b>c/3$, and zero elsewhere. Each summand is extended by zero outside its chart. This gives a global smooth time-dependent tangent field on $S^4$, extending smoothly slightly beyond the time endpoints, which equals the prescribed velocity on the track. All neighborhoods and cutoffs here form a finite list; compactness and finite selection require no choice axiom. [F3, step 1.1, construct]

3.1 Extend $X$ to $\mathbb R^5$ by $\widetilde X(z,s)=\chi(|z|)X(z/|z|,s)$ on $1/2<|z|<3/2$, where $\chi$ equals one near one and vanishes on collars of those two radii, and set it to zero elsewhere. This is smooth and tangent to the concentric spheres, since $z\cdot X(z/|z|,s)=0$. On the compact time interval its norm and first spatial derivative have uniform bounds. The quantitative local theorem [F2] consequently gives a common positive time increment for all initial points in a fixed compact ball containing its support. Finitely many such increments cover $[0,1]$, so successive unique local solutions give the global time-dependent flow; points outside the support remain fixed. Smooth dependence in [F2] pastes over these finitely many intervals. Solving the same equation backward gives the inverse evolution, so every evolution map is a diffeomorphism. The identity $d|z|^2/ds=0$ keeps $S^4$ invariant. Thus restriction is a smooth ambient isotopy $H_s$ of $S^4$. [F2, F3, step 2.1, construct]

4.1 For any $x\in B^4$, the curve $F_s(x)$ satisfies the equation with field $X$ by step 2.1 and has initial point $F_0(x)$. The curve $H_s(F_0(x))$ satisfies the same equation and initial condition by step 3.1. Uniqueness in [F2] gives $H_s(F_0(x))=F_s(x)$ for every $s$. Every construction used only finite chart data and uniquely determined Euclidean flows, so the conclusion has no additional choice assumption. [F2, step 2.1, step 3.1, algebra] ∎
