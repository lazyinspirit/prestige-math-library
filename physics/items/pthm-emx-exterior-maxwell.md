---
id: pthm-emx-exterior-maxwell
kind: physics-theorem
title: Metric-free Maxwell equations and metric-dependent vacuum closure
status: draft
origin: session
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emx-excitation-form
  - def-emx-continuous-chain-integral
  - def-em-polarization-magnetization
  - post-em-vacuum-maxwell
  - def-em-si-conventions
  - def-emx-lorentz-star
  - lem-emx-lorentz-star-square
  - def-directional-and-partial-derivatives
  - thm-clairaut-schwarz-mixed-partials
  - thm-chain-rule-for-total-derivatives
  - def-standard-orientation-of-the-affine-simplex
  - def-smooth-singular-chain-and-cochain-complexes
  - def-smooth-singular-simplex
  - lem-emx-c1-stokes-on-standard-3-simplex
dependency_roles:
  def-emx-excitation-form: formulation-prerequisite
  def-emx-continuous-chain-integral: mathematical-premise
  def-em-polarization-magnetization: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  def-em-si-conventions: formulation-prerequisite
  def-emx-lorentz-star: mathematical-premise
  lem-emx-lorentz-star-square: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-standard-orientation-of-the-affine-simplex: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-smooth-singular-simplex: mathematical-premise
  lem-emx-c1-stokes-on-standard-3-simplex: mathematical-premise
physical_scope: Conditional smooth classical Maxwell model on the fixed oriented SI laboratory chart. The exterior equations encode the macroscopic component equations for C^1 fields and C^2 polarization and magnetization; the Hodge-star closure is only the stated vacuum case. Charge conservation is derived classically with the additional C^2 field regularity stated, and magnetic-flux constancy applies to a fixed lab-space cycle. No propagation or empirical claim is asserted.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture script
      url: https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf
      locator: Section 6.3, printed pp. 6.3–6.4 (PDF pp. 71–72), equations (6.14)–(6.16), the four SI Maxwell equations, current continuity as a consistency relation, and magnetic-flux integral laws; Section 5.3, PDF pp. 62–63, the displacement field.
    - title: Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, Recent developments in premetric classical electrodynamics, arXiv:physics/0610221v1
      url: https://arxiv.org/pdf/physics/0610221
      locator: Sections 2 and 4, PDF pp. 3–6, equations (1), (3)–(5), and (9)–(10), exterior current/excitation and field-strength equations and their 1+3 decompositions; Section 6, PDF pp. 8–9, equations (25)–(26), metric-dependent vacuum closure.
proof_strategy: direct
---

## Statement

Let $I$ be a nonempty open time interval and $\Omega$ a nonempty open spatial region in the fixed oriented SI laboratory chart. Suppose $E$ and $B$ are jointly $C^1$, $P$ and $M$ are jointly $C^2$, and the fields satisfy the adopted smooth vacuum Maxwell equations. Define $D,H,\rho_f,J_f,F,G$, and the free-current form $\mathcal J$ by the framework material definitions and the excitation-form definition. Then $dF=0$ and $dG=\mathcal J$ are equivalent to the four macroscopic component equations

$$\operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{div}D=\rho_f,\qquad \operatorname{curl}H=J_f+\partial_tD.$$

These four equations follow from the adopted smooth vacuum equations and the free/bound source definitions, without assuming a material constitutive law. On a vacuum region, where $P=M=0$, the metric-dependent closure is $G=(\mu_0 c)^{-1}\star_\eta F$, with $\star_\eta^2=-\operatorname{id}$ on 2-forms. If $E,B,P,M$ are $C^2$, then $d\mathcal J=0$, equivalently $\partial_t\rho_f+\operatorname{div}J_f=0$. For any fixed finite real smooth singular 2-cycle $z$ in $\Omega$, the magnetic flux $\Phi_z(t)$, defined by the $C^1$ cycle-integral convention of the excitation-form definition, is independent of $t\in I$ when $z$ is transported only by the laboratory-time slices.

## Statement references

[[def-emx-excitation-form]]

[[def-emx-continuous-chain-integral]]

[[def-em-polarization-magnetization]]

[[post-em-vacuum-maxwell]]

[[def-em-si-conventions]]

[[def-emx-lorentz-star]]

[[lem-emx-lorentz-star-square]]

[[lem-emx-c1-stokes-on-standard-3-simplex]]

## Facts & Assumptions

**Given:** $E,B,P,M$ and their derived free/bound source fields on $I\times\Omega$, with the regularity and adopted smooth Maxwell branch in the Statement.

[A1] [[post-em-vacuum-maxwell]] adopts $\operatorname{div}E=\rho/\epsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ in the smooth branch, and excludes magnetic-source terms.

[A2] [[def-em-polarization-magnetization]] defines $\rho_b=-\operatorname{div}P$, $J_b=\partial_tP+\operatorname{curl}M$, $\rho_f=\rho-\rho_b$, $J_f=J-J_b$, $D=\epsilon_0E+P$, and $H=\mu_0^{-1}B-M$, for $P,M$ of class $C^2$.

