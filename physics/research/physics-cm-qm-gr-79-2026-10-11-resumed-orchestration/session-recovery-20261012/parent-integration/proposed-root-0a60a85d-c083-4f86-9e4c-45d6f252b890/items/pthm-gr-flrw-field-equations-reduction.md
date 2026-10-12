---
id: pthm-gr-flrw-field-equations-reduction
kind: physics-theorem
title: "Reduction of the field equations of the homogeneous cosmological model to the Friedmann and acceleration equations, with derived continuity"
status: draft
origin: session
domain: physics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-flrw-homogeneous-cosmological-model, post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, def-gr-si-unit-and-coordinate-conventions, def-gr-flrw-model-data, def-gr-flrw-friedmann-system, prop-gr-flrw-equation-equivalences, lem-gr-flrw-ricci-and-einstein-tensors, lem-gr-flrw-comoving-congruence-expansion, lem-gr-flrw-metric-and-comoving-data, def-gr-perfect-fluid-matter-model, def-gr-stress-energy-tensor-field, prop-gr-dust-and-perfect-fluid-conservation-equations, pthm-gr-einstein-consistency-and-energy-conditions, def-gr-curvature-tensor-and-derived-tensors, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  post-gr-flrw-homogeneous-cosmological-model: physical-assumption
  post-gr-einstein-field-law: physical-assumption
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-flrw-model-data: mathematical-premise
  def-gr-flrw-friedmann-system: mathematical-premise
  prop-gr-flrw-equation-equivalences: mathematical-premise
  lem-gr-flrw-ricci-and-einstein-tensors: mathematical-premise
  lem-gr-flrw-comoving-congruence-expansion: mathematical-premise
  lem-gr-flrw-metric-and-comoving-data: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  pthm-gr-einstein-consistency-and-energy-conditions: physical-result
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
physical_scope: "Conditional reduction of the adopted field law for the homogeneous and isotropic cosmological model: the field equations hold exactly when the Friedmann and acceleration equations hold for the model data, and then the continuity equation holds as a consequence of the field law. The result is conditional on the adopted geometry, matter content and field law; it asserts no measured value, no existence of solutions for arbitrary equations of state and no claim that the model describes nature."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.18)-(8.23) and (8.32)-(8.36): the perfect-fluid tensor T^mu_nu = diag(-rho, p, p, p), its 0-component conservation and the 00/ij Einstein equations reducing to the Friedmann equations, printed pp. 221-223 (PDF pp. 228-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.6.1-4.6.2: the FRW Ricci and Einstein tensors, the continuity equation, the Friedmann equation (4.66) and the acceleration equation (4.67), printed pp. 200-203 (PDF pp. 207-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), sections 1.2.2 and 1.2.3: the perfect-fluid conservation equation (1.39) and the Friedmann equation (1.42), printed pp. 28-30 (PDF pp. 34-36)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.4 'Einstein's equation': the field equation (6.32) and the addition of the cosmological term (6.34), printed pp. 67-68 (PDF pp. 68-69)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the homogeneous cosmological model of
[[post-gr-flrw-homogeneous-cosmological-model]] with an FLRW model datum
$(I,\Sigma,\gamma,k,a)$, conversion constant $c>0$, a vacuum or comoving
perfect-fluid matter sector, and the field law of
[[post-gr-einstein-field-law]] with the same $c$, the parameter
$\Lambda\in\mathbb R$ and the framework's $G_N>0$
([[def-gr-si-unit-and-coordinate-conventions]],
[[post-gr-spacetime-and-classical-domain]]). Write
$g$ for the FLRW metric, $G_{ab}$ for its Einstein tensor, $T_{ab}$ for the
model's stress-energy tensor and, in the matter sector, let
$\varepsilon(t),p(t)$ be the homogeneous density and pressure and
$n=c^{-1}\partial_t$ the comoving congruence. Then:

**(a)** On the spacetime, the field equation
$G_{ab}+\Lambda g_{ab}=\dfrac{8\pi G_N}{c^4}T_{ab}$ holds if and only if the
Friedmann equation (F) and the acceleration equation (A) of
[[def-gr-flrw-friedmann-system]] hold for the data
$(c,G_N,\Lambda,I,k,a,\varepsilon,p)$. Here the vacuum sector is the case
$\varepsilon=p=0$, in which $T_{ab}=0$.

**(b)** If the field equation holds, then the continuity equation (C) of
[[def-gr-flrw-friedmann-system]] holds; in the vacuum sector it holds
trivially.

No converse of (b) is asserted: the continuity equation is not claimed to
suffice for the field equation, and no existence or uniqueness of solutions of
the reduced system is asserted for any data or equation of state.

## Facts & Assumptions

**Given:** The adopted homogeneous cosmological model with FLRW datum $(I,\Sigma,\gamma,k,a)$, its metric $g$, comoving congruence $n=c^{-1}\partial_t$, the field law with parameters $c,G_N,\Lambda$, and the vacuum or comoving perfect-fluid matter sector with homogeneous $\varepsilon(t),p(t)$.

[L1] The model's spacetime is a time-oriented smooth Lorentzian four-manifold, $n$ is the comoving congruence, and in a product chart $(x^0,x^1,x^2,x^3)$ with $x^0=t$ the metric has components $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a(t)^2\gamma_{ij}$; the physical four-velocity of the comoving observers is $U=cn$ ([[post-gr-flrw-homogeneous-cosmological-model]] clause (i), [[lem-gr-flrw-metric-and-comoving-data]], [[def-gr-flrw-model-data]]).

[L2] In the perfect-fluid sector the stress-energy tensor of the model is $T^{ab}=(\varepsilon+p)n^an^b+pg^{ab}$ with $n$ the fluid's unit four-velocity, which by clause (ii) of the postulate is the comoving congruence; in the vacuum sector $T=0$ ([[def-gr-perfect-fluid-matter-model]], [[def-gr-stress-energy-tensor-field]]).

[L3] The Einstein tensor of $g$ has, in the product chart, the components $G_{00}=3(\dot a^2+kc^2)/a^2$, $G_{0i}=0$ and $G_{ij}=-\bigl((2a\ddot a+\dot a^2)/c^2+k\bigr)\gamma_{ij}$ ([[lem-gr-flrw-ricci-and-einstein-tensors]] clause (c)). In the same chart $g_{00}=-c^2$, $g_{0i}=0$, $g_{ij}=a^2\gamma_{ij}$ and $\gamma_{ij}$ is the nonzero symmetric matrix of the spatial metric [L1].

[L4] In the comoving congruence the expansion is $\vartheta=\nabla_an^a=3H/c$, the comoving congruence is geodesic with vanishing acceleration $a^b=n^a\nabla_an^b=0$, and homogeneity gives $\partial_ip=0$ ([[lem-gr-flrw-comoving-congruence-expansion]], [[post-gr-flrw-homogeneous-cosmological-model]] clause (ii)).

[L5] For the perfect-fluid model, $\nabla^aT_{ab}=0$ holds on the matter domain if and only if the fluid equations $D\varepsilon+(\varepsilon+p)\vartheta=0$ and $(\varepsilon+p)a^b+h^{ba}\partial_ap=0$ hold, with $Df=n^a\partial_af$ and $h^{ab}=g^{ab}+n^an^b$ ([[prop-gr-dust-and-perfect-fluid-conservation-equations]], [[def-gr-perfect-fluid-matter-model]]).

[L6] The field law of [[post-gr-einstein-field-law]] is $G_{ab}+\Lambda g_{ab}=\frac{8\pi G_N}{c^4}T_{ab}$ on the matter domain, and every solution satisfies $\nabla^aT_{ab}=0$, a consequence of the equation and the contracted second Bianchi identity ([[post-gr-einstein-field-law]], [[pthm-gr-einstein-consistency-and-energy-conditions]] clause (a)). The equations (F), (A), (C) and (S) are those of [[def-gr-flrw-friedmann-system]], and (F) with (S) is equivalent to (F) with (A) ([[prop-gr-flrw-equation-equivalences]] clause (a)).

## Proof

**Proof technique:** compute the two sides of the field equation component by component in a product chart, then read off the reduced equations and the conservation consequence.

1.1 (Stress-energy components.) In the product chart, and in the perfect-fluid sector, [L2] gives $T_{ab}=(\varepsilon+p)n_an_b+pg_{ab}$ with $n_a=g_{ab}n^b$; by [L1], $n_0=g_{00}n^0=-c^2\cdot c^{-1}=-c$ and $n_i=0$, so $T_{00}=(\varepsilon+p)c^2-pc^2=\varepsilon c^2$, $T_{0i}=0$, and $T_{ij}=0+p\,a^2\gamma_{ij}=pa^2\gamma_{ij}$. In the vacuum sector $\varepsilon=p=0$ gives the same displays with $T=0$. [L1, L2, algebra]

2.1 (The $00$ component.) By [L3] and step 1.1, the $00$ component of the field equation reads $3(\dot a^2+kc^2)/a^2-\Lambda c^2=\frac{8\pi G_N}{c^4}\varepsilon c^2=\frac{8\pi G_N}{c^2}\varepsilon$; dividing by $3$ and rearranging gives $H^2+kc^2/a^2=\frac{8\pi G_N}{3c^2}\varepsilon+\frac{\Lambda c^2}{3}$, which is (F). The rearrangement is reversible, so the $00$ component holds exactly when (F) holds. [L3, step 1.1, algebra]

2.2 (The $ij$ components and the mixed components.) By [L3] and step 1.1, the $ij$ component reads $-\bigl(\frac{2a\ddot a+\dot a^2}{c^2}+k\bigr)\gamma_{ij}+\Lambda a^2\gamma_{ij}=\frac{8\pi G_N}{c^4}pa^2\gamma_{ij}$; since at each point the matrix $\gamma_{ij}$ has nonzero diagonal entries and is symmetric, this system of nine component equations holds exactly when the single scalar equation (S) of [[def-gr-flrw-friedmann-system]] holds. The mixed components hold identically: $G_{0i}=0$ by [L3] and $T_{0i}=0$ by step 1.1, so both sides vanish. [L3, step 1.1, algebra]

3.1 (Part (a).) Combining steps 2.1 and 2.2, the field equation holds exactly when (F) and (S) both hold; by [L6] and [[prop-gr-flrw-equation-equivalences]] clause (a), the pair (F) and (S) is equivalent to the pair (F) and (A). Hence the field equation holds exactly when (F) and (A) hold, which is claim (a), including the vacuum case treated throughout with $\varepsilon=p=0$. [L6, step 2.1, step 2.2, algebra]

4.1 (Part (b).) Assume the field equation holds. By [L6] its left-hand side has vanishing divergence, so $\nabla^aT_{ab}=0$ on the matter domain; in the vacuum sector $T=0$ and this is immediate, while in the fluid sector [L5] converts it into the two fluid equations. For the comoving congruence, $D\varepsilon=n^a\partial_a\varepsilon=c^{-1}\dot\varepsilon$ because $\varepsilon=\varepsilon(t)$ and $n=c^{-1}\partial_t$, and $\vartheta=3H/c$ by [L4]; the first fluid equation therefore reads $c^{-1}\dot\varepsilon+(\varepsilon+p)3H/c=0$, which after multiplying by $c$ is the continuity equation (C). The second fluid equation holds identically: $\partial_ip=0$ by homogeneity and $a^b=0$ by [L4], so both of its terms vanish. This proves claim (b). [L4, L5, L6, step 3.1, algebra] ∎

## Remarks

- **Empirical content.** The theorem is a conditional reduction: it relates
  the adopted field law to the three scalar equations for the model data. It
  carries no empirical premise and no measured number; the cosmological
  interpretation and the comparison with reported observations are the subject
  of the scope note [[rem-gr-flrw-observation-and-model-dependence]] and of
  future experiment items, not of this deduction.

- **Role of each equation.** By the theorem and
  [[prop-gr-flrw-equation-equivalences]], the reduced content of the field law
  is the Friedmann equation together with the acceleration equation; the
  continuity equation is a consequence of the field law through the fluid
  equations, and its derivation from (F) alone requires the division by $H$
  discussed in that proposition. The spatial-component equation (S) is the
  equivalent presentation of the spatial components used in the algebra of
  part (a).
