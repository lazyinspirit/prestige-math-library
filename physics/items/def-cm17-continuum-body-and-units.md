---
id: def-cm17-continuum-body-and-units
kind: definition
title: "Continuum body data, the fixed inertial frame and the dimensions of the fields"
status: draft
origin: session
domain: physics
dependency_level: 8
deps: [def-cm-material-region-and-density, post-cm01-frames, post-cm01-worldlines, post-cm01-spacetime, def-cm01-units, def-interval, def-cm-affine-time-space, pthm-cm01-galilean-kinematics, def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, thm-cm-local-mass-balance, thm-cm-local-momentum-balance, def-cm-linear-elastic-constitutive-law]
dependency_roles:
  thm-cm-local-mass-balance: mathematical-premise
  thm-cm-local-momentum-balance: mathematical-premise
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
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
and the full-motion branch concerns spatial fields on the current regions;
the linear elastic branch instead uses reference fields. The reference chart's
Euclidean structure fixes the derivatives of these reference fields. It does
not assign an intrinsic mass or force to a label.

**(c) Field slots and dimensions.** These slots are conditional data, not
assertions of physical existence. Whenever a motion is specified, use exactly
[[def-cm-continuum-motion]]: a $C^2$ map $\chi:I\times O\to\mathbb R^3$,
with each $\chi_t$ injective and $D_X\chi_t$ invertible, and
$\det D_X\chi_t>0$ on $I\times B$. Put $\Omega_t=\chi_t(B)$ and
$\mathcal U=\{(t,x):t\in I,\ x\in\chi_t(O)\}$, the open spacetime domain
of that supplier. Spatial fields below are defined on $\mathcal U$ or on a
stated open subdomain containing the current events of interest; additional
regularity is specified wherever needed. The dimensions use
[[def-cm01-units]].

1. **Density** is a scalar map $\rho:\mathcal U\to(0,\infty)$ of class
   $C^1$, read as mass per unit spatial volume, $[\rho]=\mu\ell^{-3}$.
2. **Spatial velocity** is the $C^1$ map $u:\mathcal U\to\mathbb R^3$
   defined by $u(t,\chi(t,X))=\partial_t\chi(t,X)$,
   $[u]=\ell\tau^{-1}$. For any $C^1$ scalar or vector field $f$ on this
   domain define $D_tf=\partial_tf+D_xf\,u$, componentwise for vectors,
   as in [[def-cm-euclidean-spatial-calculus]]. **Material acceleration**
   is the continuous map $a:=D_tu:\mathcal U\to\mathbb R^3$,
   $[a]=\ell\tau^{-2}$.
3. **Body force per unit mass** is a continuous map
   $b:\mathcal U\to\mathbb R^3$, $[b]=\ell\tau^{-2}$; its force per
   unit volume is $\rho b$, of dimension $\mu\ell^{-2}\tau^{-2}$.
4. With $S^2=\{n\in\mathbb R^3:\|n\|_2=1\}$, **traction** is a map
   $t:\mathcal U\times S^2\to\mathbb R^3$, read as force per unit area
   acting on the side opposite to the direction $n$. A **stress matrix**
   is a matrix field $\sigma:\mathcal U\to M_3(\mathbb R)$ representing
   it by $t(s,x,n)=\sigma(s,x)n$ when such a field exists; existence and
   regularity are separate hypotheses. Here
   $[t]=[\sigma]=\mu\ell^{-1}\tau^{-2}$ (SI $\mathrm{N\,m^{-2}}$).
5. **Displacement** relative to the stationary reference placement is
   $\xi:I\times O\to\mathbb R^3$, $\xi(t,X)=\chi(t,X)-X$,
   $[\xi]=\ell$; its **linear strain** is the symmetric matrix field
   $e=(D_X\xi+(D_X\xi)^{\mathsf T})/2$, of dimension $1$. A linearized
   branch may instead prescribe a displacement field with these same
   domain and strain conventions; identifying it with an exact motion
   requires the motion hypotheses above.
6. **Elastic moduli** $\lambda,\mu_s$ are real scalar model parameters;
   **pressure** is a scalar field $p:\mathcal U\to\mathbb R$ of class
   $C^1$, read as the coefficient in the isotropic stress $-pI_3$.
   Their dimension is $\mu\ell^{-1}\tau^{-2}$. **Dynamic viscosity**
   $\eta$ is a real scalar model parameter of dimension
   $\mu\ell^{-1}\tau^{-1}$ (SI $\mathrm{Pa\,s}$). Signs and constitutive
   uses of these parameters are specified by each branch.
7. **Wave speed** $c>0$ is a scalar parameter of a specified wave model,
   $[c]=\ell\tau^{-1}$; its construction from that model's parameters is
   stated in the relevant branch, rather than inferred from dimensions.

**(d) Frame and reference-label conventions.** Write a Galilean change as
$$G(t,x)=(t',x')=(t+\beta,Rx+vt+a_0),\qquad R\in SO(3),$$
with the conventions of [[pthm-cm01-galilean-kinematics]]. At corresponding events, a scalar field $q$ (for example, density $\rho$ or pressure $p$) transforms by $q'\circ G=q$. Spatial vectors such as acceleration and force per unit mass transform by $a'\circ G=Ra$, $b'\circ G=Rb$, while velocity has the boost term $u'\circ G=Ru+v$. Normals transform by $n'=Rn$, traction by
$$t'(G(t,x),Rn)=R\,t(t,x,n),$$
and stress by $\sigma'\circ G=R\sigma R^{\mathsf T}$. Rotations preserve spatial volume and area. Spatial differentiation is at fixed frame time; these rules give $D_{x'}u'=R(D_xu)R^{\mathsf T}$, $\operatorname{div}_{x'}u'=\operatorname{div}_xu$ and $D_{t'}u'=R D_tu$ at corresponding events. In particular, $\sigma'n'=R\sigma n$, so traction representation is preserved.

