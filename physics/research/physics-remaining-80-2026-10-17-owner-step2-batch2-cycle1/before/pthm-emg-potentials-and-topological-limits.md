---
id: pthm-emg-potentials-and-topological-limits
kind: physics-theorem
title: "Local potentials and explicit global obstruction in the model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-emg-covariant-maxwell
  - def-emg-topological-sector
  - lem-emg-local-potential-construction
  - lem-emg-sphere-flux-holonomy
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  post-emg-covariant-maxwell: physical-assumption
  def-emg-topological-sector: formulation-prerequisite
  lem-emg-local-potential-construction: mathematical-premise
  lem-emg-sphere-flux-holonomy: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: "The smooth classical field branch uses only the adopted homogeneous Maxwell law dF=0: local potentials exist on star-shaped coordinate charts; on the punctured spatial domain a nonzero sphere flux obstructs a global potential; a fixed U(1) normalization restricts the explicit north/south connection patching, while a separate flat example distinguishes zero curvature from gauge triviality. No coupled Einstein solution, physical magnetic monopole, or quantum charge quantization is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§2.4.2–2.4.3, especially PDF p. 84: local versus global potentials and closed versus exact forms; §3.2.5, PDF pp. 121–122, for the differential-form Maxwell setting. The local radial primitive and source/sign conventions are supplied and checked independently here."
    - title: "David Tong, Gauge Theory, author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§1.1.2, PDF pp. 17–19 (printed pp. 6–8): explicit north/south potentials and overlap transition. The text's charged-wavefunction phase and Dirac condition involving e and ℏ are expressly excluded."
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,o)$ be a smooth, oriented and time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$, and let $F\in\Omega^2(M)$ be a smooth real field with the SI conventions of [[def-emg-topological-sector]]. Assume the smooth branch of the adopted curved Maxwell postulate [[post-emg-covariant-maxwell]] applies on $M$, with no singular source in its domain. Only its homogeneous clause $dF=0$ is used below; no Einstein equation or coupled solution is asserted.

If $U\subseteq M$ is a nonempty star-shaped coordinate domain with chart image $V\subseteq\mathbb R^4$ star-shaped about a point $p$ (that is, $p+t(x-p)\in V$ for every $x\in V$ and $0\le t\le1$), then $F|_U$ has a smooth local potential. Use a length-coordinate chart for the following formula; its coordinates have unit metre. The components can be taken to be

$$A_\nu(x)=\int_0^1 t(x-p)^\mu F_{\mu\nu}(p+t(x-p))\,dt.$$

For an explicit global example, take $M_* =\mathbb R_{x^0}\times(\mathbb R^3\setminus\{0\})$ with Minkowski metric $-(dx^0)^2+dx^2+dy^2+dz^2$, orientation $dx^0\wedge dx\wedge dy\wedge dz$, and $x^0,x,y,z$ measured in metres. Let $r>0$ be spatial radius, let $\theta,\phi$ be dimensionless spherical angles, and for $b\in\mathbb R$ with unit weber set

$$F_b=b\sin\theta\,d\theta\wedge d\phi.$$

For each fixed $(x^0,r)$, let $S^2_r$ have its outward orientation, let $N,S$ be its north and south poles, and set $U_N=S^2_r\setminus\{S\}$, $U_S=S^2_r\setminus\{N\}$, and $O=U_N\cap U_S$. The corresponding open patches in $M_*$ are $\widetilde U_N=\{r+z>0\}$ and $\widetilde U_S=\{r-z>0\}$, whose restrictions to each $S^2_r$ are $U_N$ and $U_S$. The angular coordinate $\phi$ is defined modulo $2\pi$ on $O$, while $d\phi$ is a global one-form there. The form $F_b$ is smooth and closed on $M_*$, with outward sphere flux $\int_{S^2_r}F_b=4\pi b$. For $b\ne0$ it has no global smooth one-form potential on $M_*$. It has local north/south potentials

$$A_N=b(1-\cos\theta)\,d\phi,\qquad A_S=-b(1+\cos\theta)\,d\phi.$$

For the fixed circle normalization $\kappa_0>0$ of [[def-emg-topological-sector]], these patch as the stated normalized $U(1)$ connection exactly when $2b/\kappa_0\in\mathbb Z$: on the overlap, $A_S-A_N=-2b\,d\phi$ and the transition is $g_{NS}(\phi)=\exp(-2ib\phi/\kappa_0)$. This integrality is a restriction of the selected connection sector; the classical real-field description permits every real $b$.

