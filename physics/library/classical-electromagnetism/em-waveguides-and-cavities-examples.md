---
page: em-waveguides-and-cavities-examples
title: "Waveguides and cavities — Examples"
status: published
items: []
examples: [ex-em-te-ten-example,
           ex-em-rectangular-cavity-example,
           ex-em-tem-topology-example]
---

**Objective.** The companion collects the three leaf examples of the pair:
the TE$_{10}$ instance of the rectangular candidate theorem, the resonant
rectangular-cavity standing mode, and the TEM potential-form topology with
the single-conductor obstruction and the coaxial annulus.

**The TE$_{10}$ candidate.** The example [[ex-em-te-ten-example]]
instantiates the TE family at $(m,n)=(1,0)$, with $H_*=1\,\mathrm A\,\mathrm m^{-1}$ and all displayed quantities read as
coherent SI numerical values, giving the numerical amplitudes
$\tilde E=(0,i\omega\mu\frac a\pi\sin\frac{\pi x_1}{a},0)$,
$\tilde H=(-i\beta\frac a\pi\sin\frac{\pi x_1}{a},0,\cos\frac{\pi x_1}{a})$,
the half-sine standing profile with its traveling wave, the cutoff
$\omega_c=\pi/(a\sqrt{\varepsilon\mu})$ with the real, cutoff and evanescent
alternatives, and, for $a\ge b$, the lowest-cutoff comparison over all TE/TM
candidates of [[pthm-em-rectangular-mode-candidates]], with the tie at $a=b$ and the excluded index
$(0,0)$.

**A rectangular-cavity standing mode.** The example
[[ex-em-rectangular-cavity-example]] verifies the standing fields
$E=E_{\mathrm{sp}}\cos\omega t$ and
$B=-\frac1\omega\operatorname{curl}E_{\mathrm{sp}}\sin\omega t$ with
$E_{\mathrm{sp}}=e_1\sin\frac{\pi x_2}{b}\sin\frac{\pi x_3}{d}$ in coherent SI
numerical values with $E_*=1\,\mathrm V\,\mathrm m^{-1}$: it computes
the divergence, Laplacian and double curl of the profile, finds the exact
resonance $\omega^2=(\varepsilon\mu)^{-1}[(\pi/b)^2+(\pi/d)^2]$, checks all
six wall conditions including the $x_1$-end caps, and identifies the field
as the cutoff $\beta=0$ TM$(1,1)$ instance with axis $e_1$.

**TEM topology and the coaxial line.** The example
[[ex-em-tem-topology-example]] works in the harmonic-potential form: it
constructs the TEM fields from a plane harmonic potential, proves that the
PEC condition on a smooth wall is equivalent to the vanishing tangential
potential derivative, classifies an arbitrary $C^1$ TEM phasor by
$\beta^2=\varepsilon\mu\omega^2$ or the zero field, and shows by
two-dimensional Dirichlet uniqueness that a single-conductor cross-section
with connected boundary admits no nonzero potential-form TEM field (with
the rectangular class handled by the continuous-closure radial primitive).
The coaxial annulus $\varphi=V\ln(b/|x|)/\ln(b/a)$ is then computed
explicitly: the fields satisfy the source-free lossless equations and the
PEC conditions, the branch is nondispersive with no cutoff, and the polar
integrals give $W_e=W_m=\frac12CV^2$ with $C=2\pi\varepsilon/\ln(b/a)$,
$L=\mu\ln(b/a)/(2\pi)$ and $LC=\varepsilon\mu$. Countable Choice is
confined to the polar-measure energy computation, and no lossy, radiation,
signal-speed or empirical claim is made.
