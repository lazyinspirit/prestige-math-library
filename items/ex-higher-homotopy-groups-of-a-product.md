---
id: ex-higher-homotopy-groups-of-a-product
kind: example
title: Higher homotopy groups of a product
deps: ["prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant", "thm-product-universal-property"]
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
      locator: §4.1 Proposition 4.2 p.343, finite-product specialization
status: published
origin: pipeline
proof_strategy: direct
---

## Example

For based spaces X,Y and n≥1,
$$\pi_n(X\times Y,(x_0,y_0))\cong\pi_n(X,x_0)\times\pi_n(Y,y_0),$$
and their pointed component sets also correspond. No path-connectedness assumption is needed. For a concrete instance, take X=Y=R based at 0: the loop $a(t)=(t(1-t),2t(1-t))$ represents the pair of its two coordinate classes, and its product with $b(t)=(3t(1-t),0)$ has first-half value $(2t(1-2t),4t(1-2t))$ and second-half value $(3(2t-1)(2-2t),0)$.

## Facts & Assumptions

[F1] A product-valued map is continuous exactly when both coordinates are continuous. [[thm-product-universal-property]]

[F2] Projections act by based postcomposition and preserve cubical products. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]


## Verification

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 Send [a] to $([p_Xa],[p_Ya])$. Projecting a boundary-fixed homotopy gives boundary-fixed coordinate homotopies, so the map is well-defined. Conversely pair any representatives u,v to obtain $(u,v):I^n\to X\times Y$, continuous by F1 and constant at (x0,y0) on the boundary. Pairing the two homotopies proves independence of representatives. The composites are the identity because projections of (u,v) are u,v and pairing the projections of a recovers a pointwise. [F1, F2]

2.1 Projection commutes with both half-cube formulas, hence the bijection is a homomorphism by F2. Two product points are joined by a path exactly when both coordinate pairs are joined: project a path in one direction and pair the two paths in the other using F1. This proves the component statement. In the displayed instance, substitution of 2t and 2t−1 gives exactly the two polynomial formulas; both equal (0,0) at their common endpoint t=1/2. The homotopy $(1-s)a(t)$ also contracts that particular loop, with both endpoints fixed. [F1, F2, step 1.1] ∎
