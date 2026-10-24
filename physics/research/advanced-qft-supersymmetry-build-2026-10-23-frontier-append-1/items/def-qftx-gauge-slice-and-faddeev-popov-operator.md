---
id: def-qftx-gauge-slice-and-faddeev-popov-operator
kind: definition
title: Finite-dimensional gauge slices and Faddeev–Popov operators
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the non-Abelian gauge-data and principal-connection inputs; the finite-dimensional slice construction makes no further choice."
proof_strategy: definition
deps:
  - def-countable-choice
  - def-lie-group
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-left-maurer-cartan-form
  - def-gauge-group-of-a-smooth-principal-bundle
dependency_roles:
  def-countable-choice: mathematical-premise
  def-lie-group: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-left-maurer-cartan-form: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Skinner, Quantum Field Theory II: Advanced Quantum Field Theory lecture notes, Chapter 8"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf"
      locator: "§§8.1–8.1.1, PDF pp. 154–161: finite-dimensional SO(2) gauge-orbit model, transverse gauge condition, Faddeev–Popov derivative, residual intersections, and the separate continuum limitation."
    - title: "P. K. Mitter and C. M. Viallet, On the Bundle of Connections and the Gauge Orbit Manifold in Yang–Mills Theory"
      url: "https://scispace.com/pdf/on-the-bundle-of-connections-and-the-gauge-orbit-manifold-in-1nks9qpdkj.pdf"
      locator: "Complete 16-page paper retrieved. §§I–V, printed pp. 458–472; especially §IV.B–C, pp. 466–468, for Sobolev local gauge sections and §V, pp. 468–471, for the inverse-function argument and its free-action hypotheses."
verification:
  precheck: pending
---

## Definition

Assume the axiom of countable choice $\mathrm{AC}_\omega$. Let $M$ be a finite-dimensional, Hausdorff, second-countable smooth manifold without boundary. Fix a compact noncommutative finite-dimensional real Lie group $G$, whose Lie algebra is $\mathfrak g=T_eG$ with bracket transported from left-invariant vector fields. Let $\pi:P\to M$ be a smooth right principal bundle: the right action is smooth, free and transitive on each fibre, and each point has a local equivariant principal chart. Let $H\subset TP$ be a supplied smooth right-invariant horizontal complement to $VP=\ker(d\pi)$, and write $v$ for projection onto $VP$ along $H$. For $Z\in\mathfrak g$, the fundamental vertical vector is $Z_P(p)=\left.\frac{d}{dt}\right|_{t=0}p\exp_G(tZ)$. The principal connection form $\omega$ is a smooth $\mathfrak g$-valued one-form satisfying $\omega(Z_P)=Z$, $\ker\omega=H$, and $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$, where $\operatorname{Ad}_g=d(C_g)_e$ and $C_g(h)=ghg^{-1}$. In a local section $s:U\to P$ (a smooth map with $\pi\circ s=\operatorname{id}_U$), the potential $A=s^*\omega$ changes under a section change $s'=su$, for smooth $u:U\to G$, by $A'=\operatorname{Ad}_{u^{-1}}A+\theta_L(u)$, where $\theta_L(u)=u^*\theta_L$, $(\theta_L)_g=d(L_{g^{-1}})_g$, and $L_g(h)=gh$. The full gauge group consists of smooth diffeomorphisms $\Phi:P\to P$ satisfying $\pi\circ\Phi=\pi$ and $\Phi(pg)=\Phi(p)g$; this definition gives it no finite-dimensional Lie-group structure.

A **finite-dimensional regulated gauge-slice datum** consists of integers $1\le k\le n$; a finite-dimensional Lie group $K$ of dimension $k$, with Lie algebra $\mathfrak k:=T_eK$ and bracket transported from left-invariant vector fields; a chosen smooth positive left-invariant density $\mu_K$, meaning $(L_h^K)^*\mu_K=\mu_K$ for $L_h^K(g)=hg$; a finite-dimensional smooth manifold $X$ of dimension $n$ with a chosen smooth positive density $\mu_X$; and a smooth right action $\alpha:X\times K\to X$, written $x\cdot g$, with $x\cdot e=x$ and $(x\cdot g)\cdot h=x\cdot(gh)$. A smooth positive density on an $m$-manifold has coordinate form $\rho(x)|dx^1\cdots dx^m|$ with smooth $\rho>0$, and transforms by the absolute coordinate Jacobian. The group $K$ and its action on $X$ are separate regulator data. They are not identified with the full gauge group or the full space of connections unless a particular finite model explicitly constructs such an action and verifies that it preserves $X$.

Choose an embedded smooth submanifold $S\subset X$ of codimension $k$, a smooth positive density $\mu_S$, and an open neighborhood $U\subset X$ of a point $s\in S$. Embedded means that near each point of $S$, a smooth chart on $X$ identifies $S$ with $\mathbb R^{n-k}\times\{0\}$. A **gauge condition** on $U$ is a smooth map $\chi:U\to\mathbb R^k$ such that $U\cap S=\chi^{-1}(0)$ and, for every $s'\in U\cap S$, $d\chi_{s'}$ is surjective with kernel $T_{s'}S$. For every $x\in U$, the **infinitesimal orbit map** is $R_x:=d(\alpha_x)_e:\mathfrak k\to T_xX$, where $\alpha_x(g)=x\cdot g$; call its kernel the infinitesimal stabilizer at $x$. The **Faddeev–Popov operator** at $x$ is the ordinary linear map $M_x:=d\chi_x\circ R_x:\mathfrak k\to\mathbb R^k$. At a slice point $s'\in U\cap S$, call the condition **transverse** when $M_{s'}$ is an isomorphism. Choose a positive density $\nu$ on $\mathfrak k$ equal to $(\mu_K)_e$, and the standard positive density $\lambda$ on $\mathbb R^k$. For every $x\in U$, the finite-dimensional Faddeev–Popov Jacobian $\Delta_{\mathrm{FP}}(x)$ is the nonnegative density ratio defined by $M_x^*\lambda=\Delta_{\mathrm{FP}}(x)\nu$; in chosen bases it is $|\det M_x|$, and it is zero when $M_x$ is singular.

This datum defines only finite-dimensional Jacobians and local coordinate slices. It neither defines a determinant of an infinite-dimensional operator nor constructs a functional measure or a continuum path integral. A finite-mode or lattice application must supply the regulator manifold $X$, the finite-dimensional group $K$, their smooth action, and the domains and densities above.

## Definition references

[Skinner, finite-dimensional Faddeev–Popov model and its limitations](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf)

[Mitter and Viallet, Sobolev gauge slices and local orbit-space geometry](https://scispace.com/pdf/on-the-bundle-of-connections-and-the-gauge-orbit-manifold-in-1nks9qpdkj.pdf)

[[def-countable-choice|Countable-choice assumption inherited by the gauge data]]

[[def-qftx-nonabelian-gauge-data|Compact group, right principal bundle, and bundle sector]]

[[def-qftx-principal-connection-form|Right-action principal connection form and local potential]]

[[lem-qftx-principal-curvature-cartan-bianchi|Local section-change convention for the potential]]

[[def-gauge-group-of-a-smooth-principal-bundle|Full gauge group as base-fixing equivariant diffeomorphisms]]

[[def-lie-group|Finite-dimensional smooth Lie group]]

[[def-left-maurer-cartan-form|Left Maurer–Cartan form]]
