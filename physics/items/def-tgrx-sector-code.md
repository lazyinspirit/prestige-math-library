---
id: def-tgrx-sector-code
kind: definition
title: Direct-sum sector code entropy model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - prop-tgrx-finite-modular-balance
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-linear-map
  - def-trace-of-an-endomorphism
dependency_roles:
  prop-tgrx-finite-modular-balance: mathematical-premise
  def-qc-tensor-register-and-permutation: mathematical-premise
  def-qc-tensor-map: mathematical-premise
  def-linear-map: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, Appendix A.7.2–A.7.3
      url: https://arxiv.org/pdf/1607.03901
    - title: John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2
      url: https://jhwatrous.github.io/TQI.pdf
---

## Definition

Let $I$ be a finite nonempty index set. For each $\alpha\in I$, let $H_\alpha$ and $K_\alpha$ be nonzero finite-dimensional complex inner-product spaces, and give

$$H_A:=\bigoplus_{\alpha\in I}(H_\alpha\otimes K_\alpha)$$

the orthogonal direct-sum inner product: distinct summands are orthogonal and the inner product within a summand is the Hilbert tensor-product inner product. On elementary tensors that inner product is $\langle x\otimes y,x'\otimes y'\rangle=\langle x,x'\rangle\langle y,y'\rangle$. A map $T\otimes U$ acts by $(T\otimes U)(x\otimes y)=Tx\otimes Uy$, and a direct-sum map acts blockwise with zero off-diagonal blocks.

A complex-linear endomorphism is a linear map from a vector space to itself. A density matrix on a finite-dimensional complex inner-product space is a self-adjoint endomorphism with nonnegative eigenvalues and trace one; it is faithful when all eigenvalues are strictly positive. These are the conventions used for the finite density matrices in the earlier modular-balance result. The summand indexed by $\alpha$ is called the $\alpha$ sector. For each $\alpha$, fix a faithful density matrix $\chi_\alpha$ on $K_\alpha$. Let $\mathbf p=(p_\alpha)_{\alpha\in I}$ satisfy $p_\alpha>0$ and $\sum_{\alpha\in I}p_\alpha=1$, and let $\rho_\alpha$ be density matrices on $H_\alpha$. Define the encoded endomorphism

$$\mathcal E_\chi(\mathbf p,\rho):=\bigoplus_{\alpha\in I}p_\alpha\,\rho_\alpha\otimes\chi_\alpha.$$

When this encoded endomorphism is a density matrix, call it the encoded reduced state. The logical data are $\mathbf p$ and $\{\rho_\alpha\}$; the ancillary matrices $\{\chi_\alpha\}$ are held fixed. For a second strictly positive probability vector $\mathbf q$ and faithful density matrices $\sigma_\alpha$ on the same $H_\alpha$, write $\sigma_A:=\mathcal E_\chi(\mathbf q,\sigma)$ for the encoded reference endomorphism.

This is a finite-dimensional algebraic model. The definition makes no gravitational interpretation and does not identify a matrix entropy term with a geometric area.

## Definition references

[[prop-tgrx-finite-modular-balance]]

[[def-qc-tensor-register-and-permutation]]

[[def-qc-tensor-map]]

[[def-linear-map]]

[[def-trace-of-an-endomorphism]]

[Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, Appendix A.7.2–A.7.3](https://arxiv.org/pdf/1607.03901)

[John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2](https://jhwatrous.github.io/TQI.pdf)
