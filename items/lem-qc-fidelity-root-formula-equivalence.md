---
id: lem-qc-fidelity-root-formula-equivalence
kind: lemma
title: "The two root-fidelity trace expressions agree"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: ["def-qc-fidelity", "def-qc-trace-norm", "thm-singular-value-decomposition", "thm-non-negative-square-root-exists-and-is-unique"]
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
      locator: "§3.2.1–3.2.3, equivalent trace expression for root fidelity."
---

## Statement

For density operators $\rho,\sigma$ on a finite-dimensional complex Hilbert space,
$$\|\sqrt\rho\,\sqrt\sigma\|_1=\operatorname{tr}\sqrt{\sqrt\rho\,\sigma\,\sqrt\rho}.$$

## Facts & Assumptions

**Given:** Density operators $\rho,\sigma$ on a finite-dimensional complex Hilbert space.

[F1] Root fidelity is defined by $F(\rho,\sigma)=\|\sqrt\rho\sqrt\sigma\|_1$ ([[def-qc-fidelity]]).

[L1] The finite trace norm is the sum of singular values, including zeros, and SVD supplies orthonormal left and right singular vectors ([[def-qc-trace-norm]], [[thm-singular-value-decomposition]]). The current QC01 trace-norm definition is present as a draft and uses this finite-map convention.

[F2] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

## Proof


1.1 Put $A=\sqrt\rho\sqrt\sigma$. Since $A^*=\sqrt\sigma\sqrt\rho$, we have $A^*A=\sqrt\sigma\,\rho\,\sqrt\sigma$ and $AA^*=\sqrt\rho\,\sigma\,\sqrt\rho$. Both are non-negative. By [L1], the eigenvalues of $A^*A$ and $AA^*$ are the squares of the singular values of $A$; because $A$ is an endomorphism, the SVD lists the same $d$ singular values on both sides, with zero multiplicity included. [given, L1, F2, algebra]

2.1 The unique non-negative square roots of $A^*A$ and $AA^*$ therefore have the same eigenvalue list, namely the singular values of $A$. Their traces both equal the sum of those singular values, which is $\|A\|_1$ by [L1]. Substituting $AA^*=\sqrt\rho\,\sigma\,\sqrt\rho$ proves the stated identity and, by [F1], its equivalent root-fidelity expression. [step 1.1, F1, L1, F2] ∎

