---
id: def-qftx-principal-connection-form
kind: definition
title: Principal connection 1-form from a horizontal distribution
status: draft
origin: session
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the supplied smooth principal-connection and Lie(G) constructions; no arbitrary choice is used."
deps:
  - def-countable-choice
  - def-lie-group
  - def-smooth-principal-g-bundle
  - thm-the-tangent-space-at-the-identity-is-a-lie-algebra
  - def-principal-connection-and-vertical-curvature
  - def-exponential-map-of-a-lie-group
  - thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields
  - def-conjugation-and-the-adjoint-representation-of-a-lie-group
  - prop-adjoint-is-a-smooth-lie-group-representation
  - def-differential-of-a-smooth-map
  - thm-chain-rule-for-differentials-of-smooth-maps
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lie-group: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  thm-the-tangent-space-at-the-identity-is-a-lie-algebra: mathematical-premise
  def-principal-connection-and-vertical-curvature: mathematical-premise
  def-exponential-map-of-a-lie-group: mathematical-premise
  thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields: mathematical-premise
  def-conjugation-and-the-adjoint-representation-of-a-lie-group: mathematical-premise
  prop-adjoint-is-a-smooth-lie-group-representation: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-chain-rule-for-differentials-of-smooth-maps: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories (full text)"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.3.1, printed pp. 32–35: fundamental vertical vectors, the isomorphism with the vertical bundle, reproduction, equivariance, and the connection 1-form."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5, §5.4, printed pp. 92–94: connection 1-form axioms, reconstruction of the horizontal distribution, and variable gauge transitions."
verification:
  precheck: pending
---

## Definition

Assume $\mathrm{AC}_\omega$, and let $\pi:P\to M$ be a smooth right principal $G$-bundle for a finite-dimensional real Lie group $G$, with $\mathfrak g=\operatorname{Lie}(G)=T_eG$. A supplied principal connection is a smooth, right-invariant complement $TP=VP\oplus H$, where $VP=\ker d\pi$; write $v:TP\to VP$ for the projection along $H$, and let $K_H(X,Y)=-v([hX,hY])$ be its vertical-valued curvature. For $Z\in\mathfrak g$ and $p\in P$, define the fundamental vertical vector $Z_P(p)=\left.\frac{d}{dt}\right|_{t=0}p\exp_G(tZ)$. The orbit differential $\zeta_p: \mathfrak g\to V_pP$, $Z\mapsto Z_P(p)$, is a linear isomorphism, as proved below. Define the **principal connection 1-form** by

$$\omega_p(X):=\zeta_p^{-1}(v_pX),\qquad X\in T_pP.$$

Then $\omega$ is a smooth $\mathfrak g$-valued 1-form satisfying $\omega(Z_P)=Z$, $\ker\omega=H$, and $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$ for every fixed $g\in G$. Conversely, a smooth $\mathfrak g$-valued 1-form with the reproduction and equivariance properties determines the principal connection $H=\ker\omega$. The converted vertical curvature $\kappa_H:=\omega\circ K_H$ is a $\mathfrak g$-valued alternating 2-form; its equality with the Cartan curvature is established in the curvature lemma.

## Definition references

