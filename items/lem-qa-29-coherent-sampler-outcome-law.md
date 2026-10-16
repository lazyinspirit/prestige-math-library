---
id: lem-qa-29-coherent-sampler-outcome-law
kind: lemma
title: "Measurement law of a coherent sampler"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-29-coherent-sampler
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - def-qc-pure-state-and-ray
  - def-qc-density-operator
  - thm-qc-unit-vector-projector-is-density
  - def-qc-projective-measurement
  - def-qc-dirac-notation-conversion
  - thm-qc-dirac-notation-coordinate-identity
  - def-trace-of-an-endomorphism
  - thm-trace-of-ab-equals-trace-of-ba
  - def-finite-probability-space-and-event
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses finite orthonormal bases and finite sums."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Sections 2–3"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "John Watrous, The Theory of Quantum Information, Sections 2.1–2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For a coherent sampler $V$ with output state $|\psi\rangle=\sum_x\sqrt{p_x}|x\rangle|g(x)\rangle|w_x\rangle$ as in [[def-qa-29-coherent-sampler]], projective measurement of the sample register returns $x$ with probability $p_x$. If the value register is measured too, the pair $(x,g(x))$ has the same probability. The work register is not required to be measured, and work states for different labels need not be orthogonal.

## Facts & Assumptions

**Given:** The coherent sampler, its finite product registers, and the projective computational-basis measurement of the sample register.

[F1] [[def-qa-29-coherent-sampler]]: the output is the displayed finite sum with $p_x\ge0$, $\sum_xp_x=1$, and unit work vectors.

[F2] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: distinct sample labels are orthogonal computational-basis vectors.

[F3] [[def-qc-tensor-register-and-permutation]]: the product register has the factorwise inner product and its ordered computational product basis.

[F4] [[def-qc-projective-measurement]]: a projective measurement assigns weight $\operatorname{tr}(\rho P_x)$ to its projection $P_x$.

[F5] [[thm-qc-unit-vector-projector-is-density]]: for a unit vector $\psi$, $|\psi\rangle\langle\psi|$ is a density operator.

[F6] [[def-qc-dirac-notation-conversion]] and [[thm-qc-dirac-notation-coordinate-identity]]: $|u\rangle\langle v|$ has matrix $[u][v]^\dagger$ in an ordered orthonormal basis.

[F7] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in any basis.

[F8] [[thm-trace-of-ab-equals-trace-of-ba]]: $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ for compatible finite-dimensional maps.

## Proof
1.1 Since $V$ is unitary and $|0\rangle$ is a unit vector, $|\psi\rangle=V|0\rangle$ has norm one. Thus [F5] supplies the density operator $\rho=|\psi\rangle\langle\psi|$ required by [F4]. [given, F1, F4, F5]

1.2 For each sample label $x$, let $P_x=|x\rangle\langle x|\otimes I_{\rm value}\otimes I_{\rm work}$. The distinct orthonormal sample labels in [F2] make these mutually orthogonal projections. If the labels do not exhaust the sample basis, include the residual projection $P_\perp=I-\sum_{x\in X}P_x$; it satisfies $P_\perp|\psi\rangle=0$ by [F1], so its measurement probability is zero. By [F3], the projection of $|\psi\rangle$ is $P_x|\psi\rangle=\sqrt{p_x}|x\rangle|g(x)\rangle|w_x\rangle$, so $\|P_x\psi\|^2=p_x$. [F1, F2, F3, algebra]

2.1 By cyclicity [F8], $\operatorname{tr}(\rho P_x)=\operatorname{tr}(P_x|\psi\rangle\langle\psi|)$. The rank-one map here is $|P_x\psi\rangle\langle\psi|$; [F6]–[F7] make its trace $\langle P_x\psi,\psi\rangle_{\rm root}$. Since $P_x$ is an orthogonal projection, self-adjointness gives $\langle P_x\psi,(I-P_x)\psi\rangle=\langle\psi,P_x(I-P_x)\psi\rangle=0$. Thus $\langle P_x\psi,\psi\rangle=\|P_x\psi\|^2=p_x$ by step 1.2. The measurement definition [F4] therefore assigns probability $p_x$. [F4, F6, F7, F8, step 1.2, algebra]

3.1 Measuring value as well refines the event $x$ by a computational-basis value outcome. The sample component $|x\rangle$ is orthogonal to every other sample label, and its value register is the single basis vector $|g(x)\rangle$; summing over work outcomes leaves squared norm $p_x\|w_x\|^2=p_x$. Distinct work states are not used to separate sample labels. [F1, F2, F3, step 1.2, algebra] ∎