---
id: ex-nrqm-light-matter-two-level-dipole-drive-check
aliases: [nrqm-light-matter-two-level-dipole-drive-check]
kind: example
domain: physics
title: "A two-level dipole-drive model: identification, resonant first-order coefficient and its comparison with the exact Rabi probability"
status: published
origin: pipeline
dependency_level: 17
deps: [pthm-nrqm-light-matter-stimulated-dipole-drive-transitions, def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength, def-nrqm-light-matter-framework-finite-level-coupled-model, pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error, pthm-nrqm-driven-dynamics-circular-drive-exact-rabi, def-nrqm-driven-dynamics-framework-driven-model, prop-nrqm-orbital-and-spin-finite-spin-matrices, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-hilbert-space, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-countable-choice, def-axiom-of-choice, post-nrqm-framework-preparation-and-apparatus, def-nrqm-central-framework-coulomb-and-hydrogen-model, post-nrqm-approximations-static-finite-level-dipole-coupling, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, thm-polar-coordinates-formula-for-lebesgue-measure, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, lem-classical-derivatives-are-weak-derivatives, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  pthm-nrqm-light-matter-stimulated-dipole-drive-transitions: physical-result
  def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength: formulation-prerequisite
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error: physical-result
  pthm-nrqm-driven-dynamics-circular-drive-exact-rabi: physical-result
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-complex-integration-by-parts-on-intervals-and-decaying-lines: mathematical-premise
  lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional two-level instance of the declared dipole-drive model: Pauli matter data realized by explicit Coulomb and Cartesian-dipole compressions of two Gaussian functions, with a real dipole entry, a monochromatic spatially uniform prescribed field along one axis, with declared matter length L > 0 and wavevector k = 0 satisfying the phase tolerance, the identification with the declared linear two-level drive model, the resonant co-rotating first-order amplitude and its agreement at small times with the exact averaged Rabi probability of the driven-dynamics page. The example asserts no laboratory atom or field, no damping, no spontaneous emission, no measurement record and no empirical value."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 4-6 chapter pages 7-19 (PDF pages 7-19): the oscillating-field two-state model, its resonance and its rotating-frame treatment"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 216-217 (PDF pages 224-225): the first-order transition probability of a classically described wave and the resonant growth of the transition amplitude"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Adopt the prescribed dipole-drive model
[[def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength]] with the
following **realized two-level matter data**. For any declared $\omega_0>0$
($\mathrm{s^{-1}}$) and $d>0$ ($\mathrm{C\,m}$), use the positive framework
constant $\varepsilon_0$ of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (d) and define
$$q:=\left(\frac{8\sqrt2\,\pi^{3/2}\varepsilon_0\hbar\omega_0d}{3}\right)^{1/3},\qquad a:=\frac{\sqrt2d}{q},\qquad \mu:=\frac{9\hbar}{10\omega_0a^2},\qquad \kappa:=\frac{q^2}{4\pi\varepsilon_0}.$$
These have units $\mathrm C$, $\mathrm m$, $\mathrm{kg}$ and $\mathrm{J\,m}$,
respectively. Declare the charged pair of
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] with
$m_1=m_2=2\mu$, charges $-q,+q$ and relative-coordinate energy
$H_\kappa=-(\hbar^2/(2\mu))\Delta_w-\kappa/|x|$ on
$H^2(\mathbb R^3;\mathbb C)$; $\Delta_w$ is the sum of the three second weak
coordinate derivatives. Its dipoles are $D_j=-qQ_j$, $Q_jf(x)=x_jf(x)$ on
$D(Q_j)=\{f\in L^2:x_jf\in L^2\}$. Here $L^2=L^2(\mathbb R^3;\mathbb C)$ consists of Lebesgue square-integrable classes,
and $H^2$ consists of those classes whose weak coordinate derivatives through
order two also belong to $L^2$: $D^\alpha f$ is a weak derivative when
$\int f\,\partial^\alpha\varphi=(-1)^{|\alpha|}\int D^\alpha f\,\varphi$
for every smooth compactly supported test function $\varphi:\mathbb R^3\to\mathbb C$.
Here $\alpha=(\alpha_1,\alpha_2,\alpha_3)\in\mathbb N_0^3$,
$|\alpha|=\alpha_1+\alpha_2+\alpha_3$ and $\partial^\alpha$ denotes that
sequence of classical coordinate derivatives. In this relative-coordinate space put
$$g_a(x):=(\pi a^2)^{-3/4}e^{-|x|^2/(2a^2)},\qquad w_\downarrow:=g_a,\qquad w_\uparrow:=-\frac{\sqrt2x_1}{a}g_a,\qquad W:=\operatorname{span}\{w_\uparrow,w_\downarrow\}.$$
The verification below proves that this is an orthonormal pair in
$D(H_\kappa)\cap\bigcap_{j=1}^3D(Q_j)$ and that the actual compressions
$H_a=\Pi_WH_\kappa|_W$, $D_j^W=\Pi_WD_j|_W$ have the following matrices.
Identify $(w_\uparrow,w_\downarrow)$ with the coordinate basis
$(e_{\uparrow},e_{\downarrow})$ of $\mathbb C^2$, using the Pauli matrices
$(\sigma_{x},\sigma_{y},\sigma_{z})$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e):
$$H_{a}:=\frac{\hbar\omega_{0}}{2}\sigma_{z},\qquad D^{W}_{1}:=d\,\sigma_{x},\qquad D^{W}_{2}:=D^{W}_{3}:=0,$$
where $\omega_0,d$ are the arbitrary positive parameters fixed above.
The two vectors are eigenvectors of the compression, not asserted to be
Coulomb eigenfunctions; invariance of $W$ under the uncompressed operators
is unnecessary. Declare the field
$$\mathbf E_{\mathrm{ext}}(r):=E_{0}\cos(\omega r)\,e_{1},\qquad r\in I=[0,\tau],$$
with $E_{0}>0$ in $\mathrm{V\,m^{-1}}$ and $\omega>0$ in $\mathrm{s^{-1}}$, and $\tau>0$ in seconds;
declare $L>0$ in metres, $x_0=0\in\mathbb R^3$, $k=0\in\mathbb R^3$ in inverse metres, and a dimensionless phase tolerance $\delta_{\mathrm{ph}}=1/10$. Use the spatially uniform template $\mathbf E^{\mathrm{sp}}(x,r)=E_0\cos(\omega r)e_1$ of the dipole-drive definition (d), so $|k|L=0\le\delta_{\mathrm{ph}}$ for every $L$. These are declared prescribed-field data, with no Maxwell dispersion relation; the temporal frequency $\omega>0$ does not determine $k$ in this model. Let $v_{\uparrow}:=e_{\uparrow}$, $v_{\downarrow}:=e_{\downarrow}$, so that
$E_{\uparrow}=\hbar\omega_{0}/2$, $E_{\downarrow}=-\hbar\omega_{0}/2$ and
$\Delta=E_{\uparrow}-E_{\downarrow}=\hbar\omega_0$. Write $\delta:=\omega_0-\omega$ for the detuning frequency, distinct from the energy $\Delta$. Then:

