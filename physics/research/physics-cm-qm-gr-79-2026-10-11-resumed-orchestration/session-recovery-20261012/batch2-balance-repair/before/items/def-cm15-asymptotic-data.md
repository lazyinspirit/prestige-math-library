---
id: def-cm15-asymptotic-data
kind: definition
title: "Scattering data of the central model class: the scattering motion, the impact parameter, the asymptotic directions, the deflection conventions and the uniform-incident preparation"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm05-central-model,
       pthm-cm05-relative-reduction,
       def-cm-scattering-data,
       def-cm-central-force-trajectory,
       thm-cm-central-force-angular-momentum-conservation,
       thm-cm-central-force-polar-reduction,
       lem-cm-oriented-orthonormal-triads,
       post-cm01-worldlines,
       def-cm01-units,
       def-cm01-configuration,
       def-cm03-centre-of-mass-and-momenta,
       def-interval,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-euclidean-inner-product,
       def-cross-product-in-r3,
       def-vector-valued-derivative-and-integral,
       def-vector-valued-functions-limits-and-continuity]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  pthm-cm05-relative-reduction: formulation-prerequisite
  def-cm-scattering-data: mathematical-premise
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-central-force-angular-momentum-conservation: mathematical-premise
  thm-cm-central-force-polar-reduction: mathematical-premise
  lem-cm-oriented-orthonormal-triads: mathematical-premise
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-interval: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The physical reading of the scattering data of the page's restricted model class: the two-label central model of the central-model postulate, its reduced problem, the scattering motion of the relative coordinate on all of R, the energy and angular momentum carried by the motion, the asymptotic velocities, the impact parameter as the perpendicular distance of the incoming branch, the polar advance and the deflection conventions, the adopted uniform-incident preparation and its flux and units, and the reading conventions (angles are relative-frame angles) together with the explicit exclusions and the status of the data as model data. The item fixes vocabulary and an adopted preparation model; it asserts no observation, no measured value, no law of nature and no counting of detected particles."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (340)-(351): the impact parameter as the distance of closest approach in the absence of interaction, the center-of-mass scattering angle, the annular incident area and the two counter-propagating beams of identical particles"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.5, Eqs. (3.66)-(3.72): the impact parameter, the scattering angle, the uniform incident beam and the caveat that the cross-section is a statistic of many incident particles"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

This item fixes the **scattering data** of the restricted model class of
[[post-cm05-central-model]] and the preparation conventions in which the
scattering statements of this page are phrased. All objects are model data;
nothing here is a measured value.

**(i) The scattering model.** A **central scattering model** is a model of
class (i) of [[post-cm05-central-model]] with $N=2$ labels, masses
$m_1,m_2>0$ ([[post-cm01-worldlines]] clause (v)), no external forces, and a
static central pair potential $u\in C^2(J_0)$
([[def-cm-scattering-data]], [[def-ck-euclidean-maps-and-diffeomorphisms]])
whose collision-excluded interval satisfies $(0,\infty)\subseteq J_0$, so
that the only forbidden configuration is the collision $r=0$. Its **reduced
problem** is the one-label problem of class (ii) with reduced mass
$\mu:=m_1m_2/(m_1+m_2)$ ([[def-cm01-units]]: $[\mu]=\mathsf M$) and the same
potential, presented through the relative coordinate $r=x_1-x_2$; by
[[pthm-cm05-relative-reduction]] the relative coordinate of every motion of
the model is a central-force trajectory for $(\mu,u)$ and every pair of an
affine centre-of-mass motion and a solution of the reduced equation on a
common interval reconstructs a motion of the model.

