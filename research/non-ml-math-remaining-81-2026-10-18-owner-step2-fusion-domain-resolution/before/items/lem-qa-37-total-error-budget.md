---
id: lem-qa-37-total-error-budget
kind: lemma
title: "Finite braid compilation and adiabatic error budget"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - thm-qa-37-jrs-leakage-bound
  - def-qa-37-finite-adiabatic-braid-input
  - def-qa-37-phase-reference-cost
  - lem-qa-21-pure-state-trace-distance-from-vector-error
  - thm-qc-measurement-variation-at-most-trace-distance
  - thm-qc-trace-norm-duality-and-norm-properties
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-density-operator
justified_by: []
axiom_use: "None; this is a finite norm and probability estimate."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation"
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: "Theorem 3, projector and leakage estimate only, PDF pp. 8–12."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, operator error under finite products, PDF pp. 26–29."
---

## Statement

Let $A_0$ and $A_1$ be the initial and endpoint isometries in a finite
adiabatic braid input, let $V$ be the ideal logical unitary, and let $W_c$ be
a compiled logical unitary. Suppose
$$\|W_c-V\|_{\rm op}\le\epsilon_c,\qquad \|P(1)U_T(1)A_0-A_1V\|_{\rm op}\le\epsilon_{\rm tr},$$
and let the JRS leakage amplitude be bounded by $A_m(1)$. Fix a finite POVM $\mathsf M$ on the physical output space. If the
implemented measurement distribution differs from the distribution of this
same $\mathsf M$ on $U_T(1)A_0\rho A_0^*U_T(1)^*$ by at most $\epsilon_m$
in total variation, then for every input density operator $\rho$ the total
measured-output variation from the ideal compiled output
$A_1W_c\rho W_c^*A_1^*$ is at most
$$\epsilon_c+\epsilon_{\rm tr}+A_m(1)+\epsilon_m.$$
The transport mismatch is an explicit independent premise; the JRS estimate
bounds leakage only.

## Facts & Assumptions

**Given:** The finite adiabatic input, its JRS leakage bound, compiled and
ideal logical unitaries, an independent in-band transport bound, a finite
measurement, and its implementation-variation bound $\epsilon_m$.

[F1] JRS bounds the leakage amplitude of the followed band by $A_m(1)$.
[[thm-qa-37-jrs-leakage-bound]]

[F2] Pure-state trace distance is bounded by the difference of unit vectors.
[[lem-qa-21-pure-state-trace-distance-from-vector-error]]

[F3] Finite POVM output variation is bounded by trace distance.
[[thm-qc-measurement-variation-at-most-trace-distance]]

[F4] The trace norm is homogeneous and satisfies the triangle inequality.
[[thm-qc-trace-norm-duality-and-norm-properties]]

[F5] A finite-dimensional density operator is a convex combination of pure
state projectors, with nonnegative weights summing to one.
[[thm-complex-spectral-theorem-for-normal-endomorphisms]]
[[def-qc-density-operator]]

## Proof

1.1 Put $S=U_T(1)A_0$ and $T_c=A_1W_c$, both isometries. With $Q=I-P(1)$, decompose $S-T_c=QS+\bigl(P(1)S-A_1V\bigr)+A_1(V-W_c).$ Since $A_1V$ lies in $\operatorname{ran}P(1)$, this identity is exact. The three terms have operator norms at most $A_m(1)$ by [F1], $\epsilon_{\rm tr}$ by the transport premise, and $\epsilon_c$ because $A_1$ is an isometry. The triangle inequality gives $\|S-T_c\|_{\rm op}\le A_m(1)+\epsilon_{\rm tr}+\epsilon_c$. [F1, given, algebra]

2.1 For a pure logical input $|\psi\rangle$, the output vectors $S\psi$ and $T_c\psi$ are unit vectors and differ by at most the step 1.1 operator bound. [F2] therefore bounds their output trace distance by that same number. For mixed $\rho$, decompose it as $\sum_jp_j|\psi_j\rangle\langle\psi_j|$ by [F5]; trace-norm triangle and homogeneity [F4] give the same bound after mixing. Applying [F3] bounds exact-measurement total variation by $A_m(1)+\epsilon_{\rm tr}+\epsilon_c$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 The implemented measurement differs from the exact output measurement by at most $\epsilon_m$ by hypothesis. The total-variation triangle inequality adds this amount to step 2.1 and gives the claimed budget. The phase of each compiled braid is included in $W_c$ or corrected according to the phase-reference record; no phase is omitted. [step 2.1, given, algebra] ∎
