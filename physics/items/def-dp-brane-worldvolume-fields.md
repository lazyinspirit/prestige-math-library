---
id: def-dp-brane-worldvolume-fields
kind: definition
title: Dp Brane Worldvolume Fields
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-dp-brane-open-string-boundary-condition
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-dp-brane-open-string-boundary-condition: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Leading massless open-string field content on one smooth flat Type II Dp-brane or on N coincident branes; excludes higher massive modes, non-Abelian DBI dynamics, and backreaction."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §§2.3–2.4, PDF pp. 12–15, Chan–Paton factors, the massless gauge vector, transverse fluctuations, and coincident-brane U(N) modes; Lecture III §3.1, PDF pp. 22–24, the massless open-string NS vector and GSO-projected Ramond spinor."
    - title: "J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "§2, PDF pp. 2–3: D-brane massless open-string excitations and their interpretation as transverse collective coordinates."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For one smooth flat Dp worldvolume $W$ from the preceding definition, the bosonic part of the leading massless open-string fields consists of a $U(1)$ connection $A$ on a Hermitian line bundle over $W$ and $9-p$ smooth transverse scalar fields specifying the embedding. In a fixed normalization, write the transverse displacement as $Y^a=2\pi\alpha'\Phi^a$, where $Y^a:W\to\mathbb R$ has length dimension, $\alpha'$ has length squared, and $\Phi^a$ has inverse-length dimension; the perturbed embedding is $X^a=y_0^a+Y^a$. Locally the connection is a real one-form in the convention $D=d-iA$, so its curvature is $F_A=dA$.

The open-string Ramond sector also contributes a massless fermion field $\Psi$. Choose a real 32-dimensional module $S_{10}$ for the ten-dimensional Clifford algebra, with generators $\Gamma^\mu$ satisfying $\{\Gamma^\mu,\Gamma^\nu\}=2\eta^{\mu\nu}I$, and put $\Gamma_{11}=\Gamma^0\Gamma^1\cdots\Gamma^9$. The field $\Psi$ is a smooth section of the trivial bundle $W\times S_{10}^{\chi}$, where $S_{10}^{\chi}=\ker(\Gamma_{11}-\chi I)$ is the 16-real-dimensional Majorana–Weyl spinor module with chirality $\chi\in\{-1,+1\}$ selected by the open-string GSO projection. For a general smooth free field the massless constraint is $\Gamma^\alpha\partial_\alpha\Psi=0$, with $\alpha=0,\ldots,p$ tangent to $W$. Its complexified plane-wave solutions $\Psi(x)=u e^{ip_\alpha x^\alpha}$, with real tangent momentum $p$ and nonzero polarization $u\in S_{10}^{\chi}\otimes_{\mathbb R}\mathbb C$, are exactly those with $\Gamma^\alpha p_\alpha u=0$; this implies $p^2=0$. Real solutions are obtained by taking real parts. This records the field content and free massless constraint, not an interacting worldvolume action.

For $N\in\mathbb N$, $N\ge1$, coincident branes with the same $W$ and $y_0$, the Chan–Paton gauge group is $U(N)$; the connection is a unitary connection on a rank-$N$ Hermitian bundle $E\to W$, and each transverse scalar is a Hermitian section of the adjoint bundle $\operatorname{End}(E)$. The fermion has the same adjoint Chan–Paton transformation law and, in the Hermitian-generator convention, is a smooth section of $W\times S_{10}^{\chi}\otimes_{\mathbb R}\operatorname{Herm}(E)$, where $\operatorname{Herm}(E)$ is the real bundle of Hermitian endomorphisms of $E$. This records the massless field content in the low-energy truncation only and asserts no exact non-Abelian DBI or fermion interaction action.

## Definition references

[[def-dp-brane-open-string-boundary-condition]]

[[def-st-string-tension-alpha-prime]]

## Remarks

Use length-valued coordinates $x^\alpha$ on $W$ and the dimensionless $U(1)$ gauge parameter in the convention $D_\alpha=\partial_\alpha-iA_\alpha$. Since $D_\alpha$ and $\partial_\alpha$ both have dimension length$^{-1}$, $A_\alpha$ has dimension length$^{-1}$. Thus $A=A_\alpha dx^\alpha$ has dimensionless holonomy, and $F_A=dA=\frac12F_{\alpha\beta}dx^\alpha\wedge dx^\beta$ has components $F_{\alpha\beta}$ of dimension length$^{-2}$. A $U(N)$ connection in the same normalization has the same component dimensions; this statement concerns units only and does not assert a non-Abelian DBI action.


The plane-wave characterization follows directly from $\Gamma^\alpha\partial_\alpha(u e^{ip\cdot x})=i(\Gamma^\alpha p_\alpha)u e^{ip\cdot x}$ and $(\Gamma^\alpha p_\alpha)^2=p^2I$ on the full Clifford module. It includes $p=0$, giving constant solutions; the zero field is allowed separately. No growth or Fourier-representability restriction is imposed on the general smooth free field. If such a field additionally defines a tempered distribution on the affine worldvolume, its Fourier transform is understood distributionally, with $\widehat{\partial_\alpha\Psi}=ip_\alpha\widehat\Psi$. In this class the free equation is equivalent to $\Gamma^\alpha p_\alpha\widehat\Psi=0$ as a distribution; multiplying once more gives $p^2\widehat\Psi=0$, hence support on the null cone. Null-cone support alone is not the spinor constraint, and the Fourier transform need not be an ordinary polarization function or an integral against a prescribed mass-shell measure.
