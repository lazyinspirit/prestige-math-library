---
page: em-waveguides-and-cavities
title: "Waveguides and cavities"
status: draft
items: [lem-em-separated-phasor-calculus,
        lem-em-transverse-vector-identities,
        lem-em-rectangle-mode-profile-identities,
        lem-em-rectangular-transverse-mode-completeness,
        def-em-guide-cavity-geometry,
        pthm-em-rectangular-mode-candidates,
        pthm-em-guide-dispersion-energy,
        pthm-em-uniform-ohmic-modal-decay,
        pthm-em-open-rectangular-guide-completeness,
        pthm-em-guide-completeness]
examples: []
---

**Objective.** This page builds the guided-wave and cavity layer between the
material-response and wave-interface pages and the later covariant and
empirical layers. It fixes the guide and cavity geometry with the ideal PEC
boundary model, develops the separated-phasor calculus and the rectangular
profile identities, proves the explicit TE/TM candidate families with their
cutoff and index restrictions, computes the transported energy and group
speed of the propagating branch, and supplies the declared completeness and
evolution results for the rectangular cavity, the smooth closed PEC cavity
and the infinite rectangular guide. Everything is conditional on the cited
postulates, the declared weak classes and the SI conventions; no empirical
claim is made.

**Geometry and the PEC model.** The definition
[[def-em-guide-cavity-geometry]] fixes a straight guide
$A\times\mathbb R$ with bounded connected $C^1$ cross-section (the
rectangle $(0,a)\times(0,b)$ by its open faces), the rectangular cavity
$(0,a)\times(0,b)\times(0,d)$, the outward normals, the ideal PEC conditions
$n\times E=0$ and $n\cdot B=0$ on every open wall with their interface
reading and excluded $\sigma\to\infty$ and edge idealizations, the
zero-normal-$B$ reflection class with its distributional divergence
constraints, the axis-relative TE/TM/TEM terminology and the separated
phasor convention.

**Phasor calculus and transverse identities.** The lemma
[[lem-em-separated-phasor-calculus]] differentiates separated real fields
$F=\operatorname{Re}(\tilde Fe^{i(\beta x_3-\omega t)})$ componentwise for
complex $\beta$, giving the divergence and curl formulas and the amplitude
injectivity clause that turns equalities of separated real fields into
equalities of their amplitudes on the projection. The lemma
[[lem-em-transverse-vector-identities]] records the transverse identities
$\operatorname{div}(e_z\times\nabla_th)=0$,
$\operatorname{curl}(e_z\times\nabla_th)=e_z\Delta_th$,
$e_z\times(e_z\times\nabla_th)=-\nabla_th$ and the orthogonality, norm and
cross-product analogues used throughout. The profile lemma
[[lem-em-rectangle-mode-profile-identities]] computes the eigen-identities,
the PEC traces, the orthogonality and exact norms and the Dirichlet-type
integrals of the cosine and sine rectangle profiles, and
[[lem-em-rectangular-transverse-mode-completeness]] proves that the sine and
cosine systems, and their four rectangle products, are orthogonal complete
systems of $L^2$ (with Countable Choice declared for the torus and Fubini
suppliers).

**Candidates, energy and decay.** In the lossless isotropic scalar branch
the theorem [[pthm-em-rectangular-mode-candidates]] exhibits the TE and TM
separated candidate families, their amplitude equations, nonzero profiles
and index restrictions, the cutoff $\omega_c=k_c/\sqrt{\varepsilon\mu}$ and
the real, zero and imaginary-$\beta$ alternatives with the explicit scope.
The theorem [[pthm-em-guide-dispersion-energy]] averages the quadratic
densities over one period: it gives the cross-section identities, the
period-averaged stored energy and longitudinal flux of both families, the
transport relation $\Phi=U v_g$ with the group speed
$v_g=\beta/(\varepsilon\mu\omega)$, the phase-speed inequalities and the
bounded propagating index box. The K10 theorem
[[pthm-em-uniform-ohmic-modal-decay]] extends the same PEC geometry to the
declared constant-Ohmic branch: for the rectangular reflection class it
gives unique finite-energy distributional solutions with dense finite
Fourier modes; for the smooth closed PEC cavity (under the inherited Axiom
of Choice) it gives the complete magnetic decomposition
$M=\overline{\operatorname{span}\{w_j\}}\oplus K_M$, the declared weak modal
and variational evolution, the exact energy balance
$\mathcal U(t_1)+\sigma\int_{t_0}^{t_1}\|E\|_2^2dt=\mathcal U(t_0)$ and the
decay of the positive modes, with the zero sectors retained. The companion
theorem [[pthm-em-open-rectangular-guide-completeness]] supplies the
complete mixed transverse-character and longitudinal-Fourier
representation of the infinite rectangular guide, the unique constant-Ohmic
energy evolution in its reflection class and the exact
frequency-by-frequency energy and dispersion formulas.

**Completeness and scope.** The theorem [[pthm-em-guide-completeness]]
records the transverse profile completeness with its zero-mean distinction
between the full Neumann family and its $h_{00}$-deleted subfamily, the
rectangular cavity reflection-class energy evolution, the smooth PEC cavity
curl eigenbasis and its first-order modal equations derived by the collar
pairing, and the exact scope exclusions. The page asserts no completeness
for arbitrary lossy, dispersive, open-end, non-smooth or non-rectangular
problems and no trace regularity for arbitrary $H(\operatorname{curl})$
fields; the zero eigenvalues and zero modes are retained throughout.
