---
page: em-scattering-and-scalar-diffraction
title: "Vector PEC scattering, dipole limits and controlled scalar diffraction"
status: published
items: [def-em-monochromatic-source-free-phasors,
        lem-em-phasor-real-part-calculus-and-equivalence,
        lem-em-harmonic-forcing-periodic-response,
        def-em-ideal-harmonic-dipole-model,
        post-em-scalar-aperture-model,
        pthm-em-scalar-aperture-diffraction,
        pthm-em-pec-monochromatic-exterior-scattering,
        pthm-em-dipole-scattering-cross-section,
        pthm-em-weak-field-thomson-limit]
examples: []
---

**Objective.** This page is the scattering and optics capstone of the
classical-electromagnetism track. It fixes a general monochromatic phasor
class and its exact real-field calculus, solves the smooth exterior vector
scattering problem for a stationary perfect conductor and states its ideal
boundary condition and uniqueness statement, defines the ideal harmonic
dipole model with its differential and total model cross sections and its
actual-source fidelity bounds, derives the leading Thomson-model coefficient
as a controlled first variation of the relativistic force law, and adopts a
polarization-insensitive scalar aperture model with quantified Fraunhofer and
Fresnel errors. Everything is conditional on the adopted postulates, the
named laboratory chart and the SI conventions; no measured cross section or
optical record is claimed.

**Phasor encoding and its real calculus.** A frequency-$\omega$ source-free
vacuum phasor pair on an open set is a pair of $C^\infty$ complex fields
$(\widetilde E,\widetilde B)$ satisfying
$\operatorname{div}\widetilde E=\operatorname{div}\widetilde B=0$,
$\operatorname{curl}\widetilde E=i\omega\widetilde B$ and
$\operatorname{curl}\widetilde B=-i\omega c^{-2}\widetilde E$
([[def-em-monochromatic-source-free-phasors]]); the definition fixes the
$e^{-i\omega t}$ encoding, the componentwise complex divergence and curl, the
units and the excluded content only. The companion mathematical lemma proves
the exact real-part calculus, the injectivity of the encoding at the two
phases $0$ and $\pi/(2\omega)$, and the equivalence of the phasor system with
the real source-free system
$\operatorname{div}E=\operatorname{div}B=0$,
$\operatorname{curl}E=-\partial_tB$,
$\operatorname{curl}B=c^{-2}\partial_tE$ on $D\times\mathbb R$
([[lem-em-phasor-real-part-calculus-and-equivalence]]). The mathematical
harmonic-response lemma classifies all solutions of
$\ddot z=\operatorname{Re}(we^{-i\omega t})$ as $z_p+a+bt$, with the unique
global extension of any local solution, the periodicity criterion $b=0$, the
single-pair test and the period means $a+b(t+T/2)$
([[lem-em-harmonic-forcing-periodic-response]]); it is the tool that lets the
Thomson preparation be imposed on the linear response without asserting a
global nonlinear family.

**Vector scattering by a smooth PEC obstacle.** For a bounded $C^\infty$
obstacle with connected exterior, one frequency and a $C^\infty$ incident
source-free phasor pair, the exterior vector Helmholtz problem with the
prescribed tangential scattered datum has a unique outgoing smooth solution
(via [[lem-em-exterior-vector-helmholtz-mixed-boundary-existence]], which
carries the Axiom of Choice). The physics theorem
[[pthm-em-pec-monochromatic-exterior-scattering]] turns that solution into a
scattering statement: the scattered and total pairs are source-free phasor
pairs, the associated real fields solve the zero-source smooth vacuum Maxwell
equations, the ideal PEC condition $n\times E_{\rm tot}=0$ holds on
$\partial O\times\mathbb R$, and the outgoing scattered correction with the
prescribed tangential trace is unique. The total field is explicitly not
required to be outgoing, and no induced charge or current is determined.

**Dipole limits and the Thomson coefficient.** The page defines the ideal
harmonic electric-dipole model by its leading transverse far-zone fields and
its model flux, with the declared absence of magnetic-dipole and
higher-multipole content and the actual-source comparison through the
moment-mismatch and error bounds of the dipole theorem
([[def-em-ideal-harmonic-dipole-model]]). In a plane wave of amplitude $e$,
the model differential and total cross sections are
$d\sigma/d\Omega=\omega^4|n\times p_0|^2/(16\pi^2\varepsilon_0^2c^4|e|^2)$
and $\sigma=\omega^4|p_0|^2/(6\pi\varepsilon_0^2c^4|e|^2)$, with the
scalar-polarizability branch, and the actual-source fidelity bounds with the
mismatch $M$, the conserved compact-window realization and the scope
exclusions ([[pthm-em-dipole-scattering-cross-section]]). The Thomson item
then takes a uniformly convergent solution family of the adopted relativistic
external-force law in the field $\eta(E_{\rm inc},B_{\rm inc})$, proves the
first-order equation $m\ddot r_1=qE_{\rm inc}(x_0,\cdot)$, extracts the
periodic first-order response under the explicit preparation
$r_1'(0)=\operatorname{Re}(iw/\omega)$ with
$w=(q/m)e\,e^{i\kappa\cdot x_0}$, and substitutes the induced amplitude
$p_0=-\frac{q^2}{m\omega^2}e\,e^{i\kappa\cdot x_0}$ into the dipole cross
section to obtain $\sigma_{\rm T}=\frac{q^4}{6\pi\varepsilon_0^2m^2c^4}$,
independent of the frequency ([[pthm-em-weak-field-thomson-limit]]). The
result is a conditional leading-model coefficient, not an assertion about the
nonlinear particle's emitted field.

**Controlled scalar diffraction.** The page adopts a scalar aperture model:
a finite complex aperture distribution on a compact planar aperture, the
outgoing Helmholtz field $u=G_k*\alpha$, its real reading
$U=\operatorname{Re}(ue^{-i\omega t})$ and the squared field
$I=\frac12|u|^2$, declared as a polarization-insensitive optical
approximation rather than a consequence of the Maxwell postulates
([[post-em-scalar-aperture-model]]). The diffraction theorem then proves the
off-support smoothness and Helmholtz equation, the uniform Fraunhofer
estimate at the closed radius $r\ge2a$ with the explicit outgoing residual,
the quantified Fresnel phase and amplitude errors on the declared small-angle
range, the period-average identity and the difference-of-moduli intensity
transfer, together with the trace caveat that the aperture datum is not the
exact screen boundary data ([[pthm-em-scalar-aperture-diffraction]]). The
companion page carries the worked uniform rectangular aperture.

**Scope and evidence.** Every item on this page is a conditional model
statement within the named conventions. The PEC condition is an adopted
idealization; the dipole and Thomson items are conditional on their
prescribed sources and solution families; the aperture model is an adopted
scalar approximation with inherited error terms; and no item makes a
measured, apparatus, sampling or statistical claim.
