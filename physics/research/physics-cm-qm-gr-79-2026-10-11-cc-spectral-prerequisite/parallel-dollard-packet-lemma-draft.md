# Dense Coulomb packets and both Dollard time signs: authored support

Research only, 2026-10-11. This supplements the original CC-only Dollard
channel-completeness claim without editing a carrier, metadata, imports,
readiness, or review counters. The adjacent evidence binds the read snapshots.
This is a **conditional packet lemma**, not an accepted proof of the whole
carrier. Its one extra analytic hypothesis is stated below; current Jost author
support explicitly does not establish it. The existing scalar-commutant route
in `dollard-channel-completeness-repair-draft.md` does not require this extra
hypothesis and remains the preferable completeness argument if independently
accepted. The formulas below nevertheless fix the packet normalization and
channel phases and provide actual strong L² estimates for a packet route.

## Exact model, transforms, and missing input

Work in ZF+CC, with gamma > 0, the original H_gamma = -Delta - gamma/r on
exactly H²(R³), and the countably many actual spherical harmonics Y_lm.
Transport by U psi = (r integral psi(r omega) conjugate(Y_lm(omega)) d sigma).
Thus each radial coordinate has measure dr, and the inverse polar coordinate
is u_lm(r)Y_lm(omega)/r. Neither angular truncation nor annular energy support
is a restriction of the final claim: finite-channel annular packets are the
dense proving class, and extension is in the full Hilbert norm.

For fixed l, let phi_gamma(k,r) have coefficient one in r^(l+1) at zero,
let a(k) = gamma/(2k), and normalize the outgoing solution by

$$f_\gamma(k,r)=e^{i(kr+a(k)\log r)}(1+\epsilon_\gamma(k,r)),\qquad |\epsilon_\gamma(k,r)|\le C_K/r.$$

The bound is uniform for k in each compact K contained in (0,infinity).
Set W_gamma(k) = W(phi_gamma,f_gamma), with W(u,v) = uv' - u'v.
Assume the Green-domain, density, and onto-transform constructions in the
radial candidate have been proved independently. Their exact normalization is

$$\rho_\gamma(E)=\frac{\sqrt E}{\pi|W_\gamma(\sqrt E)|^2},\qquad (T_\gamma u)(E)=\sqrt{\rho_\gamma(E)}\int_0^\infty\varphi_\gamma(\sqrt E,r)u(r)\,dr.$$

Here T_gamma is unitary from the positive radial spectral subspace onto
L²(dE); this onto property must not be inferred from a Dollard operator.
For the free operator gamma = 0, use the same coefficient-one regular
solution and f_0 = exp(ikr)(1+O(1/r)). Its Wronskian phase is
W_0/|W_0| = -exp(il pi/2), because phi_0 is a positive multiple of
sin(kr-l pi/2) to leading order (the positive multiple is
(2l+1)!! k^(-l-1)). This follows directly from the finite spherical-Bessel
recursion, including l = 0.

**Unresolved packet input P.** For each fixed l, W_gamma and W_0 are C^4
on compact positive k intervals, with W_gamma nonzero. Nonvanishing,
continuity, and holomorphy for Im k > 0 in the Jost candidate do not imply
this real-boundary differentiability. No claim that P has been proved is
made here. Only uniform continuity of the regular kernels on compact r,k
sets, and the uniform O(1/r) outgoing error, are needed apart from P.
The full channel-completeness claim is not reduced or recertified by P.

Pass from dE to dk by J h(k) = sqrt(2k) h(k²). Define S_gamma = J T_gamma.
Its inverse kernel is

$$\chi_\gamma(k,r)=\sqrt{2k\rho_\gamma(k^2)}\varphi_\gamma(k,r)=\sqrt{\frac2\pi}\frac{k}{|W_\gamma(k)|}\varphi_\gamma(k,r).$$

Since phi_gamma is real and W(conjugate(f_gamma),f_gamma) = 2ik, the exact
identity, including its sign, is

$$\varphi_\gamma=\frac{W_\gamma\overline{f_\gamma}-\overline{W_\gamma}f_\gamma}{2ik}.$$

Consequently chi_gamma has two leading travelling waves,

$$\chi_\gamma=q_{\gamma,+}(k)e^{i(kr+a\log r)}+q_{\gamma,-}(k)e^{-i(kr+a\log r)}+O_K(r^{-1}),\quad q_{\gamma,+}=\frac{i\overline{W_\gamma}}{\sqrt{2\pi}|W_\gamma|},\quad q_{\gamma,-}=\frac{-iW_\gamma}{\sqrt{2\pi}|W_\gamma|}.$$

