---
page: qm-three-dimensional-scattering-examples
title: "Qm Three Dimensional Scattering — Examples"
status: draft
library: physics
items: []
examples:
  - ex-nrqm-scattering-square-well-s-wave-phase-shift
  - ex-nrqm-scattering-single-channel-resonance-cross-section
  - ex-nrqm-scattering-born-uniform-ball-amplitude
  - ex-nrqm-scattering-long-range-tail-and-coulomb-warning
  - rem-nrqm-scattering-examples-scope-limits
requires:
  - qm-three-dimensional-scattering
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-math-orbital-and-spin
---

The companion page to [[qm-three-dimensional-scattering]] collects four
conditional computations inside the declared models and a scope remark.
[[ex-nrqm-scattering-square-well-s-wave-phase-shift]] matches the $s$-wave
solutions of the declared spherical square well at $|x|=a$, obtains
the nondividing matching formula
$S_0=e^{-2ika}(K\cos Ka+ik\sin Ka)/(K\cos Ka-ik\sin Ka)$ and
$\delta_0=\arg(K\cos Ka+ik\sin Ka)-ka$ modulo $\pi$, computes the
low-energy expansion $\delta_{0}(k)=-ka_{\mathrm{eff}}+O(k^{3})$ at nonthreshold
depths, where $\gamma:=\sqrt{2mU}/\hbar$ and
$a_{\mathrm{eff}}=a-\tan(\gamma a)/\gamma$. For
$\alpha_n:=(n+\frac12)\pi$, $n\ge0$, the one-sided limits are
$a_{\mathrm{eff}}\to-\infty$ as $\gamma a\to\alpha_n$ from below and
$a_{\mathrm{eff}}\to+\infty$ from above. At the exact threshold
$\gamma a=\alpha_n$, the zero-energy exterior solution is proportional to
$1/r$ and is not square-integrable; the s-wave bound-state branch occurs just
above threshold, for $\alpha_n<\gamma a<(n+1)\pi$. Depth regimes with
$\tan(\gamma a)/\gamma\to0$, in particular $\gamma a=n\pi$, give
$\sigma_{0}\to4\pi a^{2}$, the low-energy hard-sphere reading.
[[ex-nrqm-scattering-single-channel-resonance-cross-section]] evaluates the
declared resonance factor at $l=0$: the Lorentzian factor is $1$ at $E_{r}$,
$1/2$ at $E_{r}\pm\Gamma/2$, and the ratio
$\sigma_{0}(E)/\sigma_{0}(E_{r})=(E_{r}/E)(\Gamma/2)^{2}/((E-E_{r})^{2}+(\Gamma/2)^{2})$
shows that the half-height points of the channel cross-section reading itself
are not exactly $E_{r}\pm\Gamma/2$; no maximum statement is made.
[[ex-nrqm-scattering-born-uniform-ball-amplitude]] computes the Born
amplitude of the declared uniform ball,
$f_{B}(\Omega)=-(2mV_{0}/\hbar^{2})(\sin(q_{\mathrm{tr}}R)-q_{\mathrm{tr}}R\cos(q_{\mathrm{tr}}R))/q_{\mathrm{tr}}^{3}$
with forward value $-(2mV_{0}/\hbar^{2})R^{3}/3$, bounds the operator norm of
$K_{k}$ by an explicit Hilbert–Schmidt estimate
$q_{\mathrm{HS}}=(2m|V_{0}|/\hbar^{2})R^{2}\sqrt{2/3}$ and states the
resulting controlled error bound whenever $q_{\mathrm{HS}}<1$.
[[ex-nrqm-scattering-long-range-tail-and-coulomb-warning]] splits the
declared Yukawa potential into a compactly supported $L^{2}$ part and a
bounded exponentially decaying tail at the declared reference radius $L_*$, verifies
$|V_{\mathrm{tail}}(x)|\le C(1+|x|/L_*)^{-1-\delta}$
with any $\delta>0$ and hence the completeness conclusions for the screened
model, and records that the unscreened $\mu\to0^{+}$ limit fails that
hypothesis and belongs to the separate long-range model.
[[rem-nrqm-scattering-examples-scope-limits]] records that every item on the
page is an idealised conditional computation with symbolic parameters, that
no apparatus, sample, count or uncertainty budget occurs, and that none of
the limits is a universal law or a statement about a material target.
