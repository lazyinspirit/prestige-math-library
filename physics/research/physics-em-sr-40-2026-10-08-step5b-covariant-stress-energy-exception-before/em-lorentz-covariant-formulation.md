---
page: em-lorentz-covariant-formulation
title: "Lorentz covariant formulation"
status: draft
items: [pthm-em-tensor-maxwell-equivalence,
        pthm-em-lorentz-field-transform,
        pthm-em-observer-field-and-doppler,
        pthm-em-relativistic-lorentz-force,
        pthm-em-covariant-stress-energy]
examples: []
---

**Objective.** This page is the manifestly covariant layer of the
classical-electromagnetism track. Working in the framework's single named
inertial chart and its fixed dictionary $F_{0i}=-E_i/c$,
$F_{ij}=\epsilon_{ijk}B_k$, $x^0=ct$, $\eta=\operatorname{diag}(-1,1,1,1)$,
it shows that the four laboratory Maxwell equations are exactly the two tensor
systems for the electromagnetic two-form and four-current, transports the
fields and the equations across proper orthochronous changes of inertial
description, decomposes the field for a moving observer with the exact
classical frequency reading, reduces the adopted covariant coupling to the
coordinate Lorentz force and power, and constructs the covariant
stress-energy tensor with its balance law. Everything is conditional on the
adopted postulates of
[[em-primitives-and-postulates]] and on the wave and Doppler suppliers of
[[em-vacuum-waves-and-polarization]] and [[sr-light-and-doppler]]; no
measurement, apparatus model or empirical claim is made.

**Tensor Maxwell equations.** The electromagnetic two-form
([[def-em-electromagnetic-tensor]]) satisfies the sourced system
$\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ and the cyclic identity
$\partial_\lambda F_{\mu\nu}+\partial_\mu F_{\nu\lambda}+\partial_\nu F_{\lambda\mu}=0$
if and only if the smooth branch of the vacuum Maxwell postulate holds in the
laboratory chart; the eight independent scalar components are exhibited
explicitly, repeated-index instances vanish by alternation, and the tensor
systems are form-invariant under a constant proper orthochronous component law
([[pthm-em-tensor-maxwell-equivalence]]). The equivalence uses only first
derivatives, the component dictionary and the identification $j=(c\rho,J)$;
the weak branch, singular source support and any converse from the wave
equations are excluded.

**Boosts, rotations and invariants.** For the axis boost the component
formulas $E'_1=E_1$, $B'_1=B_1$, $E'_\perp=\gamma(E+v\times B)_\perp$,
$B'_\perp=\gamma(B-v\times E/c^2)_\perp$ are computed directly; the same law is
proved for an arbitrary boost direction by explicitly conjugating the vector
boost with an orthonormal basis, and for every proper orthochronous change by
the unique factorization $\Lambda=B(-\beta)\widehat R$ into a boost and a
spatial rotation. The two scalar combinations $|B|^2-|E|^2/c^2$ and $E\cdot B$
— equivalently the contractions $I_1$ and $I_2$ of the two-form — are
invariant, and the four smooth Maxwell equations retain their form
([[pthm-em-lorentz-field-transform]]). The transformation is exact algebra on
the smooth flat branch; accelerating coordinates, media and orientation-
reversing descriptions are excluded.

**Moving observers and the frequency reading.** For a future unit observer
with coordinate velocity $w$ the rest components $e_a=F_{ab}n^b$,
$b_a=(*F)_{ab}n^b$ are evaluated in the laboratory frame, the reconstruction
$F=n^\flat\wedge e-*(n^\flat\wedge b)$ and the raising into $n^\perp$ are made
explicit, and the measured vectors are identified with the boosted rest-frame
fields; the phase covector of an ideal plane wave is shown to be nonzero,
future and null, and the exact reading
$\omega_n=\gamma_w(1-w\cdot s/c)\omega>0$ together with the aberration,
longitudinal and transverse formulas follows from the exact classical Doppler
theorem ([[pthm-em-observer-field-and-doppler]]). The identification of the
mathematical vectors and frequencies with apparatus readings is the explicitly
adopted ideal-detector assumption stated in that item; no calibration,
apparatus or statistical claim is made, and the reading is pointwise for
inertial observers.

**Covariant force and power.** From the adopted coupling
$m\,dU/d\tau=q\,\Phi(U)$ with $\eta(\Phi(u),w)=F(w,u)$, the coordinate
identities $dp/dt=q(E+v\times B)$ and $d(\gamma mc^2)/dt=qE\cdot v$ are
derived with $p=m\gamma v$; the four-velocity norm is conserved by the
skew-orthogonality of $\Phi$, so a solution with future timelike initial data
remains future timelike; and uniform low-speed bounds with constants depending
only on the speed interval $\delta$ are proved by the mean value and Cauchy
mean value theorems ([[pthm-em-relativistic-lorentz-force]]). The charge is
constant, the mass is an externally supplied parameter and the field is a
prescribed exterior field: self-fields, radiation reaction, monopoles and
trajectory approximations over time are excluded.

**Covariant stress-energy.** The quadratic tensor
$T^{\mu\nu}=\mu_0^{-1}(F^{\mu\alpha}F^\nu{}_\alpha-\tfrac14\eta^{\mu\nu}F^{\alpha\beta}F_{\alpha\beta})$
is a symmetric traceless type-$(2,0)$ tensor with the correct component
identities $T^{00}=u$, $T^{0i}=S_i/c=cg_i$, $T^{ij}=-\sigma_{ij}$ and the local
balance $\partial_\mu T^{\mu\nu}=-f^\nu$ with
$f^\nu=F^{\nu\lambda}j_\lambda=(J\cdot E/c,\ \rho E+J\times B)$, whose component
forms coincide with the independently proved Poynting and momentum balances;
conditional total conservation with an adopted $C^1$ symmetric matter tensor
follows, with the finite-box and slice identities and the divergence-free
angular current ([[pthm-em-covariant-stress-energy]]). No matter tensor is
derived from vacuum Maxwell, and products of distributions are excluded.

The textbook treatments cited on the items motivate the conventions; the
deductions use the framework's postulates, its local balance identities and the
imported mathematical suppliers. The two leaf computations of the pair are
collected on [[em-lorentz-covariant-formulation-examples]].
