---
id: pthm-fd-smooth-material-kinematics
kind: physics-theorem
title: Mass density reconstruction and incompressibility
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - lem-fd-transport-and-density
  - lem-fd-c1-domain-jordan-integrals
  - lem-fd-continuous-localization-on-c1-domains
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-transport-and-density: mathematical-premise
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  lem-fd-continuous-localization-on-c1-domains: mathematical-premise
physical_scope: >-
  Conditional on the adopted smooth single-component mass balance, a C2
  orientation-preserving material motion with positive Jacobian, and a C1
  positive density. Vacuum, shocks, weak solutions, non-injective motions, and
  empirical validity are excluded.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ain A. Sonin, Fundamental Laws of Motion for Particles, Material Volumes, and Control Volumes, MIT 2.25 lecture notes"
      url: "https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf"
    - title: "Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4: Physical Conservation and Balance Laws & Thermodynamics"
      url: "https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf"
proof_strategy: direct
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Let $I\subseteq\mathbb R$ be an open time interval containing $0$, let $B\subseteq\mathbb R^3$ be a bounded $C^1$ reference domain, and let $\chi\in C^2(I\times U,\mathbb R^3)$ be an orientation-preserving family of diffeomorphisms on an open neighborhood $U\supseteq\overline B$, with $\chi(0,a)=a$ and $J(t,a)=\det D_a\chi(t,a)>0$. Set $u(t,\chi(t,a))=\partial_t\chi(t,a)$. Let the current density $\rho\in C^1$ be positive on the swept material region, and define $\rho_0(a)=\rho(0,a)$. Assume the adopted single-component mass balance with no sources or diffusion relative to $u$, on every bounded $C^1$ material subregion. Then this integral material-mass balance is equivalent, under these smoothness hypotheses, to $\partial_t\rho+\operatorname{div}(\rho u)=0$. It also forces $\rho(t,\chi(t,a))J(t,a)=\rho_0(a)$. Consequently, for positive density, $D_t\rho=0$ throughout the material region if and only if $\operatorname{div}u=0$ there. This is a conditional deduction within the adopted smooth model; it asserts no result for vacuum, shocks, weak solutions, or empirical applicability.

## Statement references

[Ain A. Sonin, MIT 2.25 lecture notes, §§1.1–1.3 (material mass balance)](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf)

[Andrew Hazel, MATH45061 Continuum Mechanics, Chapter 4, §4.1 (Lagrangian and Eulerian mass conservation)](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf)

## Facts & Assumptions

**Given:** The stated C2 orientation-preserving motion, its positive Jacobian, a C1 positive current density, the reference normalization $\chi(0,a)=a$, and the adopted no-mass-source material balance.

[A1] [[post-fd-continuum-balances]]: for each bounded $C^1$ material subregion, its total mass is constant; the adopted branch has no mass sources or diffusion relative to $u$.

[F1] [[lem-fd-transport-and-density]]: for a $C^2$ orientation-preserving motion and a $C^1$ scalar field $\rho$ on the swept open set, every compact Jordan material set $K$ has $M_K(t)=\int_{\chi_t(K)}\rho(t,x)\,dx$ with
$$M_K'(t)=\int_{\chi_t(K)}(\partial_t\rho+\operatorname{div}(\rho u))\,dx.$$
The same statement supplies the change-of-variables formula for $\chi_t(K)$, the identity $\frac{d}{dt}[\rho(t,\chi(t,a))J(t,a)]=J(D_t\rho+\rho\operatorname{div}u)(t,\chi(t,a))$, and the equivalence between continuity, constancy of all compact-Jordan material integrals, and invariance of the density-Jacobian product. This remains a draft mathematical supplier, and the proof uses its stated interface as a mathematical premise.

[F2] [[def-fd-quantity-and-frame-conventions]]: $u$ is the Eulerian velocity, $D_t=\partial_t+u\cdot\nabla$ is the material derivative, $\theta=\operatorname{div}u$, and $\operatorname{div}(\rho u)$ is the spatial divergence of the mass flux.

[F3] [[lem-fd-c1-domain-jordan-integrals]]: for a bounded open region with the stated local $C^1$ graph boundary, its compact closure and its image under a $C^1$ diffeomorphism are Jordan measurable; the boundaries have content zero, and integration over the open current region equals integration over its compact closure.

[F4] [[lem-fd-continuous-localization-on-c1-domains]]: for a continuous scalar residual, zero integrals on every bounded $C^1$ subdomain force pointwise zero, and nonnegative integrals on all such subdomains force pointwise nonnegativity.

## Proof

**Given:** [A1], [F1], the stated smooth motion and density, and $J>0$.

1.1 For each bounded $C^1$ subdomain $V\Subset B$, put $K=\overline V$. The adopted mass balance [A1] makes $\int_{\chi_t(V)}\rho$ constant in time. The Jordan-interface lemma [F3] identifies this with $M_K(t)=\int_{\chi_t(K)}\rho$, so $M_K'(t)=0$. [A1, F3]

1.2 Conversely, suppose $R:=\partial_t\rho+\operatorname{div}(\rho u)=0$. Then [F1] makes $M_K$ constant for every compact Jordan $K$. For $K=\overline V$ and each bounded $C^1$ subdomain $V\Subset B$, [F3] identifies the open-region mass integral with $M_K$; its value at $t=0$ is $\int_V\rho_0$. Thus the adopted integral balance follows, proving the reverse implication. [F1, F3, given]

2.1 Apply [F1] to $q=\rho$ and $K$ from step 1.1. Since $M_K'=0$, its material-transport formula and change of variables give
$$\int_V R(t,\chi(t,a))J(t,a)\,da=0,\qquad R:=\partial_t\rho+\operatorname{div}(\rho u).$$
Here [F3] replaces the integral over the compact closure by the equal integral over the open region $V$. This holds for every bounded $C^1$ subdomain $V\Subset B$. [F1, F3, step 1.1]

3.1 For fixed $t$, the function $a\mapsto R(t,\chi(t,a))J(t,a)$ is continuous on $B$. Step 2.1 and [F4] therefore imply that it vanishes throughout $B$. Since $J>0$, the local continuity equation $R=0$ holds on the swept material region. [F4, step 2.1, algebra]

4.1 Along each material label, [F1] gives $\frac{d}{dt}(\rho(t,\chi(t,a))J(t,a))=J(D_t\rho+\rho\operatorname{div}u)$. By [F2] and step 3.1 this derivative vanishes. The initial conditions $\chi(0,a)=a$, $J(0,a)=1$, and $\rho(0,a)=\rho_0(a)$ give $\rho(t,\chi(t,a))J(t,a)=\rho_0(a)$. Since $\rho>0$, $D_t\rho+\rho\operatorname{div}u=0$ is equivalent to $D_t\rho=0$ exactly when $\operatorname{div}u=0$. [F1, F2, step 3.1, algebra] ∎

## Authoring status

The mathematical motion and transport carriers are present and their complete statements/proofs were checked against this use. The transport lemma remains a draft mathematical supplier, and the proof's reliance on its stated interface is explicit. The open-to-compact Jordan conversion and continuous localization are supplied by [[lem-fd-c1-domain-jordan-integrals]] and [[lem-fd-continuous-localization-on-c1-domains]].
