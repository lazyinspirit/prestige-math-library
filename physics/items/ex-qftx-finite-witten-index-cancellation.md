---
id: ex-qftx-finite-witten-index-cancellation
kind: example
title: Finite positive-energy pair cancels from a nonzero Witten index
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-graded-trace-class-index-data
  - thm-qftx-witten-index-beta-independence
  - thm-of-square-roots
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-countable-choice
  - def-trace-class-operator
dependency_roles:
  def-qftx-graded-trace-class-index-data: mathematical-premise
  thm-qftx-witten-index-beta-independence: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§8.4, mass-squared supertrace formulae; this finite-dimensional Witten-index calculation is explicit."
    - title: "David Tong, Supersymmetric Quantum Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf"
      locator: "§1.2.2, printed p. 14, Witten-index definition and positive-energy boson/fermion cancellation under the assumptions stated there."
verification:
  precheck: pending
---

## Example

Fix $\omega>0$. Let the zero-energy subspace have dimensions $m_0^+=2$ and $m_0^-=1$, and let there be one positive-energy pair $\mathcal H_\omega^+=\mathbb C|b\rangle$ and $\mathcal H_\omega^-=\mathbb C|f\rangle$. Give the five-dimensional Hilbert space the orthonormal basis $|0_1\rangle,|0_2\rangle,|0_-\rangle,|b\rangle,|f\rangle$ and parity $+1$ on $|0_1\rangle,|0_2\rangle,|b\rangle$ and $-1$ on $|0_-\rangle,|f\rangle$. Define $Q=0$ on the three zero-energy states and $Q|b\rangle=\sqrt\omega|f\rangle$, $Q|f\rangle=\sqrt\omega|b\rangle$; set $H=Q^2$. For each $\beta>0$, supply the diagonal operator $T_\beta$ on the displayed basis by $T_\beta|0_1\rangle=|0_1\rangle$, $T_\beta|0_2\rangle=|0_2\rangle$, $T_\beta|0_-\rangle=|0_-\rangle$, $T_\beta|b\rangle=e^{-\beta\omega}|b\rangle$, and $T_\beta|f\rangle=e^{-\beta\omega}|f\rangle$. The heat supertrace is $W(\beta)=1$ for all $\beta>0$.

## Example references

[Gates et al., §8.4, mass-squared supertrace formulae](https://arxiv.org/pdf/hep-th/0108200).

[Tong, §1.2.2, Witten-index definition and positive-energy cancellation](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf).

Pure-point graded trace-class index data: [[def-qftx-graded-trace-class-index-data]].

Beta independence of the pure-point supersymmetric heat supertrace: [[thm-qftx-witten-index-beta-independence]].

Square roots exist: a unique $\sqrt{a} \ge 0$ with $(\sqrt{a})^2 = a$; the positives are $\{x^2 : x \neq 0\}$: [[thm-of-square-roots]].

Hilbert space: [[def-hilbert-space]].

Real and complex inner-product spaces and their induced length: [[def-real-and-complex-inner-product-space]].

The Axiom of Countable Choice ($\mathrm{AC}_\omega$): [[def-countable-choice]].

Trace class operator: [[def-trace-class-operator]].

## Facts & Assumptions

**Given:** The displayed orthogonal parity decomposition, $\omega>0$, the finite-dimensional Hilbert inner product and the stated $Q,H$.

[A1] Assume Countable Choice, as required by the trace-class supplier used to certify the heat operator. [[def-countable-choice]]


[F1] [[def-qftx-graded-trace-class-index-data]]: for every $\beta>0$, the datum supplies a bounded diagonal $T_\beta$ with eigenvalue $1$ on the zero-energy basis and $e^{-\beta\lambda}$ on the parity subspaces of positive energy, and requires $T_\beta$ to be trace class; the heat supertrace is the absolutely convergent diagonal sum with sign $+1$ on even basis vectors and $-1$ on odd basis vectors.

[F2] [[thm-qftx-witten-index-beta-independence]]: for every pure-point graded trace-class index datum, $W(\beta)=m_0^+-m_0^-$ for all $\beta>0$.

[F3] [[thm-of-square-roots]]: $\omega>0$ has a positive square root.

[F4] [[def-trace-class-operator]]: every finite-rank operator is compact and hence trace class.

## Verification


**Given:** [A1], [F1]–[F4] and the finite-dimensional data in the Example.

1.1 The map $Q$ is a self-adjoint matrix on the displayed orthonormal basis: its only nonzero block in the ordered pair $(|b\rangle,|f\rangle)$ is $\sqrt\omega\begin{pmatrix}0&1\\1&0\end{pmatrix}$, a real symmetric matrix, and it is zero on the orthogonal zero-energy subspace. This block exchanges parity, and its square is $\omega I$; thus $H$ is $0$ on the three zero states and $\omega I$ on the positive pair. For each $\beta>0$, the supplied diagonal $T_\beta$ has eigenvalue $1$ on the zero states and $e^{-\beta\omega}$ on the positive pair, so it is exactly the operator denoted $e^{-\beta H}$ in [F1]. Its norm is $\max\{1,e^{-\beta\omega}\}<\infty$, so it is bounded; its five diagonal entries give finite rank, hence it is trace class by [F4] (equivalently, its singular values have finite sum $3+2e^{-\beta\omega}$). Thus the data satisfy the boundedness, trace-class and finite pure-point hypotheses for every $\beta>0$. [A1, F1, given, F3, F4, algebra]

2.1 The three zero modes contribute $2-1=1$ to the supertrace. The positive pair contributes $e^{-\beta\omega}-e^{-\beta\omega}=0$, so direct evaluation gives $W(\beta)=1$. By [F2], this also equals $m_0^+-m_0^-=2-1$. This calculation is finite dimensional and makes no continuum or regularization claim. [A1, F1, F2, step 1.1, algebra] ∎
