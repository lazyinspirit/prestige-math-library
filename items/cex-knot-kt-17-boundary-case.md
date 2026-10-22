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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
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

## Facts & Assumptions

**Given:** The pattern, the companion embedding, and the two nested tubular neighbourhoods specified in the Counterexample.

[F1] [[def-satellite-pattern-companion-and-winding-number]] defines the core pattern, satellite knot, pattern exterior, and companion torus.

[F2] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines boundary-parallel torus and essential torus.

## Counterexample

**Given:** A nontrivial knot $K$ with companion solid torus $V=e(S^1\times D^2)$.

1.1 Take the core pattern $P=S^1\times\{0\}\subset V$ and choose its tubular neighbourhood $N(P)$ to be a smaller concentric solid torus. The companion embedding sends this core to $K$, so $P(K)=K$ with the smaller chosen tube, while the companion torus is the boundary of the larger tube. [F1, given, construct]

2.1 Radial interpolation in the $D^2$ coordinate identifies the shell between the two concentric tubes with $T^2\times[0,1]$. It lies in the satellite exterior and has the companion torus and the satellite exterior boundary as its ends. Thus the companion torus is boundary-parallel and is not essential by [F2]. This refutes the unrestricted statement. [F1, F2, step 1.1, construct] ∎

## Remarks

This example shows why a nonproduct condition on the pattern exterior is needed in the essential-companion-torus lemma.

## Remarks references

[[lem-satellite-torus-is-essential]]
