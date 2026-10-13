---
id: pthm-gr-plane-wave-polarizations
kind: physics-theorem
title: "Plane-wave polarizations of the linearized vacuum model: two phase coefficients for each of two polarization types"
status: draft
origin: session
domain: physics
dependency_level: 15
physical_scope: "Conditional model deductions inside the classical gravitational framework with the adopted field law in its vacuum branch Lambda = 0: the first-order perturbation of a family of vacuum model spacetimes solves the linearized vacuum equations; transverse-traceless plane waves with arbitrary bounded smooth profiles are solutions of those equations and have a compact-set exact-vacuum residual of order lambda squared in the small-amplitude chart-control regime; and, at a fixed null wave covector, each real cosine or sine amplitude coefficient modulo plane-wave gauge transformations has a two-dimensional quotient coordinatized by transverse-traceless amplitudes in a chosen screen basis. The full real cosine-and-sine coefficient pair has four real coordinates, representing two polarization types with independent phase coefficients; its first-order curvature tensor is gauge invariant and injective on that full quotient. The item also states the SI coordinate speed and angular-frequency conversion for that frame. Excludes nonlinear waves, radiation from sources, energy and flux statements, curved backgrounds, quantization and any comparison with observation; no measured amplitude, frequency or curvature is asserted."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-si-unit-and-coordinate-conventions, pthm-gr-linearized-field-equations, def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, lem-gr-plane-wave-gauge-decomposition, lem-gr-tt-screen-projector, thm-gr-tt-plane-wave-solutions, thm-gr-tt-plane-wave-curvature, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, thm-sine-and-cosine-derivatives, thm-chain-rule, def-dimension, def-linear-map, thm-linear-kernel-image-and-injectivity, def-pi-via-first-positive-cosine-zero, cor-trigonometric-parity-and-pythagorean-identity]
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
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
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
Moreover, for every nonempty compact set $K$ and length scale $L>0$, the exact metric
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

**(c) Two polarization types and phase coefficients.** Fix a nonzero null
covector $k$ and an adapted orthonormal frame as in
[[lem-gr-plane-wave-gauge-decomposition]] clause (a), so that
$k_A=k(e_A)=\omega(-1,0,0,1)$ and $k^A=\omega(1,0,0,1)$ in that frame, and
let $V_0$, $G$ and $T$ be the amplitude spaces of that lemma. In the
adapted-frame SI length coordinates the phase is
$k_Ax^A=-\omega(x^0-x^3)$, so $\omega$ has units $\mathrm m^{-1}$ and the
corresponding physical angular frequency at fixed spatial position is
$\varpi:=|\partial_t(k_Ax^A)|=c|\omega|$ in $\mathrm s^{-1}$.

For one real cosine coefficient, $h_X(x):=X\cos(k\cdot x)$, the quotient
$V_0/G$ is two-dimensional, and the maps

$$V_0/G\longrightarrow T\longrightarrow\mathbb R^2,\qquad [X]\longmapsto \pi(X)\longmapsto (A_+,A_\times):=(X'_{11},X'_{12}),$$

identify it with $\mathbb R^2$; here $\pi(X)$ is the unique TT
representative of clause (c) of that lemma and $(A_+,A_\times)$ its
amplitudes in the screen basis. The same quotient applies independently to
one real sine coefficient. Thus, for the real plane-wave form
$h_{ab}=X_{ab}\cos(k\cdot x)+Y_{ab}\sin(k\cdot x)$ of
[[def-gr-plane-wave-perturbation]] clause (c), the full harmonic-gauge
amplitude quotient is $(V_0/G)\oplus(V_0/G)\cong\mathbb R^4$: it has two
polarization types, each with independent cosine and sine coefficients. The
gauge transformations act independently on the two coefficients by choosing
$\xi_b=Z_b^X\sin(k\cdot x)-Z_b^Y\cos(k\cdot x)$.

Let $\mathcal F:=C^\infty(\mathbb R^4,\mathbb R^{4\times4\times4\times4})$
be the real vector space of smooth arrays of curvature components in the
fixed inertial chart. For the cosine coefficient, the first-order curvature
map $V_0/G\to\mathcal F$ is
$[X]\mapsto\bigl(x\mapsto R^{(1)}_{abcd}(h_X)(x)\bigr)$. It is well defined
because $R^{(1)}$ is gauge invariant by
[[thm-gr-tt-plane-wave-curvature]] clause (b), and is injective: for the
plane wave $h_{ab}=X_{ab}\cos(k\cdot x)$ with TT representative $X'$ one has

$$R^{(1)}_{0101}=\tfrac12\omega^2A_+\cos(k\cdot x),\qquad R^{(1)}_{0102}=\tfrac12\omega^2A_\times\cos(k\cdot x),$$

