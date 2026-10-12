---
id: ex-nrqm-controlled-dynamics-gap-closing-failure
aliases: [nrqm-controlled-dynamics-example-gap-closing-failure]
kind: example
domain: mathematics
title: "Gap-closing failure"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, prop-nrqm-orbital-and-spin-finite-spin-matrices, def-bounded-linear-operator, def-operator-norm, def-hilbert-space]
dependency_roles:
  thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Two-State System pp. 153-155 (level crossing and breakdown of adiabatic tracking)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II.4 (the uniform-gap hypothesis is essential in the adiabatic theorem)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Let $\sigma_z=\operatorname{diag}(1,-1)$ act on $\mathbb C^2$ with orthonormal
basis $e_\uparrow,e_\downarrow$, and consider the family
$$H(s)=s\,\sigma_z\qquad(s\in[-1,1]),$$
a $C^\infty$ Hermitian bounded family. For $T>0$ let $U_T$ solve
$i\,\partial_sU_T(s)=T H(s)U_T(s)$, $U_T(-1)=I$. This example verifies
concretely that:

(a) the family has a spectral crossing at $s=0$: its eigenvalues are $\pm s$, so
the gap $g(s)=2|s|$ tends to $0$ and the uniform-gap hypothesis of
[[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]] fails;

(b) the eigenprojection branch tracking the eigenvalue $+1$ at $s=-1$ has no
continuous extension through $s=0$;

(c) the conclusion of the gapped adiabatic estimate fails maximally: the exact
propagator is $U_T(s)=e^{-iT\sigma_z(s^2-1)/2}$ and
$\|(I-P(1))U_T(1)P(-1)\|=1$ for every $T>0$, where $P(\pm1)$ are the branch
projections at the endpoints.

## Verification

**Given:** the family $H(s)=s\sigma_z$ on $[-1,1]$, the branch projections $P(-1)=|e_\downarrow\rangle\langle e_\downarrow|$ and $P(1)=|e_\uparrow\rangle\langle e_\uparrow|$, and $T>0$.

[F1] $\sigma_ze_\uparrow=e_\uparrow$, $\sigma_ze_\downarrow=-e_\downarrow$, and $\sigma_z$ is diagonal in the orthonormal basis $(e_\uparrow,e_\downarrow)$ with eigenvalues $\pm1$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (e)).

[F2] For the norm-continuous bounded self-adjoint family $s\mapsto TH(s)$ there is a unique unitary propagator $U_T$ with $i\partial_sU_T=TH(s)U_T$, $U_T(-1)=I$ ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]).



1.1 [Closing gap and discontinuous branch] By [F1] the eigenvalues of $H(s)=s\sigma_z$ are $s$ (eigenvector $e_\uparrow$) and $-s$ (eigenvector $e_\downarrow$); the spectral gap $2|s|$ vanishes at $s=0$, where the branches cross. The branch equal to the eigenvalue $+1$ at $s=-1$ is $P(s)=|e_\downarrow\rangle\langle e_\downarrow|$ for $s<0$ and $P(s)=|e_\uparrow\rangle\langle e_\uparrow|$ for $s>0$; these differ at $s=0$, so no continuous rank-one branch passes through the crossing. [F1, algebra]

2.1 [Exact evolution and failure] All generators $Ts\sigma_z$ commute, so by [F2] and the ordinary exponential we have $U_T(s)=\exp(-i\sigma_zT\int_{-1}^s r\,dr)=e^{-iT\sigma_z(s^2-1)/2}$. Then $U_T(1)e_\downarrow=e^{-iT\sigma_z\cdot0}e_\downarrow=e_\downarrow$, so $(I-P(1))U_T(1)P(-1)e_\downarrow=(I-|e_\uparrow\rangle\langle e_\uparrow|)e_\downarrow=e_\downarrow$, of norm $1$, for every $T>0$; the tracking conclusion fails by the maximal amount because the gap closes. [step 1.1, F2, def. operator norm, algebra] ∎