Each coefficient has modulus (2 pi)^(-1/2). In particular
q_0,+ = -i exp(-il pi/2)/sqrt(2 pi) and
q_0,- = i exp(il pi/2)/sqrt(2 pi). Energy kernels and momentum kernels are
not interchangeable: omitting sqrt(2k) gives an incorrect packet amplitude.

## Conditional packet lemma and the constants

Let s = +1 or -1, t = s tau, tau > 1, and g in C_c^infinity((0,infinity))
with support inside [alpha,beta], alpha > 0. Define

$$b_{l,s}(k^2)=\frac{q_{0,s}(k)}{q_{\gamma,s}(k)}\exp[-is a(k)\log(2k)].$$

Under P, these are C^4 unit-modulus multipliers on each compact positive
interval. More explicitly, in the log r outgoing normalization,

$$b_{l,+}(k^2)=-e^{-il\pi/2}\frac{|W_\gamma(k)|}{\overline{W_\gamma(k)}}e^{-ia(k)\log(2k)},\qquad b_{l,-}(k^2)=-e^{il\pi/2}\frac{|W_\gamma(k)|}{W_\gamma(k)}e^{ia(k)\log(2k)}=\overline{b_{l,+}(k^2)}.$$

Then the strong radial comparison is

$$\left\|e^{-itA_{\gamma,l}}S_\gamma^*(b_{l,s}g)-S_0^*\big(e^{-itk^2+is a(k)\log\tau}g\big)\right\|_{L^2(dr)}\longrightarrow0.$$

The right side is exactly the free radial transport of U_D(t), since
its modifier is exp(is gamma/(2|P|) log tau). The sign is the sign of time,
not the sign of the travelling-wave exponent chosen independently.
No desired onto property of Omega enters this comparison.

## Concrete tail and stationary-phase estimates

The inverse-transform integral holds weakly on compact radial intervals by
adjointness of the proved transform; its continuous integral representative
therefore agrees almost everywhere with S_gamma^*h for compactly supported h.
On r >= R the uniform kernel error is bounded in absolute value by
C ||h||_1/r. Thus its L² norm is bounded by

$$\|\mathbf1_{r\ge R}\,\text{kernel-error packet}\|_2\le C\|h\|_1 R^{-1/2}.$$

This estimate is uniform in time, requires no derivative of the Jost error,
and remains valid with the free Dollard amplitude, whose absolute value
is time independent. It is deliberately a two-limit estimate: first let
tau tend to infinity with fixed R, then let R tend to infinity.

For r in [0,R], the exact kernel and any fixed compactly supported profile
have a uniformly continuous product H(k,r). Substitute E = k² and call the
resulting continuous compactly supported amplitude F(E,r). For a mesh of
length delta on its fixed energy interval, approximate F by its left-endpoint
step function. If omega_R(delta) is its uniform modulus of continuity and
M_R its uniform bound, integration of each exponential over a mesh interval
has absolute value at most 2/tau. With at most L/delta+1 intervals,

$$\sup_{0\le r\le R}\left|\int e^{-is\tau E}F(E,r)dE\right|\le L\omega_R(\delta)+\frac{2M_R}{\tau}(L/\delta+1).$$

This proves compact-core strong convergence without claiming an unjustified
k derivative of the full kernel. At zero, the regular behavior r^(l+1)
gives the required bounded continuous extension. For a fixed delta, first
let tau tend to infinity and then let delta decrease to zero.

For the free modified packet on that compact core, P and the explicit smooth
free kernel give direct integration by parts in E, with bound
C_R(1+log tau)^N tau^(-N) for any available N <= 4. There are no endpoint
terms because g vanishes near both ends of its enclosing interval.

For the leading travelling waves on r >= R, use phases

$$\theta_{j,s}(k,r)=jkr-s\tau k^2+j a(k)\log r,\qquad j\in\{-1,1\}.$$

The branch j = -s has no positive radial stationary point. The branch j = s
can have one only in the cone alpha tau < r < 4 beta tau, after increasing
tau. Outside that cone, and everywhere for j = -s, the elementary inequalities
log r <= C_R + r and log tau/tau -> 0 give, uniformly on a slightly larger
fixed compact k interval,

$$|\partial_k\theta_{j,s}|\ge c(\tau+r),\qquad |\partial_k^n\theta_{j,s}|\le C_n(\tau+r)\quad(2\le n\le4).$$

