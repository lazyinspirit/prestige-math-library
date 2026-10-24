---
id: pthm-qftx-superconformal-index-beta-independence
kind: physics-theorem
title: Beta independence of the trace-class superconformal index
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-indices
deps:
  - def-countable-choice
  - def-qftx-superconformal-index
  - lem-qftx-supercharge-positive-energy-pairing
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-superconformal-index: formulation-prerequisite
  lem-qftx-supercharge-positive-energy-pairing: mathematical-premise
dependency_level: 3
axiom_base: "ZF + AC_omega"
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251"
      locator: "Full 60-page paper; §3, equations (3.1)–(3.4), printed pp. 13–15: the exact positive anticommutator, commuting charge insertion, and cancellation of positive-gap states. The weighted trace-class argument is proved locally here."
    - title: "Leonardo Rastelli and Shlomo S. Razamat, The supersymmetric index in four dimensions"
      url: "https://arxiv.org/pdf/1608.02965"
      locator: "Full 43-page review; §2.1, equations (2.1)–(2.5), printed pp. 3–4: the S3 trace, fugacity charges, and infinite protected-sector convergence qualification."
physical_scope: "Conditional result for the specified unit-radius four-dimensional N=1 charge data with pure-point nonnegative gap, finite-dimensional positive eigenspaces, and absolutely convergent weighted heat traces. It asserts no continuum measure, general SCFT existence, or formal-series regularization theorem."
empirical_premises: []
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$ and take the exact right-handed four-dimensional $\mathcal N=1$ superconformal operator data on the unit round $S^3$ specified in the earlier definition. In particular, $\mathsf Q=(Q+Q^\dagger)/\sqrt2$ is self-adjoint and odd, $\Delta=\mathsf Q^2\ge0$ has countable pure-point spectrum with finite-dimensional positive-energy eigenspaces, and the zero eigenspace may be infinite-dimensional. For an admissible $0<p,q<1$, let $\Xi_{p,q}=p^{J_+}q^{J_-}$ preserve each eigenspace and commute with $\mathsf Q$ and $\Gamma$. Assume $\Xi_{p,q}e^{-\beta\Delta}$ has an absolutely summable supplied-basis diagonal for every $\beta>0$. Then

$$\mathcal I_R(p,q;\beta)=\sum_{e\in E_0^+}\langle\Xi_{p,q}e,e\rangle-\sum_{e\in E_0^-}\langle\Xi_{p,q}e,e\rangle$$

for all $\beta>0$, where $E_0^\pm$ are supplied compatible orthonormal bases of $\ker\Delta\cap\mathcal H^\pm$. The zero-sector sums converge absolutely even when the protected kernel is infinite-dimensional, and the superconformal index is independent of $\beta$. No assertion is made for continuous spectrum, a nonconvergent formal trace, or an unproved regularization.

## Statement references

[Kinney et al., §3](https://arxiv.org/pdf/hep-th/0510251)

[Rastelli and Razamat, §2.1](https://arxiv.org/pdf/1608.02965)

## Facts & Assumptions

**Given:** The charge operators and domains in the Statement, the pure-point decomposition, the commuting fugacity insertion, and the weighted trace-class/absolute-convergence hypothesis. Assume $\mathrm{AC}_\omega$ as required by the mathematical Hilbert/operator suppliers.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] [[def-qftx-superconformal-index]]: $\mathsf Q=(Q+Q^\dagger)/\sqrt2$ is self-adjoint and odd with $\mathsf Q^2=\Delta$; $\Delta$ has finite-dimensional positive eigenspaces, while the weighted heat operator is trace class and its supplied-basis diagonal is absolutely summable. The commuting charges preserve parity and commute with $\mathsf Q$.

[F2] [[lem-qftx-supercharge-positive-energy-pairing]]: for each finite-dimensional positive eigenspace of $\Delta=\mathsf Q^2$, the map $V_\lambda=\mathsf Q/\sqrt\lambda$ is unitary from the even eigenspace onto the odd eigenspace.

## Proof

**Given:** [A1], [F1]–[F2], and an admissible fugacity pair $(p,q)$.

1.1 Fix $\lambda>0$. By [F2], $V_\lambda=\mathsf Q/\sqrt\lambda$ is a unitary map $\mathcal H_\lambda^+\to\mathcal H_\lambda^-$. By [F1], $\Xi_{p,q}$ preserves both eigenspaces and commutes with $\mathsf Q$, so $V_\lambda(\Xi_{p,q}|_{\mathcal H_\lambda^+})=(\Xi_{p,q}|_{\mathcal H_\lambda^-})V_\lambda$. The two finite-dimensional restrictions are therefore unitarily conjugate. [A1, F1, F2, given, algebra]

1.2 The weighted heat operator is trace class, so its supplied-basis diagonal family is absolutely summable. For any $\varepsilon>0$, choose a finite subset of basis vectors whose omitted absolute tail is below $\varepsilon$. Only finitely many energy blocks meet this subset, and the tail bounds the difference between the full sum and the sum over those complete blocks. Hence grouping the diagonal sum by energy preserves its value. [F1, choose, algebra]

2.1 Choose an orthonormal basis $(e_j)$ of $\mathcal H_\lambda^+$ and use $(V_\lambda e_j)$ as an orthonormal basis of $\mathcal H_\lambda^-$. The intertwining identity in step 1.1 gives $\langle\Xi_{p,q}e_j,e_j\rangle=\langle\Xi_{p,q}V_\lambda e_j,V_\lambda e_j\rangle$ for every $j$. Thus the weighted even-minus-odd trace of this positive-energy eigenspace vanishes, and multiplying it by the common heat factor $e^{-\beta\lambda}$ still gives zero. [F1, F2, step 1.1, choose, algebra]

3.1 By step 2.1 every positive-energy block contributes zero. The remaining zero-energy sum is absolutely convergent by [F1] and is exactly the expression in the Statement; it contains no $\beta$. Therefore $\mathcal I_R(p,q;\beta)$ is independent of $\beta>0$. [F1, step 2.1, step 1.2, algebra] ∎
