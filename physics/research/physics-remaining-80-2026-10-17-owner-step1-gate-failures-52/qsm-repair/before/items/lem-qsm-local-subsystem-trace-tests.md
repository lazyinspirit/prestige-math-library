---
id: lem-qsm-local-subsystem-trace-tests
kind: lemma
title: Subsystem expectations and reduced finite tensor densities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-local-finite-tensor-state
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-partial-trace-positive-and-trace-preserving
dependency_roles:
  def-qsm-local-finite-tensor-state: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  thm-qc-partial-trace-positive-and-trace-preserving: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §§2.1.2–2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 2, §§2.3–2.3.1
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
---

## Statement

Let $V_A,V_B$ be nonzero finite-dimensional tensor registers and let $ho$
be a finite tensor density on $V_A\otimes V_B$. Then
$$\rho_A:=\operatorname{Tr}_B\rho$$
is a finite tensor density on $V_A$. For every matrix $A$ on $V_A$,
$$\operatorname{Tr}(\rho_AA)=\operatorname{Tr}(\rho(A\otimes I_B)).$$
For a finite POVM $(M_a)_{a=1}^r$ on $V_A$, the trace pairings of its
outcomes in $\rho_A$ equal the trace pairings of the lifted effects
$M_a\otimes I_B$ in $\rho$.

## Facts & Assumptions

**Given:** The ordered tensor convention of [[def-qsm-local-finite-tensor-state]],
a density $\rho$ on $V_A\otimes V_B$, and a finite POVM when the last claim
is used.

[F1] [[def-qc-partial-trace]]: the partial trace contracts the second tensor
factor in the specified product basis.

[F2] [[thm-qc-partial-trace-characterization-and-basis-independence]]: its
trace-pairing identity is
$\operatorname{tr}((\operatorname{Tr}_B R)T)=\operatorname{tr}(R(T\otimes I_B))$.

[F3] [[thm-qc-partial-trace-positive-and-trace-preserving]]: partial trace
preserves non-negativity and total trace.

## Proof

1.1 By the coordinate definition [F1], $\rho_A$ is the second-factor partial
trace. Apply [F3] to the nonnegative trace-one operator $\rho$. It gives
$\rho_A\ge0$ and $\operatorname{Tr}\rho_A=\operatorname{Tr}\rho=1$;
therefore $\rho_A$ is a density by the definition in
[[def-qsm-local-finite-tensor-state]]. [given, F1, F3]

2.1 Apply [F2] with $R=\rho$ and $T=A$ to obtain the displayed expectation
identity. If $(M_a)$ is a POVM, substitute $A=M_a$ for each $a$; these are
exactly the outcome pairings for each lifted effect. [given, F2, algebra] ∎