[F1] [[def-emx-excitation-form]] fixes $F,G,\mathcal J$, their $C^1$ coordinate exterior derivative, the free-current sign convention, and the $C^1$ cycle-flux integral.

[F2] [[def-em-si-conventions]] gives $\epsilon_0=(\mu_0c^2)^{-1}$.

[F3] [[def-emx-lorentz-star]] gives the oriented coframe, signature $(-+++)$, and the basis formula for $\star_\eta$.

[F4] [[lem-emx-lorentz-star-square]] gives $\star_\eta^2=-\operatorname{id}$ on 2-forms in that exact convention.

[F5] [[def-directional-and-partial-derivatives]] defines coordinate partial derivatives as one-variable derivatives along coordinate lines, used below in the laboratory coordinates.

[F6] [[thm-clairaut-schwarz-mixed-partials]] says that second partial derivatives of a $C^2$ function commute.

[F7] [[def-standard-orientation-of-the-affine-simplex]] gives the positive affine coordinates and signed-face formula for each standard simplex. [[def-smooth-singular-simplex]] defines a smooth singular simplex as a map admitting a smooth extension to an open neighbourhood of its parameter simplex; [[def-smooth-singular-chain-and-cochain-complexes]] defines these maps' finite real chains with this signed boundary.

[F8] [[lem-emx-c1-stokes-on-standard-3-simplex]] proves $\int_Td\eta=\int_{\partial T}\eta$ for any $C^1$ 2-form on a neighbourhood of the standard parameter simplex, using continuous-form Riemann integrals.

[F9] [[thm-chain-rule-for-total-derivatives]] gives $\partial_i(f\circ q)=\sum_\lambda(\partial_\lambda f)(q)\partial_iq^\lambda$ for the $C^1$ coefficient functions used in the prism pullback.

[F10] [[def-emx-continuous-chain-integral]] defines the slot pullback formula for continuous forms and its coefficient expression on smooth parameter simplices.

## Proof

**Given:** The smooth vacuum equations [A1], the C^2 material definitions [A2], and the forms and derivative convention [F1].

1.1 Expand in the fixed chart. The spatial part of $dF$ is $(\operatorname{div}B)vol_3$ and its $dt$ part is $dt\wedge(\partial_t\mathcal B+d_\Omega\mathcal E)$, where $d_\Omega\mathcal E=(\partial_2E_3-\partial_3E_2)dx^2\wedge dx^3+(\partial_3E_1-\partial_1E_3)dx^3\wedge dx^1+(\partial_1E_2-\partial_2E_1)dx^1\wedge dx^2$. Thus $d_\Omega\mathcal E$ has the curl components in the ordered spatial 2-form basis. Likewise, the spatial part of $dG$ is $(\operatorname{div}D)vol_3$ and its $dt$ part is $dt\wedge(\partial_t\mathcal D-d_\Omega\mathcal H)$, where $d_\Omega\mathcal H$ is given by the same curl formula with $H$ in place of $E$; $\mathcal J=\rho_f vol_3-dt\wedge\mathcal J_{\mathrm{sp}}$. These coefficient identities follow by applying the $C^1$ component formula of [F1] to each displayed wedge term. Equality of the independent spatial and $dt$ coefficients therefore gives both directions of the claimed equivalence. [F1, F5, given, algebra]

1.2 In vacuum $P=M=0$, so $D=\epsilon_0E$ and $H=\mu_0^{-1}B$ by [A2]. Applying the basis formula [F3] to the six terms of $F$ gives $\star_\eta F=c\,dt\wedge(B_1dx^1+B_2dx^2+B_3dx^3)+c^{-1}(E_1dx^2\wedge dx^3+E_2dx^3\wedge dx^1+E_3dx^1\wedge dx^2)$. Using $\epsilon_0\mu_0c^2=1$, this equals $\mu_0cG$. The Lorentzian sign check $\star_\eta^2=-\operatorname{id}$ on 2-forms is [F4], so the closure has the stated signature convention. [A2, F2, F3, F4, given, algebra]

2.1 From [A1] and [A2], $\operatorname{div}D=\epsilon_0\operatorname{div}E+\operatorname{div}P=\rho+\operatorname{div}P=\rho-\rho_b=\rho_f$. Also, $\operatorname{curl}H=\mu_0^{-1}\operatorname{curl}B-\operatorname{curl}M=J+(\mu_0c^2)^{-1}\partial_tE-\operatorname{curl}M=J+\epsilon_0\partial_tE-\operatorname{curl}M$. Since $J_f=J-\partial_tP-\operatorname{curl}M$ and $\partial_tD=\epsilon_0\partial_tE+\partial_tP$, this is $\operatorname{curl}H=J_f+\partial_tD$. The two remaining component equations, $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$, are unchanged from [A1]. Thus the component equations hold, and step 1.1 gives $dF=0$ and $dG=\mathcal J$. [A1, A2, F2, step 1.1, algebra]