(a) (identification) $H_{\mathrm d}(r)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}
+\Omega_{1}\cos(\omega r)\sigma_{x})$ with
$$\Omega_{1}=-\frac{2dE_{0}}{\hbar},$$
so the model is exactly the declared **linear two-level drive model** of
clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]] with
splitting frequency $\omega_{0}$ and transverse coupling $\Omega_{1}$;

(b) (resonance and first-order coefficient) at resonance $\omega=\omega_{0}$
the co-rotating first-order amplitude of
[[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] clause (b) for
the transition $e_{\downarrow}\to e_{\uparrow}$ from time $0$ to time $\tau$
has modulus
$$|a_{+}|=\Bigl|\bigl\langle V_0 e_{\downarrow},e_{\uparrow}\bigr\rangle\Bigr| \frac{\tau}{2\hbar}=\frac{dE_{0}\tau}{2\hbar},\qquad V_0=-dE_{0}\sigma_{x},$$
and the co-rotating component coefficient is
$\gamma_+=|a_+|^2=(dE_0\tau/(2\hbar))^2$; the counter-rotating term is bounded
by $|\langle V_0e_{\downarrow},e_{\uparrow}\rangle|/(\Delta+\hbar\omega)
=dE_{0}/(2\hbar\omega)$ at resonance. The full first-order interaction-picture amplitude is
$$A_1=\frac{idE_0}{2\hbar}\left[\tau+\frac{e^{2i\omega\tau}-1}{2i\omega}\right],\qquad\gamma_1:=|A_1|^2,$$
including interference of both components; $\gamma_1$ is an unnormalized first-order approximation, not a normalized-state Born law;

(c) (comparison with the exact averaged Rabi probability) by
[[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clause (c) the
averaged down-population of the initial up-state at resonance is
$p^{\mathrm{avg}}_{\downarrow}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)
=\sin^{2}(dE_{0}\tau/(2\hbar))$, whose small-$\tau$ expansion begins with
$(dE_{0}\tau/(2\hbar))^{2}$; the co-rotating coefficient $\gamma_+$ of clause (b) is
therefore the leading term of the exact averaged Rabi probability, and the
rotating-wave error contract of the cited item bounds the difference between
the exact linear-model population and this averaged probability by
$2\varepsilon(\tau)$ with $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2\omega}
[1+\tau(\frac{|\delta|}{2}+\frac{3|\Omega_{1}|}{4})]$;

(d) (scope) the example is a conditional computation in the declared
two-level drive model. The identification of a laboratory two-level atom,
molecule or field with the declared data is a tested identification with
uncertainty under P7; the model has no quantized field, no vacuum, no
spontaneous emission, no damping, no measurement record and no empirical
value, and the exact circular and linear families of the driven-dynamics page
are models with their own scope.

## Facts & Assumptions

**Given:** the explicit subspace $W$, the constructed parameters $q,a,\mu,\kappa$, the declared two-level matter data $H_{a},D^{W}_{j}$, the field $\mathbf E_{\mathrm{ext}}$, the parameters $\omega_{0},d,E_{0},\omega$, the pair $(e_{\uparrow},e_{\downarrow})$ and the cited suppliers.

[F1] **Identification supplier.** The declared linear two-level drive model of clause (f) of [[def-nrqm-driven-dynamics-framework-driven-model]] has the family $H_{\mathrm l}(t)=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x})$ with splitting frequency $\omega_{0}$, transverse coupling $\Omega_{1}$ and drive frequency $\omega$, read as the model's energy in the bounded norm-continuous class ([[def-nrqm-driven-dynamics-framework-driven-model]] clauses (b)(i),(f), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F2] **First-order supplier.** Write $V_0$ for the perturbation matrix called $W$ in the supplier, keeping it distinct from the matter subspace. For a monochromatic field $\mathbf E_{\mathrm{ext}}(r)=\mathbf E_{0}\cos(\omega r+\vartheta)$ and $V_0=-\sum_{j}E_{0,j}D^{W}_{j}$, the first-order amplitude decomposes into co- and counter-rotating parts with $|a_{+}|=|\langle V_0v_{i},v_{k}\rangle|\,|\sin((\Delta-\hbar\omega)\tau/(2\hbar))|/|\Delta-\hbar\omega|$ for $\Delta\ne\hbar\omega$ and $|a_{+}|=|\langle V_0v_{i},v_{k}\rangle|\tau/(2\hbar)$ at $\Delta=\hbar\omega$, while the counter-rotating part is bounded by $|\langle V_0v_{i},v_{k}\rangle|/|\Delta+\hbar\omega|$ when $\Delta+\hbar\omega\ne0$ ([[pthm-nrqm-light-matter-stimulated-dipole-drive-transitions]] clause (b)).

