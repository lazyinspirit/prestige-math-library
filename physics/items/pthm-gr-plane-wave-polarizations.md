---
id: pthm-gr-plane-wave-polarizations
kind: physics-theorem
title: "Plane-wave polarizations of the linearized vacuum model: existence of TT plane waves and the two-dimensional gauge-invariant content"
status: draft
origin: session
domain: physics
dependency_level: 15
physical_scope: "Conditional model deductions inside the classical gravitational framework with the adopted field law in its vacuum branch Lambda = 0: the first-order perturbation of a family of vacuum model spacetimes solves the linearized vacuum equations; transverse-traceless plane waves with arbitrary bounded smooth profiles are solutions of those equations and have a compact-set exact-vacuum residual of order lambda squared in the small-amplitude chart-control regime; and the harmonic-gauge single-frequency plane-wave amplitudes at a fixed null wave covector, modulo plane-wave gauge transformations, form a two-dimensional space coordinatized by two transverse-traceless amplitudes in a chosen screen basis, whose first-order curvature tensor is gauge invariant and injective on that space. The item also states the SI coordinate speed and angular-frequency conversion for that frame. Excludes nonlinear waves, radiation from sources, energy and flux statements, curved backgrounds, quantization and any comparison with observation; no measured amplitude, frequency or curvature is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-si-unit-and-coordinate-conventions, pthm-gr-linearized-field-equations, def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, lem-gr-plane-wave-gauge-decomposition, lem-gr-tt-screen-projector, thm-gr-tt-plane-wave-solutions, thm-gr-tt-plane-wave-curvature, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, thm-sine-and-cosine-derivatives, thm-chain-rule, def-dimension, def-linear-map, thm-linear-kernel-image-and-injectivity]
dependency_roles:
  post-gr-einstein-field-law: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  pthm-gr-linearized-field-equations: physical-result
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  lem-gr-plane-wave-gauge-decomposition: mathematical-premise
  lem-gr-tt-screen-projector: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  thm-gr-tt-plane-wave-curvature: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-dimension: mathematical-premise
  def-linear-map: mathematical-premise
  thm-linear-kernel-image-and-injectivity: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.30)-(6.54): the two independent components of a transverse-traceless plane wave in harmonic gauge and the statement that they are the physical information, printed pp. 148-152 (PDF pp. 155-159); Ch. 6 (6.53): the two remaining components C_11 and C_12, printed p. 151 (PDF p. 158)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.2.1-5.2.2: the counting 10 - 4 - 4 = 2 independent polarisations and the polarisation matrix with H_+ and H_x, printed pp. 210-213 (PDF pp. 217-220)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3 (7.40)-(7.49): transversality, the residual gauge freedom with Box xi = 0 and the conclusion that gravitational waves have two possible polarizations, printed pp. 77-79 (PDF pp. 78-80)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the field-law postulate [[post-gr-einstein-field-law]] together with