[Vákár, §1.3.1, principal connection 1-forms](https://arxiv.org/html/2110.06334)

[Neeb, Chapter 5 §5.4, connection 1-forms](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[[def-countable-choice|Countable-choice axiom inherited by this construction]]

[[def-smooth-principal-g-bundle|Smooth right principal bundle]]

[[thm-the-tangent-space-at-the-identity-is-a-lie-algebra|Lie algebra of the structure group]]

[[def-principal-connection-and-vertical-curvature|Horizontal complement and vertical-valued curvature]]

[[def-exponential-map-of-a-lie-group|Exponential curve used for fundamental vertical vectors]]

[[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields|One-parameter subgroup convention]]

[[def-conjugation-and-the-adjoint-representation-of-a-lie-group|Adjoint map as the differential of conjugation]]

[[prop-adjoint-is-a-smooth-lie-group-representation|Smooth adjoint representation]]

[[def-differential-of-a-smooth-map|Differential of a smooth map]]

[[thm-chain-rule-for-differentials-of-smooth-maps|Chain rule for differentials]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth right principal $G$-bundle $\pi:P\to M$, and a supplied principal connection $H$.

[A1] $\mathrm{AC}_\omega$ is countable choice: every countable family of nonempty sets has a choice function. [[def-countable-choice]]

[F1] The principal bundle has a smooth right action with equivariant local principal charts. [[def-smooth-principal-g-bundle]]

[F2] A principal connection is a smooth right-invariant complement $TP=VP\oplus H$, and $K_H(X,Y)=-v([hX,hY])$. [[def-principal-connection-and-vertical-curvature]]

[F3] $\mathfrak g=T_eG$ with the bracket transported from left-invariant smooth vector fields is a finite-dimensional real Lie algebra. [[thm-the-tangent-space-at-the-identity-is-a-lie-algebra]]

[F4] For each $W\in\mathfrak g$, the exponential map is defined by $\exp_G(W)=\gamma_W(1)$, where $\gamma_W:\mathbb R\to G$ is the unique one-parameter subgroup with $\gamma_W'(0)=W$. [[def-exponential-map-of-a-lie-group]], [[thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields]]

[F5] $\operatorname{Ad}_g=d(C_g)_e$, where $C_g(h)=ghg^{-1}$, and $\operatorname{Ad}$ is a smooth group representation. [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[prop-adjoint-is-a-smooth-lie-group-representation]]

[F6] For smooth maps, differentials compose by the chain rule. [[def-differential-of-a-smooth-map]], [[thm-chain-rule-for-differentials-of-smooth-maps]]

## Proof

1.1 Write $p=s(x)a$ in an equivariant principal chart, with $s$ its local section and $a\in G$. Then $\phi_p(h)=p h=s(x)(a h)$; freeness and transitivity give bijectivity on the fibre, and this coordinate formula gives a smooth inverse. Hence $\phi_p:G\to P_x$, $h\mapsto p h$, is a diffeomorphism, so its differential at $e$ is a linear isomorphism $T_eG\to T_pP_x=V_pP$. For each $t\in\mathbb R$, the curve $c_t(s):=\gamma_Z(ts)$ is a one-parameter subgroup with initial tangent $tZ$; uniqueness in [F4] gives $c_t=\gamma_{tZ}$. Thus $\exp_G(tZ)=\gamma_{tZ}(1)=\gamma_Z(t)$. The curve $t\mapsto p\exp_G(tZ)$ is therefore $\phi_p\circ\gamma_Z$, whose derivative at zero is $d(\phi_p)_eZ$; hence $\zeta_p$ is the stated isomorphism. [A1, F1, F3, F4, F6]

2.1 In the same chart, $\zeta_p$ is the derivative of the smooth action map and its inverse is the derivative of the inverse fibre coordinate, so the family $\zeta$ and its inverse are smooth bundle maps. The complement $TP=VP\oplus H$ gives a smooth bundle projection $v$, so $\omega=\zeta^{-1}\circ v$ is a smooth fibrewise-linear 1-form. On a vertical vector $Z_P(p)=\zeta_p(Z)$, the projection is the vector itself; therefore $\omega(Z_P)=Z$. Also $v_pX=0$ exactly when $X\in H_p$, so $\ker\omega=H$. [A1, F1, F2, F3, step 1.1]

2.2 For $g\in G$, let $R_g(p)=pg$. The maps $R_g\circ\phi_p$ and $\phi_{pg}\circ C_{g^{-1}}$ agree because $p h g=pg(g^{-1}hg)$. Differentiating at $e$ by [F6] gives $d(R_g)_p Z_P(p)=(\operatorname{Ad}_{g^{-1}}Z)_P(pg)$. Since $H$ and $VP$ are right-invariant, their projections commute with $dR_g$; applying the definition of $\omega$ yields $\omega_{pg}(dR_gX)=\operatorname{Ad}_{g^{-1}}\omega_p(X)$. [F1, F2, F5, F6, step 1.1]

3.1 Conversely, if $\omega$ has the stated reproduction and equivariance properties, define $v:=\zeta\circ\omega$ and $H:=\ker\omega$. Reproduction gives $v\circ\zeta=\zeta$, hence $v^2=v$, $\operatorname{im}v=VP$, and $TP=VP\oplus H$. Equivariance of $\omega$ and the orbit differential identity from step 2.2 make $H$ right-invariant; smoothness of $\omega$ makes it a smooth subbundle. Thus this is a principal connection and the construction is inverse to step 2.1. [F1, F2, step 1.1, step 2.1, step 2.2]

4.1 The imported curvature $K_H$ is a smooth alternating map with values in $VP$, and $\omega$ restricts to the inverse of $\zeta:P\times\mathfrak g\to VP$; consequently $\kappa_H=\omega\circ K_H$ is a well-defined smooth $\mathfrak g$-valued alternating 2-form. This is only the conversion of its target fibre; the Cartan identity is proved separately. [F2, step 1.1, step 2.1] ∎


