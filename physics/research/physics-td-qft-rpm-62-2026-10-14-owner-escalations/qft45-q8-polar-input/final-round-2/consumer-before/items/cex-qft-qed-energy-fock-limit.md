---
id: cex-qft-qed-energy-fock-limit
kind: counterexample
title: Bounded free-photon energy need not yield a Fock-vector limit
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - lem-qft-qed-coherent-ir-obstruction
dependency_roles:
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§5.2–5.5 and 6.1
      url: https://arxiv.org/html/math-ph/0511030
      locator: Full author lecture-note HTML; bosonic Fock sectors, second quantization, and the Fock representation of the CCR.
    - title: David Tong, Quantum Field Theory, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; transverse free-photon modes and their energy multiplier.
---

## Statement refuted

Every normalized coherent family in the transverse free-photon Fock space with uniformly bounded expectation of $H_{\rm ph}=\hbar c\,d\Gamma(|\mathbf k|)$ converges strongly in that Fock space as its infrared cutoff $\epsilon\downarrow0$.

## Construction

Take a unit vector $e\in\mathbb R^3$, set $b(n)=P_T(n)e$ for $n\in S^2$, fix $\kappa>0$, and use $f_\epsilon(\mathbf k)=\mathbf1_{\{\epsilon<|\mathbf k|<\kappa\}}|\mathbf k|^{-3/2}b(\widehat{\mathbf k})$. This gives the explicit transverse coherent family from [[lem-qft-qed-coherent-ir-obstruction]].

## Facts & Assumptions

**Given:** The planned transverse free-photon space and the exact coherent-family result of [[lem-qft-qed-coherent-ir-obstruction]].

[F1] [[lem-qft-qed-coherent-ir-obstruction]]: for any transverse $b$ with $C_b=\int_{S^2}|b|^2d\Omega>0$, the vectors $C(f_\epsilon)$ have norm one, energy expectation $\hbar c\,C_b(\kappa-\epsilon)$, weak limit zero, and no strong Fock-space limit.

[A1] $e\in\mathbb R^3$ is a unit vector, $\kappa>0$, and $\hbar,c>0$; cutoffs satisfy $0<\epsilon<\kappa$. These are the chosen model parameters in the Counterexample.

## Proof

**Given:** [A1], [F1], and the profile in the Counterexample.

1.1 For $b(n)=P_T(n)e$, $|b(n)|^2=1-(n\cdot e)^2$. On the positive-measure belt $|n\cdot e|\le1/2$ this is at least $3/4$, so $C_b>0$; also $b$ is measurable, square-integrable, and transverse. [A1, F1, algebra]

1.2 Apply [F1] to this $b$. It gives unit vectors with $0\le\langle C(f_\epsilon),H_{\rm ph}C(f_\epsilon)\rangle\le\hbar c\,C_b\kappa<\infty$, yet no strong Fock-space limit. This contradicts the asserted implication and is the required counterexample. [A1, F1, step 1.1, algebra] ∎
