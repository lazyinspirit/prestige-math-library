---
id: ex-qc-orthogonal-state-trace-distance
kind: example
title: "Trace distance of orthogonal pure states"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["thm-qc-trace-distance-range-and-equality", "def-qc-pure-state-and-ray", "thm-qc-ray-projector-well-defined-and-bijective", "def-qc-povm-and-outcome-law", "def-qc-trace-distance", "thm-singular-value-decomposition"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.1.1–3.1.2, binary state discrimination."
---

## Example

Let $H=\mathbb C^2$ with orthonormal computational basis $|0\rangle,|1\rangle$, and set $\rho=|0\rangle\langle0|$ and $\sigma=|1\rangle\langle1|$. Their trace distance is maximal, and the computational-basis projective measurement distinguishes them with total variation one.

## Facts & Assumptions

**Given:** The two orthogonal computational-basis unit vectors in $\mathbb C^2$.

[F1] The rank-one operators associated with orthonormal unit vectors are rank-one orthogonal projections ([[def-qc-pure-state-and-ray]], [[thm-qc-ray-projector-well-defined-and-bijective]]).

[F2] $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$ ([[def-qc-trace-distance]]).

[F3] A PVM with effects $E_a$ has outcome law $p_a=\operatorname{tr}(\rho E_a)$ ([[def-qc-povm-and-outcome-law]]).

## Verification


1.1 In the basis $|0\rangle,|1\rangle$, $\rho-\sigma=\operatorname{diag}(1,-1)$, whose singular values are $1,1$. Thus $\|\rho-\sigma\|_1=2$ and [F2] gives $D(\rho,\sigma)=1$. [given, F1, F2]

2.1 The computational-basis PVM has effects $E_0=|0\rangle\langle0|$ and $E_1=|1\rangle\langle1|$. By [F3], the outcome laws are $(1,0)$ on $\rho$ and $(0,1)$ on $\sigma$, with total variation $\tfrac12(|1-0|+|0-1|)=1$. This equals the trace distance from step 1.1. [given, F1, F3, step 1.1, algebra] ∎

