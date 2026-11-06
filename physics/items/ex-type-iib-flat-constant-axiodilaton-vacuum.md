---
id: ex-type-iib-flat-constant-axiodilaton-vacuum
kind: example
title: Flat Type IIB Vacuum with Constant Axiodilaton
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- post-type-iib-fiveform-self-duality-constraint
- pthm-type-iib-field-equations-with-self-duality
- def-type-iib-supergravity-killing-spinor-equations
- def-type-iib-spinor-bundle-data
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  pthm-type-iib-field-equations-with-self-duality: physical-result
  def-type-iib-supergravity-killing-spinor-equations: formulation-prerequisite
  def-type-iib-spinor-bundle-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.1–§7.2, Type IIB bosonic equations and Killing spinor equations; the zero-flux configuration is checked directly
      here.
  - title: 'Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1'
    url: https://arxiv.org/pdf/2410.19600v1
    locator: §3.2.3, equations (3.28)–(3.35), PDF pp. 30–32; independent Einstein-frame equations and self-duality convention.
physical_scope: A local classical source-free vacuum of the adopted two-derivative type IIB model. It is not a compactification,
  flux vacuum, stability result, or empirical claim.
aliases: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Let $M=\mathbb R^{1,9}$ with coordinates $(x^0,\ldots,x^9)$, metric $g_s=\eta=\operatorname{diag}(-1,1,\ldots,1)$, orientation $dx^0\wedge\cdots\wedge dx^9$, and time orientation defined by the future timelike cone containing $\partial_{x^0}$. Take constant finite real fields $\Phi=\Phi_0$ and $C_0=C_{00}$, and set $B_2=C_2=C_4=0$. The associated complex axiodilaton in this convention is $\tau:=C_0+i e^{-\Phi}$, so $\tau=C_{00}+i e^{-\Phi_0}$ is constant. Let $u_x:V\to T_xM$ be the global frame sending the standard basis to $(\partial_{x^0},\ldots,\partial_{x^9})$. Give $P=M\times\mathrm{Spin}^+(9,1)$ the right action $(x,s)\cdot t=(x,st)$ and the covering map $\widetilde\lambda(x,s)=u_x\circ\lambda(s)$; by the supplied spinor-bundle definition this is the product spin structure. Choose $0\ne\delta=(\delta_1,\delta_2)\in\Delta^+_{9,1}\oplus\Delta^+_{9,1}$ from the supplied Clifford module and define the constant section $\epsilon(x)=[(x,1),\delta]\in\Gamma(S_+\oplus S_+)$ using the right-principal associated-bundle convention of *Lorentzian Type IIB Spinor Bundle Data*.

Then this is a flat source-free solution of the bosonic equations in *Type IIB Field Equations with Five Form Self Duality* and is supersymmetric in the sense of *Type IIB Supergravity Killing Spinor Equations*. It is an exact solution of the stated classical truncation for every finite real $\Phi_0$ and $C_{00}$; no weak-coupling expansion or perturbative stability claim is made.

## Example references

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[pthm-type-iib-field-equations-with-self-duality]]

[[def-type-iib-supergravity-killing-spinor-equations]]

[[def-type-iib-spinor-bundle-data]]

[Hamilton, §7.1–§7.2](https://arxiv.org/pdf/1607.00327v3)

## Facts & Assumptions

**Given:** The smooth fields, metric, orientation, time orientation, and spin structure in the Example; the field equations and spinor condition referenced above.

[F1] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: $H_3=dB_2$, $G_1=dC_0$, $G_3=dC_2$, $G_5=dC_4$, $\widetilde G_3=G_3-C_0H_3$, and $\widetilde G_5=G_5-\tfrac12H_3\wedge C_2+\tfrac12G_3\wedge B_2$.

[F2] [[pthm-type-iib-field-equations-with-self-duality]]: the required system consists of the Einstein, dilaton, RR, NS, Bianchi, and self-duality equations stated there.

[F3] [[def-type-iib-spinor-bundle-data]]: the spinor bundle is the associated bundle $S=P\times_\rho\Delta$; a section is a smooth map to $S$ over the identity on $M$. In a local spin frame $s$, the lifted connection has component expression $\nabla^S_X[s,\psi]=[s,X(\psi)+d\rho(A_s(X))\psi]$.

[F4] [[def-type-iib-supergravity-killing-spinor-equations]]: supersymmetry means that a nonzero smooth spinor doublet solves the gravitino and dilatino equations with the displayed string-frame flux operators.

[A1] [[def-supergravity-conventions-and-normalizations]]: use Lorentzian signature $(-,+,\ldots,+)$, natural units, real dimensionless dilaton and axion, $2\kappa_0^2=(2\pi)^7\alpha'^4$, and the stated string-frame curvature convention.

## Verification

1.1 Under [A1], the constant scalars $\Phi_0,C_{00}$ are admissible real dimensionless fields. The potentials give $H_3=G_1=G_3=G_5=0$ by [F1], so both tilded strengths vanish as well. The metric coefficients are constant; every Christoffel coefficient and curvature component is zero, hence $R_{MN}=R=0$. The constant dilaton has $d\Phi=0$, $\nabla d\Phi=0$, and $\Box\Phi=0$. [A1, F1, algebra]

2.1 In [F2], every term in the Einstein, dilaton, RR, and NS equations is therefore zero; every Bianchi identity has zero left and right sides; and $*\widetilde G_5=0=\widetilde G_5$. Thus the bosonic configuration solves the complete source-free system. This conclusion concerns the stated classical truncation only. [F1, F2, step 1.1, algebra]

3.1 By [F3], the chosen constant doublet defines a smooth section of the associated bundle. In the global frame $u_x$, the metric coefficients are constant, so every Christoffel coefficient vanishes and the lifted spin-connection form $A_s$ is zero; the connection formula in [F3] therefore gives $\nabla^S\epsilon=0$. By [F1], every flux-dependent term in both operators of [F4] vanishes, and $d\Phi=0$; consequently both Killing-spinor equations reduce to $0=0$. The chosen nonzero doublet proves supersymmetry of this example. [F1, F3, F4, step 1.1, algebra] ∎
