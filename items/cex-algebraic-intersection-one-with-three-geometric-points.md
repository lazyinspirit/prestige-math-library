---
id: cex-algebraic-intersection-one-with-three-geometric-points
kind: counterexample
title: "Algebraic intersection one with three geometric points"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-attaching-belt-intersection-matrix-of-adjacent-index-handles, lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix, lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, def-oriented-intersection-number, def-local-oriented-intersection-sign, def-mod-two-intersection-number, thm-handle-cancellation, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "§6, printed pp. 67-79 (local signs, opposite pairs, and the Whitney trick)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (unit classes versus one geometric intersection)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Assume $\mathrm{AC}_\omega$. In the standard $4$-dimensional model $W=D^4\cup h^2$ whose middle boundary is $N\cong S^2\times S^1$ with belt sphere $B=\{p\}\times S^1$ of the $2$-handle, let $A\subset N$ be the $2$-sphere obtained from $S^2\times\{u_0\}$ by a finger move across $B$. Then $A$ meets $B$ transversely in exactly three points with local signs $+1,+1,-1$; the oriented intersection number is $I(A,B)=1$ and the mod-2 number is $1$, while the attaching sphere $A$ and the belt sphere $B$ do not meet in one point. Hence the attached $3$-handle and the $2$-handle form a pair whose matrix entry is a unit but which is not geometrically cancelling: the cancellation theorem does not apply, although reversing this specific finger isotopy removes the extra pair. A general algebraic-to-geometric conversion is a separate Whitney-trick issue with additional hypotheses.

## Facts & Assumptions

**Given:** The standard $4$-dimensional model $W=D^4\cup h^2$ with middle boundary $N\cong S^2\times S^1$, belt sphere $B=\{p\}\times S^1$, and a $2$-sphere $A\subseteq N$ obtained from $S^2\times\{u_0\}$ by a finger move across $B$.

[F1] [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: the belt sphere of the $2$-handle in the middle boundary is a circle, and the attaching sphere of a $3$-handle attached to $N$ is a $2$-sphere; the matrix entry is the oriented, respectively mod-2, intersection number of the attaching sphere with the belt sphere.

[F2] [[lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation]]: on $N=S^2\times S^1$ there are an embedded $2$-sphere and an embedded circle meeting transversely in exactly three points with local signs $+1,+1,-1$, so that the oriented intersection number is $1$ although the geometric intersection has three points; the configuration is realized with the sphere as the attaching sphere of a $3$-handle and the circle as the belt sphere of the $2$-handle in the standard model.

[F3] [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]] and [[def-mod-two-intersection-number]]: the oriented number is the sum of local signs over the transverse intersection, and the mod-2 number is its cardinality modulo two.

[F4] [[lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix]] and [[thm-handle-cancellation]]: a single transverse point gives a unit entry, and only then does the cancellation theorem apply; a unit entry does not by itself supply a single geometric intersection point.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through the intersection-number and cancellation suppliers.

## Counterexample

**Given:** The configuration of the statement.

1.1 The model $W=D^4\cup h^2$ has middle boundary $N\cong S^2\times S^1$ with belt sphere $B=\{p\}\times S^1$ of the $2$-handle; the sphere $A$ obtained by the finger move meets $B$ transversely in exactly three points with local signs $+1,+1,-1$. [F2, given]

2.1 By [F3] the oriented intersection number is the sum $1+1-1=1$, a unit in $\mathbb Z$, and the mod-2 number is the cardinality $3\equiv1$ modulo $2$, a unit in $\mathbb Z_2$; the geometric intersection set has three points and the two spheres do not meet in one point. [F3, step 1.1]

3.1 Reading the sphere as the attaching sphere of a $3$-handle attached to $N$ and the circle as the belt sphere of the $2$-handle, [F1] gives matrix entry $1$: a unit entry, but not a geometrically cancelling configuration. Hence the attaching spheres do not satisfy the single-point hypothesis of [F4], the cancellation theorem does not apply, and no single-point conclusion follows from the matrix alone. This inserted finger pair can be removed by the inverse finger isotopy of [F2]. [F1, F4, F5, step 2.1] ∎
