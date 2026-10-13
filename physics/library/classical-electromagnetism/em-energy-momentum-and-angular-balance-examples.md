---
page: em-energy-momentum-and-angular-balance-examples
title: "Energy momentum angular balance — Examples"
status: published
examples: [ex-em-vacuum-energy-flow-example]
---

**Objective.** This companion carries one worked ledger of the balance
identities on the companion A page
[[em-energy-momentum-and-angular-balance]]: the exact energy accounting of an
ideal source-free plane wave in a finite box.

**A crossed plane wave.** The declared configuration
$E=E_0\cos(kz-\omega t)e_1$, $B=(E_0/c)\cos(kz-\omega t)e_2$ with
$\omega=ck>0$ and $E_0>0$ is verified to be a smooth solution of the smooth
Maxwell branch with $\rho=0$ and $J=0$
([[ex-em-vacuum-energy-flow-example]]); its energy density and flux are
$u=\varepsilon_0E_0^2\cos^2(kz-\omega t)$ and
$S=\varepsilon_0cE_0^2\cos^2(kz-\omega t)e_3$, and the local identity
$\partial_tu+\partial_zS_3=0$ holds exactly, with no period averaging.

**Finite-box ledger.** For the box
$B=(0,L_1)\times(0,L_2)\times(a,b)$ the example computes
$\frac{d}{dt}\int_Bu\,dV=L_1L_2(S_3(a,t)-S_3(b,t))$ and the same value as the
negative of the closed-surface flux: the four faces with normals $\pm e_1,\pm e_2$
carry zero flux because $S$ is parallel to $e_3$, the upper face contributes
$L_1L_2S_3(b,t)$ and the lower face $-L_1L_2S_3(a,t)$ in the outward
orientation, hence the field-energy change receives $-L_1L_2S_3(b,t)$ and
$+L_1L_2S_3(a,t)$ respectively. The example is an ideal wave on all of
$\mathbb R^3\times\mathbb R$; it asserts no empirical realization and no
statement about the (divergent) total energy over all of space.
