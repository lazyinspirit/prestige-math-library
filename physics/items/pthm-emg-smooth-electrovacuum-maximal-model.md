---
id: pthm-emg-smooth-electrovacuum-maximal-model
kind: physics-theorem
title: "Maximal smooth Cauchy development of adopted electrovacuum"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
proof_strategy: direct
deps:
  - post-emg-einstein-maxwell-action
  - pthm-emg-action-field-equations
  - def-emg-geometry-units
  - def-emg-electrovacuum-cauchy-system
  - def-emg-constrained-electrovacuum-data
  - def-gr-development-and-data-fixing-isometry
  - thm-emg-sourcefree-smooth-maximal-development
  - def-countable-choice
  - def-dependent-choice
  - def-emg-local-potentials-and-circle-data
  - lem-emg-circle-connection-gluing
  - lem-emg-closed-two-form-exact-on-cauchy-product
  - thm-gr-smooth-cauchy-temporal-splitting
dependency_roles:
  post-emg-einstein-maxwell-action: physical-assumption
  pthm-emg-action-field-equations: physical-result
  def-emg-geometry-units: formulation-prerequisite
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-emg-sourcefree-smooth-maximal-development: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-closed-two-form-exact-on-cauchy-product: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
physical_scope: >
  Conditional universal smooth globally hyperbolic development for the
  zero-matter-action Einstein-Maxwell field-strength model, with initial data
  in one supplied normalized circle-bundle sector. Maximality is within smooth
  globally hyperbolic developments; no geodesic completeness, rough or
  non-globally-hyperbolic extension maximality, global-time estimate, or
  empirical-validity claim is made.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations — a Dezornification, arXiv:1309.7591v3 (2015), Definitions and Theorems 2.6–2.8, printed pp. 10–12, and complete proofs §§3.1–3.3, printed pp. 12–24"
      url: "https://arxiv.org/pdf/1309.7591"
      locator: "The source is vacuum-only. Its smooth set-sized gluing and maximality argument is used only through the current mathematical EMG supplier, whose local existence and uniqueness obligations are separately supplied."
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), complete 132-page notes, especially §1.6, printed pp. 23–25 (PDF pp. 27–29)"
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
      locator: "Source-free Einstein-Maxwell Cauchy formulation and the distinction between Maxwell constraints and evolution. The notes use a global potential; no such global potential is assumed here."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\Sigma$ be a nonempty
connected smooth oriented three-manifold without boundary, with smooth
Riemannian metric $h$, smooth symmetric tensor $K$, and smooth tangent vector
fields $e,b$. Fix $\kappa>0$, $\mu_0>0$, $\Lambda\in\mathbb R$, and the SI
Lorentzian conventions of [[def-emg-geometry-units]]. Assume the four
constraints of [[def-emg-constrained-electrovacuum-data]]. Define
$\beta_b(X,Y)=\operatorname{vol}_h(b,X,Y)$, and supply a countable cover
$(U_i)$, transition maps $g_{ij}:U_i\cap U_j\to U(1)$, local real one-forms
$a_i$, and $\kappa_0>0$ satisfying $g_{ii}=1$, $g_{ij}g_{jk}=g_{ik}$,
$a_j=a_i+\lambda(g_{ij})$, and $\kappa_0 da_i=\beta_b$, where
$\lambda(g)=-i g^{-1}dg$. These are the normalized local data of
[[def-emg-local-potentials-and-circle-data]] restricted to the initial slice.
Adopt the zero-matter action branch
$S_m\equiv0$ of [[post-emg-einstein-maxwell-action]].

