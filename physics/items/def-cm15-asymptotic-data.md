---
id: def-cm15-asymptotic-data
kind: definition
title: "Scattering data of the central model class: the scattering motion, the
  impact parameter, the asymptotic directions, the deflection conventions and
  the uniform-incident preparation"
status: draft
origin: session
domain: physics
dependency_level: 15
deps:
  [
    post-cm05-central-model,
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
    thm-cauchy-schwarz-and-the-euclidean-norm,
    def-cross-product-in-r3,
    def-vector-valued-derivative-and-integral,
    def-vector-valued-functions-limits-and-continuity,
    def-countable-choice
  ]
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
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Assuming countable choice for preparation and cross-section
  measures, the physical reading of the scattering data of the page's restricted
  model class: the two-label central model of the central-model postulate, its
  reduced problem, the scattering motion of the relative coordinate on all of R,
  the energy and angular momentum carried by the motion, the asymptotic
  velocities, the impact parameter as an asymptotic perpendicular-distance
  limit, the polar advance and the deflection conventions, the adopted
  uniform-incident preparation and its flux and units, and the reading
  conventions that angles are defined from the relative-coordinate motion,
  together with the explicit exclusions and the status of the data as model
  data. The item fixes vocabulary and an adopted preparation model; it asserts
  no observation, no measured value, no law of nature and no counting of
  detected particles."
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin),
        §6.4, Eqs. (340)-(351): the impact parameter as the distance of closest
        approach in the absence of interaction, the center-of-mass scattering
        angle, the annular incident area and the two counter-propagating beams
        of identical particles"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics
        (title page last edited September 1, 2026), §3.5, Eqs. (3.66)-(3.72):
        the impact parameter, the scattering angle, the uniform incident beam
        and the caveat that the cross-section is a statistic of many incident
        particles"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the preparation and cross-section measures.

This item fixes the **scattering data** of the restricted model class of
[[post-cm05-central-model]] and the preparation conventions in which the
scattering statements of this page are phrased. All objects are model data;
nothing here is a measured value.

**(i) The scattering model.** A **central scattering model** is a model of
class (i) of [[post-cm05-central-model]] with $N=2$ labels, masses
$m_1,m_2>0$ ([[post-cm01-worldlines]] clause (v)), no external forces, and a
static central pair potential $u\in C^2(J_0)$
([[def-ck-euclidean-maps-and-diffeomorphisms]])
whose collision-excluded interval satisfies $(0,\infty)\subseteq J_0$, so
that the only forbidden configuration is the collision $r=0$. Its **reduced
problem** is the one-label problem of class (ii) with reduced mass
$\mu:=m_1m_2/(m_1+m_2)$ ([[def-cm01-units]]: $[\mu]=\mu$) and the same
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
[[lem-cm-oriented-orthonormal-triads]]). Call $r$ a **scattering motion** when it has a unique apsis $t_*$ with $\rho=|r|$ decreasing strictly before $t_*$, increasing strictly after it, $\rho(t)\to\infty$ as $t\to\pm\infty$, and the nonzero limits below exist with the stated speed, equal finite impact-distance limits and finite equal half-advances. These are defining conditions, not deductions for arbitrary $C^2$ potentials. The finite-range theorem requires $u=0$ beyond some $R$, $E,J>0$, a simple outer turning point $V(r_*)=E$, $V'(r_*)<0$, $V(r)<E$ for $r>r_*$, and a trajectory staying above and attaining $r_*$. The repulsive Coulomb theorem instead requires $u=\kappa/\rho$, $\kappa,E,J>0$ and a trajectory attaining its turning radius. Each theorem proves the defining conditions in its own scope. Its **energy** is the constant
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
is the trajectory restricted to times before its apsis. The **impact parameter** is the asymptotic perpendicular-distance limit
$$b:=\lim_{t\to-\infty}\frac{\lVert r(t)\times v_-\rVert_2}{\lVert v_-\rVert_2}=\lim_{t\to+\infty}\frac{\lVert r(t)\times v_+\rVert_2}{\lVert v_+\rVert_2}=\frac{J}{\mu v_\infty}>0.$$
Here the distance at each time is to the line through the origin in the limiting velocity direction, not to an exact affine trajectory line. For a finite-range potential, the sufficiently early incoming tail is a straight half-line whose affine extension has this distance; for Coulomb these are only limits, with no exact free tail or finite longitudinal intercept claimed. The dimension is $[b]=\ell$.

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
the incoming and outgoing velocity directions are oriented, so this is not the smaller unoriented angle between two lines;
the **signed velocity rotation** is the continuous rotation angle of
$r'(t)$, measured counterclockwise about $e_3$ relative to the incoming
direction, so that a positive value is a counterclockwise turn. The scattering
theorems give $\cos\theta_{\mathrm{s}}=\cos(\pi-2\Delta)$ and the signed
rotation $2\Delta-\pi$; in particular, when $0<\Delta<\pi/2$ the scattering
angle is
$$\theta_{\mathrm{s}}=\pi-2\Delta\in(0,\pi),$$
while outside that range $\theta_{\mathrm{s}}$ is the wrapped value $\arccos(\cos(\pi-2\Delta))$.
The **deflection map** at fixed model potential $u$, reduced mass $\mu$ and energy $E>0$ is the partial map $b\mapsto\theta_{\mathrm s}(b)$ on those $b>0$ for which a scattering motion exists and all such motions have the same angle. Its corresponding angular momentum magnitude varies as
$$J(b)=\mu b v_\infty=\sqrt{2\mu E}\,b.$$
Time translation and rotation of a motion do not change its angle. **Deflection branches** are $C^1$ branches of this partial map as defined in [[def-cm-scattering-data]].

