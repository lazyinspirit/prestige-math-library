---
id: def-qftx-superconformal-index
kind: definition
title: Four-dimensional N=1 superconformal index
status: draft
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
  - def-qftx-susy-background-data
dependency_roles:
  def-countable-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-qftx-susy-background-data: formulation-prerequisite
dependency_level: 2
axiom_base: "ZF + AC_omega"
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251"
      locator: "Full 60-page paper; §3, equations (3.1)–(3.4), printed pp. 13–15: the chosen supercharge, positive anticommutator, index trace, and commuting subalgebra."
    - title: "Leonardo Rastelli and Shlomo S. Razamat, The supersymmetric index in four dimensions"
      url: "https://arxiv.org/pdf/1608.02965"
      locator: "Full 43-page review; §2.1, equations (2.1)–(2.5), printed pp. 3–4: the S3 Hilbert-space trace, N=1 charge normalization, left/right conventions, and fugacities; §2.3, Table 1 and equations (2.9)–(2.13), printed pp. 5–7, for the chiral-letter count."
physical_scope: "A trace-class Hilbert-space representation of the specified four-dimensional N=1 superconformal charge sector on the unit round S3. It asserts no general SCFT construction, convergence outside the declared fugacity domain, continuum path-integral identity, or empirical claim."
verification:
  precheck: pending
---

## Definition

Assume $\mathrm{AC}_\omega$ and natural units $c=\hbar=1$. Let $S^3=\{x\in\mathbb R^4:|x|=1\}$ have its round metric and standard orientation. The **radial Hilbert space** $\mathcal H_{S^3}$ is the complex Hilbert space supplied by the chosen physical model after quantization on this unit spatial three-sphere; its construction is model input, not proved here. The model record names its gauge group and global form, matter representations, action or other adopted postulates, and the Hilbert-space construction or regulator and measure; the spatial sphere has no boundary, and any other boundary or domain conditions are stated as input. The rotation group is $\operatorname{Spin}(4)=SU(2)_1\times SU(2)_2$. Let $E$ be the dimensionless self-adjoint conformal Hamiltonian, $J_1,J_2$ the self-adjoint Cartan generators of the two rotation factors, and $R$ the self-adjoint $U(1)_R$ charge. Normalize $R$ so that the chosen right-handed Poincare supercharge $Q=\widetilde Q_{\dot -}$ has $R$-charge $+1$ and $J_2$-weight $-\tfrac12$; it has $J_1$-weight zero. Its actual Hilbert adjoint in radial quantization is the conformal supercharge $Q^\dagger=\widetilde S^{\dot -}$. The model supplies a common invariant dense product domain, an even grading $\Gamma=(-1)^F$ with $Q$ and $Q^\dagger$ odd, $Q^2=(Q^\dagger)^2=0$, and the exact positive self-adjoint operator relation

$$\Delta=\frac12\{Q,Q^\dagger\}=E-2J_2-\frac32R\ge0.$$

The protected sector is $\ker\Delta=\ker Q\cap\ker Q^\dagger$, since on the common domain $\langle\Delta\psi,\psi\rangle=\tfrac12(\|Q\psi\|^2+\|Q^\dagger\psi\|^2)$. Define the two dimensionless commuting charges

$$J_+=J_1+J_2+\frac12R,\qquad J_-=J_2-J_1+\frac12R.$$

Also require the odd operator $\mathsf Q=(Q+Q^\dagger)/\sqrt2$ on the common domain to be self-adjoint and to satisfy $\mathsf Q^2=\Delta$ as a closed-operator equality. The model must supply the joint spectral calculus for $J_+,J_-$ and require that they commute with $Q,Q^\dagger,\Gamma,\Delta$ on the stated domains. For positive real fugacities $p,q\in(0,1)$ set $\Xi_{p,q}=p^{J_+}q^{J_-}$ by that joint spectral calculus. Require $\Delta$ to have countable pure-point spectrum with finite-dimensional positive-energy eigenspaces; its zero eigenspace may be infinite-dimensional. An admissible fugacity pair is one for which $\Xi_{p,q}e^{-\beta\Delta}$ is trace class for every dimensionless $\beta>0$ and the resulting supplied-basis diagonal sum is absolutely convergent. The **right-handed four-dimensional N=1 superconformal index** is

$$\mathcal I_R(p,q;\beta)=\sum_{e\in E^+}\langle\Xi_{p,q}e^{-\beta\Delta}e,e\rangle-\sum_{e\in E^-}\langle\Xi_{p,q}e^{-\beta\Delta}e,e\rangle,$$

where $E=E^+\sqcup E^-$ is a supplied orthonormal basis compatible with $\Gamma$ and the joint spectral data. The positive supercharge gap singles out $\ker\Delta$ as the protected sector, with signed fugacity weight $\Xi_{p,q}$; equality of the full heat supertrace with a trace over that sector is a separate conditional theorem. Other supercharges or central-charge sectors are not silently included. If the weighted trace-class or absolute-convergence condition fails, the expression is only a formal series until a separate regularization and its validity are supplied. No analytic convergence is asserted for all $p,q\in(0,1)$.

## Definition references

[Kinney et al., §3](https://arxiv.org/pdf/hep-th/0510251)

[Rastelli and Razamat, §2.1](https://arxiv.org/pdf/1608.02965)

[[def-countable-choice|The Axiom of Countable Choice]]

[[def-trace-class-operator|Trace class means a compact operator with summable singular values]]

[[def-trace-of-a-trace-class-operator|A trace is the absolutely convergent diagonal sum in a supplied Hilbert basis]]

[[def-qftx-susy-background-data|A rigid background fixes the spin/R geometry and model-specific spinor equation; it asserts no arbitrary-background existence]]
