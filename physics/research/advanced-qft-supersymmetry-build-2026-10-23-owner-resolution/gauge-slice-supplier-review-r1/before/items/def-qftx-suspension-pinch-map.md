---
id: def-qftx-suspension-pinch-map
kind: definition
title: Reduced suspension pinch map
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF; the definition uses no choice."
deps:
  - def-reduced-cone-suspension-and-cofiber-sequence
  - thm-quotient-universal-property
dependency_roles:
  def-reduced-cone-suspension-and-cofiber-sequence: mathematical-premise
  thm-quotient-universal-property: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Appendix 4"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.L, printed pp. 487–490: suspension and pinch-map convention."
    - title: "J. Peter May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56; reduced cofiber and suspension convention."
verification:
  precheck: pending
---
## Definition

Let $(Z,z_0)$ be a based topological space. Define its reduced suspension as $\Sigma Z=(Z\times[0,1])/(Z\times\{0,1\}\cup\{z_0\}\times[0,1])$, with the collapsed subset as basepoint. Let $\iota_1,\iota_2:\Sigma Z\to\Sigma Z\vee\Sigma Z$ be the wedge inclusions. The reduced suspension pinch map $p_Z:\Sigma Z\to\Sigma Z\vee\Sigma Z$ is induced by
$$p_Z([z,t])=\begin{cases}\iota_1([z,2t]),&0\le t\le\tfrac12,\\\iota_2([z,2t-1]),&\tfrac12\le t\le1.\end{cases}$$
At $t=\tfrac12$ both values are the wedge basepoint.

## Definition references

[Hatcher, Algebraic Topology, Appendix §4.L](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[May, A Concise Course in Algebraic Topology, Chapter 7](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

## Facts & Assumptions

**Given:** The based space and reduced suspension quotient in the Definition.

[F1] The reduced suspension is the quotient of $Z\times[0,1]$ by both end slices and the basepoint track; the wedge is the based coproduct. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F2] A map constant on the equivalence classes of a quotient descends uniquely to a continuous map on the quotient. [[thm-quotient-universal-property]]

## Verification

1.1 On the closed subspaces $Z\times[0,\tfrac12]$ and $Z\times[\tfrac12,1]$, the two formulas in the Definition are continuous. They agree at $t=\tfrac12$, since each suspension endpoint is collapsed, and they send the basepoint track and both outer end slices to the wedge basepoint. For any closed subset $C$ of the wedge, the preimage under each restricted formula is closed in its closed half, hence closed in $Z\times[0,1]$; their finite union is closed. Thus the pasted map is continuous and constant on every equivalence class of the reduced suspension quotient. [F1, given, construct]

2.1 By [F2], the map descends uniquely and continuously to $p_Z:\Sigma Z\to\Sigma Z\vee\Sigma Z$. On the first half it is the first wedge inclusion with linear rescaling of the suspension coordinate, and on the second half it is the second inclusion with linear rescaling; the midpoint maps to the common basepoint. Thus the displayed formula is well-defined at all endpoints and defines the reduced suspension pinch map. [F1, F2, step 1.1, algebra] ∎