Then there is a smooth connected time-oriented globally hyperbolic
development $(M_{\max},g_{\max},F_{\max},i_{\max})$ of the source-free
[[def-emg-electrovacuum-cauchy-system]] with the complete data $(h,K,e,b)$.
The two-form $F_{\max}=\kappa_0 f_{\max}$ is the physical curvature of a
smooth connection in the bundle sector obtained by transporting the supplied
initial sector over a Cauchy product. Here $f_{\max}\in\Omega^2(M_{\max})$
is its normalized curvature, locally $f_{\max}=da_i$; the supplied constant
$\kappa_0>0$ has units Wb, so multiplication gives the SI physical curvature.
Every other smooth globally hyperbolic development with the same complete data
for which the adopted action is stationary embeds into this one by a
time-orientation-preserving isometric embedding that fixes $\Sigma$ and carries
$F$ to $F_{\max}$. Any two maximal developments are related by exactly one
data-fixing isometry of $(g,F)$. Maximality is within the smooth globally
hyperbolic solution class; it asserts no geodesic completeness, no maximality
among rough or non-globally-hyperbolic extensions, no global-in-time
regularity estimate, and no empirical validity. Here an affinely parametrized metric geodesic solves $\ddot x^a+\Gamma^a{}_{bc}\dot x^b\dot x^c=0$ on an interval; maximality of that solution forbids extension to a strictly larger interval with the same affine parameter. Geodesic completeness means every maximal affine geodesic has parameter domain all of $\mathbb R$.

## Facts & Assumptions

**Given:** The fixed source-free model and SI constants, smooth connected constrained data, compatible initial circle-connection data, the zero-matter action branch, and the choice assumptions stated above.

[F1] [[post-emg-einstein-maxwell-action]]: the adopted action uses independent compact metric, fixed-sector connection and matter variations.

[F2] [[pthm-emg-action-field-equations]]: stationary configurations of that action satisfy the Einstein and sourced Maxwell equations, and conversely those equations plus the selected matter equations imply stationarity.

[F3] [[def-emg-electrovacuum-cauchy-system]]: the source-free field-strength system is $G+\Lambda g=\kappa T^{\rm EM}$ and $dF=d(\star_gF)=0$, with the declared SI stress tensor and pullback conventions.

[F4] [[def-emg-constrained-electrovacuum-data]]: the complete initial fields and their four constraints have the $K,e,b$ signs and normalization stated in the Statement.

[F5] [[def-gr-development-and-data-fixing-isometry]]: a development includes the complete smooth field data and a Cauchy embedding; a data-fixing development embedding is a time-orientation-preserving isometric embedding onto an open subset, and maximality means every other development embeds into it. The direction of this embedding is from the candidate development into the maximal one.

[F6] [[thm-emg-sourcefree-smooth-maximal-development]]: under $\mathrm{AC}_\omega$ and DC, smooth connected constrained source-free field-strength data have a smooth globally hyperbolic maximal development, universal for other smooth globally hyperbolic field-strength developments, unique up to a unique data-fixing isometry carrying $F$. Its draft item and Step-1 readiness are current; its `verification.precheck` is pending. Its proof is conditional on the exact CP02 local existence/uniqueness interface and the inspected published GR maximal theorem, whose verification precheck is also pending.

[F7] [[def-emg-local-potentials-and-circle-data]] and [[lem-emg-circle-connection-gluing]]: the supplied local transition and normalized one-form data glue to a smooth fixed circle bundle; its physical curvature is $\kappa_0$ times the normalized curvature. Adding one global normalized base one-form changes the connection in that same bundle without changing its transition functions.

[F8] [[lem-emg-closed-two-form-exact-on-cauchy-product]]: on a globally hyperbolic development, a closed two-form agreeing on the Cauchy-slice restriction with the curvature of a reference connection differs from it by the exterior derivative of one global one-form. The lemma uses the current draft temporal-splitting exactness argument and the published temporal-splitting carrier, whose verification precheck is pending. This batch's local proof uses the exact interface conditionally; its frontmatter precheck remains pending for engine recertification.

[F9] [[thm-gr-smooth-cauchy-temporal-splitting]]: the temporal flow is complete and a Cauchy slice can be used as the zero slice of a smooth product diffeomorphism; the latter alignment is proved in [F8]. Its published proof is present, but its verification precheck is pending.

