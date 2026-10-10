---
page: em-vacuum-waves-and-polarization
title: "Vacuum waves and polarization"
status: draft
items: [def-em-plane-wave-definition,
        pthm-em-vacuum-wave-equation,
        pthm-em-plane-wave-maxwell,
        def-em-polarization-definition,
        pthm-em-general-wave-ivp,
        pthm-em-wave-energy-average,
        pthm-em-classical-interference]
examples: []
---

**Objective.** This page builds the vacuum-wave and polarization layer between
the vacuum Maxwell formulation and the energy-momentum, interface, guide,
covariant, empirical and scattering layers. It fixes the real plane-wave
encoding, derives the source-free wave equation, proves the algebraic Maxwell
conditions for plane waves and the polarization classification they carry,
establishes the constrained whole-space initial-value theory with finite
propagation and its conditional finite-energy branch, computes the exact
period averages of energy, momentum and flux, and ends with the deterministic
coherent-interference cross term. Everything is conditional on the adopted
postulate, the named inertial frame and the SI conventions.

**Plane waves and the wave equation.** A real plane wave is the real part of a
complex exponential: for a wavevector $k\ne0$, a positive angular frequency
$\omega$ and complex amplitudes $e,b$, the fields are
$E=\operatorname{Re}(e\,e^{i(k\cdot x-\omega t)})$, $B=\operatorname{Re}(b\,e^{i(k\cdot x-\omega t)})$
([[def-em-plane-wave-definition]]), an encoding only, with no field equation
built in. The source-free smooth branch of the adopted vacuum Maxwell
postulate forces the wave equation: jointly $C^2$ fields with vanishing
sources on an open region satisfy $\Delta E=c^{-2}\partial_t^2E$ and
$\Delta B=c^{-2}\partial_t^2B$ there ([[pthm-em-vacuum-wave-equation]]); the
item proves the implication in one direction only and exhibits an explicit
field that solves both wave equations without satisfying the Gauss
constraints.

**The plane-wave Maxwell conditions.** Substituting the encoded fields into
the four source-free Maxwell equations turns them into four algebraic
amplitude conditions, and the pair lies in the source-free smooth branch
exactly when those conditions hold ([[pthm-em-plane-wave-maxwell]]). Nonzero
amplitude solutions exist exactly on the dispersion relation $|k|=\omega/c$;
then the electric amplitude is transverse and the pair is determined by
$e\mapsto b=k\times e/\omega$, a complex two-dimensional family, while the
zero wave is permitted both on and off dispersion. On the dispersion relation
the fields satisfy $E\cdot B=0$, $B=\hat k\times E/c$ and $|B|=|E|/c$
pointwise, and each component solves the wave equation.

**Polarization.** Writing $e=a+id$ with real $a,d$ in the transverse plane,
the electric trace is $\gamma(\theta)=a\cos\theta-d\sin\theta$, and the page
classifies it as linear, circular or elliptical according to the span and
the inner products of $a,d$
([[def-em-polarization-definition]]). The helicity sign
$H=\langle a\times d,\hat k\rangle$ vanishes exactly in the linear case; this
library calls $H<0$ right-handed and $H>0$ left-handed, and the rotation
identity $\langle E\times\partial_tE,\hat k\rangle=\omega H$ and the
screen-orientation convention make that sign unambiguous. The naming is
conventional; later items use only the sign of $H$.

**Constrained initial-value theory.** Arbitrary-growth $C^\infty$ data
$E_0,B_0$ satisfying the two divergence constraints generate a unique jointly
$C^\infty$ source-free solution of the four equations on a time slab, with an
explicit componentwise spherical-mean representation, uniqueness among
jointly $C^2$ solutions, a domain of dependence read through the closed
backward cone, and compact-support propagation
([[pthm-em-general-wave-ivp]]). The item also proves a conditional
finite-energy branch: if the initial total energy computed by ball exhaustion
is finite, it is conserved, with the local estimate
$\int_{B_r(x_0)}u(\cdot,t)\le\int_{B_{r+c(t-s)}(x_0)}u(\cdot,s)$; smooth
non-decaying data of infinite energy remain allowed. Countable Choice is
declared and carried through the scalar Cauchy theorem and the divergence and
substitution suppliers.

**Energy, momentum and flux averages.** For every complex transverse
amplitude the period averages are exact:
$\langle u\rangle=\varepsilon_0|e|^2/2$,
$\langle S\rangle=\langle u\rangle c\hat k$, and
$\langle\sigma_{ij}\rangle=-\langle u\rangle\hat k_i\hat k_j$
([[pthm-em-wave-energy-average]]), with the momentum density
$\langle g\rangle=\langle S\rangle/c^2$ and a signed momentum-flux
coefficient $(I/c)(\hat k\cdot n)$ of magnitude $(I/c)|\hat k\cdot n|$. The
physical balance reading additionally adopts Lorentz continuum coupling
(ii) in the theorem's explicit empty-matter model, then uses the local
Poynting and momentum identities and the periodicity of the fields; the zero amplitude gives zero energy, while every
nonzero amplitude has infinite box-exhaustion energy.

**Interference.** For two same-frequency transverse plane waves with complex
amplitudes and real superposition coefficients the sum is again a smooth source-free solution, and its averaged
energy density contains the coherent cross term
$W=(e_1\cdot\overline e_2+(\hat k_1\times e_1)\cdot(\hat k_2\times\overline e_2))e^{-i\delta}$
([[pthm-em-classical-interference]]). The cross term can remain nonzero after time averaging at
fixed relative phase, and for equal wavevectors the formulas reduce to the
single-wave averages of the summed amplitude. The item states explicitly that
these are deterministic identities: no ensemble, detection statistics or
finite-sample visibility claim is made, and the prediction alone does not
discriminate between classical and quantum descriptions of light.

The textbook treatments cited on the items motivate the definitions and
conventions; the deductions use the imported mathematical suppliers and the
framework's own postulates and definitions. No empirical claim is made on
this page.
