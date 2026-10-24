---
id: thm-qftx-witten-index-beta-independence
kind: theorem
title: Beta independence of the pure-point supersymmetric heat supertrace
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-graded-trace-class-index-data
  - lem-qftx-supercharge-positive-energy-pairing
dependency_roles:
  def-qftx-graded-trace-class-index-data: mathematical-premise
  lem-qftx-supercharge-positive-energy-pairing: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§7.1, printed p. 72, equations (7.1.1)–(7.1.2), supersymmetry-algebra positivity and the zero-energy condition; the pure-point Witten-index theorem is proved locally here."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§8.4, printed pp. 518–521, mass-squared supertrace formulae; the pure-point Witten-index theorem is proved locally here."
    - title: "David Tong, Supersymmetric Quantum Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf"
      locator: "§1.2.2, printed p. 14, definition of the Witten index and positive-energy boson/fermion cancellation under the supersymmetric quantum-mechanics assumptions stated there."
verification:
  precheck: pending
---

## Statement

Write $m_0^\pm:=\dim\mathcal H_0^\pm$, where $\mathcal H_0^\pm$ are the finite-dimensional even and odd zero-energy subspaces in the datum. For every pure-point graded trace-class index datum with positive-energy blocks paired by the unitary maps $U_\lambda=Q/\sqrt\lambda$ proved from its supercharge data, the absolutely convergent supertrace satisfies

$$W(\beta)=m_0^+-m_0^-\qquad\text{for every }\beta>0.$$

Thus it is independent of $\beta$ and equals the even-minus-odd dimension of the zero-energy subspace. This is a conditional mathematical statement for the discrete trace-class data in the definition; it asserts no continuum cancellation, regularized trace identity, or physical index formula.

## Statement references

[Martin, §7.1, supersymmetry-algebra positivity and the zero-energy condition](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §8.4, mass-squared supertrace formulae](https://arxiv.org/pdf/hep-th/0108200).

[Tong, §1.2.2, Witten-index definition and positive-energy cancellation](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf).

Pure-point graded trace-class index data: [[def-qftx-graded-trace-class-index-data]].

## Facts & Assumptions

**Given:** The graded pure-point decomposition, odd self-adjoint supercharge, compatible Hilbert basis, and trace-class heat operators for all $\beta>0$ in the index-data definition.

[F1] [[lem-qftx-supercharge-positive-energy-pairing]]: for each positive energy $\lambda$, $Q/\sqrt\lambda$ maps the even eigenspace unitarily onto the odd eigenspace, so their finite dimensions agree.

[F2] [[def-qftx-graded-trace-class-index-data]]: the heat operator is diagonal with eigenvalue $1$ on the zero-energy basis and $e^{-\beta\lambda}$ on each parity subspace at energy $\lambda>0$; it is trace class, so its diagonal family in the supplied Hilbert basis is absolutely summable.

## Proof


**Given:** [F1]–[F2] and $\beta>0$.

1.1 By [F1], $Q/\sqrt\lambda$ is a linear bijection between the finite-dimensional positive-energy parity eigenspaces, so $m_\lambda^+:=\dim\mathcal H_\lambda^+=\dim\mathcal H_\lambda^-=:m_\lambda^-$ for every $\lambda\in\Sigma$. On any supplied orthonormal basis of $\mathcal H_\lambda^\pm$, [F2] gives $\langle T_\beta e,e\rangle=e^{-\beta\lambda}$ for each basis vector. Therefore the positive-energy contribution to the signed basis sum at this fixed $\lambda$ is $e^{-\beta\lambda}(m_\lambda^+-m_\lambda^-)=0$. [F1, F2, algebra]

2.1 By [F2], the full diagonal family is absolutely summable. For the partition into its energy blocks, the absolute value of each block sum is at most the sum of the absolute values in that block; hence the family of block sums is also absolutely summable. To see that its sum equals the original sum, fix $\varepsilon>0$ and choose a finite set of basis vectors whose omitted absolute tail is below $\varepsilon$. Only finitely many energy blocks meet that finite set, and the omitted absolute tail bounds the difference between the full sum and the sum of those complete block sums. Letting $\varepsilon$ decrease to zero proves that grouping by energy preserves the sum. Step 1.1 cancels every positive-energy block; each zero-energy even basis vector contributes $1$ and each zero-energy odd basis vector contributes $-1$. The remaining finite sum is $m_0^+-m_0^-$, independent of $\beta$. The proof uses no trace cyclicity and no positive-energy eigenvector outside the given discrete decomposition. [F1, F2, step 1.1, algebra] ∎
