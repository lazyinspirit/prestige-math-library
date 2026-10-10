---
page: em-potentials-and-gauge-examples
title: "Potentials and gauge — Examples"
status: draft
items: []
examples: [ex-em-topological-potential-obstructions, ex-em-pure-gauge-fields,
           ex-em-residual-lorenz-example]
---

**Objective.** The companion collects three worked examples that delimit the
potential-existence theorem and the gauge structure: two topological
obstructions to global potentials, the noninjectivity of the
potential-to-field assignment, and the residual freedom that the Lorenz
condition leaves open.

**Topological obstructions.** On the complement of the $z$-axis the smooth
field $(-y,x,0)/(x^2+y^2)$ is curl-free with circulation $2\pi$ around the unit
circle, so it is not the gradient of any $C^2$ function; on the punctured space
$\mathbb R^3\setminus\{0\}$ the smooth field $x/\lVert x\rVert_2^3$ is
divergence-free with unit-sphere flux $4\pi$, and patch Stokes on the two
hemispheres forbids a global $C^1$ vector potential
([[ex-em-topological-potential-obstructions]]). Both domains fail to be
star-shaped, so the radial hypotheses of the existence theorem cannot be
dropped; the second obstruction also shows that simple connectivity, which
$\mathbb R^3\setminus\{0\}$ does have (proved inline in the example), is not
sufficient for a vector potential. The fields are mathematical witnesses; the
framework's postulate excludes magnetic charge and no physical source or
singularity is claimed.

**Pure-gauge zero-field representations.** Every $C^2$ gauge generator $\chi$
produces the potential pair $T_\chi(0,0)=(-\partial_t\chi,\nabla\chi)$ with the
zero field pair; for the linear family $\chi(x,t)=a\cdot x-\beta t$ these are
the constant pairs $(\varphi,A)=(\beta,a)$, nonzero exactly at nonzero
parameters, and the witness $(0,e_1)$ is distinct from the zero pair while
still representing the zero field pair ([[ex-em-pure-gauge-fields]]). The
potential-to-field assignment is therefore not injective: no value of
$\varphi$ or $A$ alone is evidence for a nonzero field.

**Residual Lorenz freedom.** The cosinusoidal generator
$\chi(x,t)=\cos(k\cdot x-\omega t)$ with $\omega=c\lVert k\rVert_2>0$ satisfies
$W\chi=0$, so it transforms any Lorenz potential pair into another Lorenz pair
with the same field pair; applied to the zero pair it gives the explicit
nonzero Lorenz representative
$(-\omega\sin(k\cdot x-\omega t),-k\sin(k\cdot x-\omega t))$ of the zero field
pair ([[ex-em-residual-lorenz-example]]). The Lorenz condition therefore does
not determine the potential pair; the example is stated on free space, and no
bounded-domain or prescribed-data gauge statement is attached to it.