For the lower cone complement use r <= alpha tau and k >= alpha; for the
upper complement use r >= 4 beta tau and k <= beta. The small logarithmic
term relative to tau+r follows uniformly: for r <= C tau it is O(log tau),
and for r >= C tau its ratio to r is uniformly small as tau increases.
The formal adjoint of (i theta')^(-1) d/dk, applied twice to the C^4 compact
amplitude, has L¹ norm <= C(tau+r)^(-2). Therefore these nonstationary
packets have pointwise size <= C(tau+r)^(-2) and radial L² norm <= C tau^(-3/2).
For the free modifier the logarithm is log tau and has the same bound.
The omitted wrong branch on the cone obeys the same estimate.

On the cone put r = 2 tau v, with alpha/2 <= v <= 2 beta. The stationary
phase is s tau[2kv-k²]; treat exp(is a(k) log(2 tau v)) as part of the
amplitude A_tau,v(k). Its derivatives through order four are uniformly
bounded by C(1+log tau)^4. The quadratic stationary-phase estimate gives

$$\int e^{is\tau(2kv-k^2)}A_{\tau,v}(k)dk=\sqrt{\pi/\tau}\,e^{is\tau v^2-is\pi/4}A_{\tau,v}(v)+O\big(\tau^{-3/2}(1+\log\tau)^4\big).$$

One direct proof expands the exact Fresnel Fourier multiplier
exp(is xi²/(4 tau)) around one. The error is bounded by
C tau^(-3/2) integral xi² |Fourier(A)(xi)| dxi. Four compactly supported
derivatives bound that integral uniformly by C(1+log tau)^4; the Fresnel
identity follows by Gaussian damping and dominated limits. This proof is
uniform for v throughout the cone, including v outside the actual support.
Its radial L² error is O(tau^(-1)(1+log tau)^4), since the cone length is O(tau).

For the Coulomb packet the leading amplitude at v is
q_gamma,s(v)b_l,s(v²)g(v) exp(is a(v) log(2 tau v)).
For the free Dollard packet it is q_0,s(v)g(v) exp(is a(v) log tau).
They coincide **exactly** by the definition of b. Both have the same
Fresnel factor exp(-is pi/4), so no extra sign-dependent Fresnel constant
belongs in the channel multiplier. Combining the bounds gives, for each
fixed R and delta,

$$\limsup_{\tau\to\infty}\|\text{packet difference}\|_2\le C_gR^{-1/2}+\sqrt R\,L\omega_R(\delta).$$

Let delta decrease to zero and then R increase to infinity. This proves the
claimed strong L² limit under P, with explicit nonstationary tail control,
stationary cone control, and a compact-core estimate that does not hide a
parameter derivative assumption.

## Transport, full channels, and conventions

The comparison implies on the dense packet class
Omega_D,s = S_gamma^* M_b_l,s S_0 in each fixed (l,m) channel.
Norm-one extension applies because the exact comparison evolutions and
S_gamma^* M_b S_0 are isometries. This identifies the strong limit without
assuming its onto property. Countable orthogonal assembly then applies to
every square-summable channel family, and the unit-modulus multipliers make
the map onto the full positive spectral subspace. Identifying that subspace
with H_ac = H_c still requires the independent bound-state exhaustion and
no-zero result; the countably infinite levels -gamma²/(4n²), multiplicities
n², and strong projection sum are all retained. Nothing in this packet
argument proves or replaces those suppliers.

Changing outgoing normalization changes the recorded Wronskian phase.
If f_std = exp(i[kr+a log(2kr)])(1+O(1/r)), then
W_std = exp(ia log(2k)) W_gamma. In that convention the displayed b_+
is -exp(-il pi/2)|W_std|/conjugate(W_std), and b_- is its conjugate:
the log(2k) constant has moved into W_std, not disappeared physically.
With the usual regular Coulomb wave convention the same formulas can be
written using Gamma-function phases, but no unread special-function phase
identity is asserted here. Restoring dimensional units also requires fixing
the reference length inside log r and the reference time inside log tau;
the repository's normalized H_0 = -Delta convention is used throughout.

**Outstanding status.** P remains a concrete missing prerequisite for this
packet route. The real-boundary C^4 Wronskian estimate needs a separately
proved differentiated oscillatory-tail construction or an exact
special-function representation with its parameter derivatives. Merely
citing interior holomorphy, a smooth regular series, or the desired Dollard
range would be circular or insufficient. This support creates no new
acceptance, and should not block a sound completion through the existing
scalar-commutant argument, which needs only the independently onto radial
transforms, range inclusion, angular block identity, and isometry.
