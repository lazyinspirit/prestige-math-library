---
id: thm-m2-smooth-euclidean-pfaffian-electric-pairing
kind: theorem
title: M2 Smooth Euclidean Pfaffian Electric Pairing
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: finite quaternionic-band check supplied; full family-analytic argument remains unresolved
axiom_strength: ZF plus the exact smooth-family analytic hypotheses of the supplied Freed–Moore source model
deps:
  - def-m2-combined-fermion-cfield-descent-data
dependency_roles:
  def-m2-combined-fermion-cfield-descent-data: mathematical-premise
physical_scope: >-
  Pure mathematical theorem target for the exact closed smooth Euclidean
  Freed–Moore spin/E8 source model. It infers no physical protected-state
  multiplicity, Lorentzian fluxed Hessian, or singular extension.
proof_status: source-established model; complete locally reconstructed analytic proof not supplied
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Daniel S. Freed and Gregory W. Moore, Setting the Quantum Integrand of M-Theory"
      url: https://arxiv.org/pdf/hep-th/0409135v3
      locator: "§1.3, Proposition 1.31 and Remark 1.32, PDF pp. 13–14; §5.2, Eq. (5.2), PDF pp. 36–37. The source-established statement is not counted as the missing local analytic proof."
    - title: "Xianzhe Dai and Daniel S. Freed, Eta-Invariants and Determinant Lines"
      url: https://arxiv.org/pdf/hep-th/9405012v4
      locator: "§§1–2 for eta, determinant lines, spectral-cut transitions, and connection/holonomy formulas. This independent treatment does not replace the real/quaternionic M2 family proof."
    - title: "Daniel S. Freed, Lectures on Field Theory and Topology"
      url: https://abel.math.harvard.edu/~dafr/CBMS133.pdf
      locator: "Ch. 11 §§11.1–11.2, full lecture-note PDF; contextual construction and explicit limitations of spectral-cut determinant/Pfaffian lines."
verification:
  precheck: pending
---

## Statement

For the exact closed smooth Euclidean spin/E8 data and operators of [[def-m2-combined-fermion-cfield-descent-data]] that match Freed–Moore §5.2, the fermion Pfaffian line and electric eta line admit their spectral-cut transitions and a canonical tensor trivialization compatible with the Hermitian metrics and geometric connections. This statement is restricted to that source model. It does not infer a physical protected-state multiplicity or a Lorentzian fluxed membrane realization.

## Facts & Assumptions

**Given:** The exact closed smooth Euclidean spin/E8 data and operator families in [[def-m2-combined-fermion-cfield-descent-data]], including their supplied analytic regularizations and cut-transition data. The statement is not about an arbitrary pair of Hermitian lines.

[F1] [[def-m2-combined-fermion-cfield-descent-data]]: in the additional Freed--Moore matching refinement already required by this theorem, the supplied source package includes the local electric factor $CS_{\Sigma_b}(A)\,\tau_{D_0}^{-1/4}\exp(2\pi i\int_{\Sigma_b}c_{\mathrm{corr}})$ with $\tau_{D_0}^{1/4}=\exp(2\pi i\eta_{D_0}(0)/8)$, but deliberately supplies no pairing with the fermion line.

[A1] The full source-model assertion is the theorem target, not an accepted premise in this item: Freed–Moore, v3 §1.3 Proposition 1.31 and §5.2 Eq. (5.2), with the exact source conventions and stated smooth closed hypotheses. Its citation records scope, not proof completion.

## Proof

The following steps prove only the finite one-quaternionic-pair transition check. They do not prove the stated family theorem.

1.1 For the finite model $D_t=tI_{\mathbb C^2}$ and skew matrix $K_t=\begin{pmatrix}0&t\\-t&0\end{pmatrix}$, direct evaluation of the $2\times2$ Pfaffian gives $\operatorname{Pf}(K_t)=t$. For $t\ne0$, the two eigenvalues of $D_t$ are both $t$, so its eta function is $\eta_t(s)=2\operatorname{sgn}(t)|t|^{-s}$ and $\eta_t(0)=2\operatorname{sgn}(t)$. The source electric coefficient in [F1] is therefore $\tau^{-1/4}_{D_t}=\exp(-2\pi i\eta_t(0)/8)=-i\operatorname{sgn}(t)$. [F1, A1, algebra]

2.1 For $t\ne0$, the normalized Pfaffian section is $\operatorname{Pf}(K_t)/|\operatorname{Pf}(K_t)|=\operatorname{sgn}(t)$, so its product with the electric coefficient is $-i$ on both components $t<0$ and $t>0$. Each factor changes sign across the one-pair crossing; their tensor transition is consequently $(-1)(-1)=1$. At $t=0$ the Pfaffian section vanishes, so division by its magnitude is undefined although the two line fibres remain defined. This verifies the finite transition claim only. [F1, step 1.1, algebra] ∎

## Unresolved proof obligations

The cited source proves the specified model using its geometric-family construction, but the local proof required here is not complete. In particular, this item has not supplied the differentiated zeta-trace estimates for the real/quaternionic families, the connection-compatible local-index/eta comparison, or coherent descent of the E8/C-field gauge identifications. The finite calculation above does not establish any of those analytic or groupoid statements and does not prove the theorem. The corrected source normalization uses a global correction form $c_{\mathrm{corr}}$, and a same-operator Pfaffian/sign-line pairing still does not identify the normal-spinor $D_f$ line with the electric $D_0$/shift line. That comparison remains explicitly unresolved. Readiness is therefore escalated until the exact source-model argument is reconstructed under its actual hypotheses or complete local suppliers are authored.

## Sources

- [Freed–Moore, *Setting the Quantum Integrand of M-Theory*, §1.3 Prop. 1.31 and §5.2](https://arxiv.org/pdf/hep-th/0409135v3): exact theorem target and source-specific conventions.
- [Dai–Freed, *Eta-Invariants and Determinant Lines*, §§1–2](https://arxiv.org/pdf/hep-th/9405012v4): independent determinant-line and eta treatment; not an M2-specific real-family proof.
- [Freed, *Lectures on Field Theory and Topology*, Ch. 11](https://abel.math.harvard.edu/~dafr/CBMS133.pdf): book-length context, whose explicit spectral-cut discussion also records where analytic details are omitted.
