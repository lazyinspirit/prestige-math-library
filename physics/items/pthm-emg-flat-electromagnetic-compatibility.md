---
id: pthm-emg-flat-electromagnetic-compatibility
kind: physics-theorem
title: "Flat electromagnetic conventions agree with the published Maxwell model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps: [def-emg-geometry-units, def-emg-lorentzian-forms, def-em-electromagnetic-tensor, def-em-si-conventions, def-em-sources, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, lem-emg-lorentz-hodge-calculus, post-emg-covariant-maxwell, post-em-minkowski-physical-model, post-em-vacuum-maxwell, post-sr-inertial-covariance, post-em-lorentz-coupling]
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-lorentzian-forms: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  post-emg-covariant-maxwell: physical-assumption
  post-em-minkowski-physical-model: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  post-sr-inertial-covariance: physical-assumption
  post-em-lorentz-coupling: physical-assumption
proof_strategy: direct
physical_scope: "Conditional flat-specialization identity for the smooth vacuum Maxwell subsystem and the local Lorentz force/power component dictionary in SI (-+++). The component identities require no matter model; their force/power interpretation requires a specified matter model satisfying the continuum coupling postulate. It does not assert that a nonzero field on the flat background solves the coupled Einstein equation, that curved spacetime has a global inertial chart, or that any adopted postulate is empirically true."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes, complete 236-page author-hosted PDF"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.2, equations (1.4)–(1.7), the SI vacuum Maxwell equations; §§5.3–5.4, tensor dictionary and Maxwell component equations, with the source's sign convention converted locally."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999), full scanned text"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§§7.3.3–7.3.4, SI Maxwell equations and magnetic-charge terms; §12.3, field tensor. The old edition's exact μ0 is not adopted."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §2.4.2, The Electromagnetic Field"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html"
      locator: "§2.4.2, equation (2.87), antisymmetric field-strength tensor and electric/magnetic component convention, with c=1."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, 12 October 2022 revision, full 125-page lecture notes (Internet Archive copy of the author-hosted PDF)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§6.2, equations (6.7)–(6.8), curved Maxwell system and flat inertial limit in Gaussian units; conventions converted to SI and the local F dictionary."
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval, $\Omega\subseteq\mathbb R^3$ a nonempty open region, and $U=I\times\Omega$ a flat inertial Minkowski model with metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and coordinates $x^0=ct$ and $x^i$ in metres. Let $E,B:U\to\mathbb R^3$ be jointly $C^1$, with every additional derivative displayed below existing and continuous, and let $\rho,J$ be continuous. Use $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, $j^0=c\rho$, $j^i=J^i$, and $\varepsilon_0=(\mu_0c^2)^{-1}$ as fixed by [[def-emg-geometry-units]].

On this flat specialization, consider the first-order tensor systems

$$(\mathrm{TM1})\quad \partial_\mu F^{\mu\nu}=-\mu_0j^\nu\quad(\nu=0,1,2,3),\qquad (\mathrm{TM2})\quad \partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0\quad(\lambda,\mu,\nu=0,1,2,3).$$

For smooth $F,j$ these are the flat coordinate expressions of [[post-emg-covariant-maxwell]]; at the stated $C^1$/continuous regularity they are well-defined component systems, without extending that postulate's physical scope. They hold if and only if the four adopted smooth-branch SI vacuum Maxwell equations hold on $U$:

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}B=\mu_0J+c^{-2}\partial_tE.$$

Here $\partial_t$ is at fixed spatial position and $\operatorname{div}$ and $\operatorname{curl}$ use the positively oriented Euclidean spatial basis. In addition, for the tensor contraction $f^\nu:=F^{\nu\lambda}j_\lambda$, its time and spatial components satisfy

$$f^0=(J\cdot E)/c,\qquad f^i=\rho E_i+(J\times B)_i.$$

If, in addition, $(\rho,J)$ is the source of an explicitly specified matter model on $U$ to which the continuum coupling of [[post-em-lorentz-coupling]] applies, then $cf^0$ and $(f^i)_{i=1}^3$ reproduce that model's adopted electromagnetic power and force densities. Every application of this physical interpretation must specify that matter model and verify the supplier's source and coupling hypotheses. For a prescribed current alone the displayed formulas are algebraic identities and assert no matter dynamics. The tensor systems have exactly eight independent scalar equations: four sourced components and four independent homogeneous components. All these are conditional component identities for the selected smooth model; no empirical premise is used. The result checks only the Maxwell subsystem on a flat background and the local force dictionary, not the coupled Einstein equation.

## Facts & Assumptions

**Given:** The flat inertial region $U=I\times\Omega$, its oriented coordinates and metric; the smoothness and continuity hypotheses in the Statement; the field/current component dictionary and SI constants; the curved Maxwell postulate on its smooth subclass; and the adopted flat smooth-branch vacuum Maxwell equations. For the additional physical force/power interpretation only, an explicitly specified matter model with source $(\rho,J)$ satisfying the continuum-coupling hypotheses is assumed.