Here the **local mass and momentum equations** mean precisely
$$D_t\rho+\rho\operatorname{div}_xu=0,\qquad \rho D_tu=\rho b+g,\qquad g_i:=\sum_{j=1}^3\partial_{x_j}\sigma_{ij},$$
with $\rho,u,\sigma$ of class $C^1$ on a common open subdomain of $\mathcal U$ and $b$ continuous there, as in [[thm-cm-local-mass-balance]] and [[thm-cm-local-momentum-balance]]. These are equation templates, not adopted laws in this definition. The chain rule applied to $G^{-1}$ gives $(D_{t'}\rho')\circ G=D_t\rho$ and $g'\circ G=Rg$ (in the latter identity the sum over spatial indices uses $R^{\mathsf T}R=I_3$). Thus the mass residual is unchanged and the momentum residual is multiplied by $R$; each equation holds exactly when its transformed equation holds.

For the **integral forms**, use the exact setting of those two suppliers, including $\mathrm{AC}_\omega$: $J_0$ has compact closure in $I$, the common open field domain contains its swept closure, and $B_0\subseteq B$ is nonempty bounded open with $\overline{B_0}\subseteq B$. Write $V_t=\chi_t(B_0)$ for the moving region, and put
$$M(t):=\int_{V_t}\rho\,dx,\qquad P(t):=\int_{V_t}\rho u\,dx,\qquad \mathcal F(t):=\int_{V_t}\rho b\,dx+\int_{\partial V_t}\sigma\nu\,dS.$$
The volume integrals are Lebesgue integrals, componentwise for vectors; the force expression is used only when $V_t$ is a bounded $C^1$ domain, with outward unit normal $\nu$ and the surface integral of [[thm-cm-local-momentum-balance]]. The equations are $\dot M=0$ and $\dot P=\mathcal F$, on the respective admissible regions and times of the suppliers. At $t'=t+\beta$ the corresponding region is $RV_t+vt+a_0$. Volume and surface measure preservation and $\nu'=R\nu$ give $M'(t')=M(t)$, $P'(t')=RP(t)+vM(t)$ and $\mathcal F'(t')=R\mathcal F(t)$, where primes here label the transformed quantities. Consequently $dP'/dt'=R\dot P+v\dot M$: the integral momentum equation retains its form together with mass conservation. No covariance of momentum alone without the mass premise is asserted.

For a reference-label chart choose a fixed reference time $t_{\mathrm r}\in I$ and set $X'=RX+vt_{\mathrm r}+a_0$. This is a time-independent relabeling, with $B',O'$ the images of $B,O$, and
$$\chi'(t',X')=R\chi(t,X)+vt+a_0,\qquad t=t'-\beta.$$
A material scalar transforms by composition with the inverse label/time map; a material vector by that composition followed by $R$. In the linear elastic branch the stress-free comparison placement $X$ in $F$ transforms to the uniformly translating comparison placement $RX+vt+a_0$ in $F'$. Define displacement as the difference from this same comparison placement, so
$$\xi'(t',X')=R\xi(t,X),\qquad D_{X'}\xi'=R(D_X\xi)R^{\mathsf T},\qquad e'=ReR^{\mathsf T}.$$
Time derivatives here are at fixed labels. Consequently $\partial_{t'}^2\xi'=R\partial_t^2\xi$, while the label's coordinate velocity in the boosted description is $v+R\partial_t\xi$. In the stationary comparison frame its coordinate velocity is $\partial_t\xi$; for a finite motion the spatial velocity is related by $u(t,\chi(t,X))=\partial_t\xi(t,X)$. Constant isotropic elastic moduli and viscosity are scalars. Precisely, the **isotropic strain-stress law** of [[def-cm-linear-elastic-constitutive-law]], applied at each time to a $C^2$ reference displacement, is $\sigma_{\mathrm{ref}}=\lambda(\operatorname{tr}e)I_3+2\mu_s e$ with constant $\mu_s>0$ and $\lambda+2\mu_s/3>0$. Since $\operatorname{tr}(ReR^{\mathsf T})=\operatorname{tr}e$ and $RI_3R^{\mathsf T}=I_3$, its rotated stress is $R\sigma_{\mathrm{ref}}R^{\mathsf T}=\lambda(\operatorname{tr}e')I_3+2\mu_s e'$. Thus it retains its form. These are conditional coordinate-reading rules, not a finite-strain approximation theorem or a new constitutive assumption.

## Remarks

- **No dynamical content.** Nothing above asserts that any body moves, that
  any mass, force or stress exists, or that any field of the list occurs in a
  model. The list fixes names, slots and dimensions for the postulates and
  theorems that follow, and the dimension computations are consistency
  conventions in the sense of [[def-cm01-units]], not physical laws.

- **Reference versus current placement.** The choice of $B$ and $O$ is
  bookkeeping for the labels. The full-motion and reference-field branches
  use their respective domains above. Clause (d) specifies the affine
  relabeling convention and the conditional transformation calculations;
  it does not identify a reference strain with a finite-strain observable.

- **Model quantities versus measured quantities.** The fields introduced here
  are model quantities read in a frame. A measured mass, density or force is
  related to them only through an explicit measurement model and is not
  asserted by this definition; no empirical value is recorded on this page.
