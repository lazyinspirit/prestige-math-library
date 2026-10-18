---
id: thm-qa-37-fusion-branch-validity
kind: theorem
title: "Fusion measurement branches are normalized exactly when nonzero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps:
  - def-qa-37-fusion-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-qc-pure-state-and-ray
  - thm-qc-rank-one-density-operator
  - def-qc-dirac-notation-conversion
  - def-inner-product-norm
  - def-trace-of-an-endomorphism
  - thm-qc-dirac-notation-coordinate-identity
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
$p_a=\operatorname{tr}(|\psi\rangle\langle\psi|P_a)$ to outcome $a$.
[[thm-qc-projective-measurement-outcome-law]]

[F3] A unit vector defines a pure-state ray whose rank-one projector is a
density operator. [[def-qc-pure-state-and-ray]]
[[thm-qc-rank-one-density-operator]]

[F4] On an outcome of positive probability, the conditional density operator
is $P_a\rho P_a/p_a$. [[thm-qc-projective-conditional-state]]

[F5] The Dirac outer product acts by $|x\rangle\langle y|z=
\langle z,y\rangle_{\rm root}x$; trace is the sum of diagonal entries, and
$\|x\|^2=\langle x,x\rangle_{\rm root}$.
[[def-qc-dirac-notation-conversion]]
[[def-trace-of-an-endomorphism]] [[def-inner-product-norm]]

[F6] In orthonormal coordinates, $|x\rangle\langle y|$ has matrix
$[x][y]^\dagger$, so its trace is $\langle x,y\rangle_{\rm root}$.
[[thm-qc-dirac-notation-coordinate-identity]]

## Proof

1.1 Set $\rho=|\psi\rangle\langle\psi|$, a density operator by [F3]. The Dirac rule and $P_a=P_a^*=P_a^2$ give $|\psi\rangle\langle\psi|P_a=|\psi\rangle\langle P_a\psi|$, whose trace is $\langle\psi,P_a\psi\rangle_{\rm root}$ by [F6]. By self-adjointness and idempotence this equals $\langle P_a\psi,P_a\psi\rangle_{\rm root}=\|P_a\psi\|^2$ by [F5]. Thus [F2] identifies $p_a=\|P_a\psi\|^2\ge0$ as the outcome probability. The resolution identity gives $\sum_a p_a=\langle\psi,(\sum_aP_a)\psi\rangle_{\rm root}=\|\psi\|^2=1$. [F1, F2, F3, F5, F6, given, algebra]

2.1 If $p_a>0$, then $\rho_a=P_a\rho P_a/p_a$ is the conditional density operator by [F4]. The Dirac rule and self-adjointness give $P_a\rho P_a=|P_a\psi\rangle\langle P_a\psi|$; using step 1.1, $\rho_a$ is the rank-one projector of the unit vector $P_a\psi/\sqrt{p_a}$. If $p_a=0$, step 1.1 gives $\|P_a\psi\|=0$, hence $P_a\psi=0$. The zero-probability convention is that this branch is omitted and no normalized conditional vector or state is assigned; division by $\sqrt{p_a}=0$ is undefined. [F1, F4, F5, step 1.1, algebra] ∎
