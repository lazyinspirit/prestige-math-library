---
id: pthm-qsm-local-qualified-shell-measurements
kind: physics-theorem
title: Fixed-block measurement predictions under independent shell preparation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
deps:
  - thm-qsm-local-independent-shell-equivalence
  - post-qsm-local-ensemble-preparations
  - post-nrqm-framework-observable-and-probability
  - def-qsm-local-finite-tensor-state
dependency_roles:
  thm-qsm-local-independent-shell-equivalence: mathematical-premise
  post-qsm-local-ensemble-preparations: physical-assumption
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  def-qsm-local-finite-tensor-state: mathematical-premise
physical_scope: "Conditional predictions for a specified finite q-level noninteracting tensor model, adopted canonical and uniform-band preparations, a fixed finite subsystem and a declared finite POVM. No detector frequencies, thermalization, interacting or growing-block conclusion is asserted."
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

Assume the physical preparation postulate
[[post-qsm-local-ensemble-preparations]], and the exact independent-shell
hypotheses and notation of [[thm-qsm-local-independent-shell-equivalence]].
For each fixed $k$ and each fixed $r$-outcome POVM $(M_a)_{a=1}^r$ on the
$k$-site register, the shell and canonical model outcome probabilities
$p^{\rm sh}_{N,a}$ and $p^{\rm can}_{N,a}$ satisfy
$$\sum_{a=1}^r|p^{\rm sh}_{N,a}-p^{\rm can}_{N,a}|\longrightarrow0.$$
This is a conditional prediction for the adopted states and specified
measurement; it supplies no empirical frequencies or sampling inference.

## Facts & Assumptions

**Given:** An integer $q\ge1$, real finite additive levels, finite $\beta$,
widths satisfying $\delta_N\ge q\sum_j|e_j|$ and $\delta_N/N\to0$, fixed
$k,r$, and a fixed finite POVM on the first $k$ sites.

[A1] [[post-qsm-local-ensemble-preparations]]: under the adopted preparation
rule the two states are the canonical density and the normalized uniform
band density, and P2 assigns POVM probabilities by trace pairings.

[F1] [[thm-qsm-local-independent-shell-equivalence]]: the fixed-$k$ reduced
states converge in trace norm.

[F2] [[def-qsm-local-finite-tensor-state]]: each POVM outcome is a positive
effect, and the finite trace pairing is the expectation used here.

## Proof

1.1 By [A1], the local laws are
$p^{\rm sh}_{N,a}=\operatorname{Tr}(\sigma_{N,k}M_a)$ and
$p^{\rm can}_{N,a}=\operatorname{Tr}(\gamma_kM_a)$. Put
$D_N=\sigma_{N,k}-\gamma_k$. The states are diagonal in the common product
energy basis, so for each outcome
$$\operatorname{Tr}(D_NM_a)=\sum_x (u_N(x)-p^{\otimes k}(x))(M_a)_{xx}.$$
For every basis label $x$, positivity and completeness of the POVM imply
$0\le(M_a)_{xx}\le1$ and $\sum_a(M_a)_{xx}=1$. [given, A1, F2,
algebra]

2.1 Apply the triangle inequality and sum over the finite outcomes:
$$\sum_a|\operatorname{Tr}(D_NM_a)| \le\sum_x|u_N(x)-p^{\otimes k}(x)|\sum_a(M_a)_{xx} =\sum_x|u_N(x)-p^{\otimes k}(x)|=\|D_N\|_1.$$
By [F1] this last quantity tends to zero for fixed $k$, proving the claim.
The calculation compares model probabilities only. It makes no inference
from finite observations, which would require separately declared sampling
and apparatus assumptions. [A1, F1, step 1.1, algebra] ∎