[F10] [[def-countable-choice]] and [[def-dependent-choice]]: the exact set-theoretic assumptions are $\mathrm{AC}_\omega$ and DC; no full AC is used.

[A1] Select the zero-matter action specialization. Then the matter variations vanish and the current and matter stress are zero.

[A2] The initial transition functions and local potentials satisfy the normalized cocycle and curvature equations from [[def-emg-local-potentials-and-circle-data]], with $\kappa_0 da_i=\beta_b$ for the magnetic two-form $\beta_b$.

## Proof

**Given:** The data and interfaces in the Statement and Facts & Assumptions.

1.1 The four constraints and complete initial field-strength data are exactly those of [F3]–[F4] with the fixed signature, SI constants, orientation, and $K$ sign. The normalized local potential data [A2] place the magnetic two-form in the supplied circle-bundle sector, while $e$ is independent normal electric data. The zero-matter action choice [A1] specializes [F1] and its field-equation interface [F2] to the source-free system [F3]. [given, A1, A2, F1, F2, F3, F4, algebra]

2.1 The constrained data in step 1.1 meet the exact smooth connected data hypotheses of [F6], with precisely its Countable Choice and Dependent Choice assumptions [F10]. Applying [F6] gives a smooth globally hyperbolic maximal field-strength development $M_{\max}$, universal for all smooth globally hyperbolic field-strength developments of these data and unique up to the stated data-fixing isometry. This constructs the field-strength development; its fixed-bundle connection realization is proved next. [step 1.1, F3, F4, F6, F10]

3.1 Let $i_{\max}:\Sigma\hookrightarrow M_{\max}$ be the Cauchy embedding and let $\Phi_t$ be the complete flow from [F9]. As in the product-map construction in proof step 1.1 of [F8], $\Psi_{\max}(t,x)=\Phi_t(i_{\max}(x))$ is a diffeomorphism $\mathbb R\times\Sigma\to M_{\max}$ with $\Psi_{\max}(0,x)=i_{\max}(x)$. Pull the initial local connection data [A2] to that product by $\operatorname{pr}_\Sigma$, construct its reference connection by [F7], and transport it to $M_{\max}$ by $\Psi_{\max}$. Its curvature $\bar F$ restricts to $\beta_b$ on the initial slice. Since $F_{\max}$ is closed by [F3] and agrees with $\bar F$ on that slice, [F8] gives a global one-form $\alpha$ with $F_{\max}-\bar F=d\alpha$. Adding $\alpha/\kappa_0$ to the normalized local connection forms retains their transition maps and changes the physical curvature by $\kappa_0d(\alpha/\kappa_0)=d\alpha$, giving $F_{\max}$. Thus the maximal field-strength development is realized in the supplied initial bundle sector. [step 2.1, A2, F3, F7, F8, F9]

4.1 Let another smooth globally hyperbolic development have the same complete data and be stationary for the adopted action. By [F2] and the zero-matter choice [A1], it solves the source-free system [F3], so the universal embedding from [F6] carries its metric and field strength into $M_{\max}$. On its Cauchy product, pull back the same initial transition data; as in step 3.1 they give a reference connection restricting to $\beta_b$. The other solution's field is closed and has that same slice restriction, so [F8] supplies one global exact adjustment and [F7] realizes it in the transported initial bundle sector. By the development definition [F5], this proves maximality within the stated smooth globally hyperbolic stationary class. [step 2.1, step 3.1, A1, F2, F3, F5, F6, F7, F8]

5.1 The uniqueness clause of [F6] gives exactly one data-fixing isometry between any two maximal metric/field-strength developments. Connection representatives need not be unique and are not additional fields in the compared development. The definition [F5] imposes no geodesic-completeness condition, so no such conclusion follows. [step 2.1, F5, F6] ∎