There is also a flat-connection example on the smooth base $M_0=\mathbb R_{x^0}\times S^1\times\mathbb R^2$. Write $w\in S^1\subset\mathbb C$ for the circle coordinate and $\nu=-iw^{-1}dw$ for its global angular one-form, normalized by $\int_{S^1}\nu=2\pi$. For dimensionless $a\in\mathbb R$, the global one-form $A=\kappa_0a\,\nu$ has $F=dA=0$, while its normalized connection has holonomy $e^{-2\pi ia}$ around the positive circle. It is gauge trivial for integer $a$ and is not gauge trivial for noninteger $a$. On an angle chart $w=e^{i\phi}$, $\nu=d\phi$. This is a classical connection statement on a smooth base, not a claim about a quantum phase or an Einstein solution. The punctured point in the sphere example is outside the field domain; no physical magnetic monopole or quantum electric-charge quantization is asserted.

## Facts & Assumptions

**Given:** The smooth Lorentzian field model above, a smooth real two-form, and the positive fixed normalization $\kappa_0$ only when the optional circle sector is selected.

[A1] The current draft [[post-emg-covariant-maxwell]] adopts the smooth SI field law on an open subset $U$ of a smooth oriented, time-oriented Lorentzian four-manifold: for smooth real $F\in\Omega^2(U)$ and smooth four-current $j$, $dF=0$ and $\nabla^g_aF^{ab}=-\mu_0j^b$. It excludes magnetic sources, material excitation laws, singular point or sheet sources, distributional products, and global-potential assumptions. This is a physical postulate, not a theorem; only $dF=0$ is used here. Its batch-1 contract contains author formulation, scope, sources and non-derivation review; this is not independent acceptance, and current external prerequisite closure remains an owner obligation.

[A2] The current draft [[lem-emg-local-potential-construction]] states that for an open star-shaped $D\subseteq\mathbb R^4$ and smooth closed real two-form $F=\frac12F_{ab}\,dx^a\wedge dx^b$, the displayed radial integral defines a smooth $A=A_b\,dx^b$ with $dA=F$. Its complete local proof differentiates the integral and checks every coefficient. The typed foundational dependencies are now authored earlier on emg-mg02; this is local proof completion, not independent acceptance. Independent acceptance and current run readiness remain separate owner duties.

[A3] The current draft [[lem-emg-sphere-flux-holonomy]] states the smooth Cartesian punctured-space form, its unit-sphere flux and Stokes obstruction, the smooth north/south potentials and fixed-$\kappa_0$ transition criterion, and the flat example $A=\kappa_0a\,\nu$ with $\nu=-iw^{-1}dw$ and holonomy $e^{-2\pi ia}$. On an angle chart $w=e^{i\phi}$, its global angular one-form is $\nu=d\phi$. Its complete local proof gives an ordered tetrahedral finite-cycle Stokes argument and gauge-period calculation. The gluing supplier now uses the actual local set-size definition and constructs the normalized bundle and curvature. The exact interfaces match; no independent acceptance is asserted.

[F1] [[def-emg-topological-sector]] defines a closed classical field by $dF=0$, a local potential by $dA_U=F|_U$, and the optional normalized connection by $A_i=\kappa_0a_i$, $F|_{U_i}=\kappa_0da_i$, and $a_j=a_i+df_{ij}$ when $g_{ij}=e^{if_{ij}}$. It assigns $F$ flux unit Wb and $\kappa_0$ unit Wb; the choice is not a quantum charge postulate.

[F2] [[thm-stokes-theorem-for-smooth-singular-chains]] states that for a smooth manifold $X$, integer $k\ge1$, finite smooth real singular $k$-chain $c$, and smooth $(k-1)$-form $\omega$, $\int_c d\omega=\int_{\partial c}\omega$.

## Proof

1.1 Fix a nonempty star-shaped chart $U$ and its center $p$. Define $A_\nu$ by the displayed radial integral. The integrand is smooth in $(x,t)$ on $V\times[0,1]$; on every relatively compact subdomain its $x$-derivatives are continuous and uniformly bounded on the compact integration interval, so differentiation under the integral gives a smooth one-form. [A2, construct]