**(iv) The uniform-incident preparation (adopted model datum).** The
**uniform-incident preparation** of a central scattering model with cutoff
$b_{\max}>0$ and flux $\Phi>0$ is the following adopted model of a scattering
experiment for the reduced problem: independent incident reduced labels with common energy $E>0$ and impact-azimuth probability measure
$$P(A)=\frac{\nu(A\cap D_{\max})}{\pi b_{\max}^2},\qquad D_{\max}=(0,b_{\max})\times(0,2\pi).$$
Its density is $b/(\pi b_{\max}^2)$, and its total mass is one since $\nu(D_{\max})=\pi b_{\max}^2$. Angular momentum magnitude is $J(b)=\sqrt{2\mu E}\,b$; its plane orientation may vary with azimuth. The **incident flux** $\Phi$ is the expected number of incident labels per unit area per unit time, with $[\Phi]=\ell^{-2}\tau^{-1}$ ([[def-cm01-units]]). The adopted total arrival rate is $\Phi\pi b_{\max}^2$, so for a Borel set $A\subseteq D_{\max}$ the expected incident rate is
$$\dot N(A)=\Phi\pi b_{\max}^2 P(A)=\Phi\nu(A).$$
Here $\nu$ is the incident area measure of [[def-cm-scattering-data]]. For a
specified deflection branch $\theta:(a_1,a_2)\to(\theta_1,\theta_2)$ and a
Borel scattering-angle window $Y\subseteq(\theta_1,\theta_2)$, the predicted
rate from that branch under this cutoff preparation is
$$\dot N_{\mathrm{br}}(Y):=\Phi\,\nu\!\left(\left\{(b,\varphi)\in D_{\max}:a_1<b<a_2,\ \theta(b)\in Y\right\}\right).$$
The preimage is Borel because $\theta$ is continuous on its branch. For a
finite family of branches with pairwise disjoint incident intervals, branch
rates add, including when their angular images overlap. Incidences outside
recorded scattering branches are not assigned an outgoing scattering angle
by this definition. The rate above integrates over the full impact-azimuth
range; it is a model prediction, not a detected count. Comparing it with data
requires a separately specified experiment, apparatus model, sampling model
and statistical analysis.

**(v) Reading conventions.** All angles and lengths above are data of the
**relative** problem: angles are computed from the relative coordinate
$r=x_1-x_2$ and its asymptotic velocities $v_\pm$, not from either label's
trajectory. The centre of mass $X$ and the reconstruction formulas
$x_1=X+\frac{m_2}{M}r$ and $x_2=X-\frac{m_1}{M}r$, with $M=m_1+m_2$, are
those of clause (i), [[def-cm03-centre-of-mass-and-momenta]] and
[[pthm-cm05-relative-reduction]] clause 4. They show that individual-label
directions generally differ from the relative direction and from each
other. "Target", "projectile" and "detector" are names for model components
and carry no empirical claim.

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
[[thm-cm-central-force-angular-momentum-conservation]]; the impact parameter is defined by its limiting distance, with existence and equality proved under the theorem-specific hypotheses; and the
preparation measure of clause (iv) is the measure $\nu$ of
[[def-cm-scattering-data]]. The arccosine of clause (iii) is defined because
the Cauchy-Schwarz inequality gives
$|\langle v_-,v_+\rangle|/(\lVert v_-\rVert_2\lVert v_+\rVert_2)\le1$
([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

**Mathematical status.** The vocabulary is attached to the adopted model
class of [[post-cm05-central-model]]; the existence of the limits, the
identities for $v_\infty$, $b$, $\Delta$ and $\theta_{\mathrm{s}}$, and the
form of the deflection map under explicit potential hypotheses are the
content of the mathematics and physics theorems of this page, not of this
definition.
