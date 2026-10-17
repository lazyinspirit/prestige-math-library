---
id: pthm-emg-local-electrovacuum-model
kind: physics-theorem
title: "Local evolution of the adopted electrovacuum model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - post-emg-einstein-maxwell-action
  - pthm-emg-action-field-equations
  - def-emg-geometry-units
  - def-emg-electrovacuum-cauchy-system
  - def-emg-constrained-electrovacuum-data
  - def-emg-periodic-high-sobolev-state
  - thm-emg-local-high-sobolev-electrovacuum
  - thm-emg-smooth-local-geometric-uniqueness
  - def-emg-local-potentials-and-circle-data
  - lem-emg-circle-connection-gluing
  - lem-emg-spacelike-slice-normal-collar
  - lem-emg-closed-two-form-exact-on-cauchy-product
  - thm-gr-smooth-cauchy-temporal-splitting
  - thm-smooth-inverse-function-theorem-on-manifolds
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  post-emg-einstein-maxwell-action: physical-assumption
  pthm-emg-action-field-equations: physical-result
  def-emg-geometry-units: formulation-prerequisite
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-constrained-electrovacuum-data: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  thm-emg-local-high-sobolev-electrovacuum: mathematical-premise
  thm-emg-smooth-local-geometric-uniqueness: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  lem-emg-spacelike-slice-normal-collar: mathematical-premise
  lem-emg-closed-two-form-exact-on-cauchy-product: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
physical_scope: >
  Conditional local evolution in the selected smooth, source-free, zero-matter-action
  Einstein-Maxwell branch. It covers the stated periodic high-Sobolev class and
  arbitrary smooth constrained data locally, subject to magnetic compatibility
  with one supplied normalized circle-bundle sector; electric initial data remain
  independent smooth data. There is no uniform noncompact time width, global-time,
  maximal-development, or empirical-validity claim.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), complete 132-page notes, §1.6, printed pp. 23–25 (PDF pp. 27–29)"
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
      locator: "The covariant source-free Maxwell two-form, electric/magnetic split, Einstein coupling, Lorenz-gauge Cauchy system and Maxwell constraint propagation. The source uses a global potential and supplies no coupled local existence proof."
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), complete 20-page paper"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "§§II.1–II.3, PDF pp. 3–8, Maxwell field-strength evolution, divergence constraints, electromagnetic stress and Einstein constraints. Gaussian normalization and the paper's opposite K sign are not imported; its Einstein evolution discussion explicitly does not prove coupled local existence."
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, 12 October 2022 revision, complete 125-page notes"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§6.2, equation (6.8), covariant Maxwell equations; §6.3, equations (6.27)–(6.28), electromagnetic stress and its source-free conservation exercise; §10.4, constraints. Gaussian normalization and c=1 conventions are not imported."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\Sigma$ be a nonempty
smooth oriented three-manifold without boundary, with smooth Riemannian metric
$h$, smooth symmetric covariant tensor $K$, and smooth tangent vector fields
$e,b$. Fix $\kappa>0$, $\mu_0>0$, and $\Lambda\in\mathbb R$, and use the
signature, SI conventions, and electromagnetic stress tensor of
[[def-emg-geometry-units]] and [[def-emg-electrovacuum-cauchy-system]].
Assume $(\Sigma,h,K,e,b)$ satisfies all four source-free constraints of
[[def-emg-constrained-electrovacuum-data]].

In the periodic case $\Sigma=\mathbb T^3_{2\pi L_0}$ with fixed $L_0>0$ in metres, for an integer $s\ge5$,
also consider smooth data with $h\in H^{s+1}$, $K,e,b\in H^s$, and the
uniform lower eigenvalue bound $h\ge c_0I$ for some $c_0>0$ specified by
[[def-emg-periodic-high-sobolev-state]]. Here the length-frame metric and curvature arrays and the orthonormal electric/magnetic arrays are composed with $[\theta]\mapsto[L_0\theta]$ for Sobolev norms on $\mathbb T^3_{2\pi}$; geometric spatial derivatives are $\partial_{X^i}=L_0^{-1}\partial_{\theta^i}$. On its common local interval the
field-strength solution has
$g\in L^\infty H^{s+1}\cap C^0H^s$,
$\partial_tg\in L^\infty H^s\cap C^0H^{s-1}$, and
$F\in L^\infty H^s\cap C^0H^{s-1}$, with the time coordinate measured in
length units as in [[def-emg-geometry-units]].

