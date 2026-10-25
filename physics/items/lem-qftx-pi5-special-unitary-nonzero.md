---
id: lem-qftx-pi5-special-unitary-nonzero
kind: lemma
title: "Nonvanishing of the fifth special-unitary homotopy group"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - lem-qftx-low-unitary-homotopy-inputs
  - lem-qftx-special-unitary-column-fibration
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-lower-dimensional-sphere-maps-are-based-nullhomotopic
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - def-axiom-of-choice
dependency_roles:
  lem-qftx-low-unitary-homotopy-inputs: mathematical-premise
  lem-qftx-special-unitary-column-fibration: mathematical-premise
  thm-long-exact-sequence-of-homotopy-groups-of-a-fibration: mathematical-premise
  thm-lower-dimensional-sphere-maps-are-based-nullhomotopic: mathematical-premise
  thm-based-sphere-maps-are-classified-by-geometric-degree: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; locally trivial bundles and exact sequences."
    - title: "Allen Hatcher, Algebraic Topology, Appendix"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.L, printed pp. 487–490 and 498–499; suspended Hopf composites."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; sphere fibrations."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

For every integer $N\ge2$, $\pi_5(SU(N))$ is nonzero. The claim is only nonvanishing; no full computation of these groups is asserted.

## Statement references

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Appendix §4.L](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The column fibration and exact sequence in ZF + AC.

[F1] $\pi_5(SU(2))\ne0$ and $\pi_4(SU(2))\cong\mathbb Z/2$. [[lem-qftx-low-unitary-homotopy-inputs]]

[F2] $SU(N-1)\to SU(N)\to S^{2N-1}$ is a Hurewicz fibration with the usual homotopy LES. [[lem-qftx-special-unitary-column-fibration]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] If $N\ge4$, then $\pi_5(S^{2N-1})=\pi_6(S^{2N-1})=0$ because both indices are below sphere dimension $2N-1\ge7$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F4] Degree identifies $\pi_5(S^5)$ with $\mathbb Z$. [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

## Proof

1.1 For $N=2$, the assertion is [F1]. For $N=3$, the LES of [F2] contains
$$\pi_5(SU(3))\longrightarrow\pi_5(S^5)\xrightarrow{\partial}\pi_4(SU(2)).$$
By [F1], the target of $\partial$ has two elements. The degree theorem [F4] gives $\pi_5(S^5)\cong\mathbb Z$, and every homomorphism from $\mathbb Z$ to a group of order two has kernel containing $2\mathbb Z$, which is nonzero. Exactness identifies that kernel with the image of $\pi_5(SU(3))$, so $\pi_5(SU(3))\ne0$. This argument makes no surjectivity assumption on $\partial$. [F1, F2, F4, algebra]

2.1 For $N\ge4$, [F3] and the LES [F2] make the inclusion-induced map $\pi_5(SU(N-1))\to\pi_5(SU(N))$ an isomorphism: its preceding and following sphere groups are $\pi_6(S^{2N-1})$ and $\pi_5(S^{2N-1})$, both zero. Induction from the nonzero $N=3$ case proves nonvanishing for every $N\ge4$, completing all cases. [F1, F2, F3, step 1.1, algebra] ∎