[F3] **Averaged Rabi supplier.** Under the stated hypotheses the linear model's exact down-population obeys $|p_{\downarrow}(\tau)-p^{\mathrm{avg}}_{\downarrow}(\tau)|\le2\varepsilon(\tau)$ with $\varepsilon(\tau)=\frac{|\Omega_{1}|}{2|\omega|}[1+\tau(\frac{|\delta|}{2}+\frac{3|\Omega_{1}|}{4})]$, and at resonance $\delta=0$ the averaged probability is $p^{\mathrm{avg}}_{\downarrow}(\tau)=\sin^{2}(|\Omega_{1}|\tau/4)$ ([[pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error]] clauses (b),(c)).

[F4] **Pauli data and pairing.** The Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e) act on the declared orthonormal basis with $\sigma_{x}e_{\downarrow}=e_{\uparrow}$, so $V_0e_{\downarrow}=-E_{0}d\sigma_{x}e_{\downarrow}=-dE_{0}e_{\uparrow}$ and $\langle -dE_{0}e_{\uparrow},e_{\uparrow}\rangle=-dE_{0}$ with modulus $dE_{0}$; the pairing is linear in the first argument ([[def-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F5] **Framework readings.** Times, energies and field values are read in $\mathrm s$, $\mathrm J$ and $\mathrm{V\,m^{-1}}$ as in [[def-nrqm-framework-quantities-and-units]], and the laboratory identification of a preparation or field with the declared data is a tested identification with uncertainty under P7 ([[post-nrqm-framework-preparation-and-apparatus]], [[def-nrqm-observables-framework-observable-and-outcome-law]]).

[F6] **Coulomb realization and domains.** The declared two-body model has reduced mass $\mu=m_1m_2/(m_1+m_2)$ and equal-charge coupling $\kappa=q^2/(4\pi\varepsilon_0)$; its relative energy has the stated weak differential action on $H^2$ ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (b),(d)). The finite-level postulate uses $D_j=-qQ_j$ and the actual compressions on any declared finite-dimensional common-domain subspace ([[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses (ii)-(iv)). Classical derivatives of a $C^2$ function are its weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]] with $k=2$).