For the magnetic data define the smooth two-form
$\beta_b(X,Y):=\operatorname{vol}_h(b,X,Y)$. Assume the following explicit
initial bundle compatibility: there are a countable open cover $(U_i)$ of
$\Sigma$, smooth transition maps $g_{ij}:U_i\cap U_j\to U(1)$, smooth local
real one-forms $a_i$, and one constant $\kappa_0>0$. Require
$g_{ii}=1$, $g_{ij}g_{jk}=g_{ik}$ on triple overlaps, and
$a_j=a_i+\lambda(g_{ij})$ on every overlap, where
$\lambda(g)=-i g^{-1}dg$; also require $\kappa_0\,da_i=\beta_b$ on $U_i$.
Here $\kappa_0$
has units weber and the normalized local forms have the units in
[[def-emg-local-potentials-and-circle-data]]. This is the fixed
normalized circle-bundle sector of [[def-emg-local-potentials-and-circle-data]];
it imposes no global real-valued potential and no condition on the independent
electric data beyond the stated constraints.

In the action model of [[post-emg-einstein-maxwell-action]], choose the
zero-matter branch: the matter configuration space is a singleton and
$S_m\equiv0$, so its current and Hilbert tensor vanish. Then there is a smooth
time-oriented local development of the source-free system on a neighborhood
of the entire initial surface, after restriction to a possibly variable-width
globally hyperbolic Cauchy neighborhood. Its electromagnetic two-form is the
curvature of a smooth connection in the supplied normalized circle-bundle
sector, and its initial electric and magnetic fields are exactly $e,b$.
Any two such developments are related near the initial surface by a
data-fixing, time-orientation-preserving isometry carrying the metric and
two-form to one another. This is a conditional model deduction; it asserts
neither physical validity, a uniform positive time width for noncompact
$\Sigma$, global-time existence, nor a maximal-development result.

## Facts & Assumptions

**Given:** The smooth constrained data and constants above, the normalized initial transition and potential data, the zero-matter action specialization, and $\mathrm{AC}_\omega+\mathrm{DC}$.

[F1] [[post-emg-einstein-maxwell-action]]: the adopted total action is varied independently under compactly supported metric, fixed-sector connection, and matter variations. Its current and stress are defined by those variations. The action carrier is draft and its current Step-1 authoring record is ready; this is not an independent proof or physical acceptance.

[F2] [[pthm-emg-action-field-equations]]: under the compact-variation hypotheses, stationarity is equivalent to the Einstein equation, the sourced Maxwell equation $\nabla_aF^{ab}=-\mu_0j^b$, and the selected matter Euler–Lagrange condition. Its draft carrier and Step-1 record are current; the equivalence is used only at that inspected interface.

[F3] [[def-emg-geometry-units]]: the spacetime signature is $(-,+,+,+)$; $F$ is a smooth real two-form with SI frame components in tesla, and the zero-matter Einstein coupling is $\kappa=8\pi G_N/c^4$.

[F4] [[def-emg-electrovacuum-cauchy-system]]: the source-free model is $G_{ab}+\Lambda g_{ab}=\kappa T^{\rm EM}_{ab}$, $dF=0=d(\star_gF)$, with $T^{\rm EM}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$. The full initial two-form is reconstructed by $F(n,\mathsf e_i)=-e_i$ and $F(\mathsf e_i,\mathsf e_j)=\epsilon_{ijk}b_k$.

