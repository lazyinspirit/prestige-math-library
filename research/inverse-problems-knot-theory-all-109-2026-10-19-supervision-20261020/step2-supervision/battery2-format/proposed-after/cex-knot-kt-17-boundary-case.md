---
id: cex-knot-kt-17-boundary-case
kind: counterexample
title: "The core pattern has a product companion torus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, boundary-parallel torus convention, printed p.12"
---

## Statement refuted

For every nontrivial companion knot and every pattern in its solid torus, the companion torus in the satellite exterior is essential.

## Statement references

[[def-satellite-pattern-companion-and-winding-number]]

## Construction

Let $K$ be any nontrivial knot. Take the core pattern $P=S^1\times\{0\}\subset V=S^1\times D^2$, choose its tubular neighbourhood to be a smaller concentric solid torus inside a companion neighbourhood $V=e(S^1\times D^2)$ of $K$, and use the induced companion embedding. Then $P(K)=K$. The companion torus is the boundary of the larger chosen neighbourhood, while the satellite exterior has boundary the boundary of the smaller tube around $K$.

## Facts & Assumptions

**Given:** The pattern, the companion embedding, and the two nested tubular neighbourhoods specified in the Counterexample.

[F1] [[def-satellite-pattern-companion-and-winding-number]] defines the core pattern, satellite knot, pattern exterior, and companion torus.

[F2] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines boundary-parallel torus and essential torus.

## Proof

1.1 The companion embedding sends the core $S^1\times\{0\}$ to $K$, so the satellite knot $P(K)$ is exactly $K$ with the specified smaller tubular neighbourhood. The companion torus is the boundary of the larger neighbourhood. [F1, given]

2.1 The shell between the two concentric tubular neighbourhoods is explicitly $T^2\times[0,1]$, by radial interpolation in the $D^2$ coordinate. It lies in the satellite exterior and has the companion torus and the satellite exterior boundary as its end tori. Thus the companion torus is boundary-parallel and, by [F2], is not essential. This refutes the unrestricted statement. [F1, F2, step 1.1, construct] ∎

## Remarks

This example shows why a nonproduct condition on the pattern exterior is needed in the essential-companion-torus lemma.

## Remarks references

[[lem-satellite-torus-is-essential]]