1.2 On $M_*$ the Cartesian expression $F_b=b(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy)/r^3$ is smooth because $r>0$. Direct differentiation gives $dF_b=b(\partial_x(x/r^3)+\partial_y(y/r^3)+\partial_z(z/r^3))\,dx\wedge dy\wedge dz=b(3/r^3-3r^2/r^5)\,dx\wedge dy\wedge dz=0$. In spherical coordinates, the outward-oriented sphere integral is $\int_{S^2_r}F_b=b\int_0^\pi\sin\theta\,d\theta\int_0^{2\pi}d\phi=4\pi b$. [A3, algebra]

1.3 The north and south potentials in [A3] are smooth on $\widetilde U_N$ and $\widetilde U_S$ respectively, differentiate to $F_b$, and differ by $A_S-A_N=-2b\,d\phi$ on their overlap. Dividing by $\kappa_0$ gives the normalized connection transition lift $f_{NS}=-2b\phi/\kappa_0$, so $g_{NS}=e^{if_{NS}}$ returns to its initial value after $\phi\mapsto\phi+2\pi$ exactly when $e^{-4\pi ib/\kappa_0}=1$. The map $x\mapsto e^{ix}$ has kernel $2\pi\mathbb Z$, hence this is equivalent to $2b/\kappa_0\in\mathbb Z$. If $n=2b/\kappa_0\in\mathbb Z$, then $g_{NS}=e^{-in\phi}$ is smooth and single-valued on the overlap and $a_S=a_N+d(-n\phi)$ is the declared gluing rule; conversely any fixed-sector transition must be single-valued. [A3, F1, algebra]

2.1 By antisymmetry of $F$ and $dF=0$ from [A1], differentiation of the radial formula in step 1.1 gives $\partial_\rho A_\nu-\partial_\nu A_\rho=\int_0^1(2tF_{\rho\nu}+t^2(x-p)^\mu\partial_\mu F_{\rho\nu})(p+t(x-p))\,dt=\int_0^1\partial_t[t^2F_{\rho\nu}(p+t(x-p))]\,dt=F_{\rho\nu}(x)$. Hence $dA_U=F|_U$. [A1, A2, step 1.1, algebra]

2.2 Suppose $b\ne0$ and a global smooth one-form $A$ on $M_*$ satisfied $dA=F_b$. Choose a convex tetrahedron with the spatial origin in its interior and radially project its four oriented faces onto the unit sphere in a fixed $x^0$-slice. Each ray meets one face. On each face the radial map is smooth, and preserves orientation because the origin is on the interior side of its outward-oriented face plane. The projected faces cover the sphere once; shared edge maps agree with opposite orientations, so their finite smooth singular sum $c$ has $\partial c=0$. Change of variables on the faces gives $\int_cF_b=4\pi b$ by step 1.2. Stokes [F2] gives $\int_cF_b=\int_c dA=\int_{\partial c}A=0$, contradicting $4\pi b\ne0$. [F2, step 1.2, algebra, construct]

3.1 On $M_0$, write $w=e^{i\phi}$ on an angle chart. The supplier form $\nu=-iw^{-1}dw$ then equals the global angular form $d\phi$, since $dw=ie^{i\phi}d\phi$; its integral around the positive circle is $2\pi$. Thus $A=\kappa_0a\,\nu$ is global and $dA=0$. The horizontal-lift equation over one positive turn is $\dot\theta=-a\dot\phi$, so the endpoint fibre rotation is $e^{-2\pi ia}$. A single-valued gauge map along the circle has a real lift on $[0,2\pi]$ whose endpoint difference is in $2\pi\mathbb Z$, so it preserves this rotation. Therefore noninteger $a$ is not gauge trivial. If $a\in\mathbb Z$, $h(w)=w^{-a}$ is a well-defined $U(1)$ map and its local lift has derivative $-a\,d\phi$, which removes the connection. [A3, F1, algebra, construct] ∎

## Remarks

The source texts motivate the local/global distinction and exhibit patch potentials, but the proof uses the current conditional local radial and sphere-flux supplier interfaces above. The classical sphere field is smooth only on the punctured domain; no source at the removed point is included. The finite radial integral, explicit two-patch transition, flux integral, and circle holonomy calculation make no arbitrary-family choice. The typed sequence criterion states exactly its countable-choice hypothesis; the finite calculations here do not spend it. Independent supplier acceptance and source status remain owner review duties; the audited imported boundaryless-convention remark is not a missing prerequisite.