[F1] The metric-selected connection has $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$. In a flat chart with constant $\eta_{ab}$, this formula applies with $g=\eta$. ([[def-emg-lorentzian-forms]])

[F2] In the positively oriented inertial tetrad, $F$ is alternating with $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, and $F^{ij}=\epsilon_{ijk}B_k$. The field components $E_i,B_i$ have units $\mathrm{V\,m^{-1}}$ and T. ([[def-emg-geometry-units]], [[def-em-electromagnetic-tensor]])

[F3] The current has $j^0=c\rho$, $j^i=J^i$, $[\rho]=\mathrm{C\,m^{-3}}$, and $[J^i]=\mathrm{A\,m^{-2}}$. Also $\mu_0>0$, $c>0$, and $\varepsilon_0=(\mu_0c^2)^{-1}$, so $\mu_0c^2\varepsilon_0=1$. ([[def-emg-geometry-units]], [[def-em-si-conventions]], [[def-em-sources]])

[F4] The coordinate partial derivatives are those of [[def-directional-and-partial-derivatives]]; with $x^0=ct$, the chain rule gives $\partial_0=c^{-1}\partial_t$, where $\partial_t$ is at fixed spatial position. In the oriented Euclidean spatial basis, $\operatorname{div}X=\sum_i\partial_iX_i$ and $(\operatorname{curl}X)_i=\epsilon_{ijk}\partial_jX_k$ for each differentiable vector field $X$. ([[def-divergence-and-curl-of-a-c1-vector-field]])

[F5] For a smooth two-form, $(dF)_{\lambda\mu\nu}=\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}$; $F_{ab}=-F_{ba}$, including $F_{aa}=0$. ([[lem-emg-lorentz-hodge-calculus]], [[def-em-electromagnetic-tensor]])

[F6] The three-dimensional cross product is defined by $(X\times Y)_i=\epsilon_{ijk}X_jY_k$ in the positively oriented Euclidean basis. ([[def-cross-product-in-r3]])

[A1] Adopt on the curved model the smooth SI field postulate $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$. ([[post-emg-covariant-maxwell]])

[A2] The inherited flat framework adopts $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, and $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ for its smooth branch. ([[post-em-vacuum-maxwell]])

[A3] Conditional interpretation only: if $(\rho,J)$ is the source of an explicitly specified matter model satisfying clause (ii) of [[post-em-lorentz-coupling]], its electromagnetic force density is $\rho E+J\times B$ and its power density is $J\cdot E$; these are adopted interaction terms, not a property of a prescribed current alone. ([[post-em-lorentz-coupling]])

[A4] The flat physical model uses the Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$ and inertial descriptions with $x^0=ct$; changes of inertial description are the adopted proper orthochronous isometries. This is the flat specialization used here, not a global chart claim for curved spacetime. ([[post-em-minkowski-physical-model]], [[post-sr-inertial-covariance]])

## Proof

1.1 By [A4], $\eta_{ab}$ is constant in this inertial chart, so every derivative $\partial_c\eta_{ab}$ vanishes. The connection formula in [F1] therefore gives $\Gamma^a{}_{bc}=0$, so $\nabla_aF^{ab}=\partial_aF^{ab}$ in this chart. The exterior equation in [A1] is expressed by the partial-derivative formula in [F5]. [given, A4, F1, A1, F5, algebra]

1.2 If two of $\lambda,\mu,\nu$ coincide, the cyclic sum in (TM2) vanishes: for example, when $\lambda=\mu$, it is $\partial_\lambda(F_{\lambda\nu}+F_{\nu\lambda})+\partial_\nu F_{\lambda\lambda}=0$ by [F5]; the cases $\lambda=\nu$ and $\mu=\nu$ have the same cancellation after writing out the three terms. For distinct indices, swapping the first two gives $S_{\mu\lambda\nu}=\partial_\mu F_{\lambda\nu}+\partial_\lambda F_{\nu\mu}+\partial_\nu F_{\mu\lambda}=-S_{\lambda\mu\nu}$ by $F_{ab}=-F_{ba}$; swapping the last two or first and last gives the same sign change by the same termwise substitution. Since transpositions generate all permutations, every distinct-index instance is, up to sign, one of the four triples $(1,2,3)$, $(0,1,2)$, $(0,2,3)$, $(0,3,1)$. [given, F5, algebra]

1.3 Lower the current index with $\eta$: $j_0=\eta_{00}j^0=-c\rho$ and $j_i=J_i$ by [F1] and [F3]. This determines every component needed for $f^\nu=F^{\nu\lambda}j_\lambda$. [given, F1, F3, algebra]

2.1 For $\nu=0$, alternation gives $F^{00}=0$ and [F2] gives $F^{i0}=-E_i/c$. Thus $\partial_\mu F^{\mu0}=-c^{-1}\sum_i\partial_iE_i=-(\operatorname{div}E)/c$, while $-\mu_0j^0=-\mu_0c\rho$ by [F3]. Since $c>0$, the $\nu=0$ equation of (TM1) is equivalent to $\operatorname{div}E=\mu_0c^2\rho=\rho/\varepsilon_0$. [given, F2, F3, F4, step 1.1, algebra]

