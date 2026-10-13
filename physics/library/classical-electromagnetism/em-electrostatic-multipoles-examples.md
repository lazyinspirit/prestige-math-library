---
page: em-electrostatic-multipoles-examples
title: "Electrostatic multipoles — Examples"
status: published
examples: [ex-em-quadrupole-symmetry, ex-em-two-charge-dipole]
---

Two worked configurations of the source-moment calculus on the companion page
[[em-electrostatic-multipoles]].

The first is a finite quadrupole configuration: four stationary point charges
$+q$ at $\pm ae_1$ and $-q$ at $\pm ae_2$ have vanishing total charge and
dipole moment, vanishing odd Cartesian moments, and the exact traceless
quadrupole $\operatorname{diag}(6qa^2,-6qa^2,0)$, which is therefore
independent of the reference point ([[ex-em-quadrupole-symmetry]]). The
computation is a finite source-moment identity; no field, energy or self-energy
is claimed.

The second is the ideal physical dipole of two opposite stationary point charges
$\pm q$ at $\pm d/2$ ([[ex-em-two-charge-dipole]]): its exact potential is the
sum of the two point-charge potentials, its distributional equations hold by
linearity of distributional differentiation, its moments are $Q=0$,
$p=qd$ with vanishing even Cartesian moments and vanishing traceless
quadrupole at the symmetric origin, and its far-field difference from the
ideal-dipole potential is bounded directly by $8|q|a^2/(\pi\varepsilon_0r^3)$
for $r\ge|d|$. The singular source is treated through the point-source
distributional identities; the density expansion theorem is explicitly not
applied to it, and no self-energy or dynamical claim is made.
