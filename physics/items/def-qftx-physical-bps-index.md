---
id: def-qftx-physical-bps-index
kind: definition
title: Physical Witten index and selected BPS sector
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-indices
deps:
  - def-countable-choice
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - def-qftx-graded-trace-class-index-data
  - def-qftx-bps-state-and-saturation
  - def-qftx-susy-background-data
dependency_roles:
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-qftx-graded-trace-class-index-data: mathematical-premise
  def-qftx-bps-state-and-saturation: formulation-prerequisite
  def-qftx-susy-background-data: formulation-prerequisite
dependency_level: 5
axiom_base: "ZF + AC_omega"
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Supersymmetric Quantum Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf"
      locator: "Full 112-page lecture notes; §§1.2.1–1.2.2, especially §1.2.2, printed pp. 13–15: graded heat trace, positive-energy pairing, the zero-energy contribution, and the warning about β=0 and continuous spectrum."
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251"
      locator: "Full 60-page paper; §3, equations (3.1)–(3.3), printed pp. 13–14: the superconformal Witten trace, its commuting insertion, and cancellation away from the protected sector."
physical_scope: "A selected physical supersymmetric Hilbert-space sector with pure-point spectrum and trace-class heat operators. It asserts no continuum QFT construction, universal BPS count, empirical observation, or existence of a state in nature."
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: every sequence of nonempty sets has a choice function. A complex Hilbert space is a complete complex inner-product space, with inner product linear in its first variable. A self-adjoint operator $T$ is densely defined and satisfies $D(T)=D(T^*)$ and $T\psi=T^*\psi$ on that domain; nonnegative means $\langle T\psi,\psi\rangle\ge0$ for every $\psi\in D(T)$. A grading operator $\Gamma$ is a bounded self-adjoint involution, so its $+1$ and $-1$ eigenspaces are orthogonal; an operator $T$ is odd when $D(T)$ is $\Gamma$-invariant and $T\Gamma=-\Gamma T$ there. Use natural units $c=\hbar=1$. A **pure-point physical index datum** consists of a specified physical model record and its operator data. The model record identifies the spacetime and spatial domain, metric and orientation, global gauge group including its global form, field bundles and representations, adopted action or other postulates, and boundary conditions; it also states whether the Hilbert-space operators are constructed directly or obtained from a named regulator and measure. These are supplied model inputs, not conclusions of this definition. When curved spacetime is used, the record includes fixed Riemannian spin geometry, spin and R-symmetry data, and the model-specific spinor equation as in the earlier background definition; no claim is made that arbitrary geometry admits such data. The operator data include a complex Hilbert space $\mathcal H=\mathcal H^+\oplus\mathcal H^-$ as an orthogonal sum of closed subspaces, and the grading operator $\Gamma$ equal to $+I$ on $\mathcal H^+$ and $-I$ on $\mathcal H^-$. They supply a closed densely defined self-adjoint operator $\mathcal Q$ with domain invariant under $\Gamma$ and $\mathcal Q\Gamma\psi=-\Gamma\mathcal Q\psi$ on that domain. Set $K=\mathcal Q^2$ on $D(K)=\{\psi\in D(\mathcal Q):\mathcal Q\psi\in D(\mathcal Q)\}$ and require that $K$ is nonnegative and self-adjoint. The grading is dimensionless; if $K$ has energy units, $\mathcal Q$ has energy dimension $1/2$.

Require an orthogonal pure-point decomposition

$$\mathcal H=\mathcal H_0^+\oplus\mathcal H_0^-\oplus\widehat{\bigoplus}_{\lambda\in\Sigma}(\mathcal H_\lambda^+\oplus\mathcal H_\lambda^-),$$

where $\Sigma\subset(0,\infty)$ is a supplied countable set of distinct eigenvalues, $\mathcal H_0^\pm=\ker K\cap\mathcal H^\pm$ are finite-dimensional, and each $\mathcal H_\lambda^\pm=\ker(K-\lambda I)\cap\mathcal H^\pm$ is finite-dimensional and contained in $D(K)$. A compatible complete orthonormal basis $E=E^+\sqcup E^-$ of these subspaces is supplied as part of the data. For each $\beta>0$, also supply a bounded diagonal operator $T_\beta$ with eigenvalue $1$ on $E\cap\ker K$ and $e^{-\beta\lambda}$ on $E\cap(\mathcal H_\lambda^+\oplus\mathcal H_\lambda^-)$, and require $T_\beta$ to be trace class. The parameter $\beta$ has units of inverse energy when $K$ has energy units; in dimensionless radial-quantization conventions it is dimensionless.

The **Witten index** of this datum is the absolutely convergent graded heat supertrace, defined by the supplied basis rather than by an unproved basis-independence claim,

$$W_E(\beta)=\sum_{e\in E^+}\langle T_\beta e,e\rangle-\sum_{e\in E^-}\langle T_\beta e,e\rangle,\qquad \beta>0,$$

where each heat operator is trace class, meaning compact with summable singular values, and the supplied-basis diagonal sums are absolutely convergent; the sums are taken over finite subsets and then their absolutely convergent limits. This signed supertrace is not a raw state degeneracy. The zero-gap subspace singled out by the selected supercharge is $\ker K=\mathcal H_0^+\oplus\mathcal H_0^-$. Equality of the full heat supertrace with the even-minus-odd dimension of this subspace is a separate conditional theorem under the exact hypotheses. A physical model may call this a **BPS index** only when its own supercharge algebra identifies this kernel with a specified BPS-saturated sector. Here a BPS-saturated state means a nonzero domain vector in a specified massive rest fiber satisfying the mass/central-charge equality in the earlier BPS definition. The present definition does not identify every BPS state with $\ker K$ and asserts no such state exists.

## Definition references

[Tong, §§1.2.1–1.2.2](https://www.damtp.cam.ac.uk/user/tong/susy/susyqm.pdf)

[Kinney et al., §3](https://arxiv.org/pdf/hep-th/0510251)

[[def-countable-choice|The Axiom of Countable Choice]]

[[def-qftx-graded-trace-class-index-data|Pure-point graded trace-class index data; the supplied basis sums are absolutely convergent]]

[[def-qftx-bps-state-and-saturation|BPS state and central-charge saturation means equality of the massive-fiber mass and central-charge norm]]

[[def-qftx-susy-background-data|Rigid background data fixes the Riemannian spin/R geometry and model-specific spinor equation]]
