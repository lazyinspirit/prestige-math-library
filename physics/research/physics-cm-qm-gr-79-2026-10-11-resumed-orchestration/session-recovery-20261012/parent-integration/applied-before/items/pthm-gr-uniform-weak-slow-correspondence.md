---
id: pthm-gr-uniform-weak-slow-correspondence
kind: physics-theorem
title: "The controlled weak-field slow-motion correspondence with the Newtonian comparison model"
status: draft
origin: session
domain: physics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-stationary-weak-field-data, def-gr-newtonian-comparison-model-and-identification, thm-gr-weak-field-einstein-stress-hierarchy, lem-gr-weak-field-christoffel-bounds, lem-gr-weak-field-geodesic-acceleration, thm-gr-weak-field-scaled-trajectory-limit, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, pthm-gr-free-fall-worldline-is-determined-by-initial-data, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-si-unit-and-coordinate-conventions, def-gr-timelike-worldline-and-proper-time, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors]
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
physical_scope: "Conditional model-to-model correspondence inside the classical gravitational framework: given an Einstein family of stationary weak-field data with the stated smallness, slow-motion and matter-hierarchy hypotheses, and a comparison reading against a Newtonian comparison model, the framework's field law reproduces the comparison model's Poisson equation up to a uniform error, and the free-fall worldlines of ideal test bodies converge to the comparison motions with a uniform O(epsilon) error on a fixed scaled time interval. Excludes: existence of the input family from prescribed Newtonian data, strong fields, fast motion, long-time or global limits, observational comparisons, measured values of constants, non-smooth or distributional sources, and any claim that the model or the correspondence describes nature. All conclusions are conditional on the adopted postulates and the stated hypotheses."
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the Newtonian limit as an asymptotic correspondence, the potential identification and the Poisson equation, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the weak-field slow-motion correspondence, the Poisson equation and the particle acceleration, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2 and the Newtonian module, printed p. 42 (PDF p. 43): the weak-field limit and the correspondence with Newtonian gravity"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates [[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]],
[[post-gr-einstein-field-law]] in the direct-equation presentation and
[[post-gr-ideal-clocks-and-free-fall]]. Let stationary weak-field data
$(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ over $\Omega$ form an Einstein
family with coupling $\kappa=8\pi G_N/c^4$ of the framework's conventions
([[def-gr-stationary-weak-field-data]],
[[def-gr-si-unit-and-coordinate-conventions]]), with potential
$\Phi=\varepsilon c^2\varphi$ and densities $\rho_\varepsilon$, and let a
comparison reading of the data with a Newtonian comparison model
$(O,\Phi_N,\rho_N,G_{\mathrm{cmp}})$ be adopted
([[def-gr-newtonian-comparison-model-and-identification]]). Let
$\varepsilon_*$, $C_2$, $C_3$ and the scaled quantities of
[[thm-gr-weak-field-scaled-trajectory-limit]] be as there, and suppose its
hypotheses (H1)-(H3) hold with $\gamma_\varepsilon$ the worldline the model
assigns to an ideal freely falling massive test body and with $K'$ convex.
Then the following are conditional consequences of the stated postulates,
the hypotheses and the cited mathematics.

**(a) Field-equation correspondence.** On $K$,

$$\Bigl|\kappa T_{00}(\varepsilon)-\frac{2\Delta\Phi}{c^2}\Bigr|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{ij}(g(\varepsilon))|\le\frac{C_2\varepsilon^2}{L^2},\qquad |G_{0i}(g(\varepsilon))|\le\frac{C_2\varepsilon^{3/2}}{L^2},$$

and if the matter hierarchy
$|T_{00}(\varepsilon)-\rho_\varepsilon c^2|\le C\varepsilon^2c^4/(G_NL^2)$
holds, then $|\Delta\Phi-4\pi G_N\rho_\varepsilon|\le C_2\varepsilon^2c^2/L^2$.
Under the comparison reading, the last inequality is the model's
reproduction, up to that uniform error, of the comparison model's field
equation $\Delta\Phi_N=4\pi G_{\mathrm{cmp}}\rho_N$.

**(b) Free-fall kinematics.** Each worldline $\gamma_\varepsilon$ is a
future timelike geodesic of $g(\varepsilon)$ with $g(U_\varepsilon,U_\varepsilon)=-c^2$,
proper time an affine parameter, determined by its release event and
four-velocity; if it lies in $K$ with $|\dot x_\varepsilon|\le C\sqrt\varepsilon c$
on the coordinate-time interval $[0,T_\varepsilon]$ as in (H1), then

$$\Bigl|\ddot x^i_\varepsilon(t)+\partial_i\Phi\bigl(x_\varepsilon(t)\bigr)\Bigr|\le\frac{C_3c^2\varepsilon^2}{L}\qquad(t\in[0,T_\varepsilon]).$$

**(c) Trajectory correspondence.** The scaled theorem applies: with
$X_\varepsilon,W_\varepsilon,X_*,W_*$ and $D$ as in
[[thm-gr-weak-field-scaled-trajectory-limit]],

$$D(S)\le\bigl(D(0)+C_3\varepsilon S_*\bigr)e^{(1+K_2)S_*}\qquad(0\le S\le S_*),$$

so the model's scaled test-body trajectories converge to the comparison
motions as $\varepsilon\downarrow0$ with convergent scaled data, and with
identical scaled data the discrepancy is $O(\varepsilon)$ uniformly on the
fixed scaled interval; the corresponding coordinate times are
$t=LS/(\sqrt\varepsilon c)$, growing like $\varepsilon^{-1/2}$.

**(d) Status and qualifications.** The correspondence is a
model-to-model statement: it compares the framework's Einstein family with
the auxiliary Newtonian comparison model through the adopted dictionary. It
does not derive the Newtonian model, does not establish that either model
describes nature, and uses no observations, apparatus, calibration or
measured constant: the empirical value of $G_N$ and any comparison with data
would enter as separate, uncertainty-qualified empirical premises not
supplied here. The input family is a hypothesis; there is no assertion that
such families exist for prescribed Newtonian data, and the error bounds
degrade with the scaled time interval and the field gradient.

## Facts & Assumptions

**Given:** The adopted postulates, an Einstein family of stationary weak-field data with the framework's coupling, a comparison reading of the data, and hypotheses (H1)-(H3) with a convex compact set $K'$.

[A1] The model's field law is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with $\Lambda=0$ in the present data and $\kappa=8\pi G_N/c^4$; the family satisfies it by the definition of the Einstein family and it is model input, not a derived or empirical statement ([[post-gr-einstein-field-law]], [[def-gr-stationary-weak-field-data]] clause (c), [[def-gr-si-unit-and-coordinate-conventions]] clause (a)).

[A2] An ideal freely falling massive test body of the model has as worldline a future timelike geodesic with $g(U,U)=-c^2$, proper time an affine parameter, and the worldline is determined by the release event and four-velocity ([[post-gr-ideal-clocks-and-free-fall]] clause (ii), [[pthm-gr-free-fall-worldline-is-determined-by-initial-data]], [[def-gr-timelike-worldline-and-proper-time]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L1] For the data and $0<\varepsilon\le\varepsilon_*$ the Einstein tensor and stress components satisfy the hierarchy and Poisson estimates of [[thm-gr-weak-field-einstein-stress-hierarchy]] clauses (b)-(c); the Christoffel bounds are those of [[lem-gr-weak-field-christoffel-bounds]]; the acceleration estimate is [[lem-gr-weak-field-geodesic-acceleration]] clause (b); and the scaled comparison estimate is [[thm-gr-weak-field-scaled-trajectory-limit]].

[L2] The comparison reading is the adopted dictionary of [[def-gr-newtonian-comparison-model-and-identification]] clause (b): spatial coordinates, time, potential, density and coupling are identified as recorded there, and the comparison model satisfies $\Delta\Phi_N=4\pi G_{\mathrm{cmp}}\rho_N$ by clause (a) of the same item.

## Proof

**Proof technique:** direct; apply the model postulates to the mathematical estimates of this page, then read the conclusions through the adopted comparison dictionary.

1.1 (Field law to the hierarchy.) Apply the mathematical theorem [[thm-gr-weak-field-einstein-stress-hierarchy]] to the given data: by [A1] the data satisfies its Einstein-family hypothesis with $\Lambda=0$ and coupling $\kappa$, so its clauses (b)-(c) give all inequalities of (a). Reading the result through [L2], the Poisson inequality compares with $\Delta\Phi_N=4\pi G_{\mathrm{cmp}}\rho_N$: the left-hand sides are identified by the dictionary and the two equations differ by the uniform error $C_2\varepsilon^2c^2/L^2$. This proves (a). [A1, L1, L2, given, algebra]

1.2 (Free fall to the acceleration bound.) Let $\gamma_\varepsilon$ be the worldline the model assigns to an ideal freely falling massive test body with the stated release data. By [A2] it is a future timelike geodesic with $g(U,U)=-c^2$, proper time is an affine parameter, and the worldline is determined by the release event and four-velocity. Its coordinate-time parametrization and speed bound are the hypothesis (H1), so the mathematical acceleration estimate [[lem-gr-weak-field-geodesic-acceleration]] clause (b) applies and gives the displayed inequality. This proves (b). [A2, L1, given, algebra]

1.3 (The comparison dictionary is the adopted reading.) The identifications of spatial coordinates, time, potential, density and coupling are exactly those of [L2], and the comparison model satisfies its field equation by [L2] by definition of the model. No deduction identifies the frameworks beyond this dictionary. [L2, given]

2.1 (Trajectory correspondence.) By step 1.2 the worldlines $\gamma_\varepsilon$ satisfy the geodesic hypotheses of [[thm-gr-weak-field-scaled-trajectory-limit]] (H1); (H2) and (H3) are assumed for the comparison motion and the convex set $K'$. The scaled theorem therefore gives the displayed bound on $D$, hence the convergence and $O(\varepsilon)$ statements for scaled data and the coordinate-time reading $t=LS/(\sqrt\varepsilon c)$. This proves (c). [step 1.2, L1, given, algebra]

3.1 (Status and conclusion.) Steps 1.1 and 2.1 derive (a) and (c) as conditional consequences of the adopted postulates, the input-family hypotheses and the cited mathematics, and step 1.2 derives (b); no observation, apparatus or measured constant is used, so clause (d) records the status: the correspondence is a model-to-model statement whose hypotheses are essential, whose errors are uniform only on the stated compact region and finite scaled interval, and whose confrontation with data would require separate empirical premises. [step 1.1, step 1.2, step 2.1, given] ∎

## Remarks

- **What is proved.** The statement is a two-part bridge: the field law of the Einstein family reproduces the Poisson equation of the comparison model with a uniform error, and the free-fall worldlines of ideal test bodies converge to the comparison motions with a uniform $O(\varepsilon)$ error on a fixed scaled interval. Neither part is an identity of the frameworks.
- **Hypotheses are not redundant.** Stationarity, the derivative bounds, the slow-motion condition $|\dot x|\le C\sqrt\varepsilon c$, the matter hierarchy and the existence of the comparison motion on the interval are all used; dropping any of them invalidates the corresponding estimate, and the statements make no claim outside them.
- **Empirical status.** The conclusion is about models, not nature. Any comparison with reported Newtonian or relativistic data would require the measured value of $G_N$, the apparatus and calibration model, and a statistical account, none of which is part of this deduction.
