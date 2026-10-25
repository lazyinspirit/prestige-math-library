---
id: ex-aqft-qed-threshold-matching
kind: example
title: One-loop electron-muon QED threshold matching and running
status: draft
origin: pipeline
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 5
deps:
  - def-aqft-scheme-and-wilson-coefficients
  - def-aqft-threshold-matching-map
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-scheme-and-wilson-coefficients: mathematical-premise
  def-aqft-threshold-matching-map: formulation-prerequisite
physical_scope: The source-reported one-loop decoupling-subtraction running of the electromagnetic coupling in QED with an electron and a muon; no experimental value, all-orders result, or model-independent threshold claim.
axiom_base: "ZF + AC_omega, inherited through the general threshold-matching data interface; the displayed integration uses no choice and no full Axiom of Choice is asserted."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: C. P. Burgess, Introduction to Effective Field Theory (full review)
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §4.1.4, equations (81), (85), and the boundary conditions immediately following (85); the first branch of (86) appears inconsistent and is not used.
    - title: Aneesh V. Manohar, Introduction to Effective Field Theories (full Les Houches lecture notes)
      url: https://arxiv.org/pdf/1804.05863
      locator: Chapter 7, §§7.1–7.2, equations (7.1)–(7.8), the one-loop fermion contribution to QED running and low-energy decoupling.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Use natural units $c=\hbar=1$ and Minkowski signature $\eta=\operatorname{diag}(-,+,+,+)$. In four spacetime dimensions assign mass dimensions $[x^\mu]=-1$, $[\partial_\mu]=1$, $[A_\mu]=1$, $[F_{\mu\nu}]=2$, $[\psi_f]=3/2$, $[e_{\mathrm{DS}}]=[\alpha_{\mathrm{DS}}]=0$, and $[m_e]=[M_\mu]=[\mu]=[Q]=1$. For $x\in\mathbb R^{1,3}$, regard $A_\mu(x)$, $\psi_e(x)$, and $\psi_\mu(x)$ as formal perturbative fields, with no classical-solution regularity or nonperturbative operator domain assumed. The potential $A=A_\mu dx^\mu$ is a real $U(1)$ one-form and $F=dA$ has components $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$. The fields $\psi_e,\psi_\mu$ are four-component complex Dirac spinors; use Clifford matrices satisfying $\{\gamma^\mu,\gamma^\nu\}=-2\eta^{\mu\nu}$ and the Dirac adjoint $\bar{\psi}=\psi^\dagger\gamma^0$. At each fixed renormalization scale $\mu$ in an active interval, let $e_{\mathrm{DS}}(\mu)>0$ and use $D_\nu=\partial_\nu+ie_{\mathrm{DS}}(\mu)A_\nu$ for fields of charge $-e_{\mathrm{DS}}(\mu)$, with gauge kinetic term $-\tfrac14F_{\mu\nu}F^{\mu\nu}$. For a real dimensionless gauge parameter $\chi(x)$, the convention is $A\mapsto A+d\chi$ and $\psi_f\mapsto e^{-ie_{\mathrm{DS}}(\mu)\chi}\psi_f$. Define the dimensionless running coupling by $\alpha_{\mathrm{DS}}(\mu)=e_{\mathrm{DS}}(\mu)^2/(4\pi)$. The decoupling-subtraction (DS) convention uses minimal subtraction within each interval of active charged fields, removes a charged field from the low-energy theory below its threshold, and matches the coupling continuously at that threshold. Set $\alpha_{\mathrm{DS}}(m_e)=\alpha_{\mathrm{phys}}>0$ as the low-energy boundary condition. The source-reported one-loop DS flow has two active Dirac fields for $\mu>M_\mu$, one for $m_e<\mu<M_\mu$, and none for $\mu<m_e$. For $q>0$, define $R_e(q)=\frac{1}{\alpha_{\mathrm{phys}}}-\frac{1}{3\pi}\log\!\left(\frac{q^2}{m_e^2}\right)$ and $R_\mu(q)=\frac{1}{\alpha_{\mathrm{phys}}}-\frac{1}{3\pi}\log\!\left(\frac{M_\mu^2}{m_e^2}\right)-\frac{2}{3\pi}\log\!\left(\frac{q^2}{M_\mu^2}\right)$. For positive evaluation scale $Q$ of mass dimension one, require $R_e(q)>0$ for every $q\in[m_e,Q]$ when $m_e<Q<M_\mu$; for $Q>M_\mu$, require $R_e(q)>0$ for every $q\in[m_e,M_\mu]$ and $R_\mu(q)>0$ for every $q\in[M_\mu,Q]$. The corresponding one-loop solutions are:
