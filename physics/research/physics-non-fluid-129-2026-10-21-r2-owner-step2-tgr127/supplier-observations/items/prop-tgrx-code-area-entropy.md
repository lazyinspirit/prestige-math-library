---
id: prop-tgrx-code-area-entropy
kind: proposition
title: Sector entropy and relative entropy identities
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgrx-sector-code
  - prop-tgrx-finite-modular-balance
  - lem-qsm-matrix-state-calculus
  - def-trace-of-an-endomorphism
  - thm-natural-logarithm-laws
dependency_roles:
  def-tgrx-sector-code: mathematical-premise
  prop-tgrx-finite-modular-balance: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, Appendix A.7.2–A.7.3
      url: https://arxiv.org/pdf/1607.03901
    - title: John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2
      url: https://jhwatrous.github.io/TQI.pdf
---

## Statement

Let $I$ be a finite nonempty set. For each $\alpha\in I$, let $H_\alpha,K_\alpha$ be nonzero finite-dimensional complex inner-product spaces. A density matrix is a self-adjoint endomorphism with nonnegative eigenvalues and trace one; it is faithful when all its eigenvalues are strictly positive. Let $p_\alpha,q_\alpha>0$ with $\sum_\alpha p_\alpha=\sum_\alpha q_\alpha=1$, let $\rho_\alpha$ be a density matrix on $H_\alpha$, let $\sigma_\alpha$ be a faithful density matrix on $H_\alpha$, and let $\chi_\alpha$ be a fixed faithful density matrix on $K_\alpha$. Form the finite orthogonal direct sums

$$\rho_A:=\bigoplus_{\alpha\in I}p_\alpha\rho_\alpha\otimes\chi_\alpha,\qquad \sigma_A:=\bigoplus_{\alpha\in I}q_\alpha\sigma_\alpha\otimes\chi_\alpha.$$

For a density matrix $\tau$, set $s(\tau):=-\sum_{\lambda_j(\tau)>0}\lambda_j(\tau)\log\lambda_j(\tau)$, with $0\log0:=0$, so entropy is in nats. For density matrices $\tau,\omega$ with faithful reference $\omega$, set $D(\tau\|\omega):=\operatorname{tr}(\tau\log\tau)-\operatorname{tr}(\tau\log\omega)$ using spectral logarithms on positive eigenvalues. Also define $H(\mathbf p):=-\sum_\alpha p_\alpha\log p_\alpha$ and $D_{\rm cl}(\mathbf p\|\mathbf q):=\sum_\alpha p_\alpha\log(p_\alpha/q_\alpha)$. Then $\rho_A$ and $\sigma_A$ are density matrices, $\sigma_A$ is faithful, and

$$s(\rho_A)=H(\mathbf p)+\sum_{\alpha\in I}p_\alpha\bigl(s(\rho_\alpha)+s(\chi_\alpha)\bigr),$$

$$D(\rho_A\|\sigma_A)=D_{\rm cl}(\mathbf p\|\mathbf q)+\sum_{\alpha\in I}p_\alpha D(\rho_\alpha\|\sigma_\alpha).$$

These are exact finite-dimensional matrix identities; no literal black-hole area, universal Ryu–Takayanagi formula, continuum limit, or gravitational entropy claim follows.

## Statement references

[[def-tgrx-sector-code]]

[[prop-tgrx-finite-modular-balance]]

[[lem-qsm-matrix-state-calculus]]

[[def-trace-of-an-endomorphism]]

[[thm-natural-logarithm-laws]]

[Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, Appendix A.7.2–A.7.3](https://arxiv.org/pdf/1607.03901)

[John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2](https://jhwatrous.github.io/TQI.pdf)

## Facts & Assumptions

**Given:** The finite sector data, encoded endomorphisms, entropy convention, and classical relative entropy convention in the Statement.

[F1] [[prop-tgrx-finite-modular-balance]]: for finite-dimensional density matrices $\tau,\omega$ with faithful reference $\omega$, $D(\tau\|\omega)=\operatorname{tr}((\tau-\omega)(-\log\omega))-(s(\tau)-s(\omega))$, with natural logarithms and $0\log0:=0$.

[F2] [[lem-qsm-matrix-state-calculus]]: every finite-dimensional Hermitian endomorphism has an orthonormal eigenbasis with real eigenvalues; for a nonnegative endomorphism the eigenvalues are nonnegative, and spectral functions on its positive spectrum are well defined.

[F3] [[def-trace-of-an-endomorphism]]: trace is the finite sum of diagonal matrix entries in any basis and is independent of the basis.

[F4] [[thm-natural-logarithm-laws]]: for positive $x,y$, $\log(xy)=\log x+\log y$, $\log(x/y)=\log x-\log y$, and $\log1=0$.

[F5] [[def-tgrx-sector-code]]: $\rho_A$ and $\sigma_A$ are block-diagonal endomorphisms with blocks $p_\alpha\rho_\alpha\otimes\chi_\alpha$ and $q_\alpha\sigma_\alpha\otimes\chi_\alpha$ on the orthogonal spaces $H_\alpha\otimes K_\alpha$; tensor maps act on elementary tensors factorwise.

## Proof

1.1 Choose orthonormal eigenbases for each $\rho_\alpha$, $\sigma_\alpha$, and $\chi_\alpha$ using [F2]. Write their eigenvalues as $r_{\alpha i}$, $t_{\alpha i}$, and $c_{\alpha j}$, respectively. In each block, the tensor products of the factor eigenvectors form an orthonormal basis and have eigenvalues $p_\alpha r_{\alpha i}c_{\alpha j}$ for $p_\alpha\rho_\alpha\otimes\chi_\alpha$ and $q_\alpha t_{\alpha i}c_{\alpha j}$ for $q_\alpha\sigma_\alpha\otimes\chi_\alpha$. Thus every block is positive semidefinite, the finite orthogonal sum is positive semidefinite, and its trace is $\sum_\alpha p_\alpha(\sum_i r_{\alpha i})(\sum_j c_{\alpha j})=\sum_\alpha p_\alpha=1$; the same calculation with $q_\alpha,t_{\alpha i}$ proves $\operatorname{tr}\sigma_A=1$. Since $q_\alpha,t_{\alpha i},c_{\alpha j}$ are all strictly positive, every eigenvalue of $\sigma_A$ is positive, so the reference is faithful. [given, F2, F3, F5, algebra]

2.1 The eigenvalues of $\rho_A$ are exactly $p_\alpha r_{\alpha i}c_{\alpha j}$ over its orthogonal block eigenbases. Terms with $r_{\alpha i}=0$ contribute $0$ by the entropy convention; all other terms satisfy $\log(p_\alpha r_{\alpha i}c_{\alpha j})=\log p_\alpha+\log r_{\alpha i}+\log c_{\alpha j}$ by [F4]. Substituting in $s(\rho_A)$ and summing the finite products, using $\sum_i r_{\alpha i}=\sum_j c_{\alpha j}=1$, gives $s(\rho_A)=-\sum_\alpha p_\alpha\log p_\alpha+\sum_\alpha p_\alpha s(\rho_\alpha)+\sum_\alpha p_\alpha s(\chi_\alpha)$, which is the asserted entropy identity. [given, F2, F4, F5, step 1.1, algebra]

2.2 Write $u_{\alpha i}$ for the chosen eigenbasis of $\sigma_\alpha$ and $v_{\alpha j}$ for that of $\chi_\alpha$, and put $a_{\alpha i}:=\langle\rho_\alpha u_{\alpha i},u_{\alpha i}\rangle$. By [F4], the block-$\alpha$ eigenvalues of $K_{\sigma_A}:=-\log\sigma_A$ on $u_{\alpha i}\otimes v_{\alpha j}$ are $-\log q_\alpha-\log t_{\alpha i}-\log c_{\alpha j}$; the diagonal entries of $\rho_\alpha\otimes\chi_\alpha$ in that basis are $a_{\alpha i}c_{\alpha j}$. Its block trace against $K_{\sigma_A}$ is therefore $p_\alpha\sum_{i,j}a_{\alpha i}c_{\alpha j}(-\log q_\alpha-\log t_{\alpha i}-\log c_{\alpha j})$. Factoring the finite sums and using $\sum_i a_{\alpha i}=\operatorname{tr}\rho_\alpha=1$, $\sum_jc_{\alpha j}=1$, $\sum_i a_{\alpha i}(-\log t_{\alpha i})=\operatorname{tr}(\rho_\alpha(-\log\sigma_\alpha))$, and $-\sum_jc_{\alpha j}\log c_{\alpha j}=s(\chi_\alpha)$, summing over $\alpha$ gives $\operatorname{tr}(\rho_AK_{\sigma_A})=\sum_\alpha p_\alpha[-\log q_\alpha+\operatorname{tr}(\rho_\alpha(-\log\sigma_\alpha))+s(\chi_\alpha)]$. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 By [F1] and faithfulness from step 1.1, $D(\rho_A\|\sigma_A)=\operatorname{tr}(\rho_AK_{\sigma_A})-s(\rho_A)$, since $\operatorname{tr}(\sigma_AK_{\sigma_A})=s(\sigma_A)$ by the spectral entropy definition. Applying the same identity [F1] sectorwise gives $D(\rho_\alpha\|\sigma_\alpha)=\operatorname{tr}(\rho_\alpha(-\log\sigma_\alpha))-s(\rho_\alpha)$. Subtract the entropy expression in step 2.1 from the trace expression in step 2.2; the ancillary terms cancel and $-\sum_\alpha p_\alpha\log q_\alpha-H(\mathbf p)=\sum_\alpha p_\alpha\log(p_\alpha/q_\alpha)$. This is the claimed relative-entropy identity. [F1, step 1.1, step 2.1, step 2.2, algebra] ∎
