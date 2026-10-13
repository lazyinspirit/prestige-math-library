---
page: cm15-scattering-and-impulse-model-boundaries-examples
title: "Scattering and impulse model boundaries — Examples"
status: published
library: physics
items: []
examples:
  - ex-cm15-hard-sphere-reflection-check
  - ex-cm15-rutherford-cutoff-check
  - ex-cm15-impact-check
  - ex-cm15-rocket-check
  - ex-cm15-control-volume-check
  - cex-cm15-deflection-need-not-decrease
  - cex-cm15-restitution-above-one-increases-energy
  - cex-cm15-momentum-alone-does-not-fix-the-impact
requires:
  - cm15-scattering-and-impulse-model-boundaries
  - cm-math-central
  - cm01-framework-quantities-and-geometry
  - cm-math-balances
  - cm03-momentum-work-and-energy-balances
  - cm05-two-body-central-forces-and-gravitation
  - cm-math-continuum
---

The mathematical incident-area and solid-angle measures used by the cross-section checks inherit countable choice from their suppliers. These examples exercise the scattering, impact and open-flow items of
[[cm15-scattering-and-impulse-model-boundaries]] on declared model data and
probe the hypotheses and boundaries of the page's statements.

[[ex-cm15-hard-sphere-reflection-check]] computes the elastic reflection of a
reduced label from a fixed impenetrable sphere: the branch is
$b=a\cos(\theta/2)$, the locally defined incident-area pushforward has differential contact
cross-section $a^2/4$
and the total is $\pi a^2$. The model is a contact (impulse) rule, outside the
$C^2$ finite-range hypothesis of the central-scattering theorem; its
example-specific fixed-wall rule is only analogous to the $e=1$ normal
reversal and is not the finite-mass restitution law. Its finite total neither
contradicts nor tests the Coulomb forward divergence.
[[ex-cm15-rutherford-cutoff-check]] evaluates the Rutherford prediction on
declared data in SI units --- reduced mass $2\times10^{-26}\,\mathrm{kg}$,
energy $10^{-18}\,\mathrm{J}$, angular momentum
$4\times10^{-34}\,\mathrm{kg\,m^2\,s^{-1}}$ and coupling
$\kappa=4\times10^{-30}\,\mathrm{J\,m}$ --- obtaining
$v_\infty=10^4\,\mathrm{m\,s^{-1}}$, $b=2\times10^{-12}\,\mathrm{m}$,
$\alpha=1$, $\theta=\pi/2$ and
$(\mathrm d\sigma/\mathrm d\Omega)(\pi/2)=4\times10^{-24}\,\mathrm{m^2}$,
and checks the band values $\pi(b(\theta_1)^2-b(\theta_2)^2)$ and the
small-angle growth of the truncated total.

The counterexample [[cex-cm15-deflection-need-not-decrease]] refutes the
unqualified claim of global strict decrease with a smooth zero-potential witness whose deflection is identically zero. Separately, the adopted
attractive refracting-shell rule with index $3/2$ has
$\theta(b)=2(\arcsin(b/a)-\arcsin(2b/(3a)))$ on $(0,a)$, strictly increasing
with $\theta'(b)>0$ and jumping down to $0$ at grazing incidence. The endpoint
extension at $b=0$ and the grazing value $\theta=0$ are not values of this
branch, whose image lies in $(0,\pi)$; branch data rather than a global
monotone inverse are needed for the cross-section.

[[ex-cm15-impact-check]] checks three outcomes of one declared impact
($m_1=2$, $m_2=6\,\mathrm{kg}$, velocities $3$ and
$-1\,\mathrm{m\,s^{-1}}$): the elastic case reverses each velocity, giving
outgoing velocities $-3$ and $+1\,\mathrm{m\,s^{-1}}$ along the contact
direction, with $\Delta K=0$; the semi-elastic case $e=\frac12$ gives impulse
$-9\,\mathrm{N\,s}$ and $\Delta K=-9\,\mathrm{J}$, and the sticking case gives
$\Delta K=-12\,\mathrm{J}$, all with total momentum continuous across the
impact. Its companion counterexamples isolate the model boundaries:
[[cex-cm15-momentum-alone-does-not-fix-the-impact]] shows two admissible
outcomes with different impulses for one data set, so a contact law is
required, and [[cex-cm15-restitution-above-one-increases-energy]] shows that
the explicitly hypothetical extension to $e=2$, derived locally rather than
from the restricted impact theorems, raises the kinetic energy by $3\,\mathrm{J}$ while the configuration is
unchanged, so coefficients above $1$ are incompatible with the conservative
energy account.

Finally [[ex-cm15-rocket-check]] verifies the open-body law on the declared
linear mass loss $m(t)=3-t\,\mathrm{kg}$ with constant exhaust speed
$2\,\mathrm{m\,s^{-1}}$ relative to the body, obtaining
$v(t)=2\ln(3/(3-t))\,\mathrm{m\,s^{-1}}$ and exhibiting the failure of the
closed-system law $(mv)'=F$, and
[[ex-cm15-control-volume-check]] checks the control-volume identities on the
exact uniform-expansion field and on its explicitly mapped material ball, and
illustrates the inlet/outlet decomposition with an ideal steady elbow whose
balance requires a net external resultant on the fluid of about
$3.578\,\mathrm{N}$. No pressure or wall-force decomposition is supplied.
All data are declared model data; no
measurement, uncertainty budget or empirical comparison is asserted.
