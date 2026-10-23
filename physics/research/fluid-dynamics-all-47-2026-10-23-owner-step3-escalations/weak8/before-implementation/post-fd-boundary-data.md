---
id: post-fd-boundary-data
kind: postulate
title: "Specified wall, thermal, periodic and initial data"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - def-fd-conservative-weak-form
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  def-fd-conservative-weak-form: formulation-prerequisite
physical_scope: "Adopted impermeable/no-slip wall motion, alternative thermal exchange, periodic identification and evolution-specific initial data; no implied solvability or empirical universality."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf"
      locator: "§2.3.1 and §3.2.1, printed pp. 33–34 and 64–65."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§5.4.1, printed pp. 173–174; boundary conditions are separately specified."
---

## Postulate

Work in the nonrelativistic SI fluid model on an open time interval $I\subseteq\mathbb R$ measured in seconds and oriented Euclidean three-space measured in metres. Let $\Omega_t$ be the fluid region at time $t$ and $\mathcal O:=\{(t,x):t\in I,\ x\in\Omega_t\}$ its open spacetime region. Let $u:\mathcal O\to\mathbb R^3$ be fluid velocity in metres per second, $T:\mathcal O\to(0,\infty)$ absolute temperature in kelvins, and $q:\mathcal O\to\mathbb R^3$ conductive heat flux in watts per square metre. A moving solid boundary is covered by local material surface charts $X_b:I\times\Xi\to\mathbb R^3$, where $\Xi\subseteq\mathbb R^2$ is open with dimensionless labels and $X_b\in C^2(I\times\Xi;\mathbb R^3)$ means that all coordinate partial derivatives in $(t,\xi)$ of total order at most two are continuous. For each fixed $t\in I$ and each $\xi_0\in\Xi$, there is a neighborhood $V\subseteq\Xi$ of $\xi_0$ on which $X_b(t,\cdot)$ is injective, its derivative has rank two, and it is a homeomorphism onto its image; thus each time slice is locally a surface chart of the wall. These charts carry fixed material labels: wherever two such charts overlap, their labels are related by a time-independent $C^2$ coordinate change $\varphi$, so that $X_b^i(t,\xi)=X_b^j(t,\varphi(\xi))$ on the overlap. Differentiation in $t$ then gives the same velocity at each represented boundary point, and $w_b$ is the well-defined material boundary velocity $w_b(t,X_b(t,\xi)):=\partial_tX_b(t,\xi)$ in metres per second. For each $t$, every represented wall patch $X_b(t,\Xi)$ lies in $\partial\Omega_t$; locally this boundary is a $C^2$ graph with $\Omega_t$ on one side. Define $\Gamma_b:=\{(t,X_b(t,\xi)):t\in I,\ \xi\in\Xi\}$, taking the union over wall charts. The unit normal $n:\Gamma_b\to\mathbb R^3$ points outward from the fluid region $\Omega_t$ into the solid and is continuous. In the smooth branch, assume $u,T,q$ have continuous traces wherever boundary values are imposed. The no-penetration or impermeability condition is the adopted equality $(u-w_b)\cdot n=0$ on the wall. When separately selected, no-slip is the stronger adopted equality $u=w_b$ on the wall. Neither equality is deduced from an interior balance equation; no-slip is not part of the inviscid wall model unless explicitly adopted.

On a thermal patch $\Gamma_T\subseteq\Gamma_b$, a prescribed temperature is a map $T_b:\Gamma_T\to(0,\infty)$ and a prescribed outward heat flux is a map $q_b:\Gamma_T\to\mathbb R$. Require their pullbacks $(t,\xi)\mapsto T_b(t,X_b(t,\xi))$ and $(t,\xi)\mapsto q_b(t,X_b(t,\xi))$, wherever selected, to be continuous, with any additional regularity required by the chosen evolution problem stated separately. At each thermal boundary patch, select and state compatible data of one of these forms: insulation, $q\cdot n=0$; prescribed temperature, $T=T_b$ for a specified field $T_b>0$ in kelvins; or prescribed outward conductive heat flux, $q\cdot n=q_b$ for a specified field $q_b$ in watts per square metre. These are alternative boundary models. Their energy and entropy fluxes are accounted for through the chosen boundary data; no separate surface storage or reservoir entropy law is implicit.

A periodic cell with side lengths $L_1,L_2,L_3>0$ metres is the quotient torus $\mathbb T^3_L:=\mathbb R^3/(L_1\mathbb Z\times L_2\mathbb Z\times L_3\mathbb Z)$. Periodicity identifies opposite faces by the corresponding translations and requires equality of the fields and of each derivative trace required by the selected evolution problem. Paired fluxes then cancel in cell integrals. These identified faces are not physical walls.

At an initial time $t_0\in I$, prescribe only the fields present in the selected model. Require them to satisfy the exact function-space regularity, positivity, differential constraints, constitutive state-domain restrictions, and wall or periodic compatibility hypotheses of the particular evolution result being used. In the weak formulation, initial data enter through the test-function initial term; that fixes a distributional initial datum but does not by itself supply a strong trace. This postulate selects model data only. It asserts no existence, uniqueness, regularity improvement, approximation, or solvability for any initial-boundary value problem.

## Postulate references

[[def-fd-quantity-and-frame-conventions|Classical SI frame, velocity and field conventions]]

[[def-fd-conservative-weak-form|Weak initial term and trace distinction]]

[Tong, *Fluid Mechanics*, §2.3.1 and §3.2.1](https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf)

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §5.4.1](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)
