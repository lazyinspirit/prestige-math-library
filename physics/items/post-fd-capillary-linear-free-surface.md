---
id: post-fd-capillary-linear-free-surface
kind: postulate
title: Linear capillary free-surface model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-wall-defect-capillary-models
  - post-fd-boundary-data
  - thm-newton-leibniz-with-interior-derivative
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-reals-cauchy-complete
  - thm-of-square-roots
  - thm-chain-rule
  - thm-algebra-of-derivatives
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-wall-defect-capillary-models: formulation-prerequisite
  post-fd-boundary-data: formulation-prerequisite
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
physical_scope: >-
  Adopted first-order inviscid, homogeneous, incompressible and irrotational
  capillary-gravity waves in a periodic horizontal cell above a fixed
  impermeable bed, with constant density and surface tension and negligible air
  inertia. No viscosity, background current, finite-amplitude accuracy,
  solvability, or universal empirical validity is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 18.354, Nonlinear Dynamics II: Continuum Systems,
        Spring 2015 Lecture Notes (authors: Michael Brenner, Tom Peacock, Roman
        Stocker, Pedro Reis, Jörn Dunkel)"
      url: "https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-syste\
        ms-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNo\
        tes.pdf"
      locator: "§23.1, printed pp. 104–105, equations (541)–(548): potential flow,
        kinematic and capillary dynamic surface conditions, and first-order
        linearization."
    - title: "Howard Georgi, MIT OpenCourseWare 8.03SC, The Physics of Waves, Fall
        2016 textbook"
      url: "https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-\
        2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf"
      locator: "§§11.5.1–11.5.2, printed pp. 285–291, equations (11.108)–(11.140):
        idealized incompressible fluid, fixed-depth bed, surface-tension energy,
        and capillary-gravity modes."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin,
        'Gravity Waves'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html"
      locator: "Chapter 11, equations (11.1)–(11.21): incompressible inviscid wave
        model, bottom impermeability, free-surface kinematics, and finite-depth
        gravity-wave mode."
    - title: "Richard Fitzpatrick, Fluid Mechanics, University of Texas at Austin,
        'Surface Tension'"
      url: "https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html"
      locator: "Chapter 11, equations (11.116)–(11.121): curvature sign, pressure
        jump, capillary free-surface condition, and finite-depth
        capillary-gravity dispersion relation."
verification:
  precheck: pass
  sources_checked:
    date: 2026-10-23
    scope: Completed native formulation/status, source-evidence and applicability review; exact evidence and reading limits in research/fluid-dynamics-all-47-2026-10-23-publication.json. No new retrieval, measurement or solution is claimed.
    by: owner-authorized native reviewers (gpt-6.1-sol)
---

## Postulate

Let $I\subseteq\mathbb R$ be a nonempty open interval, with absolute time $t\in I$ in seconds, and let $E$ be an oriented three-dimensional Euclidean affine space: its translation vectors form an oriented three-dimensional Euclidean vector space, and no origin is distinguished. The adopted Newtonian spacetime is the product $I\times E$. Define $\mathrm{SO}(3):=\{Q\in\mathbb R^{3\times3}:Q^{\mathsf T}Q=I_3,\ \det Q=1\}$. A classical Cartesian inertial chart on $I\times E$ is the event-coordinate map $(t,X)\mapsto(t,\mathbf r_t(X))$, where there are a fixed $t_{\rm ref}\in I$, an orientation-preserving affine isometry $\mathbf r_{t_{\rm ref}}:E\to\mathbb R^3$ whose linear part lies in $\mathrm{SO}(3)$, and a constant $w\in\mathbb R^3$ in metres per second such that $\mathbf r_t(X)=\mathbf r_{t_{\rm ref}}(X)+w(t-t_{\rm ref})$ for every $t\in I$ and $X\in E$. Thus each fixed-time spatial coordinate map is an orientation-preserving affine isometry, and its coordinates are measured in metres. Inertial charts are related by $t^*=t+t_0$ and $\mathbf r^*=Q\mathbf r+vt+a$, where $t_0$ is a constant time translation in seconds, $Q\in\mathrm{SO}(3)$ is constant, $v\in\mathbb R^3$ is constant in metres per second, and $a\in\mathbb R^3$ is constant in metres. Thus “frame” means this adapted event-coordinate map on Newtonian spacetime, not an observer congruence or a basis field. Write the selected chart coordinates as $(x_1,x_2,z)$, with horizontal coordinate $x=(x_1,x_2)$ and upward vertical coordinate $z$, all in metres, and let $e_z$ be the upward unit vector.