**(ii) Scattering motions and their data.** Let $r:\mathbb R\to\mathbb R^3$
be a central-force trajectory for $(\mu,u)$ defined on all of $\mathbb R$
with values $|r(t)|\in J_0$ and with constant angular momentum
$j=\mu\,r\times r'=Je_3\ne0$ for $J>0$ and an oriented orthonormal triad
$(e_1,e_2,e_3)$ ([[def-cm-central-force-trajectory]],
[[thm-cm-central-force-angular-momentum-conservation]],
[[thm-cm-central-force-polar-reduction]],
[[lem-cm-oriented-orthonormal-triads]]). Call $r$ a **scattering motion** of
the model when it satisfies the hypotheses under which the page's scattering
theorems establish the limits below. Its **energy** is the constant
$$E:=\tfrac12\mu\lVert r'\rVert_2^2+u(\lvert r\rvert)>0$$
of [[def-cm-central-force-trajectory]] (constant by
[[thm-cm-central-force-polar-reduction]] clause 4), its **asymptotic
velocities** are the limits
$$v_-:=\lim_{t\to-\infty}r'(t),\qquad v_+:=\lim_{t\to+\infty}r'(t),$$
taken in the sense of [[def-vector-valued-functions-limits-and-continuity]]
(their existence under the hypotheses is a theorem, not a convention), and
its **scattering speed** is
$$v_\infty:=\lVert v_-\rVert_2=\lVert v_+\rVert_2=\sqrt{2E/\mu},$$
the equality being part of the scattering theorems. The **incoming branch**
is the trajectory restricted to times before its apsis; the **impact
parameter** is the perpendicular distance from the force centre of the line
through the incoming branch, defined by
$$b:=\frac{\lVert r(t)\times v_-\rVert_2}{\lVert v_-\rVert_2} \qquad(t\ \text{on the incoming branch}),$$
with $\times$ the cross product of [[def-cross-product-in-r3]] and the
Euclidean norm of [[def-euclidean-inner-product]]; the value is independent
of $t$ because $r\times r'=j/\mu$ is constant, and the scattering theorems
identify it with the geometric distance, giving $b=J/(\mu v_\infty)$. Its
dimension is $[b]=\ell$.

**(iii) Polar advance and deflection conventions.** Fix polar data
$(\rho,\theta)$ of the scattering motion in the triad, $r=\rho\,n(\theta)$,
$n(\varphi):=\cos\varphi\,e_1+\sin\varphi\,e_2$
([[thm-cm-central-force-polar-reduction]]), and let $t_*$ be an apsis time,
$|r(t_*)|=\min_t|r(t)|$. The **polar advance of one half** is
$$\Delta:=\theta(+\infty)-\theta(t_*)=\theta(t_*)-\theta(-\infty),$$
defined by the limits asserted in the scattering theorems, and the
**polar advance of the motion** is $2\Delta$. The **scattering angle** is the
undirected angle between the asymptotic velocity directions,
$$\theta_{\mathrm{s}}:=\arccos\!\left(\frac{\langle v_-,v_+\rangle}{\lVert v_-\rVert_2\,\lVert v_+\rVert_2}\right)\in[0,\pi],$$
equivalently the angle between the incoming and outgoing asymptote lines;
the **signed velocity rotation** is the continuous rotation angle of
$r'(t)$, measured counterclockwise about $e_3$ relative to the incoming
direction, so that a positive value is a counterclockwise turn. The scattering
theorems give $\cos\theta_{\mathrm{s}}=\cos(\pi-2\Delta)$ and the signed
rotation $2\Delta-\pi$; in particular, when $0<\Delta<\pi/2$ the scattering
angle is
$$\theta_{\mathrm{s}}=\pi-2\Delta\in(0,\pi),$$
while for $\Delta\ge\pi/2$ the motion has wrapped past the backward direction
and $\theta_{\mathrm{s}}$ is the wrapped value $\arccos(\cos(\pi-2\Delta))$.
The **deflection map** of a scattering model is the partial map
$b\mapsto\theta_{\mathrm{s}}(b)$ carrying the impact parameter of each
scattering motion that satisfies the hypotheses to its scattering angle;
the scattering theorems of the page determine its values on the hypotheses
they state, and **deflection branches** of it are the $C^1$ branches of
[[def-cm-scattering-data]].

