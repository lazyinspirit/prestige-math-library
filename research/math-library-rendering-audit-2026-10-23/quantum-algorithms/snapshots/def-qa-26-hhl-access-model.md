---
id: def-qa-26-hhl-access-model
kind: definition
title: "HHL state-preparation and simulation access model"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-26-qlsp-task
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - def-qa-20-simulation-error-and-cost-model
  - lem-qa-25-clean-subspace-unitary-hybrid
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Definition

For a Hermitian $H$ on a finite-dimensional register, with operator norm as in [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], the **HHL access instance** supplies: (i) a unitary $B$ with $B|0_{I,W}\rangle=|b/\|b\|\rangle_I|g_B\rangle_W$ for a fixed normalized work state $|g_B\rangle$ (which may be $|0_W\rangle$) and declared costs for $B,B^\dagger$ and any controlled forms used; (ii) for every requested real $t$ and tolerance $\eta$, a controlled simulation circuit $S_H(t,\eta)$ with operator-norm error at most $\eta$ from $e^{+iHt}$, and separately declared inverse/negative-time costs; and (iii) separate actual resource functions $C_B,C_{B^\dagger}$, $C_{\rm sim}(t,\eta)$, $C_\Psi(T,\epsilon_\Psi)$ for each forward or inverse sine-table preparation, $G_\Psi(T,\epsilon_\Psi)$ for its one-time classical table generation/data bits, $C_{\rm QFT}^{+/-}(T)$, $C_{\rm flag}(\kappa,\eta_R)$, $C_{\rm arith}(T,\kappa,\epsilon)$, $C_{\rm ref}$, and $C_{\rm ver}$, and costs for reversible arithmetic, registers and finite-precision gate synthesis. Here $C_{\rm QFT}^{-}$ is the negative-sign Fourier circuit and $C_{\rm QFT}^{+}$ its positive-sign inverse, $C_{\rm arith}$ is the per-attempt reversible decode/filter arithmetic cost, and $C_{\rm ref},C_{\rm ver}$ are the per-call reflection and well-verification costs. These functions count the stated circuit implementation in the chosen gate/access model; they assert no polylogarithmic bound on table generation or rotation synthesis. The positive exponential sign is the OP5 convention. An implementation of $H$ from matrix entries or a sparse oracle is additional data and must include its own proof and cost. A bare matrix, sparsity promise, or list of amplitudes is not a circuit. A rational scale $\Lambda\ge\|H\|$ may be supplied; after replacing $H$ by $H/\Lambda$, the supported gap $\gamma$ gives $\kappa=\Lambda/\gamma$.

**Clean-workspace simulation mode.** The original full-operator-norm access mode remains admissible. Alternatively, supply a unitary dilation $S$ with a fixed clean-work embedding $J$ and $\|SJ-Je^{+iHt}\|_{\rm op}\le\eta$, including arbitrary timing/control/reference registers. The ideal operation leaves this simulator workspace in zero; other ideal HHL operations do not touch it. Actual output work may be dirty. Supply actual circuit inverses and controls and charge their full workspace and query costs. [[lem-qa-25-clean-subspace-unitary-hybrid]] proves the same clean-input error for the actual adjoint, coherent controls and arbitrary references, and proves accumulation along the ideal all-clean trajectory. The inverse used in HHL uncomputation/amplification is the literal reverse physical circuit, not a separately approximated negative-time routine. Include simulator work in the joint output comparison and the ideal all-zero algorithm registers. A full-space error on arbitrary dirty inputs is neither required nor inferred in this alternative mode.
