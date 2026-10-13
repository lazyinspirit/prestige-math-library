---
page: em-maxwell-integral-and-constraints-examples
title: "Integral Maxwell and constraints — Examples"
status: published
items: []
examples: [ex-em-nonconserved-switched-charge,
           texp-em-displacement-current-surface-choice]
---

**Objective.** The companion collects the two leaf items of the pair: an
explicit incompatibility example for the declared source model and a thought
experiment on the surface choice in the integral Ampere law.

**A switched charge with no current.** The switched-history distribution
on $U=\mathbb R^3\times\mathbb R$ is defined by $\langle\rho,\psi\rangle=q\int_0^\infty\psi(0,t)\,dt$ for every $\psi\in C_c^\infty(U)$, with real charge $q\ne0$ (coulombs) and zero current $J=0$ is an explicit source pair whose
continuity residual is $q\delta_{(0,0)}\ne0$
([[ex-em-nonconserved-switched-charge]]): the computation is a direct
distributional derivative, and the distributional compatibility theorem then
shows that no locally integrable field pair satisfies the four weak
identities with this source. The failure is exactly the omitted endpoint term
of the point-source construction, so a switched charge requires an explicit
current or endpoint source term. This is a statement about the declared model,
not a measurement.

**Surface choice and the displacement current.** For two patch test geometries
spanning the same loop and bounding a region between them, the total current
flux $J+\varepsilon_0\partial_tE$ is surface independent and equals the
circulation of $B$ divided by $\mu_0$, while the conduction-only fluxes need
not be equal: their difference is the negative of the displacement-flux
difference ([[texp-em-displacement-current-surface-choice]]). The argument
applies the divergence theorem to the divergence-free total current and the
integral Ampere identity to either patch, and it realises every hypothesis in
an explicit smooth slab model in which the two conduction fluxes are strictly
negative and zero respectively while both total fluxes vanish. The
charging-capacitor reading is explanatory; an idealised thin-wire current is
not a source type of the framework.


Both items are conditional computations inside the framework's declared
models. The textbook treatments motivate the two phenomena; the deductions
use the imported mathematical items and the framework's own definitions.