**(iv) The uniform-incident preparation (adopted model datum).** The
**uniform-incident preparation** of a central scattering model with cutoff
$b_{\max}>0$ and flux $\Phi>0$ is the following adopted model of a scattering
experiment for the reduced problem: independent incident reduced labels, each
with energy $E>0$, angular momentum $Je_3$ and impact-azimuth pair
distributed with density $b\,\mathrm db\,\mathrm d\varphi$ on
$(0,b_{\max})\times(0,2\pi)$ normalised to unit total mass, where the
**incident flux** $\Phi$ is the number of incident labels per unit area per
unit time and $[\Phi]=\ell^{-2}\tau^{-1}$ ([[def-cm01-units]]). Under this
preparation the model predicts the expected rate
$$\dot N(A)= \Phi\cdot\nu(A)$$
of incident labels whose impact-azimuth pair lies in $A$, where $\nu$ is the
incident flux measure of [[def-cm-scattering-data]]; the rate of scattered
labels into a solid-angle set is the flux times the pushforward of $\nu$ under
the deflection map, whose density on a branch is the cross-section density
introduced in this page's cross-section definition. This is a predicted model
quantity: it reports no
detection, and its comparison with data requires a separately specified
experiment, apparatus model and statistical analysis.

**(v) Reading conventions.** All angles and lengths above are data of the
**relative** problem, equivalently of the centre-of-mass frame of the
two-label model: the relative coordinate $r$ and the centre of mass $X$ are
those of clause (i) and [[def-cm03-centre-of-mass-and-momenta]]. The
individual labels move along $x_1=X+\frac{m_2}{M}r$ and
$x_2=X-\frac{m_1}{M}r$ with $M=m_1+m_2$
([[pthm-cm05-relative-reduction]] clause 4), so their directions relative to
the centre of mass differ from $r$ by the mass factors and generally differ
from each other; an angle of the reduced problem is not, without further
computation, an angle of either label with respect to a laboratory frame.
"Target", "projectile" and "detector" are names for model components and
carry no empirical claim.

**(vi) Exclusions and status.** The class excludes velocity- or
time-dependent, non-central and non-potential forces; constraints and
reaction forces; collisions $r=0$; external forces; and models with more than
two labels, exactly as in [[post-cm05-central-model]] clause (v). The
preparation of clause (iv) is one adopted idealisation among many; the
scattering theorems state separately which potentials, energies and angular
momenta produce the data of clauses (ii)-(iii). The quantities $\mu$, $u$
(with any parameters it carries), $E$, $J$, $b$, $b_{\max}$, $\Phi$ are model
data; quantitative empirical use requires separately stated measured inputs
with uncertainties, and no statement of this page asserts that any physical
system is exactly a central scattering model or that any beam is exactly
uniform.

**Why the objects are defined.** The relative coordinate is a central-force
trajectory by the cited reduction theorem; the attached energy and angular
momentum are defined by [[def-cm-central-force-trajectory]] and are constant
on the trajectory by [[thm-cm-central-force-polar-reduction]] clause 4 and
[[thm-cm-central-force-angular-momentum-conservation]]; the impact parameter
is $t$-independent because $r\times r'=j/\mu$ is constant; and the
preparation measure of clause (iv) is the measure $\nu$ of
[[def-cm-scattering-data]]. The arccosine of clause (iii) is defined because
the Cauchy-Schwarz inequality gives
$|\langle v_-,v_+\rangle|/(\lVert v_-\rVert_2\lVert v_+\rVert_2)\le1$
([[def-euclidean-inner-product]]).

**Mathematical status.** The vocabulary is attached to the adopted model
class of [[post-cm05-central-model]]; the existence of the limits, the
identities for $v_\infty$, $b$, $\Delta$ and $\theta_{\mathrm{s}}$, and the
form of the deflection map under explicit potential hypotheses are the
content of the mathematics and physics theorems of this page, not of this
definition.
