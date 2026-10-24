---
id: ex-qftx-zero-fi-flat-framed-sector
kind: example
title: The zero-charge regular datum and framed flat ASD sector
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence-examples
dependency_level: 13
deps:
  - thm-qftx-zero-fi-regular-adhm-asd-correspondence
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-qftx-instanton-number-and-asd-sector
  - thm-qftx-yang-mills-selfdual-action-bound
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-a-flat-connection-admits-local-parallel-frames
  - prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
dependency_roles:
  thm-qftx-zero-fi-regular-adhm-asd-correspondence: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  thm-qftx-yang-mills-selfdual-action-bound: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  thm-a-flat-connection-admits-local-parallel-frames: mathematical-premise
  prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§§2–3, printed pp. 3–5: charge-zero boundary and the framed Ward setting."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed p. 17: framing convention and locally-free locus."
verification:
  precheck: pass
---

## Example

For every $N\geq2$, the $k=0$ regular zero-FI ADHM quotient consists of the unique empty datum, and the framed ASD sector with $q_N=0$ consists of the framed flat connection on the trivial rank-$N$ bundle; the framing removes its based-gauge stabilizer.

## Example references

[[thm-qftx-zero-fi-regular-adhm-asd-correspondence]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-qftx-yang-mills-selfdual-action-bound]]

[[thm-higher-dimensional-spheres-are-simply-connected]]

[Donaldson, §§2–3, printed pp. 3–5](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed p. 17](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** $N\ge2$, $k=0$, the raw ADHM definitions, and a smooth framed unitary ASD connection on the round $S^4$ with $q_N=0$.

[F1] For $V=\mathbb C^0$, each ADHM endomorphism or framing map is the unique zero-dimensional map; stability and costability hold vacuously, and both $U(0)$ and $GL(0)$ are trivial. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] For $B(X,Y)=-\operatorname{tr}_N(XY)$, the instanton charge $q_B$ equals $q_N$. On an ASD connection, $q_B=0$ implies $F_A=0$. [[def-qftx-instanton-number-and-asd-sector]], [[thm-qftx-yang-mills-selfdual-action-bound]]

[F3] The sphere $S^4$ is simply connected. A flat connection has local parallel frames and path-independent parallel transport on coordinate balls. [[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-a-flat-connection-admits-local-parallel-frames]], [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]]

## Proof

**Given:** The hypotheses in the Example.

1.1 When $k=0$, $V=0$. There is exactly one quadruple of maps, all with zero-dimensional domain or codomain. Both moment equations are the unique equality of endomorphisms of $0$; the span of the empty family is $0=V$, and no nonzero subspace of $V$ exists. Thus this datum is stable and costable, and the quotient by $U(0)$ is one point. [F1, algebra]

1.2 For the framed ASD connection, $q_B=q_N=0$ by [F2], so the ASD action bound gives $F_A=0$. For two piecewise smooth paths from $\infty$ to $x$, their concatenation is a loop and is null-homotopic by [F3]. Pull back a cover by coordinate balls with local parallel frames to the compact homotopy square; a Lebesgue number gives a finite subdivision with each cell mapped into one such ball. Transport along a continuous edge is defined using that ball's parallel frame; on overlaps the change between parallel frames is constant, so the definition is independent of the chosen ball. Each cell has identity boundary transport, and multiplying over the subdivision cancels all interior edges. Therefore the loop holonomy is identity and transport from $\infty$ is path-independent. The resulting sections of a framed orthonormal basis are smooth and parallel in local parallel frames, so the bundle with connection is framed-isomorphic to the trivial bundle with its flat connection. The framing fixes that isomorphism at $\infty$. Any covariantly constant unitary automorphism preserving the framing is identity, since its value at every point is its parallel transport from the identity at $\infty$. Thus the framed flat gauge class is unique and has no residual based stabilizer. [F2, F3, construct]

2.1 The conditional correspondence of [[thm-qftx-zero-fi-regular-adhm-asd-correspondence]] sends the unique zero-dimensional datum to this unique framed flat ASD class and preserves $q_N=0$. This verifies the $k=0$ boundary without an irreducibility assumption. [F1, F2, step 1.1, step 1.2] ∎