3.1 Under the additional $C^2$ hypothesis, $\mathcal J=dG$ is $C^1$ and $d\mathcal J$ is defined by [F1]. In repeated-index notation, $d(dG)=\frac12\partial_\kappa\partial_\lambda G_{\mu\nu}\,dx^\kappa\wedge dx^\lambda\wedge dx^\mu\wedge dx^\nu$. Terms with $\kappa=\lambda$ vanish by alternation; for each $\kappa\ne\lambda$, exchanging the derivative indices leaves the coefficient unchanged by [F6] and reverses the wedge sign. Thus all terms cancel and $d\mathcal J=d(dG)=0$. From the definition $\mathcal J=\rho_f vol_3-dt\wedge\mathcal J_{\mathrm{sp}}$ in [F1], its coefficient along $dt\wedge vol_3$ is $\partial_t\rho_f+\operatorname{div}J_f$; setting this coefficient to zero gives the stated continuity equation. [F1, F6, given, algebra, step 2.1]

4.1 Take $t_0<t_1$ in $I$ and let $e_0,e_1,e_2$ be the ordered vertices of $\Delta^2$. The product prism has the oriented triangulation $P=\tau_0-\tau_1+\tau_2$, with $\tau_0=[(t_0,e_0),(t_1,e_0),(t_1,e_1),(t_1,e_2)]$, $\tau_1=[(t_0,e_0),(t_0,e_1),(t_1,e_1),(t_1,e_2)]$, and $\tau_2=[(t_0,e_0),(t_0,e_1),(t_0,e_2),(t_1,e_2)]$. In coordinates $(t,u^1,u^2)$, their ordered vertex determinants are $t_1-t_0,-(t_1-t_0),t_1-t_0$, so the coefficients orient all three simplices consistently. Applying the signed-face formula [F7] cancels their internal faces and gives $\partial P=\iota_{t_1\#}\Delta^2-\iota_{t_0\#}\Delta^2-P(\partial\Delta^2)$, where $\iota_t(u)=(t,u)$ and $P(\partial\Delta^2)=P([e_1,e_2])-P([e_0,e_2])+P([e_0,e_1])$, with $P([e_a,e_b])=[(t_0,e_a),(t_1,e_a),(t_1,e_b)]-[(t_0,e_a),(t_0,e_b),(t_1,e_b)]$. For each singular simplex $\sigma$ in $z$, compose these parameter maps with $q_\sigma(t,u)=(t,\sigma(u))$. The top and bottom chains become the time-slice copies of $z$; after summing with the real coefficients of $z$, side terms cancel because $\partial z=0$. Each composite $q=q_\sigma\circ\tau_i$ is a smooth singular 3-simplex into $U$: the affine parameter maps and the smooth-simplex extensions of $\sigma$ give an extension to a neighbourhood, which may be restricted so its image lies in the open set $U$. Hence $q^*F$ is a $C^1$ two-form on a neighbourhood of its standard parameter simplex. Write $F=\frac12F_{\mu\nu}(y)dy^\mu\wedge dy^\nu$ in laboratory coordinates. By [F10], the pullback coefficients are $\eta_{ij}=F_{\mu\nu}(q)\partial_iq^\mu\partial_jq^\nu$, so $(d\eta)_{kij}=\partial_k\eta_{ij}+\partial_i\eta_{jk}+\partial_j\eta_{ki}$. By [F9], the terms differentiating $F_{\mu\nu}$ are $(\partial_\lambda F_{\mu\nu})(q)(\partial_kq^\lambda\partial_iq^\mu\partial_jq^\nu+\partial_iq^\lambda\partial_jq^\mu\partial_kq^\nu+\partial_jq^\lambda\partial_kq^\mu\partial_iq^\nu)$, which is exactly $(dF)_{\lambda\mu\nu}(q)\partial_kq^\lambda\partial_iq^\mu\partial_jq^\nu$. The remaining terms are $F_{\mu\nu}(q)(\partial_{ki}q^\mu\partial_jq^\nu+\partial_iq^\mu\partial_{kj}q^\nu+\partial_{ij}q^\mu\partial_kq^\nu+\partial_jq^\mu\partial_{ik}q^\nu+\partial_{jk}q^\mu\partial_iq^\nu+\partial_kq^\mu\partial_{ji}q^\nu)$. The first and fourth cancel after interchanging $\mu,\nu$ and using $\partial_{ki}q=\partial_{ik}q$; the second and fifth cancel by $\partial_{kj}q=\partial_{jk}q$; the third and sixth cancel by $\partial_{ij}q=\partial_{ji}q$. Each cancellation uses $F_{\mu\nu}=-F_{\nu\mu}$ and [F6]. Thus $d(q^*F)=q^*(dF)=0$ by step 2.1. The $C^1$ Stokes identity [F8] applies to each pullback on the standard parameter 3-simplex, so the boundary integrals sum to zero. The top and bottom terms are $\Phi_z(t_1)$ and $-\Phi_z(t_0)$ because the time-slice pullback of $F=\mathcal B-dt\wedge\mathcal E$ is $\mathcal B$ by [F1]. Finite-chain linearity in [F1] gives $\Phi_z(t_1)-\Phi_z(t_0)=0$. Hence the cycle flux is constant. [F1, F6, F7, F8, F9, F10, step 2.1, given] ∎