Fix $h>0$ metres and horizontal periods $L_1,L_2>0$ metres; set $\mathbb T^2_L:=\mathbb R^2/(L_1\mathbb Z\times L_2\mathbb Z)$. For a scalar or vector field $f$ on $\mathbb T^2_L$, its lift is $\widetilde f(\widetilde x):=f([\widetilde x])$ on $\mathbb R^2$ and is periodic under each lattice translation $(L_1n_1,L_2n_2)$, $n_1,n_2\in\mathbb Z$. The notation $C^r$ for fields on $\mathbb T^2_L\times I$ or $\mathbb T^2_L\times[-h,0]\times I$ means that the lifted field has continuous ordinary coordinate partial derivatives through total order $r$, with derivatives at $z=-h,0$ understood as continuous one-sided extensions. Horizontal coordinate partial derivatives are the corresponding derivatives of the periodic lift, so they are independent of the representative of a torus point. The flat reference liquid region is $\Omega_0:=\mathbb T^2_L\times(-h,0)$; the bottom $z=-h$ is a fixed solid bed and the real first-order surface-displacement coefficient is $\eta:\mathbb T^2_L\times I\to\mathbb R$, in metres. It is a formal perturbation coefficient, with no amplitude restriction such as $\eta>-h$. For an optional finite-displacement geometric interpretation on a compact time interval $K\subset I$, introduce a dimensionless $\varepsilon>0$ and the graph $z=\varepsilon\eta(x,t)$. Continuity on the compact horizontal cell times $K$ bounds $|\eta|$ by some finite $M$, so choosing $\varepsilon M<h$ keeps that graph above the bed. This geometric scaling imposes no bound on the formal coefficient and asserts no nonlinear solution or approximation accuracy. Horizontal periodic faces are mathematical identifications, not physical walls.

Adopt a homogeneous single-component liquid with constant mass density $\rho>0$ in kilograms per cubic metre, constant downward gravitational acceleration $-g e_z$ with $g>0$ in metres per second squared, and constant surface-tension coefficient $\gamma>0$ in newtons per metre, equivalently kilograms per second squared. Here $\rho$, $g$, $\gamma$, and the constant gas pressure $p_a$ in pascals are primitive inputs of this formulation; $h,L_1,L_2$ are fixed geometric parameters. For the optional finite-displacement geometry on $K$, define $\mathcal Q_{\ell,\varepsilon}:=\{(x,z,t):x\in\mathbb T^2_L,\ t\in K,\ -h<z<\varepsilon\eta(x,t)\}$. If an auxiliary liquid-pressure field $p_{\ell,\varepsilon}:\mathcal Q_{\ell,\varepsilon}\to\mathbb R$ in pascals is supplied, its liquid-side interface trace, when it exists, is $p_{\ell,\varepsilon}^\Gamma(x,t):=\lim_{z\uparrow\varepsilon\eta(x,t)}p_{\ell,\varepsilon}(x,z,t)$. No extension or smoothness of this pressure across the interface is assumed. The gas is modeled only by the prescribed constant pressure $p_a$; no gas momentum equation is included. This optional geometric pressure is distinct from the formal first-order pressure coefficient used below. The reduced first-order model does not construct such a nonlinear pressure family and has no independent pressure evolution equation. Its independent fields are the unrestricted formal displacement coefficient $\eta$ in metres and the scalar velocity-potential coefficient $\phi$ in metres squared per second, both on the fixed reference geometry. Define the full Cartesian gradient by $\nabla\phi:=(\partial_{x_1}\phi,\partial_{x_2}\phi,\partial_z\phi)$ and the derived fluid-velocity vector field by $u:=\nabla\phi:\mathbb T^2_L\times[-h,0]\times I\to\mathbb R^3$, in metres per second; there is no additive uniform velocity component. With $u=(u_1,u_2,u_3)$, define $\operatorname{div}u:=\partial_{x_1}u_1+\partial_{x_2}u_2+\partial_z u_3$ and $\operatorname{curl}u:=(\partial_{x_2}u_3-\partial_z u_2,\partial_z u_1-\partial_{x_1}u_3,\partial_{x_1}u_2-\partial_{x_2}u_1)$ using these Cartesian derivatives on the lifts. The model is inviscid, meaning no viscous-stress or viscous-dissipation terms are included; it is incompressible and irrotational, meaning $\operatorname{div}u=0$ and $\operatorname{curl}u=0$. On the torus this potential assumption is stronger than irrotationality alone, since a curl-free field need not be the gradient of a periodic scalar. Assume $\phi$ is at least $C^3$ and $\eta$ is at least $C^2$ in the periodic-lift sense just defined; derivatives below are classical.

