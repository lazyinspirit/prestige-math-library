---
id: def-qftx-susy-vacuum-moduli-data
kind: definition
title: Classical and quantum supersymmetric vacuum-moduli data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
deps: []
dependency_roles: {}
proof_strategy: not-applicable
physical_scope: A definition of classical flat vacua for a finite-dimensional canonical rigid supersymmetric gauge model and a conditional definition of quantum vacuum sectors when a full Hilbert-space theory has been constructed; it asserts no continuum construction or relation between the two sets.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Supersymmetric Field Theory
      url: https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf
      locator: "§4.3, printed pp. 109–121: F/D-flat scalar configurations, gauge quotient, and the distinction between a classical moduli space and quantum dynamics."
verification:
  precheck: n/a
---

## Definition

Use natural units $c=\hbar=1$ in four-dimensional rigid, global
$\mathcal N=1$ gauge-model data. Let $V$ be a finite-dimensional complex
Hermitian vector space of scalar field values, let a compact Lie group $G$ act
unitarily on $V$, and fix an orthonormal complex basis
$(\phi^1,\ldots,\phi^n)$ of $V$. Let $\mathfrak g=\operatorname{Lie}(G)$
and fix a positive-definite real inner product on $\mathfrak g$ satisfying
$\langle\operatorname{Ad}_hX,\operatorname{Ad}_hY\rangle_{\mathfrak g}
=\langle X,Y\rangle_{\mathfrak g}$ for all $h\in G$ and $X,Y\in\mathfrak g$.
Choose an orthonormal basis
$(X_1,\ldots,X_r)$ of $\mathfrak g$. For the unitary representation
$\rho:G\to U(V)$, set $T(X)=-i\,d\rho(X)$, which is Hermitian for each
$X\in\mathfrak g$. Also choose a gauge coupling $g>0$ and a
gauge-invariant holomorphic polynomial $W:V\to\mathbb C$. Assume canonical
scalar kinetic energy and no Fayet--Iliopoulos term. Define the
auxiliary-field maps

$$\mathcal L_{\mathrm{kin}}=-\sum_i\partial_\mu\overline{\phi^i}\,\partial^\mu\phi^i,\qquad [\phi^i]=\mathrm{mass},\quad [W]=\mathrm{mass}^3,\quad [g]=1.$$

$$F_i(\phi)=\frac{\partial W}{\partial\phi^i}(\phi),\qquad D_a(\phi)=-g\,\phi^\dagger T(X_a)\phi.$$

The real linear functional $\mathbf D(\phi)\in\mathfrak g^*$ is defined by
$\mathbf D(\phi)(X)=-g\,\phi^\dagger T(X)\phi$; thus
$D_a(\phi)=\mathbf D(\phi)(X_a)$. For $\lambda\in\mathfrak g^*$, define
$\|\lambda\|_{\mathfrak g^*}^2=\sum_{a=1}^r\lambda(X_a)^2$, the norm from
the inner product dual to the fixed inner product on $\mathfrak g$; this
value is independent of the chosen orthonormal basis. The tree-level scalar
potential is

$$V_{\mathrm{tree}}(\phi)=\sum_{i=1}^n|F_i(\phi)|^2+\frac12\|\mathbf D(\phi)\|_{\mathfrak g^*}^2
=\sum_{i=1}^n|F_i(\phi)|^2+\frac12\sum_{a=1}^rD_a(\phi)^2.$$

For $h\in G$, define its dual action by
$(\operatorname{Ad}_h^*\lambda)(X)=\lambda(\operatorname{Ad}_{h^{-1}}X)$.
Then $\mathbf D(h\phi)=\operatorname{Ad}_h^*\mathbf D(\phi)$, and the
invariant dual inner product makes this potential gauge-invariant. The
quantities
$F_i$ and $D_a$ have mass dimension two and $V_{\mathrm{tree}}$ has mass
dimension four.

A **classical supersymmetric vacuum configuration** is a constant scalar
configuration $\phi\in V$ for which every $F_i(\phi)$ and every
$D_a(\phi)$ is zero. Its **classical vacuum-moduli set** is the topological
orbit space

$$\mathcal M_{\mathrm{cl}}=\{\phi\in V:F_i(\phi)=0\text{ for all }i,\ D_a(\phi)=0\text{ for all }a\}/G.$$

where two configurations are identified exactly when they lie in the same
compact-$G$ orbit, and the set has the quotient topology. The stability
convention here retains every such compact-group orbit, including singular
orbits. No quotient by the complexified group, geometric-invariant-theory
stability criterion, or smooth-manifold structure is included in this
definition.

For a **specified, already constructed quantum theory** $\mathcal T$, suppose
there is a Hilbert space $\mathcal H$, a unitary translation representation
$U(a)$, and densely defined supercharges $Q^I$ and their Hilbert adjoints on a
common domain $\mathcal D$. A **quantum supersymmetric vacuum ray** is the
phase-equivalence class $[\Omega]$ of a normalized vector $\Omega\in\mathcal D$
satisfying
$U(a)\Omega=\Omega$ for every spacetime translation $a$ and
$Q^I\Omega=(Q^I)^*\Omega=0$ for every supercharge $I$. The **quantum
vacuum-moduli set** $\mathcal M_{\mathrm q}(\mathcal T)$ is the set of these
rays, with the topology, if any, supplied by the constructed theory. This
definition is conditional on normalizable invariant vacuum vectors and a
specified quantum Hilbert-space model. It asserts no path-integral measure,
continuum limit, nonperturbative existence, or equality between
$\mathcal M_{\mathrm{cl}}$ and $\mathcal M_{\mathrm q}(\mathcal T)$.

## Definition references

[Tong, §4.3, “The Moduli Space of Vacua”](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).
