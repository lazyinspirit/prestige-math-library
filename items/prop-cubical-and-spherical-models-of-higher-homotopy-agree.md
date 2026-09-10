---
id: prop-cubical-and-spherical-models-of-higher-homotopy-agree
kind: proposition
title: Cubical and spherical models of higher homotopy agree
deps: ["def-higher-homotopy-group-by-based-cubes", "lem-interval-exponential-law-and-quotient-homotopies", "thm-quotient-universal-property"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For $n\ge1$, a fixed orientation-preserving based homeomorphism
$$h:(I^n/\partial I^n,[\partial I^n])\longrightarrow(S^n,s_0)$$
induces $\pi_n(X,x_0)\cong[S^n,X]_*$, where homotopies fix the basepoint. Under the spherical pinch transported by $h$ from collapse of the coordinate-1 middle face, cubical concatenation agrees with the spherical pinch operation.

## Facts & Assumptions

[F1] Cubical maps and homotopies fix the boundary. [[def-higher-homotopy-group-by-based-cubes]]

[F2] Boundary-constant maps factor uniquely through the quotient. [[thm-quotient-universal-property]]

[F3] The product of a quotient with I is quotient. [[lem-interval-exponential-law-and-quotient-homotopies]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 After centering and doubling the cube, its interior is $(-1,1)^n$. The coordinate map $v_i\mapsto v_i/(1-|v_i|)$ is a homeomorphism to $\mathbb R^n$, with inverse $w_i\mapsto w_i/(1+|w_i|)$. Approaching the cube boundary sends the Euclidean norm to infinity, and conversely bounded images stay away from that boundary. Thus the map extends to a homeomorphism of the collapsed-boundary cube with $\mathbb R^n\cup\{\infty\}$. Inverse stereographic projection $w\mapsto(2w/(1+\|w\|^2),(\|w\|^2-1)/(1+\|w\|^2))$ identifies this compactification with $S^n$, taking the quotient point $[\partial I^n]$ to the north pole. Take that north pole as $s_0$ and choose the sphere orientation to agree with the cube interior; this gives the required based $h$. [algebra]

2.1 Every boundary-constant map descends uniquely by F2, and every based spherical map pulls back to a cubical map. For a boundary-fixed homotopy, F3 makes its descent across $(I^n\to I^n/\partial I^n)\times\mathrm{id}_I$ continuous. Pullback is the inverse and preserves endpoint maps. The bijections on maps therefore induce inverse bijections on homotopy classes. [F1, F2, F3, step 1.1]

3.1 Collapse also the middle face $s_1=1/2$. Each resulting half-cube with its boundary collapsed is an oriented based copy of the same sphere, using the positive affine rescalings $2s_1$ and $2s_1-1$ and the based homeomorphism $h$. The composite of this transported pinch with $a$ on the first copy and $b$ on the second pulls back to the defining formula for $a*b$. Hence the operations agree. [F1, F2, step 1.1, step 2.1] ∎