2.2 For each $i\in\{1,2,3\}$, $\partial_\mu F^{\mu i}=\partial_0F^{0i}+\partial_jF^{ji}=c^{-2}\partial_tE_i+\epsilon_{jik}\partial_jB_k=c^{-2}\partial_tE_i-(\operatorname{curl}B)_i$. Here $F^{ji}=\epsilon_{jik}B_k=-\epsilon_{ijk}B_k$ and $\epsilon_{jik}=-\epsilon_{ijk}$; the right side of (TM1) is $-\mu_0J_i$. Rearranging this equality gives exactly the $i$th component of $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, and the rearrangement is reversible. [given, F2, F3, F4, step 1.1, algebra]

2.3 The $(1,2,3)$ instance of (TM2) is $\partial_1F_{23}+\partial_2F_{31}+\partial_3F_{12}=\sum_i\partial_iB_i=\operatorname{div}B$, since $\epsilon_{123}=\epsilon_{231}=\epsilon_{312}=1$ in [F2] and [F4]. Therefore this independent homogeneous equation is equivalent to $\operatorname{div}B=0$. [given, F2, F4, step 1.2, algebra]

2.4 Antisymmetry makes the $\lambda=0$ term of $f^0$ vanish, and [F2] gives $f^0=F^{0i}j_i=\sum_i(E_i/c)J_i=(J\cdot E)/c$. Under the additional matter-model hypothesis of [A3], this is its adopted electromagnetic power density divided by $c$. [given, A3, F2, step 1.3, algebra]

2.5 For each spatial index, $f^i=F^{i0}j_0+F^{ij}j_j=(-E_i/c)(-c\rho)+\epsilon_{ijk}B_kJ_j=\rho E_i+\epsilon_{ijk}J_jB_k=\rho E_i+(J\times B)_i$ by [F2] and [F6]. Under the additional matter-model hypothesis of [A3], this is its adopted electromagnetic spatial force density. [given, A3, F2, F6, step 1.3, algebra]

3.1 For a cyclic ordering $(i,j,k)$ of $(1,2,3)$, the $(0,i,j)$ instance is $\partial_0F_{ij}+\partial_iF_{j0}+\partial_jF_{0i}=c^{-1}\bigl(\partial_tB_k+\partial_iE_j-\partial_jE_i\bigr)=c^{-1}\bigl(\partial_tB_k+(\operatorname{curl}E)_k\bigr)$. This uses $F_{ij}=B_k$, $F_{j0}=E_j/c$, $F_{0i}=-E_i/c$, and $\epsilon_{kij}=1$ for this cyclic ordering. The three cyclic choices give the three components of $\operatorname{curl}E=-\partial_tB$, with each equation reversible. By the alternating property in step 1.2, these and step 2.3 account for every instance of (TM2). [given, F2, F4, step 1.2, step 2.3, algebra]

3.2 The units are consistent: $[\rho E]=\mathrm{C\,m^{-3}}\,\mathrm{V\,m^{-1}}=\mathrm{N\,m^{-3}}$, $[J\times B]=\mathrm{A\,m^{-2}}\,\mathrm{T}=\mathrm{N\,m^{-3}}$, and $[J\cdot E]=\mathrm{W\,m^{-3}}$, so $[f^0]=[J\cdot E]/c=\mathrm{N\,m^{-3}}$. Thus the tensor contraction has the units of force density; its force/power interpretation additionally requires the matter-model hypothesis of [A3], with SI normalization fixed by [F3]. [given, A3, F2, F3, step 2.4, step 2.5, algebra]

4.1 Steps 2.1 and 2.2 identify the four sourced equations in (TM1) exactly with Gauss's electric law and the Ampère–Maxwell law; steps 2.3 and 3.1 identify the independent homogeneous components exactly with Gauss's magnetic law and Faraday's law, while step 1.2 handles all repeated indices and reduces the remaining triples to those four. Thus (TM1) and (TM2) hold if and only if all four vector equations in the Statement hold. These are precisely the smooth vacuum equations adopted in [A2]; no second-derivative, boundary, weak-field, or singular-source claim has entered. [given, A2, step 2.1, step 2.2, step 1.2, step 2.3, step 3.1, algebra]

5.1 The first-order component equivalence and contraction identities use the stated regularity and flat dictionary [A4]; on the smooth subclass they identify the curved postulate [A1] with [A2]. Only the physical force/power interpretation uses the additional matter-model hypothesis [A3]. The curved continuation in [A1] remains an adopted physical model assumption; this component check does not infer an Einstein solution for nonzero $F$, a global inertial chart on a curved manifold, or empirical validity of any postulate. [given, A1, A2, A3, A4, step 4.1, step 3.2] ∎
