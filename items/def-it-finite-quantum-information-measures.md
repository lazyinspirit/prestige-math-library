---
id: def-it-finite-quantum-information-measures
kind: definition
title: Finite quantum mutual, conditional, and conditional mutual information
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [ def-it-von-neumann-entropy, lem-it-partial-traces-of-a-state-are-states, def-qc-density-operator, def-non-negative-and-positive-operator, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-qc-partial-trace, def-qc-first-factor-partial-trace, def-qc-tensor-register-and-permutation, thm-qc-wire-permutation-is-unitary, thm-trace-of-ab-equals-trace-of-ba, thm-adjoint-exists-and-is-unique-in-finite-dimension ]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§11.1 and 11.7"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

For a finite bipartite state $\rho_{AB}$ on the ordered product $H_A\otimes H_B$, write $\rho_A=\operatorname{Tr}_B\rho_{AB}$ and $\rho_B=\operatorname{Tr}_A\rho_{AB}$, using the partial traces in [[def-qc-partial-trace]] and [[def-qc-first-factor-partial-trace]]. They are states by [[lem-it-partial-traces-of-a-state-are-states]]. Define

$$S(A)_\rho:=S(\rho_A),\qquad S(A\mid B)_\rho:=S(\rho_{AB})-S(\rho_B),\qquad I(A:B)_\rho:=S(\rho_A)+S(\rho_B)-S(\rho_{AB}).$$

For a finite tripartite state $\rho_{ABC}$ on the ordered product $H_A\otimes H_B\otimes H_C$, set $\rho_{AB}:=\operatorname{Tr}_{H_C}\rho_{ABC}$ after identifying the factors as $(H_A\otimes H_B)\otimes H_C$, and $\rho_{BC}:=\operatorname{Tr}_{H_A}\rho_{ABC}$ after identifying them as $H_A\otimes(H_B\otimes H_C)$. Let $P:H_A\otimes H_B\otimes H_C\to H_A\otimes H_C\otimes H_B$ be the wire permutation taking factor order $A,B,C$ to $A,C,B$ ([[def-qc-tensor-register-and-permutation]], [[thm-qc-wire-permutation-is-unitary]]) whose unique adjoint $P^*$ exists by [[thm-adjoint-exists-and-is-unique-in-finite-dimension]], and set $\rho_{AC}:=\operatorname{Tr}_{H_B}(P\rho_{ABC}P^*)$, tracing out the last factor. Because $P$ is unitary, $P\rho_{ABC}P^*$ is a state: unitary conjugation preserves non-negativity by the adjoint identity ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-non-negative-and-positive-operator]]) and preserves trace by cyclicity ([[thm-trace-of-ab-equals-trace-of-ba]]). Finally set $\rho_C:=\operatorname{Tr}_{H_B}\rho_{BC}$. All these marginals are density operators by applying [[lem-it-partial-traces-of-a-state-are-states]] after grouping factors. Define

$$I(A:B\mid C)_\rho:=S(\rho_{AC})+S(\rho_{BC})-S(\rho_C)-S(\rho_{ABC}).$$

These are finite-dimensional definitions only; no non-negativity of conditional entropy or conditional mutual information is part of the notation.

