---
id: pthm-gr-uniform-weak-slow-correspondence
kind: physics-theorem
title: "The controlled weak-field slow-motion correspondence with the Newtonian
  comparison model"
status: published
origin: session
domain: physics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-gr-stationary-weak-field-data,
    def-gr-newtonian-comparison-model-and-identification,
    thm-gr-weak-field-einstein-stress-hierarchy,
    lem-gr-weak-field-christoffel-bounds,
    lem-gr-weak-field-geodesic-acceleration,
    thm-gr-weak-field-scaled-trajectory-limit,
    post-gr-einstein-field-law,
    post-gr-ideal-clocks-and-free-fall,
    pthm-gr-free-fall-worldline-is-determined-by-initial-data,
    post-gr-spacetime-and-classical-domain,
    post-gr-field-and-matter-assumptions,
    def-gr-si-unit-and-coordinate-conventions,
    def-gr-timelike-worldline-and-proper-time,
    def-gr-smooth-lorentzian-objects,
    def-gr-metric-selected-connection,
    thm-gr-nondegenerate-levi-civita-and-tensor-derivative,
    def-gr-curvature-tensor-and-derived-tensors,
    def-gr-dust-matter-model,
    prop-gr-dust-and-perfect-fluid-conservation-equations
  ]
dependency_roles:
  def-gr-stationary-weak-field-data: formulation-prerequisite
  def-gr-newtonian-comparison-model-and-identification: formulation-prerequisite
  thm-gr-weak-field-einstein-stress-hierarchy: mathematical-premise
  lem-gr-weak-field-christoffel-bounds: mathematical-premise
  lem-gr-weak-field-geodesic-acceleration: mathematical-premise
  thm-gr-weak-field-scaled-trajectory-limit: mathematical-premise
  post-gr-einstein-field-law: physical-assumption
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  pthm-gr-free-fall-worldline-is-determined-by-initial-data: physical-result
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-dust-matter-model: formulation-prerequisite
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
physical_scope: "Conditional model-to-model correspondence inside the classical
  gravitational framework: given an Einstein family of spatially factored
  stationary weak-field data with an independent admissible nonnegative tilted
  dust source satisfying explicit weak-source and slow-tilt bounds, and a
  comparison reading against a Newtonian comparison model, the field hierarchy
  gives an error-qualified match between the Newtonian model's exact Poisson
  source and the dust rest-mass density; ideal test-body geodesics also converge
  to the comparison motions with a uniform O(epsilon) error on a fixed scaled
  time interval. Excludes: existence of the input family from prescribed
  Newtonian data, strong fields, fast motion, long-time or global limits,
  observational comparisons, measured values of constants, non-smooth or
  distributional sources, and any claim that the model or the correspondence
  describes nature. All conclusions are conditional on the adopted postulates
  and the stated hypotheses."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity,
        arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian limit as an
        asymptotic correspondence, the potential identification and the Poisson
        equation, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos,
        Michaelmas 2019), sections 5.1-5.1.2: the weak-field slow-motion
        correspondence, the Poisson equation and the particle acceleration,
        printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong\
        /gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022
        revision), section 4.2 and the Newtonian module, printed p. 42 (PDF p.
        43): the weak-field limit and the correspondence with Newtonian gravity"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk\
        /user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates [[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]],
