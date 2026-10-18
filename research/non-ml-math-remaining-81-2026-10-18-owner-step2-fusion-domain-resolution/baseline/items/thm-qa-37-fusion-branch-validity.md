---
id: thm-qa-37-fusion-branch-validity
kind: theorem
title: "Fusion measurement branches are normalized exactly when nonzero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-qa-37-fusion-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - thm-qc-zero-probability-branch-has-no-conditioned-state
justified_by: []
axiom_use: "None; finite projective measurement identities are choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.14–9.15, fusion-channel measurement, PDF pp. 53–59."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, fusion spaces and readout conventions, PDF pp. 53–57."
---

## Statement

Let $(P_a)_{a\in\mathcal A}$ be the finite fusion-channel projectors of
[[def-qa-37-fusion-measurement]] on a finite-dimensional fusion space $H$,
and let $\psi\in H$ be a unit vector. The channel probabilities
$p_a=\|P_a\psi\|^2$ are nonnegative and sum to one. If $p_a>0$, the
conditional branch is the unit vector $P_a\psi/\sqrt{p_a}$. If $p_a=0$,
then $P_a\psi=0$ and no normalized conditional state is defined.

## Facts & Assumptions

**Given:** A finite orthogonal resolution $(P_a)$ of the identity and a unit
input vector $\psi$.

[F1] The channel family is a finite projective measurement: its projections
are pairwise orthogonal and sum to identity.
[[def-qa-37-fusion-measurement]]

[F2] The projective measurement outcome law assigns probability
$\langle\psi,P_a\psi\rangle$ to outcome $a$.
[[thm-qc-projective-measurement-outcome-law]]

[F3] For positive-probability outcomes the conditional pure state is the
normalized projection, and for a zero-probability outcome no conditional
state is defined. [[thm-qc-projective-conditional-state]]

[F4] The zero-probability case is characterized by a vanishing projected
vector. [[thm-qc-zero-probability-branch-has-no-conditioned-state]]

## Proof

1.1 Since each $P_a$ is an orthogonal projection, $\langle\psi,P_a\psi\rangle=\langle P_a\psi,P_a\psi\rangle=\|P_a\psi\|^2\ge0$. The resolution identity gives $\sum_a p_a=\langle\psi,(\sum_aP_a)\psi\rangle=\|\psi\|^2=1$. The Born rule identifies these numbers as outcome probabilities by [F2]. [F1, F2, given, algebra]

2.1 If $p_a>0$, then $\|P_a\psi\|=\sqrt{p_a}$, so division by $\sqrt{p_a}$ gives a vector of norm one and the conditional-state rule [F3] applies. If $p_a=0$, the same norm identity gives $\|P_a\psi\|=0$, hence $P_a\psi=0$; [F4] rules out a normalized conditional state on that branch. [F1, F3, F4, step 1.1, algebra] ∎
