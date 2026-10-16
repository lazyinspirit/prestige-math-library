---
id: thm-qa-27-vtaa-amplification
kind: theorem
title: "Variable-time amplitude-amplification theorem"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-27-variable-time-model
  - alg-qa-12-amplitude-amplification
  - thm-qa-12-amplification-rotation-correctness
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-circuit-denotational-semantics
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and §§3.1–3.3, PDF pp.1–8."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: "https://arxiv.org/pdf/1511.02306"
      locator: "Theorem 21 and proof, PDF pp.25–29."
---

## Statement

Let a finite coherent variable-time algorithm satisfy [[def-qa-27-variable-time-model]], have $m$ stopping times and $T_{\max}\ge1$, RMS stopping time $T_{\rm av}$, and good-output probability $p_{\rm succ}>0$. Under the reversible stopping semantics of the model and supplied inverse and coherent access to every operation used, Ambainis' variable-time amplification procedure produces the conditional good state with success probability at least $1/2$ using time
$$O\!\left(T_{\max}\sqrt{\ln L_T}+\frac{T_{\rm av}}{\sqrt{p_{\rm succ}}}(\ln L_T)^{3/2}\right),\qquad L_T=\max(2,T_{\max}).$$
Repeating this finite amplified procedure $O(\ln(1/\rho))$ times gives success at least $1-\rho$ for $0<\rho<1/2$. The operation count is in the supplied stage-time metric; each controlled, inverse, reflection, preparation, and classical-construction cost remains explicit.

## Proof status

The theorem is an established source result, but its local proof is not supplied; this item is escalated. The complete proof route is Ambainis' staged amplification construction and cost sum in §§3.1–3.3 (PDF pp.4–8), with the exact RMS stopping-time and inverse-access hypotheses stated above. The capped OP6 wrapper used by [[alg-qa-27-cks-variable-time-linear-solver]] also needs a separate argument that its finite `RelProb`, `CapAmplify`, common-normalization and failure branches preserve the source theorem's bounds; this statement does not certify that changed construction merely by citation.
