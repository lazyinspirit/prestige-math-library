---
id: def-rpm-body-moments
kind: definition
title: Body moments and transport convention
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-rpm-charge-spin-model
  - lem-gr-parallel-transport-and-geodesic-speed
  - thm-gr-convex-normal-neighborhoods
  - thm-gr-local-geodesics-and-exponential-map
  - thm-sr-stress-balance-and-finite-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-charge-spin-model: formulation-prerequisite
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-sr-stress-balance-and-finite-flux: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2 defines momentum and angular momentum with respect to an observer-dependent centroid and explains the local normal-coordinate convention; the definition below fixes its own SI transport interface.
physical_scope: "Definition of flat and local curved stress-energy moments for a smooth compact test body. It supplies moment and transport conventions only; it does not derive MPD equations, a multipole truncation, a matter constitutive law, self-gravity, or an empirical body model."
---

## Definition

Use the charged/spinning body-model conventions of the now-authored batch-24 carrier [[def-rpm-charge-spin-model]]: a smooth time-oriented Lorentzian four-manifold of signature $(-+++)$, coordinates $x^0=ct$ in metres, $c>0$, and a $C^2$ future timelike representative curve $z:I\to M$ parametrized by proper time $\tau$ in seconds, with $U=dz/d\tau$ and $g(U,U)=-c^2$. The actual supplier defines these quantities and the SI electromagnetic-tensor convention used here. Assume Countable Choice for the GR smooth-structure, convex-normal and parallel-transport suppliers used below.

**(a) Flat isolated-body moments.** In an inertial chart of affine Minkowski space, let $T^{ab}$ be a smooth symmetric stress-energy tensor with components in $\mathrm J\,\mathrm m^{-3}$ and spatially compact support on every finite time slab. At a fixed time $t$, define
$$p^a(t):=\frac1c\int_{\mathbb R^3}T^{0a}(ct,\mathbf x)\,d^3x,$$
and, for a representative point $z(t)$ on that time slice, define
$$S_z^{ab}(t):=\frac1c\int_{\mathbb R^3}\left((x-z(t))^aT^{0b}(ct,\mathbf x)-(x-z(t))^bT^{0a}(ct,\mathbf x)\right)d^3x.$$
Here $(x-z(t))^0=0$ on the chosen slice, $p$ has units $\mathrm{kg\,m\,s^{-1}}$, and $S_z$ has units $\mathrm{kg\,m^2\,s^{-1}}$. These are definitions of moments; no conservation is asserted by clause (a).

**(b) Local curved-body moments.** Let $z\in M$ and let $U_0$ be a convex normal neighborhood containing $z$. Let $\Sigma\subset U_0$ be a spacelike $C^1$ hypersurface through $z$, with future unit normal $n_x$ and induced volume element $d\Sigma$. Let a smooth symmetric stress-energy tensor $T^{ab}$ have support on $\Sigma$ compactly contained in $U_0$, with all displayed integrals finite. For each support point $x\in\Sigma$, let $v(x):=\exp_z^{-1}(x)\in T_zM$ be the unique joining position vector supplied by [[thm-gr-convex-normal-neighborhoods]] and [[thm-gr-local-geodesics-and-exponential-map]]. Let $H_{x\to z}:T_xM\to T_zM$ be parallel transport along that unique geodesic, with existence, uniqueness and metric preservation as in [[lem-gr-parallel-transport-and-geodesic-speed]]. Define $T^\sharp(n_x)^a:=T^{ab}(x)(n_x)_b$ and
$$p_z:=\frac1c\int_\Sigma H_{x\to z}\!\left(-T^\sharp(n_x)\right)d\Sigma,\qquad S_z:=\frac1c\int_\Sigma v(x)\wedge H_{x\to z}\!\left(-T^\sharp(n_x)\right)d\Sigma,$$
where $(v\wedge w)^{ab}:=v^aw^b-v^bw^a$ and the finite-dimensional vector and tensor integrals are taken componentwise in any basis of $T_zM$. The resulting $p_z$ and $S_z$ are a vector and an antisymmetric tensor at $z$; their units are $\mathrm{kg\,m\,s^{-1}}$ and $\mathrm{kg\,m^2\,s^{-1}}$.

## Remarks

- The curved definition is local: all support and transport paths remain in the stated convex normal neighborhood. A different hypersurface or transport convention can define different moments; no slice-independence theorem is asserted here.
- In the flat branch, if additionally $\partial_aT^{ab}=0$ on a finite slab and the tensor has zero side flux through a closed axis-parallel box containing its spatial support, [[thm-sr-stress-balance-and-finite-flux]] supplies the corresponding finite-box conservation of $p$. That theorem makes no noncompact-slice or arbitrary-hypersurface claim.
- The equations of motion in [[post-rpm-mpd-truncation]] are separately adopted; they are not consequences of this definition. The AC$_\omega$ dependency is inherited through the cited GR smooth structure and parallel-transport interfaces.