[[post-gr-einstein-field-law]] in the direct-equation presentation and
[[post-gr-ideal-clocks-and-free-fall]]. Let stationary weak-field data
$(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ over spacetime region $\Omega$ have
spatial base $U=\pi(\Omega)$, form an Einstein family with
$\kappa=8\pi G_N/c^4$, and satisfy the independent admissible nonnegative
slow-dust hypotheses in clause (c) of
[[thm-gr-weak-field-einstein-stress-hierarchy]]. Write $\mu_\varepsilon$ for
that dust rest-mass density. Let a comparison reading with a Newtonian
comparison model $(U,\Phi_N,\rho_N,G_{\mathrm{cmp}})$ be adopted under
[[def-gr-newtonian-comparison-model-and-identification]], so that
$\Phi_N=\Phi=\varepsilon c^2\varphi$ and $G_{\mathrm{cmp}}=G_N$; the
Newtonian model satisfies its exact Poisson equation
$\Delta\Phi_N=4\pi G_{\mathrm{cmp}}\rho_N$ by definition.

Let $\varepsilon_*'$, $C_2$ and $C_3$ be the thresholds and constants of
[[thm-gr-weak-field-einstein-stress-hierarchy]],
[[lem-gr-weak-field-christoffel-bounds]] and
[[lem-gr-weak-field-geodesic-acceleration]]. Let $S_*>0$,
$0<\varepsilon\le\varepsilon_*'$, and put
$T_\varepsilon=LS_*/(\sqrt\varepsilon c)$ and
$U_L=\{X\in\mathbb R^3:LX\in U\}$,
$\psi(X)=\varphi(LX)$ on $U_L$. Assume there are an ideal freely falling
massive test body worldline $\gamma_\varepsilon$ and its spatial coordinate
curve $x_\varepsilon:[0,T_\varepsilon]\to U$ such that
$\gamma_\varepsilon(t)=(ct,x_\varepsilon(t))\in\Omega$,
$x_\varepsilon(t)\in K$, and
$|\dot x_\varepsilon(t)|\le C\sqrt\varepsilon c$.
Suppose also that hypotheses (H2)-(H3) of
[[thm-gr-weak-field-scaled-trajectory-limit]] hold on a compact convex
$K'\subseteq U_L$ containing both scaled trajectory ranges, with
$K_2=\sup_{X\in K'}\|D^2\psi(X)\|_{\mathrm{op}}<\infty$,
using the Euclidean vector norm and induced Hessian operator norm fixed in
[[thm-gr-weak-field-scaled-trajectory-limit]].

Then the following are conditional consequences of the adopted postulates,
the independent coupled Einstein-dust input, the comparison dictionary and
the stated mathematical hypotheses. No family or dust solution is asserted
to exist for prescribed Newtonian data.

**(a) Field and source correspondence.** At every $\mathbf x\in K$,

$$\Bigl|\kappa T_{00}(\varepsilon)-\frac{2\Delta\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{ij}(g(\varepsilon))|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{0i}(g(\varepsilon))|\le\frac{C_2\varepsilon^{3/2}}{L^2},$$

and the distinct source densities satisfy

$$|\Delta\Phi-4\pi G_N\mu_\varepsilon|\le\frac{C_2\varepsilon^2c^2}{L^2},\qquad |\rho_N-\mu_\varepsilon|\le\frac{C_2\varepsilon^2c^2}{4\pi G_NL^2},\qquad |\rho_\varepsilon-\mu_\varepsilon|\le\frac{C_d\varepsilon^2c^2}{G_NL^2},$$

where $\rho_\varepsilon=T_{00}/c^2$ is the relativistic coordinate density and $\mu_\varepsilon$ is the independently specified dust rest-mass density. The comparison model's Poisson equation remains exact; the approximation is the density matching.

**(b) Free-fall kinematics.** The assigned worldline $\gamma_\varepsilon$ is a future timelike geodesic of $g(\varepsilon)$ with $g(U_\varepsilon,U_\varepsilon)=-c^2$, proper time an affine parameter, and initial data determining the worldline. On the stated coordinate-time interval,

$$\Bigl|\ddot x^i_\varepsilon(t)+\partial_i\Phi(x_\varepsilon(t))\Bigr|\le\frac{C_3c^2\varepsilon^2}{L}\qquad(t\in[0,T_\varepsilon]).$$

**(c) Trajectory correspondence.** With
$X_\varepsilon(S)=x_\varepsilon(LS/(\sqrt\varepsilon c))/L$,
$W_\varepsilon(S)=\dot x_\varepsilon(LS/(\sqrt\varepsilon c))/(\sqrt\varepsilon c)$,
and $(X_*,W_*)$ the comparison motion of (H2), let
$D(S)=\|X_\varepsilon(S)-X_*(S)\|_2+\|W_\varepsilon(S)-W_*(S)\|_2$
using the same Euclidean norm convention.
Then

$$D(S)\le\bigl(D(0)+C_3\varepsilon S_*\bigr)e^{(1+K_2)S_*}\qquad(0\le S\le S_*).$$

Thus convergent scaled initial data give uniform convergence on the fixed
scaled interval, and identical scaled data give a uniform $O(\varepsilon)$
error. The corresponding coordinate times
$t=LS/(\sqrt\varepsilon c)$ grow like $\varepsilon^{-1/2}$.

**(d) Status and qualifications.** This is a conditional comparison of an
Einstein family containing an independently specified conserved tilted dust
source with an auxiliary Newtonian model. It does not derive the Newtonian
model, does not establish that either model describes nature, and uses no
observations, apparatus, calibration or measured constant. The input family
and dust fields are hypotheses; the theorem proves neither their existence
nor uniqueness for prescribed Newtonian data. Any empirical value of $G_N$
and comparison with data would require separate uncertainty-qualified
empirical premises.

## Facts & Assumptions

**Given:** The adopted framework postulates; stationary weak-field data over $\Omega$ with spatial base $U$, an Einstein family, an independent nonnegative dust input satisfying clause (c) of [[thm-gr-weak-field-einstein-stress-hierarchy]], a Newtonian comparison model with the adopted potential and coupling identifications, and a test-body worldline satisfying the stated trajectory hypotheses.

[A1] The direct-equation field law is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$; for these data the restricted model has $\Lambda=0$ and the Einstein-family condition $G_{ab}=\kappa T_{ab}$ is assumed ([[post-gr-einstein-field-law]], [[def-gr-stationary-weak-field-data]] clause (c), [[def-gr-si-unit-and-coordinate-conventions]] clause (a)). This is a model input, not a derived or empirical statement.

[A2] An ideal freely falling massive test body has a future timelike geodesic worldline, $g(U,U)=-c^2$, with proper time as an affine parameter; its initial event and four-velocity determine the worldline ([[post-gr-ideal-clocks-and-free-fall]] clause (ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[def-gr-timelike-worldline-and-proper-time]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[A3] The matter input is a smooth nonnegative rest-energy density $\mathcal E_\varepsilon$ and a smooth future unit timelike velocity field $u_\varepsilon$ with $T_{ab}=\mathcal E_\varepsilon u_a u_b$, obeying the continuity and geodesic equations; $\mu_\varepsilon=\mathcal E_\varepsilon/c^2$ is its independent rest-mass density. The quantitative source and tilt bounds are exactly those in clause (c) of [[thm-gr-weak-field-einstein-stress-hierarchy]] ([[def-gr-dust-matter-model]], [[prop-gr-dust-and-perfect-fluid-conservation-equations]]).

[L1] The Einstein tensor and stress components satisfy the hierarchy of [[thm-gr-weak-field-einstein-stress-hierarchy]] clauses (b)-(c), including $|\Delta\Phi-4\pi G_N\mu_\varepsilon|\le C_2\varepsilon^2c^2/L^2$, $|\rho_\varepsilon-\mu_\varepsilon|\le C_d\varepsilon^2c^2/(G_NL^2)$ and its scaled source estimate. The Christoffel bounds are those of [[lem-gr-weak-field-christoffel-bounds]], and the acceleration estimate is [[lem-gr-weak-field-geodesic-acceleration]] clause (b).

[L2] The comparison dictionary identifies spatial region, time, potential and coupling as in [[def-gr-newtonian-comparison-model-and-identification]] clause (b); it does not identify the Newtonian source density $\rho_N$ with $\rho_\varepsilon$ or $\mu_\varepsilon$. The Newtonian model satisfies $\Delta\Phi_N=4\pi G_{\mathrm{cmp}}\rho_N$ exactly by its clause (a).

[L3] Under (H1)-(H3), with a compact convex $K'\subseteq U_L$ containing the scaled trajectories and comparison motion, the scaled comparison theorem gives $D(S)\le(D(0)+C_3\varepsilon S_*)e^{(1+K_2)S_*}$; identical scaled data give $O(\varepsilon)$ error on $[0,S_*]$ ([[thm-gr-weak-field-scaled-trajectory-limit]]).

## Proof

**Proof technique:** apply the conditional mathematical estimates to the assumed Einstein-dust family, use the exact adopted Newtonian dictionary, and then apply the test-body and scaled-trajectory results.

1.1 (Field and source correspondence.) By [A1] and [A3], the given Einstein family and its independently specified dust input satisfy the restricted field-law and dust hypotheses of [[thm-gr-weak-field-einstein-stress-hierarchy]]. Apply [L1]. Its first stress estimate gives the displayed component hierarchy, and its dust conclusion gives the error between $\Delta\Phi$ and $4\pi G_N\mu_\varepsilon$. By [L2], $\Delta\Phi_N=4\pi G_N\rho_N$ and $\Phi_N=\Phi$ exactly, so subtraction and division by $4\pi G_N>0$ yield $|\rho_N-\mu_\varepsilon|\le C_2\varepsilon^2c^2/(4\pi G_NL^2)$. The coordinate density satisfies the separate estimate in [L1]; neither density identification is exact. This proves (a). [A1, A3, L1, L2, given, algebra]

1.2 (Free fall to the acceleration bound.) By [A2], the assigned worldline is the model's future timelike geodesic with the stated proper-time and initial data conditions. Its spatial path lies in $K$, has coordinate time $t=x^0/c$ and meets the speed bound in the Statement. The mathematical coordinate-time acceleration estimate [[lem-gr-weak-field-geodesic-acceleration]] therefore applies and gives clause (b). [A2, L1, given, algebra]

2.1 (Trajectory correspondence.) The path in step 1.2 satisfies (H1) of [[thm-gr-weak-field-scaled-trajectory-limit]]. The assumed comparison solution, compact convex $K'\subseteq U_L$ and bound $K_2$ satisfy (H2)-(H3). Apply [L3] choosing $C_3$ to be a common upper bound for the acceleration constant and the scaled theorem's Euclidean error constant, to obtain the displayed Gronwall estimate, uniform convergence for convergent scaled initial data, the $O(\varepsilon)$ rate for identical data, and the coordinate-time relation $t=LS/(\sqrt\varepsilon c)$. This proves (c). [step 1.2, L3, given, algebra]

3.1 (Status and conclusion.) Steps 1.1, 1.2 and 2.1 establish (a)-(c) as conditional consequences of the adopted postulates, the explicitly assumed dust and Einstein family, the comparison dictionary and the cited mathematics. No observation, apparatus, calibration or measured constant is used; any empirical confrontation would require separately qualified empirical premises. The input-family and matter hypotheses remain assumptions, not conclusions. [step 1.1, step 1.2, step 2.1, given] ∎

## Remarks

- **What is proved.** The Newtonian model satisfies its exact Poisson equation by definition; under the weak-field Einstein-dust hypotheses its exact source density matches the independent dust rest-mass density within the stated uniform error. The coordinate density $T_{00}/c^2$ also matches that rest-mass density within its own error. Ideal free-fall worldlines converge to the comparison motions with a uniform $O(\varepsilon)$ error on a fixed scaled interval. These are conditional correspondences, not identities of the frameworks.
- **Hypotheses are not redundant.** Spatial factorization, stationarity, the metric and matter bounds, dust conservation, the slow dust tilt, the slow test-body motion, and existence of the comparison motion on the interval are assumptions. The dust stress estimate is derived from its independent rest-energy density and tilt; the theorem does not assume the tautological identity $T_{00}=c^2\rho_\varepsilon$ as matter input.
- **Empirical status.** The conclusion is about models, not nature. Any comparison with reported Newtonian or relativistic data would require the measured value of $G_N$, the apparatus and calibration model, and a statistical account, none of which is part of this deduction.
