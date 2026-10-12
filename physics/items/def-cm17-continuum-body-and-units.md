---
id: def-cm17-continuum-body-and-units
kind: definition
title: "Continuum body data, the fixed inertial frame and the dimensions of the fields"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [def-cm-material-region-and-density, post-cm01-frames, post-cm01-worldlines, post-cm01-spacetime, def-cm01-units, def-interval, def-cm-affine-time-space, pthm-cm01-galilean-kinematics]
dependency_roles:
  def-cm-material-region-and-density: mathematical-premise
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  post-cm01-spacetime: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-cm-affine-time-space: formulation-prerequisite
  pthm-cm01-galilean-kinematics: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The kinematic and dimensional framework of the continuum branch: one fixed inertial frame, a reference material region with a reference chart domain, a time window, and the dimensions of the density, velocity, acceleration, body-force, traction, stress, displacement, elastic, viscous, pressure and wave-speed fields. The definition fixes conventions only; it asserts no motion, no balance law, no constitutive relation and no measured value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 1.2-1.6 (continuous bodies, reference and current configurations) and Section 3.1 (motion and velocity)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.1 (the continuum approximation and deformations) and Section 8.3 (the velocity field of a continuum)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework and frame.** The framework is the non-relativistic classical
mechanics of [[post-cm01-spacetime]] with the inertial frames, stationary
observers and allowed changes of frame of [[post-cm01-frames]]; the particle
worldline conventions of [[post-cm01-worldlines]] are used for the labeled
points of a body, and dimensions and reference units (metre, second, kilogram)
are read by [[def-cm01-units]]. Throughout this page one inertial frame $F$
with adapted coordinates $(t,x)$ of the affine time space
[[def-cm-affine-time-space]] is fixed, and each simultaneous spatial slice is
identified with $\mathbb R^3$ carrying its standard Euclidean structure. The
time coordinate $t$ is the model's time in seconds, $[t]=\tau$, and the
spatial components $x_i$ are positions in metres, $[x_i]=\ell$. All fields
below are read in this one frame.

**(b) Body data.** A **continuum body data set** in $F$ is a triple $(B,O,I)$
consisting of

1. a material region $B\subseteq\mathbb R^3$: a nonempty, bounded, open set
   ([[def-cm-material-region-and-density]]);
2. an open set $O\subseteq\mathbb R^3$ with $\overline B\subseteq O$, the
   **reference chart domain**;
3. a nonempty open interval $I\subseteq\mathbb R$, the **time window**
   ([[def-interval]]).

The points $X\in B$ are the **material labels** of the body and $B$ is its
**reference placement**. The reference placement is bookkeeping for the
labels and not an observable: it is used only to name the points of the body,
and all physical statements of this page concern spatial fields on the
current regions and their transformation between frames. The label set
carries no metric, mass or force of its own.

**(c) Field slots and dimensions.** The following fields are attached to body
data of this branch; each dimension is computed from the stated defining
relation with the rules of [[def-cm01-units]], and every display of this page
must be dimensionally consistent:

1. **density** $\rho$, mass per unit volume, $[\rho]=\mu\ell^{-3}$;
2. **spatial velocity** $u$, $[u]=\ell\tau^{-1}$, and **material
   acceleration** $a=D_tu$, $[a]=\ell\tau^{-2}$;
3. **body force per unit mass** $b$, an acceleration, $[b]=\ell\tau^{-2}$;
   the corresponding force per volume is $\rho b$ of dimension
   $\mu\ell^{-2}\tau^{-2}$;
4. **traction** $t$ and **stress matrix** $\sigma$, force per unit area,
   $[t]=[\sigma]=\mu\ell^{-1}\tau^{-2}$ (in SI, $\mathrm{N\,m^{-2}}$);
