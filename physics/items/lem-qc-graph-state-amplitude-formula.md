---
id: lem-qc-graph-state-amplitude-formula
kind: lemma
title: "Computational-basis amplitudes of a graph state"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-graph-state, def-qc-ordered-bitstring-encoding, def-qc-tensor-register-and-permutation, def-qc-controlled-phase-rotation]
justified_by: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "M. Hein et al., Entanglement in graph states and its applications, arXiv:quant-ph/0602096, Definition Graph States I, p. 14"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, pp. 3–5"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let $G=(V,E)$ be an ordered finite simple graph with $n=|V|$. In the ordered
computational basis indexed by $x\in\mathbb F_2^V$,

$$ |G\rangle=2^{-n/2}\sum_{x\in\mathbb F_2^V}(-1)^{\sum_{\{u,v\}\in E}x_ux_v}|x\rangle, $$

where the exponent is evaluated as an integer and only its parity affects the
sign.

## Facts & Assumptions

**Given:** The edge-product definition of $|G\rangle$ on the ordered register.

[F1] The graph-state definition gives the ordered finite register,
computational basis, and finite edge-gate product
([[def-qc-graph-state]], [[def-qc-ordered-bitstring-encoding]],
[[def-qc-tensor-register-and-permutation]]).

[F2] The controlled-phase definition gives
$CZ|x_ux_v\rangle=(-1)^{x_ux_v}|x_ux_v\rangle$ at angle $\pi$
([[def-qc-controlled-phase-rotation]]).

## Proof


1.1 Tensoring $|+\rangle=2^{-1/2}(|0\rangle+|1\rangle)$ over the ordered finite vertex set gives $|+\rangle^{\otimes V}=2^{-n/2}\sum_{x\in\mathbb F_2^V}|x\rangle$. For $n=0$ this is the single empty tuple with coefficient one. [F1, algebra]

1.2 By [F2], applying $CZ_{uv}$ to a basis vector $|x\rangle$ multiplies it by $(-1)^{x_ux_v}$ and leaves its basis label unchanged. Thus the lexicographically ordered edge product multiplies $|x\rangle$ by the product of these signs over all edges. [F1, F2, algebra]

2.1 Multiplying the signs gives $(-1)^{\sum_{\{u,v\}\in E}x_ux_v}$, so substituting the expansion from step 1.1 into the graph-state definition proves the formula, including the empty-edge and empty-vertex cases. [step 1.1, step 1.2, algebra] ∎