[F7] **Gaussian integration.** For $b>0$, $\int_{\mathbb R^n}e^{-b|x|^2}dx=(\pi/b)^{n/2}$, and all polynomial-Gaussian moments are absolutely integrable ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]], with zero Fourier argument and $t=b/\pi$). Nonnegative Gaussian product moments may be integrated successively by [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] on the sigma-finite Euclidean Lebesgue spaces. Polar integration in three dimensions is $dx=r^2dr\,d\sigma$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]). Integration by parts on a line is valid for $C^1$ factors with integrable derivative products and vanishing boundary products ([[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]]); all uses below have Gaussian decay.

## Verification

**Proof technique:** direct; realize the matter matrices on a common-domain Gaussian subspace, compute the matrix elements and the drive family in the declared basis, apply the supplier's first-order formula, and expand the supplier's exact averaged probability.

**Given:** the explicit subspace $W$, the constructed parameters $q,a,\mu,\kappa$, the declared two-level matter data $H_{a},D^{W}_{j}$, the field $\mathbf E_{\mathrm{ext}}$, the parameters $\omega_{0},d,E_{0},\omega$ and the cited suppliers.

1.1 [Common domain and normalization] Write $\rho(x)=|g_a(x)|^2=(\pi a^2)^{-3/2}e^{-|x|^2/a^2}$. By [F7], $\int\rho=1$; integrating $(x_1e^{-x_1^2/a^2})'$ on the line gives $\int x_1^2\rho=a^2/2$, so $\|w_\uparrow\|=\|w_\downarrow\|=1$, and oddness in $x_1$ gives their orthogonality. Every classical derivative of either vector through order two and every coordinate multiple is polynomial times a Gaussian and lies in $L^2$ by [F7]. By [F6] those derivatives are weak derivatives, so both vectors lie in $H^2=D(H_\kappa)$ and every $D(Q_j)$. Thus the displayed $W$ is a valid two-dimensional compression subspace. [given, F6, F7, algebra]

2.1 [Exact Coulomb and dipole compressions] All off-diagonal energy entries vanish by oddness in $x_1$, since the Laplacian and radial Coulomb multiplier preserve that parity. The derivative identity $\partial_jg_a=-x_jg_a/a^2$, integration by parts from [F7], and the Gaussian moments give $\int|\nabla w_\downarrow|^2=3/(2a^2)$ and $\int|\nabla w_\uparrow|^2=5/(2a^2)$. Explicitly $\partial_jw_\uparrow=-(\sqrt2/a)(\delta_{j1}-x_1x_j/a^2)g_a$; the line recurrence obtained by integrating $(x_1^{2n-1}e^{-x_1^2/a^2})'$ gives $\int x_1^4\rho=3a^4/4$, while product integration gives $\int x_1^2x_2^2\rho=\int x_1^2x_3^2\rho=a^4/4$, which yields the second gradient value. Polar integration gives $\int\rho/|x|=2/(\sqrt\pi a)$ and $\int |w_\uparrow|^2/|x|=4/(3\sqrt\pi a)$: spherical symmetry assigns one third of $\int |x|\rho=2a/\sqrt\pi$ to $\int x_1^2\rho/|x|$, and the radial integrals follow by substituting $u=r^2/a^2$. Therefore $\langle H_\kappa w_\downarrow,w_\downarrow\rangle=3\hbar^2/(4\mu a^2)-2\kappa/(\sqrt\pi a)$ and $\langle H_\kappa w_\uparrow,w_\uparrow\rangle=5\hbar^2/(4\mu a^2)-4\kappa/(3\sqrt\pi a)$. The declared parameters satisfy $a=3\sqrt\pi\hbar^2/(5\mu\kappa)$, so these values are $-9\hbar^2/(20\mu a^2)=-\hbar\omega_0/2$ and $+9\hbar^2/(20\mu a^2)=+\hbar\omega_0/2$. Every diagonal dipole entry vanishes by coordinate parity, and $\langle D_1w_\downarrow,w_\uparrow\rangle=(q\sqrt2/a)\int x_1^2\rho=qa/\sqrt2=d$; its reverse equals it by real symmetry. The cross entries for $D_2,D_3$ are zero by oddness in $x_2,x_3$. Thus the actual compressions are exactly $H_a=(\hbar\omega_0/2)\sigma_z$, $D_1^W=d\sigma_x$, $D_2^W=D_3^W=0$. [given, F6, F7, step 1.1, algebra]

