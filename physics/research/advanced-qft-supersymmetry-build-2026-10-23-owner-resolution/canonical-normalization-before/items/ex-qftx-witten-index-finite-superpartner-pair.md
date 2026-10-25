---
id: ex-qftx-witten-index-finite-superpartner-pair
kind: example
title: A finite supersymmetric pair with Witten index one
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-indices-examples
deps:
  - def-countable-choice
  - def-qftx-physical-bps-index
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-physical-bps-index: formulation-prerequisite
dependency_level: 6
axiom_base: "ZF + AC_omega"
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Supersymmetric Quantum Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf"
      locator: "Full 112-page lecture notes; §1.2.2, printed pp. 13–15, for the graded heat trace and positive-energy boson/fermion cancellation. The finite matrix model and its trace are computed here."
physical_scope: "A finite-dimensional supersymmetric quantum-mechanical Hilbert-space example with exact discrete trace. It is not a continuum QFT, an observed system, or a claim about a naturally realized particle."
verification:
  precheck: pending
---

## Example

Assume $\mathrm{AC}_\omega$ and use natural units $c=\hbar=1$. Treat this finite matrix Hilbert system as exact model input with trivial internal/gauge group, no spatial boundary, and no continuum regulator or path-integral claim. Let $E_*>0$ be an energy and let $\mathcal H=\mathbb C^3$ have orthonormal basis $e_0,e_+,e_-$. Give $\mathcal H$ the grading $\mathcal H^+=\operatorname{span}\{e_0,e_+\}$ and $\mathcal H^-=\operatorname{span}\{e_-\}$, with $\Gamma=+I$ on $\mathcal H^+$ and $-I$ on $\mathcal H^-$. On the full domain $D(\mathsf Q)=\mathcal H$, define the self-adjoint odd supercharge by $\mathsf Qe_0=0$, $\mathsf Qe_+=\sqrt{E_*}e_-$, and $\mathsf Qe_-=\sqrt{E_*}e_+$. Set $K=\mathsf Q^2$. The Witten index is $1$ for every $\beta>0$.

## Example references

[Tong, §1.2.2](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf)

## Facts & Assumptions

**Given:** The finite-dimensional graded Hilbert-space model and the operators in the Example; $\beta>0$ has inverse-energy units.

[A1] Assume $\mathrm{AC}_\omega$, as used by the exact Hilbert and trace definitions. [[def-countable-choice]]

[F1] [[def-qftx-physical-bps-index]]: for a pure-point graded physical index datum with trace-class heat operators, the Witten index is the absolutely convergent even-minus-odd diagonal sum in a supplied compatible basis.

## Verification

**Given:** [A1], [F1], and the finite-dimensional model stated in the Example.

1.1 The matrix of $\mathsf Q$ in $(e_0,e_+,e_-)$ is $\begin{pmatrix}0&0&0\\0&0&\sqrt{E_*}\\0&\sqrt{E_*}&0\end{pmatrix}$, which is self-adjoint. It sends each parity subspace into the other and annihilates $e_0$, so $\Gamma\mathsf Q=-\mathsf Q\Gamma$. Squaring gives $Ke_0=0$ and $Ke_+=E_*e_+$, $Ke_-=E_*e_-$. [A1, given, algebra]

2.1 Thus the heat operator is diagonal with eigenvalues $1,e^{-\beta E_*},e^{-\beta E_*}$ on $(e_0,e_+,e_-)$; it is finite rank and trace class, and this basis is a complete compatible basis for the pure-point datum under the trace conventions using [A1]. [A1, F1, step 1.1, algebra]

3.1 By [F1], $W_E(\beta)=\langle e_0,e_0\rangle+e^{-\beta E_*}\langle e_+,e_+\rangle-e^{-\beta E_*}\langle e_-,e_-\rangle=1+e^{-\beta E_*}-e^{-\beta E_*}=1$. The single even zero mode supplies the net index; the positive-energy even/odd pair cancels for every $\beta>0$. [F1, step 2.1, algebra] ∎