5. **displacement** $\xi$, $[\xi]=\ell$; **linear strain** $e$, dimensionless;
6. **elastic moduli** $\lambda,\mu_s$ and **pressure** $p$ of dimension
   $\mu\ell^{-1}\tau^{-2}$; **dynamic viscosity** $\eta$ of dimension
   $\mu\ell^{-1}\tau^{-1}$ (SI, $\mathrm{Pa\,s}$);
7. **wave speed** $c$, $[c]=\ell\tau^{-1}$, and **enthalpy per unit mass**
   $h$, $[h]=\ell^2\tau^{-2}$.

**(d) Frame and reference-label conventions.** Write a Galilean change as
$$G(t,x)=(t',x')=(t+\beta,Rx+vt+a_0),\qquad R\in SO(3),$$
with the conventions of [[pthm-cm01-galilean-kinematics]]. At corresponding events, a scalar field $q$ (density $\rho$, pressure $p$ or enthalpy $h$) transforms by $q'\circ G=q$. Spatial vectors such as acceleration and force per unit mass transform by $a'\circ G=Ra$, $b'\circ G=Rb$, while velocity has the boost term $u'\circ G=Ru+v$. Normals transform by $n'=Rn$, traction by
$$t'(G(t,x),Rn)=R\,t(t,x,n),$$
and stress by $\sigma'\circ G=R\sigma R^{\mathsf T}$. Rotations preserve spatial volume and area. Spatial differentiation is at fixed frame time; these rules give $D_{x'}u'=R(D_xu)R^{\mathsf T}$, $\operatorname{div}_{x'}u'=\operatorname{div}_xu$ and $D_{t'}u'=R D_tu$ at corresponding events. Thus $t=\sigma n$ and the local mass and momentum equations have the same form, as do their volume and surface integral forms.

For a reference-label chart choose a fixed reference time $t_{\mathrm r}\in I$ and set $X'=RX+vt_{\mathrm r}+a_0$. This is a time-independent relabeling, with $B',O'$ the images of $B,O$, and
$$\chi'(t',X')=R\chi(t,X)+vt+a_0,\qquad t=t'-\beta.$$
A material scalar transforms by composition with the inverse label/time map; a material vector by that composition followed by $R$. In the linear elastic branch the stress-free comparison placement $X$ in $F$ transforms to the uniformly translating comparison placement $RX+vt+a_0$ in $F'$. Define displacement as the difference from this same comparison placement, so
$$\xi'(t',X')=R\xi(t,X),\qquad D_{X'}\xi'=R(D_X\xi)R^{\mathsf T},\qquad e'=ReR^{\mathsf T}.$$
Time derivatives here are at fixed labels. Consequently $\partial_{t'}^2\xi'=R\partial_t^2\xi$, while spatial velocity in the boosted description is $v+R\partial_t\xi$. The convention $u=\partial_t\xi$ applies in the chosen frame where the comparison placement is stationary. Constant isotropic elastic moduli and viscosity are scalars; the isotropic strain-stress law is carried to the same law by these rules. These are coordinate-reading rules, not a finite-strain approximation theorem or a new constitutive assumption.

## Remarks

- **No dynamical content.** Nothing above asserts that any body moves, that
  any mass, force or stress exists, or that any field of the list occurs in a
  model. The list fixes names, slots and dimensions for the postulates and
  theorems that follow, and the dimension computations are consistency
  conventions in the sense of [[def-cm01-units]], not physical laws.

- **Reference versus current placement.** The choice of $B$ and $O$ is
  bookkeeping for the labels. Every statement of this page is formulated for
  one chosen body data set and quantifies over its labels only through the
  motion; how the formulation is transported under relabeling is a
  convention of the model, is not used in any proof below, and is not
  asserted here. No physical meaning is attached to the coordinates $X$.

- **Model quantities versus measured quantities.** The fields introduced here
  are model quantities read in a frame. A measured mass, density or force is
  related to them only through an explicit measurement model and is not
  asserted by this definition; no empirical value is recorded on this page.
