---
id: def-qftx-graded-trace-class-index-data
kind: definition
title: Pure-point graded trace-class index data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - lem-qftx-supercharge-positive-energy-pairing
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - def-real-exponential-function-and-e
  - cor-exponential-is-a-bijection-onto-positive-reals
  - thm-exponential-is-strictly-increasing
dependency_roles:
  lem-qftx-supercharge-positive-energy-pairing: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
dependency_level: 1
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§7.1, printed p. 72, equations (7.1.1)–(7.1.2), supersymmetry-algebra positivity and the zero-energy condition; this item states the pure-point trace-class data locally."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§8.4, mass-squared supertrace formulae; finite multiplicities, domains and trace-class hypotheses are stated locally."
    - title: "David Tong, Supersymmetric Quantum Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf"
      locator: "§1.2.2, printed p. 14, definition of the Witten index and positive-energy boson/fermion cancellation under the supersymmetric quantum-mechanics assumptions stated there."
verification:
  precheck: pending
---

## Definition

A **pure-point graded trace-class index datum** consists of a complex Hilbert space $\mathcal H=\mathcal H^+\oplus\mathcal H^-$, its grading operator $\Gamma$ equal to $+I$ on $\mathcal H^+$ and $-I$ on $\mathcal H^-$, and a densely defined self-adjoint operator $Q$ such that $D(Q)$ is invariant under $\Gamma$ and $Q\Gamma\psi=-\Gamma Q\psi$ for every $\psi\in D(Q)$. Set $H=Q^2$ on $D(H)=\{\psi\in D(Q):Q\psi\in D(Q)\}$ and require this composition operator to be nonnegative and self-adjoint. Assume $H$ has the orthogonal pure-point decomposition

$$\mathcal H=\mathcal H_0^+\oplus\mathcal H_0^-\oplus\widehat{\bigoplus}_{\lambda\in\Sigma}(\mathcal H_\lambda^+\oplus\mathcal H_\lambda^-),$$

where $\Sigma\subset(0,\infty)$ is a supplied countable set of distinct eigenvalues, $\mathcal H_0^\pm=\ker H\cap\mathcal H^\pm$ are finite-dimensional, and $\mathcal H_\lambda^\pm=\ker(H-\lambda I)\cap\mathcal H^\pm$ are finite-dimensional eigenspaces contained in $D(H)$. Supply orthonormal bases of these subspaces whose union $E=E^+\sqcup E^-$ is a Hilbert basis of $\mathcal H$ compatible with energy and parity. Assume Countable Choice as used by the imported Hilbert-space, adjoint and trace-class definitions. The local positive-energy-pairing lemma derives, rather than assumes, the unitary map $Q/\sqrt\lambda:\mathcal H_\lambda^+\to\mathcal H_\lambda^-$ and equality of their finite dimensions.

For each real $\beta>0$, a bounded diagonal operator $T_\beta$ is supplied as part of the data, with $T_\beta e=e^{-\beta\lambda}e$ on $E_\lambda^+\cup E_\lambda^-$ and $T_\beta e=e$ on $E_0^+\cup E_0^-$. Require $T_\beta$ to be trace class for every $\beta>0$; it is denoted $e^{-\beta H}$. Its graded heat supertrace, called the **Witten index at parameter $\beta$** in this data class, is

$$W(\beta):=\sum_{e\in E^+}\langle T_\beta e,e\rangle-\sum_{e\in E^-}\langle T_\beta e,e\rangle,$$

where each family sum is in the finite-subset sense for absolutely summable scalar families. The supplied trace-class Hilbert-basis definition makes these sums absolutely convergent. Here $\beta$ is only a positive real mathematical parameter and has no assigned physical units or temperature interpretation. The index datum is discrete: it contains no continuous spectral subspace or continuum regularization prescription, and makes no physical model identification.

## Definition references

[Martin, §7.1, supersymmetry-algebra positivity and the zero-energy condition](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §8.4, mass-squared supertrace formulae](https://arxiv.org/pdf/hep-th/0108200).

[Tong, §1.2.2, Witten-index definition and positive-energy cancellation](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf).

Positive-energy eigenspaces pair under an odd self-adjoint supercharge: [[lem-qftx-supercharge-positive-energy-pairing]].

Hilbert space: [[def-hilbert-space]].

Densely defined, closed and closable operators: [[def-densely-defined-closed-and-closable-operator]].

Unbounded linear operators: domain, graph and extension: [[def-unbounded-linear-operator-domain-and-graph]].

Symmetric, self-adjoint and essentially self-adjoint operators: [[def-symmetric-self-adjoint-and-essentially-self-adjoint]].

Countable Choice: [[def-countable-choice]].

Real and complex inner-product spaces and their induced length: [[def-real-and-complex-inner-product-space]].

Orthonormal families, complete orthonormal systems and Hilbert bases: [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]].

Trace class operator: [[def-trace-class-operator]].

Trace of a trace class operator: [[def-trace-of-a-trace-class-operator]].

The real exponential function and the number $e$ by a power series: [[def-real-exponential-function-and-e]].

The exponential is a continuous bijection from $\mathbb{R}$ onto $(0,\infty)$: [[cor-exponential-is-a-bijection-onto-positive-reals]].

The exponential function is strictly increasing: [[thm-exponential-is-strictly-increasing]].
