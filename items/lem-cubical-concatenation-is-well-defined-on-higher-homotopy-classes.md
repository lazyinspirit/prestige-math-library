---
id: lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes
kind: lemma
title: Cubical concatenation is well defined on higher homotopy classes
deps: ["def-higher-homotopy-group-by-based-cubes", "lem-continuity-is-local-and-pastes", "thm-product-universal-property"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For $n\ge1$, the coordinate-1 concatenation in the cubical definition defines a representative-independent product on $\pi_n(X,x_0)$. The same construction works in each coordinate whose two opposite faces are fixed at $x_0$.

## Facts & Assumptions

[F1] Representatives and their homotopies fix every boundary face. [[def-higher-homotopy-group-by-based-cubes]]

[F2] Continuous pieces agreeing on a finite closed cover paste continuously. [[lem-continuity-is-local-and-pastes]]

[F3] Continuity into a product is coordinatewise. [[thm-product-universal-property]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The two affine maps $(s,u)\mapsto(2s,u)$ and $(s,u)\mapsto(2s-1,u)$ are continuous on the closed half-cubes. On their common face the values of $a,b$ are both $x_0$. Thus the concatenation is continuous by closed pasting. Its outer boundary maps to $x_0$, since either s is an endpoint or a coordinate of u is an endpoint. [F1, F2, F3]

2.1 If $A,B:I^n\times I\to X$ are boundary-fixed homotopies between the two respective pairs of representatives, paste $A(2s,u,t)$ and $B(2s-1,u,t)$. The seam values are $x_0$ for every t; the same boundary calculation applies. This is a continuous boundary-fixed homotopy between the concatenations. Permuting the selected coordinate with coordinate 1 gives the identical proof whenever its two faces are fixed. [F1, F2, F3, step 1.1] ∎