[F5] [[def-emg-constrained-electrovacuum-data]]: the four constraints are the electric and magnetic divergences, the scalar Hamiltonian constraint, and the covector momentum constraint with the stated $K$ and $e\times_hb$ signs.

[F15] [[def-emg-periodic-high-sobolev-state]]: $H^s$ is the real componentwise Fourier Sobolev space on $\mathbb T^3_{2\pi}$; the regularity orders and positive metric lower bound in the Statement match its definition.

[F6] [[thm-emg-local-high-sobolev-electrovacuum]]: smooth constrained data on an arbitrary smooth initial three-manifold have a smooth full development locally near each initial point; the periodic $H^s$, $s\ge5$, statement and its regularity bounds are separate clauses. This current draft supplier has `verification.precheck: pending` and a current Step-1-ready record; the local argument is conditional on its exact inspected interface, not independent acceptance.

[F7] [[thm-emg-smooth-local-geometric-uniqueness]]: complete smooth data for this same field-strength system have local smooth developments, a smaller globally hyperbolic Cauchy neighborhood, and data-fixing geometric uniqueness near the entire initial surface. Its actual draft argument is conditional on its inspected CP02 suppliers; its current `verification.precheck` is pending and its Step-1 record is ready. This consumer uses that conditional interface.

[F8] [[def-emg-local-potentials-and-circle-data]]: compatible local forms and circle transition functions with $a_j=a_i+\lambda(g_{ij})$ define one normalized bundle sector; the curvature is represented locally by $\kappa_0 da_i$.

[F9] [[lem-emg-circle-connection-gluing]]: such data on a four-manifold glue to a smooth principal $U(1)$ bundle with a connection and global normalized curvature; adding one global base one-form to its normalized local connection forms preserves the transition functions and bundle sector.

[F10] [[lem-emg-spacelike-slice-normal-collar]]: the normal exponential map is a diffeomorphism on a neighborhood of each point of a smooth spacelike initial slice, with differential $(a,X)\mapsto an+di(X)$. Its proof uses the actual smooth geodesic and inverse-function suppliers. This is a current local draft result with a complete conditional argument. Its frontmatter precheck field remains pending for engine recertification.

[F11] [[lem-emg-closed-two-form-exact-on-cauchy-product]]: on a globally hyperbolic development, two closed two-forms with the same pullback to the Cauchy surface differ by a global exact form. Its use is conditional on the current temporal-splitting supplier. The local draft proof is complete and uses that exact interface conditionally; its frontmatter precheck field remains pending for engine recertification.

[F12] [[thm-gr-smooth-cauchy-temporal-splitting]]: under $\mathrm{AC}_\omega$ and DC, a globally hyperbolic smooth spacetime has a complete timelike flow and a product splitting by Cauchy slices. Its current published carrier has verification.precheck pending; this proof records and conditionally uses its exact interface, not an independent acceptance.

[F13] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map with invertible differential is locally a diffeomorphism; this is the local step used in [F10] and [F11].

[F14] [[def-countable-choice]] and [[def-dependent-choice]]: the assumptions are respectively $\mathrm{AC}_\omega$ and DC. No full Axiom of Choice is used.

[A1] Choose the zero-matter specialization of [F1]. The zero functional has zero metric and connection variations, so $T^m=0$ and $j=0$; its singleton matter sector has no additional field equation.

[A2] On a countable cover of $\Sigma$, the supplied $g_{ij}$, $a_i$, and $\kappa_0$ satisfy the cocycle, transition, and curvature equations stated in the Statement. Only the magnetic two-form $\beta_b$ is curvature data; $e$ is independent normal electric data.

[A3] The choices in [F14] are adopted for the local existence, uniqueness, and temporal-splitting suppliers. They are model assumptions for this deduction, not empirical premises.

## Proof

**Given:** The data, assumptions, and supplier interfaces above.

