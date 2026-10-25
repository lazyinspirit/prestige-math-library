---
id: pthm-qftx-physical-index-beta-independence
kind: physics-theorem
title: Beta independence of the physical Witten index
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-indices
deps:
  - def-countable-choice
  - def-qftx-physical-bps-index
  - thm-qftx-witten-index-beta-independence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-physical-bps-index: formulation-prerequisite
  thm-qftx-witten-index-beta-independence: mathematical-premise
dependency_level: 6
axiom_base: "ZF + AC_omega"
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Supersymmetric Quantum Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf"
      locator: "Full 112-page lecture-note PDF; §1.2.2, printed pp. 13–15: positive-energy pairing, cancellation, zero-energy contribution, and discrete-spectrum qualification. The trace-class regrouping proof is local in the mathematical supplier."
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251"
      locator: "Full 60-page paper; §3.1, equations (3.1)–(3.3), printed pp. 13–14: a supersymmetric trace with commuting conserved-charge insertion and cancellation outside the protected sector. The unweighted trace-class result is supplied mathematically."
physical_scope: "Conditional operator-theoretic deduction for a selected physical Witten-index datum with pure-point spectrum, finite zero eigenspaces, and trace-class heat operators. It asserts no continuum QFT construction, regularized trace identity, empirical claim, or universal BPS-state count."
empirical_premises: []
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$ and natural units $c=\hbar=1$. A physical application supplies its spacetime and spatial domain, global gauge group and global form, field bundles and representations, adopted action or other postulates, boundary conditions, and either a Hamiltonian/Hilbert construction or the regulator and measure used to produce its operator data. The conclusion is conditional on those inputs yielding the following exact data. Let $\mathcal H=\mathcal H^+\oplus\mathcal H^-$ be a complex Hilbert space with grading $\Gamma=+I$ on $\mathcal H^+$ and $-I$ on $\mathcal H^-$. Let $\mathsf Q$ be a densely defined self-adjoint odd operator with $\Gamma$-invariant domain, and let $K=\mathsf Q^2$ be nonnegative and self-adjoint on its composition domain. Assume an orthogonal pure-point decomposition

$$\mathcal H=\mathcal H_0^+\oplus\mathcal H_0^-\oplus\widehat{\bigoplus}_{\lambda\in\Sigma}(\mathcal H_\lambda^+\oplus\mathcal H_\lambda^-),$$

where $\Sigma\subset(0,\infty)$ is countable, each parity eigenspace $\mathcal H_\lambda^\pm=\ker(K-\lambda I)\cap\mathcal H^\pm$ is finite-dimensional and contained in $D(K)$, $\mathcal H_0^\pm=\ker K\cap\mathcal H^\pm$ is finite-dimensional, and the union of compatible orthonormal bases is a Hilbert basis. Assume $e^{-\beta K}$ is trace class for each $\beta>0$. Then the physical Witten index defined by the supplied basis is

$$W_E(\beta)=\sum_{e\in E^+}\langle e^{-\beta K}e,e\rangle-\sum_{e\in E^-}\langle e^{-\beta K}e,e\rangle=\dim\mathcal H_0^+-\dim\mathcal H_0^-$$

for every $\beta>0$. The conclusion concerns only this discrete trace-class operator datum; it does not assert a continuous-spectrum cancellation, a validity theorem for a regulator, a continuum limit, or an identification of the kernel with every physical BPS state.

## Statement references

[Tong, §1.2.2](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf)

[Kinney et al., §3.1](https://arxiv.org/pdf/hep-th/0510251)

## Facts & Assumptions

**Given:** The physical model data and exact Hilbert-space, supercharge, pure-point, and trace-class hypotheses in the Statement. Assume $\mathrm{AC}_\omega$ as required by the mathematical Hilbert/operator suppliers.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] [[def-qftx-physical-bps-index]]: the pure-point physical index datum supplies the $\mathbb Z_2$-graded Hilbert space, odd self-adjoint supercharge, composition operator, compatible basis, finite parity eigenspaces including the zero eigenspace, and trace-class heat family; $W_E(\beta)$ is its absolutely convergent signed diagonal sum.

[F2] [[thm-qftx-witten-index-beta-independence]]: for the corresponding pure-point graded trace-class index data, the heat supertrace is $m_0^+-m_0^-$ for every $\beta>0$.

## Proof

**Given:** [A1], [F1]–[F2], and the exact model and operator hypotheses in the Statement.

1.1 The physical data in [F1] match the mathematical supplier's Hilbert grading, self-adjoint odd operator, composition domain, finite pure-point eigenspaces, compatible basis, and trace-class heat operators. The physical model record remains an adopted input; no property of its continuum construction is inferred. [A1, F1, given]

2.1 Apply [F2] to this identical operator datum. It gives $W_E(\beta)=m_0^+-m_0^-=\dim\mathcal H_0^+-\dim\mathcal H_0^-$ for every $\beta>0$, which is independent of $\beta$. [F2, step 1.1] ∎