Set $\nabla_h:=(\partial_{x_1},\partial_{x_2})$ and $\Delta_h:=\partial_{x_1}^2+\partial_{x_2}^2$ on the periodic lifts. For a horizontal vector field $v=(v_1,v_2)$, define $\nabla_h\cdot v:=\partial_{x_1}v_1+\partial_{x_2}v_2$ and $|v|^2:=v_1^2+v_2^2$. For the optional graph $z=\varepsilon\eta(x,t)$, the outward normal from liquid to gas is $n_\varepsilon:=(-\varepsilon\nabla_h\eta,1)/\sqrt{1+\varepsilon^2|\nabla_h\eta|^2}$ and the signed curvature is $\kappa_\varepsilon:=-\nabla_h\cdot(\varepsilon\nabla_h\eta/\sqrt{1+\varepsilon^2|\nabla_h\eta|^2})$, in inverse metres. The geometric liquid-minus-gas pressure law, whenever this optional pressure and trace are supplied, is $p_{\ell,\varepsilon}^\Gamma-p_a=\gamma\kappa_\varepsilon$. Its formal first-order curvature coefficient is $-\Delta_h\eta$. On the fixed reference slab define the first-order pressure coefficient $p^{(1)}:=-\rho\phi_t$, in pascals, in the potential gauge encoded by the dynamic equation below. The first-order interface pressure balance at the reference plane is $p^{(1)}(x,0,t)-\rho g\eta=-\gamma\Delta_h\eta$: the term $-\rho g\eta$ is the hydrostatic reference pressure evaluated to first order at height $\varepsilon\eta$. Substituting $p^{(1)}(x,0,t)=-\rho\phi_t(x,0,t)$ gives exactly the displayed linear dynamic condition. All coefficients are evaluated at $z=0$; neither $\phi$ nor its velocity is evaluated at $z=\varepsilon\eta$ or outside the fixed slab. At the fixed bed impose only impermeability, meaning zero normal fluid velocity, $u_z=0$, equivalently $\phi_z=0$ at $z=-h$. Since the bed is fixed, no-slip would additionally impose $u=0$ there; that condition is not imposed in this inviscid branch. The first-order kinematic equation below encodes surface motion at the reference plane; it is not a solid-wall condition or a claim of nonlinear material motion for the optional graph.

The selected first-order model is defined by retaining only terms linear in perturbations about the hydrostatic rest state $\eta=0$, $u=0$, and reference pressure $p_a-\rho g z$, then evaluating surface derivatives at $z=0$. Products of perturbations are discarded, with no error estimate for replacing a finite-amplitude flow by this linear model. On $\Omega_0\times I$ the adopted equations and boundary conditions are

$$\Delta_h\phi+\partial_z^2\phi=0,\qquad -h<z<0,$$

$$\partial_z\phi(x,-h,t)=0,$$

$$\partial_t\eta(x,t)=\partial_z\phi(x,0,t),\qquad \partial_t\phi(x,0,t)+g\eta(x,t)-\frac{\gamma}{\rho}\Delta_h\eta(x,t)=0.$$

These are model assumptions for the stated idealized regime. They assert no existence or uniqueness for the nonlinear free-boundary equations, no finite-amplitude approximation bound, and no empirical claim that a particular liquid satisfies this model.

## Postulate references

[[def-fd-wall-defect-capillary-models|Formal capillary-gravity potential model: harmonic potential, impermeable bottom, and linear kinematic/dynamic surface equations. Identify its $\sigma$ with physical $\gamma$, its $L_x$ with $L_1$, and its $L_y$ with $L_2$; the physical branch uses the stricter $\gamma>0$ and the stronger regularity stated above.]]

[[def-fd-quantity-and-frame-conventions|Newtonian spacetime and Cartesian inertial frames: absolute-time translations and Galilean spatial transformations; a frame is an adapted Cartesian chart.]]

[[post-fd-boundary-data|Wall-condition convention: impermeability imposes zero relative normal velocity, while no-slip additionally equates the fluid and wall velocities; for this fixed bed the omitted no-slip condition would be $u=0$.]]