[[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]], and consider the vacuum branch
$T=0$, $\Lambda=0$ ([[def-gr-si-unit-and-coordinate-conventions]]). Let
$(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its inertial
chart and let $\Omega\subseteq\mathbb R^4$ be a nonempty open set. Then:

**(a) First-order perturbations of vacuum families.** If
$(g(\lambda),T(\lambda))_{\lambda\in(-\varepsilon,\varepsilon)}$ is a family
of solutions of the adopted field law on $\Omega$ with $T(\lambda)=0$ for
every $\lambda$, realised as a flat linearized family with first-order
perturbation $h$, then $G^{(1)}_{ab}(h)=0$ on $\Omega$: the first-order
perturbation of a family of vacuum model spacetimes solves the linearized
vacuum equations of [[def-gr-plane-wave-perturbation]] clause (e).

**(b) TT plane waves are vacuum waves.** Let
$A_+,A_\times\in C^\infty(\mathbb R)$ be bounded and let $h$ be the TT
planar perturbation of [[def-gr-plane-wave-perturbation]] clause (b) with
these amplitudes. Then $h$ is in harmonic gauge and $G^{(1)}_{ab}(h)=0$.
Moreover, for every compact set $K$ and length scale $L>0$, the exact metric
$\eta+\lambda h$ satisfies the vacuum field law on $K$ up to a residual
bounded by $C_{K,L}\lambda^2B_K(h)^2/L^2$ whenever
$|\lambda|B_K(h)\le1/16$, where $B_K$ is the numerical chart control of
[[pthm-gr-linearized-field-equations]] clause (d). Since $h$ is smooth, this
condition holds for sufficiently small $|\lambda|$. The model therefore contains
these transverse-traceless plane waves as linearized vacuum waves in the
stated approximation. In the adopted SI length coordinates $x^0=ct$, a
constant phase $u=x^0-x^3$ moves in the $+x^3$ direction at coordinate speed
$c$. The residual estimate is read in SI numerical chart components, with
$L$ in metres and its chart-control constants as real numerical values; the
Einstein-tensor residual then has units $\mathrm m^{-2}$.

**(c) Two polarizations.** Fix a nonzero null covector $k$ and an adapted
orthonormal frame as in [[lem-gr-plane-wave-gauge-decomposition]] clause (a),
so that $k_A=k(e_A)=\omega(-1,0,0,1)$ and $k^A=\omega(1,0,0,1)$ in that
frame, and let $V_0$, $G$ and $T$ be the amplitude spaces of that lemma.
In the adapted-frame SI length coordinates the phase is
$k_Ax^A=-\omega(x^0-x^3)$, so $\omega$ has units $\mathrm m^{-1}$ and the
corresponding physical angular frequency at fixed spatial position is
$\varpi:=|\partial_t(k_Ax^A)|=c|\omega|$ in $\mathrm s^{-1}$.
Then the space $V_0/G$ of harmonic-gauge single-frequency plane-wave
amplitudes modulo plane-wave gauge transformations is two-dimensional, and
the maps

$$V_0/G\longrightarrow T\longrightarrow\mathbb R^2,\qquad [X]\longmapsto \pi(X)\longmapsto (A_+,A_\times):=(X'_{11},X'_{12}),$$

identify it with $\mathbb R^2$; here $\pi(X)$ is the unique TT
representative of clause (c) of that lemma and $(A_+,A_\times)$ its
amplitudes in the screen basis. Moreover the first-order curvature
coefficient $R^{(1)}_{abcd}$ of the perturbation depends only on the class
$[X]$ (it is gauge invariant by [[thm-gr-tt-plane-wave-curvature]] clause
(b)), and the induced map $V_0/G\to(\text{curvature coefficients})$ is
injective: for the plane wave $h_{ab}=X_{ab}\cos(k\cdot x)$ with TT
representative $X'$ one has

$$R^{(1)}_{0101}=\tfrac12\omega^2A_+\cos(k\cdot x),\qquad R^{(1)}_{0102}=\tfrac12\omega^2A_\times\cos(k\cdot x),$$

so $(A_+,A_\times)$ are gauge-invariant coordinates of the first-order class
in the chosen screen basis. A different screen basis rotates this pair as in
[[lem-gr-tt-screen-projector]] clause (d); the class $[X]$ and its curvature
tensor, rather than the coordinate pair, are the frame-independent content.
In this precise sense the linearized vacuum model has two polarizations at
fixed $k$.

**Status.** Clauses (a)-(c) are conditional deductions from the adopted
postulates and the cited mathematics. No source distribution, energy flux,
observed radiation, detector, measured amplitude or statistical statement is
made; the item contains no empirical premise.

## Facts & Assumptions

**Given:** The adopted framework postulates, the flat model with its inertial chart, an open set $\Omega$, and, in clauses (b)-(c), bounded smooth profiles and a null covector $k$ with an adapted frame.

[A1] A model of the framework satisfies the adopted field law $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with the model's matter content and constants; in the vacuum branch with $\Lambda=0$ the right-hand side vanishes identically ([[post-gr-einstein-field-law]] clauses (i)-(ii), [[post-gr-spacetime-and-classical-domain]], [[post-gr-field-and-matter-assumptions]], [[def-gr-si-unit-and-coordinate-conventions]]).

[L1] For a family of solutions of the field law on $\Omega$ with $T(\lambda)=0$ and $\Lambda=0$, the first-order perturbation satisfies $G^{(1)}_{ab}(h)=0$ on $\Omega$ ([[pthm-gr-linearized-field-equations]] clause (b)).

[L2] A TT planar perturbation with bounded smooth amplitudes is in harmonic gauge and satisfies $\Box\bar h_{ab}=0$ and $G^{(1)}_{ab}(h)=0$ ([[thm-gr-tt-plane-wave-solutions]] clause (b)); the physical residual for sufficiently small $\lambda$ follows from [[pthm-gr-linearized-field-equations]] clause (d). Its first-order curvature is computed in [[thm-gr-tt-plane-wave-curvature]] clause (c) and is gauge invariant by clause (b) of that theorem; for a single-frequency TT amplitude $h_{ij}=X'_{ij}\cos(k\cdot x)$ one has $\partial_0^2\cos(k\cdot x)=k_0^2(-\cos(k\cdot x))=-\omega^2\cos(k\cdot x)$, hence $\partial_0^2h_{ij}=-\omega^2X'_{ij}\cos(k\cdot x)$ and $R^{(1)}_{0i0j}=-\tfrac12\partial_0^2h_{ij}=\tfrac12\omega^2X'_{ij}\cos(k\cdot x)$ ([[def-gr-plane-wave-perturbation]] clause (c), [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[L3] The amplitude spaces satisfy: $\dim T=2$; the map $Z\mapsto(k_aZ_b+k_bZ_a)$ is injective with image $G$; $V_0=T\oplus G$; hence $\dim(V_0/G)=\dim T=2$ and the assignment $[X]\mapsto\pi(X)\mapsto(X'_{11},X'_{12})$ is a linear isomorphism onto $\mathbb R^2$ ([[lem-gr-plane-wave-gauge-decomposition]] clauses (b)-(c), [[lem-gr-tt-screen-projector]] clause (d), [[def-dimension]], [[def-linear-map]], [[thm-linear-kernel-image-and-injectivity]]).

[L4] In SI length coordinates $x^0=ct$, $c$ has units $\mathrm m\,\mathrm s^{-1}$ and each coordinate has units $\mathrm m$; the phase $k_Ax^A$ is dimensionless ([[def-gr-si-unit-and-coordinate-conventions]]).

## Proof

**Proof technique:** direct; read the model content off the first-order expansion of the field law and the classification of plane-wave amplitudes, then check the injectivity statement by the explicit curvature display.

1.1 (Perturbations of vacuum families.) By [A1] the hypotheses of clause (a) place the family in the vacuum branch of the adopted field law on $\Omega$. Applying [L1] gives $G^{(1)}_{ab}(h)=0$ on $\Omega$, which is clause (a). [A1, L1, given]

1.2 (TT plane waves.) Let $h$ be the TT planar perturbation with bounded smooth amplitudes. By [L2] it is in harmonic gauge and satisfies $G^{(1)}_{ab}(h)=0$. For each compact $K$ and $L>0$, smoothness gives $B_K(h)<\infty$, so whenever $|\lambda|B_K(h)\le1/16$, clause (d) of [[pthm-gr-linearized-field-equations]] gives the displayed quadratic residual. This is a conditional local estimate, not a construction of an exact one-parameter family of vacuum solutions. By [L4], $u=x^0-x^3=ct-x^3$, so fixed $u$ gives $dx^3/dt=c$; at fixed spatial coordinates the monochromatic phase $k_Ax^A=-\omega u$ has $|\partial_t(k_Ax^A)|=c|\omega|$, which is the stated physical angular frequency. [L2, L4, given, algebra]

1.3 (Two polarizations.) By [L3], $\dim(V_0/G)=2$ and the composite map $[X]\mapsto(A_+,A_\times)$ is a linear isomorphism onto $\mathbb R^2$. By [L2] the first-order curvature of the perturbation is gauge invariant, so it depends only on $[X]$; and for a single-frequency plane wave with TT representative $X'$, the displayed formula gives $R^{(1)}_{0i0j}=\tfrac12\omega^2X'_{ij}\cos(k\cdot x)$ for $i,j\in\{1,2\}$, so the induced map on $V_0/G$ is injective: if the curvature vanishes identically then $X'_{11}\cos(k\cdot x)=0$ and $X'_{12}\cos(k\cdot x)=0$ on the nonempty open set (a nonzero linear phase cannot have its cosine vanish on an open set), hence $A_+=X'_{11}=0$ and $A_\times=X'_{12}=0$, and by [L3] the class is the zero class. Thus the amplitude pair is a gauge-invariant coordinate pair in the chosen screen basis, while the class and curvature tensor are frame-independent; the screen rotation acts on the pair by clause (d) of [[lem-gr-tt-screen-projector]]. This proves clause (c). [L2, L3, given, algebra]

2.1 (Status and conclusion.) Steps 1.1, 1.2 and 1.3 use only the adopted field law for the stated families and the cited mathematical classifications and computations. No experiment, measurement, apparatus or statistical model is used, and no source or energy statement is made; the conclusions are conditional model deductions. [step 1.1, step 1.2, step 1.3, A1] ∎

## Remarks

- **Counting is not the statement.** The familiar count "10 components minus 4 gauge conditions minus 4 residual gauges gives 2" is replaced here by the exact decomposition $V_0=T\oplus G$ of amplitude space: every claim about the number of polarizations is a statement about this finite-dimensional space at a fixed null $k$, and the profile-level solutions of clause (b) are not classified by it.

- **What is not included.** Radiation from a source, the quadrupole formula, energy and angular momentum carried by waves, the propagation of waves on a curved background and the response of a detector are not part of this item; the detector response is the subject of [[pthm-gr-plane-wave-tidal-detector-response]], and source and energy questions are outside the scope of this page.