so evaluating these components at $x=0$ recovers $(A_+,A_\times)$, since
$\cos(k\cdot0)=1$ and $\omega\ne0$. The sine coefficient has the same
curvature formula with $\sin(k\cdot x)$ in place of $\cos(k\cdot x)$;
because the nonzero linear phase $k\cdot x$ attains $\pi/2$, its screen
coefficients are recovered by evaluating at a point with $k\cdot x=\pi/2$.
At phase $0$ the sine coefficient vanishes, and at phase $\pi/2$ the cosine
coefficient vanishes while the sine coefficient is nonzero
([[def-pi-via-first-positive-cosine-zero]],
[[cor-trigonometric-parity-and-pythagorean-identity]]). Thus the curvature
map is injective on the full real coefficient-pair quotient as well. A different screen basis rotates each phase-coefficient
pair as in [[lem-gr-tt-screen-projector]] clause (d); the quotient classes
and their curvature tensors, rather than their coordinate pairs, are the
frame-independent content. In this precise sense the linearized vacuum
model has two polarization types at fixed $k$.

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

[L5] The constant $\pi$ is twice the first positive cosine zero, so $\cos(\pi/2)=0$; $\sin^2+\cos^2=1$ then gives $|\sin(\pi/2)|=1$. Also $\sin0=0$ and $\cos0=1$ ([[def-pi-via-first-positive-cosine-zero]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-derivatives]]).

## Proof

**Proof technique:** direct; read the model content off the first-order expansion of the field law and the classification of plane-wave amplitudes, then check the injectivity statement by the explicit curvature display.

1.1 (Perturbations of vacuum families.) By [A1] the hypotheses of clause (a) place the family in the vacuum branch of the adopted field law on $\Omega$. Applying [L1] gives $G^{(1)}_{ab}(h)=0$ on $\Omega$, which is clause (a). [A1, L1, given]

1.2 (TT plane waves.) Let $h$ be the TT planar perturbation with bounded smooth amplitudes. By [L2] it is in harmonic gauge and satisfies $G^{(1)}_{ab}(h)=0$. For each nonempty compact $K$ and $L>0$, smoothness gives $B_K(h)<\infty$, so whenever $|\lambda|B_K(h)\le1/16$, clause (d) of [[pthm-gr-linearized-field-equations]] gives the displayed quadratic residual in the zero-source, $\Lambda=0$ branch. This is a conditional local estimate, not a construction of an exact one-parameter family of vacuum solutions. By [L4], $u=x^0-x^3=ct-x^3$, so fixed $u$ gives $dx^3/dt=c$; at fixed spatial coordinates the monochromatic phase $k_Ax^A=-\omega u$ has $|\partial_t(k_Ax^A)|=c|\omega|$, which is the stated physical angular frequency. [L2, L4, given, algebra]

1.3 (Phase coefficients and curvature.) By [L3], the cosine and sine coefficient spaces each have a two-dimensional quotient with a linear isomorphism to $\mathbb R^2$ given by TT screen amplitudes. For arbitrary gauge vectors $Z^X,Z^Y$, the chain rule gives $\partial_a(\sin(k\cdot x))=k_a\cos(k\cdot x)$ and $\partial_a(-\cos(k\cdot x))=k_a\sin(k\cdot x)$; hence $\xi_b=Z_b^X\sin(k\cdot x)-Z_b^Y\cos(k\cdot x)$ shifts the cosine and sine coefficients independently by the pure-gauge tensors of the amplitude lemma. Thus the full pair quotient is the direct sum of those two copies. For the cosine coefficient, gauge invariance from [L2] makes the curvature-component map well defined on $V_0/G$. With TT representative $X'$, the displayed formula gives $R^{(1)}_{0i0j}=\tfrac12\omega^2X'_{ij}\cos(k\cdot x)$ for $i,j\in\{1,2\}$; evaluating at $x=0$ shows that zero curvature field implies $X'_{11}=X'_{12}=0$, hence the cosine class is zero by [L3]. The same argument for a sine coefficient, evaluated at a point where $k\cdot x=\pi/2$, proves injectivity on the sine quotient. For the full pair, the screen curvature is $\tfrac12\omega^2(X\!'_{ij}\cos(k\cdot x)+Y\!'_{ij}\sin(k\cdot x))$. If it is zero, evaluation at $x=0$ gives $X\!'_{ij}=0$; choosing $x$ with $k\cdot x=\pi/2$ then gives $Y\!'_{ij}=0$ by [L5]. Hence both TT representatives vanish and the pair class is zero: the full map is injective. A screen rotation acts on each phase-coefficient pair by clause (d) of [[lem-gr-tt-screen-projector]]. This proves clause (c). [L2, L3, L5, given, algebra]

2.1 (Status and conclusion.) Steps 1.1, 1.2 and 1.3 use only the adopted field law for the stated families and the cited mathematical classifications and computations. No experiment, measurement, apparatus or statistical model is used, and no source or energy statement is made; the conclusions are conditional model deductions. [step 1.1, step 1.2, step 1.3, A1] ∎

## Remarks

- **Counting is not the statement.** The familiar count "10 components minus 4 gauge conditions minus 4 residual gauges gives 2" is replaced here by the exact decomposition $V_0=T\oplus G$ of amplitude space: every claim about the number of polarizations is a statement about this finite-dimensional space at a fixed null $k$, and the profile-level solutions of clause (b) are not classified by it.

- **What is not included.** Radiation from a source, the quadrupole formula, energy and angular momentum carried by waves, the propagation of waves on a curved background and the response of a detector are not part of this item; the detector response is the subject of [[pthm-gr-plane-wave-tidal-detector-response]], and source and energy questions are outside the scope of this page.