[MIT OpenCourseWare 18.354, *Nonlinear Dynamics II: Continuum Systems*, §23.1, printed pp. 104–105](https://ocw.mit.edu/courses/18-354j-nonlinear-dynamics-ii-continuum-systems-spring-2015/6163837c5efa5d6ed969e535ec8f890c_MIT18_354JS15_lectureNotes.pdf)

[Georgi, *The Physics of Waves*, §§11.5.1–11.5.2, printed pp. 285–291](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/ef731c1b91d77a6db003f6c27e300d25_MIT8_03SCF16_Textbook.pdf)

[Fitzpatrick, *Fluid Mechanics*, “Gravity Waves,” equations (11.1)–(11.21)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node147.html)

[Fitzpatrick, *Fluid Mechanics*, “Surface Tension,” equations (11.116)–(11.121)](https://farside.ph.utexas.edu/teaching/336L/Fluidhtml/node156.html)

## Mathematical formulation notes

The up-to-boundary class used here has the neighborhood-extension property required by the mathematical formulation, without imposing a stronger class on the formal fields. For a periodic lift $f$ with continuous coordinate derivatives through total order $r\in\{0,1,2,3\}$ on the closed slab, retain $f$ on $-h\le z\le0$. For $0<s<h/8$, extend above the top and below the bottom by

$$\mathcal E f(x,s,t)=\sum_{j=1}^4c_j f(x,-js,t),\qquad \mathcal E f(x,-h-s,t)=\sum_{j=1}^4c_j f(x,-h+js,t),\qquad(c_1,c_2,c_3,c_4)=(10,-20,15,-4).$$

Direct finite arithmetic gives $\sum_{j=1}^4c_j(-j)^m=1$ for $m=0,1,2,3$. A mixed derivative with $m$ vertical derivatives therefore has the same limiting value from both sides at each wall: tangential and time derivatives act on the same finite sum, and each vertical derivative contributes $-j$. This covers every mixed derivative of total order at most $r$. Matching one-sided derivatives give ordinary derivatives across each wall by the one-variable difference quotient, applied successively to derivatives of lower order. Thus $\mathcal E f$ is $C^r$ on the open enlarged slab $-h-h/8<z<h/8$, preserves horizontal periodicity, and restricts to $f$. Restriction gives the reverse implication. This construction extends regularity only: the model equations are required on the original slab, and no physical interpretation or field equation is imposed in the reflected region.

In particular, total $C^3$ regularity of $\phi$ provides continuous time derivatives of every spatial derivative through order two, including at the walls, and this reflection gives the mathematical supplier's neighborhood-extension convention. For $\eta$, total $C^2$ regularity alone need not supply its second spatial derivatives' time derivatives. Here the adopted kinematic equation supplies them: put $J(x,t):=\phi_z(x,0,t)$. Its spatial derivatives through order two are continuous by total $C^3$ regularity of $\phi$. For $s,t$ in any compact time interval inside $I$, the fundamental theorem gives $\eta(x,t)-\eta(x,s)=\int_s^t J(x,\tau)\,d\tau$. Differentiating this identity in each horizontal multi-index $\alpha$ with $|\alpha|\le2$ gives $\partial_x^\alpha\eta(x,t)-\partial_x^\alpha\eta(x,s)=\int_s^t\partial_x^\alpha J(x,\tau)\,d\tau$; continuous integrands and their derivatives on the compact periodic cell justify these differentiations. Taking time difference quotients, uniformly on that cell by uniform continuity of $\partial_x^\alpha J$, gives $\partial_t\partial_x^\alpha\eta=\partial_x^\alpha J$. Consequently the actual solutions used here have $\eta\in C^1(I;C^2(\mathbb T^2_L))$, matching the mathematical interface while retaining the postulated total $C^2$ class plus its existing equations. No new choice principle or amplitude hypothesis is introduced.

The reflection differentiations use the real chain and finite-sum rules in [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]. The fundamental-theorem and parameter-integral steps use [[thm-newton-leibniz-with-interior-derivative]] and [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]], applied to ordinary real coordinate lifts. Positive real square roots, including the normal's denominator, use [[thm-of-square-roots]] with the complete ordered field $\mathbb R$ supplied by [[thm-reals-cauchy-complete]].

## Geometry diagram

The schematic shows a vertical section through the flat reference cell at fixed $x_2$. The upper curve represents an optional scaled graph $z=\varepsilon\eta(x,t)$, the dashed horizontal line is the rest level $z=0$, and the lower horizontal line is the fixed bed $z=-h$. The upward normal points from liquid to gas; gravity points downward. The picture is not to scale and supplies no premise to any proof.

```tikz
\begin{tikzpicture}[x=1.05cm,y=0.85cm,>=stealth]
  \fill[blue!12] (0,-1.8) -- plot[smooth] coordinates {(0,0.05) (0.8,0.32) (1.6,0.12) (2.4,-0.16) (3.2,-0.03) (4,0.05)} -- (4,-1.8) -- cycle;
  \draw[thick] (0,-1.8) -- (4,-1.8);
  \draw[thick,blue!65!black] plot[smooth] coordinates {(0,0.05) (0.8,0.32) (1.6,0.12) (2.4,-0.16) (3.2,-0.03) (4,0.05)};
  \draw[dashed] (0,0) -- (4.25,0) node[right] {$z=0$};
  \draw[<->] (-0.35,0) -- (-0.35,-1.8) node[midway,left] {$h$};
  \draw[->] (2,0.02) -- (2.36,0.92) node[right] {$n_\varepsilon$};
  \draw[->] (4.5,0.8) -- (4.5,0.1) node[right] {$-g e_z$};
  \node at (2,-0.9) {liquid};
  \node at (2,0.65) {gas};
  \node[below] at (2,-1.8) {fixed impermeable bed $z=-h$};
  \node[above] at (2.65,0.16) {$z=\varepsilon\eta(x,t)$};
\end{tikzpicture}
```
