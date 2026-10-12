---
page: qm-math-coulomb
title: Qm Math Coulomb
status: draft
items: [def-nrqm-coulomb-ltwo-kernel-operators, lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact, def-nrqm-coulomb-closed-semibounded-forms, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-relative-compactness, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-laguerre-bound-energy-exhaustion, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-ground-radial-probability-and-units, thm-nrqm-coulomb-two-body-reduced-mass, thm-nrqm-coulomb-atomic-dipole-matrix-element-domain, thm-nrqm-coulomb-jost-volterra-solution, thm-nrqm-coulomb-continuum-spectral-density, thm-nrqm-coulomb-onto-radial-continuum-transform]
requires: [qm-math-intervals-and-contacts, qm-math-orbital-and-spin, density-separability-and-convolution-in-lp]
examples: []
---

The Coulomb layer of the non-relativistic quantum mechanics mathematical
prerequisites, entirely mathematical: the three-dimensional Hardy inequality
and the resulting infinitesimal kinetic bound, the relative compactness and
essential spectrum of the Coulomb operator, the polar-coordinate unitary
reduction to radial operators with their transported endpoint domain, the
Kummer and Laguerre solution theory of the negative spectrum, the two-body
reduced-mass separation, the dipole matrix-element domain and selection rules,
and the Jost-Volterra construction of the continuum with its spectral density
and onto radial transform.

Two local prerequisites open the page: [[def-nrqm-coulomb-ltwo-kernel-operators]]
and [[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]] supply the
$L^2$-kernel calculus used by the relative-compactness argument, and
[[def-nrqm-coulomb-closed-semibounded-forms]] fixes the closed semibounded form
terminology used by the radial realisation. Every item carries
`domain: mathematics` and depends only on mathematical
suppliers from [[qm-math-composites]], [[qm-math-oscillator]],
[[qm-math-intervals-and-contacts]], [[qm-math-orbital-and-spin]] and published
mathematics; nothing here asserts a physical interpretation, measurement model
or empirical claim, and the companion page
[[qm-math-coulomb-examples]] stays mathematics as well.

[[lem-nrqm-coulomb-three-dimensional-hardy-bound]] proves
$\|u/|\cdot|\|_2\le2\|\nabla u\|_2$ on $W^{1,2}(\mathbb R^3)$ by integration by
parts with a cutoff and a density argument, and
[[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] converts it into the bound
$\|u/|\cdot|\|_2\le\eta\|\Delta u\|_2+\eta^{-1}\|u\|_2$, so that
$C=-\Delta-\gamma/|\cdot|$ on $H^2(\mathbb R^3)$ is self-adjoint and bounded
below by Kato-Rellich. [[thm-nrqm-coulomb-relative-compactness]] factors the
free resolvent through an $L^2$ convolution kernel and splits the Coulomb
multiplier into a Hilbert-Schmidt annulus plus small short-range and tail
pieces, giving $H_0$-compactness; [[thm-nrqm-coulomb-essential-spectrum]]
applies Weyl's theorem to get $\sigma_{\mathrm{ess}}(C)=[0,\infty)$ and the
discreteness of the negative spectrum.

[[thm-nrqm-coulomb-angular-radial-unitary-reduction]] constructs the unitary
polar decomposition $\psi\mapsto(u_{lm})$, $u_{lm}=r\int\psi\overline{Y_{lm}}$
into $\bigoplus L^2((0,\infty),dr)$, proves the polar form of the Laplacian and
the single-block reduction $-\Delta\leftrightarrow-u''+l(l+1)u/r^2$;
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] defines the radial
operator $A_l$ through the closed form
$\int(|u'-u/r|^2+l(l+1)|u|^2/r^2-\gamma|u|^2/r)$, proves that it is
self-adjoint with $UCU^*=\bigoplus A_l$, that its domain is the transported
$H^2$ domain, and that its elements satisfy the differential equation
distributionally almost everywhere, with classical $C^2$ solutions for the
eigenfunctions. [[thm-nrqm-coulomb-kummer-recurrence-and-termination]] solves the
radial equation in terms of the Kummer series and the Laguerre polynomials and
identifies the terminating solutions;
[[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]] shows that
non-terminating solutions grow exponentially and therefore excludes them, so
that the negative spectrum of $A_l$ is exactly
$\{-\gamma^2/(4n^2):n\ge l+1\}$;
[[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] proves that
these bound states form a complete orthonormal family of the negative spectral
subspace with degeneracy $n^2$ and do not span $L^2$.

[[thm-nrqm-coulomb-ground-radial-probability-and-units]] computes the
normalised ground vector $(\gamma^3/8\pi)^{1/2}e^{-r/a_0}$, the radial law
$4r^2a_0^{-3}e^{-2r/a_0}$, its mean $3a_0/2$ and mode $a_0$, and records the
dimension convention $a_0=\hbar^2/(m\kappa)$;
[[thm-nrqm-coulomb-two-body-reduced-mass]] separates the two-body problem by
the unit-determinant coordinate map $(x_1,x_2)\mapsto(R,r)$, proves
$U_\Phi H_2U_\Phi^{-1}=T_R\otimes I+I\otimes C_\mu$ with reduced mass
$\mu=m_1m_2/(m_1+m_2)$, and shows $\sigma(H_2)=[-\mu\kappa^2/(2\hbar^2),\infty)$
with no eigenvalues; [[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]]
places the bound states in the domain of the coordinate multipliers, factors
the dipole pairings into radial and angular parts, applies the angular
selection rules $\Delta l=\pm1$, $\Delta m=q$, and records the oscillator
comparison $X\psi_n\propto\sqrt n\psi_{n-1}+\sqrt{n+1}\psi_{n+1}$.

The continuum layer is [[thm-nrqm-coulomb-jost-volterra-solution]], which
constructs the regular solution by an entire power series and the Jost-type
solution by a modified Volterra equation with controlled asymptotics
$e^{i(kr+a\log r)}(1+O(1/r))$, proves the Wronskian identities
$W(\overline f,f)=2ik$, $W_l\ne0$ and excludes positive eigenvalues;
[[thm-nrqm-coulomb-continuum-spectral-density]] derives the resolvent Green
kernel $-\varphi(\min)f(\max)/W_l$, its boundary value
$\operatorname{Im}G(k^2+i0)=k\varphi\varphi/|W_l|^2$, the spectral density
$\rho_l(E)=\sqrt E/(\pi|W_l(\sqrt E)|^2)$ and the absence of point and singular
continuous spectrum on $(0,\infty)$, including the scaling argument excluding
the zero eigenvalue; and [[thm-nrqm-coulomb-onto-radial-continuum-transform]]
proves that the transform
$(T_lg)(E)=\sqrt{\rho_l(E)}\int\varphi_l(\sqrt E,r)g(r)dr$ is unitary onto
$L^2((0,\infty),dE)$, diagonalises $A_l$ as multiplication by $E$, and
assembles the complete spectral resolution of $C$ as bound data plus continuum
data in every angular channel.
