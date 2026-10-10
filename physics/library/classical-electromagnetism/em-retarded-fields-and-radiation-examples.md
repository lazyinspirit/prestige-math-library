---
page: em-retarded-fields-and-radiation-examples
title: "Retarded fields and radiation — Examples"
status: draft
items: []
examples: [ex-em-no-retarded-root-example, ex-em-dipole-antenna-example,
           texp-em-classical-orbit-instability]
---

**Objective.** The companion collects the pair's worked examples: the sharp
counterexample delimiting the retarded-root hypothesis, the harmonic dipole
antenna computed inside the exact dipole law with its explicit errors, and the
reduced slowly-orbiting-charge model whose finite-time collapse is retained
strictly as a property of its adopted premise. Every computation is
conditional on its stated hypotheses; no coupled self-force dynamics and no
empirical claim is supplied.

**Where the retarded root can fail.** On the smooth curve
$z(s)=(\sqrt{c^{2}s^{2}+a^{2}},0,0)$ with $a>0$ one has $|z'(s)|<c$ at every
$s$, yet $|z'(s)|\to c$ as $s\to\pm\infty$, so no uniform bound $v_{*}<c$
exists; at the event $(0,0)$ the retarded equation
$-s=\sqrt{c^{2}s^{2}+a^{2}}/c$ has no solution, since squaring would force
$a^{2}=0$ ([[ex-em-no-retarded-root-example]]). The example lies outside the
hypotheses of [[lem-em-global-retarded-root]] and contradicts no theorem; it
shows that the uniform bound, or an explicit cone-intersection hypothesis, in
[[def-em-retarded-point-geometry]] cannot be dropped. The curve is a
mathematical object, not a claimed physical worldline, and no measurement is
reported.

**Harmonic dipole antenna.** For the prescribed moment
$p(u)=p_{0}\cos(\omega u)e_{3}$ the leading far fields of
[[pthm-em-dipole-radiation]] are
$-\mu_{0}\omega^{2}p_{0}\cos(\omega u)\,n\times(n\times e_{3})/(4\pi r)$ with
$B_{\rm lead}=n\times E_{\rm lead}/c$, so the amplitude pattern is
$\propto\sin\theta$ with zeros on the dipole axis; the retarded-time angular
density $\mu_{0}\omega^{4}p_{0}^{2}\cos^{2}(\omega u)\sin^{2}\theta/(16\pi^{2}c)$
integrates over the sphere to
$\mu_{0}\omega^{4}p_{0}^{2}\cos^{2}(\omega u)/(6\pi c)$ and averages over one
period to $\mu_{0}\omega^{4}p_{0}^{2}/(12\pi c)$
([[ex-em-dipole-antenna-example]]). The example also builds an actual compact
window source whose moment is the truncated harmonic waveform on a selected
period and exhibits the full finite-radius and flux errors of the dipole
theorem; it shows explicitly that the transverse-moment condition $V=p''$ is
sufficient for the ideal leading field but not equivalent to $D=0$. Antenna
feed, material and matching models, radiation resistance, effective area and
measurements are excluded.

**Conditional orbit instability.** Adopt the reduced quasistatic premise (H)
of a prescribed slowly orbiting charge with the Larmor emitted power as its
instantaneous energy-loss rate; then the radius obeys $r'=-A/r^{2}$ with
$A=q^{2}\kappa/(3\pi\varepsilon_{0}m^{2}c^{3})>0$ and the cubic
$r(t)^{3}=r_{0}^{3}-3A(t-t_{0})$ reaches $r=0$ at the finite reduced-model
time $t_{*}=t_{0}+r_{0}^{3}/(3A)$ ([[texp-em-classical-orbit-instability]]).
The low-speed premise $v^{2}=\kappa/(mr)\ll c^{2}$ necessarily fails as
$r\to0$, so the computation is not a proof that a physical orbit reaches the
centre, is not a derivation of atomic lifetimes and is not a coupled
point-particle calculation; the finite-time collapse is retained strictly as
a mathematical property of (H), and no measurement, dataset, statistical
model or uncertainty is introduced.
