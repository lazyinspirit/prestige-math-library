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
dependency_level: 4
axiom_base: "ZF + AC_omega"
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An
        Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251"
      locator: "Full 60-page paper; §3.3, equations (3.10)–(3.12), printed pp. 16–17: the
        right-handed positive anticommutator, Witten trace, commuting charge
        insertion, and positive-gap cancellation. The source uses its own
        R-charge convention; the weighted trace-class argument is proved locally here."
    - title: "Leonardo Rastelli and Shlomo S. Razamat, The supersymmetric index in
        four dimensions"
      url: "https://arxiv.org/pdf/1608.02965"
      locator: "Full 43-page review; §2.1, equations (2.1)–(2.5), printed pp. 3–4: the
        S3 trace, fugacity charges, and infinite protected-sector convergence
        qualification."
physical_scope: "Conditional result for the specified unit-radius
  four-dimensional N=1 charge data with a supplied pure-point joint gap/charge
  basis, reducing supercharge domains, and trace-class weighted heat operators;
  total gap eigenspaces and the protected kernel may be infinite-dimensional. It
  asserts no continuum measure, general SCFT existence, or formal-series
  regularization theorem."
empirical_premises: []
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume $\mathrm{AC}_\omega$ and take the exact right-handed four-dimensional $\mathcal N=1$ superconformal operator data on the unit round $S^3$ specified in the earlier definition. In particular, $\mathsf Q=(Q+Q^\dagger)/\sqrt2$ is self-adjoint and odd, $\Delta=\mathsf Q^2\ge0$, and the model supplies the simultaneous pure-point energy/charge/parity basis and reducing-domain projection identities in that definition. Neither the protected kernel nor a total positive-gap eigenspace is required to be finite-dimensional. For an admissible $0<p,q<1$, $\Xi_{p,q}=p^{J_+}q^{J_-}$ has eigenvalue $p^a q^b$ on each joint block $\mathcal H_{\lambda,a,b}$, and the diagonal products $T_{\beta,p,q}=\Xi_{p,q}e^{-\beta\Delta}$ extend to bounded trace-class operators for all $\beta>0$. Then

$$\mathcal I_R(p,q;\beta)=\sum_{e\in E_0^+}\langle\Xi_{p,q}e,e\rangle-\sum_{e\in E_0^-}\langle\Xi_{p,q}e,e\rangle$$

for all $\beta>0$, where $E_0^\pm$ are supplied compatible orthonormal bases of $\ker\Delta\cap\mathcal H^\pm$. The zero-sector sums converge absolutely even when the protected kernel is infinite-dimensional, and the superconformal index is independent of $\beta$. No assertion is made for continuous spectrum, a nonconvergent formal trace, or an unproved regularization.

## Statement references

[Kinney et al., §3](https://arxiv.org/pdf/hep-th/0510251)

[Rastelli and Razamat, §2.1](https://arxiv.org/pdf/1608.02965)

## Facts & Assumptions

**Given:** The charge operators and domains in the Statement, the pure-point decomposition, the commuting fugacity insertion, and the weighted trace-class/absolute-convergence hypothesis. Assume $\mathrm{AC}_\omega$ as required by the mathematical Hilbert/operator suppliers.

[A1] Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] [[def-qftx-superconformal-index]]: $\mathsf Q$ is self-adjoint and odd with $\mathsf Q^2=\Delta$; the supplied joint energy/charge/parity basis gives maximal diagonal charge domains, and joint charge projections reduce $Q,Q^\dagger,\mathsf Q$ including their domains. The diagonal weighted heat products are bounded trace class. Joint blocks have strictly positive constant weights and hence finite dimension for an admissible fugacity pair, even when total gap eigenspaces are infinite.

[F2] [[lem-qftx-supercharge-positive-energy-pairing]]: on any finite-dimensional positive eigenspace for a self-adjoint odd operator squared, division of that operator by $\sqrt\lambda$ gives a unitary parity-exchanging isomorphism. The result applies to the restriction to a reducing finite joint block.

## Proof
**Given:** [A1], [F1]–[F2], and an admissible fugacity pair $(p,q)$.

1.1 Fix a joint label $(\lambda,a,b)$ with $\lambda>0$. By [F1], its basis vectors lie in the diagonal domain $D(\Delta)=D(\mathsf Q^2)$, and its joint projection reduces $\mathsf Q$. Trace-class summability makes this joint block finite-dimensional: each of its orthonormal basis vectors has the same positive weighted heat diagonal $w=p^a q^b e^{-\beta\lambda}$, so $n$ such vectors would contribute $nw$ for every $n$ if the block were infinite. On this finite reducing block the restriction of $\mathsf Q$ is everywhere defined and symmetric, hence self-adjoint, with square $\lambda I$ and parity anticommutation. Apply [F2] to this restricted Hilbert space: $V_{\lambda,a,b}=\mathsf Q/\sqrt\lambda$ maps its even part unitarily onto its odd part. Their finite dimensions therefore agree. [A1, F1, F2, given, algebra]

2.1 On the fixed block, $\Xi_{p,q}$ is the scalar $p^a q^b$ and the heat factor is $e^{-\beta\lambda}$. Each supplied even or odd basis vector contributes that same weight. The signed contribution is consequently $p^a q^b e^{-\beta\lambda}(\dim\mathcal H_{\lambda,a,b}^+-\dim\mathcal H_{\lambda,a,b}^-)=0$ by step 1.1. No basis change or cyclic trace of an unbounded product is used. [F1, step 1.1, algebra]

3.1 The full supplied-basis diagonal is absolutely summable by [F1]. For any $\varepsilon>0$, take a finite set of basis vectors with omitted absolute tail below $\varepsilon$. Only finitely many joint blocks meet that set; the sum over those complete blocks differs from the full sum by at most the omitted absolute tail. Thus regrouping by joint charge blocks preserves the sum, even if infinitely many such blocks have the same gap $\lambda$. Every positive-gap block vanishes by step 2.1. [F1, step 2.1, choose, algebra]

4.1 The remaining basis vectors are exactly those with $\lambda=0$. Their heat factor is one and their diagonal weights $p^a q^b$ have finite total absolute sum as a subfamily of the trace-class heat diagonal. Therefore the resulting signed zero-sector trace equals the expression in the Statement and has no $\beta$ dependence, including when the protected kernel is infinite-dimensional. [F1, step 3.1, algebra] ∎
