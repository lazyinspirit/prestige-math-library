---
page: tgr-phs01
title: Restricted smooth horizon Einstein/NEC adoption
status: draft
library: physics
requires:
  - emg-s01
  - tgr-i01
  - tgr-mhs01
items:
  - post-tgr-smooth-horizon-energy-condition
  - pthm-tgr-restricted-classical-area
  - pthm-tgr-kn-family-mechanics
examples: []
---

This page adopts the smooth equation-based Einstein–Maxwell model with a
restricted null energy condition, proves the corresponding area increase for
a future-complete smooth null congruence with persistent compact cuts, and
converts the Kerr–Newman stationary-family identities to SI units. Each
conclusion retains its exact smoothness, energy-condition, domain, and
normalization assumptions.

The parameter map from selected SI inputs to the geometric family is
$$\Xi(m_*,J,Q_e)=\left(\frac{G_Nm_*}{c^2},\frac{J}{m_*c},\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}Q_e\right).$$
Let $\mathcal P_{\rm SI}$ be the set of triples $(m_*,J,Q_e)$ with
$m_*>0$ and with the components $(m,a,q)=\Xi(m_*,J,Q_e)$ satisfying
$m^2>a^2+q^2$. Let $\mathcal P$ be the strict mathematical family of
[[prop-tgr-kn-first-law-smarr]]. Define
$\mathcal H_{\rm geom}:\mathcal P\to\mathcal D_{\rm geom}$ by the
geometric horizon tuple $(A_H,\kappa_{\rm KN},\Omega_{\rm KN},\Phi_{\rm KN})$
of that supplier; $\mathcal D_{\rm geom}:=\mathbb R^4$ records those four
components with units $(\mathrm{m^2},\mathrm{m^{-1}},\mathrm{m^{-1}},1)$
under the selected physical parameter map. Define
$\mathcal H_{\rm SI}:\mathcal P_{\rm SI}\to\mathcal D_{\rm SI}$ by the
SI tuple $(A_H,\kappa_{\rm acc},\Omega_{\rm SI},\Phi_{\rm SI})$ of
[[pthm-tgr-kn-family-mechanics]], where $\mathcal D_{\rm SI}:=\mathbb R^4$
has component units $(\mathrm{m^2},\mathrm{m\,s^{-2}},\mathrm{s^{-1}},\mathrm V)$.
The conversion map is
$$C^{-1}(A_H,\kappa_{\rm acc},\Omega_{\rm SI},\Phi_{\rm SI})=(A_H,\kappa_{\rm acc}/c^2,\Omega_{\rm SI}/c,\alpha\Phi_{\rm SI}/c).$$

The diagram states the equality
$\mathcal H_{\rm geom}\circ\Xi=C^{-1}\circ\mathcal H_{\rm SI}$;
the item proofs establish the component formulas, and no proof relies on the
diagram.

```tikzcd
\begin{tikzcd}
\mathcal P_{\rm SI} \arrow[r,"\Xi"] \arrow[d,"\mathcal H_{\rm SI}"'] &
\mathcal P \arrow[d,"\mathcal H_{\rm geom}"] \\
\mathcal D_{\rm SI} \arrow[r,"C^{-1}"'] & \mathcal D_{\rm geom}
\end{tikzcd}
```