3.1 [Identification] Since $D^{W}_{2}=D^{W}_{3}=0$ and $\mathbf E_{\mathrm{ext}}(r)=E_{0}\cos(\omega r)e_{1}$, the interaction term is $-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}=-E_{0}\cos(\omega r)d\sigma_{x}$, so $H_{\mathrm d}(r)=\frac{\hbar\omega_{0}}{2}\sigma_{z}-dE_{0}\cos(\omega r)\sigma_{x}=\frac{\hbar}{2}(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega r)\sigma_{x})$ with $\Omega_{1}=-2dE_{0}/\hbar$; this is the linear family of [F1]. [F1, step 2.1, algebra]

4.1 [Resonant first-order amplitude] At resonance $\omega=\omega_{0}$ one has $\Delta=\hbar\omega$, so the co-rotating quotient is $\tau$ and $|a_{+}|=|\langle V_0e_{\downarrow},e_{\uparrow}\rangle|\tau/(2\hbar)$; by [F4] this is $dE_{0}\tau/(2\hbar)$, so the co-rotating coefficient is $\gamma_+=(dE_0\tau/(2\hbar))^2$. Integrating the full interaction-picture entry gives $A_1=(idE_0/(2\hbar))[\tau+(e^{2i\omega\tau}-1)/(2i\omega)]$, which contains both components and their interference. The quotient tends to $\tau+O(\tau^2)$ at small $\tau$, so $\gamma_1=(dE_0\tau/\hbar)^2+O(\tau^3)$, with leading coefficient four times that of $\gamma_+$; the counter-rotating bound of [F2] at $\Delta+\hbar\omega=2\hbar\omega$ is $dE_{0}/(2\hbar\omega)$. [F2, F4, step 3.1, algebra]

5.1 [Exact averaged comparison] By [F3] at $\delta=\omega_0-\omega=0$ the averaged down-population is $\sin^{2}(|\Omega_{1}|\tau/4)=\sin^{2}(dE_{0}\tau/(2\hbar))$, whose power series begins with $(dE_{0}\tau/(2\hbar))^{2}$, the co-rotating coefficient of step 4.1; the difference between the exact linear-model population and this averaged probability is at most $2\varepsilon(\tau)$ with the displayed $\varepsilon$. [F3, step 4.1, algebra]

6.1 [Scope] The computation used only the declared two-level data, the prescribed field and the cited driven-dynamics results; no quantized field, vacuum, spontaneous emission, damping or record entered, and the laboratory identifications are P7-tested by [F5]. This is clause (d). [F5, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **First order versus exact.** The co-rotating component coefficient of clause (b) is the leading term of the exact averaged Rabi oscillation of clause (c) only at small $\tau$; the full linear-drive first-order coefficient is $\gamma_1=|a_++a_-|^2$ and has four times that leading small-time coefficient, so no averaging of the full model is silently assumed; the exact linear model differs from the averaged model by the rotating-wave error, and the exact circular model of the driven-dynamics page is a different declared family, not an approximation proved here.
- **No spontaneous emission.** The example is stimulated: the field is prescribed and unaffected by the transition, and the model contains no vacuum. Spontaneous emission is treated only in the quantized cutoff dipole model of this pair, under the additional vacuum-preparation assumption of the postulate item.
