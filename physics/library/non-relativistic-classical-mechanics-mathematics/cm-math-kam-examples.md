---
page: cm-math-kam-examples
title: Cm Math Kam — Examples
status: draft
items: []
examples:
  - ex-two-rotor-kam-model-with-units
requires:
  - cm-math-kam
---

The companion page to [[cm-math-kam]] works the standard two-rotor model

$$H(I,\theta)=\tfrac12(I_1^2+I_2^2)+\varepsilon\cos\theta_1\cos\theta_2$$

in the dimensionless action-angle variables of the KAM framework, and restores
physical units. Everything here is mathematics: the item carries
`domain: mathematics`, depends only on mathematical suppliers, and makes no
empirical claim.

[[ex-two-rotor-kam-model-with-units]] verifies the data of
[[thm-positive-measure-analytic-kam-family]] with explicit constants: the
integrable part $h(I)=\tfrac12|I|^2$ has $Dh=I$, so the inverse frequency map
is $b(\nu)=\nu$ and $M_2=2$; the perturbation
$F=\varepsilon\cos\theta_1\cos\theta_2$ is $2\pi$-periodic, holomorphic and
conjugation symmetric with complex sup-norm
$\varepsilon\cosh(s_0)^2$ on the theorem's strip of width $s_0$. For
$\tau=2$, $n=2$ and the frequency square $(1.2,1.8)^2$ the slab estimate of
[[lem-diophantine-resonance-slab-measure]] bounds the resonant set by
$76.8\alpha$ and the Diophantine set by $0.36-76.8\alpha$, which is positive for
$\alpha<4.7\times10^{-3}$. The physical coupling threshold uses this strip norm.
The example also carries out the unit normalisation
$p=J_0I$, $t=t_0\tau$ with $J_0=(\mathcal I E_0)^{1/2}$, $t_0=\mathcal I/J_0$,
and $\varepsilon=\lambda/E_0$, so that the physical coupling threshold is
$\lambda\le E_0c\alpha^2/\cosh(s_0)^2$ and a torus of dimensionless
frequency $\nu$ rotates with angular velocities $\nu_j/t_0$. The example is
conditional mathematics: it exhibits a model, verifies the theorem's hypotheses
with explicit constants and translates the conclusion, and asserts nothing
about any measured rotor.
