---
id: thm-qc-exact-mixed-state-cloning-fidelity-criterion
kind: theorem
title: "Exact Mixed State Cloning Fidelity Criterion"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps: ["def-qc-fidelity", "def-qc-quantum-channel", "thm-qc-fidelity-data-processing-and-equality", "thm-qc-fidelity-range-equality-and-products"]
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
      locator: "§3.2.1–3.2.3, fidelity data processing; exact-cloning implication is proved locally."
    - title: "Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa, and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast"
      url: "https://arxiv.org/pdf/quant-ph/9511010"
      locator: "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
---

## Statement

Let $\rho_0,\rho_1$ be finite-dimensional density operators. If one channel $\Phi$ satisfies $\Phi(\rho_i)=\rho_i\otimes\rho_i$ for $i=0,1$, then $F(\rho_0,\rho_1)\in\{0,1\}$. Therefore the inputs are identical or have orthogonal supports.

## Facts & Assumptions

**Given:** States $\rho_0,\rho_1$ and a channel exactly cloning both.

[L1] Fidelity cannot decrease under a channel ([[thm-qc-fidelity-data-processing-and-equality]]); the QC06 proof is draft.

[L2] Fidelity is multiplicative on tensor products, lies in $[0,1]$, equals one exactly for equal states, and equals zero exactly for orthogonal supports ([[thm-qc-fidelity-range-equality-and-products]]); its QC06 proof is draft.

[L3] The output states of the exact cloning channel are $\rho_i\otimes\rho_i$ ([[def-qc-quantum-channel]], given hypothesis).

## Proof


1.1 Apply data processing [L1] to the channel and the two inputs, then use its exact outputs and the tensor-product formula [L2]: $$F(\rho_0,\rho_1)\le F(\rho_0\otimes\rho_0,\rho_1\otimes\rho_1)=F(\rho_0,\rho_1)^2.$$ Writing $f=F(\rho_0,\rho_1)\in[0,1]$, the inequality $f\le f^2$ forces $f=0$ or $f=1$, because $f(1-f)\le0$ and both factors are nonnegative. [given, L1, L2, L3, algebra]

2.1 If $f=1$, [L2] gives $\rho_0=\rho_1$. If $f=0$, [L2] gives orthogonality of their supports. These are the asserted alternatives. [step 1.1, L2] ∎