1.1 The four constraints in [F5] are exactly the initial constraints for [F4]
with the same $K$, orientation, stress normalization, and definitions of $e,b$. The Cauchy data prescribe the magnetic two-form $\beta_b(X,Y)=\operatorname{vol}_h(b,X,Y)$ and the electric covector determined by $e$. In any resulting future-normal orthonormal frame, [F4] records their components as $F(n,\mathsf e_i)=-e_i$ and $F(\mathsf e_i,\mathsf e_j)=\epsilon_{ijk}b_k$. These are the six independent components of the initial field strength and require no global potential. [given, A2, F3, F4, F5, algebra]

2.1 Apply [F6] to these smooth constrained data and choice assumptions [A3].
Its arbitrary-slice clause gives a source-free solution locally near each initial point. In the periodic case, [F15] fixes the stated real Sobolev data convention and [F6] gives the displayed Sobolev regularity bounds. The stronger geometric patching and uniqueness supplier [F7] uses the same complete data and exact field-strength conventions; it yields a single smooth development on a variable-width neighborhood of the entire initial surface and a smaller globally hyperbolic Cauchy neighborhood. No positive uniform width is inferred. The resulting spacelike Cauchy embedding has a future unit normal by the definition of spacelike hypersurface; [F10] then supplies normal geodesic charts at each point, again with no uniform width. These charts justify the local observer-frame reconstruction after the spacetime exists; they are not used to assume local existence. [step 1.1, A3, F5, F6, F7, F10, F14, F15]

3.1 Let $i:\Sigma\hookrightarrow M$ be the Cauchy embedding of the globally hyperbolic neighborhood supplied in step 2.1, and let $\Phi_t$ be the complete flow from [F12]. The product-map construction in proof step 1.1 of [F11] defines $\Psi:\mathbb R\times\Sigma\to M$ by $\Psi(t,x)=\Phi_t(i(x))$ and proves that it is a diffeomorphism with $\Psi(0,x)=i(x)$. Pull the initial transition functions and local forms in [A2] to $\mathbb R\times\Sigma$ by the projection $\operatorname{pr}_\Sigma$, construct the reference connection there by [F8]–[F9], and transport it to $M$ by $\Psi$. Its curvature $\bar F$ satisfies $i^*\bar F=\beta_b=i^*F$. Both $F$ and $\bar F$ are closed by [F4] and [F9]. Apply [F11] on this globally hyperbolic Cauchy neighborhood to obtain a global one-form $\alpha$ with $F-\bar F=d\alpha$. Adding $\alpha/\kappa_0$ to the normalized local connection representatives preserves their transition functions by [F9] and changes the physical curvature by $\kappa_0d(\alpha/\kappa_0)=d\alpha$, hence to exactly $F$. Thus the field-strength solution lies in the supplied fixed circle-bundle sector; the temporal splitting and inverse-function inputs are exactly those used in [F10]–[F11]. [A2, A3, step 2.1, F4, F8, F9, F10, F11, F12, F13]

3.2 For any other solution of the same model with the same complete data, [F2] gives the same source-free field-strength system. [F7] then supplies a data-fixing, time-orientation-preserving isometry on a neighborhood of the initial surface carrying $g$ and $F$ to the other development. The argument asserts uniqueness of these field-strength fields, not uniqueness of a local connection representative. [step 1.1, step 2.1, A1, F2, F7]

4.1 By [A1], the selected matter variations vanish and $j=T^m=0$. The solution from step 2.1 satisfies the field equations in [F4], and step 3.1 realizes its $F$ as the curvature of a connection in the fixed sector. The converse direction of [F2] therefore makes this configuration stationary for the adopted action under every allowed compact variation. This is a conditional deduction from the action branch, not a proof that the model describes nature. [A1, F1, F2, F4, step 2.1, step 3.1]

5.1 Steps 2.1, 3.1, 4.1 and 3.2 prove the stated local existence, bundle sector, action stationarity and geometric uniqueness. No empirical premise, global-time claim, or maximal-development assertion has entered. [step 2.1, step 3.1, step 4.1, step 3.2] ∎
