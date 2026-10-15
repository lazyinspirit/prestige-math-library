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
  - def-inertial-frame-and-inertial-chart
  - def-rpm-charge-spin-model
  - lem-gr-parallel-transport-and-geodesic-speed
  - thm-gr-convex-normal-neighborhoods
  - thm-gr-local-geodesics-and-exponential-map
  - thm-sr-stress-balance-and-finite-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
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

Use the charged/spinning body-model conventions of the now-authored batch-24 carrier [[def-rpm-charge-spin-model]]: a smooth time-oriented Lorentzian four-manifold of signature $(-+++)$, coordinates $x^0=ct$ in metres, $c>0$, and a $C^2$ future timelike representative curve $\zeta:I\to M$ parametrized by proper time $\tau$ in seconds, with $U=d\zeta/d\tau$ and $g(U,U)=-c^2$. The actual supplier defines these quantities and the SI electromagnetic-tensor convention used here. Assume Countable Choice for the GR smooth-structure, convex-normal and parallel-transport suppliers used below.

**(a) Flat isolated-body moments.** Choose an inertial frame $(o;e_0,e_1,e_2,e_3)$ and its chart $x:A\to\mathbb R^4$ as in [[def-inertial-frame-and-inertial-chart]], with the SI coordinate convention $x^0=ct$ and $x^i$ in metres of [[def-rpm-charge-spin-model]]. Thus $e_0$ is future unit timelike and $(e_1,e_2,e_3)$ is the positively oriented orthonormal spatial basis. Let $T$ be a $C^\infty$ symmetric type-$(2,0)$ tensor field on the affine Minkowski spacetime $A$, whose chart components $T^{ab}$ are the model stress-energy densities with units $\mathrm J\,\mathrm m^{-3}$. The coordinate-time image $J:=\{x^0(\zeta(\tau))/c:\tau\in I\}$ is an open interval, and $\zeta(t)$ denotes the unique point of the curve with coordinate time $t$; this is well-defined because future timelike curves have strictly increasing inertial coordinate time. For a finite closed interval $[t_1,t_2]\subset\mathbb R$, define
$$K_{[t_1,t_2]}:=\overline{\{\mathbf x\in\mathbb R^3:\text{there are }t\in[t_1,t_2]\text{ and }a,b\in\{0,1,2,3\}\text{ with }T^{ab}(ct,\mathbf x)\ne0\}}.$$
Assume $K_{[t_1,t_2]}$ is compact for every such interval. For each $t\in\mathbb R$, define the spatial support by
$$\operatorname{supp}_tT:=\overline{\{\mathbf x\in\mathbb R^3:\text{there are }a,b\in\{0,1,2,3\}\text{ with }T^{ab}(ct,\mathbf x)\ne0\}}.$$
At a fixed time $t$, the spatial slice has coordinates $\mathbf x=(x^1,x^2,x^3)\in\mathbb R^3$ and three-dimensional Lebesgue measure $d^3x$; define
$$p^a(t):=\frac1c\int_{\mathbb R^3}T^{0a}(ct,\mathbf x)\,d^3x,$$
and, for the representative event $\zeta(t)$ on that time slice, define
$$S_{\zeta(t)}^{ab}(t):=\frac1c\int_{\mathbb R^3}\left((x-\zeta(t))^aT^{0b}(ct,\mathbf x)-(x-\zeta(t))^bT^{0a}(ct,\mathbf x)\right)d^3x.$$
Here $(x-\zeta(t))^0=0$ on the chosen slice, $p$ has units $\mathrm{kg\,m\,s^{-1}}$, and $S_{\zeta(t)}$ has units $\mathrm{kg\,m^2\,s^{-1}}$. These are definitions of moments; no conservation is asserted by clause (a).

**(b) Local curved-body moments.** Let $z\in M$ and let $U_0$ be a convex normal neighborhood containing $z$. Let $\Sigma=i(S)\subset U_0$ be a $C^1$ embedded spacelike hypersurface through $z$, where $S$ is a three-dimensional $C^1$ manifold without boundary and $i:S\to U_0$ is an injective $C^1$ immersion that is a homeomorphism onto its image. Thus each tangent space $T_x\Sigma$ is three-dimensional; require the restriction of $g_x$ to it to be positive definite. Let $n_x$ be its continuous future unit normal, meaning $g_x(n_x,n_x)=-1$ and $g_x(n_x,w)=0$ for every $w\in T_x\Sigma$. For a local parametrization $X:V\subseteq\mathbb R^3\to\Sigma$, put $g^\Sigma_{ij}(y):=g_{X(y)}(\partial_iX,\partial_jX)$ and define
$$d\Sigma:=\sqrt{\det(g^\Sigma_{ij}(y))}\,dy^1dy^2dy^3.$$
The positive-definite condition makes this density positive, and the coordinate-change rule makes the resulting measure independent of the parametrization; $dy^1dy^2dy^3$ is Lebesgue measure on $V$. Let $T$ be a smooth symmetric type-$(2,0)$ stress-energy tensor field on $U_0$, with components in an orthonormal tetrad in joules per cubic metre; only its restriction $T|_\Sigma$ is used. With $(n_x)_b:=g_{bc}(x)n_x^c$, define
$$\operatorname{supp}_\Sigma(T|_\Sigma):=\overline{\{x\in\Sigma:T_x\ne0\}}^{\,\Sigma}.$$
Assume this restricted support is a compact subset of $U_0$ and that all displayed integrands are absolutely integrable with respect to $d\Sigma$. For every $x\in\Sigma$, let $v(x):=\exp_z^{-1}(x)\in T_zM$ be the unique joining position vector supplied by [[thm-gr-convex-normal-neighborhoods]] and [[thm-gr-local-geodesics-and-exponential-map]]. Let $H_{x\to z}:T_xM\to T_zM$ be parallel transport along that unique geodesic, with existence, uniqueness and metric preservation as in [[lem-gr-parallel-transport-and-geodesic-speed]]. Define $T^\sharp(n_x)^a:=T^{ab}(x)(n_x)_b$ and
$$p_z:=\frac1c\int_\Sigma H_{x\to z}\!\left(-T^\sharp(n_x)\right)d\Sigma,\qquad S_z:=\frac1c\int_\Sigma v(x)\wedge H_{x\to z}\!\left(-T^\sharp(n_x)\right)d\Sigma,$$
where $(v\wedge w)^{ab}:=v^aw^b-v^bw^a$ and the finite-dimensional vector and tensor integrals are taken componentwise in any basis of $T_zM$. The resulting $p_z$ and $S_z$ are a vector and an antisymmetric tensor at $z$; their units are $\mathrm{kg\,m\,s^{-1}}$ and $\mathrm{kg\,m^2\,s^{-1}}$. “Support on $\Sigma$” here means only compact support of the restriction $T|_\Sigma$; it does not assert that the ambient smooth field $T$ has spacetime support contained in $\Sigma$.

## Remarks

- The curved definition is local: all support and transport paths remain in the stated convex normal neighborhood. A different hypersurface or transport convention can define different moments; no slice-independence theorem is asserted here.
- In the flat branch, if additionally $\partial_aT^{ab}=0$ on a finite slab and the tensor has zero side flux through a closed axis-parallel box containing its spatial support, [[thm-sr-stress-balance-and-finite-flux]] supplies the corresponding finite-box conservation of $p$. That theorem makes no noncompact-slice or arbitrary-hypersurface claim.
- The equations of motion in [[post-rpm-mpd-truncation]] are separately adopted; they are not consequences of this definition. The AC$_\omega$ dependency is inherited through the cited GR smooth structure and parallel-transport interfaces.