$$\frac{1}{\alpha_{\mathrm{DS}}(Q)}=\frac{1}{\alpha_{\mathrm{phys}}}-\frac{1}{3\pi}\log\!\left(\frac{Q^2}{m_e^2}\right)\qquad(m_e<Q<M_\mu),$$
and
$$\frac{1}{\alpha_{\mathrm{DS}}(Q)}=\frac{1}{\alpha_{\mathrm{phys}}}-\frac{1}{3\pi}\log\!\left(\frac{M_\mu^2}{m_e^2}\right)-\frac{2}{3\pi}\log\!\left(\frac{Q^2}{M_\mu^2}\right)\qquad(Q>M_\mu).$$
The two expressions agree continuously at $Q=M_\mu$. These are solutions of the supplied one-loop renormalization-group equations; they are not measured values, exact all-orders predictions, or numerical error estimates.

## Example references

[[def-aqft-scheme-and-wilson-coefficients]]

[[def-aqft-threshold-matching-map]]

[Burgess, full EFT review](https://arxiv.org/pdf/hep-th/0701053)

[Manohar, full EFT lecture notes](https://arxiv.org/pdf/1804.05863)

## Facts & Assumptions

**Given:** The QED field content and conventions in the Example, positive masses $m_e<M_\mu$, a positive low-energy coupling $\alpha_{\mathrm{phys}}$, the source-reported piecewise one-loop DS beta equations and boundary conditions, and an evaluation scale $Q$ for which the displayed solution remains positive.

[F1] [[def-aqft-scheme-and-wilson-coefficients]]: the renormalization scale is distinct from the cutoff, and its logarithm relative to a reference scale in $J$ is dimensionless.

[F2] [[def-aqft-threshold-matching-map]]: the matching map takes high-energy coefficient data to lower-energy coefficient data and identifies the selected renormalized amplitudes through the declared truncation with the same infrared regulator.

[F3] [Burgess, full EFT review](https://arxiv.org/pdf/hep-th/0701053), §4.1.4, equation (85) and its following boundary conditions: the source reports $\mu^2\,d\alpha_{\mathrm{DS}}/d\mu^2=2\alpha_{\mathrm{DS}}^2/(3\pi)$ above $M_\mu$, $\alpha_{\mathrm{DS}}^2/(3\pi)$ between $m_e$ and $M_\mu$, and zero below $m_e$, with continuity at $M_\mu$ and $\alpha_{\mathrm{DS}}(m_e)=\alpha_{\mathrm{phys}}$. This is a one-loop perturbative input, not an empirical observation. The first branch of printed equation (86) has an apparent typographical error: its denominator $M_\mu^2$ conflicts with the equation (85) flow and the stated low-energy boundary condition. The Verification derives the branch directly from (85) and that boundary condition.

[A1] The QED field content and DS threshold convention in the Example are the selected model assumptions. No measured value of either mass or coupling is supplied.

[A2] The one-loop beta equations are used as a truncated source-reported calculation. Higher loops and higher-dimension operators are omitted, with no numerical bound asserted.

## Verification

1.1 On an interval with fixed active-field count $n\in\{1,2\}$, put $u=\log(\mu^2/\mu_*^2)$ for any fixed reference scale $\mu_*$ in that interval. By [F3], $d\alpha_{\mathrm{DS}}/du=n\alpha_{\mathrm{DS}}^2/(3\pi)$. Since $\alpha_{\mathrm{DS}}>0$, differentiation of its reciprocal gives $d(1/\alpha_{\mathrm{DS}})/du=-n/(3\pi)$. Integrating between two scales in this interval yields the corresponding affine function of $\log\mu^2$. [given, F1, F3, A2, algebra]

2.1 Between $m_e$ and $M_\mu$, take $n=1$ and use the boundary value $\alpha_{\mathrm{DS}}(m_e)=\alpha_{\mathrm{phys}}$. Step 1.1 gives $1/\alpha_{\mathrm{DS}}(Q)=1/\alpha_{\mathrm{phys}}-(1/(3\pi))\log(Q^2/m_e^2)$ for $m_e<Q<M_\mu$. [F3, A1, step 1.1, algebra]

3.1 At $\mu=M_\mu$, the low-energy value is $1/\alpha_{\mathrm{DS}}(M_\mu)=1/\alpha_{\mathrm{phys}}-(1/(3\pi))\log(M_\mu^2/m_e^2)$. The DS boundary condition sets the high-energy coupling equal to this value at the threshold. Above it $n=2$, so integrating step 1.1 from $M_\mu$ to $Q$ gives $1/\alpha_{\mathrm{DS}}(Q)=1/\alpha_{\mathrm{phys}}-(1/(3\pi))\log(M_\mu^2/m_e^2)-(2/(3\pi))\log(Q^2/M_\mu^2)$ for $Q>M_\mu$. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Setting $Q=M_\mu$ in the upper expression removes its last logarithm and gives exactly the lower expression at the threshold. Setting $Q=m_e$ in the lower expression recovers $\alpha_{\mathrm{phys}}$. Thus the piecewise one-loop solution satisfies both stated boundary conditions and is continuous at the threshold. [F3, step 2.1, step 3.1, algebra] ∎
